import Mermaid from 'mermaid';
import utils from './utils';
import md from "markdown-it";

const MermaidChart = (code:string):string => {
  try {
    let needsUniqueId = "render" + utils.uid();
    Mermaid.mermaidAPI.render(needsUniqueId, code, sc => {code=sc});
    return `<div class="mermaid">${code}</div>`;
  } catch (err) {
    const lineNum=err.hash.line
    const newCode=[]
    const arr=code.split('\n')
    for(let i=0;i<lineNum;i++){
      newCode.push(arr[i])
    }
    return MermaidChart(newCode.join('\n'));
  }
}


const MermaidPlugIn = (md :md, opts:mermaidAPI.Config) => {
  Mermaid.initialize(Object.assign(MermaidPlugIn.default, opts));

  const defaultRenderer = md.renderer.rules.fence!.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, opts, env, self) => {
    const token = tokens[idx];
    const code = token.content.trim();
    if (token.info.startsWith('mermaid')) {
      return MermaidChart(code);
    }
    return defaultRenderer(tokens, idx, opts, env, self);
  }
}


MermaidPlugIn.default = {
  startOnLoad: false,
  securityLevel: 'true',
    theme: "default",
    flowchart:{
      htmlLabels: false,
      useMaxWidth: true,
    }
};

export default MermaidPlugIn;