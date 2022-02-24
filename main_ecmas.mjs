// vamos a crear dos funciones  ya que no se tienen la url del video
function videoPlay (id) {
    const urlSecreta = " https://platziultrasecretomasquelanasa.com/" + id
    console.log ("Se esta reproduciendo desde la url secreta" + urlSecreta)
}

function videoStop (id) {
    const urlSecreta = " https://platziultrasecretomasquelanasa.com/" + id
    console.log ("Se esta reproduciendo desde la url secreta" + urlSecreta)
}

export class PlatziClass{
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
