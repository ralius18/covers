import { DocumentData } from 'firebase/firestore'

export class SetList {
  id = ''
  name = ''
  location = ''
  date = ''

  constructor(data: DocumentData) {
    if (data) {
      this.id = data.id
      this.name = data.name
      this.location = data.location
      this.date = data.date
    }
  }
}