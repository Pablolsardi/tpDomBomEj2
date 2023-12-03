let persona1;

class Persona{
    constructor(nombre, dni, sexo, peso, altura, anioNac, edad){
        this.nombre = nombre;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNac = anioNac;
        this.edad = edad;
    }

    mostrarGeneracion(){
        if(this.anioNac>=1930 && this.anioNac<=1948){
            alert(this.nombre + " pertenece a: SILENT GENERACIÓN - Austeridad");
        }else if(this.anioNac>=1949 && this.anioNac<=1968){
            alert(this.nombre + " pertenece a: BABY BOOM - Ambición");
        }else if(this.anioNac>=1969 && this.anioNac<=1980){
            alert(this.nombre + " pertenece a: GENREACIÓN X - Obsesión por el éxito");
        }else if(this.anioNac>=1981 && this.anioNac<=1993){
            alert(this.nombre + " pertenece a: GENREACIÓN Y - Frustración");
        }else if(this.anioNac>=1994 && this.anioNac<=2010){
            alert(this.nombre + " pertenece a: GENREACIÓN Z - Irreverencia");
        }
    }

    esMayorDeEdad(){
        if((2023-this.anioNac)>=18){
            alert(this.nombre + " es mayor de edad");
        }else{
            alert(this.nombre + " es menor de edad");
        }
    }

  
    mostrarDatos(){
        document.write(`<h2>Nombre: ${this.nombre}</h2>`);
        document.write(`<p>DNI: ${this.dni}</p>`);
        document.write(`<p>Año de Nacimiento: ${this.anioNac}</p>`);
        document.write(`<p>Edad: ${this.edad}</p>`);
        this.esMayorDeEdad();
        document.write(`<p>Sexo: ${this.sexo}</p>`);
        document.write(`<p>Peso: ${this.peso}</p>`);
        document.write(`<p>Altura: ${this.altura}</p>`);
    }
}

const crearObjeto = (e)=>{
    e.preventDefault();
    let sacarNombre = document.getElementById('inputNombre');
    let nombre = sacarNombre.value;
    let sacarDni = document.getElementById('inputDNI');
    let dni = parseInt(sacarDni.value);
    let sacarEdad = document.getElementById('inputEdad');
    let edad = parseInt(sacarEdad.value);
    let sacarAnio = document.getElementById('inputAnio');
    let anio = parseInt(sacarAnio.value);
    let sacarSexo = document.getElementById('inputSexo');
    let sexo = sacarSexo.value;
    let sacarPeso = document.getElementById('inputPeso');
    let peso = parseFloat(sacarPeso.value);
    let sacarAltura = document.getElementById('inputAltura');
    let altura = parseInt(sacarAltura.value);

    persona1 = new Persona(nombre, dni, sexo, peso, altura, anio, edad);

    agregarTestigo(nombre);

}

const agregarTestigo = (nombreTestigo) =>{
    seccion.textContent = ' ';

    const textoTestigo = document.createElement('p');
    textoTestigo.innerText = `Persona cargada: ${nombreTestigo}`;
    textoTestigo.className = 'text-center text-success';
    seccion.prepend(textoTestigo);
}

const seccion = document.getElementById('contenedorOpciones');

const alertGeneracion = () =>{
    persona1.mostrarGeneracion();
}

const alertMayor = () =>{
    persona1.esMayorDeEdad();
}