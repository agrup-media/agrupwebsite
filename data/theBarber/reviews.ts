export const reviews = [
  {
    author: "Ma6l6ox *",
    rating: 5,
    text: "Moin, ich gehe seit der Eröffnung in den Shop und bin mit der Leistung von Göhkan immer sehr zufrieden. Das Ambiente ist immer sehr gastfreundlich, es gibt leckeren Tee und zu der Top Arbeit / Ausführung egal ob Bart oder Kopf muss man ...",
  },
  {
    author: "Peter Kuchenbecker",
    rating: 5,
    text: "Heute war ich zum ersten Mal bei dem Barber Shop in Rendsburg. Der Laden ist toll eingerichtet und die Mitarbeiter waren sehr freundlich und kompetent. Ich komme gerne wieder.",
  },
  {
    author: "Dirk L.",
    rating: 5,
    text: "War schon viele Male dort, bei verschiedenen Leuten. Kann mich nicht daran erinnern, dass das Ergebnis mal nicht meiner Erwartung entsprach. Bis jetzt immer top! Der Laden ist ansprechend eingerichtet, Chef + Mitarbeiter immer freundlich. ...",
  },
  {
    author: "Sinan Otluoglu",
    rating: 5,
    text: "Ein sehr schöner Laden mit viel Liebe eingerichtet. Der Geschäftsführer ist freundlich zu den Gästen und kümmert sich um das Telefon und richtet die Termine, dazu bietet er warme oder kalte Getränke an. Keine lange Wartezeit, aktuelle Zeitschriften vorhanden, dazu kann man das W-Lan auch nutzen, wenn bedarf sein sollte. Die denken an alles.",
  },
  {
    author: "A S",
    rating: 5,
    text: "Ich gehe unregelmäßig hin da ich häufig alles zuhause selber mache. Aber ab und an möchte ich mich dann doch mal ordentlich zurecht machen lassen. Da ist es hier am besten. Die Mitarbeiter sind super freundlich und verstehen ihr Handwerk. Komme immer wieder gern.",
  },
  {
    author: "M. B.",
    rating: 5,
    text: "Das ist der beste Barber in der Umgebung! Faire Preise und freundliches Personal die alle ihr Handwerk verstehen. Ich besuche den Barber immer sehr gerne. Meine Frau übrigens auch. Eine Terminvereinbarung ist notwendig da spontan meistens keine Kapazität vorhanden ist.",
  },
  {
    author: "Peter Riese",
    rating: 5,
    text: "Sehr nettes und freundliches Team, bin auch ohne Termin sofort dran gekommen. Der Haarschnitt (Maschinenschnitt) war perfekt inkl. Augenbrauen, Ohrhaare. Bin neu in Rendsburg, wird mit Sicherheit mein neuer Stamm Friseur.",
  },
  {
    author: "Louis Busch (Louis)",
    rating: 5,
    text: "Mit Abstand der beste Barber in Rendsburg und Umgebung! Der Laden ist sauber, Schön und sehr angenehm eingerichtet. Die Mitarbeiter sind unfassbar nett und hilfsbereit, die Geräte sind sauber und frisch, die Jungs schneiden wie Weltmeister und mehr muss man glaub ich nicht sagen. 10/10",
  },
  {
    author: "To Se",
    rating: 5,
    text: "Sehr netter Empfang am Tresen. Schönes Ambiente. Gute Arbeit des Friseurs, schnell, sauber, präzise. Ich hatte Maschinenschnitt, Haarentfernung Ohren und Nase. Eine wirklich guter Arabischer Barber im Norden. Prima dass es ihn hier gibt. Empfehlung!",
  },
  {
    author: "Sarah Gebert",
    rating: 5,
    text: "Mein Lebensgefährte brauchte einen schönen Schnitt für seinen wilden Bartwuchs. Spontan habe ich angerufen & für heute sogar noch einen Termin bekommen. Wir wurden richtig freundlich in Empfang genommen. Das Ambiente ist außergewöhnlich & man fühlt sich gleich wohl. Nach dem Stutzen des Bartes, sah mein Freund wie ein neuer Mensch aus. Sehr akurat geschnitten. Einfach sehr zu empfehlen. Toller Service. Wir bzw. Mann kommt wieder!",
  },
  {
    author: "Michael Herzog",
    rating: 5,
    text: "The Barber ist ein Friseur mit einer klassisch wirkenden aber doch sehr modernen Einrichtungen. Ich war bis jetzt bei zwei unterschiedlichen Friseuren und beide sind absolut freundlich, zuvorkommend und machen ihre Arbeit ausgesprochen gründlich und mit grosser Passion. Ich bin sehr froh, meinen neuen Friseur gefunden zu haben.",
  },
  {
    author: "Donar Eisengott",
    rating: 5,
    text: "Vor einem Jahr das erste Mal dort gewesen, seitdem lass ich niemanden anderen mehr an meine Haare und Bart. Super freundlich und sehr gewissenhafte Arbeit. Ein tolles Team. Hier ist Wohlfühlen angesagt. Eine echte 5- Sterne Weiterempfehlung.",
  },
] as const;

export type Review = (typeof reviews)[number];
