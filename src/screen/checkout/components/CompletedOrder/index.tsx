import { MapPinLine } from "phosphor-react"
import { Typography } from "../../../../components/Typography"
import styles from "./CompletedOrder.module.css"

export const CompletedOrder = () => {
    return (
        <div className={styles.container}>
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
                />
            </fieldset>
            <div className={styles.street}>
                <fieldset>
                    <label htmlFor='street'>Rua:</label>
                    <input
                        className={styles.input}
                        placeholder='Digite seu endereço'
                        id="street"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='number'>Número:</label>
                    <input
                        className={styles.input}
                        placeholder="Número"
                        id="number"
                    />
                </fieldset>
            </div>
            <div className={styles.street}>
                <fieldset>
                    <label htmlFor='complem'>Complemento:</label>
                    <input
                        className={styles.input}
                        placeholder='Complemento'
                        id="complem"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='complem'>Bairro:</label>
                    <input
                        className={styles.input}
                        placeholder='Bairro'
                        id="complem"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor='city'>Cidade:</label>
                    <input
                        className={styles.input}
                        placeholder='Cidade'
                        id="city"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='uf'>UF:</label>
                    <input
                        className={styles.input}
                        placeholder='UF'
                        id="uf"
                    />
                </fieldset>
            </div>
        </div>
    )
}