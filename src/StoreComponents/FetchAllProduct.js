
import { clientCommrerce } from "@/lib/sanity";

export async function FetchAllProduct() {
    const query = `*[_type == "product"]{
    id,
    category,
    label,
    title,
    details,
    stock,
    rate,
    offer,
    price,
    discount,
   "imageUrl": img.asset->url

  }`;
    return await clientCommrerce.fetch(query);
}


export async function FetchOfferProduct() {
    const query = `*[_type == "weekDeal"]{
    id,
    category,
    label,
    title,
    details,
    stock,
    rate,
    offer,
    price,
    discount,
   "imageUrl": img.asset->url

  }`;
    return await clientCommrerce.fetch(query);
}


export async function FetchHotDealProduct() {
    const query = `*[_type == "hotDeal"]{
    id,
    category,
    label,
    title,
    details,
    stock,
    rate,
    offer,
    price,
    discount,
   "imageUrl": img.asset->url

  }`;
    return await clientCommrerce.fetch(query);
}





