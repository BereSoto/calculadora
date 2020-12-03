<template>
  <div id="app">
    <Calculador/>
  </div>
</template>

<script>
import Calculador from './components/Calculador.vue';

export default {
  name: 'App',
  components: {
    Calculador,

  },
};
</script>
<style lang="scss">
@import './scss/main.scss'

</style>
