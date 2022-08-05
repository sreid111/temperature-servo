let temp = 0
basic.forever(function () {
    temp = 50
    basic.showNumber(temp)
    temp = Math.map(temp, 0, 40, 0, 180)
    servos.P0.setAngle(temp)
})
