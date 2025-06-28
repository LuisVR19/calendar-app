'use client';

import { getTranslations } from "@/app/lib/i18n";
import styles from './MainNavbar.module.css';
import { useEffect } from "react";


const MainNavbar = ({  }) => {

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
                    <a href="#" className={styles.navbarLink}>Inicio</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>Productos</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>Servicios</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>Acerca de</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#" className={styles.navbarLink}>Contacto</a>
                </li>
            </ul>

            <div className={styles.navbarProfile}>
                <a href="#" className={styles.profileButton} >
                    <div className={styles.profileAvatar}>JD</div>
                    <span>Mi Perfil</span>
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
                <a href="#" className={styles.mobileMenuLink}>Inicio</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>Productos</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>Servicios</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>Acerca de</a>
            </li>
            <li className={styles.mobileMenuItem}>
                <a href="#" className={styles.mobileMenuLink}>Contacto</a>
            </li>
            </ul>

            <div className="mobile-profile">
            <a href="#" className="profile-button" >
                <div className="profile-avatar">JD</div>
                <span>Mi Perfil</span>
            </a>
            </div>
        </div>
    </nav>

  );
};

export default MainNavbar;