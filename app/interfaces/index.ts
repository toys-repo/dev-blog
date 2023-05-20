import { IconType } from 'react-icons';

export interface INavItem {
  href: string;
  label: string;
  icon?: IconType;
}

export interface ITimeUnit {
  timeUnit: Intl.RelativeTimeFormatUnit;
  inMilliseconds: number;
}
