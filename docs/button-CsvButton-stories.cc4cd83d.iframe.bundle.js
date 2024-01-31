"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[1676],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/button/CsvButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_CsvButton__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/button/CsvButton.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Buttons/CSV Button",component:_CsvButton__WEBPACK_IMPORTED_MODULE_1__.f};var Default=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CsvButton__WEBPACK_IMPORTED_MODULE_1__.f,(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args),{},{children:"Button"}))}.bind({});Default.args={title:"Download Csv",variant:"secondary",header:["Name","Email"],filename:"download",data:[["Sam Jackson","sam@gmail.com"],["Bob Levy","levy_bob@gmail.com"]]},Default.parameters=(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_muncher_ui_muncher_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"args => <CsvButton {...args}>Button</CsvButton>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button_Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),_excluded=["type","variant","size","title","active","disabled","rounded","onClick","onMouseDown","onMouseEnter","onMouseLeave","children"],Button_Button=function Button(_ref){var type=_ref.type,variant=_ref.variant,size=_ref.size,title=_ref.title,active=_ref.active,disabled=_ref.disabled,rounded=_ref.rounded,onClick=_ref.onClick,onMouseDown=_ref.onMouseDown,onMouseEnter=_ref.onMouseEnter,onMouseLeave=_ref.onMouseLeave,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),className="muncher-button"+(type&&"nav"===type?" muncher-button--nav":"")+(variant?" muncher-button--"+variant:"")+(size?" muncher-button--"+size:"")+(active?" muncher-button--active":"")+(rounded?" muncher-button--rounded":"");return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:type&&"nav"!==type?type:"button",className:className,disabled:!!disabled,title:title,onClick:onClick,onMouseDown:onMouseDown,onMouseEnter:onMouseEnter,onMouseLeave:onMouseLeave},props),{},{children:children}))};Button_Button.defaultProps={type:"button",size:"medium"};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"reset"'},{value:'"button"'},{value:'"submit"'},{value:'"nav"'}]}},onClick:{defaultValue:null,description:"button click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"button mouse down handler",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"if true, the button edges are rounded",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/CsvButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return CsvButton_CsvButton}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/button/Button.tsx"),Icon=__webpack_require__("./src/icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CsvButton_CsvButton=function CsvButton(_ref){var header=_ref.header,data=_ref.data,filename=_ref.filename,variant=_ref.variant,size=_ref.size,title=_ref.title,active=_ref.active,disabled=_ref.disabled,rounded=_ref.rounded,csv=encodeURI("data:text/csv;charset=utf-8,"+header.join(",")+"\n"+data.map((function(row){return row.join(",")})).join("\n"));return(0,jsx_runtime.jsx)("div",{className:"muncher-csv",children:(0,jsx_runtime.jsx)(Button.z,{variant:variant,size:size,active:active,disabled:disabled,rounded:rounded,children:(0,jsx_runtime.jsx)("a",{href:csv,download:filename+".csv",children:(0,jsx_runtime.jsx)(Icon.J,{name:"download",children:title||"Download"})})})})};try{CsvButton_CsvButton.displayName="CsvButton",CsvButton_CsvButton.__docgenInfo={description:"",displayName:"CsvButton",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string[][]"}},filename:{defaultValue:null,description:"",name:"filename",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"transparent"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"if true, the button edges are rounded",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/CsvButton.tsx#CsvButton"]={docgenInfo:CsvButton_CsvButton.__docgenInfo,name:"CsvButton",path:"src/button/CsvButton.tsx#CsvButton"})}catch(__react_docgen_typescript_loader_error){}}}]);