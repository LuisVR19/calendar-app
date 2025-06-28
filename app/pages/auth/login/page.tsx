'use client'

import Image from 'next/image';
import styles from './login.module.css';
import { routes } from "@/app/lib/routes";
import CustomInput from "@/app/components/ui/input/CustomInput";
import CustomButton from "@/app/components/ui/button/CustomButton";
import { getTranslations } from "@/app/lib/i18n";
import CustomLink from "@/app/components/ui/link/CustomLink";
import { redirect } from 'next/navigation';
import Container from '@/app/components/ui/container/container';

export default function Login() {

    const t = getTranslations("en");

    const signIn = () => {
        redirect(routes.dashboard.calendar);
    }
    
    return (
        <Container>
            <h1 className={styles.loginTitle}>{t.login.title}</h1>

            <Image className={styles.img}
                src="/logo.png"
                alt="Ken Carson - A Great Chaos"
                width={200}
                height={200}
            />
            
            <form action="#" method="POST">
                <CustomInput id={"email"} label={t.login.email} placeholder={t.login.emailPlaceholder} type={"email"}></CustomInput>
                <CustomInput id={"password"} label={t.login.password} placeholder={t.login.passwordPlaceholder} minLength={8} type={"password"}></CustomInput>
                <CustomButton type="submit" onClick={signIn}children={t.login.button}></CustomButton>
            </form>
            <div className={styles.linkContainer}>
                <CustomLink text={t.login.forgotPassword} route={routes.auth.login} />
                <CustomLink text={t.login.register} route={routes.auth.register} />
            </div>
        </Container>

    )
}