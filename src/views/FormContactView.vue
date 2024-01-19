<script>

import FormContact from '../components/FormContact.vue'

export default {
  name: 'FormContactView',
  components: {
    FormContact
  }
}

</script>

<template>

<div class="formContact-container">
        <h1>Ajoute ton contatc</h1>
        <FormContact/>
    </div>

</template>

<style>

.formContact-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 20px;
}
</style>