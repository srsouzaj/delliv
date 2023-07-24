import { CategoryType } from "../../models/interfaces/api/product.interface";

export const AppRoutes = {
    home: {
        url: () => `/home`,
    },
    product: {
        byType: { url: (type: CategoryType) => `/product/${type}` },
    },
    checkout: {
        url: () => `/checkout`
    },
    signup: {
        url: () => `/signup`
    },
    login: {
        url: () => `/`
    }
}