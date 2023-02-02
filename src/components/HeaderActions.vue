<template>
  <v-row>
    <slot />
    <v-spacer />
    <router-link to="/setlists" class="mr-4">
      <v-btn color="secondary">Set Lists</v-btn>
    </router-link>
    <router-link to="/add">
      <v-btn color="primary">Add New</v-btn>
    </router-link>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "HeaderActions"
})
</script>

<style scoped lang="scss">
.v-row {
  margin: 0;
  // height: 78;
}
</style>