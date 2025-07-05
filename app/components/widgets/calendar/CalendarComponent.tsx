// Calendar.tsx
import styles from './CalendarComponent.module.css'; 

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
  // Static data for December 2024
  const monthName = "December 2024"
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Calendar grid for December 2024 (starting on Sunday)
  const calendarDays = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, null, null, null, null],
  ]

  const today = 15 // Highlighting day 15 as today

  return (
    // <div className={styles.calendarContainer}>
      <div className={styles.calendarWrapper}>
        {/* Calendar Header */}
        <div className={styles.calendarHeader}>
          <div className={styles.calendarheadercontent}>
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

        {/* Calendar Table */}
        <div className={styles.calendarBody}>
          <table className={styles.calendarTable}>
            {/* Days of week header */}
            <thead>
              <tr>
                {daysOfWeek.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>

            {/* Calendar days */}
            <tbody>
              {calendarDays.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day, dayIndex) => (
                    <td key={dayIndex}>
                      {day ? (
                        <div className={styles.dayCell}>
                          <div className={`${styles.dayNumber} ${day === today ? styles.today : ""}`}>{day}</div>
                          <div className={styles.dayEvents}>
                            {/* Space for events - keeping it empty for static calendar */}
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
    //</div>
  )
};

export default CalendarComponent;
