"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[2601],{1560:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(5893),o=i(1151);const s={sidebar_position:2,sidebar_label:"Configuration examples",title:"Line item grouping: Configuration examples"},r="Configuration examples",a={id:"extensions/line-item-grouping/configuration-examples",title:"Line item grouping: Configuration examples",description:"Group line items by item code",source:"@site/docs/extensions/line-item-grouping/configuration-examples.md",sourceDirName:"extensions/line-item-grouping",slug:"/extensions/line-item-grouping/configuration-examples",permalink:"/docs/extensions/line-item-grouping/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/line-item-grouping/configuration-examples.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Configuration examples",title:"Line item grouping: Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Line item grouping",permalink:"/docs/extensions/line-item-grouping/"},next:{title:"Master data hub",permalink:"/docs/extensions/master-data-hub/"}},u={},l=[{value:"Group line items by item code",id:"group-line-items-by-item-code",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,t.jsx)(n.h2,{id:"group-line-items-by-item-code",children:"Group line items by item code"}),"\n",(0,t.jsxs)(n.p,{children:["The following SQL groups the line items by the value in ",(0,t.jsx)(n.code,{children:"item_code"})," datapoint."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n  MAX(item_code) as item_code_grouped,\n  MAX(item_description) as item_description_grouped\n  ROUND(SUM(item_quantity),2) as item_quantity_grouped,\nFROM items\nGROUP BY item_code\n"})}),"\n",(0,t.jsx)(n.p,{children:"Full configuration would look like this (the SQL has to be inline):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "transformations": [\n    {\n      "data_sources": [\n        {\n          "schema_id": "line_items",\n          "table_name": "items"\n        }\n      ],\n      "sql_statement": "SELECT MAX(item_code) as item_code_grouped, ROUND(SUM(item_quantity),2) as item_quantity_grouped, MAX(item_description) as item_description_grouped FROM items GROUP BY item_code",\n      "output_schema_id": "line_item_grouped",\n      "allow_target_update": true\n    }\n  ]\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);