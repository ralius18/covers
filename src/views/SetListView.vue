<template>
  <song-list is-set-list />
</template>

<script lang="ts">
import Vue from 'vue'
import SongList from '../components/SongList.vue'

export default Vue.extend({
  name: 'SetListView',

  components: {
    SongList
  },

  data () {
    return {
    }
  },

  created () {
    document.title = "Brad's Covers - Set List"
  },

  methods: {
  }
})
</script>