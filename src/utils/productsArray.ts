export type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
    category?: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
        image: '/images/iphone-14pro.webp',
        category: 'phone',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: '256',
        type: 'phone',
        price: 1000,
        image: '/images/iphone-13pro.webp',
        category: 'phone',
    },
    {
        id: 3,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        capacity: '128',
        type: 'phone',
        price: 1000,
        image: '/images/iphone-14.webp',
        category: 'phone',
    },
    {
        id: 4,
        title: 'iPhone 11 Pro MAX',
        description: 'This is iPhone 11 Pro MAX',
        capacity: '512',
        type: 'phone',
        price: 2000,
        image: '/images/iphone-11promax.webp',
        category: 'phone',
    },
    {
        id: 5,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        capacity: '128',
        type: 'phone',
        price: 500,
        image: '/images/iphone-se.webp',
        category: 'phone',
    },
    {
        id: 6,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: '64',
        type: 'phone',
        price: 1500,
        image: '/images/iphone-12pro.webp',
        category: 'sport',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
