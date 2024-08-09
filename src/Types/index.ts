
export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number

}


// export type CartItem = {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number
//     quantity: number

// }

//se pueden itercambiar los types y las interfaces
// export interface CartItem extends Guitar{
//     quantity:number
// }

export type CartItem = Guitar &{
    quantity: number

}

//una forma de hacerlo
//export type GuitarId = Pick<Guitar,'id'>

//aqui es udando el Lookup - no puedes agregar dos elementos
//export type GuitarId = Guitar['id']


//Utility Types en TypeScript-con Pick - solo hereda lo que elijes 
// export type CartItem = Pick<Guitar, 'id'| 'name' | 'price'> &{
//     quantity: number
// }

//Utility Types en TypeScript-con Omit - Quita propiedades
// export type CartItem = Omit<Guitar, 'id'| 'name' | 'price'> &{
//     quantity: number
// }