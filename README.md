# markdown-vue-next
show markdown developed by vue3.0

# install
```
yarn add markdown-vue-next
```
or
```
npm install markdown-vue-next
```


# usage

``` html 
<template>
  <div>
    <textarea v-model="content"></textarea>
    <vue-md :source="content"></vue-md>
  </div>
</template>

<script>
import VueMd from "markdown-vue-next";
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
```
API
--
| Props | Description | Type  | Default |
| :-: | :-: | :-: |  :-: |
| source | content of md | string | "" |


# thanks
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [mermaid](https://github.com/mermaid-js/mermaid)