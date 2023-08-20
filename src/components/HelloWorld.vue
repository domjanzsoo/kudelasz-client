<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <H2>Property is {{response.property}}</H2>

  </div>
</template>

<script>
import axios from 'axios';

export default ({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      response: ''
    }
  },
  methods: {
    async fetchResponse() {
      const resp = await axios.get('/properties');
      this.response = resp.data;
      console.log('this.response');
      console.log(resp);
    }
  },
  async mounted() {
    await this.fetchResponse()
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
