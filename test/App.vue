<template>
  <div>
    <textarea v-model="content"></textarea>
    <vue-md :source="content"></vue-md>
  </div>
</template>

<script>
import VueMd from "../index";
export default {
  components:{
    VueMd
  },
  data(){
    return{
      content:
`\`\`\`mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
\`\`\`
`
    }
  }
};
</script>

<style scoped>

</style>