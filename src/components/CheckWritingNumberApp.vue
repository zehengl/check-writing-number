<template>
  <div>
    <div class="flex mb-4">
      <form class="w-1/3 ml-auto mr-auto">
        <div class="flex items-center border-b border-b-2 border-blue-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter the amount of money"
            v-bind:disabled="inputDisabled"
            v-model="amount"
            aria-label="Amount"
          />
          <button
            class="flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-gray-800 text-sm py-1 px-2 focus:outline-none"
            type="button"
            v-if="!inputDisabled"
            v-on:click="amount = ''"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
    <div class="flex mb-4" role="alert" v-if="amount">
      <p
        class="w-1/3 ml-auto mr-auto bg-green-500 border-transparent border-4 py-1 px-2"
      >
        writes as: {{ convert(amount) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckWritingNumberApp",
  props: {
    amount: String,
    inputDisabled: Boolean
  },
  methods: {
    convert: str => {
      return str;
    }
  }
};
</script>
