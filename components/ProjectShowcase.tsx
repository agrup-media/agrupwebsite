"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { showcaseProjects } from "@/lib/projects";

function getWrappedIndex(index: number, length: number) {
  return (index + length) % length;
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(-1);
  const shouldScrollTimelineRef = useRef(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const timelineListRef = useRef<HTMLOListElement | null>(null);
  const timelineItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const projects = showcaseProjects;
  const hasMultipleProjects = projects.length > 1;
  const activeProject = projects[activeIndex];
  const timelineLength = activeProject?.timeline?.length ?? 0;

  const sideCards = useMemo(() => {
    if (!activeProject) return [];

    if (!hasMultipleProjects) {
      return [
        { project: activeProject, position: "left", ghost: true },
        { project: activeProject, position: "right", ghost: true }
      ] as const;
    }

    return [
      { project: projects[getWrappedIndex(activeIndex - 1, projects.length)], position: "left", ghost: false },
      { project: projects[getWrappedIndex(activeIndex + 1, projects.length)], position: "right", ghost: false }
    ] as const;
  }, [activeIndex, activeProject, hasMultipleProjects, projects]);

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
    setTimelineOpen((open) => {
      shouldScrollTimelineRef.current = !open;
      return !open;
    });
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

  const updateTimelineProgress = useCallback(() => {
    const timeline = timelineRef.current;
    const list = timelineListRef.current;
    if (!timeline || !list) return;

    const listRect = list.getBoundingClientRect();
    const activationLine = window.innerHeight * 0.54;
    const progress = clamp((activationLine - listRect.top) / Math.max(listRect.height, 1));
    timeline.style.setProperty("--timeline-progress", progress.toFixed(4));

    let nextActiveIndex = -1;
    timelineItemsRef.current.forEach((item, index) => {
      if (!item) return;
      const rect = item.getBoundingClientRect();
      if (rect.top + rect.height / 2 <= activationLine) {
        nextActiveIndex = index;
      }
    });

    setActiveTimelineIndex((current) => Math.max(current, nextActiveIndex));
  }, []);

  useEffect(() => {
    setActiveTimelineIndex(-1);
    timelineItemsRef.current = [];
  }, [activeIndex]);

  useEffect(() => {
    if (!timelineOpen) {
      setActiveTimelineIndex(-1);
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeline = timelineRef.current;

    if (reduceMotion) {
      timeline?.style.setProperty("--timeline-progress", "1");
      setActiveTimelineIndex(timelineLength - 1);
      return;
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
          <div className="label">Unsere Projekte</div>
          <h2 id="project-showcase-title">Abgeschlossene Kundenprojekte.</h2>
        </div>

        <div className="project-coverflow" aria-label="Projekt Referenzen">
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
              aria-label={`${activeProject.title} ansehen`}
            >
              <span className="project-browser-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <Image
                src={activeProject.image}
                alt={`Website Preview von ${activeProject.title}`}
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
                aria-label={`${activeProject.title} ansehen`}
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
                  Projektablauf
                  <span aria-hidden="true">{timelineOpen ? "−" : "▾"}</span>
                </button>
              ) : null}
            </span>
          </div>
        </div>

        {hasMultipleProjects ? (
          <div className="project-showcase-controls" aria-label="Projekt wechseln">
            <button type="button" onClick={showPrevious} aria-label="Vorheriges Projekt">
              ‹
            </button>
            <div className="project-showcase-dots" aria-hidden="true">
              {projects.map((project, index) => (
                <span className={index === activeIndex ? "is-active" : ""} key={project.title} />
              ))}
            </div>
            <button type="button" onClick={showNext} aria-label="Nächstes Projekt">
              ›
            </button>
          </div>
        ) : null}

        {activeProject.timeline?.length && timelineOpen ? (
          <div
            className="project-timeline is-scroll-driven"
            id="project-timeline"
            aria-labelledby="project-timeline-title"
            ref={timelineRef}
          >
            <div className="project-timeline-head">
              <h3 id="project-timeline-title">Projektablauf</h3>
              <p>Vom ersten Konzept bis zur veröffentlichten Webseite - inklusive Fotoshooting, Domain, Hosting und Visitenkarten.</p>
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
