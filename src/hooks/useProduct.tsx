import { startTransition, useCallback, useEffect, useState } from "react"
import { api } from "../service/api"
import { IProduct } from "../models/interfaces/api/product.interface"
import { ApiRoutes } from "../utils/routes/apiRoutes"
import { IPagination } from "../models/interfaces/api/pagination.interface"

export const useProduct = () => {
    const [products, setProducts] = useState<IPagination<IProduct>>({} as IPagination<IProduct>)
    const [loading, setLoading] = useState(false)

    const fetch = useCallback(async () => {
        setLoading(true)

        try {
            await api.get(ApiRoutes.products.url()).then((response) => {
                startTransition(() => {
                    setProducts(response.data);
                });
            });

            setLoading(false)
        }
        catch (e) {
            setProducts({} as IPagination<IProduct>)
            setLoading(false)
            return Promise.reject(e)
        }
    }, [])

    useEffect(() => {
        fetch().then()
    }, [fetch])

    return { products, reload: fetch, loading }
}