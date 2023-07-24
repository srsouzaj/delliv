import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/router';
import styles from './Logout.module.css';
import { CaretDown, SignOut } from 'phosphor-react';
import { useAuth } from '../../../hooks/context/useAuth';
import { toast } from 'react-toastify';


export const LogoutDropdownMenu = () => {
    const { push } = useRouter()
    const { signOut } = useAuth()


    const handleLogout = () => {
        signOut()
        toast.success("VOcê foi deslogado. Até breve =)")
        push("/")
    }


    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={styles.IconButton} aria-label="logout menu">
                    < CaretDown width={24} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
                    <DropdownMenu.Item className={styles.DropdownMenuItem} onClick={handleLogout}>
                        <SignOut />
                        Sair
                    </DropdownMenu.Item>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
