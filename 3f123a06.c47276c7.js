(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),o=(a(0),a(194)),i=a(198),l={id:"fullstack-example",title:"Full Stack Example"},c={id:"getting-started/fullstack-example",isDocsHomePage:!1,title:"Full Stack Example",description:"This example will walk through putting together a full stack app on KintoHub from the ground up and will take about 15 minutes.",source:"@site/docs/getting-started/fullstack-example.mdx",permalink:"/getting-started/fullstack-example",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/getting-started/introduction"},next:{title:"Command Line Interface (CLI)",permalink:"/anatomy/cli"}},b=[{value:"Create a KintoHub Account",id:"create-a-kintohub-account",children:[]},{value:"Deploy a Postgres Server",id:"deploy-a-postgres-server",children:[]},{value:"Deploy a Hasura Service",id:"deploy-a-hasura-service",children:[]},{value:"Setup React Web App",id:"setup-react-web-app",children:[]},{value:"Optimize Cost",id:"optimize-cost",children:[]}],p={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This example will walk through putting together a full stack app on KintoHub from the ground up and will take about 15 minutes.\nIf you are interested in a quick single service, check out our list of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.kintohub.com/examples/nodejs/nodejs-example"}),"examples"),"."),Object(o.b)("p",null,"This example will deploy a ",Object(o.b)("strong",{parentName:"p"},"Todo List App")," using ",Object(o.b)("inlineCode",{parentName:"p"},"React"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Hasura"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Postgres")," which are available within KintoHub's free tier."),Object(o.b)("h2",{id:"create-a-kintohub-account"},"Create a KintoHub Account"),Object(o.b)("p",null,"If you have not created a KintoHub account yet, to create one please click ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.kintohub.com"}),"here"),"."),Object(o.b)("h2",{id:"deploy-a-postgres-server"},"Deploy a Postgres Server"),Object(o.b)("p",null,"To store your data, you will need a Postgres database.\nKintoHub provides a dedicated Postgres server with 1 GB of storage."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Create Service")," button displayed at the top right of your environment"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"From Catalog")," tab")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/fullstack-example/catalog.png",alt:"Catalog"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"PostgreSQL")," service"),Object(o.b)("li",{parentName:"ol"},"Enter or generate your ",Object(o.b)("inlineCode",{parentName:"li"},"Username"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Password"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"Root Password"),"."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Deploy")," button at the top right.")),Object(o.b)("p",null,"This process will take around ",Object(o.b)("strong",{parentName:"p"},"1 Minute")," to complete.\nOnce the ",Object(o.b)("strong",{parentName:"p"},"Status")," has changed from ",Object(o.b)("inlineCode",{parentName:"p"},"Deploying")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Live Version"),", click on the ",Object(o.b)("strong",{parentName:"p"},"Access")," tab at the top center of the page."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/fullstack-example/access-tab.png",alt:"Access"}))),Object(o.b)("p",null,"Copy the ",Object(o.b)("strong",{parentName:"p"},"Connection String (Admin)")," and paste it in a notepad to use for the next step."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/fullstack-example/admin.png",alt:"Admin"}))),Object(o.b)("h2",{id:"deploy-a-hasura-service"},"Deploy a Hasura Service"),Object(o.b)("p",null,"This tutorial has a premade Hasura repository with migration files available.\nYou can deploy it with the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Create Service")," button at the top right"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Web App")," service"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Import URL")," tab"),Object(o.b)("li",{parentName:"ol"},"Copy and paste the following into the ",Object(o.b)("strong",{parentName:"li"},"Repository URL")," ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/kintohub/todo-hasura")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Connect")," button"),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},"Dockerfile")," in the ",Object(o.b)("strong",{parentName:"li"},"Dockerfile Name")," field"),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},"8080")," in the ",Object(o.b)("strong",{parentName:"li"},"Port")," field"),Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Environment Variables")," tab"),Object(o.b)("li",{parentName:"ol"},"Add the ",Object(o.b)("strong",{parentName:"li"},"key")," ",Object(o.b)("inlineCode",{parentName:"li"},"HASURA_GRAPHQL_DATABASE_URL")," and paste in the ",Object(o.b)("strong",{parentName:"li"},"Connection String (Admin)")," from the previous step as the ",Object(o.b)("strong",{parentName:"li"},"value")),Object(o.b)("li",{parentName:"ol"},"Add the ",Object(o.b)("strong",{parentName:"li"},"key")," ",Object(o.b)("inlineCode",{parentName:"li"},"HASURA_GRAPHQL_ENABLE_CONSOLE")," and enter the value ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Deploy")," button at the top right")),Object(o.b)("img",{alt:"Hasura Environment Variables",src:Object(i.a)("img/fullstack-example/hasura-env-vars.png")}),Object(o.b)("p",null,"This will take around ",Object(o.b)("strong",{parentName:"p"},"30 Seconds")," to complete.\nOnce complete, you can click the link to the right of ",Object(o.b)("strong",{parentName:"p"},"Public API access via"),"\nYou will now see Hasura's dashboard and can copy the ",Object(o.b)("strong",{parentName:"p"},"GraphQL Endpoint URL")),Object(o.b)("img",{alt:"Hasura Console",src:Object(i.a)("img/fullstack-example/hasura-console.png")}),Object(o.b)("h2",{id:"setup-react-web-app"},"Setup React Web App"),Object(o.b)("p",null,"This tutorial has a premade React Todo List App that works with Hasura.\nYou can deploy it with the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Create Service")," button at the top right"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Web App")," service"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Import URL")," tab"),Object(o.b)("li",{parentName:"ol"},"Copy and paste the following into the ",Object(o.b)("strong",{parentName:"li"},"Repository URL")," ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/kintohub/todo-react")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Connect")," button"),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},"Dockerfile")," in the ",Object(o.b)("strong",{parentName:"li"},"Dockerfile Name")," field"),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},"5000")," in the ",Object(o.b)("strong",{parentName:"li"},"Port")," field"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Environment Variables")," tab"),Object(o.b)("li",{parentName:"ol"},"Add the ",Object(o.b)("strong",{parentName:"li"},"key")," ",Object(o.b)("inlineCode",{parentName:"li"},"REACT_APP_SERVER_URL")," and paste the ",Object(o.b)("strong",{parentName:"li"},"GraphQL Endpoint URL")," from the previous step as the ",Object(o.b)("strong",{parentName:"li"},"value")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Deploy")," button")),Object(o.b)("img",{alt:"React Webapp Environment Variables",src:Object(i.a)("img/fullstack-example/react-webapp-env-vars.png")}),Object(o.b)("p",null,"This will take around ",Object(o.b)("strong",{parentName:"p"},"3 Minutes")," to complete.\nOnce complete, you can click the link to the right of ",Object(o.b)("strong",{parentName:"p"},"Public API access via")),Object(o.b)("h2",{id:"optimize-cost"},"Optimize Cost"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Congratulations! You have finished the full stack tutorial.")),Object(o.b)("p",null,"If you are on a paid account and have already used your monthly free credits, the total cost of this environment can be optimized to a max cost of ",Object(o.b)("strong",{parentName:"p"},"$4.34")," USD per month.\nTo do this, update your services with the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lower the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/anatomy/advanced#memory"}),"memory")," of ",Object(o.b)("strong",{parentName:"li"},"todo-hasura")," from ",Object(o.b)("inlineCode",{parentName:"li"},"256")," to ",Object(o.b)("inlineCode",{parentName:"li"},"128")," MB of memory"),Object(o.b)("li",{parentName:"ul"},"Lower the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/anatomy/advanced#memory"}),"memory")," of ",Object(o.b)("strong",{parentName:"li"},"postgres")," from ",Object(o.b)("inlineCode",{parentName:"li"},"256")," to ",Object(o.b)("inlineCode",{parentName:"li"},"128")," MB of memory"),Object(o.b)("li",{parentName:"ul"},"Lower the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/anatomy/advanced#memory"}),"memory")," of ",Object(o.b)("strong",{parentName:"li"},"todo-react")," from ",Object(o.b)("inlineCode",{parentName:"li"},"256")," to ",Object(o.b)("inlineCode",{parentName:"li"},"32")," MB of memory ")))}s.isMDXComponent=!0},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,O=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return a?r.a.createElement(O,l(l({ref:t},b),{},{components:a})):r.a.createElement(O,l({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},195:function(e,t,a){"use strict";var n=a(0),r=a(63);t.a=function(){return Object(n.useContext)(r.a)}},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(77);var n=a(195),r=a(201);function o(e,t){var a=void 0===t?{}:t,o=a.forcePrependBaseUrl,i=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l,b=Object(n.a)().siteConfig,p=(b=void 0===b?{}:b).baseUrl,s=void 0===p?"/":p,m=b.url;if(!e)return e;if(i)return s+e;if(!Object(r.a)(e))return e;var u=s+e.replace(/^\//,"");return c?m+u:u}},201:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))}}]);