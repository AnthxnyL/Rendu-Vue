import { defineStore} from 'pinia';

export const useContactListStore = defineStore('contactList', {
    state: () => ({
        contacts : [
            {
              nom : "Doe",
              numero : "22"
            },
            {
              nom : "Rick",
              numero : "0724879012"
            },
            {
              nom : "Morty",
              numero : "0627824620"
            },
        ],
        numeroSearch : '',
        contactName : '',
    }),
    actions: {
        addContact(contact) {
            this.contacts.push(contact);
        },
        showNumber(num){
          this.numeroSearch += num
          return this.numeroSearch
         },
        call(nameOrNumber){
          this.contacts.call(nameOrNumber)
        }    
    },
});
               
