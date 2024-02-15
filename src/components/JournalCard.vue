<script>

import { useJournalListStore } from '@/stores/journalList'

export default {
  name: 'JournalCard',
  setup(){
    const journalListStore = useJournalListStore()
    return {
      journalListStore
    }
  },
  props: [
      'journalContact'
  ],
  methods: {
      call(contact){
         this.journalListStore.call(contact)
      }
  }
}


</script>

<template>

<div class="journal-card">
    <button @click="call(journalContact.nom)">
        <h3 class="name">{{ journalContact.nom }}</h3>
        <h3>{{ journalContact.numero }}</h3>
        <p>{{ journalContact.date }}</p>
       
    </button>
</div>

</template>

<style>

.journal-card{
    width: 100%;
   
}

.journal-card h3{
    color: white;
}

.journal-card p{
    color: grey;
}

.journal-card button{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap : 20px;
    padding: 10px;
    border : none;
    background-color: transparent;
    border-bottom : 0.2px solid grey;
    cursor: pointer;
}

button .name {
    font-size: 18px;
    color : #0A84FF;
}





</style>