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
    ]
  }
];
