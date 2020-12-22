/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2020-12-22 09:59:50
 * @Description: 
 * @GitHub: https://github.com/mengdaoshizhongxinyang
 */
declare namespace mermaidAPI {
  type Theme = "default" | "forest" | "dark" | "neutral";

  enum LogLevel {
      Debug = 1,
      Info,
      Warn,
      Error,
      Fatal
  }

  interface FlowChartConfig {
      /**
       * **htmlLabels** - Flag for setting whether or not a html tag should be used for rendering labels
       * on the edges
       * default: true
       */
      htmlLabels?: boolean;

      /**
       * default: 'linear'
       */
      curve?: string;
  }

  interface SequenceDiagramConfig {
      /**
       * **diagramMarginX** - margin to the right and left of the sequence diagram
       * default: 50
       */
      diagramMarginX?: number;

      /**
       * **diagramMarginY** - margin to the over and under the sequence diagram
       * default: 10
       */
      diagramMarginY?: number;

      /**
       * **actorMargin** - Margin between actors
       * default: 10
       */
      actorMargin?: number;

      /**
       * **width** - Width of actor boxes
       * default: 150
       */
      width?: number;

      /**
       * **height** - Height of actor boxes
       * default: 65
       */
      height?: number;

      /**
       * **boxMargin** - Margin around loop boxes
       * default: 10
       */
      boxMargin?: number;

      /**
       * **boxTextMargin** - margin around the text in loop/alt/opt boxes
       * default: 5
       */
      boxTextMargin?: number;

      /**
       * **noteMargin** - margin around notes
       * default: 10
       */
      noteMargin?: number;

      /**
       * **messageMargin** - Space between messages
       * default: 35
       */
      messageMargin?: number;

      /**
       * **mirrorActors** - mirror actors under diagram
       * default: true
       */
      mirrorActors?: boolean;

      /**
       * **bottomMarginAdj** - Depending on css styling this might need adjustment.
       * Prolongs the edge of the diagram downwards
       * default: 1
       */
      bottomMarginAdj?: number;

      /**
       * **useMaxWidth** - when this flag is set the height and width is set to 100% and is then scaling with the
       * available space if not the absolute space required is used
       * default: true
       */
      useMaxWidth?: boolean;
  }

  interface GanttConfig {
      /**
       * **titleTopMargin** - margin top for the text over the gantt diagram
       * default: 25
       */
      titleTopMargin?: number;

      /**
       * **barHeight** - the height of the bars in the graph
       * default: 20
       */
      barHeight?: number;

      /**
       * **barGap** - the margin between the different activities in the gantt diagram
       * default: 4
       */
      barGap?: number;

      /**
       *  **topPadding** - margin between title and gantt diagram and between axis and gantt diagram.
       * default: 50
       */
      topPadding?: number;

      /**
       *  **leftPadding** - the space allocated for the section name to the left of the activities.
       * default: 75
       */
      leftPadding?: number;

      /**
       *  **gridLineStartPadding** - Vertical starting position of the grid lines
       * default: 35
       */
      gridLineStartPadding?: number;

      /**
       *  **fontSize** - font size ...
       * default: 11
       */
      fontSize?: number;

      /**
       * **fontFamily** - font family ...
       * default:  '"Open-Sans", "sans-serif"'
       */
      fontFamily?: string;

      /**
       * **numberSectionStyles** - the number of alternating section styles
       * default: 4
       */
      numberSectionStyles?: number;

      /**
       * **axisFormat** - datetime format of the axis, this might need adjustment to match your locale and preferences
       * default: '%Y-%m-%d'
       */
      axisFormat?: string;
  }

  interface ThemeVariables{

  }

  interface Class{
    arrowMarkerAbsolute?:Boolean,
    useMaxWidth?:Boolean
  }
  
  interface Git{
    arrowMarkerAbsolute?:boolean,
    useMaxWidth?:boolean,
    useWidth?:unknown
  }
  interface Er{
    diagramPadding?:number,
    entityPadding?:number,
    file?:string,
    fontSize?:number,
    layoutDirection?:string,
    minEntityHeight?:number,
    minEntityWidth?:number,
    stroke?:string,
    useMaxWidth?:boolean
  }
  interface Config {
      /**
       * securityLevel: disallow/allow potentially dangerous cross-site scripting behavior
       *   the two documented values are "strict" and "loose", i.e. disallow and allow
       *   default: "strict"
       *   If the value is not present, the default behavior is "strict"
       *   Up through version mermaid@8.2.3, if any text value is present in a config but is not "strict", the behavior is "loose".
       *   This should be fixed after that version, i.e. any value other "loose" should be treated as "strict".
       */
      securityLevel?: "strict" | "loose";

      theme?: Theme;

      /**
       * logLevel , decides the amount of logging to be used.
       * default: LogLevel.Fatal
       */
      logLevel?: LogLevel;

      /**
       * **startOnLoad** - This options controls whether or mermaid starts when the page loads
       * default: true
       */
      startOnLoad?: boolean;

      /**
       * **arrowMarkerAbsolute** - This options controls whether or arrow markers in html code will be absolute paths or
       * an anchor, #. This matters if you are using base tag settings.
       * default: false
       */
      arrowMarkerAbsolute?: boolean;

      /**
       * ### flowchart
       * *The object containing configurations specific for flowcharts*
       */
      flowchart?: FlowChartConfig;

      /**
       * ###  sequenceDiagram
       * The object containing configurations specific for sequence diagrams
       */
      sequence?: SequenceDiagramConfig;

      /**
       * ### gantt
       * The object containing configurations specific for gantt diagrams*
       */
      gantt?: GanttConfig;

      class?: Class;
      git?: Git;
      er?:Er;
      themeVariables?:ThemeVariables;
  }

  /**
   * ##render
   * Function that renders an svg with a graph from a chart definition. Usage example below.
   *
   * ```
   * mermaidAPI.initialize({
   *      startOnLoad:true
   *  });
   *  $(function(){
   *      const graphDefinition = 'graph TB\na-->b';
   *      const cb = function(svgGraph){
   *          console.log(svgGraph);
   *      };
   *      mermaidAPI.render('id1',graphDefinition,cb);
   *  });
   * ```
   * @param id the id of the element to be rendered
   * @param txt the graph definition
   * @param cb callback which is called after rendering is finished with the svg code as inparam.
   * @param container selector to element in which a div with the graph temporarily will be inserted. In one is
   * provided a hidden div will be inserted in the body of the page instead. The element will be removed when rendering is
   * completed.
   */
  function render(
      id: string,
      txt: string,
      cb: (
          svgCode: string,
          bindFunctions: (element: Element) => void
      ) => void,
      container?: string
  ): string;

  function parse(text: string): any;

  function initialize(options: Config): void;

  function getConfig(): Config;

  function setConfig(options:Config):void;
}

// Type definitions for mermaid 8.2
// Project: https://github.com/knsv/mermaid#readme
// Definitions by: Geoffrey Gilmore <https://github.com/ggilmore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * ## init
 * Function that goes through the document to find the chart definitions in there and render them.
 *
 * The function tags the processed attributes with the attribute data-processed and ignores found elements with the
 * attribute already set. This way the init function can be triggered several times.
 *
 * Optionally, `init` can accept in the second argument one of the following:
 * - a DOM Node
 * - an array of DOM nodes (as would come from a jQuery selector)
 * - a W3C selector, a la `.mermaid`
 *
 * ```mermaid
 * graph LR;
 *  a(Find elements)-->b{Processed}
 *  b-->|Yes|c(Leave element)
 *  b-->|No |d(Transform)
 * ```
 * Renders the mermaid diagrams
 * @param nodes a css selector or an array of nodes
 */
declare function init(nodes: string | Node | NodeList): void;

declare function initialize(config: mermaidAPI.Config): void;

/**
 * ##contentLoaded
 * Callback function that is called when page is loaded. This functions fetches configuration for mermaid rendering and
 * calls init for rendering the mermaid diagrams on the page.
 */
declare function contentLoaded(): void;

interface Mermaid {
    startOnLoad: boolean;
    htmlLabels: boolean;

    mermaidAPI: typeof mermaidAPI;
    parse: typeof mermaidAPI.parse;
    render: typeof mermaidAPI.render;

    init: typeof init;
    initialize: typeof initialize;

    contentLoaded: typeof contentLoaded;
}

declare module "mermaid" {
  const mermaid: Mermaid;
  export default mermaid;
}

declare module "mermaid/src/.*" {
  export default any;
}