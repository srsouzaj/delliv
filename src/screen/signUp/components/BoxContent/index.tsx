import Image from "next/image"
import Link from "next/link"
import styles from "./BoxContent.module.css"
import Logo from "../../../../../public/logo.jpeg"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { FormSignUp } from "../FormSignUp"

export const BoxContent = () => {



    return (
        <div className={styles.boxContent}>
            <Image src={Logo} width={80} height={80} alt="Logo da Delliv" />
            <h1>Cadastre-se</h1>
            <FormSignUp />

        </div>
    )
}