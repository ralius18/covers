<template>
  <div>
    <header-actions>
      <v-text-field
        dense
        v-model="search"
        class="search"
        label="Search"
        clearable
        outlined />
    </header-actions>

    <v-container>
      <div class="pl-4">
        <b>Total:</b> {{ songs.length }}
      </div>

      <v-data-table
        :headers="headers"
        :items="songs"
        :sort-by="sortBy"
        :search="search"
        :loading="loading"
        multi-sort
        disable-pagination
        hide-default-footer
        mobile-breakpoint="0"
      >
        <template #item.addToSet="{ item }">
          <v-btn
            v-if="item.in_set_list"
            color="primary"
            fab
            x-small
            @click.stop="onSetListClick(item)"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn
            v-else
            color="primary"
            fab
            x-small
            outlined
            @click.stop="onSetListClick(item)"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <template #item.title="{item}">
          <router-link :to="`/song/${item.id}`">
            {{ item.title }}
          </router-link>
          <div v-if="$vuetify.breakpoint.mobile">
            {{ item.artist }}
          </div>
        </template>

        <template #item.tab_link="{ item }">
          <v-icon v-if="item.tab_link != ''" color="primary">mdi-check</v-icon>
        </template>

        <template #item.duration_seconds="{ item }">
          {{ secondsToMinutes(item.duration_seconds) }}
        </template>

        <template #item.capo="{ item }">
          {{ parseInt(item.capo) > -1 ? item.capo : '' }}
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { db } from '../db'
import HeaderActions from './HeaderActions.vue'
import { Song } from '../models/song'

export default Vue.extend({
  name: 'SongList',

  components: {
    HeaderActions
  },

  mounted () {
    this.$bind('songs', db.collection('songs'))
      .then(() => {
        this.loading = false
      })
  },

  data() {
    return{
      search: '',
      songs: [] as Song[],
      sortBy: ['artist', 'title'],
      headers: [
        { text: "", value: "addToSet", width: 50, sortable: false },
        { text: "Title", value: "title" },
        { text: "Tab", value: "tab_link", width: 70 },
        { text: "Genre", value: "genre", width: 120 },
        { text: "Capo", value: "capo", width: 80 },
        { text: "Key", value: "song_key", width: 70 },
        { text: "Tuning", value: "tuning", width: 120 },
        { text: "Duration", value: "duration_seconds", width: 100 }
      ],
      loading: true
    }
  },

  methods: {
    secondsToMinutes: function(value: number): string {
      if ([NaN, null, undefined, ""].includes(value)) {
        return '';
      }

      var mins = Math.floor(value / 60);
      var secs = value - mins * 60;

      function str_pad_left(num: number, pad: string, length: number) {
        return (new Array(length + 1).join(pad) + num).slice(-length);
      }

      return mins + ':' + str_pad_left(secs, '0', 2);
    },

    createSong(doc: any, set_list_doc_id: string | undefined): Song {
      const data = doc.data();

      return {
        id: doc.id.toString(),
        title: data.title,
        artist: data.artist,
        tab_link: data.tab_link,
        genre: data.genre,
        capo: data.capo,
        song_key: data.song_key,
        tuning: data.tuning,
        duration_seconds: data.duration_seconds,
        in_set_list: data.in_set_list
      } as Song
    },

    redirectToSong(id: string) {
      this.$router.push(`/song/${id}`)
    },

    clickRow(item) {
      this.redirectToSong(item.id)
    },

    async onSetListClick(song: Song) {
      const newSong = { ...song }
      newSong.in_set_list = !song.in_set_list
      db.collection('songs').doc(song.id).set(newSong).then(() => {
        song.in_set_list = !song.in_set_list
      })
    },

    searchMatches(song: Song) {
      if (song.title.toLowerCase().includes(this.search.toLowerCase())) {
        return true
      }
      if (song.artist.toLowerCase().includes(this.search.toLowerCase())) {
        return true
      }
    },

    compareByArtist (a: string, b: string): number {
      console.log('compare')
      let aArtist = a.replace('The ', '')
      let bArtist = b.replace('The ', '')
      return aArtist.localeCompare(bArtist)
    }
  },

  computed: {
  }
});
</script>
