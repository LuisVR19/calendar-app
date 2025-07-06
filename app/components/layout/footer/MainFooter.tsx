import { getTranslations } from "@/app/lib/i18n";
import styles from './MainFooter.module.css';
import { routes } from "@/app/lib/routes";

const MainFooter = ({  }) => {

const t = getTranslations("en");
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>{t.layout.about}</h3>
                    <p className={styles.footerDescription}>
                        {t.layout.description}
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">f</a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">t</a>
                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">in</a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">ig</a>
                    </div>
                </div>

                <div className={styles.footerSection}>
                <h3>{t.layout.links}</h3>
                    <ul className={styles.footerLinks}>
                        <li><a href="#">{t.layout.pages.home}</a></li>
                        <li><a href="#">{t.layout.pages.calendar}</a></li>
                        <li><a href="#">{t.layout.pages.groups}</a></li>
                        <li><a href="#">{t.layout.pages.metrics}</a></li>
                        <li><a href="#">{t.layout.pages.about}</a></li>
                        <li><a href={routes.auth.login}>{t.layout.pages.login}</a></li>
                    </ul>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerCopyright}>
                    © {new Date().getFullYear()} {t.layout.reservedRights}
                </div>
                <div className={styles.footerLegal}>
                    <a href="#">Términos de Servicio</a>
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Cookies</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default MainFooter;