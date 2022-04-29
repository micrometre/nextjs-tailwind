import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <>
      <div className="flex flex-row justify-center w-full mt-16">
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={200}
          height={300}
        />
      </div>
    </>
  );
}
export default Logo;
