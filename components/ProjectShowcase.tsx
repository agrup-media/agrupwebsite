"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { showcaseProjects, type ShowcaseProject } from "@/lib/projects";

type SupportedLanguage = "de" | "en";

function getWrappedIndex(index: number, length: number) {
  return (index + length) % length;
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function getStoredLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "de";
  return window.localStorage.getItem("agrup-language") === "en" ? "en" : "de";
}

function localizeProject(project: ShowcaseProject, language: SupportedLanguage): ShowcaseProject {
  const translation = language === "en" ? project.translations?.en : undefined;

  if (!translation) return project;

  return {
    ...project,
    subtitle: translation.subtitle,
    timeline: translation.timeline ?? project.timeline
  };
}

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [timelineMounted, setTimelineMounted] = useState(false);
  const [timelineClosing, setTimelineClosing] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(-1);
  const [timelineComplete, setTimelineComplete] = useState(false);
  const [language, setLanguage] = useState<SupportedLanguage>("de");
  const shouldScrollTimelineRef = useRef(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const timelineListRef = useRef<HTMLOListElement | null>(null);
  const timelineItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const timelineProgressRef = useRef(0);
  const timelineTargetProgressRef = useRef(0);
  const timelineAnimationFrameRef = useRef(0);
  const timelineLastFrameTimeRef = useRef(0);
  const activeTimelineIndexRef = useRef(-1);
  const timelineCompleteRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const scrollBoostRef = useRef(1);
  const projects = showcaseProjects;
  const hasMultipleProjects = projects.length > 1;
  const activeProject = projects[activeIndex] ? localizeProject(projects[activeIndex], language) : undefined;
  const timelineLength = activeProject?.timeline?.length ?? 0;
  const copy = language === "en"
    ? {
        eyebrow: "Our projects",
        title: "Completed client projects.",
        references: "Project references",
        viewProject: (title: string) => `View ${title}`,
        previewAlt: (title: string) => `Website preview of ${title}`,
        timeline: "Project timeline",
        timelineIntro: "From the first concept to the published website - including photo shoot, domain, hosting and business cards.",
        changeProject: "Change project",
        previous: "Previous project",
        next: "Next project"
      }
    : {
        eyebrow: "Unsere Projekte",
        title: "Abgeschlossene Kundenprojekte.",
        references: "Projekt Referenzen",
        viewProject: (title: string) => `${title} ansehen`,
        previewAlt: (title: string) => `Website Preview von ${title}`,
        timeline: "Projektablauf",
        timelineIntro: "Vom ersten Konzept bis zur veröffentlichten Webseite - inklusive Fotoshooting, Domain, Hosting und Visitenkarten.",
        changeProject: "Projekt wechseln",
        previous: "Vorheriges Projekt",
        next: "Nächstes Projekt"
      };

  const sideCards = useMemo(() => {
    if (!activeProject) return [];

    if (!hasMultipleProjects) {
      return [
        { project: activeProject, position: "left", ghost: true },
        { project: activeProject, position: "right", ghost: true }
      ] as const;
    }

    return [
      { project: localizeProject(projects[getWrappedIndex(activeIndex - 1, projects.length)], language), position: "left", ghost: false },
      { project: localizeProject(projects[getWrappedIndex(activeIndex + 1, projects.length)], language), position: "right", ghost: false }
    ] as const;
  }, [activeIndex, activeProject, hasMultipleProjects, language, projects]);

  function showPrevious() {
    setTimelineOpen(false);
    setActiveTimelineIndex(-1);
    setActiveIndex((current) => getWrappedIndex(current - 1, projects.length));
  }

  function showNext() {
    setTimelineOpen(false);
    setActiveTimelineIndex(-1);
    setActiveIndex((current) => getWrappedIndex(current + 1, projects.length));
  }

  function toggleTimeline() {
    if (timelineOpen) {
      setTimelineOpen(false);
      setTimelineClosing(true);
      setActiveTimelineIndex(-1);
      setTimelineComplete(false);
      activeTimelineIndexRef.current = -1;
      timelineCompleteRef.current = false;
      timelineProgressRef.current = 0;
      timelineTargetProgressRef.current = 0;
      timelineLastFrameTimeRef.current = 0;
      scrollBoostRef.current = 1;
      timelineRef.current?.style.setProperty("--timeline-progress", "0");

      if (timelineAnimationFrameRef.current) {
        window.cancelAnimationFrame(timelineAnimationFrameRef.current);
        timelineAnimationFrameRef.current = 0;
      }

      window.setTimeout(() => {
        setTimelineMounted(false);
        setTimelineClosing(false);
      }, 420);

      return;
    }

    setTimelineMounted(true);
    setTimelineClosing(false);
    setTimelineOpen(true);
    lastScrollYRef.current = window.scrollY;
    lastScrollTimeRef.current = performance.now();
    scrollBoostRef.current = 1;
    shouldScrollTimelineRef.current = true;
  }

  useEffect(() => {
    if (!timelineOpen || !shouldScrollTimelineRef.current) return;

    shouldScrollTimelineRef.current = false;
    const scrollTimer = window.setTimeout(() => {
      const firstTimelineItem = document.querySelector<HTMLElement>("#project-timeline .project-timeline-item");
      if (!firstTimelineItem) return;

      firstTimelineItem.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 120);

    return () => window.clearTimeout(scrollTimer);
  }, [timelineOpen]);

  const animateTimelineProgress = useCallback(function animateTimelineProgressFrame(timestamp: number) {
    const timeline = timelineRef.current;
    const list = timelineListRef.current;

    if (!timeline || !list) {
      timelineAnimationFrameRef.current = 0;
      return;
    }

    const listRect = list.getBoundingClientRect();
    const listHeight = Math.max(listRect.height, 1);
    const previousTimestamp = timelineLastFrameTimeRef.current || timestamp;
    const deltaSeconds = Math.min((timestamp - previousTimestamp) / 1000, 0.05);
    const basePixelSpeed = window.innerWidth <= 768 ? 360 : 460;
    scrollBoostRef.current += (1 - scrollBoostRef.current) * 0.08;
    const pixelSpeed = basePixelSpeed * scrollBoostRef.current;
    const step = (pixelSpeed * deltaSeconds) / listHeight;
    const targetProgress = timelineTargetProgressRef.current;
    const nextProgress = Math.min(targetProgress, timelineProgressRef.current + step);

    timelineLastFrameTimeRef.current = timestamp;
    timelineProgressRef.current = Math.max(timelineProgressRef.current, nextProgress);
    timeline.style.setProperty("--timeline-progress", timelineProgressRef.current.toFixed(4));

    const dotY = timelineProgressRef.current * listHeight;

    let nextActiveIndex = -1;
    timelineItemsRef.current.forEach((item, index) => {
      const marker = item?.querySelector<HTMLElement>(".project-timeline-marker");
      if (!marker) return;

      const markerRect = marker.getBoundingClientRect();
      const markerCenter = markerRect.top + markerRect.height / 2 - listRect.top;

      if (markerCenter <= dotY + 1) {
        nextActiveIndex = index;
      }
    });

    if (nextActiveIndex > activeTimelineIndexRef.current) {
      activeTimelineIndexRef.current = nextActiveIndex;
      setActiveTimelineIndex(nextActiveIndex);
    }

    const isComplete = nextActiveIndex >= timelineLength - 1 && timelineProgressRef.current >= targetProgress - 0.001;
    if (isComplete !== timelineCompleteRef.current) {
      timelineCompleteRef.current = isComplete;
      setTimelineComplete(isComplete);
    }

    if (timelineProgressRef.current < targetProgress) {
      timelineAnimationFrameRef.current = window.requestAnimationFrame(animateTimelineProgressFrame);
      return;
    }

    timelineAnimationFrameRef.current = 0;
  }, [timelineLength]);

  const updateTimelineProgress = useCallback(() => {
    const timeline = timelineRef.current;
    const list = timelineListRef.current;
    if (!timeline || !list) return;

    const listRect = list.getBoundingClientRect();
    const listHeight = Math.max(listRect.height, 1);
    const revealLine = window.innerHeight * 0.92;
    let nextTargetProgress = timelineTargetProgressRef.current;
    const now = performance.now();
    const scrollDelta = Math.max(window.scrollY - lastScrollYRef.current, 0);
    const timeDelta = Math.max(now - lastScrollTimeRef.current, 16);
    const scrollVelocity = scrollDelta / timeDelta;
    const nextBoost = 1 + Math.min(scrollVelocity / 3.2, 0.45);

    scrollBoostRef.current = Math.max(scrollBoostRef.current, nextBoost);
    lastScrollYRef.current = window.scrollY;
    lastScrollTimeRef.current = now;

    timelineItemsRef.current.forEach((item) => {
      if (!item) return;

      const rect = item.getBoundingClientRect();
      const marker = item.querySelector<HTMLElement>(".project-timeline-marker");
      const markerRect = marker?.getBoundingClientRect();
      const isVisibleEnough = rect.top <= revealLine && rect.bottom >= window.innerHeight * 0.08;

      if (isVisibleEnough && markerRect) {
        const markerCenter = markerRect.top + markerRect.height / 2;
        const markerProgress = clamp((markerCenter - listRect.top) / listHeight);
        nextTargetProgress = Math.max(nextTargetProgress, markerProgress);
      }
    });

    timelineTargetProgressRef.current = Math.max(timelineTargetProgressRef.current, nextTargetProgress);

    if (!timelineAnimationFrameRef.current) {
      if (timelineCompleteRef.current) {
        timelineCompleteRef.current = false;
        setTimelineComplete(false);
      }
      timelineLastFrameTimeRef.current = 0;
      timelineAnimationFrameRef.current = window.requestAnimationFrame(animateTimelineProgress);
    }
  }, [animateTimelineProgress]);

  useEffect(() => {
    const initialLanguageTimer = window.setTimeout(() => {
      setLanguage(getStoredLanguage());
    }, 0);

    function handleLanguageChange(event: Event) {
      const nextLanguage = event instanceof CustomEvent && event.detail?.language === "en" ? "en" : getStoredLanguage();
      setLanguage(nextLanguage);
    }

    window.addEventListener("agrup:language-change", handleLanguageChange);
    window.addEventListener("storage", handleLanguageChange);

    return () => {
      window.clearTimeout(initialLanguageTimer);
      window.removeEventListener("agrup:language-change", handleLanguageChange);
      window.removeEventListener("storage", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
 	if (!timelineOpen) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeline = timelineRef.current;

    if (reduceMotion) {
      timeline?.style.setProperty("--timeline-progress", "1");
      const reduceMotionTimer = window.setTimeout(() => {
        setActiveTimelineIndex(timelineLength - 1);
        setTimelineComplete(true);
      }, 0);

      return () => window.clearTimeout(reduceMotionTimer);
    }

    let frame = 0;
    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateTimelineProgress();
      });
    };

    const initialTimer = window.setTimeout(requestUpdate, 160);
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.clearTimeout(initialTimer);
      if (timelineAnimationFrameRef.current) {
        window.cancelAnimationFrame(timelineAnimationFrameRef.current);
        timelineAnimationFrameRef.current = 0;
      }
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [timelineOpen, timelineLength, updateTimelineProgress]);

  if (!activeProject) {
    return null;
  }

  return (
    <section className="project-showcase section" aria-labelledby="project-showcase-title">
      <div className="container">
        <div className="project-showcase-head">
          <div className="label">{copy.eyebrow}</div>
          <h2 id="project-showcase-title">{copy.title}</h2>
        </div>

        <div className="project-coverflow" aria-label={copy.references}>
          {sideCards.map(({ project, position, ghost }) => (
            <div
              className={`project-coverflow-card is-${position}${ghost ? " is-ghost" : ""}`}
              aria-hidden="true"
              key={`${position}-${project.title}`}
            >
              <Image src={project.image} alt="" width={900} height={516} sizes="34vw" />
            </div>
          ))}

          <div className="project-coverflow-card is-active">
            <a
              className="project-card-media-link"
              href={activeProject.url}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.viewProject(activeProject.title)}
            >
              <span className="project-browser-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <Image
                src={activeProject.image}
                alt={copy.previewAlt(activeProject.title)}
                width={1200}
                height={688}
                sizes="(max-width: 768px) 88vw, 58vw"
                priority={false}
              />
            </a>
            <span className="project-card-caption">
              <a
                className="project-card-title-link"
                href={activeProject.url}
                target="_blank"
                rel="noreferrer"
                aria-label={copy.viewProject(activeProject.title)}
              >
                <strong>{activeProject.title}</strong>
                <span className="project-card-meta">{activeProject.subtitle}</span>
              </a>
              {activeProject.timeline?.length ? (
                <button
                  className="project-timeline-toggle"
                  type="button"
                  aria-controls="project-timeline"
                  aria-expanded={timelineOpen}
                  onClick={toggleTimeline}
                >
                  {copy.timeline}
                  <span aria-hidden="true">{timelineOpen ? "−" : "▾"}</span>
                </button>
              ) : null}
            </span>
          </div>
        </div>

        {hasMultipleProjects ? (
          <div className="project-showcase-controls" aria-label={copy.changeProject}>
            <button type="button" onClick={showPrevious} aria-label={copy.previous}>
              ‹
            </button>
            <div className="project-showcase-dots" aria-hidden="true">
              {projects.map((project, index) => (
                <span className={index === activeIndex ? "is-active" : ""} key={project.title} />
              ))}
            </div>
            <button type="button" onClick={showNext} aria-label={copy.next}>
              ›
            </button>
          </div>
        ) : null}

        {activeProject.timeline?.length && timelineMounted ? (
          <div
            className={`project-timeline is-scroll-driven${timelineComplete ? " is-complete" : ""}${
              timelineClosing ? " is-closing" : ""
            }`}
            id="project-timeline"
            aria-labelledby="project-timeline-title"
            ref={timelineRef}
          >
            <div className="project-timeline-head">
              <h3 id="project-timeline-title">{copy.timeline}</h3>
              <p>{copy.timelineIntro}</p>
            </div>
            <ol className="project-timeline-list" ref={timelineListRef}>
              {activeProject.timeline.map((item, index) => (
                <li
                  className={`project-timeline-item${index <= activeTimelineIndex ? " is-active" : ""}${
                    index === activeTimelineIndex ? " is-current" : ""
                  }`}
                  key={`${item.label}-${item.title}`}
                  ref={(node) => {
                    timelineItemsRef.current[index] = node;
                  }}
                >
                  <span className="project-timeline-marker" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <article className="project-timeline-card">
                    <span>{item.label}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
    </section>
  );
}
