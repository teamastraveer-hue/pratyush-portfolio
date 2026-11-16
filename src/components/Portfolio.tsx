import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Image as ImageIcon,
  X,
} from 'lucide-react';
import {
  FILTER_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type FilterCategory,
  type PortfolioProject,
} from '../data/portfolioData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((project) =>
      project.filterGroups.includes(activeFilter)
    );
  }, [activeFilter]);

  const activeProject: PortfolioProject | null =
    selectedIndex !== null && filteredProjects[selectedIndex]
      ? filteredProjects[selectedIndex]
      : null;

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || filteredProjects.length === 0) return null;
      return (prev - 1 + filteredProjects.length) % filteredProjects.length;
    });
  }, [filteredProjects.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || filteredProjects.length === 0) return null;
      return (prev + 1) % filteredProjects.length;
    });
  }, [filteredProjects.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="portfolio"
      className="border-t border-[#EFEFF6] py-20 sm:py-24 lg:py-28 dark:border-[#1B1B29]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Category Filter Controls */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#7050F5] dark:text-[#9B82FF]">
              Selected Works
            </p>
            <h2 className="font-display mt-2.5 text-balance text-3xl font-bold tracking-tight text-[#292943] sm:text-4xl dark:text-white">
              My Portfolio
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5C5C77] dark:text-[#A4A4BC]">
              A curated showcase of product advertisements, posters, automotive
              visuals, food promotions, and social media graphics.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter portfolio projects by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#EAEAF2] bg-[#F7F7FB] p-1.5 dark:border-[#232334] dark:bg-[#14141E]"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveFilter(category);
                    setSelectedIndex(null);
                  }}
                  className={`min-h-[38px] shrink-0 whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? 'bg-[#7050F5] text-white shadow-sm shadow-[#7050F5]/25'
                      : 'text-[#54546E] hover:bg-white hover:text-[#292943] dark:text-[#A6A6BD] dark:hover:bg-[#1D1D2C] dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Editorial Project Rows */}
        <div
          key={activeFilter}
          className="mt-10 divide-y divide-[#EAEAF2] border-t border-[#EAEAF2] dark:divide-[#1E1E2D] dark:border-[#1E1E2D]"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-12 sm:py-16 lg:py-20"
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
                {/* Left Column: Project Description & Metadata */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#7050F5] dark:text-[#9B82FF]">
                    <span className="tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true" className="text-[#C6C6D8] dark:text-[#3A3A52]">
                      /
                    </span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="font-display mt-3 text-balance text-2xl font-extrabold tracking-tight text-[#292943] sm:text-3xl dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-[15px] leading-[1.75] text-[#54546E] sm:text-base dark:text-[#B4B4C9]">
                    {project.description}
                  </p>

                  {project.tools && (
                    <div className="mt-6 border-t border-[#EFEFF6] pt-4 dark:border-[#1E1E2D]">
                      <p className="text-xs font-medium text-[#7A7A94] dark:text-[#8E8EA6]">
                        Tools Used
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#292943] dark:text-[#E6E6F2]">
                        {project.tools}
                      </p>
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#E2E2EE] bg-white px-4 py-2 text-sm font-semibold text-[#292943] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7050F5]/50 hover:text-[#7050F5] dark:border-[#29293D] dark:bg-[#14141E] dark:text-white dark:hover:border-[#8C70FF]/60 dark:hover:text-[#9B82FF]"
                    >
                      <Expand className="h-4 w-4 text-[#7050F5] dark:text-[#9B82FF]" aria-hidden="true" />
                      Preview Full Artwork
                    </button>
                  </div>
                </div>

                {/* Right Column: Large Prominent Poster Showcase */}
                <div className="lg:col-span-7">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`View ${project.title} in full preview`}
                    className="group relative block w-full max-w-[580px] overflow-hidden rounded-2xl border border-[#E7E7F1] bg-[#F6F6FA] text-left shadow-lg shadow-[#292943]/6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7050F5]/45 hover:shadow-xl hover:shadow-[#7050F5]/10 focus-visible:outline-none lg:ml-auto dark:border-[#232334] dark:bg-[#14141E] dark:shadow-black/45 dark:hover:border-[#8C70FF]/55"
                  >
                    {!failedImages[project.id] ? (
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} — ${project.category}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={() => handleImageError(project.id)}
                        className="block h-auto w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center p-8 text-center">
                        <ImageIcon className="mb-2 h-10 w-10 text-[#7050F5]" />
                        <span className="font-display text-base font-semibold text-[#292943] dark:text-white">
                          {project.title}
                        </span>
                      </div>
                    )}

                    {/* Subtle Hover Expand Affordance */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#292943] shadow-md dark:bg-[#14141E]/95 dark:text-white">
                        <Expand className="h-4 w-4" />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Preview */}
      <AnimatePresence>
        {activeProject && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} preview`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm sm:p-6"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#11111A] text-white shadow-2xl"
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5 sm:px-6">
                <div className="min-w-0">
                  <h3 className="font-display truncate text-base font-bold text-white sm:text-lg">
                    {activeProject.title}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-[#A4A4BC]">
                    {activeProject.category} <span aria-hidden="true">·</span>{' '}
                    {activeProject.tools}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="tabular-nums text-xs font-medium text-[#A4A4BC]">
                    {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                    {String(filteredProjects.length).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close project preview"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white transition-colors hover:bg-white/15"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Lightbox Image Stage */}
              <div className="relative flex flex-1 items-center justify-center overflow-auto bg-[#08080D] p-4 sm:p-8">
                {!failedImages[activeProject.id] ? (
                  <img
                    src={activeProject.imageUrl}
                    alt={`${activeProject.title} — ${activeProject.category}`}
                    referrerPolicy="no-referrer"
                    className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                  />
                ) : (
                  <div className="flex h-64 w-full max-w-md flex-col items-center justify-center rounded-xl border border-white/10 bg-[#14141E] p-6 text-center">
                    <ImageIcon className="mb-2 h-10 w-10 text-[#7050F5]" />
                    <span className="text-sm font-medium text-white">
                      {activeProject.title}
                    </span>
                  </div>
                )}

                {/* Prev / Next Navigation Buttons */}
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous project"
                      className="absolute top-1/2 left-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition-colors hover:border-[#7050F5] hover:bg-[#7050F5] sm:left-5"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next project"
                      className="absolute top-1/2 right-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition-colors hover:border-[#7050F5] hover:bg-[#7050F5] sm:right-5"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              {/* Lightbox Footer Description */}
              <div className="border-t border-white/10 px-5 py-3.5 sm:px-6">
                <p className="text-sm leading-relaxed text-[#C4C4D8]">
                  {activeProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
