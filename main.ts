let encontrado = false
let recibido = ""
let mensaje = "equipo1"
basic.forever(function () {
    radio.sendString(mensaje)
    recibido = radio.receiveString()
    if (recibido == mensaje) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            . # # # .
            `)
        encontrado = true
    } else if (!(encontrado)) {
        basic.clearScreen()
    }
    basic.pause(1000)
})
