<template>
  <q-layout view="lHh Lpr lFf">
    <Login />
   </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Login from '../pages/login.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Login
  },

  data () {
    return {
   
    }
  }
})
</script>
