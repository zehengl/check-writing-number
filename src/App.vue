<template>
  <div id="app" class="flex flex-col h-screen justify-between">
    <header class="h-10 bg-yellow-300"></header>
    <div class="mt-8 mb-4 py-1">
      <img class="w-1/8 mx-auto" alt="logo" src="./assets/logo.png" />
    </div>
    <main class="mb-auto flex-grow">
      <div class="font-bold text-xl text-center">Try it yourself</div>
      <CheckWritingNumberApp initAmount />
      <div
        class="flex mb-4 py-4 font-bold text-xl text-center"
        v-on:click="showExample = !showExample"
      >
        <span class="flex items-center ml-auto mr-auto" v-if="showExample">
          <MinusCircleIcon />Hide Examples
        </span>
        <span class="flex items-center ml-auto mr-auto" v-else>
          <PlusCircleIcon />Expand Examples
        </span>
      </div>
      <div v-if="showExample">
        <CheckWritingNumberApp
          v-for="(amount, index) in examples"
          :key="index"
          :initAmount="amount"
          inputDisabled
        />
      </div>
    </main>
    <footer class="bg-gray-300">
      <p class="p-4 text-center align-top">
        Version: <strong>{{ version }}</strong>
      </p>
    </footer>
  </div>
</template>

<script>
import CheckWritingNumberApp from "./components/CheckWritingNumberApp.vue";
import { PlusCircleIcon, MinusCircleIcon } from "vue-feather-icons";
import { version } from "../package.json";
export default {
  name: "app",
  components: {
    CheckWritingNumberApp,
    MinusCircleIcon,
    PlusCircleIcon,
  },
  data: function () {
    return {
      version: version,
      showExample: false,
      examples: [
        "0",
        ".12",
        "1",
        "12.3",
        "99.",
        "100",
        "123.45",
        "999",
        "1000",
        "1999",
        "999999",
        "1000000999",
        "999999999999999999999999999.99",
      ],
    };
  },
};
</script>
