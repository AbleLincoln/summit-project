import styles from '../styles/Curation.module.css'

export default function Curation() {
    return (
        <>
            <h2 className={styles.process}>Our Curation Process</h2>
            <p className={styles.top}>
                Candidates are interviewed to ensure they are:
            </p>
            <hr />
            <p className={styles.body}>A leader in their field</p>
            <hr />
            <p className={styles.body}>
                A warm, kind person who resonates with our principles
            </p>
        </>
    )
}
