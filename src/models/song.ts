import { DocumentData } from 'firebase/firestore'

export class Song {
  id = ''
  title = ''
  artist = ''
  tab_link = ''
  genre = ''
  capo = 0
  song_key = ''
  tuning = ''
  duration_seconds = 0
  in_set_list = false
  tab = ''

  constructor(data: DocumentData) {
    if (data) {
      this.id = data.id
      this.title = data.title
      this.artist = data.artist
      this.tab_link = data.tab_link
      this.genre = data.genre
      this.capo = data.capo
      this.song_key = data.song_key
      this.tuning = data.tuning
      this.duration_seconds = data.duration_seconds
      this.in_set_list = data.in_set_list
      this.tab = data.tab
    }
  }
}