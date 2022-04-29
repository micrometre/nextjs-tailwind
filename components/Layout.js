import Image  from "next/image";
import Nav from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      <div>
      <div className="relative flex flex-col justify-center min-h-screen py-6 overflow-hidden bg-green-500 sm:py-12">
          <Image src="/images/darkbg.jpg" layout="fill" alt=""
           />
        </div>
        <Nav />
      </div>
      {children}
    </>
  );
}
