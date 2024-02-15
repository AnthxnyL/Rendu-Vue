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
      <div class="contact-header">
        <h1>Mes contacts</h1>
        <div class="add-contact">
            <RouterLink to="/FormContact" class="add-button">+</RouterLink>
        </div>     
      </div>

      <div class="list-contact" v-for="contact in contacts">
          <ContactCard :contact="contact"/>
          
      </div>
    </div>
    
</template>

<style>

.contact-container{
    padding: 0 24px 0 24px;
    margin-top : 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap : 20px;
}


.contact-container h1{
    color : white;
    font-size: 2rem;
    font-weight: 500;
}


.contact-container .contact-header {
  display : flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap : 16px;
}



.contact-header .add-contact {
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-contact .add-button {
    border : none;
    outline: none;
    text-decoration: none;
    color: #0A84FF;
    cursor: pointer;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.contact-container .list-contact {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap : 20px;
}

</style>