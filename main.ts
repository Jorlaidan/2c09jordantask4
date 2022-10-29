let Xvalue = 0
let Yvalue = 0
basic.forever(function () {
    Xvalue = 0
    Yvalue = 0
    while (Xvalue <= 4 && Yvalue <= 4) {
        if (input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            led.plot(Xvalue, Yvalue)
            basic.pause(500)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                basic.clearScreen()
                led.plot(Xvalue, Yvalue)
                basic.pause(500)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            Yvalue += 1
        }
        if (input.buttonIsPressed(Button.A)) {
            Xvalue += 1
        }
    }
})
