import {Clock} from './createClock'

/**
 * Returns Clock's active time in milliseconds.
 */
export function getActiveTime(clock: Clock): number {
  const nowTime = Date.now()
  if (!clock.isPaused) {
    return nowTime - clock.beginTime - clock.totalPauseTime
  } else {
    // `totalTimePaused` has not been updated yet
    // for the current pausing cycle,
    // therefore have to take that into account.
    const currentTimePaused = nowTime - clock.pausedAt
    return nowTime
      - clock.beginTime
      - clock.totalPauseTime
      - currentTimePaused
  }
}
