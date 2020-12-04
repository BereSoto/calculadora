<template>
  <div class="calculator">
    <div class="calculator__display">{{current || 0}}</div>
    <div @click="clear" class="calculator__btn-header">C</div>
    <div @click="sign" class="calculator__btn-header">+/-</div>
    <div @click="percentage" class="calculator__btn-header">%</div>
    <div @click="division" class="calculator__btn-operator">÷</div>
    <div @click="append('7')" class="calculator__btn">7</div>
    <div @click="append('8')" class="calculator__btn">8</div>
    <div @click="append('9')" class="calculator__btn">9</div>
    <div @click=" mutiplication" class="calculator__btn-operator">x</div>
    <div @click="append('4')" class="calculator__btn">4</div>
    <div @click="append('5')" class="calculator__btn">5</div>
    <div @click="append('6')" class="calculator__btn">6</div>
    <div @click="substraction" class="calculator__btn-operator">-</div>
    <div @click="append('1')" class="calculator__btn">1</div>
    <div @click="append('2')" class="calculator__btn">2</div>
    <div @click="append('3')" class="calculator__btn">3</div>
    <div @click="sum"  class="calculator__btn-operator">+</div>
    <div @click="append('0')" class="calculator__zero calculator__btn">0</div>
    <div @click="decimal" class="calculator__btn">.</div>
    <div @click="result"  class="calculator__btn-operator">=</div>
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
    division() {
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
        parseFloat(this.current),
        parseFloat(this.previous),
      )}`;
      this.previous = null;
    },
  },
};
</script>
