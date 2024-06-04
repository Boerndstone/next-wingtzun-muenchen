"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";

const Navigation = () => {
  const pathname = usePathname();
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
      href: "/training",
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
                          href={link.href}
                          className={`nav-link ${
                            pathname === link.href ? "active" : ""
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                )}
            </ul>
            <Link href="/kontakt" className="nav-link">
              Kostenloses Probetraining
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
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
              {links &&
                links.map(
                  (link) =>
                    link && (
                      <li className="nav-item" key={link.href}>
                        <Link
                          href={link.href}
                          className={`nav-link  ${
                            pathname === link.href
                              ? "active text-white"
                              : "text-primary"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                )}
            </ul>
            <hr />
            <p className="fs-6 mb-3 d-flex align-items-center">
              <FiPhone
                style={{ marginRight: "5px", height: "20px", width: "auto" }}
              />
              0177 6460429
            </p>
            <p className="fs-6 mb-3 d-flex align-items-center">
              <FiPhone
                style={{ marginRight: "5px", height: "20px", width: "auto" }}
              />
              01577 2035061
            </p>
            <p className="fs-6 mb-3 d-flex align-items-center">
              <FaRegEnvelope
                style={{ marginRight: "5px", height: "20px", width: "auto" }}
              />
              info(at)wingtzun-muenchen.de
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
