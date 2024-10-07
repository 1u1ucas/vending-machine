class VendingMachine {

  private isOn: boolean ;

  private snacksQty: number;

  private money: number;

  private turnOnOff() {
    this.isOn = !this.isOn;
  }

  public constructor() {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
    this.turnOnOff();
  }

  public buySnack() {

    if (!this.isOn) {
      throw new Error('Vending machine is off');
    }

    if (this.snacksQty === 0) {
      throw new Error('No snacks left');
    }


    this.snacksQty--;
    this.money += 2;

    return 'Enjoy your snack!';

  }

  public reset() {

    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
    this.turnOnOff();

    return 'Vending machine is now reset';
  }

  public shootWithFoot() {

    if (!this.isOn) {
      throw new Error('Vending machine is off');
    }

    let snacksToDrop = Math.floor(Math.random() * 6);
    if (this.snacksQty < snacksToDrop) {
      snacksToDrop = this.snacksQty;
    }

    this.snacksQty -= snacksToDrop;

    let moneyToDrop = Math.floor(Math.random() * 21);
    if (this.money < moneyToDrop) {
        moneyToDrop = this.money;
    }

    this.money -= moneyToDrop;

    this.turnOnOff();
  }

}

const vendingMachine = new VendingMachine();

