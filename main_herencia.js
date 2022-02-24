// vamos a crear dos funciones  ya que no se tienen la url del video
function videoPlay (id) {
    const urlSecreta = " https://platziultrasecretomasquelanasa.com/" + id
    console.log ("Se esta reproduciendo desde la url secreta" + urlSecreta)
}

function videoStop (id) {
    const urlSecreta = " https://platziultrasecretomasquelanasa.com/" + id
    console.log ("Se esta reproduciendo desde la url secreta" + urlSecreta)
}

class PlatziClass{
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    //nuestras clases deben poder reproducirse 
    // creamos metodo reproducir y pausar 

    reproducir () {
        videoPlay(this.videoID)
    }
    pausar (){
        videoStop(this.videoID)
    }
}


//clase madre 
class Course {
    constructor({
        name,
        classes = [],
        isFree= false,
        lang = "spanish"
    })
    {
        this._name = name;
        this.classes= classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    // creamos nuyestro primer get
    get name(){
        return this._name;
    }
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
    isFree : true,
}); 
const CursoECMAScript= new Course({
    name: "Curso de ECMAScript 6+",
});

const cursoProfesionalDeGit= new Course({
    name:"Curso Profesional de Git y GitHub" ,
    lang: "English",
});


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

// clases hijas
class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
// metodo distinto para cada estudiante
    approveCourse( newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(" Lo sentimos, " + this.name + ",solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props);
    }
    approveCourse( newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(" Lo sentimos, " + this.name + ",no puedes tomar cursos en ingles")
        }
    }
}

class ExpertStudent extends Student {
    constructor(){
        super(props);
    }
    approveCourse( newCourse){
        this.approvedCourses.push (newCourse);
    }
}

const laura2= new FreeStudent ({
    name: "Laura",
    username: "lauraru-ju",
    email: "Laurajulianaru@gmail.com",
    instagram: "laura0328",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaJavascript,
    ]
});

const nelson1 = new BasicStudent({
    name:"Nelson",
    username:"nelson",
    email: "nelson1.holic@gamil.com",
    instagram:"nelsonholic", 
    learningPaths:[
        escuelaJavascript,
        escuelaDesarrolloWeb,
    ]
});

