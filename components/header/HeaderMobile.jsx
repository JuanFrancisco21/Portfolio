import Link from "next/link";
import Image from "next/image";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image className="logo_light" src='/img/logo/dark.png' alt="brand" width="92" height="37"/>
          <Image className="logo_dark" src='/img/logo/dark.png' alt="brand" width="92" height="37"/>
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
