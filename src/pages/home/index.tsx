import type { GetServerSideProps, NextPage } from 'next'
import { HomeScreen } from '../../screen/home'
import { parseCookies } from 'nookies'

const Home: NextPage = () => {
    return (
        <>
            <title>Delliv - Home</title>
            <HomeScreen />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { dellivToken } = parseCookies(context)

    if (!dellivToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {}
    }
}


export default Home
