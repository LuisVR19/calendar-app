import Link from "next/link";
import Image from 'next/image';
import styles from './login.module.css';
import { routes } from "@/app/lib/routes";
import CustomInput from "@/app/components/ui/input/CustomInput";
import CustomButton from "@/app/components/ui/button/CustomButton";
import { getTranslations } from "@/app/lib/i18n";

export default function Login() {

    const t = getTranslations("en");
    
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginform}>
                <h2 className={styles.title}>{t.login.title}</h2>
                
                <Image className={styles.img}
                src="/Ken_Carson_-_A_Great_Chaos.jpg"
                alt="Ken Carson - A Great Chaos"
                width={200}
                height={200}
                />
                <CustomInput id={"email"} label={t.login.email} placeholder={t.login.emailPlaceholder} type={"email"}></CustomInput>
                <CustomInput id={"password"} label={t.login.password} placeholder={t.login.passwordPlaceholder} type={"password"}></CustomInput>
                <CustomButton type="submit" children={t.login.button}></CustomButton>

                <div className={styles.loginLinks}>
                    <Link href={routes.auth.login}>{t.login.forgotPassword}</Link>
                    <Link href={routes.auth.register}>{t.login.register}</Link>
                </div>
            </form>
        </div>
    )
}