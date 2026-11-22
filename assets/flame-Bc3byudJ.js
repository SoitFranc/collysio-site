import{_ as e,h as t,m as n}from"./bouton-DayX2Rd3.js";import{Ct as r,Ht as i,I as a,Jn as o,Ln as s,Sr as c,St as l,W as u,Wn as d,X as f,Y as p,Z as m,c as h,f as g,kt as _,qn as v,qt as y,v as b,w as x,wt as S,xr as C,zt as w}from"./three.core-5VOlvwnv.js";var T=new t;T.setMeshoptDecoder(n);var E=new Map;function D(e=`donjon`){let t=E.get(e);return t||(t=T.loadAsync(`/kit/${e}.glb`).then(e=>{let t=new Map;e.scene.updateMatrixWorld(!0);for(let n of e.scene.children){let e=n.matrixWorld.clone().invert(),r=[];n.traverse(t=>{let n=t;if(!n.isMesh)return;let i=n.material;i.metalness=0,i.roughness=.9,r.push({geometry:n.geometry,material:i,local:e.clone().multiply(n.matrixWorld)})}),t.set(n.name,r)}let n=new Map,r=(e,t)=>{if(!t)return e;let r=n.get(t);if(!r){let i=e.clone();i.color.set(t),n.set(t,r=i)}return r},i=(e,n,i,a,o)=>{let s=new u;s.name=e;let c=t.get(e);if(!c)return console.warn(`kit : pièce inconnue « ${e} »`),s;let d=new l;for(let e of c){let t=new m(e.geometry,r(e.material,o),n.length);n.forEach((n,r)=>t.setMatrixAt(r,d.multiplyMatrices(n,e.local))),t.instanceMatrix.needsUpdate=!0,t.castShadow=i,t.receiveShadow=a,t.frustumCulled=!1,t.userData.shadowSet=!0,s.add(t)}return s};return{put:(e,t,n={})=>i(e,t,n.cast??!1,n.receive??!0,n.tint),one:e=>i(e,[new l],!0,!0),has:e=>t.has(e)}}),E.set(e,t)),t}var O=new y,k=new c(0,1,0);function A(e,t,n,r=0,i=1){let a=typeof i==`number`?new c(i,i,i):new c(...i);return new l().compose(new c(e,t,n),O.setFromAxisAngle(k,r).clone(),a)}function j(e,t,n=0,r=1,i=0){return A(Math.cos(t)*e,n,Math.sin(t)*e,-t-Math.PI/2+i,r)}var M=null,N=null,P=new S({color:`#150d08`});function F(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#d8c4a2`,t.fillRect(0,0,512,512);let n=7,r=()=>(n=n*16807%2147483647)/2147483647;for(let e=0;e<4;e++)for(let n=-1;n<2;n++){let i=n*256+(e%2?128:0);t.fillStyle=`rgba(${r()<.5?`255,240,210`:`110,80,52`},${.05+r()*.13})`,t.fillRect(i+2,e*128+2,252,124),t.strokeStyle=`rgba(90,66,44,0.3)`,t.lineWidth=2,t.strokeRect(i+1,e*128+1,254,126),t.strokeStyle=`rgba(255,246,225,0.35)`,t.lineWidth=1,t.beginPath(),t.moveTo(i+3,e*128+4),t.lineTo(i+253,e*128+4),t.stroke()}for(let e=0;e<900;e++)t.fillStyle=`rgba(96,70,46,${.08+r()*.16})`,t.fillRect(r()*512,r()*512,1+r()*5,1+r()*1.5);let i=new g(e);return i.colorSpace=d,i.wrapS=i.wrapT=s,i.repeat.set(.16,.16),i.anisotropy=4,i}var I=()=>L().pale;function L(){if(!M){let e=F();M=new _({map:e,color:`#ffffff`,roughness:.95,metalness:0}),N=new _({map:e,color:`#fff3dc`,roughness:.85,metalness:0})}return{stone:M,pale:N}}var R=(e,t,n,r,i,a)=>new h(e,t,n).translate(r,i,a);function z(t,n,r){let i=r/7,s=1.3*i,c=new o;c.moveTo(-n/2,0),c.lineTo(n/2,0),c.lineTo(n/2,r),c.lineTo(-n/2,r),c.closePath();let l=Math.min(n*.52,3.5*i),u=r*.44,d=[];if(t===`arch`){let e=new w;e.moveTo(-l/2,.03),e.lineTo(-l/2,u),e.absarc(0,u,l/2,Math.PI,0,!0),e.lineTo(l/2,.03),e.closePath(),c.holes.push(e);let t=new o;t.absarc(0,u,l/2+.34*i,0,Math.PI,!1),t.absarc(0,u,l/2,Math.PI,0,!0),d.push(new a(t,{depth:.16*i,bevelEnabled:!1,curveSegments:18}));for(let e of[-1,1])d.push(R(.55*i,.26*i,.3*i,e*(l/2+.17*i),u-.13*i,.1*i));d.push(R(.5*i,.75*i,.34*i,0,u+l/2+.2*i,.1*i))}else if(t===`attic`){let e=Math.min(n*.2,1.3*i),t=new w;t.moveTo(-e/2,r*.4),t.lineTo(-e/2,r*.4+e*1.25),t.lineTo(e/2,r*.4+e*1.25),t.lineTo(e/2,r*.4),t.closePath(),c.holes.push(t),d.push(R(e+.5*i,.2*i,.25*i,0,r*.4-.1*i,.1*i))}let f=new a(c,{depth:s,bevelEnabled:!1,curveSegments:18}).translate(0,0,-s);return d.push(f),t!==`bare`&&d.push(R(n,.34*i,.3*i,0,r-1*i,.12*i)),t!==`bare`&&d.push(R(n,.3*i,.5*i,0,r-.3*i,.22*i)),t!==`bare`&&d.push(R(n,.16*i,.72*i,0,r-.08*i,.33*i)),t!==`bare`&&d.push(R(n,.4*i,.24*i,0,.2*i,.1*i)),{geo:e(d.map(e=>e.index?e.toNonIndexed():e)),ow:l,sh:u,depth:s}}function B(t,n){let r=t/7,i=t-1.17*r,a=[];return a.push(R(1.15*r,.75*r,.95*r,0,.375*r,.2*r)),n?a.push(R(.8*r,i-1.1*r,.24*r,0,.75*r+(i-1.1*r)/2,.12*r)):(a.push(new x(.47*r,.5*r,.16*r,16).translate(0,.83*r,.1*r)),a.push(new x(.34*r,.4*r,i-1.25*r,16).translate(0,.9*r+(i-1.25*r)/2,.1*r)),a.push(new x(.46*r,.34*r,.22*r,16).translate(0,i-.24*r,.1*r))),a.push(R(1*r,.16*r,.9*r,0,i-.06*r,.14*r)),e(a.map(e=>e.index?e.toNonIndexed():e))}function V(e,t){let{stone:n,pale:r}=L(),a=t.tint?Object.assign(n.clone(),{color:new b(t.tint)}):n,o=Math.PI*2/t.bays,s=2*t.rin*Math.tan(Math.PI/t.bays)*1.012,c=new Map;for(let e=0;e<t.bays;e++){let n=t.start+(e+.5)*o,r=t.kind?.(e,n)??`arch`;r!==`none`&&(c.has(r)||c.set(r,[]),c.get(r).push(j(t.rin,n,t.y)))}let l=(t,n,r,i=!1)=>{let a=new m(t,n,r.length);r.forEach((e,t)=>a.setMatrixAt(t,e)),a.frustumCulled=!1,a.receiveShadow=!0,a.castShadow=i,a.userData.shadowSet=!0,e.add(a)};for(let[e,n]of c){let r=z(e,s,t.h);l(r.geo,a,n),e===`arch`&&t.backed&&l(new i(r.ow,r.sh+r.ow/2).translate(0,(r.sh+r.ow/2)/2,-r.depth+.03),P,n)}let u=[],d=t.rin/Math.cos(Math.PI/t.bays)-.12*(t.h/7);for(let e=0;e<t.bays;e++){let n=t.start+e*o;(!t.column||t.column(e,n))&&u.push(j(d,n,t.y))}let f=!!t.kind&&t.kind(0,t.start+o/2)===`attic`;u.length&&l(B(t.h,f),t.tint?a:r,u)}var H={value:0},U=new i(1,1).translate(0,.5,0);function W(e,t,n=`#ff8a1e`){let i=new v({uniforms:{uTime:H,uSize:{value:new C(e,t)},uSeed:{value:Math.random()*20},uTint:{value:new b(n)}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`
      uniform vec2 uSize;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += position.xy * uSize;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uTime, uSeed;
      uniform vec3 uTint;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      void main() {
        float t = uTime * 2.4 + uSeed;
        float n = noise(vec2(vUv.x * 3.5 + uSeed, vUv.y * 3.0 - t)) * 0.65 + noise(vec2(vUv.x * 8.0, vUv.y * 6.0 - t * 1.7)) * 0.35;
        float x = (vUv.x - 0.5) * 2.0 + (n - 0.5) * 0.55 * vUv.y;
        float w = mix(0.62, 0.04, pow(vUv.y, 0.8));
        float body = smoothstep(w, w * 0.25, abs(x)) * smoothstep(1.0, 0.35, vUv.y + (n - 0.5) * 0.5) * smoothstep(0.0, 0.1, vUv.y);
        float core = smoothstep(w * 0.55, 0.0, abs(x)) * smoothstep(0.75, 0.05, vUv.y);
        vec3 col = mix(uTint * 0.9, vec3(1.0, 0.82, 0.35), body) * body * 1.15 + vec3(1.0, 0.9, 0.65) * core * 0.9;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),a=new r(U,i);return a.frustumCulled=!1,a.userData.noOutline=!0,a.onBeforeRender=()=>H.value=performance.now()/1e3,a}function G(e,t=`#ff8a1e`){let n=new f;n.index=U.index,n.setAttribute(`position`,U.getAttribute(`position`)),n.setAttribute(`uv`,U.getAttribute(`uv`));let i=new Float32Array(e.length*4),a=new Float32Array(e.length*2);e.forEach((e,t)=>{i.set([e.x,e.y,e.z,t*7.31%20],t*4),a.set([e.w,e.h],t*2)}),n.setAttribute(`aBase`,new p(i,4)),n.setAttribute(`aSize`,new p(a,2)),n.instanceCount=e.length;let o=new v({uniforms:{uTime:H,uTint:{value:new b(t)}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`
      uniform float uTime;
      attribute vec4 aBase;
      attribute vec2 aSize;
      varying vec2 vUv;
      varying float vSeed;
      void main() {
        vUv = uv;
        vSeed = aBase.w;
        vec4 mv = modelViewMatrix * vec4(aBase.xyz, 1.0);
        // La flamme vacille : sa hauteur respire à son rythme.
        float k = 1.0 + sin(uTime * 9.0 + vSeed) * 0.1 + sin(uTime * 23.0 + vSeed * 2.0) * 0.06;
        mv.xy += position.xy * aSize * vec2(1.0, k);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uTint;
      varying vec2 vUv;
      varying float vSeed;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      void main() {
        float t = uTime * 2.4 + vSeed;
        float n = noise(vec2(vUv.x * 3.5 + vSeed, vUv.y * 3.0 - t)) * 0.65 + noise(vec2(vUv.x * 8.0, vUv.y * 6.0 - t * 1.7)) * 0.35;
        float x = (vUv.x - 0.5) * 2.0 + (n - 0.5) * 0.55 * vUv.y;
        float w = mix(0.62, 0.04, pow(vUv.y, 0.8));
        float body = smoothstep(w, w * 0.25, abs(x)) * smoothstep(1.0, 0.35, vUv.y + (n - 0.5) * 0.5) * smoothstep(0.0, 0.1, vUv.y);
        float core = smoothstep(w * 0.55, 0.0, abs(x)) * smoothstep(0.75, 0.05, vUv.y);
        vec3 col = mix(uTint * 0.9, vec3(1.0, 0.82, 0.35), body) * body * 1.15 + vec3(1.0, 0.9, 0.65) * core * 0.9;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),s=new r(n,o);return s.frustumCulled=!1,s.renderOrder=4,s.userData.noOutline=!0,s.userData.shadowSet=!0,s.onBeforeRender=()=>H.value=performance.now()/1e3,s}function K(e,t=1){let n=new f,a=new i(1,1);n.index=a.index,n.setAttribute(`position`,a.getAttribute(`position`)),n.setAttribute(`uv`,a.getAttribute(`uv`));let o=new Float32Array(e.length*4),s=new Float32Array(e.length*4),c=new b;e.forEach((e,t)=>{o.set([e.x,e.y,e.z,e.size],t*4),c.set(e.color),s.set([c.r,c.g,c.b,e.flicker??1],t*4)}),n.setAttribute(`aBase`,new p(o,4)),n.setAttribute(`aTint`,new p(s,4)),n.instanceCount=e.length;let l=new v({uniforms:{uTime:H,uStrength:{value:t}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`
      uniform float uTime;
      attribute vec4 aBase;
      attribute vec4 aTint;
      varying vec2 vUv;
      varying vec3 vTint;
      void main() {
        vUv = uv;
        float seed = aBase.x * 3.1 + aBase.z * 5.7;
        float k = 1.0 + aTint.a * (sin(uTime * 9.0 + seed) * 0.1 + sin(uTime * 23.0 + seed * 2.0) * 0.06);
        vTint = aTint.rgb * k;
        vec4 mv = modelViewMatrix * vec4(aBase.xyz, 1.0);
        mv.xy += position.xy * aBase.w * k;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uStrength;
      varying vec2 vUv;
      varying vec3 vTint;
      void main() {
        float d = length(vUv - 0.5) * 2.0;
        float a = pow(max(0.0, 1.0 - d), 2.2);
        gl_FragColor = vec4(vTint * a * uStrength, 1.0);
      }
    `}),u=new r(n,l);return u.frustumCulled=!1,u.renderOrder=3,u.userData.noOutline=!0,u.userData.shadowSet=!0,u.onBeforeRender=()=>H.value=performance.now()/1e3,u}export{I as a,j as c,V as i,G as n,A as o,K as r,D as s,W as t};