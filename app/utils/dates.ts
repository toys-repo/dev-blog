import { ITimeUnit } from '@app/interfaces';

const KOREAN_TIME_OFFSET = 9 * 60 * 60 * 1000;
const MONTHS_MAX_COUNT = 12;
const NOW = 0;
const TIME_UNITS = [
  { timeUnit: 'month', inMilliseconds: 30 * 24 * 60 * 60 * 1000 },
  { timeUnit: 'day', inMilliseconds: 24 * 60 * 60 * 1000 },
  { timeUnit: 'hour', inMilliseconds: 60 * 60 * 1000 },
  { timeUnit: 'minute', inMilliseconds: 60 * 1000 },
  { timeUnit: 'second', inMilliseconds: 1000 },
] as ITimeUnit[];

class Dates {
  static toRelativeTime = (createdAt: Date, locale: string = 'en-US') => {
    const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    const currentKoreanDate = this.getCurrentKoreanDate();
    const diffInMilliseconds = currentKoreanDate.getTime() - createdAt.getTime();
    for (const { timeUnit, inMilliseconds } of TIME_UNITS) {
      const relativeTimeAmount = Math.floor(diffInMilliseconds / inMilliseconds);
      if (timeUnit === 'month' && relativeTimeAmount > MONTHS_MAX_COUNT) {
        return createdAt.toLocaleDateString(locale, { dateStyle: 'medium' });
      }
      if (relativeTimeAmount > NOW) {
        return relativeTimeFormatter.format(relativeTimeAmount * -1, timeUnit);
      }
    }
    return relativeTimeFormatter.format(NOW, 'second');
  };

  private static getCurrentKoreanDate() {
    const currentUtcDate = new Date();
    return new Date(currentUtcDate.getTime() + KOREAN_TIME_OFFSET);
  }
}

export default Dates;
