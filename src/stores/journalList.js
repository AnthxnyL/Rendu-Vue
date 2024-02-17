import { defineStore } from 'pinia';

export const useJournalListStore = defineStore('journalList', {

    state: () => ({
        journals: [
            {
              nom : "Doe",
              date : "2021-05-12"
            },
            {
              nom : "Ronaldo",
              date : "2021-05-12"
            },
        ],
        inCall :[
            {
              nom : "",
            }
        ],
    }),
    actions: {
        call(contactNom) {
            const newContactJournal = {
                nom: contactNom,
                date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getUTCFullYear()} à ${new Date().getHours()} : ${new Date().getMinutes()}`,
            };
            this.journals.push(newContactJournal);

            const newInCall = {
                nom: contactNom,
            };

            if (this.inCall.length === 0) {
                this.inCall.push(newInCall);
            } else {
                this.inCall = [];
                this.inCall.push(newInCall);
            }
        }
    },
});