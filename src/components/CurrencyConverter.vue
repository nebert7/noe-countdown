// Adapted from https://codepen.io/Yxng/pen/oOmbOg

<template>
  <div>
    <div class="display-4">Currency Converter</div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="firstNumber">
      <span class="input-group-text">

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <flag :iso="firstCurrency.flag" v-bind:squared=false /> {{ firstCurrency.code }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li v-for="entry in currencies" :key="entry.country" @click="firstCurrency = entry">
          <flag :iso="entry.flag" v-bind:squared=false /> {{ entry.name }}
        </li>
      </ul>
    </div>
  </span>

    </div>

    Result:
  <div class="d-grid gap-3">
    <div class="card"  v-for="entry in result" :key="entry.metadata.code">
      <div class="card-body bg-light border">
        <div class="container">
          <div class="row justify-content-around">
            <div class="col-8">
              <h5 class="card-title">{{entry.metadata.symbol}}{{ entry.money }}</h5>
              <h6 class="card-subtitle">{{ entry.metadata.name }}</h6>
            </div>
            <div class="col-4" style="font-size:34px">
              <flag :iso="entry.metadata.flag" v-bind:squared=false />
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencyConverter',
  data() {
    return {
      firstNumber: '0',
      firstCurrency: {
                country: "USA",
                name: "Dollars",
                code: "USD",
                flag: "us",
                symbol: "$",
                rate: 1
              },
      currencies: [
        {
          country: "USA",
          name: "Dollars",
          code: "USD",
          flag: "us",
          symbol: "$",
          rate: 1
        },
        {
          country: "Paraguay",
          name: "Guarani",
          code: "PYG",
          flag: "py",
          symbol: "₲",
          rate: 0.00015
        },
        {
          country: "Brazil",
          name: "Reais",
          code: "BRL",
          flag: "br",
          symbol: "R$",
          rate: 0.2
        }
      ],
    }
  },
  computed: {
    result() {
      let results = new Array();
      this.currencies.forEach(currency => {
        const resultValue = {
          money: (this.firstNumber * (this.firstCurrency.rate / currency.rate)).toFixed(2),
          metadata: currency
        };
        results.push(resultValue);
      });
      return results;
    }
  }
};
</script>

<style scoped></style>
