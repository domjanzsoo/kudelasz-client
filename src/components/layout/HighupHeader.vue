<template>
  <div>
    <v-app-bar>
      <v-app-bar-title> Logo</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="mr-n15">
        <v-btn to="/" class="no-uppercase">
          <v-icon icon="mdi-home" small left/>
          Home
        </v-btn>
        <v-btn to="/properties" class="no-uppercase">
          <v-icon icon="mdi-view-list" small left/>
          Listings
        </v-btn>
        <v-btn to="/enquiry" class="no-uppercase">
          <v-icon small left>mdi-file-question</v-icon>
          Enquiry
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: "HighupHeader"
}
</script>

<style scoped>

</style>