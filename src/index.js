class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.actions = [{
      type: "+",
      arg: initialValue
    }];
  }

  valueOf() {
    var result = 0;
    
    for (var i = this.actions.length-1; i > 0 ; i--) {
      if (this.actions[i].type === "^") {
        this.actions[i -1].arg = Math.pow(this.actions[i - 1].arg, this.actions[i].arg);
        result = this.actions[i-1].arg;
        this.actions.splice(i, 1);
      }
    }

    for (var i = 1; i < this.actions.length; i++) {
      if (this.actions[i].type === "*" || this.actions[i].type === "/") {
        if (this.actions[i].type === "*") {
          this.action;
          var p = this.actions[i - 1].arg;
          var c = this.actions[i].arg;
          this.actions[i-1].arg = this.actions[i - 1].arg * this.actions[i].arg;
          result = this.actions[i-1].arg;
          this.actions.splice(i, 1);
          i--;
        } else {
          this.actions[i-1].arg = this.actions[i - 1].arg / this.actions[i].arg;
          result = this.actions[i-1].arg;
          this.actions.splice(i, 1);
          i--;
        }
      }
    }

    for (var i = 1; i < this.actions.length; i++) {
      if (this.actions[i].type === "+" || this.actions[i].type === "-") {
        if (this.actions[i].type === "+") {
          this.actions[i - 1].arg = this.actions[i - 1].arg + this.actions[i].arg;
          result = this.actions[i-1].arg;
          this.actions.splice(i, 1);
          i--;
        } else {
          this.actions[i - 1].arg = this.actions[i - 1].arg - this.actions[i].arg;
          result = this.actions[i-1].arg;
          this.actions.splice(i, 1);
          i--;
        }
      }
    }
    return result;
  }
  
  add(number) {
    this.actions.push({
      type: "+",
      arg: number
    });
    return this;
  }
  
  subtract(number) {
    this.actions.push ({
      type: "-",
      arg: number
    }); 
    return this;
    
  }

  multiply(number) {
    this.actions.push({
      type: "*",
      arg: number
    });
    return this;
  }

  devide(number) {
    this.actions.push({
      type: "/",
      arg: number
    });
    return this;
  }

  pow(number) {
    this.actions.push({
      type: "^",
      arg: number
    });
    return this;
  }
}

module.exports = SmartCalculator;
