<template>
  <div>blaaa</div>
</template>

<script>
import {HTTPClient} from "@/services/HTTPClient";

export default {
  name: "PropertyList",
  data() {
    return {
      properties: []
    }
  },
  async mounted() {
    this.properties = await HTTPClient.getData('/properties/')
  }
}
</script>

<style scoped>

</style>