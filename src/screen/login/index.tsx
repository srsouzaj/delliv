import Image from "next/image"
import Background from "../../../public/background.png"
import styles from './Login.module.css'
import { BoxContent } from "./components/BoxContent"

export const LoginScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxBackground}>
                <Image src={Background} width={600} height={400} alt="Background da Delliv" />
            </div>
            <BoxContent />
        </div>
    )
}