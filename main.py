mensaje = "equipo1"
encontrado = False

def on_forever():
    global encontrado
    radio.send_string(mensaje)
    recibido = radio.receive_string()
    if recibido == mensaje:
        basic.show_icon(IconNames.HEART)
        encontrado = True
    else:
        if not encontrado:
            basic.clear_screen()
    basic.pause(1000)

basic.forever(on_forever)
