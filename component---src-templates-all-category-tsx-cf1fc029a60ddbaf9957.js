(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});n(54);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(161),c=n.n(l),u=n(39),s=n(160),m=n.n(s),p=n(163),d=n(276),f=n(159),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pathContext.categories;if(e)return o.a.createElement(p.a,null,o.a.createElement(p.f,null,o.a.createElement(c.a,{title:"Categories | "+f.a.siteTitle}),o.a.createElement("header",null,o.a.createElement(u.Link,{to:"/"},f.a.siteTitle),o.a.createElement(d.a,{level:"2"},"Categories")),o.a.createElement("div",null,e.map(function(e,t){return o.a.createElement(d.a,{key:t},o.a.createElement(u.Link,{to:"/categories/"+m()(e)},e))}))))},t}(o.a.PureComponent)},159:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Grant Forrest",siteTitleAlt:"Grant Forrest's Blog",siteUrl:"http://grantforrest.net",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"Grant Forrest's Blog",author:"Grant Forrest",siteLogo:"/assets/logo.png",themeColor:"#3498DB",backgroundColor:"#2b2e3c",POST_PER_PAGE:4}},162:function(e){e.exports={data:{site:{buildTime:"06.02.2019"}}}},163:function(e,t,n){"use strict";var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(160),c=n.n(l),u=n(273),s=n(276),m=n(275),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,i=e.timeToRead,l=e.category;return o.a.createElement(u.a,{margin:{top:"medium"}},o.a.createElement(s.a,{level:"3"},o.a.createElement(B,{to:"/blog/"+a},t)),o.a.createElement("i",null,n," — ",i," Min Read — In ",o.a.createElement(B,{to:"/categories/"+c()(l)},l)),o.a.createElement(m.a,null,r))},t}(o.a.PureComponent),d=n(165),f=n.n(d),g=n(162),h=n(39),E=n(1),y=n(166),b=n.n(y),v=n(274),x={global:{font:{family:'"Noto Serif", serif',size:"14px",height:"20px"},colors:{brand:"#323242"}},button:{border:{color:"black",radius:"0",width:"1px"}},heading:{font:{},weight:200},paragraph:{medium:{maxWidth:"720px",height:"32px"}}};function P(){var e=f()(["\n  @import url('https://fonts.googleapis.com/css?family=Noto+Serif:200,400');\n\n  html {\n    overflow-y: hidden !important;\n  }\n"]);return P=function(){return e},e}var N=Object(E.b)(P()),C=E.d.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-1x5ezfr-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),T=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(h.StaticQuery,{query:"1536950682",render:function(t){return o.a.createElement(v.a,{theme:x,full:!0},o.a.createElement(N,null),e,o.a.createElement(C,null,"© ",b()(t.site.buildTime,".")[2]," Grant Forrest. All rights reserved. ",o.a.createElement("br",null)))},data:g})},t}(o.a.PureComponent),k=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return o.a.createElement(u.a,{margin:{vertical:"small"}},o.a.createElement("div",null,o.a.createElement("label",null,"Previous: "),t?o.a.createElement(B,{to:"/blog/"+c()(t.frontmatter.title)},t.frontmatter.title):o.a.createElement("span",null,"None")),o.a.createElement("div",null,o.a.createElement("label",null,"Next: "),n?o.a.createElement(B,{to:"/blog/"+c()(n.frontmatter.title)},n.frontmatter.title):o.a.createElement("span",null,"None")))},t}(o.a.PureComponent),w=n(161),L=n.n(w),O=n(159),S=function(e){var t,n,r,a,i=e.postNode,l=e.postPath,c=e.postSEO,u="/"===O.a.pathPrefix?"":O.a.pathPrefix;c?(t=i.frontmatter.title,n=i.excerpt,r=O.a.siteBanner,a=O.a.siteUrl+u+l):(t=O.a.siteTitle,n=O.a.siteDescription,r=O.a.siteBanner);r=O.a.siteUrl+u+r;var s=O.a.siteUrl+O.a.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:O.a.siteTitleAlt?O.a.siteTitleAlt:""}];return c&&(m=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:O.a.siteTitleAlt?O.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:O.a.siteDescription,datePublished:i.frontmatter.date,dateModified:i.frontmatter.date,author:{"@type":"Person",name:O.a.author},publisher:{"@type":"Organization",name:O.a.author,logo:{"@type":"ImageObject",url:O.a.siteUrl+u+O.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),o.a.createElement(L.a,null,o.a.createElement("html",{lang:O.a.siteLanguage}),o.a.createElement("title",null,O.a.siteTitle),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{name:"image",content:r}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),o.a.createElement("meta",{property:"og:url",content:c?a:s}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{property:"og:image",content:r}))},A=(n(81),n(167),n(168),n(169),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,i=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),c="/"+r+"/"+(t+1).toString();return n>1?o.a.createElement("div",null,!a&&o.a.createElement(B,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return o.a.createElement(B,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!i&&o.a.createElement(B,{className:"next page-numbers",to:c,rel:"next"},"Next →")):null},t}(o.a.PureComponent)),B=Object(E.d)(h.Link).withConfig({displayName:"Link",componentId:"i4acbz-0"})(["color:#323242;text-decoration:underline;"]),j=(Object(E.d)(h.Link).withConfig({displayName:"Link__WrapLink",componentId:"i4acbz-1"})(["text-decoration:none;color:inherit;"]),n(271)),z=function(e){var t=e.children;return o.a.createElement(j.a.Consumer,null,function(e){return o.a.createElement(u.a,{align:"center"},o.a.createElement(u.a,{pad:"small"!==e?"large":"medium"},t))})};n.d(t,"g",function(){return p}),n.d(t,"a",function(){return T}),n.d(t,"d",function(){return k}),n.d(t,"e",function(){return S}),n.d(t,"c",function(){return A}),n.d(t,"b",function(){return B}),n.d(t,"f",function(){return z})}}]);
//# sourceMappingURL=component---src-templates-all-category-tsx-cf1fc029a60ddbaf9957.js.map