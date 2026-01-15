"use client"

import { useEffect, useState, useRef } from "react"

interface GhostTextProps {
  text: string
  className?: string
  startDelay?: number
  scrambleDuration?: number
  scrambleWindowSize?: number
  onComplete?: () => void
}

const GLITCH_CHARS = "~!@#$%^&*()_+-=[]{}|;:,.<>?/\\ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function GhostText({
  text,
  className = "",
  startDelay = 0,
  scrambleDuration = 3000,
  scrambleWindowSize = 8,
  onComplete,
}: GhostTextProps) {
  const [displayText, setDisplayText] = useState("")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    // Start animation after delay
    const startTimeout = setTimeout(() => {
      startScramble()
    }, startDelay)

    return () => {
      clearTimeout(startTimeout)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [text, startDelay, scrambleDuration, scrambleWindowSize])

  const startScramble = () => {
    const chars = text.split("")
    const totalChars = chars.length
    const frameTime = 30 // ms per frame 
    const charsPerSecond = totalChars / (scrambleDuration / 1000)
    const framesPerChar = (1000 / frameTime) / charsPerSecond

    let currentPosition = 0
    let frameCount = 0

    intervalRef.current = setInterval(() => {
      frameCount++

      // Calculate how many characters should be revealed based on time elapsed
      const revealedCount = Math.floor(frameCount / framesPerChar)
      currentPosition = Math.min(revealedCount, totalChars)

      // Build display text: revealed chars + scramble window
      let result = ""

      for (let i = 0; i < totalChars; i++) {
        if (i < currentPosition) {
          // Character is revealed - show actual character
          result += chars[i]
        } else if (i < currentPosition + scrambleWindowSize) {
          // Within scramble window - show random glitch character
          if (chars[i] === " ") {
            result += " "
          } else {
            result += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          }
        } else {
          // Beyond window - don't show yet
          break
        }
      }

      setDisplayText(result)

      // Check if animation is complete
      if (currentPosition >= totalChars) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
        setDisplayText(text)
        onComplete?.()
      }
    }, frameTime)
  }

  return (
    <span className={className} suppressHydrationWarning>
      {displayText}
    </span>
  )
}
