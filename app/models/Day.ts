interface Day {
  date: string;
  weekDay: number;
  isHoliday: boolean;
  holidayName: string | null;
  assigments: Assigment[] | null;
}