"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{1524:function(n,t,r){r.d(t,{OT:function(){return s},QY:function(){return u},Y5:function(){return p},oO:function(){return f},y:function(){return l}});var e=r(5861),a=r(7757),o=r.n(a),i=r(1243),c="93713711e3fc7fbaccea6e4405d36600";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,e.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9278:function(n,t,r){r.r(t);var e=r(5861),a=r(9439),o=r(7757),i=r.n(o),c=r(2791),u=r(1524),s=r(1087),p=r(7689),l=r(1686),f=r.n(l),d=r(5558),x=r(184);t.default=function(){var n,t=(0,c.useState)([]),r=(0,a.Z)(t,2),o=r[0],l=r[1],g=(0,s.lr)(),h=(0,a.Z)(g,2),b=h[0],v=h[1],m=(0,c.useState)(""),Z=(0,a.Z)(m,2),k=Z[0],w=Z[1],y=null!==(n=b.get("filter"))&&void 0!==n?n:"",P=(0,p.TH)();(0,c.useEffect)((function(){function n(){return(n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.OT)(y);case 3:t=n.sent,(r=t.results).length<1&&f().Notify.warning("We can't find it, try again"),l(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),f().Notify.warning("Something wrong, try again please");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}y&&function(){n.apply(this,arguments)}()}),[y]);return o?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d.kD,{onSubmit:function(n){k||f().Notify.warning("Please fill in the gap"),n.preventDefault(),v(""!==k?{filter:k}:{}),w("")},children:[(0,x.jsx)(d.MA,{type:"text",value:k,name:"input",onChange:function(n){return t=n.currentTarget.value.toLowerCase(),void w(t);var t}}),(0,x.jsx)(d.qX,{type:"submit",children:"Search"})]}),o&&(0,x.jsx)(d.OM,{children:o.map((function(n){var t;return t=n.poster_path?"https://image.tmdb.org/t/p/w400/".concat(n.poster_path):"https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg",(0,x.jsxs)(d.nf,{to:"".concat(n.id),state:{from:P},children:[(0,x.jsx)("img",{src:t,width:"400",alt:n.title}),(0,x.jsx)(d.rS,{children:n.title})]},n.id)}))})]}):null}},5558:function(n,t,r){r.d(t,{$L:function(){return q},H:function(){return T},LY:function(){return L},MA:function(){return S},OM:function(){return w},Qj:function(){return P},fG:function(){return C},kD:function(){return j},nf:function(){return k},qX:function(){return _},rS:function(){return y},tP:function(){return U},tk:function(){return z},vr:function(){return M},z_:function(){return O}});var e,a,o,i,c,u,s,p,l,f,d,x,g,h,b,v=r(168),m=r(6444),Z=r(1087),k=(0,m.ZP)(Z.rU)(e||(e=(0,v.Z)(["\n  width: 400px;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  text-decoration: none;\n  margin-bottom: 40px;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n  &:hover {\n    scale: calc(1.03);\n    box-shadow: 0px 0px 20px 8px gray;\n  }\n  &:nth-last-child(-n + 4) {\n    margin-bottom: 0;\n  }\n"]))),w=(0,m.ZP)("div")(a||(a=(0,v.Z)(["\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),y=(0,m.ZP)("h2")(o||(o=(0,v.Z)(["\n  text-align: center;\n  font-size: 25px;\n  color: white;\n"]))),P=(0,m.ZP)(Z.rU)(i||(i=(0,v.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  border: 2px solid black;\n  background-color: black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  :focus {\n    background-color: red;\n    color: black;\n  }\n"]))),_=(0,m.ZP)("button")(c||(c=(0,v.Z)(["\n  font-size: 20px;\n  background-color: white;\n  color: black;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  focus {\n    color: black;\n    background-color: red;\n  }\n"]))),j=(0,m.ZP)("form")(u||(u=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n"]))),S=(0,m.ZP)("input")(s||(s=(0,v.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  outline: none;\n  border: 2px solid black;\n  border-radius: 5px;\n"]))),z=(0,m.ZP)("h1")(p||(p=(0,v.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 40px;\n"]))),U=(0,m.ZP)("div")(l||(l=(0,v.Z)(["\n  padding: 50px;\n"]))),O=(0,m.ZP)("h3")(f||(f=(0,v.Z)(["\n  margin-top: 0;\n  font-size: 25px;\n"]))),L=(0,m.ZP)(Z.OL)(d||(d=(0,v.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:focus,\n  :hover {\n    color: white;\n    background-color: red;\n  }\n  &.active {\n    color: white;\n    background-color: red;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),C=(0,m.ZP)("div")(x||(x=(0,v.Z)(["\n  padding: 20px;\n"]))),M=(0,m.ZP)("div")(g||(g=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),T=(0,m.ZP)("p")(h||(h=(0,v.Z)(["\n  font-size: 40px;\n"]))),q=(0,m.ZP)(Z.rU)(b||(b=(0,v.Z)([""])))}}]);
//# sourceMappingURL=278.6263cc00.chunk.js.map