(function () {
  const routeChangeEvent = "agrup:route-change";

  const podcastEpisodes = [
    {
      episode: "Folge 3",
      title: "Gehört Kriminalität inzwischen zur Tagesordnung?",
      date: "2026-06-07",
      thumbnail: "/assets/podcast/inside-agrup-folge-3.png",
      alt: "Thumbnail von Inside AgRup Folge 3: Gehört Kriminalität inzwischen zur Tagesordnung?",
      description:
        "Ein aktuelles Ereignis aus unserer Stadt ist der Anlass für ein ehrliches Gespräch über Kriminalität, Sicherheit und das Gefühl, wie geschützt man sich im Alltag wirklich fühlt."
    },
    {
      episode: "Folge 2",
      title: "Sind wir bald alle Kryptomillionäre?",
      date: "2026-05-31",
      thumbnail: "/assets/podcast/inside-agrup-folge-2.png",
      alt: "Thumbnail von Inside AgRup Folge 2: Sind wir bald alle Kryptomillionäre?",
      description:
        "Krypto, Aktien, ETFs und die Frage, wie viel Hype wirklich dahintersteckt. Wir sprechen über unsere eigenen Erfahrungen, unsere Meinung zum Investieren und darüber, warum finanzielle Freiheit mehr braucht als schnelle Versprechen."
    },
    {
      episode: "Folge 1",
      title: "Das Dilemma um Social Media",
      date: "2026-05-24",
      thumbnail: "/assets/podcast/inside-agrup-folge-1.png",
      alt: "Thumbnail von Inside AgRup Folge 1: Das Dilemma um Social Media",
      description:
        "Social Media schafft Chancen, lenkt aber auch ab. In dieser Folge sprechen wir über Fokus, Selbstbild, Erfolg und warum Social Media trotzdem ein wichtiges Werkzeug für Unternehmer und Creator ist."
    }
  ];

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }

    callback();
  }

  function initHeader() {
    const header = document.querySelector(".header");
    const mobileStickyCta = document.querySelector(".mobile-sticky-cta");
    let lastScrollY = window.scrollY;
    let ticking = false;

    if (!header) return;

    function syncHeaderHeight() {
      document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
    }

    function updateHeaderState() {
      if (!header) return;
      syncHeaderHeight();

      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - lastScrollY;
      const scrollingDown = scrollDelta > 1;
      const scrollingUp = scrollDelta < -1;
      const isAtTop = currentScrollY <= 8;

      header.classList.toggle("is-scrolled", !isAtTop);

      if (scrollingDown && !isAtTop) {
        header.classList.add("is-hidden");
        header.classList.remove("hide-mobile-links");
      } else if (scrollingUp || isAtTop) {
        header.classList.remove("is-hidden", "hide-mobile-links");
      }

      mobileStickyCta?.classList.toggle("is-visible", currentScrollY > 360);
      lastScrollY = currentScrollY;
      ticking = false;
    }

    function requestHeaderUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeaderState);
    }

    if (header.dataset.bound !== "true") {
      header.dataset.bound = "true";
      header.classList.remove("is-hidden", "hide-mobile-links");
      syncHeaderHeight();
      updateHeaderState();
      window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
      window.addEventListener("resize", syncHeaderHeight);
      window.addEventListener(routeChangeEvent, () => {
        lastScrollY = Math.max(window.scrollY, 0);
        header.classList.remove("is-hidden", "hide-mobile-links");
        syncHeaderHeight();
        requestHeaderUpdate();
      });
    }
  }

  function initSectionFlow() {
    const flowItems = Array.from(document.querySelectorAll(".section, .seo-section, .subpage"));
    if (!flowItems.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      flowItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries, sectionObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          sectionObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12
      }
    );

    flowItems.forEach((item, index) => {
      item.style.setProperty("--flow-delay", Math.min(index * 35, 160) + "ms");
      observer.observe(item);
    });

    requestAnimationFrame(() => {
      flowItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          item.classList.add("is-visible");
          observer.unobserve(item);
        }
      });
    });
  }

  function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    if (!contactForm || contactForm.dataset.bound === "true") return;

    contactForm.dataset.bound = "true";
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (formStatus) formStatus.textContent = "Anfrage wird gesendet...";
      if (submitButton) submitButton.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" }
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Senden fehlgeschlagen");
        }

        contactForm.reset();
        if (formStatus) formStatus.textContent = "Danke. Deine Anfrage wurde gesendet.";
      } catch (error) {
        if (formStatus) formStatus.textContent = "Das hat nicht geklappt. Bitte schreibt direkt an info@agrupmedia.de.";
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  }

  function formatEpisodeDate(value) {
    if (!value) return "";
    const date = new Date(value + "T12:00:00");
    if (Number.isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(date);
  }

  function setEpisodeOpen(item, shouldOpen) {
    const button = item.querySelector(".episode-toggle");
    const panel = item.querySelector(".episode-panel");

    item.classList.toggle("is-active", shouldOpen);
    button?.setAttribute("aria-expanded", String(shouldOpen));

    if (panel) {
      panel.setAttribute("aria-hidden", String(!shouldOpen));
      panel.inert = !shouldOpen;
    }
  }

  function initPodcastFeature() {
    const podcastModule = document.querySelector("[data-podcast-module]");
    const toggle = document.querySelector("[data-podcast-toggle]");
    const panel = document.querySelector("[data-podcast-panel]");
    const timeline = document.querySelector("[data-podcast-timeline]");

    if (!podcastModule || !toggle || !panel || !timeline) return;

    panel.inert = panel.getAttribute("aria-hidden") !== "false";

    function syncPodcastPanelHeight() {
      if (podcastModule.classList.contains("is-open")) {
        panel.style.maxHeight = timeline.scrollHeight + "px";
      }
    }

    if (timeline.dataset.rendered !== "true") {
      timeline.dataset.rendered = "true";
      timeline.innerHTML = "";

      podcastEpisodes
        .slice()
        .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
        .forEach((episode, index) => {
          const item = document.createElement("li");
          const panelId = "inside-agrup-episode-" + index;
          item.className = "podcast-episode";

          const button = document.createElement("button");
          button.className = "episode-toggle";
          button.type = "button";
          button.setAttribute("aria-expanded", "false");
          button.setAttribute("aria-controls", panelId);

          const episodeLabel = document.createElement("span");
          episodeLabel.className = "episode-label";
          episodeLabel.textContent = episode.episode;

          const meta = document.createElement("span");
          meta.className = "episode-meta";

          const title = document.createElement("span");
          title.className = "episode-title";
          title.textContent = episode.title;
          meta.appendChild(title);

          const formattedDate = formatEpisodeDate(episode.date);
          if (formattedDate) {
            const date = document.createElement("span");
            date.className = "episode-date";
            date.textContent = formattedDate;
            meta.appendChild(date);
          }

          const chevron = document.createElement("span");
          chevron.className = "episode-chevron";
          chevron.setAttribute("aria-hidden", "true");
          chevron.textContent = "↓";

          button.append(episodeLabel, meta, chevron);

          const episodePanel = document.createElement("div");
          episodePanel.className = "episode-panel";
          episodePanel.id = panelId;
          episodePanel.setAttribute("aria-hidden", "true");
          episodePanel.inert = true;

          const clip = document.createElement("div");
          clip.className = "episode-panel-clip";

          const content = document.createElement("div");
          content.className = "episode-content";

          const image = document.createElement("img");
          image.className = "episode-thumb";
          image.src = episode.thumbnail;
          image.alt = episode.alt;
          image.loading = "lazy";

          const copy = document.createElement("div");
          copy.className = "episode-description";

          const description = document.createElement("p");
          description.textContent = episode.description;
          copy.appendChild(description);

          content.append(image, copy);
          clip.appendChild(content);
          episodePanel.appendChild(clip);
          item.append(button, episodePanel);
          timeline.appendChild(item);

          button.addEventListener("click", () => {
            const shouldOpen = !item.classList.contains("is-active");
            timeline.querySelectorAll(".podcast-episode").forEach((otherItem) => setEpisodeOpen(otherItem, false));
            if (shouldOpen) setEpisodeOpen(item, true);
            requestAnimationFrame(syncPodcastPanelHeight);
            window.setTimeout(syncPodcastPanelHeight, 380);
          });
        });
    }

    if (toggle.dataset.bound === "true") return;
    toggle.dataset.bound = "true";

    toggle.addEventListener("click", () => {
      const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";

      podcastModule.classList.toggle("is-open", shouldOpen);
      toggle.setAttribute("aria-expanded", String(shouldOpen));
      toggle.textContent = shouldOpen ? "Folgen ausblenden" : "Alle Folgen ansehen";
      panel.setAttribute("aria-hidden", String(!shouldOpen));
      panel.inert = !shouldOpen;
      panel.style.maxHeight = shouldOpen ? timeline.scrollHeight + "px" : "";

      if (!shouldOpen) {
        timeline.querySelectorAll(".podcast-episode").forEach((item) => setEpisodeOpen(item, false));
      }

      if (shouldOpen) requestAnimationFrame(syncPodcastPanelHeight);
    });
  }

  function initPageFeatures() {
    initSectionFlow();
    initContactForm();
    initPodcastFeature();
  }

  function installRouteChangeWatcher() {
    if (window.__agrupRouteWatcherBound) return;
    window.__agrupRouteWatcherBound = true;
    let pageFeatureTimer = 0;

    const schedulePageFeatures = () => {
      window.clearTimeout(pageFeatureTimer);
      pageFeatureTimer = window.setTimeout(initPageFeatures, 120);
    };

    const dispatchRouteChange = () => {
      window.requestAnimationFrame(() => {
        window.dispatchEvent(new Event(routeChangeEvent));
      });
    };

    ["pushState", "replaceState"].forEach((methodName) => {
      const original = history[methodName];
      history[methodName] = function (...args) {
        const result = original.apply(this, args);
        dispatchRouteChange();
        return result;
      };
    });

    window.addEventListener("popstate", dispatchRouteChange);

    if ("MutationObserver" in window) {
      const pageRoot = document.querySelector(".site") || document.body;
      const observer = new MutationObserver((mutations) => {
        if (
          mutations.some((mutation) =>
            Array.from(mutation.addedNodes).some((node) => node.nodeType === Node.ELEMENT_NODE)
          )
        ) {
          schedulePageFeatures();
        }
      });

      observer.observe(pageRoot, { childList: true, subtree: true });
    }

    window.addEventListener(routeChangeEvent, () => {
      schedulePageFeatures();
      window.setTimeout(initPageFeatures, 450);
      window.setTimeout(initPageFeatures, 1200);
    });
  }

  ready(() => {
    installRouteChangeWatcher();
    initHeader();
    initPageFeatures();
  });
})();
