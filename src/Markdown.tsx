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
import { defineComponent, h, watch, ref, nextTick } from "vue";
import mermaidAPI from "mermaid/mermaidAPI";
interface Props {
  source: string
}

let util=new markdownIt()
let md = new markdownIt({
  highlight:function (str,lang){
    if(lang=="mermaid"){
      return '<pre><code><div class="mermaid">' + util.utils.escapeHtml(str) + '</div></code></pre>'
    }
    return '<pre><code>' + util.utils.escapeHtml(str) + '</code></pre>';
  }
});

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
export default defineComponent({

  setup(props: Props) {
    mermaid.initialize({
      logLevel: 5,
      startOnLoad: false,
      arrowMarkerAbsolute: false,
      flowchart: {
        htmlLabels: true,
        curve: 'linear',
      },
      securityLevel:"loose",
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true,
      },
      class: {},
      git: {}
    })
    let root = ref<HTMLDivElement>()
    watch(() => props.source, () => {
      root.value!.innerHTML = md.render(props.source)
      nextTick(()=>{
        try{
          mermaid.init('.mermaid')
        }catch(e){
          console.log(e)
        }
        
      })
    })
    
    return () => h(
      <div ref={root}></div>
    )
  },
  props: {
    source: {
      type: String,
      default: ""
    }
  }
})