
// clase course para los que se repiten en cada escuela 
/* que no llamen los metodos si tienen un _ esconder el atributo 
name de nuestro prototipo course */

class Course {
   constructor({
       name,
       classes = []
   })
   {
       this._name = name;
       this.classes= classes;
   }
   // creamos nuyestro primer get
   get name(){
       return this._name;
   }

   /* forma general de cambiar nomnbre
   cursoProgramacionBasica.name= "" 
   tambien para cambiar el nombre podemos crear un metodo
   changeName (nuevoNombrecito){
       this._name = nuevoNombrecito
    } */

    set name (nuevoNombrecito){
        if(nuevoNombrecito === "Curso Malito de Programacion Basica"){
            console.error("Wey .................NO ")
        } else {
            this._name= nuevoNombrecito;
        }
    }
}; 

const cursoProgramacionBasica = new Course ({
    name: "Curso Gratis de Programacion Basica",
}); 
const CursoECMAScript= new Course({
    name: "Curso de ECMAScript 6+",
});

const cursoProfesionalDeGit= new Course({
    name:"Curso Profesional de Git y GitHub" ,
});

cursoProgramacionBasica.name = "Curso Gratis de Programacion Basica";

/* getters y setters 
Forma de cambiar el nombre con get y set 
cursoProgramacionBasica.name = " " *** el igual es el operador de asignacion*/

//basica 
//cursoProgramacionBasica.name= " "
//changeName
//cursoProgramacionBasica.changeName("nuevo nombre xD")
// si queremos cambiar el nombre del curso podemos 
//cursoProgramacionBasica.name = " nuevo nombre"
//esto me va arrojar el nombre "Curso Gratis de Programacion Basica"



//RETOOOOOOOOOOOOOOOOOO 

//rutas de aprendizaje  learningPaths
//constructor metodos que necesita la ruta de aprendizaje , instancia de la clase learning 
//const escuelaWeb= new learningPaths()

class LearningPaths{
    constructor({
        nameLearning,
        courses= [],
        percentageCompletedSchool,
    }){
        this.nameLearning = nameLearning;
        this.courses = courses;
        this.percentageCompletedSchool = percentageCompletedSchool;
    }
}

const escuelaJavascript = new LearningPaths({
    name: "Escuela de JavaScript",
    courses:[
        cursoProgramacionBasica,
        "Curso de Prework: configuracion de entorno de desarrollo en linux",
        "Curso de Frontend Developer",
        "Curso basico de JavaScript",
        CursoECMAScript,
        cursoProfesionalDeGit,
    ],
    percentageCompletedSchool: 28,
});

const escuelaDesarrolloWeb = new LearningPaths({
    name: "Escuela De Desarrollo Web ",
    courses:[
        cursoProgramacionBasica,
        "Curso basico de algoritmos y pensamiento logico",
        cursoProfesionalDeGit,
        "Fundamentos de ingenieria de software",
        "Curso definitivo de HTML y CSS",
        "Curso basico de JavaScript",
        "Curso Practico de JavaScript",
        CursoECMAScript,
        "Curso de asincronismo con JavaScript",
    ],
    percentageCompletedSchool: 52,
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths= [],
    }) {
        this.name  = name;
        this.email = email;
        this.usernamename = username;
        this.socialMedia = {
            twitter,
            instagram ,
            facebook ,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths  = learningPaths;
    }
}

const laura2= new Student ({
    name: "Laura",
    username: "lauraru-ju",
    email: "Laurajulianaru@gmail.com",
    instagram: "laura0328",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaJavascript,
    ]
});

const nelson1 = new Student({
    name:"Nelson",
    username:"nelson",
    email: "nelson1.holic@gamil.com",
    instagram:"nelsonholic", 
    learningPaths:[
        escuelaJavascript,
        escuelaDesarrolloWeb,
    ]
});


//RETO 2 
// como usamos get y set cuando estamos usando prototipos de JS sin la sintaxis de clases


function Student (name, age, cursosAprobados) {
    this._name = name;
    this.age =age;
    this._cursosAprobados= cursosAprobados;
}

Student.prototype= {
    get name(){
        return this._name;
    },
    set name (nuevoNombre){
        this._name = nuevoNombre;
    },
    get cursosAprobados(){
        return this._cursosAprobados;
    },
    set cursosAprobados (nuevoCurso){
        this._cursosAprobados = nuevoCurso;
    },
};

const laurita = new Student(
    "Laura Juliana",
    28,
    [
        "Curso de introduccion a la produccion de videojuegos",
        "curso basico de JS"
    ])
    laurita.name= "Django",
    laurita.cursosAprobados= " Curso definitivo de HTML y CSS"
    console.log(laurita)


 