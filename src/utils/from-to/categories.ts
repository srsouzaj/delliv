export const ProductEnum = {
    gym: 'Academia',
    closet: 'Vestuário',
    tshirt: 'Camisetas',
    bag: 'Bolsas'
}

export type ProductEnumType = keyof typeof ProductEnum