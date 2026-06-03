// tests go here; this will not be compiled when this package is used as an extension.
basic.forever(function () {
    basic.clearScreen()
    if (mkeS0016LineTracker.detectLine(mkeS0016LineTracker.SensorPort.P1, mkeS0016LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("1")
    }
    if (mkeS0016LineTracker.detectLine(mkeS0016LineTracker.SensorPort.P2, mkeS0016LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("2")
    }
    if (mkeS0016LineTracker.detectLine(mkeS0016LineTracker.SensorPort.P3, mkeS0016LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("3")
    }
    if (mkeS0016LineTracker.detectLine(mkeS0016LineTracker.SensorPort.P4, mkeS0016LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("4")
    }
    if (mkeS0016LineTracker.detectLine(mkeS0016LineTracker.SensorPort.P5, mkeS0016LineTracker.I2CAddress.ADDR_2A)) {
        basic.showString("5")
    }
})
