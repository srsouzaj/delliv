import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styles from './Cookies.module.css';
import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

const CookieMessage = () => {
    const [open, setOpen] = useState(false);
    const cookies = parseCookies()

    function acceptedCookies() {
        setCookie(null, "dellivCookiesPolicy", 'true', {
            maxAge: 30 * 24 * 60,
            path: '/',
            secure: true,
        })
        setOpen(false)
    }

    useEffect(() => {
        if (cookies?.dellivCookiesPolicy === undefined) setOpen(true)
    }, [cookies])

    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Portal >
                <AlertDialog.Overlay className={styles.AlertDialogOverlay} />
                <AlertDialog.Content className={styles.AlertDialogContent}>
                    <AlertDialog.Description className={styles.AlertDialogDescription}>
                        Utilizamos cookies para personalizar conteúdos e melhorar a sua experiência. Ao navegar neste site,
                        você concorda com o uso.
                    </AlertDialog.Description>
                    <AlertDialog.Action className={styles.AlertAction} asChild onClick={() => { setOpen(!open) }}>
                        <button className={styles.button} onClick={acceptedCookies}>Entendi</button>
                    </AlertDialog.Action>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
};


export default CookieMessage;