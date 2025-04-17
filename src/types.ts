export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: { id: number; name: string; image: string }
  images: string[]
}

export interface Order {
  id: number
  products: Product[]
  date: string
  totalPrice: number
  totalProducts: number
}
