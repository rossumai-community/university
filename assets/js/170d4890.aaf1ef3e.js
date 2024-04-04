"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[9372],{604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var s=a(5893),n=a(1151);const d={title:"Dataset management",sidebar_position:2},i=void 0,o={id:"extensions/master-data-hub/dataset-management",title:"Dataset management",description:"How to prepare your dataset",source:"@site/docs/extensions/master-data-hub/dataset-management.md",sourceDirName:"extensions/master-data-hub",slug:"/extensions/master-data-hub/dataset-management",permalink:"/cookbook/docs/extensions/master-data-hub/dataset-management",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/master-data-hub/dataset-management.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dataset management",sidebar_position:2},sidebar:"extensionsSidebar",previous:{title:"Getting started",permalink:"/cookbook/docs/extensions/master-data-hub/getting-started"},next:{title:"Dataset matching configuration",permalink:"/cookbook/docs/extensions/master-data-hub/dataset-matching-configuration"}},r={},h=[{value:"How to prepare your dataset",id:"how-to-prepare-your-dataset",level:2},{value:"How to upload your first dataset",id:"how-to-upload-your-first-dataset",level:2},{value:"How to manage your dataset",id:"how-to-manage-your-dataset",level:2},{value:"Replace, update or delete the dataset",id:"replace-update-or-delete-the-dataset",level:3},{value:"Replace the dataset",id:"replace-the-dataset",level:4},{value:"Update the dataset",id:"update-the-dataset",level:4},{value:"Delete",id:"delete",level:4},{value:"Testing your queries on uploaded dataset",id:"testing-your-queries-on-uploaded-dataset",level:3},{value:"Basic find",id:"basic-find",level:4},{value:"Aggregation pipeline",id:"aggregation-pipeline",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"how-to-prepare-your-dataset",children:"How to prepare your dataset"}),"\n",(0,s.jsx)(t.p,{children:"Having high-quality master data is crucial for successful data matching. This means for example a solid list of vendors that includes all the necessary information like addresses, secondary names, and country of origins. The more data you have, the better the results will be because the matching logic can be tailored to each specific dataset."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-upload-your-first-dataset",children:"How to upload your first dataset"}),"\n",(0,s.jsx)(t.p,{children:"To upload your first dataset while the extension is active, follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Go to "Dataset Management."'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: dataset management",src:a(2342).Z+"",width:"1024",height:"502"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:'Click on "Upload your first dataset."'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: upload first dataset",src:a(7815).Z+"",width:"1024",height:"524"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:'Choose a name for your dataset and select the file you want to upload and click on the "Upload" button.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: upload",src:a(662).Z+"",width:"1024",height:"606"})}),"\n",(0,s.jsxs)(t.p,{children:["Here you can also ask the extension to automatically detect the format of the uploaded file. If the option is not selected a standard file format is assumed (the first line of CSV and XLSX files is used as a header, the expected CSV delimiter is a semicolon, line terminator is ",(0,s.jsx)(t.code,{children:"\\r\\n"}),", quote character is a double quote.)"]}),"\n",(0,s.jsx)(t.p,{children:"If everything is done correctly, you will see a success message. Please note that dataset uploads are asynchronous, which means they won't happen instantly."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: upload success message",src:a(995).Z+"",width:"1024",height:"618"})}),"\n",(0,s.jsx)(t.p,{children:'In the bottom left corner of the screen, you\'ll find an "Upload status" button. Clicking on it will show you the progress of the dataset upload. Once the upload is finished, refresh the page to see the dataset listed in the left column.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: upload success message",src:a(6638).Z+"",width:"1024",height:"497"})}),"\n",(0,s.jsx)(t.p,{children:'To add another dataset, simply click on the "Add dataset" button. This allows you to include multiple datasets for matching purposes.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: upload success message",src:a(8234).Z+"",width:"1024",height:"499"})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-manage-your-dataset",children:"How to manage your dataset"}),"\n",(0,s.jsx)(t.p,{children:"Once you've uploaded the dataset, you have options to update it, replace it, or even remove it entirely. Moreover, you can also try out queries on the dataset you've uploaded."}),"\n",(0,s.jsx)(t.h3,{id:"replace-update-or-delete-the-dataset",children:"Replace, update or delete the dataset"}),"\n",(0,s.jsx)(t.h4,{id:"replace-the-dataset",children:"Replace the dataset"}),"\n",(0,s.jsx)(t.p,{children:'This action erases all the information in the dataset and fills it with the new information you provide. If you set an optional attribute "Replace by keys" (where "keys" means an attribute or set of attributes that identifies one or more records in the dataset), it will update entries with matching keys, removes entries that aren\'t in the new dataset, and adds any new entries.'}),"\n",(0,s.jsxs)(t.admonition,{title:"Example",type:"note",children:[(0,s.jsxs)(t.p,{children:["Let's say we have some data already in the dataset - like ",(0,s.jsx)(t.code,{children:'{"id" : 1, "name" : "Rossum"}'})," and ",(0,s.jsx)(t.code,{children:'{"id" : 3, "name" : "Rossum UK"}'}),". Now, the data in the file we're uploading is ",(0,s.jsx)(t.code,{children:'{"id" : 1, "name" : "Rossum LTD"}'})," and ",(0,s.jsx)(t.code,{children:'{"id" : 2, "name" : "Rossum Prague"}'}),"."]}),(0,s.jsxs)(t.p,{children:['If we choose to "Replace by keys" using the "id" as the key, after replacing the dataset, we\'ll end up with ',(0,s.jsx)(t.code,{children:'{"id" : 1, "name" : "Rossum LTD"}'})," and ",(0,s.jsx)(t.code,{children:'{"id" : 2, "name" : "Rossum Prague"}'}),". This happens because the entry with ",(0,s.jsx)(t.code,{children:'"id":1'})," gets updated, the one with ",(0,s.jsx)(t.code,{children:'"id":2'})," is entirely new and gets added, and the entry with ",(0,s.jsx)(t.code,{children:'"id":3'})," is removed since it's not in the new dataset."]})]}),"\n",(0,s.jsx)(t.h4,{id:"update-the-dataset",children:"Update the dataset"}),"\n",(0,s.jsx)(t.p,{children:'For this process to work, you need to set the "Update by keys" parameter (where "keys" means an attribute or set of attributes that identifies one or more records in the dataset). These keys should be unique and make each entry distinguishable. It will update the entries with matching keys and add new entries without matching keys. Everything else that\'s already there in the dataset stays unchanged.'}),"\n",(0,s.jsxs)(t.admonition,{title:"Example",type:"note",children:[(0,s.jsxs)(t.p,{children:["The dataset already contains these records: ",(0,s.jsx)(t.code,{children:'[{"id" : 1, "name" : "Rossum"}, {"id" : 3, "name" : "Rossum UK"}]'}),". And in the uploaded file, you'll find these records: ",(0,s.jsx)(t.code,{children:'[{"id" : 1, "name" : "Rossum LTD"}, {"id" : 2, "name" : "Rossum Prague"}]'}),"."]}),(0,s.jsxs)(t.p,{children:['By choosing to "Update by keys" with the key being "id", and then updating the dataset, the outcome will be: ',(0,s.jsx)(t.code,{children:'[{"id" : 1, "name" : "Rossum LTD"}, {"id" : 2, "name" : "Rossum Prague"}, {"id" : 3, "name" : "Rossum UK"}]'}),". This is because the entry with ",(0,s.jsx)(t.code,{children:'"id":1'})," gets updated, the one with ",(0,s.jsx)(t.code,{children:'"id":2'})," is totally new and gets added, and the entry with ",(0,s.jsx)(t.code,{children:'"id":3'})," remains in the dataset since the update process doesn't remove records."]})]}),"\n",(0,s.jsx)(t.h4,{id:"delete",children:"Delete"}),"\n",(0,s.jsx)(t.p,{children:"That option is going to remove uploaded dataset."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: replace, update, delete buttons",src:a(1).Z+"",width:"1024",height:"495"})}),"\n",(0,s.jsx)(t.h3,{id:"testing-your-queries-on-uploaded-dataset",children:"Testing your queries on uploaded dataset"}),"\n",(0,s.jsx)(t.p,{children:'The "Dataset Management" tab lets you test your queries on the uploaded dataset. When you want to find specific data, you have two options: basic find and aggregation pipeline:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: test query",src:a(1432).Z+"",width:"1024",height:"498"})}),"\n",(0,s.jsx)(t.h4,{id:"basic-find",children:"Basic find"}),"\n",(0,s.jsxs)(t.p,{children:["It is a straightforward way to search for data. You can learn more about it ",(0,s.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/reference/method/db.collection.find/",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Example",type:"note",children:[(0,s.jsx)(t.p,{children:"Finding a vendor record using the extracted vendor VAT number:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{ "vatNumber": "{sender_vat}" }\n'})}),(0,s.jsxs)(t.p,{children:["The left side, labeled as ",(0,s.jsx)(t.code,{children:"vatNumber"}),", represents the attribute in the dataset. On the right side ",(0,s.jsx)(t.code,{children:'"{sender_vat}"'}),", points to a specific ID (schema ID) of the field which value was extracted from the document that the data matching is performed for. During the matching process, ",(0,s.jsx)(t.code,{children:'"{sender_vat}"'})," gets replaced with the actual value stored in the ",(0,s.jsx)(t.code,{children:"sender_vat"})," data point from that document. Imagine we have ",(0,s.jsx)(t.code,{children:'sender_vat = "CZ123456"'}),". In that case, the query would change to ",(0,s.jsx)(t.code,{children:'{"vatNumber": "CZ123456"}'})," (which means ",(0,s.jsx)(t.code,{children:'"vatNumber"=="CZ123456"'}),")."]}),(0,s.jsxs)(t.p,{children:["You can create many expressions like this. They will be logically connected using the AND operator into a single requirement. For instance: ",(0,s.jsx)(t.code,{children:'{"vatNumber": "{sender_vat}", "country": "{sender_country}"}'})," would mean both ",(0,s.jsx)(t.code,{children:'"vatNumber"'})," should match ",(0,s.jsx)(t.code,{children:'"{sender_vat}"'})," and ",(0,s.jsx)(t.code,{children:'"country"'})," should match ",(0,s.jsx)(t.code,{children:'"{sender_country}"'}),"."]})]}),"\n",(0,s.jsx)(t.h4,{id:"aggregation-pipeline",children:"Aggregation pipeline"}),"\n",(0,s.jsxs)(t.p,{children:["It is a more powerful method for searching and organising the data. You can read about it ",(0,s.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You can't always be sure that a VAT number will be present on every document. However, it is a good approach to start by attempting to match vendors using a dependable identifier, such as the VAT number. In situations where the VAT number is missing, you might have to use a method called fuzzy matching to locate the right vendor."}),"\n",(0,s.jsxs)(t.p,{children:["To perform a fuzzy search, ",(0,s.jsx)(t.code,{children:"$search"})," stage needs to be called inside the aggregate pipeline."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Example",type:"note",children:[(0,s.jsx)(t.p,{children:"Finding a vendor record by looking for extracted Sender Name in the dataset:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "$search": {\n      "text": {\n        "path": ["companyName"],\n        "query": ["{sender_name}"],\n        "fuzzy": {\n          "maxEdits": 1\n        }\n      }\n    }\n  },\n  {\n    "$limit": 3\n  },\n  {\n    "$project": {\n      "companyName": 1,\n      "internalId": 1,\n      "email": 1\n    }\n  }\n]\n'})}),(0,s.jsxs)(t.p,{children:["The search checks for ",(0,s.jsx)(t.code,{children:"{sender_name}"})," in the ",(0,s.jsx)(t.code,{children:"companyName"})," field of the dataset. It gives back all the matches, arranged by score starting from the highest (which is probably the best match) and going down. It is good practice to use the ",(0,s.jsx)(t.code,{children:"$limit"})," stage to only get the top X results of this fuzzy matching. Use the ",(0,s.jsx)(t.code,{children:"$project"})," stage to reduce data traffic and speed up the matching - it makes sure that only the listed ",(0,s.jsx)(t.code,{children:"{key}: 1"})," are returned by the query."]}),(0,s.jsx)(t.p,{children:'You can utilise both of these techniques in the user interface. Just type your query and hit the "Try" button. This will display the top ten results that match your search.'})]}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about the Master Data Hub configuration visit ",(0,s.jsx)(t.a,{href:"/cookbook/docs/extensions/master-data-hub/configuration-examples",children:"Configuration Examples"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8234:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-add-dataset-360548c93dd19d7a7361d1eebb0102e5.png"},2342:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-dataset-management-3e2c9ea86f2208bad9f8697247ca926c.png"},1:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-replace-update-delete-a75ba730bfaf3e2850ad282dc5c1b888.png"},1432:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-test-query-03ee514a2871c88e225210a91bf20263.png"},7815:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-upload-first-dataset-324783a0b58f43bdcbd0bb0726e10c4a.png"},6638:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-upload-status-805eda02c06ed90ffde1713715b36df0.png"},995:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-upload-success-message-6c0c7cb07947679d0dec70abe6a7d066.png"},662:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/mdh-upload-1a971ca33fe1cd8d5b1f42d61bd8d533.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var s=a(7294);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);