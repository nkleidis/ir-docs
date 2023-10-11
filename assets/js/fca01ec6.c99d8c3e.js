"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=o,g=c["".concat(i,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},l="prompt",s={unversionedId:"gluegun/toolbox-api/prompt",id:"gluegun/toolbox-api/prompt",title:"prompt",description:"Prompt allows you to ask the user for input.",source:"@site/docs/gluegun/toolbox-api/prompt.md",sourceDirName:"gluegun/toolbox-api",slug:"/gluegun/toolbox-api/prompt",permalink:"/docs/gluegun/toolbox-api/prompt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Gluegun",previous:{title:"print",permalink:"/docs/gluegun/toolbox-api/print"},next:{title:"semver",permalink:"/docs/gluegun/toolbox-api/semver"}},i={},p=[{value:"ask",id:"ask",level:2},{value:"example",id:"example",level:4},{value:"confirm",id:"confirm",level:2},{value:"parameters",id:"parameters",level:4},{value:"returns",id:"returns",level:4},{value:"example",id:"example-1",level:4},{value:"separator",id:"separator",level:2},{value:"parameters",id:"parameters-1",level:4},{value:"returns",id:"returns-1",level:4},{value:"example",id:"example-2",level:4},{value:"Kitchen Sink Example",id:"kitchen-sink-example",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prompt"},"prompt"),(0,o.kt)("p",null,"Prompt allows you to ask the user for input."),(0,o.kt)("p",null,"You can access these tools on the Gluegun toolbox, via ",(0,o.kt)("inlineCode",{parentName:"p"},"const { prompt } = require('gluegun')"),", or directly via ",(0,o.kt)("inlineCode",{parentName:"p"},"const { prompt } = require('gluegun/prompt')"),"."),(0,o.kt)("h2",{id:"ask"},"ask"),(0,o.kt)("p",null,"This is powered by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enquirer/enquirer"},"enquirer")," (2.x)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("h4",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// text input\nconst askAge = { type: 'input', name: 'age', message: 'How old are you?' }\n\n// multiple choice\nconst askShoe = {\n  type: 'select',\n  name: 'shoe',\n  message: 'What shoes are you wearing?',\n  choices: ['Clown', 'Other'],\n}\n\n// ask a series of questions\nconst questions = [askAge, askShoe]\nconst { age, shoe } = await toolbox.prompt.ask(questions)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: to see a full list of examples, scroll to the bottom.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important: in order to preserve backwards compatibility with Enquirer 1.x, we\ntranslate ",(0,o.kt)("inlineCode",{parentName:"strong"},"type: 'list'")," to ",(0,o.kt)("inlineCode",{parentName:"strong"},"type: 'select'"),". If you want to use the new ",(0,o.kt)("inlineCode",{parentName:"strong"},"list"),"\nbehavior, please use ",(0,o.kt)("inlineCode",{parentName:"strong"},"enquirer")," directly and not through Gluegun.")),(0,o.kt)("h2",{id:"confirm"},"confirm"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("p",null,"A pre-built prompt which asks a yes or no question."),(0,o.kt)("h4",{id:"parameters"},"parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"message")," is a ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," required for displaying a message to user. It's the question you're asking."),(0,o.kt)("li",{parentName:"ul"},"(optional) ",(0,o.kt)("strong",{parentName:"li"},"initial")," is a ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," for setting which answer is the default. ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," for Yes, ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," for No. Defaults to false.")),(0,o.kt)("h4",{id:"returns"},"returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("h4",{id:"example-1"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isThe90s = await toolbox.prompt.confirm('Ya`ll ready for this?')\n")),(0,o.kt)("h2",{id:"separator"},"separator"),(0,o.kt)("p",null,"Returns a separator you can use in your multiple choice prompts. It will draw a nice ",(0,o.kt)("inlineCode",{parentName:"p"},"--------")," line and will not be able to be selected by the user."),(0,o.kt)("h4",{id:"parameters-1"},"parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"none")),(0,o.kt)("h4",{id:"returns-1"},"returns"),(0,o.kt)("p",null,"A value only relevant for use in a multiple choice prompt."),(0,o.kt)("h4",{id:"example-2"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const choices = ['red', 'green', toolbox.prompt.separator(), 'cheese', 'bread']\n")),(0,o.kt)("h2",{id:"kitchen-sink-example"},"Kitchen Sink Example"),(0,o.kt)("p",null,"Try running ",(0,o.kt)("inlineCode",{parentName:"p"},"gluegun kitchen")," to see what these look like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { prompt, GluegunToolbox } from 'gluegun'\n\nmodule.exports = {\n  name: 'kitchen',\n  description: 'Runs through a kitchen sink of Gluegun tools',\n  run: async (toolbox: GluegunToolbox) => {\n    const { print } = toolbox\n\n    const result = await prompt.ask([\n      {\n        type: 'select',\n        name: 'exselect',\n        message: 'What shoes are you wearing?',\n        choices: ['Clown', 'Other'],\n      },\n      {\n        type: 'confirm',\n        name: 'exconfirm',\n        message: 'Are you sure?',\n      },\n      {\n        type: 'multiselect',\n        name: 'exmultiselect',\n        message: 'What are your favorite colors?',\n        choices: ['red', 'blue', 'yellow'],\n      },\n      {\n        type: 'select',\n        name: 'exselect',\n        message: 'What is your favorite team?',\n        choices: ['Jazz', 'Trail Blazers', 'Lakers', 'Warriors'],\n      },\n      {\n        type: 'multiselect',\n        name: 'exmultiselect',\n        message: 'What are your favorite months?',\n        choices: ['January', 'July', 'September', 'November'],\n      },\n      {\n        type: 'password',\n        name: 'expassword',\n        message: 'Enter a fake password',\n      },\n      {\n        type: 'input',\n        name: 'exinput',\n        message: 'What is your middle name?',\n      },\n      {\n        type: 'autocomplete',\n        name: 'exautocomplete',\n        message: 'State?',\n        choices: ['Oregon', 'Washington', 'California'],\n        // You can leave this off unless you want to customize behavior\n        suggest(s, choices) {\n          return choices.filter((choice) => {\n            return choice.message.toLowerCase().startsWith(s.toLowerCase())\n          })\n        },\n      },\n    ])\n\n    print.debug(result)\n  },\n}\n")))}m.isMDXComponent=!0}}]);