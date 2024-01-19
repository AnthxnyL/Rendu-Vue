<script>

import { useContactListStore } from '../stores/contactList'
import { useJournalListStore } from '../stores/journalList'


export default {
  name: 'ClavierView',
  setup() {
    const contactListStore = useContactListStore()
    const journalListStore = useJournalListStore()
    return {
      contactListStore,
      journalListStore
    }
  },
  components: {
  },
  data(){
    return {
      numeroSearch : '',
      contactName : ''
    }
  },
  methods : {
    showNumber(num){
      this.numeroSearch += num
    },
    existContact(numeroSearch){
      const contactList = this.contactListStore.contacts
      for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].numero == numeroSearch) {
              this.contactName = contactList[i].nom
            }
          }
    },
    call(nameOrNumber){
      this.journalListStore.call(nameOrNumber)
    }

  },
}

</script>

<template>
  <div>
    <h1>Clavier de téléphone</h1>
    <div class="numero-and-contact">
      <p class="numero" >{{ numeroSearch }}</p>
      <p class="contact">{{ contactName }}</p>
    </div>
    <div class="clavier">
      <button @click="showNumber(num); existContact(numeroSearch)" v-for="num in 9" :key="num" class="touche">{{ num }}</button>
      <button @click="showNumber('*'); existContact(numeroSearch)" class="touche">*</button>
      <button @click="showNumber(0); existContact(numeroSearch)" class="touche"> 0 </button>
      <button @click="showNumber('#'); existContact(numeroSearch)" class="touche">#</button>
      <button class="call" v-if="contactName===''" @click="call(numeroSearch)">Appeler</button>
      <button class="call" v-else @click="call(contactName)">Appeler</button>
    </div>
    </div>
</template>

<style scoped>

.numero-and-contact {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #26302c;
  border-radius: 10px;
  margin-bottom: 30px;
}

.numero {
  font-size: 30px;
  font-weight: bold;
  color: #18db8d;
}

.contact {
  font-size: 30px;
  font-weight: bold;
  color: #18db8d;
}


.clavier {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.touche {
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: #18db8d;
}

.call {
  grid-column: 2;
  background-color: rgb(22, 76, 28);
  color: white;
  border-radius: 10px;
  border: none;
  padding: 10px;
  
}
</style>