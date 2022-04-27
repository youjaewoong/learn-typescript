interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    return;
}


// 굳이 또 만들 필요가 있을까?
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }


// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// pick 의 반대는 Omit 이다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem){
}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
type UpdateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>) {
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username? : string;
//     email? : string;
//     profilePhotoUrl?: string
// }

// #1
type UserProfileUpdate1 = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl']; 
}

// #2
type UserProfileUpdate2 = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate3 = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T> = {
    [p in keyof T]?: T[p]
}