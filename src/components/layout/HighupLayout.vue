<template>
  <div class="w-75">
    <highup-header></highup-header>

    <router-view></router-view>
  </div>
</template>

<script>
import HighupHeader from "@/components/layout/HighupHeader";
export default {
  name: "BirionLayout",
  components: {HighupHeader}
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