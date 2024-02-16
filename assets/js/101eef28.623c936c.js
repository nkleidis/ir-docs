"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[5049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||o;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const o={},l=void 0,a={unversionedId:"ignite-cli/boilerplate/plugins/Plugins",id:"ignite-cli/boilerplate/plugins/Plugins",title:"Plugins",description:"app/plugins Directory in Ignite Apps",source:"@site/docs/ignite-cli/boilerplate/plugins/Plugins.md",sourceDirName:"ignite-cli/boilerplate/plugins",slug:"/ignite-cli/boilerplate/plugins/",permalink:"/ignite-cli/boilerplate/plugins/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Ignite",previous:{title:"ios",permalink:"/ignite-cli/boilerplate/ios"},next:{title:"withSplashScreen Config Plugin",permalink:"/ignite-cli/boilerplate/plugins/withSplashScreen"}},p={},u=[{value:"<code>app/plugins</code> Directory in Ignite Apps",id:"appplugins-directory-in-ignite-apps",level:2},{value:"Adding Custom Plugins",id:"adding-custom-plugins",level:3},{value:"Key Points",id:"key-points",level:2}],s={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"appplugins-directory-in-ignite-apps"},(0,r.kt)("inlineCode",{parentName:"h2"},"app/plugins")," Directory in Ignite Apps"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"app/plugins")," directory is a dedicated space within the Ignite boilerplate for managing Expo Config Plugins. These plugins are used to customize the native configuration of your app without altering the native code directly."),(0,r.kt)("h3",{id:"adding-custom-plugins"},"Adding Custom Plugins"),(0,r.kt)("p",null,"To add a custom plugin:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create a Plugin"),": In ",(0,r.kt)("inlineCode",{parentName:"li"},"app/plugins"),", define your plugin in a TypeScript file, exporting a function that modifies the ExpoConfig."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Integrate the Plugin"),": In ",(0,r.kt)("inlineCode",{parentName:"li"},"app.config.ts"),", import your plugin and add it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins")," array.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// In app.config.ts\nplugins: [...existingPlugins, require("./plugins/yourCustomPlugin").yourCustomPlugin]\n')),(0,r.kt)("h2",{id:"key-points"},"Key Points"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Config plugins extend app configuration, automating native module integration."),(0,r.kt)("li",{parentName:"ul"},"Create plugins in ",(0,r.kt)("inlineCode",{parentName:"li"},"app/plugins")," and add them to ",(0,r.kt)("inlineCode",{parentName:"li"},"app.config.ts"),"."),(0,r.kt)("li",{parentName:"ul"},"For complex setups, refer to mods but use them with caution.")),(0,r.kt)("p",null,"For detailed information on creating and using config plugins, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/config-plugins/introduction/"},"Expo's Config Plugins documentation"),"."))}g.isMDXComponent=!0}}]);