'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.classList.add('loading');

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`
            }}
          >
            <Image
              src="/white_bg_(1).svg"
              alt="Juniper Cabinetry"
              width={160}
              height={160}
              className="w-full h-full"
              priority
            />
          </div>

          <div className="absolute inset-0 opacity-20">
            <Image
              src="/white_bg_(1).svg"
              alt="Juniper Cabinetry"
              width={160}
              height={160}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="mt-8 w-48 h-1 bg-brand-brown/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-green transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
