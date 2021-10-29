import styles from "../styles/Footer.module.scss"
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Next js app</p>
            <div className={styles.footer__left}>
                <a href="#">by @nathanszig</a>
            </div>
        </footer>
    )
}