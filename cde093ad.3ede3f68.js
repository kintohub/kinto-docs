(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return v})),n.d(t,"default",(function(){return y}));var i=n(2),a=n(9),o=n(0),r=n.n(o),l=n(194),c=(n(27),n(21),n(20),n(206)),u=n(196),s=n(182),b=n.n(s),p=37,m=39;var d=function(e){var t=e.block,n=e.children,i=e.defaultValue,a=e.values,l=e.groupId,s=Object(c.a)(),d=s.tabGroupChoices,f=s.setTabGroupChoices,h=Object(o.useState)(i),O=h[0],v=h[1];if(null!=l){var j=d[l];null!=j&&j!==O&&a.some((function(e){return e.value===j}))&&v(j)}var y=function(e){v(e),null!=l&&f(l,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":t})},a.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:Object(u.a)("tabs__item",b.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return y(t)},onClick:function(){return y(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))};var f=function(e){return r.a.createElement("div",null,e.children)},h={id:"cli",title:"Command Line Interface (CLI)"},O={id:"anatomy/cli",isDocsHomePage:!1,title:"Command Line Interface (CLI)",description:"KintoHub has a command line interface (CLI) which can be used to debug and interact with your services.",source:"@site/docs/anatomy/anatomy-cli.mdx",permalink:"/anatomy/cli",sidebar:"someSidebar",previous:{title:"Full Stack Example",permalink:"/getting-started/fullstack-example"},next:{title:"Environment Overview",permalink:"/anatomy/environment"}},v=[{value:"Install",id:"install",children:[]},{value:"Commands",id:"commands",children:[{value:"kinto login",id:"kinto-login",children:[]},{value:"kinto env",id:"kinto-env",children:[]},{value:"kinto status",id:"kinto-status",children:[]},{value:"kinto svs environmentId",id:"kinto-svs-environmentid",children:[]},{value:"kinto teleport",id:"kinto-teleport",children:[]},{value:"kinto version",id:"kinto-version",children:[]},{value:"kinto help",id:"kinto-help",children:[]},{value:"kinto init {hostName}",id:"kinto-init-hostname",children:[]}]}],j={rightToc:v};function y(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"KintoHub has a command line interface (CLI) which can be used to debug and interact with your services."),Object(l.b)("p",null,"The CLI is currently an open source ",Object(l.b)("strong",{parentName:"p"},"ALPHA")," utility that we are working on.\nContributions are welcomed at ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/kintohub/kinto-cli"}),"kintohub/kinto-cli")),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)(d,{defaultValue:"mac",values:[{label:"Mac",value:"mac"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(l.b)(f,{value:"mac",mdxType:"TabItem"},"You can install kinto-cli with the following command within your terminal:",Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"curl -L https://cli.kinto.io/install.sh | bash\n"))),Object(l.b)(f,{value:"windows",mdxType:"TabItem"},"You can install kinto-cli with the following command within your Powershell terminal:",Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"iex (new-object net.webclient).downloadstring('https://cli.kinto.io/install.ps1')\n"))),Object(l.b)(f,{value:"linux",mdxType:"TabItem"},"You can install kinto-cli with the following command within your terminal:",Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"curl -L https://cli.kinto.io/install.sh | bash\n")))),Object(l.b)("h2",{id:"commands"},"Commands"),Object(l.b)("h3",{id:"kinto-login"},"kinto login"),Object(l.b)("p",null,"This will allow you to login to your KintoHub account"),Object(l.b)("h3",{id:"kinto-env"},"kinto env"),Object(l.b)("p",null,"Lists all environments on your account"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"\u279c  backend-api-template git:(master) \u2717 kinto env\nSUCCESS:  Available environments:\n+--------------------------+-----------------+---------------+\n|          ENV ID          |      NAME       |    REGION     |\n+--------------------------+-----------------+---------------+\n| 5f043ec54101fe821c26d7bf | dev             | North America |\n+--------------------------+-----------------+---------------+\n| 5f066e8a85baef4fb0ae8b55 | asdf            | Europe        |\n+--------------------------+-----------------+---------------+\n| 5f07c44074d9403badce5685 | test            | Asia          |\n+--------------------------+-----------------+---------------+\n| 5f081aaa6b3d7dd0cb612885 | dev2            | Asia          |\n+--------------------------+-----------------+---------------+\n| 5f0d759f16f0e82d6cf777dc | coolexample     | Asia          |\n+--------------------------+-----------------+---------------+\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Requirements")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This command requires you to be logged in.")),Object(l.b)("h3",{id:"kinto-status"},"kinto status"),Object(l.b)("p",null,"Lists all environments that the ",Object(l.b)("inlineCode",{parentName:"p"},".git")," repository has been deployed to."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"\u279c  backend-api-template git:(master) \u2717 kinto status\nSUCCESS:  Repo is deployed to these environments:\n+----------+-----------------------------+\n| ENV  NAME |        SERVICE NAME        |\n+----------+-----------------------------+\n| dev       | backendapitemplate         |\n+----------+-----------------------------+\n| dev2      | backendapitemplate-4a5638b |\n+----------+-----------------------------+\n| dev3      | backendapitemplate-7beb0ce |\n+----------+-----------------------------+\n| dev4      | backendapitemplate-e1747df |\n+----------+-----------------------------+\n| dev5      | backendapitemplate-fc8a681 |\n+----------+-----------------------------+\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Requirements")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This command requires you to be logged in."),Object(l.b)("li",{parentName:"ul"},"Command must be ran within a ",Object(l.b)("inlineCode",{parentName:"li"},".git")," repository")),Object(l.b)("h3",{id:"kinto-svs-environmentid"},"kinto svs ","[environmentId]"),Object(l.b)("p",null,"You will be prompted to choose an environment if the optional ",Object(l.b)("strong",{parentName:"p"},"[environmentId]")," argument was not supplied.\nThis command will list all services within the chosen environment."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Requirements")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This command requires you to be logged in.")),Object(l.b)("h3",{id:"kinto-teleport"},"kinto teleport"),Object(l.b)("p",null,"This command will port-forward all of your remote services from the chosen environment to your local machine.\nYou will be prompted to choose an environment."),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"\u279c  backend-api-template git:(master) \u2717 kinto teleport\n? Select environment: dev\nINFO:     Starting Tunnel\nINFO:     > Forwarding: localhost:5360 => elixir-examples:80\nINFO:     > Forwarding: localhost:5361 => kintohub:80\nINFO:     > Forwarding: localhost:5362 => kintohub-2a5f0f2:80\nSUCCESS:  Connected!\n\nPress any key to close the tunnel\n")),Object(l.b)("h3",{id:"kinto-version"},"kinto version"),Object(l.b)("p",null,"Displays the CLI version"),Object(l.b)("h3",{id:"kinto-help"},"kinto help"),Object(l.b)("p",null,"Displays a list of available commands"),Object(l.b)("h3",{id:"kinto-init-hostname"},"kinto init {hostName}"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Recommended for enterprise users only")),Object(l.b)("p",null,"Switches the target ",Object(l.b)("strong",{parentName:"p"},"KintoHub")," cluster for future CLI commands."),Object(l.b)("h4",{id:"reset-to-default-settings"},"Reset to default settings"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"kinto init default")," will reset your CLI to the default settings"))}y.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=i,d=b["".concat(r,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},196:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}},205:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=a},206:function(e,t,n){"use strict";var i=n(0),a=n(205);t.a=function(){return Object(i.useContext)(a.a)}}}]);