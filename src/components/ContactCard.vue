<script>

import { useJournalListStore } from '@/stores/journalList';
import { RouterLink } from 'vue-router';

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
        <p>{{ contact.numero }} </p>
        <RouterLink @click="call(contact.nom)" to="/call">
            <img src="../assets/phone.svg" alt="phone">
        </RouterLink>
    </div>
</template>

<style>

.contact-card {
    width : 100%;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid grey;
}

.contact-card h2 {
    color : #0A84FF;
    font-size: 18px;
}

.contact-card p {
    color : white;
    font-size: 16px;
}

.contact-card button {
    border : none;
    background-color: transparent;
}

.contact-card img {
    width : 24px;
    height : 24px;
}

</style>

