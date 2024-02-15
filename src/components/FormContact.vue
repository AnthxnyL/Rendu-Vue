<script>

import { useContactListStore } from '../stores/contactList';
import { RouterLink, RouterView } from 'vue-router';

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

    <div class="buttons-form">
      <RouterLink to="/contact">Annuler</RouterLink>
      <RouterLink to="/contact" class="termine">Terminé</RouterLink>
    </div>

    <div class="pp">
      <span class="pp-name">
        {{ formContact.nom[0] }}
      </span>
    </div>

    <div class="form-input">
      <input type="text" placeholder="Nom" v-model="formContact.nom">
      <input type="number" placeholder="Numéro" v-model="formContact.numero">
      <button type="submit">Ajouter</button>
    </div>

  </form>
</template>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}


.form-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 170px;
}

.form-input input {
    width: 100%;
    padding : 12px;
    border : none;
    background-color: #333333;
    border-bottom : 0.5px solid grey;
    font-size: 18px;
}

.form-input button {
    margin-top: 24px;
    border : none;
    background-color: transparent;
    color : #0A84FF;
    font-size : 20px;
    cursor: pointer;
}

.buttons-form a {
    margin-top: 24px;
    text-decoration: none;
    color : #0A84FF;
    font-size : 16px;
}

.buttons-form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
}

.pp-name {
  color : white;
  font-size: 92px;
}

.pp {
  padding: 32Px;
  width: 175px;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 100%;
  font-weight: bold;
}



</style>