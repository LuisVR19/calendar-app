import styles from './CalendarComponent.module.css';
// import { ResponseDTO } from '../../../../models/ResponseDTO';

interface Assigment {
  title: string;
  completed: boolean;
}

interface CalendarDay {
  date: string;
  weekDay: number;
  isHoliday: boolean;
  holidayName: string | null;
  assigments: Assigment[] | null;
}

interface CalendarData {
  isSucceded: boolean;
  message: string | null;
  data: CalendarDay[];
}

interface Props {
  calendarData: CalendarData;
}

const CalendarComponent: React.FC<Props> = ({ calendarData }) => {
  const monthName = "July 2025";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = 15; // Día actual para resaltar (puede hacerse dinámico)

  // Agrupar días en semanas
  const weeks: (CalendarDay | null)[][] = [];
  let currentWeek: (CalendarDay | null)[] = new Array(7).fill(null);

  calendarData.data.forEach(day => {
    const dayIndex = day.weekDay;

    currentWeek[dayIndex] = day;

    if (dayIndex === 6) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }
  });

  if (currentWeek.some(d => d !== null)) {
    weeks.push(currentWeek);
  }

  return (
    <div className={styles.calendarWrapper}>
      
      <div className={styles.calendarHeader}>
        <div className={styles.calendarHeaderContent}>
          <div className={styles.calendarIcon}>
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <h1 className={styles.calendarTitle}>{monthName}</h1>
        </div>
      </div>

      <div className={styles.calendarBody}>
        <table className={styles.calendarTable}>
          <thead>
            <tr>
              {daysOfWeek.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex}>
                    {day ? (
                      <div className={styles.dayCell}>
                        {/* <div className={`${styles.dayNumber} ${day.date.getDate() === today ? styles.today : ""}`}> */}
                        <div className={`${styles.dayNumber}`}>
                          {new Date(day.date).getDate()}
                        </div>
                        <div className={styles.dayEvents}>
                          {/* Eventos futuros aquí */}
                        </div>
                      </div>
                    ) : (
                      <div className={styles.emptyCell}></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CalendarComponent;
