import Link from "next/link";

const Footer = () => {
  const links = [
    {
      name: "Verband",
      href: "https://wingtzun.de/",
      target: "_blank",
    },
    {
      name: "Dai Sifu Nik",
      href: "https://wingtzun.de/sifuniko/",
      target: "_blank",
    },
    {
      name: "Linktipps",
      href: "/linktipps",
      target: "_self",
    },
    {
      name: "Kontakt",
      href: "kontakt",
      target: "_self",
    },
    {
      name: "Datenschutz",
      href: "datenschutz",
      target: "_self",
    },
    {
      name: "Impressum",
      href: "impressum",
      target: "_self",
    },
  ];
  return (
    <footer className="text-center pt-4">
      <div className="container">
        <ul className="list-inline d-flex flex-wrap justify-content-start justify-content-md-center">
          {links &&
            links.map(
              (link) =>
                link && (
                  <li className="px-3" key={link.href}>
                    <Link href={link.href} target={link.target}>
                      {link.name}
                    </Link>
                  </li>
                )
            )}
        </ul>
      </div>
      <div className="sup-footer pt-2 pb-3">
        <div className="container">
          <p className="py-3 text-uppercase" style={{ fontSize: "12px" }}>
            © <span id="year">2024</span> by Wing Tzun Kampfkunstschule in
            München
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
