<script>
import { useContactListStore } from '../stores/contactList'
import ContactCard from '../components/ContactCard.vue'
import FormContact from '../components/FormContact.vue'

export default {
  name: 'ContactView',
  setup(){
    const contactListStore = useContactListStore()
    return {
      contactListStore
    }
  },
  components: {
    ContactCard,
    FormContact
},
  computed: {
    contacts(){
      return this.contactListStore.contacts
    }
  },
  data(){
    return {
    }
  },
    methods : {
    }
}

</script>

<template>

    <div class="contact-container">
        <h1>Mes contacts</h1>
        <div class="add-contact">
            <RouterLink to="/FormContact" class="add-button">+</RouterLink>
        </div>
        <div class="list-contact" v-for="contact in contacts">
            <ContactCard :contact="contact"/>
            
        </div>
    </div>
    
</template>

<style>

.contact-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 20px;
}


.contact-container .add-contact {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-contact .add-button {
    padding: 10px;
    background-color: #18db8d;
    border-radius: 10px;
    width : 100%;
    border : none;
    color: white;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

}

</style>