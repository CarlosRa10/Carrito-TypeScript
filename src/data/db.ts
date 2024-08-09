//Types & Interfaces - 2 de las caracteristicas que más vas a utilizar en TypeScript son Types e Interfaces.
//Ambas pueden ser utilizadas incluso de forma intercambiable, hay muy pocas diferencias entre ambos y en la comunidad vas a encontrar ejemplos con ambos
//es una forma de crear una estructura o agrupar propiedades de un objeto

//Crear Interfaces y su estructura
// interface Guitar {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number

// }
//////////////////////////////////////
//Crear el type y su esctructura---luego lo comente porque lo pase a el archivo de types
// type Guitar = {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number

// }

import type {Guitar} from '../Types'

export const db: Guitar[] = [
    {
        id: 1,
        name: 'Lukather',
        image: 'guitarra_01',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 299,
    },
    {
        id: 2,
        name: 'SRV',
        image: 'guitarra_02',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 349,
    },
    {
        id: 3,
        name: 'Borland',
        image: 'guitarra_03',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 329,
    },
    {
        id: 4,
        name: 'VAI',
        image: 'guitarra_04',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 299,
    },
    {
        id: 5,
        name: 'Thompson',
        image: 'guitarra_05',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 399,
    },
    {
        id: 6,
        name: 'White',
        image: 'guitarra_06',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 329,
    },
    {
        id: 7,
        name: 'Cobain',
        image: 'guitarra_07',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 349,
    },
    {
        id: 8,
        name: 'Dale',
        image: 'guitarra_08',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 379,
    },
    {
        id: 9,
        name: 'Krieger',
        image: 'guitarra_09',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 289,
    },
    {
        id: 10,
        name: 'Campbell',
        image: 'guitarra_10',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 349,
    },
    {
        id: 11,
        name: 'Reed',
        image: 'guitarra_11',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 399,
    },
    {
        id: 12,
        name: 'Hazel',
        image: 'guitarra_12',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 379,
    },
  ]