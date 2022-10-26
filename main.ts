let yeunglikhang = 0
let x_man = 0
input.onButtonPressed(Button.A, function () {
    yeunglikhang = -1
    x_man = -1
    for (let index = 0; index < 2; index++) {
        x_man = -1
        yeunglikhang += 1
        for (let index = 0; index < 5; index++) {
            x_man += 1
            led.plot(x_man, yeunglikhang)
            basic.pause(200)
        }
        yeunglikhang += 1
        for (let index = 0; index < 5; index++) {
            led.plot(x_man, yeunglikhang)
            x_man += -1
            basic.pause(200)
        }
    }
    yeunglikhang += 1
    for (let index = 0; index < 6; index++) {
        led.plot(x_man, yeunglikhang)
        x_man += 1
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
