import { cn } from "@/lib/utils";

const logos = [
  "CORAFILM",
  "The Shoe",
  "WCFF",
  "Pantera CineFest",
  "Tubi",
];

const Logo = ({ name, className }: { name: string; className?: string }) => (
  <li
    className={cn(
      "flex items-center justify-center text-center text-2xl font-bold text-gray-400",
      className
    )}
  >
    {name}
  </li>
);


const LogoCarousel = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
        {logos.map((logo, index) => (
          <Logo key={index} name={logo} />
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <Logo key={index} name={logo} />
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
