class VendingMachine {

  private isOn: boolean = false;

  private snacksQty: number = 50;

  private money: number = 0;

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
    this.turnOn();
  }

  public turnOn() {
    this.isOn = true;
  }

  public shootWithFoot() {

    if(this.snacksQty < 5) {
        this.snacksQty = 0;
    } else {
    this.snacksQty-= 5;
    }

    if(this.money < 20) {
        this.money = 0;
    } else {
    this.money -= 20;
    }

    this.isOn = false;
  }

}

const vendingMachine = new VendingMachine();