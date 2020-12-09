<template>
  <div class="calculator">
    <div class="calculator__display">{{current || 0}}</div>
    <button @click="clear" class="calculator__btn">C</button>
    <button @click="sign" class="calculator__btn">+/-</button>
    <button @click="percentage" class="calculator__btn">%</button>
    <button @click="buttonision" class="calculator__btn">÷</button>
    <button @click="append('7')" class="calculator__btn">7</button>
    <button @click="append('8')" class="calculator__btn">8</button>
    <button @click="append('9')" class="calculator__btn">9</button>
    <button @click=" mutiplication" class="calculator__btn">x</button>
    <button @click="append('4')" class="calculator__btn">4</button>
    <button @click="append('5')" class="calculator__btn">5</button>
    <button @click="append('6')" class="calculator__btn">6</button>
    <button @click="substraction" class="calculator__btn">-</button>
    <button @click="append('1')" class="calculator__btn">1</button>
    <button @click="append('2')" class="calculator__btn">2</button>
    <button @click="append('3')" class="calculator__btn">3</button>
    <button @click="sum"  class="calculator__btn">+</button>
    <button @click="append('0')" class="calculator__zero calculator__btn">0</button>
    <button @click="decimal" class="calculator__btn">.</button>
    <button @click="result"  class="calculator__btn">=</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    clear() {
      this.current = '';
      this.lastOperador = null;
      this.operator = null;
    },
    sign() {
      this.current = this.current.charAt(0) === '-'
        ? this.current.slice(1) : `-${this.current}`;
    },
    percentage() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    decimal() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    buttonision() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    mutiplication() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    substraction() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    sum() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    result() {
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current),
      )}`;
      this.previous = this.current;
    },
  },
};
</script>
