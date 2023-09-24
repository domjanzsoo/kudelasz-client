<template>
  <v-app>
    <highup-layout/>
  </v-app>
</template>

<script>
import HighupLayout from "@/components/layout/HighupLayout";

export default {
  name: 'App',
  components: {
    HighupLayout,
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
