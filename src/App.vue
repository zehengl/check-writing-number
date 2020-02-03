<template>
  <div id="app">
    <div class="flex mb-4 py-1">
      <img class="w-1/8 mx-auto" alt="logo" src="./assets/logo.png" />
    </div>
    <div class="font-bold text-xl text-center">Try it yourself</div>
    <CheckWritingNumberApp amount="" />
    <div class="font-bold text-xl text-center pt-16">Examples</div>
    <CheckWritingNumberApp amount="123" inputDisabled />
    <CheckWritingNumberApp amount="123,456" inputDisabled />
    <CheckWritingNumberApp amount="123,456.78" inputDisabled />
    <CheckWritingNumberApp amount="Not a number..." inputDisabled />
  </div>
</template>

<script>
import CheckWritingNumberApp from "./components/CheckWritingNumberApp.vue";
export default {
  name: "app",
  components: { CheckWritingNumberApp }
};
</script>
