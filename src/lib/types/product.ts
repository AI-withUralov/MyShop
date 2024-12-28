import { ProductCollection, ClothesSize, ProductStatus } from "../enums/product-enum";

export interface Product {
    imagePath: string | undefined;
    _id: string;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    clothesSize: ClothesSize;
    shoesSize: string;
    productDesc?: string;
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollection;
    search?: string;
}
