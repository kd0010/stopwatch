/**
 * Creates a clock that is immediately started.
 */
export function createClock(): Clock {
  const clock: Clock = {
    beginTime: Date.now(),
    pausedAt: 0,
    isPaused: false,
    totalPauseTime: 0,
  }

  return clock
}

export interface Clock {
  /** millisecond-timestamp */
  beginTime: number
  /** millisecond-timestamp */
  pausedAt: number
  /** Whether the clock is paused right now. */
  isPaused: boolean
  /** Accumulated pause time since Clock's creation in milliseconds. */
  totalPauseTime: number
}
