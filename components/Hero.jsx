import Layout from "../components/Layout";
export function Hero() {
  return (
    <div className="relative overflow-hidden bg-transparnet">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 ">
        <div className="relative mx-auto px-7 sm:px-6 sm:static">
            <h1 className="text-4xl font-extrabold tracking-tight text-white font sm:text-6xl">
              Electrical specialists serving surrey and surrounding areas.
            </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
