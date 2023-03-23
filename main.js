// Funciones Flecha

const saludar = () => "Hola";

const division = (a,b) => a/b;
console.log(division(10,5))

const miNombre = nombre => {
return `Mi nombre es ${nombre}`;
}
console.log(miNombre('Jorge'))

const test2 = () => {
  console.log("Función test 2 ejecutada.")
}
const test1 = (callback) => {
  callback()
}
test1(test2)


// ForEach
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

  const arrayGente = []
  gente.forEach(gentes => {
    if(gentes.edad > 25)
    arrayGente.push({nombre: gentes.nombre, edad: gentes.edad})
  })
  console.log(arrayGente)

  const arrayGente1 = []
  gente.forEach(gentes1 => {
    if(gentes1.nombre.startsWith('J'))
    arrayGente1.push({nombre: gentes1.nombre, edad: gentes1.edad})
  })
console.log(arrayGente1)

  // Map


const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const arrayNumbers = numbers.map((number) => number ** number);
console.log(arrayNumbers)

// Filter

const arrayNuevoGente = gente.filter((people) => people.edad > 25);
console.log(arrayNuevoGente)

const arrayNuevoGente1 = gente.filter((people) => people.nombre.startsWith('J'))
console.log(arrayNuevoGente1)

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNuevoNumbers1 = numbers1.filter((numero) => numero %2 !== 0);
console.log(arrayNuevoNumbers1)


const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];
const arrayNuevoFoodList = foodList.filter(food => food.isVeggie)
console.log(arrayNuevoFoodList)
  

// Reduce

const numeros = [39, 2, 4, 25, 62];
const arrayNumeros = numeros.reduce((a,b) => a*b);
console.log(arrayNumeros)

//Extras

// Map
const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
      },
      {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
      },
      {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
      },
    ];


const arrayNuevoStaff = staff.map((hobby) => `${hobby.name} es ${hobby.role} y le gusta ${hobby.hobbies[0]} y ${hobby.hobbies[1]}`)
console.log(arrayNuevoStaff)


// Reduce

const sentenceElements = [
  'Me ',
  'llamo ',
  'Jorge ',
  'y ',
  'quiero ',
  'sentir ',
  'la ',
  'fuerza ',
  'con ',
  'javascript '
  ];
const joinStrings = (word, position) => {
  return word + position
}
const setPhrase = sentenceElements.reduce(joinStrings)
console.log(setPhrase)

// Filter

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const newInventory = inventory.filter(gift => gift.price > 300).map(gift => gift.name)
console.log(newInventory)

