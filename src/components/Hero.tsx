import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, User } from 'lucide-react';
import { HERO_PORTRAIT_URL } from '../data/portfolioData';

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.18em] uppercase text-[#7050F5] dark:text-[#9B82FF]">
              Hello, I&apos;m Pratyush
            </p>

            <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-[#292943] sm:text-5xl lg:text-[3.75rem] dark:text-white">
              Designing Ideas.
              <br />
              Creating{' '}
              <span className="text-[#7050F5] dark:text-[#8C70FF]">
                Visual Impact.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.7] text-[#565672] sm:text-[17px] dark:text-[#B4B4C9]">
              I&apos;m Pratyush Kumar, a passionate Graphic Designer who transforms
              ideas into meaningful and eye-catching visuals. I create designs
              that communicate, connect, and leave a lasting impression.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex min-h-[46px] shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl bg-[#7050F5] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#7050F5]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5E3EE0] hover:shadow-md hover:shadow-[#7050F5]/30"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[46px] shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-[#DFDFEC] bg-white px-6 py-3 text-sm font-semibold text-[#292943] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7050F5]/50 hover:text-[#7050F5] dark:border-[#29293D] dark:bg-[#14141E] dark:text-white dark:hover:border-[#8C70FF]/60 dark:hover:text-[#9B82FF]"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Let&apos;s Talk
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-[#6A6A84] dark:text-[#9191AA]">
              Graphic Designer <span aria-hidden="true" className="mx-1.5 text-[#7050F5]">|</span> Visual Creator
            </p>
          </motion.div>

          {/* Right Side: Portrait Frame with Subtle Violet Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative w-full max-w-[380px]">
              {/* Soft Ambient Purple Aura */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-full bg-radial from-[#7050F5]/16 via-[#7050F5]/5 to-transparent blur-2xl dark:from-[#7050F5]/25"
              />

              {/* Subtle Offset Geometric Frame */}
              <div
                aria-hidden="true"
                className="absolute -top-3.5 -right-3.5 bottom-3.5 left-3.5 rounded-[28px] border border-[#7050F5]/30 dark:border-[#8C70FF]/35"
              />

              {/* Corner Accent Brackets */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -left-2.5 h-16 w-16 rounded-bl-[24px] border-b-2 border-l-2 border-[#7050F5] dark:border-[#8C70FF]"
              />

              {/* Portrait Container */}
              <div className="relative overflow-hidden rounded-[24px] border border-[#EAEAF2] bg-[#F6F6FA] shadow-xl shadow-[#292943]/8 dark:border-[#242436] dark:bg-[#14141E] dark:shadow-black/40">
                {!imageFailed ? (
                  <img
                    src={HERO_PORTRAIT_URL}
                    alt="Pratyush Kumar — Graphic Designer Portrait"
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-[#F3F2FA] p-8 text-center dark:bg-[#161622]">
                    <User className="mb-3 h-12 w-12 text-[#7050F5]" />
                    <span className="font-display text-lg font-semibold text-[#292943] dark:text-white">
                      Pratyush Kumar
                    </span>
                    <span className="mt-1 text-sm text-[#6A6A84] dark:text-[#9898B0]">
                      Graphic Designer
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
