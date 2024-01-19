<script>

import JournalCard from '@/components/JournalCard.vue'
import { useJournalListStore } from '@/stores/journalList'

export default {
  name: 'JournalView',
  setup(){
    const journalListStore = useJournalListStore()
    return {
      journalListStore
    }
  },
  components: {
    JournalCard
  },
  computed: {
    journals(){
      return this.journalListStore.journals
    }
  },
}

</script>


<template>

<div class="journal-container">
    <h1>Mon journal</h1>
    <div class="journal-card" v-for="journalContact in journals">
        <JournalCard :journalContact="journalContact"/>
    </div>

</div>

</template>

<style>

.journal-container{
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 20px;
}

</style>
