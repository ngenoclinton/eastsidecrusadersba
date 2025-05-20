"use client"

import { useEffect, useRef } from "react"

export default function VideoBackground({ src, poster }) {
  const videoRef = useRef(null)

  useEffect(() => {
    // Function to attempt playing the video
    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Auto-play was prevented:", error)

          // Add touch event listener to play video on first user interaction
          document.body.addEventListener(
            "touchstart",
            () => {
              videoRef.current?.play().catch((e) => console.log("Still couldn't play:", e))
            },
            { once: true },
          )
        })
      }
    }

    // Try to play immediately
    attemptPlay()

    // Also try to play on page visibility change (when user returns to tab)
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        attemptPlay()
      }
    })
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute w-full h-full object-cover"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
