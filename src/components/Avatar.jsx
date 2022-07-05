import styles from './Avatar.module.css'

export function Avatar() {
    return(
        <img
          className={styles.avatar}
          src="https://github.com/mendesrl.png"
          alt="Profile image"
        />
    )
}