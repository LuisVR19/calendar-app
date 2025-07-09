// hooks/useCalendar.ts
import { useState, useEffect } from 'react';
import { CalendarService } from '@/app/lib/api/CalendarService';
import { Request } from '@/app/models/contracts/Request';
import { CalendarFilter } from '@/app/models/contracts/filters/CalendarFilter';

export function useCalendar(initialYear: number, initialMonth: number) {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [calendarData, setCalendarData] = useState<Day[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const req: Request<CalendarFilter, object> = {
      filter: { year, month, countryCode: 'CR', PageNumber: 0, PageSize: 0, OrderDesc: true, GeneralName: '' },
      data: {},
    };

    setLoading(true);
    CalendarService.getSelectedMonth(req)
      .then(resp => {
        if (resp.isSucceded && Array.isArray(resp.data)) {
          setCalendarData(resp.data as Day[]);
        } else {
          setCalendarData(null);
        }
      })
      .catch(() => setCalendarData(null))
      .finally(() => setLoading(false));
  }, [year, month]);

  const incrementMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(prev => prev + 1);
    } else {
      setMonth(prev => prev + 1);
    }
  };

  const decrementMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(prev => prev - 1);
    } else {
      setMonth(prev => prev - 1);
    }
  };

  return { year, month, calendarData, loading, incrementMonth, decrementMonth };
}
