<template>
  <div>
    <textarea v-model="content"></textarea>
    <vue-md :source="content"></vue-md>
  </div>
</template>

<script>
import VueMd from "../";
export default {
  components:{
    VueMd
  },
  data(){
    return{
      content:""
    }
  }
};
</script>

<style scoped>

</style>