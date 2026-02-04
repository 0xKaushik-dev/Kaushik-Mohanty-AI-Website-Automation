
"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const testimonials = [
  {
    quote: "Transformed our entire creative process overnight.",
    author: "Sarah Chen",
    role: "Design Director",
    company: "Linear",
  },
  {
    quote: "The most elegant solution we've ever implemented.",
    author: "Marcus Webb",
    role: "Creative Lead",
    company: "Vercel",
  },
  {
    quote: "Pure craftsmanship in every single detail.",
    author: "Elena Frost",
    role: "Head of Product",
    company: "Stripe",
  },
]

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-15, 15])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[activeIndex]

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-transparent py-12 md:py-24 relative overflow-visible">
      <div ref={containerRef} className="relative w-full" onMouseMove={handleMouseMove}>
        
        {/* Oversized index number - Fixed visibility to 10% */}
        <motion.div
          className="absolute -left-4 md:-left-24 top-1/2 -translate-y-1/2 text-[12rem] md:text-[26rem] font-bold text-foreground opacity-10 dark:text-white select-none pointer-events-none leading-none tracking-tighter z-0"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main content - asymmetric layout */}
        <div className="relative flex flex-col md:flex-row z-10 w-full">
          {/* Left column - vertical text indicator */}
          <div className="hidden md:flex flex-col items-center justify-center pr-12 border-r border-border/50">
            <motion.span
              className="text-[10px] font-black text-muted-foreground tracking-[0.4em] uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Recognition
            </motion.span>

            {/* Vertical progress line */}
            <div className="relative h-24 w-px bg-border/30 mt-8">
              <motion.div
                className="absolute top-0 left-0 w-full bg-foreground origin-top"
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Right column - main content */}
          <div className="flex-1 md:pl-16 py-4 md:py-8 w-full">
            {/* Company badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground border border-border/50 rounded-full px-5 py-2.5 bg-background/50 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote text area */}
            <div className="relative mb-16 min-h-[140px] md:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="text-3xl md:text-6xl font-light text-foreground leading-[1.1] tracking-tight max-w-4xl"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.35em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 60 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.7,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -15,
                          transition: { duration: 0.3, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Bottom Row: Author & Navigation Pinned to Right */}
            <div className="flex flex-row items-center justify-between w-full border-t border-border/40 pt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-6"
                >
                  <motion.div
                    className="hidden sm:block w-12 h-[2px] bg-foreground/10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-lg font-black text-foreground uppercase tracking-tight leading-none mb-2">{current.author}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{current.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation - Clearly positioned on the Right */}
              <div className="flex items-center gap-4 ml-auto">
                <motion.button
                  onClick={goPrev}
                  className="group relative w-14 h-14 rounded-full border border-border/50 flex items-center justify-center overflow-hidden transition-all hover:border-foreground"
                  whileTap={{ scale: 0.92 }}
                  aria-label="Previous"
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground group-hover:text-background transition-colors"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  className="group relative w-14 h-14 rounded-full border border-border/50 flex items-center justify-center overflow-hidden transition-all hover:border-foreground"
                  whileTap={{ scale: 0.92 }}
                  aria-label="Next"
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-foreground group-hover:text-background transition-colors"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating background ticker */}
        <div className="absolute -bottom-16 left-0 right-0 overflow-hidden opacity-[0.04] pointer-events-none z-0">
          <motion.div
            className="flex whitespace-nowrap text-7xl font-bold tracking-tighter uppercase"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-12">
                {testimonials.map((t) => t.company).join(" • ")} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
