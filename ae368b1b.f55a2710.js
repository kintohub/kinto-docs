(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(194)),l={id:"laravel-example",title:"Laravel Example"},i={id:"examples/laravel/laravel-example",isDocsHomePage:!1,title:"Laravel Example",description:"This example has been referenced and rebuilt from Aschmelyun/docker-compose-laravel.",source:"@site/docs/examples/laravel/README.md",permalink:"/examples/laravel/laravel-example",sidebar:"someSidebar",previous:{title:"Flask",permalink:"/examples/flask/flask-example"}},c=[{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Running locally",id:"running-locally",children:[]},{value:"Setup a new project",id:"setup-a-new-project",children:[]},{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[{value:"Deploy a MySQL Server",id:"deploy-a-mysql-server",children:[]},{value:"Deploy Laravel PHP App",id:"deploy-laravel-php-app",children:[]},{value:"Deploy Nginx Php Proxy",id:"deploy-nginx-php-proxy",children:[]}]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This example has been referenced and rebuilt from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aschmelyun/docker-compose-laravel"}),"Aschmelyun/docker-compose-laravel"),".\nYou can use this repository to deploy a Laravel app on KintoHub.\nAdditionally, it can be used to quickly set up Laravel locally on your machine."),Object(o.b)("h2",{id:"directory-structure"},"Directory Structure"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/laravel")," - Generic installation of Laravel"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/nginx")," - Configuration files for nginx to serve PHP"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"laravel.dockerfile")," - Dockerfile to bootstrap Laravel app"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nginx.dockerfile")," - Dockerfile to serve nginx website"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"docker-compose.yaml")," - Composition of nginx + laravel + mysql to work together")),Object(o.b)("h2",{id:"running-locally"},"Running locally"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Requires Docker v2.x or higher")),Object(o.b)("p",null,"In the root of this repository use ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(o.b)("p",null,"Once complete, go to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080")," to access the website!\nIf you are interested in using MySQL, find the database credentials in the ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file."),Object(o.b)("h2",{id:"setup-a-new-project"},"Setup a new project"),Object(o.b)("p",null,"Click on the ",Object(o.b)("strong",{parentName:"p"},"Use this Template")," button at the top right"),Object(o.b)("p",null,"Begin to modify the files as you please!"),Object(o.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(o.b)("p",null,"If you do not have an account, first ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kintohub.com"}),"signup"),"\nThis example requires a MySQL server which requires you to activate ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.kintohub.com/anatomy/billing#activate-pay-as-you-go-billing"}),"pay-as-you-go")," billing on KintoHub."),Object(o.b)("h3",{id:"deploy-a-mysql-server"},"Deploy a MySQL Server"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Create Service")," button at the top right of your environment"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"From Catalog")," tab and then select ",Object(o.b)("strong",{parentName:"li"},"MySQL")," Service"),Object(o.b)("li",{parentName:"ol"},"Fill or generate your ",Object(o.b)("inlineCode",{parentName:"li"},"username"),", ",Object(o.b)("inlineCode",{parentName:"li"},"password")," and ",Object(o.b)("inlineCode",{parentName:"li"},"root password")," for your database"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Deploy")," button at the top right.")),Object(o.b)("p",null,"Once complete, go to the ",Object(o.b)("strong",{parentName:"p"},"Access")," tab and copy the ",Object(o.b)("strong",{parentName:"p"},"Root User Connection String")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/anatomy/my-sql.png",alt:"My SQL"}))),Object(o.b)("p",null,"This will take several minutes to complete"),Object(o.b)("h3",{id:"deploy-laravel-php-app"},"Deploy Laravel PHP App"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Create Service")," button at the top right of your environment"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("strong",{parentName:"li"},"Backend API")," service from the list"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Import URL")," tab"),Object(o.b)("li",{parentName:"ol"},"Enter the repository URL as ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/kintohub/kintohub.git")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Connect")," button"),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Service Name/Hostname")," to ",Object(o.b)("inlineCode",{parentName:"li"},"laravel")),Object(o.b)("li",{parentName:"ol"},"Select the language as ",Object(o.b)("strong",{parentName:"li"},"Dockerfile")),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Dockerfile Name")," to ",Object(o.b)("inlineCode",{parentName:"li"},"laravel.dockerfile")),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Subfolder Path")," to ",Object(o.b)("inlineCode",{parentName:"li"},"./docs/examples/laravel")),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Port")," to ",Object(o.b)("inlineCode",{parentName:"li"},"9000")),Object(o.b)("li",{parentName:"ol"},"Open the ",Object(o.b)("strong",{parentName:"li"},"Environment Variables")," tab and enter the key ",Object(o.b)("inlineCode",{parentName:"li"},"DATABASE_URL")," and paste the connection string value you copied in the ",Object(o.b)("strong",{parentName:"li"},"Deploy a MySQL Server Step")),Object(o.b)("li",{parentName:"ol"},"Additionally, paste the following into the ",Object(o.b)("strong",{parentName:"li"},"key")," textbox:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"APP_NAME=Laravel\nAPP_ENV=dev\nAPP_KEY=base64:PoStwuoIPBnH+W2znwpmQbZvCJZPdou1DedUu+3F7mI=\nAPP_DEBUG=true\nAPP_URL=http://localhost\n\nLOG_CHANNEL=stack\n\nBROADCAST_DRIVER=log\nCACHE_DRIVER=file\nQUEUE_CONNECTION=sync\nSESSION_DRIVER=file\nSESSION_LIFETIME=120\n\n")),Object(o.b)("p",null,"This will take about 6 minutes to complete"),Object(o.b)("h3",{id:"deploy-nginx-php-proxy"},"Deploy Nginx Php Proxy"),Object(o.b)("p",null,"We need to deploy a web host proxy to serve the php app on KintoHub."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Create Service")," button at the top right of your environment"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("strong",{parentName:"li"},"Web App")," service from the list"),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Import URL")," tab"),Object(o.b)("li",{parentName:"ol"},"Enter the repository URL as ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/kintohub/kintohub.git")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Connect")," button"),Object(o.b)("li",{parentName:"ol"},"Select the language as ",Object(o.b)("strong",{parentName:"li"},"Dockerfile")),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Dockerfile Name")," to ",Object(o.b)("inlineCode",{parentName:"li"},"nginx.dockerfile")),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Subfolder Path")," to ",Object(o.b)("inlineCode",{parentName:"li"},"./docs/examples/laravel")),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"Port")," to ",Object(o.b)("inlineCode",{parentName:"li"},"80")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Deploy")," button at the top right")),Object(o.b)("p",null,"When complete, open the ",Object(o.b)("strong",{parentName:"p"},"Access")," tab and open the external URL to see your Laravel app!"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/anatomy/laravel.png",alt:"Laravel"}))),Object(o.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Contact us:")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"https://www.kintohub.com/contact-us")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discord:")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discordapp.com/invite/E2CMjKP"}),"https://discordapp.com/invite/E2CMjKP")))}p.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,O=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(O,i(i({ref:t},b),{},{components:n})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);