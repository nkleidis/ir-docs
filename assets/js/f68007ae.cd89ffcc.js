"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[927],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(o),p=i,f=m["".concat(a,".").concat(p)]||m[p]||u[p]||r;return o?n.createElement(f,s(s({ref:t},d),{},{components:o})):n.createElement(f,s({ref:t},d))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3870:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const r={sidebar_position:3},s="Using a custom model",l={unversionedId:"react-native-mlkit/object-detection/using-a-custom-model",id:"react-native-mlkit/object-detection/using-a-custom-model",title:"Using a custom model",description:"Your custom model needs to be compatible with MLKit. Refer",source:"@site/docs/react-native-mlkit/object-detection/using-a-custom-model.md",sourceDirName:"react-native-mlkit/object-detection",slug:"/react-native-mlkit/object-detection/using-a-custom-model",permalink:"/docs/react-native-mlkit/object-detection/using-a-custom-model",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"React Native MLKit",previous:{title:"Getting Started",permalink:"/docs/react-native-mlkit/object-detection/"},next:{title:"Options",permalink:"/docs/react-native-mlkit/object-detection/options"}},a={},c=[{value:"1. Add your model to the project",id:"1-add-your-model-to-the-project",level:2},{value:"2. Configure Metro to bundle TFLite files",id:"2-configure-metro-to-bundle-tflite-files",level:2},{value:"3. Set up the model context provider",id:"3-set-up-the-model-context-provider",level:2},{value:"3. Fetch the model using the <code>useObjectDetectionModel</code> hook, and use it to detect objects in an image",id:"3-fetch-the-model-using-the-useobjectdetectionmodel-hook-and-use-it-to-detect-objects-in-an-image",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-a-custom-model"},"Using a custom model"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Your custom model needs to be compatible with MLKit. Refer\nto ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/custom-models"},"Custom Models with MLKit")," for general information on\nMLKit model compatibility, and specifically the section\non ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/custom-models#model-compatibility"},"TensorFlow Lite model compatibility"),".")),(0,i.kt)("h2",{id:"1-add-your-model-to-the-project"},"1. Add your model to the project"),(0,i.kt)("p",null,"Place your model somewhere that makes sense in your project. For example, you might place it in ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/models/"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp ~/my-custom-model.tflite ./assets/models/my-custom-model.tflite\n")),(0,i.kt)("h2",{id:"2-configure-metro-to-bundle-tflite-files"},"2. Configure Metro to bundle TFLite files"),(0,i.kt)("p",null,"Metro usually ignores unknown file types when bundling the app."),(0,i.kt)("p",null,"Update your metro config so Metro knows to include ",(0,i.kt)("inlineCode",{parentName:"p"},".tflite")," files in the app bundle."),(0,i.kt)("p",null,"To do this, create / edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"./metro.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// metro.config.js\nconst { getDefaultConfig } = require("expo/metro-config");\n\nconst config = getDefaultConfig(__dirname);\n\nconfig.resolver.assetExts.push(\n  // Adds support for `.tflite` files for TFLite models\n  "tflite"\n);\n\nmodule.exports = config;\n')),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/guides/customizing-metro/#adding-more-file-extensions-to-assetexts"},"Expo Docs")," for\ndetailed instructions on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/guides/customizing-metro"},"customizing metro"),"."),(0,i.kt)("h2",{id:"3-set-up-the-model-context-provider"},"3. Set up the model context provider"),(0,i.kt)("p",null,"First define an ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetRecord")," object with the details of your model. An asset record is a map of model names to model\ndetails."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type ModelInfo = {\n  model: number;\n  options?: RNMLKitCustomObjectDetectorOptions;\n};\n")),(0,i.kt)("p",null,"For a list of options for the default models, see the ",(0,i.kt)("a",{parentName:"p",href:"../options"},"Options")," page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// App.tsx\n\nimport {\n  AssetRecord,\n  useObjectDetectionModels,\n} from "react-native-mlkit-object-detection";\n\nconst MODELS: AssetRecord = {\n  // the name you\'ll use to refer to the model\n  myCustomModel: {\n    // the relative path to the model file\n    asset: require("./assets/models/my-custom-model.tflite"),\n    options: {\n      // the options you want to use for this model\n      shouldEnableMultipleObjects: false,\n      shouldEnableClassification: false,\n      detectorMode: "singleImage",\n    },\n  },\n};\n\n// For descriptions of options for default models see link below this snipped.\nfunction App() {\n  // fetch the provider component from the hook\n  const { ObjectDetectionModelContextProvider } = useObjectDetectionModels({\n    models: MODELS,\n    loadDefaultModel: false,\n  });\n\n  return (\n    <ObjectDetectionModelContextProvider>\n      // Rest of your app\n    </ObjectDetectionModelContextProvider>\n  );\n}\n')),(0,i.kt)("h2",{id:"3-fetch-the-model-using-the-useobjectdetectionmodel-hook-and-use-it-to-detect-objects-in-an-image"},"3. Fetch the model using the ",(0,i.kt)("inlineCode",{parentName:"h2"},"useObjectDetectionModel")," hook, and use it to detect objects in an image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// MyComponent.tsx\nimport {\n  useObjectDetector,\n  RNMLKitDetectedObject,\n} from "@infinitered/react-native-mlkit-object-detection";\n\nfunction MyComponent() {\n  // fetch the model from the hook, if you don\'t pass a model name it will fetch the default MLKit Object Detection model\n  const { model } = useObjectDetector("myCustomModel");\n\n  const [modelLoaded, setModelLoaded] = useState(model?.isLoaded() ?? false);\n\n  // Models must be loaded before they can be used. This can be slow, and consume\n  // a lot of resources so consider carefully where and when to load the model\n  React.useEffect(() => {\n    // Loading models is done asynchronously, so in a useEffect we need to wrap it in an async function\n    async function loadModel() {\n      if (!model || modelIsLoaded) return;\n      // load the model\n      await model.load();\n      // set the model loaded state to true\n      setModelLoaded(true);\n    }\n\n    loadModel();\n  }, [model, modelIsLoaded]);\n\n  // the output of the model is an array of `RNMLKitDetectedObject` objects\n  const [result, setResult] = useState<RNMLKitDetectedObject[]>([]);\n\n  useEffect(() => {\n    if (!modelLoaded) return;\n\n    // model.detectObjects is async, so when we use it in a useEffect, we need to wrap it in an async function\n    async function detectObjects(image: AssetRecord) {\n      const result = await model.detectObjects(image);\n      setResult(result);\n    }\n\n    detectObjects();\n  }, [model, modelLoaded]);\n\n  return <View>{JSON.stringify(result)}</View>;\n}\n')))}u.isMDXComponent=!0}}]);