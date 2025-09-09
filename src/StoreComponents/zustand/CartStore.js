
import { create } from "zustand"

const CartList = (set ,get) => (
    {
        Cart: [],
        addToCart: (item) => set((state) => {
            const exist = state.Cart.some((product) => product.id === item.id)

            if (exist) {
                return {
                    Cart: state.Cart.map((product) =>
                        product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
                    )
                }
            }
            return { Cart: [...state.Cart, { ...item, quantity: 1 }] }
        }),



        removeFromCart: (id) => set((state) => ({
            Cart: state.Cart.filter((item) => item.id !== id)
        })),

        clearCart: () => set({ Cart: [] }),

        increaseQuantity: (id) => set((state) => ({
            Cart: state.Cart.map((item) => item.id === id ? { ...item, quantity: (item.quantity ||0)+ 1 } : item)
        })),

        decreaseQuantity: (id) => set((state) => ({
            Cart: state.Cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0)
        })),

        getTotal: () => {
            const { Cart } = get();
            return Cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity ,0)
        }


    }
)
const useCartStore = create(CartList)
export default useCartStore