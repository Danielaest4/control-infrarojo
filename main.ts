IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 56, 0)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 0, 72)
})
IR.init(Pins.P8)
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
