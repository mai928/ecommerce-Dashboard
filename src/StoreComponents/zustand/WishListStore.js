
import { create } from "zustand";

const WISHLIST_STORAGE_KEY = 'wishList_Key'; 

const getInitialWishList = () => {
    if (typeof window !== 'undefined') {
        const storedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
        if (storedWishlist) {
            try {
                return JSON.parse(storedWishlist);
            } catch (e) {
                console.error("Failed to parse wishlist from localStorage:", e);
                localStorage.removeItem(WISHLIST_STORAGE_KEY);
                return [];
            }
        }
    }
    return [];
};


const WisList = (set) => (
    {
        items: getInitialWishList(),

        addToWishList: (item) => set((state) => {
            const itemExists = state.items.some((wishlistItem) => wishlistItem.id === item.id);
            let updatedWishlist ; 

            if (!itemExists) { 
                updatedWishlist = [...state.items, item];

                if (typeof window !== 'undefined') {
                    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(updatedWishlist));
                }
            } else {
              
                return { items: state.items }; 
            }

            return { items: updatedWishlist };
        }),

        removeFromWishList: (id) => set((state) => {
            const updatedWishlist = state.items.filter((item) => item.id !== id);

            if (typeof window !== 'undefined') {
                localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(updatedWishlist));
            }
            return { items: updatedWishlist };
        }),

        clearWishList: () => set(() => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem(WISHLIST_STORAGE_KEY);
            }
            return { items: [] };
        }),
    }
);

const useWishListStore = create(WisList);
export default useWishListStore;