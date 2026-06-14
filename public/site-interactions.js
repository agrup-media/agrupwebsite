(function () {
const header = document.querySelector('.header');
    const languageSwitchers = document.querySelectorAll('.language-switcher');
    const languageToggles = document.querySelectorAll('.language-toggle');
    const languageOptions = document.querySelectorAll('.language-option');
    const currentFlags = document.querySelectorAll('.current-flag');
    const chatbotWidget = document.querySelector('.chatbot-widget');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotForm = document.querySelector('.chatbot-form');
    const chatbotInput = document.querySelector('.chatbot-input');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const chatbotActions = document.querySelector('.chatbot-actions');
    const mobileStickyCta = document.querySelector('.mobile-sticky-cta');
    const navDropdowns = document.querySelectorAll('[data-nav-dropdown]');
    let lastScrollY = window.scrollY;

    const translations = {
      en: {
        'Startseite': 'Home',
        'Leistungen': 'Services',
        'Projekte': 'Projects',
        'Über uns': 'About us',
        'Kontakt': 'Contact',
        'Erstgespräch': 'Initial call',
        'Kostenloses Erstgespräch vereinbaren': 'Book a free initial call',
        'Leistungen ansehen': 'View services',
        'Digitale Auftritte für Unternehmen, die sichtbar werden wollen.': 'Digital presences for businesses that want to be seen.',
        'Websites, die aus Besuchern Anfragen machen.': 'Websites that turn visitors into enquiries.',
        'Webdesign, KI-Chatbots und digitale Systeme für Unternehmen in Rendsburg, Eckernförde, Kiel und Schleswig-Holstein. Klar gestaltet, technisch sauber und auf echte Anfragen ausgerichtet.': 'Web design, AI chatbots and digital systems for businesses in Rendsburg, Eckernförde, Kiel and Schleswig-Holstein. Clearly designed, technically clean and focused on real enquiries.',
        'Hochwertige Websites, KI-Chatbots und digitale Systeme für Unternehmen in Schleswig-Holstein.': 'High-quality websites, AI chatbots and digital systems for businesses in Schleswig-Holstein.',
        'Regional': 'Regional',
        'Persönlich': 'Personal',
        'Auf Anfragen optimiert': 'Optimized for enquiries',
        'Bereit für mehr Anfragen?': 'Ready for more enquiries?',
        'Kurz gesagt': 'In short',
        'Schön reicht nicht. Die Website muss verkaufen.': 'Good-looking is not enough. The website needs to sell.',
        'Wir gestalten mobile Auftritte so, dass Besucher schnell verstehen, euch vertrauen und den nächsten Schritt machen.': 'We design mobile presences so visitors quickly understand, trust you and take the next step.',
        'Klarer erster Eindruck': 'Clear first impression',
        'In wenigen Sekunden muss erkennbar sein, was ihr anbietet und warum es relevant ist.': 'Within seconds, visitors need to understand what you offer and why it matters.',
        'Weniger Reibung': 'Less friction',
        'Kürzere Texte, ruhige Abschnitte und klare Wege zu Kontakt, WhatsApp oder Formular.': 'Shorter text, calmer sections and clear paths to contact, WhatsApp or the form.',
        'Mehr passende Anfragen': 'More relevant enquiries',
        'Webdesign, Chatbot und Kontaktwege arbeiten gemeinsam auf das Erstgespräch hin.': 'Web design, chatbot and contact paths work together toward the initial call.',
        'Was wir bauen': 'What we build',
        'Digitale Auftritte, die ruhig wirken und klar führen.': 'Digital presences that feel calm and guide clearly.',
        'Drei Bausteine greifen ineinander: ein starker erster Eindruck, schnelle Orientierung und einfache Wege zur Anfrage.': 'Three building blocks work together: a strong first impression, fast orientation and simple paths to enquiries.',
        'Webdesign': 'Web design',
        'Moderne Websites mit hochwertiger Gestaltung, klarer Struktur und zuverlässiger mobiler Nutzung.': 'Modern websites with high-quality design, clear structure and reliable mobile use.',
        'Chatbots': 'Chatbots',
        'Digitale Assistenten für häufige Fragen, Orientierung und besser vorbereitete Anfragen.': 'Digital assistants for common questions, orientation and better-prepared enquiries.',
        'Terminbuchung': 'Appointment booking',
        'Saubere Buchungs- und Anfragewege, die Kunden den nächsten Schritt erleichtern.': 'Clean booking and enquiry paths that make the next step easier for customers.',
        'Warum AgRup Media': 'Why AgRup Media',
        'Nicht einfach nur eine Website. Ein digitaler Auftritt, der ernst genommen wird.': 'Not just a website. A digital presence that is taken seriously.',
        ' Hochwertiges Design statt Baukasten-Optik': ' High-quality design instead of template looks',
        ' Klare Struktur statt überladene Seiten': ' Clear structure instead of overloaded pages',
        ' Durchdachte Systeme statt isolierter Einzelmaßnahmen': ' Thought-through systems instead of isolated measures',
        ' Fokus auf Anfragen, Vertrauen und Kontakt': ' Focus on enquiries, trust and contact',
        'Unser Ablauf': 'Our process',
        'Von der Idee zum sauberen digitalen Auftritt.': 'From idea to a polished digital presence.',
        'Erstgespräch': 'Initial call',
        'Wir verstehen euer Unternehmen, eure Zielgruppe und das eigentliche Ziel.': 'We understand your company, your audience and the real goal.',
        'Konzept': 'Concept',
        'Wir planen Aufbau, Inhalte, Designrichtung und notwendige Funktionen.': 'We plan structure, content, design direction and the functions you need.',
        'Umsetzung': 'Implementation',
        'Wir bauen Website, Systeme und Kontaktwege sauber und nutzerfreundlich auf.': 'We build the website, systems and contact paths cleanly and user-friendly.',
        'Übergabe': 'Handover',
        'Ihr bekommt einen digitalen Auftritt, der seriös wirkt und praktisch nutzbar ist.': 'You receive a digital presence that feels professional and works in practice.',
        'Bereit für einen professionellen digitalen Auftritt?': 'Ready for a professional digital presence?',
        'Dann starten wir mit einem klaren Erstgespräch und prüfen, was für euer Unternehmen wirklich Sinn ergibt.': 'Then we start with a clear initial call and check what truly makes sense for your business.',
        'Kostenloses Erstgespräch': 'Free initial call',
        'Mediendesign': 'Media design',
        'Datenschutz': 'Privacy',
        'Impressum': 'Legal notice'
      }
    };

    const textNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        if (node.parentElement.closest('script, style, [data-chatbot]')) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) {
      textNodes.push({ node: walker.currentNode, de: walker.currentNode.nodeValue });
    }

    function translateValue(value, lang) {
      return lang === 'de' ? value : translations[lang][value] || value;
    }

    function applyLanguage(lang) {
      document.documentElement.lang = lang;

      textNodes.forEach(item => {
        item.node.nodeValue = translateValue(item.de, lang);
      });

      currentFlags.forEach(flag => {
        flag.textContent = lang === 'de' ? '🇩🇪' : '🇬🇧';
      });

      languageOptions.forEach(option => {
        option.textContent = lang === 'de' ? '🇬🇧' : '🇩🇪';
        option.dataset.lang = lang === 'de' ? 'en' : 'de';
        option.setAttribute('aria-label', lang === 'de' ? 'English' : 'Deutsch');
      });

      languageToggles.forEach(toggle => {
        toggle.setAttribute('aria-label', lang === 'de' ? 'Sprache wechseln' : 'Change language');
      });

      localStorage.setItem('agrup-language', lang);
    }

    function updateHeaderState() {
      if (!header) return;
      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollingDown = currentScrollY > lastScrollY + 2;
      const scrollingUp = currentScrollY < lastScrollY - 2;

      header.classList.toggle('is-scrolled', currentScrollY > 10);

      if (scrollingDown && currentScrollY > 72) {
        header.classList.add('is-hidden');
        header.classList.remove('hide-mobile-links');
      } else if (scrollingUp || currentScrollY <= 72) {
        header.classList.remove('is-hidden', 'hide-mobile-links');
      }

      if (typeof mobileStickyCta !== 'undefined' && mobileStickyCta) {
        mobileStickyCta.classList.toggle('is-visible', currentScrollY > 360);
      }

      lastScrollY = currentScrollY;
    }

    navDropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.nav-dropdown-trigger');
      if (!trigger) return;

      function setDropdownOpen(open) {
        dropdown.classList.toggle('is-open', open);
        trigger.setAttribute('aria-expanded', String(open));
      }

      dropdown.addEventListener('mouseenter', () => {
        if (window.matchMedia('(hover: hover)').matches && window.innerWidth > 768) {
          setDropdownOpen(true);
        }
      });

      dropdown.addEventListener('mouseleave', () => {
        if (window.matchMedia('(hover: hover)').matches && window.innerWidth > 768) {
          setDropdownOpen(false);
        }
      });

      trigger.addEventListener('click', event => {
        const canHover = window.matchMedia('(hover: hover)').matches && window.innerWidth > 768;
        if (canHover) return;

        if (!dropdown.classList.contains('is-open')) {
          event.preventDefault();
          navDropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove('is-open');
              otherDropdown.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
            }
          });
          setDropdownOpen(true);
        }
      });

      document.addEventListener('click', event => {
        if (!dropdown.contains(event.target)) {
          setDropdownOpen(false);
        }
      });

      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          setDropdownOpen(false);
        }
      });
    });

    function closeServiceDropdowns(exceptDropdown) {
      document.querySelectorAll('[data-nav-dropdown]').forEach(dropdown => {
        if (dropdown !== exceptDropdown) {
          dropdown.classList.remove('is-open');
          if (dropdown.tagName === 'DETAILS') dropdown.open = false;
          dropdown.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });
    }

    document.addEventListener('click', event => {
      const trigger = event.target.closest('.nav-dropdown-trigger');
      const dropdown = event.target.closest('[data-nav-dropdown]');
      const isMobileNav = window.innerWidth <= 768;

      if (trigger && dropdown && isMobileNav) {
        if (dropdown.tagName === 'DETAILS') {
          window.setTimeout(() => {
            trigger.setAttribute('aria-expanded', String(dropdown.open));
            if (dropdown.open) closeServiceDropdowns(dropdown);
          }, 0);
          return;
        }

        if (!dropdown.classList.contains('is-open')) {
          event.preventDefault();
          closeServiceDropdowns(dropdown);
          dropdown.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
        return;
      }

      if (!dropdown) {
        closeServiceDropdowns(null);
      }
    });

    document.addEventListener('click', event => {
      const trigger = event.target.closest('.nav-dropdown-trigger');
      if (!trigger || window.innerWidth > 768) return;
      const dropdown = trigger.closest('[data-nav-dropdown]');
      if (!dropdown || dropdown.tagName !== 'DETAILS') return;

      event.preventDefault();
      event.stopPropagation();
      const nextOpen = !dropdown.open;
      closeServiceDropdowns(dropdown);
      dropdown.open = nextOpen;
      trigger.setAttribute('aria-expanded', String(nextOpen));
    }, true);

    document.addEventListener('mouseover', event => {
      const dropdown = event.target.closest('[data-nav-dropdown]');
      if (!dropdown || window.innerWidth <= 768) return;
      closeServiceDropdowns(dropdown);
      dropdown.classList.add('is-open');
      dropdown.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'true');
    });

    document.addEventListener('mouseout', event => {
      const dropdown = event.target.closest('[data-nav-dropdown]');
      if (!dropdown || window.innerWidth <= 768) return;
      const nextTarget = event.relatedTarget;
      if (nextTarget && dropdown.contains(nextTarget)) return;
      dropdown.classList.remove('is-open');
      dropdown.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    });

    const chatbotWhatsAppNumber = '4915510528225';
    const chatbotWhatsAppBase = 'https://wa.me/' + chatbotWhatsAppNumber;
    const chatbotContactUrl = '/kontakt';
    const chatbotServicesUrl = '/leistungen';
    const chatbotPrivacyUrl = '/datenschutz';
    const chatbotImprintUrl = '/impressum';
    const chatbotLeadTemplate = {
      service: '',
      businessType: '',
      hasWebsite: '',
      projectScope: '',
      features: '',
      startTime: '',
      contactPreference: ''
    };
    const chatbotLead = { ...chatbotLeadTemplate };
    let chatbotState = {
      mode: 'idle',
      step: 0,
      service: '',
      lead: { ...chatbotLeadTemplate }
    };
    let chatbotQueuedActions = null;
    let chatbotTypingElement = null;
    let chatbotReplyTimer = null;

    const chatbotFlows = {
      websiteLead: {
        service: 'Website',
        questions: [
          {
            key: 'businessType',
            label: 'Branche',
            question: 'Gerne. Für welche Branche oder welches Unternehmen ist die Website gedacht?'
          },
          {
            key: 'hasWebsite',
            label: 'Bestehende Website',
            question: 'Habt ihr bereits eine Website oder soll sie komplett neu erstellt werden?',
            actions: [
              { label: 'Bestehende Website', message: 'Wir haben bereits eine Website.', type: 'message' },
              { label: 'Komplett neu', message: 'Sie soll komplett neu erstellt werden.', type: 'message' }
            ]
          },
          {
            key: 'projectScope',
            label: 'Umfang',
            question: 'Soll es eher ein Onepager, eine klassische Unternehmenswebsite oder etwas Größeres werden?',
            actions: [
              { label: 'Onepager', message: 'Es soll ein Onepager werden.', type: 'message' },
              { label: 'Unternehmenswebsite', message: 'Es soll eine klassische Unternehmenswebsite werden.', type: 'message' },
              { label: 'Etwas Größeres', message: 'Es soll etwas Größeres werden.', type: 'message' }
            ]
          },
          {
            key: 'features',
            label: 'Funktionen',
            question: 'Welche Funktionen wären wichtig? Zum Beispiel Kontaktformular, WhatsApp-Anbindung, Terminbuchung, Chatbot oder Google-Optimierung.',
            actions: [
              { label: 'Kontakt + WhatsApp', message: 'Kontaktformular und WhatsApp-Anbindung sind wichtig.', type: 'message' },
              { label: 'Terminbuchung', message: 'Terminbuchung wäre wichtig.', type: 'message' },
              { label: 'Chatbot', message: 'Ein Chatbot wäre wichtig.', type: 'message' }
            ]
          },
          {
            key: 'startTime',
            label: 'Start',
            question: 'Wann soll das Projekt ungefähr starten? Sofort, in den nächsten Wochen oder später?',
            actions: [
              { label: 'Sofort', message: 'Das Projekt soll sofort starten.', type: 'message' },
              { label: 'Nächste Wochen', message: 'Das Projekt soll in den nächsten Wochen starten.', type: 'message' },
              { label: 'Später', message: 'Das Projekt soll später starten.', type: 'message' }
            ]
          },
          {
            key: 'contactPreference',
            label: 'Kontaktweg',
            question: 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?',
            actions: [
              { label: 'WhatsApp', message: 'Am liebsten per WhatsApp.', type: 'message', primary: true },
              { label: 'Kontaktformular', message: 'Am liebsten über das Kontaktformular.', type: 'message' }
            ]
          }
        ]
      },
      chatbotLead: {
        service: 'KI-Chatbot',
        questions: [
          {
            key: 'businessType',
            label: 'Website/Unternehmen',
            question: 'Für welche Website oder welches Unternehmen soll der Chatbot eingesetzt werden?'
          },
          {
            key: 'projectScope',
            label: 'Aufgabe',
            question: 'Was soll der Chatbot hauptsächlich können? Häufige Fragen beantworten, Leads sammeln, Termine vorbereiten oder Kunden beraten?',
            actions: [
              { label: 'FAQs beantworten', message: 'Der Chatbot soll häufige Fragen beantworten.', type: 'message' },
              { label: 'Leads sammeln', message: 'Der Chatbot soll Leads sammeln.', type: 'message' },
              { label: 'Termine vorbereiten', message: 'Der Chatbot soll Termine vorbereiten.', type: 'message' }
            ]
          },
          {
            key: 'hasWebsite',
            label: 'Bestehende Website',
            question: 'Habt ihr bereits eine Website, auf der der Chatbot eingebunden werden soll?',
            actions: [
              { label: 'Ja, vorhanden', message: 'Ja, wir haben bereits eine Website.', type: 'message' },
              { label: 'Noch keine Website', message: 'Nein, wir haben noch keine Website.', type: 'message' }
            ]
          },
          {
            key: 'features',
            label: 'Ausbaustufe',
            question: 'Soll der Chatbot eher einfach starten oder langfristig mit echter KI/API erweitert werden?',
            actions: [
              { label: 'Einfach starten', message: 'Der Chatbot soll erst einmal einfach starten.', type: 'message' },
              { label: 'Später mit KI/API', message: 'Langfristig soll er mit echter KI oder API erweitert werden.', type: 'message' }
            ]
          },
          {
            key: 'contactPreference',
            label: 'Kontaktweg',
            question: 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?',
            actions: [
              { label: 'WhatsApp', message: 'Am liebsten per WhatsApp.', type: 'message', primary: true },
              { label: 'Kontaktformular', message: 'Am liebsten über das Kontaktformular.', type: 'message' }
            ]
          }
        ]
      },
      bookingLead: {
        service: 'Terminbuchung',
        questions: [
          {
            key: 'businessType',
            label: 'Terminart',
            question: 'Für welche Art von Terminen braucht ihr ein Buchungssystem?'
          },
          {
            key: 'projectScope',
            label: 'Buchungsweg',
            question: 'Sollen Kunden direkt online Termine buchen können oder erst eine Anfrage senden?',
            actions: [
              { label: 'Direkt buchen', message: 'Kunden sollen direkt online Termine buchen können.', type: 'message' },
              { label: 'Erst Anfrage', message: 'Kunden sollen erst eine Anfrage senden.', type: 'message' }
            ]
          },
          {
            key: 'features',
            label: 'Rahmen',
            question: 'Gibt es feste Öffnungszeiten, mehrere Mitarbeiter oder verschiedene Leistungen?'
          },
          {
            key: 'hasWebsite',
            label: 'Einbindung',
            question: 'Soll die Terminbuchung in eine bestehende Website eingebaut werden?',
            actions: [
              { label: 'In bestehende Website', message: 'Ja, die Terminbuchung soll in eine bestehende Website eingebaut werden.', type: 'message' },
              { label: 'Neue Lösung', message: 'Nein, es braucht eine neue Lösung.', type: 'message' }
            ]
          },
          {
            key: 'contactPreference',
            label: 'Kontaktweg',
            question: 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?',
            actions: [
              { label: 'WhatsApp', message: 'Am liebsten per WhatsApp.', type: 'message', primary: true },
              { label: 'Kontaktformular', message: 'Am liebsten über das Kontaktformular.', type: 'message' }
            ]
          }
        ]
      },
      designLead: {
        service: 'Mediendesign',
        questions: [
          {
            key: 'projectScope',
            label: 'Bedarf',
            question: 'Was genau braucht ihr im Bereich Mediendesign? Zum Beispiel Logo, Social-Media-Design, Flyer, Visitenkarten oder Werbematerial?',
            actions: [
              { label: 'Logo', message: 'Wir brauchen ein Logo.', type: 'message' },
              { label: 'Social Media', message: 'Wir brauchen Social-Media-Design.', type: 'message' },
              { label: 'Flyer/Print', message: 'Wir brauchen Flyer, Visitenkarten oder Werbematerial.', type: 'message' }
            ]
          },
          {
            key: 'hasWebsite',
            label: 'Bestehendes Design',
            question: 'Gibt es bereits ein bestehendes Design oder soll etwas Neues entwickelt werden?',
            actions: [
              { label: 'Design vorhanden', message: 'Es gibt bereits ein bestehendes Design.', type: 'message' },
              { label: 'Neu entwickeln', message: 'Es soll etwas Neues entwickelt werden.', type: 'message' }
            ]
          },
          {
            key: 'features',
            label: 'Nutzung',
            question: 'Für welchen Zweck soll das Design genutzt werden? Online, Druck oder beides?',
            actions: [
              { label: 'Online', message: 'Das Design wird online genutzt.', type: 'message' },
              { label: 'Druck', message: 'Das Design wird für Druck genutzt.', type: 'message' },
              { label: 'Beides', message: 'Das Design wird online und im Druck genutzt.', type: 'message' }
            ]
          },
          {
            key: 'startTime',
            label: 'Benötigt bis',
            question: 'Wann wird das Design ungefähr benötigt?',
            actions: [
              { label: 'Sofort', message: 'Das Design wird sofort benötigt.', type: 'message' },
              { label: 'Nächste Wochen', message: 'Das Design wird in den nächsten Wochen benötigt.', type: 'message' },
              { label: 'Später', message: 'Das Design wird später benötigt.', type: 'message' }
            ]
          },
          {
            key: 'contactPreference',
            label: 'Kontaktweg',
            question: 'Wie möchtet ihr am liebsten weitermachen - per WhatsApp oder über das Kontaktformular?',
            actions: [
              { label: 'WhatsApp', message: 'Am liebsten per WhatsApp.', type: 'message', primary: true },
              { label: 'Kontaktformular', message: 'Am liebsten über das Kontaktformular.', type: 'message' }
            ]
          }
        ]
      }
    };

    function normalizeChatbotText(text) {
      return String(text || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ß/g, 'ss');
    }

    function chatbotIncludesAny(message, words) {
      return words.some(word => message.includes(normalizeChatbotText(word)));
    }

    function createWhatsAppUrl(message) {
      return chatbotWhatsAppBase + '?text=' + encodeURIComponent(message);
    }

    function getDefaultChatbotActions() {
      return [
        { label: 'Website anfragen', message: 'Ich interessiere mich für eine Website.', type: 'message', primary: true },
        { label: 'KI-Chatbot', message: 'Ich interessiere mich für einen KI-Chatbot.', type: 'message' },
        { label: 'Terminbuchung', message: 'Ich interessiere mich für Terminbuchung.', type: 'message' },
        { label: 'Mediendesign', message: 'Ich interessiere mich für Mediendesign.', type: 'message' },
        { label: 'Preise', message: 'Was kostet eine Website?', type: 'message' },
        { label: 'Ablauf', message: 'Wie ist der Ablauf?', type: 'message' },
        { label: 'Erstgespräch', message: 'Ich möchte ein Erstgespräch vereinbaren.', type: 'message' },
        { label: 'Kontaktformular', url: chatbotContactUrl, type: 'link' },
        { label: 'WhatsApp', url: createWhatsAppUrl('Hallo AgRup Media, ich möchte mich kurz zu einem digitalen Projekt melden.'), type: 'link', external: true }
      ];
    }

    function setNextChatbotActions(actions) {
      chatbotQueuedActions = Array.isArray(actions) ? actions : getDefaultChatbotActions();
    }

    function renderChatbotActions(actions) {
      if (!chatbotActions) {
        return;
      }

      chatbotActions.innerHTML = '';

      (actions || []).forEach(action => {
        const control = action.type === 'link' ? document.createElement('a') : document.createElement('button');
        control.className = 'chatbot-action';

        if (action.primary) {
          control.classList.add('is-primary');
        }

        if (action.wide) {
          control.classList.add('is-wide');
        }

        control.textContent = action.label;
        control.setAttribute('aria-label', action.label);

        if (action.type === 'link') {
          control.href = action.url;

          if (action.external || action.url.startsWith('http')) {
            control.target = '_blank';
            control.rel = 'noopener noreferrer';
          }
        } else {
          control.type = 'button';
          control.addEventListener('click', () => {
            submitChatbotMessage(action.message || action.label);
          });
        }

        chatbotActions.appendChild(control);
      });
    }

    function scrollChatbotToBottom() {
      if (!chatbotMessages) {
        return;
      }

      requestAnimationFrame(() => {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      });
    }

    function addChatbotMessage(text, type) {
      if (!chatbotMessages) {
        return;
      }

      const message = document.createElement('div');
      message.className = 'chatbot-message ' + type;
      message.textContent = text;
      chatbotMessages.appendChild(message);
      scrollChatbotToBottom();
    }

    function showChatbotTyping() {
      if (!chatbotMessages) {
        return;
      }

      hideChatbotTyping();

      chatbotTypingElement = document.createElement('div');
      chatbotTypingElement.className = 'chatbot-message bot chatbot-typing';
      chatbotTypingElement.setAttribute('aria-label', 'Assistent schreibt');

      const label = document.createElement('span');
      label.textContent = 'Assistent schreibt';

      const dots = document.createElement('span');
      dots.className = 'chatbot-typing-dots';
      dots.setAttribute('aria-hidden', 'true');

      for (let index = 0; index < 3; index += 1) {
        dots.appendChild(document.createElement('span'));
      }

      chatbotTypingElement.append(label, dots);
      chatbotMessages.appendChild(chatbotTypingElement);
      scrollChatbotToBottom();
    }

    function hideChatbotTyping() {
      if (chatbotTypingElement) {
        chatbotTypingElement.remove();
        chatbotTypingElement = null;
      }
    }

    function queueChatbotReply(text) {
      const actions = chatbotQueuedActions || getDefaultChatbotActions();
      const delay = Math.min(980, 420 + text.length * 3);
      chatbotQueuedActions = null;

      if (chatbotReplyTimer) {
        clearTimeout(chatbotReplyTimer);
      }

      showChatbotTyping();

      chatbotReplyTimer = setTimeout(() => {
        hideChatbotTyping();
        addChatbotMessage(text, 'bot');
        renderChatbotActions(actions);
        chatbotReplyTimer = null;
      }, delay);
    }

    function syncChatbotLead() {
      Object.assign(chatbotLead, chatbotLeadTemplate, chatbotState.lead);
    }

    function resetChatbotLead(mode) {
      const flow = chatbotFlows[mode];
      chatbotState = {
        mode,
        step: 0,
        service: flow.service,
        lead: {
          ...chatbotLeadTemplate,
          service: flow.service
        }
      };
      syncChatbotLead();
    }

    function getCurrentFlowActions() {
      const flow = chatbotFlows[chatbotState.mode];

      if (!flow) {
        return getDefaultChatbotActions();
      }

      return flow.questions[chatbotState.step]?.actions || [];
    }

    function startLeadFlow(mode) {
      resetChatbotLead(mode);
      setNextChatbotActions(getCurrentFlowActions());
      return chatbotFlows[mode].questions[0].question;
    }

    function buildLeadSummary() {
      const flow = chatbotFlows[chatbotState.service ? chatbotState.mode : 'websiteLead'];
      const summaryLines = ['Leistung: ' + (chatbotState.lead.service || chatbotState.service)];

      (flow?.questions || []).forEach(question => {
        const value = chatbotState.lead[question.key];

        if (value && question.key !== 'contactPreference') {
          summaryLines.push(question.label + ': ' + value);
        }
      });

      return summaryLines.join('\n');
    }

    function getLeadCompletionActions(summary) {
      const whatsappText = 'Hallo AgRup Media, ich möchte ein Projekt anfragen.\n\n' + summary;

      return [
        {
          label: 'Zusammenfassung per WhatsApp senden',
          url: createWhatsAppUrl(whatsappText),
          type: 'link',
          external: true,
          primary: true,
          wide: true
        },
        {
          label: 'Kontaktformular öffnen',
          url: chatbotContactUrl,
          type: 'link',
          wide: true
        }
      ];
    }

    function finishLeadFlow() {
      const summary = buildLeadSummary();
      chatbotState.mode = 'completed';
      chatbotState.step = 0;
      syncChatbotLead();
      setNextChatbotActions(getLeadCompletionActions(summary));

      return 'Perfekt, ich habe die wichtigsten Punkte zusammengefasst:\n\n' + summary + '\n\nIhr könnt uns diese Infos jetzt direkt per WhatsApp schicken oder das Kontaktformular öffnen.';
    }

    function handleLeadFlowAnswer(rawMessage) {
      const flow = chatbotFlows[chatbotState.mode];

      if (!flow) {
        chatbotState.mode = 'idle';
        setNextChatbotActions(getDefaultChatbotActions());
        return 'Ich starte den Chat kurz neu. Wobei kann ich dich unterstützen?';
      }

      const currentQuestion = flow.questions[chatbotState.step];

      if (!currentQuestion) {
        return finishLeadFlow();
      }

      chatbotState.lead[currentQuestion.key] = rawMessage;
      syncChatbotLead();
      chatbotState.step += 1;

      if (chatbotState.step >= flow.questions.length) {
        return finishLeadFlow();
      }

      setNextChatbotActions(getCurrentFlowActions());
      return flow.questions[chatbotState.step].question;
    }

    function detectLeadMode(message) {
      if (chatbotIncludesAny(message, ['website', 'webseite', 'homepage', 'landingpage', 'onepager', 'unternehmenswebsite', 'webdesign', 'online-auftritt', 'internetauftritt'])) {
        return 'websiteLead';
      }

      if (chatbotIncludesAny(message, ['ki-chatbot', 'ki chatbot', 'chatbot', 'chat bot', 'bot'])) {
        return 'chatbotLead';
      }

      if (chatbotIncludesAny(message, ['terminbuchung', 'buchungssystem', 'termine buchen', 'online termine', 'kalender'])) {
        return 'bookingLead';
      }

      if (chatbotIncludesAny(message, ['mediendesign', 'media design', 'logo', 'flyer', 'visitenkarte', 'visitenkarten', 'social-media-design', 'social media design', 'werbematerial', 'branding'])) {
        return 'designLead';
      }

      return '';
    }

    function createChatbotReply(rawMessage) {
      const message = normalizeChatbotText(rawMessage);
      const activeLeadModes = ['websiteLead', 'chatbotLead', 'bookingLead', 'designLead'];
      const asksPrice = chatbotIncludesAny(message, ['preis', 'preise', 'kosten', 'kostet', 'angebot', 'budget', 'rate', 'price', 'cost']);
      const asksPrivacy = chatbotIncludesAny(message, ['datenschutz', 'daten', 'personenbezogene daten', 'personenbezogen', 'cookie', 'cookies', 'tracking', 'analyse', 'analytics', 'google analytics', 'google ads', 'gespeichert', 'speichern', 'chatverlauf', 'chatverlaufe', 'ip-adresse']);
      const asksLegal = chatbotIncludesAny(message, ['recht', 'rechtlich', 'rechtsberatung', 'steuer', 'vertrag', 'agb', 'haftung', 'impressumspflicht', 'datenschutzpflicht']);
      const asksContact = chatbotIncludesAny(message, ['kontakt', 'whatsapp', 'telefon', 'email', 'e-mail', 'anrufen', 'call', 'erreichen', 'anschreiben']);
      const asksProcess = chatbotIncludesAny(message, ['ablauf', 'prozess', 'anfrage', 'erstgesprach', 'erstgespräch', 'konzept', 'umsetzung', 'ubergabe', 'übergabe']);
      const asksTime = chatbotIncludesAny(message, ['dauer', 'zeit', 'wann', 'schnell', 'fertig', 'timeline', 'how long']);
      const asksImprint = chatbotIncludesAny(message, ['impressum', 'adresse', 'anschrift', 'verantwortlich', 'gbr']);
      const asksWhat = chatbotIncludesAny(message, ['leistung', 'leistungen', 'was macht', 'macht ihr', 'wer seid', 'wer ist', 'uber euch', 'über euch', 'rendsburg', 'eckernforde', 'eckernförde', 'kiel', 'schleswig-holstein', 'about']);
      const leadMode = detectLeadMode(message);

      if (asksLegal) {
        setNextChatbotActions([
          { label: 'Impressum öffnen', url: chatbotImprintUrl, type: 'link' },
          { label: 'Datenschutz öffnen', url: chatbotPrivacyUrl, type: 'link' },
          { label: 'Kontaktformular', url: chatbotContactUrl, type: 'link' }
        ]);
        return 'Ich kann keine Rechts- oder Steuerberatung geben. Allgemeine Angaben findest du im Impressum und in der Datenschutzerklärung. Für konkrete rechtliche Fragen wende dich bitte an eine qualifizierte Stelle.';
      }

      if (asksPrivacy) {
        setNextChatbotActions([
          { label: 'Datenschutzerklärung', url: chatbotPrivacyUrl, type: 'link' },
          ...getCurrentFlowActions()
        ]);

        if (chatbotIncludesAny(message, ['cookie', 'cookies'])) {
          return 'Statistik und Marketing werden nur nach aktiver Einwilligung geladen. Deine Auswahl kannst du jederzeit über die Cookie-Einstellungen im Footer ändern.';
        }

        return 'Informationen zur Verarbeitung personenbezogener Daten findest du in unserer Datenschutzerklärung. Bitte gib im Chat keine sensiblen oder vertraulichen Daten ein.';
      }

      if (activeLeadModes.includes(chatbotState.mode)) {
        return handleLeadFlowAnswer(rawMessage);
      }

      if (chatbotState.mode === 'priceQualification') {
        if (chatbotIncludesAny(message, ['ja', 'einschatzen', 'einschätzen', 'projekt', 'fragen', 'qualifizieren'])) {
          return startLeadFlow('websiteLead');
        }

        chatbotState.mode = 'idle';
      }

      if (asksPrice) {
        chatbotState.mode = 'priceQualification';
        chatbotState.step = 0;
        setNextChatbotActions([
          { label: 'Ja, Projekt einschätzen', message: 'Ja, ich möchte mein Projekt einschätzen lassen.', type: 'message', primary: true, wide: true },
          { label: 'Direkt WhatsApp schreiben', url: createWhatsAppUrl('Hallo AgRup Media, ich möchte gern grob einschätzen lassen, was mein Website-Projekt kostet.'), type: 'link', external: true },
          { label: 'Kontaktformular öffnen', url: chatbotContactUrl, type: 'link' }
        ]);
        return 'Das hängt vom Umfang ab. Eine einfache Landingpage ist natürlich anders kalkuliert als eine größere Website mit mehreren Seiten, Terminbuchung oder Chatbot. Damit wir fair einschätzen können, was wirklich nötig ist, klären wir zuerst Ziel, Umfang und Funktionen. Möchtest du kurz ein paar Fragen beantworten, damit wir dein Projekt besser einschätzen können?';
      }

      if (leadMode) {
        return startLeadFlow(leadMode);
      }

      if (chatbotIncludesAny(message, ['projekt einschatzen', 'projekt einschätzen', 'projekt qualifizieren'])) {
        return startLeadFlow('websiteLead');
      }

      if (asksContact || chatbotIncludesAny(message, ['erstgesprach', 'erstgespräch'])) {
        setNextChatbotActions([
          { label: 'WhatsApp öffnen', url: createWhatsAppUrl('Hallo AgRup Media, ich möchte ein Erstgespräch vereinbaren.'), type: 'link', external: true, primary: true },
          { label: 'Kontaktformular öffnen', url: chatbotContactUrl, type: 'link' },
          { label: 'Website anfragen', message: 'Ich interessiere mich für eine Website.', type: 'message' }
        ]);
        return 'Gern. Für ein Erstgespräch ist WhatsApp der schnellste Weg. Alternativ könnt ihr das Kontaktformular nutzen und kurz beschreiben, worum es geht.';
      }

      if (asksTime) {
        setNextChatbotActions([
          { label: 'Projekt einschätzen', message: 'Ja, ich möchte mein Projekt einschätzen lassen.', type: 'message', primary: true },
          { label: 'WhatsApp', url: createWhatsAppUrl('Hallo AgRup Media, ich möchte kurz die mögliche Dauer für mein Projekt einschätzen lassen.'), type: 'link', external: true }
        ]);
        return 'Das hängt vom Umfang ab. Eine kleine Landingpage ist meist schneller umgesetzt als eine Website mit mehreren Seiten, Terminbuchung oder Chatbot. Mit ein paar Eckdaten lässt sich der Zeitrahmen deutlich besser einschätzen.';
      }

      if (asksProcess) {
        setNextChatbotActions([
          { label: 'Website anfragen', message: 'Ich interessiere mich für eine Website.', type: 'message', primary: true },
          { label: 'Erstgespräch vereinbaren', message: 'Ich möchte ein Erstgespräch vereinbaren.', type: 'message' },
          { label: 'Leistungen ansehen', url: chatbotServicesUrl, type: 'link' }
        ]);
        return 'Unser Ablauf ist klar und einfach: Erstgespräch, Konzept, Umsetzung und Übergabe. Im Erstgespräch klären wir Ziel, Zielgruppe, Inhalte und sinnvolle Funktionen. Danach entwickeln wir eine saubere digitale Lösung, die zu eurem Unternehmen passt.';
      }

      if (asksImprint) {
        setNextChatbotActions([
          { label: 'Impressum öffnen', url: chatbotImprintUrl, type: 'link' },
          { label: 'Kontaktformular', url: chatbotContactUrl, type: 'link' }
        ]);
        return 'Das Impressum findet ihr über den Footer oder direkt hier. Dort stehen Anschrift, Kontakt und verantwortliche Personen.';
      }

      if (asksWhat) {
        setNextChatbotActions(getDefaultChatbotActions());
        return 'AgRup Media entwickelt Websites, KI-Chatbots, Terminbuchungssysteme, digitale Systeme und Mediendesign für lokale Unternehmen, Dienstleister, Selbstständige und kleine bis mittelständische Unternehmen in Rendsburg, Eckernförde, Kiel und Schleswig-Holstein.';
      }

      setNextChatbotActions(getDefaultChatbotActions());
      return 'Dazu habe ich keine eindeutige Antwort. Ich kann dir aber bei Fragen zu Websites, KI-Chatbots, Terminbuchung, Mediendesign, Preisen, Ablauf, Datenschutz und Kontakt helfen.';
    }

    function submitChatbotMessage(rawMessage) {
      const message = String(rawMessage || '').trim();

      if (!message) {
        return;
      }

      addChatbotMessage(message, 'user');
      renderChatbotActions([]);

      if (chatbotInput) {
        chatbotInput.value = '';
      }

      queueChatbotReply(createChatbotReply(message));
    }

    renderChatbotActions(getDefaultChatbotActions());

    if (chatbotWidget && chatbotToggle) {
      chatbotToggle.addEventListener('click', () => {
        const isOpen = chatbotWidget.classList.toggle('is-open');
        chatbotToggle.setAttribute('aria-label', isOpen ? 'Chat schließen' : 'Chat öffnen');
        chatbotToggle.setAttribute('aria-expanded', String(isOpen));
        chatbotToggle.tabIndex = isOpen ? -1 : 0;

        if (isOpen && chatbotInput) {
          setTimeout(() => chatbotInput.focus(), 80);
        }
      });
    }

    if (chatbotClose && chatbotWidget && chatbotToggle) {
      chatbotClose.addEventListener('click', () => {
        chatbotWidget.classList.remove('is-open');
        chatbotToggle.setAttribute('aria-label', 'Chat öffnen');
        chatbotToggle.setAttribute('aria-expanded', 'false');
        chatbotToggle.tabIndex = 0;
      });
    }

    if (chatbotForm && chatbotInput) {
      chatbotForm.addEventListener('submit', event => {
        event.preventDefault();
        submitChatbotMessage(chatbotInput.value);
      });

      chatbotInput.addEventListener('keydown', event => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          submitChatbotMessage(chatbotInput.value);
        }
      });
    }

    languageToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const switcher = toggle.closest('.language-switcher');
        if (!switcher) {
          return;
        }

        const isOpen = switcher.classList.toggle('is-open');

        languageSwitchers.forEach(otherSwitcher => {
          if (otherSwitcher !== switcher) {
            otherSwitcher.classList.remove('is-open');
          }
        });

        languageToggles.forEach(otherToggle => {
          otherToggle.setAttribute('aria-expanded', String(otherToggle === toggle && isOpen));
        });
      });
    });

    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang || 'en');
        languageSwitchers.forEach(switcher => switcher.classList.remove('is-open'));
        languageToggles.forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
      });
    });

    document.addEventListener('click', event => {
      if (!event.target.closest('.language-switcher')) {
        languageSwitchers.forEach(switcher => switcher.classList.remove('is-open'));
        languageToggles.forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
      }
    });

    function initSectionFlow() {
      const flowItems = Array.from(document.querySelectorAll('.section, .seo-section, .subpage'));

      if (!flowItems.length) {
        return;
      }

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || !('IntersectionObserver' in window)) {
        flowItems.forEach(item => item.classList.add('is-visible'));
        return;
      }

      document.documentElement.classList.add('motion-ready');

      const observer = new IntersectionObserver((entries, sectionObserver) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          sectionObserver.unobserve(entry.target);
        });
      }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: .12
      });

      flowItems.forEach((item, index) => {
        item.style.setProperty('--flow-delay', Math.min(index * 35, 160) + 'ms');
        observer.observe(item);
      });

      requestAnimationFrame(() => {
        flowItems.forEach(item => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight * .92 && rect.bottom > 0) {
            item.classList.add('is-visible');
            observer.unobserve(item);
          }
        });
      });
    }

    // Language initialization is handled by assets/language-chatbot.js.
    initSectionFlow();
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

(function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (!contactForm || contactForm.dataset.bound === 'true') return;
  contactForm.dataset.bound = 'true';
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (formStatus) formStatus.textContent = 'Anfrage wird gesendet...';
    if (submitButton) submitButton.disabled = true;
    try {
      const response = await fetch(contactForm.action, { method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' } });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Senden fehlgeschlagen');
      contactForm.reset();
      if (formStatus) formStatus.textContent = 'Danke. Deine Anfrage wurde gesendet.';
    } catch (error) {
      if (formStatus) formStatus.textContent = 'Das hat nicht geklappt. Bitte schreibt direkt an info@agrupmedia.de.';
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
})();


(function initPodcastFeature() {
// Platzhalter: URLs und Thumbnails ersetzen, sobald echte Folgen final sind.
    const podcastEpisodes = [
      {
        episode: 'Folge 3',
        title: 'Gehört Kriminalität inzwischen zur Tagesordnung?',
        date: '2026-06-07',
        thumbnail: '/assets/podcast/inside-agrup-folge-3.png',
        alt: 'Thumbnail von Inside AgRup Folge 3: Gehört Kriminalität inzwischen zur Tagesordnung?',
        description: 'Ein aktuelles Ereignis aus unserer Stadt ist der Anlass für ein ehrliches Gespräch über Kriminalität, Sicherheit und das Gefühl, wie geschützt man sich im Alltag wirklich fühlt.',
        url: ''
      },
      {
        episode: 'Folge 2',
        title: 'Sind wir bald alle Kryptomillionäre?',
        date: '2026-05-31',
        thumbnail: '/assets/podcast/inside-agrup-folge-2.png',
        alt: 'Thumbnail von Inside AgRup Folge 2: Sind wir bald alle Kryptomillionäre?',
        description: 'Krypto, Aktien, ETFs und die Frage, wie viel Hype wirklich dahintersteckt. Wir sprechen über unsere eigenen Erfahrungen, unsere Meinung zum Investieren und darüber, warum finanzielle Freiheit mehr braucht als schnelle Versprechen.',
        url: ''
      },
      {
        episode: 'Folge 1',
        title: 'Das Dilemma um Social Media',
        date: '2026-05-24',
        thumbnail: '/assets/podcast/inside-agrup-folge-1.png',
        alt: 'Thumbnail von Inside AgRup Folge 1: Das Dilemma um Social Media',
        description: 'Social Media schafft Chancen, lenkt aber auch ab. In dieser Folge sprechen wir über Fokus, Selbstbild, Erfolg und warum Social Media trotzdem ein wichtiges Werkzeug für Unternehmer und Creator ist.',
        url: ''
      }
    ];

    function formatEpisodeDate(value) {
      if (!value) return '';
      const date = new Date(value + 'T12:00:00');
      if (Number.isNaN(date.getTime())) return '';
      return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
    }

    function setEpisodeOpen(item, shouldOpen) {
      const button = item.querySelector('.episode-toggle');
      const panel = item.querySelector('.episode-panel');
      item.classList.toggle('is-active', shouldOpen);
      if (button) button.setAttribute('aria-expanded', String(shouldOpen));
      if (panel) {
        panel.setAttribute('aria-hidden', String(!shouldOpen));
        panel.inert = !shouldOpen;
      }
    }

    function renderPodcastEpisodes() {
      const podcastModule = document.querySelector('[data-podcast-module]');
      const toggle = document.querySelector('[data-podcast-toggle]');
      const panel = document.querySelector('[data-podcast-panel]');
      const timeline = document.querySelector('[data-podcast-timeline]');
      if (!podcastModule || !toggle || !panel || !timeline) return;

      panel.inert = true;
      const sortedEpisodes = [...podcastEpisodes].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
      timeline.innerHTML = '';
      const syncPodcastPanelHeight = () => {
        if (podcastModule.classList.contains('is-open')) {
          panel.style.maxHeight = timeline.scrollHeight + 'px';
        }
      };

      sortedEpisodes.forEach((episode, index) => {
        const item = document.createElement('li');
        const panelId = 'inside-agrup-episode-' + index;
        item.className = 'podcast-episode';

        const button = document.createElement('button');
        button.className = 'episode-toggle';
        button.type = 'button';
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', panelId);

        const episodeLabel = document.createElement('span');
        episodeLabel.className = 'episode-label';
        episodeLabel.textContent = episode.episode;

        const meta = document.createElement('span');
        meta.className = 'episode-meta';

        const title = document.createElement('span');
        title.className = 'episode-title';
        title.textContent = episode.title;
        meta.appendChild(title);

        const formattedDate = formatEpisodeDate(episode.date);
        if (formattedDate) {
          const date = document.createElement('span');
          date.className = 'episode-date';
          date.textContent = formattedDate;
          meta.appendChild(date);
        }

        const chevron = document.createElement('span');
        chevron.className = 'episode-chevron';
        chevron.setAttribute('aria-hidden', 'true');
        chevron.textContent = '↓';

        button.append(episodeLabel, meta, chevron);

        const episodePanel = document.createElement('div');
        episodePanel.className = 'episode-panel';
        episodePanel.id = panelId;
        episodePanel.setAttribute('aria-hidden', 'true');
        episodePanel.inert = true;

        const clip = document.createElement('div');
        clip.className = 'episode-panel-clip';

        const content = document.createElement('div');
        content.className = 'episode-content';

        const image = document.createElement('img');
        image.className = 'episode-thumb';
        image.src = episode.thumbnail;
        image.alt = episode.alt;
        image.loading = 'lazy';

        const copy = document.createElement('div');
        copy.className = 'episode-description';

        const description = document.createElement('p');
        description.textContent = episode.description;
        copy.appendChild(description);

        if (episode.url) {
          const link = document.createElement('a');
          link.className = 'episode-link';
          link.href = episode.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = 'Folge extern öffnen ↗';
          copy.appendChild(link);
        }

        content.append(image, copy);
        clip.appendChild(content);
        episodePanel.appendChild(clip);
        item.append(button, episodePanel);
        timeline.appendChild(item);

        button.addEventListener('click', () => {
          const shouldOpen = !item.classList.contains('is-active');
          timeline.querySelectorAll('.podcast-episode').forEach(otherItem => setEpisodeOpen(otherItem, false));
          if (shouldOpen) setEpisodeOpen(item, true);
          requestAnimationFrame(syncPodcastPanelHeight);
          window.setTimeout(syncPodcastPanelHeight, 380);
        });
      });

      if (!toggle.dataset.podcastBound) {
        toggle.dataset.podcastBound = 'true';
        toggle.addEventListener('click', () => {
          const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';
          podcastModule.classList.toggle('is-open', shouldOpen);
          toggle.setAttribute('aria-expanded', String(shouldOpen));
          toggle.textContent = shouldOpen ? 'Folgen ausblenden' : 'Alle Folgen ansehen';
          panel.setAttribute('aria-hidden', String(!shouldOpen));
          panel.inert = !shouldOpen;
          panel.style.maxHeight = shouldOpen ? timeline.scrollHeight + 'px' : '';
          if (!shouldOpen) timeline.querySelectorAll('.podcast-episode').forEach(item => setEpisodeOpen(item, false));
          if (shouldOpen) requestAnimationFrame(syncPodcastPanelHeight);
        });
      }
    }

    
    renderPodcastEpisodes();
})();

})();
