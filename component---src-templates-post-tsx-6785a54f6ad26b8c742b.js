(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b}),n.d(t,"postQuery",function(){return y});n(54);var a=n(7),r=n.n(a),l=(n(30),n(0)),o=n.n(l),i=n(161),c=n.n(i),u=n(160),s=n.n(u),m=n(163),p=n(278),d=n(277),f=n(279),g=n(159),h=(n(251),n(252)),E=new(n.n(h).a)({createElement:o.a.createElement,components:{a:m.b,h1:p.a,h2:function(e){return o.a.createElement(p.a,Object.assign({},e,{level:"2"}))},h3:function(e){return o.a.createElement(p.a,Object.assign({},e,{level:"3"}))},h4:function(e){return o.a.createElement(p.a,Object.assign({},e,{level:"4"}))},h5:function(e){return o.a.createElement(p.a,Object.assign({},e,{level:"5"}))},p:d.a,span:f.a}}).Compiler,b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pathContext,t=e.prev,n=e.next,a=this.props.data.markdownRemark;return o.a.createElement(m.a,null,a&&o.a.createElement(m.f,null,o.a.createElement(m.e,{postPath:a.fields.slug,postNode:a,postSEO:!0}),o.a.createElement(c.a,{title:a.frontmatter.title+" | "+g.a.siteTitle}),o.a.createElement("header",null,o.a.createElement(m.b,{to:"/"},g.a.siteTitle),o.a.createElement(p.a,{level:"2"},a.frontmatter.title),o.a.createElement("i",null,a.frontmatter.date," — ",a.timeToRead," Min Read — In"," ",o.a.createElement(m.b,{to:"/categories/"+s()(a.frontmatter.category)},a.frontmatter.category))),o.a.createElement("div",null,E(a.htmlAst),a.frontmatter.tags?o.a.createElement("i",null,"Tags:  ",a.frontmatter.tags.map(function(e,t){return o.a.createElement(m.b,{key:t,to:"/tags/"+s()(e)},o.a.createElement("strong",null,e)," ",t<a.frontmatter.tags.length-1?", ":"")})):null,o.a.createElement(m.d,{prev:t,next:n}))))},t}(o.a.PureComponent),y="3945294077"},159:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Grant Forrest",siteTitleAlt:"Grant Forrest's Blog",siteUrl:"http://grantforrest.net",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"Grant Forrest's Blog",author:"Grant Forrest",siteLogo:"/assets/logo.png",themeColor:"#3498DB",backgroundColor:"#2b2e3c",POST_PER_PAGE:4}},162:function(e){e.exports={data:{site:{buildTime:"07.02.2019"}}}},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),l=n(0),o=n.n(l),i=n(160),c=n.n(i),u=n(275),s=n(278),m=n(277),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,a=e.excerpt,r=e.slug,l=e.timeToRead,i=e.category;return o.a.createElement(u.a,{margin:{top:"medium"}},o.a.createElement(s.a,{level:"3"},o.a.createElement(A,{to:"/blog/"+r},t)),o.a.createElement("i",null,n," — ",l," Min Read — In ",o.a.createElement(A,{to:"/categories/"+c()(i)},i)),o.a.createElement(m.a,null,a))},t}(o.a.PureComponent),d=n(165),f=n.n(d),g=n(162),h=n(39),E=n(1),b=n(166),y=n.n(b),v=n(276),x={global:{font:{family:'"Noto Serif", serif',size:"14px",height:"20px"},colors:{brand:"#323242"}},button:{border:{color:"black",radius:"0",width:"1px"}},heading:{font:{},weight:200},paragraph:{medium:{maxWidth:"720px",height:"32px"}}};function P(){var e=f()(["\n  html {\n    overflow-y: hidden !important;\n  }\n"]);return P=function(){return e},e}var N=Object(E.b)(P()),O=E.d.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-1x5ezfr-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(h.StaticQuery,{query:"1536950682",render:function(t){return o.a.createElement(v.a,{theme:x,full:!0},o.a.createElement(N,null),e,o.a.createElement(O,null,"© ",y()(t.site.buildTime,".")[2]," Grant Forrest. All rights reserved. ",o.a.createElement("br",null)))},data:g})},t}(o.a.PureComponent),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return o.a.createElement(u.a,{margin:{vertical:"small"}},o.a.createElement("div",null,o.a.createElement("label",null,"Previous: "),t?o.a.createElement(A,{to:"/blog/"+c()(t.frontmatter.title)},t.frontmatter.title):o.a.createElement("span",null,"None")),o.a.createElement("div",null,o.a.createElement("label",null,"Next: "),n?o.a.createElement(A,{to:"/blog/"+c()(n.frontmatter.title)},n.frontmatter.title):o.a.createElement("span",null,"None")))},t}(o.a.PureComponent),k=n(161),C=n.n(k),j=n(159),L=function(e){var t,n,a,r,l=e.postNode,i=e.postPath,c=e.postSEO,u="/"===j.a.pathPrefix?"":j.a.pathPrefix;c?(t=l.frontmatter.title,n=l.excerpt,a=j.a.siteBanner,r=j.a.siteUrl+u+i):(t=j.a.siteTitle,n=j.a.siteDescription,a=j.a.siteBanner);a=j.a.siteUrl+u+a;var s=j.a.siteUrl+j.a.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:j.a.siteTitleAlt?j.a.siteTitleAlt:""}];return c&&(m=[{"@context":"http://schema.org","@type":"BlogPosting","@id":r,url:r,name:t,alternateName:j.a.siteTitleAlt?j.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:a},description:j.a.siteDescription,datePublished:l.frontmatter.date,dateModified:l.frontmatter.date,author:{"@type":"Person",name:j.a.author},publisher:{"@type":"Organization",name:j.a.author,logo:{"@type":"ImageObject",url:j.a.siteUrl+u+j.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),o.a.createElement(C.a,null,o.a.createElement("html",{lang:j.a.siteLanguage}),o.a.createElement("title",null,j.a.siteTitle),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),o.a.createElement("meta",{property:"og:url",content:c?r:s}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{property:"og:image",content:a}))},S=(n(80),n(167),n(168),n(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,a=e.url,r=1===t,l=t===n,i=t-1==1?"/"+a+"/":"/"+a+"/"+(t-1).toString(),c="/"+a+"/"+(t+1).toString();return n>1?o.a.createElement("div",null,!r&&o.a.createElement(A,{className:"prev page-numbers",to:i,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return o.a.createElement(A,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+a+"/"+(0===n?"":n+1)},n+1)}),!l&&o.a.createElement(A,{className:"next page-numbers",to:c,rel:"next"},"Next →")):null},t}(o.a.PureComponent)),A=Object(E.d)(h.Link).withConfig({displayName:"Link",componentId:"i4acbz-0"})(["color:#323242;text-decoration:underline;"]),B=(Object(E.d)(h.Link).withConfig({displayName:"Link__WrapLink",componentId:"i4acbz-1"})(["text-decoration:none;color:inherit;"]),n(273)),I=function(e){var t=e.children;return o.a.createElement(B.a.Consumer,null,function(e){return o.a.createElement(u.a,{align:"center"},o.a.createElement(u.a,{pad:"small"!==e?"large":"medium"},t))})};n.d(t,"g",function(){return p}),n.d(t,"a",function(){return T}),n.d(t,"d",function(){return w}),n.d(t,"e",function(){return L}),n.d(t,"c",function(){return S}),n.d(t,"b",function(){return A}),n.d(t,"f",function(){return I})},251:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-tsx-6785a54f6ad26b8c742b.js.map