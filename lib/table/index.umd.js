(function(a,x){typeof exports=="object"&&typeof module<"u"?module.exports=x(require("vue")):typeof define=="function"&&define.amd?define(["vue"],x):(a=typeof globalThis<"u"?globalThis:a||self,a.index=x(a.Vue))})(this,function(a){"use strict";const x=e=>e.replace(/(A-Z)g/,"-$1").toLocaleLowerCase();var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ot(){this.__data__=[],this.size=0}var it=ot;function st(e,t){return e===t||e!==e&&t!==t}var pe=st,ct=pe;function lt(e,t){for(var r=e.length;r--;)if(ct(e[r][0],t))return r;return-1}var D=lt,ft=D,ut=Array.prototype,pt=ut.splice;function gt(e){var t=this.__data__,r=ft(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():pt.call(t,r,1),--this.size,!0}var dt=gt,yt=D;function vt(e){var t=this.__data__,r=yt(t,e);return r<0?void 0:t[r][1]}var bt=vt,$t=D;function ht(e){return $t(this.__data__,e)>-1}var _t=ht,mt=D;function Tt(e,t){var r=this.__data__,n=mt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var jt=Tt,At=it,wt=dt,St=bt,Ct=_t,Ot=jt;function T(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}T.prototype.clear=At,T.prototype.delete=wt,T.prototype.get=St,T.prototype.has=Ct,T.prototype.set=Ot;var F=T,It=F;function xt(){this.__data__=new It,this.size=0}var Pt=xt;function Et(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var kt=Et;function Bt(e){return this.__data__.get(e)}var Lt=Bt;function Mt(e){return this.__data__.has(e)}var Dt=Mt,Ft=typeof M=="object"&&M&&M.Object===Object&&M,ge=Ft,Nt=ge,Gt=typeof self=="object"&&self&&self.Object===Object&&self,Vt=Nt||Gt||Function("return this")(),b=Vt,Ut=b,zt=Ut.Symbol,q=zt,de=q,ye=Object.prototype,Kt=ye.hasOwnProperty,Rt=ye.toString,P=de?de.toStringTag:void 0;function Ht(e){var t=Kt.call(e,P),r=e[P];try{e[P]=void 0;var n=!0}catch{}var i=Rt.call(e);return n&&(t?e[P]=r:delete e[P]),i}var qt=Ht,Wt=Object.prototype,Jt=Wt.toString;function Yt(e){return Jt.call(e)}var Xt=Yt,ve=q,Zt=qt,Qt=Xt,er="[object Null]",tr="[object Undefined]",be=ve?ve.toStringTag:void 0;function rr(e){return e==null?e===void 0?tr:er:be&&be in Object(e)?Zt(e):Qt(e)}var N=rr;function ar(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var E=ar,nr=N,or=E,ir="[object AsyncFunction]",sr="[object Function]",cr="[object GeneratorFunction]",lr="[object Proxy]";function fr(e){if(!or(e))return!1;var t=nr(e);return t==sr||t==cr||t==ir||t==lr}var $e=fr,ur=b,pr=ur["__core-js_shared__"],gr=pr,W=gr,he=function(){var e=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function dr(e){return!!he&&he in e}var yr=dr,vr=Function.prototype,br=vr.toString;function $r(e){if(e!=null){try{return br.call(e)}catch{}try{return e+""}catch{}}return""}var _e=$r,hr=$e,_r=yr,mr=E,Tr=_e,jr=/[\\^$.*+?()[\]{}|]/g,Ar=/^\[object .+?Constructor\]$/,wr=Function.prototype,Sr=Object.prototype,Cr=wr.toString,Or=Sr.hasOwnProperty,Ir=RegExp("^"+Cr.call(Or).replace(jr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xr(e){if(!mr(e)||_r(e))return!1;var t=hr(e)?Ir:Ar;return t.test(Tr(e))}var Pr=xr;function Er(e,t){return e==null?void 0:e[t]}var kr=Er,Br=Pr,Lr=kr;function Mr(e,t){var r=Lr(e,t);return Br(r)?r:void 0}var h=Mr,Dr=h,Fr=b,Nr=Dr(Fr,"Map"),J=Nr,Gr=h,Vr=Gr(Object,"create"),G=Vr,me=G;function Ur(){this.__data__=me?me(null):{},this.size=0}var zr=Ur;function Kr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Rr=Kr,Hr=G,qr="__lodash_hash_undefined__",Wr=Object.prototype,Jr=Wr.hasOwnProperty;function Yr(e){var t=this.__data__;if(Hr){var r=t[e];return r===qr?void 0:r}return Jr.call(t,e)?t[e]:void 0}var Xr=Yr,Zr=G,Qr=Object.prototype,ea=Qr.hasOwnProperty;function ta(e){var t=this.__data__;return Zr?t[e]!==void 0:ea.call(t,e)}var ra=ta,aa=G,na="__lodash_hash_undefined__";function oa(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=aa&&t===void 0?na:t,this}var ia=oa,sa=zr,ca=Rr,la=Xr,fa=ra,ua=ia;function j(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}j.prototype.clear=sa,j.prototype.delete=ca,j.prototype.get=la,j.prototype.has=fa,j.prototype.set=ua;var pa=j,Te=pa,ga=F,da=J;function ya(){this.size=0,this.__data__={hash:new Te,map:new(da||ga),string:new Te}}var va=ya;function ba(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var $a=ba,ha=$a;function _a(e,t){var r=e.__data__;return ha(t)?r[typeof t=="string"?"string":"hash"]:r.map}var V=_a,ma=V;function Ta(e){var t=ma(this,e).delete(e);return this.size-=t?1:0,t}var ja=Ta,Aa=V;function wa(e){return Aa(this,e).get(e)}var Sa=wa,Ca=V;function Oa(e){return Ca(this,e).has(e)}var Ia=Oa,xa=V;function Pa(e,t){var r=xa(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var Ea=Pa,ka=va,Ba=ja,La=Sa,Ma=Ia,Da=Ea;function A(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}A.prototype.clear=ka,A.prototype.delete=Ba,A.prototype.get=La,A.prototype.has=Ma,A.prototype.set=Da;var Fa=A,Na=F,Ga=J,Va=Fa,Ua=200;function za(e,t){var r=this.__data__;if(r instanceof Na){var n=r.__data__;if(!Ga||n.length<Ua-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Va(n)}return r.set(e,t),this.size=r.size,this}var Ka=za,Ra=F,Ha=Pt,qa=kt,Wa=Lt,Ja=Dt,Ya=Ka;function w(e){var t=this.__data__=new Ra(e);this.size=t.size}w.prototype.clear=Ha,w.prototype.delete=qa,w.prototype.get=Wa,w.prototype.has=Ja,w.prototype.set=Ya;var Xa=w;function Za(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Qa=Za,en=h,tn=function(){try{var e=en(Object,"defineProperty");return e({},"",{}),e}catch{}}(),rn=tn,je=rn;function an(e,t,r){t=="__proto__"&&je?je(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ae=an,nn=Ae,on=pe,sn=Object.prototype,cn=sn.hasOwnProperty;function ln(e,t,r){var n=e[t];(!(cn.call(e,t)&&on(n,r))||r===void 0&&!(t in e))&&nn(e,t,r)}var we=ln,fn=we,un=Ae;function pn(e,t,r,n){var i=!r;r||(r={});for(var l=-1,s=t.length;++l<s;){var c=t[l],g=n?n(r[c],e[c],c,r,e):void 0;g===void 0&&(g=e[c]),i?un(r,c,g):fn(r,c,g)}return r}var U=pn;function gn(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var dn=gn;function yn(e){return e!=null&&typeof e=="object"}var k=yn,vn=N,bn=k,$n="[object Arguments]";function hn(e){return bn(e)&&vn(e)==$n}var _n=hn,Se=_n,mn=k,Ce=Object.prototype,Tn=Ce.hasOwnProperty,jn=Ce.propertyIsEnumerable,An=Se(function(){return arguments}())?Se:function(e){return mn(e)&&Tn.call(e,"callee")&&!jn.call(e,"callee")},wn=An,Sn=Array.isArray,Y=Sn,z={exports:{}};function Cn(){return!1}var On=Cn;(function(e,t){var r=b,n=On,i=t&&!t.nodeType&&t,l=i&&!0&&e&&!e.nodeType&&e,s=l&&l.exports===i,c=s?r.Buffer:void 0,g=c?c.isBuffer:void 0,p=g||n;e.exports=p})(z,z.exports);var In=9007199254740991,xn=/^(?:0|[1-9]\d*)$/;function Pn(e,t){var r=typeof e;return t=t==null?In:t,!!t&&(r=="number"||r!="symbol"&&xn.test(e))&&e>-1&&e%1==0&&e<t}var En=Pn,kn=9007199254740991;function Bn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=kn}var Oe=Bn,Ln=N,Mn=Oe,Dn=k,Fn="[object Arguments]",Nn="[object Array]",Gn="[object Boolean]",Vn="[object Date]",Un="[object Error]",zn="[object Function]",Kn="[object Map]",Rn="[object Number]",Hn="[object Object]",qn="[object RegExp]",Wn="[object Set]",Jn="[object String]",Yn="[object WeakMap]",Xn="[object ArrayBuffer]",Zn="[object DataView]",Qn="[object Float32Array]",eo="[object Float64Array]",to="[object Int8Array]",ro="[object Int16Array]",ao="[object Int32Array]",no="[object Uint8Array]",oo="[object Uint8ClampedArray]",io="[object Uint16Array]",so="[object Uint32Array]",u={};u[Qn]=u[eo]=u[to]=u[ro]=u[ao]=u[no]=u[oo]=u[io]=u[so]=!0,u[Fn]=u[Nn]=u[Xn]=u[Gn]=u[Zn]=u[Vn]=u[Un]=u[zn]=u[Kn]=u[Rn]=u[Hn]=u[qn]=u[Wn]=u[Jn]=u[Yn]=!1;function co(e){return Dn(e)&&Mn(e.length)&&!!u[Ln(e)]}var lo=co;function fo(e){return function(t){return e(t)}}var X=fo,B={exports:{}};(function(e,t){var r=ge,n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,l=i&&i.exports===n,s=l&&r.process,c=function(){try{var g=i&&i.require&&i.require("util").types;return g||s&&s.binding&&s.binding("util")}catch{}}();e.exports=c})(B,B.exports);var uo=lo,po=X,Ie=B.exports,xe=Ie&&Ie.isTypedArray,go=xe?po(xe):uo,yo=go,vo=dn,bo=wn,$o=Y,ho=z.exports,_o=En,mo=yo,To=Object.prototype,jo=To.hasOwnProperty;function Ao(e,t){var r=$o(e),n=!r&&bo(e),i=!r&&!n&&ho(e),l=!r&&!n&&!i&&mo(e),s=r||n||i||l,c=s?vo(e.length,String):[],g=c.length;for(var p in e)(t||jo.call(e,p))&&!(s&&(p=="length"||i&&(p=="offset"||p=="parent")||l&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||_o(p,g)))&&c.push(p);return c}var Pe=Ao,wo=Object.prototype;function So(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||wo;return e===r}var Z=So;function Co(e,t){return function(r){return e(t(r))}}var Ee=Co,Oo=Ee,Io=Oo(Object.keys,Object),xo=Io,Po=Z,Eo=xo,ko=Object.prototype,Bo=ko.hasOwnProperty;function Lo(e){if(!Po(e))return Eo(e);var t=[];for(var r in Object(e))Bo.call(e,r)&&r!="constructor"&&t.push(r);return t}var Mo=Lo,Do=$e,Fo=Oe;function No(e){return e!=null&&Fo(e.length)&&!Do(e)}var ke=No,Go=Pe,Vo=Mo,Uo=ke;function zo(e){return Uo(e)?Go(e):Vo(e)}var Q=zo,Ko=U,Ro=Q;function Ho(e,t){return e&&Ko(t,Ro(t),e)}var qo=Ho;function Wo(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Jo=Wo,Yo=E,Xo=Z,Zo=Jo,Qo=Object.prototype,ei=Qo.hasOwnProperty;function ti(e){if(!Yo(e))return Zo(e);var t=Xo(e),r=[];for(var n in e)n=="constructor"&&(t||!ei.call(e,n))||r.push(n);return r}var ri=ti,ai=Pe,ni=ri,oi=ke;function ii(e){return oi(e)?ai(e,!0):ni(e)}var ee=ii,si=U,ci=ee;function li(e,t){return e&&si(t,ci(t),e)}var fi=li,te={exports:{}};(function(e,t){var r=b,n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,l=i&&i.exports===n,s=l?r.Buffer:void 0,c=s?s.allocUnsafe:void 0;function g(p,C){if(C)return p.slice();var v=p.length,m=c?c(v):new p.constructor(v);return p.copy(m),m}e.exports=g})(te,te.exports);function ui(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var pi=ui;function gi(e,t){for(var r=-1,n=e==null?0:e.length,i=0,l=[];++r<n;){var s=e[r];t(s,r,e)&&(l[i++]=s)}return l}var di=gi;function yi(){return[]}var Be=yi,vi=di,bi=Be,$i=Object.prototype,hi=$i.propertyIsEnumerable,Le=Object.getOwnPropertySymbols,_i=Le?function(e){return e==null?[]:(e=Object(e),vi(Le(e),function(t){return hi.call(e,t)}))}:bi,re=_i,mi=U,Ti=re;function ji(e,t){return mi(e,Ti(e),t)}var Ai=ji;function wi(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var Me=wi,Si=Ee,Ci=Si(Object.getPrototypeOf,Object),De=Ci,Oi=Me,Ii=De,xi=re,Pi=Be,Ei=Object.getOwnPropertySymbols,ki=Ei?function(e){for(var t=[];e;)Oi(t,xi(e)),e=Ii(e);return t}:Pi,Fe=ki,Bi=U,Li=Fe;function Mi(e,t){return Bi(e,Li(e),t)}var Di=Mi,Fi=Me,Ni=Y;function Gi(e,t,r){var n=t(e);return Ni(e)?n:Fi(n,r(e))}var Ne=Gi,Vi=Ne,Ui=re,zi=Q;function Ki(e){return Vi(e,zi,Ui)}var Ri=Ki,Hi=Ne,qi=Fe,Wi=ee;function Ji(e){return Hi(e,Wi,qi)}var Yi=Ji,Xi=h,Zi=b,Qi=Xi(Zi,"DataView"),es=Qi,ts=h,rs=b,as=ts(rs,"Promise"),ns=as,os=h,is=b,ss=os(is,"Set"),cs=ss,ls=h,fs=b,us=ls(fs,"WeakMap"),ps=us,ae=es,ne=J,oe=ns,ie=cs,se=ps,Ge=N,S=_e,Ve="[object Map]",gs="[object Object]",Ue="[object Promise]",ze="[object Set]",Ke="[object WeakMap]",Re="[object DataView]",ds=S(ae),ys=S(ne),vs=S(oe),bs=S(ie),$s=S(se),_=Ge;(ae&&_(new ae(new ArrayBuffer(1)))!=Re||ne&&_(new ne)!=Ve||oe&&_(oe.resolve())!=Ue||ie&&_(new ie)!=ze||se&&_(new se)!=Ke)&&(_=function(e){var t=Ge(e),r=t==gs?e.constructor:void 0,n=r?S(r):"";if(n)switch(n){case ds:return Re;case ys:return Ve;case vs:return Ue;case bs:return ze;case $s:return Ke}return t});var ce=_,hs=Object.prototype,_s=hs.hasOwnProperty;function ms(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&_s.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Ts=ms,js=b,As=js.Uint8Array,ws=As,He=ws;function Ss(e){var t=new e.constructor(e.byteLength);return new He(t).set(new He(e)),t}var le=Ss,Cs=le;function Os(e,t){var r=t?Cs(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Is=Os,xs=/\w*$/;function Ps(e){var t=new e.constructor(e.source,xs.exec(e));return t.lastIndex=e.lastIndex,t}var Es=Ps,qe=q,We=qe?qe.prototype:void 0,Je=We?We.valueOf:void 0;function ks(e){return Je?Object(Je.call(e)):{}}var Bs=ks,Ls=le;function Ms(e,t){var r=t?Ls(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Ds=Ms,Fs=le,Ns=Is,Gs=Es,Vs=Bs,Us=Ds,zs="[object Boolean]",Ks="[object Date]",Rs="[object Map]",Hs="[object Number]",qs="[object RegExp]",Ws="[object Set]",Js="[object String]",Ys="[object Symbol]",Xs="[object ArrayBuffer]",Zs="[object DataView]",Qs="[object Float32Array]",ec="[object Float64Array]",tc="[object Int8Array]",rc="[object Int16Array]",ac="[object Int32Array]",nc="[object Uint8Array]",oc="[object Uint8ClampedArray]",ic="[object Uint16Array]",sc="[object Uint32Array]";function cc(e,t,r){var n=e.constructor;switch(t){case Xs:return Fs(e);case zs:case Ks:return new n(+e);case Zs:return Ns(e,r);case Qs:case ec:case tc:case rc:case ac:case nc:case oc:case ic:case sc:return Us(e,r);case Rs:return new n;case Hs:case Js:return new n(e);case qs:return Gs(e);case Ws:return new n;case Ys:return Vs(e)}}var lc=cc,fc=E,Ye=Object.create,uc=function(){function e(){}return function(t){if(!fc(t))return{};if(Ye)return Ye(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),pc=uc,gc=pc,dc=De,yc=Z;function vc(e){return typeof e.constructor=="function"&&!yc(e)?gc(dc(e)):{}}var bc=vc,$c=ce,hc=k,_c="[object Map]";function mc(e){return hc(e)&&$c(e)==_c}var Tc=mc,jc=Tc,Ac=X,Xe=B.exports,Ze=Xe&&Xe.isMap,wc=Ze?Ac(Ze):jc,Sc=wc,Cc=ce,Oc=k,Ic="[object Set]";function xc(e){return Oc(e)&&Cc(e)==Ic}var Pc=xc,Ec=Pc,kc=X,Qe=B.exports,et=Qe&&Qe.isSet,Bc=et?kc(et):Ec,Lc=Bc,Mc=Xa,Dc=Qa,Fc=we,Nc=qo,Gc=fi,Vc=te.exports,Uc=pi,zc=Ai,Kc=Di,Rc=Ri,Hc=Yi,qc=ce,Wc=Ts,Jc=lc,Yc=bc,Xc=Y,Zc=z.exports,Qc=Sc,el=E,tl=Lc,rl=Q,al=ee,nl=1,ol=2,il=4,tt="[object Arguments]",sl="[object Array]",cl="[object Boolean]",ll="[object Date]",fl="[object Error]",rt="[object Function]",ul="[object GeneratorFunction]",pl="[object Map]",gl="[object Number]",at="[object Object]",dl="[object RegExp]",yl="[object Set]",vl="[object String]",bl="[object Symbol]",$l="[object WeakMap]",hl="[object ArrayBuffer]",_l="[object DataView]",ml="[object Float32Array]",Tl="[object Float64Array]",jl="[object Int8Array]",Al="[object Int16Array]",wl="[object Int32Array]",Sl="[object Uint8Array]",Cl="[object Uint8ClampedArray]",Ol="[object Uint16Array]",Il="[object Uint32Array]",f={};f[tt]=f[sl]=f[hl]=f[_l]=f[cl]=f[ll]=f[ml]=f[Tl]=f[jl]=f[Al]=f[wl]=f[pl]=f[gl]=f[at]=f[dl]=f[yl]=f[vl]=f[bl]=f[Sl]=f[Cl]=f[Ol]=f[Il]=!0,f[fl]=f[rt]=f[$l]=!1;function K(e,t,r,n,i,l){var s,c=t&nl,g=t&ol,p=t&il;if(r&&(s=i?r(e,n,i,l):r(e)),s!==void 0)return s;if(!el(e))return e;var C=Xc(e);if(C){if(s=Wc(e),!c)return Uc(e,s)}else{var v=qc(e),m=v==rt||v==ul;if(Zc(e))return Vc(e,c);if(v==at||v==tt||m&&!i){if(s=g||m?{}:Yc(e),!c)return g?Kc(e,Gc(s,e)):zc(e,Nc(s,e))}else{if(!f[v])return i?e:{};s=Jc(e,v,c)}}l||(l=new Mc);var R=l.get(e);if(R)return R;l.set(e,s),tl(e)?e.forEach(function($){s.add(K($,t,r,$,e,l))}):Qc(e)&&e.forEach(function($,o){s.set(o,K($,t,r,o,e,l))});var ue=p?g?Hc:Rc:g?al:rl,H=C?void 0:ue(e);return Dc(H||e,function($,o){H&&(o=$,$=e[o]),Fc(s,o,K($,t,r,o,e,l))}),s}var xl=K,Pl=xl,El=1,kl=4;function Bl(e){return Pl(e,El|kl)}var fe=Bl;const Ll=["element-loading-text","element-loading-spinner","element-loading-background","element-loading-svg","element-loading-svg-view-box"],Ml={key:0,style:{display:"flex","align-items":"center"}},Dl=["onClick"],Fl={key:1,class:"action-icon"},Nl={key:1},Gl=a.defineComponent({__name:"index",props:{options:{type:Array,required:!0},data:{type:Array,required:!0},elementLoadingText:{type:String},elementLoadingSpinner:{type:String},elementLoadingBackground:{type:String},elementLoadingSvg:{type:String},elementLoadingSvgViewBox:{type:String},editIcon:{type:String,default:"Edit"},isEditRow:{type:Boolean,default:!1},editRowIndex:{type:String,default:""},pagination:{type:Boolean,default:!1},paginationAlign:{type:String,default:"center"},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},pageSizes:{type:Array,default:()=>[10,20,30,40]},total:{type:Number,default:0}},emits:["confirm","cancel","update:editRowIndex","size-change","current-change"],setup(e,{emit:t}){const r=e,n=a.ref(fe(r.data));let i=a.ref(r.editRowIndex),l=a.ref("");const s=a.computed(()=>r.options.filter(o=>!o.action)),c=a.computed(()=>r.options.find(o=>o.action));let g=a.computed(()=>r.paginationAlign==="left"?"flex-start":r.paginationAlign==="right"?"flex-end":"center");const p=a.computed(()=>!r.data||!r.data.length),C=o=>{l.value=o.$index+o.column.id},v=()=>{l.value=""},m=(o,O)=>{console.log(c.value),O.label===(c==null?void 0:c.value.label)&&(console.log(123),r.isEditRow&&r.editRowIndex===i.value&&(o.rowEdit=!o.rowEdit,n.value.map(L=>{L!==o&&(L.rowEdit=!1)}),o.rowEdit||t("update:editRowIndex","")))};let R=o=>{t("confirm",o)},ue=o=>{t("cancel",o)},H=o=>{t("size-change",o)},$=o=>{t("current-change",o)};return a.watch(()=>r.data,o=>{n.value=fe(o),n.value.map(O=>{O.rowEdit=!1})},{deep:!0}),a.watch(()=>r.editRowIndex,o=>{o&&(i.value=fe(o))}),a.onMounted(()=>{n.value.map(o=>{o.rowEdit=!1})}),(o,O)=>{const L=a.resolveComponent("el-input"),Ul=a.resolveComponent("el-icon-check"),zl=a.resolveComponent("el-icon-close"),nt=a.resolveComponent("el-table-column"),Kl=a.resolveComponent("el-table"),Rl=a.resolveComponent("el-pagination"),Hl=a.resolveDirective("loading");return a.withDirectives((a.openBlock(),a.createElementBlock("div",a.mergeProps({"element-loading-text":e.elementLoadingText,"element-loading-spinner":e.elementLoadingSpinner,"element-loading-background":e.elementLoadingBackground,"element-loading-svg":e.elementLoadingSvg,"element-loading-svg-view-box":e.elementLoadingSvgViewBox},o.$attrs),[a.createVNode(Kl,{data:n.value,onRowClick:m},{default:a.withCtx(()=>[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(a.unref(s),(d,ql)=>(a.openBlock(),a.createBlock(nt,{key:ql,label:d.label,prop:d.prop,width:d.width,align:d.align},{default:a.withCtx(y=>[y.row.rowEdit?(a.openBlock(),a.createBlock(L,{key:0,size:"small",modelValue:y.row[d.prop],"onUpdate:modelValue":I=>y.row[d.prop]=I},null,8,["modelValue","onUpdate:modelValue"])):(a.openBlock(),a.createElementBlock(a.Fragment,{key:1},[y.$index+y.column.id===a.unref(l)?(a.openBlock(),a.createElementBlock("div",Ml,[a.createElementVNode("div",null,[a.createVNode(L,{size:"small",modelValue:y.row[d.prop],"onUpdate:modelValue":I=>y.row[d.prop]=I},null,8,["modelValue","onUpdate:modelValue"])]),a.createElementVNode("div",{onClick:a.withModifiers(v,["stop"])},[o.$slots.cellEdit?a.renderSlot(o.$slots,"cellEdit",{key:0,scope:y},void 0,!0):(a.openBlock(),a.createElementBlock("div",Fl,[a.createVNode(Ul,{class:"check",onClick:a.withModifiers(I=>a.unref(R)(y),["stop"])},null,8,["onClick"]),a.createVNode(zl,{class:"close",onClick:a.withModifiers(I=>a.unref(ue)(y),["stop"])},null,8,["onClick"])]))],8,Dl)])):(a.openBlock(),a.createElementBlock(a.Fragment,{key:1},[d.slot?a.renderSlot(o.$slots,d.slot,{key:0,scope:y},void 0,!0):(a.openBlock(),a.createElementBlock("span",Nl,a.toDisplayString(y.row[d.prop]),1)),(a.openBlock(),a.createBlock(a.resolveDynamicComponent(`el-icon-${a.unref(x)(e.editIcon)}`),{onClick:a.withModifiers(I=>C(y),["stop"])},null,8,["onClick"]))],64))],64))]),_:2},1032,["label","prop","width","align"]))),128)),a.createVNode(nt,{label:a.unref(c).label,width:a.unref(c).width,align:a.unref(c).align},{default:a.withCtx(d=>[d.row.rowEdit?a.renderSlot(o.$slots,"editRow",{key:0,scope:d},void 0,!0):a.renderSlot(o.$slots,"action",{key:1,scope:d},void 0,!0)]),_:3},8,["label","width","align"])]),_:3},8,["data"]),e.pagination?(a.openBlock(),a.createElementBlock("div",{key:0,class:"pagination",style:a.normalizeStyle({justifyContent:a.unref(g)})},[a.createVNode(Rl,{currentPage:e.currentPage,"onUpdate:currentPage":O[0]||(O[0]=d=>a.isRef(currentPage)?currentPage.value=d:null),"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:a.unref(H),onCurrentChange:a.unref($)},null,8,["currentPage","page-sizes","page-size","total","onSizeChange","onCurrentChange"])],4)):a.createCommentVNode("",!0)],16,Ll)),[[Hl,a.unref(p)]])}}}),Wl="",Vl=((e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r})(Gl,[["__scopeId","data-v-45dd7382"]]);return{install(e){e.component("m-table",Vl)}}});