<template>
  <component :is="listingComponent">
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
            v-model="page"
            :length="pageCount"
        ></v-pagination>
      </div>
    </template>
  </component>
</template>

<script>
export default {
  name: "PaginationLayout",
  data() {
    return {
      page: 1,
      pagination: 10,
      next: null,
      prev: null,
      url: null
    }
  },
  props: {
    listingComponent: Object
  }
}
</script>

<style scoped>

</style>