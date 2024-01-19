import { defineStore } from 'pinia';

export const useJournalListStore = defineStore('journalList', {

    state: () => ({
        journals: [
            {
              nom : "Doe",
              date : "2021-05-12"
            },
            {
              nom : "Doe",
              date : "2021-05-12"
            },
        ],
    }),
    actions: {
        call(contactNom) {
            const newContactJournal = {
                nom: contactNom,
                date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getUTCFullYear()} à ${new Date().getHours()} : ${new Date().getMinutes()}`,
            };
            this.journals.push(newContactJournal);
        }
    },
});