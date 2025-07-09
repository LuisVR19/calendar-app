import { BaseFilter } from "./BaseFilter";

export interface CalendarFilter extends BaseFilter {
  year: number;
  month: number;
  countryCode: string;
}