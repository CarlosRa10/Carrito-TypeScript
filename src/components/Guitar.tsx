

import type {Guitar} from '../Types'

//metodo Type Separado --- nombre del componente seguido del props
type GuitarProps = {
    guitar:Guitar, 
    addToCart: (item: Guitar) => void
}
export default function Guitar({guitar, addToCart}:GuitarProps){

//destructuring  con  sintaxis inline Type
//export default function Guitar({guitar, addToCart}:{guitar:Guitar, addToCart: (item: Guitar) => void}) {//va a tomar addToCart y va a ser una funcion y va tomar un objeto como guitarra y no retorna nada

    const { name, image, description, price } = guitar


    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
