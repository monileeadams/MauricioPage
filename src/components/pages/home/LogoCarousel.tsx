import Image from 'next/image';
import { cn } from "@/lib/utils";
import { productionLogos } from '@/lib/data';

const LogoCarousel = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll">
        {productionLogos.map((logo, index) => (
          <li key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
              style={{ height: `${logo.height}px` }}
            />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll" aria-hidden="true">
        {productionLogos.map((logo, index) => (
           <li key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
              style={{ height: `${logo.height}px` }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
