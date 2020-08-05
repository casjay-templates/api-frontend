<template>
  <div class="global text-center">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>Covide-19 Global Data</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text>........</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container" v-if="!loading">
      <div v-if="error">
        <h2 class="error">Error: {{ error }}</h2>
      </div>
      <div v-else>
        <h1 class="text-center mt-5">Global Data</h1>
        <div class="row border border-primary" v-if="data.global && data.global.length">
          <div class="card text-center col-4 border border-danger" v-for="country in data.global" :key="country.Country_Other">
              <h5 class="card-title mt-2">{{ country.Country_Other }}</h5>
              <p class="card-text mt-2 bt-3">
                Total cases: {{country.TotalCases}}
                <br />
                TotalRecovered: {{country.TotalRecovered}}
                <br />
                NewCases: {{country.NewCases}}
                <br />
                TotalDeaths: {{country.TotalDeaths}}
                <br /><br />
              </p>
            </div>
          </div>
         </div>
        <h3 v-else>No data!</h3>
        <h2 v-else class="mt-10 text-center">
          Please wait.....
          <br />Loading data...
        </h2>
      </div>
    </div>
  </div>

</template>

<script>
const url = "https://api.casjay.now.sh/api/v1/global";

export default {
  name: "App",
  data: () => ({
    loading: false,
    data: null,
    error: ""
  }),
  async created() {
    console.log("Component created...");
    this.loading = true;
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.data = json;
    } catch (error) {
      this.error = error.message;
    }
    this.loading = false;
  }
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.error {
  color: red;
}
</style>
