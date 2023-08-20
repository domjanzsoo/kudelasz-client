<template>
  <v-app>
    <birion-layout/>
  </v-app>
</template>

<script>
import BirionLayout from "@/components/layout/BirionLayout";

export default {
  name: 'App',
  components: {
    BirionLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
