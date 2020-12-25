import highlightjs from "highlight.js";
import mermaid from "mermaid";
import markdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import toc from 'markdown-it-toc-and-anchor'
import katex from 'markdown-it-katex'
import tasklists from 'markdown-it-task-lists'
import { defineComponent, h, computed } from "vue";
import markdownItMermaid from "./markdown-it-mermaid";
interface Props {
  source: string
}

let md=new markdownIt()
md.use(emoji)
  .use(subscript)
  .use(superscript)
  .use(footnote)
  .use(deflist)
  .use(abbreviation)
  .use(insert)
  .use(mark)
  .use(toc)
  .use(katex)
  .use(tasklists)
  .use(markdownItMermaid)
export default defineComponent({
  
  setup(props: Props) {
    const innerHtml=computed(() => {
      return md.render(props.source)
    })
    
    return () => h(
      <div innerHTML={innerHtml.value}></div>
    )
  },
  props: {
    source: {
      type: String,
      default: ""
    }
  }
})