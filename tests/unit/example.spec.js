import { mount } from '@vue/test-utils';

import Calculador from '@/components/Calculador.vue';

const wrapper = mount(Calculador);

console.log(wrapper.vm.$data);

describe('Probando Calculadora', () => {
  test('should change current on click button', () => {
    wrapper.find('#numberBtn').trigger('click');
    expect(wrapper.vm.$data.current).not.toBe('');
  });

  test('should clear all data on click clear button', () => {
    wrapper.find('#clearBtn').trigger('click');
    expect(wrapper.vm.$data.current).toBe('');
    expect(wrapper.vm.$data.operator).toBe(null);
  });
});
