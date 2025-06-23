import { getTranslations } from "@/app/lib/i18n";
import styles from './MainNavbar.module.css';


const MainNavbar = ({  }) => {
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

            <button className="mobile-toggle" >
            <span></span>
            <span></span>
            <span></span>
            </button>
        </div>

        {/* <div className="mobile-menu" id="mobileMenu">
            <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
                <a href="#" className="mobile-menu-link active">Inicio</a>
            </li>
            <li className="mobile-menu-item">
                <a href="#" className="mobile-menu-link">Productos</a>
            </li>
            <li className="mobile-menu-item">
                <a href="#" className="mobile-menu-link">Servicios</a>
            </li>
            <li className="mobile-menu-item">
                <a href="#" className="mobile-menu-link">Acerca de</a>
            </li>
            <li className="mobile-menu-item">
                <a href="#" className="mobile-menu-link">Contacto</a>
            </li>
            </ul>

            <div className="mobile-profile">
            <a href="#" className="profile-button" >
                <div className="profile-avatar">JD</div>
                <span>Mi Perfil</span>
            </a>
            </div>
        </div> */}
    </nav>

  );
};

export default MainNavbar;