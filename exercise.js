// 1. INSTANCIAMIENTO DEL ÁREA DE JUEGO
const areaDelJuego = {
    canvas: document.createElement("canvas"),

    comienzo: function(){
        this.canvas.width = 550;
        this.canvas.height = 350;
        this.context = this.canvas.getContext("2d")
        document.body.appendChild(this.canvas)

        // ESTABLECER EL MOTOR
        this.interval = setInterval(reproducirArea, 20)
    },

    limpiar: function(){
        this.context.clearReact(0, 0, this.canvas.width, this.canvas.height)
    }
}

const reproducirArea = () => {
    areaDelJuego.limpiar()
}

// 2. COMPONENTES

class Desarrollo {
    constructor(width, height, color, x, y){
        // Datos para el cuadro o rectangulo pequeño.
        this.width = width
        this.height = height
        this.color = color
        this.x = x
        this.y = y
        // Velocidades
        this.speedX = 0
        this.speedY = 0
    }

    // Datos para cuadritos o retangulos.
    actualizar(){
        const ctx = areaDelJuego.context
        ctx.fillStyle = this.color
        ctx.fillReact(this.x, this.y, this.width, this.height)
    }

    posicion(){
        this.x += this.speedX
        this.y += this.speedY
    }

}


// EJECUCIONES
areaDelJuego.comienzo()

//                             w  h   color x   y
const player1 = new Desarrollo(30,30, "", 0, 110)