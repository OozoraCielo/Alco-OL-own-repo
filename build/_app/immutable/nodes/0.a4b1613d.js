import{S as D,i as N,s as O,k as _,q as F,a as k,l as g,m as d,r as M,h as p,c as x,n as c,b,C as h,D as z,E as T,F as X,G as Y,H,I as Z,y as R,z as U,A as j,J as tt,K as et,L as st,g as q,d as C,B as Q}from"../chunks/index.ad1d4fec.js";import{p as at}from"../chunks/stores.72ba6a4d.js";function lt(n){let t,r,s,a,i,u,l,e,f,m,E,o,y,v,I,A,L;return{c(){t=_("nav"),r=_("ul"),s=_("li"),a=_("a"),i=_("h1"),u=F("alco-OL"),e=k(),f=_("a"),m=_("h1"),E=F("F1"),y=k(),v=_("a"),I=_("h1"),A=F("F2"),this.h()},l($){t=g($,"NAV",{class:!0});var w=d(t);r=g(w,"UL",{class:!0});var S=d(r);s=g(S,"LI",{class:!0});var G=d(s);a=g(G,"A",{href:!0,class:!0});var V=d(a);i=g(V,"H1",{class:!0});var W=d(i);u=M(W,"alco-OL"),W.forEach(p),V.forEach(p),e=x(G),f=g(G,"A",{href:!0,class:!0});var B=d(f);m=g(B,"H1",{class:!0});var J=d(m);E=M(J,"F1"),J.forEach(p),B.forEach(p),y=x(G),v=g(G,"A",{href:!0,class:!0});var K=d(v);I=g(K,"H1",{class:!0});var P=d(I);A=M(P,"F2"),P.forEach(p),K.forEach(p),G.forEach(p),S.forEach(p),w.forEach(p),this.h()},h(){c(i,"class","mt-6 mx-5 text-white text-2xl"),c(a,"href","/"),c(a,"class",l=`bg-cyan-dark h-20 bg-opacity-0 hover:bg-opacity-100  ${n[0]==="/"?"bg-opacity-100":"bg-opacity-0"}`),c(m,"class","mt-6 mx-5 text-white text-2xl"),c(f,"href","/floor1"),c(f,"class",o=`bg-cyan-dark h-20 bg-opacity-0 hover:bg-opacity-100  ${n[0]==="/floor1"?"bg-opacity-100":"bg-opacity-0"}`),c(I,"class","mt-6 mx-5 text-white text-2xl"),c(v,"href","/floor2"),c(v,"class",L=`bg-cyan-dark h-20 bg-opacity-0 hover:bg-opacity-100  ${n[0]==="/floor2"?"bg-opacity-100":"bg-opacity-0"}`),c(s,"class","flex"),c(r,"class",""),c(t,"class","bg-cyan w-screen h-20 font-bold shadow-xl z-20 absolute")},m($,w){b($,t,w),h(t,r),h(r,s),h(s,a),h(a,i),h(i,u),h(s,e),h(s,f),h(f,m),h(m,E),h(s,y),h(s,v),h(v,I),h(I,A)},p($,[w]){w&1&&l!==(l=`bg-cyan-dark h-20 bg-opacity-0 hover:bg-opacity-100  ${$[0]==="/"?"bg-opacity-100":"bg-opacity-0"}`)&&c(a,"class",l),w&1&&o!==(o=`bg-cyan-dark h-20 bg-opacity-0 hover:bg-opacity-100  ${$[0]==="/floor1"?"bg-opacity-100":"bg-opacity-0"}`)&&c(f,"class",o),w&1&&L!==(L=`bg-cyan-dark h-20 bg-opacity-0 hover:bg-opacity-100  ${$[0]==="/floor2"?"bg-opacity-100":"bg-opacity-0"}`)&&c(v,"class",L)},i:z,o:z,d($){$&&p(t)}}}function rt(n,t,r){let s,a;return T(n,at,i=>r(1,a=i)),n.$$.update=()=>{n.$$.dirty&2&&r(0,s=a.url.pathname)},[s,a]}class ct extends D{constructor(t){super(),N(this,t,rt,lt,O,{})}}function it(n){let t,r;return{c(){t=_("img"),this.h()},l(s){t=g(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){H(t.src,r="../main-bg.png")||c(t,"src",r),c(t,"alt",""),c(t,"class","")},m(s,a){b(s,t,a)},d(s){s&&p(t)}}}function ot(n){let t,r,s,a,i,u,l,e,f,m,E;return{c(){t=_("img"),s=k(),a=_("img"),u=k(),l=_("img"),f=k(),m=_("img"),this.h()},l(o){t=g(o,"IMG",{src:!0,alt:!0,class:!0}),s=x(o),a=g(o,"IMG",{src:!0,alt:!0,class:!0}),u=x(o),l=g(o,"IMG",{src:!0,alt:!0,class:!0}),f=x(o),m=g(o,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){H(t.src,r="../main-bg.png")||c(t,"src",r),c(t,"alt",""),c(t,"class",""),H(a.src,i="../main-bg.png")||c(a,"src",i),c(a,"alt",""),c(a,"class","absolute"),H(l.src,e="../main-bg.png")||c(l,"src",e),c(l,"alt",""),c(l,"class","absolute mt-[220px]"),H(m.src,E="../main-bg.png")||c(m,"src",E),c(m,"alt",""),c(m,"class","absolute mt-[440px]")},m(o,y){b(o,t,y),b(o,s,y),b(o,a,y),b(o,u,y),b(o,l,y),b(o,f,y),b(o,m,y)},d(o){o&&p(t),o&&p(s),o&&p(a),o&&p(u),o&&p(l),o&&p(f),o&&p(m)}}}function nt(n){let t,r,s;X(n[2]);function a(l,e){return l[1]<1200?ot:it}let i=a(n),u=i(n);return{c(){t=_("div"),u.c(),this.h()},l(l){t=g(l,"DIV",{class:!0});var e=d(t);u.l(e),e.forEach(p),this.h()},h(){c(t,"class","fixed z-0")},m(l,e){b(l,t,e),u.m(t,null),r||(s=Y(window,"resize",n[2]),r=!0)},p(l,[e]){i!==(i=a(l))&&(u.d(1),u=i(l),u&&(u.c(),u.m(t,null)))},i:z,o:z,d(l){l&&p(t),u.d(),r=!1,s()}}}function ut(n,t,r){let s,a;function i(){r(1,s=window.innerWidth),r(0,a=window.innerHeight)}return r(1,s=0),r(0,a=0),[a,s,i]}class ft extends D{constructor(t){super(),N(this,t,ut,nt,O,{})}}function pt(n){let t,r,s,a,i;t=new ct({}),s=new ft({});const u=n[1].default,l=Z(u,n,n[0],null);return{c(){R(t.$$.fragment),r=k(),R(s.$$.fragment),a=k(),l&&l.c()},l(e){U(t.$$.fragment,e),r=x(e),U(s.$$.fragment,e),a=x(e),l&&l.l(e)},m(e,f){j(t,e,f),b(e,r,f),j(s,e,f),b(e,a,f),l&&l.m(e,f),i=!0},p(e,[f]){l&&l.p&&(!i||f&1)&&tt(l,u,e,e[0],i?st(u,e[0],f,null):et(e[0]),null)},i(e){i||(q(t.$$.fragment,e),q(s.$$.fragment,e),q(l,e),i=!0)},o(e){C(t.$$.fragment,e),C(s.$$.fragment,e),C(l,e),i=!1},d(e){Q(t,e),e&&p(r),Q(s,e),e&&p(a),l&&l.d(e)}}}function mt(n,t,r){let{$$slots:s={},$$scope:a}=t;return n.$$set=i=>{"$$scope"in i&&r(0,a=i.$$scope)},[a,s]}class ht extends D{constructor(t){super(),N(this,t,mt,pt,O,{})}}export{ht as component};