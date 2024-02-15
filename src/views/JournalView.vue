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
  margin-top: 24px;
  padding: 0 24px 0 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap : 20px;
}

.journal-container  h1{
  color : white;
  font-size: 2rem;
  font-weight: 500;
}

</style>
