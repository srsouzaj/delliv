export const AppRoutes = {
    home: {
        url: () => `/home`,
    },
    product: {
        byId: { url: (id: number) => `/product/${id}` },
    },
    checkout: {
        url: () => `/checkout`
    },
    signup: {
        url: () => `/signup`
    },
}