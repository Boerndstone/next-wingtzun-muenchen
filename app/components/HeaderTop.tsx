import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="container py-3 d-none d-lg-block">
      <Link href="/">
        <Image
          src="images/svg/wingtzun.svg"
          width={386}
          height={66}
          alt="Wing Tsun Kampfkunstschule"
        />
      </Link>
    </div>
  );
};

export default HeaderTop;
