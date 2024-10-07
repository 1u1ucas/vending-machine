class VendingMachine {

  private isOn: boolean ;

  private snacksQty: number;

  private money: number;

  public constructor() {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
  }

  
  public turnOnOff() {
    this.isOn = !this.isOn;
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
    if (!this.isOn) {
        this.snacksQty = 50;
        this.money = 0;
        this.turnOnOff();
        return 'Vending machine is now reset';
    }

    this.turnOnOff();
    this.snacksQty = 50;
    this.money = 0;
    this.turnOnOff();

    return 'Vending machine is now reset';
  }

  public shootWithFoot() {

    if (!this.isOn) {
      throw new Error('Vending machine is off');
    }

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

    this.turnOnOff();
  }

}

const vendingMachine = new VendingMachine();

vendingMachine.turnOnOff();

