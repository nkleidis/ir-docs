"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8950],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>g});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(o),m=r,g=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return o?t.createElement(g,a(a({ref:n},u),{},{components:o})):t.createElement(g,a({ref:n},u))}));function g(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5680:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=o(7462),r=(o(7294),o(3905));const i={},a="config",l={unversionedId:"gluegun/toolbox-api/config",id:"gluegun/toolbox-api/config",title:"config",description:"You can have your plugin authors configure the behavior of your CLI by providing a configuration file in the root of any plugin. You can also provide one in the root level of the main CLI.",source:"@site/docs/gluegun/toolbox-api/config.md",sourceDirName:"gluegun/toolbox-api",slug:"/gluegun/toolbox-api/config",permalink:"/docs/gluegun/toolbox-api/config",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Gluegun",previous:{title:"Placeholder",permalink:"/docs/intro"},next:{title:"filesystem",permalink:"/docs/gluegun/toolbox-api/filesystem"}},c={},s=[],u={toc:s},p="wrapper";function f(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config"},"config"),(0,r.kt)("p",null,"You can have your plugin authors configure the behavior of your CLI by providing a configuration file in the root of any plugin. You can also provide one in the root level of the main CLI."),(0,r.kt)("p",null,"This is an object. Each plugin will have its own root level key."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"movies.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  name: 'movies',\n  defaults: {\n    movie: {\n      cache: '~/.movies/cache',\n    },\n    another: {\n      count: 100,\n    },\n  },\n}\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"movies-imdb.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  name: 'movies-imdb',\n  defaults: {\n    fun: true,\n    level: 10,\n  },\n}\n")),(0,r.kt)("p",null,"It takes the plugin's defaults, and merges the user's changes overtop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async (toolbox) => {\n  toolbox.config.movies // { fun: true, level: 10 }\n}\n")),(0,r.kt)("p",null,"If you'd like to load your own config files, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadConfig")," function included in the config object which is powered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/davidtheclark/cosmiconfig"},"cosmiconfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  run: async (toolbox) => {\n    const {\n      config: { loadConfig },\n      print: { info },\n      runtime: { brand },\n    } = toolbox\n\n    // use cosmiconfig directly: brand (string) & directory (string)\n    const myConfig = loadConfig(brand, process.cwd())\n    // or\n    const myConfig = loadConfig('movie', '~/.myconfig/')\n\n    // now access myConfig\n    info(myConfig.shirtSize)\n\n    // if you want to load multiple configs and have them override:\n    const currentFolder = process.cwd()\n    const myConfig = {\n      ...loadConfig('movies', '~/.myconfig/'),\n      ...loadConfig('movies', '~/configurations/myconfig/'),\n      ...loadConfig('movies', currentFolder),\n    }\n  },\n}\n")),(0,r.kt)("p",null,"By default, Cosmiconfig will start where you tell it to start and search up the directory tree for the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a package.json property"),(0,r.kt)("li",{parentName:"ul"},'a JSON or YAML, extensionless "rc file"'),(0,r.kt)("li",{parentName:"ul"},'an "rc file" with the extensions .json, .yaml, .yml, or .js.'),(0,r.kt)("li",{parentName:"ul"},"a .config.js CommonJS module")),(0,r.kt)("p",null,'For example, if your module\'s name is "soursocks", cosmiconfig will search up the directory tree for configuration in the following places:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a soursocks property in package.json"),(0,r.kt)("li",{parentName:"ul"},"a .soursocksrc file in JSON or YAML format"),(0,r.kt)("li",{parentName:"ul"},"a .soursocksrc.json file"),(0,r.kt)("li",{parentName:"ul"},"a .soursocksrc.yaml, .soursocksrc.yml, or .soursocksrc.js file"),(0,r.kt)("li",{parentName:"ul"},"a soursocks.config.js file exporting a JS object")),(0,r.kt)("p",null,"Cosmiconfig continues to search up the directory tree, checking each of these places in each directory, until it finds some acceptable configuration (or hits the home directory)."))}f.isMDXComponent=!0}}]);