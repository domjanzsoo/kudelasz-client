<template>
  <div class="w-75">
    <birion-header></birion-header>
  </div>
</template>

<script>
import BirionHeader from "@/components/layout/BirionHeader";
export default {
  name: "BirionLayout",
  components: {BirionHeader}
}
</script>

<style>
.btn {
  text-transform: unset !important;
}

.no-uppercase {
  text-transform: unset !important;
}
</style>