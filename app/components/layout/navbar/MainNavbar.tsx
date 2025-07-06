'use client';

import { getTranslations } from "@/app/lib/i18n";
import styles from './MainNavbar.module.css';
import { useEffect } from "react";
import CustomButton from "../../ui/button/CustomButton";
import { useTheme } from "@/app/context/ThemeContext";


const MainNavbar = ({  }) => {
    const t = getTranslations("en");
      const { theme, toggleTheme } = useTheme();


    useEffect(() => {
        const mobileLinks = document.querySelectorAll(`.${styles.mobileMenuLink}`);
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileToggle = document.getElementById('mobileToggle');

        const closeMobileMenu = () => {
            mobileMenu?.classList.remove('active');
            mobileToggle?.classList.remove('active');
        };

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        const handleResize = () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
        };

        window.addEventListener('resize', handleResize);

        // Limpieza de eventos al desmontar
        return () => {
        mobileLinks.forEach(link => {
            link.removeEventListener('click', closeMobileMenu);
        });
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileToggle = document.getElementById('mobileToggle');

        mobileMenu?.classList.remove('hide');
        mobileToggle?.classList.remove('hide');
        mobileMenu?.classList.toggle('active');
        mobileToggle?.classList.toggle('active');
    };

  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
            <a href="#" className={styles.navbarLogo}>
            <div className={styles.logoIcon}>L</div>
            <span>Logo</span>
            </a>

            <ul className={styles.navbarMenu}>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>{t.layout.pages.home}</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>{t.layout.pages.calendar}</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>{t.layout.pages.groups}</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>{t.layout.pages.metrics}</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>{t.layout.pages.about}</a>
                </li>
                <li className={styles.navbarItem}>
                    <CustomButton onClick={toggleTheme}>Cambiar tema</CustomButton>
                </li>
            </ul>

            <div className={styles.navbarProfile}>
                <a href="#" className={styles.profileButton} >
                    <div className={styles.profileAvatar}>JD</div>
                    <span>{t.layout.pages.myProfile}</span>
                </a>
            </div>

        <button className={`${styles.mobileToggle} ${styles.hide}`} id="mobileToggle" onClick={handleToggle} >
            <span></span>
            <span></span>
            <span></span>
            </button>
        </div>

        <div className={`${styles.mobileMenu} ${styles.hide}`}>
            <ul className={styles.mobileMenuList}>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>{t.layout.pages.home}</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>{t.layout.pages.calendar}</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>{t.layout.pages.groups}</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>{t.layout.pages.metrics}</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>{t.layout.pages.about}</a>
            </li>
            </ul>

            <div className="mobile-profile">
            <a href="#" className="profile-button" >
                <div className="profile-avatar">JD</div>
                <span>{t.layout.pages.myProfile}</span>
            </a>
            </div>
        </div>
    </nav>

  );
};

export default MainNavbar;