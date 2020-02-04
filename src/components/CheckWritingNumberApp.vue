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
    convert: str => {
      let notANumber = "Oops! This is not a number.";

      let units = [
        "",
        "Thousand",
        "Million",
        "Billion",
        "Trillion",
        "Quadrillion",
        "Quintillion",
        "Sextillion",
        "Septillion"
      ];

      let matches = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen"
      ];

      let tens = [
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety"
      ];

      let chunkArray = arr => {
        let index = arr.length;
        let temp = [];
        for (; index >= 0; index -= 3) {
          let chunk = arr.slice(index - 3 >= 0 ? index - 3 : 0, index);
          if (chunk) {
            temp.push(chunk);
          }
        }
        return temp;
      };

      let chunkToWords = chunk => {
        let value = parseInt(chunk);
        if (value < 20) return matches[value];
        let digit = value % 10;
        if (value < 100)
          return tens[~~(value / 10) - 2] + (digit ? "-" + matches[digit] : "");
        if (value < 1000)
          return (
            matches[~~(value / 100)] +
            " Hundred" +
            (~~(value / 100) > 1 ? "s" : "") +
            (value % 100 == 0 ? "" : " " + chunkToWords(value % 100))
          );
      };

      let translate = chunks => {
        return chunks
          .map((chunk, i) => {
            if (+chunk === 0) return "";
            return chunkToWords(chunk)
              ? chunkToWords(chunk) +
                  " " +
                  (i < units.length ? units[i] : `[1000^${i}]`) +
                  (+chunk > 1 && i > 0 ? "s" : "")
              : "";
          })
          .reverse()
          .filter(Boolean)
          .join(" and ");
      };

      let parts = str.split(".");

      if (parts.length > 2) return notANumber;
      else if (parts.length === 1) {
        let value = +parts[0];
        return !isNaN(value)
          ? translate(chunkArray(parts[0])) + " and 00/100 Dollar"
          : notANumber;
      } else {
        let [integers, decimals] = parts;
        let valueIntegers = integers ? +integers : 0;
        let valueDecimals = decimals ? +decimals : 0;
        let valid = !isNaN(valueIntegers) && !isNaN(valueDecimals);

        let strIntegers = translate(chunkArray(integers));
        if (strIntegers) {
          strIntegers += " and ";
        }

        let strDecimals = decimals ? decimals.slice(0, 2) : "00";

        return valid ? strIntegers + strDecimals + "/100 Dollar" : notANumber;
      }
    }
  }
};
</script>
