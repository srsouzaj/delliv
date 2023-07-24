import { MapPinLine } from "phosphor-react"
import { Typography } from "../../../../components/Typography"
import styles from "./CompletedOrder.module.css"
import { useForm } from "react-hook-form"
import { FormCheckoutTypes } from "../../../../models/interfaces/forms/checkout.interface"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckoutFormSchema } from "../../../../models/schemas/checkout.schema"
import { useAppDispatch } from "../../../../store/config.reducer"
import { totalCartItemSelector } from "../../../../store/cart/features/cartSlice"

export const CompletedOrder = () => {
    const totalItems = useAppDispatch(totalCartItemSelector)
    const { register, handleSubmit, formState: { errors } } = useForm<FormCheckoutTypes>({
        resolver: zodResolver(CheckoutFormSchema)
    })

    const onSubmit = (data: FormCheckoutTypes) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            <Typography as="headline">Complete seu pedido</Typography>
            <div className={styles.title}>
                <MapPinLine color={"#C47F17"} />
                <div >
                    <Typography>Endereço de Entrega</Typography>
                    <Typography as={"small"}>Informe o endereço onde deseja receber seu produto</Typography>
                </div>
            </div>

            <fieldset>
                <label htmlFor='cep'>CEP:</label>
                <input
                    className={styles.input}
                    placeholder='00000-000'
                    id="cep"
                    {...register("zip_code")}
                />
                {errors.zip_code && <Typography as="error">{errors.zip_code.message}</Typography>}
            </fieldset>
            <div className={styles.street}>
                <fieldset>
                    <label htmlFor='street'>Rua:</label>
                    <input
                        className={styles.input}
                        placeholder='Digite seu endereço'
                        id="street"
                        {...register("street")}
                    />
                    {errors.street && <Typography as="error">{errors.street.message}</Typography>}
                </fieldset>
                <fieldset>
                    <label htmlFor='number'>Número:</label>
                    <input
                        className={styles.input}
                        placeholder="Número"
                        id="number"
                        {...register("number")}
                    />
                    {errors.number && <Typography as="error">{errors.number.message}</Typography>}
                </fieldset>
            </div>
            <div className={styles.street}>
                <fieldset>
                    <label htmlFor='complem'>Complemento:</label>
                    <input
                        className={styles.input}
                        placeholder='Complemento'
                        id="complem"
                        {...register("complement")}
                    />
                    {errors.complement && <Typography as="error">{errors.complement.message}</Typography>}
                </fieldset>
                <fieldset>
                    <label htmlFor='neighborhood'>Bairro:</label>
                    <input
                        className={styles.input}
                        placeholder='Bairro'
                        id="neighborhood"
                        {...register("neighborhood")}
                    />
                    {errors.neighborhood && <Typography as="error">{errors.neighborhood.message}</Typography>}
                </fieldset>

                <fieldset>
                    <label htmlFor='city'>Cidade:</label>
                    <input
                        className={styles.input}
                        placeholder='Cidade'
                        id="city"
                        {...register("city")}
                    />
                    {errors.city && <Typography as="error">{errors.city.message}</Typography>}
                </fieldset>
                <fieldset>
                    <label htmlFor='uf'>UF:</label>
                    <input
                        className={styles.input}
                        placeholder='UF'
                        id="uf"
                        {...register("uf")}
                    />
                    {errors.uf && <Typography as="error">{errors.uf.message}</Typography>}
                </fieldset>
            </div>
            <button disabled={totalCartItemSelector} className={styles.submit}>Enviar meu pedido</button>
        </form>
    )
}