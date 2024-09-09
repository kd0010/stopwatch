import {Clock} from './createClock'

export function resumeClock(clock: Clock): Clock {
  if (!clock.isPaused) {
    return clock
  } else {
    return {
      ...clock,
      totalPauseTime: clock.totalPauseTime + Date.now() - clock.pausedAt,
      pausedAt: 0,
      isPaused: false,
    }
  }
}
