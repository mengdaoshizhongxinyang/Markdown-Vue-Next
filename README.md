# Contextmenu Vue-next
contextmenu developed by vue3.0

# install
```
yarn add contextmenu-vue-next
```
or
```
npm install contextmenu-vue-next
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
import VueMd from "../";
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
| show(sync) | show or hidden context | Booleam | false |
| offset |  position of context | Object { left: number, top:number}| {left:0,top:0}
| menus | contextmenu list | Array | [] |

### events
| Events Name | Description | Arguments |
| :-: | :-: | :-: |
| menuItemClick | Callback executed when the menu is clicked | Function(clickedMenuInfo)|