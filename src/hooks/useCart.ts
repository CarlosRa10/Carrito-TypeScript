
import { useState, useEffect,useMemo } from 'react'
import { db } from '../data/db'
import type { Guitar, CartItem} from '../Types'

export const useCart = () =>{
  //Despues de los : podemos colocarle que el tipo de dato que va a tener la funcion initialCart que va a retornar va a ser un tipo de guitarra y sera un arreglo porque son varios elementos
    const initialCart = ():CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
    
      const [data] = useState(db)
      const [cart, setCart] = useState(initialCart)
    
      const MIN_ITEMS = 1
      const MAX_ITEMS = 5
    
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])
    
      function addToCart(item: Guitar) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0 ) { // existe en el carrito
          if(cart[itemExists].quantity >= MAX_ITEMS) return
          const updatedCart = [...cart]
          updatedCart[itemExists].quantity++
          setCart(updatedCart)
        } else {
          const newItem:CartItem = {...item, quantity : 1}//Hacemos una copia y le pasamos quantity
          setCart([...cart, newItem])// y se setea newItem al carrito que tiene el tipo de dato de cartItem--se le llama castear, tomar un tipo de dato y convertilro a otro
        }
      }
    
      function removeFromCart(id:Guitar['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
      }
    
      function decreaseQuantity(id: Guitar['id']) {
        const guitar = cart.find((guitar) => guitar.id === id);
        if (guitar?.quantity === 1) {
          removeFromCart(id);
          return;
        }
        const updatedCart = cart.map( item => {
          if(item.id === id && item.quantity > MIN_ITEMS) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        })
        setCart(updatedCart)
      }
    
      function increaseQuantity(id:Guitar['id']) {
        const updatedCart = cart.map( item => {
          if(item.id === id && item.quantity < MAX_ITEMS) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
        setCart(updatedCart)
      }
    
      function clearCart(e) {
        setCart([])
      }

          // State Derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart] )

    //El retur puede ser un arreglo[], pero se recomienda se que sea un objeto {}... la ventaja es que como nombres las funciones van a ser iguales que en el jsx 
    //si utilizas arreglo, va a retomarlo por posición 
    return{
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}

//export default useCart
// export{
//     useCart
// }