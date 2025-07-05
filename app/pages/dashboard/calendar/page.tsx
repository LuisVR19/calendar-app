import Container from "@/app/components/ui/container/container";
import CalendarComponent from "@/app/components/widgets/calendar/CalendarComponent";
import Link from "next/link";

export default function Calendar() {

    const calendarData = {
        isSucceded: true,
        message: null,
        data: [
            {
            "date": "2025-07-01T00:00:00",
            "weekDay": 2,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-02T00:00:00",
            "weekDay": 3,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-03T00:00:00",
            "weekDay": 4,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-04T00:00:00",
            "weekDay": 5,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-05T00:00:00",
            "weekDay": 6,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-06T00:00:00",
            "weekDay": 0,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-07T00:00:00",
            "weekDay": 1,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-08T00:00:00",
            "weekDay": 2,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-09T00:00:00",
            "weekDay": 3,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-10T00:00:00",
            "weekDay": 4,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-11T00:00:00",
            "weekDay": 5,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-12T00:00:00",
            "weekDay": 6,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-13T00:00:00",
            "weekDay": 0,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-14T00:00:00",
            "weekDay": 1,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-15T00:00:00",
            "weekDay": 2,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-16T00:00:00",
            "weekDay": 3,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-17T00:00:00",
            "weekDay": 4,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-18T00:00:00",
            "weekDay": 5,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-19T00:00:00",
            "weekDay": 6,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-20T00:00:00",
            "weekDay": 0,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-21T00:00:00",
            "weekDay": 1,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-22T00:00:00",
            "weekDay": 2,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-23T00:00:00",
            "weekDay": 3,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-24T00:00:00",
            "weekDay": 4,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-25T00:00:00",
            "weekDay": 5,
            "isHoliday": true,
            "holidayName": "Anexión del Partido de Nicoya a Costa Rica",
            "assigments": null
            },
            {
            "date": "2025-07-26T00:00:00",
            "weekDay": 6,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-27T00:00:00",
            "weekDay": 0,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-28T00:00:00",
            "weekDay": 1,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-29T00:00:00",
            "weekDay": 2,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-30T00:00:00",
            "weekDay": 3,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            },
            {
            "date": "2025-07-31T00:00:00",
            "weekDay": 4,
            "isHoliday": false,
            "holidayName": null,
            "assigments": null
            }
        ]
    };

    return (
        <Container>
            {/* <h1>Pagina calendario</h1>
            <Link href="/pages/auth/login">
                <button>Volver al login</button>
            </Link> */}

            
            <CalendarComponent calendarData={calendarData}/>
        </Container>
    )
}