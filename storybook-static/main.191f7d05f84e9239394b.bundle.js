(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1105:function(module,exports,__webpack_require__){"use strict";__webpack_require__(7),__webpack_require__(3),__webpack_require__(53),__webpack_require__(316),__webpack_require__(43),__webpack_require__(44),__webpack_require__(1106),__webpack_require__(34),__webpack_require__(33);var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(41),_configFilename=__webpack_require__(1107);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1107:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1108:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(369).configure)([__webpack_require__(1109),__webpack_require__(1111)],module,!1)}).call(this,__webpack_require__(114)(module))},1109:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1110};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1109},1110:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(4),__webpack_require__(7),__webpack_require__(14),__webpack_require__(3),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(220),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(493),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(494),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(495),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(496),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(497),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(498),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(499),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(500),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1111:function(module,exports,__webpack_require__){var map={"./Button.stories.js":1112,"./Header.stories.js":221,"./Page.stories.js":1122};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1111},1112:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(7),__webpack_require__(135),__webpack_require__(4);var _Button_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(172);__webpack_exports__.default={title:"Example/Button",component:_Button_vue__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{backgroundColor:{control:"color"},size:{control:{type:"select",options:["small","medium","large"]}}}};var Template=function Template(args,_ref){var argTypes=_ref.argTypes;return{props:Object.keys(argTypes),components:{MyButton:_Button_vue__WEBPACK_IMPORTED_MODULE_3__.a},template:'<my-button @onClick="onClick" v-bind="$props" />'}},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyButton },\n  template: \'<my-button @onClick="onClick" v-bind="$props" />\',\n})'}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyButton },\n  template: \'<my-button @onClick="onClick" v-bind="$props" />\',\n})'}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyButton },\n  template: \'<my-button @onClick="onClick" v-bind="$props" />\',\n})'}},Large.parameters),Small.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyButton },\n  template: \'<my-button @onClick="onClick" v-bind="$props" />\',\n})'}},Small.parameters)},1113:function(module,exports,__webpack_require__){var api=__webpack_require__(319),content=__webpack_require__(1114);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1114:function(module,exports,__webpack_require__){(exports=__webpack_require__(320)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},1115:function(module,exports,__webpack_require__){var api=__webpack_require__(319),content=__webpack_require__(1116);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1116:function(module,exports,__webpack_require__){(exports=__webpack_require__(320)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},1117:function(module,exports,__webpack_require__){var api=__webpack_require__(319),content=__webpack_require__(1118);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1118:function(module,exports,__webpack_require__){(exports=__webpack_require__(320)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},1122:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(7),__webpack_require__(135),__webpack_require__(4),__webpack_require__(1117);var stories_Pagevue_type_script_lang_js_={name:"my-page",components:{MyHeader:__webpack_require__(173).a},props:{user:{type:Object}},methods:{onLogin:function onLogin(){this.$emit("onLogin")},onLogout:function onLogout(){this.$emit("onLogout")},onCreateAccount:function onCreateAccount(){this.$emit("onCreateAccount")}}},componentNormalizer=__webpack_require__(140);const __vuedocgen_export_0=Object(componentNormalizer.a)(stories_Pagevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("article",[_c("my-header",{attrs:{user:_vm.user},on:{onLogin:_vm.onLogin,onLogout:_vm.onLogout,onCreateAccount:_vm.onCreateAccount}}),_vm._v(" "),_c("section",[_c("h2",[_vm._v("Pages in Storybook")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c("p",[_vm._v("\n      Render pages with mock data. This makes it easy to build and review page states without\n      needing to navigate to them in your app. Here are some handy patterns for managing page data\n      in Storybook:\n    ")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c("div",{staticClass:"tip-wrapper"},[_c("span",{staticClass:"tip"},[_vm._v("Tip")]),_vm._v("\n      Adjust the width of the canvas with the\n      "),_c("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"}},[_c("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[_c("path",{attrs:{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}})])]),_vm._v("\n      Viewports addon in the toolbar\n    ")])])],1)}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("p",[this._v("\n      We recommend building UIs with a\n      "),_c("a",{attrs:{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"}},[_c("strong",[this._v("component-driven")])]),this._v("\n      process starting with atomic components and ending with pages.\n    ")])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("ul",[_c("li",[this._v('\n        Use a higher-level connected component. Storybook helps you compose such data from the\n        "args" of child component stories\n      ')]),this._v(" "),_c("li",[this._v("\n        Assemble data in the page component from your services. You can mock these services out\n        using Storybook.\n      ")])])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("p",[this._v("\n      Get a guided tutorial on component-driven development at\n      "),_c("a",{attrs:{href:"https://www.learnstorybook.com",target:"_blank",rel:"noopener noreferrer"}},[this._v("Learn Storybook")]),this._v("\n      . Read more in the\n      "),_c("a",{attrs:{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"}},[this._v("docs")]),this._v("\n      .\n    ")])}],!1,null,null,null).exports;var Page=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"my-page",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"onLogin"},{name:"onLogout"},{name:"onCreateAccount"}]};var Header_stories=__webpack_require__(221),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page",component:Page},function Template(args,_ref){var argTypes=_ref.argTypes;return{props:Object.keys(argTypes),components:{MyPage:Page},template:'<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />'}}),LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyPage },\n  template:\n    \'<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />\',\n})'}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyPage },\n  template:\n    \'<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />\',\n})'}},LoggedOut.parameters)},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(14),__webpack_require__(33),__webpack_require__(1113);var stories_Buttonvue_type_script_lang_js_={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:function validator(value){return-1!==["small","medium","large"].indexOf(value)}},backgroundColor:{type:String}},computed:{classes:function classes(){return function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({"storybook-button":!0,"storybook-button--primary":this.primary,"storybook-button--secondary":!this.primary},"storybook-button--".concat(this.size),!0)},style:function style(){return{backgroundColor:this.backgroundColor}}},methods:{onClick:function onClick(){this.$emit("onClick")}}},componentNormalizer=__webpack_require__(140);const __vuedocgen_export_0=Object(componentNormalizer.a)(stories_Buttonvue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("button",{class:this.classes,style:this.style,attrs:{type:"button"},on:{click:this.onClick}},[this._v(this._s(this.label))])}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"onClick"}]}},173:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1115);var stories_Headervue_type_script_lang_js_={name:"my-header",components:{MyButton:__webpack_require__(172).a},props:{user:{type:Object}},methods:{onLogin:function onLogin(){this.$emit("onLogin")},onLogout:function onLogout(){this.$emit("onLogout")},onCreateAccount:function onCreateAccount(){this.$emit("onCreateAccount")}}},componentNormalizer=__webpack_require__(140);const __vuedocgen_export_0=Object(componentNormalizer.a)(stories_Headervue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("header",[_c("div",{staticClass:"wrapper"},[_c("div",[_c("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[_c("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[_c("path",{attrs:{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}}),_vm._v(" "),_c("path",{attrs:{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}}),_vm._v(" "),_c("path",{attrs:{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}})])]),_vm._v(" "),_c("h1",[_vm._v("Acme")])]),_vm._v(" "),_c("div",[_vm.user?_c("my-button",{attrs:{size:"small",label:"Log out"},on:{onClick:_vm.onLogout}}):_vm._e(),_vm._v(" "),_vm.user?_vm._e():_c("my-button",{attrs:{size:"small",label:"Log in"},on:{onClick:_vm.onLogin}}),_vm._v(" "),_vm.user?_vm._e():_c("my-button",{attrs:{primary:"",size:"small",label:"Sign up"},on:{onClick:_vm.onCreateAccount}})],1)])])}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"onLogin"},{name:"onLogout"},{name:"onCreateAccount"}]}},221:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(7),__webpack_require__(135),__webpack_require__(4);var _Header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(173);__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args,_ref){var argTypes=_ref.argTypes;return{props:Object.keys(argTypes),components:{MyHeader:_Header__WEBPACK_IMPORTED_MODULE_3__.a},template:'<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />'}},LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyHeader },\n  template:\n    \'<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />\',\n})'}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { MyHeader },\n  template:\n    \'<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />\',\n})'}},LoggedOut.parameters)},493:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},494:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},495:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},496:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},497:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},498:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},499:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},500:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},503:function(module,exports,__webpack_require__){__webpack_require__(504),__webpack_require__(658),__webpack_require__(659),__webpack_require__(813),__webpack_require__(1025),__webpack_require__(1079),__webpack_require__(1084),__webpack_require__(1096),__webpack_require__(1098),__webpack_require__(1103),__webpack_require__(1105),module.exports=__webpack_require__(1108)},571:function(module,exports){},659:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(369)}},[[503,1,2]]]);
//# sourceMappingURL=main.191f7d05f84e9239394b.bundle.js.map