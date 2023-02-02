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
      <v-data-table
        class="table"
        :items=sets
        :headers="headers"
        :search="search"
        :loading="loading"
        disable-pagination
        hide-default-footer
        mobile-breakpoint="0"
      >
      
        <template #item.name="{item}">
          <router-link :to="`/setlist/${item.id}`">
            {{ item.name }}
          </router-link>
        </template>

        <template #item.date="{item}">
          {{ item.date.toDate().toLocaleDateString() }}
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { db } from '../db'
import HeaderActions from '../components/HeaderActions.vue'
import { SetList } from '../models/set'

export default Vue.extend({
  name: 'SetListView',

  components: {
    HeaderActions
  },

  mounted () {
    this.$bind('sets', db.collection('setlists'))
      .then(() => {
        this.loading = false
      })
  },

  data () {
    return {
      search: '',
      loading: true,
      sets: [] as SetList[],
      headers: [
        { text: "Name", value: "name" },
        { text: "Location", value: "location" },
        { text: "Date", value: "date" }
      ]
    }
  }
})
</script>
