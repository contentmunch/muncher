"use strict";(self.webpackChunk_contentmunch_muncher_ui=self.webpackChunk_contentmunch_muncher_ui||[]).push([[3292],{"./src/icon/Icon.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Default:function(){return Default},IconWithText:function(){return IconWithText},Large:function(){return Large},Medium:function(){return Medium},OrientationRight:function(){return OrientationRight},Search:function(){return Search},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Icon_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Medium$parameters,_Medium$parameters2,_Medium$parameters2$d,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_Dark$parameters,_Dark$parameters2,_Dark$parameters2$doc,_IconWithText$paramet,_IconWithText$paramet2,_IconWithText$paramet3,_OrientationRight$par,_OrientationRight$par2,_OrientationRight$par3,_Search$parameters,_Search$parameters2,_Search$parameters2$d,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/icon/Icon.tsx"),src=__webpack_require__("./src/index.ts"),Drawings=__webpack_require__("./src/icon/Drawings.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon_stories={title:"Visual/Icons",component:Icon.J,argTypes:{color:{control:"color"}}},Template=function Template(args){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Icon.J,(0,objectSpread2.Z)({},args))})},Default=Template.bind({});Default.args={name:"muncher",size:"small"};var Medium=Template.bind({});Medium.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.args),{},{size:"medium",weight:1});var Large=Template.bind({});Large.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Medium.args),{},{size:"large"});var Dark=Template.bind({});Dark.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Medium.args),{},{weight:2});var TextTemplate=function TextTemplate(args){return(0,jsx_runtime.jsx)(Icon.J,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:(0,jsx_runtime.jsx)("p",{children:"Text"})}))},IconWithText=TextTemplate.bind({});IconWithText.args={name:"muncher",size:"small"};var OrientationRight=TextTemplate.bind({});OrientationRight.args={name:"muncher",size:"small",orientation:"right"};var Search=function SearchTemplate(){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),query=_useState2[0],setQuery=_useState2[1];return(0,jsx_runtime.jsxs)("div",{className:"icon-search-story",children:[(0,jsx_runtime.jsx)(src.II,{name:query,onChange:function onChange(e){return setQuery(e.target.value)},icon:"search"}),Object.keys(Drawings.I).filter((function(key){return key.search(new RegExp(query.replace(/\s*/g,""),"i"))>-1})).map((function(key){return(0,jsx_runtime.jsx)(src.zx,{size:"small",rounded:!0,title:key,variant:"tertiary",children:(0,jsx_runtime.jsx)(Icon.J,{iconString:key})},key)}))]})}.bind({});Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <div><Icon {...args} /></div>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Medium.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Medium.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Medium$parameters=Medium.parameters)||void 0===_Medium$parameters?void 0:_Medium$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <div><Icon {...args} /></div>"},null===(_Medium$parameters2=Medium.parameters)||void 0===_Medium$parameters2||null===(_Medium$parameters2$d=_Medium$parameters2.docs)||void 0===_Medium$parameters2$d?void 0:_Medium$parameters2$d.source)})}),Large.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Large.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <div><Icon {...args} /></div>"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),Dark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Dark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <div><Icon {...args} /></div>"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2$doc=_Dark$parameters2.docs)||void 0===_Dark$parameters2$doc?void 0:_Dark$parameters2$doc.source)})}),IconWithText.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},IconWithText.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_IconWithText$paramet=IconWithText.parameters)||void 0===_IconWithText$paramet?void 0:_IconWithText$paramet.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Icon {...args}><p>Text</p></Icon>"},null===(_IconWithText$paramet2=IconWithText.parameters)||void 0===_IconWithText$paramet2||null===(_IconWithText$paramet3=_IconWithText$paramet2.docs)||void 0===_IconWithText$paramet3?void 0:_IconWithText$paramet3.source)})}),OrientationRight.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OrientationRight.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OrientationRight$par=OrientationRight.parameters)||void 0===_OrientationRight$par?void 0:_OrientationRight$par.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Icon {...args}><p>Text</p></Icon>"},null===(_OrientationRight$par2=OrientationRight.parameters)||void 0===_OrientationRight$par2||null===(_OrientationRight$par3=_OrientationRight$par2.docs)||void 0===_OrientationRight$par3?void 0:_OrientationRight$par3.source)})}),Search.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Search.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Search$parameters=Search.parameters)||void 0===_Search$parameters?void 0:_Search$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => {\n  const [query, setQuery] = useState("");\n  return <div className="icon-search-story">\n            <Input name={query} onChange={e => setQuery(e.target.value)} icon={"search"} />\n            {Object.keys(drawings).filter(key => key.search(new RegExp(query.replace(/\\s*/g, ""), "i")) > -1).map(key => <Button key={key} size="small" rounded={true} title={key} variant={"tertiary"}>\n                        <Icon iconString={key} />\n                    </Button>)}\n\n        </div>;\n}'},null===(_Search$parameters2=Search.parameters)||void 0===_Search$parameters2||null===(_Search$parameters2$d=_Search$parameters2.docs)||void 0===_Search$parameters2$d?void 0:_Search$parameters2$d.source)})});var __namedExportsOrder=["Default","Medium","Large","Dark","IconWithText","OrientationRight","Search"]}}]);