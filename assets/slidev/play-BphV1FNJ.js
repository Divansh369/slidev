const __vite__fileDeps=["assets/slidev/DrawingControls-DbhR_qIl.js","assets/modules/unplugin-icons-bM2cz7es.js","assets/modules/vue-CvPQmK0g.js","assets/modules/shiki-l-ZIzPZG.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-DeUkms1j.js","assets/index-B3p-98WF.js","assets/monaco/bundled-types-CyIXqunv.js","assets/modules/file-saver-DY7lxZlc.js","assets/monaco/bundled-types-CFoY-kCx.css","assets/index-UM5xp8zf.css","assets/DrawingPreview-BqcdRwcI.css","assets/slidev/ContextMenu-DyBheWj0.js","assets/slidev/IconButton-DxWzRxtd.js","assets/slidev/title-renderer-6Y7dKEqr.js","assets/slidev/context-CEGrHK5A.js","assets/ContextMenu-EZAKxWQn.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as w,g as B,h as H,_ as O}from"../monaco/bundled-types-CyIXqunv.js";import{d as g,a7 as $,o,c as r,H as e,b as _,e as n,f as R,i as M,g as i,ag as T,y as z,k as x,af as y,a6 as E,Q as V,l as p,F as I,x as N,v as U,t as A,h as L}from"../modules/vue-CvPQmK0g.js";import{_ as h,h as C,l as S,m as D,a as Q,n as W,o as P,w as F,q as G,r as j}from"../index-B3p-98WF.js";import{Q as q,G as K,C as X,r as Y,u as J,S as Z,N as ee,o as te}from"./ContextMenu-DyBheWj0.js";import{c as oe,a as se}from"./DrawingPreview-DeUkms1j.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-l-ZIzPZG.js";import"../modules/unplugin-icons-bM2cz7es.js";import"./IconButton-DxWzRxtd.js";import"./title-renderer-6Y7dKEqr.js";import"./context-CEGrHK5A.js";const le="/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:l}){const a=c,t=$(a,"modelValue",l);function s(){t.value=!1}return(v,u)=>(o(),r(T,null,[e(t)?(o(),_("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:u[0]||(u[0]=f=>s())}),n("div",{class:M(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[R(v.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ie=h(ne,[["__file","/home/divansh/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),re={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},de=["innerHTML"],ue=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:le,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),E("dev ")])])],-1),ce=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:l}){const t=$(c,"modelValue",l),s=z(()=>typeof w.info=="string");return(v,u)=>(o(),r(ie,{modelValue:e(t),"onUpdate:modelValue":u[0]||(u[0]=f=>y(t)?t.value=f:null),class:"px-6 py-4"},{default:x(()=>[n("div",re,[s.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(w).info},null,8,de)):i("v-if",!0),ue])]),_:1},8,["modelValue"]))}}),me=h(ce,[["__file","/home/divansh/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]),pe=g({__name:"Controls",setup(c){const l=V(),a=V();return(d,t)=>(o(),_(I,null,[p(q,{modelValue:e(C),"onUpdate:modelValue":t[0]||(t[0]=s=>y(C)?C.value=s:null)},null,8,["modelValue"]),p(K),l.value?(o(),r(e(l),{key:0})):i("v-if",!0),a.value?(o(),r(e(a),{key:1,modelValue:e(S),"onUpdate:modelValue":t[1]||(t[1]=s=>y(S)?S.value=s:null)},null,8,["modelValue"])):i("v-if",!0),e(w).info?(o(),r(me,{key:2,modelValue:e(D),"onUpdate:modelValue":t[2]||(t[2]=s=>y(D)?D.value=s:null)},null,8,["modelValue"])):i("v-if",!0),p(X)],64))}}),ve=h(pe,[["__file","/home/divansh/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),fe=g({__name:"PrintStyle",setup(c){function l(a,{slots:d}){if(d.default)return U("style",d.default())}return(a,d)=>(o(),r(l,null,{default:x(()=>[E(" @page { size: "+N(e(B))+"px "+N(e(H))+"px; margin: 0px; } ",1)]),_:1}))}}),_e=h(fe,[["__file","/home/divansh/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ge=g({__name:"play",setup(c){Y();const{next:l,prev:a,isEmbedded:d,isPrintMode:t}=Q(),{isDrawing:s}=oe(),v=A();function u(m){var b;P.value||m.button===0&&((b=m.target)==null?void 0:b.id)==="slide-container"&&(m.pageX/window.innerWidth>.6?l():a())}J(v);const f=z(()=>W.value||P.value);V();const k=V();return O(()=>import("./DrawingControls-DbhR_qIl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(m=>k.value=m.default),(m,b)=>(o(),_(I,null,[e(t)?(o(),r(_e,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:v,class:M(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(se,{class:"w-full h-full",style:L({background:"var(--slidev-slide-container-background, black)"}),width:e(t)?e(F).width.value:void 0,scale:e(G),"is-main":!0,onPointerdown:u,onContextmenu:e(te)},{default:x(()=>[p(Z,{"render-context":"slide"})]),controls:x(()=>[e(t)?i("v-if",!0):(o(),_("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[f.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[p(ee,{class:"m-auto",persist:f.value},null,8,["persist"])],2)),!e(w).drawings.presenterOnly&&!e(d)&&k.value?(o(),r(e(k),{key:1,class:"ml-0"})):i("v-if",!0)]),_:1},8,["style","width","scale","onContextmenu"]),i("v-if",!0)],2),e(t)?i("v-if",!0):(o(),r(ve,{key:1}))],64))}}),Ne=h(ge,[["__file","/home/divansh/slidev/node_modules/@slidev/client/pages/play.vue"]]);export{Ne as default};
