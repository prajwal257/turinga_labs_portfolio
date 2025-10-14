import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.scss"

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className="leftSideMenu">
                <Link href="/" className={styles.NavbarElement}>Home</Link>
                <Link href="/about" className={styles.NavbarElement}>About</Link>
            </div>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.NavbarElement} ${styles.CTA}`}>Download Résumé</Link>
        </div>
    );
}