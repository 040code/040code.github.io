(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"tJ/O":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return P}));var r=a("q1tI"),n=a.n(r),o=a("mwIZ"),i=a.n(o),p=a("Bl7J"),s=a("SgMy"),d=a("1oc3"),c=a("e+E3"),l=a("Wbzz"),m=a("vOnD");var g=m.b.nav.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"sc-12qqrrb-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),u=Object(m.b)(l.Link).withConfig({displayName:"Pagination__PageBtn",componentId:"sc-12qqrrb-1"})(["border-radius:3px;background-color:rgba(32,35,42,0.85);border:1px solid rgba(32,35,42,0.85);color:#ffffff;padding:8px 20px;min-width:130px;&:hover{background-color:#ffffff;color:rgba(32,35,42,0.85);border:1px solid rgba(32,35,42,0.85);}@media (max-width:564px){margin-top:10px;width:100%;}"]),b=Object(m.b)(u).withConfig({displayName:"Pagination__PreviousBtn",componentId:"sc-12qqrrb-2"})(["order:1;@media (max-width:564px){order:2;}"]),f=Object(m.b)(u).withConfig({displayName:"Pagination__NextBtn",componentId:"sc-12qqrrb-3"})(["order:3;"]),x=m.b.span.withConfig({displayName:"Pagination__Spacer",componentId:"sc-12qqrrb-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),h=m.b.span.withConfig({displayName:"Pagination__PageInfo",componentId:"sc-12qqrrb-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),w=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.currentPage,a=e.nbPages,r=2===t?"/":"/pages/"+(t-1);return n.a.createElement(g,null,1!==t?n.a.createElement(b,{to:r},"‹ Newer posts"):n.a.createElement(x,{className:"previous"}),n.a.createElement(h,null,"Page ",t," of ",a),t<a?n.a.createElement(f,{to:"/pages/"+(t+1)},"Older posts ›"):n.a.createElement(x,{className:"next"}))},r}(n.a.Component),y=a("EYWl");var _=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=i()(this,"props.data.site.siteMetadata.title"),t=i()(this,"props.data.site.siteMetadata.description"),a=i()(this,"props.data.allMarkdownRemark.edges"),r=this.props.pageContext;return n.a.createElement(p.a,{location:this.props.location},n.a.createElement(y.a,null),n.a.createElement(d.a,{title:e,subtitle:t}),n.a.createElement(s.a,null,n.a.createElement(c.a,{posts:a})),n.a.createElement(w,{nbPages:r.nbPages,currentPage:r.currentPage}))},r}(n.a.Component),P=(t.default=_,"2009615503")}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-f4d4d74a632731031b6a.js.map