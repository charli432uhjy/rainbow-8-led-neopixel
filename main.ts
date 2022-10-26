let rainbow = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
rainbow.setBrigthness(200)
rainbow.showRainbow(1, 360)
rainbow.show()
basic.pause(500)
basic.forever(function () {
    rainbow.showRainbow(1, pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    360
    ))
})
