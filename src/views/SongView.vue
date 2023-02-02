<template>
  <div>
    <v-row class="d-flex flex-column">
      <v-col>
        <header-actions />
      </v-col>
      <v-col>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-container class="song-form">
            <v-row class="d-flex flex-column">
              <v-text-field outlined dense required :rules="[rules.required]" v-model="title" label="Title"
                @paste.prevent="handlePaste" />
              <v-text-field outlined dense required :rules="[rules.required]" v-model="artist" label="Artist" />
              <v-text-field outlined dense v-model="genre" label="Genre" />
              <v-text-field outlined dense :rules="[rules.numeric]" v-model="capo" label="Capo" />
              <v-text-field outlined dense v-model="song_key" label="Key" />
              <v-text-field outlined dense v-model="tuning" label="Tuning" />
              <v-text-field outlined dense :rules="[rules.time]" v-model="duration" label="Duration" />
<!--              <v-text-field outlined dense v-model="tab_link" label="Tab" />-->
            </v-row>
            <v-row float="right">
              <v-btn
                v-if="tab_link != '' && songExists"
                color="secondary"
                class="mr-4 mt-4"
                target="_blank"
                :href="tab_link"
              >
                Tab Link
                <v-icon class="ml-2">mdi-open-in-new</v-icon>
              </v-btn>
              <v-btn
                v-if="songExists"
                color="secondary"
                class="mt-4"
                :href="lyrics_url"
                target="_blank"
              >
                View Lyrics
                <v-icon class="ml-2">mdi-open-in-new</v-icon>
              </v-btn>

              <v-spacer />

              <v-btn v-if="songExists && in_set_list" color="secondary" class="mr-4 mt-4">Remove from Set List</v-btn>
              <v-btn v-else-if="songExists && !in_set_list" color="secondary" class="mr-4 mt-4">Add to Set List</v-btn>

              <v-btn color="primary" class="mt-4" @click="onSaveClick">Save</v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>

    <v-btn
      v-if="tab != '' && songExists"
      color="secondary"
      class="ma-4"
      @click="showTab = !showTab"
    >
      View Tab
    </v-btn>
    
    <v-textarea v-if="showTab" outlined dense v-model="tab" label="Tab" auto-grow @blur="tabInput" />

<!--     <iframe :src="lyrics_url" width="100%" height="800px"></iframe> -->

    <v-snackbar v-model="snackbar" timeout="2000" color="primary">Saved</v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from "../db";
import HeaderActions from '@/components/HeaderActions.vue';
import { Song } from '../models/song'

export default Vue.extend({
  components: {
    HeaderActions
  },

  computed: {
    songExists(): boolean {
      return ![NaN, null, undefined, ""].includes(this.id)
    },

    lyrics_url(): any {
      if (!this.songExists) {
        return ""
      }
      let artist = this.artist.toLowerCase()
      artist = artist.replace(/^[Tt]he|[Aa]\b/, "")
      artist = artist.replaceAll(/[^A-Za-z0-9]*/g, "")
      let title = this.title.toLowerCase()
      title = title.replaceAll(/[^A-Za-z0-9]*/g, "")
      return `https://azlyrics.com/lyrics/${artist}/${title}.html`;
    }
  },

  data() {
    return {
      song: null as Song | null,
      id: "",
      title: "",
      artist: "",
      valid: false,
      tab_link: "",
      genre: "",
      capo: "",
      song_key: "",
      tuning: "",
      duration: "",
      tab: "",
      lyrics: "",
      in_set_list: false,
      rules: {
        required: (v: string) => !!v || "Required",
        numeric: (v: string) => /^[0-9]+$|^$/.test(v) || "Must be a number",
        time: (v: string) => /^[0-9]+:[0-9]{2}$|^$/.test(v) || "Must be time format (0:00)"
      },
      snackbar: false,
      loading: true,
      showTab: false,
      editTab: false
    }
  },

  methods: {
    async getSong() {
      this.id = this.$route.params.id as string
      const docData = (await db.collection('songs').doc(this.id).get()).data()
      let title = "Brad's Covers - "
      if (docData) {
        const data = new Song(docData)
        this.title = data.title
        this.artist = data.artist
        this.tab_link = data.tab_link
        this.genre = data.genre
        this.capo = data.capo > -1 ? data.capo.toString() : ''
        this.song_key = data.song_key
        this.tuning = data.tuning
        this.duration = this.secondsToMinutes(data.duration_seconds)
        this.tab = data.tab
        // if (this.tab_link != "") {
        //   this.getTabContent()
        // }
        // this.getLyrics()
        this.in_set_list = data.in_set_list
        title += this.title
      } else {
        title += "Add New"
      }
      document.title = title
    },

    onSaveClick() {
      const data = {
        title: this.title.trim(),
        artist: this.artist.trim(),
        tab_link: this.tab_link && this.tab_link.trim() || '',
        genre: this.genre && this.genre.trim() || '',
        capo: (this.capo && this.capo.trim()) || -1,
        song_key: this.song_key && this.song_key.trim() || '',
        tuning: this.tuning && this.tuning.trim() || '',
        duration_seconds: (this.duration && this.minutesToSeconds(this.duration.trim())) || '',
        tab: this.tab && this.tab.trim() || ''
      }
      this.id ? this.updateSong(data, this.id) : this.addSong(data)
    },

    async updateSong(data: any, id: string) {
      this.validate()
      if (this.valid) {
        this.valid = false;
        await db.collection('songs').doc(id).update(data).then(() => {
          this.showSavedSnackbar();
        })
      }
    },

    async addSong(data: any) {
      this.validate()
      if (this.valid) {
        await db.collection('songs').add(data).then((docRef) => {
          this.$router.push(`/song/${docRef.id}`)
          this.showSavedSnackbar()
        })
      }
    },

    validate() {
      const refForm: any = this.$refs.form
      if (refForm) {
        this.valid = refForm.validate()
      }
    },

    showSavedSnackbar() {
      this.snackbar = true
    },
    
    getTabContent() {
      // const xhttp = new XMLHttpRequest()
      // xhttp.open("GET", this.tab_link)
      // xhttp.setRequestHeader("Access-Control-Allow-Headers", "*")
      // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
      // xhttp.send()
      // const response = xhttp.responseText
      // console.log(response)
    },

    // onLyricsClick() {
    //   this.getLyrics()
    // },
    getLyrics() {
      if (this.lyrics_url != '') {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", this.lyrics_url)
        xhttp.send()
        const response = xhttp.responseText
        console.log(response)
        this.lyrics = response
      }
    },

    secondsToMinutes(value: number): string {
      if ([NaN, null, undefined, ""].includes(value)) {
        return ""
      }
      var mins = Math.floor(value / 60)
      var secs = value - mins * 60
      function str_pad_left(num: number, pad: string, length: number) {
        return (new Array(length + 1).join(pad) + num).slice(-length)
      }
      return mins + ":" + str_pad_left(secs, "0", 2)
    },

    minutesToSeconds(value: string): number | null {
      if ([NaN, null, undefined, ""].includes(value)) {
        return null
      }
      const timeArr = value.split(":")
      return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1])
    },

    handlePaste(event) {
      // Handle tab separated values pasted into Title field
      const text = event.clipboardData.getData('text')
      if (text.includes('\t')) {
        const arr = text.split('\t')
        this.title = arr[0] || ''
        this.artist = arr[1] || ''
        this.genre = arr[2] || ''
        this.capo = arr[3] || ''
        this.song_key = arr[4] || ''
        this.tuning = arr[5] || ''
        this.duration = this.secondsToMinutes(arr[6]) || ''
        this.tab_link = arr[7] || ''
      }
    },
    
    tabInput() {
      this.tab = this.tab && this.tab.replace(/^\n/gm, '') || ''
    }
  },

  mounted() {
    this.getSong()
    this.loading = false
  }
})
</script>

<style scoped lang="scss">
.song-form {
  max-width: 700px;
}

::v-deep .v-snackbar__wrapper {
  min-width: 0;
}

::v-deep .v-textarea textarea {
  line-height: 1.2rem;
  padding: 1rem;
  font-family: monospace;
}
</style>