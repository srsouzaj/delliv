import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ShoppingCart } from 'phosphor-react';
import styles from "./Carts.module.css"
import { Typography } from '../../Typography';
import { useAppSelector } from '../../../store/config.reducer';
import { ProductItem } from './ProductItem';
import Link from 'next/link';
import { AppRoutes } from '../../../utils/routes/appRoutes';
import { totalCartItemSelector } from '../../../store/cart/features/cartSlice';


export function CartDropdownMenu() {
    const cartItems = useAppSelector((state) => state.cart.cartItems)
    const totalItems = useAppSelector(totalCartItemSelector)

    console.log(cartItems)

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={styles.IconButton} aria-label="message menu">
                    <ShoppingCart color="#FFF" />
                    {totalItems !== 0 && <span className={styles.total}>{totalItems}</span>}
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
                    {cartItems.length === 0 && (
                        <DropdownMenu.Item className={styles.DropdownMenuItem}>
                            <Typography as="small">Não há novas mensagens disponíveis</Typography>
                        </DropdownMenu.Item>
                    )}
                    {cartItems.length !== 0 && cartItems.map((cart, index) => {
                        if (index < 2) return (
                            <DropdownMenu.Item key={cart.product.id} className={styles.DropdownMenuItem}>
                                <ProductItem product={cart.product} />
                            </DropdownMenu.Item>
                        )

                        if (index > 2) return (
                            <Link
                                key={cart.product.id}
                                href={AppRoutes.checkout.url()}
                                className={styles.link}
                            >
                                <a className={styles.link}>
                                    Mais detalhes
                                </a>
                            </Link>
                        )
                        if (index > 3) return (<></>)

                    })}


                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}