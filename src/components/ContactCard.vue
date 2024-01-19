<script>

import { useJournalListStore } from '@/stores/journalList'

    export default {
        name : 'ContactCard',
        setup(){
            const journalListStore = useJournalListStore()
            return {
                journalListStore
            }
        },
        props : [
            'contact',
        ],
         methods: {
            call(nom){
                this.journalListStore.call(nom)
            }
        }
    }

</script>

<template>
    <div class="contact-card">
        <h2>{{ contact.nom }} </h2>
        <h2>{{ contact.numero }} </h2>
        <button @click="call(contact.nom)">
            <img src="../assets/phone-call-svgrepo-com.svg" alt="phone">
        </button>
    </div>
</template>

<style>

.contact-card {
    width : 500px;
    background-color: #26302c;
    border-radius : 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact-card h2 {
    color : white;
}

.contact-card button {
    border : none;
    background-color: #18db8d;
    border-radius : 10px;
    padding: 10px;
}

.contact-card img {
    width : 50px;
    height : 50px;
}

</style>

