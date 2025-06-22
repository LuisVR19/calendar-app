import { routes } from "@/app/lib/routes";
import Link from "next/link";

export default function Register() {
    return (
        <div>
            <h1>Registro</h1>
            <Link href={routes.auth.login}>
                <button>ir al login</button>
            </Link>
        </div>
    )
}