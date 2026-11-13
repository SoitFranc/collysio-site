import{$ as e,$t as t,A as n,An as r,Ar as i,At as a,B as o,Bt as s,C as c,Cr as l,Ct as u,D as d,Dr as f,Dt as p,E as m,Er as h,Fn as g,Fr as _,Ft as v,Gt as y,Ht as b,I as x,In as S,Ir as C,J as w,Kn as T,Kt as E,L as D,Ln as O,Lr as k,Lt as A,Mn as j,Mr as ee,Mt as te,N as ne,Nr as re,Nt as ie,O as ae,Or as oe,Ot as se,P as ce,Pr as le,Pt as ue,Q as de,Qn as fe,R as pe,S as me,Sr as he,St as ge,T as _e,Tr as ve,Tt as ye,U as be,Un as xe,Ut as Se,V as Ce,Vt as we,W as Te,Wn as Ee,Wt as De,X as Oe,Xn as ke,Yt as Ae,Zn as je,_r as Me,a as Ne,at as Pe,br as M,bt as N,c as Fe,cr as Ie,ct as P,dr as Le,dt as Re,en as ze,er as Be,et as Ve,f as F,ft as He,g as I,gr as Ue,hr as We,ht as L,ir as Ge,it as Ke,j as qe,jn as Je,jr as Ye,jt as Xe,k as Ze,kr as Qe,kt as $e,l as et,lr as tt,lt as nt,mt as rt,nt as it,o as at,ot,pr as st,pt as ct,q as lt,qn as ut,qt as dt,r as ft,rr as pt,s as mt,st as ht,tt as gt,u as _t,ur as vt,ut as yt,v as R,vr as bt,vt as xt,wr as St,wt as Ct,x as wt,xr as Tt,xt as Et,y as Dt,yr as Ot,yt as kt,zt as At}from"./three.core-Cmz0CFJQ.js";var jt=Object.create,Mt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Pt=Object.getOwnPropertyNames,Ft=Object.getPrototypeOf,It=Object.prototype.hasOwnProperty,Lt=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),Rt=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=Pt(t),a=0,o=i.length,s;a<o;a++)s=i[a],!It.call(e,s)&&s!==n&&Mt(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=Nt(t,s))||r.enumerable});return e},zt=(e,t,n)=>(n=e==null?{}:jt(Ft(e)),Rt(t||!e||!e.__esModule||!It.call(e,`default`)?Mt(n,`default`,{value:e,enumerable:!0}):n,e));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Bt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Vt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},B={common:{diffuse:{value:new R(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new N},alphaMap:{value:null},alphaMapTransform:{value:new N},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new N}},envmap:{envMap:{value:null},envMapRotation:{value:new N},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new N}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new N}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new N},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new N},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new N},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new N}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new N}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new N}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new R(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new R(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new N},alphaTest:{value:0},uvTransform:{value:new N}},sprite:{diffuse:{value:new R(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new N},alphaMap:{value:null},alphaMapTransform:{value:new N},alphaTest:{value:0}}},Ht={basic:{uniforms:le([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.fog]),vertexShader:z.meshbasic_vert,fragmentShader:z.meshbasic_frag},lambert:{uniforms:le([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new R(0)},envMapIntensity:{value:1}}]),vertexShader:z.meshlambert_vert,fragmentShader:z.meshlambert_frag},phong:{uniforms:le([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new R(0)},specular:{value:new R(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:z.meshphong_vert,fragmentShader:z.meshphong_frag},standard:{uniforms:le([B.common,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.roughnessmap,B.metalnessmap,B.fog,B.lights,{emissive:{value:new R(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z.meshphysical_vert,fragmentShader:z.meshphysical_frag},toon:{uniforms:le([B.common,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.gradientmap,B.fog,B.lights,{emissive:{value:new R(0)}}]),vertexShader:z.meshtoon_vert,fragmentShader:z.meshtoon_frag},matcap:{uniforms:le([B.common,B.bumpmap,B.normalmap,B.displacementmap,B.fog,{matcap:{value:null}}]),vertexShader:z.meshmatcap_vert,fragmentShader:z.meshmatcap_frag},points:{uniforms:le([B.points,B.fog]),vertexShader:z.points_vert,fragmentShader:z.points_frag},dashed:{uniforms:le([B.common,B.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z.linedashed_vert,fragmentShader:z.linedashed_frag},depth:{uniforms:le([B.common,B.displacementmap]),vertexShader:z.depth_vert,fragmentShader:z.depth_frag},normal:{uniforms:le([B.common,B.bumpmap,B.normalmap,B.displacementmap,{opacity:{value:1}}]),vertexShader:z.meshnormal_vert,fragmentShader:z.meshnormal_frag},sprite:{uniforms:le([B.sprite,B.fog]),vertexShader:z.sprite_vert,fragmentShader:z.sprite_frag},background:{uniforms:{uvTransform:{value:new N},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z.background_vert,fragmentShader:z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new N}},vertexShader:z.backgroundCube_vert,fragmentShader:z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z.cube_vert,fragmentShader:z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z.equirect_vert,fragmentShader:z.equirect_frag},distance:{uniforms:le([B.common,B.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:z.distance_vert,fragmentShader:z.distance_frag},shadow:{uniforms:le([B.lights,B.fog,{color:{value:new R(0)},opacity:{value:1}}]),vertexShader:z.shadow_vert,fragmentShader:z.shadow_frag}};Ht.physical={uniforms:le([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new N},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new N},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new N},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new N},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new N},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new N},sheen:{value:0},sheenColor:{value:new R(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new N},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new N},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new N},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new N},attenuationDistance:{value:0},attenuationColor:{value:new R(0)},specularColor:{value:new R(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new N},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new N},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new N}}]),vertexShader:z.meshphysical_vert,fragmentShader:z.meshphysical_frag};var Ut={r:0,b:0,g:0},Wt=new Et,Gt=new N;Gt.set(-1,0,0,0,1,0,0,0,1);function Kt(e,t,n,r,i,a){let o=new R(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?_(o,s):i&&i.isColor&&(_(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ge(new Fe(1,1,1),new T({name:`BackgroundCubeMaterial`,uniforms:h(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gt),l.material.toneMapped=Dt.getTransfer(i.colorSpace)!==Ee,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ge(new we(2,2),new T({name:`BackgroundMaterial`,uniforms:h(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(i.colorSpace)!==Ee,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function _(t,r){t.getRGB(Ut,ee(e)),n.buffers.color.setClear(Ut.r,Ut.g,Ut.b,r,a)}function v(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,_(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,_(o,s)},render:m,addToRenderList:g,dispose:v}}function qt(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Jt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Yt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(C(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&C(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&C(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Xt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new s,c=new N,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=d(e,t,0)},this.setState=function(t,o,s){let c=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||c===null||c.length===0||a&&!p)a?d(null):u();else{let e=a?0:r,t=e*4,i=m.clippingState||null;l.value=i,i=d(c,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(e,n,r,i){let a=e===null?0:e.length,s=null;if(a!==0){if(s=l.value,i!==!0||s===null){let t=r+a*4,i=n.matrixWorldInverse;c.getNormalMatrix(i),(s===null||s.length<t)&&(s=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,c),o.normal.toArray(s,n),s[n+3]=o.constant}l.value=s,l.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,s}}var Zt=class extends St{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new c(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fe(5,5,5),i=new T({name:`CubemapFromEquirect`,uniforms:h(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ge(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=nt),new wt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Qt=256,$t=3,en=20,tn=256,nn=16,rn=3,an=new M,on=new R,sn=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wt(1,10,null),this._boxMesh=new ge(new Fe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=an}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(on));let h=new wt(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Qt,i(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Qt:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=cn(e,!1,!1),n=Math.log2(e)-$t;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cn(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=mn()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pn()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=un(),this._integrationMaterial=dn());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/nn);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-rn)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(tn*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fn());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function cn(e,t,n){return new Zt(e,{minFilter:yt,generateMipmaps:t,type:Te,colorSpace:He,depthBuffer:n})}function ln(e,t,n){return new T({name:e,uniforms:t,vertexShader:z.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function un(){return ln(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tn}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dn(){return ln(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nn}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fn(){return ln(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${en}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function pn(){return ln(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function mn(){return ln(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Zt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new sn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new sn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function gn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&k(`WebGLRenderer: `+e+` extension not supported.`),t}}}function _n(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?tt:Ie)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function vn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function yn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Qe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function bn(e,t,n){let r=new WeakMap,i=new Tt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,h=1;p>t.maxTextureSize&&(h=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*h*4*u),_=new m(g,p,h,u);_.type=pe,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Ot(p,h)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function xn(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Sn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Cn(e,t,r,i,a,o){let s=new St(t,r,{type:e,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=null,d=new _t;d.setAttribute(`position`,new D([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new D([0,2,0,0,2,0],2));let f=new j({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ge(d,f),m=new A(-1,1,1,-1,0,1),h=null,g=null,_=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){s.setSize(e,t),c!==null&&c.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=s.width,r=s.height;b.length>0&&c===null&&(c=new St(t,r,{type:Te,depthBuffer:!1,stencilBuffer:!1}),l=new St(t,r,{type:Te,depthBuffer:!1,stencilBuffer:!1}));let i=a===!0&&b.some(e=>e.needsDepthTexture===!0);i!==(s.depthTexture!==null)&&(i===!0&&u===null&&(u=new n(t,r),o===!0&&(u.format=Ze,u.type=st)),s.dispose(),s.depthTexture=i?u:null,s.resolveDepthBuffer=i,s.storeMultisampledDepthBuffer=i);for(let e=0;e<b.length;e++){let n=b[e];n.setSize&&n.setSize(t,r),i&&n.needsDepthTexture===!0&&n.setDepthTexture&&n.setDepthTexture(u)}},this.begin=function(e,t){if(_||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(s),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,_=!0;let n=s,r=c;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?l:c))}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,f.defines={},Dt.getTransfer(h)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=Sn[g];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(p,m),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var wn=new pt,Tn=new n(1,1),En=new me(1),Dn=new m,On=new _e,kn=new c,An=[],jn=[],Mn=new Float32Array(16),Nn=new Float32Array(9),Pn=new Float32Array(4);function Fn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=An[i];if(a===void 0&&(a=new Float32Array(i),An[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function In(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ln(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Rn(e,t){let n=jn[t];n===void 0&&(n=new Int32Array(t),jn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function zn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Bn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(In(n,t))return;e.uniform2fv(this.addr,t),Ln(n,t)}}function Vn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(In(n,t))return;e.uniform3fv(this.addr,t),Ln(n,t)}}function Hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(In(n,t))return;e.uniform4fv(this.addr,t),Ln(n,t)}}function Un(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(In(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ln(n,t)}else{if(In(n,r))return;Pn.set(r),e.uniformMatrix2fv(this.addr,!1,Pn),Ln(n,r)}}function Wn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(In(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ln(n,t)}else{if(In(n,r))return;Nn.set(r),e.uniformMatrix3fv(this.addr,!1,Nn),Ln(n,r)}}function Gn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(In(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ln(n,t)}else{if(In(n,r))return;Mn.set(r),e.uniformMatrix4fv(this.addr,!1,Mn),Ln(n,r)}}function Kn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(In(n,t))return;e.uniform2iv(this.addr,t),Ln(n,t)}}function Jn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(In(n,t))return;e.uniform3iv(this.addr,t),Ln(n,t)}}function Yn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(In(n,t))return;e.uniform4iv(this.addr,t),Ln(n,t)}}function Xn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Zn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(In(n,t))return;e.uniform2uiv(this.addr,t),Ln(n,t)}}function Qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(In(n,t))return;e.uniform3uiv(this.addr,t),Ln(n,t)}}function $n(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(In(n,t))return;e.uniform4uiv(this.addr,t),Ln(n,t)}}function er(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function tr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?er(Tn):wn,n.setTexture2D(t||a,i)}function nr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||On,i)}function rr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?er(En):kn,n.setTextureCube(t||a,i)}function ir(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Dn,i)}function ar(e){switch(e){case 5126:return zn;case 35664:return Bn;case 35665:return Vn;case 35666:return Hn;case 35674:return Un;case 35675:return Wn;case 35676:return Gn;case 5124:case 35670:return Kn;case 35667:case 35671:return qn;case 35668:case 35672:return Jn;case 35669:case 35673:return Yn;case 5125:return Xn;case 36294:return Zn;case 36295:return Qn;case 36296:return $n;case 35678:case 36198:case 36298:case 36306:case 35682:return tr;case 35679:case 36299:case 36307:return nr;case 35680:case 36300:case 36308:case 36293:return rr;case 36289:case 36303:case 36311:case 36292:return ir}}function or(e,t){e.uniform1fv(this.addr,t)}function sr(e,t){let n=Fn(t,this.size,2);e.uniform2fv(this.addr,n)}function cr(e,t){let n=Fn(t,this.size,3);e.uniform3fv(this.addr,n)}function lr(e,t){let n=Fn(t,this.size,4);e.uniform4fv(this.addr,n)}function ur(e,t){let n=Fn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function dr(e,t){let n=Fn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fr(e,t){let n=Fn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function pr(e,t){e.uniform1iv(this.addr,t)}function mr(e,t){e.uniform2iv(this.addr,t)}function hr(e,t){e.uniform3iv(this.addr,t)}function gr(e,t){e.uniform4iv(this.addr,t)}function _r(e,t){e.uniform1uiv(this.addr,t)}function vr(e,t){e.uniform2uiv(this.addr,t)}function yr(e,t){e.uniform3uiv(this.addr,t)}function br(e,t){e.uniform4uiv(this.addr,t)}function xr(e,t,n){let r=this.cache,i=t.length,a=Rn(n,i);In(r,a)||(e.uniform1iv(this.addr,a),Ln(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?er(Tn):wn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Sr(e,t,n){let r=this.cache,i=t.length,a=Rn(n,i);In(r,a)||(e.uniform1iv(this.addr,a),Ln(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||On,a[e])}function Cr(e,t,n){let r=this.cache,i=t.length,a=Rn(n,i);In(r,a)||(e.uniform1iv(this.addr,a),Ln(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?er(En):kn;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function wr(e,t,n){let r=this.cache,i=t.length,a=Rn(n,i);In(r,a)||(e.uniform1iv(this.addr,a),Ln(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Dn,a[e])}function Tr(e){switch(e){case 5126:return or;case 35664:return sr;case 35665:return cr;case 35666:return lr;case 35674:return ur;case 35675:return dr;case 35676:return fr;case 5124:case 35670:return pr;case 35667:case 35671:return mr;case 35668:case 35672:return hr;case 35669:case 35673:return gr;case 5125:return _r;case 36294:return vr;case 36295:return yr;case 36296:return br;case 35678:case 36198:case 36298:case 36306:case 35682:return xr;case 35679:case 36299:case 36307:return Sr;case 35680:case 36300:case 36308:case 36293:return Cr;case 36289:case 36303:case 36311:case 36292:return wr}}var Er=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ar(t.type)}},Dr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tr(t.type)}},Or=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},kr=/(\w+)(\])?(\[|\.)?/g;function Ar(e,t){e.seq.push(t),e.map[t.id]=t}function jr(e,t,n){let r=e.name,i=r.length;for(kr.lastIndex=0;;){let a=kr.exec(r),o=kr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ar(n,l===void 0?new Er(s,e,t):new Dr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Or(s),Ar(n,e)),n=e}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);jr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Nr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Pr=37297,Fr=0;function Ir(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Lr=new N;function Rr(e){Dt._getMatrix(Lr,Dt.workingColorSpace,e);let t=`mat3( ${Lr.elements.map(e=>e.toFixed(4))} )`;switch(Dt.getTransfer(e)){case ct:return[t,`LinearTransferOETF`];case Ee:return[t,`sRGBTransferOETF`];default:return C(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function zr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ir(e.getShaderSource(t),r)}return i}function Br(e,t){let n=Rr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Vr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Hr(e,t){let n=Vr[t];return n===void 0?(C(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ur=new M;function Wr(){return Dt.getLuminanceCoefficients(Ur),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ur.x.toFixed(4)}, ${Ur.y.toFixed(4)}, ${Ur.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Gr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Jr).join(`
`)}function Kr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function qr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Jr(e){return e!==``}function Yr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Xr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qr(e){return e.replace(Zr,$r)}function $r(e,t){let n=z[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Qr(n)}var ei=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ti(e){return e.replace(ei,ni)}function ni(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ri(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ii={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ai(e){return ii[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var oi={302:`ENVMAP_MODE_REFRACTION`};function si(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:oi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ci={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function li(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ci[e.combine]||`ENVMAP_BLENDING_NONE`}function ui(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ai(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=si(n),d=li(n),f=Gr(n),p=Kr(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Jr).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Jr).join(`
`),g.length>0&&(g+=`
`)):(h=[ri(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Jr).join(`
`),g=[ri(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:z.tonemapping_pars_fragment,n.toneMapping===0?``:Hr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,z.colorspace_pars_fragment,Br(`linearToOutputTexel`,n.outputColorSpace),Wr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Jr).join(`
`)),o=Qr(o),o=Yr(o,n),o=Xr(o,n),s=Qr(s),s=Yr(s,n),s=Xr(s,n),o=ti(o),s=ti(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Nr(i,i.VERTEX_SHADER,v),x=Nr(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=zr(i,b,`vertex`),n=zr(i,x,`fragment`);Qe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):C(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),w=new Mr(i,m),T=qr(i,m)}let w;this.getUniforms=function(){return w===void 0&&S(this),w};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,Pr)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fr++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var di=0,fi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pi(e),t.set(e,n)),n}},pi=class{constructor(e){this.id=di++,this.code=e,this.usedTimes=0}};function mi(e){return e===1030||e===37490||e===36285}function hi(e,t,n,r,i,a){let o=new Ke,s=new fi,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&C(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let w=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,T=w===void 0?0:w.length,E=0;_.morphAttributes.position!==void 0&&(E=1),_.morphAttributes.normal!==void 0&&(E=2),_.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(x){let e=Ht[x];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!b,oe=ae&&b.isPMREMTexture===!0,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,pe=!!i.metalnessMap,me=!!i.roughnessMap,he=i.anisotropy>0,ge=i.clearcoat>0,_e=i.diffuseRoughness>0,ve=i.dispersion>0,ye=i.retroreflectivity>0,be=i.iridescence>0,xe=i.sheen>0,Se=i.transmission>0,Ce=he&&!!i.anisotropyMap,we=ge&&!!i.clearcoatMap,Te=ge&&!!i.clearcoatNormalMap,Ee=ge&&!!i.clearcoatRoughnessMap,De=_e&&!!i.diffuseRoughnessMap,Oe=be&&!!i.iridescenceMap,ke=be&&!!i.iridescenceThicknessMap,Ae=xe&&!!i.sheenColorMap,je=xe&&!!i.sheenRoughnessMap,Me=!!i.specularMap,Ne=!!i.specularColorMap,Pe=!!i.specularIntensityMap,M=Se&&!!i.transmissionMap,N=Se&&!!i.thicknessMap,Fe=!!i.gradientMap,Ie=!!i.alphaMap,P=i.alphaTest>0,Le=!!i.alphaHash,Re=!!i.extensions,ze=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ze=e.toneMapping);let Be=oe?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ve={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&b.mapping,envMapPMREM:oe,envMapMaxLod:oe?Be.length-1:null,envMapSize:oe?Be[0].width:null,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&mi(i.normalMap.format),metalnessMap:pe,roughnessMap:me,anisotropy:he,anisotropyMap:Ce,clearcoat:ge,clearcoatMap:we,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ee,diffuseRoughness:_e,diffuseRoughnessMap:De,dispersion:ve,retroreflection:ye,iridescence:be,iridescenceMap:Oe,iridescenceThicknessMap:ke,sheen:xe,sheenColorMap:Ae,sheenRoughnessMap:je,specularMap:Me,specularColorMap:Ne,specularIntensityMap:Pe,transmission:Se,transmissionMap:M,thicknessMap:N,gradientMap:Fe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ie,alphaTest:P,alphaHash:Le,combine:i.combine,mapUv:re&&p(i.map.channel),aoMapUv:se&&p(i.aoMap.channel),lightMapUv:ce&&p(i.lightMap.channel),bumpMapUv:le&&p(i.bumpMap.channel),normalMapUv:ue&&p(i.normalMap.channel),displacementMapUv:de&&p(i.displacementMap.channel),emissiveMapUv:fe&&p(i.emissiveMap.channel),metalnessMapUv:pe&&p(i.metalnessMap.channel),roughnessMapUv:me&&p(i.roughnessMap.channel),anisotropyMapUv:Ce&&p(i.anisotropyMap.channel),clearcoatMapUv:we&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Te&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:De&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Oe&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:je&&p(i.sheenRoughnessMap.channel),specularMapUv:Me&&p(i.specularMap.channel),specularColorMapUv:Ne&&p(i.specularColorMap.channel),specularIntensityMapUv:Pe&&p(i.specularIntensityMap.channel),transmissionMapUv:M&&p(i.transmissionMap.channel),thicknessMapUv:N&&p(i.thicknessMap.channel),alphaMapUv:Ie&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ue||he),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(re||Ie),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ze,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Dt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Re&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Re&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ht[t];n=vt.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new ui(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function gi(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function _i(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yi(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||_i),r.length>1&&r.sort(t||vi),i.length>1&&i.sort(t||vi)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function bi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new yi,e.set(t,[i])):n>=r.length?(i=new yi,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function xi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new M,color:new R};break;case`SpotLight`:n={position:new M,direction:new M,color:new R,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new M,color:new R,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new M,skyColor:new R,groundColor:new R};break;case`RectAreaLight`:n={color:new R,position:new M,halfWidth:new M,halfHeight:new M}}return e[t.id]=n,n}}}function Si(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ci=0;function wi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ti(e){let t=new xi,n=Si(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new M);let i=new M,a=new Et,o=new Et;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(wi);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=B.LTC_FLOAT_1,r.rectAreaLTC2=B.LTC_FLOAT_2):(r.rectAreaLTC1=B.LTC_HALF_1,r.rectAreaLTC2=B.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ci++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ei(e){let t=new Ti(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Di(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ei(e),t.set(n,[a])):r>=i.length?(a=new Ei(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Oi=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ki=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ai=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)],ji=[new M(0,-1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1),new M(0,-1,0),new M(0,-1,0)],Mi=new Et,Ni=new M,Pi=new M;function Fi(e,t,i){let a=new o,s=new Ot,c=new Ot,l=new Tt,u=new Ct,d=new ye,f={},p=i.maxTextureSize,m={0:1,1:0,2:2},h=new T({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Oi,fragmentShader:ki}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new _t;_.setAttribute(`position`,new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ge(_,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let b=this.type;this.render=function(t,i,o){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||t.length===0)return;this.type===2&&(C(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=b!==this.type;h&&i.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],f=d.shadow;if(f===void 0){C(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;s.copy(f.mapSize);let g=f.getFrameExtents();s.multiply(g),c.copy(f.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(c.x=Math.floor(p/g.x),s.x=c.x*g.x,f.mapSize.x=c.x),s.y>p&&(c.y=Math.floor(p/g.y),s.y=c.y*g.y,f.mapSize.y=c.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(d.isPointLight){C(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new St(s.x,s.y,{format:r,type:Te,minFilter:nt,magFilter:nt,generateMipmaps:!1}),f.map.texture.name=d.name+`.shadowMap`,f.map.depthTexture=new n(s.x,s.y,pe),f.map.depthTexture.name=d.name+`.shadowMapDepth`,f.map.depthTexture.format=ae,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Xe,f.map.depthTexture.magFilter=Xe}else d.isPointLight?(f.map=new Zt(s.x),f.map.depthTexture=new me(s.x,We)):(f.map=new St(s.x,s.y),f.map.depthTexture=new n(s.x,s.y,We)),f.map.depthTexture.name=d.name+`.shadowMap`,f.map.depthTexture.format=ae,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=nt,f.map.depthTexture.magFilter=nt):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Xe,f.map.depthTexture.magFilter=Xe);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==s.x||f.map.height!==s.y)&&f.map.setSize(s.x,s.y);let v=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();d.isPointLight!==!0&&f.updateMatrices(d,o);let y=f.camera.layers.mask&4294967294?f.camera.layers:o.layers;for(let t=0;t<v;t++){let n=f.getCamera(t);if(d.isPointLight){let e=f.camera,n=f.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ni.setFromMatrixPosition(d.matrixWorld),e.position.copy(Ni),Pi.copy(e.position),Pi.add(Ai[t]),e.up.copy(ji[t]),e.lookAt(Pi),e.updateMatrixWorld(),n.makeTranslation(-Ni.x,-Ni.y,-Ni.z),Mi.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Mi,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);l.set(c.x*n.x,c.y*n.y,c.x*n.z,c.y*n.w),m.viewport(l)}a=f.getFrustum(t),w(i,o,n,d,y,this.type)}f.isPointLightShadow!==!0&&this.type===3&&x(f,o),f.needsUpdate=!1}b=this.type,y.needsUpdate=!1,e.setRenderTarget(u,d,f)};function x(n,i){let a=t.update(v);h.defines.VSM_SAMPLES!==n.blurSamples&&(h.defines.VSM_SAMPLES=n.blurSamples,g.defines.VSM_SAMPLES=n.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),n.mapPass===null?n.mapPass=new St(s.x,s.y,{format:r,type:Te}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),h.uniforms.shadow_pass.value=n.map.depthTexture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(i,null,a,h,v,null),g.uniforms.shadow_pass.value=n.mapPass.texture,g.uniforms.resolution.value.set(n.map.width,n.map.height),g.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(i,null,a,g,v,null)}function S(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?d:u,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=f[e];r===void 0&&(r={},f[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?m[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function w(n,r,i,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(a))){n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,n.matrixWorld);let a=t.update(n),s=n.material;if(Array.isArray(s)){let t=a.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=S(n,d,o,c);n.onBeforeShadow(e,n,r,i,a,t,u),e.renderBufferDirect(i,null,a,t,n,u),n.onAfterShadow(e,n,r,i,a,t,u)}}}else if(s.visible){let t=S(n,s,o,c);n.onBeforeShadow(e,n,r,i,a,t,null),e.renderBufferDirect(i,null,a,t,n,null),n.onAfterShadow(e,n,r,i,a,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)w(l[e],r,i,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in f){let n=f[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ii(e,t){function n(){let t=!1,n=new Tt,r=null,i=new Tt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?pe(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=O[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?pe(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new R(0,0,0),T=0,E=!1,D=null,k=null,A=null,j=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=re>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new Tt().fromArray(se),ue=new Tt().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),pe(e.DEPTH_TEST),o.setFunc(3),Se(!1),Ce(1),pe(e.CULL_FACE),be(0);function pe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function me(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function he(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ge(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function _e(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ve={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ve[103]=e.MIN,ve[104]=e.MAX;let ye={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function be(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(me(e.BLEND),g=!1);else if(g===!1&&(pe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Qe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Qe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Qe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Qe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ve[n],ve[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ye[r],ye[i],ye[o],ye[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function xe(t,n){t.side===2?me(e.CULL_FACE):pe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Se(r),t.blending===1&&t.transparent===!1?be(0):be(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Ce(t){t===0?me(e.CULL_FACE):(pe(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function we(t){t!==A&&(ne&&e.lineWidth(t),A=t)}function Te(t,n,r){t?(pe(e.POLYGON_OFFSET_FILL),(j!==n||ee!==r)&&(j=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):me(e.POLYGON_OFFSET_FILL)}function Ee(t){t?pe(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function De(t){t===void 0&&(t=e.TEXTURE0+te-1),ae!==t&&(e.activeTexture(t),ae=t)}function Oe(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+te-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function ke(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ae(){try{e.compressedTexImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function je(){try{e.compressedTexImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Me(){try{e.texSubImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Ne(){try{e.texSubImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function M(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function N(){try{e.texStorage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Ie(){try{e.texImage2D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){Qe(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function F(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new R(0,0,0),T=0,E=!1,D=null,k=null,A=null,j=null,ee=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:pe,disable:me,bindFramebuffer:he,drawBuffers:ge,useProgram:_e,setBlending:be,setMaterial:xe,setFlipSided:Se,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:De,bindTexture:Oe,unbindTexture:ke,compressedTexImage2D:Ae,compressedTexImage3D:je,texImage2D:Ie,texImage3D:P,pixelStorei:Re,getParameter:Le,updateUBOMapping:Ve,uniformBlockBinding:F,texStorage2D:N,texStorage3D:Fe,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:Pe,compressedTexSubImage3D:M,scissor:ze,viewport:Be,reset:He}}function Li(e,t,n,r,i,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ot,d=new WeakMap,f=new Set,p,m=new WeakMap,h=new Set,g=new FinalizationRegistry(e=>h.delete(e)),_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):oe(`canvas`)}function y(e,t,n){let r=1,i=ze(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=v(n,a));let o=t?v(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),C(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&C(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function w(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];C(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||C(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ct:Dt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function E(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,C(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function D(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function O(e){let t=new WeakRef(e);r.get(e).__ref=t,h.add(t),g.register(e,t,t)}function k(e){let t=r.get(e).__ref;t!==void 0&&(h.delete(t),g.unregister(t))}function A(e){ee(e.target)}function j(e){ne(e.target)}function ee(e){e.removeEventListener(`dispose`,A),k(e),ae(e),e.isVideoTexture&&d.delete(e),e.isHTMLTexture&&f.delete(e)}function ne(e){e.removeEventListener(`dispose`,j),k(e),ce(e)}function re(){for(let e of h){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ne(t):ee(t))}h.clear(),f.clear()}function ae(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&se(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function se(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],s.memory.textures--}function ce(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ee(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(a[t])}r.remove(t)}let le=0;function ue(){le=0}function de(){return le}function fe(e){le=e}function pe(){let e=le;return e>=i.maxTextures&&C(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),le+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)C(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)C(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ve(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?De(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ye={[S]:e.REPEAT,[I]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},be={[Xe]:e.NEAREST,[ie]:e.NEAREST_MIPMAP_NEAREST,[te]:e.NEAREST_MIPMAP_LINEAR,[nt]:e.LINEAR,[Re]:e.LINEAR_MIPMAP_NEAREST,[yt]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&C(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ye[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ye[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ye[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,be[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,be[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,xe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,A),O(n));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let o=me(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&se(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=we(n.start,r.width,4),c=we(t.start,r.width,4);n.start<=i+1&&a===c&&we(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ee(t,a,s){let c=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(c=e.TEXTURE_3D);let l=Ce(t,a),u=a.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&a.image instanceof ImageBitmap)){let t=Dt.getPrimaries(Dt.workingColorSpace),r=a.colorSpace===``?null:Dt.getPrimaries(a.colorSpace),i=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let t=y(a.image,!1,i.maxTextureSize);t=Le(a,t);let r=o.convert(a.format,a.colorSpace),p=o.convert(a.type),m=T(a.internalFormat,r,p,a.normalized,a.colorSpace,a.isVideoTexture);Se(c,a);let h,g=a.mipmaps,_=a.isVideoTexture!==!0,v=d.__version===void 0||l===!0,S=u.dataReady,w=D(a,t);if(a.isDepthTexture)m=E(a.format===Ze,a.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(a.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,w,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);a.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height),S&&Te(a,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(a.isCompressedTexture){if(a.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,m,g[0].width,g[0].height,t.depth);for(let i=0,o=g.length;i<o;i++)if(h=g[i],a.format!==1023){if(r!==null){if(_){if(S){if(a.layerUpdates.size>0){let t=Ye(h.width,h.height,a.format,a.type);for(let o of a.layerUpdates){let a=h.data.subarray(o*t/h.data.BYTES_PER_ELEMENT,(o+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,o,h.width,h.height,1,r,a)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else C(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?S&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);a.layerUpdates.size>0&&a.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,w,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],a.format===1023?_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?C(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?S&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(a.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,m,t.width,t.height,t.depth),S){if(a.layerUpdates.size>0){let i=Ye(t.width,t.height,a.format,a.type);for(let o of a.layerUpdates){let a=t.data.subarray(o*i/t.data.BYTES_PER_ELEMENT,(o+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,p,a)}a.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(a.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,w,m,t.width,t.height,t.depth),S&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(a.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<w;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(a.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(a),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=ze(g[0]);n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);a.generateMipmaps=!1}else if(_){if(v){let r=ze(t);n.texStorage2D(e.TEXTURE_2D,w,m,r.width,r.height)}S&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);b(a)&&a.mipmapsAutoUpdate===!0&&x(c),d.__version=u.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function De(t,a,s){if(a.image.length!==6)return;let c=Ce(t,a),l=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Dt.getPrimaries(Dt.workingColorSpace),r=a.colorSpace===``?null:Dt.getPrimaries(a.colorSpace),d=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=a.isCompressedTexture||a.image[0].isCompressedTexture,p=a.image[0]&&a.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=y(a.image[e],!0,i.maxCubemapSize):m[e]=p?a.image[e].image:a.image[e],m[e]=Le(a,m[e]);let h=m[0],g=o.convert(a.format,a.colorSpace),_=o.convert(a.type),v=T(a.internalFormat,g,_,a.normalized,a.colorSpace),S=a.isVideoTexture!==!0,w=u.__version===void 0||c===!0,O=l.dataReady,k=D(a,h);Se(e.TEXTURE_CUBE_MAP,a);let A;if(a.isDepthTexture){if(v=E(a.format===Ze,a.type),w){if(S)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){S&&w&&n.texStorage2D(e.TEXTURE_CUBE_MAP,k,v,h.width,h.height);for(let t=0;t<6;t++){A=m[t].mipmaps;for(let r=0;r<A.length;r++){let i=A[r];a.format===1023?S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?C(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?O&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(A=a.mipmaps,S&&w){A.length>0&&k++;let t=ze(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,k,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<A.length;r++){let i=A[r].image[t].image;S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<A.length;r++){let i=A[r];S?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}b(a)&&a.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),u.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function Oe(t,i,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=T(a.internalFormat,d,f,a.normalized,a.colorSpace),m=r.get(i),h=r.get(a);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ie(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,Fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=E(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ie(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=T(a.internalFormat,s,l,a.normalized,a.colorSpace);Ie(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);s.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;s.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ve(i.depthTexture,0):he(i.depthTexture,0);let u=s.__webglTexture,d=Fe(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ie(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ie(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ae(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ae(i.__webglFramebuffer[0],t,0):Ae(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ke(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ke(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,i){let a=r.get(t);n!==void 0&&Oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&je(t)}function Ne(t){let i=t.texture,a=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j),O(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&Ie(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=T(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Oe(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Oe(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);b(i)?x(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,o=l.length;i<o;i++){let o=l[i],s=r.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),Se(c,o),Oe(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,c,0),b(o)&&x(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Se(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Oe(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Oe(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);b(i)?x(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&je(t)}function Pe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(b(a)&&a.mipmapsAutoUpdate===!0){let t=w(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}let M=[];function N(t){if(t.samples>0){if(Ie(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(M.length=0,M.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&M.push(c),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,M))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Fe(e){return Math.min(i.maxSamples,e.samples)}function Ie(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Dt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&C(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Qe(`WebGLTextures: Unsupported texture color space:`,n)),t}function ze(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ie,this.dispose=re}function Ri(e,t){function n(n,r=``){let i,a=Dt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var zi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bi=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ce(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new T({vertexShader:zi,fragmentShader:Bi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hi=class extends ne{constructor(e,r){super();let i=this,a=null,o=1,s=null,c=`local-floor`,l=1,u=null,d=null,f=null,p=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Vi,v={},y=r.getContextAttributes(),b=null,x=null,S=[],w=[],T=new Ot,E=null,D=null,O=new At;O.viewport=new Tt;let k=new At;k.viewport=new Tt;let A=[O,k],j=new Ne,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new ve,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new ve,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new ve,S[e]=t),t.getHandSpace()};function ne(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||s),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){a.removeEventListener(`select`,ne),a.removeEventListener(`selectstart`,ne),a.removeEventListener(`selectend`,ne),a.removeEventListener(`squeeze`,ne),a.removeEventListener(`squeezestart`,ne),a.removeEventListener(`squeezeend`,ne),a.removeEventListener(`end`,re),a.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<S.length;e++){let t=w[e];t!==null&&(w[e]=null,S[e].disconnect(t))}ee=null,te=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),m=null,p=null,f=null,a=null,x=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}i.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){o=e,i.isPresenting===!0&&C(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,i.isPresenting===!0&&C(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(a,r)),f},this.getFrame=function(){return h},this.getSession=function(){return a},this.setSession=async function(d){if(a=d,a!==null){if(b=e.getRenderTarget(),a.addEventListener(`select`,ne),a.addEventListener(`selectstart`,ne),a.addEventListener(`selectend`,ne),a.addEventListener(`squeeze`,ne),a.addEventListener(`squeezestart`,ne),a.addEventListener(`squeezeend`,ne),a.addEventListener(`end`,re),a.addEventListener(`inputsourceschange`,ie),y.xrCompatible!==!0&&await r.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let i=null,s=null,c=null;y.depth&&(c=y.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,i=y.stencil?Ze:ae,s=y.stencil?st:We);let l={colorFormat:r.RGBA8,depthFormat:c,scaleFactor:o};f=this.getBinding(),p=f.createProjectionLayer(l),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new St(p.textureWidth,p.textureHeight,{format:t,type:Le,depthTexture:new n(p.textureWidth,p.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(a,r,n),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new St(m.framebufferWidth,m.framebufferHeight,{format:t,type:Le,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(c),de.setContext(a),de.start(),i.isPresenting=!0,i.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(a===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(ee!==j.near||te!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,te=j.far),j.layers.mask=e.layers.mask|6,O.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let r=e.parent,i=j.cameras;oe(j,r);for(let e=0;e<i.length;e++)oe(i[e],r);j.projectionMatrix.copy(O.projectionMatrix),j.projectionMatrixInverse.copy(O.projectionMatrixInverse),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),se(e,j,r)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ae*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(p!==null||m!==null)return l},this.setFoveation=function(e){l=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,n){if(d=n.getViewerPose(u||s),h=n,d!==null){let t=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(m!==null)a=m.getViewport(i);else{let t=f.getViewSubImage(p,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=A[r];o===void 0&&(o=new At,o.layers.enable(r),o.viewport=new Tt,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let r=a.enabledFeatures;if(r&&r.includes(`depth-sensing`)&&a.depthUsage==`gpu-optimized`&&g){f=i.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,a.renderState)}if(r&&r.includes(`camera-access`)&&g){e.state.unbindTexture(),f=i.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ce,v[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=w[e],r=S[e];t!==null&&r!==void 0&&r.update(t,n,u||s)}le&&le(t,n),n.detectedPlanes&&i.dispatchEvent({type:`planesdetected`,data:n}),h=null}let de=new Bt;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Ui=new Et,Wi=new N;Wi.set(-1,0,0,0,1,0,0,0,1);function Gi(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ee(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ui.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Wi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ki(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?C(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):C(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var qi=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function Yi(){return Ji===null&&(Ji=new d(qi,16,16,r,Te),Ji.name=`DFG_LUT`,Ji.minFilter=nt,Ji.magFilter=nt,Ji.wrapS=I,Ji.wrapT=I,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Xi=class{constructor(e={}){let{canvas:t=f(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:h=Le}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);v=n.getContextAttributes().alpha}else v=a;let y=h,b=new Set([ze,Je,g]),x=new Set([Le,We,bt,st,Ue,Me]),S=new Uint32Array(4),w=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},E=null,D=null,O=[],k=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ee=!1,te=null,ne=null,ie=null,ae=null;this._outputColorSpace=xe;let oe=0,se=0,ce=null,le=-1,ue=null,de=new Tt,fe=new Tt,pe=null,me=new R(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,Se=new Tt(0,0,ge,_e),we=new Tt(0,0,ge,_e),Ee=!1,De=new o,Oe=new Ce,ke=!1,Ae=!1,je=new Et,Ne=new M,Pe=new Tt,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return ce===null?ve:1}let P=n;function Re(e,n){return t.getContext(e,n)}let Be,Ve,F,He,I,L,Ge,Ke,qe,Ye,Xe,Ze,$e,et,tt,nt,rt,it,at,ot,ct,lt,ut;try{let e={alpha:!0,depth:r,stencil:i,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,pt,!1),t.addEventListener(`webglcontextrestored`,mt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),P===null){let t=`webgl2`;if(P=Re(t,e),P===null)throw Re(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}dt()}catch(e){throw t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),Qe(`WebGLRenderer: `+e.message),e}function dt(){Be=new gn(P),Be.init(),ct=new Ri(P,Be),Ve=new Yt(P,Be,e,ct),F=new Ii(P,Be),Ve.reversedDepthBuffer&&m&&F.buffers.depth.setReversed(!0),ne=P.createFramebuffer(),ie=P.createFramebuffer(),ae=P.createFramebuffer(),He=new yn(P),I=new gi,L=new Li(P,Be,F,I,Ve,ct,He),Ge=new hn(j),Ke=new Vt(P),lt=new qt(P,Ke),qe=new _n(P,Ke,He,lt),Ye=new xn(P,qe,Ke,lt,He),it=new bn(P,Ve,L),tt=new Xt(I),Xe=new hi(j,Ge,Be,Ve,lt,tt),Ze=new Gi(j,I),$e=new bi,et=new Di(Be),rt=new Kt(j,Ge,F,Ye,v,c),nt=new Fi(j,Ye,Ve),ut=new Ki(P,He,Ve,F),at=new Jt(P,Be,He),ot=new vn(P,Be,He),He.programs=Xe.programs,j.capabilities=Ve,j.extensions=Be,j.properties=I,j.renderLists=$e,j.shadowMap=nt,j.state=F,j.info=He}y!==1009&&(A=new Cn(y,t.width,t.height,s,r,i));let ft=new Hi(j,P);this.xr=ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Be.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Be.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){ft.isPresenting?C(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(y===1009)Qe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){C(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}A.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),F.viewport(de.copy(Se).multiplyScalar(Ie()).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(fe.copy(we).multiplyScalar(Ie()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){F.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(ce!==null){let t=ce.texture.format;e=b.has(t)}if(e){let e=ce.texture.type,t=x.has(e),n=rt.getClearColor(),r=rt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(S[0]=i,S[1]=a,S[2]=o,S[3]=r,P.clearBufferuiv(P.COLOR,0,S)):(w[0]=i,w[1]=a,w[2]=o,w[3]=r,P.clearBufferiv(P.COLOR,0,w))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),rt.dispose(),$e.dispose(),et.dispose(),L.dispose(),I.dispose(),Ge.dispose(),Ye.dispose(),qe.dispose(),lt.dispose(),ut.dispose(),Xe.dispose(),ft.dispose(),ft.removeEventListener(`sessionstart`,Ot),ft.removeEventListener(`sessionend`,kt),At.stop()};function pt(e){e.preventDefault(),re(`WebGLRenderer: Context Lost.`),ee=!0}function mt(){re(`WebGLRenderer: Context Restored.`),ee=!1;let e=He.autoReset,t=nt.enabled,n=nt.autoUpdate,r=nt.needsUpdate,i=nt.type;dt(),He.autoReset=e,nt.enabled=t,nt.autoUpdate=n,nt.needsUpdate=r,nt.type=i}function ht(e){Qe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),I.remove(e)}function vt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Xe.releaseProgram(e)}),e.isShaderMaterial&&Xe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=N);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=B(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=qe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;lt.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=Ke.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Be.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ke.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function xt(e,t,n,r){te!==null&&e.isNodeMaterial&&te.setObject(r,e),ke===!0&&tt.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Lt(e,t,r),e.side=0,e.needsUpdate=!0,Lt(e,t,r),e.side=2):Lt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),te!==null&&te.renderStart(e,t,n),D=et.get(n),D.init(t),k.push(D),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),D.setupLights(),te!==null&&te.updateLights(D.state.lightsArray),Ae=this.localClippingEnabled,ke=tt.init(this.clippingPlanes,Ae),ke===!0&&tt.setGlobalState(this.clippingPlanes,t),te!==null&&nt.render(D.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];xt(o,n,t,e),r.add(o)}else xt(i,n,t,e),r.add(i)}}),D=k.pop(),te!==null&&te.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Be.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ct=null;function wt(e){Ct&&Ct(e)}function Ot(){At.stop()}function kt(){At.start()}let At=new Bt;At.setAnimationLoop(wt),typeof self<`u`&&At.setContext(self),this.setAnimationLoop=function(e){Ct=e,ft.setAnimationLoop(e),e===null?At.stop():At.start()},ft.addEventListener(`sessionstart`,Ot),ft.addEventListener(`sessionend`,kt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Qe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;te!==null&&te.renderStart(e,t);let n=ft.enabled===!0&&ft.isPresenting===!0,r=A!==null&&(ce===null||n)&&A.begin(j,ce);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(t),t=ft.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,ce),D=et.get(e,k.length),D.init(t),D.state.textureUnits=L.getTextureUnits(),k.push(D),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Oe.setFromArrayCamera(t):De.setFromProjectionMatrix(je,l,t.reversedDepth),Ae=this.localClippingEnabled,ke=tt.init(this.clippingPlanes,Ae),E=$e.get(e,O.length),E.init(),O.push(E),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&jt(e,t,-1/0,j.sortObjects)}jt(e,t,0,j.sortObjects),E.finish(),te!==null&&te.updateLights(D.state.lightsArray),j.sortObjects===!0&&E.sort(ye,be),Fe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Fe&&rt.addToRenderList(E,e),this.info.autoReset===!0&&this.info.reset(),ke===!0&&tt.beginShadows();let i=D.state.shadowsArray;if(nt.render(i,e,t),ke===!0&&tt.endShadows(),(r&&A.hasRenderPass())===!1){let n=E.opaque,r=E.transmissive;if(D.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Nt(n,r,e,a)}Fe&&rt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Mt(E,e,n,n.viewport)}}else r.length>0&&Nt(n,r,e,t),Fe&&rt.render(e),Mt(E,e,t)}ce!==null&&se===0&&(L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce)),r&&A.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),lt.resetDefaultState(),le=-1,ue=null,k.pop(),k.length>0?(D=k[k.length-1],L.setTextureUnits(D.state.textureUnits),ke===!0&&tt.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,O.pop(),E=O.length>0?O[O.length-1]:null,te!==null&&te.renderEnd()};function jt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)D.pushLight(e),e.castShadow&&D.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Oe:De;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let i=Ye.update(e),a=e.material;a.visible&&E.push(e,i,a,n,Pe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Oe:De;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ye.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Pe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Pe.copy(e.boundingSphere.center)),Pe.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&E.push(e,i,c,n,Pe.z,s,t)}}else a.visible&&E.push(e,i,a,n,Pe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)jt(i[e],t,n,r)}function Mt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;D.setupLightsView(n),ke===!0&&tt.setGlobalState(j.clippingPlanes,n),r&&F.viewport(de.copy(r)),i.length>0&&Pt(i,t,n),a.length>0&&Pt(a,t,n),o.length>0&&Pt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Nt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[r.id]===void 0){let e=Be.has(`EXT_color_buffer_half_float`)||Be.has(`EXT_color_buffer_float`);D.state.transmissionRenderTarget[r.id]=new St(1,1,{generateMipmaps:!0,type:e?Te:Le,minFilter:yt,samples:Math.max(4,Ve.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}let a=D.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(me),he=j.getClearAlpha(),he<1&&j.setClearColor(16777215,.5),j.clear(),Fe&&rt.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),D.setupLightsView(r),ke===!0&&tt.setGlobalState(j.clippingPlanes,r),Pt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Be.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ft(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(me,he),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Pt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ft(o,t,n,s,l,c)}}function Ft(e,t,n,r,i,a){te!==null&&i.isNodeMaterial&&te.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function It(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Lt(e,t,n){t.isScene!==!0&&(t=N);let r=I.get(e),i=D.state.lights,a=D.state.shadowsArray,o=i.state.version,s=Xe.getParameters(e,i.state,a,t,n,D.state.lightProbeGridArray),c=Xe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ge.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return z(e,s),d}else s.uniforms=Xe.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,j),d=Xe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=tt.uniform),z(e,s),r.needsLights=Ut(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=It(D.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Rt(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Lt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function zt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Mr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function z(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function B(e,t,n,r,i){t.isScene!==!0&&(t=N),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=ce===null?j.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Dt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ge.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=D.state.lights;if(ke===!0&&(Ae===!0||e!==ue)){let t=e===ue&&r.id===le;tt.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==tt.numPlanes||v.numIntersection!==tt.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===It(D.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Rt(r,t,i,s,h):Lt(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==le&&(le=r.id,w=!0),C||ue!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,Ne.setFromMatrixPosition(e.matrixWorld)),Ve.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,L),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,L),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&it.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Yi()),w){if(O.setValue(P,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ht(k,E),a&&r.fog===!0&&Ze.refreshFogUniforms(k,a),Ze.refreshMaterialUniforms(k,r,ve,_e,D.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=T,t=0;for(let n of D.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;k.probesSH.value=e.textures,k.probesMin.value=e.min,k.probesMax.value=e.max,k.probesResolution.value=e.resolution}Mr.upload(P,zt(v),k,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Mr.upload(P,zt(v),k,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ut.update(n,S),ut.bind(n,S)}}return S}function Ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ut(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){ce=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,F.viewport(de),F.scissor(fe),F.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(Se).multiplyScalar(ve).floor(),fe.copy(we).multiplyScalar(ve).floor(),pe=Ee;if(n!==0&&(r=ne),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(de),F.scissor(fe),F.setScissorTest(pe),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Wt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ve.textureFormatReadable(e.format),t.__typeReadable=Ve.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Wt(o);if(u.__formatReadable===!1){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,ct.convert(c),ct.convert(l),a)}finally{let e=ce===null?null:I.get(ce).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Wt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,ct.convert(l),ct.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=ce===null?null:I.get(ce).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await _(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ct.convert(t.format),_=ct.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ie),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){oe=0,se=0,ce=null,F.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return l}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}},Zi=(()=>{let e=new Uint8Array([70,70,70,255,160,160,160,255,255,255,255,255]),n=new d(e,3,1,t);return n.minFilter=Xe,n.magFilter=Xe,n.needsUpdate=!0,n})(),Qi=new Map;function $i(e,t,n=1){let r=`${new R(e).getHexString()}|${t??``}|${n}`,i=Qi.get(r);return i||(i=new $e({color:e,gradientMap:Zi}),t!==void 0&&(i.emissive=new R(t),i.emissiveIntensity=n),Qi.set(r,i)),i}var ea=new u({color:0,side:1});function ta(e,t=.04){let n=[];e.traverse(e=>{e.isMesh&&!e.userData.noOutline&&n.push(e)});for(let e of n){let n=new ge(e.geometry,ea);n.userData.noOutline=!0,e.geometry.computeBoundingSphere();let r=e.geometry.boundingSphere?.radius||1;n.scale.setScalar(1+t/r),e.add(n)}return e}function na(e,t,n,r=1){return new ge(e,$i(t,n,r))}function ra(e,t){let n=e/2,r=new ut;return r.moveTo(-n,0),r.lineTo(-n,t-n),r.absarc(0,t-n,n,Math.PI,0,!0),r.lineTo(n,0),r.lineTo(-n,0),r}function ia(e,t,n,r){let i=document.createElement(`canvas`);i.width=t,i.height=n;let a=i.getContext(`2d`);r?.(a),a.textAlign=`center`,a.textBaseline=`middle`;for(let n of e){a.font=n.font;let e=parseInt(n.font.match(/(\d+)px/)?.[1]??`40`,10);for(;a.measureText(n.text).width>t*.9&&e>10;)e-=2,a.font=n.font.replace(/\d+px/,`${e}px`);a.lineWidth=6,a.strokeStyle=`#1a0f06`,a.strokeText(n.text,t/2,n.y),a.fillStyle=n.color,a.fillText(n.text,t/2,n.y)}let o=new F(i);return o.colorSpace=xe,o.anisotropy=4,o}function aa(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,e),r.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=r,n.fillRect(0,0,128,128);let i=new F(t);return i.colorSpace=xe,i}var oa=new Map;function sa(e,t=`#ffd9a0`,n=.45){let r=`${new R(e).getHexString()}|${new R(t).getHexString()}|${n}`,i=oa.get(r);if(!i){i=new $e({color:e,gradientMap:Zi});let a=new R(t);i.onBeforeCompile=e=>{e.uniforms.uRim={value:a},e.uniforms.uRimStrength={value:n},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 uRim;
uniform float uRimStrength;
void main() {`).replace(`#include <opaque_fragment>`,`{
            float rimF = 1.0 - max(dot(normalize(normal), normalize(vViewPosition)), 0.0);
            outgoingLight += uRim * smoothstep(0.55, 1.0, rimF) * uRimStrength;
          }
          #include <opaque_fragment>`)},i.customProgramCacheKey=()=>`rim-${r}`,oa.set(r,i)}return i}function ca(e,t=`#ffffff`){return new $e({color:t,map:e,gradientMap:Zi})}function la(e,t,n,r){e.shadowMap.enabled=!0,e.shadowMap.type=2,n.castShadow=!0,n.shadow.mapSize.set(2048,2048);let i=n.shadow.camera;return i.left=i.bottom=-r,i.right=i.top=r,i.near=1,i.far=60,n.shadow.bias=-6e-4,n.shadow.normalBias=.03,n.shadow.radius=3,()=>t.traverse(e=>{let t=e;if(!t.isMesh||t.userData.shadowSet)return;t.userData.shadowSet=!0;let n=t.material;Array.isArray(t.material)||n===ea||n.transparent||n.isMeshBasicMaterial||n.isShaderMaterial||(t.castShadow=!0,t.receiveShadow=!0)})}function ua(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new _t;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=da(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=da(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function da(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new et(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function fa(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c=[],l=new Map,u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=t*.5,p=10**Math.log10(1/t),m=f*p;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*p+m)},`}a in n?u.push(n[a]):(c.push(i),n[a]=o,u.push(o),o++)}let h=e.clone();for(let t in e.attributes)h.setAttribute(t,ma(e.attributes[t],c,l));for(let t in e.morphAttributes)h.morphAttributes[t]=e.morphAttributes[t].map(e=>ma(e,c,l));return h.setIndex(u),h}function pa(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function ma(e,t,n=new Map){let r=e.isInterleavedBufferAttribute,i=r?e.data:e,a=r?i.stride:e.itemSize,o=r?n.get(i):void 0;if(o===void 0){let s=new i.array.constructor(t.length*a);for(let e=0;e<t.length;e++)for(let n=0;n<a;n++)s[e*a+n]=i.array[t[e]*a+n];o=r?new i.constructor(s,a,i.meshPerAttribute):new e.constructor(s,e.itemSize,e.normalized,e.meshPerAttribute),o.setUsage(i.usage),r&&n.set(i,o)}let s=r?new e.constructor(o,e.itemSize,e.offset,e.normalized):o;return s.name=e.name,r||(s.gpuType=e.gpuType),s}function ha(e){let t=new Map,n=new Map,r=e.clone();return ga(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function ga(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)ga(e.children[r],t.children[r],n)}var _a=class extends rt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ca(e)}),this.register(function(e){return new wa(e)}),this.register(function(e){return new Ta(e)}),this.register(function(e){return new Pa(e)}),this.register(function(e){return new Fa(e)}),this.register(function(e){return new Ia(e)}),this.register(function(e){return new Da(e)}),this.register(function(e){return new Oa(e)}),this.register(function(e){return new ka(e)}),this.register(function(e){return new Aa(e)}),this.register(function(e){return new Sa(e)}),this.register(function(e){return new ja(e)}),this.register(function(e){return new Ea(e)}),this.register(function(e){return new Na(e)}),this.register(function(e){return new Ma(e)}),this.register(function(e){return new ba(e)}),this.register(function(e){return new La(e,V.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new La(e,V.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ra(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=L.extractUrlBase(e);a=L.resolveURL(t,this.path)}else a=L.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new x(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===za){try{a[V.KHR_BINARY_GLTF]=new Ha(e)}catch(e){r&&r(e);return}i=JSON.parse(a[V.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new ho(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case V.KHR_MATERIALS_UNLIT:a[t]=new xa;break;case V.KHR_DRACO_MESH_COMPRESSION:a[t]=new Ua(i,this.dracoLoader);break;case V.KHR_TEXTURE_TRANSFORM:a[t]=new Wa;break;case V.KHR_MESH_QUANTIZATION:a[t]=new Ga;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function va(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function ya(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var V={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DIFFUSE_ROUGHNESS:`KHR_materials_diffuse_roughness`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},ba=class{constructor(e){this.parser=e,this.name=V.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new R(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],He);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new qe(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new b(s),o.distance=c;break;case`spot`:o=new Be(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),oo(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},xa=class{constructor(){this.name=V.KHR_MATERIALS_UNLIT}getMaterialType(){return u}extendParams(e,t,n){let r=[];e.color=new R(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],He),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,xe))}return Promise.all(r)}},Sa=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ca=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ot(e,e)}return Promise.all(r)}},wa=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.diffuseRoughness=n.diffuseRoughnessFactor===void 0?0:n.diffuseRoughnessFactor,n.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`diffuseRoughnessMap`,n.diffuseRoughnessTexture)),Promise.all(r)}},Ta=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Ea=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Da=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_SHEEN}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new R(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],He)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,xe)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Oa=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},ka=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_VOLUME}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new R().setRGB(i[0],i[1],i[2],He),Promise.all(r)}},Aa=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_IOR}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ja=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new R().setRGB(i[0],i[1],i[2],He),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,xe)),Promise.all(r)}},Ma=class{constructor(e){this.parser=e,this.name=V.EXT_MATERIALS_BUMP}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Na=class{constructor(e){this.parser=e,this.name=V.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ya(this.parser,e,this.name)===null?null:p}extendMaterialParams(e,t){let n=ya(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Pa=class{constructor(e){this.parser=e,this.name=V.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Fa=class{constructor(e){this.parser=e,this.name=V.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Ia=class{constructor(e){this.parser=e,this.name=V.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},La=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Ra=class{constructor(e){this.name=V.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Ya.TRIANGLES&&e.mode!==Ya.TRIANGLE_STRIP&&e.mode!==Ya.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new Et,n=new M,a=new E,s=new M(1,1,1),c=new Oe(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new w(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new _t,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new w(t.array,t.itemSize,t.normalized))}v.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},za=`glTF`,Ba=12,Va={JSON:1313821514,BIN:5130562},Ha=class{constructor(e){this.name=V.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==za)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Ba,i=new DataView(e,Ba),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Va.JSON){let r=new Uint8Array(e,Ba+a,t);this.content=n.decode(r)}else if(r===Va.BIN){let n=Ba+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Ua=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=V.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=eo[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=eo[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Xa[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,He,n)})})}},Wa=class{constructor(){this.name=V.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ga=class{constructor(){this.name=V.KHR_MESH_QUANTIZATION}},Ka=class extends Ve{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},qa=new E,Ja=class extends Ka{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return qa.fromArray(i).normalize().toArray(i),i}},Ya={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Za={9728:Xe,9729:nt,9984:ie,9985:Re,9986:te,9987:yt},Qa={33071:I,33648:a,10497:S},$a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eo={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},to={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},no={CUBICSPLINE:void 0,LINEAR:it,STEP:gt},ro={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function io(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new se({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function ao(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function oo(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function so(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function co(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function lo(e){let t,n=e.extensions&&e.extensions[V.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+uo(n.attributes):e.indices+`:`+uo(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+uo(e.targets[n]);return t}function uo(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function fo(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function po(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var mo=new Et,ho=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new va,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>`u`||n&&r<17||i&&a<98?(this.textureLoader=new Ge(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new lt(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new x(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType(`arraybuffer`),(this.options.withCredentials||this.options.crossOrigin===`use-credentials`)&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return ao(i,a,r),oo(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[V.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(L.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(t){let n=this,r=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let e=$a[i.type],t=Xa[i.componentType],n=i.normalized===!0,r=new t(i.count*e);return Promise.resolve(new et(r,e,n))}let a=[];return i.bufferView===void 0?a.push(null):a.push(this.getDependency(`bufferView`,i.bufferView)),i.sparse!==void 0&&(a.push(this.getDependency(`bufferView`,i.sparse.indices.bufferView)),a.push(this.getDependency(`bufferView`,i.sparse.values.bufferView))),Promise.all(a).then(function(t){let a=t[0],o=$a[i.type],s=Xa[i.componentType],c=s.BYTES_PER_ELEMENT,l=c*o,u=i.byteOffset||0,d=i.bufferView===void 0?void 0:r.bufferViews[i.bufferView].byteStride,f=i.normalized===!0,p,m;if(d&&d!==l){let t=Math.floor(u/d),r=`InterleavedBuffer:`+i.bufferView+`:`+i.componentType+`:`+t+`:`+i.count,l=n.cache.get(r);l||(p=new s(a,t*d,i.count*d/c),l=new de(p,d/c),n.cache.add(r,l)),m=new e(l,o,u%d/c,f)}else p=a===null?new s(i.count*o):new s(a,u,i.count*o),m=new et(p,o,f);if(i.sparse!==void 0){let e=$a.SCALAR,n=Xa[i.sparse.indices.componentType],r=i.sparse.indices.byteOffset||0,c=i.sparse.values.byteOffset||0,l=new n(t[1],r,i.sparse.count*e),u=new s(t[2],c,i.sparse.count*o);a!==null&&(m=new et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(m.setX(t,u[e*o]),o>=2&&m.setY(t,u[e*o+1]),o>=3&&m.setZ(t,u[e*o+2]),o>=4&&m.setW(t,u[e*o+3]),o>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Za[n.magFilter]||1006,t.minFilter=Za[n.minFilter]||1008,t.wrapS=Qa[n.wrapS]||1e3,t.wrapT=Qa[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1,l;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)l=n.getDependency(`bufferView`,a.bufferView).then(function(e){return new Promise(function(n,r){t.parse(e,n,r)})});else{if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new pt(e);t.needsUpdate=!0,n(t)}),t.load(L.resolveURL(e,i.path),a,void 0,r)})})}let u=l.then(function(e){return c===!0&&o.revokeObjectURL(s),oo(e,a),e.userData.mimeType=a.mimeType||po(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[V.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[V.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[V.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new De,xt.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ot,xt.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return se}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[V.KHR_MATERIALS_UNLIT]){let e=r[V.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new R(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],He),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,xe)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||ro.OPAQUE;if(l===ro.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===ro.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==u&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new Ot(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==u&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==u){let e=i.emissiveFactor;o.emissive=new R().setRGB(e[0],e[1],e[2],He)}return i.emissiveTexture!==void 0&&a!==u&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,xe)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),oo(n,i),t.associations.set(n,{materials:e}),i.extensions&&ao(r,n,i),n})}createUniqueName(e){let t=y.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[V.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return _o(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=lo(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[V.KHR_DRACO_MESH_COMPRESSION]?i(o):_o(new _t,o,t),o.mode===Ya.TRIANGLE_STRIP?e=e.then(e=>pa(e,1)):o.mode===Ya.TRIANGLE_FAN&&(e=e.then(e=>pa(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?io(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Ya.TRIANGLES||u.mode===Ya.TRIANGLE_STRIP||u.mode===Ya.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new je(l,f):new ge(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===Ya.LINES)d=new P(l,f);else if(u.mode===Ya.LINE_STRIP)d=new Pe(l,f);else if(u.mode===Ya.LINE_LOOP)d=new ht(l,f);else if(u.mode===Ya.POINTS)d=new Se(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&co(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),oo(d,i),u.extensions&&ao(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&ao(r,c[0],i),c[0];let l=new be;i.extensions&&ao(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new At(kt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new A(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oo(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new Et;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new ke(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new ft(i,void 0,l);return oo(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,mo)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new M().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new at:t.length>1?new be:t.length===1?t[0]:new v,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),oo(o,i),i.extensions&&ao(n,o,i),i.matrix!==void 0){let e=new Et;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new be;n.name&&(i.name=r.createUniqueName(n.name)),oo(i,n),n.extensions&&ao(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(ha(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof xt||e instanceof pt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}to[i.path]===to.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(to[i.path]){case to.weights:l=ue;break;case to.rotation:l=dt;break;case to.translation:case to.scale:l=he;break;default:switch(n.itemSize){case 1:l=ue;break;default:l=he}}let u=r.interpolation===void 0?it:no[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+to[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=fo(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof dt?Ja:Ka)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function go(e,t,n){let r=t.attributes,i=new mt;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new M(t[0],t[1],t[2]),new M(a[0],a[1],a[2])),e.normalized){let t=fo(Xa[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new M,t=new M;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=fo(Xa[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new fe;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function _o(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=eo[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Dt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Dt.workingColorSpace}" not supported.`),oo(e,t),go(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:so(e,t.targets,n)})}ArrayBuffer.isView||(ArrayBuffer.isView=e=>typeof e==`object`&&!!e&&e.buffer instanceof ArrayBuffer),typeof globalThis>`u`&&typeof window<`u`&&(window.globalThis=window),typeof FormData>`u`&&(globalThis.FormData=class{});var vo={JOIN_ROOM:10,ERROR:11,LEAVE_ROOM:12,ROOM_DATA:13,ROOM_STATE:14,ROOM_STATE_PATCH:15,ROOM_DATA_SCHEMA:16,ROOM_DATA_BYTES:17,PING:18,ROOM_INPUT_RELIABLE:19,ROOM_INPUT_UNRELIABLE:20,ROOM_REQUEST:21,ROOM_RESPONSE:22},yo={TIMED:128,UNRELIABLE:64},bo={OK:0,REJECTED:1,ERROR:2},xo={INPUT_REFLECTION:1,INPUT_OPTIONS:2},So={RENDER_TIME:1,FIXED_TIMESTEP:2,PATCH_RATE:4,SUB_STEPS:8,RECKON_TIME:16},Co={NORMAL_CLOSURE:1e3,GOING_AWAY:1001,NO_STATUS_RECEIVED:1005,ABNORMAL_CLOSURE:1006,CONSENTED:4e3,SERVER_SHUTDOWN:4001,WITH_ERROR:4002,FAILED_TO_RECONNECT:4003,MAY_TRY_RECONNECT:4010},wo=class extends Error{code;headers;status;response;data;constructor(e,t,n){super(t),this.name=`ServerError`,this.code=e,n&&(this.headers=n.headers,this.status=n.status,this.response=n.response,this.data=n.data)}},To=class e extends Error{code;constructor(t,n){super(t),this.code=n,this.name=`MatchMakeError`,Object.setPrototypeOf(this,e.prototype)}},Eo=255,Do=213,H;(function(e){e[e.ADD=128]=`ADD`,e[e.REPLACE=0]=`REPLACE`,e[e.DELETE=64]=`DELETE`,e[e.DELETE_AND_MOVE=96]=`DELETE_AND_MOVE`,e[e.MOVE_AND_ADD=160]=`MOVE_AND_ADD`,e[e.DELETE_AND_ADD=192]=`DELETE_AND_ADD`,e[e.CLEAR=10]=`CLEAR`,e[e.REVERSE=15]=`REVERSE`,e[e.MOVE=32]=`MOVE`,e[e.DELETE_BY_REFID=33]=`DELETE_BY_REFID`,e[e.ADD_BY_REFID=129]=`ADD_BY_REFID`})(H||={}),Symbol.metadata??=Symbol.for(`Symbol.metadata`);function Oo(e){Object.defineProperty(e,Symbol.metadata,{value:void 0,writable:!0,configurable:!0,enumerable:!1})}var ko=(function(){return typeof globalThis<`u`?globalThis:typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{}})();if(typeof Symbol==`function`&&typeof Symbol.for!=`function`){let e=`colyseus.symbolRegistry`,t=ko[e]||(ko[e]=Object.create(null));Symbol.for=function(e){return t[e]||(t[e]=Symbol(e))},Symbol.keyFor=function(e){for(let n in t)if(t[n]===e)return n}}var U=Symbol.for(`$refId`),Ao=`~track`,jo=`~encoder`,Mo=`~decoder`,No=`~filter`,Po=`~getByIndex`,Fo=`~deleteByIndex`,Io=`~resyncPrune`,W=Symbol.for(`$changes`),G=Symbol.for(`$childType`),Lo=Symbol.for(`$proxyTarget`),Ro=`~onEncodeEnd`,zo=`~reset`,Bo=`~onDecodeEnd`,Vo=Symbol.for(`$values`),Ho=`~builder`,Uo=`~descriptors`,Wo=`~__encodeDescriptor`,Go=`~encoders`,Ko=`~__numFields`,qo=`~__refTypeFieldIndexes`,Jo=`~__viewFieldIndexes`,Yo=`$__fieldIndexesByViewTag`,Xo=`~__unreliableFieldIndexes`,Zo=`~__patchOnlyFieldIndexes`,Qo=`~__fullSyncSkipIndexes`,$o=`~__fullStateOnlyFieldIndexes`,es=`~__streamFieldIndexes`,ts=`~__streamPriorities`;try{new TextEncoder}catch{}var ns=new ArrayBuffer(8),rs=new Int32Array(ns),is=new Float32Array(ns),as=new Float64Array(ns),os=new BigInt64Array(ns),ss=typeof Buffer<`u`&&Buffer.byteLength?Buffer.byteLength:function(e,t){for(var n=0,r=0,i=0,a=e.length;i<a;i++)n=e.charCodeAt(i),n<128?r+=1:n<2048?r+=2:n<55296||n>=57344?r+=3:(i++,r+=4);return r};function cs(e,t,n){for(var r=0,i=0,a=t.length;i<a;i++)r=t.charCodeAt(i),r<128?e[n.offset++]=r:r<2048?(e[n.offset]=192|r>>6,e[n.offset+1]=128|r&63,n.offset+=2):r<55296||r>=57344?(e[n.offset]=224|r>>12,e[n.offset+1]=128|r>>6&63,e[n.offset+2]=128|r&63,n.offset+=3):(i++,r=65536+((r&1023)<<10|t.charCodeAt(i)&1023),e[n.offset]=240|r>>18,e[n.offset+1]=128|r>>12&63,e[n.offset+2]=128|r>>6&63,e[n.offset+3]=128|r&63,n.offset+=4)}function ls(e,t,n){e[n.offset++]=t&255}function us(e,t,n){e[n.offset++]=t&255}function ds(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255}function fs(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255}function ps(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255,e[n.offset++]=t>>16&255,e[n.offset++]=t>>24&255}function ms(e,t,n){let r=t>>24,i=t>>16,a=t>>8,o=t;e[n.offset++]=o&255,e[n.offset++]=a&255,e[n.offset++]=i&255,e[n.offset++]=r&255}function hs(e,t,n){let r=Math.floor(t/2**32);ms(e,t>>>0,n),ms(e,r,n)}function gs(e,t,n){let r=t/2**32|0;ms(e,t>>>0,n),ms(e,r,n)}function _s(e,t,n){os[0]=BigInt.asIntN(64,t),ps(e,rs[0],n),ps(e,rs[1],n)}function vs(e,t,n){os[0]=BigInt.asIntN(64,t),ps(e,rs[0],n),ps(e,rs[1],n)}function ys(e,t,n){is[0]=t,ps(e,rs[0],n)}function bs(e,t,n){as[0]=t,ps(e,rs[0],n),ps(e,rs[1],n)}function xs(e,t,n){e[n.offset++]=+!!t}function Ss(e,t,n){t||=``;let r=ss(t,`utf8`),i=0;if(r<32)e[n.offset++]=r|160,i=1;else if(r<256)e[n.offset++]=217,e[n.offset++]=r,i=2;else if(r<65536)e[n.offset++]=218,fs(e,r,n),i=3;else if(r<4294967296)e[n.offset++]=219,ms(e,r,n),i=5;else throw Error(`String too long`);return cs(e,t,n),i+r}function Cs(e,t,n){return isNaN(t)?Cs(e,0,n):isFinite(t)?t===(t|0)?t>=0?t<128?(e[n.offset++]=t&255,1):t<256?(e[n.offset++]=204,e[n.offset++]=t&255,2):t<65536?(e[n.offset++]=205,fs(e,t,n),3):t<4294967296?(e[n.offset++]=206,ms(e,t,n),5):(e[n.offset++]=207,gs(e,t,n),9):t>=-32?(e[n.offset++]=224|t+32,1):t>=-128?(e[n.offset++]=208,ls(e,t,n),2):t>=-32768?(e[n.offset++]=209,ds(e,t,n),3):t>=-2147483648?(e[n.offset++]=210,ps(e,t,n),5):(e[n.offset++]=211,hs(e,t,n),9):Math.abs(t)<=34028235e31&&(is[0]=t,Math.abs(Math.abs(is[0])-Math.abs(t))<1e-4)?(e[n.offset++]=202,ys(e,t,n),5):(e[n.offset++]=203,bs(e,t,n),9):Cs(e,t>0?2**53-1:-(2**53-1),n)}var K={int8:ls,uint8:us,int16:ds,uint16:fs,int32:ps,uint32:ms,int64:hs,uint64:gs,bigint64:_s,biguint64:vs,float32:ys,float64:bs,boolean:xs,string:Ss,number:Cs,utf8Write:cs,utf8Length:ss},ws=new ArrayBuffer(8),Ts=new Int32Array(ws),Es=new Float32Array(ws),Ds=new Float64Array(ws),Os=new BigUint64Array(ws),ks=new BigInt64Array(ws);function As(e,t,n){n>e.length-t.offset&&(n=e.length-t.offset);for(var r=``,i=0,a=t.offset,o=t.offset+n;a<o;a++){var s=e[a];if(!(s&128))r+=String.fromCharCode(s);else if((s&224)==192)r+=String.fromCharCode((s&31)<<6|e[++a]&63);else if((s&240)==224)r+=String.fromCharCode((s&15)<<12|(e[++a]&63)<<6|e[++a]&63);else if((s&248)==240)i=(s&7)<<18|(e[++a]&63)<<12|(e[++a]&63)<<6|e[++a]&63,i>=65536?(i-=65536,r+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):r+=String.fromCharCode(i);else{console.error(`decode.utf8Read(): Invalid byte `+s+` at offset `+a+`. Skip to end of string: `+(t.offset+n));break}}return t.offset+=n,r}function js(e,t){return Ms(e,t)<<24>>24}function Ms(e,t){return e[t.offset++]}function Ns(e,t){return Ps(e,t)<<16>>16}function Ps(e,t){return e[t.offset++]|e[t.offset++]<<8}function Fs(e,t){return e[t.offset++]|e[t.offset++]<<8|e[t.offset++]<<16|e[t.offset++]<<24}function Is(e,t){return Fs(e,t)>>>0}function Ls(e,t){return Ts[0]=Fs(e,t),Es[0]}function Rs(e,t){return Ts[0]=Fs(e,t),Ts[1]=Fs(e,t),Ds[0]}function zs(e,t){let n=Is(e,t);return Fs(e,t)*2**32+n}function Bs(e,t){let n=Is(e,t);return Is(e,t)*2**32+n}function Vs(e,t){return Ts[0]=Fs(e,t),Ts[1]=Fs(e,t),ks[0]}function Hs(e,t){return Ts[0]=Fs(e,t),Ts[1]=Fs(e,t),Os[0]}function Us(e,t){return Ms(e,t)>0}function Ws(e,t){let n=e[t.offset++],r;return n<192?r=n&31:n===217?r=Ms(e,t):n===218?r=Ps(e,t):n===219&&(r=Is(e,t)),As(e,t,r)}function Gs(e,t){let n=e[t.offset++];if(n<128)return n;if(n===202)return Ls(e,t);if(n===203)return Rs(e,t);if(n===204)return Ms(e,t);if(n===205)return Ps(e,t);if(n===206)return Is(e,t);if(n===207)return Bs(e,t);if(n===208)return js(e,t);if(n===209)return Ns(e,t);if(n===210)return Fs(e,t);if(n===211)return zs(e,t);if(n>223)return(255-n+1)*-1}function Ks(e,t){let n=e[t.offset];return n<192&&n>160||n===217||n===218||n===219}var qs={utf8Read:As,int8:js,uint8:Ms,int16:Ns,uint16:Ps,int32:Fs,uint32:Is,float32:Ls,float64:Rs,int64:zs,uint64:Bs,bigint64:Vs,biguint64:Hs,boolean:Us,string:Ws,number:Gs,stringCheck:Ks},Js={},Ys=new Map;function Xs(e,t){t.constructor&&(Object.prototype.hasOwnProperty.call(t,`constructor`)&&t.constructor[Symbol.metadata]==null&&Oo(t.constructor),Ys.set(t.constructor,e),Js[e]=t),t.encode&&(K[e]=t.encode),t.decode&&(qs[e]=t.decode)}function Zs(e){return Js[e]}var Qs="ArraySchema does not support streaming — positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";function $s(){return{pendingByView:new Map,sentByView:new Map,broadcastPending:new Set,sentBroadcast:new Set,broadcastDeletes:new Set,maxPerTick:32}}function ec(e){return e._stream??=$s()}function tc(e,t,n){t.activeViews.size===0&&ec(e).broadcastPending.add(n)}function nc(e,t,n,r){let i=e._stream;if(i===void 0)return!0;let a=!1;return i.broadcastPending.delete(r)?a=!0:i.sentBroadcast.delete(r)&&i.broadcastDeletes.add(r),t.forEachActiveView(e=>{let t=i.pendingByView.get(e.id);if(t?.has(r)){t.delete(r),a=!0;return}let o=i.sentByView.get(e.id);if(o?.has(r)){o.delete(r);let t=e.changes.get(n);t===void 0&&(t=new Map,e.changes.set(n,t)),t.set(r,H.DELETE)}}),a}function rc(e,t,n){let r=e._stream;if(r!==void 0){r.broadcastPending.clear();for(let e of r.sentBroadcast)r.broadcastDeletes.add(e);r.sentBroadcast.clear(),t.forEachActiveView(e=>{r.pendingByView.get(e.id)?.clear();let t=r.sentByView.get(e.id);if(t!==void 0&&t.size>0){let r=e.changes.get(n);r===void 0&&(r=new Map,e.changes.set(n,r));for(let e of t)r.set(e,H.DELETE);t.clear()}})}}function ic(e,t){let n=e._stream?.pendingByView;if(n===void 0)return!1;for(let[e,r]of n)if(r.size>0&&t.activeViews.get(e)?.deref()!==void 0)return!0;return!1}function ac(e){let t=e._stream;return t!==void 0&&(t.broadcastPending.size>0||t.broadcastDeletes.size>0)}function oc(e,t,n){let r=ec(e),i=r.pendingByView.get(t);i===void 0&&(i=new Set,r.pendingByView.set(t,i)),i.add(n)}function sc(e,t){let n=e._stream;n!==void 0&&(n.pendingByView.delete(t),n.sentByView.delete(t),n.priorityByView?.delete(t))}var lc={8:`uint8`,16:`uint16`,32:`uint32`};function uc(e){if(typeof e!=`object`||!e)throw Error(`t.quantized(): options object with { min, max } is required.`);let{min:t,max:n}=e;if(typeof t!=`number`||typeof n!=`number`||!(n>t)||!Number.isFinite(t)||!Number.isFinite(n))throw Error(`t.quantized(): require finite min < max (got min=${t}, max=${n}).`);let r=e.bits??16;if(r!==8&&r!==16&&r!==32)throw Error(`t.quantized(): bits must be 8, 16 or 32 (got ${r}).`);let i=e.mode??`clamp`;if(i!==`clamp`&&i!==`wrap`)throw Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(i)}).`);let a=i===`wrap`,o=2**r;return{min:t,max:n,bits:r,wrap:a,wire:lc[r],range:n-t,span:a?o:t===-n?o-2:o-1}}function dc(e){return typeof e==`object`&&!!e&&e.quantized!==void 0}function fc(e,t){if(e.wrap){if(!Number.isFinite(t))return 0;let n=e.range,r=(t-e.min)%n;r<0&&(r+=n);let i=e.span;return Math.floor(r/n*i+.5)%i}if(t!==t)return 0;let n=t<e.min?e.min:t>e.max?e.max:t;return Math.floor((n-e.min)/e.range*e.span+.5)}function pc(e,t){return e.min+t/e.span*e.range}function mc(e){let t=K[e.wire];return(n,r,i)=>t(n,fc(e,r),i)}function hc(e,t,n){let r=qs[e.wire];return pc(e,r(t,n))}var gc=class e{types={};schemas=new Map;hasFilters=!1;static inheritedTypes=new WeakMap;static cachedContexts=new WeakMap;static register(t){let n=Object.getPrototypeOf(t);if(n!==ju){let r=e.inheritedTypes.get(n);r||(r=new Set,e.inheritedTypes.set(n,r)),r.add(t)}}static cache(t){let n=e.cachedContexts.get(t);return n||(n=new e(t),e.cachedContexts.set(t,n)),n}constructor(e){e&&this.discoverTypes(e)}has(e){return this.schemas.has(e)}get(e){return this.types[e]}add(e,t=this.schemas.size){return!this.schemas.has(e)&&(this.types[t]=e,e[Symbol.metadata]??Tc.initialize(e),this.schemas.set(e,t),!0)}getTypeId(e){return this.schemas.get(e)}discoverTypes(t){if(!this.add(t))return;e.inheritedTypes.get(t)?.forEach(e=>{this.discoverTypes(e)});let n=t;for(;(n=Object.getPrototypeOf(n))&&n!==ju&&n!==Function.prototype;)this.discoverTypes(n);let r=t[Symbol.metadata];(r[Jo]||r[es])&&(this.hasFilters=!0);for(let e in r){let t=r[e].type;if(typeof t!=`string`&&!dc(t)){if(typeof t==`function`)this.discoverTypes(t);else{let e=Object.values(t)[0];if(typeof e==`string`)continue;this.discoverTypes(e)}}}}debug(){return`TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`}},_c=63;function vc(e){let t=bc(e);return t?{complexTypeKlass:Js[t],childType:e[t]}:{complexTypeKlass:!1,childType:e}}function yc(e,t){let n=xc(e),r=bc(n),i=r&&bc(n[r]);if(i)throw Error(`${t?`${t}: `:``}@colyseus/schema: nested collections are not supported ("${r}" of "${i}"). Collections can only hold primitive types or Schema classes, wrap the inner ${i} in a Schema class.`);return n}function bc(e){return typeof e==`object`&&e?Object.keys(e).find(e=>Js[e]!==void 0):void 0}function xc(e){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return{array:xc(e[0])};let t=Sc(e);if(t)return t;if(dc(e))return typeof e.quantized.wire==`string`?e:{quantized:uc(e.quantized)};if(e.type!==void 0)return xc(e.type);let n=bc(e);return n&&(e[n]=xc(e[n])),e}function Sc(e){let t=Object.keys(e),n=t.filter(e=>/\d+/.test(e));if(n.length>0&&n.length===t.length/2&&e[e[n[0]]]==n[0])return`number`;if(t.length>0&&t.every(t=>e[t]===t))return`string`}var Cc=[qo,Xo,Zo,Qo,$o,es,Go];function wc(e,t,n){e[t]||Object.defineProperty(e,t,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[t].push(n)}var Tc={addField(e,t,n,r,i){if(t>=_c)throw Error(`Can't define field '${n}'.\nSchema instances may only have up to ${_c} fields.`);e[t]=Object.assign(e[t]||{},{type:r,index:t,name:n}),Object.defineProperty(e,Uo,{value:e[Uo]||{},enumerable:!1,configurable:!0}),i?e[Uo][n]=i:e[Uo][n]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(e,Ko,{value:t,enumerable:!1,configurable:!0}),Object.defineProperty(e,n,{value:t,enumerable:!1,configurable:!0}),typeof e[t].type!=`string`&&!dc(e[t].type)&&(e[qo]===void 0&&Object.defineProperty(e,qo,{value:[],enumerable:!1,configurable:!0}),e[qo].push(t));let a=e[t].type;if(a&&typeof a==`object`&&a.stream!==void 0){if(a.array!==void 0)throw Error(Qs);e[t].stream=!0,e[es]||Object.defineProperty(e,es,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[es].includes(t)||e[es].push(t);let i=r?.priority;typeof i==`function`&&Tc.setStreamPriority(e,n,i)}},setTag(e,t,n){let r=e[t],i=e[r];if(i.tag=n,e[Jo]||(Object.defineProperty(e,Jo,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(e,Yo,{value:{},enumerable:!1,configurable:!0})),e[Jo].push(r),n<0)e[Yo][n]||(e[Yo][n]=[]),e[Yo][n].push(r);else for(let t=n;t>0;t&=t-1){let n=t&-t;e[Yo][n]||(e[Yo][n]=[]),e[Yo][n].push(r)}},setUnreliable(e,t){let n=e[t];if(typeof e[n].type!=`string`)throw Error(`@unreliable cannot be applied to ref-type field "${t}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);e[n].unreliable=!0,e[Xo]||Object.defineProperty(e,Xo,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[Xo].push(n)},setPatchOnly(e,t){let n=e[t];if(e[n].fullStateOnly)throw Error(`field "${t}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);e[n].patchOnly=!0,wc(e,Zo,n),wc(e,Qo,n)},setDeprecated(e,t){let n=e[t];e[n].deprecated=!0,wc(e,Qo,n),Object.defineProperty(e,n,{value:e[n],enumerable:!1,configurable:!0})},setFullStateOnly(e,t){let n=e[t];if(e[n].patchOnly)throw Error(`field "${t}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);e[n].fullStateOnly=!0,wc(e,$o,n)},setStream(e,t){let n=e[t];e[n].stream=!0,e[es]||Object.defineProperty(e,es,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[es].push(n)},setStreamPriority(e,t,n){let r=e[t];e[ts]||Object.defineProperty(e,ts,{value:{},enumerable:!1,configurable:!0,writable:!0}),e[ts][r]=n},getStreamPriority(e,t){return e?.[ts]?.[t]},defineField(e,t,n,r,i){let a=yc(i,`${e.name}.${r}`),{complexTypeKlass:o,childType:s}=vc(a);Tc.addField(t,n,r,a,Eu(r,n,s,o)),t[Uo][r]&&Object.defineProperty(e.prototype,r,t[Uo][r]),(typeof a==`string`||dc(a))&&(t[Go]||Object.defineProperty(t,Go,{value:[],enumerable:!1,configurable:!0,writable:!0}),t[Go][n]=typeof a==`string`?K[a]:mc(a.quantized))},setFields(e,t){let n=e.prototype.constructor;gc.register(n);let r=Object.getPrototypeOf(n),i=r&&r[Symbol.metadata],a=Tc.initialize(n);n[`~track`]||(n[Ao]=ju[Ao]),n[`~encoder`]||(n[jo]=ju[jo]),n[`~decoder`]||(n[Mo]=ju[Mo]),n.prototype.toJSON||(n.prototype.toJSON=ju.prototype.toJSON);let o=a[`~__numFields`]??(i&&i[`~__numFields`])??-1;o++,a[Go]||Object.defineProperty(a,Go,{value:i?.[Go]?[...i[Go]]:[],enumerable:!1,configurable:!0,writable:!0});for(let e in t){if(a[e]!==void 0)throw Error(`@colyseus/schema: Duplicate '${e}' definition on '${n.name||`(anonymous)`}'.`);Tc.defineField(n,a,o,e,t[e]),o++}return e},isDeprecated(e,t){return e[t].deprecated===!0},initialize(e){let t=Object.getPrototypeOf(e),n=t[Symbol.metadata],r=e[Symbol.metadata]??Object.create(null);if(t!==ju&&r===n&&(r=Object.create(null),n)){Object.setPrototypeOf(r,n),Object.defineProperty(r,Ko,{value:n[Ko],enumerable:!1,configurable:!0,writable:!0}),n[Jo]!==void 0&&(Object.defineProperty(r,Jo,{value:[...n[Jo]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(r,Yo,{value:{...n[Yo]},enumerable:!1,configurable:!0,writable:!0}));for(let e of Cc){let t=n[e];t!==void 0&&Object.defineProperty(r,e,{value:[...t],enumerable:!1,configurable:!0,writable:!0})}Object.defineProperty(r,Uo,{value:{...n[Uo]},enumerable:!1,configurable:!0,writable:!0})}return Object.defineProperty(e,Symbol.metadata,{value:r,writable:!1,configurable:!0}),r},isValidInstance(e){return e.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(e.constructor[Symbol.metadata],`~__numFields`)},getFields(e){let t=e[Symbol.metadata],n={};for(let e=0;e<=t[Ko];e++)n[t[e].name]=t[e].type;return n},hasViewTagAtIndex(e,t){return e?.[Jo]?.includes(t)},hasUnreliableAtIndex(e,t){return e?.[Xo]?.includes(t)},hasPatchOnlyAtIndex(e,t){return e?.[Zo]?.includes(t)},hasFullStateOnlyAtIndex(e,t){return e?.[$o]?.includes(t)},hasStreamAtIndex(e,t){return e?.[es]?.includes(t)}},Ec=(e,t,n)=>e(t,n),Dc=class{dirtyLow=0;dirtyHigh=0;ops;constructor(e){this.ops=new Uint8Array(Math.max(e+1,1))}record(e,t){let n=this.ops[e];n===0?this.ops[e]=t:(n===H.DELETE||n===H.ADD&&t===H.DELETE_AND_ADD)&&(this.ops[e]=H.DELETE_AND_ADD),e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordDelete(e,t){this.ops[e]=t,e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordRaw(e,t){this.record(e,t)}operationAt(e){let t=this.ops[e];return t===0?void 0:t}setOperationAt(e,t){this.ops[e]=t}forEach(e){this.forEachWithCtx(e,Ec)}forEachWithCtx(e,t){let n=this.dirtyLow,r=this.dirtyHigh,i=this.ops;for(;n!==0;){let r=n&-n,a=31-Math.clz32(r);n^=r,t(e,a,i[a])}for(;r!==0;){let n=r&-r,a=31-Math.clz32(n)+32;r^=n,t(e,a,i[a])}}size(){return kc(this.dirtyLow)+kc(this.dirtyHigh)}has(){return(this.dirtyLow|this.dirtyHigh)!==0}reset(){this.dirtyLow=0,this.dirtyHigh=0,this.ops.fill(0)}},Oc=class{dirty=new Map;pureOps=[];record(e,t){let n=this.dirty.get(e);n===void 0?this.dirty.set(e,t):(n===H.DELETE||n===H.ADD&&t===H.DELETE_AND_ADD)&&this.dirty.set(e,H.DELETE_AND_ADD)}recordDelete(e,t){this.dirty.set(e,t)}recordRaw(e,t){this.dirty.set(e,t)}recordPure(e){this.pureOps.push([this.dirty.size,e])}operationAt(e){return this.dirty.get(e)}setOperationAt(e,t){this.dirty.has(e)&&this.dirty.set(e,t)}forEach(e){this.forEachWithCtx(e,Ec)}forEachWithCtx(e,t){let n=this.pureOps;if(n.length>0){let r=0,i=0;for(let[a,o]of this.dirty){for(;r<n.length&&n[r][0]<=i;){let i=n[r++][1];t(e,-i,i)}t(e,a,o),i++}for(;r<n.length;){let i=n[r++][1];t(e,-i,i)}}else for(let[n,r]of this.dirty)t(e,n,r)}size(){return this.dirty.size+this.pureOps.length}has(){return this.dirty.size>0||this.pureOps.length>0}reset(){this.dirty.clear(),this.pureOps.length=0}shift(e){let t=new Map;for(let[n,r]of this.dirty)t.set(n+e,r);this.dirty=t}};function kc(e){return e-=e>>>1&1431655765,e=(e&858993459)+(e>>>2&858993459),(e+(e>>>4)&252645135)*16843009>>>24}function Ac(e){if(e===void 0)return 0;let t=0;for(let n=0,r=e.length;n<r;n++){let r=e[n];r<32&&(t|=1<<r)}return t}function jc(e){let t=[],n=[],r=[],i=[],a=e?.[Ko];if(a===void 0)return{names:t,types:n,tags:r,encoders:i};let o=e[Go];for(let s=0;s<=a;s++){let a=e[s];a===void 0?(t[s]=void 0,n[s]=void 0,r[s]=void 0,i[s]=void 0):(t[s]=a.name,n[s]=a.type,r[s]=a.tag,i[s]=o?.[s])}return{names:t,types:n,tags:r,encoders:i}}function Mc(e){let t=e.constructor;if(Object.prototype.hasOwnProperty.call(t,Wo))return t[Wo];let n=t[Symbol.metadata],r=Tc.isValidInstance(e),i=(n?.[Jo]?.length??0)>0,a=jc(n),o=r&&!i?void 0:t[No],s={encoder:t[jo],filter:o,metadata:n,isSchema:r,filterBitmask:r?Ac(n?.[Jo]):0,hasAnyFullStateOnly:(n?.[$o]?.length??0)>0,hasAnyUnreliable:(n?.[Xo]?.length??0)>0,hasAnyStream:(n?.[es]?.length??0)>0,hasAnyView:i,fullStateOnlyBitmask:Ac(n?.[$o]),unreliableBitmask:Ac(n?.[Xo]),streamBitmask:Ac(n?.[es]),names:a.names,types:a.types,tags:a.tags,encoders:a.encoders};return Object.defineProperty(t,Wo,{value:s,enumerable:!1,writable:!0,configurable:!0}),s}function Nc(e,t,n){return e.parentRef&&(e.parentRef[W]===t[W]||Lc(e,(e,n)=>e[W]===t[W]))?(e._parentIndex=n,!0):(e.parentRef===void 0?(e.parentRef=t,e._parentIndex=n):(e.extraParents={ref:e.parentRef,index:e._parentIndex,next:e.extraParents},e.parentRef=t,e._parentIndex=n),!1)}function Pc(e,t,n){if(e.extraParents===void 0)e._parentIndex=n;else if(e.parentRef[W]===t[W])e._parentIndex=n;else for(let r=e.extraParents;r!==void 0;r=r.next)if(r.ref[W]===t[W]){r.index=n;return}}function Fc(e,t){if(e.parentRef&&e.parentRef[W]===t[W])return e.extraParents?(e.parentRef=e.extraParents.ref,e._parentIndex=e.extraParents.index,e.extraParents=e.extraParents.next):(e.parentRef=void 0,e._parentIndex=void 0),!0;let n=e.extraParents,r=null;for(;n;){if(n.ref[W]===t[W])return r?r.next=n.next:e.extraParents=n.next,!0;r=n,n=n.next}return e.parentRef===void 0}function Ic(e,t){if(e.parentRef!==void 0&&t(e.parentRef,e._parentIndex))return{ref:e.parentRef,index:e._parentIndex};for(let n=e.extraParents;n!==void 0;n=n.next)if(t(n.ref,n.index))return{ref:n.ref,index:n.index}}function Lc(e,t){if(e.parentRef!==void 0&&t(e.parentRef,e._parentIndex))return!0;for(let n=e.extraParents;n!==void 0;n=n.next)if(t(n.ref,n.index))return!0;return!1}function Rc(e,t){if(e.parentRef&&e.parentRef[W]===t[W])return e._parentIndex;for(let n=e.extraParents;n!==void 0;n=n.next)if(n.ref[W]===t[W])return n.index}function zc(e){let t=[];e.parentRef&&t.push({ref:e.parentRef,index:e._parentIndex});let n=e.extraParents;for(;n;)t.push({ref:n.ref,index:n.index}),n=n.next;return t}function Bc(e,t,n){let r=t.refTarget;if(t.isArray){let t=r.items,i=t[n];if(i!==void 0&&i[W]===e)return!0;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r!==void 0&&r[W]===e)return!0}return!1}let i=t.getValue(n);return i!==void 0&&i[W]===e}var Vc=(e,t)=>{e.isFieldUnreliable(t)?e.ensureUnreliableRecorder().record(t,H.ADD):e.record(t,H.ADD)},Hc=(e,t)=>e(t);function Uc(e,t){Wc(e,t,Hc)}function Wc(e,t,n){let r=e.refTarget;if(r[G]!==void 0){if(e.isPatchOnly)return;if(Array.isArray(r.items)){let e=r.items;for(let r=0,i=e.length;r<i;r++)e[r]!==void 0&&n(t,r)}else if(r.journal!==void 0)for(let[e,i]of r.journal.keyByIndex)r.$items.has(i)&&n(t,e);else if(r.$items!==void 0)for(let e of r.$items.keys())n(t,e)}else{let i=e.metadata;if(!i)return;let a=i[`~__numFields`]??-1,o=i[Qo],s=e.encDescriptor.names;for(let e=0;e<=a;e++){let i=s[e];i===void 0||o&&o.includes(e)||r[i]!=null&&n(t,e)}}}function Gc(e,t,n,r){Kc(e,t,n),e.isFullStateOnly||(e.has()&&e.root?.enqueueChangeTree(e),e.unreliableRecorder?.has()&&e.root?.enqueueUnreliable(e),!e.has()&&!e.unreliableRecorder?.has()&&e.root?.enqueueChangeTree(e))}function Kc(e,t,n){if(!t)return;let r=t[W],i=!r._isSchema,a;i?(t=r.parent,n=r.parentIndex,a=t?.[W].metadata):a=r.metadata;let o=(a?.[Zo]?.includes(n)?yl:0)|(a?.[$o]?.includes(n)?bl:0),s=r.flags&El|o,c=e.flags;if(e.flags=c|s,s&~c&bl&&(e.reset(),e.unreliableRecorder?.reset()),!e.root?.types?.hasFilters)return;let l=a?.[Jo]?.includes(n)??!1,u=a?.[es]?.includes(n)??!1,d=r.isFiltered||l||u;if(e.isFiltered=d,u&&!i){e.isStreamCollection=!0;let t=ec(e.ref);if(t.priority===void 0){let e=Tc.getStreamPriority(a,n);e!==void 0&&(t.priority=e)}e.root?.registerStream(e.ref)}if(d){let t=Jc(e);e.isVisibilitySharedWithParent=r.isFiltered&&t&&!u&&(!l||i&&a[n].tag!==_u)}}function qc(e){let t=e.pendingFilterRefresh;for(let e=0;e<t.length;e++){let n=t[e];(n.flags&Cl)!==0&&Yc(n)}t.length=0}function Jc(e){return e._isSchema||typeof e.refTarget[G]!=`string`}function Yc(e){e.flags&=~Cl;let t=e.root;if(t===void 0||e.parentRef===void 0)return;let n=Jc(e),r=el(e,e.parentRef,e._parentIndex,n);for(let t=e.extraParents;t!==void 0&&r!==$c;t=t.next)r|=el(e,t.ref,t.index,n);if(r===0)return;e.isVisibilitySharedWithParent=(r&Qc)!==0;let i=(r&Zc)===0;i!==e.isFiltered&&(e.isFiltered=i,!i&&!e.isFullStateOnly&&(e.forEachLiveWithCtx(e,Vc),e.has()&&t.enqueueChangeTree(e),e.unreliableRecorder?.has()&&t.enqueueUnreliable(e)),e.forEachChildWithCtx(e,tl))}var Xc=1,Zc=2,Qc=4,$c=7;function el(e,t,n,r){let i=t[W];if(i.root!==e.root||!Bc(e,i,n))return 0;i.flags&Cl&&Yc(i);let a=Xc;if(i._isSchema)i.encDescriptor.tags[n]!==void 0||i.isFieldStream(n)||(i.isFiltered?r&&(a|=Qc):a|=Zc);else if(!i.isFiltered)a|=Zc;else if(r&&!i.isStreamCollection){let e=i.parent?.[W];(e?._isSchema?e.encDescriptor.tags[i.parentIndex]:void 0)!==_u&&(a|=Qc)}return a}var tl=(e,t,n)=>{Yc(t)};function nl(e,t,n,r){let i=e.subscribedViews;if(i===void 0)return;let a=e.isStreamCollection,o=a?e.ref:void 0,s=a?void 0:n[W];for(let e=0,n=i.length;e<n;e++){let n=i[e];for(;n!==0;){let c=n&-n;n^=c;let l=e*32+(31-Math.clz32(c)),u=r.activeViews.get(l)?.deref();u===void 0?i[e]&=~c:a?oc(o,l,t):s!==void 0&&u.markVisible(s)}}}function rl(e,t){e.root=t;let n=t.add(e);Gc(e,e.parent,e.parentIndex),n&&sl(e,t,cl)}function il(e,t,n,r){let i=e.addParent(t,r);if(!n)return i;let a=n.add(e);n!==e.root&&(e.root=n,Gc(e,t,r));let o=t?.[W];if(o!==void 0&&o.subscribedViews!==void 0&&t[G]!==void 0&&nl(o,r,e.ref,n),a){let t=ll[ul];t===void 0&&(t={parentRef:void 0,root:void 0},ll[ul]=t),t.parentRef=e.ref,t.root=n,ul++,sl(e,t,dl),ul--}return i}function al(e,t){sl(e,t,ol)}function ol(e,t,n){e(t,n)}function sl(e,t,n){let r=e.refTarget;if(r[G]){if(typeof r[G]!=`string`){let e=r.items;if(e!==void 0)for(let r=0,i=e.length;r<i;r++){let i=e[r];i&&n(t,i[W],r)}else{let e=r.$items,i=r._collectionIndexes;for(let r of e.keys()){let a=e.get(r);a&&n(t,a[W],i?.[r]??r)}}}}else{let i=e.metadata?.[qo];if(!i)return;let a=e.encDescriptor.names;for(let e=0,o=i.length;e<o;e++){let o=i[e],s=r[a[o]];s&&n(t,s[W],o)}}}function cl(e,t,n){t.root===e?e.add(t):t.setRoot(e)}var ll=[],ul=0;function dl(e,t,n){t.root===e.root?(e.root.add(t),e.root.moveNextToParent(t)):t.setParent(e.parentRef,e.root,n)}function fl(e,t,n){let r=(n&3)<<3;return n<4?e>>>r&255:t>>>r&255}var pl=(e,t,n)=>e(t,n);function ml(){return{next:void 0,tail:void 0,nextPosition:0}}var hl=1,gl=2,_l=4,vl=8,yl=16,bl=32,xl=64,Sl=128,Cl=256,wl=512,Tl=1024,El=48,Dl=class{ref;refTarget;get isArray(){return this.refTarget!==this.ref}metadata;encDescriptor;root;parentRef;_parentIndex;extraParents;flags=_l;refCount=0;_fullSyncGen=0;_isSchema=!1;dirtyLow=0;dirtyHigh=0;opsLow=0;opsHigh=0;ops;collDirty;collPureOps;unreliableRecorder;paused=!1;changesNode;unreliableChangesNode;visibleViews;tagViews;subscribedViews;get isFiltered(){return(this.flags&hl)!==0}set isFiltered(e){this.flags=e?this.flags|hl:this.flags&-2}get isVisibilitySharedWithParent(){return(this.flags&gl)!==0}set isVisibilitySharedWithParent(e){this.flags=e?this.flags|gl:this.flags&-3}get isNew(){return(this.flags&_l)!==0}set isNew(e){this.flags=e?this.flags|_l:this.flags&-5}get isUnreliable(){return(this.flags&vl)!==0}set isUnreliable(e){this.flags=e?this.flags|vl:this.flags&-9}get isPatchOnly(){return(this.flags&yl)!==0}set isPatchOnly(e){this.flags=e?this.flags|yl:this.flags&-17}get isFullStateOnly(){return(this.flags&bl)!==0}set isFullStateOnly(e){this.flags=e?this.flags|bl:this.flags&-33}get isStreamCollection(){return(this.flags&xl)!==0}set isStreamCollection(e){this.flags=e?this.flags|xl:this.flags&-65}get needsRestage(){return(this.flags&Sl)!==0}set needsRestage(e){this.flags=e?this.flags|Sl:this.flags&-129}get hasFilteredFields(){return this.isFiltered||this.encDescriptor.hasAnyView}ensureUnreliableRecorder(){return this.unreliableRecorder===void 0&&(this.unreliableRecorder=this._isSchema?new Dc(this.metadata?.[`~__numFields`]??0):new Oc),this.unreliableRecorder}isFieldUnreliable(e){let t=this.encDescriptor;return t.hasAnyUnreliable?e<32?!!(t.unreliableBitmask&1<<e):Tc.hasUnreliableAtIndex(this.metadata,e):!1}isFieldFullStateOnly(e){if(this.isFullStateOnly)return!0;let t=this.encDescriptor;return t.hasAnyFullStateOnly?e<32?!!(t.fullStateOnlyBitmask&1<<e):Tc.hasFullStateOnlyAtIndex(this.metadata,e):!1}isFieldStream(e){let t=this.encDescriptor;return t.hasAnyStream?e<32?!!(t.streamBitmask&1<<e):Tc.hasStreamAtIndex(this.metadata,e):!1}constructor(e,t=e){this.ref=e,this.refTarget=t;let n=Mc(e);this.encDescriptor=n,this.metadata=n.metadata;let r=n.isSchema;if(this._isSchema=r,this.ops=void 0,this.collDirty=void 0,this.collPureOps=void 0,r){let e=this.metadata?.[`~__numFields`]??0;e>7&&(this.ops=new Uint8Array(e+1))}else this.collDirty=new Map}_opAt(e){let t=this.ops;if(t!==void 0)return t[e];let n=(e&3)<<3;return e<4?this.opsLow>>>n&255:this.opsHigh>>>n&255}_opPut(e,t){let n=this.ops;if(n!==void 0){n[e]=t;return}let r=(e&3)<<3,i=~(255<<r);e<4?this.opsLow=this.opsLow&i|t<<r:this.opsHigh=this.opsHigh&i|t<<r}_markDirty(e){e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}record(e,t){if(this._isSchema){let n=this._opAt(e);n===0?this._opPut(e,t):(n===H.DELETE||n===H.ADD&&t===H.DELETE_AND_ADD)&&this._opPut(e,H.DELETE_AND_ADD),this._markDirty(e)}else{let n=this.collDirty,r=n.get(e),i;i=r===void 0?t:r===H.DELETE||r===H.ADD&&t===H.DELETE_AND_ADD?H.DELETE_AND_ADD:r,n.set(e,i)}}recordDelete(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordRaw(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordPure(e){if(this._isSchema)throw Error(`ChangeTree (Schema): pure operations are not supported`);(this.collPureOps??=[]).push([this.collDirty.size,e])}operationAt(e){if(this._isSchema){let t=this._opAt(e);return t===0?void 0:t}return this.collDirty.get(e)}setOperationAt(e,t){if(this._isSchema)this._opPut(e,t);else{let n=this.collDirty;n.has(e)&&n.set(e,t)}}forEach(e){this.forEachWithCtx(e,pl)}forEachWithCtx(e,t){if(this._isSchema){let n=this.dirtyLow,r=this.dirtyHigh,i=this.ops;if(i!==void 0){for(;n!==0;){let r=n&-n,a=31-Math.clz32(r);n^=r,t(e,a,i[a])}for(;r!==0;){let n=r&-r,a=31-Math.clz32(n)+32;r^=n,t(e,a,i[a])}}else{let r=this.opsLow,i=this.opsHigh;for(;n!==0;){let a=n&-n,o=31-Math.clz32(a);n^=a,t(e,o,fl(r,i,o))}}return}let n=this.collDirty,r=this.collPureOps;if(r!==void 0&&r.length>0){let i=0,a=0;for(let[o,s]of n){for(;i<r.length&&r[i][0]<=a;){let n=r[i++][1];t(e,-n,n)}t(e,o,s),a++}for(;i<r.length;){let n=r[i++][1];t(e,-n,n)}}else for(let[r,i]of n)t(e,r,i)}size(){return this._isSchema?kc(this.dirtyLow)+kc(this.dirtyHigh):this.collDirty.size+(this.collPureOps?.length??0)}has(){return this._isSchema?(this.dirtyLow|this.dirtyHigh)!==0:this.collDirty.size>0||this.collPureOps!==void 0&&this.collPureOps.length>0}reset(){this._isSchema?(this.dirtyLow=0,this.dirtyHigh=0,this.ops===void 0?(this.opsLow=0,this.opsHigh=0):this.ops.fill(0)):(this.collDirty.clear(),this.collPureOps!==void 0&&(this.collPureOps.length=0),this.flags&=-513)}recycle(){if(this.root!==void 0)throw Error(`@colyseus/schema: cannot recycle an attached ChangeTree (${this.ref?.constructor?.name}). Remove the instance from its parent collection before releasing it to a pool.`);this.reset(),this.unreliableRecorder?.reset(),this.flags=132,this._fullSyncGen=0,this.parentRef=void 0,this._parentIndex=void 0,this.extraParents=void 0,this.changesNode=void 0,this.unreliableChangesNode=void 0,this.paused=!1,this.visibleViews=void 0,this.tagViews=void 0,this.subscribedViews=void 0}insertAt(e,t){if(this._isSchema)throw Error(`ChangeTree (Schema): insertAt is not supported`);let n=this.collDirty,r=new Map,i=!this.paused&&!this.isFullStateOnly;if(e>0)for(let[t,i]of n)t<e&&r.set(t,i);if(i)for(let n=0;n<t;n++)r.set(e+n,H.ADD);for(let[i,a]of n)i>=e&&r.set(i+t,a);this.collDirty=r,i&&this.root?.enqueueChangeTree(this)}removeAt(e,t){if(this._isSchema)throw Error(`ChangeTree (Schema): removeAt is not supported`);let n=this.collDirty,r=e+t,i=!1;for(let e of n.keys())if(e>=r){i=!0;break}if(!i){for(let t=e;t<r;t++)n.delete(t);return}let a=new Map;for(let[i,o]of n)i<e?a.set(i,o):i>=r&&a.set(i-t,o);this.collDirty=a}setRoot(e){rl(this,e)}setParent(e,t,n){return il(this,e,t,n)}forEachChild(e){al(this,e)}forEachChildWithCtx(e,t){sl(this,e,t)}forEachLive(e){Uc(this,e)}forEachLiveWithCtx(e,t){Wc(this,e,t)}operation(e){this.paused||this.isFullStateOnly||(this.recordPure(e),this.root?.enqueueChangeTree(this))}_routeAndRecord(e,t,n){if(!(this.paused||this.isFieldFullStateOnly(e))){if(this.isFieldUnreliable(e)&&!this.isNew){let r=this.ensureUnreliableRecorder();n?r.recordRaw(e,t):r.record(e,t),this.root?.enqueueUnreliable(this)}else n?this.recordRaw(e,t):this.record(e,t),this.root?.enqueueChangeTree(this)}}change(e,t=H.ADD){this._routeAndRecord(e,t,!1)}indexedOperation(e,t){this._routeAndRecord(e,t,!0)}getChange(e){return this.operationAt(e)}pause(){this.paused=!0}resume(){this.paused=!1}untracked(e){let t=this.paused;this.paused=!0;try{return e()}finally{this.paused=t}}markDirty(e,t=H.ADD){let n=this.paused;this.paused=!1;try{this.change(e,t)}finally{this.paused=n}}getValue(e,t=!1){return this.refTarget[Po](e,t)}delete(e,t){if(e===void 0){try{throw Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${e}'`)}catch(e){console.warn(e)}return}if(this.paused||this.isFieldFullStateOnly(e))return this.getValue(e);let n=this.isFieldUnreliable(e)&&!this.isNew;n?this.ensureUnreliableRecorder().recordDelete(e,t??H.DELETE):this.recordDelete(e,t??H.DELETE);let r=this.getValue(e);return r&&r[W]&&this.root?.remove(r[W]),n?this.root?.enqueueUnreliable(this):this.root?.enqueueChangeTree(this),r}endEncode(){this.reset(),this.changesNode=void 0,this._isSchema||this.refTarget[Ro]?.(),this.isNew=!1}endEncodeUnreliable(){this.unreliableRecorder?.reset(),this.unreliableChangesNode=void 0,this._isSchema||this.refTarget[Ro]?.()}discard(){this._isSchema||this.refTarget[Ro]?.(),this.reset(),this.unreliableRecorder?.reset()}discardAll(){let e=e=>{if(e<0)return;let t=this.getValue(e);t&&t[W]&&t[W].discardAll()};this.forEach(e),this.unreliableRecorder?.forEach(e),this.discard()}get changed(){return this.has()||(this.unreliableRecorder?.has()??!1)}get parent(){return this.parentRef}get parentIndex(){return this._parentIndex}addParent(e,t){return Nc(this,e,t)}setParentIndex(e,t){Pc(this,e,t)}removeParent(e=this.parent){return Fc(this,e)}findParent(e){return Ic(this,e)}hasParent(e){return Lc(this,e)}indexInParent(e){return Rc(this,e)}getAllParents(){return zc(this)}},Ol=class{ref;root=void 0;parentRef=void 0;paused=!1;isNew=!1;flags=0;constructor(e){this.ref=e}change(){}delete(){}indexedOperation(){}operation(){}setParent(){return!1}addParent(){return!1}setParentIndex(){}removeParent(){return!1}getChange(){return 0}discard(){}discardAll(){}pause(){}resume(){}untracked(e){return e()}markDirty(){}forEachChild(e){let t=this.ref;if(t[G]){if(typeof t[G]!=`string`)for(let[n,r]of t.entries())r&&e(r[W],t._collectionIndexes?.[n]??n);return}let n=t.constructor?.[Symbol.metadata];if(!n)return;let r=n[qo]??[];for(let i=0;i<r.length;i++){let a=r[i],o=t[n[a].name];o&&e(o[W],a)}}forEachChildWithCtx(e,t){this.forEachChild((n,r)=>t(e,n,r))}forEachLive(){}forEachLiveWithCtx(){}forEach(){}};function kl(e){return new Ol(e)}function Al(e,t=e){Object.defineProperty(e,W,{value:kl(t),enumerable:!1,writable:!0})}function jl(e,t,n,r,i,a,o){o===void 0?typeof n==`string`?K[n]?.(t,r,a):n[Symbol.metadata]==null?K.number(t,r[U],a):(K.number(t,r[U],a),(i&H.ADD)===H.ADD&&e.tryEncodeTypeId(t,n,r.constructor,a)):o(t,r,a)}var Ml=function(e,t,n,r,i,a,o,s){if(t[a.offset++]=(r|i)&255,i===H.DELETE)return;let c=n.encDescriptor,l=n.ref,u=l[Vo][r]??l[c.names[r]];jl(e,t,c.types[r],u,i,a,c.encoders[r])},Nl=function(e,t,n,r,i,a){if(t[a.offset++]=i&255,K.number(t,r,a),i===H.DELETE)return;let o=n.ref;if((i&H.ADD)===H.ADD){let e=o.$indexes.get(r);K.string(t,e,a)}jl(e,t,o[G],o[Po](r),i,a)},Pl=function(e,t,n,r,i,a){if(t[a.offset++]=i&255,K.number(t,r,a),i===H.DELETE)return;let o=n.ref;jl(e,t,o[G],o[Po](r),i,a)};function Fl(e,t){return e.replacedItems?.[t]??e.tmpItems[t]}function Il(e,t,n){let r=e.tmpItems.indexOf(t);if(r!==-1&&r<n)return!0;let i=e.replacedItems?.indexOf(t)??-1;return i!==-1&&i<n}var Ll=function(e,t,n,r,i,a,o,s){let c=n.refTarget,l=c[G],u=typeof l!=`string`,d=s&&n.isFiltered&&u,f;if(d){let e=i===H.DELETE?Fl(c,r):c.tmpItems[r];if(!e)return;if(f=e[U],i===H.DELETE)i=H.DELETE_BY_REFID;else if((i&H.ADD)===H.ADD)i=H.ADD_BY_REFID;else return}else if(i===H.DELETE&&u){let e=Fl(c,r);if(!e)return;(n.flags&Tl)!==0&&e[W].root!==void 0&&Il(c,e,r)?f=r:(f=e[U],i=H.DELETE_BY_REFID)}else f=r;t[a.offset++]=i&255,K.number(t,f,a),i!==H.DELETE&&i!==H.DELETE_BY_REFID&&jl(e,t,l,c[Po](r,o),i,a)};function Rl(e,t,n,r,i,a,o){let s=e.resyncVisited,c=s.get(e.currentRefId);if(c===void 0&&s.set(e.currentRefId,c=new Set),c.add(r),i!==void 0&&n===H.ADD&&i!==a){let n=i[U];n!==void 0&&(e.root.removeRef(n),o?.push({ref:t,refId:e.currentRefId,op:H.DELETE,dynamicIndex:r,value:void 0,previousValue:i}))}}function zl(e,t){let n=e.resyncVisited;n.has(t)||n.set(t,new Set)}function Bl(e,t){e.resyncDamaged?console.warn(`@colyseus/schema: resync sweep skipped — parts of the payload could not be decoded. Stale entries may persist until the next resync.`):Vl(e,e.state,new Set,t)}function Vl(e,t,n,r){let i=t[U];if(i===void 0||n.has(i))return;n.add(i);let a=t.constructor[Symbol.metadata],o=a?.[qo];if(o===void 0)return;let s=a[Zo];for(let i=0;i<o.length;i++){let c=o[i];if(s!==void 0&&s.includes(c))continue;let l=a[c],u=t[l.name];u&&(ju.is(l.type)?Vl(e,u,n,r):Hl(e,u,n,r))}}function Hl(e,t,n,r){let i=t[Lo]??t,a=i[U];if(a===void 0||n.has(a))return;n.add(a);let o=e.resyncVisited.get(a);if(o===void 0)return;let s=e.root;i[Io](o,(e,n)=>{r?.push({ref:t,refId:a,op:H.DELETE,dynamicIndex:n,value:void 0,previousValue:e});let i=e?.[U];i!==void 0&&s.removeRef(i)},t=>{ju.isSchema(t)&&Vl(e,t,n,r)})}var Ul=-1,Wl={Map:1,Array:2,Set:3,Collection:4,Stream:5};function Gl(e,t,n,r,i,a,o,s,c){let l=e.root,u;if((t&H.DELETE)===H.DELETE){let e=i?.[U];e!==void 0&&l.removeRef(e),t!==H.DELETE_AND_ADD&&n[Fo](r),u=void 0}if(t!==H.DELETE){if(typeof a==`string`)u=qs[a](o,s);else if(dc(a))u=hc(a.quantized,o,s);else if(ju.is(a)){let n=qs.number(o,s);if(u=l.refs.get(n),(t&H.ADD)===H.ADD){let r=e.getInstanceType(o,s,a);u||=e.createInstanceOfType(r),l.addRef(n,u,u!==i||t===H.DELETE_AND_ADD&&u===i)}}else{let n=Zs(Object.keys(a)[0]),r=qs.number(o,s);e.resyncVisited!==null&&zl(e,r);let d=l.refs.has(r)?i||l.refs.get(r):n.constructor.initializeForDecoder();if(u=d.clone(!0),u[G]=Object.values(a)[0],i){let e=i[U];if(e!==void 0&&r!==e){(t&H.DELETE)!==H.DELETE&&l.removeRef(e);let n=i.entries(),r;for(;(r=n.next())&&!r.done;){let[t,n]=r.value;typeof n==`object`&&(e=n[U]),c?.push({ref:i,refId:e,op:H.DELETE,field:t,value:void 0,previousValue:n})}}}l.addRef(r,u,d!==i||t===H.DELETE_AND_ADD&&d===i)}}return u}var Kl=function(e,t,n,r,i){let a=t[n.offset++],o=r.constructor[Symbol.metadata],s=a>>6<<6,c=a%(s||255),l=o[c];if(l===void 0)return console.warn(`@colyseus/schema: field not defined at`,{index:c,ref:r.constructor.name,metadata:o}),Ul;let u=l.deprecated===!0,d=u?void 0:r[Po](c),f=Gl(e,s,r,c,d,l.type,t,n,i);u||(f!=null&&(r[l.name]=f),d!==f&&i?.push({ref:r,refId:e.currentRefId,op:s,field:l.name,value:f,previousValue:d}))},ql=function(e,t,n,r,i){let a=r[Lo]??r,o=t[n.offset++];if(o===H.CLEAR){e.removeChildRefs(a,i),a.clear();return}let s=qs.number(t,n),c=a[G],l=a.constructor.COLLECTION_KIND,u;(o&H.ADD)===H.ADD?l===Wl.Map?(u=qs.string(t,n),a.setIndex(s,u)):u=s:u=a.getIndex(s);let d=a[Po](s),f=Gl(e,o,r,s,d,c,t,n,i);if(e.resyncVisited!==null&&Rl(e,r,o,u,d,f,i),f!=null)switch(l){case Wl.Map:a.$items.set(u,f);break;case Wl.Array:a.$setAt(s,f,e.resyncVisited!==null&&o===H.ADD?H.REPLACE:o);break;case Wl.Set:case Wl.Collection:case Wl.Stream:a.$items.has(s)||(a.$items.set(s,f),typeof a.$refId==`number`&&s>=a.$refId&&(a.$refId=s+1));break;default:console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${a.constructor?.name} — item at index ${s} was not stored.`)}d!==f&&i?.push({ref:r,refId:e.currentRefId,op:o,dynamicIndex:u,value:f,previousValue:d})},Jl=function(e,t,n,r,i){let a=r[Lo]??r,o=t[n.offset++],s;if(o===H.CLEAR){e.removeChildRefs(a,i),a.clear();return}if(o===H.REVERSE){a.items.reverse();return}if(o===H.DELETE_BY_REFID){let o=qs.number(t,n),c=e.root.refs.get(o);if(c===void 0||(e.root.removeRef(o),s=a.findIndex(e=>e===c),s===-1))return;a[Fo](s),i?.push({ref:r,refId:e.currentRefId,op:H.DELETE,dynamicIndex:s,value:void 0,previousValue:c});return}if(o===H.ADD_BY_REFID){let r=qs.number(t,n),i=e.root.refs.get(r);i&&(s=a.findIndex(e=>e===i)),(s===-1||s===void 0)&&(s=a.length)}else s=qs.number(t,n);let c=a[G],l=s,u=a.items[s],d=Gl(e,o,r,s,u,c,t,n,i);e.resyncVisited!==null&&Rl(e,r,o,s,u,d,i),d!=null&&d!==u&&a.$setAt(s,d,e.resyncVisited!==null&&o===H.ADD?H.REPLACE:o),u!==d&&i?.push({ref:r,refId:e.currentRefId,op:o,dynamicIndex:l,value:d,previousValue:u})},Yl=class extends Error{};function Xl(e,t,n,r){if(!(e instanceof t))throw new Yl(`a '${t.name}' was expected, but '${e&&e.constructor.name}' was provided in ${n.constructor.name}#${r}`)}var Zl=(e,t)=>{let n=e.toString(),r=t.toString();return n<r?-1:+(n>r)},Ql={get:(e,t)=>typeof t!=`symbol`&&!isNaN(t)?e.items[t]:Reflect.get(e,t),set:(e,t,n)=>{if(typeof t!=`symbol`&&!isNaN(t)){if(n==null)e.$deleteAt(t);else{let r;if(n[W]){Xl(n,e[G],e,t);let i=e.items[t];e.isMovingItems?(r=e.$wireIndex(Number(t)),i===void 0?n[W].isNew&&e[W].indexedOperation(r,H.ADD):n[W].isNew?e[W].indexedOperation(r,H.MOVE_AND_ADD):(e[W].getChange(r)&H.DELETE)===H.DELETE?e[W].indexedOperation(r,H.DELETE_AND_MOVE):e[W].indexedOperation(r,H.MOVE),n[W].setParent(e,e[W].root,r)):r=e.$changeAt(Number(t),n),i!==void 0&&i[W].root?.remove(i[W])}else r=e.$changeAt(Number(t),n);e.items[t]=n,r!==void 0&&(e.tmpItems[r]=n)}return!0}return Reflect.set(e,t,n)},deleteProperty:(e,t)=>(typeof t==`number`?e.$deleteAt(t):delete e[t],!0),has:(e,t)=>typeof t!=`symbol`&&!isNaN(Number(t))?Reflect.has(e.items,t):Reflect.has(e,t)},$l=class e{[W];[U];[Lo];[G];items=[];tmpItems=[];deletedIndexes=[];replacedItems=void 0;isMovingItems=!1;_needsCompaction=!1;static[jo]=Ll;static[Mo]=Jl;static COLLECTION_KIND=Wl.Array;static[No](e,t,n){if(!n)return!0;let r=e[Lo]??e;return typeof r[G]==`string`||n.isChangeTreeVisible(r.tmpItems[t]?.[W])}static is(e){return Array.isArray(e)||e.array!==void 0}static from(t){return new e(...Array.from(t))}constructor(...e){this[G]=void 0,this[Lo]=this;let t=new Proxy(this,Ql);return Object.defineProperty(this,W,{value:new Dl(t,this),enumerable:!1,writable:!0}),e.length>0&&this.push(...e),t}static initializeForDecoder(){let t=Object.create(e.prototype);t.items=[],t.isMovingItems=!1,t._needsCompaction=!1,t[G]=void 0,t[Lo]=t;let n=new Proxy(t,Ql);return Al(t,n),n}set length(e){e===0?this.clear():e<this.items.length?this.splice(e,this.length-e):console.warn(`ArraySchema: can't set .length to a higher value than its length.`)}get length(){return this.items.length}pauseTracking(){this[W].pause()}resumeTracking(){this[W].resume()}untracked(e){return this[W].untracked(e)}get isTrackingPaused(){return this[W].paused}push(...e){let t=this[Lo],n=t.items,r=t.tmpItems,i=t[W],a=t[G],o=r.length;for(let s=0,c=e.length;s<c;s++,o++){let c=e[s];if(c==null)return;typeof c==`object`&&a&&Xl(c,a,t,s),i.indexedOperation(o,H.ADD),n.push(c),r.push(c),c[W]?.setParent(this,i.root,o)&&(i.flags|=Tl)}return o}pop(){let e=this[Lo],t=e.tmpItems,n=e.deletedIndexes,r=-1;for(let e=t.length-1;e>=0;e--)if(n[e]!==!0){r=e;break}if(r<0)return;if(e.$settleReorder(r))return this.pop();let i=e.$isUnsentAdd(r);return e[W].delete(r),i?e.$cancelAdd(r):n[r]=!0,e.items.pop()}at(e){return e<0&&(e+=this.length),this.items[e]}$wireIndex(e){let t=this.deletedIndexes;if(t.length===0)return e;let n=this.tmpItems,r=0;for(let i=0;i<n.length;i++)if(t[i]!==!0){if(r===e)return i;r++}return n.length+(e-r)}$canReorderInPlace(){if(this.deletedIndexes.length>0)return!1;if(typeof this[G]==`string`)return!0;for(let e of this[W].collDirty.values())if((e&(H.ADD|H.DELETE))!==0)return!1;return!0}$settleReorder(e){if(typeof this[G]==`string`)return!1;let t=this[W];return t.paused||t.operationAt(e)!==H.REPLACE?!1:(this.$restate(this.items.slice()),!0)}$restate(e){let t=this[W].ref;t.clear(),t.push(...e)}$isUnsentAdd(e){let t=this[W];return!(t.flags&576)&&!t.paused&&t.operationAt(e)===H.ADD}$cancelAdd(e,t=!0){let n=this[W],r=this.tmpItems[e];this.tmpItems.splice(e,1),this.deletedIndexes.length>0&&this.deletedIndexes.splice(e,1),n.removeAt(e,1),this.replacedItems?.splice(e,1);let i=r?.[W];i!==void 0&&i.root===void 0&&i.removeParent(this),t&&this.$reindexChildren(e)}$stashReplaced(e){if(typeof this[G]==`string`)return;let t=this[W];if(t.paused||t.isFullStateOnly)return;let n=this.replacedItems??=[];n[e]===void 0&&(n[e]=this.tmpItems[e])}$insertSlots(e,t,n){let r=this[W],i=n.length;r.insertAt(t,i);for(let a=0;a<i;a++)n[a]?.[W]?.setParent(e,r.root,t+a)&&(r.flags|=Tl);t===0?this.tmpItems.unshift(...n):this.tmpItems.splice(t,0,...n),this.deletedIndexes.length>0&&this.deletedIndexes.splice(t,0,...Array(i).fill(!1)),this.replacedItems?.splice(t,0,...Array(i)),this.$reindexChildren(t+i)}$reindexChildren(e,t){if(!this[W].hasFilteredFields||typeof this[G]==`string`)return;let n=this.tmpItems,r=n.length;if(t!==void 0)for(;e<r&&n[e]===t[e];)e++;for(let t=e;t<r;t++)n[t]?.[W]?.setParentIndex(this,t)}$changeAt(e,t){if(t==null){console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");return}if(this.items[e]===t)return;let n=this.$wireIndex(e);if(this.$settleReorder(n))return this.$changeAt(e,t);let r=this[W],i=this.items[e]!==void 0,a=H.ADD;return i&&typeof t!=`object`?a=H.REPLACE:i&&r.operationAt(n)!==H.ADD&&(this.$stashReplaced(n),a=H.DELETE_AND_ADD),r.change(n,a),t[W]?.setParent(this,r.root,n)&&(r.flags|=Tl),n}$deleteAt(e,t){this[W].delete(this.$wireIndex(e),t)}$setAt(e,t,n){n===H.ADD&&this.items[e]!==void 0?this.items.splice(e,0,t):n===H.DELETE_AND_MOVE?(this.items.splice(e,1),this.items[e]=t):(e>this.items.length&&(this._needsCompaction=!0),this.items[e]=t)}clear(){let e=this[Lo];if(e.items.length===0)return;let t=e[W];t.forEachChild((n,r)=>{t.root?.remove(n),n.removeParent(e)}),t.flags&=-1025,t.discard(),t.operation(H.CLEAR),e.items.length=0,e.tmpItems.length=0,e.replacedItems=void 0}[zo](){let e=this[Lo]??this,t=e[W];if(t.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).`);let n=e.items;for(let e=0;e<n.length;e++)n[e]?.[zo]?.();e.items.length=0,e.tmpItems.length=0,e.deletedIndexes.length=0,e.replacedItems=void 0,t.recycle(),e[U]=void 0}concat(...t){return new e(...this.items.concat(...t))}join(e){return this.items.join(e)}reverse(){let e=this[Lo],t=e[W];return t.paused?(e.items.reverse(),this):t.has()||e.deletedIndexes.length>0?(e.$restate(e.items.slice().reverse()),this):(t.operation(H.REVERSE),e.items.reverse(),e.tmpItems.reverse(),e.$reindexChildren(0),this)}shift(){let e=this[Lo],t=e.items;if(t.length===0)return;let n=e[W],r=e.deletedIndexes,i=0;for(;r[i]===!0;)i++;if(e.$settleReorder(i))return this.shift();let a=e.$isUnsentAdd(i);return n.delete(i,H.DELETE),a?e.$cancelAdd(i):r[i]=!0,t.shift()}slice(t,n){let r=new e;return r.push(...this.items.slice(t,n)),r}sort(e=Zl){let t=this[Lo],n=t.items,r=t[W];if(r.paused)return n.sort(e),this;if(!t.$canReorderInPlace())return t.$restate(n.slice().sort(e)),this;let i=t.tmpItems,a=typeof t[G]==`string`&&r.has();n.sort(e);let o=-1;for(let e=0,t=n.length;e<t;e++){let t=i[e]!==n[e];(t||a)&&(t&&o<0&&(o=e),r.change(e,H.REPLACE),i[e]=n[e])}return o>=0&&t.$reindexChildren(o),this}splice(e,t,...n){let r=this[Lo],i=r[W],a=r.items,o=r.tmpItems,s=r.deletedIndexes,c=a.length,l=o.length,u=n.length,d=Math.trunc(e)||0;e=d<0?Math.max(c+d,0):Math.min(d,c),t=arguments.length===1?c-e:Math.min(Math.max(Math.trunc(t)||0,0),c-e);let f=[];for(let e=0;e<l;e++)s[e]!==!0&&f.push(e);let p,m=e+t;for(let i=e;i<m;i++)if(r.$settleReorder(f[i]))return this.splice(e,t,...n);for(let t=e;t<m;t++){let e=f[t],n=r.$isUnsentAdd(e);i.delete(e,H.DELETE),n?(p??=[]).push(e):s[e]=!0}if(u>0){let a=f[e]??l,c=Math.min(u,t);for(let e=0;e<c;e++){let t=a+e,c=p===void 0?-1:p.indexOf(t);c!==-1&&p.splice(c,1);let l=H.ADD;s[t]&&(r.$stashReplaced(t),l=H.DELETE_AND_ADD),i.indexedOperation(t,l),o[t]=n[e],s[t]=!1,n[e][W]?.setParent(this,i.root,t)&&(i.flags|=Tl)}u>c&&r.$insertSlots(this,a+c,n.slice(c))}if(p!==void 0&&p.length>0){for(let e=p.length-1;e>=0;e--)r.$cancelAdd(p[e],!1);r.$reindexChildren(p[0])}return i.root?.enqueueChangeTree(i),a.splice(e,t,...n)}unshift(...e){let t=this[Lo];return t.$insertSlots(this,t.$wireIndex(0),e),t.items.unshift(...e)}indexOf(e,t){return this.items.indexOf(e,t)}lastIndexOf(e,t=this.length-1){return this.items.lastIndexOf(e,t)}every(e,t){return this.items.every(e,t)}some(e,t){return this.items.some(e,t)}forEach(e,t){return this.items.forEach(e,t)}map(e,t){return this.items.map(e,t)}filter(e,t){return this.items.filter(e,t)}reduce(e,t){return this.items.reduce.apply(this.items,arguments)}reduceRight(e,t){return this.items.reduceRight.apply(this.items,arguments)}find(e,t){return this.items.find(e,t)}findIndex(e,t){return this.items.findIndex(e,t)}fill(e,t,n){throw Error(`ArraySchema#fill() not implemented`)}copyWithin(e,t,n){throw Error(`ArraySchema#copyWithin() not implemented`)}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return e}[Symbol.unscopables];entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(e,t){return this.items.includes(e,t)}flatMap(e,t){throw Error(`ArraySchema#flatMap() is not supported.`)}flat(e){throw Error(`ArraySchema#flat() is not supported.`)}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...e){return this.items.findLastIndex.apply(this.items,arguments)}with(t,n){let r=this.items.slice();return t<0&&(t+=this.length),r[t]=n,new e(...r)}toReversed(){return this.items.slice().reverse()}toSorted(e){return this.items.slice().sort(e)}toSpliced(e,t,...n){let r=this.items.slice();return r.splice.apply(r,arguments),r}shuffle(){return this.move(e=>{let t=this.items.length;for(;t!=0;){let e=Math.floor(Math.random()*t);t--,[this[t],this[e]]=[this[e],this[t]]}})}move(e){return this.isMovingItems=!0,e(this),this.isMovingItems=!1,this}[Po](e,t=!1){let n=this[Lo]??this;return t||n.deletedIndexes[e]?n.items[e]:n.tmpItems[e]||n.items[e]}[Fo](e){let t=this[Lo]??this;t.items[e]=void 0,t._needsCompaction=!0}[Ro](){let e=this.tmpItems;this.tmpItems=this.items.slice(),this.replacedItems=void 0,this.deletedIndexes.length>0&&(this.$reindexChildren(0,e),this.deletedIndexes.length=0)}[Bo](){let e=this[Lo]??this;e._needsCompaction&&(e._needsCompaction=!1,e.items=e.items.filter(e=>e!==void 0))}[Io](e,t,n){let r=this[Lo]??this,i=r.items,a=!1;for(let o=0;o<i.length;o++){let s=i[o];e.has(o)?n(s):(a=!0,t(s,o),r[Fo](o))}a&&r[Bo]()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(e=>typeof e.toJSON==`function`?e.toJSON():e)}clone(t){let n;return t?(n=new e,n.push(...this.items)):n=new e(...this.map(e=>e[W]?e.clone():e)),n}};Xs(`array`,{constructor:$l});var eu=class{keyByIndex=new Map;indexByKey=Object.create(null);nextIndex=0;snapshots;indexOf(e){let t=this.indexByKey[e];return t===void 0?void 0:t}assign(e){let t=this.nextIndex++;return this.indexByKey[e]=t,this.keyByIndex.set(t,e),t}snapshot(e,t){(this.snapshots??=new Map).set(e,t)}forgetSnapshot(e){this.snapshots?.delete(e)}snapshotAt(e){return this.snapshots?.get(e)}setIndex(e,t){this.keyByIndex.set(e,t),this.indexByKey[t]=e}keyOf(e){return this.keyByIndex.get(e)}cleanupAfterEncode(){if(this.snapshots!==void 0){for(let[e]of this.snapshots){let t=this.keyByIndex.get(e);t!==void 0&&(delete this.indexByKey[t],this.keyByIndex.delete(e))}this.snapshots.clear()}}reset(){this.indexByKey=Object.create(null),this.keyByIndex.clear(),this.snapshots?.clear(),this.nextIndex=0}},tu=class e{[W];[U];childType;[G];$items=new Map;journal=new eu;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=$s()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=$s()).priority=e}get $indexes(){return this.journal.keyByIndex}get _collectionIndexes(){return this.journal.indexByKey}static[jo]=Nl;static[Mo]=ql;static COLLECTION_KIND=Wl.Map;static[No](e,t,n){if(!n||typeof e[G]==`string`)return!0;let r=e[`~getByIndex`](t)??e.journal.snapshotAt(t);return n.isChangeTreeVisible(r[W])}static is(e){return e.map!==void 0}constructor(t){if(Object.defineProperty(this,W,{value:new Dl(this),enumerable:!1,writable:!0}),this[G]=void 0,t){if(t instanceof Map||t instanceof e)t.forEach((e,t)=>this.set(t,e));else for(let e in t)this.set(e,t[e])}}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.journal=new eu,t[G]=void 0,Al(t),t}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return e}set(e,t){if(t==null)throw Error(`MapSchema#set('${e}', ${t}): trying to set ${t} value on '${e}'.`);typeof t==`object`&&this[G]&&Xl(t,this[G],this,e),e=e.toString();let n=this[W],r=t[W]!==void 0,i=this.journal,a=i.indexOf(e),o;if(a!==void 0){o=H.REPLACE;let n=this.$items.get(e);if(n===t)return;r&&(o=H.DELETE_AND_ADD,n!==void 0&&n[W].root?.remove(n[W])),i.snapshotAt(a)!==void 0&&i.forgetSnapshot(a)}else a=i.assign(e),o=H.ADD;return this.$items.set(e,t),o===H.ADD&&n.isStreamCollection?n.root!==void 0&&tc(this,n.root,a):n.change(a,o),r&&t[W].setParent(this,n.root,a),this}get(e){return this.$items.get(e)}getOrInsert(e,t){return this.$items.has(e)?this.$items.get(e):(this.set(e,t),t)}getOrInsertComputed(e,t){if(this.$items.has(e))return this.$items.get(e);let n=t(e);return this.set(e,n),n}delete(e){if(!this.$items.has(e))return!1;let t=this.journal.indexOf(e),n=this.$items.get(e),r=this[W];if(r.isStreamCollection){let i=r.root,a=!1;return i!==void 0&&(a=nc(this,i,this[U],t)),n?.[W]!==void 0&&i?.remove(n[W]),this.$items.delete(e),a||this.journal.snapshot(t,n),!0}return this.journal.snapshot(t,n),r.delete(t),this.$items.delete(e)}clear(){let e=this[W];e.discard(),e.forEachChild((t,n)=>{e.root?.remove(t)}),this.journal.reset(),this.$items.clear(),e.operation(H.CLEAR)}[zo](){let e=this[W];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).`);this.$items.forEach(e=>e?.[zo]?.()),this.$items.clear(),this.journal.reset(),e.recycle(),this[U]=void 0}has(e){return this.$items.has(e)}forEach(e){this.$items.forEach(e)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[W].pause()}resumeTracking(){this[W].resume()}untracked(e){return this[W].untracked(e)}get isTrackingPaused(){return this[W].paused}setIndex(e,t){this.journal.setIndex(e,t)}getIndex(e){return this.journal.keyOf(e)}[Po](e){let t=this.journal.keyOf(e);return t===void 0?void 0:this.$items.get(t)}[Fo](e){let t=this.journal.keyOf(e);t!==void 0&&(this.$items.delete(t),this.journal.keyByIndex.delete(e))}[Io](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=new Set).add(a),t(i,a))}),r!==null){r.forEach(e=>{this.$items.delete(e),delete this.journal.indexByKey[e]});let e=[];this.journal.keyByIndex.forEach((t,n)=>{r.has(t)&&e.push(n)});for(let t=0;t<e.length;t++)this.journal.keyByIndex.delete(e[t])}}[Ro](){this.journal.cleanupAfterEncode()}_dropView(e){sc(this,e)}_unregister(){}toJSON(){return Object.fromEntries(Array.from(this,([e,t])=>[e,typeof t.toJSON==`function`?t.toJSON():t]))}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach((e,t)=>{e[W]?n.set(t,e.clone()):n.set(t,e)})),n}};Xs(`map`,{constructor:tu});var nu=class e{[W];[U];[G];$items=new Map;deletedItems={};$refId=0;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=$s()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=$s()).priority=e}static[jo]=Pl;static[Mo]=ql;static COLLECTION_KIND=Wl.Collection;static[No](e,t,n){return!n||typeof e[G]==`string`||n.isChangeTreeVisible((e[`~getByIndex`](t)??e.deletedItems[t])[W])}static is(e){return e.collection!==void 0}constructor(e){Object.defineProperty(this,W,{value:new Dl(this),enumerable:!1,writable:!0}),this[G]=void 0,e&&e.forEach(e=>this.add(e))}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.deletedItems={},t.$refId=0,t[G]=void 0,Al(t),t}add(e){let t=this.$refId++,n=this[W];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&tc(this,n.root,t):n.change(t),e[W]!==void 0&&e[W].setParent(this,n.root,t),t}at(e){let t=Array.from(this.$items.keys())[e];return this.$items.get(t)}entries(){return this.$items.entries()}delete(e){let t=this.$items.entries(),n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;let i=this[W];if(i.isStreamCollection){let e=i.root,t=this.$items.get(n);return e!==void 0&&nc(this,e,this[U],n),t?.[W]!==void 0&&e?.remove(t[W]),this.deletedItems[n]=t,this.$items.delete(n)}return this.deletedItems[n]=i.delete(n),this.$items.delete(n)}clear(){let e=this[W];e.discard(),e.forEachChild((t,n)=>{e.root?.remove(t)}),this.$items.clear(),e.operation(H.CLEAR)}[zo](){let e=this[W];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).`);this.$items.forEach(e=>e?.[zo]?.()),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[U]=void 0}has(e){return Array.from(this.$items.values()).some(t=>t===e)}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[W].pause()}resumeTracking(){this[W].resume()}untracked(e){return this[W].untracked(e)}get isTrackingPaused(){return this[W].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[Po](e){return this.$items.get(e)}[Fo](e){this.$items.delete(e)}[Io](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=[]).push(a),t(i,a))}),r!==null)for(let e=0;e<r.length;e++)this[Fo](r[e])}[Ro](){for(let e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){sc(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON==`function`?t.toJSON():t)}),e}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach(e=>{e[W]?n.add(e.clone()):n.add(e)})),n}};Xs(`collection`,{constructor:nu});var ru=class e{[W];[U];[G];$items=new Map;deletedItems={};$refId=0;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=$s()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=$s()).priority=e}static[jo]=Pl;static[Mo]=ql;static COLLECTION_KIND=Wl.Set;static[No](e,t,n){return!n||typeof e[G]==`string`||n.isVisible((e[`~getByIndex`](t)??e.deletedItems[t])[W])}static is(e){return e.set!==void 0}constructor(e){Object.defineProperty(this,W,{value:new Dl(this),enumerable:!1,writable:!0}),this[G]=void 0,e&&e.forEach(e=>this.add(e))}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.deletedItems={},t.$refId=0,t[G]=void 0,Al(t),t}add(e){if(this.has(e))return!1;let t=this.$refId++,n=this[W];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&tc(this,n.root,t):n.change(t,H.ADD),e[W]!==void 0&&e[W].setParent(this,n.root,t),t}entries(){return this.$items.entries()}delete(e){let t=this.$items.entries(),n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;let i=this[W];if(i.isStreamCollection){let e=i.root,t=this.$items.get(n);return e!==void 0&&nc(this,e,this[U],n),t?.[W]!==void 0&&e?.remove(t[W]),this.deletedItems[n]=t,this.$items.delete(n)}return this.deletedItems[n]=i.delete(n),this.$items.delete(n)}clear(){let e=this[W];e.discard(),this.$items.clear(),e.operation(H.CLEAR)}[zo](){let e=this[W];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).`);this.$items.forEach(e=>e?.[zo]?.()),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[U]=void 0}has(e){let t=this.$items.values(),n=!1,r;for(;(r=t.next())&&!r.done;)if(e===r.value){n=!0;break}return n}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[W].pause()}resumeTracking(){this[W].resume()}untracked(e){return this[W].untracked(e)}get isTrackingPaused(){return this[W].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[Po](e){return this.$items.get(e)}[Fo](e){this.$items.delete(e)}[Io](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=[]).push(a),t(i,a))}),r!==null)for(let e=0;e<r.length;e++)this[Fo](r[e])}[Ro](){for(let e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){sc(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON==`function`?t.toJSON():t)}),e}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach(e=>{e[W]?n.add(e.clone()):n.add(e)})),n}};Xs(`set`,{constructor:ru});var iu=class e{[W];[U];[G];$items=new Map;$nextPosition=0;_itemIndex=new Map;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=$s()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=$s()).priority=e}static $isStream=!0;static[jo]=Pl;static[Mo]=ql;static COLLECTION_KIND=Wl.Stream;static[No](e,t,n){if(!n)return!0;let r=e[Po](t);return r!==void 0&&n.isVisible(r[W])}static is(e){return e&&e.stream!==void 0}constructor(){Object.defineProperty(this,W,{value:new Dl(this),enumerable:!1,writable:!0}),this[G]=void 0}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.$nextPosition=0,t._itemIndex=new Map,t[G]=void 0,Al(t),t}add(e){if(this._itemIndex.has(e))return-1;let t=this.$nextPosition++;this.$items.set(t,e),this._itemIndex.set(e,t);let n=this[W].root;return e[W]!==void 0&&e[W].setParent(this,n,t),n!==void 0&&tc(this,n,t),t}remove(e){let t=this._itemIndex.get(e);if(t===void 0)return!1;this._itemIndex.delete(e),this.$items.delete(t);let n=this[W].root;return n!==void 0&&(nc(this,n,this[U],t),e[W]!==void 0&&n.remove(e[W])),!0}has(e){return this._itemIndex.has(e)}clear(){let e=this[W].root;if(e!==void 0){rc(this,e,this[U]);for(let t of this.$items.values())t[W]!==void 0&&e.remove(t[W])}this.$items.clear(),this._itemIndex.clear()}forEach(e){for(let[t,n]of this.$items)e(n,t,this)}values(){return this.$items.values()}entries(){return this.$items.entries()}[Symbol.iterator](){return this.$items.values()}get size(){return this.$items.size}get length(){return this.$items.size}setIndex(e,t){}getIndex(e){return e}[Po](e){return this.$items.get(e)}[Fo](e){let t=this.$items.get(e);t!==void 0&&(this._itemIndex.delete(t),this.$items.delete(e))}[Io](){}[Ro](){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach(t=>{e.push(typeof t?.toJSON==`function`?t.toJSON():t)}),e}clone(t){if(t)return Object.assign(new e,this);let n=new e;return n.maxPerTick=this.maxPerTick,this.forEach(e=>{n.add(typeof e?.clone==`function`?e.clone():e)}),n}_dropView(e){sc(this,e)}_unregister(){}};Xs(`stream`,{constructor:iu});var au=class{[Ho]=!0;_type;_default=void 0;_hasDefault=!1;_view=void 0;_unreliable=!1;_patchOnly=!1;_deprecated=!1;_deprecatedThrows=!0;_fullStateOnly=!1;_stream=!1;_optional=!1;_noSync=!1;_streamPriority=void 0;constructor(e){this._type=e}default(e){return this._default=e,this._hasDefault=!0,this}view(e){return this._view=e??-1,this}unreliable(){return this._unreliable=!0,this}patchOnly(){return this._patchOnly=!0,this}fullStateOnly(){return this._fullStateOnly=!0,this}noSync(){return this._noSync=!0,this}stream(){let e=this._type;if(e&&typeof e==`object`&&e.array!==void 0)throw Error(Qs);return this._stream=!0,this}priority(e){return this._streamPriority=e,this}deprecated(e=!0){return this._deprecated=!0,this._deprecatedThrows=e,this}optional(){return this._optional=!0,this}toDefinition(){return{type:this._type,default:this._default,hasDefault:this._hasDefault,view:this._view,unreliable:this._unreliable,patchOnly:this._patchOnly,deprecated:this._deprecated,deprecatedThrows:this._deprecatedThrows,fullStateOnly:this._fullStateOnly,stream:this._stream,optional:this._optional,noSync:this._noSync,streamPriority:this._streamPriority}}};function ou(e){return e!=null&&e[Ho]===!0}function su(e){return(()=>new au(e))}function cu(e){if(ou(e)){let t=e._type,n=typeof t==`string`?`use the type name instead: t.array("${t}")`:`collections accept a Schema class or a primitive type name ("string", "number", …)`;throw Error(`t.array/map/set/collection(): a t.* builder is not a valid element type — ${n}.`)}return e}var lu=(e=>new au({array:cu(e)})),uu=(e=>new au({map:cu(e)})),du=(e=>new au({set:cu(e)})),fu=(e=>new au({collection:cu(e)})),pu=(e=>{let t=new au({stream:cu(e)});return t._stream=!0,t}),mu=(e=>new au(e));function hu(e){return new au({quantized:uc(e)})}var gu=Object.freeze({string:su(`string`),number:su(`number`),boolean:su(`boolean`),int8:su(`int8`),uint8:su(`uint8`),int16:su(`int16`),uint16:su(`uint16`),int32:su(`int32`),uint32:su(`uint32`),int64:su(`int64`),uint64:su(`uint64`),float32:su(`float32`),float64:su(`float64`),bigint64:su(`bigint64`),biguint64:su(`biguint64`),ref:mu,array:lu,map:uu,set:du,collection:fu,stream:pu,quantized:hu,angle:e=>hu({min:0,max:Math.PI*2,mode:`wrap`,bits:e?.bits??16})}),_u=-1;function vu(e=_u){return function(t,n){let r=Tc.initialize(t.constructor);Tc.setTag(r,n,e)}}function yu(e,t){let n=Tc.initialize(e.constructor);Tc.setUnreliable(n,t)}function bu(e,t){let n=Tc.initialize(e.constructor);Tc.setPatchOnly(n,t)}var xu={number:`number`,int8:`number`,uint8:`number`,int16:`number`,uint16:`number`,int32:`number`,uint32:`number`,int64:`number`,uint64:`number`,float32:`number`,float64:`number`,bigint64:`bigint`,biguint64:`bigint`,string:`string`,boolean:`boolean`};function Su(e,t,n){let r=xu[n],i=n===`string`,a=n===`boolean`;return function(n){let o=this[Vo],s=o[t];if(n!==s){if(n!=null){if(!a&&r!==void 0&&typeof n!==r&&!(i&&n===null)){let t=n&&n.constructor?` (${n.constructor.name})`:``;throw new Yl(`a '${r}' was expected, but '${JSON.stringify(n)}'${t} was provided in ${this.constructor.name}#${e}`)}this.constructor[Ao](this[W],t,H.ADD)}else s!=null&&this[W].delete(t);o[t]=n}}}function Cu(e,t,n){return function(r){let i=this[Vo],a=i[t];if(r!==a){if(r!=null){Xl(r,n,this,e);let i=this[W],o=this.constructor;a!=null&&a[W]?(i.root?.remove(a[W]),o[Ao](i,t,H.DELETE_AND_ADD)):o[Ao](i,t,H.ADD),r[W]?.setParent(this,i.root,t)}else a!=null&&this[W].delete(t);i[t]=r}}}function wu(e,t,n,r){let i=r.constructor===$l,a=r.constructor===tu;return function(e){let r=this[Vo],o=r[t];if(e!==o){if(e!=null){if(i&&!(e instanceof $l)){let t=new $l;t[G]=n,t.push(...e),e=t}else if(a&&!(e instanceof tu)){let t=new tu;if(t[G]=n,e instanceof Map)e.forEach((e,n)=>t.set(n,e));else for(let n in e)t.set(n,e[n]);e=t}else e[G]=n;let r=this[W],s=this.constructor;o!=null&&o[W]?(r.root?.remove(o[W]),s[Ao](r,t,H.DELETE_AND_ADD)):s[Ao](r,t,H.ADD),e[W]?.setParent(this,r.root,t)}else o!=null&&this[W].delete(t);r[t]=e}}}function Tu(e,t,n){return function(r){let i=this[Vo],a=i[t];if(r!=null){if(typeof r!=`number`)throw new Yl(`a 'number' was expected, but '${JSON.stringify(r)}' was provided in ${this.constructor.name}#${e}`);if(r=pc(n,fc(n,r)),r===a)return;this.constructor[Ao](this[W],t,H.ADD)}else{if(r===a)return;a!=null&&this[W].delete(t)}i[t]=r}}function Eu(e,t,n,r){let i;return i=r?wu(e,t,n,r):typeof n==`string`?Su(e,t,n):dc(n)?Tu(e,t,n.quantized):Cu(e,t,n),{get:function(){return this[Vo][t]},set:i,enumerable:!0,configurable:!0}}function Du(e=!0){return function(t,n){let r=Tc.initialize(t.constructor);Tc.setDeprecated(r,n),e&&(r[Uo]??={},r[Uo][n]={get:function(){throw Error(`${n} is deprecated.`)},set:function(e){},enumerable:!1,configurable:!0},Object.defineProperty(t,n,r[Uo][n]))}}function Ou(e){if(e&&typeof e==`object`){if(e.array!==void 0)return()=>new $l;if(e.map!==void 0)return()=>new tu;if(e.set!==void 0)return()=>new ru;if(e.collection!==void 0)return()=>new nu;if(e.stream!==void 0)return()=>new iu}else if(typeof e==`function`&&ju.is(e)&&(!e.prototype.initialize||e.prototype.initialize.length===0))return()=>new e}function ku(e,t,n=ju){if(typeof e!=`object`||!e)throw Error(`schema(): first argument must be a fields object (got ${typeof e}).`);let r={},i={},a={},o={},s=(e,t)=>{typeof t==`function`?o[e]=t:t&&typeof t.clone==`function`?o[e]=()=>t.clone():a[e]=t},c=(e,t)=>{if(t.hasDefault)s(e,t.default);else if(!t.optional){let n=Ou(t.type);n&&(o[e]=n)}},l={},u=[],d=[],f={},p=[],m=[],h={},g=[];for(let n in e){let a=e[n],s=`schema(${t?`'${t}'`:``}): field '${n}'`;if(ou(a)){let e=a.toDefinition();if(e.noSync){if(e.view!==void 0||e.unreliable||e.patchOnly||e.fullStateOnly||e.stream)throw Error(`${s} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);c(n,e);continue}if(e.patchOnly&&e.fullStateOnly)throw Error(`${s} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client — use .noSync() if that is intended.`);let t=yc(e.type,s);if(typeof t==`function`&&!ju.is(t))throw Error(`${s} is a synced ref to non-Schema class '${t.name||`(anonymous)`}' — use .noSync(), or Metadata.setFields().`);r[n]=t,e.view!==void 0&&(l[n]=e.view),e.unreliable&&u.push(n),e.patchOnly&&d.push(n),e.deprecated&&(f[n]=e.deprecatedThrows),e.fullStateOnly&&p.push(n),e.stream&&m.push(n),e.streamPriority!==void 0&&(h[n]=e.streamPriority),e.optional&&g.push(n),c(n,e)}else if(typeof a==`function`)ju.is(a)?(r[n]=a,a.prototype.initialize&&a.prototype.initialize.length!==0||(o[n]=()=>new a)):i[n]=a;else throw Error(`${s} must be a t.* builder, Schema subclass, or method (got ${typeof a}).`)}let _=e=>{for(let t in a)e[t]=a[t];for(let t in o)e[t]=o[t]()},v=()=>{let e={};return _(e),e},y=e=>{let t=Object.keys(r),n={};for(let r in e)t.includes(r)||(n[r]=e[r]);return n},b=typeof i.initialize==`function`,x=i.initialize??n._initialize,S=class extends n{constructor(...e){let t=e[0];t===void 0?(super(),_(this)):super(Object.assign(v(),b?y(t):t)),x&&new.target===S&&x.apply(this,e)}};t&&Object.defineProperty(S,"name",{value:t}),Tc.setFields(S,r),S._getDefaultValues=v,S._initialize=x,Object.assign(S.prototype,i);for(let e in l)vu(l[e])(S.prototype,e);for(let e of u)yu(S.prototype,e);for(let e of d)bu(S.prototype,e);for(let e in f)Du(f[e])(S.prototype,e);if(p.length>0||m.length>0){let e=S[Symbol.metadata];for(let t of p)Tc.setFullStateOnly(e,t);for(let t of m)Tc.setStream(e,t);for(let t in h)Tc.setStreamPriority(e,t,h[t])}if(g.length>0){let e=S[Symbol.metadata];for(let t of g)e[e[t]].optional=!0}return S.extend=(e,t)=>ku(e,t,S),S}function Au(e){return Array(e).fill(0).map((t,n)=>n===e-1?`└─ `:`   `).join(``)}var ju=class e{static[jo]=Ml;static[Mo]=Kl;[U];[Vo];static initialize(e){Object.defineProperty(e,W,{value:new Dl(e),enumerable:!1,writable:!0}),e[Vo]=[]}static initializeForDecoder(){let e=Object.create(this.prototype);return Al(e),e[Vo]=[],e}static reset(e){let t=e?.[W];if(t===void 0||typeof t.recycle!=`function`)throw Error(`@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.`);if(t.extraParents!==void 0)throw Error(`@colyseus/schema: cannot reset a shared instance (${e.constructor.name}) with multiple parents.`);e[zo]()}[zo](){let e=this.constructor[Symbol.metadata]?.[qo]??[],t=this[Vo];for(let n=0;n<e.length;n++)t[e[n]]?.[zo]?.();this[W].recycle(),this[U]=void 0}static is(e){let t=e[Symbol.metadata];return typeof t==`object`&&!!t}static isSchema(e){return typeof e?.assign==`function`}static[Ao](e,t,n=H.ADD){e.change(t,n)}static[No](e,t,n){let r=e.constructor[Symbol.metadata][t]?.tag;return n===void 0?r===void 0:r===void 0?!0:r===_u?n.isChangeTreeVisible(e[W]):n.hasTagOnTree(e[W],r)}constructor(t){e.initialize(this),t&&e.assignProps(this,t)}assign(t){return e.assignProps(this,t),this}static assignProps(e,t){let n=e.constructor[Symbol.metadata];if(n&&n[`~__numFields`]!==void 0)for(let r=0;r<=n[Ko];r++){let i=n[r];if(!i)continue;let a=t[i.name];a!==void 0&&(e[i.name]=a)}let r=Object.keys(t);for(let i=0;i<r.length;i++){let a=r[i];n&&n[a]!==void 0||(e[a]=t[a])}}restore(t){let n=this.constructor[Symbol.metadata];for(let r in n){let i=n[r],a=i.name,o=i.type,s=t[a];if(s!=null){if(typeof o==`string`)this[a]=s;else if(e.is(o)){let e=new o;e.restore(s),this[a]=e}else if(typeof o==`object`){let t=Object.keys(o)[0],n=o[t];if(t===`map`){let t=this[a];for(let r in s)if(e.is(n)){let e=new n;e.restore(s[r]),t.set(r,e)}else t.set(r,s[r])}else if(t===`array`){let t=this[a];for(let r=0;r<s.length;r++)if(e.is(n)){let e=new n;e.restore(s[r]),t.push(e)}else t.push(s[r])}}}}return this}setDirty(e,t){let n=this.constructor[Symbol.metadata];this[W].change(n[n[e]].index,t)}pauseTracking(){this[W].pause()}resumeTracking(){this[W].resume()}untracked(e){return this[W].untracked(e)}get isTrackingPaused(){return this[W].paused}clone(){let t=Object.create(this.constructor.prototype);e.initialize(t);let n=this.constructor[Symbol.metadata];for(let e in n){let r=n[e].name;t[r]=typeof this[r]==`object`&&typeof this[r]?.clone==`function`?this[r].clone():this[r]}return t}toJSON(){let e={},t=this.constructor[Symbol.metadata];for(let n in t){let r=t[n],i=r.name;!r.deprecated&&this[i]!==null&&this[i]!==void 0&&(e[i]=typeof this[i].toJSON==`function`?this[i].toJSON():this[i])}return e}discardAllChanges(){this[W].discardAll()}[Po](e){let t=this.constructor[Symbol.metadata];return this[t[e].name]}[Fo](e){let t=this.constructor[Symbol.metadata];this[t[e].name]=void 0}static debugRefIds(e,t=!1,n=0,r,i=``){let a=t?` - ${JSON.stringify(e.toJSON())}`:``,o=e[W],s=e[U],c=r?r.root.refCount[s]:o.refCount,l=c>1?` [×${c}]`:``,u=`${Au(n)}${i}${e.constructor.name} (refId: ${s})${l}${a}\n`;return o.forEachChild((i,a)=>{let o=a;typeof a==`number`&&e.$indexes&&(o=e.$indexes.get(a)??a);let s=e.forEach!==void 0&&o!==void 0?`["${o}"]: `:``;u+=this.debugRefIds(i.ref,t,n+1,r,s)}),u}static debugRefIdEncodingOrder(e,t=`allChanges`){let n=[],r=e[W];if(t===`changes`){let e=r.root.changes?.next;for(;e;)e.changeTree&&n.push(e.changeTree.ref[U]),e=e.next;return n}let i=t===`allFilteredChanges`,a=new Set,o=e=>{a.has(e)||(a.add(e),e.isFiltered===i&&n.push(e.ref[U]),e.forEachChild((e,t)=>o(e)))};return o(r),n}static debugRefIdsFromDecoder(e){return this.debugRefIds(e.state,!1,0,e)}static debugChanges(e,t=!1){let n=e[W],r=t?`allChanges`:`changes`,i=`${e.constructor.name} (${e[U]}) -> .${r}:\n`;return t?n.forEachLive(e=>{i+=`- [${e}]: ADD (${JSON.stringify(n.getValue(Number(e),!0))})\n`}):n.forEach((e,t)=>{e<0||!t||(i+=`- [${e}]: ${H[t]} (${JSON.stringify(n.getValue(Number(e),!1))})\n`)}),i}};Oo(ju);var Mu={value:0,enumerable:!1,writable:!0},Nu=class{types;nextUniqueId=0;changeTrees={};get refCount(){let e={};for(let t in this.changeTrees)e[t]=this.changeTrees[t].refCount;return e}changes=ml();unreliableChanges=ml();pendingFilterRefresh=[];enqueueFilterRefresh(e){this.types.hasFilters&&(e.flags&Cl||(e.flags|=Cl,this.pendingFilterRefresh.push(e)))}_nodePool=[];_nextViewId=0;_freeViewIds=[];acquireViewId(){return this._freeViewIds.length>0?this._freeViewIds.pop():this._nextViewId++}releaseViewId(e){this._freeViewIds.push(e)}activeViews=new Map;streamTrees=new Set;registerView(e){this.activeViews.set(e.id,new WeakRef(e))}unregisterView(e){this.activeViews.delete(e.id);let t=e.id;for(let e of this.streamTrees)e._dropView(t)}forEachActiveView(e){for(let[t,n]of this.activeViews){let r=n.deref();if(r===void 0){this.activeViews.delete(t);for(let e of this.streamTrees)e._dropView(t)}else e(r)}}registerStream(e){this.streamTrees.add(e)}unregisterStream(e){this.streamTrees.delete(e)}constructor(e,t=0){this.types=e,this.nextUniqueId=t}add(e){let t=e.ref;t[U]===void 0&&(Mu.value=this.nextUniqueId++,Object.defineProperty(t,U,Mu));let n=t[U],r=this.changeTrees[n]===void 0;r&&(this.changeTrees[n]=e),e.needsRestage&&(e.needsRestage=!1,e.forEachLiveWithCtx(e,Vc));let i=r?0:e.refCount;return e.refCount=i+1,i>0&&this.enqueueFilterRefresh(e),r}remove(e){let t=e.refCount-1;if(t<=0){if(e.root=void 0,delete this.changeTrees[e.ref[U]],e.isStreamCollection){let t=e.ref;t._unregister?.(),this.unregisterStream(t)}this.removeFromQueue(e),this.removeFromUnreliableQueue(e),e.refCount=0,e.needsRestage=!0,e.forEachChild((t,n)=>{t.removeParent(e.ref)&&(t.parentRef===void 0||t.refCount>0?this.remove(t):this.moveNextToParent(t))})}else e.refCount=t,this.enqueueFilterRefresh(e),this.recursivelyMoveNextToParent(e);return t}recursivelyMoveNextToParent(e){this.moveNextToParent(e),e.forEachChild((e,t)=>this.recursivelyMoveNextToParent(e))}moveNextToParent(e){e.changesNode&&this._moveNextToParentInList(this.changes,e,e.changesNode,`changesNode`),e.unreliableChangesNode&&this._moveNextToParentInList(this.unreliableChanges,e,e.unreliableChangesNode,`unreliableChangesNode`)}_moveNextToParentInList(e,t,n,r){let i=t.parent;if(!i||!i[W])return;let a=i[W][r];a&&a!==n&&(n.position>a.position||(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,n.prev=e.tail,n.next=void 0,e.tail.next=n,e.tail=n,n.position=e.nextPosition++))}enqueueChangeTree(e,t=e.changesNode){t||(e.changesNode=this._appendToList(this.changes,e))}enqueueUnreliable(e,t=e.unreliableChangesNode){t||(e.unreliableChangesNode=this._appendToList(this.unreliableChanges,e))}_appendToList(e,t){let n=this._nodePool,r;return n.length>0?(r=n.pop(),r.changeTree=t,r.next=void 0,r.prev=void 0):r={changeTree:t,next:void 0,prev:void 0,position:0},e.next?(r.prev=e.tail,e.tail.next=r,e.tail=r):(e.nextPosition=0,e.next=r,e.tail=r),r.position=e.nextPosition++,r}releaseNode(e){e.changeTree=void 0,e.prev=void 0,e.next=void 0,this._nodePool.push(e)}removeFromQueue(e){return this._removeNode(this.changes,e,e.changesNode,`changesNode`)}removeFromUnreliableQueue(e){return this._removeNode(this.unreliableChanges,e,e.unreliableChangesNode,`unreliableChangesNode`)}_removeNode(e,t,n,r){return!n||n.changeTree!==t?!1:(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,t[r]=void 0,this.releaseNode(n),!0)}};function Pu(e,t){if(t===-1||t>=e.length)return!1;let n=e.length-1;for(let r=t;r<n;r++)e[r]=e[r+1];return e.length=n,!0}function Fu(e,t,n){let r=~n,i=e.changeTrees;for(let e in i){let n=i[e],a=n.visibleViews;a!==void 0&&t<a.length&&(a[t]&=r);let o=n.subscribedViews;o!==void 0&&t<o.length&&(o[t]&=r);let s=n.tagViews;s!==void 0&&s.forEach(e=>{t<e.length&&(e[t]&=r)})}}new FinalizationRegistry(({root:e,id:t,slot:n,bit:r})=>{Fu(e,n,r),e.activeViews.delete(t);for(let n of e.streamTrees)n._dropView(t);e.releaseViewId(t)});var Iu=-1;function Lu(e){e.structSwitchEmitted||=(e.shouldEmitSwitch&&(e.buffer[e.it.offset++]=255,K.number(e.buffer,e.ref[U],e.it)),!0)}function Ru(e,t){Vu(e,t,H.ADD)}function zu(e,t){if(t._fullSyncGen!==e.gen){if(t._fullSyncGen=e.gen,!e.hasView||e.view.isChangeTreeVisible(t)){let n=t.encDescriptor;e.changeTree=t,e.ref=t.ref,e.encoder=n.encoder,e.filter=n.filter,e.metadata=n.metadata,e.treeIsFiltered=t.isFiltered,e.isSchema=n.isSchema,e.filterBitmask=n.filterBitmask,e.tags=n.tags,e.structSwitchEmitted=!1,e.shouldEmitSwitch=e.hasView||e.it.offset>e.initialOffset||t!==e.rootChangeTree,t.isArray&&t.collDirty.size>0&&(t.flags|=wl),Wc(t,e,Ru)}sl(t,e,Bu)}}function Bu(e,t,n){zu(e,t)}function Vu(e,t,n){if(t<0){if(e.treeIsFiltered!==e.emitFiltered)return;Lu(e),e.buffer[e.it.offset++]=Math.abs(t)&255;return}if((e.isSchema?e.treeIsFiltered||(t<32?!!(e.filterBitmask&1<<t):e.tags[t]!==void 0):e.treeIsFiltered)!==e.emitFiltered)return;let r=e.isEncodeAll?H.ADD:n;r!==void 0&&(e.filter===void 0||e.filter(e.ref,t,e.view))&&(Lu(e),e.encoder(e.self,e.buffer,e.changeTree,t,r,e.it,e.isEncodeAll,e.hasView,e.metadata))}function Hu(e,t){let n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n}var Uu=class e{static BUFFER_SIZE=16384;sharedBuffer=new Uint8Array(e.BUFFER_SIZE);context;state;root;constructor(e,t){this.context=gc.cache(e.constructor),this.root=t??new Nu(this.context),this.setState(e)}setState(e){this.state=e,this.state[W].setRoot(this.root)}_encodeCtx={self:void 0,buffer:void 0,it:void 0,changeTree:void 0,ref:void 0,encoder:void 0,filter:void 0,metadata:void 0,view:void 0,isEncodeAll:!1,hasView:!1,treeIsFiltered:!1,isSchema:!1,emitFiltered:!1,filterBitmask:0,tags:void 0,structSwitchEmitted:!1,isRootTree:!1,shouldEmitSwitch:!1,gen:0,initialOffset:0,rootChangeTree:void 0};_fullSyncGen=0;encode(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!1)}encodeUnreliable(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!0)}_encodeChannel(e,t,n,r,i){this.root.pendingFilterRefresh.length>0&&qc(this.root);let a=t!==void 0,o=this.state[W],s=this._encodeCtx;s.self=this,s.buffer=n,s.it=e,s.view=t,s.isEncodeAll=!1,s.hasView=a,s.emitFiltered=a;let c=i?this.root.unreliableChanges:this.root.changes;for(;c=c.next;){let n=c.changeTree;if(a&&!t.isChangeTreeVisible(n))continue;let l=i?n.unreliableRecorder:n;if(!l||!l.has())continue;let u=n.encDescriptor;s.changeTree=n,s.ref=n.ref,s.encoder=u.encoder,s.filter=u.filter,s.metadata=u.metadata,s.treeIsFiltered=n.isFiltered,s.isSchema=u.isSchema,s.filterBitmask=u.filterBitmask,s.tags=u.tags,s.structSwitchEmitted=!1,s.isRootTree=n===o,s.shouldEmitSwitch=a||e.offset>r||!s.isRootTree,l.forEachWithCtx(s,Vu)}return!i&&!a&&this._isStreamBroadcastMode&&this._emitStreamBroadcast(n,e),e.offset>n.byteLength?(n=this._resizeBuffer(n,e.offset),e.offset=r,this._encodeChannel(e,t,n,r,i)):n.subarray(0,e.offset)}encodeFullSync(e,t,n,r,i=e.offset){this.root.pendingFilterRefresh.length>0&&qc(this.root);let a=r!==void 0,o=this.state[W],s=this._encodeCtx;return s.self=this,s.buffer=t,s.it=e,s.view=r,s.isEncodeAll=!0,s.hasView=a,s.emitFiltered=n,s.gen=++this._fullSyncGen,s.initialOffset=i,s.rootChangeTree=o,zu(s,o),e.offset>t.byteLength?(t=this._resizeBuffer(t,e.offset),e.offset=i,this.encodeFullSync(e,t,n,r,i)):t.subarray(0,e.offset)}_resizeBuffer(t,n){let r=Math.ceil(n/e.BUFFER_SIZE)*e.BUFFER_SIZE;console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(r/1024)} * 1024; // ${Math.round(r/1024)} KB
`);let i=new Uint8Array(r);return i.set(t),t===this.sharedBuffer&&(this.sharedBuffer=i),i}encodeAll(e={offset:0},t=this.sharedBuffer){return this.encodeFullSync(e,t,!1)}encodeAllView(e,t,n,r=this.sharedBuffer){let i=n.offset;return r=this.encodeFullSync(n,r,!0,e,i),Hu(r.subarray(0,t),r.subarray(i,n.offset))}ensureCapacity(t,n){if(n+e.BUFFER_SIZE<=t.byteLength)return t;let r=Math.ceil((n+e.BUFFER_SIZE)/e.BUFFER_SIZE)*e.BUFFER_SIZE,i=new Uint8Array(r);return i.set(t.subarray(0,n)),t===this.sharedBuffer&&(this.sharedBuffer=i),i}encodeView(e,t,n,r=this.sharedBuffer){let i=n.offset;this._emitStreamPriority(e);for(let t of e.changes.keys()){let i=e.changes.get(t),a=this.root.changeTrees[t];if(a===void 0){e.changes.delete(t);continue}if(i.size===0)continue;let o=a.encDescriptor,s=o.encoder,c=o.metadata,l=a.ref,u=a.refTarget;r=this.ensureCapacity(r,n.offset),r[n.offset++]=255,K.number(r,l[U],n);for(let[t,o]of i){let i;if(t===Iu){let e=u.tmpItems,t=u.deletedIndexes;for(let i=0;i<e.length;i++)e[i]!==void 0&&t[i]!==!0&&s(this,r,a,i,H.ADD,n,!1,!0,c);continue}if(typeof t==`number`)i=t;else{let n=t.indexInParent(l);if(n===void 0)continue;if(i=n,o===H.ADD&&a.getChange(i)===H.DELETE){e.changes.delete(t.ref[U]);continue}}let d=u[`~getByIndex`](i)!==void 0&&o||H.DELETE;s(this,r,a,i,d,n,!1,!0,c)}}return e.changes.clear(),r=this.encode(n,e,r),Hu(r.subarray(0,t),r.subarray(i,n.offset))}encodeUnreliableView(e,t,n,r=this.sharedBuffer){let i=n.offset;return r=this.encodeUnreliable(n,e,r,i),Hu(r.subarray(0,t),r.subarray(i,n.offset))}_emitStreamBroadcast(e,t){let n=this.root.streamTrees;for(let r of n){let n=r,i=n[W],a=n[U];if(a===void 0)continue;let o=n._stream,s=o.broadcastDeletes,c=o.broadcastPending,l=o.sentBroadcast,u=s.size>0,d=c.size>0,f=i.encDescriptor,p=f.encoder,m=f.metadata;if(u||d){if(e[t.offset++]=255,K.number(e,a,t),u){for(let n of s)p(this,e,i,n,H.DELETE,t,!1,!1,m);s.clear()}let r=o.maxPerTick,d=[],f=0,h=[];for(let a of c){if(f>=r)break;let o=n[Po](a);o===void 0?h.push(a):(p(this,e,i,a,H.ADD,t,!1,!1,m),l.add(a),d.push(o),h.push(a),f++)}for(let e of h)c.delete(e);for(let n of d){let r=n[W];if(r===void 0)continue;let i=n[U];if(i===void 0)continue;e[t.offset++]=255,K.number(e,i,t);let a=r.encDescriptor,o=a.encoder,s=a.metadata;r.forEachLive(n=>{Tc.hasUnreliableAtIndex(s,n)||o(this,e,r,n,H.ADD,t,!1,!1,s)})}}for(let r of l){let i=n[Po](r);if(i===void 0)continue;let a=i[W];if(a===void 0||!a.has())continue;let o=i[U];if(o===void 0)continue;e[t.offset++]=255,K.number(e,o,t);let s=a.encDescriptor,c=s.encoder,l=s.metadata;a.forEach((n,r)=>{n<0||Tc.hasUnreliableAtIndex(l,n)||c(this,e,a,n,r,t,!1,!1,l)})}}}_emitStreamPriority(e){let t=this.root.streamTrees;if(t.size===0)return;let n=e.id;for(let r of t){let t=r,i=t._stream,a=i.pendingByView.get(n);if(a===void 0||a.size===0)continue;let o=i.priorityByView?.get(n),s=o!==void 0,c=i.priority,l=i.maxPerTick,u=[],d=[];if(s||c!==void 0){let n=[],r=[],i=0;for(let u of a){let a=t[Po](u);if(a===void 0){d.push(u);continue}let f=s?o(a):c(e,a);if(i<l){let e=i++;for(;e>0&&r[e-1]<f;)r[e]=r[e-1],n[e]=n[e-1],e--;r[e]=f,n[e]=u}else if(f>r[l-1]){let e=l-1;for(;e>0&&r[e-1]<f;)r[e]=r[e-1],n[e]=n[e-1],e--;r[e]=f,n[e]=u}}for(let e=0;e<i;e++)u.push(n[e])}else for(let e of a){if(u.length>=l)break;u.push(e)}for(let e of d)a.delete(e);let f=u.length,p=i.sentByView.get(n);p===void 0&&(p=new Set,i.sentByView.set(n,p));for(let n=0;n<f;n++){let r=u[n],i=t[Po](r);if(i===void 0){a.delete(r);continue}e._addImmediate(i);let o=i[W];if(o!==void 0){let t=i[U],n=e.changes.get(t);n===void 0&&(n=new Map,e.changes.set(t,n));let r=o.metadata;o.forEachLive(e=>{Tc.hasUnreliableAtIndex(r,e)||n.set(e,H.ADD)})}a.delete(r),p.add(r)}}}discardChanges(){let e=this.root.changes,t=e.next,n=this.root;for(;t;){let e=t.next;t.changeTree.endEncode(),n.releaseNode(t),t=e}e.next=void 0,e.tail=void 0}discardUnreliableChanges(){let e=this.root.unreliableChanges,t=e.next,n=this.root;for(;t;){let e=t.next;t.changeTree.endEncodeUnreliable(),n.releaseNode(t),t=e}e.next=void 0,e.tail=void 0}tryEncodeTypeId(e,t,n,r){let i=this.context.getTypeId(t),a=this.context.getTypeId(n);a===void 0?console.warn(`@colyseus/schema WARNING: Class "${n.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`):i!==a&&(e[r.offset++]=213,K.number(e,a,r))}get hasChanges(){return this.root.changes.next!==void 0||this._hasStreamBacklog()}get _isStreamBroadcastMode(){return this.root.activeViews.size===0&&this.root.streamTrees.size>0}_hasStreamBacklog(){let e=this.root;if(e.streamTrees.size===0)return!1;let t=e.activeViews.size===0;for(let n of e.streamTrees)if(t?ac(n):ic(n,e))return!0;return!1}get hasUnreliableChanges(){return this.root.unreliableChanges.next!==void 0}},Wu=class extends Error{constructor(e){super(e),this.name=`DecodingWarning`}},Gu={value:0,enumerable:!1,writable:!0},Ku=class{refs=new Map;refCount={};deletedRefs=new Set;callbacks={};nextUniqueId=0;getNextUniqueId(){return this.nextUniqueId++}addRef(e,t,n=!0){this.refs.set(e,t),t[U]===void 0?(Gu.value=e,Object.defineProperty(t,U,Gu)):t[U]!==e&&(t[U]=e),n&&(this.refCount[e]=(this.refCount[e]||0)+1),this.deletedRefs.has(e)&&this.deletedRefs.delete(e)}removeRef(e){let t=this.refCount[e];if(t===void 0)try{throw new Wu(`trying to remove refId that doesn't exist: `+e)}catch(e){console.warn(e)}else if(t===0)try{let t=this.refs.get(e);throw new Wu(`trying to remove refId '${e}' with 0 refCount (${t.constructor.name}: ${JSON.stringify(t)})`)}catch(e){console.warn(e)}else(this.refCount[e]=t-1)<=0&&this.deletedRefs.add(e)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(e=>{if(this.refCount[e]>0)return;let t=this.refs.get(e),n=t.constructor[Symbol.metadata];if(n!=null)for(let e in n){let r=t[n[e].name];if(typeof r==`object`&&r){let e=r[U];e!==void 0&&!this.deletedRefs.has(e)&&this.removeRef(e)}}else typeof t[G]==`function`&&Array.from(t.values()).forEach(e=>{let t=e[U];t!==void 0&&!this.deletedRefs.has(t)&&this.removeRef(t)});this.refs.delete(e),delete this.refCount[e],delete this.callbacks[e]}),this.deletedRefs.clear()}addCallback(e,t,n){if(e===void 0){let e=typeof t==`number`?H[t]:t;throw Error(`Can't addCallback on '${e}' (refId is undefined)`)}return this.callbacks[e]||(this.callbacks[e]={}),this.callbacks[e][t]||(this.callbacks[e][t]=[]),this.callbacks[e][t].push(n),()=>this.removeCallback(e,t,n)}removeCallback(e,t,n){let r=this.callbacks?.[e]?.[t]?.indexOf(n);r!==void 0&&r!==-1&&Pu(this.callbacks[e][t],r)}},qu=class{context;state;root;currentRefId=0;triggerChanges;resyncVisited=null;resyncDamaged=!1;constructor(e,t){this.setState(e),this.context=t||new gc(e.constructor)}setState(e){this.state=e,this.root=new Ku,this.root.addRef(0,e)}decode(e,t={offset:0},n=this.state){let r=this.triggerChanges===void 0?null:[],i=this.root,a=e.byteLength,o=n.constructor[Mo];for(this.currentRefId=0;t.offset<a;)if(e[t.offset]==Eo){t.offset++,n[Bo]?.();let r=qs.number(e,t),s=i.refs.get(r);s?(n=s,o=n.constructor[Mo],this.currentRefId=r):(console.error(`"refId" not found: ${r}`,{previousRef:n,previousRefId:this.currentRefId}),console.warn(`Please report this issue to the developers.`),this.skipCurrentStructure(e,t,a))}else o(this,e,t,n,r)===Ul&&(console.warn(`@colyseus/schema: definition mismatch`),this.skipCurrentStructure(e,t,a));return n[Bo]?.(),this.resyncVisited!==null&&Bl(this,r),r!==null&&this.triggerChanges?.(r),i.garbageCollectDeletedRefs(),r}decodeResync(e,t={offset:0}){this.resyncVisited=new Map,this.resyncDamaged=!1;try{return this.decode(e,t)}finally{this.resyncVisited=null}}skipCurrentStructure(e,t,n){this.resyncVisited!==null&&(this.resyncDamaged=!0);let r={offset:t.offset};for(;t.offset<n&&!(e[t.offset]===Eo&&(r.offset=t.offset+1,this.root.refs.has(qs.number(e,r))));)t.offset++}getInstanceType(e,t,n){let r;if(e[t.offset]===Do){t.offset++;let n=qs.number(e,t);r=this.context.get(n)}return r||n}createInstanceOfType(e){return e.initializeForDecoder()}removeChildRefs(e,t){let n=typeof e[G]!=`string`,r=e[U];e.forEach((i,a)=>{t?.push({ref:e,refId:r,op:H.DELETE,field:a,value:void 0,previousValue:i}),n&&this.root.removeRef(i[U])})}},Ju=ku({min:gu.float64(),max:gu.float64(),bits:gu.uint8(),mode:gu.uint8()},`QuantizedDescriptor`),Yu=ku({name:gu.string(),type:gu.string(),referencedType:gu.number(),childPrimitive:gu.string(),quantized:gu.ref(Ju).optional()},`ReflectionField`),Xu=ku({id:gu.number(),extendsId:gu.number(),fields:gu.array(Yu)},`ReflectionType`),Zu=ku({types:gu.array(Xu),rootType:gu.number()},`Reflection`);Zu.encode=function(e,t={offset:0}){let n=e.context,r=new Zu,i=new Uu(r),a=n.schemas.get(e.state.constructor);a>0&&(r.rootType=a);let o=new Set,s={},c=e=>{if(e.extendsId===void 0||o.has(e.extendsId)){o.add(e.id),r.types.push(e);let t=s[e.id];t!==void 0&&(delete s[e.id],t.forEach(e=>c(e)))}else s[e.extendsId]===void 0&&(s[e.extendsId]=[]),s[e.extendsId].push(e)};n.schemas.forEach((e,t)=>{let r=new Xu;r.id=Number(e);let i=Object.getPrototypeOf(t);i!==ju&&(r.extendsId=n.schemas.get(i));let a=t[Symbol.metadata];if(a!==i[Symbol.metadata]){let e=a[`~__numFields`]??-1;for(let t=0;t<=e;t++){let e=a[t];if(e===void 0)continue;let i=e.name;if(!Object.prototype.hasOwnProperty.call(a,i))continue;let o=new Yu;o.name=i;let s;if(typeof e.type==`string`)s=e.type;else if(dc(e.type)){let t=e.type.quantized;s=`quantized`;let n=new Ju;n.min=t.min,n.max=t.max,n.bits=t.bits,n.mode=+!!t.wrap,o.quantized=n}else{let t;ju.is(e.type)?(s=`ref`,t=e.type):(s=Object.keys(e.type)[0],typeof e.type[s]==`string`?o.childPrimitive=e.type[s]:t=e.type[s]),o.referencedType=t?n.getTypeId(t):-1}o.type=s,r.fields.push(o)}}c(r)});for(let e in s)s[e].forEach(e=>r.types.push(e));return i.encodeAll(t).slice(0,t.offset)},Zu.decode=function(e,t){let n=new Zu;new qu(n).decode(e,t);let r=new gc;n.types.forEach(e=>{let t=r.get(e.extendsId)??ju,n=class extends t{};gc.register(n),r.add(n,e.id)},{});let i=(e,t,n)=>{t.fields.forEach((t,i)=>{let a=n+i;if(t.quantized!==void 0){let n=t.quantized;Tc.addField(e,a,t.name,{quantized:uc({min:n.min,max:n.max,bits:n.bits,mode:n.mode===1?`wrap`:`clamp`})})}else if(t.referencedType!==void 0){let n=t.type,i=r.get(t.referencedType)??t.childPrimitive;n===`ref`?Tc.addField(e,a,t.name,i):Tc.addField(e,a,t.name,{[n]:i})}else Tc.addField(e,a,t.name,t.type)})};return n.types.forEach(e=>{let t=r.get(e.id),a=Tc.initialize(t),o=[],s=e;do o.push(s),s=n.types.find(e=>e.id===s.extendsId);while(s);let c=0;o.reverse().forEach(e=>{i(a,e,c),c+=e.fields.length})}),new qu(new(r.get(n.rootType||0)),r)},Zu.makeEncodable=function(e){let t=e[Symbol.metadata];if(!t)return e;let n=t[Ko];if(n===void 0)return e;for(let r=0;r<=n;r++){let n=t[r];n&&Tc.defineField(e,t,r,n.name,n.type)}return Object.prototype.hasOwnProperty.call(e,Wo)&&delete e[Wo],e},Xs(`map`,{constructor:tu}),Xs(`array`,{constructor:$l}),Xs(`set`,{constructor:ru}),Xs(`collection`,{constructor:nu});var Qu=256,$u=5,ed=class e{instance;mode;historySize;_desc;_numFields;_slots;_slotLens;_slotHead=0;_slotCount=0;_outBuffer;_seq=0;_encoder;constructor(e,t={}){this.instance=e,this.mode=t.mode??`reliable`,this.historySize=this.mode===`unreliable`?Math.max(1,t.historySize??3):1,this._desc=Mc(e);let n=this._desc.metadata?.[Ko];if(n===void 0)throw Error(`InputEncoder: '${e.constructor.name}' has no fields`);this._numFields=n;for(let t=0;t<=n;t++)if(this._desc.names[t]!==void 0&&this._desc.encoders[t]===void 0)throw Error(`InputEncoder: non-primitive field '${this._desc.names[t]}' on '${e.constructor.name}' is not supported. Use Encoder for state containing refs/collections.`);if(this.mode===`unreliable`){this._slots=Array(this.historySize),this._slotLens=Array(this.historySize).fill(0);for(let e=0;e<this.historySize;e++)this._slots[e]=new Uint8Array(Qu);this._outBuffer=new Uint8Array(261*this.historySize)}this._encoder=new Uu(e)}get seq(){return this._seq}encode(){let e=this._produceDelta();return this.mode===`reliable`?e:this._pushAndEmitRing(e)}reset(){this._slotHead=0,this._slotCount=0,this._encoder.discardChanges();let e=this.instance[W],t=this.instance[Vo];for(let n=0;n<=this._numFields;n++)t[n]!==void 0&&t[n]!==null&&e.markDirty(n)}copyInto(e){let t=this.instance[Vo],n=e[Vo];for(let e=0;e<=this._numFields;e++)n[e]=t[e]}_produceDelta(){let e=this._encoder.encode();return this._encoder.discardChanges(),e}_pushAndEmitRing(t){this._seq++;let n=this._slots[this._slotHead];return t.length>n.byteLength&&(n=this._slots[this._slotHead]=e._grow(n,t.length,`unreliable ring slot`)),n.set(t),this._slotLens[this._slotHead]=t.length,this._slotHead=(this._slotHead+1)%this.historySize,this._slotCount<this.historySize&&this._slotCount++,this._emitRing()}_emitRing(){let t=this._seq-this._slotCount+1,n=$u;for(let e=0;e<this._slotCount;e++)n+=this._slotLens[e]+$u;let r=this._outBuffer;n>r.byteLength&&(r=this._outBuffer=e._grow(r,n,`unreliable output packet`));let i={offset:0};K.number(r,t,i);let a=(this._slotHead-this._slotCount+this.historySize)%this.historySize;for(let e=0;e<this._slotCount;e++){let t=(a+e)%this.historySize,n=this._slotLens[t];K.number(r,n,i),r.set(this._slots[t].subarray(0,n),i.offset),i.offset+=n}return r.subarray(0,i.offset)}static _warned=!1;static _grow(t,n,r){let i=Math.max(n,t.byteLength*2);return e._warned||(e._warned=!0,console.warn(`@colyseus/schema/input: InputEncoder buffer overflow in ${r}. Growing to ${i} bytes.`)),new Uint8Array(i)}};function td(){return typeof performance<`u`?performance.now():Date.now()}var nd=typeof WeakRef<`u`?e=>new WeakRef(e):e=>({deref:()=>e}),rd=64,id=[];function ad(e,t){id.push([e,nd(t)]),id.length>rd&&id.shift()}function od(){return!1}var sd=Symbol.metadata??Symbol.for(`Symbol.metadata`);function cd(e){return e.constructor[sd]}var ld=9,ud=ld,dd=(e,t)=>(t?2:1)*(13+ld*e),fd=class e{data;_host;_encoder;_scratch=new Uint8Array(2048);_framed=null;_sentCount=0;_lastProcessed=0;_epoch=0;_sendTimes;static BUFFER_FLOOR=64;static BUFFER_RTT_BUDGET_MS=1e3;static BUFFER_HEADROOM=1.5;_inputBufferSize;_inputBuffer=null;_reckonTimes=null;_pendingReckon=0;_lastStamp=0;_stampRing=null;_renderDeltaRing=null;_ringSlots=0;static _warnedBufferOverflow=!1;static _warnedAllowRewindIgnored=!1;_warnedUnknownKeys=null;_stampRender=!1;_stampReckon=!1;_allowRewind;_sendListeners=null;_renderDelay=0;_renderDelayExplicit=!1;_renderDelayProvider;_tickRate;_patchRate;_subSteps=1;constructor(t,n,r,i){this._host=t,this.data=n,this._encoder=r,this._stampRender=i?.stampRender??!1,this._stampReckon=i?.stampReckon??!1,this._allowRewind=i?.allowRewind,this._allowRewind!==void 0&&r.mode===`unreliable`&&!e._warnedAllowRewindIgnored&&(e._warnedAllowRewindIgnored=!0,console.warn('@colyseus/sdk: `allowRewind` is ignored on `mode:"unreliable"` — a packet stamps its whole redundancy ring or none of it, so excluding one input would cost bandwidth rather than save it. Use `mode:"reliable"` to gate the lag-comp stamp per input.')),this._renderDelay=i?.renderDelay??0,this._renderDelayExplicit=i?.renderDelay!==void 0,this._tickRate=i?.tickRate,this._patchRate=i?.patchRate,this._subSteps=i?.subSteps??1;let a=this._tickRate?1e3/this._tickRate:1e3/60,o=e.BUFFER_RTT_BUDGET_MS+(this._patchRate??0);this._inputBufferSize=Math.max(e.BUFFER_FLOOR,Math.ceil(o/a*e.BUFFER_HEADROOM)),this._sendTimes=new Float64Array(this._inputBufferSize)}get mode(){return this._encoder.mode}get tickRate(){return this._tickRate}get stepSeconds(){return this._tickRate?1/this._tickRate:void 0}get stepMs(){return this._tickRate?1e3/this._tickRate:void 0}get patchRate(){return this._patchRate}get subSteps(){return this._subSteps}get subStepSeconds(){return this._tickRate?1/this._tickRate/this._subSteps:void 0}get subStepMs(){return this._tickRate?1e3/this._tickRate/this._subSteps:void 0}get lastProcessed(){return this._lastProcessed}get sentCount(){return this._sentCount}get pendingCount(){return this._sentCount-this._lastProcessed}get replayBufferSize(){return this._inputBufferSize}get epoch(){return this._epoch}at(t){if(this._inputBuffer!==null&&!(t<=this._lastProcessed||t>this._sentCount)){if(this._sentCount-t>=this._inputBufferSize)e._warnedBufferOverflow||(e._warnedBufferOverflow=!0,console.warn(`@colyseus/sdk: input replay buffer (${this._inputBufferSize}) overflowed — RTT exceeds its budget at this input rate; reconciliation may drift.`));else return this._inputBuffer[t%this._inputBufferSize]}}reckonTimeAt(e){return this._reckonTimes===null||e<=this._lastProcessed||e>this._sentCount||this._sentCount-e>=this._inputBufferSize?0:this._reckonTimes[e%this._inputBufferSize]}reset(){this._encoder.reset(),this._sentCount=this._lastProcessed=this._encoder.seq,this._framed=null,this._lastStamp=0,this._ringSlots=0,this._sendTimes.fill(0),this._epoch++}bindRenderDelay(e){this._renderDelayExplicit||(this._renderDelayProvider=e)}_resolveRenderDelay(){return this._renderDelayProvider?this._renderDelayProvider():this._renderDelay}_warnUnknownFields(){let e=cd(this.data);if(e)for(let t of Object.keys(this.data))e[t]!==void 0||this._warnedUnknownKeys?.has(t)||((this._warnedUnknownKeys??=new Set).add(t),console.warn(`@colyseus/sdk input: "${t}" is not a declared field on ${this.data.constructor.name} — the write is never encoded or sent. Declare it with @type(...) on the input schema, or remove the write.`))}send(){let e=this._host.connection;if(!e?.isOpen)return 0;od()&&this._warnUnknownFields();let t=this._encoder.encode(),n=this._encoder.mode===`reliable`,r=this._stampReckon||this._stampRender,i=r&&n&&(this._allowRewind===void 0||this._allowRewind(this.data)),a=r&&!n,o=this._stampReckon&&this._stampRender,s=1+(i?ud+(o?2:0):a?dd(this._encoder.historySize,o):0)+t.length;s>this._scratch.byteLength&&(this._scratch=new Uint8Array(Math.max(s,this._scratch.byteLength*2)),this._framed=null),this._scratch[0]=(n?vo.ROOM_INPUT_RELIABLE:vo.ROOM_INPUT_UNRELIABLE)|(i||a?yo.TIMED:0);let c={offset:1};if(a)this._writeRingStamps(c);else if(i){let{stamp:e,renderDelta:t}=this._sampleStamp();K.number(this._scratch,e-this._lastStamp,c),this._lastStamp=e,o&&K.uint16(this._scratch,t,c)}else this._pendingReckon=0;this._scratch.set(t,c.offset);let l=c.offset+t.length;(this._framed===null||this._framed.byteLength!==l)&&(this._framed=this._scratch.subarray(0,l));let u=this._framed,d;return n?(e.send(u),d=++this._sentCount):(e.sendUnreliable(u),d=this._sentCount=this._encoder.seq),this._recordSent(d),d}_writeRingStamps(e){let{stamp:t,renderDelta:n}=this._sampleStamp(),r=this._encoder.historySize,i=this._encoder.seq,a=this._ringSlots=Math.min(this._ringSlots+1,r),o=this._stampRing??=new Float64Array(r);if(o[i%r]=t,K.number(this._scratch,a,e),K.uint32(this._scratch,t,e),this._writeSeriesDeltas(o,i,a,e),this._stampReckon&&this._stampRender){let t=this._renderDeltaRing??=new Uint16Array(r);t[i%r]=n,K.uint16(this._scratch,n,e),this._writeSeriesDeltas(t,i,a,e)}}_writeSeriesDeltas(e,t,n,r){let i=e.length;for(let a=1;a<n;a++)K.number(this._scratch,e[(t-a+1)%i]-e[(t-a)%i],r)}_sampleStamp(){let e=this._host.clock,t=(e?.lastServerTime?.()??0)>0,n=t?Math.max(0,Math.round(e.serverNow()))>>>0:0,r=t?Math.min(65535,Math.max(0,Math.round(this._resolveRenderDelay()+(e.smoothedRtt?.()??0)/2))):0;return this._pendingReckon=n,{stamp:this._stampReckon?n:n>r?n-r:0,renderDelta:r}}_recordSent(e){if(this._inputBuffer===null){let e=this.data.constructor;this._inputBuffer=Array.from({length:this._inputBufferSize},()=>new e)}this._encoder.copyInto(this._inputBuffer[e%this._inputBufferSize]),this._sendTimes[e%this._inputBufferSize]=td(),this._stampReckon&&((this._reckonTimes??=new Float64Array(this._inputBufferSize))[e%this._inputBufferSize]=this._pendingReckon);let t=this._sendListeners;if(t!==null)for(let n=0;n<t.length;n++)t[n](e)}onSend(e){let t=this._sendListeners;return this._sendListeners=t===null?[e]:[...t,e],()=>{let t=this._sendListeners;if(t===null)return;let n=t.indexOf(e);if(n<0)return;let r=t.slice();r.splice(n,1),this._sendListeners=r.length>0?r:null}}ackInput(e){if(e<=this._lastProcessed)return-1;let t=this._sentCount-e>=this._inputBufferSize;if(this._lastProcessed=e,t)return-1;let n=this._sendTimes[e%this._inputBufferSize];return n>0?td()-n:-1}},pd=Object.freeze({now:()=>td(),serverNow:()=>td(),renderNow:()=>td(),rtt:()=>0,smoothedRtt:()=>0,jitter:()=>0,lastServerTime:()=>0,patchInterval:()=>0,setPatchInterval:e=>{},sample:(e,t)=>{}}),md=class e{static EMA_ALPHA=.1;static RENDER_TAU=250;static RENDER_SNAP=250;static RTT_OUTLIER_X=4;static JITTER_GAIN=1/16;static JITTER_STALL_X=4;static RTT_GATE_FACTOR=1.2;static RTT_GATE_WINDOW=1e4;static RTT_GATE_WARMUP=30;_clockOffset=0;_clockHasSample=!1;_offsetCount=0;_rttFloorT=[];_rttFloorV=[];_rtt=0;_smoothedRtt=0;_rttHasSample=!1;_jitter=0;_lastRecvTime=-1;_lastServerTime=0;_patchInterval=0;_renderTau=e.RENDER_TAU;_renderSn=0;_renderSnAt=0;serverNow(){return td()+this._clockOffset}renderNow(){let t=this.serverNow();if(this._renderTau<=0)return t;let n=td();if(this._renderSn===0)return this._renderSn=t,this._renderSnAt=n,this._renderSn;let r=Math.min(n-this._renderSnAt,100);return r<.5?this._renderSn:(this._renderSnAt=n,this._renderSn+=r,Math.abs(t-this._renderSn)>e.RENDER_SNAP?(this._renderSn=t,this._renderSn):(this._renderSn+=(t-this._renderSn)*(1-Math.exp(-r/this._renderTau)),this._renderSn))}setRenderTau(e){this._renderTau=e>0?e:0}now(){return td()}rtt(){return this._rtt}smoothedRtt(){return this._smoothedRtt}jitter(){return this._jitter}lastServerTime(){return this._lastServerTime}patchInterval(){return this._patchInterval}setPatchInterval(e){this._patchInterval=e>0?e:0}sample(t,n){let r=td(),i=e.EMA_ALPHA,a=this._patchInterval;if(this._lastRecvTime>=0&&a>0){let t=r-this._lastRecvTime,n=Math.round(t/a);n>=1&&n<=e.JITTER_STALL_X&&(this._jitter+=(Math.abs(t-n*a)-this._jitter)*e.JITTER_GAIN)}this._lastRecvTime=r,this._lastServerTime=t,(n<0||this._smoothedRtt>0&&n>this._smoothedRtt*e.RTT_OUTLIER_X)&&(n=-1);let o=n>=0?t+n/2-r:t-r;if(!this._clockHasSample)this._clockOffset=o,this._clockHasSample=!0,n>=0&&(this.pushRttFloor(n,r),this._offsetCount=1);else if(n>=0){let t=this.pushRttFloor(n,r),a=this._offsetCount<e.RTT_GATE_WARMUP;this._offsetCount++,(a||n<=t*e.RTT_GATE_FACTOR)&&(this._clockOffset=this._clockOffset*(1-i)+o*i)}n>=0&&(this._rtt=n,this._rttHasSample?this._smoothedRtt=this._smoothedRtt*(1-i)+n*i:(this._smoothedRtt=n,this._rttHasSample=!0))}pushRttFloor(t,n){let r=this._rttFloorT,i=this._rttFloorV;for(;i.length>0&&i[i.length-1]>=t;)i.pop(),r.pop();i.push(t),r.push(n);let a=n-e.RTT_GATE_WINDOW;for(;r.length>0&&r[0]<a;)r.shift(),i.shift();return i[0]}reset(){this._clockOffset=0,this._clockHasSample=!1,this._offsetCount=0,this._rtt=0,this._smoothedRtt=0,this._rttHasSample=!1,this._jitter=0,this._lastRecvTime=-1,this._lastServerTime=0,this._rttFloorT.length=0,this._rttFloorV.length=0,this._renderSn=0,this._renderSnAt=0}},hd=class{#e;#t;#n;#r;#i=!1;#a;#o=!1;#s=!1;#c;#l;#u;constructor(e){this.#e=e}get patchRate(){return this.#l}applyReflection(e,t,n){let r=Zu.decode(e.subarray(0,n),t);Zu.makeEncodable(r.state.constructor),this.#a=r.state.constructor,this.#e.clock===pd&&(this.#e.clock=new md)}applyOptions(e,t){let n=e[t.offset++];this.#o=(n&So.RENDER_TIME)!==0,this.#s=(n&So.RECKON_TIME)!==0,n&So.FIXED_TIMESTEP&&(this.#c=qs.number(e,t)),n&So.PATCH_RATE&&(this.#l=qs.number(e,t)),n&So.SUB_STEPS&&(this.#u=qs.number(e,t))}ackInput(e){return this.#t?this.#t.ackInput(e):-1}reset(){this.#t?.reset()}handle(e){if(this.#t)return e!==void 0&&this.#d(e),this.#t;let t=e?.type??this.#a;if(!t)throw Error("room.input(): no input schema available. The server room must call `defineInput(YourInput)`, or you can pass `{ type: YourInput }` explicitly.");let n=new t,r=new ed(n,e);return this.#t=new fd(this.#e,n,r,{stampRender:this.#o,stampReckon:this.#s,renderDelay:e?.renderDelay,allowRewind:e?.allowRewind,tickRate:this.#c,patchRate:this.#l,subSteps:this.#u}),this.#n=e,this.#r=r,this.#t}#d(e){if(this.#i)return;let t=this.#t,n=[];e.type!==void 0&&e.type!==t.data?.constructor&&n.push(`type`),e.mode!==void 0&&e.mode!==t.mode&&n.push(`mode`),e.historySize!==void 0&&t.mode===`unreliable`&&e.historySize!==this.#r.historySize&&n.push(`historySize`),e.renderDelay!==void 0&&e.renderDelay!==this.#n?.renderDelay&&n.push(`renderDelay`),e.allowRewind!==void 0!=(this.#n?.allowRewind!==void 0)&&n.push(`allowRewind`),n.length!==0&&(this.#i=!0,console.warn(`@colyseus/sdk: room.input() options ignored — the input handle was already created by an earlier call (first call wins). Differing: ${n.join(`, `)}.`))}},gd;try{gd=new TextDecoder}catch{}var q,_d,J=0,vd=[],yd=vd,bd=0,xd={},Y,Sd,Cd=0,wd=0,Td,Ed,Dd=[],X,Od,kd=0,Ad={useRecords:!1,mapsAsObjects:!0},jd=class{},Md=new jd;Md.name=`MessagePack 0xC1`;var Nd=!1,Pd=2,Fd=class e{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=0&&(e.structures=[],e.maxSharedStructures||=0)),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType=`number`)),Object.assign(this,e)}unpack(t,n){if(q)return mf(()=>{hf();try{return this?this.unpack(t,n):e.prototype.unpack.call(Ad,t,n)}catch(e){throw e&&typeof e==`object`&&Id.add(e),e}});!t.buffer&&t.constructor===ArrayBuffer&&(t=typeof Buffer<`u`?Buffer.from(t):new Uint8Array(t)),typeof n==`object`?(_d=n.end||t.length,J=n.start||0):(J=0,_d=n>-1?n:t.length),_d>t.length&&(_d=t.length),bd=0,wd=0,Sd=null,yd=vd,Td=null,q=t;try{X=t.dataView||(t.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength))}catch(e){throw q=null,t instanceof Uint8Array?e:Error(`Source must be a Uint8Array or Buffer but was a `+(t&&typeof t==`object`?t.constructor.name:typeof t))}if(this instanceof e){if(xd=this,this.structures)return Y=this.structures,Ld(n);(!Y||Y.length>0)&&(Y=[])}else xd=Ad,(!Y||Y.length>0)&&(Y=[]);return Ld(n)}unpackMultiple(e,t){if(q)return mf(()=>{hf();try{return this?this.unpackMultiple(e,t):_f.unpackMultiple(e,t)}catch(e){throw e&&typeof e==`object`&&Id.add(e),e}});let n,r=0;try{Nd=!0;let i=e.length,a=this?this.unpack(e,i):_f.unpack(e,i);if(t){let e=J;if(t(a,r,e)===!1)return;for(;e<i;)if(r=e,a=Ld(),e=J,t(a,r,e)===!1)return}else{for(n=[a];J<i;)r=J,n.push(Ld());return n}}catch(e){throw e&&typeof e==`object`&&(e.lastPosition=r,e.values=n),e}finally{Nd=!1,hf()}}_mergeStructures(e,t){this._onLoadedStructures&&(e=this._onLoadedStructures(e)),e||=[],Object.isFrozen(e)&&(e=e.map(e=>e.slice(0)));for(let t=0,n=e.length;t<n;t++){let n=e[t];n&&(n.isShared=!0,t>=32&&(n.highByte=t-32>>5))}e.sharedLength=e.length;for(let n in t||[])if(n>=0){let r=e[n],i=t[n];i&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[n]=r),e[n]=i)}return this.structures=e}decode(e,t){return this.unpack(e,t)}},Id=new WeakSet;function Ld(e){try{if(!xd.trusted&&!Nd){let e=Y.sharedLength||0;e<Y.length&&(Y.length=e)}let t;if(Od=_d-J,xd._readStruct&&q[J]<64&&q[J]>=32?(t=xd._readStruct(q,J,_d),q=null,!(e&&e.lazy)&&t&&(t=t.toJSON()),J=_d):t=Bd(),Td&&=(J=Td.postBundlePosition,null),Nd&&J<=_d&&(Y.restoreStructures=null),J==_d)Y&&Y.restoreStructures&&zd(),Y=null,q=null,Ed&&=null;else if(J>_d)throw Error(`Unexpected end of MessagePack data`);else if(!Nd){let e;try{e=JSON.stringify(t,(e,t)=>typeof t==`bigint`?`${t}n`:t).slice(0,100)}catch(t){e=`(JSON view not available `+t+`)`}throw Error(`Data read, but end of buffer not reached `+e)}return t}catch(e){throw Y&&Y.restoreStructures&&zd(),hf(),Rd(e),e}}function Rd(e){e&&typeof e==`object`&&(J>_d?e.incomplete=!0:Id.has(e)?e.incomplete&&=!1:(e instanceof RangeError&&J+8>_d||typeof e.message==`string`&&e.message.startsWith(`Unexpected end of buffer`))&&(e.incomplete=!0))}function zd(){for(let e in Y.restoreStructures)Y[e]=Y.restoreStructures[e];Y.restoreStructures=null}function Bd(){let e=q[J++];if(e<160){if(e<128){if(e<64)return e;{let t=Y[e&63]||xd.getStructures&&Wd()[e&63];return t?(t.read||=Hd(t,e&63),t.read()):e}}if(e<144){if(e-=128,xd.mapsAsObjects){let t={};for(let n=0;n<e;n++){let e=sf();e===`__proto__`&&(e=`__proto_`),t[e]=Bd()}return t}{let t=new Map;for(let n=0;n<e;n++)t.set(Bd(),Bd());return t}}{e-=144;let t=Array(e);for(let n=0;n<e;n++)t[n]=Bd();return xd.freezeData?Object.freeze(t):t}}if(e<192){let t=e-160;if(wd>=J)return Sd.slice(J-Cd,(J+=t)-Cd);if(wd==0&&_d<140){let e=t<16?tf(t):ef(t);if(e!=null)return e}return Gd(t)}{let t;switch(e){case 192:return null;case 193:return Td?(t=Bd(),t>0?Td[1].slice(Td.position1,Td.position1+=t):Td[0].slice(Td.position0,Td.position0-=t)):Md;case 194:return!1;case 195:return!0;case 196:if(t=q[J++],t===void 0)throw Error(`Unexpected end of buffer`);return rf(t);case 197:if(t=X.getUint16(J),J+=2,t>_d-J)throw Xd(J+t);return rf(t);case 198:if(t=X.getUint32(J),J+=4,t>_d-J)throw Xd(J+t);return rf(t);case 199:return af(q[J++]);case 200:return t=X.getUint16(J),J+=2,af(t);case 201:return t=X.getUint32(J),J+=4,af(t);case 202:if(t=X.getFloat32(J),xd.useFloat32>2){let e=gf[(q[J]&127)<<1|q[J+1]>>7];return J+=4,(e*t+(t>0?.5:-.5)|0)/e}return J+=4,t;case 203:return t=X.getFloat64(J),J+=8,t;case 204:return q[J++];case 205:return t=X.getUint16(J),J+=2,t;case 206:return t=X.getUint32(J),J+=4,t;case 207:return xd.int64AsType===`number`?(t=X.getUint32(J)*4294967296,t+=X.getUint32(J+4)):xd.int64AsType===`string`?t=X.getBigUint64(J).toString():xd.int64AsType===`auto`?(t=X.getBigUint64(J),t<=BigInt(2)<<BigInt(52)&&(t=Number(t))):t=X.getBigUint64(J),J+=8,t;case 208:return X.getInt8(J++);case 209:return t=X.getInt16(J),J+=2,t;case 210:return t=X.getInt32(J),J+=4,t;case 211:return xd.int64AsType===`number`?(t=X.getInt32(J)*4294967296,t+=X.getUint32(J+4)):xd.int64AsType===`string`?t=X.getBigInt64(J).toString():xd.int64AsType===`auto`?(t=X.getBigInt64(J),t>=BigInt(-2)<<BigInt(52)&&t<=BigInt(2)<<BigInt(52)&&(t=Number(t))):t=X.getBigInt64(J),J+=8,t;case 212:if(t=q[J++],t==114)return lf(q[J++]&63);{let e=Dd[t];if(e){if(e.read)return J++,e.read(Bd());if(e.noBuffer)return J++,e();if(J>=_d)throw Xd();return e(q.subarray(J,++J))}throw Error(`Unknown extension `+t)}case 213:return t=q[J],t==114?(J++,lf(q[J++]&63,q[J++])):af(2);case 214:return af(4);case 215:return af(8);case 216:return af(16);case 217:return t=q[J++],wd>=J?Sd.slice(J-Cd,(J+=t)-Cd):Kd(t);case 218:if(t=X.getUint16(J),J+=2,t>_d-J)throw Xd(J+t);return wd>=J?Sd.slice(J-Cd,(J+=t)-Cd):qd(t);case 219:if(t=X.getUint32(J),J+=4,t>_d-J)throw Xd(J+t);return wd>=J?Sd.slice(J-Cd,(J+=t)-Cd):Jd(t);case 220:return t=X.getUint16(J),J+=2,Zd(t);case 221:return t=X.getUint32(J),J+=4,Zd(t);case 222:return t=X.getUint16(J),J+=2,Qd(t);case 223:return t=X.getUint32(J),J+=4,Qd(t);default:if(e>=224)return e-256;throw e===void 0?Xd():Error(`Unknown MessagePack token `+e)}}}var Vd=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Hd(e,t){function n(){if(n.count++>Pd){let r;try{r=e.read=Function(`r`,`return function(){return `+(xd.freezeData?`Object.freeze`:``)+`({`+e.map(e=>e===`__proto__`?`__proto_:r()`:Vd.test(e)?e+`:r()`:`[`+JSON.stringify(e)+`]:r()`).join(`,`)+`})}`)(Bd)}catch{return Pd=1/0,n()}return e.read0=r,e.highByte===0&&(e.read=Ud(t,e.read)),r()}let r={};for(let t=0,n=e.length;t<n;t++){let n=e[t];n===`__proto__`&&(n=`__proto_`),r[n]=Bd()}return xd.freezeData?Object.freeze(r):r}return n.count=0,e.read0=n,e.highByte===0?Ud(t,n):n}var Ud=(e,t)=>function(){let n=q[J++];if(n===0)return t();let r=e<32?-(e+(n<<5)):e+(n<<5),i=Y[r]||Wd()[r];if(!i)throw Error(`Record id is not defined for `+r);return i.read||=Hd(i,e),i.read()};function Wd(){let e=mf(()=>(q=null,xd.getStructures()));return Y=xd._mergeStructures(e,Y)}var Gd=Yd,Kd=Yd,qd=Yd,Jd=Yd;function Yd(e){let t;if(e<16&&(t=tf(e)))return t;if(e>64&&gd)return gd.decode(q.subarray(J,J+=e));let n=J+e,r=[];for(t=``;J<n;){let e=q[J++];if(!(e&128))r.push(e);else if((e&224)==192){if(e<194||J>=n||(q[J]&192)!=128)r.push(65533);else{let t=q[J++]&63;r.push((e&31)<<6|t)}}else if((e&240)==224){let t=J<n?q[J]:0;if(J>=n||(t&192)!=128||e===224&&t<160||e===237&&t>=160)r.push(65533);else if(J++,J>=n||(q[J]&192)!=128)r.push(65533);else{let n=q[J++]&63;r.push((e&31)<<12|(t&63)<<6|n)}}else if((e&248)==240){let t=J<n?q[J]:0;if(e>244||J>=n||(t&192)!=128||e===240&&t<144||e===244&&t>=144)r.push(65533);else if(J++,J>=n||(q[J]&192)!=128)r.push(65533);else{let i=q[J++]&63;if(J>=n||(q[J]&192)!=128)r.push(65533);else{let n=q[J++]&63,a=(e&7)<<18|(t&63)<<12|i<<6|n;a-=65536,r.push(a>>>10&1023|55296),r.push(56320|a&1023)}}}else r.push(65533);r.length>=4096&&(t+=$d.apply(String,r),r.length=0)}return r.length>0&&(t+=$d.apply(String,r)),t}function Xd(e){let t=Error(`Unexpected end of MessagePack data`);return t.incomplete=!0,e>_d&&J<=_d&&(t.missingBytes=e-_d),t}function Zd(e){if(e>_d-J||(Od-=e)<0)throw Xd(J+e);let t=Array(e);for(let n=0;n<e;n++)t[n]=Bd();return xd.freezeData?Object.freeze(t):t}function Qd(e){if(e>(_d-J)/2)throw Xd(J+2*e);if(xd.mapsAsObjects){let t={};for(let n=0;n<e;n++){let e=sf();e===`__proto__`&&(e=`__proto_`),t[e]=Bd()}return t}{let t=new Map;for(let n=0;n<e;n++)t.set(Bd(),Bd());return t}}var $d=String.fromCharCode;function ef(e){let t=J;if(q.latin1Slice){let n=t+e;if(n>_d)return;for(let e=t;e<n;e++)if((q[e]&128)>0)return;return J=n,q.latin1Slice(t,n)}let n=Array(e);for(let r=0;r<e;r++){let e=q[J++];if((e&128)>0){J=t;return}n[r]=e}return $d.apply(String,n)}function tf(e){if(e<4){if(e<2){if(e===0)return``;{let e=q[J++];if((e&128)>1){--J;return}return $d(e)}}{let t=q[J++],n=q[J++];if((t&128)>0||(n&128)>0){J-=2;return}if(e<3)return $d(t,n);let r=q[J++];if((r&128)>0){J-=3;return}return $d(t,n,r)}}{let t=q[J++],n=q[J++],r=q[J++],i=q[J++];if((t&128)>0||(n&128)>0||(r&128)>0||(i&128)>0){J-=4;return}if(e<6){if(e===4)return $d(t,n,r,i);{let e=q[J++];if((e&128)>0){J-=5;return}return $d(t,n,r,i,e)}}if(e<8){let a=q[J++],o=q[J++];if((a&128)>0||(o&128)>0){J-=6;return}if(e<7)return $d(t,n,r,i,a,o);let s=q[J++];if((s&128)>0){J-=7;return}return $d(t,n,r,i,a,o,s)}{let a=q[J++],o=q[J++],s=q[J++],c=q[J++];if((a&128)>0||(o&128)>0||(s&128)>0||(c&128)>0){J-=8;return}if(e<10){if(e===8)return $d(t,n,r,i,a,o,s,c);{let e=q[J++];if((e&128)>0){J-=9;return}return $d(t,n,r,i,a,o,s,c,e)}}if(e<12){let l=q[J++],u=q[J++];if((l&128)>0||(u&128)>0){J-=10;return}if(e<11)return $d(t,n,r,i,a,o,s,c,l,u);let d=q[J++];if((d&128)>0){J-=11;return}return $d(t,n,r,i,a,o,s,c,l,u,d)}{let l=q[J++],u=q[J++],d=q[J++],f=q[J++];if((l&128)>0||(u&128)>0||(d&128)>0||(f&128)>0){J-=12;return}if(e<14){if(e===12)return $d(t,n,r,i,a,o,s,c,l,u,d,f);{let e=q[J++];if((e&128)>0){J-=13;return}return $d(t,n,r,i,a,o,s,c,l,u,d,f,e)}}{let p=q[J++],m=q[J++];if((p&128)>0||(m&128)>0){J-=14;return}if(e<15)return $d(t,n,r,i,a,o,s,c,l,u,d,f,p,m);let h=q[J++];if((h&128)>0){J-=15;return}return $d(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}}}}}function nf(){let e=q[J++],t;if(e<192)t=e-160;else switch(e){case 217:t=q[J++];break;case 218:t=X.getUint16(J),J+=2;break;case 219:t=X.getUint32(J),J+=4;break;default:throw Error(`Expected string`)}return Yd(t)}function rf(e){return xd.copyBuffers?Uint8Array.prototype.slice.call(q,J,J+=e):q.subarray(J,J+=e)}function af(e){if(e>=_d-J)throw Xd(J+1+e);let t=q[J++];if(Dd[t]){let n;return Dd[t](q.subarray(J,n=J+=e),e=>{J=e;try{return Bd()}finally{J=n}})}throw Error(`Unknown extension type `+t)}var of=Array(4096);function sf(){let e=q[J++];if(e>=160&&e<192){if(e-=160,wd>=J)return Sd.slice(J-Cd,(J+=e)-Cd);if(!(wd==0&&_d<180))return Gd(e)}else return J--,cf(Bd());if(e>_d-J)throw Xd(J+e);let t=(e<<5^(e>1?X.getUint16(J):e>0?q[J]:0))&4095,n=of[t],r=J,i=J+e-3,a,o=0;if(n&&n.bytes==e){for(;r<i;){if(a=X.getUint32(r),a!=n[o++]){r=1879048192;break}r+=4}for(i+=3;r<i;)if(a=q[r++],a!=n[o++]){r=1879048192;break}if(r===i)return J=r,n.string;i-=3,r=J}for(n=[],of[t]=n,n.bytes=e;r<i;)a=X.getUint32(r),n.push(a),r+=4;for(i+=3;r<i;)a=q[r++],n.push(a);let s=e<16?tf(e):ef(e);return s==null?n.string=Gd(e):n.string=s}function cf(e){if(typeof e==`string`)return e;if(typeof e==`number`||typeof e==`boolean`||typeof e==`bigint`)return e.toString();if(e==null)return e+``;if(xd.allowArraysInMapKeys&&Array.isArray(e)&&e.flat().every(e=>[`string`,`number`,`boolean`,`bigint`].includes(typeof e)))return e.flat().toString();throw Error(`Invalid property type for record: ${typeof e}. A MessagePack map with non-string keys can be decoded as a Map with mapsAsObjects: false`)}var lf=(e,t)=>{let n=Bd().map(cf),r=e;t!==void 0&&(e=e<32?-((t<<5)+e):(t<<5)+e,n.highByte=t);let i=Y[e];if(Nd||i&&i.isShared){let t=Y.restoreStructures||(Y.restoreStructures=[]);e in t||(t[e]=i)}return Y[e]=n,n.read=Hd(n,r),(n.read0||n.read)()};Dd[0]=()=>{},Dd[0].noBuffer=!0,Dd[66]=e=>{let t=e.byteLength%8||8,n=BigInt(e[0]&128?e[0]-256:e[0]);for(let r=1;r<t;r++)n<<=BigInt(8),n+=BigInt(e[r]);if(e.byteLength!==t){let r=new DataView(e.buffer,e.byteOffset,e.byteLength),i=(e,t)=>{let n=t-e;if(n<=40){let n=r.getBigUint64(e);for(let i=e+8;i<t;i+=8)n<<=BigInt(64),n|=r.getBigUint64(i);return n}let a=e+(n>>4<<3),o=i(e,a),s=i(a,t);return o<<BigInt((t-a)*8)|s};n=n<<BigInt((r.byteLength-t)*8)|i(t,r.byteLength)}return n};var uf={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:typeof AggregateError==`function`?AggregateError:null};Dd[101]=()=>{let e=Bd();if(e[0]===`AggregateError`&&uf.AggregateError)return new uf.AggregateError(e[3]||[],e[1],{cause:e[2]});if(!uf[e[0]]){let t=Error(e[1],{cause:e[2]});return t.name=e[0],t}return uf[e[0]](e[1],{cause:e[2]})},Dd[105]=e=>{if(xd.structuredClone===!1)throw Error(`Structured clone extension is disabled`);let t=X.getUint32(J-4);Ed||=new Map;let n=q[J],r;r=n>=144&&n<160||n==220||n==221?[]:n>=128&&n<144||n==222||n==223?new Map:(n>=199&&n<=201||n>=212&&n<=216)&&q[J+1]===115?new Set:{};let i={target:r};Ed.set(t,i);let a=Bd();if(i.used)Object.assign(r,a);else return i.target=a;if(r instanceof Map)for(let[e,t]of a.entries())r.set(e,t);if(r instanceof Set)for(let e of Array.from(a))r.add(e);return r},Dd[112]=e=>{if(xd.structuredClone===!1)throw Error(`Structured clone extension is disabled`);let t=X.getUint32(J-4),n=Ed.get(t);return n.used=!0,n.target},Dd[115]=()=>new Set(Bd());var df=[`Int8`,`Uint8`,`Uint8Clamped`,`Int16`,`Uint16`,`Int32`,`Uint32`,`Float32`,`Float64`,`BigInt64`,`BigUint64`].map(e=>e+`Array`),ff=typeof globalThis==`object`?globalThis:window;Dd[116]=e=>{let t=e[0],n=Uint8Array.prototype.slice.call(e,1).buffer,r=df[t];if(!r){if(t===16)return n;if(t===17)return new DataView(n);throw Error(`Could not find typed array for code `+t)}return new ff[r](n)},Dd[120]=()=>{let e=Bd();return new RegExp(e[0],e[1])};var pf=[];Dd[98]=e=>{let t=(e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3],n=J;return J+=t-e.length,Td=pf,Td=[nf(),nf()],Td.position0=0,Td.position1=0,Td.postBundlePosition=J,J=n,Bd()},Dd[255]=e=>e.length==4?new Date((e[0]*16777216+(e[1]<<16)+(e[2]<<8)+e[3])*1e3):e.length==8?new Date(((e[0]<<22)+(e[1]<<14)+(e[2]<<6)+(e[3]>>2))/1e6+((e[3]&3)*4294967296+e[4]*16777216+(e[5]<<16)+(e[6]<<8)+e[7])*1e3):e.length==12?new Date(((e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3])/1e6+((e[4]&128?-281474976710656:0)+e[6]*1099511627776+e[7]*4294967296+e[8]*16777216+(e[9]<<16)+(e[10]<<8)+e[11])*1e3):new Date(`invalid`);function mf(e){xd&&xd._onSaveState&&xd._onSaveState();let t=_d,n=J,r=bd,i=Cd,a=wd,o=Sd,s=yd,c=Ed,l=Td,u=Od,d=new Uint8Array(q.slice(0,_d)),f=Y,p=Y.slice(0,Y.length),m=xd,h=Nd,g=kd;kd=0;try{return e()}catch(e){throw e&&typeof e==`object`&&Id.add(e),e}finally{_d=t,J=n,bd=r,Cd=i,wd=a,Sd=o,yd=s,Ed=c,Td=l,Od=u,q=d,Nd=h,kd=g,Y=f,Y.splice(0,Y.length,...p),xd=m,X=new DataView(q.buffer,q.byteOffset,q.byteLength)}}function hf(){q=null,Ed=null,Y=null}Dd.slice(0);var gf=Array(147);for(let e=0;e<256;e++)gf[e]=+(`1e`+Math.floor(45.15-e*.30103));var _f=new Fd({useRecords:!1}),vf=_f.unpack;_f.unpackMultiple,_f.unpack;var yf={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};new Uint8Array(new Float32Array(1).buffer,0,4),Fd.SUPPORTS_STRUCT_HOOKS=!0;var bf;try{bf=new TextEncoder}catch{}var xf,Sf,Cf=typeof Buffer<`u`,wf=Cf?function(e){return Buffer.allocUnsafeSlow(e)}:Uint8Array,Tf=Cf?Buffer:Uint8Array,Ef=Cf?4294967296:2144337920,Z,Df,Of,Q=0,kf,Af=null,jf=!1,Mf=21760,Nf=/[\u0080-\uFFFF]/,Pf=Symbol(`record-id`),Ff=class extends Fd{constructor(e){super(e),this.offset=0;let t,n,r,i,a=Tf.prototype.utf8Write?function(e,t){return Z.utf8Write(e,t,Z.byteLength-t)}:bf&&bf.encodeInto?function(e,t){return bf.encodeInto(e,Z.subarray(t)).written}:!1,o=this;e||={};let s=e&&e.sequential,c=e.structures||e.saveStructures,l=e.maxSharedStructures;if(l??=c?32:0,l>8160)throw Error(`Maximum maxSharedStructure is 8160`);e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let u=e.maxOwnStructures;u??=c?32:64,!this.structures&&e.useRecords!=0&&(this.structures=[]);let d=l>32||u+l>64,f=l+64,p=l+u+64;if(p>8256)throw Error(`Maximum maxSharedStructure + maxOwnStructure is 8192`);let m=[],h=0,g=0,_=!1,v=0,y=null;this.pack=this.encode=function(e,a){if(jf)return x(e,a);if(Z||(Z=new wf(8192),Of=Z.dataView||(Z.dataView=new DataView(Z.buffer,0,8192)),Q=0),kf=Z.length-10,kf-Q<2048?(Z=new wf(Z.length),Of=Z.dataView||(Z.dataView=new DataView(Z.buffer,0,Z.length)),kf=Z.length-10,Q=0):Q=Q+7&2147483640,t=Q,a&2048&&(Q+=a&255),i=o.structuredClone?new Map:null,o.bundleStrings&&typeof e!=`string`?(Af=[],Af.size=1/0):Af=null,r=o.structures,r){r.uninitialized&&(r=o._mergeStructures(o.getStructures()));let e=r.sharedLength||0;if(e>l)throw Error(`Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to `+r.sharedLength);r.transitions||(b(v&&o.saveStructures?Math.min(e,o.lastNamedStructuresLength||0):e),v||(o.lastNamedStructuresLength=e)),s&&r.nextId>=e+64||(r.nextId=e+64)}n&&=!1,!v&&y&&(y=null);let c;jf=!0,_=!0;try{o._writeStruct&&!(v&&o.saveStructures)&&e&&typeof e==`object`?e.constructor===Object?k(e):e.constructor!==Map&&!Array.isArray(e)&&!Sf.some(t=>e instanceof t)?k(o.useToJSON!==!1&&e.toJSON?e.toJSON():e):w(e):w(e);let n=Af;if(Af&&Hf(t,w,0),i&&i.idsToInsert){let e=i.idsToInsert.sort((e,t)=>e.offset>t.offset?1:-1),r=e.length,a=-1;for(;n&&r>0;){let i=e[--r].offset+t;i<n.stringsPosition+t&&a===-1&&(a=0),i>n.position+t?a>=0&&(a+=6):(a>=0&&(Of.setUint32(n.position+t,Of.getUint32(n.position+t)+a),a=-1),n=n.previous,r++)}a>=0&&n&&Of.setUint32(n.position+t,Of.getUint32(n.position+t)+a),Q+=e.length*6,Q>kf&&A(Q),o.offset=Q;let s=Vf(Z.subarray(t,Q),e);return i=null,s}return o.offset=Q,a&512?(Z.start=t,Z.end=Q,Z):Z.subarray(t,Q)}catch(e){throw c=e,e}finally{if(_=!1,r){if(S(),y&&!v){let e=y;if(y=null,!c&&o.saveStructures){let t=r.sharedLength||0;r.transitions||b(t);for(let i=0,a=e.length;i<a&&t<l;i++){let a=e[i],o,s=r.transitions;for(let e=0,t=a.length;e<t;e++){let t=a[e];o=s[t],o||=s[t]=Object.create(null),s=o}if(!s[Pf]){let e=t+64;a.highByte=e>=96&&d?e-96>>5:-1,a.isShared=!0,s[Pf]=e,s.__keys__=a,r[t++]=a,r.sharedLength=t,n=!0}}s&&r.nextId>=t+64||(r.nextId=t+64)}}if(n&&!v&&o.saveStructures){let n=r.sharedLength||0,i=Z.subarray(t,Q);if(!c){let t=!1;try{let n=(o._prepareStructures||Uf)(r,o);if(o.saveStructures(n,n.isCompatible)===!1)return r.uninitialized=!0,t=!0,jf=!1,o.pack(e,a);t=!0}finally{jf=!1,t||(r=o.structures,o.getStructures&&(r.uninitialized=!0),r.length=r.sharedLength=o.lastNamedStructuresLength||0,r.transitions=null)}return o.lastNamedStructuresLength=n,Z.length>1073741824&&(Z=null),i}o.getStructures&&(r.uninitialized=!0),r.length=r.sharedLength=o.lastNamedStructuresLength||0,r.transitions=null}}jf=!1,Z.length>1073741824&&(Z=null),a&1024&&(Q=t)}};let b=e=>{r.transitions=Object.create(null);for(let t=0;t<e;t++){let e=r[t];if(!e)continue;let n,i=r.transitions;for(let t=0,r=e.length;t<r;t++){let r=e[t];n=i[r],n||=i[r]=Object.create(null),i=n}i[Pf]=t+64}},x=(e,a)=>{let s=Z,c=Of,l=Q,u=kf,d=Af,f=t,p=i,g=n,x=_,S,C,w,T,E,D,O,k,A,j,ee,te,ne=!1;x&&(te=y?y.length:0,v++);try{if(x&&r){S=r,C=r.transitions,w=r.nextId,T=r.nextOwnId,A=o.lastNamedStructuresLength,k=r.sharedLength||0,O=r.slice(k),E=m,D=[];for(let e=0,t=m.length;e<t;e++){let t=m[e],n=t[Pf];D[e]=n,t[Pf]=0,n>=k+64&&t.__keys__&&(O[n-k-64]=t.__keys__)}if(m=[],g&&o.saveStructures&&C){j=[];for(let e=A||0;e<k;e++){let t=r[e];if(!t)continue;let n=C;for(let e=0,r=t.length;e<r&&n;e++)n=n[t[e]];n&&n[Pf]===e+64&&(j.push(n,e+64,n.__keys__),n[Pf]=0,n.__keys__=null)}}r.length=k,r.nextId=k+64,r.nextOwnId=void 0,ee=h,h=0}Z=null,jf=!1,_=!1;let t=o.pack(e,a);return ne=!0,t}finally{if(!ne&&x&&y&&(y.length=te),jf=!0,_=x,Z=s,Of=c,Q=l,kf=u,Af=d,t=f,i=p,x){if(v--,n=g||n,r=o.structures,r&&O){if(m!==E)for(let e=0,t=m.length;e<t;e++)m[e][Pf]=0;let e=r.sharedLength||0;if(r!==S){if(g||O.length>0){for(let e=0;e<k;e++)S[e]!==void 0&&(r[e]=S[e]);e=r.sharedLength=r.length=k,o.lastNamedStructuresLength=A}else!v&&!n&&(o.lastNamedStructuresLength=e)}r.length=Math.max(e,k+O.length);for(let t=Math.max(0,e-k),n=O.length;t<n;t++)O[t]!==void 0&&(r[k+t]=O[t]);if(r.transitions!==C||r!==S){if(r===S&&!r.transitions&&e===k)r.transitions=C;else{b(v&&o.saveStructures?Math.min(e,o.lastNamedStructuresLength||0):e),j=null,E=[],D=[];for(let t=Math.max(0,e-k),n=O.length;t<n;t++){let e=O[t];if(!e)continue;let n,i=r.transitions;for(let t=0,r=e.length;t<r;t++){let r=e[t];n=i[r],n||=i[r]=Object.create(null),i=n}i[Pf]||(E.push(i),D.push(k+t+64))}}}if(j)for(let e=0,t=j.length;e<t;e+=3)j[e][Pf]=j[e+1],j[e].__keys__=j[e+2];m=E;for(let e=0,t=D.length;e<t;e++)m[e][Pf]||(m[e][Pf]=D[e]);r.nextId=w>=e+64?w:e+64,r.nextOwnId=T,ee!==void 0&&(h+=ee)}}else n=g}},S=()=>{g<10&&g++;let e=r.sharedLength||0;if(r.length>e&&!s&&(r.length=e),h>1e4&&!v)r.transitions=null,g=0,h=0,m.length>0&&(m=[]);else if(m.length>0&&!s){for(let e=0,t=m.length;e<t;e++)m[e][Pf]=0;m=[]}},C=e=>{var t=e.length;t<16?Z[Q++]=144|t:t<65536?(Z[Q++]=220,Z[Q++]=t>>8,Z[Q++]=t&255):(Z[Q++]=221,Of.setUint32(Q,t),Q+=4);for(let n=0;n<t;n++)w(e[n])},w=e=>{Q>kf&&(Z=A(Q));var n=typeof e,r;if(n===`string`){let n=e.length;if(Af&&n>=4&&n<4096){if((Af.size+=n)>Mf){let e,n=(Af[0]?Af[0].length*3+Af[1].length:0)+10;Q+n>kf&&(Z=A(Q+n));let r;Af.position?(r=Af,Z[Q]=200,Q+=3,Z[Q++]=98,e=Q-t,Q+=4,Hf(t,w,0),Of.setUint16(e+t-3,Q-t-e)):(Z[Q++]=214,Z[Q++]=98,e=Q-t,Q+=4),Af=[``,``],Af.previous=r,Af.size=0,Af.position=e}let r=Nf.test(e);Af[+!r]+=e,Z[Q++]=193,w(r?-n:n);return}let i;i=n<32?1:n<256?2:n<65536?3:5;let o=n*3;if(Q+o>kf&&(Z=A(Q+o)),n<64||!a){let t,a,o,s=Q+i;for(t=0;t<n;t++)a=e.charCodeAt(t),a<128?Z[s++]=a:a<2048?(Z[s++]=a>>6|192,Z[s++]=a&63|128):(a&64512)==55296&&((o=e.charCodeAt(t+1))&64512)==56320?(a=65536+((a&1023)<<10)+(o&1023),t++,Z[s++]=a>>18|240,Z[s++]=a>>12&63|128,Z[s++]=a>>6&63|128,Z[s++]=a&63|128):(a&63488)==55296?(Z[s++]=239,Z[s++]=191,Z[s++]=189):(Z[s++]=a>>12|224,Z[s++]=a>>6&63|128,Z[s++]=a&63|128);r=s-Q-i}else r=a(e,Q+i);r<32?Z[Q++]=160|r:r<256?(i<2&&Z.copyWithin(Q+2,Q+1,Q+1+r),Z[Q++]=217,Z[Q++]=r):r<65536?(i<3&&Z.copyWithin(Q+3,Q+2,Q+2+r),Z[Q++]=218,Z[Q++]=r>>8,Z[Q++]=r&255):(i<5&&Z.copyWithin(Q+5,Q+3,Q+3+r),Z[Q++]=219,Of.setUint32(Q,r),Q+=4),Q+=r}else if(n===`number`){if(e>>>0===e)e<32||e<128&&this.useRecords===!1||e<64&&!this._writeStruct?Z[Q++]=e:e<256?(Z[Q++]=204,Z[Q++]=e):e<65536?(Z[Q++]=205,Z[Q++]=e>>8,Z[Q++]=e&255):(Z[Q++]=206,Of.setUint32(Q,e),Q+=4);else if((e|0)===e)e>=-32?Z[Q++]=256+e:e>=-128?(Z[Q++]=208,Z[Q++]=e+256):e>=-32768?(Z[Q++]=209,Of.setInt16(Q,e),Q+=2):(Z[Q++]=210,Of.setInt32(Q,e),Q+=4);else{let t;if((t=this.useFloat32)>0&&e<4294967296&&e>=-2147483648){Z[Q++]=202,Of.setFloat32(Q,e);let n;if(t<4||((n=e*gf[(Z[Q]&127)<<1|Z[Q+1]>>7])|0)===n){Q+=4;return}Q--}Z[Q++]=203,Of.setFloat64(Q,e),Q+=8}}else if(n===`object`||n===`function`){if(!e)Z[Q++]=192;else{if(i){let n=i.get(e);if(n){n.id||=(i.idsToInsert||(i.idsToInsert=[])).push(n),Z[Q++]=214,Z[Q++]=112,Of.setUint32(Q,n.id),Q+=4;return}i.set(e,{offset:Q-t})}let a=e.constructor;if(a===Object)O(e);else if(a===Array)C(e);else if(a===Map){if(this.mapAsEmptyObject)Z[Q++]=128;else{r=e.size,r<16?Z[Q++]=128|r:r<65536?(Z[Q++]=222,Z[Q++]=r>>8,Z[Q++]=r&255):(Z[Q++]=223,Of.setUint32(Q,r),Q+=4);for(let[t,n]of e)w(t),w(n)}}else{for(let t=0,n=xf.length;t<n;t++){let r=Sf[t];if(e instanceof r){if(e.constructor!==r&&t>=n-Lf&&o.useToJSON!==!1&&e.toJSON!==void 0&&e.toJSON!==If&&!ArrayBuffer.isView(e))break;let i=xf[t];if(i.write){i.type&&(Z[Q++]=212,Z[Q++]=i.type,Z[Q++]=0);let t=i.write.call(this,e);t===e?Array.isArray(e)?C(e):O(e):w(t);return}let a=Z,s=Of,c=Q,l=Af;Z=null;let u;try{u=i.pack.call(this,e,e=>(Z=a,a=null,Q+=e,Q>kf&&A(Q),{target:Z,targetView:Of,position:Q-e}),w)}finally{a&&(Z=a,Of=s,Q=c,Af=l,kf=Z.length-10)}u&&(u.length+Q>kf&&A(u.length+Q),Q=Bf(u,Z,Q,i.type));return}}if(Array.isArray(e))C(e);else{if(o.useToJSON!==!1&&e.toJSON){let t=e.toJSON();if(t!==e)return w(t)}if(n===`function`)return w(this.writeFunction&&this.writeFunction(e));O(e)}}}}else if(n===`boolean`)Z[Q++]=e?195:194;else if(n===`bigint`){if(e<0x8000000000000000&&e>=-0x8000000000000000)Z[Q++]=211,Of.setBigInt64(Q,e);else if(e<0x10000000000000000&&e>0)Z[Q++]=207,Of.setBigUint64(Q,e);else if(this.largeBigIntToFloat)Z[Q++]=203,Of.setFloat64(Q,Number(e));else if(this.largeBigIntToString)return w(e.toString());else if(this.useBigIntExtension||this.moreTypes){let t=BigInt(e<0?-1:0),n;if(e>>BigInt(65536)===t){let r=BigInt(0x10000000000000000)-BigInt(1),i=[];for(;i.push(e&r),e>>BigInt(63)!==t;)e>>=BigInt(64);n=new Uint8Array(new BigUint64Array(i).buffer),n.reverse()}else{let t=e<0,r=(t?~e:e).toString(16);if(r.length%2?r=`0`+r:parseInt(r.charAt(0),16)>=8&&(r=`00`+r),Cf)n=Buffer.from(r,`hex`);else{n=new Uint8Array(r.length/2);for(let e=0;e<n.length;e++)n[e]=parseInt(r.slice(e*2,e*2+2),16)}if(t)for(let e=0;e<n.length;e++)n[e]=~n[e]}n.length+Q>kf&&A(n.length+Q),Q=Bf(n,Z,Q,66);return}else throw RangeError(e+` was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string`);Q+=8}else if(n===`undefined`)this.encodeUndefinedAsNil?Z[Q++]=192:(Z[Q++]=212,Z[Q++]=0,Z[Q++]=0);else throw Error(`Unknown type: `+n)},T=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?e=>{let t;if(this.skipValues){t=[];for(let n in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(n))&&!this.skipValues.includes(e[n])&&t.push(n)}else t=Object.keys(e);let n=t.length;n<16?Z[Q++]=128|n:n<65536?(Z[Q++]=222,Z[Q++]=n>>8,Z[Q++]=n&255):(Z[Q++]=223,Of.setUint32(Q,n),Q+=4);let r;if(this.coercibleKeyAsNumber)for(let i=0;i<n;i++){r=t[i];let n=Number(r);w(isNaN(n)?r:n),w(e[r])}else for(let i=0;i<n;i++)w(r=t[i]),w(e[r])}:e=>{Z[Q++]=222;let n=Q-t;Q+=2;let r=0;for(let t in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(t))&&(w(t),w(e[t]),r++);if(r>65535)throw Error(`Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object`);Z[n+++t]=r>>8,Z[n+t]=r&255},E=this.useRecords===!1?T:e.progressiveRecords&&!d&&u>0?e=>{let n,i=r.transitions||(r.transitions=Object.create(null)),a=Q++-t,o;for(let s in e)if(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(s)){if(n=i[s],n)i=n;else{let c=Object.keys(e),l=i;i=r.transitions;let u=0;for(let e=0,t=c.length;e<t;e++){let t=c[e];n=i[t],n||(n=i[t]=Object.create(null),u++),i=n}a+t+1==Q?(Q--,j(i,c,u)):ee(i,c,a,u),o=!0,i=l[s]}w(e[s])}if(!o){let n=i[Pf];n?Z[a+t]=n:ee(i,Object.keys(e),a,0)}}:e=>{let t,n=r.transitions||(r.transitions=Object.create(null)),i=0;for(let r in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(r))&&(t=n[r],t||(t=n[r]=Object.create(null),i++),n=t);let a=n[Pf];if(a)a>=96&&d?(Z[Q++]=((a-=96)&31)+96,Z[Q++]=a>>5):Z[Q++]=a;else if(j(n,n.__keys__||Object.keys(e),i)===!1)return T(e);for(let t in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(t))&&w(e[t])},D=typeof this.useRecords==`function`&&this.useRecords,O=D?e=>{D(e)?E(e):T(e)}:E,k=e=>{let i=o._writeStruct(e,Z,t,Q,r,A,(e,t,r)=>{if(r)return n=!0;Q=t;let i=Z;return w(e),S(),i===Z?Q:{position:Q,targetView:Of,target:Z}});if(i===0)return O(e);Q=i},A=e=>{let n;if(e>16777216){if(e-t>Ef)throw Error(`Packed buffer would be larger than maximum buffer size`);n=Math.min(Ef,Math.round(Math.max((e-t)*(e>67108864?1.25:2),4194304)/4096)*4096)}else n=(Math.max(e-t<<2,Z.length-1)>>12)+1<<12;let r=new wf(n);return Of=r.dataView||=new DataView(r.buffer,0,n),e=Math.min(e,Z.length),Z.copy?Z.copy(r,0,t,e):r.set(Z.slice(t,e)),Q-=t,t=0,kf=r.length-10,Z=r},j=(e,t,i)=>{let a=r.nextId;if(a||=64,a<f&&(v&&this.saveStructures||this.shouldShareStructure&&!this.shouldShareStructure(t))){if(v&&this.saveStructures&&(!this.shouldShareStructure||this.shouldShareStructure(t))&&(y||=[]).push(t),!u)return!1;a=r.nextOwnId,a<p||(a=f),r.nextOwnId=a+1}else{if(a>=p){if(!u)return!1;a=f}r.nextId=a+1}let o=t.highByte=a>=96&&d?a-96>>5:-1;e[Pf]=a,e.__keys__=t,r[a-64]=t,a<f?(t.isShared=!0,r.sharedLength=a-63,n=!0,o>=0?(Z[Q++]=(a&31)+96,Z[Q++]=o):Z[Q++]=a):(o>=0?(Z[Q++]=213,Z[Q++]=114,Z[Q++]=(a&31)+96,Z[Q++]=o):(Z[Q++]=212,Z[Q++]=114,Z[Q++]=a),i&&(h+=g*i),m.length>=u&&(m.shift()[Pf]=0),m.push(e),w(t))},ee=(e,n,r,i)=>{let a=Z,o=Q,s=kf,c=t;Z=Df,Q=0,t=0,Z||(Df=Z=new wf(8192)),kf=Z.length-10,j(e,n,i),Df=Z;let l=Q;if(Z=a,Q=o,kf=s,t=c,l>1){let e=Q+l-1;e>kf&&A(e);let n=r+t;Z.copyWithin(n+l,n+1,Q),Z.set(Df.slice(0,l),n),Q=e}else Z[r+t]=Df[0]}}useBuffer(e){Z=e,Z.dataView||(Z.dataView=new DataView(Z.buffer,Z.byteOffset,Z.byteLength)),Of=Z.dataView,Q=0}set position(e){Q=e}get position(){return Q}clearSharedData(){this.structures&&(this.structures=[],this.lastNamedStructuresLength=0),this.typedStructs&&=[]}},If=Date.prototype.toJSON;Sf=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,jd],xf=[{pack(e,t,n){let r=e.getTime()/1e3;if((this.useTimestamp32||e.getMilliseconds()===0)&&r>=0&&r<4294967296){let{target:e,targetView:n,position:i}=t(6);e[i++]=214,e[i++]=255,n.setUint32(i,r)}else if(r>0&&r<17179869184){let{target:n,targetView:i,position:a}=t(10);n[a++]=215,n[a++]=255,i.setUint32(a,e.getMilliseconds()*4e6+(r/4294967296|0)),i.setUint32(a+4,r)}else if(isNaN(r)){if(this.onInvalidDate)return t(0),n(this.onInvalidDate());let{target:e,targetView:r,position:i}=t(3);e[i++]=212,e[i++]=255,e[i++]=255}else{let{target:n,targetView:i,position:a}=t(15);n[a++]=199,n[a++]=12,n[a++]=255,i.setUint32(a,e.getMilliseconds()*1e6),i.setBigInt64(a+4,BigInt(Math.floor(r)))}}},{pack(e,t,n){if(this.setAsEmptyObject)return t(0),n({});let r=Array.from(e),{target:i,position:a}=t(this.moreTypes?3:0);this.moreTypes&&(i[a++]=212,i[a++]=115,i[a++]=0),n(r)}},{pack(e,t,n){let{target:r,position:i}=t(this.moreTypes?3:0);this.moreTypes&&(r[i++]=212,r[i++]=101,r[i++]=0);let a=[e.name,e.message,e.cause];typeof AggregateError==`function`&&e instanceof AggregateError&&a.push(e.errors),n(a)}},{pack(e,t,n){let{target:r,position:i}=t(this.moreTypes?3:0);this.moreTypes&&(r[i++]=212,r[i++]=120,r[i++]=0),n([e.source,e.flags])}},{pack(e,t){this.moreTypes?Rf(e,16,t):zf(e,t)}},{pack(e,t){let n=e.constructor;n!==Tf&&this.moreTypes?Rf(e,df.indexOf(n.name),t):zf(e,t)}},{pack(e,t){this.moreTypes?Rf(e,17,t):zf(e,t)}},{pack(e,t){let{target:n,position:r}=t(1);n[r]=193}}];var Lf=xf.length;function Rf(e,t,n,r){let i=e.byteLength;if(i+1<256){var{target:a,position:o}=n(4+i);a[o++]=199,a[o++]=i+1}else if(i+1<65536){var{target:a,position:o}=n(5+i);a[o++]=200,a[o++]=i+1>>8,a[o++]=i+1&255}else{var{target:a,position:o,targetView:s}=n(7+i);a[o++]=201,s.setUint32(o,i+1),o+=4}a[o++]=116,a[o++]=t,e.buffer||(e=new Uint8Array(e)),a.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),o)}function zf(e,t){e.BYTES_PER_ELEMENT!==1&&(e=e.buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e));let n=e.byteLength;var r,i;if(n<256){var{target:r,position:i}=t(n+2);r[i++]=196,r[i++]=n}else if(n<65536){var{target:r,position:i}=t(n+3);r[i++]=197,r[i++]=n>>8,r[i++]=n&255}else{var{target:r,position:i,targetView:a}=t(n+5);r[i++]=198,a.setUint32(i,n),i+=4}r.set(e,i)}function Bf(e,t,n,r){let i=e.length;switch(i){case 1:t[n++]=212;break;case 2:t[n++]=213;break;case 4:t[n++]=214;break;case 8:t[n++]=215;break;case 16:t[n++]=216;break;default:i<256?(t[n++]=199,t[n++]=i):i<65536?(t[n++]=200,t[n++]=i>>8,t[n++]=i&255):(t[n++]=201,t[n++]=i>>24,t[n++]=i>>16&255,t[n++]=i>>8&255,t[n++]=i&255)}return t[n++]=r,t.set(e,n),n+=i,n}function Vf(e,t){let n,r=t.length*6,i=e.length-r;for(;n=t.pop();){let t=n.offset,a=n.id;e.copyWithin(t+r,t,i),r-=6;let o=t+r;e[o++]=214,e[o++]=105,e[o++]=a>>24,e[o++]=a>>16&255,e[o++]=a>>8&255,e[o++]=a&255,i=t}return e}function Hf(e,t,n){if(Af.length>0){Of.setUint32(Af.position+e,Q+n-Af.position-e),Af.stringsPosition=Q-e;let r=Af;Af=null,t(r[0]),t(r[1])}}function Uf(e,t){return e.isCompatible=e=>{let n=!e||(t.lastNamedStructuresLength||0)===e.length;return n||t._mergeStructures(e),n},e}Ff.SUPPORTS_STRUCT_HOOKS=!0;var Wf=new Ff({useRecords:!1});Wf.pack,Wf.pack;var{NEVER:Gf,ALWAYS:Kf,DECIMAL_ROUND:qf,DECIMAL_FIT:Jf}=yf,Yf=2048,Xf=9,Zf=class{pending=new Uint8Array;push(e){if(!e||e.byteLength===0)return[];let t=this.pending.byteLength===0?e:Qf(this.pending,e),n=[],r=0;for(;r<t.byteLength;){let e={offset:r},i;try{i=qs.number(t,e)}catch(e){if(t.byteLength-r<=Xf)break;throw e}let a=e.offset+i;if(a>t.byteLength)break;n.push(t.subarray(e.offset,a)),r=a}return this.pending=r<t.byteLength?t.slice(r):new Uint8Array,n}};function Qf(e,t){let n=new Uint8Array(e.byteLength+t.byteLength);return n.set(e,0),n.set(t,e.byteLength),n}var $f=class{wt;url;isOpen=!1;events;reader;writer;unreliableReader;unreliableWriter;lengthPrefixBuffer=new Uint8Array(9);reliableReassembler=new Zf;unreliableReassembler=new Zf;constructor(e){this.events=e}connect(e,t={}){this.url=e;let n=t.fingerprint&&{serverCertificateHashes:[{algorithm:`sha-256`,value:new Uint8Array(t.fingerprint)}]}||void 0;this.wt=new WebTransport(e,n),this.wt.ready.then(e=>{console.log(`WebTransport ready!`,e),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader();let n=this.wt.datagrams;this.unreliableWriter=(n.createWritable?n.createWritable():n.writable).getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(e=>{this.reader=e.value.readable.getReader(),this.writer=e.value.writable.getWriter(),this.sendSeatReservation(t.roomId,t.sessionId,t.reconnectionToken,t.skipHandshake),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(e=>{console.error(`failed to read incoming stream`,e),console.error(`TODO: close the connection`)})}).catch(e=>{console.log(`WebTransport not ready!`,e),this._close()}),this.wt.closed.then(e=>{console.log(`WebTransport closed w/ success`,e),this.events.onclose({code:e.closeCode,reason:e.reason})}).catch(e=>{console.log(`WebTransport closed w/ error`,e),this.events.onerror(e),this.events.onclose({code:e.closeCode,reason:e.reason})}).finally(()=>{this._close()})}send(e){this.writer.write(this.frame(e))}sendUnreliable(e){this.unreliableWriter.write(this.frame(e))}frame(e){let t=e instanceof Uint8Array?e:new Uint8Array(e),n=K.number(this.lengthPrefixBuffer,t.length,{offset:0}),r=new Uint8Array(n+t.length);return r.set(this.lengthPrefixBuffer.subarray(0,n),0),r.set(t,n),r}close(e,t){this.isOpen=!1;try{let n=this.wt?.close({closeCode:e,reason:t});n&&typeof n.catch==`function`&&n.catch(()=>{})}catch{}}readIncomingData(){return this.readLoop(this.reader,this.reliableReassembler,`reliable`)}readIncomingUnreliableData(){return this.readLoop(this.unreliableReader,this.unreliableReassembler,`unreliable`)}async readLoop(e,t,n){for(;this.isOpen;){let r;try{r=await e.read()}catch(e){await this.onChannelFailure(n,e);return}if(r.done||!r.value)return;for(let e of t.push(r.value))this.events.onmessage({data:e})}}async onChannelFailure(e,t){await new Promise(e=>setTimeout(e,0)),this.isOpen&&(console.error(`H3Transport: stopped reading the ${e} channel while the session was open`,t),this.close(Co.ABNORMAL_CLOSURE,`h3 ${e} channel failed`))}sendSeatReservation(e,t,n,r){let i={offset:0},a=[];K.string(a,e,i),K.string(a,t,i),n&&K.string(a,n,i),r&&K.boolean(a,1,i),this.writer.write(new Uint8Array(a).buffer)}_close(){this.isOpen=!1}},ep=zt(Lt(((e,t)=>{t.exports=function(){throw Error(`ws does not work in the browser. Browser clients must use the native WebSocket object`)}}))(),1),tp=globalThis.WebSocket||ep.default,np=!1,rp=class{ws;protocols;events;constructor(e){this.events=e}send(e){this.ws.send(e)}sendUnreliable(e){np||(np=!0,console.warn('@colyseus/sdk: the WebSocket transport has no unreliable channel — sending `mode:"unreliable"` traffic reliably instead. Use @colyseus/h3-transport (WebTransport) for datagram delivery.')),this.send(e)}connect(e,t){if(typeof document<`u`)this.ws=new tp(e,this.protocols);else try{this.ws=new tp(e,{headers:t,protocols:this.protocols})}catch{this.ws=new tp(e,this.protocols)}let n=this.ws,r=!1,i=!1,a=e=>{i||(i=!0,this.events.onclose?.(e))};n.binaryType=`arraybuffer`,n.onopen=e=>{r=!0,this.events.onopen?.(e)},n.onmessage=e=>this.events.onmessage?.(e),n.onclose=a,n.onerror=e=>{r||(n.onerror=null,setTimeout(()=>{n.onclose===a&&a({code:Co.ABNORMAL_CLOSURE,reason:``})},0)),this.events.onerror?.(e)}}close(e,t){try{e===Co.MAY_TRY_RECONNECT&&this.events.onclose&&(this.ws.onclose=null,this.events.onclose({code:e,reason:t}))}finally{this.ws.close(e,t)}}get isOpen(){return this.ws.readyState===tp.OPEN}},ip=[],ap=typeof addEventListener==`function`&&typeof removeEventListener==`function`;ap&&addEventListener(`offline`,()=>{console.warn(`@colyseus/sdk: 🛑 Network offline. Closing ${ip.length} connection(s)`),ip.slice().forEach(e=>e())},!1);var op=class{transport;events={};url;options;#e=ap?()=>this.close(Co.MAY_TRY_RECONNECT):null;constructor(e){switch(e){case`h3`:this.transport=new $f(this.events);break;default:this.transport=new rp(this.events)}}connect(e,t){if(ap){let e=this.events.onopen;this.events.onopen=t=>{ip.push(this.#e),e?.(t)};let t=this.events.onclose;this.events.onclose=e=>{let n=ip.indexOf(this.#e);n!==-1&&ip.splice(n,1),t?.(e)}}this.url=e,this.options=t,this.transport.connect(e,t)}send(e){this.transport.send(e)}sendUnreliable(e){this.transport.sendUnreliable(e)}reconnect(e){if(this.transport instanceof $f){this.transport.connect(this.url,{...this.options,...e});return}let t=new URL(this.url);for(let n in e)t.searchParams.set(n,e[n]);this.transport.connect(t.toString(),this.options)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}},sp={};function cp(e,t){sp[e]=t}function lp(e){let t=sp[e];if(!t)throw Error(`missing serializer: `+e);return t}var up=()=>({emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e](...t)},events:{},on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}}),dp=new WeakMap,fp=class{handlers=[];register(e,t=!1){return this.handlers.push(e),this}invoke(...e){let t=this.handlers,n=!1,r;for(let i=0,a=t.length;i<a;i++)try{t[i].apply(this,e)}catch(e){n||(n=!0,r=e)}if(n)throw r}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){let t=this.handlers.indexOf(e);t===-1&&(t=this.handlers.findIndex(t=>dp.get(t)===e)),t!==-1&&(this.handlers=this.handlers.filter((e,n)=>n!==t))}clear(){this.handlers=[]}};function pp(){let e=new fp;function t(t){return e.register(t,this===null)}return t.once=t=>{let n=function(...r){e.remove(n),t.apply(this,r)};dp.set(n,t),e.register(n)},t.remove=t=>e.remove(t),t.invoke=(...t)=>e.invoke(...t),t.invokeAsync=(...t)=>e.invokeAsync(...t),t.clear=()=>e.clear(),t}var mp=class{state;decoder;setState(e,t){this.decoder.root.refs.size>1&&typeof this.decoder.decodeResync==`function`?this.decoder.decodeResync(e,t):this.decoder.decode(e,t)}getState(){return this.state}patch(e,t){return this.decoder.decode(e,t)}teardown(){this.decoder.root.clearRefs()}handshake(e,t){this.state?(Zu.decode(e,t),this.decoder=new qu(this.state)):(this.decoder=Zu.decode(e,t),this.state=this.decoder.state)}};function hp(){return{enabled:!0,retryCount:0,maxRetries:15,delay:100,minDelay:100,maxDelay:5e3,minUptime:5e3,backoff:gp,maxEnqueuedMessages:10,enqueuedMessages:[],isReconnecting:!1}}var gp=(e,t)=>Math.floor(2**e*t);function _p(e,t){e.reconnection.enqueuedMessages.push({data:t}),e.reconnection.enqueuedMessages.length>e.reconnection.maxEnqueuedMessages&&e.reconnection.enqueuedMessages.shift()}function vp(e,t){if(!t){let t=Error(`request rejected`);return t.name=`rejected`,t.reason=e,t}let n=Error(e?.message??`request failed`);return e?.name&&(n.name=e.name),e?.code!==void 0&&(n.code=e.code),n}var yp=class e{roomId;sessionId;reconnectionToken;name;connection;onStateChange=pp();onError=pp();onLeave=pp();onReconnect=pp();onDrop=pp();onJoin=pp();serializerId;serializer;reconnection=hp();joinedAtTime=0;clock=pd;onMessageHandlers=up();packr;sharedBuffer;#e=0;#t=void 0;static defaultRequestTimeout=1e4;#n=0;#r=new Map;#i;#a=0;retryTimeout=void 0;leaving=!1;leaveCode=void 0;constructor(e,t){if(this.name=e,this.packr=new Ff,this.sharedBuffer=new Uint8Array(8192),t){let e=new(lp(`schema`));this.serializer=e;let n=new t;e.state=n,e.decoder=new qu(n)}this.onLeave(()=>{this.removeAllListeners(),this.destroy()})}connect(e,t,n){this.connection=new op(t.protocol),this.connection.events.onmessage=this.onMessageCallback.bind(this),this.connection.events.onclose=e=>{if(this.#c(`connection closed before a response was received.`),this.leaveCode===void 0){if(this.joinedAtTime===0){console.warn?.(`Room connection was closed unexpectedly (${e.code}): ${e.reason}`);try{this.onError.invoke(e.code,e.reason)}finally{this.leaving&&this.finish(Co.CONSENTED)}}else if(e.code===Co.NO_STATUS_RECEIVED||e.code===Co.ABNORMAL_CLOSURE||e.code===Co.GOING_AWAY||e.code===Co.MAY_TRY_RECONNECT){if(this.leaving){this.finish(Co.CONSENTED);return}try{this.onDrop.invoke(e.code,e.reason)}finally{this.handleReconnection(e.code,e.reason)}}else this.finish(e.code,e.reason)}},this.connection.events.onerror=e=>{this.onError.invoke(e.code,e.reason)};let r=this.serializer?.getState()!==void 0;if(t.protocol===`h3`){let n=new URL(e);this.connection.connect(n.origin,{...t,skipHandshake:r})}else this.connection.connect(`${e}${r?`&skipHandshake=1`:``}`,n)}leave(e=!0){return this.leaveCode===void 0?new Promise(t=>{if(this.onLeave(e=>{Promise.resolve(e).then(t)}),!this.connection)this.finish(Co.CONSENTED);else if(!e)this.connection.close();else if(this.leaving=!0,this.reconnection.isReconnecting)try{this.finish(Co.CONSENTED)}finally{this.connection.close()}else this.connection.isOpen&&(this.sharedBuffer[0]=vo.LEAVE_ROOM,this.connection.send(this.sharedBuffer.subarray(0,1)))}):Promise.resolve(this.leaveCode)}finish(e,t){this.leaveCode===void 0&&(this.leaveCode=e,clearTimeout(this.retryTimeout),this.reconnection.isReconnecting=!1,this.onLeave.invoke(e,t))}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}ping(e){this.connection?.isOpen&&(this.#e=td(),this.#t=e,this.sharedBuffer[0]=vo.PING,this.connection.send(this.sharedBuffer.subarray(0,1)))}send(e,t,n){if(n!==void 0){this.request(e,t).then(e=>n(e,void 0),e=>n(void 0,e));return}let r={offset:1};this.sharedBuffer[0]=vo.ROOM_DATA,typeof e==`string`?K.string(this.sharedBuffer,e,r):K.number(this.sharedBuffer,e,r);let i=r.offset,a;t===void 0?a=this.sharedBuffer.subarray(0,i):(a=this.packr.pack(t,Yf|i),a.set(this.sharedBuffer.subarray(0,i),0)),this.connection.isOpen?this.connection.send(a):_p(this,new Uint8Array(a))}request(t,n,r){if(!this.connection.isOpen)return Promise.reject(Error(`cannot send request "${t}": connection is not open.`));let i=r?.timeout??e.defaultRequestTimeout;return new Promise((e,a)=>{let o,s=this.sendRequest(t,n,{mode:r?.mode},(t,n,r)=>{clearTimeout(o),t?e(n):a(vp(n,r))},e=>{clearTimeout(o),a(Error(e))});o=setTimeout(()=>{this.cancelRequest(s),a(Error(`request "${t}" timed out after ${i}ms.`))},i)})}#o(){let e=this.#n;return this.#n=this.#n+1>>>0,e}#s(e,t,n){let r={offset:1};this.sharedBuffer[0]=vo.ROOM_REQUEST,K.number(this.sharedBuffer,e,r),typeof t==`string`?K.string(this.sharedBuffer,t,r):K.number(this.sharedBuffer,t,r);let i=r.offset;if(n!==void 0){let e=this.packr.pack(n,Yf|i);return e.set(this.sharedBuffer.subarray(0,i),0),e}return this.sharedBuffer.subarray(0,i)}sendRequest(e,t,n,r,i){let a=this.#o(),o=this.#s(a,e,t);if(n.mode===`unreliable`){if(!this.connection.isOpen)return-1;this.connection.sendUnreliable(o)}else this.connection.isOpen?this.connection.send(o):_p(this,new Uint8Array(o));return this.#r.set(a,{onReply:r,onClose:i}),a}cancelRequest(e){this.#r.delete(e)}#c(e){if(this.#r.size!==0){for(let t of this.#r.values())t.onClose?.(e);this.#r.clear()}}sendUnreliable(e,t){if(!this.connection.isOpen)return;let n={offset:1};this.sharedBuffer[0]=vo.ROOM_DATA,typeof e==`string`?K.string(this.sharedBuffer,e,n):K.number(this.sharedBuffer,e,n);let r=n.offset,i;t===void 0?i=this.sharedBuffer.subarray(0,r):(i=this.packr.pack(t,Yf|r),i.set(this.sharedBuffer.subarray(0,r),0)),this.connection.sendUnreliable(i)}sendBytes(e,t){let n={offset:1};this.sharedBuffer[0]=vo.ROOM_DATA_BYTES,typeof e==`string`?K.string(this.sharedBuffer,e,n):K.number(this.sharedBuffer,e,n);let r=n.offset;if(r+t.byteLength>this.sharedBuffer.byteLength){let e=new Uint8Array(r+t.byteLength);e.set(this.sharedBuffer.subarray(0,r)),this.sharedBuffer=e}this.sharedBuffer.set(t,r),this.connection.isOpen?this.connection.send(this.sharedBuffer.subarray(0,r+t.byteLength)):_p(this,this.sharedBuffer.subarray(0,r+t.byteLength))}input(e){return(this.#i??=new hd(this)).handle(e)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onReconnect.clear(),this.onDrop.clear(),this.onMessageHandlers.events={},this.serializer instanceof mp&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(e){this.leaveCode===void 0&&this.#l(new Uint8Array(e.data))}#l(e){let t={offset:1},n=e[0],r=n&31;if(n&yo.TIMED){let n=qs.uint32(e,t),r=qs.uint32(e,t),i=this.#i?this.#i.ackInput(r):-1;this.clock.sample(n,i)}if(r===vo.JOIN_ROOM){let n=qs.utf8Read(e,t,e[t.offset++]);if(this.serializerId=qs.utf8Read(e,t,e[t.offset++]),!this.serializer){let e=lp(this.serializerId);this.serializer=new e}let r=qs.number(e,t);if(r>0&&this.serializer.handshake){let n=t.offset+r;this.serializer.handshake(e.subarray(0,n),t),t.offset=n}for(;t.offset<e.byteLength;){let n=e[t.offset++],r=qs.number(e,t),i=t.offset+r;n===xo.INPUT_REFLECTION?(this.#i??=new hd(this)).applyReflection(e,t,i):n===xo.INPUT_OPTIONS&&(this.#i??=new hd(this)).applyOptions(e,t),t.offset=i}let i=this.#i?.patchRate;i!==void 0&&this.clock.setPatchInterval?.(i);try{this.joinedAtTime===0?(this.joinedAtTime=Date.now(),this.onJoin.invoke()):(console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9989)} reconnection successful!`),this.reconnection.isReconnecting=!1,this.onReconnect.invoke())}finally{if(this.reconnectionToken=`${this.roomId}:${n}`,this.sharedBuffer[0]=vo.JOIN_ROOM,this.connection.send(this.sharedBuffer.subarray(0,1)),this.reconnection.enqueuedMessages.length>0){for(let e of this.reconnection.enqueuedMessages)this.connection.send(e.data);this.reconnection.enqueuedMessages=[]}this.leaving&&this.leave()}}else if(r===vo.ERROR){let n=qs.number(e,t),r=qs.string(e,t);this.onError.invoke(n,r)}else if(r===vo.LEAVE_ROOM)this.leave();else if(r===vo.ROOM_STATE)this.#a=0,this.serializer.setState(e,t),this.onStateChange.invoke(this.serializer.getState());else if(r===vo.ROOM_STATE_PATCH){if(n&yo.UNRELIABLE){let n=qs.uint16(e,t);if(n-this.#a<<16>>16<=0)return;this.#a=n}this.serializer.patch(e,t),this.onStateChange.invoke(this.serializer.getState())}else if(r===vo.ROOM_DATA){let n=qs.stringCheck(e,t)?qs.string(e,t):qs.number(e,t),r=e.byteLength>t.offset?vf(e,{start:t.offset}):void 0;this.dispatchMessage(n,r)}else if(r===vo.ROOM_DATA_BYTES){let n=qs.stringCheck(e,t)?qs.string(e,t):qs.number(e,t);this.dispatchMessage(n,e.subarray(t.offset))}else if(r===vo.ROOM_RESPONSE){let n=qs.number(e,t),r=e[t.offset++],i=e.byteLength>t.offset?vf(e,{start:t.offset}):void 0,a=this.#r.get(n);a!==void 0&&(this.#r.delete(n),a.onReply(r===bo.OK,i,r===bo.ERROR))}else r===vo.PING&&(this.#t?.(Math.round(td()-this.#e)),this.#t=void 0)}dispatchMessage(e,t){let n=this.getMessageHandlerKey(e);this.onMessageHandlers.events[n]?this.onMessageHandlers.emit(n,t):this.onMessageHandlers.events[`*`]?this.onMessageHandlers.emit(`*`,e,t):n.startsWith(`__`)||console.warn?.(`@colyseus/sdk: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case`string`:return e;case`number`:return`i${e}`;default:throw Error(`invalid message type.`)}}handleReconnection(e,t){this.leaving?this.finish(Co.CONSENTED):this.reconnection.enabled?Date.now()-this.joinedAtTime<this.reconnection.minUptime?(console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} Room has not been up for long enough for automatic reconnection. (min uptime: ${this.reconnection.minUptime}ms)`),this.finish(Co.ABNORMAL_CLOSURE,`Room uptime too short for reconnection.`)):(this.reconnection.isReconnecting||(this.reconnection.retryCount=0,this.reconnection.isReconnecting=!0,this.#i?.reset()),this.retryReconnection()):this.finish(e,t)}retryReconnection(){if(this.reconnection.retryCount>=this.reconnection.maxRetries){console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} ❌ Reconnection failed after ${this.reconnection.maxRetries} attempts.`),this.finish(Co.FAILED_TO_RECONNECT,`No more retries. Reconnection failed.`);return}this.reconnection.retryCount++;let e=Math.min(this.reconnection.maxDelay,Math.max(this.reconnection.minDelay,this.reconnection.backoff(this.reconnection.retryCount,this.reconnection.delay)));console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9203)} will retry in ${(e/1e3).toFixed(1)} seconds...`),this.retryTimeout=setTimeout(()=>{try{console.info(`[Colyseus reconnection]: ${String.fromCodePoint(128260)} Re-establishing sessionId '${this.sessionId}' with roomId '${this.roomId}'... (attempt ${this.reconnection.retryCount} of ${this.reconnection.maxRetries})`),this.connection.reconnect({reconnectionToken:this.reconnectionToken.split(`:`)[1],skipHandshake:!0})}catch{this.retryReconnection()}},e)}};function bp(e,t){return new Promise((n,r)=>{let i=new XMLHttpRequest,a=t?.method||`GET`;i.open(a,e.toString()),i.withCredentials=t?.credentials===`include`,t?.headers&&(t.headers instanceof Headers?t.headers:new Headers(t.headers)).forEach((e,t)=>{i.setRequestHeader(t,e)}),i.onload=()=>{let e=new Headers,t=i.getAllResponseHeaders().trim();if(t)for(let n of t.split(/[\r\n]+/)){let t=n.indexOf(`: `);t>0&&e.append(n.substring(0,t),n.substring(t+2))}n(new xp(i.response??i.responseText,{status:i.status,statusText:i.statusText,headers:e}))},i.onerror=()=>r(TypeError(`Network request failed`)),i.ontimeout=()=>r(TypeError(`Network request timed out`)),i.send(t?.body??null)})}var xp=class{status;statusText;headers;ok;body;constructor(e,t){this.body=e,this.status=t.status,this.statusText=t.statusText,this.headers=t.headers,this.ok=t.status>=200&&t.status<300}async json(){return typeof this.body==`string`?JSON.parse(this.body):this.body}async text(){return typeof this.body==`string`?this.body:JSON.stringify(this.body)}async blob(){return new Blob([this.body])}};function Sp(e){if(e===void 0)return!1;let t=typeof e;return t===`string`||t===`number`||t===`boolean`||t===null?!0:t===`object`?Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name===`Object`||typeof e.toJSON==`function`:!1}function Cp(e,t){let{params:n,query:r}=t||{},[i,a]=e.split(`?`),o=i;if(n){if(Array.isArray(n)){let e=o.split(`/`).filter(e=>e.startsWith(`:`));for(let[t,r]of e.entries()){let e=n[t];o=o.replace(r,e)}}else for(let[e,t]of Object.entries(n))o=o.replace(`:${e}`,String(t))}let s=new URLSearchParams(a);if(r)for(let[e,t]of Object.entries(r))t!=null&&s.set(e,String(t));let c=s.toString();return c=c.length>0?`?${c}`.replace(/\+/g,`%20`):``,`${o}${c}`}var wp=class{authToken;options;sdk;_fetchFn;del=this.delete;constructor(e,t,n){this.sdk=e,this.options=t,this._fetchFn=n}get fetchFn(){return this._fetchFn||=globalThis.fetch===void 0?bp:globalThis.fetch.bind(globalThis),this._fetchFn}async request(e,t,n){return this.executeRequest(e,t,n)}get(e,t){return this.request(`GET`,e,t)}post(e,t){return this.request(`POST`,e,t)}delete(e,t){return this.request(`DELETE`,e,t)}patch(e,t){return this.request(`PATCH`,e,t)}put(e,t){return this.request(`PUT`,e,t)}async executeRequest(e,t,n){let r=this.options.body?{...this.options.body,...n?.body||{}}:n?.body,i=this.options.query?{...this.options.query,...n?.query||{}}:n?.query,a=this.options.params?{...this.options.params,...n?.params||{}}:n?.params,o=new Headers(this.options.headers?{...this.options.headers,...n?.headers||{}}:n?.headers);if(this.authToken&&!o.has(`authorization`)&&o.set(`authorization`,`Bearer ${this.authToken}`),Sp(r)&&typeof r==`object`&&r){o.has(`content-type`)||o.set(`content-type`,`application/json`);for(let[e,t]of Object.entries(r))t instanceof Date&&(r[e]=t.toISOString());r=JSON.stringify(r)}let s={credentials:n?.credentials||`include`,...this.options,...n,query:i,params:a,headers:o,body:r,method:e},c=Cp(this.sdk.getHttpEndpoint(t.toString()),s),l;try{l=await this.fetchFn(c,s)}catch(e){if(e.name===`AbortError`)throw e;let t=new wo(e.cause?.code||e.code,e.message);throw t.response=l,t.cause=e.cause,t}let u=l.headers.get(`content-type`),d;if(d=u?.includes(`json`)?await l.json():u?.includes(`text`)?await l.text():await l.blob(),!l.ok)throw new wo(l.status,d.message??d.error??l.statusText,{headers:l.headers,status:l.status,response:l,data:d});return{raw:l,data:d,headers:l.headers,status:l.status,statusText:l.statusText}}},Tp;function Ep(){if(!Tp)try{Tp=typeof cc<`u`&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!Tp&&globalThis.indexedDB!==void 0&&(Tp=new Ap),Tp||={cache:{},setItem:function(e,t){this.cache[e]=t},getItem:function(e){return this.cache[e]},removeItem:function(e){delete this.cache[e]}},Tp}function Dp(e,t){Ep().setItem(e,t)}function Op(e){Ep().removeItem(e)}function kp(e,t){let n=Ep().getItem(e);typeof Promise>`u`||!(n instanceof Promise)?t(n):n.then(e=>t(e))}var Ap=class{dbPromise=new Promise(e=>{let t=indexedDB.open(`_colyseus_storage`,1);t.onupgradeneeded=()=>t.result.createObjectStore(`store`),t.onsuccess=()=>e(t.result)});async tx(e,t){return t((await this.dbPromise).transaction(`store`,e).objectStore(`store`))}setItem(e,t){return this.tx(`readwrite`,n=>n.put(t,e)).then()}async getItem(e){let t=await this.tx(`readonly`,t=>t.get(e));return new Promise(e=>{t.onsuccess=()=>e(t.result)})}removeItem(e){return this.tx(`readwrite`,t=>t.delete(e)).then()}},jp=class{settings={path:`/auth`,key:`colyseus-auth-token`};#e=!1;#t=null;#n=up();http;constructor(e){this.http=e,kp(this.settings.key,e=>this.token=e)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){let t=this.#n.on(`change`,e);return this.#e||this.getUserData().then(e=>{this.emitChange({...e,token:this.token})}).catch(e=>{this.emitChange({user:null,token:void 0})}),this.#e=!0,t}async getUserData(){if(this.token)return(await this.http.get(`${this.settings.path}/userdata`)).data;throw Error(`missing auth.token`)}async registerWithEmailAndPassword(e,t,n){let r=(await this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:n}})).data;return this.emitChange(r),r}async signInWithEmailAndPassword(e,t){let n=(await this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(n),n}async signInAnonymously(e){let t=(await this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t}async sendPasswordResetEmail(e){return(await this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data}async signInWithProvider(e,t={}){return new Promise((n,r)=>{let i=t.width||480,a=t.height||768,o=this.token?`?token=${this.token}`:``,s=`Login with ${e[0].toUpperCase()+e.substring(1)}`,c=this.http.sdk.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${o}`),l=screen.width/2-i/2,u=screen.height/2-a/2;this.#t=window.open(c,s,`toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=`+i+`, height=`+a+`, top=`+u+`, left=`+l);let d=e=>{if(e.data.user!==void 0||e.data.token!==void 0){if(clearInterval(f),this.#t?.close(),this.#t=null,window.removeEventListener(`message`,d),e.data.error!==void 0){let t=Error(String(e.data.error));t.code=e.data.error,e.data.reason!==void 0&&(t.reason=e.data.reason),e.data.until!==void 0&&(t.until=e.data.until),r(t)}else n(e.data),this.emitChange(e.data)}},f=setInterval(()=>{(!this.#t||this.#t.closed)&&(this.#t=null,r(`cancelled`),window.removeEventListener(`message`,d))},200);window.addEventListener(`message`,d)})}async signOut(){this.emitChange({user:null,token:null})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?Op(this.settings.key):Dp(this.settings.key,e.token)),this.#n.emit(`change`,e)}};function Mp(e){let t=window?.location?.hostname||`localhost`,n=e.hostname.split(`.`),r=!e.hostname.includes(`trycloudflare.com`)&&!e.hostname.includes(`discordsays.com`)&&n.length>2?`/${n[0]}`:``;return e.pathname.startsWith(`/.proxy`)?`${e.protocol}//${t}${r}${e.pathname}${e.search}`:`${e.protocol}//${t}/.proxy/colyseus${r}${e.pathname}${e.search}`}var Np=typeof window<`u`&&window?.location?.hostname!==void 0?`${window.location.protocol.replace(`http`,`ws`)}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:`ws://127.0.0.1:2567`,Pp=class e{static VERSION=`0.18`;http;auth;settings;urlBuilder;constructor(e=Np,t){if(typeof e==`string`){let t=e.startsWith(`/`)?new URL(e,Np):new URL(e),n=t.protocol===`https:`||t.protocol===`wss:`,r=Number(t.port||(n?443:80));this.settings={hostname:t.hostname,pathname:t.pathname,port:r,secure:n,searchParams:t.searchParams.toString()||void 0}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=``),this.settings=e;this.settings.pathname.endsWith(`/`)&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),t?.protocol&&(this.settings.protocol=t.protocol),this.http=new wp(this,{headers:t?.headers||{}},t?.fetchFn),this.auth=new jp(this.http),this.urlBuilder=t?.urlBuilder,!this.urlBuilder&&typeof window<`u`&&window?.location?.hostname?.includes(`discordsays.com`)&&(this.urlBuilder=Mp,console.log(`Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.`))}static async selectByLatency(t,n,r={}){let i=t.map(t=>new e(t,n)),a=(await Promise.allSettled(i.map((e,t)=>e.getLatency(r).then(e=>{let n=i[t].settings;return console.log(`🛜 Endpoint Latency: ${e}ms - ${n.hostname}:${n.port}${n.pathname}`),[t,e]})))).filter(e=>e.status===`fulfilled`).map(e=>e.value);if(a.length===0)throw Error(`All endpoints failed to respond`);return i[a.sort((e,t)=>e[1]-t[1])[0][0]]}async joinOrCreate(e,t={},n){return await this.createMatchMakeRequest(`joinOrCreate`,e,t,n)}async create(e,t={},n){return await this.createMatchMakeRequest(`create`,e,t,n)}async join(e,t={},n){return await this.createMatchMakeRequest(`join`,e,t,n)}async joinById(e,t={},n){return await this.createMatchMakeRequest(`joinById`,e,t,n)}async reconnect(e,t){if(typeof e==`string`&&typeof t==`string`)throw Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");let[n,r]=e.split(`:`);if(!n||!r)throw Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return await this.createMatchMakeRequest(`reconnect`,n,{reconnectionToken:r},t)}async consumeSeatReservation(e,t){let n=this.createRoom(e.name,t);n.roomId=e.roomId,n.sessionId=e.sessionId;let r={sessionId:n.sessionId};return e.reconnectionToken&&(r.reconnectionToken=e.reconnectionToken),n.connect(this.buildEndpoint(e,r),{...e,protocol:this.settings.protocol},this.http.options.headers),new Promise((e,t)=>{let r=(e,n)=>t(new wo(e,n));n.onError.once(r),n.onJoin.once(()=>{n.onError.remove(r),ad(`room`,n),e(n)})})}getLatency(e={}){let t=e.protocol??`ws`,n=e.pingCount??1,r=e.timeout??1500;return new Promise((e,i)=>{let a=new op(t),o=[],s=0,c=!1,l,u=e=>{if(!c){c=!0,clearTimeout(l);try{a.close()}catch{}e()}},d=e=>u(()=>i(new wo(Co.ABNORMAL_CLOSURE,`Failed to get latency: ${e}`)));l=setTimeout(()=>d(`timed out after ${r}ms`),r),a.events.onopen=()=>{s=Date.now(),a.send(new Uint8Array([vo.PING]))},a.events.onmessage=t=>{if(o.push(Date.now()-s),o.length<n)s=Date.now(),a.send(new Uint8Array([vo.PING]));else{let t=o.reduce((e,t)=>e+t,0)/o.length;u(()=>e(t))}},a.events.onclose=e=>d(`connection closed${e?.code?` (${e.code})`:``}${e?.reason?`: ${e.reason}`:``}`),a.events.onerror=e=>d(e.message);try{a.connect(this.getHttpEndpoint())}catch(e){d(e?.message??`failed to connect`)}})}async createMatchMakeRequest(e,t,n={},r){try{if(!t)throw Error(`Must provide a room name`);let i=(await this.http.post(`/matchmake/${e}/${t}`,{headers:{Accept:`application/json`,"Content-Type":`application/json`},body:n})).data;return e===`reconnect`&&(i.reconnectionToken=n.reconnectionToken),await this.consumeSeatReservation(i,r)}catch(e){throw e instanceof wo?new To(e.message,e.code):e}}createRoom(e,t){return new yp(e,t)}buildEndpoint(e,t={}){let n=this.settings.protocol||`ws`,r=this.settings.searchParams||``;this.http.authToken&&(t._authToken=this.http.authToken);for(let e in t)t.hasOwnProperty(e)&&(r+=(r?`&`:``)+`${e}=${t[e]}`);n===`h3`&&(n=`http`);let i=this.settings.secure?`${n}s://`:`${n}://`;e.publicAddress?i+=`${e.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;let a=`${i}/${e.processId}/${e.roomId}?${r}`;return this.urlBuilder?this.urlBuilder(new URL(a)):a}getHttpEndpoint(e=``){let t=e.startsWith(`/`)?e:`/${e}`,n=`${this.settings.secure?`https`:`http`}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.settings.searchParams&&(n+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:``}},Fp=class{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}};cp(`schema`,mp),cp(`none`,Fp);var Ip=`wss://collysio-server-qec8.onrender.com`;function Lp(){return Ip}function Rp(){return Lp().replace(/^ws/,`http`).replace(/\/$/,``)}var zp=`collysio.token`,Bp=class extends Error{status;constructor(e,t){super(t),this.status=e}};function Vp(){try{return localStorage.getItem(zp)}catch{return null}}function Hp(e){try{localStorage.setItem(zp,e)}catch{}}function Up(e,t){Hp(e);try{let e=JSON.parse(localStorage.getItem(`collysio.look`)??`{}`)??{};localStorage.setItem(`collysio.look`,JSON.stringify({...e,...t.look,name:t.name})),localStorage.setItem(`collysio.xp`,String(t.xp))}catch{}Xp(t)}function Wp(){try{localStorage.removeItem(zp),localStorage.removeItem(`collysio.xp`),localStorage.removeItem(`collysio.look`)}catch{}Xp(null)}async function Gp(e,t={}){let n=new AbortController,r=setTimeout(()=>n.abort(),t.timeoutMs??15e3),i={},a=Vp();a&&(i.authorization=`Bearer ${a}`),t.body!==void 0&&(i[`content-type`]=`application/json`);try{let r=await fetch(`${Rp()}/api${e}`,{method:t.method??(t.body===void 0?`GET`:`POST`),headers:i,body:t.body===void 0?void 0:JSON.stringify(t.body),signal:n.signal}),a=await r.json().catch(()=>({}));if(!r.ok)throw new Bp(r.status,a.error??`Erreur du serveur.`);return a}catch(e){throw e instanceof Bp?e:new Bp(0,`L'Olympe ne répond pas (serveur endormi ?). Réessaie dans un instant.`)}finally{clearTimeout(r)}}var Kp=null,qp=new Set,Jp=()=>Kp;function Yp(e){return qp.add(e),e(Kp),()=>qp.delete(e)}function Xp(e){Kp=e;for(let t of qp)t(e)}async function Zp(){if(!Vp())return null;try{Xp(await Gp(`/me`))}catch{}return Kp}function Qp(){let e={};try{e=JSON.parse(localStorage.getItem(`collysio.look`)??`{}`)??{}}catch{}return $p(e.name??``,e)}async function $p(e,t){try{if(Vp())try{return Xp(await Gp(`/me`)),Kp}catch(e){if(!(e instanceof Bp)||e.status!==401)throw e}let n=await Gp(`/auth/guest`,{body:{name:e,look:t}});return Hp(n.token),Xp(n.profile),Kp}catch{return null}}var em=()=>new Pp(Lp());async function tm(e=8e3){let t=new AbortController,n=setTimeout(()=>t.abort(),e);try{return(await fetch(`${Rp()}/health`,{signal:t.signal,cache:`no-store`})).ok}catch{return!1}finally{clearTimeout(n)}}function nm(e,t,n){return new Promise((r,i)=>{let a=!1,o=setTimeout(()=>{a=!0,i(Error(`délai dépassé`))},t);e.then(e=>a?n?.(e):(clearTimeout(o),r(e)),e=>a?void 0:(clearTimeout(o),i(e)))})}function rm(e,t){let n=null,r=``,i=0,a=()=>{let e=Math.min(3e4,3e3*2**Math.min(i,4));i++,t.onStatus(i>1?`offline`:`connecting`),setTimeout(o,e)};async function o(){t.onStatus(`connecting`);try{let o=await nm(em().joinOrCreate(`hall`,{...e,token:Vp()}),15e3,e=>e.leave());n=o,i=0,r=o.sessionId,o.onMessage(`welcome`,e=>r=e.id),o.onMessage(`snapshot`,e=>t.onSnapshot(e,r)),o.onMessage(`chat`,e=>t.onChat(e.id,e.text)),o.onMessage(`left`,e=>t.onLeft(e)),o.onMessage(`jump`,e=>t.onJump?.(e)),o.onDrop(()=>t.onStatus(`connecting`)),o.onReconnect(()=>t.onStatus(`online`)),o.onLeave(()=>{n=null,a()}),t.onStatus(`online`)}catch(e){console.info(`[collysio] serveur injoignable, mode solo en attendant.`,e),a()}}return o(),{online:()=>!!n,id:()=>r,sendMove:(e,t,r,i=`hall`)=>n?.send(`move`,{x:e,z:t,rot:r,zone:i}),sendChat:e=>n?.send(`chat`,e),sendJump:()=>n?.send(`jump`),sendLook:()=>n?.send(`look`)}}var im={echecs:`Échecs de l'Olympe`,dedale:`Labyrinthe de Dédale`,honneur:`Champ d'Honneur`,chars:`Course des Chars`,titans:`Arène des Titans`},am=Object.keys(im),om={neutre:{id:`neutre`,name:`Errants`,ref:`Sans monde ni époque`,blurb:`La tenue de ceux qui viennent de franchir une porte : rien qui dise d'où l'on vient.`,colors:[`#c9b48a`,`#8a5a2b`,`#e8d6a8`],season:0},olympe:{id:`olympe`,name:`Olympe`,ref:`Grèce classique et Rome impériale`,blurb:`Les hôtes du Colisée : bronze, marbre et pourpre.`,colors:[`#ffc83d`,`#7b1fa2`,`#f2f0ea`],season:1},kemet:{id:`kemet`,name:`Kemet`,ref:`Égypte du Nouvel Empire`,blurb:`La Terre noire du Nil : lin blanc, or et bleu égyptien.`,colors:[`#2bb3a8`,`#1f4fa3`,`#efe9da`],season:2},anahuac:{id:`anahuac`,name:`Anahuac`,ref:`Mexicas de Tenochtitlan`,blurb:`La cité sur le lac : turquoise, cochenille et coton blanc.`,colors:[`#e0457b`,`#2aa7b8`,`#f1ead8`],season:3},yamato:{id:`yamato`,name:`Yamato`,ref:`Japon de l'époque Sengoku`,blurb:`Le pays en guerre : laque noire, indigo et vermillon.`,colors:[`#e8573a`,`#23466e`,`#1a1614`],season:4}},sm=Object.keys(om),cm={1:{name:`La Nuit sans aube`,family:`olympe`},2:{name:`La porte du Nil`,family:`kemet`},3:{name:`La porte du Lac`,family:`anahuac`},4:{name:`La porte du Levant`,family:`yamato`}},lm={tete:{name:`Tête`,plural:`Têtes`},corps:{name:`Tenue`,plural:`Tenues`},bras:{name:`Bras`,plural:`Bras`},jambes:{name:`Jambes`,plural:`Jambes`},livree:{name:`Livrée`,plural:`Livrées`},arme:{name:`Arme`,plural:`Armes`},main:{name:`Main gauche`,plural:`Main gauche`},cape:{name:`Cape`,plural:`Capes`},titre:{name:`Titre`,plural:`Titres`},skin:{name:`Skin de jeu`,plural:`Skins de jeu`}},um=Object.keys(lm),dm={tunic:`cape`,helmet:`tete`,head:`tete`,title:`titre`,skin:`skin`,body:`corps`,arms:`bras`,legs:`jambes`,livery:`livree`,weapon:`arme`,offhand:`main`},fm={commun:{name:`Commun`,color:`#cdbf9f`},rare:{name:`Rare`,color:`#4fc3ff`},epique:{name:`Épique`,color:`#c79bff`},legendaire:{name:`Légendaire`,color:`#ffc83d`},mythique:{name:`Mythique`,color:`#ff7a52`}};Object.keys(fm);function $(e){let t=e.obtain;return{...e,slot:dm[e.kind],rarity:e.rarity??`commun`,price:t.by===`achat`?t.price:0,...t.by===`trophee`?{trophy:{wins:t.wins}}:{}}}var pm=e=>$({...e,value:``,obtain:{by:`offert`},soon:!0}),mm=[$({id:`cape-azur`,kind:`tunic`,family:`neutre`,name:`Azur`,value:`#3fa9f5`,desc:`Le bleu des arrivants.`,obtain:{by:`offert`}}),$({id:`cape-garance`,kind:`tunic`,family:`neutre`,name:`Garance`,value:`#c93b3b`,desc:`Un rouge de racine, franc et solide.`,obtain:{by:`offert`}}),$({id:`cape-violette`,kind:`tunic`,family:`neutre`,name:`Violette`,value:`#7b4fd6`,desc:`Teinte de baies sauvages.`,obtain:{by:`offert`}}),$({id:`cape-sapin`,kind:`tunic`,family:`neutre`,name:`Sapin`,value:`#2e8b57`,desc:`Vert des sous-bois.`,obtain:{by:`offert`}}),$({id:`cape-braise`,kind:`tunic`,family:`neutre`,name:`Braise`,value:`#f06b3c`,desc:`L'orange des torches du hall.`,obtain:{by:`offert`}}),$({id:`cape-sable`,kind:`tunic`,family:`neutre`,name:`Sable`,value:`#e8d6a8`,desc:`La couleur de l'arène.`,obtain:{by:`offert`}}),$({id:`cape-nuit`,kind:`tunic`,family:`neutre`,name:`Nuit`,value:`#3b43a8`,desc:`Le ciel au-dessus du Colisée.`,obtain:{by:`offert`}}),$({id:`cape-terre`,kind:`tunic`,family:`neutre`,name:`Terre`,value:`#8a5a2b`,desc:`Brun de route, il ne craint pas la poussière.`,obtain:{by:`offert`}}),$({id:`corps-chevalier`,kind:`body`,family:`neutre`,name:`Harnois de chevalier`,value:`Knight`,desc:`Plates d'acier. Sans autre choix de tête : avec son heaume.`,obtain:{by:`offert`},render:{body:`Knight`}}),$({id:`corps-barbare`,kind:`body`,family:`neutre`,name:`Fourrures de barbare`,value:`Barbarian`,desc:`Tunique, peaux et cuir. Sans autre choix de tête : avec sa coiffe d'ours.`,obtain:{by:`offert`},render:{body:`Barbarian`}}),$({id:`corps-mage`,kind:`body`,family:`neutre`,name:`Robe de mage`,value:`Mage`,desc:`Longue robe boutonnée. Sans autre choix de tête : avec son chapeau pointu.`,obtain:{by:`offert`},render:{body:`Mage`}}),$({id:`corps-voleur`,kind:`body`,family:`neutre`,name:`Cuir de voleur`,value:`Rogue`,desc:`Cuir souple, tête nue.`,obtain:{by:`offert`},render:{body:`Rogue`}}),$({id:`corps-capuche`,kind:`body`,family:`neutre`,name:`Cuir à capuche`,value:`Rogue_Hooded`,desc:`Le même cuir, le visage dans l'ombre.`,obtain:{by:`offert`},render:{body:`Rogue_Hooded`}}),$({id:`tete-heaume`,kind:`head`,family:`neutre`,name:`Heaume à visière`,value:`Knight`,desc:`Acier fermé, visière relevée sur le visage.`,obtain:{by:`offert`},render:{head:`Knight`}}),$({id:`tete-ours`,kind:`head`,family:`neutre`,name:`Coiffe d'ours`,value:`Barbarian`,desc:`Une tête d'ours en capuchon, sur une barbe grise.`,obtain:{by:`offert`},render:{head:`Barbarian`}}),$({id:`tete-chapeau`,kind:`head`,family:`neutre`,name:`Chapeau pointu`,value:`Mage`,desc:`Large bord, boucle au ruban.`,obtain:{by:`offert`},render:{head:`Mage`}}),$({id:`tete-rousse`,kind:`head`,family:`neutre`,name:`Cheveux roux`,value:`Rogue`,desc:`Tête nue, cheveux longs.`,obtain:{by:`offert`},render:{head:`Rogue`}}),$({id:`tete-capuche`,kind:`head`,family:`neutre`,name:`Capuche`,value:`Rogue_Hooded`,desc:`On voit qui tu es. À peine.`,obtain:{by:`offert`},render:{head:`Rogue_Hooded`}}),$({id:`tete-blonde`,kind:`head`,family:`neutre`,name:`Cheveux blonds`,value:`Knight_Bare`,desc:`Le chevalier sans son heaume : cheveux courts.`,obtain:{by:`achat`,price:60},render:{head:`Knight_Bare`}}),$({id:`tete-chignon`,kind:`head`,family:`neutre`,name:`Chignon noir`,value:`Mage_Bare`,desc:`Le mage sans son chapeau : cheveux noirs noués.`,obtain:{by:`achat`,price:60},render:{head:`Mage_Bare`}}),$({id:`tete-rasee`,kind:`head`,family:`neutre`,name:`Crâne rasé`,value:`Barbarian_Bare`,desc:`Le barbare sans sa coiffe : crâne nu, barbe grise.`,obtain:{by:`niveau`,level:3},render:{head:`Barbarian_Bare`}}),$({id:`bras-plates`,kind:`arms`,family:`neutre`,name:`Brassards de plates`,value:`Knight`,desc:`Les bras du harnois : épaulières et gantelets.`,obtain:{by:`offert`},render:{arms:`Knight`}}),$({id:`bras-barbare`,kind:`arms`,family:`neutre`,name:`Bracelets de cuir`,value:`Barbarian`,desc:`Manches courtes, cuir aux poignets, poings bandés.`,obtain:{by:`offert`},render:{arms:`Barbarian`}}),$({id:`bras-mage`,kind:`arms`,family:`neutre`,name:`Manches de robe`,value:`Mage`,desc:`Manches longues, mains nues.`,obtain:{by:`offert`},render:{arms:`Mage`}}),$({id:`bras-voleur`,kind:`arms`,family:`neutre`,name:`Manches et gants de cuir`,value:`Rogue`,desc:`De quoi grimper sans s'écorcher.`,obtain:{by:`offert`},render:{arms:`Rogue`}}),$({id:`jambes-plates`,kind:`legs`,family:`neutre`,name:`Grèves de plates`,value:`Knight`,desc:`Les jambes du harnois, jusqu'aux solerets.`,obtain:{by:`offert`},render:{legs:`Knight`}}),$({id:`jambes-barbare`,kind:`legs`,family:`neutre`,name:`Bottes fourrées`,value:`Barbarian`,desc:`Cuir sombre, revers de laine.`,obtain:{by:`offert`},render:{legs:`Barbarian`}}),$({id:`jambes-mage`,kind:`legs`,family:`neutre`,name:`Bottes de cuir`,value:`Mage`,desc:`Des bottes simples, sous la robe.`,obtain:{by:`offert`},render:{legs:`Mage`}}),$({id:`jambes-voleur`,kind:`legs`,family:`neutre`,name:`Bottes souples`,value:`Rogue`,desc:`Cuir clair, semelle silencieuse.`,obtain:{by:`offert`},render:{legs:`Rogue`}}),$({id:`livree-route`,kind:`livery`,family:`neutre`,name:`Teinture de route`,value:`route`,desc:`Écru, brun et sable : la poussière du chemin, portée exprès.`,obtain:{by:`offert`},render:{palette:`route`}}),$({id:`arme-epee`,kind:`weapon`,family:`neutre`,name:`Épée courte`,value:`1H_Sword`,desc:`Une lame droite à une main.`,obtain:{by:`achat`,price:80},render:{show:`1H_Sword`}}),$({id:`arme-grande-epee`,kind:`weapon`,family:`neutre`,rarity:`rare`,name:`Grande épée`,value:`2H_Sword`,desc:`Il faut les deux mains.`,obtain:{by:`achat`,price:160},render:{show:`2H_Sword`,twoHands:!0}}),$({id:`arme-hache`,kind:`weapon`,family:`neutre`,name:`Hache`,value:`1H_Axe`,desc:`Fend le bois, entre autres.`,obtain:{by:`achat`,price:80},render:{show:`1H_Axe`}}),$({id:`arme-grande-hache`,kind:`weapon`,family:`neutre`,rarity:`rare`,name:`Grande hache`,value:`2H_Axe`,desc:`Double tranchant, à deux mains.`,obtain:{by:`achat`,price:160},render:{show:`2H_Axe`,twoHands:!0}}),$({id:`arme-chope`,kind:`weapon`,family:`neutre`,name:`Chope`,value:`Mug`,desc:`Pas une arme. On la tient quand même bien.`,obtain:{by:`niveau`,level:2},render:{show:`Mug`}}),$({id:`arme-baguette`,kind:`weapon`,family:`neutre`,name:`Baguette`,value:`1H_Wand`,desc:`Courte, légère, à une main.`,obtain:{by:`achat`,price:80},render:{show:`1H_Wand`}}),$({id:`arme-baton`,kind:`weapon`,family:`neutre`,rarity:`rare`,name:`Bâton`,value:`2H_Staff`,desc:`Un long bâton de marche et de sortilèges.`,obtain:{by:`achat`,price:160},render:{show:`2H_Staff`,twoHands:!0}}),$({id:`arme-dague`,kind:`weapon`,family:`neutre`,name:`Dague`,value:`Knife`,desc:`Tient dans une botte.`,obtain:{by:`achat`,price:80},render:{show:`Knife`}}),$({id:`arme-arbalete-poing`,kind:`weapon`,family:`neutre`,rarity:`rare`,name:`Arbalète de poing`,value:`1H_Crossbow`,desc:`Petite arbalète à une main.`,obtain:{by:`achat`,price:140},render:{show:`1H_Crossbow`}}),$({id:`arme-arbalete`,kind:`weapon`,family:`neutre`,rarity:`rare`,name:`Arbalète`,value:`2H_Crossbow`,desc:`Lourde, précise, à deux mains.`,obtain:{by:`achat`,price:180},render:{show:`2H_Crossbow`,twoHands:!0}}),$({id:`main-ecu`,kind:`offhand`,family:`neutre`,name:`Écu`,value:`Badge_Shield`,desc:`Bouclier en pointe, à blason.`,obtain:{by:`achat`,price:90},render:{show:`Badge_Shield`}}),$({id:`main-bouclier-pointes`,kind:`offhand`,family:`neutre`,rarity:`rare`,name:`Bouclier à pointes`,value:`Spike_Shield`,desc:`On ne s'y frotte pas.`,obtain:{by:`achat`,price:170},render:{show:`Spike_Shield`}}),$({id:`main-rondache`,kind:`offhand`,family:`neutre`,name:`Rondache de bois`,value:`Barbarian_Round_Shield`,desc:`Planches cerclées, bosse de fer.`,obtain:{by:`achat`,price:90},render:{show:`Barbarian_Round_Shield`}}),$({id:`main-grimoire`,kind:`offhand`,family:`neutre`,name:`Grimoire`,value:`Spellbook`,desc:`Fermé. Mieux vaut, parfois.`,obtain:{by:`achat`,price:90},render:{show:`Spellbook`}}),$({id:`main-grimoire-ouvert`,kind:`offhand`,family:`neutre`,rarity:`rare`,name:`Grimoire ouvert`,value:`Spellbook_open`,desc:`À la bonne page.`,obtain:{by:`niveau`,level:6},render:{show:`Spellbook_open`}}),$({id:`main-dague`,kind:`offhand`,family:`neutre`,name:`Seconde dague`,value:`Knife_Offhand`,desc:`Pour la main gauche.`,obtain:{by:`achat`,price:90},render:{show:`Knife_Offhand`}}),$({id:`main-epee`,kind:`offhand`,family:`neutre`,name:`Seconde épée`,value:`1H_Sword_Offhand`,desc:`Une lame dans chaque main.`,obtain:{by:`achat`,price:90},render:{show:`1H_Sword_Offhand`}}),$({id:`main-hache`,kind:`offhand`,family:`neutre`,name:`Seconde hache`,value:`1H_Axe_Offhand`,desc:`L'autre main ne reste pas vide.`,obtain:{by:`achat`,price:90},render:{show:`1H_Axe_Offhand`}}),$({id:`title-errant`,kind:`title`,family:`neutre`,name:`l'Errant`,value:`l'Errant`,desc:`Ce que chacun est en arrivant.`,obtain:{by:`offert`}}),$({id:`title-invaincu`,kind:`title`,family:`neutre`,rarity:`epique`,name:`l'Invaincu`,value:`l'Invaincu`,desc:`Un titre qui oblige.`,obtain:{by:`achat`,price:400}}),$({id:`title-veteran`,kind:`title`,family:`neutre`,rarity:`rare`,name:`Vétéran du Colisée`,value:`Vétéran du Colisée`,desc:`Pour qui connaît chaque dalle du hall.`,obtain:{by:`niveau`,level:10}}),$({id:`title-veilleur`,kind:`title`,family:`neutre`,rarity:`epique`,name:`Veilleur de la Nuit`,value:`Veilleur de la Nuit`,desc:`Sept nuits de suite au coffre.`,obtain:{by:`quete`,quest:`serie`,goal:7}}),$({id:`title-cinq-portes`,kind:`title`,family:`neutre`,rarity:`mythique`,name:`Champion des cinq portes`,value:`Champion des cinq portes`,desc:`Une victoire en ligne derrière chacune des cinq portes.`,obtain:{by:`quete`,quest:`tour`,goal:5}}),$({id:`skin-echecs-marbre`,kind:`skin`,family:`neutre`,rarity:`rare`,game:`echecs`,name:`Marbre et or`,value:`marbre`,desc:`Pièces Staunton de marbre blanc et d'obsidienne, cerclées d'or.`,obtain:{by:`achat`,price:200}}),$({id:`skin-echecs-champion`,kind:`skin`,family:`neutre`,rarity:`mythique`,game:`echecs`,name:`Or des champions`,value:`champion`,desc:`Pièces d'or contre pièces d'argent.`,obtain:{by:`trophee`,game:`echecs`,wins:5}}),$({id:`skin-honneur-figurines`,kind:`skin`,family:`neutre`,rarity:`rare`,game:`honneur`,name:`Jetons émaillés`,value:`figurines`,desc:`Émail rouge des Lions, émail bleu des Corbeaux, cerclés d'or et d'argent.`,obtain:{by:`achat`,price:250}}),$({id:`skin-honneur-or`,kind:`skin`,family:`neutre`,rarity:`mythique`,game:`honneur`,name:`Trésor de guerre`,value:`or`,desc:`Des jetons d'or et d'argent massifs.`,obtain:{by:`trophee`,game:`honneur`,wins:3}})],hm=[$({id:`tunic-marbre`,kind:`tunic`,family:`olympe`,name:`Marbre de Paros`,value:`#f2f0ea`,desc:`Blanc éclatant des statues.`,obtain:{by:`achat`,price:120}}),$({id:`tunic-mars`,kind:`tunic`,family:`olympe`,name:`Sang de Mars`,value:`#a31919`,desc:`Pour qui ne recule jamais.`,obtain:{by:`achat`,price:120}}),$({id:`tunic-egee`,kind:`tunic`,family:`olympe`,name:`Mer Égée`,value:`#00897b`,desc:`Le bleu-vert des Cyclades.`,obtain:{by:`achat`,price:120}}),$({id:`tunic-pourpre`,kind:`tunic`,family:`olympe`,rarity:`rare`,name:`Pourpre impérial`,value:`#7b1fa2`,desc:`La teinte des empereurs, tirée du murex.`,obtain:{by:`achat`,price:150}}),$({id:`tunic-hades`,kind:`tunic`,family:`olympe`,rarity:`rare`,name:`Nuit d'Hadès`,value:`#1b1d4a`,desc:`Sombre comme les Enfers.`,obtain:{by:`achat`,price:150}}),$({id:`tunic-or`,kind:`tunic`,family:`olympe`,rarity:`legendaire`,name:`Or d'Olympie`,value:`#f2b01e`,desc:`Réservé aux champions.`,obtain:{by:`achat`,price:300}}),$({id:`olympe-cape-olivier`,kind:`tunic`,family:`olympe`,rarity:`rare`,name:`Olivier d'Athéna`,value:`#7d8f3a`,desc:`Le vert argenté de l'arbre offert à Athènes.`,obtain:{by:`niveau`,level:3},season:1}),$({id:`helmet-corinthien`,kind:`helmet`,family:`olympe`,rarity:`rare`,name:`Casque corinthien`,value:`corinthian`,desc:`Bronze fermé à grand cimier, celui des hoplites.`,obtain:{by:`achat`,price:220},retired:!0}),$({id:`helmet-lion`,kind:`helmet`,family:`olympe`,rarity:`epique`,name:`Peau du lion de Némée`,value:`lion`,desc:`Le trophée d'Héraclès.`,obtain:{by:`achat`,price:350},retired:!0}),$({id:`helmet-couronne`,kind:`helmet`,family:`olympe`,rarity:`legendaire`,name:`Couronne d'or`,value:`crown`,desc:`Digne d'un roi de Mycènes.`,obtain:{by:`achat`,price:400},retired:!0}),pm({id:`olympe-tete-galea`,kind:`helmet`,family:`olympe`,rarity:`rare`,name:`Galea de légionnaire`,desc:`Casque de fer à couvre-nuque et protège-joues.`}),$({id:`olympe-livree-marbre`,kind:`livery`,family:`olympe`,rarity:`rare`,name:`Livrée de marbre et de pourpre`,value:`marbre`,desc:`Une teinture : étoffe et plates blanches, liserés pourpres, boucles de bronze.`,obtain:{by:`achat`,price:220},render:{palette:`marbre`}}),$({id:`olympe-livree-bronze`,kind:`livery`,family:`olympe`,rarity:`epique`,name:`Livrée de bronze et d'écarlate`,value:`bronze`,desc:`Une teinture : le métal passe au bronze, l'étoffe à l'écarlate des manteaux de guerre.`,obtain:{by:`niveau`,level:4},render:{palette:`bronze`}}),pm({id:`olympe-corps-hoplite`,kind:`body`,family:`olympe`,rarity:`epique`,name:`Cuirasse d'hoplite`,desc:`Bronze modelé sur le torse, lambrequins de cuir.`}),pm({id:`olympe-corps-lorica`,kind:`body`,family:`olympe`,rarity:`epique`,name:`Lorica segmentata`,desc:`Les lames de fer articulées des légions.`}),pm({id:`olympe-arme-dory`,kind:`weapon`,family:`olympe`,rarity:`rare`,name:`Dory`,desc:`La longue lance de la phalange.`}),pm({id:`olympe-arme-trident`,kind:`weapon`,family:`olympe`,rarity:`epique`,name:`Trident de rétiaire`,desc:`L'arme du gladiateur au filet.`}),$({id:`olympe-main-aspis`,kind:`offhand`,family:`olympe`,rarity:`rare`,name:`Bouclier rond`,value:`Round_Shield`,desc:`Rond comme l'aspis des hoplites, bois cerclé de métal.`,obtain:{by:`achat`,price:180},render:{show:`Round_Shield`}}),$({id:`olympe-main-scutum`,kind:`offhand`,family:`olympe`,rarity:`rare`,name:`Grand bouclier`,value:`Rectangle_Shield`,desc:`Haut et rectangulaire, à la façon du scutum des légions.`,obtain:{by:`achat`,price:180},render:{show:`Rectangle_Shield`}}),pm({id:`olympe-main-filet`,kind:`offhand`,family:`olympe`,rarity:`epique`,name:`Filet de rétiaire`,desc:`Lesté de plomb, il se lance d'un geste.`}),$({id:`title-stratege`,kind:`title`,family:`olympe`,name:`le Stratège`,value:`le Stratège`,desc:`À Athènes, on élisait ses généraux.`,obtain:{by:`achat`,price:100}}),$({id:`title-aurige`,kind:`title`,family:`olympe`,rarity:`rare`,name:`l'Aurige d'or`,value:`l'Aurige d'or`,desc:`Pour les maîtres du Grand Cirque.`,obtain:{by:`achat`,price:250}}),$({id:`title-fleau`,kind:`title`,family:`olympe`,rarity:`rare`,name:`Fléau des Titans`,value:`Fléau des Titans`,desc:`Ceux d'en dessous connaissent ton nom.`,obtain:{by:`achat`,price:300}}),$({id:`title-zeus`,kind:`title`,family:`olympe`,rarity:`legendaire`,name:`Fils de Zeus`,value:`Fils de Zeus`,desc:`Il en a tant qu'un de plus ne se verra pas.`,obtain:{by:`achat`,price:600}}),$({id:`skin-echecs-olympe`,kind:`skin`,family:`olympe`,rarity:`epique`,game:`echecs`,name:`Panthéon de l'Olympe`,value:`olympe`,desc:`Zeus roi, Athéna reine, Méduse, Pégase, temples et hoplites.`,obtain:{by:`achat`,price:350}}),$({id:`skin-dedale-mythes`,kind:`skin`,family:`olympe`,rarity:`rare`,game:`dedale`,name:`Thésée et le Minotaure`,value:`mythes`,desc:`Le héros et le monstre, murs de bronze.`,obtain:{by:`achat`,price:250}}),$({id:`skin-dedale-or`,kind:`skin`,family:`olympe`,rarity:`mythique`,game:`dedale`,name:`Labyrinthe d'or`,value:`or`,desc:`Pions et murs d'or massif.`,obtain:{by:`trophee`,game:`dedale`,wins:3}}),$({id:`skin-chars-apollon`,kind:`skin`,family:`olympe`,rarity:`epique`,game:`chars`,name:`Char d'Apollon`,value:`apollon`,desc:`Le char du soleil, tiré par des chevaux de feu.`,obtain:{by:`achat`,price:300}}),$({id:`skin-chars-hades`,kind:`skin`,family:`olympe`,rarity:`epique`,game:`chars`,name:`Char d'Hadès`,value:`hades`,desc:`Bronze noir et chevaux spectraux.`,obtain:{by:`achat`,price:300}}),$({id:`skin-chars-nike`,kind:`skin`,family:`olympe`,rarity:`mythique`,game:`chars`,name:`Char de Niké`,value:`nike`,desc:`Blanc et or, ailé comme la Victoire.`,obtain:{by:`trophee`,game:`chars`,wins:3}}),$({id:`skin-titans-legendes`,kind:`skin`,family:`olympe`,rarity:`epique`,game:`titans`,name:`Légendes`,value:`legendes`,desc:`Les vrais Héraclès, Artémis, Achille et Circé.`,obtain:{by:`achat`,price:300}}),$({id:`skin-titans-olympiens`,kind:`skin`,family:`olympe`,rarity:`mythique`,game:`titans`,name:`Armures olympiennes`,value:`olympiens`,desc:`Les légendes en armure d'or.`,obtain:{by:`trophee`,game:`titans`,wins:3}})],gm=[$({id:`kemet-cape-lin`,kind:`tunic`,family:`kemet`,name:`Lin blanc`,value:`#efe9da`,desc:`Le lin fin du Nil, blanchi au soleil.`,obtain:{by:`achat`,price:120}}),$({id:`kemet-cape-ocre`,kind:`tunic`,family:`kemet`,name:`Ocre rouge`,value:`#b5532a`,desc:`La terre du désert, broyée par les peintres.`,obtain:{by:`achat`,price:120}}),$({id:`kemet-cape-malachite`,kind:`tunic`,family:`kemet`,name:`Vert malachite`,value:`#0f7a5a`,desc:`Une pierre verte du Sinaï, réduite en poudre.`,obtain:{by:`achat`,price:120}}),$({id:`kemet-cape-bleu`,kind:`tunic`,family:`kemet`,rarity:`rare`,name:`Bleu égyptien`,value:`#1034a6`,desc:`Le premier pigment fabriqué de main d'homme.`,obtain:{by:`achat`,price:160}}),$({id:`kemet-cape-faience`,kind:`tunic`,family:`kemet`,rarity:`rare`,name:`Faïence turquoise`,value:`#3fc1b0`,desc:`L'éclat des perles et des coupes émaillées.`,obtain:{by:`niveau`,level:5}}),$({id:`kemet-cape-electrum`,kind:`tunic`,family:`kemet`,rarity:`legendaire`,name:`Électrum`,value:`#e6d28a`,desc:`L'alliage pâle d'or et d'argent qui coiffait les obélisques.`,obtain:{by:`achat`,price:320},season:2}),$({id:`kemet-livree-lin`,kind:`livery`,family:`kemet`,rarity:`rare`,name:`Livrée de lin et d'or`,value:`lin`,desc:`Une teinture : étoffe blanche comme le lin, métal doré, touches de lapis.`,obtain:{by:`achat`,price:220},render:{palette:`lin`}}),$({id:`kemet-livree-lapis`,kind:`livery`,family:`kemet`,rarity:`epique`,name:`Livrée de lapis et de turquoise`,value:`lapis`,desc:`Une teinture : le bleu profond du lapis-lazuli, relevé de turquoise et d'or.`,obtain:{by:`quete`,quest:`serie`,goal:3},render:{palette:`lapis`}}),pm({id:`kemet-tete-perruque`,kind:`helmet`,family:`kemet`,rarity:`rare`,name:`Perruque tressée`,desc:`Tresses fines et bandeau, la coiffure des jours de fête.`}),pm({id:`kemet-corps-chendjit`,kind:`body`,family:`kemet`,rarity:`rare`,name:`Pagne de lin plissé`,desc:`Le chendjit, lin plissé et ceinture nouée.`}),pm({id:`kemet-corps-ecailles`,kind:`body`,family:`kemet`,rarity:`epique`,name:`Corselet d'écailles`,desc:`Écailles de bronze cousues, l'armure des équipages de char.`}),pm({id:`kemet-arme-khepesh`,kind:`weapon`,family:`kemet`,rarity:`epique`,name:`Khépesh`,desc:`L'épée courbe de bronze.`}),pm({id:`kemet-arme-arc`,kind:`weapon`,family:`kemet`,rarity:`rare`,name:`Arc composite`,desc:`Bois, corne et tendon : l'arme des archers de Thèbes.`}),pm({id:`kemet-main-bouclier`,kind:`offhand`,family:`kemet`,rarity:`rare`,name:`Bouclier cintré`,desc:`Bois tendu de cuir, sommet arrondi.`}),$({id:`kemet-titre-scribe`,kind:`title`,family:`kemet`,name:`Scribe du Nil`,value:`Scribe du Nil`,desc:`« Sois scribe » : le conseil que tous les pères donnaient.`,obtain:{by:`achat`,price:120}}),$({id:`kemet-titre-chars`,kind:`title`,family:`kemet`,rarity:`rare`,name:`Meneur de chars de Thèbes`,value:`Meneur de chars de Thèbes`,desc:`Deux chevaux, une caisse légère, et la plaine devant soi.`,obtain:{by:`achat`,price:250}}),$({id:`kemet-titre-artisan`,kind:`title`,family:`kemet`,rarity:`epique`,name:`Artisan de la Place de Vérité`,value:`Artisan de la Place de Vérité`,desc:`Le nom que portait le village des bâtisseurs de la Vallée des Rois.`,obtain:{by:`achat`,price:350}})],_m=[$({id:`anahuac-cape-coton`,kind:`tunic`,family:`anahuac`,name:`Coton blanc`,value:`#f1ead8`,desc:`Une cape de coton : on payait le tribut avec.`,obtain:{by:`achat`,price:120}}),$({id:`anahuac-cape-cacao`,kind:`tunic`,family:`anahuac`,name:`Brun cacao`,value:`#5a3320`,desc:`La couleur des fèves qui servaient de monnaie.`,obtain:{by:`achat`,price:120}}),$({id:`anahuac-cape-jade`,kind:`tunic`,family:`anahuac`,name:`Vert de jade`,value:`#2fa67a`,desc:`La pierre qu'on estimait plus que l'or.`,obtain:{by:`achat`,price:120}}),$({id:`anahuac-cape-turquoise`,kind:`tunic`,family:`anahuac`,rarity:`rare`,name:`Bleu turquoise`,value:`#1c93b5`,desc:`Le bleu des mosaïques de pierre fine.`,obtain:{by:`achat`,price:160}}),$({id:`anahuac-cape-tezontle`,kind:`tunic`,family:`anahuac`,rarity:`rare`,name:`Tezontle`,value:`#7b3f3a`,desc:`La pierre volcanique rouge sombre dont la cité était bâtie.`,obtain:{by:`niveau`,level:5}}),$({id:`anahuac-cape-cochenille`,kind:`tunic`,family:`anahuac`,rarity:`legendaire`,name:`Rouge cochenille`,value:`#c2185b`,desc:`Un carmin tiré d'un insecte du nopal, que le monde entier a envié.`,obtain:{by:`achat`,price:320},season:3}),$({id:`anahuac-livree-turquoise`,kind:`livery`,family:`anahuac`,rarity:`rare`,name:`Livrée de turquoise et de cochenille`,value:`turquoise`,desc:`Une teinture : étoffe turquoise, liserés carmin, et le blanc du coton à la place de l'acier.`,obtain:{by:`achat`,price:220},render:{palette:`turquoise`}}),$({id:`anahuac-livree-jade`,kind:`livery`,family:`anahuac`,rarity:`epique`,name:`Livrée de jade et d'obsidienne`,value:`jade`,desc:`Une teinture : le vert du jade, le noir luisant de l'obsidienne.`,obtain:{by:`niveau`,level:7},render:{palette:`jade`}}),pm({id:`anahuac-tete-aigle`,kind:`helmet`,family:`anahuac`,rarity:`epique`,name:`Casque de l'ordre de l'aigle`,desc:`Bois sculpté en tête d'aigle, le visage dans le bec.`}),pm({id:`anahuac-corps-ichcahuipilli`,kind:`body`,family:`anahuac`,rarity:`rare`,name:`Ichcahuipilli`,desc:`Armure de coton matelassé, épaisse de deux doigts.`}),pm({id:`anahuac-corps-jaguar`,kind:`body`,family:`anahuac`,rarity:`epique`,name:`Tenue de l'ordre du jaguar`,desc:`Le tlahuiztli tacheté des guerriers confirmés.`}),pm({id:`anahuac-arme-macuahuitl`,kind:`weapon`,family:`anahuac`,rarity:`epique`,name:`Macuahuitl`,desc:`Une lame de bois bordée d'éclats d'obsidienne.`}),pm({id:`anahuac-arme-atlatl`,kind:`weapon`,family:`anahuac`,rarity:`rare`,name:`Atlatl`,desc:`Le propulseur qui allonge le bras et lance les dards.`}),pm({id:`anahuac-main-chimalli`,kind:`offhand`,family:`anahuac`,rarity:`rare`,name:`Chimalli`,desc:`Bouclier rond de roseaux tressés, garni de cuir.`}),$({id:`anahuac-titre-pochteca`,kind:`title`,family:`anahuac`,name:`le Pochteca`,value:`le Pochteca`,desc:`Marchand au long cours : il marche des mois et revient riche de nouvelles.`,obtain:{by:`achat`,price:120}}),$({id:`anahuac-titre-aigle`,kind:`title`,family:`anahuac`,rarity:`rare`,name:`Guerrier de l'aigle`,value:`Guerrier de l'aigle`,desc:`Un rang qui ne s'héritait pas : il se gagnait.`,obtain:{by:`achat`,price:250}}),$({id:`anahuac-titre-poete`,kind:`title`,family:`anahuac`,rarity:`epique`,name:`Poète de Texcoco`,value:`Poète de Texcoco`,desc:`« Fleur et chant » : là-bas, c'était le nom de la poésie.`,obtain:{by:`achat`,price:350}})],vm=[$({id:`yamato-cape-sumi`,kind:`tunic`,family:`yamato`,name:`Gris d'encre`,value:`#4a4a52`,desc:`Le gris du sumi, l'encre qu'on frotte sur la pierre.`,obtain:{by:`achat`,price:120}}),$({id:`yamato-cape-pin`,kind:`tunic`,family:`yamato`,name:`Vert de pin`,value:`#3a6b45`,desc:`L'arbre qui reste vert sous la neige.`,obtain:{by:`achat`,price:120}}),$({id:`yamato-cape-laque`,kind:`tunic`,family:`yamato`,name:`Noir de laque`,value:`#1a1614`,desc:`Trente couches, poncées une à une.`,obtain:{by:`achat`,price:120}}),$({id:`yamato-cape-indigo`,kind:`tunic`,family:`yamato`,rarity:`rare`,name:`Indigo`,value:`#23466e`,desc:`Le bleu profond des cuves ; son nom, « kachi », se prononce comme « victoire ».`,obtain:{by:`achat`,price:160}}),$({id:`yamato-cape-vermillon`,kind:`tunic`,family:`yamato`,rarity:`rare`,name:`Vermillon`,value:`#d3381c`,desc:`Le rouge des armures qu'on voulait voir de loin.`,obtain:{by:`niveau`,level:5}}),$({id:`yamato-cape-cerisier`,kind:`tunic`,family:`yamato`,rarity:`legendaire`,name:`Fleur de cerisier`,value:`#f2b6c8`,desc:`Une semaine de fleurs par an : on venait de loin pour la voir.`,obtain:{by:`achat`,price:320},season:4}),$({id:`yamato-livree-laque`,kind:`livery`,family:`yamato`,rarity:`epique`,name:`Livrée de laque rouge et noire`,value:`laque`,desc:`Une teinture : noir de laque, bords vermillon, boucles dorées.`,obtain:{by:`achat`,price:280},render:{palette:`laque`}}),$({id:`yamato-livree-indigo`,kind:`livery`,family:`yamato`,rarity:`rare`,name:`Livrée d'indigo et d'or`,value:`indigo`,desc:`Une teinture : le bleu des cuves d'indigo, relevé d'or.`,obtain:{by:`quete`,quest:`tour`,goal:2},render:{palette:`indigo`}}),pm({id:`yamato-tete-kabuto`,kind:`helmet`,family:`yamato`,rarity:`epique`,name:`Kabuto`,desc:`Casque à bol riveté et couvre-nuque lacé.`}),pm({id:`yamato-tete-jingasa`,kind:`helmet`,family:`yamato`,rarity:`rare`,name:`Jingasa`,desc:`Le chapeau de guerre laqué des fantassins.`}),pm({id:`yamato-corps-do`,kind:`body`,family:`yamato`,rarity:`epique`,name:`Cuirasse lacée`,desc:`Le dō : lamelles laquées, lacées de soie.`}),pm({id:`yamato-arme-katana`,kind:`weapon`,family:`yamato`,rarity:`epique`,name:`Katana`,desc:`Lame courbe à un tranchant, portée fil vers le haut.`}),pm({id:`yamato-arme-yari`,kind:`weapon`,family:`yamato`,rarity:`rare`,name:`Yari`,desc:`La lance droite : l'arme qui gagnait vraiment les batailles.`}),pm({id:`yamato-arme-yumi`,kind:`weapon`,family:`yamato`,rarity:`rare`,name:`Yumi`,desc:`Le grand arc asymétrique, tenu au tiers de sa hauteur.`}),pm({id:`yamato-main-gunbai`,kind:`offhand`,family:`yamato`,rarity:`rare`,name:`Éventail de commandement`,desc:`Le gunbai : on dirige la bataille avec, on ne s'évente pas.`}),$({id:`yamato-titre-ronin`,kind:`title`,family:`yamato`,name:`le Rōnin`,value:`le Rōnin`,desc:`Sans maître, donc sans ordres.`,obtain:{by:`achat`,price:120}}),$({id:`yamato-titre-the`,kind:`title`,family:`yamato`,rarity:`rare`,name:`Maître de thé`,value:`Maître de thé`,desc:`Les seigneurs de guerre se disputaient les meilleurs.`,obtain:{by:`achat`,price:250}}),$({id:`yamato-titre-pinceau`,kind:`title`,family:`yamato`,rarity:`epique`,name:`Sabre et Pinceau`,value:`Sabre et Pinceau`,desc:`L'idéal du temps : savoir se battre, et savoir écrire.`,obtain:{by:`achat`,price:350}})],ym=[...mm,...hm,...gm,..._m,...vm],bm={tank:`Tank`,tireur:`Tireur`,assassin:`Assassin`,soutien:`Soutien`,controle:`Contrôle`},xm=[`heracles`,`artemis`,`achille`,`circe`,`hoplite`,`retiaire`,`archer-thebes`,`medjay`,`aigle`,`atlatl`,`ashigaru`,`bushi`],Sm=e=>({type:`shot`,count:1,spread:0,burst:0,radius:.25,pierce:0,bounce:0,...e}),Cm={heracles:{id:`heracles`,name:`Héraclès`,family:`olympe`,starter:!0,role:`tank`,cls:`Colosse`,hp:215,speed:7.1,atkCd:.4,reload:1.45,superDmg:160,superOnHurt:.6,attack:{type:`melee`,reach:2.6,arc:1.7,dmg:24},attackName:`Massue`,attackDesc:`Un large arc de cercle, au contact : tout ce qui est devant lui prend.`,sup:{type:`dash`,dist:7,speed:22,dmg:22,fx:{knock:2.5}},superName:`Charge`,superDesc:`Fonce droit devant, bouscule et blesse tous ceux qu'il croise.`},artemis:{id:`artemis`,name:`Artémis`,family:`olympe`,starter:!0,role:`tireur`,cls:`Tireuse`,hp:122,speed:8,atkCd:.3,reload:1.2,superDmg:115,attack:Sm({look:`fleche`,speed:30,range:19,dmg:21}),attackName:`Flèche`,attackDesc:`Un tir droit, rapide, à très longue portée.`,sup:Sm({look:`fleche`,speed:30,range:19,dmg:18,count:5,spread:.12}),superName:`Volée`,superDesc:`Cinq flèches en éventail. De près, elles touchent toutes.`},achille:{id:`achille`,name:`Achille`,family:`olympe`,starter:!0,role:`assassin`,cls:`Assassin`,hp:162,speed:8.4,atkCd:.3,reload:1.1,superDmg:135,attack:{type:`melee`,reach:3.3,arc:.9,dmg:26},attackName:`Coup de lance`,attackDesc:`Un coup vif, à courte portée, qui revient vite.`,sup:{type:`leap`,range:7,time:.3,radius:2.8,dmg:34},superName:`Bond fracassant`,superDesc:`Saute par-dessus les obstacles jusqu'au point visé et frappe tout autour.`},circe:{id:`circe`,name:`Circé`,family:`olympe`,starter:!0,role:`soutien`,cls:`Soutien`,hp:146,speed:7.5,atkCd:.35,reload:1.4,superDmg:160,attack:Sm({look:`orbe`,speed:20,range:17,dmg:30,radius:.3,bounce:1}),attackName:`Orbe`,attackDesc:`Un orbe lent, à longue portée, qui rebondit une fois sur les murs.`,sup:{type:`zone`,look:`soin`,at:`self`,range:0,radius:3.6,dur:4,tick:.5,delay:0,dmg:0,heal:7},superName:`Cercle de soin`,superDesc:`Trace un cercle qui soigne ses alliés pendant 4 s.`},hoplite:{id:`hoplite`,name:`Hoplite`,family:`olympe`,starter:!1,role:`tank`,cls:`Rempart`,hp:192,speed:7.5,atkCd:.4,reload:1.4,superDmg:140,superOnHurt:.6,attack:{type:`melee`,reach:3.6,width:1.1,dmg:22,fx:{knock:.5}},attackName:`Lance courte`,attackDesc:`Un coup droit devant, qui fait reculer d'un pas.`,sup:{type:`guard`,radius:4.5,dur:3,k:.6},superName:`Phalange`,superDesc:`Pendant 3 s, lui et ses alliés proches encaissent 40 % de dégâts en moins.`},retiaire:{id:`retiaire`,name:`Rétiaire`,family:`olympe`,starter:!1,role:`controle`,cls:`Contrôle`,hp:164,speed:8.3,atkCd:.35,reload:1.3,superDmg:120,attack:Sm({look:`trident`,speed:22,range:6.5,dmg:11,count:3,spread:.2,radius:.3}),attackName:`Trident`,attackDesc:`Trois pointes en éventail, à mi-distance. De près, les trois portent.`,sup:Sm({look:`filet`,speed:20,range:11,dmg:0,radius:.8,fx:{root:1.5}}),superName:`Filet`,superDesc:`Lance un filet : le premier ennemi touché est immobilisé 1,5 s, sans dégâts.`},"archer-thebes":{id:`archer-thebes`,name:`Archer de Thèbes`,family:`kemet`,starter:!1,role:`tireur`,cls:`Harceleur`,hp:128,speed:7.8,atkCd:.3,reload:.8,superDmg:110,attack:Sm({look:`flechette`,speed:26,range:16,dmg:5,count:4,burst:.06,radius:.2}),attackName:`Flèches légères`,attackDesc:`Une rafale de quatre flèches très rapprochées, qui suit ta visée.`,sup:{type:`zone`,look:`pluie`,at:`aim`,range:14,radius:3.6,dur:1.6,tick:.5,delay:.5,dmg:25,heal:0},superName:`Pluie de flèches`,superDesc:`Trois salves tombent sur la zone visée, par-dessus les murs.`},medjay:{id:`medjay`,name:`Medjay`,family:`kemet`,starter:!1,role:`controle`,cls:`Gardien`,hp:170,speed:7.2,atkCd:.4,reload:1.4,superDmg:130,attack:{type:`lob`,look:`javelot`,range:10.5,time:.45,radius:1.9,dmg:23},attackName:`Javelot`,attackDesc:`Lancé en cloche : il passe au-dessus des murs et retombe où tu vises.`,sup:{type:`wall`,dist:1.7,width:6,dur:4.5},superName:`Mur de boucliers`,superDesc:`Dresse 4,5 s une ligne de boucliers qui arrête les projectiles ennemis.`},aigle:{id:`aigle`,name:`Guerrier de l'aigle`,family:`anahuac`,starter:!1,role:`assassin`,cls:`Assaillant`,hp:158,speed:8.4,atkCd:.35,reload:1.2,superDmg:135,attack:{type:`melee`,reach:3,arc:1.7,dmg:30},attackName:`Macuahuitl`,attackDesc:`L'épée de bois à lames d'obsidienne, en arc de cercle, au contact.`,sup:{type:`leap`,range:8,time:.35,radius:2.2,dmg:19,fx:{slow:[.5,2]}},superName:`Fondre`,superDesc:`Bondit sur le point visé et ralentit 2 s ceux qu'il touche : on cherche la capture.`},atlatl:{id:`atlatl`,name:`Lanceur d'atlatl`,family:`anahuac`,starter:!1,role:`tireur`,cls:`Perceur`,hp:128,speed:7.4,atkCd:.5,reload:1.9,superDmg:130,attack:Sm({look:`dard`,speed:22,range:16.5,dmg:30,radius:.35,pierce:1}),attackName:`Dard`,attackDesc:`Un dard lourd et lent, lancé au propulseur, qui traverse le premier ennemi touché.`,sup:Sm({look:`dard-long`,speed:30,range:24,dmg:44,radius:.5,pierce:99}),superName:`Dard long`,superDesc:`Un tir chargé à très longue portée, qui traverse toute la ligne.`},ashigaru:{id:`ashigaru`,name:`Ashigaru`,family:`yamato`,starter:!1,role:`controle`,cls:`Piquier`,hp:164,speed:7,atkCd:.4,reload:1.3,superDmg:135,attack:{type:`melee`,reach:5.5,width:.8,dmg:22},attackName:`Estoc de yari`,attackDesc:`La longue lance : un couloir étroit, deux fois plus loin qu'une épée.`,sup:{type:`zone`,look:`haie`,at:`front`,range:3,radius:2.7,dur:2.5,tick:.5,delay:0,dmg:7,heal:0,fx:{knock:2.2,slow:[.4,.7]}},superName:`Haie de lances`,superDesc:`Tient 2,5 s une zone devant lui : qui y entre est frappé et repoussé.`},bushi:{id:`bushi`,name:`Bushi`,family:`yamato`,starter:!1,role:`assassin`,cls:`Duelliste`,hp:156,speed:8.2,atkCd:.3,reload:1.25,superDmg:140,attack:{type:`melee`,reach:2.8,arc:1.2,dmg:27,lunge:1.2},attackName:`Coupe de sabre`,attackDesc:`Un pas en avant et une coupe courte, vive.`,sup:{type:`dash`,dist:6,speed:30,dmg:54,first:!0},superName:`Iai`,superDesc:`Dégaine en traversant 6 unités : frappe fort le premier ennemi sur sa route.`}},wm=xm.map(e=>Cm[e]),Tm=wm.filter(e=>e.starter).map(e=>e.id),Em=e=>typeof e==`string`&&xm.includes(e);function Dm(e){switch(e.type){case`melee`:return e.reach+(e.lunge??0);case`shot`:case`lob`:case`leap`:return e.range;case`dash`:return e.dist;case`zone`:return e.at===`self`?e.radius:e.range+(e.at===`front`?e.radius:0);case`guard`:return e.radius;case`wall`:return e.dist}}var Om=e=>e.type===`shot`?e.dmg*e.count:e.dmg,km={first:{level:5,titansWins:0},second:{level:10,titansWins:10}},Am=wm.filter(e=>!e.starter).map((e,t,n)=>({id:e.id,family:e.family,name:e.name,cls:e.cls,attack:e.attackDesc,superName:e.superName,superDesc:e.superDesc,stats:{hp:e.hp,speed:e.speed,range:Dm(e.attack),dmg:Om(e.attack),reload:e.reload,superDmg:e.superDmg},unlock:n.find(t=>t.family===e.family)===e?km.first:km.second,stakes:`neutralise`}));function jm(e,t){return Am.map(n=>({id:n.id,unlocked:e>=n.unlock.level&&t>=n.unlock.titansWins,level:e,needLevel:n.unlock.level,wins:t,needWins:n.unlock.titansWins}))}[...Tm],wm.map(e=>e.id);var Mm=new Map(ym.map(e=>[e.id,e])),Nm=e=>Mm.get(e),Pm={echecs:{value:`staunton`,name:`Aventuriers`},dedale:{value:`bois`,name:`Héros et murs de bois`},honneur:{value:`jetons`,name:`Jetons de bronze`},chars:{value:`bois`,name:`Char de bois`},titans:{value:`gladiateurs`,name:`Gladiateurs`}},Fm=`cape-azur`,Im=`corps-chevalier`,Lm={glad:`Knight`,corinthian:`Knight`,crown:`Knight`,hood:`Rogue_Hooded`,cap:`Rogue`,laurel:`Mage`,feather:`Barbarian`,lion:`Barbarian`},Rm={Knight:`glad`,Rogue_Hooded:`hood`,Rogue:`cap`,Mage:`laurel`,Barbarian:`feather`},zm=e=>ym.find(t=>t.slot===`corps`&&!t.soon&&t.render?.body===e),Bm={general:`Place publique`,strategie:`Stratégies et astuces`,propositions:`Propositions`,bugs:`Signaler un problème`,clans:`Recrutement des clans`},Vm=e=>!e.soon&&(e.season??0)<=1,Hm=(e,t)=>Vm(e)&&(e.obtain.by===`offert`||t.includes(e.id));function Um(e,t){let n=e.obtain;return n.by===`trophee`?{have:t.wins[n.game]??0,goal:n.wins}:n.by===`niveau`?{have:t.level,goal:n.level}:n.by===`quete`?{have:n.quest===`serie`?t.streak:am.filter(e=>(t.wins[e]??0)>0).length,goal:n.goal}:null}function Wm(e){let t=e.obtain;switch(t.by){case`offert`:return`Offert`;case`achat`:return`Δ ${t.price}`;case`trophee`:return`Trophée · ${t.wins} victoire${t.wins>1?`s`:``} en ligne · ${im[t.game]}`;case`niveau`:return`Niveau ${t.level}`;case`quete`:return t.quest===`serie`?`Coffre du jour ${t.goal} jours de suite`:`Une victoire en ligne dans ${t.goal} jeux`}}function Gm(e,t){return[Pm[e].value,...ym.filter(n=>n.kind===`skin`&&n.game===e&&Hm(n,t)).map(e=>e.value)]}var Km=/^#[0-9a-f]{6}$/i;function qm(e,t,n){let r=typeof t==`string`?Mm.get(t):void 0;return r&&r.slot===e&&Hm(r,n)?r:void 0}function Jm(e,t,n){if(typeof t!=`string`)return;let r=t.toLowerCase();return ym.find(t=>t.slot===e&&t.value.toLowerCase()===r&&Hm(t,n))}function Ym(e,t){let n=e&&typeof e==`object`?e:{},r=n.gear&&typeof n.gear==`object`?n.gear:{},i=qm(`cape`,r.cape,t)??Jm(`cape`,n.tunic,t)??Mm.get(Fm),a=qm(`corps`,r.corps,t),o=a??zm(typeof n.helmet==`string`?Lm[n.helmet]:void 0)??Mm.get(Im),s=qm(`tete`,r.tete,t)??(a?void 0:Jm(`tete`,n.helmet,t)),c=o.render.body,l=qm(`arme`,r.arme,t),u=l?.render?.twoHands?void 0:qm(`main`,r.main,t),d={corps:o.id,cape:i.id};s&&(d.tete=s.id);for(let e of[`bras`,`jambes`,`livree`]){let n=qm(e,r[e],t);n&&(d[e]=n.id)}l&&(d.arme=l.id),u&&(d.main=u.id);let f={tunic:i.value,helmet:s?.kind===`helmet`?s.value:Rm[c],gear:d};if(typeof n.crest==`string`&&Km.test(n.crest)&&(f.crest=n.crest),typeof n.skin==`string`&&Km.test(n.skin)&&(f.skin=n.skin),n.skins&&typeof n.skins==`object`){let e={};for(let r of am){let i=n.skins[r];typeof i==`string`&&i!==Pm[r].value&&Gm(r,[...t]).includes(i)&&(e[r]=i)}Object.keys(e).length&&(f.skins=e)}return f}function Xm(e){let t=e.gear??{},n=e=>t[e]?Mm.get(t[e]):void 0,r={body:n(`corps`)?.render?.body??Lm[e.helmet]??`Knight`,show:[n(`arme`),n(`main`)].map(e=>e?.render?.show).filter(e=>!!e),cape:n(`cape`)?.value??e.tunic},i=n(`tete`)?.render?.head,a=n(`bras`)?.render?.arms,o=n(`jambes`)?.render?.legs,s=n(`livree`)?.render?.palette;return i&&(r.head=i),a&&(r.arms=a),o&&(r.legs=o),s&&(r.palette=s),r}function Zm(e){return sm.map(t=>{let n=ym.filter(e=>e.family===t),r=n.filter(e=>Vm(e)&&!e.retired);return{family:t,owned:r.filter(t=>Hm(t,e)).length,total:r.length,soon:n.length-r.length}})}var Qm=e=>Pm[e].value;function $m(e){let t=Jp(),n=t?.look.skins?.[e];return n&&Gm(e,t.owned).includes(n)?n:Qm(e)}function eh(e){let t=Jp()?.owned??[];return[{value:Qm(e),name:Pm[e].name,owned:!0,price:0,trophy:void 0,id:``},...ym.filter(t=>t.kind===`skin`&&t.game===e).map(e=>({value:e.value,name:e.name,owned:Hm(e,t),price:e.price,trophy:e.trophy,id:e.id}))]}function th(e){let t=Jp()?.owned??[];return ym.find(n=>n.kind===`skin`&&n.game===e&&!n.trophy&&!t.includes(n.id))?.value??Qm(e)}async function nh(e,t){Xp(await Gp(`/me/skin`,{body:{game:e,value:t}}))}function rh(e,t){let n=document.createElement(`div`);return n.className=`skin-picker`,Yp(()=>{let r=Jp(),i=$m(e);n.innerHTML=`<p class="field-label">Ton apparence en jeu</p>`;let a=document.createElement(`div`);a.className=`skin-row`;for(let n of eh(e)){let o=document.createElement(`button`);o.type=`button`,o.className=`skin-opt${n.owned?``:` locked`}`,o.setAttribute(`aria-pressed`,String(n.value===i)),o.innerHTML=`<b>${n.name}</b><small>${n.owned?n.value===i?`porté`:`possédé`:n.trophy?`trophée · ${n.trophy.wins} victoires`:`Δ ${n.price} · Agora`}</small>`,o.disabled=!r&&n.value!==Qm(e),o.onclick=async()=>{if(!n.owned)return void(location.href=`../?espace=agora`);if(r)try{await nh(e,n.value),t?.(n.value)}catch{}},a.append(o)}if(n.append(a),!r){let e=document.createElement(`small`);e.className=`muted`,e.textContent=`Connexion à l'Olympe… (tes skins apparaîtront ici)`,n.append(e)}}),n}export{aa as $,lm as A,Qp as B,ym as C,am as D,im as E,nm as F,Xp as G,Yp as H,Bp as I,ha as J,Vp as K,Up as L,em as M,rm as N,fm as O,tm as P,la as Q,Gp as R,Dm as S,sm as T,Jp as U,Wp as V,Zp as W,fa as X,ua as Y,ra as Z,Cm as _,Pm as a,sa as at,bm as b,Vm as c,Wm as d,na as et,Um as f,jm as g,Am as h,rh as i,ca as it,um as j,cm as k,Nm as l,Ym as m,$m as n,ia as nt,Bm as o,Xi as ot,Hm as p,_a as q,th as r,$i as rt,Zm as s,nh as t,ta as tt,Xm as u,xm as v,om as w,Em as x,wm as y,$p as z};