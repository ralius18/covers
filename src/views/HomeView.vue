<template>
  <song-list />
</template>

<script lang="ts">
import Vue from 'vue';

// Components
import SongList from '../components/SongList.vue'

export default Vue.extend({
  name: 'HomeView',

  components: {
    SongList
  },

  created() {
    document.title = "Brad's Covers"
  }
});
</script>