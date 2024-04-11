"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[1032],{6042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(5893),o=t(1151);const s={title:"Configuration examples",sidebar_position:4},i=void 0,r={id:"extensions/master-data-hub/configuration-examples",title:"Configuration examples",description:"The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:",source:"@site/docs/extensions/master-data-hub/configuration-examples.md",sourceDirName:"extensions/master-data-hub",slug:"/extensions/master-data-hub/configuration-examples",permalink:"/cookbook/docs/extensions/master-data-hub/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/master-data-hub/configuration-examples.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Configuration examples",sidebar_position:4},sidebar:"extensionsSidebar",previous:{title:"Dataset matching configuration",permalink:"/cookbook/docs/extensions/master-data-hub/dataset-matching-configuration"},next:{title:"Full dataset replace",permalink:"/cookbook/docs/extensions/master-data-hub/full-dataset-replace"}},c={},l=[{value:"Count all records in the collection",id:"count-all-records-in-the-collection",level:2},{value:"Compound queries",id:"compound-queries",level:2},{value:"Exact match",id:"exact-match",level:2},{value:"Exact match (case-insensitive)",id:"exact-match-case-insensitive",level:2},{value:"Exact submatch",id:"exact-submatch",level:2},{value:"Fuzzy match",id:"fuzzy-match",level:2},{value:"Remove duplicates (<code>$group</code>)",id:"remove-duplicates-group",level:2},{value:"Return all collection records (sorted)",id:"return-all-collection-records-sorted",level:2},{value:"Match on normalized values",id:"match-on-normalized-values",level:2},{value:"Match only if there is exactly one match",id:"match-only-if-there-is-exactly-one-match",level:2},{value:"Match score steps",id:"match-score-steps",level:2},{value:"Score normalization",id:"score-normalization",level:2},{value:"Custom JS code",id:"custom-js-code",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "name": "\u2026",\n      "source": {\n        "dataset": "\u2026",\n        // highlight-start\n        "queries": [\n          // paste the examples here\n        ],\n        // highlight-end\n      },\n      "default": { \u2026 },\n      "mapping": { \u2026 },\n      "result_actions": { \u2026 }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"count-all-records-in-the-collection",children:"Count all records in the collection"}),"\n",(0,a.jsxs)(n.p,{children:["You can quickly get a total number of records in the whole collection by calling ",(0,a.jsx)(n.code,{children:"$count"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$count": "total"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"compound-queries",children:"Compound queries"}),"\n",(0,a.jsxs)(n.p,{children:["Compound queries are very useful when we need to match against multiple attributes and give to each match a different importance. In the following example we use Fibonacci Sequence boosts to ",(0,a.jsx)(n.a,{href:"#fuzzy-match",children:"fuzzy match"})," against XXX, YYY and ZZZ:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$search": {\n        "index": "default",\n        "compound": {\n          "must": [\n            {\n              "text": {\n                "path": "XXX",\n                "query": "{product_code} ", // notice the extra space at the end!\n                "score": {\n                  "boost": {\n                    "value": 8\n                  }\n                }\n              }\n            },\n            {\n              "text": {\n                "path": "YYY",\n                "query": "{product_name} ", // notice the extra space at the end!\n                "score": {\n                  "boost": {\n                    "value": 5\n                  }\n                }\n              }\n            }\n          ],\n          "should": [\n            {\n              "text": {\n                "path": "ZZZ",\n                "query": "{product_label} ", // notice the extra space at the end!\n                "score": {\n                  "boost": {\n                    "value": 3\n                  }\n                }\n              }\n            }\n          ]\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$match": {\n        "__score": {\n          "$gt": 30 // Check the resulting `__score` to set some appropriate value\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"exact-match",children:"Exact match"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "find": {\n    "Vendor name": "{sender_name}"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:['The query checks the "Vendor name" in the dataset and compares it to the value of the "Vendor name" field extracted from the document. To refer to the "Vendor name" field, we used its schema ID - ',(0,a.jsx)(n.code,{children:"sender_name"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Even though exact match can be achieved using ",(0,a.jsx)(n.code,{children:"find"})," method instead of ",(0,a.jsx)(n.code,{children:"aggregate"})," (see ",(0,a.jsx)(n.a,{href:"#exact-match-case-insensitive",children:"below"}),"), it is still recommended to use ",(0,a.jsx)(n.code,{children:"aggregate"})," because it's often necessary to specify ",(0,a.jsx)(n.code,{children:"$project"})," stage:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$match": {\n        "Vendor name": "{sender_name}"\n      }\n    },\n    {\n      "$project": {\n        "Supplier Name": 1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"exact-match-case-insensitive",children:"Exact match (case-insensitive)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "find": {\n    "role_code": {\n      "$regex": "^{item_role | re}$",\n      "$options": "i"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"exact-submatch",children:"Exact submatch"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes it is necessary to match an exact substring. This can easily be achieved by using ",(0,a.jsx)(n.code,{children:"$regex"})," like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "find": {\n    "role_code": {\n      "$regex": "^.*{item_role | re}.*$"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"fuzzy-match",children:"Fuzzy match"}),"\n",(0,a.jsxs)(n.p,{children:["It is necessary to restrict the fuzzy search results by using ",(0,a.jsx)(n.code,{children:"$match"})," on the results score (otherwise many irrelevant false positives would be returned)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$search": {\n        "index": "default",\n        "text": {\n          "query": "{item_description} ", // notice the extra space at the end!\n          "path": "description"\n        }\n      }\n    },\n    {\n      "$limit": 10 // optional\n    },\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$match": {\n        "__score": {\n          "$gt": 0.1 // configure as needed based on the results\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"remove-duplicates-group",children:["Remove duplicates (",(0,a.jsx)(n.code,{children:"$group"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$group": {\n        "_id": "$vendorRegNo",\n        "__tmpRoot": {\n          "$first": "$$ROOT"\n        }\n      }\n    },\n    {\n      "$replaceRoot": {\n        "newRoot": "$__tmpRoot"\n      }\n    },\n    // \u2026\n    {\n      "$sort": {\n        "__score": -1 // it is important to sort the results correctly after using $group\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"return-all-collection-records-sorted",children:"Return all collection records (sorted)"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes it might be useful to always return all records and perhaps sort them by matching score. That is, always return everything but on put the best results on top."}),"\n",(0,a.jsxs)(n.p,{children:["This can be achieved by first searching and returning records with their respective ",(0,a.jsx)(n.code,{children:"__score"})," (see ",(0,a.jsx)(n.a,{href:"#fuzzy-match",children:"fuzzy match"}),", for example) and later appending all records with zero ",(0,a.jsx)(n.code,{children:"__score"})," using ",(0,a.jsx)(n.code,{children:"$unionWith"}),". Finally, all the results are grouped to remove duplicates and sorted by the score:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026 (fuzzy search first)\n    {\n      // highlight-start\n      "$unionWith": {\n        "coll": "legal_entities_v1",\n        "pipeline": [\n          {\n            "$addFields": {\n              "__score": 0\n            }\n          }\n        ]\n      }\n      // highlight-end\n    },\n    {\n      "$group": {\n        "_id": "$legal_entity",\n        "__tmpRoot": {\n          "$first": "$$ROOT"\n        }\n      }\n    },\n    {\n      "$replaceRoot": {\n        "newRoot": "$__tmpRoot"\n      }\n    },\n    {\n      "$sort": {\n        "__score": -1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"match-on-normalized-values",children:"Match on normalized values"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$addFields": {\n        "__tax_id_stringified": {\n          "$toString": "$Tax ID"\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$map": {\n            "input": {\n              "$range": [\n                0,\n                {\n                  "$strLenCP": "$__tax_id_stringified"\n                }\n              ]\n            },\n            "in": {\n              "$substrCP": ["$__tax_id_stringified", "$$this", 1]\n            }\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$filter": {\n            "input": "$__tax_id_normalized",\n            "cond": {\n              "$regexMatch": {\n                "input": "$$this",\n                "regex": "[0-9a-zA-Z]"\n              }\n            }\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$reduce": {\n            "input": "$__tax_id_normalized",\n            "initialValue": "",\n            "in": {\n              "$concat": ["$$value", "$$this"]\n            }\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "__tax_id_normalized": "{sender_vat_id_normalized}"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"match-only-if-there-is-exactly-one-match",children:"Match only if there is exactly one match"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$setWindowFields": {\n        "output": {\n          "__totalCount": {\n            "$count": {}\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "__totalCount": 1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"match-score-steps",children:"Match score steps"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$setWindowFields": {\n        "output": {\n          "__score_normalized_max": {\n            "$max": "$__score_normalized"\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "$expr": {\n          "$cond": {\n            "if": {\n              "$or": [\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.95] },\n                    { "$gt": ["$__score_normalized", 0.95] }\n                  ]\n                },\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.9] },\n                    { "$lte": ["$__score_normalized_max", 0.95] },\n                    { "$gt": ["$__score_normalized", 0.9] },\n                    { "$lte": ["$__score_normalized", 0.95] }\n                  ]\n                },\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.85] },\n                    { "$lte": ["$__score_normalized_max", 0.9] },\n                    { "$gt": ["$__score_normalized", 0.85] },\n                    { "$lte": ["$__score_normalized", 0.9] }\n                  ]\n                }\n              ]\n            },\n            "then": true,\n            "else": false\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"score-normalization",children:"Score normalization"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026 (fuzzy search)\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$setWindowFields": {\n        "output": {\n          "__max_score": {\n            "$max": "$__score"\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__normalized_score": {\n          "$divide": ["$__score", "$__max_score"]\n        }\n      }\n    }\n    // \u2026\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Note that one disadvantage of this normalization is that ",(0,a.jsx)(n.code,{children:"__normalized_score"}),' can be exactly "1" even when ',(0,a.jsx)(n.code,{children:"__score"})," has low value. It might be a good idea to combine both scores to filter out results that would normally be considered not-a-match."]}),"\n",(0,a.jsx)(n.h2,{id:"custom-js-code",children:"Custom JS code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$addFields": {\n        "__order_number_sanitized": {\n          "$function": {\n            "body": "function(x) { return x.replace(/[^0-9a-z]/ig, \'\').toLowerCase(); }",\n            "args": ["$Order Number"],\n            "lang": "js"\n          }\n        }\n      }\n    }\n    // \u2026\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(7294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);