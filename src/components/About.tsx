import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, MapPin, User } from 'lucide-react';
import { PORTRAIT_URL } from '../data/portfolioData';

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="about"
      className="border-t border-[#EFEFF6] bg-[#FAFAFD] py-20 sm:py-24 lg:py-28 dark:border-[#1B1B29] dark:bg-[#0F0F17]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[360px] lg:mx-0">
              <div className="overflow-hidden rounded-full border-4 border-white shadow-lg shadow-[#292943]/8 ring-1 ring-[#7050F5]/25 dark:border-[#1B1B29] dark:shadow-black/50 dark:ring-[#8C70FF]/35">
                {!imageFailed ? (
                  <img
                    src={PORTRAIT_URL}
                    alt="Pratyush Kumar"
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="aspect-square w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-square w-full flex-col items-center justify-center bg-[#F3F2FA] dark:bg-[#14141E]">
                    <User className="h-12 w-12 text-[#7050F5]" />
                  </div>
                )}
              </div>
              <div
                aria-hidden="true"
                className="absolute -right-2 -bottom-2 -z-10 h-28 w-28 rounded-full bg-[#7050F5]/12 blur-xl dark:bg-[#7050F5]/20"
              />
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#7050F5] dark:text-[#9B82FF]">
              About Me
            </p>
            <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#292943] sm:text-4xl dark:text-white">
              More About Me
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-[#54546E] sm:text-base dark:text-[#B4B4C9]">
              <p>
                My journey into graphic design started around 6th–7th standard.
                Like many beginners, I started by editing simple slideshows and
                experimenting with creativity.
              </p>
              <p>
                My editing journey began with KineMaster, followed by CapCut and
                PixelLab. As my interest grew, I moved towards professional
                design software like Adobe Photoshop and Adobe Illustrator, while
                also exploring video editing.
              </p>
              <p>
                Later, I joined MAAC in Patna, where I developed my creative and
                technical skills and gained approximately one year of
                experience.
              </p>
              <p className="font-medium text-[#292943] dark:text-[#EFEFF8]">
                Today, I enjoy transforming simple ideas into attractive and
                meaningful designs. For me, graphic design is not just about
                making things look beautiful; it is about communicating ideas
                visually.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Experience and Learning Minimal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 border-t border-[#EAEAF2] pt-16 dark:border-[#1E1E2D]"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#7050F5] dark:text-[#9B82FF]">
                Experience &amp; Learning
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-[#292943] sm:text-3xl dark:text-white">
                Training &amp; Creative Foundation
              </h3>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#E7E7F1] bg-white p-6 shadow-sm shadow-[#292943]/4 sm:p-8 dark:border-[#232334] dark:bg-[#14141E] dark:shadow-none">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7050F5]/10 text-[#7050F5] dark:bg-[#7050F5]/20 dark:text-[#9B82FF]">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-[#292943] dark:text-white">
                    MAAC — Patna
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-[#7050F5] dark:text-[#9B82FF]">
                    Graphic Design Learning &amp; Training
                  </p>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-[#54546E] dark:text-[#B4B4C9]">
                    Structured hands-on learning focused on visual composition,
                    brand creatives, Adobe Photoshop, Adobe Illustrator, and
                    real-world creative design workflows.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-4 text-sm text-[#5C5C77] md:flex-col md:items-end md:gap-2 dark:text-[#A4A4BC]">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#292943] dark:text-[#F0F0F8]">
                  <Calendar className="h-4 w-4 text-[#7050F5]" aria-hidden="true" />
                  Approximately 1 year
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#7050F5]" aria-hidden="true" />
                  Patna, India
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
