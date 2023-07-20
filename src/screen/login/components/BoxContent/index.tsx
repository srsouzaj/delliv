import Image from 'next/image'
import styles from './BoxContent.module.css'
import Logo from "../../../../../public/logo.jpeg"
import { BoxSocialLogin } from '../BoxSocialLogin'
import { BoxRegister } from '../BoxRegister'
import { Typography } from '../../../../components/Typography'
import { FormLogin } from '../FormLogin'

export const BoxContent = () => {
    return (
        <div className={styles.boxContent}>
            <Image src={Logo} width={80} height={80} alt="Logo da Delliv" />
            <Typography as='headline'>Acesse com seu login</Typography>
            <FormLogin />
            <BoxSocialLogin />
            <BoxRegister />
        </div>
    )
}