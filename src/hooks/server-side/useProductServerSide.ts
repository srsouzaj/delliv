import { IPagination } from "../../models/interfaces/api/pagination.interface"
import { IProduct } from "../../models/interfaces/api/product.interface"
import { api } from "../../service/api"
import { ApiRoutes } from "../../utils/routes/apiRoutes"

export const serverSideProduct = async (): Promise<
    IPagination<IProduct>
> => {
    try {
        const { data: jobData } = await api.get<
            IPagination<IProduct>
        >(ApiRoutes.products.url())

        return jobData
    } catch (e) {
        return {
            data: [],
            message: []
        }
    }
}
