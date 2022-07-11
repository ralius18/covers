<template>
  <song-view />
</template>

<script lang="ts">
import Vue from 'vue';
import SongView from './SongView.vue';

export default Vue.extend({
  components: {
    SongView
  },

  created() {
    document.title = "Brad's Covers - Add New"
  }
})
</script>