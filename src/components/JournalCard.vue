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
    <h3>{{ journalContact.nom }}</h3>
    <h3>{{ journalContact.numero }}</h3>
    <p>{{ journalContact.date }}</p>
    <button @click="call(journalContact.nom)">
        <img src="../assets/phone-call-svgrepo-com.svg" alt="phone">
    </button>
</div>

</template>

<style>

.journal-card{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap : 20px;
    padding: 10px;
    background-color: #26302c;
    border-radius: 10px;
}

.journal-card h3{
    color: white;
}

.journal-card p{
    color: grey;
}

.journal-card button{
    background-color: #18db8d;
    border: none;
    border-radius: 10px;
}


.journal-card button img{
    width: 30px;
    height: 30px;
}



</style>