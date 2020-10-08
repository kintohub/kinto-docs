(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(9),r=(n(0),n(215)),i={id:"advanced",title:"Advanced Settings"},c={id:"anatomy/advanced",isDocsHomePage:!1,title:"Advanced Settings",description:"Advanced settings give you full control to customize your service's resources and timeout settings.",source:"@site/docs/anatomy/anatomy-advanced.md",permalink:"/anatomy/advanced",sidebar:"someSidebar",previous:{title:"Environment Variables",permalink:"/anatomy/environment-variables"},next:{title:"Billing",permalink:"/anatomy/billing"}},s=[{value:"View Advanced Settings",id:"view-advanced-settings",children:[]},{value:"How It Works?",id:"how-it-works",children:[{value:"Memory",id:"memory",children:[]},{value:"Dedicated vCPU",id:"dedicated-vcpu",children:[]},{value:"Auto Scaling",id:"auto-scaling",children:[]},{value:"Cost Optimization",id:"cost-optimization",children:[]},{value:"Storage (Persistence)",id:"storage-persistence",children:[]},{value:"Max Monthly Cost Estimation",id:"max-monthly-cost-estimation",children:[]}]}],b={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Advanced settings give you full control to customize your service's resources and timeout settings.\nOnce you make a change to any advanced setting, you will be required to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/anatomy/deploy"}),"Deploy")," the changes."),Object(r.b)("h2",{id:"view-advanced-settings"},"View Advanced Settings"),Object(r.b)("p",null,"The advanced settings tab is located under the ",Object(r.b)("strong",{parentName:"p"},"Edit Service")," slide-out menu."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to your KintoHub account"),Object(r.b)("li",{parentName:"ol"},"Create a new service or click on a Service in your ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/anatomy/environment"}),"Environment")),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Edit Service")," button at the top right")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/anatomy/edit-service.png",alt:"Edit Service"}))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Find the tab called ",Object(r.b)("strong",{parentName:"li"},"Advanced")," on the far right")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/anatomy/advanced-tab.png",alt:"Advanced"}))),Object(r.b)("h2",{id:"how-it-works"},"How It Works?"),Object(r.b)("p",null,"Unique settings will be available depending on your service type."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/anatomy/advance-options.png",alt:"Advance options"}))),Object(r.b)("h3",{id:"memory"},"Memory"),Object(r.b)("p",null,"The amount of memory your application has guaranteed access to at all times.\nUsing ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/anatomy/metrics"}),"Metric")," tab, you see the actual memory usage of your service and fine-tune the amount of memory you want to allocate to your service over time.\nThe lowest value of memory you may use is ",Object(r.b)("strong",{parentName:"p"},"32 Mb")," and the highest value is ",Object(r.b)("strong",{parentName:"p"},"4 Gb"),"."),Object(r.b)("p",null,"If you require more memory, you may ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"contact support"),"."),Object(r.b)("h3",{id:"dedicated-vcpu"},"Dedicated vCPU"),Object(r.b)("p",null,"By default and when toggled off, the vCPU of your service is shared between KintoHub community.\nShared vCPU may randomly affect the performance of your service and is only recommended for ",Object(r.b)("inlineCode",{parentName:"p"},"dev")," environments."),Object(r.b)("p",null,"When toggled on, you will have the option to specify a guaranteed dedicated amount of vCPU for your service.\nThe lowest amount of vCPU you may use is ",Object(r.b)("strong",{parentName:"p"},"0.1 cores")," which is 10% of a dedicated vCPU.\nThe highest amount of vCPU available is ",Object(r.b)("strong",{parentName:"p"},"2")," which guarantees ",Object(r.b)("strong",{parentName:"p"},"2")," dedicated vCPU cores."),Object(r.b)("p",null,"If you require more vCPU, you may ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"contact support"),"."),Object(r.b)("h3",{id:"auto-scaling"},"Auto Scaling"),Object(r.b)("p",null,"The auto-scaling feature is only available when your service has ",Object(r.b)("strong",{parentName:"p"},"Dedicated vCPU")," enabled.\nWhen enabled, you will be able to set the ",Object(r.b)("strong",{parentName:"p"},"Min Instances")," and ",Object(r.b)("strong",{parentName:"p"},"Max Instances")," that your service may scale up to.\nThis is known as ",Object(r.b)("strong",{parentName:"p"},"Horizontal Scaling")," and is best used for ",Object(r.b)("strong",{parentName:"p"},"Stateless")," services.\nThe maximum number of instances you may scale to is ",Object(r.b)("strong",{parentName:"p"},"10"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Min Instances")," is the number of instances running at all times. Your environment may require ",Object(r.b)("strong",{parentName:"li"},"High Availability")," which can be achieved by setting ",Object(r.b)("strong",{parentName:"li"},"Min Instances")," to the number of instances you wish to have running at all times."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Max Instances")," is the maximum number of instances you will allow your service to scale to. When your service sustains ",Object(r.b)("strong",{parentName:"li"},"70%")," CPU usage for a short period, KintoHub will spawn another instance for you. When your service no longer is using a high amount of load, KintoHub will scale down your instances back down to your ",Object(r.b)("strong",{parentName:"li"},"Min Instances")," value.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"An ",Object(r.b)("strong",{parentName:"p"},"instance")," is a single running version of your application or service. When multiple instances are running, KintoHub balances the API request load between your service instances."))),Object(r.b)("h3",{id:"cost-optimization"},"Cost Optimization"),Object(r.b)("p",null,"When enabled, KintoHub will deploy your service instances on discounted vCPU and Memory resources.\nDiscounted instances uptime ",Object(r.b)("strong",{parentName:"p"},"are not")," guaranteed, and you may incur some downtime if you do not set up at least ",Object(r.b)("strong",{parentName:"p"},"2 min instances")," for your service.\nToday, it is not recommended to use ",Object(r.b)("strong",{parentName:"p"},"Cost Optimization")," for Production environments, but the team is working hard on building more confidence in providing a cost-effective production version of ",Object(r.b)("strong",{parentName:"p"},"Cost Optimization")," in the future.\nPrice differences between Cost Optimization versus Standard pricing are described in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/anatomy/billing"}),"Billing"),"."),Object(r.b)("h3",{id:"storage-persistence"},"Storage (Persistence)"),Object(r.b)("p",null,"Catalog related services may optionally enable or disable ",Object(r.b)("strong",{parentName:"p"},"Persistent Volumes"),". When ",Object(r.b)("strong",{parentName:"p"},"Persistent Volumes")," are disabled and your instance restarts for any reason, ",Object(r.b)("strong",{parentName:"p"},"your data WILL be lost"),".\nIt is not recommended to disable persistence unless you plan to do a quick test or use a Catalog service for caching such as Redis."),Object(r.b)("p",null,"The minimum value of storage you may select is ",Object(r.b)("strong",{parentName:"p"},"1 Gb")," and the maximum is ",Object(r.b)("strong",{parentName:"p"},"200 Gb"),"."),Object(r.b)("p",null,"Catalog Services that support Persistent Storage:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Postgres")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is currently ",Object(r.b)("strong",{parentName:"p"},"NOT")," possible to increase your Storage amount. Vote on the feature ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://feedback.kintohub.com/feature-requests/p/increase-persistent-storage-disk-size"}),"here"),"."))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You may never decrease the value of your Storage amount due to the irreversible damage that may occur if you decrease the disk by too much.\nIf you wish to decrease your storage amount, you must create another service and migrate the data."))),Object(r.b)("h3",{id:"max-monthly-cost-estimation"},"Max Monthly Cost Estimation"),Object(r.b)("p",null,"KintoHub calculates ",Object(r.b)("strong",{parentName:"p"},"the worse case cost")," of your service based on the advanced configurations values that you have set.\nThe ",Object(r.b)("strong",{parentName:"p"},"worse case")," is calculated by your service running 24/7 for 30 days.\nThe actual cost of your service ",Object(r.b)("strong",{parentName:"p"},"is billed per second"),".\nIf you delete your service, you will no longer be charged."),Object(r.b)("p",null,"When setting up ",Object(r.b)("strong",{parentName:"p"},"Auto Scaling")," the ",Object(r.b)("strong",{parentName:"p"},"Max Monthly Cost")," is calculated with the ",Object(r.b)("strong",{parentName:"p"},"Max Instances")," you have set for your service.\nThe probability of the ",Object(r.b)("strong",{parentName:"p"},"Max Monthly Cost")," occurring is low for Auto Scale related estimations because it would be rare for the ",Object(r.b)("strong",{parentName:"p"},"Max Instances")," to be running 24/7 for 30 days."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"KintoHub believes it is important to know how much your services cost per month and guarantee that you will never be surprised by an unexpected bill."),Object(r.b)("p",{parentName:"div"},"The team will continue to build notification systems and clarity throughout the platform to inform your team about its cloud costs and tips on optimizing your cost as your application grows."))))}l.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,d=m["".concat(i,".").concat(p)]||m[p]||u[p]||r;return n?o.a.createElement(d,c(c({ref:t},b),{},{components:n})):o.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);