let Whatever_i_want = 0
let i_want_this = 0
input.onButtonPressed(Button.A, function () {
    Whatever_i_want = randint(0, 1)
    if (Whatever_i_want == 0) {
        basic.showString("Dare")
    }
    if (Whatever_i_want == 1) {
        basic.showString("Truth")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    i_want_this = randint(0, 3)
    if (i_want_this == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (i_want_this == 1) {
        basic.showArrow(ArrowNames.South)
    } else if (i_want_this == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (i_want_this == 3) {
        basic.showArrow(ArrowNames.West)
    }
})
