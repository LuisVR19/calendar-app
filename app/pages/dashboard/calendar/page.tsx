import Container from "@/app/components/ui/container/container";
import CalendarComponent from "@/app/components/widgets/calendar/CalendarComponent";
import Link from "next/link";

export default function Calendar() {
    return (
        <Container>
            {/* <h1>Pagina calendario</h1>
            <Link href="/pages/auth/login">
                <button>Volver al login</button>
            </Link> */}

            
            <CalendarComponent />
        </Container>
    )
}