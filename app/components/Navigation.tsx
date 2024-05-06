"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Wing Tzun",
      href: "/wingtzun",
    },
    {
      label: "Angebot",
      href: "/angebot",
    },
    {
      label: "Preise",
      href: "/preise",
    },
    {
      label: "Das Team",
      href: "/schule",
    },
    {
      label: "News",
      href: "/termine",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },

    ,
  ];
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg bg-primary py-3 py-md-0 border-bottom">
        <div className="container">
          <div className="d-flex align-content-center d-md-none">
            <a
              className="btn btn-white border text-white flex-shrink-1"
              type="button"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <span className="navbar-toggler-icon text-white"></span>
            </a>
            <Image
              src="images/svg/wingtzunWhite.svg"
              width={234}
              height={40}
              alt="Wing Tsun Kampfkunstschule"
              className="ms-5 img-fluid"
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links &&
                links.map(
                  (link) =>
                    link && (
                      <li className="nav-item" key={link.href}>
                        <Link
                          className="nav-link"
                          key={link.href}
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                )}
            </ul>
            <a
              href="kontakt.html"
              className="text-white text-uppercase fw-semibold"
              style={{ fontSize: "14px" }}
            >
              Kostenloses Probetraining
            </a>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        // tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <a className="brand" href="index.html">
              <Image
                src="images/svg/wingtzun.svg"
                width={234}
                height={40}
                alt="Wing Tsun Kampfkunstschule"
                className="img-fluid"
              />
            </a>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  id="home-link"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  id="wingtzun"
                  href="wingtzun.html"
                >
                  Wing Tzun
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  id="training"
                  href="training.html"
                >
                  Angebot
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  id="preise"
                  href="preise.html"
                >
                  Preise
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  id="schule"
                  href="schule.html"
                >
                  Das Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  id="termine"
                  href="termine.html"
                >
                  News
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  id="kontakt"
                  href="kontakt.html"
                >
                  Kontakt
                </a>
              </li>
            </ul>
            <hr />
            <p className="fs-6 mb-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                style={{
                  height: "20px",
                  width: "auto",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              0177 6460429
            </p>
            <p className="fs-6 mb-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                style={{
                  height: "20px",
                  width: "auto",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              01577 2035061
            </p>
            <p className="fs-6 mb-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                style={{
                  height: "20px",
                  width: "auto",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              info(at)wingtzun-muenchen.de
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
