function imprimirConsola( constructorClase: Function) {
  console.log( constructorClase );
}

@imprimirConsola
export class Xmen {
  constructor (
    public nombre: string,
    public clave: string
  ) {}

  imprimir() {
    console.log(`${this.nombre} - ${this.clave}`);
    
  }
  
}

//la función imprimirConsola es un decorador, un decorador es una función que expande la clase,
// en este caso "Xmen" añadiendole características y funcionalidades