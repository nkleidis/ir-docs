"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[5808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},i="Welcome to the Reactotron Contributing Guide",l={unversionedId:"reactotron/contributing/index",id:"reactotron/contributing/index",title:"Welcome to the Reactotron Contributing Guide",description:"Thank you for investing your time in contributing to our project!",source:"@site/docs/reactotron/contributing/index.md",sourceDirName:"reactotron/contributing",slug:"/reactotron/contributing/",permalink:"/reactotron/contributing/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Reactotron",previous:{title:"Troubleshooting",permalink:"/reactotron/troubleshooting"},next:{title:"Architecture",permalink:"/reactotron/contributing/architecture"}},p={},c=[{value:"Making changes to the Reactotron App",id:"making-changes-to-the-reactotron-app",level:2},{value:"Step 1: Get the development version of reactotron running",id:"step-1-get-the-development-version-of-reactotron-running",level:3},{value:"Step 2: Use the example react-native app to test your changes",id:"step-2-use-the-example-react-native-app-to-test-your-changes",level:3},{value:"Step 3: Making changes",id:"step-3-making-changes",level:3},{value:"Bring Your Own Application",id:"bring-your-own-application",level:2},{value:"Adding a new Reactotron plugin to <code>./lib</code>",id:"adding-a-new-reactotron-plugin-to-lib",level:2},{value:"Prepare for a pull request",id:"prepare-for-a-pull-request",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-the-reactotron-contributing-guide"},"Welcome to the Reactotron Contributing Guide"),(0,a.kt)("p",null,"Thank you for investing your time in contributing to our project!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please start by reading the other docs in this folder to understand how the monorepo folder structure and plugin architecture work.")),(0,a.kt)("h2",{id:"making-changes-to-the-reactotron-app"},"Making changes to the Reactotron App"),(0,a.kt)("h3",{id:"step-1-get-the-development-version-of-reactotron-running"},"Step 1: Get the development version of reactotron running"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fork the repo and then clone it to your local machine: ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:YOUR_USER_NAME/reactotron.git")),(0,a.kt)("li",{parentName:"ol"},"Install dependencies: ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")),(0,a.kt)("li",{parentName:"ol"},"Start the ",(0,a.kt)("inlineCode",{parentName:"li"},"reactotron-app")," in development mode: ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn start"))),(0,a.kt)("p",null,"You should see the reactotron electron app open on your machine with the development menu open."),(0,a.kt)("h3",{id:"step-2-use-the-example-react-native-app-to-test-your-changes"},"Step 2: Use the example react-native app to test your changes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start the example app with ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn start:example")),(0,a.kt)("li",{parentName:"ol"},"Launch the app in the simulator of your choice."),(0,a.kt)("li",{parentName:"ol"},"You should see output in the reactotron app.")),(0,a.kt)("h3",{id:"step-3-making-changes"},"Step 3: Making changes"),(0,a.kt)("p",null,"Changes made to the main reactotron electron app in ",(0,a.kt)("inlineCode",{parentName:"p"},"./apps/reactotron-app")," will be reflected in the reactotron app that you started in step 1. You may need to kill the app and restart it to see your changes."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Remember to reload the example app from step 2 or other connected application(s) to reconnect the app to reactotron.")),(0,a.kt)("p",null,"Changes made to the client packages will be reflected in the example application immediately."),(0,a.kt)("h2",{id:"bring-your-own-application"},"Bring Your Own Application"),(0,a.kt)("p",null,"Let's say that you want to develop features using your own application instead of the example app. If you make changes to the non-electron app packages in this monorepo like ",(0,a.kt)("inlineCode",{parentName:"p"},"reactotron-react-native")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"reactotron-core-client"),", you will need to build the packages and then link them to your react-native app. Luckily, we have a script that will do this for you."),(0,a.kt)("p",null,"You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," to build all reactotron packages, or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build:watch")," to watch and rebuild changes automatically."),(0,a.kt)("p",null,"If your app was located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Code/PizzaApp")," folder, to link the packages to your react-native app run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx zx scripts/install-workspace-packages-in-target.mjs ~/Code/PizzaApp\n")),(0,a.kt)("p",null,"or if you want to watch for rebuilds and automatically link them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npx nx watch --all -- "npx zx scripts/install-workspace-packages-in-target.mjs ~/Code/PizzaApp\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that the path to your app is an absolute path and not a relative one (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Code/PizzaApp")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"../PizzaApp"),")")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You must have already run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," in your app folder (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Code/PizzaApp"),") before running this script because is copies over the built js files from each reactotron library into the app's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder.")),(0,a.kt)("h2",{id:"adding-a-new-reactotron-plugin-to-lib"},"Adding a new Reactotron plugin to ",(0,a.kt)("inlineCode",{parentName:"h2"},"./lib")),(0,a.kt)("p",null,"If you have a new plugin to contribute to the Reactotron ecosystem, you can start a new workspace by running the generate plugin script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn generate:plugin my-plugin\n")),(0,a.kt)("p",null,"This will create the necessary directory in ",(0,a.kt)("inlineCode",{parentName:"p"},"./lib")," and get you started with a template. You'll want to implement your configuration and plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"./lib/reactotron-my-plugin/reactotron-my-plugin.ts"),"."),(0,a.kt)("p",null,"Keep in mind this won't add the workspace to ",(0,a.kt)("inlineCode",{parentName:"p"},".circleci/config.yml"),", that must still be done manually when ready."),(0,a.kt)("h3",{id:"prepare-for-a-pull-request"},"Prepare for a pull request"),(0,a.kt)("p",null,"Before you open a pull request, please ensure that the following command runs without errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn build-and-test:local\n")),(0,a.kt)("p",null,"Once you've made your changes and verified your local codebase passes all tests and linters, you'll need to commit them and push them to your fork. Then, you can open a pull request to the main repo."))}d.isMDXComponent=!0}}]);