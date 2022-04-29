import Image  from "next/image";
export default function Layout({ children }) {
  return (
    <>
      <div>
      <div className="relative flex flex-col justify-center min-h-screen py-6 overflow-hidden bg-green-500 sm:py-12">
          <Image src="/images/beams.jpg" layout="fill" alt="" 
          className=
          "" 
          width="1308" />
        </div>
          {children}
      </div>
    </>
  );
}
