function $(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(T)}function B(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function H(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(I(e,n))}function dt(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)a[o]=e.dirty[o]|r[o];return a}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,a){if(r){const l=L(e,n,i,a);t.p(l,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const G=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in G;let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:Q(1,r,b=>e[n[b]].claim_order,u))-1;i[c]=n[f]+1;const s=f+1;n[s]=c,r=Math.max(s,r)}const a=[],l=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);a.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<a.length&&l[c].claim_order>=a[u].claim_order;)u++;const f=u<a.length?a[u]:null;t.insertBefore(l[c],f)}}function U(t,e){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){v&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function gt(){return A(" ")}function bt(){return A("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,r=!1){Z(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function tt(t,e,n,i){return O(t,r=>r.nodeName===e,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||a.push(o.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(e))}function $t(t,e,n){return tt(t,e,n,X)}function et(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function vt(t){return et(t," ")}function Et(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e){return new t(e)}let y;function p(t){y=t}function P(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){P().$$.on_mount.push(t)}function Mt(t){P().$$.after_update.push(t)}const h=[],q=[];let m=[];const C=[],W=Promise.resolve();let N=!1;function z(){N||(N=!0,W.then(D))}function jt(){return z(),W}function S(t){m.push(t)}const E=new Set;let _=0;function D(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;q.length;)q.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;C.length;)C.pop()();N=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const w=new Set;let d;function kt(){d={r:0,c:[],p:d}}function qt(){d.r||g(d.c),d=d.p}function rt(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Ct(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...lt];function Tt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||S(()=>{const l=t.$$.on_mount.map(T).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),a.forEach(S)}function ut(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,i,r,a,l,o=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:a,update:$,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:k(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(s,b,...M)=>{const j=M.length?M[0]:b;return u.ctx&&r(u.ctx[s],u.ctx[s]=j)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](j),f&&ot(t,s)),b}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){J();const s=Y(e.target);u.fragment&&u.fragment.l(s),s.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),K(),D()}p(c)}class Ot{$destroy(){ut(this,1),this.$destroy=$}$on(e,n){if(!B(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!H(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ut as B,U as C,$ as D,ft as E,S as F,xt as G,st as H,dt as I,ht as J,mt as K,_t as L,yt as M,Ot as S,gt as a,pt as b,vt as c,Ct as d,bt as e,qt as f,rt as g,V as h,Lt as i,Mt as j,X as k,$t as l,Y as m,wt as n,At as o,Nt as p,A as q,et as r,at as s,jt as t,Et as u,kt as v,q as w,St as x,Tt as y,Bt as z};
