const singleServices = [
  {
    title: "Schneiden, Stylen",
    price: "20 €",
  },
  {
    title: "Waschen, Schneiden, Styling",
    price: "23 €",
  },
  {
    title: "Maschinenhaarschnitt",
    detail: "0,8 bis 22 mm",
    price: "13 €",
  },
  {
    title: "Kinderhaarschnitt",
    detail: "bis 9 Jahre",
    price: "16 €",
  },
  {
    title: "Bartrasur + Kopfmassage",
    price: "15 €",
  },
  {
    title: "Kopfrasur",
    price: "15 €",
  },
  {
    title: "Haarentfernung mit Wachs",
    detail: "Ohren, Nase, Wangen",
    price: "3 €",
  },
  {
    title: "Ohren mit Feuer",
    price: "2 €",
  },
  {
    title: "Augenbrauenzupfen",
    price: "7 €",
  },
];

const packageServices = [
  {
    title: "Paket 1",
    detail:
      "Waschen, Schneiden, Styling, Bartrasur, Augenbrauenzupfen, Ohren-, Nasen- und Wangenhaare entfernen",
    price: "45 €",
  },
  {
    title: "Paket 2",
    detail:
      "Waschen, Schneiden, Styling, Bartrasur, Augenbrauenzupfen, Wangenhaarentfernung",
    price: "40 €",
  },
  {
    title: "Paket 3",
    detail: "Bartrasur, Augenbrauenzupfen und Ohrhaare entfernen",
    price: "20 €",
  },
];

const renderBoardItem = (service: {
  title: string;
  detail?: string;
  price: string;
}) => (
  <li key={service.title}>
    <span>
      <strong>{service.title}</strong>
      {service.detail ? <em>{service.detail}</em> : null}
    </span>
    <b>{service.price}</b>
  </li>
);

export function ServicesSection() {
  return (
    <section id="leistungen" className="section-reveal wood-bg py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="blackboard-menu">
          <div className="blackboard-menu__inner">
            <div className="blackboard-menu__header">
              <p className="blackboard-menu__eyebrow">The Barber Rendsburg</p>
              <h2>Unsere Preise</h2>
            </div>

            <div className="blackboard-menu__columns">
              <section aria-label="Einzelleistungen">
                <p className="blackboard-menu__column-title">Einzelleistungen</p>
                <ul className="blackboard-menu__list">
                  {singleServices.map(renderBoardItem)}
                </ul>
              </section>

              <section aria-label="Pakete">
                <p className="blackboard-menu__column-title">Pakete</p>
                <ul className="blackboard-menu__list blackboard-menu__list--packages">
                  {packageServices.map(renderBoardItem)}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
