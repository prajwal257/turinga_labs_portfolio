import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.scss"

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className="leftSideMenu">
                <Link href="/"><Logo className={styles.NavbarElement}/></Link>
                <Link href="/about" className={styles.NavbarElement}>About,</Link>
                <Link href="/blogs" className={styles.NavbarElement}>Blogs,</Link>
                <Link href="/contact" className={styles.NavbarElement}>Contact,</Link>
            </div>
            <Link href="/login" className={styles.NavbarElement}>Resume</Link>
        </div>
    );
}