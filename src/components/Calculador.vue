<template>
  <div class="calculator">
    <div class="calculator__display">{{current || 0}}</div>
    <button id="clearBtn" @click="clear" class="calculator__btn">C</button>
    <button id="signBtn" @click="sign" class="calculator__btn">+/-</button>
    <button id="percentageBtn" @click="percentage" class="calculator__btn">%</button>
    <button id="divBtn" @click="buttonision" class="calculator__btn">÷</button>
    <button id="number7Btn" @click="append('7')" class="calculator__btn">7</button>
    <button id="number8Btn" @click="append('8')" class="calculator__btn">8</button>
    <button id="number9Btn" @click="append('9')" class="calculator__btn">9</button>
    <button id="multiBtn" @click=" mutiplication" class="calculator__btn">x</button>
    <button id="number4Btn" @click="append('4')" class="calculator__btn">4</button>
    <button id="number5Btn" @click="append('5')" class="calculator__btn">5</button>
    <button id="number6Btn" @click="append('6')" class="calculator__btn">6</button>
    <button id='subsBtn' @click="substraction" class="calculator__btn">-</button>
    <button id="number1Btn" @click="append('1')" class="calculator__btn">1</button>
    <button id="number2Btn" @click="append('2')" class="calculator__btn">2</button>
    <button id="number3Btn" @click="append('3')" class="calculator__btn">3</button>
    <button id='sumBtn' @click="sum"  class="calculator__btn">+</button>
    <button id="number0Btn" @click="append('0')" class="calculator__zero calculator__btn">0</button>
    <button id="decimalBtn" @click="decimal" class="calculator__btn">.</button>
    <button  id="resultBtn" @click="result"  class="calculator__btn">=</button>
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
    // metodo para limpiar display
    clear() {
      this.current = '';
      this.operator = null;
    },
    // metodo para el cambio de signo negativo a positivo
    sign() {
      this.current = this.current.charAt(0) === '-'
        ? this.current.slice(1) : `-${this.current}`;
    },
    // metodo para obtener el porcentaje
    percentage() {
      this.current = `${parseFloat(this.current) / 100}`;
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    // metodo que agrega el número al que se le da click y se guarda en current
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    // metodo para añadir punto decimal
    decimal() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    // metodo para actualizar el resultado actual como el primer operandor
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    // metodo para realizar la división
    buttonision() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    // metodo para realizar la multipliocación
    mutiplication() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    // metodo para realizar la resta
    substraction() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    // metodo para realizar la suma
    sum() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    // metodo para obtener el resultado de las operaciones
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
