/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hammerstone/refine-vue2-dev/dist/vue2/refine-vue.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@hammerstone/refine-vue2-dev/dist/vue2/refine-vue.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionSelector": () => (/* binding */ Be),
/* harmony export */   "DatePickerPlugin": () => (/* binding */ Re),
/* harmony export */   "Query": () => (/* binding */ je),
/* harmony export */   "QueryBuilder": () => (/* binding */ Le),
/* harmony export */   "RefinePlugin": () => (/* binding */ $e),
/* harmony export */   "Selector": () => (/* binding */ ae),
/* harmony export */   "SelectorOption": () => (/* binding */ me),
/* harmony export */   "linearFlavor": () => (/* binding */ We),
/* harmony export */   "tailwindFlavor": () => (/* binding */ Ke)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");
const d=Symbol();let u={};var c={init(e){u=e},get:(e,t=null)=>u?.[e]??t,set(e,t){u[e]=t}};const p=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"RefineFlavor",props:{as:{type:String,default:"div"},order:{type:Array,default:()=>["default"]},component:{type:String,required:!0},flavorOptions:{type:Object,required:!1}},inheritAttrs:!1,setup(n,i){let s=c.get("showLocators");const l=function(n,i,r=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({})))){const o=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)(d),s=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>n(o)??{})),l=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>{const e={},t=r.value??{};let n=s.value.order;return n&&(e.order="function"==typeof n?n(t):n),e.wrap=s.value.wrap,e})),a=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>{const e={},t=r.value??{},n=s.value.class;n&&(e.class="function"==typeof n?n(t):n);const i=s.value.style;return i&&(e.style="function"==typeof i?i(t):i),e}));return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({component:s.value.component??i.value,props:a,extra:l})))}((e=>{const t=n.component.split(".");let i=e;for(const e of t)i=i?.[e];return"string"!=typeof i&&"function"!=typeof i||(i={class:i}),i}),(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>n.as)),(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({...i.attrs??{},...n.flavorOptions??{}}))));return()=>{const e=l.value,t=e.extra.value.order??n.order,a=function(e,t=[]){const n=Object.assign({},e);for(const e of t)e in n&&delete n[e];return n}(n,["as","component","order"]),d=i.slots;let u="string"==typeof e.component&&e.component.includes("-"),c=u?d:t.map((e=>d?.[e]?.())),p=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(e.component,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2?{scopedSlots:d,attrs:{...s&&{"data-locator":n.component},...i.attrs},props:a,on:i.listeners,...e.props.value}:{...s&&{"data-locator":n.component},...i.attrs,...a,...e.props.value},c);return e.extra.value.wrap?e.extra.value.wrap(p):p}}});function f(e,t,n,i,r,o,s,l,a,d){"boolean"!=typeof s&&(a=l,l=s,s=!1);const u="function"==typeof n?n.options:n;let c;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),i&&(u._scopeId=i),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):t&&(c=s?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),c)if(u.functional){const e=u.render;u.render=function(t,n){return c.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,c):[c]}return n}const h={name:"refine-number-input",data(){return{currentValue:this.value1}},emits:["input"],props:{value1:{type:[Number,String],required:!1},meta:{type:Object,required:!1,default:()=>({})}},computed:{metaAttributes(){return["min","max","step","placeholder"].reduce(((e,t)=>(Object.prototype.hasOwnProperty.call(this.meta,t)&&""!==this.meta[t]&&(e[t]=this.meta[t]),e)),{})}},methods:{handleInputChange:function(e){const t=e.target.value,n=Number(t);isNaN(n)?this.currentValue=t:(this.currentValue=n,this.$emit("input",{value1:n}))}},components:{RefineFlavor:p}};var m=function(){var e=this,t=e.$createElement;return(e._self._c||t)("refine-flavor",e._b({attrs:{as:"input",component:"inputs.number",type:"number",value:e.currentValue},on:{input:e.handleInputChange}},"refine-flavor",e.metaAttributes,!1))};m._withStripped=!0;const v=f({render:m,staticRenderFns:[]},undefined,h,undefined,false,undefined,!1,void 0,void 0,void 0);const g={name:"refine-double-number-input",data(){return{currentValue:this.value}},emits:["input"],computed:{joinWord(){return Object.prototype.hasOwnProperty.call(this.meta,"joiner")?this.meta.joiner:"and"}},methods:{updateFirstValue:function({value1:e}){this.$emit("input",{value1:e})},updateSecondValue:function({value1:e}){this.$emit("input",{value2:e})}},props:{value1:{type:[String,Number],required:!1},value2:{type:[String,Number],required:!1},meta:{type:Object,required:!1,default:()=>({})}},components:{NumberInput:v,RefineFlavor:p}};var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{attrs:{as:"div",component:"inputs.number.double.wrapper"}},[n("number-input",{attrs:{meta:e.meta,value:e.value1},on:{input:e.updateFirstValue}}),e._v(" "),e.joinWord?n("refine-flavor",{attrs:{as:"span",component:"inputs.number.double.joiner"}},[e._v(e._s(e.joinWord)+"\n  ")]):e._e(),e._v(" "),n("number-input",{attrs:{meta:e.meta,value:e.value2},on:{input:e.updateSecondValue}})],1)};y._withStripped=!0;const b=f({render:y,staticRenderFns:[]},undefined,g,undefined,false,undefined,!1,void 0,void 0,void 0);const w={name:"refine-text-input",props:{value:{type:String,required:!1,default:""}},emits:["input"],components:{RefineFlavor:p}};var O=function(){var e=this,t=e.$createElement;return(e._self._c||t)("refine-flavor",{attrs:{as:"input",component:"inputs.text",type:"text",value:e.value},on:{input:function(t){return e.$emit("input",{value:t.target.value})}}})};O._withStripped=!0;const x=f({render:O,staticRenderFns:[]},undefined,w,undefined,false,undefined,!1,void 0,void 0,void 0);const _={name:"refine-date-input",components:{RefineFlavor:p},emits:["input"],props:{date1:{type:String,required:!1}}};var C=function(){var e=this,t=e.$createElement;return(e._self._c||t)("refine-flavor",e._b({attrs:{as:"refine-date-picker",component:"inputs.date",date:e.date1},on:{input:function(t){return e.$emit("input",{date1:t.value})}}},"refine-flavor",e.$attrs,!1))};C._withStripped=!0;const S=f({render:C,staticRenderFns:[]},undefined,_,undefined,false,undefined,!1,void 0,void 0,void 0);const k={name:"refine-double-date-input",components:{RefineFlavor:p},emits:["input"],props:{date1:{type:String,required:!1},date2:{type:String,required:!1},joiner:{type:String,required:!1,default:"and"}}};var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{attrs:{as:"div",component:"inputs.date.double.wrapper"}},[n("refine-flavor",e._b({attrs:{as:"refine-date-picker",component:"inputs.date",date:e.date1},on:{input:function(t){return e.$emit("input",{date1:t.value})}}},"refine-flavor",e.$attrs,!1)),e._v(" "),n("refine-flavor",{attrs:{as:"p",component:"inputs.date.double.joiner"}},[e._v(e._s(e.joiner))]),e._v(" "),n("refine-flavor",e._b({attrs:{as:"refine-date-picker",component:"inputs.date",date:e.date2},on:{input:function(t){return e.$emit("input",{date2:t.value})}}},"refine-flavor",e.$attrs,!1))],1)};$._withStripped=!0;const R=f({render:$,staticRenderFns:[]},undefined,k,undefined,false,undefined,!1,void 0,void 0,void 0);var I=e=>"conjunction"===(null==e?void 0:e.type),q=Object.defineProperty,B=Object.defineProperties,j=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))F.call(t,n)&&D(e,n,t[n]);if(E)for(var n of E(t))A.call(t,n)&&D(e,n,t[n]);return e},N=(e,t)=>B(e,j(t)),V=function(){return`${~~(1e4*Math.random()+1e4)}-${~~(Date.now()/1e3)}`},M=(e,t,n,i)=>{var r,o;const[s]=i||[];return{id:e,condition_id:e,depth:t,type:"criterion",input:P({clause:null==n?void 0:n.clauses[0].id},s&&{[s.id]:{clause:null==(o=null==(r=null==s?void 0:s.meta)?void 0:r.clauses[0])?void 0:o.id}}),uid:V()}},T=function(e=1){return{id:void 0,depth:e,type:"conjunction",word:"and",uid:V()}},L=class{constructor(e,t,n){e=e||[],t=t||[],this.conditions=t,this.blueprint=this.mapBlueprint(e),this.blueprintChanged=()=>{n&&n([...this.blueprint])},this.blueprintChanged()}mapBlueprint(e){return e.map((e=>{return"criterion"===(null==(t=e)?void 0:t.type)?N(P({},e),{id:e.condition_id,uid:(null==e?void 0:e.uid)||V()}):N(P({},e),{id:void 0,uid:V()});var t}))}getBlueprint(){return this.blueprint.map((e=>((e,t)=>{var n={};for(var i in e)F.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&E)for(var i of E(e))t.indexOf(i)<0&&A.call(e,i)&&(n[i]=e[i]);return n})(e,["id","uid"])))}updateBlueprint(e){this.blueprint=this.mapBlueprint(e)}groupedBlueprint(){if(0===this.blueprint.length)return[];const e=[];return e.push([]),this.blueprint.forEach(((t,n)=>{I(t)?"or"===t.word&&e.push([]):e[e.length-1].push(N(P({},t),{position:n}))})),e}indexOfCriterion({uid:e}){let t=-1;for(let n=0;n<this.blueprint.length;n++)if(this.blueprint[n].uid===e){t=n;break}return t}replaceCriterion(e,t){const{meta:n,id:i,refinements:r}=this.findCondition(t.id),o=M(i,1,n,r);this.blueprint.splice(e,1,o),this.blueprintChanged()}removeCriterion(e){const{blueprint:t}=this,n=t[e-1],i=t[e+1],r=I(i)&&"or"===i.word,o=I(n)&&"or"===n.word,s=r||!i,l=o||!n,a=l&&!s,d=l&&s;!n&&!i?this.blueprint=[]:d&&o?t.splice(e-1,2):d&&!n||a?t.splice(e,2):t.splice(e-1,2),this.blueprintChanged()}findCriterion(e){const t=this.indexOfCriterion({uid:e});return this.blueprint[t]}addGroup(){const{blueprint:e,conditions:t}=this,n=t[0],{meta:i,refinements:r}=n;e.length>0&&e.push(function(e=0){return{id:void 0,depth:e,type:"conjunction",word:"or",uid:V()}}()),e.push(M(n.id,1,i,r)),this.blueprintChanged()}addCriterion(e){const{id:t,depth:n}=e,{blueprint:i}=this,r=M(t,n);return 0===i.length?i.push(r):i.splice(i.length,0,T(),r),this.blueprintChanged(),r}insertCriterion(e){const{blueprint:t,conditions:n}=this,i=n[0],{meta:r,refinements:o}=i;return t.splice(e+1,0,T(),M(i.id,1,r,o)),this.blueprintChanged(),t[e+1]}findRefinement(e,t){const{refinements:n}=this.findCondition(e);let i;return n.forEach((e=>{e.id===t&&(i=e)})),i}findCondition(e){let t=this.conditions[0];return this.conditions.forEach((n=>{n.id===e&&(t=n)})),t}switchClause({uid:e,id:t},n,i){const{meta:r}=this.findCondition(t),o=this.findCriterion(e);Array.isArray(r.options)?o.input={clause:n}:this.updateInput({uid:e},{clause:n},i)}switchRefinement({uid:e,id:t},n,i){const r=this.findRefinement(t,i),o=this.findCriterion(e),s=P({},o.input);delete s[n],s[i]={clause:r.meta.clauses[0].id},o.input=s}updateInput({uid:e},t,n){const i=this.findCriterion(e);Object.keys(t).forEach((e=>{n?i.input[n][e]=t[e]:i.input[e]=t[e]})),this.blueprintChanged()}},G=class{constructor(){this.options=[],this.selectedOptions=[]}registerOption(e){const{id:t}=e;for(var n=0;n<this.options.length;n++){if(this.options[n].id===t)throw new Error("An option with id ${optionId} has already been registered for this selector.")}const i=this.options[this.options.length-1]||null,r=P({previousOption:i,nextOption:null},e);i&&(i.nextOption=r),this.options.push(r)}isSelected(e){let t=!1;return this.selectedOptions.forEach((n=>{n.id===e&&(t=!0)})),t}findOption(e){for(var t=0;t<this.options.length;t++){const n=this.options[t];if(n.id===e)return n}return null}toggleOption(e){return this.isSelected(e)?this.deselectOption(e):this.selectOption(e)}clearSelectedOptions(){this.selectedOptions.splice(0,this.selectedOptions.length)}deselectOption(e){const t=this.findOption(e);return this.selectedOptions=this.selectedOptions.filter((t=>t.id!==e)),{deselectedOption:t,selectedOptions:this.selectedOptions}}selectOption(e){const t=this.findOption(e);return this.isSelected(e)||this.selectedOptions.push(t),{selectedOption:t,selectedOptions:this.selectedOptions}}};const z=f({},undefined,{name:"renderless-selector",data:()=>({selector:(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(new G),isClosed:!0,highlightedOption:null}),emits:["select-option","deselect-option"],provide(){return{selector:this.selector}},computed:{selectedOptions(){return this.selector.selectedOptions},firstSelectedOption(){return this.selectedOptions[0]||this.selector.options[0]},isOpen(){return!this.isClosed},actions:function(){const{clearOptions:e,close:t,highlightNextOption:n,highlightPreviousOption:i,highlightOption:r,open:o,selectOption:s,selectedOptions:l,toggle:a,toggleOption:d}=this;return{clearOptions:e,close:t,highlightNextOption:n,highlightPreviousOption:i,highlightOption:r,open:o,selectOption:s,selectedOptions:l,toggle:a,toggleOption:d}},state:function(){const{isClosed:e,isOpen:t,selectedOptions:n,highlightedOption:i}=this;return{isClosed:e,isOpen:t,selectedOptions:n,highlightedOption:i,options:this.selector.options}}},methods:{nextTick(){return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then((()=>({actions:this.actions,...this.state})))},close(){return this.isClosed||(this.isClosed=!0),this.nextTick()},open(){return this.isClosed=!1,this.highlightedOption=this.firstSelectedOption,this.nextTick()},toggle(){return this.isClosed?this.open():this.close(),this.nextTick()},toggleOption(e){const{selector:t,highlightOption:n}=this,{selectedOption:i}=t.toggleOption(e);return i?this.selectOption(e):this.deselectOption(e),n(t.findOption(e))},clearOptions(){this.selector.clearSelectedOptions()},deselectOption(e){this.$emit("deselect-option",this.selector.deselectOption(e))},selectOption(e){this.$emit("select-option",this.selector.selectOption(e))},highlightOption(e){return this.highlightedOption=e,this.nextTick()},highlightNextOption(){const e=this.highlightedOption?.nextOption;return e&&(this.highlightedOption=e),this.nextTick()},highlightPreviousOption(){const e=this.highlightedOption?.previousOption;return e&&(this.highlightedOption=e),this.nextTick()}},render(){let e=this.$slots?.default;return vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2&&(e=this.$scopedSlots?.default),e?e({actions:this.actions,...this.state}):null}},undefined,undefined,undefined,!1,void 0,void 0,void 0),H={props:{id:{type:[String,Number],required:!0},display:{type:String,required:!1},selected:{type:Boolean,required:!1,default:!1}}};let K=1;var U={beforeCreate(){this.uid=K.toString(),K+=1}};const Q={name:"selector-button",props:{id:{type:String,required:!0},isOpen:{type:Boolean,required:!0},display:{type:String,required:!0}},methods:{label:function(){return this.display?`${this.display} Selected`:"Choose an option"},focus:function(){this.$refs.button.$el.focus()}},components:{RefineFlavor:p}};var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{ref:"button",attrs:{as:"button",component:"select.button",id:e.id,type:"button","aria-haspopup":"listbox","aria-expanded":e.isOpen,"aria-label":e.label()},on:{click:function(t){return t.preventDefault(),e.$emit("toggle")},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"arrow-down",void 0,t.key,void 0)?null:(t.stopPropagation(),t.preventDefault(),e.$emit("open"))}}},[0===e.display.length?n("refine-flavor",{attrs:{as:"span",component:"select.button.placeholder"}},[e._v("\n    Choose an option\n  ")]):n("refine-flavor",{attrs:{as:"span",component:"select.button.selected"}},[e._v("\n    "+e._s(e.display)+"\n  ")]),e._v(" "),n("refine-flavor",{attrs:{as:"span",component:"select.button.icon.wrapper"}},[n("refine-flavor",{attrs:{as:"svg",component:"select.button.icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],1)],1)};W._withStripped=!0;const X=f({render:W,staticRenderFns:[]},undefined,Q,undefined,false,undefined,!1,void 0,void 0,void 0);const Y={name:"selector-listbox",mixins:[U],data:()=>({buffer:"",clearBufferTimeout:null}),props:{isClosed:{type:Boolean,required:!1,default:!0},selectedOption:{type:Object,required:!1}},watch:{isClosed(e){e||this.$nextTick((()=>this.$refs.listBox.$el.focus()))},buffer(e){this.$emit("buffer-changed",e)}},methods:{createItemId:function(e){return`listbox-option-${this.uid}-${e}`},handleKeypress(e){new RegExp(/[a-zA-Z\d ]/).test(e.key)&&1===e.key.length&&(this.buffer+=e.key,this.preserveBuffer())},clearBuffer(){this.buffer=this.buffer.slice(0,-1),this.preserveBuffer()},preserveBuffer(){return clearTimeout(this.clearBufferTimeout),this.clearBufferTimeout=setTimeout((()=>{this.buffer=""}),1500),!0}},components:{RefineFlavor:p}};var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{attrs:{as:"div",component:"select.listbox.wrapper"}},[n("refine-flavor",{ref:"listBox",attrs:{as:"ul",component:"select.listbox",flavorOptions:{isClosed:e.isClosed},tabindex:"-1",role:"listbox","aria-activedescendant":e.selectedOption?e.createItemId(e.selectedOption.id):""},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:(t.stopPropagation(),t.preventDefault(),e.clearBuffer.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"arrow-down",void 0,t.key,void 0)?null:(t.stopPropagation(),t.preventDefault(),function(){return e.preserveBuffer()&&e.$emit("highlight-next-option")}.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"arrow-up",void 0,t.key,void 0)?null:(t.stopPropagation(),t.preventDefault(),function(){return e.preserveBuffer()&&e.$emit("highlight-previous-option")}.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),t.preventDefault(),e.$emit("select-option"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0)?null:(t.stopPropagation(),t.preventDefault(),e.$emit("close"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.stopPropagation(),t.preventDefault(),e.$emit("close"))},function(t){return e.handleKeypress(t)}]}},[e._t("default",null,{createItemId:e.createItemId})],2)],1)};Z._withStripped=!0;const J=f({render:Z,staticRenderFns:[]},undefined,Y,undefined,false,undefined,!1,void 0,void 0,void 0);const ee={name:"selector-list-item",props:{optionId:{type:[String,Number],required:!0},optionDisplay:{type:String,required:!0},selected:{type:Boolean,required:!1,default:!1},isHighlighted:{type:Boolean,required:!1,default:!1}},emits:["selected","mouseenter","mouseleave"],components:{RefineFlavor:p}};var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{key:e.optionId,ref:"listItem",attrs:{as:"li",component:"select.listbox.item",flavorOptions:{isHighlighted:e.isHighlighted},role:"option","aria-label":e.optionDisplay,"aria-selected":e.selected},on:{mouseenter:function(t){return e.$emit("mouseenter")},mouseleave:function(t){return e.$emit("mouseleave")},click:function(t){return e.$emit("selected")}}},[n("refine-flavor",{attrs:{as:"span",component:"select.listbox.item.text",flavorOptions:{selected:e.selected}}},[e._v("\n    "+e._s(e.optionDisplay)+"\n  ")]),e._v(" "),n("refine-flavor",{attrs:{as:"span",component:"select.listbox.item.icon.wrapper",flavorOptions:{isHighlighted:e.isHighlighted}}},[n("refine-flavor",{directives:[{name:"show",rawName:"v-show",value:e.selected,expression:"selected"}],attrs:{as:"svg",component:"select.listbox.item.icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":!e.selected}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])],1)],1)};te._withStripped=!0;const ne=f({render:te,staticRenderFns:[]},undefined,ee,undefined,false,undefined,!1,void 0,void 0,void 0);const ie={name:"multi-selector-button",props:{id:{type:String,required:!0},isOpen:{type:Boolean,required:!0},selectedOptions:{type:Array,required:!0}},methods:{label:function(){const e=`${this.selectedOptions.map((({display:e})=>e)).join(", ")} Selected`;return 0===this.selectedOptions.length?"Choose an option":e},focus:function(){this.$refs.button.focus()}},components:{RefineFlavor:p}};var re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{ref:"button",attrs:{as:"button",component:"select.multi.button",id:e.id,"aria-haspopup":"listbox","aria-label":e.label(),"aria-expanded":e.isOpen,tabindex:"0"},on:{click:function(t){return t.preventDefault(),e.$emit("toggle")},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),t.preventDefault(),e.$emit("open"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"arrow-down",void 0,t.key,void 0)?null:(t.stopPropagation(),t.preventDefault(),e.$emit("open"))}]}},[0===e.selectedOptions.length?n("refine-flavor",{attrs:{as:"span",component:"select.multi.button.placeholder"}},[e._v("\n    Choose an option\n  ")]):e._l(e.selectedOptions,(function(t){var i=t.id,r=t.display;return n("refine-flavor",{key:i,attrs:{as:"span",component:"select.multi.button.selected"}},[e._v("\n    "+e._s(r)+"\n    "),n("refine-flavor",{attrs:{as:"span",component:"select.multi.button.deselect.icon.wrapper"},on:{click:function(t){return t.preventDefault(),e.$emit("deselect-option",i)}}},[n("refine-flavor",{attrs:{as:"svg",component:"select.multi.button.deselect.icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],1)],1)})),e._v(" "),n("refine-flavor",{attrs:{as:"span",component:"select.multi.button.icon.wrapper"}},[n("refine-flavor",{attrs:{as:"svg",component:"select.multi.button.icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],1)],2)};re._withStripped=!0;const oe=f({render:re,staticRenderFns:[]},undefined,ie,undefined,false,undefined,!1,void 0,void 0,void 0);const se={name:"selector",mixins:[U],inject:["builderModeActive"],props:{isMultiSelect:{type:Boolean,required:!1,default:!1},innerClass:{type:String,required:!1,default:""}},emits:["select-option","deselect-option"],computed:{selectorId(){return this.uid},buttonId(){return`button-${this.selectorId}`}},mounted(){this.builderModeActive&&this.$refs.button.$el.focus()},directives:{clickAway:new function(){const e={},t=function(t,n){const{value:i}=n;if("function"!=typeof i)throw new Error("The click-away directive expects a function/method as an argument.");if(!t.id)throw new Error("The click-away directive requires the element it is bound to to have an id.");const r=e=>{t.contains(e.target)||i()};e[t.id]=r,document.addEventListener("click",r),document.addEventListener("touchstart",r)},n=function(t){document.removeEventListener("click",e[t.id]),document.removeEventListener("touchstart",e[t.id]),delete e[t.id]};return{bind:t,beforeMount:t,unbind:n,unmount:n}}},methods:{updateBuffer(e,t,n){if(!e)return;const i=t.find((t=>t.display.toLowerCase().includes(e)));i&&(n.highlightOption(i),this.scrollIntoView(i.id))},isSelected(e,t){let n=!1;return t.forEach((t=>{e.id===t.id&&(n=!0)})),n},deselectOption(e,{toggleOption:t}){t(e)},async selectOption(e,t){const{clearOptions:n,selectOption:i,toggleOption:r}=t,{isMultiSelect:o}=this;o?r(e):(n(),i(e),await this.close(t))},scrollIntoView(e){if(e){this.$refs[e][0].$el.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}},async close({close:e}){const{isClosed:t}=await e();t&&this.$refs.button?.$el?.focus()},async open({open:e}){const{selectedOption:t}=await e();this.scrollIntoView(t?.id)},async toggle({toggle:e}){const{isOpen:t,selectedOption:n}=await e();t&&this.scrollIntoView(n?.id)},async highlightNextOption({highlightNextOption:e}){const{highlightedOption:t}=await e();this.scrollIntoView(t?.id)},async highlightPreviousOption({highlightPreviousOption:e}){const{highlightedOption:t}=await e();this.scrollIntoView(t?.id)}},components:{MultiSelectorButton:oe,RenderlessSelector:z,SelectorListItem:ne,SelectorButton:X,SelectorListbox:J,RefineFlavor:p}};var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("renderless-selector",{on:{"select-option":function(t){return e.$emit("select-option",t)},"deselect-option":function(t){return e.$emit("deselect-option",t)}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.actions,r=t.isOpen,o=t.isClosed,s=t.selectedOptions,l=t.highlightedOption,a=t.options;return[n("refine-flavor",{attrs:{as:"div",component:"select.wrapper"}},[n("refine-flavor",{directives:[{name:"click-away",rawName:"v-click-away",value:i.close,expression:"actions.close"}],class:e.innerClass,attrs:{as:"div",component:"select",id:"listbox-"+e.selectorId,"aria-labelledby":e.buttonId}},[e.isMultiSelect?n("multi-selector-button",{ref:"button",attrs:{id:e.buttonId,isOpen:r,selectedOptions:s},on:{toggle:function(t){return e.toggle(i)},open:function(t){return e.open(i)},"deselect-option":function(t){return e.deselectOption(t,i)}}}):n("selector-button",{ref:"button",attrs:{id:e.buttonId,isOpen:r,display:s[0]?s[0].display:""},on:{toggle:function(t){return e.toggle(i)},open:function(t){return e.open(i)}}}),e._v(" "),n("selector-listbox",{ref:"listBox",attrs:{selectedOption:s[0],isClosed:o},on:{"highlight-next-option":function(t){return e.highlightNextOption(i)},"highlight-previous-option":function(t){return e.highlightPreviousOption(i)},"select-option":function(t){return e.selectOption(l.id,i)},"buffer-changed":function(t){return e.updateBuffer(t,a,i)},close:function(t){return e.close(i)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.createItemId;return e._l(a,(function(t){return n("selector-list-item",{key:t.id,ref:t.id,refInFor:!0,attrs:{id:r(t.id),optionId:t.id,optionDisplay:t.display,selected:e.isSelected(t,s),isHighlighted:l&&t.id===l.id},on:{mouseenter:function(e){return i.highlightOption(t)},mouseleave:function(e){return i.highlightOption(null)},selected:function(n){return e.selectOption(t.id,i)}}})}))}}],null,!0)})],1),e._v(" "),n("refine-flavor",{attrs:{as:"div",component:"customOptions.wrapper"}},[e._t("default")],2)],1)]}}],null,!0)})};le._withStripped=!0;const ae=f({render:le,staticRenderFns:[]},undefined,se,undefined,false,undefined,!1,void 0,void 0,void 0);var de={name:"renderless-query-builder",emits:["change"],props:{blueprint:{type:Array,required:!1},conditions:{type:Array,required:!0}},provide(){const{blueprintStore:e}=this;return{blueprint:e,builderModeActive:!0}},data(){return{conditionsLookup:this.conditions.reduce(((e,t)=>(e[t.id]=t,e)),{}),internalBlueprint:null,blueprintStore:new L(this.blueprint,this.conditions,(e=>{this.internalBlueprint=e,this.$emit("change",e)}))}},watch:{blueprint:{deep:!0,handler(e){e!==this.internalBlueprint&&this.blueprintStore.updateBlueprint(e)}}},methods:{replaceCriterion(e,t){this.blueprintStore.replaceCriterion(e,t)},insertCriterion(e){this.blueprintStore.insertCriterion(e)},removeCriterion(e){this.blueprintStore.removeCriterion(e)},addGroup(){this.blueprintStore.addGroup()},conditionFor(e){const{id:t,uid:n}=e,{id:i,type:r,display:o,meta:s}=this.conditionsLookup[t];return{id:i,type:r,display:o,uid:n,meta:s}}},render(){const{insertCriterion:e,addGroup:t,blueprintStore:n,conditionFor:i,replaceCriterion:o,removeCriterion:s}=this;let l=this.$slots?.default;return vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2&&(l=this.$scopedSlots?.default),l?l({insertCriterion:e,addGroup:t,blueprint:n,conditionFor:i,removeCriterion:s,replaceCriterion:o,groupedBlueprint:n.groupedBlueprint()}):null}},ue={name:"renderless-condition",inheritAttrs:!1,props:{id:{type:String,required:!0},display:{type:String,required:!0},uid:{type:String,required:!0},meta:{type:Object,required:!0}},setup:(e,i)=>((e,i,r)=>{const o=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)("blueprint"),s=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)("builderModeActive");if(!e)throw new Error("useCondition requires an id.");if(!r)throw new Error("useCondition requires a Vue context.");if(!o)throw new Error("Conditions must be rendered within a query.");let l;l=s?o.findCriterion(i.uid):o.addCriterion({id:e,depth:0});const d=(e,t)=>o.updateInput(l,e,t),u=e=>o.switchClause(l,e);(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)("criterion",l),(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)("criterionMeta",i.meta),(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)("updateInput",d),(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)("switchRefinement",((e,t)=>{o.switchRefinement(l,e,t)})),(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)("refinementId",null),(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)((()=>{s||o.removeCriterion(o.indexOfCriterion(l))}));let c=null;return i?.condition?.meta?.clauses&&(c=i.condition.meta.clauses.map((e=>e.component))),()=>r.slots.default?r.slots.default({clauses:c,criterion:l,updateInput:d,switchClause:u}):null})(e.id,e,i)},ce={name:"renderless-clause",inheritAttrs:!1,props:{clause:{type:String,required:!0}},setup:(e,n)=>((e,n,i)=>{const r=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)("criterion"),o=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)("updateInput"),s=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)("refinementId"),l=(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)("builderModeActive"),d=e=>{o(e,s)};if(!r)throw new Error("A clause must be used within a criterion.");if(!l){o({clause:e},s);const{clause:t,...i}=r.input;Object.keys(n).length>0&&0===Object.keys(i).length&&o({...n},s)}return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)((()=>{l||r.input.clause===e&&o({clause:void 0},s)})),()=>i.slots.default?i.slots.default({setValue:d,...r.input}):null})(e.clause,e,n)},pe={name:"renderless-refinement",inject:["updateInput"],props:{id:{type:String,required:!0}},provide(){return{refinementId:this.id}},render(){let e=this.$slots?.default;if(vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2&&(e=this.$scopedSlots?.default),e)return e()}};const fe={name:"selector-option",mixins:[H],components:{RenderlessOption:{name:"renderless-option",inject:["selector"],mixins:[H],computed:{isSelected:function(){const{selector:e,id:t}=this;return e.isSelected(t)}},created(){const{id:e,display:t,selected:n,selector:i}=this;i.registerOption({id:e,display:t||e,...this.$attrs}),n&&i.selectOption(e)},render(){const{isSelected:e}=this;let t=this.$slots?.default;return vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2&&(t=this.$scopedSlots?.default),t&&e?t():null}}}};var he=function(){var e=this,t=e.$createElement;return(e._self._c||t)("renderless-option",{attrs:{id:e.id,display:e.display,selected:e.selected}},[e._t("default")],2)};he._withStripped=!0;const me=f({render:he,staticRenderFns:[]},undefined,fe,undefined,false,undefined,!1,void 0,void 0,void 0);const ve={name:"refine-date-input",components:{Selector:ae,SelectorOption:me,RefineFlavor:p},mixins:[U],emits:["input"],props:{amount:{type:[String,Number],required:!1},unit:{type:String,required:!1},modifier:{type:String,required:!1},units:{type:Array,required:!0},modifiers:{type:Array,required:!0}},created(){const{modifier:e}=this;this.$emit("input",{modifier:e})},methods:{updateModifier({selectedOptions:e}){const t=e.map((({id:e})=>e));this.$emit("input",{modifier:t[0]})},updateAmount:function(e){const t=e.target.value;this.$emit("input",{amount:t})},updateUnit:function({selectedOptions:e}){const t=e.map((({id:e})=>e));this.$emit("input",{unit:t[0]})}}};var ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{attrs:{as:"div",component:"inputs.date.relative.wrapper"}},[n("refine-flavor",{attrs:{as:"input",component:"inputs.date.relative",type:"number",name:"amount",value:e.amount},on:{input:e.updateAmount}}),e._v(" "),n("selector",{on:{"select-option":e.updateUnit}},e._l(e.units,(function(t){return n("selector-option",{key:t.id,attrs:{id:t.id,display:t.display,selected:t.id===e.unit}})})),1),e._v(" "),n("selector",{on:{"select-option":e.updateModifier}},e._l(e.modifiers,(function(t){return n("selector-option",{key:t.id,attrs:{id:t.id,selected:t.id===e.modifier,display:t.display}})})),1)],1)};ge._withStripped=!0;const ye=f({render:ge,staticRenderFns:[]},undefined,ve,undefined,false,undefined,!1,void 0,void 0,void 0);const be={name:"refine-option-input",components:{Selector:ae,SelectorOption:me},emits:["input"],props:{selected:{type:Array,required:!1,default:()=>[]},options:{type:Array,required:!0},multiple:{type:Boolean,required:!1,default:!1}},methods:{selectOption({selectedOptions:e}){const t=e.map((({id:e})=>e));this.$emit("input",{selected:t})},deselectOption({selectedOptions:e}){const t=e.map((({id:e})=>e));this.$emit("input",{selected:t})},isSelected(e){let t=!1;return this.selected.forEach((n=>{n===e&&(t=!0)})),t}}};var we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("selector",{attrs:{isMultiSelect:e.multiple},on:{"select-option":e.selectOption,"deselect-option":e.deselectOption}},e._l(e.options,(function(t){var i=t.id,r=t.display;return n("selector-option",{key:i,attrs:{id:i,display:r,selected:e.isSelected(i)}})})),1)};we._withStripped=!0;const Oe=f({render:we,staticRenderFns:[]},undefined,be,undefined,false,undefined,!1,void 0,void 0,void 0);const xe={emits:["input"],components:{RefineFlavor:p},props:{date:{type:String,required:!1}},methods:{handleInput:function(e){this.$emit("input",{value:e?.target?.value??e})}}};var _e=function(){var e=this,t=e.$createElement;return(e._self._c||t)("refine-flavor",{attrs:{as:"input",component:"inputs.date",type:"date",value:e.date},on:{input:e.handleInput}})};_e._withStripped=!0;const Ce=f({render:_e,staticRenderFns:[]},undefined,xe,undefined,false,undefined,!1,void 0,void 0,void 0);var Se={RefineDateInput:S,RefineDoubleDateInput:R,RefineDoubleNumberInput:b,RefineNumberInput:v,RefineOptionInput:Oe,RefineRelativeDateInput:ye,RefineTextInput:x,RefineNativeDatePicker:Ce},ke=Object.freeze({__proto__:null,default:Se,RefineDateInput:S,RefineDoubleDateInput:R,RefineDoubleNumberInput:b,RefineNumberInput:v,RefineOptionInput:Oe,RefineRelativeDateInput:ye,RefineTextInput:x,RefineNativeDatePicker:Ce}),$e={install:(e,t={})=>{t={DatePicker:Ce,showLocators:!1,...t},e.component("refine-date-picker",t.DatePicker),delete t.DatePicker,c.init(t)}},Re={install:(e,t={})=>{$e.install(e,t)}};const Ie={name:"condition-selector",emits:["select-condition"],methods:{selectOption(e){this.$emit("select-condition",e)}},components:{Selector:ae}};var qe=function(){var e=this,t=e.$createElement;return(e._self._c||t)("selector",{on:{"select-option":e.selectOption}},[e._t("default")],2)};qe._withStripped=!0;const Be=f({render:qe,staticRenderFns:[]},undefined,Ie,undefined,false,undefined,!1,void 0,void 0,void 0);const je=f({},undefined,{props:{blueprint:{type:Array,required:!1},conditions:{type:Array,required:!1}},provide(){const{blueprintStore:e}=this;return{blueprint:e,builderModeActive:!1}},data(){return{blueprintStore:new L(this.blueprint,this.conditions,(e=>{this.$emit("change",e)}))}},render(){const{blueprintStore:e}=this;let t=this.$slots?.default;return vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2&&(t=this.$scopedSlots?.default),t?t({blueprint:e}):null}},undefined,undefined,undefined,!1,void 0,void 0,void 0);const Ee={name:"clause",props:{input:{type:Object,default:()=>({})},meta:{type:Object,required:!0}},emits:["switch-clause"],methods:{switchClause:function({selectedOption:e}){this.$emit("switch-clause",e)}},components:{RenderlessClause:ce,SelectorOption:me,Selector:ae,...ke}};var Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("renderless-clause",e._b({scopedSlots:e._u([{key:"default",fn:function(t){var i=t.setValue;return[n("selector",{attrs:{innerClass:"refine-clause-selector"},on:{"select-option":e.switchClause}},e._l(e.meta.clauses,(function(t){var r=t.id,o=t.display,s=t.component,l=t.meta;return n("selector-option",{key:r,attrs:{id:r,display:o,selected:e.input.clause===r}},[s?n(s,e._b({tag:"component",on:{input:i}},"component",Object.assign({},e.meta,l,e.input),!1)):e._e()],1)})),1)]}}])},"renderless-clause",e.input,!1))};Fe._withStripped=!0;const Ae=f({render:Fe,staticRenderFns:[]},undefined,Ee,undefined,false,undefined,!1,void 0,void 0,void 0);const De={name:"refinements",inject:["updateInput","switchRefinement"],components:{Clause:Ae,RenderlessRefinement:pe,Selector:ae,SelectorOption:me},props:{refinements:{required:!0,type:Array},input:{required:!1,type:Object,default:()=>({})}},methods:{selectedRefinementId(){let e;return this.refinements.forEach((({id:t})=>{this.input[t]&&(e=t)})),e},selectRefinement({selectedOption:e}){const{id:t}=e;this.switchRefinement(this.selectedRefinementId(),t)}}};var Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("selector",{on:{"select-option":e.selectRefinement}},e._l(e.refinements,(function(t){var i=t.id,r=t.meta,o=t.display;return n("selector-option",{key:i,attrs:{id:i,display:o,selected:!!e.input[i]}},[n("renderless-refinement",{attrs:{id:i}},[n("clause",{attrs:{meta:r,input:e.input[i]},on:{"switch-clause":function(t){var n=t.id;return e.updateInput({clause:n},i)}}})],1)],1)})),1)};Pe._withStripped=!0;const Ne={name:"criterion",props:{conditions:{required:!0,type:Array},conditionId:{type:String,required:!0},input:{type:Object,required:!0},errors:{type:Array,required:!1,default:()=>[]}},methods:{switchCondition:function({selectedOption:e}){this.conditionId!==e.id&&this.$emit("switch-condition",e)},switchClause:function(e){this.$emit("switch-clause",e)}},components:{Clause:Ae,Refinements:f({render:Pe,staticRenderFns:[]},undefined,De,undefined,false,undefined,!1,void 0,void 0,void 0),SelectorOption:me,Selector:ae,RefineFlavor:p}};var Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("refine-flavor",{attrs:{order:["errors","selector","remove"],as:"div",component:"criterion.wrapper"},scopedSlots:e._u([{key:"errors",fn:function(){return[e.errors.length>0?n("refine-flavor",{attrs:{as:"ul",component:"criterion.errors"}},e._l(e.errors,(function(t){return n("refine-flavor",{key:t,attrs:{as:"li",component:"criterion.errors.error"}},[e._v("\n        "+e._s(t)+"\n      ")])})),1):e._e()]},proxy:!0},{key:"selector",fn:function(){return[n("selector",{on:{"select-option":e.switchCondition}},e._l(e.conditions,(function(t){var i=t.id,r=t.display,o=t.meta,s=t.refinements;return n("selector-option",{key:i,attrs:{id:i,display:r,selected:e.conditionId===i}},[n("div",[n("clause",{attrs:{input:e.input,meta:o},on:{"switch-clause":e.switchClause}}),e._v(" "),s&&s.length>0?n("refinements",{attrs:{input:e.input,refinements:s}}):e._e()],1)])})),1)]},proxy:!0},{key:"remove",fn:function(){return[n("refine-flavor",{attrs:{as:"button",component:"criterion.removeCriterionButton",type:"button"},on:{click:function(t){return t.preventDefault(),e.$emit("remove-condition")}}},[n("refine-flavor",{attrs:{as:"svg",component:"criterion.removeCriterionButton.icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"}})])],1)]},proxy:!0}])})};Ve._withStripped=!0;const Me={name:"query-builder",model:{prop:"blueprint",event:"update:blueprint"},emits:["update:blueprint"],props:{blueprint:{required:!1,type:Array,default:()=>[]},conditions:{required:!0,type:Array},errors:{required:!1,type:Object,default:()=>({})},flavor:{required:!1,type:Object,default:()=>({})}},methods:{templateKey:e=>vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2?{}:{key:e},templateChildKey:e=>vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2?{key:e}:{},onChange(e){this.$emit("update:blueprint",e)}},created(){if(0===this.conditions.length)throw new Error("You must provide at least one condition to the query builder.")},setup(e){var t;t=e.flavor,(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)(d,t)},components:{Criterion:f({render:Ve,staticRenderFns:[]},undefined,Ne,undefined,false,undefined,!1,void 0,void 0,void 0),RefineFlavor:p,RenderlessCondition:ue,RenderlessQueryBuilder:de}};var Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("renderless-query-builder",{attrs:{blueprint:e.blueprint,conditions:e.conditions},on:{change:e.onChange},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.groupedBlueprint,r=t.replaceCriterion,o=t.insertCriterion,s=t.addGroup,l=t.removeCriterion,a=t.conditionFor;return[0===i.length?n("refine-flavor",e._b({attrs:{as:"div",component:"emptyGroup",order:["button","default"]},scopedSlots:e._u([{key:"button",fn:function(){return[n("refine-flavor",{attrs:{as:"button",component:"emptyGroup.addCriterionButton",tabindex:"0",type:"button"},on:{click:s}},[n("refine-flavor",{attrs:{as:"svg",component:"emptyGroup.addCriterionButton.icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"}})]),e._v(" "),n("refine-flavor",{attrs:{as:"span",component:"emptyGroup.addCriterionButton.text"}},[e._v("\n          Add a new condition\n        ")])],1)]},proxy:!0}],null,!0)},"refine-flavor",{addGroup:s},!1)):n("refine-flavor",{attrs:{as:"div",component:"group.wrapper"}},[e._l(i,(function(t,s){return[n("refine-flavor",e._b({attrs:{as:"div",component:"group"}},"refine-flavor",e.templateChildKey("group-"+s),!1),[e._l(t,(function(t){return n("refine-flavor",{key:t.uid,attrs:{as:"div",component:"condition"}},[n("renderless-condition",e._b({scopedSlots:e._u([{key:"default",fn:function(i){var o=i.switchClause;return[n("criterion",{attrs:{conditionId:t.condition_id,conditions:e.conditions,errors:e.errors[t.uid],input:t.input},on:{"switch-clause":function(e){var t=e.id;return o(t)},"remove-condition":function(e){return l(t.position)},"switch-condition":function(e){return r(t.position,a(e))}}})]}}],null,!0)},"renderless-condition",a(Object.assign({},{id:t.condition_id},t)),!1))],1)})),e._v(" "),n("refine-flavor",{attrs:{as:"div",component:"group.addCriterionButton.wrapper"}},[n("refine-flavor",{attrs:{as:"button",component:"group.addCriterionButton",tabindex:"0",type:"button"},on:{click:function(e){return o(t[t.length-1].position)}}},[n("refine-flavor",{attrs:{as:"svg",component:"group.addCriterionButton.icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"}})]),e._v(" "),n("refine-flavor",{attrs:{as:"span",component:"group.addCriterionButton.text"}},[e._v(" And")])],1)],1)],2),e._v(" "),n("refine-flavor",e._b({attrs:{as:"template",component:"group.divider",index:s,total:i.length}},"refine-flavor",e.templateChildKey("separator-"+s),!1))]})),e._v(" "),n("refine-flavor",{attrs:{as:"button",component:"addGroupButton",type:"button"},on:{click:s}},[e._v("\n      Add an 'Or'\n    ")])],2)]}}])})};Te._withStripped=!0;const Le=f({render:Te,staticRenderFns:[]},undefined,Me,undefined,false,undefined,!1,void 0,void 0,void 0),Ge="bg-white relative border border-gray-300 rounded-md shadow-sm text-left cursor-default",ze="focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",He=`${Ge} ${ze} w-60 pl-3 py-2`,Ke={emptyGroup:{class:"",wrapper:"space-y-4",addCriterionButton:{class:"flex items-center rounded text-sm text-gray-600",icon:"h-4 w-4",wrapper:{},text:{}}},group:{class:"flex flex-col gap-4 bg-gray-100 px-4 py-8 rounded-lg border-l-4 overflow-hidden",wrapper:"space-y-4",addCriterionButton:{class:"flex items-center rounded text-sm text-gray-600",wrapper:{},icon:"h-4 w-4",text:{}}},addGroupButton:"px-2 py-1 bg-blue-500 text-white rounded",criterion:{wrapper:{class:"flex flex-wrap gap-x-2 gap-y-4",order:["errors","selector","remove"]},removeCriterionButton:{class:"rounded-full bg-gray-200 w-10 h-10 text-gray-600 flex items-center justify-center ml-auto",icon:"h-5 w-5"},errors:{class:"flex-1 basis-full bg-red-50 border-l-2 border-red-600 text-red-300 px-4 py-2 rounded list-disc list-inside",error:"text-red-600 font-semibold"}},select:{class:"sm:inline-block w-60",wrapper:"flex items-start gap-4",customOptions:{class:"",wrapper:"w-auto pt-4 md:flex md:pt-0"},listbox:{class:e=>e.isClosed?"hidden":"text-base rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none",wrapper:"overflow-hidden absolute z-10 mt-1 bg-white rounded-md shadow-lg",item:{class:e=>"relative py-2 pl-3 cursor-pointer select-none pr-9 "+(e.isHighlighted?"text-white bg-blue-600":"text-gray-900"),text:{class:e=>{e.selected}},icon:{class:"w-5 h-5",wrapper:e=>"absolute inset-y-0 right-0 flex items-center pr-4 "+(e.isHighlighted?"text-white":"text-blue-600")}}},button:{class:"relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default; focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"block text-gray-300 truncate select-none",selected:"block truncate",icon:{class:"w-5 h-5 text-gray-400",wrapper:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"}},multi:{button:{class:"relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"block text-gray-300 truncate select-none",selected:"inline-flex p-1 mr-1 border border-gray-300 rounded",deselect:{icon:{class:"w-4 h-4",wrapper:"flex items-center ml-1 text-gray-500 cursor-pointer"}},icon:{class:"w-5 h-5 text-gray-400",wrapper:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"}}}},inputs:{date:{class:`${Ge} ${ze} h-9 py-5 px-2 leading-normal box-border`,relative:{class:`${He} mr-4`,wrapper:"flex mr-4"},double:{wrapper:"flex items-center gap-[1ch]",joiner:{}}},number:{class:He,double:{wrapper:"flex items-center gap-[1ch]",joiner:{}}},text:He}},Ue="bg-white relative text-left cursor-default",Qe=`${Ue} focus:outline-none pl-3 py-1`,We={emptyGroup:{class:"",wrapper:{class:"space-y-4"},addCriterionButton:{class:"flex items-center rounded text-sm text-gray-400 hover:bg-gray-100",wrapper:{},icon:{class:"h-4 w-4"},text:{}}},group:{class:"flex flex-wrap items-center gap-y-2",wrapper:{class:""},addCriterionButton:{wrapper:{},class:"flex items-center p-1 text-gray-100 hover:bg-gray-100 rounded",icon:{class:"h-6 w-6 text-gray-400"},text:{class:"hidden"}}},addGroupButton:{class:"hidden"},criterion:{wrapper:{component:"linear-criterion-row",order:["errors","selector","remove"],class:"mr-4"},removeCriterionButton:{class:"px-3 hover:bg-gray-100 text-gray-400 flex items-center justify-center",icon:{class:"h-4 w-4"}},errors:{class:"hidden",error:{class:"hidden"}}},select:{class:"relative sm:inline-block",wrapper:{class:"flex items-start"},customOptions:{class:"",wrapper:{class:"w-auto pt-4 md:flex md:pt-0"}},listbox:{class:e=>e.isClosed?"hidden":"overflow-auto text-base rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none",wrapper:{class:"absolute w-48 z-10 mt-1 bg-white rounded-md shadow-lg"},item:{class:e=>"relative py-1 border-b border-gray-100 pl-3 cursor-pointer select-none pr-9 "+(e.isHighlighted?"text-white bg-blue-600":"text-gray-900"),text:{class:e=>"block truncate "+(e.selected?"font-semibold":"font-normal")},icon:{class:"w-5 h-5",wrapper:{class:e=>"absolute inset-y-0 right-0 flex items-center pr-4 "+(e.isHighlighted?"text-white":"text-blue-600")}}}},button:{class:"relative w-full py-1 px-3 text-left bg-white cursor-default hover:bg-gray-100",placeholder:{class:"block text-gray-300 truncate select-none"},selected:{class:"block truncate"},icon:{class:"w-5 h-5 text-gray-300",wrapper:{class:"hidden absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"}}},multi:{button:{class:"relative w-full py-1 pl-3 pr-10 text-left bg-white cursor-default focus:outline-none",placeholder:{class:"block text-gray-300 truncate select-none"},selected:{class:"inline-flex mr-2 "},deselect:{icon:{class:"hidden w-4 h-4",wrapper:{class:"hidden flex items-center ml-1 text-gray-300 cursor-pointer"}}},icon:{class:"w-5 h-5 text-gray-300",wrapper:{class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"}}}}},inputs:{date:{pickerInput:{class:`${Ue} focus:outline-none block w-full pl-3 py-1 pr-0`},relative:{class:`${Qe} w-12`,wrapper:{class:"flex mr-4"}},double:{wrapper:{class:"flex items-center gap-[1ch]"},joiner:{}}},number:{class:`${Qe} w-14`,double:{wrapper:{class:"flex items-center gap-[1ch]"},joiner:{}}},text:{class:Qe}}};
//# sourceMappingURL=refine-vue.esm.js.map


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hammerstone_refine_vue2_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hammerstone/refine-vue2-dev */ "./node_modules/@hammerstone/refine-vue2-dev/dist/vue2/refine-vue.esm.js");
/* harmony import */ var _flavors_nova__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flavors/nova */ "./resources/js/flavors/nova.js");
/* harmony import */ var _SlideDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideDown */ "./resources/js/components/SlideDown.vue");
/* harmony import */ var store2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store2 */ "./node_modules/store2/dist/store2.js");
/* harmony import */ var store2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store2__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['card', 'resourceName'],
  components: {
    SlideDown: _SlideDown__WEBPACK_IMPORTED_MODULE_2__["default"],
    QueryBuilder: _hammerstone_refine_vue2_dev__WEBPACK_IMPORTED_MODULE_0__.QueryBuilder
  },
  data: function data() {
    var filter = _.toPlainObject(this.card.filter);

    return {
      flavor: _flavors_nova__WEBPACK_IMPORTED_MODULE_1__["default"],
      errors: {},
      lastAppliedBlueprint: filter.blueprint,
      collapsed: store2__WEBPACK_IMPORTED_MODULE_3___default().get('refine-collapsed', false),
      filter: filter
    };
  },
  created: function created() {
    var _this = this;

    Nova.$on('validation-error', function (response) {
      var _response$data;

      if (response === false) {
        return;
      }

      var errors = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.errors;

      if (!errors) {
        return;
      }

      var rebuilt = {};
      Object.keys(errors).map(function (k) {
        var uid = k.split('.')[0];
        rebuilt[uid] = [].concat(_toConsumableArray(rebuilt[uid] || []), _toConsumableArray(errors[k]));
      });
      _this.errors = rebuilt;
    });
  },
  mounted: function mounted() {
    // When the page initially loads, we only want to update from
    // the stable ID if there is an ID. Otherwise we will just
    // show the blueprint that the backend has provided.
    var id = _.get(this, "$route.query.".concat(this.refineParameterName));

    if (id) {
      this.updateBlueprintFromStableId(id);
    }
  },
  computed: {
    refineParameterName: function refineParameterName() {
      return "".concat(this.resourceName, "_refine");
    },
    collapsedText: function collapsedText() {
      return this.calculateCollapsedText(this.lastAppliedBlueprint);
    }
  },
  watch: {
    $route: function $route(to, from) {
      if (to.query[this.refineParameterName] !== from.query[this.refineParameterName]) {
        this.updateBlueprintFromStableId(to.query[this.refineParameterName], true);
      }
    },
    collapsed: function collapsed(val) {
      store2__WEBPACK_IMPORTED_MODULE_3___default().set('refine-collapsed', val);
    }
  },
  methods: {
    updateBlueprintFromStableId: function updateBlueprintFromStableId(id) {
      var _this2 = this;

      var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.errors = {};
      Nova.request().post('/nova-vendor/refine-nova/destabilize', {
        id: id
      }).then(function (_ref) {
        var data = _ref.data;

        // Without this here, the clauses in a condition won't change on
        // back/next navigation. I'll need to have Sean or Jeff look
        // more closely at the blueprint store to figure out why.
        _this2.$nextTick(function () {
          _this2.lastAppliedBlueprint = data.blueprint;
          _this2.filter.blueprint = data.blueprint;
        });

        if (refresh) {
          Nova.$emit('refresh-resources');
        }
      });
    },
    calculateCollapsedText: function calculateCollapsedText(blueprint) {
      var count = blueprint.filter(function (item) {
        return item.type === 'criterion';
      }).length;

      if (count === 0) {
        return 'No filter conditions applied.';
      }

      if (count === 1) {
        return '1 filter condition applied.';
      }

      return "".concat(count, " filter conditions applied.");
    },
    submit: function submit() {
      var _this3 = this;

      Nova.request() // Because of the way Nova works, we have to make a round trip to
      // stabilize the blueprint, and then pop it in the querystring.
      .post('/nova-vendor/refine-nova/stabilize', {
        type: this.filter.type,
        blueprint: this.filter.blueprint
      }).then(function (_ref2) {
        var _this3$updateQueryStr;

        var data = _ref2.data;

        // Put the new stable id in the querystring, and then the router will take over.
        _this3.updateQueryString((_this3$updateQueryStr = {}, _defineProperty(_this3$updateQueryStr, "".concat(_this3.resourceName, "_page"), 1), _defineProperty(_this3$updateQueryStr, _this3.refineParameterName, data.id), _this3$updateQueryStr));
      });
    },
    updateQueryString: function updateQueryString(value) {
      this.$router.push({
        query: _.defaults(value, this.$route.query)
      })["catch"](function (error) {
        if (error.name != 'NavigationDuplicated') {
          throw error;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    date: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false,
      "default": new Date().toISOString().split('T')[0]
    }
  },
  methods: {
    handleChange: function handleChange(value) {
      this.$emit('input', {
        value: value
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OrButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OrButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroIconPlus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroIconPlus */ "./resources/js/components/HeroIconPlus.vue");
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: true,
  components: {
    HeroiconPlus: _HeroIconPlus__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SlideDown.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SlideDown.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    show: {
      required: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      animating: false,
      open: null
    };
  },
  created: function created() {
    this.open = this.show;
  },
  methods: {
    outerHeight: function outerHeight(el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height += parseInt(style.marginTop) + parseInt(style.marginBottom);
      return height;
    },
    beforeEnter: function beforeEnter() {
      this.$refs.wrapper.style.overflowY = 'hidden';
      this.$refs.wrapper.style.height = '0px';
    },
    beforeLeave: function beforeLeave() {
      this.$refs.wrapper.style.height = this.outerHeight(this.$refs.wrapper) + 'px';
      this.$refs.wrapper.style.overflowY = 'hidden';
    },
    enter: function enter(arg1, arg2) {
      var _this = this;

      var done =  true ? arg1 : 0;
      this.$nextTick(function () {
        return _this.animate(true, +Date.now(), done);
      });
    },
    leave: function leave(arg1, arg2) {
      var _this2 = this;

      var done =  true ? arg1 : 0;
      this.$nextTick(function () {
        return _this2.animate(false, +Date.now(), done);
      });
    },
    animate: function animate(growing, start, done) {
      var _this3 = this;

      this.animating = true;
      var elapsedMs = +Date.now() - start;
      var progress = Math.min(elapsedMs / 350, 1); // https://gist.github.com/gre/1650294

      var factor = function (t) {
        return t * t * t;
      }(progress);

      var original = growing ? 0 : this.outerHeight(this.$refs.wrapper.children.item(0));
      var destination = growing ? this.outerHeight(this.$refs.wrapper.children.item(0)) : 0;
      var height = original + (destination - original) * factor;
      this.$refs.wrapper.style.height = height + 'px';

      if (progress === 1) {
        if (growing) {
          this.$refs.wrapper.style.height = null;
          this.$refs.wrapper.style.overflowY = null;
        }

        this.animating = false;
        this.open = growing;
        return done();
      }

      requestAnimationFrame(function () {
        _this3.animate(growing, start, done);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/card.js":
/*!******************************!*\
  !*** ./resources/js/card.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Card */ "./resources/js/components/Card.vue");
/* harmony import */ var _hammerstone_refine_vue2_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hammerstone/refine-vue2-dev */ "./node_modules/@hammerstone/refine-vue2-dev/dist/vue2/refine-vue.esm.js");
/* harmony import */ var _components_DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DatePicker */ "./resources/js/components/DatePicker.vue");
/* harmony import */ var _components_OrButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/OrButton */ "./resources/js/components/OrButton.vue");
/* harmony import */ var _components_GroupDivider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/GroupDivider */ "./resources/js/components/GroupDivider.vue");


 // Custom components for Nova 3.




Nova.booting(function (Vue, router) {
  // Turn on for to get the Devtools to show up.
  // Vue.config.devtools = true;
  // __VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue
  // Required for Refine Vue2 to work.
  Vue.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Vue.use(_hammerstone_refine_vue2_dev__WEBPACK_IMPORTED_MODULE_1__.RefinePlugin); // Custom components for our Nova flavor.

  Vue.component('refine-custom-or-button', _components_OrButton__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Vue.component('refine-custom-group-divider', _components_GroupDivider__WEBPACK_IMPORTED_MODULE_4__["default"]);
  Vue.component('refine-custom-date-picker', _components_DatePicker__WEBPACK_IMPORTED_MODULE_2__["default"]); // Main card.

  Vue.component('refine-nova', _components_Card__WEBPACK_IMPORTED_MODULE_0__["default"]);
  attachInterceptors(router);
});

function attachInterceptors(router) {
  // Add a request interceptor so that we can add our Refine query params.
  Nova.request().interceptors.request.use(function (config) {
    // Instead of checking route patterns, just piggyback onto
    // any request where the filters are included, because
    // we'll want to Refine all of those requests.
    if (_.has(config, 'params.filters')) {
      for (var param in router.currentRoute.query) {
        // Add every query param that ends in _refine, because
        // each resource will start with something different,
        // but they all end in _refine.
        if (_.endsWith(param, '_refine')) {
          config.params[param] = router.currentRoute.query[param];
        }
      }
    }

    return config;
  }); // Add a response interceptor so we can catch validation errors.

  Nova.request().interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response && error.response.status === 422) {
      // Emit an event with the error data over to our Card
      // component and then let the rejection fall through.
      Nova.$emit('validation-error', error.response);
    }

    return Promise.reject(error);
  });
}

/***/ }),

/***/ "./resources/js/flavors/nova.js":
/*!**************************************!*\
  !*** ./resources/js/flavors/nova.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var novaFlavor = {
  emptyGroup: {
    "class": 'border rounded-lg shadow border-50 p-2 text-80 bg-white flex items-center justify-between text-sm mb-4',
    wrapper: 'border rounded-lg shadow border-50 p-2 text-80 bg-white flex items-center justify-between text-sm mb-4',
    addCriterionButton: {
      "class": 'text-sm flex items-center p-2',
      wrapper: {},
      icon: 'text-80 h-4 w-4',
      text: 'pt-px text-80'
    }
  },
  group: {
    "class": 'border rounded-lg shadow border-50',
    wrapper: '',
    divider: {
      component: 'refine-custom-group-divider',
      // Dont show the divider on the last iteration
      "class": function _class(_ref) {
        var index = _ref.index,
            total = _ref.total;
        return index === total - 1 ? 'hidden' : 'flex';
      }
    },
    addCriterionButton: {
      "class": 'text-80 flex items-center',
      wrapper: 'text-sm flex items-center p-2',
      icon: 'h-4 w-4 -mt-px',
      text: 'mt-px'
    }
  },
  addGroupButton: {
    "class": 'text-sm flex items-center p-2 text-80',
    // Use a custom component, because the default is inexplicably bad.
    component: 'refine-custom-or-button'
  },
  condition: 'first:rounded-t-lg bg-white w-full',
  criterion: {
    wrapper: {
      order: ['errors', 'selector', 'remove'],
      "class": 'flex border-b border-50 py-3 pl-2 '
    },
    removeCriterionButton: {
      "class": 'ml-auto py-2 px-4 flex items-center text-60',
      icon: 'h-5 w-5'
    },
    errors: {
      "class": 'flex-1 basis-full bg-red-50 border-l-2 border-red-600 text-red-300 px-4 py-2 rounded list-disc list-inside',
      error: 'text-red-600 font-semibold'
    }
  },
  select: {
    "class": 'relative sm:inline-block w-48 mr-4',
    wrapper: 'flex items-start gap-4',
    customOptions: {
      "class": '',
      wrapper: 'w-auto pt-4 md:flex md:pt-0'
    },
    listbox: {
      "class": function _class(_ref2) {
        var isClosed = _ref2.isClosed;
        return isClosed ? 'hidden' : 'max-h-60 shadow list-reset border border-50 rounded-lg overflow-auto';
      },
      wrapper: 'absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg',
      item: {
        "class": function _class(_ref3) {
          var isHighlighted = _ref3.isHighlighted;
          return "py-2 pr-8 pl-3 relative cursor-pointer select-none ".concat(isHighlighted ? 'bg-primary text-white' : '');
        },
        text: function text(options) {
          return "block truncate ".concat(options.selected ? 'font-semibold' : 'font-normal');
        },
        icon: {
          "class": 'w-5 h-5',
          wrapper: function wrapper(options) {
            return "absolute pin-t pin-b pin-r flex items-center pr-4 ".concat(options.isHighlighted ? 'text-white' : 'text-blue-600');
          }
        }
      }
    },
    button: {
      "class": 'form-control form-select w-full text-left',
      placeholder: 'block text-gray-300 truncate select-none',
      selected: 'block truncate',
      icon: {
        "class": 'hidden',
        wrapper: 'hidden'
      }
    },
    multi: {
      button: {
        "class": 'form-control form-select w-full text-left flex items-center overflow-x-auto',
        placeholder: 'block text-gray-300 truncate select-none',
        selected: 'inline-flex mr-1 rounded border border-50 p-1 text-sm',
        icon: {
          "class": 'hidden',
          wrapper: 'hidden'
        },
        deselect: {
          icon: {
            "class": 'w-4 h-4',
            wrapper: 'flex items-center ml-1 text-gray-500 cursor-pointer'
          }
        }
      }
    }
  },
  inputs: {
    date: {
      component: 'refine-custom-date-picker',
      relative: {
        "class": "form-control form-input form-input-bordered mr-4",
        wrapper: 'flex mr-4'
      },
      "double": {
        wrapper: 'flex items-center gap-[1ch]',
        joiner: 'mx-2'
      }
    },
    number: {
      "class": 'form-control form-input form-input-bordered',
      "double": {
        wrapper: 'flex items-center gap-[1ch]',
        joiner: 'ml-2 mr-2'
      }
    },
    text: 'form-control form-input form-input-bordered'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (novaFlavor);

/***/ }),

/***/ "./resources/css/card.css":
/*!********************************!*\
  !*** ./resources/css/card.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/store2/dist/store2.js":
/*!********************************************!*\
  !*** ./node_modules/store2/dist/store2.js ***!
  \********************************************/
/***/ (function(module) {

/*! store2 - v2.13.1 - 2021-12-20
* Copyright (c) 2021 Nathan Bubna; Licensed (MIT OR GPL-3.0) */
;(function(window, define) {
    var _ = {
        version: "2.13.1",
        areas: {},
        apis: {},

        // utilities
        inherit: function(api, o) {
            for (var p in api) {
                if (!o.hasOwnProperty(p)) {
                    Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(api, p));
                }
            }
            return o;
        },
        stringify: function(d, fn) {
            return d === undefined || typeof d === "function" ? d+'' : JSON.stringify(d,fn||_.replace);
        },
        parse: function(s, fn) {
            // if it doesn't parse, return as is
            try{ return JSON.parse(s,fn||_.revive); }catch(e){ return s; }
        },

        // extension hooks
        fn: function(name, fn) {
            _.storeAPI[name] = fn;
            for (var api in _.apis) {
                _.apis[api][name] = fn;
            }
        },
        get: function(area, key){ return area.getItem(key); },
        set: function(area, key, string){ area.setItem(key, string); },
        remove: function(area, key){ area.removeItem(key); },
        key: function(area, i){ return area.key(i); },
        length: function(area){ return area.length; },
        clear: function(area){ area.clear(); },

        // core functions
        Store: function(id, area, namespace) {
            var store = _.inherit(_.storeAPI, function(key, data, overwrite) {
                if (arguments.length === 0){ return store.getAll(); }
                if (typeof data === "function"){ return store.transact(key, data, overwrite); }// fn=data, alt=overwrite
                if (data !== undefined){ return store.set(key, data, overwrite); }
                if (typeof key === "string" || typeof key === "number"){ return store.get(key); }
                if (typeof key === "function"){ return store.each(key); }
                if (!key){ return store.clear(); }
                return store.setAll(key, data);// overwrite=data, data=key
            });
            store._id = id;
            try {
                var testKey = '__store2_test';
                area.setItem(testKey, 'ok');
                store._area = area;
                area.removeItem(testKey);
            } catch (e) {
                store._area = _.storage('fake');
            }
            store._ns = namespace || '';
            if (!_.areas[id]) {
                _.areas[id] = store._area;
            }
            if (!_.apis[store._ns+store._id]) {
                _.apis[store._ns+store._id] = store;
            }
            return store;
        },
        storeAPI: {
            // admin functions
            area: function(id, area) {
                var store = this[id];
                if (!store || !store.area) {
                    store = _.Store(id, area, this._ns);//new area-specific api in this namespace
                    if (!this[id]){ this[id] = store; }
                }
                return store;
            },
            namespace: function(namespace, singleArea) {
                if (!namespace){
                    return this._ns ? this._ns.substring(0,this._ns.length-1) : '';
                }
                var ns = namespace, store = this[ns];
                if (!store || !store.namespace) {
                    store = _.Store(this._id, this._area, this._ns+ns+'.');//new namespaced api
                    if (!this[ns]){ this[ns] = store; }
                    if (!singleArea) {
                        for (var name in _.areas) {
                            store.area(name, _.areas[name]);
                        }
                    }
                }
                return store;
            },
            isFake: function(force) {
                if (force) {
                    this._real = this._area;
                    this._area = _.storage('fake');
                } else if (force === false) {
                    this._area = this._real || this._area;
                }
                return this._area.name === 'fake';
            },
            toString: function() {
                return 'store'+(this._ns?'.'+this.namespace():'')+'['+this._id+']';
            },

            // storage functions
            has: function(key) {
                if (this._area.has) {
                    return this._area.has(this._in(key));//extension hook
                }
                return !!(this._in(key) in this._area);
            },
            size: function(){ return this.keys().length; },
            each: function(fn, fill) {// fill is used by keys(fillList) and getAll(fillList))
                for (var i=0, m=_.length(this._area); i<m; i++) {
                    var key = this._out(_.key(this._area, i));
                    if (key !== undefined) {
                        if (fn.call(this, key, this.get(key), fill) === false) {
                            break;
                        }
                    }
                    if (m > _.length(this._area)) { m--; i--; }// in case of removeItem
                }
                return fill || this;
            },
            keys: function(fillList) {
                return this.each(function(k, v, list){ list.push(k); }, fillList || []);
            },
            get: function(key, alt) {
                var s = _.get(this._area, this._in(key)),
                    fn;
                if (typeof alt === "function") {
                    fn = alt;
                    alt = null;
                }
                return s !== null ? _.parse(s, fn) :
                    alt != null ? alt : s;
            },
            getAll: function(fillObj) {
                return this.each(function(k, v, all){ all[k] = v; }, fillObj || {});
            },
            transact: function(key, fn, alt) {
                var val = this.get(key, alt),
                    ret = fn(val);
                this.set(key, ret === undefined ? val : ret);
                return this;
            },
            set: function(key, data, overwrite) {
                var d = this.get(key),
                    replacer;
                if (d != null && overwrite === false) {
                    return data;
                }
                if (typeof overwrite !== "boolean") {
                    replacer = overwrite;
                }
                return _.set(this._area, this._in(key), _.stringify(data, replacer)) || d;
            },
            setAll: function(data, overwrite) {
                var changed, val;
                for (var key in data) {
                    val = data[key];
                    if (this.set(key, val, overwrite) !== val) {
                        changed = true;
                    }
                }
                return changed;
            },
            add: function(key, data, replacer) {
                var d = this.get(key);
                if (d instanceof Array) {
                    data = d.concat(data);
                } else if (d !== null) {
                    var type = typeof d;
                    if (type === typeof data && type === 'object') {
                        for (var k in data) {
                            d[k] = data[k];
                        }
                        data = d;
                    } else {
                        data = d + data;
                    }
                }
                _.set(this._area, this._in(key), _.stringify(data, replacer));
                return data;
            },
            remove: function(key, alt) {
                var d = this.get(key, alt);
                _.remove(this._area, this._in(key));
                return d;
            },
            clear: function() {
                if (!this._ns) {
                    _.clear(this._area);
                } else {
                    this.each(function(k){ _.remove(this._area, this._in(k)); }, 1);
                }
                return this;
            },
            clearAll: function() {
                var area = this._area;
                for (var id in _.areas) {
                    if (_.areas.hasOwnProperty(id)) {
                        this._area = _.areas[id];
                        this.clear();
                    }
                }
                this._area = area;
                return this;
            },

            // internal use functions
            _in: function(k) {
                if (typeof k !== "string"){ k = _.stringify(k); }
                return this._ns ? this._ns + k : k;
            },
            _out: function(k) {
                return this._ns ?
                    k && k.indexOf(this._ns) === 0 ?
                        k.substring(this._ns.length) :
                        undefined : // so each() knows to skip it
                    k;
            }
        },// end _.storeAPI
        storage: function(name) {
            return _.inherit(_.storageAPI, { items: {}, name: name });
        },
        storageAPI: {
            length: 0,
            has: function(k){ return this.items.hasOwnProperty(k); },
            key: function(i) {
                var c = 0;
                for (var k in this.items){
                    if (this.has(k) && i === c++) {
                        return k;
                    }
                }
            },
            setItem: function(k, v) {
                if (!this.has(k)) {
                    this.length++;
                }
                this.items[k] = v;
            },
            removeItem: function(k) {
                if (this.has(k)) {
                    delete this.items[k];
                    this.length--;
                }
            },
            getItem: function(k){ return this.has(k) ? this.items[k] : null; },
            clear: function(){ for (var k in this.items){ this.removeItem(k); } }
        }// end _.storageAPI
    };

    var store =
        // safely set this up (throws error in IE10/32bit mode for local files)
        _.Store("local", (function(){try{ return localStorage; }catch(e){}})());
    store.local = store;// for completeness
    store._ = _;// for extenders and debuggers...
    // safely setup store.session (throws exception in FF for file:/// urls)
    store.area("session", (function(){try{ return sessionStorage; }catch(e){}})());
    store.area("page", _.storage("page"));

    if (typeof define === 'function' && define.amd !== undefined) {
        define('store2', [], function () {
            return store;
        });
    } else if ( true && module.exports) {
        module.exports = store;
    } else {
        // expose the primary store fn to the global object and save conflicts
        if (window.store){ _.conflict = window.store; }
        window.store = store;
    }

})(this, this && this.define);


/***/ }),

/***/ "./resources/js/components/Card.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Card.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=b9bc2c0a& */ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/components/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DatePicker.vue":
/*!************************************************!*\
  !*** ./resources/js/components/DatePicker.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatePicker_vue_vue_type_template_id_fa816ef2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=template&id=fa816ef2& */ "./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&");
/* harmony import */ var _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=script&lang=js& */ "./resources/js/components/DatePicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatePicker_vue_vue_type_template_id_fa816ef2___WEBPACK_IMPORTED_MODULE_0__.render,
  _DatePicker_vue_vue_type_template_id_fa816ef2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DatePicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/GroupDivider.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/GroupDivider.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupDivider_vue_vue_type_template_id_e51b62f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupDivider.vue?vue&type=template&id=e51b62f6& */ "./resources/js/components/GroupDivider.vue?vue&type=template&id=e51b62f6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _GroupDivider_vue_vue_type_template_id_e51b62f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupDivider_vue_vue_type_template_id_e51b62f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GroupDivider.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/HeroIconPlus.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/HeroIconPlus.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroIconPlus_vue_vue_type_template_id_7e2db938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroIconPlus.vue?vue&type=template&id=7e2db938& */ "./resources/js/components/HeroIconPlus.vue?vue&type=template&id=7e2db938&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _HeroIconPlus_vue_vue_type_template_id_7e2db938___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeroIconPlus_vue_vue_type_template_id_7e2db938___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HeroIconPlus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/OrButton.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/OrButton.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrButton_vue_vue_type_template_id_4a3e7de0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrButton.vue?vue&type=template&id=4a3e7de0& */ "./resources/js/components/OrButton.vue?vue&type=template&id=4a3e7de0&");
/* harmony import */ var _OrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrButton.vue?vue&type=script&lang=js& */ "./resources/js/components/OrButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrButton_vue_vue_type_template_id_4a3e7de0___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrButton_vue_vue_type_template_id_4a3e7de0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OrButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SlideDown.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/SlideDown.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SlideDown_vue_vue_type_template_id_301fe2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlideDown.vue?vue&type=template&id=301fe2d0& */ "./resources/js/components/SlideDown.vue?vue&type=template&id=301fe2d0&");
/* harmony import */ var _SlideDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlideDown.vue?vue&type=script&lang=js& */ "./resources/js/components/SlideDown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SlideDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SlideDown_vue_vue_type_template_id_301fe2d0___WEBPACK_IMPORTED_MODULE_0__.render,
  _SlideDown_vue_vue_type_template_id_301fe2d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SlideDown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DatePicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DatePicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OrButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/OrButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OrButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SlideDown.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/SlideDown.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SlideDown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SlideDown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=b9bc2c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&");


/***/ }),

/***/ "./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_fa816ef2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_fa816ef2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_fa816ef2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=template&id=fa816ef2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&");


/***/ }),

/***/ "./resources/js/components/GroupDivider.vue?vue&type=template&id=e51b62f6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/GroupDivider.vue?vue&type=template&id=e51b62f6& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDivider_vue_vue_type_template_id_e51b62f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDivider_vue_vue_type_template_id_e51b62f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupDivider_vue_vue_type_template_id_e51b62f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupDivider.vue?vue&type=template&id=e51b62f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GroupDivider.vue?vue&type=template&id=e51b62f6&");


/***/ }),

/***/ "./resources/js/components/HeroIconPlus.vue?vue&type=template&id=7e2db938&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/HeroIconPlus.vue?vue&type=template&id=7e2db938& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroIconPlus_vue_vue_type_template_id_7e2db938___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroIconPlus_vue_vue_type_template_id_7e2db938___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroIconPlus_vue_vue_type_template_id_7e2db938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroIconPlus.vue?vue&type=template&id=7e2db938& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeroIconPlus.vue?vue&type=template&id=7e2db938&");


/***/ }),

/***/ "./resources/js/components/OrButton.vue?vue&type=template&id=4a3e7de0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/OrButton.vue?vue&type=template&id=4a3e7de0& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrButton_vue_vue_type_template_id_4a3e7de0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrButton_vue_vue_type_template_id_4a3e7de0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrButton_vue_vue_type_template_id_4a3e7de0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrButton.vue?vue&type=template&id=4a3e7de0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OrButton.vue?vue&type=template&id=4a3e7de0&");


/***/ }),

/***/ "./resources/js/components/SlideDown.vue?vue&type=template&id=301fe2d0&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SlideDown.vue?vue&type=template&id=301fe2d0& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDown_vue_vue_type_template_id_301fe2d0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDown_vue_vue_type_template_id_301fe2d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideDown_vue_vue_type_template_id_301fe2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SlideDown.vue?vue&type=template&id=301fe2d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SlideDown.vue?vue&type=template&id=301fe2d0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("slide-down", { attrs: { show: !_vm.collapsed } }, [
        _c(
          "div",
          [
            _c("query-builder", {
              attrs: {
                errors: _vm.errors,
                conditions: _vm.filter.conditions,
                flavor: _vm.flavor,
              },
              nativeOn: {
                keydown: function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.submit.apply(null, arguments)
                },
              },
              model: {
                value: _vm.filter.blueprint,
                callback: function ($$v) {
                  _vm.$set(_vm.filter, "blueprint", $$v)
                },
                expression: "filter.blueprint",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _c(
                "button",
                {
                  staticClass: "text-sm mr-6 text-80",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      _vm.collapsed = !_vm.collapsed
                    },
                  },
                },
                [_vm._v("Collapse")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default btn-primary",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Filter")]
              ),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("slide-down", { attrs: { show: _vm.collapsed } }, [
        _c(
          "div",
          {
            staticClass:
              "border rounded-lg shadow border-50 p-4 text-80 bg-white flex items-center justify-between text-sm",
          },
          [
            _c("div", [_vm._v(_vm._s(_vm.collapsedText))]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "text-80",
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    _vm.collapsed = !_vm.collapsed
                  },
                },
              },
              [_vm._v("Expand Filter")]
            ),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("date-time-picker", {
    staticClass: "w-full form-control form-input form-input-bordered",
    attrs: {
      autocomplete: "off",
      value: _vm.date,
      "alt-format": "Y-m-d",
      "date-format": "Y-m-d",
      placeholder: _vm.placeholder,
      "enable-time": false,
      "enable-seconds": false,
    },
    on: {
      input: function ($event) {
        $event.preventDefault()
      },
      change: _vm.handleChange,
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GroupDivider.vue?vue&type=template&id=e51b62f6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/GroupDivider.vue?vue&type=template&id=e51b62f6& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "my-2 text-80 items-center" }, [
    _c("div", { staticClass: "border-t w-4 border-60" }),
    _vm._v(" "),
    _c("div", { staticClass: "mx-2 text-sm" }, [_vm._v(_vm._s(_vm.__("Or")))]),
    _vm._v(" "),
    _c("div", { staticClass: "border-t w-full border-60 mr-1" }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeroIconPlus.vue?vue&type=template&id=7e2db938&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeroIconPlus.vue?vue&type=template&id=7e2db938& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "h-4 w-4 -mt-px text-80",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
    },
    [
      _c("path", {
        attrs: {
          "fill-rule": "evenodd",
          d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
          "clip-rule": "evenodd",
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OrButton.vue?vue&type=template&id=4a3e7de0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/OrButton.vue?vue&type=template&id=4a3e7de0& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    _vm._g({}, _vm.$listeners),
    [
      _c("heroicon-plus"),
      _vm._v(" "),
      _c("span", { staticClass: "pt-px" }, [_vm._v(_vm._s(_vm.__("Or")))]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SlideDown.vue?vue&type=template&id=301fe2d0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SlideDown.vue?vue&type=template&id=301fe2d0& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      on: {
        "before-enter": _vm.beforeEnter,
        "before-leave": _vm.beforeLeave,
        enter: _vm.enter,
        leave: _vm.leave,
      },
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show",
            },
          ],
          ref: "wrapper",
        },
        [_vm._t("default")],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "vue":
/*!**********************************!*\
  !*** external "{use: () => {}}" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = {use: () => {}};

/***/ }),

/***/ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* binding */ EffectScope),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createRef": () => (/* binding */ createRef),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "default": () => (/* binding */ Plugin),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "effectScope": () => (/* binding */ effectScope),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* binding */ getCurrentScope),
/* harmony export */   "h": () => (/* binding */ createElement),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isRaw": () => (/* binding */ isRaw),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onScopeDispose": () => (/* binding */ onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "set": () => (/* binding */ set$1),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref),
/* harmony export */   "useAttrs": () => (/* binding */ useAttrs),
/* harmony export */   "useCSSModule": () => (/* binding */ useCSSModule),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useSlots": () => (/* binding */ useSlots),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* binding */ warn$1),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "watchPostEffect": () => (/* binding */ watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* binding */ watchSyncEffect)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * Displays a warning message (using console.error) with a stack trace if the
 * function is called inside of active component.
 *
 * @param message warning message to be displayed
 */
function warn$1(message) {
    var _a;
    warn(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
}

var activeEffectScope;
var effectScopeStack = [];
var EffectScopeImpl = /** @class */ (function () {
    function EffectScopeImpl(vm) {
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        this.vm = vm;
    }
    EffectScopeImpl.prototype.run = function (fn) {
        if (this.active) {
            try {
                this.on();
                return fn();
            }
            finally {
                this.off();
            }
        }
        else if ((true)) {
            warn$1("cannot run an inactive effect scope.");
        }
        return;
    };
    EffectScopeImpl.prototype.on = function () {
        if (this.active) {
            effectScopeStack.push(this);
            activeEffectScope = this;
        }
    };
    EffectScopeImpl.prototype.off = function () {
        if (this.active) {
            effectScopeStack.pop();
            activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
        }
    };
    EffectScopeImpl.prototype.stop = function () {
        if (this.active) {
            this.vm.$destroy();
            this.effects.forEach(function (e) { return e.stop(); });
            this.cleanups.forEach(function (cleanup) { return cleanup(); });
            this.active = false;
        }
    };
    return EffectScopeImpl;
}());
var EffectScope = /** @class */ (function (_super) {
    __extends(EffectScope, _super);
    function EffectScope(detached) {
        if (detached === void 0) { detached = false; }
        var _this = this;
        var vm = undefined;
        withCurrentInstanceTrackingDisabled(function () {
            vm = defineComponentInstance(getVueConstructor());
        });
        _this = _super.call(this, vm) || this;
        if (!detached) {
            recordEffectScope(_this);
        }
        return _this;
    }
    return EffectScope;
}(EffectScopeImpl));
function recordEffectScope(effect, scope) {
    var _a;
    scope = scope || activeEffectScope;
    if (scope && scope.active) {
        scope.effects.push(effect);
        return;
    }
    // destroy on parent component unmounted
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    vm && vm.$on('hook:destroyed', function () { return effect.stop(); });
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if ((true)) {
        warn$1("onScopeDispose() is called when there is no active effect scope" +
            " to be associated with.");
    }
}
/**
 * @internal
 **/
function getCurrentScopeVM() {
    var _a, _b;
    return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy);
}
/**
 * @internal
 **/
function bindCurrentScopeToVM(vm) {
    if (!vm.scope) {
        var scope_1 = new EffectScopeImpl(vm.proxy);
        vm.scope = scope_1;
        vm.proxy.$on('hook:destroyed', function () { return scope_1.stop(); });
    }
    return vm.scope;
}

var vueDependency = undefined;
try {
    var requiredVue = require('vue');
    if (requiredVue && isVue(requiredVue)) {
        vueDependency = requiredVue;
    }
    else if (requiredVue &&
        'default' in requiredVue &&
        isVue(requiredVue.default)) {
        vueDependency = requiredVue.default;
    }
}
catch (_a) {
    // not available
}
var vueConstructor = null;
var currentInstance = null;
var currentInstanceTracking = true;
var PluginInstalledFlag = '__composition_api_installed__';
function isVue(obj) {
    return obj && isFunction(obj) && obj.name === 'Vue';
}
function isVueRegistered(Vue) {
    // resolve issue: https://github.com/vuejs/composition-api/issues/876#issue-1087619365
    return vueConstructor && hasOwn(Vue, PluginInstalledFlag);
}
function getVueConstructor() {
    if ((true)) {
        assert(vueConstructor, "must call Vue.use(VueCompositionAPI) before using any function.");
    }
    return vueConstructor;
}
// returns registered vue or `vue` dependency
function getRegisteredVueOrDefault() {
    var constructor = vueConstructor || vueDependency;
    if ((true)) {
        assert(constructor, "No vue dependency found.");
    }
    return constructor;
}
function setVueConstructor(Vue) {
    // @ts-ignore
    if (( true) && vueConstructor && Vue.__proto__ !== vueConstructor.__proto__) {
        warn('[vue-composition-api] another instance of Vue installed');
    }
    vueConstructor = Vue;
    Object.defineProperty(Vue, PluginInstalledFlag, {
        configurable: true,
        writable: true,
        value: true,
    });
}
/**
 * For `effectScope` to create instance without populate the current instance
 * @internal
 **/
function withCurrentInstanceTrackingDisabled(fn) {
    var prev = currentInstanceTracking;
    currentInstanceTracking = false;
    try {
        fn();
    }
    finally {
        currentInstanceTracking = prev;
    }
}
function setCurrentInstance(instance) {
    if (!currentInstanceTracking)
        return;
    var prev = currentInstance;
    prev === null || prev === void 0 ? void 0 : prev.scope.off();
    currentInstance = instance;
    currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on();
}
function getCurrentInstance() {
    return currentInstance;
}
var instanceMapCache = new WeakMap();
function toVue3ComponentInstance(vm) {
    if (instanceMapCache.has(vm)) {
        return instanceMapCache.get(vm);
    }
    var instance = {
        proxy: vm,
        update: vm.$forceUpdate,
        type: vm.$options,
        uid: vm._uid,
        // $emit is defined on prototype and it expected to be bound
        emit: vm.$emit.bind(vm),
        parent: null,
        root: null, // to be immediately set
    };
    bindCurrentScopeToVM(instance);
    // map vm.$props =
    var instanceProps = [
        'data',
        'props',
        'attrs',
        'refs',
        'vnode',
        'slots',
    ];
    instanceProps.forEach(function (prop) {
        proxy(instance, prop, {
            get: function () {
                return vm["$".concat(prop)];
            },
        });
    });
    proxy(instance, 'isMounted', {
        get: function () {
            // @ts-expect-error private api
            return vm._isMounted;
        },
    });
    proxy(instance, 'isUnmounted', {
        get: function () {
            // @ts-expect-error private api
            return vm._isDestroyed;
        },
    });
    proxy(instance, 'isDeactivated', {
        get: function () {
            // @ts-expect-error private api
            return vm._inactive;
        },
    });
    proxy(instance, 'emitted', {
        get: function () {
            // @ts-expect-error private api
            return vm._events;
        },
    });
    instanceMapCache.set(vm, instance);
    if (vm.$parent) {
        instance.parent = toVue3ComponentInstance(vm.$parent);
    }
    if (vm.$root) {
        instance.root = toVue3ComponentInstance(vm.$root);
    }
    return instance;
}

var toString = function (x) { return Object.prototype.toString.call(x); };
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var noopFn = function (_) { return _; };
function proxy(target, key, _a) {
    var get = _a.get, set = _a.set;
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: get || noopFn,
        set: set || noopFn,
    });
}
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}
function hasOwn(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
    if (!condition) {
        throw new Error("[vue-composition-api] ".concat(msg));
    }
}
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isArray(x) {
    return Array.isArray(x);
}
var objectToString = Object.prototype.toString;
var toTypeString = function (value) {
    return objectToString.call(value);
};
var isMap = function (val) {
    return toTypeString(val) === '[object Map]';
};
var isSet = function (val) {
    return toTypeString(val) === '[object Set]';
};
var MAX_VALID_ARRAY_LENGTH = 4294967295; // Math.pow(2, 32) - 1
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return (n >= 0 &&
        Math.floor(n) === n &&
        isFinite(val) &&
        n <= MAX_VALID_ARRAY_LENGTH);
}
function isObject(val) {
    return val !== null && typeof val === 'object';
}
function isPlainObject(x) {
    return toString(x) === '[object Object]';
}
function isFunction(x) {
    return typeof x === 'function';
}
function isUndef(v) {
    return v === undefined || v === null;
}
function warn(msg, vm) {
    var Vue = getRegisteredVueOrDefault();
    if (!Vue || !Vue.util)
        console.warn("[vue-composition-api] ".concat(msg));
    else
        Vue.util.warn(msg, vm);
}
function logError(err, vm, info) {
    if ((true)) {
        warn("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
    }
    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}
/**
 * Object.is polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 * */
function isSame(value1, value2) {
    if (value1 === value2) {
        return value1 !== 0 || 1 / value1 === 1 / value2;
    }
    else {
        return value1 !== value1 && value2 !== value2;
    }
}

function getCurrentInstanceForFn(hook, target) {
    target = target || getCurrentInstance();
    if (( true) && !target) {
        warn("".concat(hook, " is called when there is no active component instance to be ") +
            "associated with. " +
            "Lifecycle injection APIs can only be used during execution of setup().");
    }
    return target;
}
function defineComponentInstance(Ctor, options) {
    if (options === void 0) { options = {}; }
    var silent = Ctor.config.silent;
    Ctor.config.silent = true;
    var vm = new Ctor(options);
    Ctor.config.silent = silent;
    return vm;
}
function isComponentInstance(obj) {
    var Vue = getVueConstructor();
    return Vue && obj instanceof Vue;
}
function createSlotProxy(vm, slotName) {
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
            if ((true))
                return warn("slots.".concat(slotName, "() got called outside of the \"render()\" scope"), vm);
            return;
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
    });
}
function resolveSlots(slots, normalSlots) {
    var res;
    if (!slots) {
        res = {};
    }
    else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
    }
    else {
        res = {};
        for (var key in slots) {
            if (slots[key] && key[0] !== '$') {
                res[key] = true;
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key in normalSlots) {
        if (!(key in res)) {
            res[key] = true;
        }
    }
    return res;
}
var vueInternalClasses;
var getVueInternalClasses = function () {
    if (!vueInternalClasses) {
        var vm = defineComponentInstance(getVueConstructor(), {
            computed: {
                value: function () {
                    return 0;
                },
            },
        });
        // to get Watcher class
        var Watcher = vm._computedWatchers.value.constructor;
        // to get Dep class
        var Dep = vm._data.__ob__.dep.constructor;
        vueInternalClasses = {
            Watcher: Watcher,
            Dep: Dep,
        };
        vm.$destroy();
    }
    return vueInternalClasses;
};

function createSymbol(name) {
    return hasSymbol ? Symbol.for(name) : name;
}
var WatcherPreFlushQueueKey = createSymbol('composition-api.preFlushQueue');
var WatcherPostFlushQueueKey = createSymbol('composition-api.postFlushQueue');
// must be a string, symbol key is ignored in reactive
var RefKey = 'composition-api.refKey';

var accessModifiedSet = new WeakMap();
var rawSet = new WeakMap();
var readonlySet = new WeakMap();

/**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */
function set$1(target, key, val) {
    var Vue = getVueConstructor();
    // @ts-expect-error https://github.com/vuejs/vue/pull/12132
    var _a = Vue.util, warn = _a.warn, defineReactive = _a.defineReactive;
    if (( true) && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
    }
    var ob = target.__ob__;
    function ssrMockReactivity() {
        // in SSR, there is no __ob__. Mock for reactivity check
        if (ob && isObject(val) && !hasOwn(val, '__ob__')) {
            mockReactivityDeep(val);
        }
    }
    if (isArray(target)) {
        if (isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            ssrMockReactivity();
            return val;
        }
        else if (key === 'length' && val !== target.length) {
            target.length = val;
            ob === null || ob === void 0 ? void 0 : ob.dep.notify();
            return val;
        }
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        ssrMockReactivity();
        return val;
    }
    if (target._isVue || (ob && ob.vmCount)) {
        ( true) &&
            warn('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    // IMPORTANT: define access control before trigger watcher
    defineAccessControl(target, key, val);
    ssrMockReactivity();
    ob.dep.notify();
    return val;
}

var _isForceTrigger = false;
function isForceTrigger() {
    return _isForceTrigger;
}
function setForceTrigger(v) {
    _isForceTrigger = v;
}

var RefImpl = /** @class */ (function () {
    function RefImpl(_a) {
        var get = _a.get, set = _a.set;
        proxy(this, 'value', {
            get: get,
            set: set,
        });
    }
    return RefImpl;
}());
function createRef(options, isReadonly, isComputed) {
    if (isReadonly === void 0) { isReadonly = false; }
    if (isComputed === void 0) { isComputed = false; }
    var r = new RefImpl(options);
    // add effect to differentiate refs from computed
    if (isComputed)
        r.effect = true;
    // seal the ref, this could prevent ref from being observed
    // It's safe to seal the ref, since we really shouldn't extend it.
    // related issues: #79
    var sealed = Object.seal(r);
    if (isReadonly)
        readonlySet.set(sealed, true);
    return sealed;
}
function ref(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = reactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function isRef(value) {
    return value instanceof RefImpl;
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function toRefs(obj) {
    if (( true) && !isReactive(obj)) {
        warn("toRefs() expects a reactive object but received a plain one.");
    }
    if (!isPlainObject(obj))
        return obj;
    var ret = {};
    for (var key in obj) {
        ret[key] = toRef(obj, key);
    }
    return ret;
}
function customRef(factory) {
    var version = ref(0);
    return createRef(factory(function () { return void version.value; }, function () {
        ++version.value;
    }));
}
function toRef(object, key) {
    if (!(key in object))
        set$1(object, key, undefined);
    var v = object[key];
    if (isRef(v))
        return v;
    return createRef({
        get: function () { return object[key]; },
        set: function (v) { return (object[key] = v); },
    });
}
function shallowRef(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function triggerRef(value) {
    if (!isRef(value))
        return;
    setForceTrigger(true);
    value.value = value.value;
    setForceTrigger(false);
}
function proxyRefs(objectWithRefs) {
    var _a, e_1, _b;
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
    def(value, RefKey, value[RefKey], false);
    var _loop_1 = function (key) {
        proxy(value, key, {
            get: function () {
                if (isRef(value[RefKey][key])) {
                    return value[RefKey][key].value;
                }
                return value[RefKey][key];
            },
            set: function (v) {
                if (isRef(value[RefKey][key])) {
                    return (value[RefKey][key].value = unref(v));
                }
                value[RefKey][key] = unref(v);
            },
        });
    };
    try {
        for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var key = _d.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return value;
}

var SKIPFLAG = '__v_skip';
function isRaw(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]));
}
function isReactive(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]));
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
function setupAccessControl(target) {
    if (!isPlainObject(target) ||
        isRaw(target) ||
        isArray(target) ||
        isRef(target) ||
        isComponentInstance(target) ||
        accessModifiedSet.has(target))
        return;
    accessModifiedSet.set(target, true);
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
    }
}
/**
 * Auto unwrapping when access property
 */
function defineAccessControl(target, key, val) {
    if (key === '__ob__')
        return;
    if (isRaw(target[key]))
        return;
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(target, key);
    if (property) {
        if (property.configurable === false) {
            return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) /* not only have getter */ &&
            arguments.length === 2) {
            val = target[key];
        }
    }
    setupAccessControl(val);
    proxy(target, key, {
        get: function getterHandler() {
            var value = getter ? getter.call(target) : val;
            // if the key is equal to RefKey, skip the unwrap logic
            if (key !== RefKey && isRef(value)) {
                return value.value;
            }
            else {
                return value;
            }
        },
        set: function setterHandler(newVal) {
            if (getter && !setter)
                return;
            // If the key is equal to RefKey, skip the unwrap logic
            // If and only if "value" is ref and "newVal" is not a ref,
            // the assignment should be proxied to "value" ref.
            if (key !== RefKey && isRef(val) && !isRef(newVal)) {
                val.value = newVal;
            }
            else if (setter) {
                setter.call(target, newVal);
                val = newVal;
            }
            else {
                val = newVal;
            }
            setupAccessControl(newVal);
        },
    });
}
function observe(obj) {
    var Vue = getRegisteredVueOrDefault();
    var observed;
    if (Vue.observable) {
        observed = Vue.observable(obj);
    }
    else {
        var vm = defineComponentInstance(Vue, {
            data: {
                $$state: obj,
            },
        });
        observed = vm._data.$$state;
    }
    // in SSR, there is no __ob__. Mock for reactivity check
    if (!hasOwn(observed, '__ob__')) {
        mockReactivityDeep(observed);
    }
    return observed;
}
/**
 * Mock __ob__ for object recursively
 */
function mockReactivityDeep(obj, seen) {
    var e_1, _a;
    if (seen === void 0) { seen = new Set(); }
    if (seen.has(obj) || hasOwn(obj, '__ob__') || !Object.isExtensible(obj))
        return;
    def(obj, '__ob__', mockObserver(obj));
    seen.add(obj);
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = obj[key];
            if (!(isPlainObject(value) || isArray(value)) ||
                isRaw(value) ||
                !Object.isExtensible(value)) {
                continue;
            }
            mockReactivityDeep(value, seen);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function mockObserver(value) {
    if (value === void 0) { value = {}; }
    return {
        value: value,
        dep: {
            notify: noopFn,
            depend: noopFn,
            addSub: noopFn,
            removeSub: noopFn,
        },
    };
}
function createObserver() {
    return observe({}).__ob__;
}
function shallowReactive(obj) {
    var e_2, _a;
    if (!isObject(obj)) {
        if ((true)) {
            warn('"shallowReactive()" must be called on an object.');
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(isArray(obj) ? [] : {});
    var ob = observed.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var setter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false) {
                return "continue";
            }
            getter = property.get;
            setter = property.set;
        }
        proxy(observed, key, {
            get: function getterHandler() {
                var _a;
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.depend();
                return val;
            },
            set: function setterHandler(newVal) {
                var _a;
                if (getter && !setter)
                    return;
                if (!isForceTrigger() && val === newVal)
                    return;
                if (setter) {
                    setter.call(obj, newVal);
                }
                else {
                    val = newVal;
                }
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.notify();
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return observed;
}
/**
 * Make obj reactivity
 */
function reactive(obj) {
    if (!isObject(obj)) {
        if ((true)) {
            warn('"reactive()" must be called on an object.');
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(obj);
    setupAccessControl(observed);
    return observed;
}
/**
 * Make sure obj can't be a reactive
 */
function markRaw(obj) {
    if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
        return obj;
    }
    // set the vue observable flag at obj
    var ob = createObserver();
    ob[SKIPFLAG] = true;
    def(obj, '__ob__', ob);
    // mark as Raw
    rawSet.set(obj, true);
    return obj;
}
function toRaw(observed) {
    var _a;
    if (isRaw(observed) || !Object.isExtensible(observed)) {
        return observed;
    }
    return ((_a = observed === null || observed === void 0 ? void 0 : observed.__ob__) === null || _a === void 0 ? void 0 : _a.value) || observed;
}

function isReadonly(obj) {
    return readonlySet.has(obj);
}
/**
 * **In @vue/composition-api, `reactive` only provides type-level readonly check**
 *
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    if (( true) && !isObject(target)) {
        warn("value cannot be made reactive: ".concat(String(target)));
    }
    else {
        readonlySet.set(target, true);
    }
    return target;
}
function shallowReadonly(obj) {
    var e_1, _a;
    if (!isObject(obj)) {
        if ((true)) {
            warn("value cannot be made reactive: ".concat(String(obj)));
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        (!Object.isExtensible(obj) && !isRef(obj))) {
        return obj;
    }
    var readonlyObj = isRef(obj)
        ? new RefImpl({})
        : isReactive(obj)
            ? observe({})
            : {};
    var source = reactive({});
    var ob = source.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false && !isRef(obj)) {
                return "continue";
            }
            getter = property.get;
        }
        proxy(readonlyObj, key, {
            get: function getterHandler() {
                var value = getter ? getter.call(obj) : val;
                ob.dep.depend();
                return value;
            },
            set: function (v) {
                if ((true)) {
                    warn("Set operation on key \"".concat(key, "\" failed: target is readonly."));
                }
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    readonlySet.set(readonlyObj, true);
    return readonlyObj;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
    var Vue = getVueConstructor();
    var warn = Vue.util.warn;
    if (( true) && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        ( true) &&
            warn('Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.');
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    ob.dep.notify();
}

var genName = function (name) { return "on".concat(name[0].toUpperCase() + name.slice(1)); };
function createLifeCycle(lifeCyclehook) {
    return function (callback, target) {
        var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target);
        return (instance &&
            injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback));
    };
}
function injectHookOption(Vue, instance, hook, val) {
    var options = instance.proxy.$options;
    var mergeFn = Vue.config.optionMergeStrategies[hook];
    var wrappedHook = wrapHookCall(instance, val);
    options[hook] = mergeFn(options[hook], wrappedHook);
    return wrappedHook;
}
function wrapHookCall(instance, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var prev = getCurrentInstance();
        setCurrentInstance(instance);
        try {
            return fn.apply(void 0, __spreadArray([], __read(args), false));
        }
        finally {
            setCurrentInstance(prev);
        }
    };
}
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onErrorCaptured = createLifeCycle('errorCaptured');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');

var fallbackVM;
function flushPreQueue() {
    flushQueue(this, WatcherPreFlushQueueKey);
}
function flushPostQueue() {
    flushQueue(this, WatcherPostFlushQueueKey);
}
function hasWatchEnv(vm) {
    return vm[WatcherPreFlushQueueKey] !== undefined;
}
function installWatchEnv(vm) {
    vm[WatcherPreFlushQueueKey] = [];
    vm[WatcherPostFlushQueueKey] = [];
    vm.$on('hook:beforeUpdate', flushPreQueue);
    vm.$on('hook:updated', flushPostQueue);
}
function getWatcherOption(options) {
    return __assign({
        immediate: false,
        deep: false,
        flush: 'pre',
    }, options);
}
function getWatchEffectOption(options) {
    return __assign({
        flush: 'pre',
    }, options);
}
function getWatcherVM() {
    var vm = getCurrentScopeVM();
    if (!vm) {
        if (!fallbackVM) {
            fallbackVM = defineComponentInstance(getVueConstructor());
        }
        vm = fallbackVM;
    }
    else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
    }
    return vm;
}
function flushQueue(vm, key) {
    var queue = vm[key];
    for (var index = 0; index < queue.length; index++) {
        queue[index]();
    }
    queue.length = 0;
}
function queueFlushJob(vm, fn, mode) {
    // flush all when beforeUpdate and updated are not fired
    var fallbackFlush = function () {
        vm.$nextTick(function () {
            if (vm[WatcherPreFlushQueueKey].length) {
                flushQueue(vm, WatcherPreFlushQueueKey);
            }
            if (vm[WatcherPostFlushQueueKey].length) {
                flushQueue(vm, WatcherPostFlushQueueKey);
            }
        });
    };
    switch (mode) {
        case 'pre':
            fallbackFlush();
            vm[WatcherPreFlushQueueKey].push(fn);
            break;
        case 'post':
            fallbackFlush();
            vm[WatcherPostFlushQueueKey].push(fn);
            break;
        default:
            assert(false, "flush must be one of [\"post\", \"pre\", \"sync\"], but got ".concat(mode));
            break;
    }
}
function createVueWatcher(vm, getter, callback, options) {
    var index = vm._watchers.length;
    // @ts-ignore: use undocumented options
    vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before,
    });
    return vm._watchers[index];
}
// We have to monkeypatch the teardown function so Vue will run
// runCleanup() when it tears down the watcher on unmounted.
function patchWatcherTeardown(watcher, runCleanup) {
    var _teardown = watcher.teardown;
    watcher.teardown = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _teardown.apply(watcher, args);
        runCleanup();
    };
}
function createWatcher(vm, source, cb, options) {
    var _a;
    if (( true) && !cb) {
        if (options.immediate !== undefined) {
            warn("watch() \"immediate\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
        if (options.deep !== undefined) {
            warn("watch() \"deep\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
    }
    var flushMode = options.flush;
    var isSync = flushMode === 'sync';
    var cleanup;
    var registerCleanup = function (fn) {
        cleanup = function () {
            try {
                fn();
            }
            catch (
            // FIXME: remove any
            error) {
                logError(error, vm, 'onCleanup()');
            }
        };
    };
    // cleanup before running getter again
    var runCleanup = function () {
        if (cleanup) {
            cleanup();
            cleanup = null;
        }
    };
    var createScheduler = function (fn) {
        if (isSync ||
            /* without a current active instance, ignore pre|post mode */ vm ===
                fallbackVM) {
            return fn;
        }
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return queueFlushJob(vm, function () {
                fn.apply(void 0, __spreadArray([], __read(args), false));
            }, flushMode);
        });
    };
    // effect watch
    if (cb === null) {
        var running_1 = false;
        var getter_1 = function () {
            // preventing the watch callback being call in the same execution
            if (running_1) {
                return;
            }
            try {
                running_1 = true;
                source(registerCleanup);
            }
            finally {
                running_1 = false;
            }
        };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
            deep: options.deep || false,
            sync: isSync,
            before: runCleanup,
        });
        patchWatcherTeardown(watcher_1, runCleanup);
        // enable the watcher update
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        // always run watchEffect
        watcher_1.get = createScheduler(originGet);
        return function () {
            watcher_1.teardown();
        };
    }
    var deep = options.deep;
    var isMultiSource = false;
    var getter;
    if (isRef(source)) {
        getter = function () { return source.value; };
    }
    else if (isReactive(source)) {
        getter = function () { return source; };
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return s();
                }
                else {
                    ( true) &&
                        warn("Invalid watch source: ".concat(JSON.stringify(s), ".\n          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), vm);
                    return noopFn;
                }
            });
        };
    }
    else if (isFunction(source)) {
        getter = source;
    }
    else {
        getter = noopFn;
        ( true) &&
            warn("Invalid watch source: ".concat(JSON.stringify(source), ".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), vm);
    }
    if (deep) {
        var baseGetter_1 = getter;
        getter = function () { return traverse(baseGetter_1()); };
    }
    var applyCb = function (n, o) {
        if (!deep &&
            isMultiSource &&
            n.every(function (v, i) { return isSame(v, o[i]); }))
            return;
        // cleanup before running cb again
        runCleanup();
        return cb(n, o, registerCleanup);
    };
    var callback = createScheduler(applyCb);
    if (options.immediate) {
        var originalCallback_1 = callback;
        // `shiftCallback` is used to handle the first sync effect run.
        // The subsequent callbacks will redirect to `callback`.
        var shiftCallback_1 = function (n, o) {
            shiftCallback_1 = originalCallback_1;
            // o is undefined on the first call
            return applyCb(n, isArray(n) ? [] : o);
        };
        callback = function (n, o) {
            return shiftCallback_1(n, o);
        };
    }
    // @ts-ignore: use undocumented option "sync"
    var stop = vm.$watch(getter, callback, {
        immediate: options.immediate,
        deep: deep,
        sync: isSync,
    });
    // Once again, we have to hack the watcher for proper teardown
    var watcher = vm._watchers[vm._watchers.length - 1];
    // if the return value is reactive and deep:true
    // watch for changes, this might happen when new key is added
    if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
        watcher.value.__ob__.dep.addSub({
            update: function () {
                // this will force the source to be revaluated and the callback
                // executed if needed
                watcher.run();
            },
        });
    }
    patchWatcherTeardown(watcher, runCleanup);
    return function () {
        stop();
    };
}
function watchEffect(effect, options) {
    var opts = getWatchEffectOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, effect, null, opts);
}
function watchPostEffect(effect) {
    return watchEffect(effect, { flush: 'post' });
}
function watchSyncEffect(effect) {
    return watchEffect(effect, { flush: 'sync' });
}
// implementation
function watch(source, cb, options) {
    var callback = null;
    if (isFunction(cb)) {
        // source watch
        callback = cb;
    }
    else {
        // effect watch
        if ((true)) {
            warn("`watch(fn, options?)` signature has been moved to a separate API. " +
                "Use `watchEffect(fn, options?)` instead. `watch` now only " +
                "supports `watch(source, cb, options?) signature.");
        }
        options = cb;
        callback = null;
    }
    var opts = getWatcherOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, source, callback, opts);
}
function traverse(value, seen) {
    if (seen === void 0) { seen = new Set(); }
    if (!isObject(value) || seen.has(value) || rawSet.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (isSet(value) || isMap(value)) {
        value.forEach(function (v) {
            traverse(v, seen);
        });
    }
    else if (isPlainObject(value)) {
        for (var key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

// implement
function computed(getterOrOptions) {
    var vm = getCurrentScopeVM();
    var getter;
    var setter;
    if (isFunction(getterOrOptions)) {
        getter = getterOrOptions;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var computedSetter;
    var computedGetter;
    if (vm && !vm.$isServer) {
        var _a = getVueInternalClasses(), Watcher_1 = _a.Watcher, Dep_1 = _a.Dep;
        var watcher_1;
        computedGetter = function () {
            if (!watcher_1) {
                watcher_1 = new Watcher_1(vm, getter, noopFn, { lazy: true });
            }
            if (watcher_1.dirty) {
                watcher_1.evaluate();
            }
            if (Dep_1.target) {
                watcher_1.depend();
            }
            return watcher_1.value;
        };
        computedSetter = function (v) {
            if (( true) && !setter) {
                warn('Write operation failed: computed value is readonly.', vm);
                return;
            }
            if (setter) {
                setter(v);
            }
        };
    }
    else {
        // fallback
        var computedHost_1 = defineComponentInstance(getVueConstructor(), {
            computed: {
                $$state: {
                    get: getter,
                    set: setter,
                },
            },
        });
        vm && vm.$on('hook:destroyed', function () { return computedHost_1.$destroy(); });
        computedGetter = function () { return computedHost_1.$$state; };
        computedSetter = function (v) {
            if (( true) && !setter) {
                warn('Write operation failed: computed value is readonly.', vm);
                return;
            }
            computedHost_1.$$state = v;
        };
    }
    return createRef({
        get: computedGetter,
        set: computedSetter,
    }, !setter, true);
}

var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
    var source = vm;
    while (source) {
        // @ts-ignore
        if (source._provided && hasOwn(source._provided, provideKey)) {
            //@ts-ignore
            return source._provided[provideKey];
        }
        source = source.$parent;
    }
    return NOT_FOUND;
}
function provide(key, value) {
    var _a;
    var vm = (_a = getCurrentInstanceForFn('provide')) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm)
        return;
    if (!vm._provided) {
        var provideCache_1 = {};
        proxy(vm, '_provided', {
            get: function () { return provideCache_1; },
            set: function (v) { return Object.assign(provideCache_1, v); },
        });
    }
    vm._provided[key] = value;
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    var _a;
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm) {
        ( true) &&
            warn("inject() can only be used inside setup() or functional components.");
        return;
    }
    if (!key) {
        ( true) && warn("injection \"".concat(String(key), "\" not found."), vm);
        return defaultValue;
    }
    var val = resolveInject(key, vm);
    if (val !== NOT_FOUND) {
        return val;
    }
    else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue)
            ? defaultValue()
            : defaultValue;
    }
    else if ((true)) {
        warn("Injection \"".concat(String(key), "\" not found."), vm);
    }
}

var EMPTY_OBJ = ( true)
    ? Object.freeze({})
    : 0;
var useCssModule = function (name) {
    var _a;
    if (name === void 0) { name = '$style'; }
    var instance = getCurrentInstance();
    if (!instance) {
        ( true) && warn("useCssModule must be called inside setup()");
        return EMPTY_OBJ;
    }
    var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];
    if (!mod) {
        ( true) &&
            warn("Current instance does not have CSS module named \"".concat(name, "\"."));
        return EMPTY_OBJ;
    }
    return mod;
};
/**
 * @deprecated use `useCssModule` instead.
 */
var useCSSModule = useCssModule;

function createApp(rootComponent, rootProps) {
    if (rootProps === void 0) { rootProps = undefined; }
    var V = getVueConstructor();
    var mountedVM = undefined;
    var provide = {};
    var app = {
        config: V.config,
        use: V.use.bind(V),
        mixin: V.mixin.bind(V),
        component: V.component.bind(V),
        provide: function (key, value) {
            provide[key] = value;
            return this;
        },
        directive: function (name, dir) {
            if (dir) {
                V.directive(name, dir);
                return app;
            }
            else {
                return V.directive(name);
            }
        },
        mount: function (el, hydrating) {
            if (!mountedVM) {
                mountedVM = new V(__assign(__assign({ propsData: rootProps }, rootComponent), { provide: __assign(__assign({}, provide), rootComponent.provide) }));
                mountedVM.$mount(el, hydrating);
                return mountedVM;
            }
            else {
                if ((true)) {
                    warn("App has already been mounted.\n" +
                        "If you want to remount the same app, move your app creation logic " +
                        "into a factory function and create fresh app instances for each " +
                        "mount - e.g. `const createMyApp = () => createApp(App)`");
                }
                return mountedVM;
            }
        },
        unmount: function () {
            if (mountedVM) {
                mountedVM.$destroy();
                mountedVM = undefined;
            }
            else if ((true)) {
                warn("Cannot unmount an app that is not mounted.");
            }
        },
    };
    return app;
}

var nextTick = function nextTick() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
};

var fallbackCreateElement;
var createElement = function createElement() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var instance = (this === null || this === void 0 ? void 0 : this.proxy) || ((_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
    if (!instance) {
        ( true) &&
            warn('`createElement()` has been called outside of render function.');
        if (!fallbackCreateElement) {
            fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
    }
    return instance.$createElement.apply(instance, args);
};

function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    var i = getCurrentInstance();
    if (( true) && !i) {
        warn("useContext() called without active instance.");
    }
    return i.setupContext;
}

function set(vm, key, value) {
    var state = (vm.__composition_api_state__ =
        vm.__composition_api_state__ || {});
    state[key] = value;
}
function get(vm, key) {
    return (vm.__composition_api_state__ || {})[key];
}
var vmStateManager = {
    set: set,
    get: get,
};

function asVmProperty(vm, propName, propValue) {
    var props = vm.$options.props;
    if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        if (isRef(propValue)) {
            proxy(vm, propName, {
                get: function () { return propValue.value; },
                set: function (val) {
                    propValue.value = val;
                },
            });
        }
        else {
            proxy(vm, propName, {
                get: function () {
                    if (isReactive(propValue)) {
                        propValue.__ob__.dep.depend();
                    }
                    return propValue;
                },
                set: function (val) {
                    propValue = val;
                },
            });
        }
        if ((true)) {
            // expose binding to Vue Devtool as a data property
            // delay this until state has been resolved to prevent repeated works
            vm.$nextTick(function () {
                if (Object.keys(vm._data).indexOf(propName) !== -1) {
                    return;
                }
                if (isRef(propValue)) {
                    proxy(vm._data, propName, {
                        get: function () { return propValue.value; },
                        set: function (val) {
                            propValue.value = val;
                        },
                    });
                }
                else {
                    proxy(vm._data, propName, {
                        get: function () { return propValue; },
                        set: function (val) {
                            propValue = val;
                        },
                    });
                }
            });
        }
    }
    else if ((true)) {
        if (props && hasOwn(props, propName)) {
            warn("The setup binding property \"".concat(propName, "\" is already declared as a prop."), vm);
        }
        else {
            warn("The setup binding property \"".concat(propName, "\" is already declared."), vm);
        }
    }
}
function updateTemplateRef(vm) {
    var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
    if (!rawBindings || !Object.keys(rawBindings).length)
        return;
    var refs = vm.$refs;
    var oldRefKeys = vmStateManager.get(vm, 'refs') || [];
    for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = null;
        }
    }
    var newKeys = Object.keys(refs);
    var validNewKeys = [];
    for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = refs[key];
            validNewKeys.push(key);
        }
    }
    vmStateManager.set(vm, 'refs', validNewKeys);
}
function afterRender(vm) {
    var stack = [vm._vnode];
    while (stack.length) {
        var vnode = stack.pop();
        if (vnode) {
            if (vnode.context)
                updateTemplateRef(vnode.context);
            if (vnode.children) {
                for (var i = 0; i < vnode.children.length; ++i) {
                    stack.push(vnode.children[i]);
                }
            }
        }
    }
}
function updateVmAttrs(vm, ctx) {
    var e_1, _a;
    if (!vm) {
        return;
    }
    var attrBindings = vmStateManager.get(vm, 'attrBindings');
    if (!attrBindings && !ctx) {
        // fix 840
        return;
    }
    if (!attrBindings) {
        var observedData = reactive({});
        attrBindings = { ctx: ctx, data: observedData };
        vmStateManager.set(vm, 'attrBindings', attrBindings);
        proxy(ctx, 'attrs', {
            get: function () {
                return attrBindings === null || attrBindings === void 0 ? void 0 : attrBindings.data;
            },
            set: function () {
                ( true) &&
                    warn("Cannot assign to '$attrs' because it is a read-only property", vm);
            },
        });
    }
    var source = vm.$attrs;
    var _loop_1 = function (attr) {
        if (!hasOwn(attrBindings.data, attr)) {
            proxy(attrBindings.data, attr, {
                get: function () {
                    // to ensure it always return the latest value
                    return vm.$attrs[attr];
                },
            });
        }
    };
    try {
        for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var attr = _c.value;
            _loop_1(attr);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function resolveScopedSlots(vm, slotsProxy) {
    var parentVNode = vm.$options._parentVnode;
    if (!parentVNode)
        return;
    var prevSlots = vmStateManager.get(vm, 'slots') || [];
    var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots);
    // remove staled slots
    for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
            delete slotsProxy[key];
        }
    }
    // proxy fresh slots
    var slotNames = Object.keys(curSlots);
    for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
            slotsProxy[key] = createSlotProxy(vm, key);
        }
    }
    vmStateManager.set(vm, 'slots', slotNames);
}
function activateCurrentInstance(instance, fn, onError) {
    var preVm = getCurrentInstance();
    setCurrentInstance(instance);
    try {
        return fn(instance);
    }
    catch (
    // FIXME: remove any
    err) {
        if (onError) {
            onError(err);
        }
        else {
            throw err;
        }
    }
    finally {
        setCurrentInstance(preVm);
    }
}

function mixin(Vue) {
    Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
            afterRender(this);
        },
        beforeUpdate: function () {
            updateVmAttrs(this);
        },
        updated: function () {
            afterRender(this);
        },
    });
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
            // keep currentInstance accessible for createElement
            $options.render = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return activateCurrentInstance(toVue3ComponentInstance(vm), function () {
                    return render.apply(_this, args);
                });
            };
        }
        if (!setup) {
            return;
        }
        if (!isFunction(setup)) {
            if ((true)) {
                warn('The "setup" option should be a function that returns a object in component definitions.', vm);
            }
            return;
        }
        var data = $options.data;
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData() {
            initSetup(vm, vm.$props);
            return isFunction(data)
                ? data.call(vm, vm)
                : data || {};
        };
    }
    function initSetup(vm, props) {
        if (props === void 0) { props = {}; }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        var instance = toVue3ComponentInstance(vm);
        instance.setupContext = ctx;
        // fake reactive for `toRefs(props)`
        def(props, '__ob__', createObserver());
        // resolve scopedSlots and slots to functions
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(instance, function () {
            // make props to be fake reactive, this is for `toRefs(props)`
            binding = setup(props, ctx);
        });
        if (!binding)
            return;
        if (isFunction(binding)) {
            // keep typescript happy with the binding type.
            var bindingFunc_1 = binding;
            // keep currentInstance accessible for createElement
            vm.$options.render = function () {
                resolveScopedSlots(vm, ctx.slots);
                return activateCurrentInstance(instance, function () { return bindingFunc_1(); });
            };
            return;
        }
        else if (isObject(binding)) {
            if (isReactive(binding)) {
                binding = toRefs(binding);
            }
            vmStateManager.set(vm, 'rawBindings', binding);
            var bindingObj_1 = binding;
            Object.keys(bindingObj_1).forEach(function (name) {
                var bindingValue = bindingObj_1[name];
                if (!isRef(bindingValue)) {
                    if (!isReactive(bindingValue)) {
                        if (isFunction(bindingValue)) {
                            var copy_1 = bindingValue;
                            bindingValue = bindingValue.bind(vm);
                            Object.keys(copy_1).forEach(function (ele) {
                                bindingValue[ele] = copy_1[ele];
                            });
                        }
                        else if (!isObject(bindingValue)) {
                            bindingValue = ref(bindingValue);
                        }
                        else if (hasReactiveArrayChild(bindingValue)) {
                            // creates a custom reactive properties without make the object explicitly reactive
                            // NOTE we should try to avoid this, better implementation needed
                            customReactive(bindingValue);
                        }
                    }
                    else if (isArray(bindingValue)) {
                        bindingValue = ref(bindingValue);
                    }
                }
                asVmProperty(vm, name, bindingValue);
            });
            return;
        }
        if ((true)) {
            assert(false, "\"setup\" must return a \"Object\" or a \"Function\", got \"".concat(Object.prototype.toString
                .call(binding)
                .slice(8, -1), "\""));
        }
    }
    function customReactive(target, seen) {
        if (seen === void 0) { seen = new Set(); }
        if (seen.has(target))
            return;
        if (!isPlainObject(target) ||
            isRef(target) ||
            isReactive(target) ||
            isRaw(target))
            return;
        var Vue = getVueConstructor();
        // @ts-expect-error https://github.com/vuejs/vue/pull/12132
        var defineReactive = Vue.util.defineReactive;
        Object.keys(target).forEach(function (k) {
            var val = target[k];
            defineReactive(target, k, val);
            if (val) {
                seen.add(val);
                customReactive(val, seen);
            }
            return;
        });
    }
    function hasReactiveArrayChild(target, visited) {
        if (visited === void 0) { visited = new Map(); }
        if (visited.has(target)) {
            return visited.get(target);
        }
        visited.set(target, false);
        if (isArray(target) && isReactive(target)) {
            visited.set(target, true);
            return true;
        }
        if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
            return false;
        }
        return Object.keys(target).some(function (x) {
            return hasReactiveArrayChild(target[x], visited);
        });
    }
    function createSetupContext(vm) {
        var ctx = { slots: {} };
        var propsPlain = [
            'root',
            'parent',
            'refs',
            'listeners',
            'isServer',
            'ssrContext',
        ];
        var methodReturnVoid = ['emit'];
        propsPlain.forEach(function (key) {
            var srcKey = "$".concat(key);
            proxy(ctx, key, {
                get: function () { return vm[srcKey]; },
                set: function () {
                    ( true) &&
                        warn("Cannot assign to '".concat(key, "' because it is a read-only property"), vm);
                },
            });
        });
        updateVmAttrs(vm, ctx);
        methodReturnVoid.forEach(function (key) {
            var srcKey = "$".concat(key);
            proxy(ctx, key, {
                get: function () {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var fn = vm[srcKey];
                        fn.apply(vm, args);
                    };
                },
            });
        });
        if (false) {}
        return ctx;
    }
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(from, to) {
    if (!from)
        return to;
    if (!to)
        return from;
    var key;
    var toVal;
    var fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
            to[key] = fromVal;
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            !isRef(toVal) &&
            isPlainObject(fromVal) &&
            !isRef(fromVal)) {
            mergeData(fromVal, toVal);
        }
    }
    return to;
}
function install(Vue) {
    if (isVueRegistered(Vue)) {
        if ((true)) {
            warn('[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.');
        }
        return;
    }
    if ((true)) {
        if (Vue.version) {
            if (Vue.version[0] !== '2' || Vue.version[1] !== '.') {
                warn("[vue-composition-api] only works with Vue 2, v".concat(Vue.version, " found."));
            }
        }
        else {
            warn('[vue-composition-api] no Vue version found');
        }
    }
    Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn(props, context) {
            return mergeData(isFunction(parent) ? parent(props, context) || {} : undefined, isFunction(child) ? child(props, context) || {} : undefined);
        };
    };
    setVueConstructor(Vue);
    mixin(Vue);
}
var Plugin = {
    install: function (Vue) { return install(Vue); },
};

// implementation, close to no-op
function defineComponent(options) {
    return options;
}

function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if (( true) && suspensible) {
        warn("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
    }
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise(function (resolve, reject) {
                            var userRetry = function () { return resolve(retry()); };
                            var userFail = function () { return reject(err); };
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if (( true) && !comp) {
                        warn("Async component loader resolved to undefined. " +
                            "If you are using retry(), make sure to return its return value.");
                    }
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if (( true) && comp && !isObject(comp) && !isFunction(comp)) {
                        throw new Error("Invalid async component load result: ".concat(comp));
                    }
                    return comp;
                })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent,
        };
    };
}

var version = "1.7.1";
// auto install when using CDN
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}




/***/ }),

/***/ "./node_modules/vue-demi/lib/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/vue-demi/lib/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.EffectScope),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.createApp),
/* harmony export */   "createRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.defineComponent),
/* harmony export */   "del": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.del),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentScope),
/* harmony export */   "h": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.inject),
/* harmony export */   "isRaw": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isRaw),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isRef),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.markRaw),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onMounted),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onUpdated),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.proxyRefs),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.ref),
/* harmony export */   "set": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.set),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.shallowRef),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.toRefs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useAttrs),
/* harmony export */   "useCSSModule": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useCSSModule),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useCssModule),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useSlots),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watchSyncEffect),
/* harmony export */   "Vue": () => (/* reexport default export from named module */ vue__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "Vue2": () => (/* binding */ Vue2),
/* harmony export */   "isVue2": () => (/* binding */ isVue2),
/* harmony export */   "isVue3": () => (/* binding */ isVue3),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "install": () => (/* binding */ install)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api/dist/vue-composition-api.mjs */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



function install(_vue) {
  _vue = _vue || vue__WEBPACK_IMPORTED_MODULE_0__
  if (_vue && !_vue['__composition_api_installed__'])
    _vue.use(_vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])
}

install(vue__WEBPACK_IMPORTED_MODULE_0__)

var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__
var version = vue__WEBPACK_IMPORTED_MODULE_0__.version

/**VCA-EXPORTS**/

/**VCA-EXPORTS**/




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/card": 0,
/******/ 			"css/card": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/card"], () => (__webpack_require__("./resources/js/card.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/card"], () => (__webpack_require__("./resources/css/card.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;