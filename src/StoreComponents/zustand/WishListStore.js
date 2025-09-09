import { create } from "zustand"
const WisList = (set) => (
    {
        items: [],
        addToWishList: (item) => set((state) => (
            {
                items: [...state.items, item]
            }
        )),
        removeFromWishList: (id) => set((state) => ({
            items: state.items?.filter((item) => item.id !== id)
        })),
    }
)

const useWishListStore = create(WisList)
export default useWishListStore