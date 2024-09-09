import {Clock} from './createClock'

/**
 * Returns Clock's active time in milliseconds.
 */
export function getActiveTime(clock: Clock): number {
  if (!clock.isPaused) {
    return Date.now() - clock.beginTime - clock.totalPauseTime
  } else {
    // `totalTimePaused` has not been updated yet
    // for the current pausing cycle,
    // therefore have to take that into account.
    const currentTimePaused = Date.now() - clock.pausedAt
    return Date.now()
      - clock.beginTime
      - clock.totalPauseTime
      - currentTimePaused
  }
}
