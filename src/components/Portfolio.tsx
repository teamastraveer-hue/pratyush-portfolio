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

        {/* Aspect-Preserving Sequential Gallery Grid */}
        <div
          key={activeFilter}
          className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${project.title} in full preview`}
                className="group block w-full overflow-hidden rounded-2xl border border-[#E7E7F1] bg-white text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#7050F5]/45 hover:shadow-xl hover:shadow-[#292943]/8 focus-visible:outline-none dark:border-[#232334] dark:bg-[#14141E] dark:hover:border-[#8C70FF]/55 dark:hover:shadow-black/50"
              >
                <div className="relative overflow-hidden bg-[#F3F2FA] dark:bg-[#1A1A26]">
                  {!failedImages[project.id] ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} — ${project.category}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={() => handleImageError(project.id)}
                      className="block h-auto w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center p-6 text-center">
                      <ImageIcon className="mb-2 h-8 w-8 text-[#7050F5]" />
                      <span className="font-display text-sm font-semibold text-[#292943] dark:text-white">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Subtle Hover Expand Affordance */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/45 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-[#292943] shadow-md dark:bg-[#14141E]/95 dark:text-white">
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Unboxed Clean Caption & Artwork Explanation */}
                <div className="px-5 py-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-bold tracking-tight text-[#292943] transition-colors group-hover:text-[#7050F5] dark:text-white dark:group-hover:text-[#9B82FF]">
                      {project.title}
                    </h3>
                    <span className="tabular-nums text-xs font-medium text-[#7B7B94] dark:text-[#8E8EA6]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#7050F5] dark:text-[#9B82FF]">
                    {project.category}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#5C5C77] dark:text-[#A4A4BC]">
                    {project.description}
                  </p>
                </div>
              </button>
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
