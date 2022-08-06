let temp = 0
basic.showString("Servo temp")
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    temp = Math.map(temp, 0, 40, 0, 180)
    servos.P0.setAngle(temp)
})
