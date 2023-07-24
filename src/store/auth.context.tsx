import { UserCredential } from "firebase/auth"
import { FormLoginTypes } from "../models/interfaces/forms/login.interface"
import { ReactNode, createContext, useCallback } from "react"
import nookies from "nookies"
import {
    useSignInWithEmailAndPassword,
    useCreateUserWithEmailAndPassword
} from "react-firebase-hooks/auth"
import { auth } from "../service/firebase"
import { FormSignUpTypes } from "../models/interfaces/forms/signup.interface"

export interface AuthContextData {
    signIn(credentials: FormLoginTypes): Promise<void>
    signUp(credentials: FormSignUpTypes): Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth)
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const signIn = useCallback(async ({ email, password }: FormLoginTypes) => {
        try {
            const userLogged = await signInWithEmailAndPassword(email, password)

            if (userLogged) {
                nookies.set(null, 'dellivToken', userLogged.user.refreshToken, {
                    maxAge: 60 * 24 * 60, //1 day
                    path: '/',
                    secure: true,
                })
            }
        }
        catch (e) {
            return Promise.reject(e)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const signUp = useCallback(async ({ email, password }: FormSignUpTypes) => {
        try {
            await createUserWithEmailAndPassword(email, password)
        }
        catch (e) {
            return Promise.reject(e)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signUp
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}