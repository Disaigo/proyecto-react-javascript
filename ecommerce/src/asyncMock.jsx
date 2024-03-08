const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://unsplash.com/es/fotos/iphone-6-plateado-con-funda-azul-OjMyiwfviQ4',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    { id: '2', name: 'Samsung S21', price: 800, category: 'celular', img: 'https://unsplash.com/es/fotos/tarjeta-de-regalo-de-amazon-en-blanco-y-negro-yqcloMb3Abw', stock: 30, description: 'Descripcion de Samsung S21'},
    { id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img: 'https://unsplash.com/es/fotos/ipad-blanco-sobre-mesa-de-madera-marron-pTgyoERDNLQ', stock: 20, description: 'Descricion de Ipad 8va generacion'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === producId))
        }, 500)
    })
}