"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[3224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={},i="Guide: Architecting Your Gluegun CLI",l={unversionedId:"newgun/Contributing/guide-architecture",id:"newgun/Contributing/guide-architecture",title:"Guide: Architecting Your Gluegun CLI",description:"There are many ways to architect Gluegun-powered CLIs. This guide is intended to be a living document, collecting the lessons learned along the way of building CLIs with Gluegun. It is not necessarily the only correct way to build a CLI.",source:"@site/docs/newgun/Contributing/guide-architecture.md",sourceDirName:"newgun/Contributing",slug:"/newgun/Contributing/guide-architecture",permalink:"/ir-docs/docs/newgun/Contributing/guide-architecture",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"newgun",previous:{title:"Contributing",permalink:"/ir-docs/docs/newgun/Contributing/"},next:{title:"Releasing Gluegun",permalink:"/ir-docs/docs/newgun/Contributing/releasing"}},s={},u=[{value:"Commands",id:"commands",level:2},{value:"Commands file structure",id:"commands-file-structure",level:3},{value:"Extensions",id:"extensions",level:2},{value:"Additional Functionality",id:"additional-functionality",level:3},{value:"Performance",id:"performance",level:3},{value:"Additional Topics",id:"additional-topics",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide-architecting-your-gluegun-cli"},"Guide: Architecting Your Gluegun CLI"),(0,r.kt)("p",null,"There are many ways to architect Gluegun-powered CLIs. This guide is intended to be a living document, collecting the lessons learned along the way of building CLIs with Gluegun. It is not necessarily the only correct way to build a CLI."),(0,r.kt)("p",null,"If you have ideas, suggestions, or questions, feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/gluegun/issues/new"},"open an issue"),"!"),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Commands should be focused on user interaction and not necessarily on implementation details. Don't write your whole app inside a command; instead, parse out user-provided info, then delegate to other functions (which can be provided via extensions, which are described below) to do work."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  name: 'world',\n  alias: ['w', 'earth'],\n  run: async toolbox => {\n    // in this case, `hello` is provided by an extension\n    const { hello, prompt } = toolbox\n\n    // user interaction is great in a command\n    const isEarthling = await prompt.confirm('Are you an earthling?')\n\n    // delegate the actual work to an extension\n    if (isEarthling) {\n      hello.greetEarthling()\n    } else {\n      hello.greetAlien()\n    }\n  },\n}\n")),(0,r.kt)("h3",{id:"commands-file-structure"},"Commands file structure"),(0,r.kt)("p",null,"Nest commands in a folder structure that mirrors their command line equivalent. Unlike other libraries, we don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," for the default command in a folder. Instead, use the same name as the folder. This helps avoid the situation where you might have 12 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," files open in your editor, which is confusing."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Don't do this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"commands\n  hello\n    index.js\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"commands\n  hello\n    hello.js\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Or this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"commands\n  hello.js\n")),(0,r.kt)("p",null,"If you have nested commands, keep them all in the folder, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"commands\n  hello\n    hello.js\n    world.js\n")),(0,r.kt)("p",null,"You don't have to have a default command for a folder. Gluegun will pick up on it (as of 2.0.0-beta.7)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"commands\n  hello\n    world.js\n")),(0,r.kt)("p",null,"As of Gluegun 4.1.0, you can also nest commands in a ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," folder, if for example you're using TypeScript and want to compile to ",(0,r.kt)("inlineCode",{parentName:"p"},"./build"),"."),(0,r.kt)("h2",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,'Think of extensions as "drawers" full of tools in your Gluegun toolbox. In the above example, the ',(0,r.kt)("inlineCode",{parentName:"p"},"hello")," extension adds two functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"greetEarthling")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"greetAlien"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = toolbox => {\n  const { print } = toolbox\n  toolbox.hello = {\n    greetEarthling: () => print.info('Hello, earthling!'),\n    greetAlien: () => print.info('Greetings, alien!'),\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Hint: In most cases, you probably don't want to use ",(0,r.kt)("inlineCode",{parentName:"em"},"prompt")," in your extensions. They should be more general purpose tools and not specific user flows.")),(0,r.kt)("h3",{id:"additional-functionality"},"Additional Functionality"),(0,r.kt)("p",null,"The above code snippet is a good simple example of an extension. However, as your extensions grow, you'll probably find that they start getting quite large. In that case, you'll probably want to break your functions out into separate folders."),(0,r.kt)("p",null,"Just like Gluegun itself, we recommend a separate folder for these. Gluegun uses ",(0,r.kt)("inlineCode",{parentName:"p"},"src/toolbox"),", but you can name it whatever makes sense for you. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"commands\n  hello\n    world.js\nextensions\n  hello-extension.js\ntoolbox\n  greetings\n    earthling.js\n    martian.js\n    venusian.js\n")),(0,r.kt)("p",null,"You can access Gluegun tools by using ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," if you're using TypeScript)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { print } = require('gluegun/print')\n\n// toolbox/greetings/earth.js\nmodule.exports = () => print.info('Hello, earthling!'),\n")),(0,r.kt)("p",null,"Then attach the functions or objects to your toolbox:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// extensions/hello-extension.js\nconst earthling = require('../toolbox/greetings/earthling')\nconst martian = require('../toolbox/greetings/martian')\nconst venusian = require('../toolbox/greetings/venusian')\n\nmodule.exports = toolbox => {\n  toolbox.hello = { earthling, martian, venusian }\n}\n")),(0,r.kt)("h3",{id:"performance"},"Performance"),(0,r.kt)("p",null,'If you use many NPM packages, it\'s a good idea for performance reasons to "hide" ',(0,r.kt)("inlineCode",{parentName:"p"},"require")," statements inside your command ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," functions so only the command that is invoked loads its dependencies. (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-amplify/amplify-cli/pull/511"},"Here")," is an example that improved Amazon AWS Amplify CLI performance by nearly 2.5x)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Don't do this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const R = require('ramda')\n\nmodule.exports = {\n  name: 'mycommand',\n  run: async toolbox => {\n    // use Ramda\n  },\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  name: 'mycommand',\n  run: async toolbox => {\n    const R = require('ramda')\n    // use Ramda\n  },\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"require")," will only load on-demand when the function is run. It will also only load ",(0,r.kt)("inlineCode",{parentName:"p"},"ramda")," once (in the examples given) even if you ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," multiple times. So you can safely ",(0,r.kt)("inlineCode",{parentName:"p"},"require('ramda')")," in as many functions or extensions as you want."),(0,r.kt)("h2",{id:"additional-topics"},"Additional Topics"),(0,r.kt)("p",null,"The topics above will get you very far. Some other things to consider as you dig deeper into your CLI are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Where do I access and store configuration values?"),(0,r.kt)("li",{parentName:"ol"},"How do consumers of my CLI install and configure ",(0,r.kt)("a",{parentName:"li",href:"./plugins"},"plugins"),"?"),(0,r.kt)("li",{parentName:"ol"},"How will templates be organized? (Hint: look at the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/infinitered/gluegun/tree/master/src/cli"},"Gluegun CLI source"),")")))}d.isMDXComponent=!0}}]);