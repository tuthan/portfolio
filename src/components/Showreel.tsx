import { useReducedMotion } from 'framer-motion'
import { Clapperboard, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const control =
  'inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-white backdrop-blur transition hover:border-primary/60 hover:text-primary'

export function Showreel() {
  const reduce = useReducedMotion()
  const video = useRef<HTMLVideoElement>(null)
  // Set once the viewer pauses by hand, so scrolling back into view does not override them.
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  // Muted autoplay only while on screen; never autoplay under reduced motion.
  useEffect(() => {
    const el = video.current
    if (!el || reduce || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) el.play().catch(() => {})
        else if (!entry.isIntersecting) el.pause()
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduce])

  const togglePlay = () => {
    const el = video.current
    if (!el) return
    if (el.paused) {
      userPaused.current = false
      el.play().catch(() => {})
    } else {
      userPaused.current = true
      el.pause()
    }
  }

  const toggleMute = () => {
    const el = video.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
    if (!el.muted && el.paused) togglePlay()
  }

  return (
    <section id="showreel" className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Showreel · 2026"
          icon={Clapperboard}
          title="Fifteen seconds of the work."
          description="OmaSafe, BlindPass, Dependency Guard and the Omarchy plugins in motion. Written as code and rendered frame by frame, sound design included."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-emerald-400/15 blur-2xl" aria-hidden="true" />
          <div className="card overflow-hidden rounded-[1.75rem]! p-2">
            <div className="relative aspect-video overflow-hidden rounded-[1.4rem] bg-ink">
              <video
                ref={video}
                className="size-full object-cover"
                poster="/showreel/poster.jpg"
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Hung Vo showreel, 15 seconds"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src="/showreel/showreel.mp4" type="video/mp4" />
              </video>

              {!playing && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play showreel"
                  className="absolute inset-0 flex items-center justify-center bg-ink/20 transition hover:bg-ink/10"
                >
                  <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary text-ink shadow-[0_0_40px_rgb(37_192_244/0.5)] sm:size-20">
                    <Play size={28} className="ml-1 fill-current" aria-hidden="true" />
                  </span>
                </button>
              )}

              <div className="absolute bottom-3 right-3 flex gap-2 sm:bottom-4 sm:right-4">
                <button type="button" onClick={togglePlay} aria-label={playing ? 'Pause showreel' : 'Play showreel'} className={control}>
                  {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
                </button>
                <button type="button" onClick={toggleMute} aria-label={muted ? 'Unmute showreel' : 'Mute showreel'} aria-pressed={!muted} className={control}>
                  {muted ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
