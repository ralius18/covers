<template>
  <div>
    <header-actions>
      <v-text-field dense v-model="search" class="search" label="Search" clearable outlined />
    </header-actions>

    <b>Total:</b> {{ songs.length }}
    <div v-if="isSetList">
      <b>Duration:</b> {{ totalDuration }}
    </div>

    <v-data-table class="song-list" :headers="headers" :headerProps="headerProps" :items="sortedSongs" sort-by="artist" :search="search" hide-default-footer
      disable-pagination @click:row="clickRow" :loading="loading">
      <template v-slot:item.addToSet="{ item }">
        <v-btn v-if="item.in_set_list" color="primary" fab x-small @click.stop="onSetListClick(item)">
          <v-icon>mdi-check</v-icon>
        </v-btn>
        <v-btn v-else color="primary" fab x-small outlined @click.stop="onSetListClick(item)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <template v-slot:item.tab_link="{ item }">
        <v-icon v-if="item.tab_link != ''" color="primary">mdi-check</v-icon>
      </template>

      <template v-slot:item.duration_seconds="{ item }">
        {{ secondsToMinutes(item.duration_seconds) }}
      </template>
    </v-data-table>
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

  props: {
    isSetList: {
      type: Boolean,
      default: false
    }
  },

  firestore: {
    songs: db.collection('songs'),
  },

  data() {
    return{
      search: '',
      songs: [] as Song[],
      headerProps: {
        sortIcon: 'mdi-arrow-drop-down'
      },
      headers: [
        { text: "", value: "addToSet", width: 50, sortable: false },
        { text: "Title", value: "title" },
        { text: "Artist", value: "artist", width: 220, groupable: true },
        { text: "Tab", value: "tab_link", width: 70 },
        { text: "Genre", value: "genre", width: 120 },
        { text: "Capo", value: "capo", width: 80 },
        { text: "Key", value: "song_key", width: 70 },
        { text: "Tuning", value: "tuning", width: 100 },
        { text: "Duration", value: "duration_seconds", width: 100 },
      ],
      sortBy: 'artist',
      sortAsc: true,
      loading: false
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

    sortByColThenArtist(col: string, arr: Song[]): Song[] {
      let sortedArr = arr
      switch (col) {
        case 'tab':
          sortedArr = arr.sort((a, b) => {
            if (a.tab_link != '' && b.tab_link == '') {
              return -1
            } else if (a.tab_link == '' && b.tab_link != '') {
              return 1
            } else {
              return 0
            }
          })
      }
      return this.sortByArtist(sortedArr)
    },

    sortByArtist(arr: Song[]): Song[] {
      return arr.sort((a, b) => {
        let aArtist = a.artist.replace('The ', '')
        let bArtist = b.artist.replace('The ', '')
        if (aArtist == bArtist) {
          if (this.sortAsc) {
            return a.title.localeCompare(b.title)
          } else {
            return b.title.localeCompare(b.title)
          }
        }
        if (this.sortAsc) {
          return aArtist.localeCompare(bArtist)
        } else {
          return bArtist.localeCompare(aArtist)
        }
      })
    },

    changeSort(event: any) {
      if (this.sortBy == event.target.id) {
        this.sortAsc = !this.sortAsc
      } else {
        this.sortBy = event.target.id
        this.sortAsc = true
      }
    }
  },

  computed: {
    totalDuration(): string {
      let sum = 0
      this.sortedSongs.forEach(song => sum += song.duration_seconds ? song.duration_seconds : 0)
      return sum == 0 ? '-:--' : this.secondsToMinutes(sum)
    },

    sortedSongs: function (): Song[] {
      let arr = this.songs
      if (this.isSetList) {
        arr = arr.filter(s => s.in_set_list)
      }
      return arr
    }
  },
});
</script>

<style scoped lang="scss">
.search {
  max-width: 40%;
}

::v-deep .song-list {
  background: unset !important;

  thead {
    tr td:hover {
      background: var(--v-background-lighten1) !important;
    }
  }

  tbody {
    tr {
      cursor: pointer;

      &:hover {
        background: var(--v-background-lighten1) !important;
      }
    }
  }
}
</style>
