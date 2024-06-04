import React, { FC } from "react";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

interface CustomLinksProps {
  href: string;
  name: string;
  extraClass?: string[];
  target?: string;
  icon?: boolean;
}

const CustomLink: React.FC<CustomLinksProps> = ({
  href,
  name,
  extraClass = [],
  target = "_self",
  icon = true,
}) => {
  return (
    <Link
      href={href}
      className={`text-primary mt-5 fs-5 ${extraClass.join(" ")}`}
      target={target}
    >
      {name}
      {icon == false ? "" : <FiChevronRight color="#305096" size={23} />}
    </Link>
  );
};

export default CustomLink;
