"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[3082],{"./src/slider/Slider.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DateSlider:function(){return DateSlider},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_DateSlider$parameter,_DateSlider$parameter2,_DateSlider$parameter3,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Slider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/slider/Slider.tsx"),moment__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/slider/assets/SliderStories.scss"),__webpack_require__("./node_modules/moment/moment.js")),moment__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Input/Slider",component:_Slider__WEBPACK_IMPORTED_MODULE_1__.i};var Default=function Default(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(200),_useState2=(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"slider-story",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Slider__WEBPACK_IMPORTED_MODULE_1__.i,(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},args),{},{min:1,max:1e3,numberFormatter:function numberFormatter(num){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(num)},value:value,setValue:setValue}))})},DateSlider=function DateSlider(args){var min=moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(3,"years").valueOf(),now=moment__WEBPACK_IMPORTED_MODULE_3___default()().valueOf(),max=moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(-3,"years").valueOf(),_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(now),_useState4=(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_useState3,2),value=_useState4[0],setValue=_useState4[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"slider-story",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Slider__WEBPACK_IMPORTED_MODULE_1__.i,(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},args),{},{min:min,max:max,value:value,setValue:setValue,numberFormatter:function numberFormatter(num){return new Intl.DateTimeFormat("en-US").format(num)}}))})};Default.parameters=(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"args => {\n  const [value, setValue] = useState(200);\n  return <div className=\"slider-story\">\n            <Slider {...args} min={1} max={1000} numberFormatter={num => new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD'\n    }).format(num)} value={value} setValue={setValue} />\n        </div>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),DateSlider.parameters=(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},DateSlider.parameters),{},{docs:(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_DateSlider$parameter=DateSlider.parameters)||void 0===_DateSlider$parameter?void 0:_DateSlider$parameter.docs),{},{source:(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"args => {\n  const min = moment().subtract(3, 'years').valueOf();\n  const now = moment().valueOf();\n  const max = moment().subtract(-3, 'years').valueOf();\n  const [value, setValue] = useState(now);\n  return <div className=\"slider-story\">\n            <Slider {...args} min={min} max={max} value={value} setValue={setValue} numberFormatter={num => new Intl.DateTimeFormat('en-US').format(num)} />\n        </div>;\n}"},null===(_DateSlider$parameter2=DateSlider.parameters)||void 0===_DateSlider$parameter2||null===(_DateSlider$parameter3=_DateSlider$parameter2.docs)||void 0===_DateSlider$parameter3?void 0:_DateSlider$parameter3.source)})});var __namedExportsOrder=["Default","DateSlider"]},"./src/slider/Slider.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return Slider}});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/slider/assets/Slider.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Slider=function Slider(_ref){var min=_ref.min,max=_ref.max,value=_ref.value,setValue=_ref.setValue,numberFormatter=_ref.numberFormatter,formatNumber=function formatNumber(num){return numberFormatter?numberFormatter(num):num};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"muncher-slider",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"slider-header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:formatNumber(value)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{className:"muncher-range",type:"range",min:min,max:max,value:value,onChange:function handleValueChange(e){var currentValue=+e.target.value;setValue(currentValue)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"slider-values",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"slider-min",children:formatNumber(min)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"slider-max",children:formatNumber(max)})]})]})};Slider.defaultProps={numberFormatter:function numberFormatter(num){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(num)}};try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"(num: number) => void"}},numberFormatter:{defaultValue:{value:"(num => new Intl.NumberFormat('en-US', {\n        style: 'currency',\n        currency: 'USD'\n    }).format(num))"},description:"",name:"numberFormatter",required:!1,type:{name:"((num: number) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}},"./src/slider/assets/Slider.scss":function(){},"./src/slider/assets/SliderStories.scss":function(){}}]);