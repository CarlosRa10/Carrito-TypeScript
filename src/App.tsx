//Primitive types - Son los tipos de datos que soporta TypeScript de forma nativa, los cuales son: number, string, boolean, null y undefined
//En el saco de los arrays hay una sintaxis especial para crearlos

//import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import {  useCart } from './hooks/useCart'

function App() {
  const {data,cart,addToCart,removeFromCart,decreaseQuantity,increaseQuantity,clearCart, isEmpty,cartTotal} = useCart()
  
  //const [auth,setAuth] =useState<>(20) - <> es para asiganir el tipo de valor de lo que viene despues, pero en algunos caso es redundante
  //const [auth,setAuth] =useState(false)
  
  return (
    <>
    <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
    />
    
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                <Guitar 
                  key={guitar.id}
                  guitar={guitar}
                  addToCart={addToCart}
                />
            ))}
            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
