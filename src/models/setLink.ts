import { DocumentData } from 'firebase/firestore'
import { Song } from '../models/song'
import { SetList } from '../models/set'

export class SetListLink {
  index = 0
  setlistId = null as SetList | null
  songId = null as Song | null

  constructor(data: DocumentData) {
    if (data) {
      this.index = data.index
      this.setlistId = data.setlist_id
      this.songId = data.song_id
    }
  }
}