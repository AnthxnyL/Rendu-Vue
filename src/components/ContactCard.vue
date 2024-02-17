<script>

import { useJournalListStore } from '@/stores/journalList';
import { useContactListStore } from '@/stores/contactList';
import { RouterLink } from 'vue-router';

    export default {
        name : 'ContactCard',
        setup(){
            const journalListStore = useJournalListStore(),
            contactListStore = useContactListStore()
            return {
                journalListStore,
                contactListStore
            }
        },
        props : [
            'contact',
        ],
         methods: {
            call(nom){
                this.journalListStore.call(nom)
            },
            deleteContact(contact){
                this.contactListStore.deleteContact(contact)
            }
         },
    }

</script>

<template>
    <div class="contact-card">
        <h2>{{ contact.nom }} </h2>
        <p>{{ contact.numero }} </p>
        <div class="buttons-contact">
            <button class="delete-contact" @click="deleteContact(contact)">
                +
            </button>
            <RouterLink @click="call(contact.nom)" to="/call">
                <img src="../assets/phone.svg" alt="phone">
            </RouterLink>
        </div>
    </div>
</template>

<style>

.contact-card .buttons-contact {
    display: flex;
    align-items: center;
    gap : 24px;
}

.delete-contact {
    color : rgb(154, 0, 0);
    font-size: 42px;
    rotate: 45deg;
    cursor: pointer;

}
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

