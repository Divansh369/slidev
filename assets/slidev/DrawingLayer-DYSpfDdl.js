import{d as l,t as i,ac as u,D as m,J as c,o as p,b as d,i as f,H as s}from"../modules/vue-CvPQmK0g.js";import{u as _}from"./context-CEGrHK5A.js";import{c as v}from"./DrawingPreview-DeUkms1j.js";import{_ as g}from"../index-B3p-98WF.js";import"../monaco/bundled-types-CyIXqunv.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-l-ZIzPZG.js";const w=l({__name:"DrawingLayer",setup(h){const{drauu:e,drawingEnabled:o,loadCanvas:t}=v(),r=_().$scale,n=i();return u(()=>{e.mount(n.value,n.value.parentElement),m(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),t()}),c(()=>{e.unmount()}),(a,D)=>(p(),d("svg",{ref_key:"svg",ref:n,class:f(["w-full h-full absolute top-0",{"pointer-events-none":!s(o),"touch-none":s(o)}])},null,2))}}),L=g(w,[["__file","/home/divansh/slidev/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{L as default};
