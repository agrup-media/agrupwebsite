export type ShowcaseProject = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
  timeline?: {
    label: string;
    title: string;
    description: string;
  }[];
  translations?: {
    en?: {
      subtitle: string;
      timeline?: {
        label: string;
        title: string;
        description: string;
      }[];
    };
  };
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    title: "The Barber Rendsburg",
    subtitle: "Webseite für einen modernen Barbershop",
    image: "/projects/the-barber-preview.jpg",
    url: "https://thebarberrendsburg.com/",
    timeline: [
      {
        label: "Start",
        title: "Neue Webseite gewünscht",
        description:
          "Der Kunde wollte einen modernen Webauftritt für seinen Barbershop, der den Laden professionell präsentiert und schnell online gehen kann."
      },
      {
        label: "Tag 1-3",
        title: "Demoversion erstellt",
        description: "Innerhalb von drei Tagen haben wir eine erste Demoversion der Webseite aufgebaut."
      },
      {
        label: "Tag 3",
        title: "Konzept vorgestellt & freigegeben",
        description: "Die Demo wurde dem Kunden präsentiert. Noch am selben Tag hat er dem Konzept zugestimmt."
      },
      {
        label: "Tag 3",
        title: "Fotoshooting vor Ort",
        description:
          "Direkt nach der Freigabe haben wir ein Fotoshooting im Laden durchgeführt, um echte Bilder für die Webseite zu erstellen."
      },
      {
        label: "Danach",
        title: "Bilder in die Webseite integriert",
        description:
          "Die neuen Fotos wurden in die Demoversion eingebaut, damit der Webauftritt authentisch, hochwertig und passend zum Barbershop wirkt."
      },
      {
        label: "Finaler Check",
        title: "Letzte Abstimmung",
        description: "Der Kunde hat die überarbeitete Webseite geprüft und letzte Rückmeldungen gegeben."
      },
      {
        label: "Vor dem Launch",
        title: "Domain & Hosting eingerichtet",
        description:
          "Vor der Veröffentlichung haben wir die passende Domain organisiert und das Hosting über AgRup Media vorbereitet."
      },
      {
        label: "Tag 6",
        title: "Webseite veröffentlicht",
        description:
          "Nach drei weiteren Tagen wurde die Webseite live geschaltet - inklusive Domain, Hosting, technischer Einrichtung, Google-Unternehmenskonto und personalisierter Business-Mail."
      },
      {
        label: "Nach dem Webseitenstart",
        title: "Visitenkarten umgesetzt",
        description:
          "Nach dem erfolgreichen Launch entschied sich der Kunde zusätzlich für neue Visitenkarten. Wir haben das passende Design erstellt, die Freigabe erhalten und die Bestellung vorbereitet."
      }
    ],
    translations: {
      en: {
        subtitle: "Website for a modern barbershop",
        timeline: [
          {
            label: "Start",
            title: "New website requested",
            description:
              "The client wanted a modern web presence for his barbershop that presents the shop professionally and can go online quickly."
          },
          {
            label: "Day 1-3",
            title: "Demo version created",
            description: "Within three days, we built the first demo version of the website."
          },
          {
            label: "Day 3",
            title: "Concept presented and approved",
            description: "The demo was presented to the client. He approved the concept on the same day."
          },
          {
            label: "Day 3",
            title: "On-site photo shoot",
            description:
              "Directly after approval, we carried out a photo shoot in the shop to create authentic images for the website."
          },
          {
            label: "Afterwards",
            title: "Images integrated into the website",
            description:
              "The new photos were integrated into the demo version so the web presence feels authentic, high-quality and suited to the barbershop."
          },
          {
            label: "Final check",
            title: "Final coordination",
            description: "The client reviewed the updated website and gave final feedback."
          },
          {
            label: "Before launch",
            title: "Domain and hosting set up",
            description:
              "Before publication, we organized the right domain and prepared hosting through AgRup Media."
          },
          {
            label: "Day 6",
            title: "Website published",
            description:
              "After three more days, the website went live - including domain, hosting, technical setup, Google Business Profile and personalized business email."
          },
          {
            label: "After the website launch",
            title: "Business cards created",
            description:
              "After the successful launch, the client also chose new business cards. We created the matching design, received approval and prepared the order."
          }
        ]
      }
    }
  }
];
