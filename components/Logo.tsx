import Image from "next/image";
import logo from "../img/logo.png";

export default function Logo() {
  return (
    <>
      <Image src={logo} alt="logo" height="40px" width="40px" />
    </>
  );
}
