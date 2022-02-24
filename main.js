const natalia = {
    name: "Laura",
    age:20,
    cursosAprobados: [
        "Curso basico de JS",
        "Curso practico de JS",
    ],
    //crear metodo SE PUEDE HACER LA SINTAXIS DE DOS FORMAS 
    // aprobarCurso ()  { } o  el que esta en el sgte renglon 
    //vamos a utilizar this que hace referencia al objeto natalia
    aprobarCurso: function (nuevoCursito){
        this.cursosAprobados.push(nuevoCursito) 
    }
};

//hacer que natalia apruebe otro curso 
natalia.cursosAprobados.push("Curso basico de HTML")
//lo creado anteriormente son atributos ahora vamos a crear metodos

//Nuestro primer prototipo xD

function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age =age;
    this.cursosAprobados= cursosAprobados;
   
}

Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}

//instacia del prototipo 

const laurita = new Student(
    "Laura Juliana",
    28,
    [
        "Curso de introduccion a la produccion de videojuegos",
        "curso basico de JS"
    ],
);


// prototipos con la sintaxis de clases

class Student2{
    constructor(name, age, cursosAprobados){

        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const lauraa= new Student2 (
    "Laura",
    28,
    [
        "Curso basico de POO ",
        "Curso practico de JS"
    ]
); 

// en el constructor los parametros en algunos casos se hacen muy largos
// entonces hay una opcion para poder  hacerlo y es recibir un solo parametro que 
// sea de tipo objeto {}
/* {
    name,
    age,
    cursosAprobados
} */ // esta seria la forma para poder agregar varios 

class Student2{
    constructor({
       name,
       age,
       cursosAprobados = [],
       email,
    }){
        this.name=name;
        this.email=email;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
    }
    
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

//una opcion  es que el estudiante sea nuevo por eso en el constructor le coloque que 
// cursosAprobados= a un array vacio....
const lauraa= new Student2 ({
    name:"Laura",
    email: "laurita1@platzi.com",
    age: 28,
    /* cursosAprobados:[
        "Curso basico de POO ",
        "Curso practico de JS"
    ] */
});
