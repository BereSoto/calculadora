import { mount } from '@vue/test-utils';

import Calculador from '@/components/Calculador.vue';

const wrapper = mount(Calculador);

console.log(wrapper.vm.$data);

describe('testing the calculator functionalities', () => {
  test('should change current on click button', () => {
    wrapper.find('#number1Btn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('1');
  });

  test('should clear all data on click clear button', () => {
    wrapper.find('#clearBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('');
    expect(wrapper.vm.$data.operator).toBe(null);
  });

  test('testing the functionality of the sum', () => {
    wrapper.find('#number1Btn').trigger('click');
    wrapper.find('#number0Btn').trigger('click');
    wrapper.find('#sumBtn').trigger('click');
    expect(wrapper.vm.$data.previous).toBe('10');
    expect(wrapper.vm.operator).not.toBe(null);
    wrapper.find('#number5Btn').trigger('click');
    wrapper.find('#resultBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('15');
    wrapper.find('#clearBtn').trigger('click');
  });
  test('testing subtraction functionality', () => {
    wrapper.find('#number3Btn').trigger('click');
    wrapper.find('#number0Btn').trigger('click');
    wrapper.find('#subsBtn').trigger('click');
    expect(wrapper.vm.$data.previous).toBe('30');
    expect(wrapper.vm.operator).not.toBe(null);
    wrapper.find('#number5Btn').trigger('click');
    wrapper.find('#resultBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('25');
    wrapper.find('#clearBtn').trigger('click');
  });
  test('testing multiplication functionality', () => {
    wrapper.find('#number1Btn').trigger('click');
    wrapper.find('#number0Btn').trigger('click');
    wrapper.find('#multiBtn').trigger('click');
    expect(wrapper.vm.$data.previous).toBe('10');
    expect(wrapper.vm.operator).not.toBe(null);
    wrapper.find('#number5Btn').trigger('click');
    wrapper.find('#resultBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('50');
    wrapper.find('#clearBtn').trigger('click');
  });
  test('testing division functionality', () => {
    wrapper.find('#number5Btn').trigger('click');
    wrapper.find('#number0Btn').trigger('click');
    wrapper.find('#divBtn').trigger('click');
    expect(wrapper.vm.$data.previous).toBe('50');
    expect(wrapper.vm.operator).not.toBe(null);
    wrapper.find('#number2Btn').trigger('click');
    wrapper.find('#resultBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('25');
    wrapper.find('#clearBtn').trigger('click');
  });
  test('testing the decimal point', () => {
    wrapper.find('#number5Btn').trigger('click');
    wrapper.find('#decimalBtn').trigger('click');
    wrapper.find('#number0Btn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('5.0');
    wrapper.find('#clearBtn').trigger('click');
  });
  test('testing the percentage', () => {
    wrapper.find('#number2Btn').trigger('click');
    wrapper.find('#number0Btn').trigger('click');
    wrapper.find('#percentageBtn').trigger('click');
    expect(wrapper.vm.$data.previous).toBe('0.2');
    wrapper.find('#number5Btn').trigger('click');
    wrapper.find('#number0Btn').trigger('click');
    wrapper.find('#resultBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('10');
    wrapper.find('#clearBtn').trigger('click');
  });
  test('testing the change of signs', () => {
    wrapper.find('#number2Btn').trigger('click');
    wrapper.find('#signBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('-2');
  });
});
