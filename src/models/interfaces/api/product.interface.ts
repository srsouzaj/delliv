export interface IProduct {
    id: string
    name: string
    imgSrc: string
    category: CategoryType
    description: string,
    price: string
}

export enum CategoryEnum {
    bag = 'Bolsas',
    closet = 'Vestuário',
    tshirt = 'Camisetas',
    gym = 'Academia',
}

export interface CartItem {
    product: IProduct;
    quantity: number;
}


export type CategoryType = keyof typeof CategoryEnum