import { ArrowDown } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner.webp"
          srcSet="/banner-mobile.webp 900w, /banner.webp 2200w"
          sizes="100vw"
          alt=""
          role="presentation"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_22%]"
        />
        {/* Uniform dark tint guarantees text contrast regardless of what's behind it,
            plus a vertical gradient that blends the photo into the page background */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
      </div>

      {/* Stars sprinkled over the photo, local to this section */}
      <StarBackground fixed={false} density={16000} className="z-[1]" />

      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <div className="space-y-3 md:space-y-4">
          <p className="text-xs md:text-base uppercase tracking-[0.3em] text-white/70 opacity-0 animate-fade-in [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight opacity-0 animate-fade-in-delay-1 [text-shadow:0_4px_24px_rgba(0,0,0,0.85)]">
            <span className="text-primary">Juan F</span>{" "}
            <span className="text-gradient">Castaño</span>
          </h1>

          <p className="text-sm md:text-lg font-medium text-white/85 opacity-0 animate-fade-in-delay-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            Mechanical Engineer · New York University
          </p>

          <div className="pt-4 md:pt-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Explore My Workshop →
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-white/70 mb-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
