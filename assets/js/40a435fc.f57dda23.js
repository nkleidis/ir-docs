"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return n?o.createElement(f,r(r({ref:t},s),{},{components:n})):o.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,r[1]=c;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,title:"Getting Started"},r="Object Detection",c={unversionedId:"react-native-mlkit/object-detection/index",id:"react-native-mlkit/object-detection/index",title:"Getting Started",description:"Getting Started",source:"@site/docs/react-native-mlkit/object-detection/index.md",sourceDirName:"react-native-mlkit/object-detection",slug:"/react-native-mlkit/object-detection/",permalink:"/docs/react-native-mlkit/object-detection/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"React Native MLKit",previous:{title:"Object Detection",permalink:"/docs/category/object-detection"},next:{title:"Using a custom model",permalink:"/docs/react-native-mlkit/object-detection/using-a-custom-model"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"1. Set up the model context provider",id:"1-set-up-the-model-context-provider",level:3},{value:"2. Fetch the model using the <code>useObjectDetectionModel</code> hook, and use it to detect objects in an image",id:"2-fetch-the-model-using-the-useobjectdetectionmodel-hook-and-use-it-to-detect-objects-in-an-image",level:3}],s={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"object-detection"},"Object Detection"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"This is an expo module that lets you use\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/object-detection"},"MLKit Object Detection")," library in your Expo app."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install like any other npm package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#yarn\nyarn add react-native-mlkit-object-detection\n\n#npm\nnpm install react-native-mlkit-object-detection\n")),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("h3",{id:"1-set-up-the-model-context-provider"},"1. Set up the model context provider"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useObjectDetectionModels")," hook to fetch an ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectDetectionModelContextProvider"),". This will make the models\navailable via React context."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// App.tsx\n\nimport {\n  AssetRecord,\n  useObjectDetectionModels,\n} from "react-native-mlkit-object-detection";\n\n// For descriptions of options for default models see link below this snipped.\nfunction App() {\n  // fetch the provider component from the hook\n  const { ObjectDetectionModelContextProvider } = useObjectDetectionModels({\n    loadDefaultModel: true,\n    defaultModelOptions: {\n      shouldEnableMultipleObjects: true,\n      shouldEnableClassification: true,\n      detectorMode: "singleImage",\n    },\n  });\n\n  return (\n    <ObjectDetectionModelContextProvider>\n      {/* Rest of your app */}\n    </ObjectDetectionModelContextProvider>\n  );\n}\n')),(0,i.kt)("h3",{id:"2-fetch-the-model-using-the-useobjectdetectionmodel-hook-and-use-it-to-detect-objects-in-an-image"},"2. Fetch the model using the ",(0,i.kt)("inlineCode",{parentName:"h3"},"useObjectDetectionModel")," hook, and use it to detect objects in an image"),(0,i.kt)("p",null,"Models can be quite large, take a while to load and can consume a lot of memory. You should consider where in your\napp's lifecycle you load the model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// MyComponent.tsx\n\nimport {\n  useObjectDetector,\n  RNMLKitDetectedObject,\n} from "@infinitered/react-native-mlkit-object-detection";\nimport { useEffect } from "react";\n\nfunction MyComponent() {\n  // fetch the model from the hook, if you don\'t pass a model name it will fetch the default MLKit Object Detection model\n  const { model } = useObjectDetector();\n\n  const [modelLoaded, setModelLoaded] = useState(model?.isLoaded() ?? false);\n\n  // Models must be loaded before they can be used. This can be slow, and consume\n  // a lot of resources so consider carefully where and when to load the model\n  useEffect(() => {\n    // Loading models is done asynchronously, so in a useEffect we need to wrap it in an async function\n    async function loadModel() {\n      if (!model || modelIsLoaded) return;\n      // load the model\n      await model.load();\n      // set the model loaded state to true\n      setModelLoaded(true);\n    }\n\n    loadModel();\n  }, [model, modelIsLoaded]);\n\n  // the output of the model is an array of `RNMLKitDetectedObject` objects\n  const [result, setResult] = useState<RNMLKitDetectedObject[]>([]);\n\n  useEffect(() => {\n    if (!modelLoaded) return;\n\n    // model.detectObjects is async, so when we use it in a useEffect, we need to wrap it in an async function\n    async function detectObjects(image: AssetRecord) {\n      const result = await model.detectObjects(image);\n      setResult(result);\n    }\n\n    detectObjects();\n  }, [model, modelLoaded]);\n\n  return <View>{JSON.stringify(result)}</View>;\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To use a custom TFLite model for inference, see ",(0,i.kt)("a",{parentName:"p",href:"./using-a-custom-model"},"Using a Custom Model"),".")))}m.isMDXComponent=!0}}]);