
import Cart from "@/app/Store/cart/page"
import { create } from "zustand"


const getInitialCart = () => {
    if (typeof window !== 'undefined') {
        const storedCart = localStorage.getItem('e-commerce_cart')
        return storedCart ? JSON.parse(storedCart) : []
    }

    return []
}

const CartList = (set, get) => (
    {
        Cart: getInitialCart(),
        addToCart: (item) => set((state) => {
            const exist = state.Cart.some((product) => product.id === item.id)
            let newCart;
            if (exist) {
                newCart= state.Cart.map((product) =>
                    product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
                )
            } else {
                newCart= [...state.Cart, { ...item, quantity: 1 }]

            }

            if (typeof window !== 'undefined') {
                localStorage.setItem('e-commerce_cart', JSON.stringify(newCart));
            }

            return { Cart: newCart }
        }),



        removeFromCart: (id) => set((state) => {
            const newCart = state.Cart.filter((item) => item.id !== id)

            if (typeof window !== 'undefined') {
                localStorage.setItem('e-commerce_cart', JSON.stringify(newCart));
            }
            return { Cart: newCart }
        }),

        clearCart: () => set(() => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('e-commerce_cart', JSON.stringify(newCart));
            }
            return { Cart: [] }
        }),

        increaseQuantity: (id) => set((state) => {
            const newCart = state.Cart.map((item) => item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item)

            if (typeof window !== 'undefined') {
                localStorage.setItem('e-commerce_cart', JSON.stringify(newCart));
            }
            return { Cart: newCart }
        }),

        decreaseQuantity: (id) => set((state) => {
            const newCart = state.Cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0)

            if (typeof window !== 'undefined') {
                localStorage.setItem('e-commerce_cart', JSON.stringify(newCart));
            }
            return { Cart: newCart }
        }),

        getTotal: () => {
            const { Cart } = get();
            return Cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
        }


    }
)
const useCartStore = create(CartList)
export default useCartStore