
export interface Inventory {
  id: string,
  name: string,
  description: string
}

export interface Product {
  id: string,
  name: string,
  price?: number,
  uom: string,
  quantityPerPackage: number,
  barcode: string,
  description: string,
  categoryId: string,
  imagePath: string,
  thumbnailPath:string
}

export interface InventoryProduct {
  id: string,
  inventoryId: string,
  productId: string,
  quantity: number
}


export interface Category {
  id: string,
  name: string
}
