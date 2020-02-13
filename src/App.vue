<template>
  <div id="app">
    <div class="flex mb-4 py-1">
      <img class="w-1/8 mx-auto" alt="logo" src="./assets/logo.png" />
    </div>
    <div class="font-bold text-xl text-center">Try it yourself</div>
    <CheckWritingNumberApp initAmount />
    <div
      class="flex mb-4 py-4 font-bold text-xl text-center"
      v-on:click="showExample = !showExample"
    >
      <span class="flex items-center ml-auto mr-auto" v-if="showExample"
        ><MinusCircleIcon />Examples</span
      >
      <span class="flex items-center ml-auto mr-auto" v-else
        ><PlusCircleIcon />Examples</span
      >
    </div>
    <div v-if="showExample">
      <CheckWritingNumberApp initAmount="0" inputDisabled />
      <CheckWritingNumberApp initAmount=".12" inputDisabled />
      <CheckWritingNumberApp initAmount="1" inputDisabled />
      <CheckWritingNumberApp initAmount="12.3" inputDisabled />
      <CheckWritingNumberApp initAmount="99." inputDisabled />
      <CheckWritingNumberApp initAmount="100" inputDisabled />
      <CheckWritingNumberApp initAmount="123.45" inputDisabled />
      <CheckWritingNumberApp initAmount="999" inputDisabled />
      <CheckWritingNumberApp initAmount="1000" inputDisabled />
      <CheckWritingNumberApp initAmount="1999" inputDisabled />
      <CheckWritingNumberApp initAmount="999999" inputDisabled />
      <CheckWritingNumberApp initAmount="1000000999" inputDisabled />
      <CheckWritingNumberApp
        initAmount="999999999999999999999999999.99"
        inputDisabled
      />
    </div>
  </div>
</template>

<script>
import CheckWritingNumberApp from "./components/CheckWritingNumberApp.vue";
import { PlusCircleIcon, MinusCircleIcon } from "vue-feather-icons";
export default {
  name: "app",
  components: { CheckWritingNumberApp, MinusCircleIcon, PlusCircleIcon },
  data: function() {
    return { showExample: true };
  }
};
</script>
