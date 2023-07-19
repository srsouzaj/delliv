import Image from "next/image"
import styles from "./BoxContent.module.css"
import Logo from "../../../../../public/logo.jpeg"
import { FormSignUp } from "../FormSignUp"
import { Typography } from "../../../../components/Typography"

export const BoxContent = () => {
    return (
        <div className={styles.boxContent}>
            <Image src={Logo} width={80} height={80} alt="Logo da Delliv" />

            <Typography as="headline">Cadastre-se</Typography>
            <FormSignUp />

        </div>
    )
}