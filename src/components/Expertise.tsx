import { motion } from 'motion/react';
import { SOFTWARE_EXPERTISE } from '../data/portfolioData';

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#7050F5] dark:text-[#9B82FF]">
            Tools &amp; Craft
          </p>
          <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#292943] sm:text-4xl dark:text-white">
            Expertise &amp; Software
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#5C5C77] dark:text-[#A4A4BC]">
            The creative software and design tools I work with to bring visual
            concepts from early drafts to finished designs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOFTWARE_EXPERTISE.map((tool, index) => (
            <motion.article
              key={tool.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-[#E8E8F2] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#7050F5]/40 hover:shadow-lg hover:shadow-[#7050F5]/8 dark:border-[#222233] dark:bg-[#14141E] dark:hover:border-[#8C70FF]/45 dark:hover:shadow-black/40"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-extrabold tracking-tight ${tool.accentBg} ${tool.accentText}`}
                >
                  {tool.monogram}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#292943] dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="text-xs font-medium text-[#7050F5] dark:text-[#9B82FF]">
                    {tool.role}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#5A5A74] dark:text-[#A6A6BD]">
                {tool.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
