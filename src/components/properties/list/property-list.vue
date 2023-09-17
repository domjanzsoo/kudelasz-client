<template>
  <div>blaaa</div>
</template>

<script>
import {HTTPClient} from "@/services/HTTPClient";

export default {
  name: "property-list",
  data() {
    return {
      properties: []
    }
  },
  async mounted() {
    this.properties = await HTTPClient.getData('/properties/')
    console.log(this.properties)
  }
}
</script>

<style scoped>

</style>