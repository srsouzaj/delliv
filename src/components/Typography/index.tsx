import { ReactNode } from "react"
import styles from "./Typography.module.css"

interface ITypography {
    as?: "regular" | "small" | "headline" | "error"
    children: ReactNode
}

export const Typography = ({ children, as = "regular" }: ITypography) => {
    if (as === "regular") return <p className={styles.regular}>{children}</p>
    if (as === "small") return <p className={styles.small}>{children}</p>
    if (as === "headline") return <p className={styles.headline}>{children}</p>
    if (as === "error") return <p className={styles.error}>{children}</p>
}