//objetos literales
 
const laura1={
    name:"Laura",
    username:"lajuruiz",
    points:8598,
    socialMedia: {
        twitter: undefined,
        instagram:"lauraru0328",
        facebook: undefined,
    },

    approvedCourses: [
        "curso definivito de HTML y CSS",
        "Curso Practico de JS"
    ],

    learningPaths:[{
            name:" Escuela de desarrollo web", 
            Courses: [
            "curso definivito de HTML y CSS",
            "Curso Practico de JS",
            "Curso profesional de GIT y GIThub",
            ],
        },

        {
            name: "Escuela de ingles",
            courses: [
                "Curso basico de ingles",
                "Curso basico Horas y Fechas",
            ],
        }
    ],
};

const nelson1={
    name:"Nelson",
    username:"nelson",
    points:2098,
    socialMedia: {
        twitter: undefined,
        instagram:"nelsonholic",
        facebook: undefined,
    },

    approvedCourses: [
        "curso definivito de HTML y CSS",
        "Curso Practico de JS",
        "Curso de Frontend Developer 2021"
    ],

    learningPaths:[{
            name:" Escuela de desarrollo web", 
            Courses: [
            "curso definivito de HTML y CSS",
            "Curso Practico de JS",
            "Curso profesional de GIT y GITHub",
            ],
        }, 
    ],
};

//objetos literales anteriormente creados ahora en clases

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths,
    }) 
    {
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

//instancia del prototipo student
const laura2= new Student ({
    name: "Laura",
    username: "lauraru-ju",
    email: "Laurajulianaru@gmail.com",
    instagram: "laura0328",
});

const nelson1 = new Student({
    name:"Nelson",
    username:"nelson",
    email: "nelson1.holic@gamil.com",
    instagram:"nelsonholic", 
});
