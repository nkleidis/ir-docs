"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"Android"},l="Running the Example App on Android",o={unversionedId:"react-native-mlkit/running-the-example-app/android",id:"react-native-mlkit/running-the-example-app/android",title:"Android",description:"An example app is provided that demonstrates the correct use of the modules in a react-native app.",source:"@site/docs/react-native-mlkit/running-the-example-app/android.md",sourceDirName:"react-native-mlkit/running-the-example-app",slug:"/react-native-mlkit/running-the-example-app/android",permalink:"/docs/react-native-mlkit/running-the-example-app/android",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Android"},sidebar:"React Native MLKit",previous:{title:"Running the Example App",permalink:"/docs/category/running-the-example-app"},next:{title:"iOS",permalink:"/docs/react-native-mlkit/running-the-example-app/ios"}},p={},d=[{value:"1. Clone the project",id:"1-clone-the-project",level:2},{value:"2. Install dependencies",id:"2-install-dependencies",level:2},{value:"3. Build native modules",id:"3-build-native-modules",level:2},{value:"5. Build and run the app",id:"5-build-and-run-the-app",level:2}],c={toc:d},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-the-example-app-on-android"},"Running the Example App on Android"),(0,a.kt)("p",null,"An example app is provided that demonstrates the correct use of the modules in a react-native app."),(0,a.kt)("h2",{id:"1-clone-the-project"},"1. Clone the project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:infinitered/react-native-mlkit.git\n")),(0,a.kt)("h2",{id:"2-install-dependencies"},"2. Install dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-native-mlkit \nyarn install\n")),(0,a.kt)("h2",{id:"3-build-native-modules"},"3. Build native modules"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,a.kt)("h2",{id:""}),(0,a.kt)("h2",{id:"5-build-and-run-the-app"},"5. Build and run the app"),(0,a.kt)("p",null,"From ",(0,a.kt)("inlineCode",{parentName:"p"},"~app/InfiniteRedAI")," use the included script to run the app in the android emulator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn android\n")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," to run on a hardware device."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn android [-d]\n")))}s.isMDXComponent=!0}}]);