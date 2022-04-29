import Image  from "next/image";
import Nav from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      <div>
      <div 
      >
          <Image src="/images/darkbg.jpg" layout="fill" alt=""
           />
        </div>
        <Nav />
      </div>
      {children}
    </>
  );
}
