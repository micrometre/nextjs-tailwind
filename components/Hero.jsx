import Layout from "../components/Layout";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Electrical specialists serving surrey and surrounding areas.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  }
];
export function Hero() {
  return (
      <div className="py-12 mt-10 bg-white">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                    <p className="text-4xl font-extrabold leading-6 tracking-tight text-white font sm:text-6xl">
                      {feature.name}
                    </p>
                </div>
              ))}
      </div>
  );
}

export default Hero;
