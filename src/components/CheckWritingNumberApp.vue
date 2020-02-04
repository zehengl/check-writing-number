<template>
  <div>
    <div class="flex mb-4">
      <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto mr-auto">
        <div class="flex items-center border-b border-b-2 border-blue-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter the amount of money"
            v-bind:disabled="inputDisabled"
            v-model="amount"
            ref="inputAmount"
            @keydown.esc="clearAmount()"
            aria-label="Amount"
          />
          <button
            class="flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-gray-800 text-sm py-1 px-2 focus:outline-none"
            type="button"
            v-if="!inputDisabled"
            v-on:click="clearAmount()"
          >
            Clear
          </button>
          <button
            class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 focus:outline-none"
            v-clipboard:copy="convert(amount)"
            v-if="!inputDisabled && amount"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
    <div class="flex mb-4" role="alert" v-if="amount">
      <div
        v-if="inputDisabled"
        class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto mr-auto bg-gray-500 border-transparent border-4 py-1 px-2"
      >
        <p>{{ convert(amount) }}</p>
      </div>
      <div
        v-else
        class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ml-auto mr-auto bg-blue-500 border-transparent border-4 py-1 px-2"
      >
        <p>{{ convert(amount) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { convert } from "./numberToWords";

export default {
  name: "CheckWritingNumberApp",
  props: {
    inputDisabled: Boolean,
    initAmount: String
  },
  data: function() {
    return { amount: this.initAmount };
  },
  methods: {
    clearAmount: function() {
      this.amount = "";
      this.$refs.inputAmount.focus();
    },
    convert: convert
  }
};
</script>
