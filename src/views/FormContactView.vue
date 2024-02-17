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
    justify-content: center;
    gap : 20px;
}
</style>