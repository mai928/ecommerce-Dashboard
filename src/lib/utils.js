import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



export function generateStableIds(productsByCategory) {
	let result = {}
	Object.entries(productsByCategory).forEach(([category, items]) => {
    if(Array.isArray(items)){
     		result[category] = items?.map((item, index) => ({
			...item, id: `${category}-${index + 1}`
		})) 
    }
    else{
            console.warn(`⚠️ Skipping category "${category}" because it's not an array`);

    }

	})
	return result
}