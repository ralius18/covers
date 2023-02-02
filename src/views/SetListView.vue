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
        <b>Total:</b> {{ sortedSongs.length }}
      </div>
      <div class="pl-4">
        <!-- <b>Duration:</b> {{ totalDuration() }} -->
      </div>

      <v-data-table
        :headers="headers"
        :items="sortedSongs"
        :search="search"
        :loading="loading"
        v-sortable-data-table
        @sorted="saveOrder"
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
import Sortable from 'sortablejs/modular/sortable.complete.esm.js'
import HeaderActions from '../components/HeaderActions.vue'
import { SetList } from '../models/set'
import { SetListLink } from '../models/setLink'
import { Song } from '../models/song'

export default Vue.extend({
  name: 'SetListView',

  components: {
    HeaderActions
  },

  mounted () {
    this.getSetList()
    this.$bind('setLinks', db.collection('setlist_link'))
    .then(() => {
      this.loading = false
    })
  },

  data () {
    return{
      id: '',
      search: '',
      setLinks: [] as SetListLink[],
      set: {} as SetList,

      headers: [
        { text: "", value: "addToSet", width: 50, sortable: false },
        { text: "Title", value: "title" },
        { text: "Artist", value: "artist", width: 220, groupable: true },
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
    async getSetList () {
      this.id = this.$route.params.id as string
      const setData = (await db.collection('setlists').doc(this.id).get()).data()
      let title = "Brad's Covers - "
      if (setData) {
        const data = new SetList(setData)
        this.set = data;
        title += this.set.name
      }
      document.title = title
    },

    async getSongs () {
      this.$bind('songs', db.collection('songs'))
      .then(() => {
        this.loading = false
      })
    },

    totalDuration(): string {
      let sum = 0
      this.sortedSongs.forEach(song => sum += song.duration_seconds ? song.duration_seconds : 0)
      return sum == 0 ? '-:--' : this.secondsToMinutes(sum)
    },

    saveOrder (event) {
      console.log(event)
    },

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
  },

  computed: {
    sortedSongs(): Song[] {
      let arr = this.$data.setLinks
      if (arr.length == 0) {
        return []
      }
      arr = arr.filter(l => l.setlist_id == this.set.id)
      return arr.map(l => l.song_id)
    }
  },

  directives: {
    sortableDataTable: {
      bind (el, binding, vnode) {
        const options = {
          animation: 150,
          onUpdate: function (event) {
            vnode.componentInstance?.$emit( 'sorted', event )
          }
        }
        Sortable.create(el.getElementsByTagName('tbody')[0], options)
      }
    }
  }
})
</script>
