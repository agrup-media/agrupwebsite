(function () {
  const LANGUAGE_KEY = 'agrup-language';
  const SUPPORTED_LANGUAGES = {
    de: { flag: '🇩🇪', label: 'Deutsch', htmlLang: 'de' },
    en: { flag: '🇬🇧', label: 'English', htmlLang: 'en' },
  };

  const translations = {
    en: {
      'Startseite': 'Home',
      'Leistungen': 'Services',
      'Projekte': 'Projects',
      'Über uns': 'About us',
      'Kontakt': 'Contact',
      'Erstgespräch': 'Initial call',
      'Kostenloses Erstgespräch vereinbaren': 'Book a free initial call',
      'Kostenloses Erstgespräch': 'Free initial call',
      'Leistungen ansehen': 'View services',
      'Kontakt aufnehmen': 'Get in touch',
      'Alle Leistungen': 'All services',
      'Mehr von uns': 'More from us',
      'Impressum': 'Legal notice',
      'Datenschutz': 'Privacy',
      'Cookie-Einstellungen': 'Cookie settings',
      'Bereit für mehr Anfragen?': 'Ready for more enquiries?',
      'Digitale Auftritte für Unternehmen, die sichtbar werden wollen.': 'Digital presences for businesses that want to be seen.',
      'Websites, die aus Besuchern Anfragen machen.': 'Websites that turn visitors into enquiries.',
      'Webdesign, KI-Chatbots und digitale Systeme für Unternehmen in Rendsburg, Eckernförde, Kiel und Schleswig-Holstein. Klar gestaltet, technisch sauber und auf echte Anfragen ausgerichtet.': 'Web design, AI chatbots and digital systems for businesses in Rendsburg, Eckernförde, Kiel and Schleswig-Holstein. Clearly designed, technically clean and focused on real enquiries.',
      'Hochwertige Websites, KI-Chatbots und digitale Systeme für Unternehmen in Schleswig-Holstein.': 'High-quality websites, AI chatbots and digital systems for businesses in Schleswig-Holstein.',
      'Regional': 'Regional',
      'Persönlich': 'Personal',
      'Auf Anfragen optimiert': 'Optimized for enquiries',
      'Kurz gesagt': 'In short',
      'Schön reicht nicht. Die Website muss verkaufen.': 'Good-looking is not enough. The website needs to sell.',
      'Wir gestalten mobile Auftritte so, dass Besucher schnell verstehen, euch vertrauen und den nächsten Schritt machen.': 'We design mobile presences so visitors quickly understand, trust you and take the next step.',
      'Klarer erster Eindruck': 'Clear first impression',
      'In wenigen Sekunden muss erkennbar sein, was ihr anbietet und warum es relevant ist.': 'Within seconds, visitors need to understand what you offer and why it matters.',
      'Weniger Reibung': 'Less friction',
      'Kürzere Texte, ruhige Abschnitte und klare Wege zu Kontakt, WhatsApp oder Formular.': 'Shorter text, calmer sections and clear paths to contact, WhatsApp or the form.',
      'Mehr passende Anfragen': 'More relevant enquiries',
      'Webdesign, Chatbot und Kontaktwege arbeiten gemeinsam auf das Erstgespräch hin.': 'Web design, chatbot and contact paths work together toward the initial call.',
      'Warum AgRup Media': 'Why AgRup Media',
      'Nicht einfach nur eine Website. Ein digitaler Auftritt, der ernst genommen wird.': 'Not just a website. A digital presence that is taken seriously.',
      'Hochwertiges Design statt Baukasten-Optik': 'High-quality design instead of template looks',
      'Klare Struktur statt überladene Seiten': 'Clear structure instead of overloaded pages',
      'Durchdachte Systeme statt isolierter Einzelmaßnahmen': 'Thought-through systems instead of isolated measures',
      'Fokus auf Anfragen, Vertrauen und Kontakt': 'Focus on enquiries, trust and contact',
      'Unser Ablauf': 'Our process',
      'Von der Idee zum sauberen digitalen Auftritt.': 'From idea to a polished digital presence.',
      'Wir verstehen euer Unternehmen, eure Zielgruppe und das eigentliche Ziel.': 'We understand your company, your audience and the real goal.',
      'Konzept': 'Concept',
      'Wir planen Aufbau, Inhalte, Designrichtung und notwendige Funktionen.': 'We plan structure, content, design direction and the functions you need.',
      'Umsetzung': 'Implementation',
      'Wir bauen Website, Systeme und Kontaktwege sauber und nutzerfreundlich auf.': 'We build the website, systems and contact paths cleanly and user-friendly.',
      'Übergabe': 'Handover',
      'Ihr bekommt einen digitalen Auftritt, der seriös wirkt und praktisch nutzbar ist.': 'You receive a digital presence that feels professional and works in practice.',
      'Bereit für einen professionellen digitalen Auftritt?': 'Ready for a professional digital presence?',
      'Dann starten wir mit einem klaren Erstgespräch und prüfen, was für euer Unternehmen wirklich Sinn ergibt.': 'Then we start with a clear initial call and check what truly makes sense for your business.',
      'Leistung': 'Service',
      'Überblick': 'Overview',
      'Bausteine': 'Building blocks',
      'Ergebnis': 'Result',
      'Ablauf': 'Process',
      'Preise': 'Prices',
      'Webdesign': 'Web design',
      'Chatbots': 'Chatbots',
      'Terminbuchung': 'Appointment booking',
      'Mediendesign': 'Media design',
      'Online Marketing': 'Online marketing',
      'Automatisierung': 'Automation',
      'WhatsApp': 'WhatsApp'
    },

  };

  translations.en = Object.assign({}, window.AGRUP_TRANSLATIONS_EN || {}, translations.en);

  const chatbotCopy = {
    de: {
      title: 'Digitaler Assistent',
      close: 'Chat schließen',
      open: 'Chat öffnen',
      input: 'Nachricht schreiben...',
      send: 'Nachricht senden',
      typing: 'Assistent schreibt',
      privacy: 'Bitte gib keine sensiblen Daten ein. Hinweise zur Verarbeitung findest du in unserer Datenschutzerklärung.',
      privacyLink: 'Datenschutzerklärung',
      greeting: 'Hallo, ich bin der digitale Assistent von AgRup Media. Ich helfe dir bei Websites, KI-Chatbots, Terminbuchung und Mediendesign. Wobei kann ich dich unterstützen?',
      default: 'Dazu habe ich keine eindeutige Antwort. Ich kann dir aber bei Fragen zu Websites, KI-Chatbots, Terminbuchung, Mediendesign, Preisen, Ablauf, Datenschutz und Kontakt helfen.',
      legal: 'Ich kann keine Rechts- oder Steuerberatung geben. Allgemeine Angaben findest du im Impressum und in der Datenschutzerklärung. Für konkrete rechtliche Fragen wende dich bitte an eine qualifizierte Stelle.',
      privacyAnswer: 'Informationen zur Verarbeitung personenbezogener Daten findest du in unserer Datenschutzerklärung. Bitte gib im Chat keine sensiblen oder vertraulichen Daten ein.',
      cookieAnswer: 'Statistik und Marketing werden nur nach aktiver Einwilligung geladen. Deine Auswahl kannst du jederzeit über die Cookie-Einstellungen im Footer ändern.',
      contact: 'Gern. Für ein Erstgespräch ist WhatsApp der schnellste Weg. Alternativ könnt ihr das Kontaktformular nutzen und kurz beschreiben, worum es geht.',
      price: 'Das hängt vom Umfang ab. Eine einfache Landingpage ist anders kalkuliert als eine größere Website mit mehreren Seiten, Terminbuchung oder Chatbot. Möchtest du kurz ein paar Fragen beantworten, damit wir dein Projekt besser einschätzen können?',
      time: 'Das hängt vom Umfang ab. Eine kleine Landingpage ist meist schneller umgesetzt als eine Website mit mehreren Seiten, Terminbuchung oder Chatbot. Mit ein paar Eckdaten lässt sich der Zeitrahmen besser einschätzen.',
      process: 'Unser Ablauf ist klar: Erstgespräch, Konzept, Umsetzung und Übergabe. Im Erstgespräch klären wir Ziel, Zielgruppe, Inhalte und sinnvolle Funktionen.',
      imprint: 'Das Impressum findet ihr über den Footer oder direkt hier. Dort stehen Anschrift, Kontakt und verantwortliche Personen.',
      what: 'AgRup Media entwickelt Websites, KI-Chatbots, Terminbuchungssysteme, digitale Systeme und Mediendesign für lokale Unternehmen, Dienstleister, Selbstständige und kleine bis mittelständische Unternehmen in Rendsburg, Eckernförde, Kiel und Schleswig-Holstein.',
      restart: 'Ich starte den Chat kurz neu. Wobei kann ich dich unterstützen?',
      complete: summary => 'Perfekt, ich habe die wichtigsten Punkte zusammengefasst:\n\n' + summary + '\n\nIhr könnt uns diese Infos jetzt direkt per WhatsApp schicken oder das Kontaktformular öffnen.',
      summaryService: 'Leistung',
      whatsappIntro: 'Hallo AgRup Media, ich möchte ein Projekt anfragen.',
      quick: {
        website: 'Website anfragen',
        websiteMsg: 'Ich interessiere mich für eine Website.',
        chatbot: 'KI-Chatbot',
        chatbotMsg: 'Ich interessiere mich für einen KI-Chatbot.',
        booking: 'Terminbuchung',
        bookingMsg: 'Ich interessiere mich für Terminbuchung.',
        design: 'Mediendesign',
        designMsg: 'Ich interessiere mich für Mediendesign.',
        prices: 'Preise',
        pricesMsg: 'Was kostet eine Website?',
        process: 'Ablauf',
        processMsg: 'Wie ist der Ablauf?',
        initial: 'Erstgespräch',
        initialMsg: 'Ich möchte ein Erstgespräch vereinbaren.',
        form: 'Kontaktformular',
        whatsapp: 'WhatsApp',
        sendWhatsapp: 'Zusammenfassung per WhatsApp senden',
        openForm: 'Kontaktformular öffnen',
        estimate: 'Ja, Projekt einschätzen',
        estimateMsg: 'Ja, ich möchte mein Projekt einschätzen lassen.',
        openPrivacy: 'Datenschutzerklärung',
        openImprint: 'Impressum öffnen',
        services: 'Leistungen ansehen'
      }
    },
    en: {
      title: 'Digital assistant',
      close: 'Close chat',
      open: 'Open chat',
      input: 'Write a message...',
      send: 'Send message',
      typing: 'Assistant is typing',
      privacy: 'Please do not enter sensitive data. You can find processing details in our privacy policy.',
      privacyLink: 'privacy policy',
      greeting: 'Hi, I am AgRup Media’s digital assistant. I can help with websites, AI chatbots, appointment booking and media design. How can I support you?',
      default: 'I do not have a clear answer for that yet. I can help with websites, AI chatbots, appointment booking, media design, prices, process, privacy and contact.',
      legal: 'I cannot provide legal or tax advice. General information is available in the legal notice and privacy policy. For specific legal questions, please contact a qualified professional.',
      privacyAnswer: 'You can find information about personal data processing in our privacy policy. Please do not enter sensitive or confidential data in the chat.',
      cookieAnswer: 'Statistics and marketing tools are only loaded after active consent. You can change your choice anytime via cookie settings in the footer.',
      contact: 'Sure. WhatsApp is the fastest way to arrange an initial call. Alternatively, use the contact form and briefly describe what you need.',
      price: 'It depends on the scope. A simple landing page is priced differently from a larger website with multiple pages, appointment booking or a chatbot. Would you like to answer a few quick questions so we can estimate your project better?',
      time: 'It depends on scope. A small landing page is usually faster than a multi-page website with appointment booking or chatbot. A few details make the timeline much easier to estimate.',
      process: 'Our process is simple: initial call, concept, implementation and handover. In the first call we clarify goals, audience, content and useful functions.',
      imprint: 'You can find the legal notice in the footer or open it directly here. It includes address, contact and responsible persons.',
      what: 'AgRup Media develops websites, AI chatbots, appointment booking systems, digital systems and media design for local businesses, service providers, self-employed people and small to medium-sized companies in Rendsburg, Eckernförde, Kiel and Schleswig-Holstein.',
      restart: 'I will restart the chat briefly. How can I support you?',
      complete: summary => 'Perfect, I summarized the key points:\n\n' + summary + '\n\nYou can now send these details to us directly via WhatsApp or open the contact form.',
      summaryService: 'Service',
      whatsappIntro: 'Hello AgRup Media, I would like to enquire about a project.',
      quick: {
        website: 'Request website',
        websiteMsg: 'I am interested in a website.',
        chatbot: 'AI chatbot',
        chatbotMsg: 'I am interested in an AI chatbot.',
        booking: 'Appointment booking',
        bookingMsg: 'I am interested in appointment booking.',
        design: 'Media design',
        designMsg: 'I am interested in media design.',
        prices: 'Prices',
        pricesMsg: 'What does a website cost?',
        process: 'Process',
        processMsg: 'What is the process?',
        initial: 'Initial call',
        initialMsg: 'I would like to arrange an initial call.',
        form: 'Contact form',
        whatsapp: 'WhatsApp',
        sendWhatsapp: 'Send summary via WhatsApp',
        openForm: 'Open contact form',
        estimate: 'Yes, estimate project',
        estimateMsg: 'Yes, I would like my project to be estimated.',
        openPrivacy: 'Privacy policy',
        openImprint: 'Open legal notice',
        services: 'View services'
      }
    },

  };

  const flowData = {
    de: {
      websiteLead: ['Website', [
        ['businessType', 'Branche', 'Gerne. Für welche Branche oder welches Unternehmen ist die Website gedacht?'],
        ['hasWebsite', 'Bestehende Website', 'Habt ihr bereits eine Website oder soll sie komplett neu erstellt werden?'],
        ['projectScope', 'Umfang', 'Soll es eher ein Onepager, eine klassische Unternehmenswebsite oder etwas Größeres werden?'],
        ['features', 'Funktionen', 'Welche Funktionen wären wichtig? Zum Beispiel Kontaktformular, WhatsApp-Anbindung, Terminbuchung, Chatbot oder Google-Optimierung.'],
        ['startTime', 'Start', 'Wann soll das Projekt ungefähr starten? Sofort, in den nächsten Wochen oder später?'],
        ['contactPreference', 'Kontaktweg', 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?']
      ]],
      chatbotLead: ['KI-Chatbot', [
        ['businessType', 'Website/Unternehmen', 'Für welche Website oder welches Unternehmen soll der Chatbot eingesetzt werden?'],
        ['projectScope', 'Aufgabe', 'Was soll der Chatbot hauptsächlich können? Häufige Fragen beantworten, Leads sammeln, Termine vorbereiten oder Kunden beraten?'],
        ['hasWebsite', 'Bestehende Website', 'Habt ihr bereits eine Website, auf der der Chatbot eingebunden werden soll?'],
        ['features', 'Ausbaustufe', 'Soll der Chatbot eher einfach starten oder langfristig mit echter KI/API erweitert werden?'],
        ['contactPreference', 'Kontaktweg', 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?']
      ]],
      bookingLead: ['Terminbuchung', [
        ['businessType', 'Terminart', 'Für welche Art von Terminen braucht ihr ein Buchungssystem?'],
        ['projectScope', 'Buchungsweg', 'Sollen Kunden direkt online Termine buchen können oder erst eine Anfrage senden?'],
        ['features', 'Rahmen', 'Gibt es feste Öffnungszeiten, mehrere Mitarbeiter oder verschiedene Leistungen?'],
        ['hasWebsite', 'Einbindung', 'Soll die Terminbuchung in eine bestehende Website eingebaut werden?'],
        ['contactPreference', 'Kontaktweg', 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?']
      ]],
      designLead: ['Mediendesign', [
        ['projectScope', 'Bedarf', 'Was genau braucht ihr im Bereich Mediendesign? Zum Beispiel Logo, Social-Media-Design, Flyer, Visitenkarten oder Werbematerial?'],
        ['hasWebsite', 'Bestehendes Design', 'Gibt es bereits ein bestehendes Design oder soll etwas Neues entwickelt werden?'],
        ['features', 'Nutzung', 'Für welchen Zweck soll das Design genutzt werden? Online, Druck oder beides?'],
        ['startTime', 'Benötigt bis', 'Wann wird das Design ungefähr benötigt?'],
        ['contactPreference', 'Kontaktweg', 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?']
      ]]
    },
    en: {
      websiteLead: ['Website', [
        ['businessType', 'Industry', 'Sure. Which industry or company is the website for?'],
        ['hasWebsite', 'Existing website', 'Do you already have a website or should it be created from scratch?'],
        ['projectScope', 'Scope', 'Should it be a one-pager, a classic company website or something larger?'],
        ['features', 'Functions', 'Which functions matter? For example contact form, WhatsApp connection, appointment booking, chatbot or Google optimization.'],
        ['startTime', 'Start', 'When should the project roughly start? Immediately, in the next few weeks or later?'],
        ['contactPreference', 'Contact path', 'How would you prefer to continue - via WhatsApp or the contact form?']
      ]],
      chatbotLead: ['AI chatbot', [
        ['businessType', 'Website/company', 'For which website or company should the chatbot be used?'],
        ['projectScope', 'Task', 'What should the chatbot mainly do? Answer FAQs, collect leads, prepare appointments or advise customers?'],
        ['hasWebsite', 'Existing website', 'Do you already have a website where the chatbot should be integrated?'],
        ['features', 'Level', 'Should the chatbot start simple or later be expanded with real AI/API?'],
        ['contactPreference', 'Contact path', 'How would you prefer to continue - via WhatsApp or the contact form?']
      ]],
      bookingLead: ['Appointment booking', [
        ['businessType', 'Appointment type', 'What kind of appointments do you need a booking system for?'],
        ['projectScope', 'Booking path', 'Should customers book appointments directly online or send an enquiry first?'],
        ['features', 'Setup', 'Are there fixed opening hours, multiple employees or different services?'],
        ['hasWebsite', 'Integration', 'Should appointment booking be integrated into an existing website?'],
        ['contactPreference', 'Contact path', 'How would you prefer to continue - via WhatsApp or the contact form?']
      ]],
      designLead: ['Media design', [
        ['projectScope', 'Need', 'What exactly do you need in media design? Logo, social media design, flyers, business cards or promotional material?'],
        ['hasWebsite', 'Existing design', 'Is there already an existing design or should something new be developed?'],
        ['features', 'Use', 'What will the design be used for? Online, print or both?'],
        ['startTime', 'Needed by', 'When will the design roughly be needed?'],
        ['contactPreference', 'Contact path', 'How would you prefer to continue - via WhatsApp or the contact form?']
      ]]
    },

  };

  let currentLanguage = getSavedLanguage();
  let originalTextNodes = [];
  let originalElementAttrs = [];
  const textNodeOriginals = new WeakMap();
  const elementAttrOriginals = new WeakMap();
  let languageRefreshTimer = null;
  let chatbotState = { mode: 'idle', step: 0, service: '', lead: {} };
  let queuedActions = null;
  let typingElement = null;
  let replyTimer = null;

  function getSavedLanguage() {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    return SUPPORTED_LANGUAGES[saved] ? saved : 'de';
  }

  function getRelativePrefix() {
    return '/';
  }

  function normalizeText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function normalizeSearch(value) {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ß/g, 'ss');
  }

  function translateText(value, lang, override) {
    if (lang === 'de') return value;
    if (override) return override;
    const normalized = normalizeText(value);
    const leading = String(value).match(/^\s*/)?.[0] || '';
    const trailing = String(value).match(/\s*$/)?.[0] || '';
    return Object.prototype.hasOwnProperty.call(translations[lang], normalized)
      ? leading + translations[lang][normalized] + trailing
      : value;
  }

  function collectTextNodes() {
    originalTextNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, [data-chatbot], .language-switcher')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) {
      if (!textNodeOriginals.has(walker.currentNode)) {
        textNodeOriginals.set(walker.currentNode, walker.currentNode.nodeValue);
      }
      originalTextNodes.push({ node: walker.currentNode, de: textNodeOriginals.get(walker.currentNode) });
    }
  }

  function collectElementAttrs() {
    originalElementAttrs = [];
    document.querySelectorAll('[placeholder], [aria-label], [title]').forEach(element => {
      if (element.closest('script, style, [data-chatbot], .language-switcher')) return;
      const originals = elementAttrOriginals.get(element) || {};
      ['placeholder', 'aria-label', 'title'].forEach(attr => {
        if (!element.hasAttribute(attr)) return;
        if (!Object.prototype.hasOwnProperty.call(originals, attr)) {
          originals[attr] = element.getAttribute(attr);
        }
        originalElementAttrs.push({ element, attr, de: originals[attr] });
      });
      elementAttrOriginals.set(element, originals);
    });
  }

  function translatePageContent() {
    originalTextNodes.forEach(item => {
      const parent = item.node.parentElement;
      const override = parent?.getAttribute('data-i18n-en');
      item.node.nodeValue = translateText(item.de, currentLanguage, override);
    });

    originalElementAttrs.forEach(item => {
      item.element.setAttribute(item.attr, translateText(item.de, currentLanguage));
    });
  }

  function refreshPageLanguage() {
    collectTextNodes();
    collectElementAttrs();
    translatePageContent();
    renderLanguageMenus(currentLanguage);
  }

  function ensureLanguageSwitchers() {
    document.querySelectorAll('.nav').forEach(nav => {
      if (nav.querySelector('.language-switcher')) return;
      const cta = nav.querySelector('.btn');
      const switcher = document.createElement('div');
      switcher.className = 'language-switcher nav-language-switcher';
      switcher.innerHTML = '<button class="language-toggle" type="button" aria-expanded="false"><span class="flag-dot current-flag"></span><span class="language-arrow">▾</span></button><div class="language-menu" aria-label="Sprachauswahl"></div>';
      nav.insertBefore(switcher, cta || null);
    });
  }

  function renderLanguageMenus(lang) {
    document.querySelectorAll('.current-flag').forEach(flag => {
      flag.textContent = SUPPORTED_LANGUAGES[lang].flag;
    });

    document.querySelectorAll('.language-toggle').forEach(toggle => {
      toggle.setAttribute('aria-label', lang === 'de' ? 'Sprache wechseln' : 'Change language');
    });

    document.querySelectorAll('.language-menu').forEach(menu => {
      menu.innerHTML = '';
      Object.entries(SUPPORTED_LANGUAGES).forEach(([code, info]) => {
        const button = document.createElement('button');
        button.className = 'language-option';
        if (code === lang) button.classList.add('is-active');
        button.type = 'button';
        button.dataset.lang = code;
        button.setAttribute('aria-label', info.label);
        button.innerHTML = '<span class="language-option__flag">' + info.flag + '</span><span class="language-option__label">' + info.label + '</span>';
        menu.appendChild(button);
      });
    });
  }

  function applyLanguage(lang) {
    currentLanguage = SUPPORTED_LANGUAGES[lang] ? lang : 'de';
    document.documentElement.lang = SUPPORTED_LANGUAGES[currentLanguage].htmlLang;
    window.localStorage.setItem(LANGUAGE_KEY, currentLanguage);

    refreshPageLanguage();
    applyChatbotLanguage();
  }

  function scheduleLanguageRefresh() {
    window.clearTimeout(languageRefreshTimer);
    languageRefreshTimer = window.setTimeout(refreshPageLanguage, 80);
  }

  function observePageChanges() {
    if (!('MutationObserver' in window)) return;
    const target = document.querySelector('.site') || document.body;
    const observer = new MutationObserver(mutations => {
      if (
        mutations.some(mutation =>
          Array.from(mutation.addedNodes).some(node => node.nodeType === Node.ELEMENT_NODE)
        )
      ) {
        scheduleLanguageRefresh();
      }
    });
    observer.observe(target, { childList: true, subtree: true });
    window.addEventListener('popstate', scheduleLanguageRefresh);
    window.addEventListener('agrup:route-change', scheduleLanguageRefresh);
  }

  function bindLanguageSwitchers() {
    document.querySelectorAll('.language-toggle').forEach(toggle => {
      const clone = toggle.cloneNode(true);
      toggle.replaceWith(clone);
      clone.addEventListener('click', () => {
        const switcher = clone.closest('.language-switcher');
        const isOpen = switcher.classList.toggle('is-open');
        document.querySelectorAll('.language-switcher').forEach(other => {
          if (other !== switcher) other.classList.remove('is-open');
        });
        document.querySelectorAll('.language-toggle').forEach(item => {
          item.setAttribute('aria-expanded', String(item === clone && isOpen));
        });
      });
    });

    document.addEventListener('click', event => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const option = target.closest('.language-option');
      if (option) {
        event.preventDefault();
        event.stopPropagation();
        applyLanguage(option.dataset.lang || 'de');
        document.querySelectorAll('.language-switcher').forEach(switcher => switcher.classList.remove('is-open'));
        document.querySelectorAll('.language-toggle').forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
        return;
      }

      const clickedSwitcher = target.closest('.language-switcher');
      const hasOpenSwitcher = document.querySelector('.language-switcher.is-open');

      if (hasOpenSwitcher && !clickedSwitcher) {
        event.preventDefault();
        event.stopPropagation();
        document.querySelectorAll('.language-switcher').forEach(switcher => switcher.classList.remove('is-open'));
        document.querySelectorAll('.language-toggle').forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
        return;
      }

      if (!clickedSwitcher) {
        document.querySelectorAll('.language-switcher').forEach(switcher => switcher.classList.remove('is-open'));
        document.querySelectorAll('.language-toggle').forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
      }
    }, true);
  }

  function getChatbotElements() {
    return {
      widget: document.querySelector('.chatbot-widget'),
      panel: document.querySelector('.chatbot-panel'),
      title: document.querySelector('.chatbot-title'),
      close: document.querySelector('.chatbot-close'),
      toggle: document.querySelector('.chatbot-toggle'),
      form: document.querySelector('.chatbot-form'),
      input: document.querySelector('.chatbot-input'),
      messages: document.querySelector('.chatbot-messages'),
      actions: document.querySelector('.chatbot-actions'),
      privacy: document.querySelector('.chatbot-privacy')
    };
  }

  function getChatbotUrls() {
    const prefix = getRelativePrefix();
    return {
      contact: prefix + 'kontakt',
      services: prefix + 'leistungen',
      privacy: prefix + 'datenschutz',
      imprint: prefix + 'impressum'
    };
  }

  function createWhatsAppUrl(message) {
    return 'https://wa.me/4915510528225?text=' + encodeURIComponent(message);
  }

  function getCopy() {
    return chatbotCopy[currentLanguage] || chatbotCopy.de;
  }

  function getFlows() {
    const source = flowData[currentLanguage] || flowData.de;
    return Object.fromEntries(Object.entries(source).map(([mode, [service, questions]]) => [
      mode,
      { service, questions: questions.map(([key, label, question]) => ({ key, label, question })) }
    ]));
  }

  function getDefaultActions() {
    const c = getCopy().quick;
    const urls = getChatbotUrls();
    return [
      { label: c.website, message: c.websiteMsg, type: 'message', primary: true },
      { label: c.chatbot, message: c.chatbotMsg, type: 'message' },
      { label: c.booking, message: c.bookingMsg, type: 'message' },
      { label: c.design, message: c.designMsg, type: 'message' },
      { label: c.prices, message: c.pricesMsg, type: 'message' },
      { label: c.process, message: c.processMsg, type: 'message' },
      { label: c.initial, message: c.initialMsg, type: 'message' },
      { label: c.form, url: urls.contact, type: 'link' },
      { label: c.whatsapp, url: createWhatsAppUrl(getCopy().whatsappIntro), type: 'link', external: true }
    ];
  }

  function renderActions(actions) {
    const { actions: box } = getChatbotElements();
    if (!box) return;
    box.innerHTML = '';
    (actions || []).forEach(action => {
      const el = action.type === 'link' ? document.createElement('a') : document.createElement('button');
      el.className = 'chatbot-action';
      if (action.primary) el.classList.add('is-primary');
      if (action.wide) el.classList.add('is-wide');
      el.textContent = action.label;
      el.setAttribute('aria-label', action.label);
      if (action.type === 'link') {
        el.href = action.url;
        if (action.external || /^https?:/.test(action.url)) {
          el.target = '_blank';
          el.rel = 'noopener noreferrer';
        }
      } else {
        el.type = 'button';
        el.addEventListener('click', () => submitMessage(action.message || action.label));
      }
      box.appendChild(el);
    });
  }

  function scrollToBottom() {
    const { messages } = getChatbotElements();
    if (!messages) return;
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }

  function addMessage(text, type) {
    const { messages } = getChatbotElements();
    if (!messages) return;
    const message = document.createElement('div');
    message.className = 'chatbot-message ' + type;
    message.textContent = text;
    messages.appendChild(message);
    scrollToBottom();
  }

  function showTyping() {
    const { messages } = getChatbotElements();
    if (!messages) return;
    hideTyping();
    typingElement = document.createElement('div');
    typingElement.className = 'chatbot-message bot chatbot-typing';
    typingElement.setAttribute('aria-label', getCopy().typing);
    const label = document.createElement('span');
    label.textContent = getCopy().typing;
    const dots = document.createElement('span');
    dots.className = 'chatbot-typing-dots';
    dots.setAttribute('aria-hidden', 'true');
    dots.append(document.createElement('span'), document.createElement('span'), document.createElement('span'));
    typingElement.append(label, dots);
    messages.appendChild(typingElement);
    scrollToBottom();
  }

  function hideTyping() {
    if (typingElement) {
      typingElement.remove();
      typingElement = null;
    }
  }

  function queueReply(text) {
    const actions = queuedActions || getDefaultActions();
    queuedActions = null;
    if (replyTimer) clearTimeout(replyTimer);
    showTyping();
    replyTimer = setTimeout(() => {
      hideTyping();
      addMessage(text, 'bot');
      renderActions(actions);
      replyTimer = null;
    }, Math.min(900, 360 + text.length * 2));
  }

  function includesAny(message, words) {
    return words.some(word => message.includes(normalizeSearch(word)));
  }

  function detectLeadMode(message) {
    if (includesAny(message, ['website', 'webseite', 'homepage', 'landingpage', 'onepager', 'webdesign', 'web sitesi', 'site'])) return 'websiteLead';
    if (includesAny(message, ['ki-chatbot', 'ai chatbot', 'chatbot', 'chat bot', 'bot', 'sohbet botu', 'yapay zeka'])) return 'chatbotLead';
    if (includesAny(message, ['terminbuchung', 'appointment', 'booking', 'randevu', 'rezervasyon', 'kalender'])) return 'bookingLead';
    if (includesAny(message, ['mediendesign', 'media design', 'logo', 'flyer', 'visitenkarte', 'branding', 'tasarim', 'tasarım'])) return 'designLead';
    return '';
  }

  function startLeadFlow(mode) {
    const flows = getFlows();
    const flow = flows[mode];
    chatbotState = { mode, step: 0, service: flow.service, lead: { service: flow.service } };
    queuedActions = [];
    return flow.questions[0].question;
  }

  function buildSummary() {
    const flows = getFlows();
    const flow = flows[chatbotState.mode];
    const c = getCopy();
    const lines = [c.summaryService + ': ' + (chatbotState.lead.service || chatbotState.service)];
    (flow?.questions || []).forEach(question => {
      const value = chatbotState.lead[question.key];
      if (value && question.key !== 'contactPreference') lines.push(question.label + ': ' + value);
    });
    return lines.join('\n');
  }

  function finishLeadFlow() {
    const summary = buildSummary();
    const c = getCopy();
    const urls = getChatbotUrls();
    chatbotState = { mode: 'completed', step: 0, service: '', lead: {} };
    queuedActions = [
      { label: c.quick.sendWhatsapp, url: createWhatsAppUrl(c.whatsappIntro + '\n\n' + summary), type: 'link', external: true, primary: true, wide: true },
      { label: c.quick.openForm, url: urls.contact, type: 'link', wide: true }
    ];
    return c.complete(summary);
  }

  function handleLeadAnswer(rawMessage) {
    const flows = getFlows();
    const flow = flows[chatbotState.mode];
    if (!flow) {
      chatbotState = { mode: 'idle', step: 0, service: '', lead: {} };
      queuedActions = getDefaultActions();
      return getCopy().restart;
    }
    const current = flow.questions[chatbotState.step];
    if (!current) return finishLeadFlow();
    chatbotState.lead[current.key] = rawMessage;
    chatbotState.step += 1;
    if (chatbotState.step >= flow.questions.length) return finishLeadFlow();
    queuedActions = [];
    return flow.questions[chatbotState.step].question;
  }

  function createReply(rawMessage) {
    const message = normalizeSearch(rawMessage);
    const c = getCopy();
    const urls = getChatbotUrls();
    const activeLeadModes = ['websiteLead', 'chatbotLead', 'bookingLead', 'designLead'];
    const leadMode = detectLeadMode(message);

    if (includesAny(message, ['recht', 'legal', 'tax', 'steuer', 'vertrag', 'agb'])) {
      queuedActions = [
        { label: c.quick.openImprint, url: urls.imprint, type: 'link' },
        { label: c.quick.openPrivacy, url: urls.privacy, type: 'link' },
        { label: c.quick.form, url: urls.contact, type: 'link' }
      ];
      return c.legal;
    }

    if (includesAny(message, ['datenschutz', 'privacy', 'daten', 'cookie', 'cookies', 'tracking', 'analytics'])) {
      queuedActions = [{ label: c.quick.openPrivacy, url: urls.privacy, type: 'link' }, ...getDefaultActions().slice(0, 3)];
      return includesAny(message, ['cookie', 'cookies']) ? c.cookieAnswer : c.privacyAnswer;
    }

    if (activeLeadModes.includes(chatbotState.mode)) return handleLeadAnswer(rawMessage);

    if (chatbotState.mode === 'priceQualification') {
      if (includesAny(message, ['ja', 'yes', 'estimate', 'einschatzen'])) return startLeadFlow('websiteLead');
      chatbotState.mode = 'idle';
    }

    if (includesAny(message, ['preis', 'preise', 'kosten', 'kostet', 'budget', 'price', 'cost', 'fiyat', 'ücret', 'ucret', 'maliyet'])) {
      chatbotState.mode = 'priceQualification';
      queuedActions = [
        { label: c.quick.estimate, message: c.quick.estimateMsg, type: 'message', primary: true, wide: true },
        { label: c.quick.whatsapp, url: createWhatsAppUrl(c.whatsappIntro), type: 'link', external: true },
        { label: c.quick.openForm, url: urls.contact, type: 'link' }
      ];
      return c.price;
    }

    if (leadMode) return startLeadFlow(leadMode);

    if (includesAny(message, ['kontakt', 'whatsapp', 'telefon', 'email', 'e-mail', 'call', 'contact', 'iletişim', 'iletisim', 'ara', 'mesaj'])) {
      queuedActions = [
        { label: c.quick.whatsapp, url: createWhatsAppUrl(c.quick.initialMsg), type: 'link', external: true, primary: true },
        { label: c.quick.openForm, url: urls.contact, type: 'link' },
        { label: c.quick.website, message: c.quick.websiteMsg, type: 'message' }
      ];
      return c.contact;
    }

    if (includesAny(message, ['dauer', 'zeit', 'wann', 'timeline', 'how long', 'süre', 'sure', 'ne zaman'])) {
      queuedActions = [
        { label: c.quick.estimate, message: c.quick.estimateMsg, type: 'message', primary: true },
        { label: c.quick.whatsapp, url: createWhatsAppUrl(c.whatsappIntro), type: 'link', external: true }
      ];
      return c.time;
    }

    if (includesAny(message, ['ablauf', 'prozess', 'process', 'how', 'süreç', 'surec', 'nasıl', 'nasil'])) {
      queuedActions = [
        { label: c.quick.website, message: c.quick.websiteMsg, type: 'message', primary: true },
        { label: c.quick.initial, message: c.quick.initialMsg, type: 'message' },
        { label: c.quick.services, url: urls.services, type: 'link' }
      ];
      return c.process;
    }

    if (includesAny(message, ['impressum', 'adresse', 'address', 'legal notice', 'yasal', 'adres'])) {
      queuedActions = [
        { label: c.quick.openImprint, url: urls.imprint, type: 'link' },
        { label: c.quick.form, url: urls.contact, type: 'link' }
      ];
      return c.imprint;
    }

    if (includesAny(message, ['leistung', 'leistungen', 'services', 'what do you', 'who are', 'wer seid', 'was macht', 'hizmet', 'kimsiniz', 'ne yap'])) {
      queuedActions = getDefaultActions();
      return c.what;
    }

    queuedActions = getDefaultActions();
    return c.default;
  }

  function submitMessage(rawMessage) {
    const message = String(rawMessage || '').trim();
    if (!message) return;
    addMessage(message, 'user');
    renderActions([]);
    const { input } = getChatbotElements();
    if (input) input.value = '';
    queueReply(createReply(message));
  }

  function applyChatbotLanguage() {
    const elements = getChatbotElements();
    if (!elements.widget) return;
    const c = getCopy();
    const urls = getChatbotUrls();
    if (elements.title) elements.title.textContent = c.title;
    if (elements.close) elements.close.setAttribute('aria-label', c.close);
    if (elements.toggle) {
      elements.toggle.setAttribute('aria-label', c.open);
      const img = elements.toggle.querySelector('img');
      if (img) img.alt = c.open;
    }
    if (elements.input) {
      elements.input.placeholder = c.input;
      elements.input.setAttribute('aria-label', c.input);
    }
    const send = document.querySelector('.chatbot-send');
    if (send) send.setAttribute('aria-label', c.send);
    if (!elements.privacy && elements.form) {
      const p = document.createElement('p');
      p.className = 'chatbot-privacy';
      elements.form.parentElement.insertBefore(p, elements.form);
    }
    const privacy = document.querySelector('.chatbot-privacy');
    if (privacy) {
      privacy.innerHTML = '';
      privacy.append(document.createTextNode(c.privacy + ' '));
      const link = document.createElement('a');
      link.href = urls.privacy;
      link.textContent = c.privacyLink;
      privacy.appendChild(link);
      privacy.append('.');
    }
    resetChatbotConversation();
  }

  function resetChatbotConversation() {
    const { messages } = getChatbotElements();
    if (!messages) return;
    hideTyping();
    if (replyTimer) clearTimeout(replyTimer);
    replyTimer = null;
    chatbotState = { mode: 'idle', step: 0, service: '', lead: {} };
    messages.innerHTML = '';
    addMessage(getCopy().greeting, 'bot');
    renderActions(getDefaultActions());
  }

  function initChatbot() {
    const elements = getChatbotElements();
    if (!elements.widget) return;

    ['toggle', 'close', 'form'].forEach(key => {
      if (!elements[key]) return;
      const clone = elements[key].cloneNode(true);
      elements[key].replaceWith(clone);
    });

    const fresh = getChatbotElements();
    if (fresh.panel && !fresh.panel.id) fresh.panel.id = 'chatbot-panel';
    if (fresh.toggle) {
      fresh.toggle.setAttribute('aria-controls', 'chatbot-panel');
      fresh.toggle.setAttribute('aria-expanded', 'false');
      fresh.toggle.addEventListener('click', () => {
        const isOpen = fresh.widget.classList.toggle('is-open');
        fresh.toggle.setAttribute('aria-label', isOpen ? getCopy().close : getCopy().open);
        fresh.toggle.setAttribute('aria-expanded', String(isOpen));
        fresh.toggle.tabIndex = isOpen ? -1 : 0;
        const shouldFocusInput = window.innerWidth > 768 && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        if (isOpen && shouldFocusInput) setTimeout(() => getChatbotElements().input?.focus(), 80);
      });
    }
    if (fresh.close && fresh.toggle) {
      fresh.close.addEventListener('click', () => {
        fresh.widget.classList.remove('is-open');
        fresh.toggle.setAttribute('aria-label', getCopy().open);
        fresh.toggle.setAttribute('aria-expanded', 'false');
        fresh.toggle.tabIndex = 0;
      });
    }
    if (fresh.form) {
      fresh.form.addEventListener('submit', event => {
        event.preventDefault();
        submitMessage(getChatbotElements().input?.value || '');
      });
    }
  }

  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
      return;
    }

    callback();
  }

  ready(() => {
    ensureLanguageSwitchers();
    refreshPageLanguage();
    bindLanguageSwitchers();
    initChatbot();
    observePageChanges();
    applyLanguage(getSavedLanguage());
  });
}());
