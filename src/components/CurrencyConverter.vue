// Adapted from https://codepen.io/Yxng/pen/oOmbOg

<template>
  <div class="d-grid gap-3" style="max-width: 640px; margin: auto;">
    <div class="display-4" style="margin: 20px;">{{ $t('currencyConverter') }}</div>
    <div class="input-group input-group-lg">
      <span class="input-group-text">{{ currentCurrency.symbol }}</span>
      <input type="text" class="form-control" v-model="currentNumber">
      <span class="input-group-text">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <flag :iso="currentCurrency.flag" v-bind:squared=false /> {{ currentCurrency.code }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li class="flag-button" v-for="entry in currencies" :key="entry.country" @click="currentCurrency = entry">
          <flag :iso="entry.flag" v-bind:squared=false /> {{ entry.name }}
        </li>
      </ul>
    </div>
  </span>
    </div>
    <div class="card" v-for="entry in result" :key="entry.metadata.code">
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
</template>

<script>
export default {
  name: 'CurrencyConverter',
  data() {
    return {
      currentNumber: '100',
      currentCurrency: {
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
          rate: 0.19
        }
      ],
    }
  },
  computed: {
    result() {
      let results = new Array();
      this.currencies.forEach(currency => {
        const resultValue = {
          money: (this.currentNumber * (this.currentCurrency.rate / currency.rate)).toFixed(2),
          metadata: currency
        };
        results.push(resultValue);
      });
      return results;
    }
  }
};
</script>

<style scoped>
.flag-button {
  text-indent: 6px;
  font-size: 16px;
}
.flag-button:hover {
  background-color: LightGray;
}
</style>
