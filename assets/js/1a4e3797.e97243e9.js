"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[2138],{5846:(e,t,a)=>{a.d(t,{W:()=>u});var r=a(6540),n=a(4586);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}},1283:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var r=a(6540),n=a(4586),l=a(2405),s=a(5260),c=a(5489),o=a(1312),u=a(5846),m=a(53),h=a(6347),i=a(8193);const g=function(){const e=(0,h.W6)(),t=(0,h.zy)(),{siteConfig:{baseUrl:a}}=(0,n.A)(),r=i.A.canUseDOM?new URLSearchParams(t.search):null,l=r?.get("q")||"",s=r?.get("ctx")||"",c=r?.get("version")||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var p=a(5891),d=a(2384),f=a(6841),y=a(3810),E=a(7674),S=a(2849),C=a(4471),v=a(1088);const w="searchContextInput_mXoe",x="searchQueryInput_CFBF",A="searchResultItem_U687",b="searchResultItemPath_uIbk",P="searchResultItemSummary_oZHr",F="searchQueryColumn_q7nx",R="searchContextColumn_oWAF";function _(){const{siteConfig:{baseUrl:e}}=(0,n.A)(),{selectMessage:t}=(0,u.W)(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=g(),[f,y]=(0,r.useState)(a),[E,C]=(0,r.useState)(),[A,b]=(0,r.useState)(),P=`${e}${c}`,_=(0,r.useMemo)((()=>f?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,r.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{b(e)})):b(void 0))}),[f,E]);const T=(0,r.useCallback)((e=>{y(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==f&&y(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.Z)(P,l);C((()=>(0,d.m)(e,t,100)))}()}),[l,P]),r.createElement(r.Fragment,null,r.createElement(s.A,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,_)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,_),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,m.A)("col",{[F]:Array.isArray(v.Hg),"col--9":Array.isArray(v.Hg),"col--12":!Array.isArray(v.Hg)})},r.createElement("input",{type:"search",name:"q",className:x,"aria-label":"Search",onChange:T,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(v.Hg)?r.createElement("div",{className:(0,m.A)("col","col--3","padding-left--none",R)},r.createElement("select",{name:"search-context",className:w,id:"context-selector",value:l,onChange:e=>i(e.target.value)},r.createElement("option",{value:""},v.dz?(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),v.Hg.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!E&&f&&r.createElement("div",null,r.createElement(S.A,null)),A&&(A.length>0?r.createElement("p",null,t(A.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:A.length}))):r.createElement("p",null,(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,A&&A.map((e=>r.createElement(k,{key:e.document.i,searchResult:e}))))))}function k(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(v.CU&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:A},r.createElement("h2",null,r.createElement(c.A,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,f.Z)(h,l):(0,y.C)(h,(0,E.g)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:b},(0,C.$)(m)),u&&r.createElement("p",{className:P,dangerouslySetInnerHTML:{__html:(0,y.C)(t.t,(0,E.g)(s,"t"),l,100)}}))}const T=function(){return r.createElement(l.A,null,r.createElement(_,null))}}}]);