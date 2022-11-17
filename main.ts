let Zufall = 0
let Spielstand = 0
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    Zufall = randint(0, 2)
    if (Zufall == 0) {
        basic.showLeds(`
            . . # . .
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(500)
    } else if (Zufall == 1) {
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
    } else if (Zufall == 2) {
        basic.showLeds(`
            . . # . .
            # . # . #
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.A) && Zufall == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            `)
        Spielstand += 1
        basic.pause(500)
    } else if (input.buttonIsPressed(Button.B) && Zufall == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            `)
        Spielstand += 1
        basic.pause(500)
    } else if (input.buttonIsPressed(Button.A) && Zufall == 1 || (input.buttonIsPressed(Button.B) && Zufall == 0 || input.buttonIsPressed(Button.AB) && Zufall != 2)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Spielstand += -1
        basic.pause(500)
    } else if (input.buttonIsPressed(Button.AB) && Zufall == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            `)
        Spielstand += 1
        basic.pause(500)
    }
    if (Spielstand == 10) {
        basic.showString("SCORE: 10")
        game.gameOver()
    } else if (Spielstand < 0) {
        basic.showString("VERLOREN")
        game.gameOver()
    }
})
