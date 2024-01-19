<script>

import { useContactListStore } from '../stores/contactList'

export default {
  name: 'FormContact',
  setup(){
    const contactListStore = useContactListStore()
    return {
      contactListStore
    }
  },
  data(){
    return {
        formContact : {
            nom : '',
            numero : ''
        }
    }
  },
  methods: {
    addContact(){
      this.contactListStore.addContact(this.formContact)
      this.formContact = {
        nom : '',
        numero : ''
      }
    }
  }
}

</script>

<template>
    <form @submit.prevent="addContact()">
      <input type="text" placeholder="Nom" v-model="formContact.nom">
      <input type="number" placeholder="Numéro" v-model="formContact.numero">
      <button type="submit">Ajouter</button>

    </form>

</template>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
}

input {
    padding : 10px;
    border-radius : 10px;
    border : none;
}

button {
    padding : 10px;
    border-radius : 10px;
    border : none;
    background-color: #42b983;
    color : white;
}


</style>