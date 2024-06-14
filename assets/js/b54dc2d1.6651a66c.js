"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[9109],{6570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=t(5893),l=t(1151);const s={title:"JSON Templating"},d=void 0,a={id:"extensions/json-templating/index",title:"JSON Templating",description:"JSON Templating engine is commonly used to configure many of our extensions.",source:"@site/docs/extensions/json-templating/index.md",sourceDirName:"extensions/json-templating",slug:"/extensions/json-templating/",permalink:"/docs/extensions/json-templating/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/json-templating/index.md",tags:[],version:"current",frontMatter:{title:"JSON Templating"},sidebar:"extensionsSidebar",previous:{title:"Configuration examples",permalink:"/docs/extensions/generic-rest-api-export/configuration-examples"},next:{title:"Line item grouping",permalink:"/docs/extensions/line-item-grouping/"}},r={},o=[{value:"JSON Templating Syntax",id:"json-templating-syntax",level:2},{value:"JSON Templating Operators",id:"json-templating-operators",level:2},{value:"<code>$DATAPOINT_MAPPING$</code>",id:"datapoint_mapping",level:3},{value:"Example",id:"example",level:4},{value:"Available configuration options",id:"available-configuration-options",level:4},{value:"<code>$DATAPOINT_VALUE$</code>",id:"datapoint_value",level:3},{value:"Available configuration options",id:"available-configuration-options-1",level:4},{value:"<code>$FOR_EACH$</code>",id:"for_each",level:3},{value:"<code>$FOR_EACH_SCHEMA_ID$</code>",id:"for_each_schema_id",level:3},{value:"Example",id:"example-1",level:4},{value:"Available configuration options",id:"available-configuration-options-2",level:4},{value:"<code>$IF_DATAPOINT_VALUE$</code>",id:"if_datapoint_value",level:3},{value:"<code>$IF_SCHEMA_ID$</code>",id:"if_schema_id",level:3},{value:"Example",id:"example-2",level:4},{value:"Available configuration options",id:"available-configuration-options-3",level:4},{value:"Jinja2 Capabilities",id:"jinja2-capabilities",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"JSON Templating engine is commonly used to configure many of our extensions."}),"\n",(0,i.jsx)(n.h2,{id:"json-templating-syntax",children:"JSON Templating Syntax"}),"\n",(0,i.jsx)(n.p,{children:"The basic and most commonly used syntax is for getting values from the annotation object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "some_field": "@{schema_id_of_datapoint}"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"#datapoint_value",children:(0,i.jsx)(n.code,{children:"$DATAPOINT_VALUE$"})})," for more verbose syntax."]}),"\n",(0,i.jsx)(n.h2,{id:"json-templating-operators",children:"JSON Templating Operators"}),"\n",(0,i.jsx)(n.p,{children:"Operators are a special syntax that can be used to perform various complex operations when working with JSON."}),"\n",(0,i.jsx)(n.h3,{id:"datapoint_mapping",children:(0,i.jsx)(n.code,{children:"$DATAPOINT_MAPPING$"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns rendered template specified in ",(0,i.jsx)(n.code,{children:"mapping"})," for certain value of ",(0,i.jsx)(n.code,{children:"schema_id"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "_ns_type": {\n    "$DATAPOINT_MAPPING$": {\n      "schema_id": "document_type",\n      "mapping": {\n        "tax_credit": "VendorCredit",\n        "tax_invoice": "VendorBill"\n      },\n      "fallback_mapping": "Vendor" // optional\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This template will return the following for ",(0,i.jsx)(n.code,{children:"document_type"})," with value ",(0,i.jsx)(n.code,{children:"tax_credit"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ "_ns_type": "VendorCredit" }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, this template will return the following for ",(0,i.jsx)(n.code,{children:"tax_invoice"})," value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ "_ns_type": "VendorBill" }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, the template will return the ",(0,i.jsx)(n.code,{children:"_ns_type"})," of ",(0,i.jsx)(n.code,{children:"Vendor"})," if no other value is found. This value can be omitted which will default to ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Configuration option"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"schema_id"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Schema ID of the datapoint."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"YES"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"mapping"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Mapping of the datapoint value (",(0,i.jsx)(n.code,{children:"schema_id"}),")."]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"YES"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"fallback_mapping"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Default template that will be used if template for found datapoint value is not provided in the mapping."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"null"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"datapoint_value",children:(0,i.jsx)(n.code,{children:"$DATAPOINT_VALUE$"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$DATAPOINT_VALUE$"})," is a more verbose syntax for ",(0,i.jsx)(n.code,{children:"@{schema_id}"}),". In other words, the following examples are identical:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "externalId": "@{ns_external_id_generated}"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Identical to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "externalId": {\n    "$DATAPOINT_VALUE$": {\n      "schema_id": "ns_external_id_generated",\n      "value_type": "string"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"While the later might seem unnecessary, it is needed when we want to cast the value to a certain type. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "tranDate": {\n    "$DATAPOINT_VALUE$": {\n      "schema_id": "date_issue",\n      "value_type": "iso_datetime"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"available-configuration-options-1",children:"Available configuration options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Configuration option"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"schema_id"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Schema ID of the datapoint."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"YES"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"value_type"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Type to which the value should be converted. Supported types are: ",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"integer"}),", ",(0,i.jsx)(n.code,{children:"float"}),", ",(0,i.jsx)(n.code,{children:"boolean"}),", and ",(0,i.jsx)(n.code,{children:"iso_datetime"}),"."]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"for_each",children:(0,i.jsx)(n.code,{children:"$FOR_EACH$"})}),"\n",(0,i.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Work in progress"})})}),"\n",(0,i.jsx)(n.h3,{id:"for_each_schema_id",children:(0,i.jsx)(n.code,{children:"$FOR_EACH_SCHEMA_ID$"})}),"\n",(0,i.jsx)(n.p,{children:"Iterates over multiline schema IDs, typically line items."}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "items": {\n    "$FOR_EACH_SCHEMA_ID$": {\n      "schema_id": "line_item",\n      "mapping": {\n        "_ns_type": "VendorBillItem",\n        "quantity": "@{item_quantity}",\n        "description": "@{item_description}"\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Will render:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "_ns_type": "VendorBillItem",\n      "quantity": "1",\n      "description": "Some description 1"\n    },\n    {\n      "_ns_type": "VendorBillItem",\n      "quantity": "2",\n      "description": "Some description 2"\n    }\n    // \u2026\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Inside the for-loop block, you can access a special variables (",(0,i.jsx)(n.code,{children:"schema_loop"}),"):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"schema_loop.index"})," for current iteration of the loop indexed from 1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"schema_loop.index0"})," for current iteration of the loop indexed from 0"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"available-configuration-options-2",children:"Available configuration options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Configuration option"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"schema_id"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Schema ID of the datapoint."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"YES"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"mapping"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Mapping template that will be rendered for each element found with the given ",(0,i.jsx)(n.code,{children:"schema_id"}),"."]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"YES"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"fallback_mapping"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Mapping template that will be rendered if no element with the given ",(0,i.jsx)(n.code,{children:"schema_id"})," is found."]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"[]"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"if_datapoint_value",children:(0,i.jsx)(n.code,{children:"$IF_DATAPOINT_VALUE$"})}),"\n",(0,i.jsx)(n.admonition,{title:"Work in progress",type:"warning",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Work in progress"})})}),"\n",(0,i.jsx)(n.h3,{id:"if_schema_id",children:(0,i.jsx)(n.code,{children:"$IF_SCHEMA_ID$"})}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#for_each_schema_id",children:(0,i.jsx)(n.code,{children:"$FOR_EACH_SCHEMA_ID$"})})," operation: it checks the existence of ",(0,i.jsx)(n.code,{children:"schema_id"}),", and it either outputs ",(0,i.jsx)(n.code,{children:"mapping"})," if the ",(0,i.jsx)(n.code,{children:"schema_id"})," points to a non-empty value or ",(0,i.jsx)(n.code,{children:"fallback_mapping"})," otherwise."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that if you don't specify the ",(0,i.jsx)(n.code,{children:"fallback_mapping"}),", it will skip the whole parent key!"]}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "dueDate": {\n    "$IF_SCHEMA_ID$": {\n      "schema_id": "date_due",\n      "mapping": {\n        "$DATAPOINT_VALUE$": {\n          "schema_id": "date_due",\n          "value_type": "iso_datetime"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"available-configuration-options-3",children:"Available configuration options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Configuration option"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"schema_id"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Schema ID of the datapoint."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"YES"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"mapping"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Mapping template that will be rendered if ",(0,i.jsx)(n.code,{children:"schema_id"})," exists."]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"YES"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"fallback_mapping"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Mapping template that will be rendered if no element with the given ",(0,i.jsx)(n.code,{children:"schema_id"})," is found. Note that if you don't specify the ",(0,i.jsx)(n.code,{children:"fallback_mapping"}),", it will skip the whole parent key!"]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"jinja2-capabilities",children:"Jinja2 Capabilities"}),"\n",(0,i.jsxs)(n.p,{children:["The JSON Templating uses the Python ",(0,i.jsx)(n.code,{children:"jinja2"})," templating engine for rendering. You can use its full capabilities. For example, the following template:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "math_example": "{my_value} + {my_value} = {my_value + my_value}",\n  "centered": "{my_string | center(9)}",\n  "nested": {\n    "converted_to_float": "{my_string | float}"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Will render (assuming ",(0,i.jsx)(n.code,{children:"my_value = 1"}),", and ",(0,i.jsx)(n.code,{children:'my_string = "123"'}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "math_example": "1 + 1 = 2",\n  "centered": "   123   ",\n  "nested": {\n    "converted_to_float": 123.0\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can use any of the ",(0,i.jsxs)(n.a,{href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#builtin-filters",children:[(0,i.jsx)(n.code,{children:"jinja2"})," filters"]})," or other advanced features of the jinja2 templating engine."]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var i=t(7294);const l={},s=i.createContext(l);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);