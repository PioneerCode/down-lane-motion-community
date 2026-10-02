import{$t as bv,At as Vc,B as J$1,Bn as pn$1,Bt as Y0,C as Er,Ct as TN,D as GD,Dn as jn$1,Dt as Ue$3,E as G$4,En as jO,Et as Ty,F as Ie$1,Fn as m3,Ft as Wn$1,Gn as rC,Gt as _b,H as L$2,Hn as qg,Ht as Ya,I as In$1,It as Wu,J as MN,Jt as aE,K as M0,Kn as rE,Kt as _c,Lt as X$2,M as Hu,Mn as le,Mt as Vu,N as I$3,Nn as ln$1,O as Gq,On as jw,Ot as Uw,P as IN,Pn as lp,Pt as Wg,Qn as se$1,Qt as bq,R as Ir$1,Rt as XS,Sn as i4,Tn as io,Tt as Tr,Un as qu,Ut as Z$1,V as JD,Vn as po,W as Li,Wn as r0,Wt as Zp,Xn as rt$2,Xt as ap,Y as MO,Yn as rg,Yt as ac,Z as N$3,Zt as b8,_n as h$3,_t as Sb,an as di,bn as he,bt as So,c as An$1,cn as ee$1,cr as we$1,ct as Qe$3,d as B$1,dn as fi$1,dr as xw,dt as Rn$1,en as cN,er as sn$1,et as Nw,fr as y$3,g as C8,gn as ge$1,gr as zq,gt as SN,h as Bo,hn as gc,hr as zo,i as $q,ir as un$1,jn as lN,jt as Ve$1,k as Hc,kn as kT,kt as VO,l as Au,ln as ep,lr as xD,lt as R8,m as Bc,mn as gE,mr as zD,mt as S8,n as $i,nr as tE,on as dp,p as BN,pt as S,q as M8,r as $o,rn as dR,rr as tt$2,rt as P,s as Aa,sn as dt$1,sr as wN,st as QN,t as $$2,tn as cp,tr as sp,tt as OD,u as Aw,ur as xO,ut as RO,v as Ch,vn as hN,vt as Se$1,w as F$2,wn as im,wt as Tc,x as Dr,xn as hn$1,y as D$2,yt as Sh,z as It$1,zn as pN,zt as Y$1}from"./chunk-Czos2FSY.js";var c=`Unknown`;var u$1=`Polyester`;function b$1(t){return t.coverstockBase===u$1?u$1:t.coverstockType?t.coverstockType:t.coverstock?.toLowerCase().includes(`urethane`)?`Urethane`:c}function m$2(t,n=new Date){let l=t?.match(/^(\d{2})\/(\d{2})\/(\d{2})$/);if(!l)return null;let[,r,e,a]=l.map(Number),s=(a>n.getFullYear()%100?1900:2e3)+a,o=new Date(s,r-1,e);return o.getMonth()===r-1&&o.getDate()===e?o:null}function i(t,n,l=!1){let r=new Map;for(let e of t){let a=n(e);if(a===null&&l)continue;let s=a??c;r.set(s,(r.get(s)??0)+1)}return[...r].map(([e,a])=>({label:e,count:a})).sort((e,a)=>a.count-e.count||e.label.localeCompare(a.label))}function y$2(t,n,l){let r=new Date(l.getFullYear()-1,l.getMonth(),l.getDate()),e=t.filter(a=>a.isAvailable).length;return{total:t.length,available:e,unavailable:t.length-e,withStats:n.filter(a=>a.stats!==null).length,releasedLastYear:n.filter(a=>{let s=m$2(a.releaseDate,l);return s!==null&&s>r&&s<=l}).length}}function d$1(t){return i(t,n=>n.brand).map(({label:n})=>{let l=t.filter(e=>e.brand===n),r=l.filter(e=>e.isAvailable).length;return{brand:n,available:r,unavailable:l.length-r}})}function f$1(t){return i(t,n=>n.brand).map(({label:n})=>{let l=t.filter(r=>r.brand===n);return{brand:n,symmetrical:l.filter(r=>r.symmetry===`Symmetrical`).length,asymmetrical:l.filter(r=>r.symmetry===`Asymmetrical`).length}})}function g(t){let n=t.map(e=>({ball:e,year:m$2(e.releaseDate)?.getFullYear()})).filter(e=>e.year!==void 0),l=[...new Set(n.map(e=>e.year))].sort((e,a)=>e-a),r=i(n.map(e=>e.ball),e=>e.brand).map(e=>e.label);return{years:l,brands:r,counts:l.map(e=>r.map(a=>n.filter(s=>s.year===e&&s.ball.brand===a).length)),undated:t.length-n.length}}function j$1(e){e||(e=h$3(ge$1));let t=new L$2(n=>{if(e.destroyed){n.next();return}return e.onDestroy(n.next.bind(n))});return n=>n.pipe(zo(t))}var m$1=class{source;destroyed=!1;destroyRef=h$3(ge$1);constructor(t){this.source=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(t){if(this.destroyed)throw new y$3(953,!1);let n=this.source.pipe(j$1(this.destroyRef)).subscribe({next:o=>t(o)});return{unsubscribe:()=>n.unsubscribe()}}};function G$3(e,t){return new m$1(e)}function L$1(e,t){let n=t?.injector??h$3(se$1),o=new Bo(1),c=Aa(()=>{let a;try{a=e()}catch(s){F$2(()=>o.error(s));return}F$2(()=>o.next(a))},{injector:n,manualCleanup:!0});return n.get(ge$1).onDestroy(()=>{c.destroy(),o.complete()}),o.asObservable()}function K$1(e,t){let o=!t?.manualCleanup?t?.injector?.get(ge$1)??h$3(ge$1):null,c=I$2(t?.equal),a;t?.requireSync?a=$$2({kind:0},{equal:c}):a=$$2({kind:1,value:t?.initialValue},{equal:c});let s,f=e.subscribe({next:l=>a.set({kind:1,value:l}),error:l=>{a.set({kind:2,error:l}),s?.()},complete:()=>{s?.()}});if(t?.requireSync&&a().kind===0)throw new y$3(601,!1);return s=o?.onDestroy(f.unsubscribe.bind(f)),Qe$3(()=>{let l=a();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new y$3(601,!1)}},{equal:t?.equal})}function I$2(e=Object.is){return(t,n)=>t.kind===1&&n.kind===1&&e(t.value,n.value)}function N$2(e){return e.thumbLocal??e.imageLocal}function Q$3(e){return e.smallThumbLocal??N$2(e)}function R$2(e){let t=e.normalizedName;return t.toLowerCase().startsWith(`${e.brand.toLowerCase()} `)?t:`${e.brand} ${t}`}function p$1(e){return R$2(e).normalize(`NFKD`).replace(/[̀-ͯ]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}function X$1(e){return`/ball/${p$1(e)}`}var M$2=class e{db=bq(()=>`/db.json`);isLoading=this.db.isLoading;error=this.db.error;isReady=Qe$3(()=>!this.isLoading()&&!this.error());loaded=Qe$3(()=>this.db.hasValue()?this.db.value():void 0);allBalls=Qe$3(()=>this.loaded()?.balls??[]);ballsBySlug=Qe$3(()=>new Map(this.allBalls().map(t=>[p$1(t),t])));settledBalls$=L$1(Qe$3(()=>this.isLoading()?void 0:this.allBalls())).pipe(Se$1(t=>t!==void 0),Ve$1(1));availableBalls=Qe$3(()=>this.allBalls().filter(t=>t.isAvailable));lookups=Qe$3(()=>this.loaded()?.lookups);static ɵfac=function(n){return new(n||e)};static ɵprov=P({token:e,factory:e.ɵfac,providedIn:`root`})};var h$2=`Down Lane Motion`;var u=`https://downlanemotion.com`;var $$1=60;var A=`Charts of Storm, Roto Grip and 900 Global bowling balls: reaction, RG and differential, look-alikes and side-by-side comparisons to help build an arsenal.`;var p={url:`${u}/og-image.png`,width:`1200`,height:`630`,alt:`Down Lane Motion: bowling ball reaction charts, RG and differential, look-alikes and side-by-side comparisons, with a row of bowling balls.`};var L=class t extends Sh{title=h$3(rC);meta=h$3($q);document=h$3(Y$1);updateTitle(n){let e=R$1(n.root),i=e.data.searchTitle??this.buildTitle(n),o=M$1(i),r=e.data.description??A,s=e.data.notFound===!0,a=u+n.url.split(/[?#]/)[0];this.title.setTitle(o),this.meta.updateTag({name:`description`,content:r}),this.meta.updateTag({property:`og:title`,content:o}),this.meta.updateTag({property:`og:description`,content:r}),this.setPreviewImage(e.data.image,e.data.imageAlt??i??h$2),s?(this.meta.updateTag({name:`robots`,content:`noindex`}),this.meta.removeTag(`property="og:url"`),this.canonicalLink()?.remove(),this.setStructuredData(null)):(this.meta.removeTag(`name="robots"`),this.meta.updateTag({property:`og:url`,content:a}),this.canonicalLink(!0).setAttribute(`href`,a),this.setStructuredData(D$1(a,i??h$2,r,{breadcrumbs:e.data.breadcrumbs,image:e.data.image,dateModified:this.stampedDate(a)})))}setPreviewImage(n,e){n?(this.meta.updateTag({property:`og:image`,content:f(n)}),this.meta.removeTag(`property="og:image:width"`),this.meta.removeTag(`property="og:image:height"`),this.meta.updateTag({property:`og:image:alt`,content:e}),this.meta.updateTag({name:`twitter:card`,content:`summary`})):(this.meta.updateTag({property:`og:image`,content:p.url}),this.meta.updateTag({property:`og:image:width`,content:p.width}),this.meta.updateTag({property:`og:image:height`,content:p.height}),this.meta.updateTag({property:`og:image:alt`,content:p.alt}),this.meta.updateTag({name:`twitter:card`,content:`summary_large_image`}))}setStructuredData(n){let e=this.document.head.querySelector(`script#dlm-structured-data`);if(!n){e?.remove();return}e||(e=this.document.createElement(`script`),e.id=`dlm-structured-data`,e.type=`application/ld+json`,this.document.head.appendChild(e)),e.textContent=JSON.stringify(n).replace(/</g,`\\u003c`)}stampedDate(n){let e=this.document.head.querySelector(`script#dlm-structured-data`)?.textContent;try{let o=(e?JSON.parse(e)[`@graph`]??[]:[]).find(r=>r[`@type`]===`WebPage`&&r.url===n);return typeof o?.dateModified==`string`?o.dateModified:void 0}catch{return}}canonicalLink(n=!1){let e=this.document.head.querySelector(`link[rel="canonical"]`);return!e&&n&&(e=this.document.createElement(`link`),e.setAttribute(`rel`,`canonical`),this.document.head.appendChild(e)),e}static ɵfac=(()=>{let n;return function(i){return(n||(n=Ty(t)))(i||t)}})();static ɵprov=P({token:t,factory:t.ɵfac,providedIn:`root`})};function D$1(t,n,e,i={}){let o={"@type":`WebSite`,"@id":`${u}/#website`,name:h$2,url:`${u}/`},r={"@type":`WebPage`,name:n,description:e,url:t,isPartOf:{"@id":o[`@id`]}},s=[o,r];if(i.dateModified&&(r.dateModified=i.dateModified),i.image&&(r.primaryImageOfPage={"@type":`ImageObject`,url:f(i.image)}),i.breadcrumbs?.length){let a={"@type":`BreadcrumbList`,"@id":`${t}#breadcrumb`,itemListElement:i.breadcrumbs.map((l,d)=>({"@type":`ListItem`,position:d+1,name:l.name,item:f(l.path)}))};r.breadcrumb={"@id":a[`@id`]},s.push(a)}return{"@context":`https://schema.org`,"@graph":s}}function M$1(t){if(!t)return h$2;let n=`${t} | ${h$2}`;return n.length<=$$1?n:t}function f(t){return encodeURI(`${u}/${t.replace(/^\//,``)}`)}function R$1(t){return t.firstChild?R$1(t.firstChild):t}var I$1=160;function w$2(t){let n=t.versionByWeight;return n.length?n.find(e=>e.weight===15)??n.reduce((e,i)=>i.weight>e.weight?i:e):null}function y$1(t){return/^[aeiou]/i.test(t)?`an`:`a`}function tt$1(t,n=new Date){let e=[t.symmetry,t.coverstockType].filter(c=>!!c).map(c=>c.toLowerCase()),i=e.length?`${y$1(e[0])} ${e.join(` `)} bowling ball`:`a bowling ball`,o=t.line?`${t.brand}'s ${t.line} line`:t.brand,r=m$2(t.releaseDate,n),s=r?`, released in ${r.toLocaleDateString(`en-US`,{month:`long`,year:`numeric`})}`:``,a=[`The ${R$2(t)} is ${i} from ${o}${s}.`],l=[t.coverstock&&`the ${t.coverstock} coverstock`,t.weightBlock&&`the ${t.weightBlock} weight block`].filter(c=>!!c);if(l.length){let c=t.factoryFinish?`, finished at ${t.factoryFinish} out of the box`:``;a.push(`It has ${l.join(` and `)}${c}.`)}let d=w$2(t);if(d){let c=d.psa!==null?` and a PSA of ${d.psa}`:``;a.push(`At ${d.weight} lb its RG is ${d.radiusOfGyration}, with a differential of ${d.differential}${c}.`)}return t.isAvailable||a.push(`It's been discontinued.`),a.join(` `)}var N$1={oilVolume:[`light`,`medium`,`heavy`],patternLength:[`short`,`medium`,`long`],laneCondition:[`fresh`,`transition`,`burn`],hookLength:[`early`,`mid-lane`,`late`],ballShape:[`smooth`,`moderate`,`angular`],flarePotential:[`low`,`medium`,`high`]};function G$2(t,n){let e=s=>s<=4?0:s>=8?2:1,[i,o]=[e(t.min),e(t.max)],r=N$1[n];return i===o?r[i]:`${r[i]} to ${r[o]}`}function et$2(t){let n=t.stats;if(!n)return null;let e=r=>G$2(n[r],r),i=e(`hookLength`),o=e(`ballShape`);return`Its reaction ratings suit it to ${e(`oilVolume`)} oil and ${e(`patternLength`)} patterns in ${e(`laneCondition`)} conditions, with ${y$1(i)} ${i} hook, ${y$1(o)} ${o} turn at the breakpoint and ${e(`flarePotential`)} flare.`}function x(t,n){let e=i=>n.filter(i).length/n.length;return e(i=>i>t)>=2/3?`low`:e(i=>i<t)>=2/3?`high`:`medium`}var F$1={low:`, so it revs up early`,medium:``,high:`, so it gets down the lane before it revs up`};var O={low:`, for less flare and a steadier motion`,medium:``,high:`, for more flare`};function nt$2(t,n){let e=w$2(t);if(!e)return null;let i=n.flatMap(s=>s.versionByWeight.filter(a=>a.weight===e.weight));if(i.length<3)return null;let o=x(e.radiusOfGyration,i.map(s=>s.radiusOfGyration)),r=x(e.differential,i.map(s=>s.differential));return`Among the ${i.length} balls here with a ${e.weight} lb version, its RG is ${o}${F$1[o]}, and its differential is ${r}${O[r]}.`}function it$2(t,n){let e=t.normalizedName.toLowerCase(),i=n.filter(a=>a.id!==t.id&&a.brand===t.brand).sort((a,l)=>a.normalizedName.localeCompare(l.normalizedName)),o=a=>{let l=a.normalizedName.toLowerCase();return l.startsWith(`${e} `)||e.startsWith(`${l} `)};return{versions:i.filter(o),line:t.line?i.filter(a=>a.line===t.line&&!o(a)):[]}}function rt$1(t,n){let e=`${t.brand}'s ${t.line} line`;return n.versions.length&&n.line.length?`Other versions of the ${R$2(t)}, then the rest of ${e}.`:n.versions.length?`Other versions of the ${R$2(t)}.`:n.line.length?`The rest of ${e}.`:null}function ot$2(t){let n=R$2(t),e=w$2(t),i=e?`RG ${e.radiusOfGyration} and differential ${e.differential} at ${e.weight} lb`:null,o=t.stats?`reaction ratings and the balls most like it`:e?`the RG and differential at every weight`:null,r=[[t.coverstock&&`${t.coverstock} cover`,t.weightBlock&&`${t.weightBlock} weight block`,i],[t.coverstock&&`${t.coverstock} cover`,i],[i],[t.coverstock&&`coverstock`,t.weightBlock&&`weight block`]];for(let a of r){let l=a.filter(C=>!!C),d=o?[...l,l.length&&!t.stats?`and ${o}`:o]:l,c=d.length?`${n} specs: ${d.join(`, `)}.`:`${n} specs.`;if(c.length<=I$1)return c}return`${n} specs${t.stats?`, reaction ratings and similar bowling balls`:``}.`.slice(0,I$1)}function at$2(t){return`${R$2(t)} bowling ball`}function st$2(t){let n=`${R$2(t)} Specs and Similar Balls`;return n.length<=$$1?n:`${R$2(t)} Specs`}var m=`dlm-theme`;var h$1=class a{document=h$3(Y$1);theme=$$2(this.readInitialTheme());constructor(){let e=this.theme();Aa(()=>{let t=this.theme();if(this.document.documentElement.setAttribute(`data-theme`,t),t!==e){e=t;try{localStorage.setItem(m,t)}catch{}}})}toggle(){this.theme.update(e=>e===`dark`?`light`:`dark`)}readInitialTheme(){try{let e=localStorage.getItem(m);if(e===`light`||e===`dark`)return e}catch{}return this.document.defaultView?.matchMedia?.(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}static ɵfac=function(t){return new(t||a)};static ɵprov=P({token:a,factory:a.ɵfac,providedIn:`root`})};function et$1(n){return n.buttons===0||n.detail===0}function nt$1(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var Vt;function ze$1(){if(Vt==null){let n=typeof document<`u`?document.head:null;Vt=!!(n&&(n.createShadowRoot||n.attachShadow))}return Vt}function Wt$1(n){if(ze$1()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function Tn(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let o=n.shadowRoot.activeElement;if(o===n)break;n=o}return n}function I(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var Kt;try{Kt=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Kt=!1}var y=(()=>{class n{_platformId=h$3(di);isBrowser=this._platformId?m3(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Kt)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var at$1;function Be$1(){if(at$1==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>at$1=!0}))}finally{at$1=at$1||!1}return at$1}function G$1(n){return Be$1()?n:!!n.capture}function $t(n,o=0){return Ue$2(n)?Number(n):arguments.length===2?o:0}function Ue$2(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function C(n){return n instanceof sn$1?n.nativeElement:n}var je$2=new I$3(`cdk-input-modality-detector-options`);var He$1={ignoreKeys:[18,17,224,91,16]};var Ve=650;var Zt={passive:!0,capture:!0};var We$2=(()=>{class n{_platform=h$3(y);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ie$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=I(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Ve||(this._modality.next(et$1(t)?`keyboard`:`mouse`),this._mostRecentTarget=I(t))};_onTouchstart=t=>{if(nt$1(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=I(t)};constructor(){let t=h$3(we$1),e=h$3(Y$1),a=h$3(je$2,{optional:!0});if(this._options=D$2(D$2({},He$1),a),this.modalityDetected=this._modality.pipe(jw(1)),this.modalityChanged=this.modalityDetected.pipe(rg()),this._platform.isBrowser){let i=h$3(Dr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,`keydown`,this._onKeydown,Zt),i.listen(e,`mousedown`,this._onMousedown,Zt),i.listen(e,`touchstart`,this._onTouchstart,Zt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var ot$1=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(ot$1||{});var Ke$2=new I$3(`cdk-focus-monitor-default-options`);var Et=G$1({passive:!0,capture:!0});var Gt=(()=>{class n{_ngZone=h$3(we$1);_platform=h$3(y);_inputModalityDetector=h$3(We$2);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=h$3(Y$1);_stopInputModalityDetector=new X$2;constructor(){let t=h$3(Ke$2,{optional:!0});this._detectionMode=t?.detectionMode||ot$1.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=I(t);for(let a=e;a;a=a.parentElement)t.type===`focus`?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=C(t);if(!this._platform.isBrowser||a.nodeType!==1)return N$3();let i=Wt$1(a)||this._document,r=this._elementInfo.get(a);if(r)return e&&(r.checkChildren=!0),r.subject;let c={checkChildren:e,subject:new X$2,rootNode:i};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=C(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let i=C(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,d])=>this._originChanged(c,e,d)):(this._setOrigin(e),typeof i.focus==`function`&&i.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===ot$1.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===ot$1.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Ve:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),i=I(t);!a||!a.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Et),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Et)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(zo(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Et),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Et),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,i)=>{(i===t||a.checkChildren&&i.contains(t))&&e.push([i,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let r=0;r<i.length;r++)if(i[r].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var It=new WeakMap;var F=(()=>{class n{_appRef;_injector=h$3(se$1);_environmentInjector=h$3(ee$1);load(t){let e=this._appRef=this._appRef||this._injector.get(Ue$3),a=It.get(e);a||(a={loaders:new Set,refs:[]},It.set(e,a),e.onDestroy(()=>{It.get(e)?.refs.forEach(i=>i.destroy()),It.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(R8(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var Mt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=ep({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();var At;function Fn(){if(At===void 0&&(At=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{At=n.trustedTypes.createPolicy(`angular#components`,{createHTML:o=>o})}catch(o){console.error(o)}}return At}function U(n){return Fn()?.createHTML(n)||n}function $e$2(n,o,t){n.innerHTML=U(t.sanitize(J$1.HTML,o)||``)}function Yt$1(n){return Array.isArray(n)?n:[n]}var Ze$2=new Set;var j;var kt=(()=>{class n{_platform=h$3(y);_nonce=h$3(fi$1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Rn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Dn(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();function Dn(n,o){if(!Ze$2.has(n))try{j||(j=document.createElement(`style`),o&&j.setAttribute(`nonce`,o),j.setAttribute(`type`,`text/css`),document.head.appendChild(j)),j.sheet&&(j.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),Ze$2.add(n))}catch(t){console.error(t)}}function Rn(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var qt=(()=>{class n{_mediaMatcher=h$3(kt);_zone=h$3(we$1);_queries=new Map;_destroySubject=new X$2;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Ge$1(Yt$1(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){let a=Ge$1(Yt$1(t)).map(r=>this._registerQuery(r).observable),i=Hu(a);return i=hn$1(i.pipe(Ve$1(1)),i.pipe(jw(1),xw(0))),i.pipe(G$4(r=>{let c={matches:!1,breakpoints:{}};return r.forEach(({matches:d,query:b})=>{c.matches=c.matches||d,c.breakpoints[b]=d}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new L$2(r=>{let c=d=>this._zone.run(()=>r.next(d));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(Wu(e),G$4(({matches:r})=>({query:t,matches:r})),zo(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();function Ge$1(n){return n.map(o=>o.split(`,`)).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}function On(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let o=0;o<n.addedNodes.length;o++)if(!(n.addedNodes[o]instanceof Comment))return!1;for(let o=0;o<n.removedNodes.length;o++)if(!(n.removedNodes[o]instanceof Comment))return!1;return!0}return!1}var Ye$2=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var qe$2=(()=>{class n{_mutationObserverFactory=h$3(Ye$2);_observedElements=new Map;_ngZone=h$3(we$1);ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=C(t);return new L$2(a=>{let r=this._observeElement(e).pipe(G$4(c=>c.filter(d=>!On(d))),Se$1(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{a.next(c)})});return()=>{r.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new X$2,a=this._mutationObserverFactory.create(i=>e.next(i));a&&a.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:a,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:a}=this._observedElements.get(t);e&&e.disconnect(),a.complete(),this._observedElements.delete(t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var fo=(()=>{class n{_contentObserver=h$3(qe$2);_elementRef=h$3(sn$1);event=new he;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=$t(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(xw(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Hc],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var Qe$2=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr({type:n});static ɵinj=In$1({providers:[Ye$2]})}return n})();var en=(()=>{class n{_platform=h$3(y);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return Ln(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Pn(Kn(t));if(e&&(Xe$1(e)===-1||!this.isVisible(e)))return!1;let a=t.nodeName.toLowerCase(),i=Xe$1(t);return t.hasAttribute(`contenteditable`)?i!==-1:a===`iframe`||a===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Vn(t)?!1:a===`audio`?t.hasAttribute(`controls`)?i!==-1:!1:a===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return Wn(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();function Pn(n){try{return n.frameElement}catch{return null}}function Ln(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function zn(n){let o=n.nodeName.toLowerCase();return o===`input`||o===`select`||o===`button`||o===`textarea`}function Bn(n){return jn(n)&&n.type==`hidden`}function Un(n){return Hn(n)&&n.hasAttribute(`href`)}function jn(n){return n.nodeName.toLowerCase()==`input`}function Hn(n){return n.nodeName.toLowerCase()==`a`}function nn(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let o=n.getAttribute(`tabindex`);return!!(o&&!isNaN(parseInt(o,10)))}function Xe$1(n){if(!nn(n))return null;let o=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(o)?-1:o}function Vn(n){let o=n.nodeName.toLowerCase(),t=o===`input`&&n.type;return t===`text`||t===`password`||o===`select`||o===`textarea`}function Wn(n){return Bn(n)?!1:zn(n)||Un(n)||n.hasAttribute(`contenteditable`)||nn(n)}function Kn(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Ct=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_enabled=!0;constructor(o,t,e,a,i=!1,r){this._element=o,this._checker=t,this._ngZone=e,this._document=a,this._injector=r,i||this.attachAnchors()}destroy(){let o=this._startAnchor,t=this._endAnchor;o&&(o.removeEventListener(`focus`,this.startAnchorListener),o.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){let t=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return o==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(o),!!e}return t.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){let t=this._getRegionBoundary(`start`);return t&&t.focus(o),!!t}focusLastTabbableElement(o){let t=this._getRegionBoundary(`end`);return t&&t.focus(o),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let t=o.children;for(let e=0;e<t.length;e++){let a=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(a)return a}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let t=o.children;for(let e=t.length-1;e>=0;e--){let a=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(a)return a}return null}_createAnchor(){let o=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add(`cdk-visually-hidden`),o.classList.add(`cdk-focus-trap-anchor`),o.setAttribute(`aria-hidden`,`true`),o}_toggleAnchorTabIndex(o,t){o?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){gc(o,{injector:this._injector})}};var $n=(()=>{class n{_checker=h$3(en);_ngZone=h$3(we$1);_document=h$3(Y$1);_injector=h$3(se$1);constructor(){h$3(F).load(Mt)}create(t,e=!1){return new Ct(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var an=new I$3(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var on=new I$3(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Zn=0;var Gn=(()=>{class n{_ngZone=h$3(we$1);_defaultOptions=h$3(on,{optional:!0});_liveElement;_document=h$3(Y$1);_sanitizer=h$3(Y0);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=h$3(an,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let a=this._defaultOptions,i,r;return e.length===1&&typeof e[0]==`number`?r=e[0]:[i,r]=e,this.clear(),clearTimeout(this._previousTimeout),i||(i=a&&a.politeness?a.politeness:`polite`),r==null&&a&&(r=a.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:$e$2(this._liveElement,t,this._sanitizer),typeof r==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),a=this._document.createElement(`div`);for(let i=0;i<e.length;i++)e[i].remove();return a.classList.add(t),a.classList.add(`cdk-visually-hidden`),a.setAttribute(`aria-atomic`,`true`),a.setAttribute(`aria-live`,`polite`),a.id=`cdk-live-announcer-${Zn++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<e.length;a++){let i=e[a],r=i.getAttribute(`aria-owns`);r?r.indexOf(t)===-1&&i.setAttribute(`aria-owns`,r+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var z=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(z||{});var Je$2=`cdk-high-contrast-black-on-white`;var tn=`cdk-high-contrast-white-on-black`;var Qt=`cdk-high-contrast-active`;var rn=(()=>{class n{_platform=h$3(y);_hasCheckedHighContrastMode=!1;_document=h$3(Y$1);_breakpointSubscription;constructor(){this._breakpointSubscription=h$3(qt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return z.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,a=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(a&&a.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return z.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return z.BLACK_ON_WHITE}return z.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Qt,Je$2,tn),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===z.BLACK_ON_WHITE?t.add(Qt,Je$2):e===z.WHITE_ON_BLACK&&t.add(Qt,tn)}}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var Yn=(()=>{class n{constructor(){h$3(rn)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||n)};static ɵmod=Tr({type:n});static ɵinj=In$1({imports:[Qe$2]})}return n})();var qn=200;var Tt=class{_letterKeyStream=new X$2;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new X$2;selectedItem=this._selectedItem;constructor(o,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:qn;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(o),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let t=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(tt$2(t=>this._pressedLetters.push(t)),xw(o),Se$1(()=>this._pressedLetters.length>0),G$4(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let a=(this._selectedItemIndex+e)%this._items.length,i=this._items[a];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function sn(n,...o){return o.length?o.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Y=class{_items;_activeItemIndex=$$2(-1);_activeItem=$$2(null);_wrap=!1;_typeaheadSubscription=le.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,t){this._items=o,o instanceof Ya?this._itemChangesSubscription=o.changes.subscribe(e=>this._itemsChanged(e.toArray())):io(o)&&(this._effectRef=Aa(()=>this._itemsChanged(o()),{injector:t}))}tabOut=new X$2;change=new X$2;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Tt(t,{debounceInterval:typeof o==`number`?o:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,t=10){return this._pageUpAndDown={enabled:o,delta:t},this}setActiveItem(o){let t=this._activeItem();this.updateActiveItem(o),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(o){let t=o.keyCode,a=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!o[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(i<r?i:r-1,-1);break}else return;default:(a||sn(o,`shiftKey`))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let t=this._getItemsArray(),e=typeof o==`number`?o:t.indexOf(o),a=t[e];this._activeItem.set(a??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let a=(this._activeItemIndex()+o*e+t.length)%t.length,i=t[a];if(!this._skipPredicateFn(i)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,t){let e=this._getItemsArray();if(e[o]){for(;this._skipPredicateFn(e[o]);)if(o+=t,!e[o])return;this.setActiveItem(o)}}_getItemsArray(){return io(this._items)?this._items():this._items instanceof Ya?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let t=this._activeItem();if(t){let e=o.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Xt$1=class extends Y{setActiveItem(o){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(o),this.activeItem&&this.activeItem.setActiveStyles()}};var Jt=class extends Y{_origin=`program`;setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var cn=new Map;var te=class n{_appId=h$3(It$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){this._appId!==`ng`&&(o+=this._appId);let e=cn.get(o);return e===void 0?e=0:e++,cn.set(o,e),`${o}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})};var dn=` `;function Qn$1(n,o,t){let e=Dt(n,o);t=t.trim(),!e.some(a=>a.trim()===t)&&(e.push(t),n.setAttribute(o,e.join(dn)))}function Xn(n,o,t){let e=Dt(n,o);t=t.trim();let a=e.filter(i=>i!==t);a.length?n.setAttribute(o,a.join(dn)):n.removeAttribute(o)}function Dt(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var ln=`cdk-describedby-message`;var Ft$1=`cdk-describedby-host`;var ne=0;var fi=(()=>{class n{_platform=h$3(y);_document=h$3(Y$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${ne++}`;constructor(){h$3(F).load(Mt),this._id=h$3(It$1)+`-`+ne++}describe(t,e,a){if(!this._canBeDescribed(t,e))return;let i=ee(e,a);typeof e!=`string`?(mn(e,this._id),this._messageRegistry.set(i,{messageElement:e,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(e,a),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,e,a){if(!e||!this._isElementNode(t))return;let i=ee(e,a);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof e==`string`){let r=this._messageRegistry.get(i);r&&r.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${Ft$1}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(Ft$1);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let a=this._document.createElement(`div`);mn(a,this._id),a.textContent=t,e&&a.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(ee(t,e),{messageElement:a,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<e.length;i++)e[i].remove();let a=this._document.createElement(`div`);a.style.visibility=`hidden`,a.classList.add(t),a.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||a.setAttribute(`platform`,`server`),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(t){let e=Dt(t,`aria-describedby`).filter(a=>a.indexOf(ln)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let a=this._messageRegistry.get(e);Qn$1(t,`aria-describedby`,a.messageElement.id),t.setAttribute(Ft$1,this._id),a.referenceCount++}_removeMessageReference(t,e){let a=this._messageRegistry.get(e);a.referenceCount--,Xn(t,`aria-describedby`,a.messageElement.id),t.removeAttribute(Ft$1)}_isElementDescribedByMessage(t,e){let a=Dt(t,`aria-describedby`),i=this._messageRegistry.get(e),r=i&&i.messageElement.id;return!!r&&a.indexOf(r)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let a=e==null?``:`${e}`.trim(),i=t.getAttribute(`aria-label`);return a?!i||i.trim()!==a:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();function ee(n,o){return typeof n==`string`?`${o||``}/${n}`:n}function mn(n,o){n.id||(n.id=`${ln}-${o}-${ne++}`)}var it$1=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(it$1||{});var Rt;var H;function Ni(){if(H==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return H=!1,H;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)H=!0;else{let n=Element.prototype.scrollTo;n?H=!/\{\s*\[native code\]\s*\}/.test(n.toString()):H=!1}}return H}function wi(){if(typeof document!=`object`||!document)return it$1.NORMAL;if(Rt==null){let n=document.createElement(`div`),o=n.style;n.dir=`rtl`,o.width=`1px`,o.overflow=`auto`,o.visibility=`hidden`,o.pointerEvents=`none`,o.position=`absolute`;let t=document.createElement(`div`),e=t.style;e.width=`2px`,e.height=`1px`,n.appendChild(t),document.body.appendChild(n),Rt=it$1.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Rt=n.scrollLeft===0?it$1.NEGATED:it$1.INVERTED),n.remove()}return Rt}function Ii(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var q$1;var un=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Mi(){if(q$1)return q$1;if(typeof document!=`object`||!document)return q$1=new Set(un),q$1;let n=document.createElement(`input`);return q$1=new Set(un.filter(o=>(n.setAttribute(`type`,o),n.type===o))),q$1}var Jn=new I$3(`MATERIAL_ANIMATIONS`);var bn=null;function ta(){return h$3(Jn,{optional:!0})?.animationsDisabled||h$3(_b,{optional:!0})===`NoopAnimations`?`di-disabled`:(bn??=h$3(kt).matchMedia(`(prefers-reduced-motion)`).matches,bn?`reduced-motion`:`enabled`)}function Q$2(){return ta()!==`enabled`}function zi(n){return n==null?``:typeof n==`string`?n:`${n}px`}function Ui(n){return n!=null&&`${n}`!=`false`}var w$1=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(w$1||{});var ae=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=w$1.HIDDEN;constructor(o,t,e,a=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}};var pn=G$1({passive:!0,capture:!0});var oe=class{_events=new Map;addHandler(o,t,e,a){let i=this._events.get(t);if(i){let r=i.get(e);r?r.add(a):i.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,pn)})}removeHandler(o,t,e){let a=this._events.get(o);if(!a)return;let i=a.get(t);i&&(i.delete(e),i.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,pn)))}_delegateEventHandler=o=>{let t=I(o);t&&this._events.get(o.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(i=>i.handleEvent(o))})}};var rt={enterDuration:225,exitDuration:150};var ea=800;var fn=G$1({passive:!0,capture:!0});var hn=[`mousedown`,`touchstart`];var vn=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var na=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=ep({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var st$1=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new oe;constructor(o,t,e,a,i){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=C(e)),i&&i.get(F).load(na)}fadeInRipple(o,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=D$2(D$2({},rt),e.animation);e.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let r=e.radius||aa(o,t,a),c=o-a.left,d=t-a.top,b=i.enterDuration,l=document.createElement(`div`);l.classList.add(`mat-ripple-element`),l.style.left=`${c-r}px`,l.style.top=`${d-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,e.color!=null&&(l.style.backgroundColor=e.color),l.style.transitionDuration=`${b}ms`,this._containerElement.appendChild(l);let me=window.getComputedStyle(l),Cn=me.transitionProperty,de=me.transitionDuration,Lt=Cn===`none`||de===`0s`||de===`0s, 0s`||a.width===0&&a.height===0,B=new ae(this,l,e,Lt);l.style.transform=`scale3d(1, 1, 1)`,B.state=w$1.FADING_IN,e.persistent||(this._mostRecentTransientRipple=B);let ct=null;return!Lt&&(b||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let le=()=>{ct&&(ct.fallbackTimer=null),clearTimeout(ue),this._finishRippleTransition(B)},zt=()=>this._destroyRipple(B),ue=setTimeout(zt,b+100);l.addEventListener(`transitionend`,le),l.addEventListener(`transitioncancel`,zt),ct={onTransitionEnd:le,onTransitionCancel:zt,fallbackTimer:ue}}),this._activeRipples.set(B,ct),(Lt||!b)&&this._finishRippleTransition(B),B}fadeOutRipple(o){if(o.state===w$1.FADING_OUT||o.state===w$1.HIDDEN)return;let t=o.element,e=D$2(D$2({},rt),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,o.state=w$1.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=C(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,hn.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type===`mousedown`?this._onMousedown(o):o.type===`touchstart`?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{vn.forEach(t=>{this._triggerElement.addEventListener(t,this,fn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===w$1.FADING_IN?this._startFadeOutTransition(o):o.state===w$1.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=w$1.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=w$1.HIDDEN,t!==null&&(o.element.removeEventListener(`transitionend`,t.onTransitionEnd),o.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=et$1(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ea;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!nt$1(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===w$1.VISIBLE||o.config.terminateOnPointerUp&&o.state===w$1.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(hn.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(vn.forEach(t=>o.removeEventListener(t,this,fn)),this._pointerUpEventsRegistered=!1))}};function aa(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+a*a)}var ie=new I$3(`mat-ripple-global-options`);var Ji=(()=>{class n{_elementRef=h$3(sn$1);_animationsDisabled=Q$2();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=h$3(we$1),e=h$3(y),a=h$3(ie,{optional:!0}),i=h$3(se$1);this._globalOptions=a||{},this._rippleRenderer=new st$1(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:D$2(D$2(D$2({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,a){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,D$2(D$2({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,D$2(D$2({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,a){e&2&&aE(`mat-ripple-unbounded`,a.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var oa={capture:!0};var ia=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var re=`mat-ripple-loader-uninitialized`;var se=`mat-ripple-loader-class-name`;var gn=`mat-ripple-loader-centered`;var Ot=`mat-ripple-loader-disabled`;var yn=(()=>{class n{_document=h$3(Y$1);_animationsDisabled=Q$2();_globalRippleOptions=h$3(ie,{optional:!0});_platform=h$3(y);_ngZone=h$3(we$1);_injector=h$3(se$1);_eventCleanups;_hosts=new Map;constructor(){let t=h$3(Dr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ia.map(e=>t.listen(this._document,e,this._onInteraction,oa)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(re,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(se))&&t.setAttribute(se,e.className||``),e.centered&&t.setAttribute(gn,``),e.disabled&&t.setAttribute(Ot,``)}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ot,``):t.removeAttribute(Ot)}_onInteraction=t=>{let e=I(t);if(e instanceof HTMLElement){let a=e.closest(`[${re}="${this._globalRippleOptions?.namespace??``}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(se)),t.append(e);let a=this._globalRippleOptions,i=this._animationsDisabled?0:a?.animation?.enterDuration??rt.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??rt.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(Ot),rippleConfig:{centered:t.hasAttribute(gn),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},d=new st$1(c,this._ngZone,e,this._platform,this._injector),b=!c.rippleDisabled;b&&d.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:d,hasSetUpEvents:b}),t.removeAttribute(re)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=Z$1({token:n,factory:n.ɵfac})}return n})();var _n=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=ep({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var ra=new I$3(`MAT_BUTTON_CONFIG`);function xn(n){return n==null?void 0:M8(n)}var ce=(()=>{class n{_elementRef=h$3(sn$1);_ngZone=h$3(we$1);_animationsDisabled=Q$2();_config=h$3(ra,{optional:!0});_focusMonitor=h$3(Gt);_cleanupClick;_renderer=h$3(Er);_rippleLoader=h$3(yn);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Vc(!1,{transform:Hc});constructor(){h$3(F).load(_n);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,a){e&2&&(Li(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a._getAriaDisabled())(`tabindex`,a._getTabIndex()),BN(a.color?`mat-`+a.color:``),aE(`mat-mdc-button-progress-indicator-shown`,a.showProgress())(`mat-mdc-button-disabled`,a.disabled)(`mat-mdc-button-disabled-interactive`,a.disabledInteractive)(`mat-unthemed`,!a.color)(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Hc],disabled:[2,`disabled`,`disabled`,Hc],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Hc],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Hc],tabIndex:[2,`tabIndex`,`tabIndex`,xn],_tabindex:[2,`tabindex`,`_tabindex`,xn],showProgress:[1,`showProgress`]}})}return n})();var sa=(()=>{class n extends ce{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function a(i,r){i&1&&(ap(0,`div`,1),TN(1,1),cp())}return ep({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[OD],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(SN(t),GD(0,`span`,0),TN(1),cN(2,a,2,0,`div`,1),GD(3,`span`,2)(4,`span`,3)),r&2&&(kT(2),lN(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();var Sn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr({type:n});static ɵinj=In$1({imports:[i4]})}return n})();var Nn=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Ir=(()=>{class n extends ce{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=ca(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?Nn.get(this._appearance):null,i=Nn.get(t);a&&e.remove(...a),e.add(...i),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(i,r){i&1&&(ap(0,`div`,2),TN(1,3),cp())}return ep({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[OD],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(SN(t),GD(0,`span`,0),TN(1),ap(2,`span`,1),TN(3,1),cp(),TN(4,2),cN(5,a,2,0,`div`,2),GD(6,`span`,3)(7,`span`,4)),r&2&&(aE(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),kT(5),lN(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();function ca(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var Ar=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr({type:n});static ɵinj=In$1({imports:[Sn,i4]})}return n})();function wn(n){return Error(`Unable to find icon with the name "${n}"`)}function ma(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function En(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function In(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var D=class{url;svgText;options;svgElement=null;constructor(o,t,e){this.url=o,this.svgText=t,this.options=e}};var Mn=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,a,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._document=a}addSvgIcon(t,e,a){return this.addSvgIconInNamespace(``,t,e,a)}addSvgIconLiteral(t,e,a){return this.addSvgIconLiteralInNamespace(``,t,e,a)}addSvgIconInNamespace(t,e,a,i){return this._addSvgIconConfig(t,e,new D(a,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,a,i){let r=this._sanitizer.sanitize(J$1.HTML,a);if(!r)throw In(a);let c=U(r);return this._addSvgIconConfig(t,e,new D(``,c,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,a){return this._addSvgIconSetConfig(t,new D(e,null,a))}addSvgIconSetLiteralInNamespace(t,e,a){let i=this._sanitizer.sanitize(J$1.HTML,e);if(!i)throw In(e);let r=U(i);return this._addSvgIconSetConfig(t,new D(``,r,a))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=la(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(J$1.RESOURCE_URL,t);if(!e)throw En(t);let a=this._cachedIconsByUrl.get(e);return a?N$3(Pt(a)):this._loadSvgIconFromConfig(new D(t,null)).pipe(tt$2(i=>this._cachedIconsByUrl.set(e,i)),G$4(i=>Pt(i)))}getNamedSvgIcon(t,e=``){let a=An(e,t),i=this._svgIconConfigs.get(a);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(a,i),this._getSvgFromConfig(i);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):Vu(wn(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?N$3(Pt(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(G$4(e=>Pt(e)))}_getSvgFromIconSetConfigs(t,e){let a=this._extractIconWithNameFromAnySet(t,e);if(a)return N$3(a);let i=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Wn$1(c=>{let b=`Loading icon set URL: ${this._sanitizer.sanitize(J$1.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(b)),N$3(null)})));return Nw(i).pipe(G$4(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw wn(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let a=e.length-1;a>=0;a--){let i=e[a];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(r,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(tt$2(e=>t.svgText=e),G$4(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?N$3(null):this._fetchIcon(t).pipe(tt$2(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,a){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let r=i.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,a);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),a);let c=this._svgElementFromString(U(`<svg></svg>`));return c.appendChild(r),this._setSvgAttributes(c,a)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let a=e.querySelector(`svg`);if(!a)throw Error(`<svg> tag not found`);return a}_toSvgElement(t){let e=this._svgElementFromString(U(`<svg></svg>`)),a=t.attributes;for(let i=0;i<a.length;i++){let{name:r,value:c}=a[i];r!==`id`&&e.setAttribute(r,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:a}=t,i=a?.withCredentials??!1;if(!this._httpClient)throw ma();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(J$1.RESOURCE_URL,e);if(!r)throw En(e);let c=this._inProgressUrlFetches.get(r);if(c)return c;let d=this._httpClient.get(r,{responseType:`text`,withCredentials:i}).pipe(G$4(b=>U(b)),$o(()=>this._inProgressUrlFetches.delete(r)),qu());return this._inProgressUrlFetches.set(r,d),d}_addSvgIconConfig(t,e,a){return this._svgIconConfigs.set(An(t,e),a),this}_addSvgIconSetConfig(t,e){let a=this._iconSetConfigs.get(t);return a?a.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let a=0;a<this._resolvers.length;a++){let i=this._resolvers[a](e,t);if(i)return da(i)?new D(i.url,null,i.options):new D(i,null)}}static ɵfac=function(e){return new(e||n)(S(Zp,8),S(Y0),S(Y$1,8),S(rt$2))};static ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function Pt(n){return n.cloneNode(!0)}function An(n,o){return n+`:`+o}function da(n){return!!(n.url&&n.options)}function la(n){let o=null,t=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(e=>{let a=e.family.replace(/['"]/g,``).trim().toLowerCase();(a===`material icons`||a.startsWith(`material icons `))&&(t=!0),a.startsWith(`material symbols rounded`)?o=`rounded`:a.startsWith(`material symbols sharp`)?o=`sharp`:a.startsWith(`material symbols`)&&(o=`outlined`)}),[o&&!t?`material-symbols-${o}`:`material-icons`,`mat-ligature-font`]}var ua=new I$3(`MAT_ICON_DEFAULT_OPTIONS`);var ba=new I$3(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=h$3(Y$1),o=n?n.location:null;return{getPathname:()=>o?o.pathname+o.search:``}}});var kn=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var pa=kn.map(n=>`[${n}]`).join(`, `);var fa=/^url\(['"]?#(.*?)['"]?\)$/;var Gr=(()=>{class n{_elementRef=h$3(sn$1);_iconRegistry=h$3(Mn);_location=h$3(ba);_errorHandler=h$3(rt$2);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=le.EMPTY;constructor(){let t=h$3(new Bc(`aria-hidden`),{optional:!0}),e=h$3(ua,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let a=t.childNodes[e];(a.nodeType!==1||a.nodeName.toLowerCase()===`svg`)&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>t.classList.remove(a)),e.forEach(a=>t.classList.add(a)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,a=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((i,r)=>{i.forEach(c=>{r.setAttribute(c.name,`url('${a}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(pa),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)kn.forEach(r=>{let c=e[i],d=c.getAttribute(r),b=d?d.match(fa):null;if(b){let l=a.get(c);l||(l=[],a.set(c,l)),l.push({name:r,value:b[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,a]=this._splitIconName(t);e&&(this._svgNamespace=e),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,e).pipe(Ve$1(1)).subscribe(i=>this._setSvgElement(i),i=>{let r=`Error retrieving icon ${e}:${a}! ${i.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return ep({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(a,i){a&2&&(Li(`data-mat-icon-type`,i._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,i._svgName||i.fontIcon)(`data-mat-icon-namespace`,i._svgNamespace||i.fontSet)(`fontIcon`,i._usingFontIcon()?i.fontIcon:null),BN(i.color?`mat-`+i.color:``),aE(`mat-icon-inline`,i.inline)(`mat-icon-no-color`,i.color!==`primary`&&i.color!==`accent`&&i.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,Hc],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(SN(),TN(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return n})();var Yr=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr({type:n});static ɵinj=In$1({imports:[i4]})}return n})();var h=`(max-width: 599.98px), (max-height: 499.98px)`;var d=`(max-width: 599.98px)`;var l=`(hover: none) and (pointer: coarse)`;function E(t){let o=h$3(qt);return K$1(o.observe(t).pipe(G$4(p=>p.matches)),{initialValue:o.isMatched(t)})}var o=`https://github.com/PioneerCode/down-lane-motion-community`;function a(t){return`${o}/issues/new?${new URLSearchParams({template:`data-correction.yml`,title:`[Data]: ${t.name}`,ball:t.name})}`}var Fe$1=20;var B=(()=>{class o{_ngZone=h$3(we$1);_platform=h$3(y);_renderer=h$3(Dr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new X$2;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Fe$1){return this._platform.isBrowser?new L$2(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe(Aw(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):N$3()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let n=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Se$1(s=>!s||n.indexOf(s)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((n,s)=>{this._targetContainsElement(s,t)&&e.push(s)}),e}_targetContainsElement(t,e){let n=C(e),s=t.getElementRef().nativeElement;do if(n==s)return!0;while(n=n.parentElement);return!1}static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var Be=(()=>{class o{elementRef=h$3(sn$1);scrollDispatcher=h$3(B);ngZone=h$3(we$1);dir=h$3(VO,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new X$2;_renderer=h$3(Er);_cleanupScroll;_elementScrolled=new X$2;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;t.left??=n?t.end:t.start,t.right??=n?t.start:t.end,t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),n&&wi()!=it$1.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),wi()==it$1.INVERTED?t.left=t.right:wi()==it$1.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Ni()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e=`left`,n=`right`,s=this.elementRef.nativeElement;if(t==`top`)return s.scrollTop;if(t==`bottom`)return s.scrollHeight-s.clientHeight-s.scrollTop;let r=this.dir&&this.dir.value==`rtl`;return t==`start`?t=r?n:e:t==`end`&&(t=r?e:n),r&&wi()==it$1.INVERTED?t==e?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:r&&wi()==it$1.NEGATED?t==e?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:t==e?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static ɵfac=function(e){return new(e||o)};static ɵdir=un$1({type:o,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return o})();var Ne=20;var X=(()=>{class o{_platform=h$3(y);_listeners;_viewportSize=null;_change=new X$2;_document=h$3(Y$1);constructor(){let t=h$3(we$1),e=h$3(Dr).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=s=>this._change.next(s);this._listeners=[e.listen(`window`,`resize`,n),e.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+e,height:n,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),n=t.documentElement,s=n.getBoundingClientRect();return{top:-s.top||t.body?.scrollTop||e.scrollY||n.scrollTop||0,left:-s.left||t.body?.scrollLeft||e.scrollX||n.scrollLeft||0}}change(t=Ne){return t>0?this._change.pipe(Aw(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var G=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Tr({type:o});static ɵinj=In$1({})}return o})();var Lt=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Tr({type:o});static ɵinj=In$1({imports:[i4,G,i4,G]})}return o})();var Z=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var $=class extends Z{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,t,e,n,s,r){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=n,this.bindings=s||null,this.directives=r||null}};var K=class extends Z{templateRef;viewContainerRef;context;injector;constructor(i,t,e,n){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var Ft=class extends Z{element;constructor(i){super(),this.element=i instanceof sn$1?i.nativeElement:i}};var Bt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof $)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof K)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Ft)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var ut=class extends Bt{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,n=e.get(Ir$1,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,n=i.injector||this._defaultInjector||se$1.NULL,s=n.get(ee$1,e.injector);t=R8(i.component,{elementInjector:n,environmentInjector:s,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(n=>this.outletElement.appendChild(n)),e.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(e);n!==-1&&t.remove(n)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var pe=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Tr({type:o});static ɵinj=In$1({})}return o})();var ue=Ni();function we(o){return new ft(o.get(X),o.get(Y$1))}var ft=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=zi(-this._previousScrollPosition.left),i.style.top=zi(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,n=t.style,s=e.scrollBehavior||``,r=n.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),ue&&(e.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ue&&(e.scrollBehavior=s,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function Ce(o,i){return new _t(o.get(B),o.get(we$1),o.get(X),i)}var _t=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,t,e,n){this._scrollDispatcher=i,this._ngZone=t,this._viewportRuler=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Se$1(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var q=class{enable(){}disable(){}attach(){}};function zt(o,i){return i.some(t=>{let e=o.bottom<t.top,n=o.top>t.bottom,s=o.right<t.left,r=o.left>t.right;return e||n||s||r})}function fe(o,i){return i.some(t=>{let e=o.top<t.top,n=o.bottom>t.bottom,s=o.left<t.left,r=o.right>t.right;return e||n||s||r})}function J(o,i){return new gt$1(o.get(B),o.get(X),o.get(we$1),i)}var gt$1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,n){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:n}=this._viewportRuler.getViewportSize();zt(t,[{width:e,height:n,bottom:n,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var ke=(()=>{class o{_injector=h$3(se$1);noop=()=>new q;close=t=>Ce(this._injector,t);block=()=>we(this._injector);reposition=t=>J(this._injector,t);static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var Q$1=class{positionStrategy;scrollStrategy=new q;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var mt$1=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var Se=(()=>{class o{_attachedOverlays=[];_document=h$3(Y$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var Oe=(()=>{class o extends Se{_ngZone=h$3(we$1);_renderer=h$3(Dr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let n=e.length-1;n>-1;n--){let s=e[n];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var Re=(()=>{class o extends Se{_platform=h$3(y);_ngZone=h$3(we$1);_renderer=h$3(Dr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,n={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(e,`pointerdown`,this._pointerDownListener,n),s.listen(e,`click`,this._clickListener,n),s.listen(e,`auxclick`,this._clickListener,n),s.listen(e,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=I(t)};_clickListener=t=>{let e=I(t),n=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let r=s.length-1;r>-1;r--){let a=s[r],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,c))){if(_e(a.overlayElement,e)||_e(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();function _e(o,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=i;for(;e;){if(e===o)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var xe=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=ep({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return o})();var Pe=(()=>{class o{_platform=h$3(y);_containerElement;_document=h$3(Y$1);_styleLoader=h$3(F);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Ii()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<n.length;s++)n[s].remove()}let e=this._document.createElement(`div`);e.classList.add(t),Ii()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(xe)}static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var Ht=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,n){this._renderer=t,this._ngZone=e,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Wt(o){return o&&o.nodeType===1}var Nt=$$2([]);var vt$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new X$2;_attachments=new X$2;_detachments=new X$2;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new X$2;_outsidePointerEvents=new X$2;_afterNextRenderRef;constructor(i,t,e,n,s,r,a,c,p,h=!1,d,_){this._portalOutlet=i,this._host=t,this._pane=e,this._config=n,this._ngZone=s,this._keyboardDispatcher=r,this._document=a,this._location=c,this._outsideClickDispatcher=p,this._animationsDisabled=h,this._injector=d,this._renderer=_,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),F$2(()=>{Nt.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=gc(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),F$2(()=>{Nt.update(t=>t.filter(e=>e!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,F$2(()=>{Nt.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=D$2(D$2({},this._config),i),this._updateElementSize()}setDirection(i){this._config=B$1(D$2({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=zi(this._config.width),i.height=zi(this._config.height),i.minWidth=zi(this._config.minWidth),i.minHeight=zi(this._config.minHeight),i.maxWidth=zi(this._config.maxWidth),i.maxHeight=zi(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Wt(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Ht(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let n=Yt$1(t||[]).filter(s=>!!s);n.length&&(e?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=gc(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var ge=`cdk-overlay-connected-position-bounding-box`;var ze=/([A-Za-z%]+)$/;function tt(o,i){return new yt(i,o.get(X),o.get(Y$1),o.get(y),o.get(Pe))}var yt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new X$2;_resizeSubscription=le.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,n,s){this._viewportRuler=t,this._document=e,this._platform=n,this._overlayContainer=s,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(ge),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,n=this._containerRect,s=[],r;for(let a of this._preferredPositions){let c=this._getOriginPoint(i,n,a),p=this._getOverlayPoint(c,t,a),h=this._getOverlayFit(p,t,e,a);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(h,p,e)){s.push({position:a,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!r||r.overlayFit.visibleArea<h.visibleArea)&&(r={overlayFit:h,overlayPoint:p,originPoint:c,position:a,overlayRect:t})}if(s.length){let a=null,c=-1;for(let p of s){let h=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);h>c&&(c=h,a=p)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&N(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ge),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof sn$1?this._origin.nativeElement:Wt(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let n;if(e.originX==`center`)n=i.left+i.width/2;else{let r=this._isRtl()?i.right:i.left,a=this._isRtl()?i.left:i.right;n=e.originX==`start`?r:a}t.left<0&&(n-=t.left);let s;return e.originY==`center`?s=i.top+i.height/2:s=e.originY==`top`?i.top:i.bottom,t.top<0&&(s-=t.top),{x:n,y:s}}_getOverlayPoint(i,t,e){let n;e.overlayX==`center`?n=-t.width/2:e.overlayX===`start`?n=this._isRtl()?-t.width:0:n=this._isRtl()?0:-t.width;let s;return e.overlayY==`center`?s=-t.height/2:s=e.overlayY==`top`?0:-t.height,{x:i.x+n,y:i.y+s}}_getOverlayFit(i,t,e,n){let s=ve(t),{x:r,y:a}=i,c=this._getOffset(n,`x`),p=this._getOffset(n,`y`);c&&(r+=c),p&&(a+=p);let h=0-r,d=r+s.width-e.width,_=0-a,y=a+s.height-e.height,g=this._subtractOverflows(s.width,h,d),k=this._subtractOverflows(s.height,_,y),Ut=g*k;return{visibleArea:Ut,isCompletelyWithinViewport:s.width*s.height===Ut,fitsInViewportVertically:k===s.height,fitsInViewportHorizontally:g==s.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let n=e.bottom-t.y,s=e.right-t.x,r=me(this._overlayRef.getConfig().minHeight),a=me(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||r!=null&&r<=n,p=i.fitsInViewportHorizontally||a!=null&&a<=s;return c&&p}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=ve(t),s=this._viewportRect,r=Math.max(i.x+n.width-s.width,0),a=Math.max(i.y+n.height-s.height,0),c=Math.max(s.top-e.top-i.y,0),p=Math.max(s.left-e.left-i.x,0),h=0,d=0;return n.width<=s.width?h=p||-r:h=i.x<this._getViewportMarginStart()?s.left-e.left-i.x:0,n.height<=s.height?d=c||-a:d=i.y<this._getViewportMarginTop()?s.top-e.top-i.y:0,this._previousPushAmount={x:h,y:d},{x:i.x+h,y:i.y+d}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!He(this._lastScrollVisibility,e)){let n=new mt$1(i,e);this._positionChanges.next(n)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,n=i.overlayY;i.overlayX===`center`?e=`center`:this._isRtl()?e=i.overlayX===`start`?`right`:`left`:e=i.overlayX===`start`?`left`:`right`;for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${e} ${n}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,n=this._isRtl(),s,r,a;if(t.overlayY===`top`)r=i.y,s=e.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)a=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=e.height-a+this._getViewportMarginTop();else{let y=Math.min(e.bottom-i.y+e.top,i.y),g=this._lastBoundingBoxSize.height;s=y*2,r=i.y-y,s>g&&!this._isInitialRender&&!this._growAfterOpen&&(r=i.y-g/2)}let c=t.overlayX===`start`&&!n||t.overlayX===`end`&&n,p=t.overlayX===`end`&&!n||t.overlayX===`start`&&n,h,d,_;if(p)_=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=i.x-this._getViewportMarginStart();else if(c)d=i.x,h=e.right-i.x-this._getViewportMarginEnd();else{let y=Math.min(e.right-i.x+e.left,i.x),g=this._lastBoundingBoxSize.width;h=y*2,d=i.x-y,h>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=i.x-g/2)}return{top:r,left:d,bottom:a,right:_,width:h,height:s}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let s=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=zi(e.width),n.height=zi(e.height),n.top=zi(e.top)||`auto`,n.bottom=zi(e.bottom)||`auto`,n.left=zi(e.left)||`auto`,n.right=zi(e.right)||`auto`,t.overlayX===`center`?n.alignItems=`center`:n.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,s&&(n.maxHeight=zi(s)),r&&(n.maxWidth=zi(r))}this._lastBoundingBoxSize=e,N(this._boundingBox.style,n)}_resetBoundingBoxStyles(){N(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){N(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,t){let e={},n=this._hasExactPosition(),s=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let h=this._viewportRuler.getViewportScrollPosition();N(e,this._getExactOverlayY(t,i,h)),N(e,this._getExactOverlayX(t,i,h))}else e.position=`static`;let a=``,c=this._getOffset(t,`x`),p=this._getOffset(t,`y`);c&&(a+=`translateX(${c}px) `),p&&(a+=`translateY(${p}px)`),e.transform=a.trim(),r.maxHeight&&(n?e.maxHeight=zi(r.maxHeight):s&&(e.maxHeight=``)),r.maxWidth&&(n?e.maxWidth=zi(r.maxWidth):s&&(e.maxWidth=``)),N(this._pane.style,e)}_getExactOverlayY(i,t,e){let n={top:``,bottom:``},s=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(s.y+this._overlayRect.height)}px`;else n.top=zi(s.y);return n}_getExactOverlayX(i,t,e){let n={left:``,right:``},s=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,e));let r;if(this._isRtl()?r=i.overlayX===`end`?`left`:`right`:r=i.overlayX===`end`?`right`:`left`,r===`right`)n.right=`${this._document.documentElement.clientWidth-(s.x+this._overlayRect.width)}px`;else n.left=zi(s.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:fe(i,e),isOriginOutsideView:zt(i,e),isOverlayClipped:fe(t,e),isOverlayOutsideView:zt(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,n)=>e-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Yt$1(i).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof sn$1)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();i&&(t.style.display=`block`);let e=t.getBoundingClientRect();return i&&(t.style.display=``),e}};function N(o,i){for(let t in i)Object.hasOwn(i,t)&&(o[t]=i[t]);return o}function me(o){if(typeof o!=`number`&&o!=null){let[i,t]=o.split(ze);return!t||t===`px`?parseFloat(i):null}return o||null}function ve(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function He(o,i){return o===i?!0:o.isOriginClipped===i.isOriginClipped&&o.isOriginOutsideView===i.isOriginOutsideView&&o.isOverlayClipped===i.isOverlayClipped&&o.isOverlayOutsideView===i.isOverlayOutsideView}var ye=`cdk-global-overlay-wrapper`;function De(o){return new bt}var bt=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ye),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:n,height:s,maxWidth:r,maxHeight:a}=this._overlayRef.getConfig(),c=(n===`100%`||n===`100vw`)&&(!r||r===`100%`||r===`100vw`),p=(s===`100%`||s===`100vh`)&&(!a||a===`100%`||a===`100vh`),h=this._xPosition,d=this._xOffset,_=this._overlayRef.getConfig().direction===`rtl`,y=``,g=``,k=``;c?k=`flex-start`:h===`center`?(k=`center`,_?g=d:y=d):_?h===`left`||h===`end`?(k=`flex-end`,y=d):(h===`right`||h===`start`)&&(k=`flex-start`,g=d):h===`left`||h===`start`?(k=`flex-start`,y=d):(h===`right`||h===`end`)&&(k=`flex-end`,g=d),i.position=this._cssPosition,i.marginLeft=c?`0`:y,i.marginTop=p?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?`0`:g,t.justifyContent=k,t.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(ye),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ee=(()=>{class o{_injector=h$3(se$1);global(){return De()}flexibleConnectedTo(t){return tt(this._injector,t)}static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var Xt=new I$3(`OVERLAY_DEFAULT_CONFIG`);function et(o,i){o.get(F).load(xe);let t=o.get(Pe),e=o.get(Y$1),n=o.get(te),s=o.get(Ue$3),r=o.get(VO),a=o.get(Er,null,{optional:!0})||o.get(Dr).createRenderer(null,null),c=new Q$1(i),p=o.get(Xt,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=i?.usePopover??p;let h=e.createElement(`div`),d=e.createElement(`div`);h.id=n.getId(`cdk-overlay-`),h.classList.add(`cdk-overlay-pane`),d.appendChild(h),c.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let _=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Wt(_)?_.after(d):_?.type===`parent`?_.element.appendChild(d):t.getContainerElement().appendChild(d),new vt$1(new ut(h,s,o),d,h,c,o.get(we$1),o.get(Oe),e,o.get(So),o.get(Re),i?.disableAnimations??o.get(_b,null,{optional:!0})===`NoopAnimations`,o.get(ee$1),a)}var Me=(()=>{class o{scrollStrategies=h$3(ke);_positionBuilder=h$3(Ee);_injector=h$3(se$1);create(t){return et(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(e){return new(e||o)};static ɵprov=Z$1({token:o,factory:o.ɵfac})}return o})();var Ye$1=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var We$1=new I$3(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=h$3(se$1);return()=>J(o)}});var Yt=(()=>{class o{elementRef=h$3(sn$1);static ɵfac=function(e){return new(e||o)};static ɵdir=un$1({type:o,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return o})();var Te=new I$3(`cdk-connected-overlay-default-config`);var Xe=(()=>{class o{_dir=h$3(VO,{optional:!0});_injector=h$3(se$1);_overlayRef;_templatePortal;_backdropSubscription=le.EMPTY;_attachSubscription=le.EMPTY;_detachSubscription=le.EMPTY;_positionSubscription=le.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=h$3(We$1);_ngZone=h$3(we$1);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new he;positionChange=new he;attach=new he;detach=new he;overlayKeydown=new he;overlayOutsideClick=new he;constructor(){let t=h$3(po),e=h$3(An$1),n=h$3(Te,{optional:!0}),s=h$3(Xt,{optional:!0});this.usePopover=s?.usePopover===!1?null:`global`,this._templatePortal=new K(t,e),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Ye$1);let t=this._overlayRef=et(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!sn(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let n=this._getOriginElement(),s=I(e);(!n||n!==s&&!n.contains(s))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new Q$1({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=tt(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Yt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Yt?this.origin.elementRef.nativeElement:this.origin instanceof sn$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Uw(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(e){return new(e||o)};static ɵdir=un$1({type:o,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,Hc],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,Hc],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,Hc],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,Hc],push:[2,`cdkConnectedOverlayPush`,`push`,Hc],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,t=>t===`url-change`||t===`pop-state`?t:Hc(t)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,Hc],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Rn$1]})}return o})();var jt=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Tr({type:o});static ɵinj=In$1({providers:[Me],imports:[i4,pe,Lt,Lt]})}return o})();var je$1=20;var Ue$1=new I$3(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=h$3(se$1);return()=>J(o,{scrollThrottle:je$1})}});var Ge=new I$3(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ae=`tooltip-panel`;var Ze$1={passive:!0};var $e$1=8;var Ke$1=8;var qe$1=24;var Qe$1=200;var Je$1=(()=>{class o{_elementRef=h$3(sn$1);_ngZone=h$3(we$1);_platform=h$3(y);_ariaDescriber=h$3(fi);_focusMonitor=h$3(Gt);_dir=h$3(VO);_injector=h$3(se$1);_viewContainerRef=h$3(An$1);_mediaMatcher=h$3(kt);_document=h$3(Y$1);_renderer=h$3(Er);_animationsDisabled=Q$2();_defaultOptions=h$3(Ge,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ie;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=Ui(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=Ui(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=$t(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=$t(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new X$2;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=$e$1}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(zo(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(e);this._detach(),this._portal=this._portal||new $(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=n.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe(zo(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof sn$1)return this._overlayRef;this._detach()}let e=this._injector.get(B).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Ae}`,s=tt(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return s.positionChanges.pipe(zo(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=et(this._injector,{direction:this._dir,positionStrategy:s,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Ue$1)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(zo(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(zo(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(zo(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(zo(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,n=this._getOrigin(),s=this._getOverlayPosition();e.withPositions([this._addOffset(D$2(D$2({},n.main),s.main)),this._addOffset(D$2(D$2({},n.fallback),s.fallback))])}_addOffset(t){let e=Ke$1,n=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=n?-e:e:t.originX===`end`&&(t.offsetX=n?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,n;e==`above`||e==`below`?n={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?n={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(n={originX:`end`,originY:`center`});let{x:s,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:s,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,n;e==`above`?n={overlayX:`center`,overlayY:`bottom`}:e==`below`?n={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?n={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(n={overlayX:`start`,overlayY:`center`});let{x:s,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:s,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),gc(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:n,originY:s}=t,r;if(e===`center`?this._dir&&this._dir.value===`rtl`?r=n===`end`?`left`:`right`:r=n===`start`?`left`:`right`:r=e===`bottom`&&s===`top`?`above`:`below`,r!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${Ae}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],n=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??s)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),n=this._elementRef.nativeElement;e!==n&&!n.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Ze$1))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,n=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||gc({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!sn(t):!0;static ɵfac=function(e){return new(e||o)};static ɵdir=un$1({type:o,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,n){e&2&&aE(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return o})();var Ie=(()=>{class o{_changeDetectorRef=h$3($i);_elementRef=h$3(sn$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Q$2();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new X$2;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>qe$1&&t.width>=Qe$1}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,n=this._showAnimation,s=this._hideAnimation;if(e.classList.remove(t?s:n),e.classList.add(t?n:s),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(e);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||o)};static ɵcmp=(function(){let t=[`tooltip`];return ep({type:o,selectors:[[`mat-tooltip-component`]],viewQuery:function(n,s){if(n&1&&tE(t,7),n&2){let r;lp(r=dp())&&(s._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(n,s){n&1&&_c(`mouseleave`,function(a){return s._handleMouseLeave(a)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(n,s){n&1&&(ap(0,`div`,1,0),JD(`animationend`,function(a){return s._handleAnimationEnd(a)}),ap(2,`div`,2),QN(3),cp()()),n&2&&(BN(s.tooltipClass),aE(`mdc-tooltip--multiline`,s._isMultiline),kT(3),gE(s.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return o})();var Qn=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Tr({type:o});static ɵinj=In$1({imports:[Yn,jt,i4,G]})}return o})();function w(e){let t=h$3(M$2);return t.settledBalls$.pipe(G$4(()=>e&&t.ballsBySlug().get(e)||null))}var Fe=(e,t)=>{let n=h$3(M$2);return w(t[1]?.path).pipe(G$4(o=>o!==null||!!n.error()))};var Ue=e=>w(e.paramMap.get(`slug`)).pipe(G$4(t=>t?st$2(t):`Bowling Ball`));var je=e=>w(e.paramMap.get(`slug`)).pipe(G$4(t=>t?[...Q,{name:R$2(t),path:X$1(t)}]:void 0));var Qe=e=>w(e.paramMap.get(`slug`)).pipe(G$4(t=>t?N$2(t):void 0));var $e=e=>w(e.paramMap.get(`slug`)).pipe(G$4(t=>t?at$2(t):void 0));var Q=[{name:`Down Lane Motion`,path:`/`},{name:`All Bowling Balls`,path:`/bowling-balls`}];var qe=e=>w(e.paramMap.get(`slug`)).pipe(G$4(t=>t?ot$2(t):void 0));var Ye=[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-BvXaOh3p.js`).then(e=>e.Stats),title:`Stats`,data:{searchTitle:`Bowling Ball Charts, Specs and Stats`,description:`Charts and specs for every Storm, Roto Grip and 900 Global bowling ball: reaction ratings, RG and differential, similar balls, comparisons and catalog stats.`}},{path:`stats`,redirectTo:``},{path:`reaction`,loadComponent:()=>import(`./chunk-C0WsO3Hd.js`).then(e=>e.Reaction),title:`Reaction`,data:{searchTitle:`Bowling Ball Reaction Chart`,description:`Chart Storm, Roto Grip and 900 Global bowling balls by their rated reaction: hook length, ball shape, flare, oil volume, pattern length and lane condition.`}},{path:`chart`,redirectTo:`reaction`},{path:`tech-specs`,loadComponent:()=>import(`./chunk-BT6gFURN.js`).then(e=>e.TechSpecs),title:`Tech Specs`,data:{searchTitle:`Bowling Ball RG and Differential Chart`,description:`The RG, differential and PSA of every Storm, Roto Grip and 900 Global bowling ball from 12 to 16 lb, split into four core types by revs and flare.`}},{path:`arsenal-ladder`,loadComponent:()=>import(`./chunk-Cj5_eyxX.js`).then(e=>e.ArsenalLadder),title:`Arsenal Ladder`,data:{searchTitle:`Bowling Ball Arsenal Ladder`,description:`Line bowling balls up from light oil to heavy, smooth to angular, early hook to late and more, and see the gaps an arsenal leaves.`}},{path:`look-alikes`,loadComponent:()=>import(`./chunk-WoWIPvjm.js`).then(e=>e.LookAlikes),title:`Look-alikes`,data:{searchTitle:`Similar Bowling Ball Finder`,description:`Find the bowling balls most like any Storm, Roto Grip or 900 Global ball, discontinued ones included, by their six reaction ratings and a match percentage.`}},{path:`comparison`,loadComponent:()=>import(`./chunk-BYH2kSwS.js`).then(e=>e.Comparison),title:`Ball Comparison`,data:{searchTitle:`Compare Bowling Balls Side by Side`,description:`Compare bowling balls side by side: coverstock, weight block, finish, reaction ratings, and RG, differential and PSA at each weight.`}},{path:`bowling-balls`,loadComponent:()=>import(`./chunk-aNZ-UoE0.js`).then(e=>e.BallIndex),title:`All Balls`,data:{searchTitle:`Storm, Roto Grip and 900 Global Bowling Ball Specs`,description:`Every Storm, Roto Grip and 900 Global bowling ball, discontinued ones too: specs, reaction ratings, RG and differential, and the balls most like each.`,breadcrumbs:Q}},{path:`ball/:slug`,canMatch:[Fe],loadComponent:()=>import(`./chunk-DsJcG6fx.js`).then(e=>e.BallPage),title:`Ball`,resolve:{searchTitle:Ue,description:qe,breadcrumbs:je,image:Qe,imageAlt:$e}},{path:`**`,loadComponent:()=>import(`./chunk-BzO-4ucR.js`).then(e=>e.NotFound),title:`Page not found`,data:{notFound:!0}}];var nt=B$1(D$2({},{article:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,chevron_right:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,close:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,compare_arrows:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/></svg>`,dark_mode:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>`,feedback:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>`,filter_alt_off:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.79 5.61A.998.998 0 0 0 19 4H6.83l7.97 7.97 4.99-6.36zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z"/></svg>`,fingerprint:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67a.49.49 0 0 1-.44.28zM3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7c-.23.16-.54.11-.7-.12a9.388 9.388 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1a7.297 7.297 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29a11.14 11.14 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/></svg>`,flag:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>`,flip:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"/></svg>`,group_work:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM9.5 8a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0zm6.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,hub:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.4 18.2c.38.5.6 1.12.6 1.8 0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.44 0 .85.09 1.23.26l1.41-1.77a4.504 4.504 0 0 1-1.09-3.69l-2.03-.68A2.997 2.997 0 0 1 0 9.5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .07 0 .14-.01.21l2.03.68a4.468 4.468 0 0 1 3.22-2.32V5.91A3.018 3.018 0 0 1 9 3c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.4-.96 2.57-2.25 2.91v2.16c1.4.23 2.58 1.11 3.22 2.32L18 9.71V9.5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-1.06 0-1.98-.55-2.52-1.37l-2.03.68a4.49 4.49 0 0 1-1.09 3.69l1.41 1.77c.38-.18.79-.27 1.23-.27 1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3c0-.68.22-1.3.6-1.8l-1.41-1.77c-1.35.75-3.01.76-4.37 0L8.4 18.2z"/></svg>`,info_outline:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,layers:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/></svg>`,light_mode:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>`,list:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,query_stats:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z"/></svg>`,rotate_right:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></svg>`,scatter_plot:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/><circle cx="16.6" cy="17.6" r="3"/></svg>`,search:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,search_off:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 0 0 9.5 3C6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"/><path d="M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z"/></svg>`,stacked_bar_chart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z"/></svg>`,texture:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.51 3.08 3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3 3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"/></svg>`,view_in_ar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.25 7.6-5.5-3.18a1.49 1.49 0 0 0-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"/></svg>`}),{github:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0 0 10 0z" fill="currentColor" fill-rule="evenodd"/></svg>`,pioneer_charts:`<svg viewBox="0 0 208.7 161.3" xmlns="http://www.w3.org/2000/svg"><polygon points="122.2,7.6 122.5,7.6 200.3,161.2 207.6,161.2 125.9,0.3 118.8,0.3 82.7,71.5 67.8,42.2 60.8,42.2 0.4,161.2 7.7,161.2 64.1,49.5 64.5,49.5 79.2,78.5 37.2,161.2 44.5,161.2 82.7,85.6 98.7,117.2 76.3,161.2 83.6,161.2 102.3,124.3 120.9,161.2 128.2,161.2 105.8,117.2 122.3,84.6 122.7,84.6 161.4,161.2 168.6,161.2 126,77.3 118.9,77.3 102.3,110.2 86.3,78.6" fill="currentColor"/></svg>`});function Ke(){return xD(()=>{let e=h$3(Mn),t=h$3(Y0);for(let[n,o]of Object.entries(nt))e.addSvgIconLiteral(n,t.bypassSecurityTrustHtml(o))})}var We={providers:[Sb(),M0(),xO(Ye,jO(RO)),{provide:Sh,useClass:L},Ke(),Gq(zq())]};var ot=(e,t)=>t.key;function it(e,t){if(e&1&&(im(),GD(0,`circle`)),e&2){let n=t.$implicit;aE(`dlm-logo__path`,n.path),Li(`cx`,n.x)(`cy`,n.y)(`r`,n.path?11:5)}}var Je=[24,60,96];var at=new Set([`96,96`,`96,60`,`60,24`]);var _=class e{dots=Je.flatMap(t=>Je.map(n=>({key:`${n},${t}`,x:n,y:t,path:at.has(`${n},${t}`)})));static ɵfac=function(n){return new(n||e)};static ɵcmp=ep({type:e,selectors:[[`app-layout-logo-mark`]],decls:3,vars:0,consts:[[`viewBox`,`0 0 120 120`,`aria-hidden`,`true`,`focusable`,`false`],[3,`dlm-logo__path`]],template:function(n,o){n&1&&(im(),ap(0,`svg`,0),pN(1,it,1,5,`:svg:circle`,1,ot),cp()),n&2&&(kT(),hN(o.dots))},styles:[`[_nghost-%COMP%]{display:inline-block;width:28px;height:28px;flex:0 0 auto}svg[_ngcontent-%COMP%]{display:block;width:100%;height:100%}circle[_ngcontent-%COMP%]{fill:var(--%NS%dlm-logo-grid, #50535a)}.dlm-logo__path[_ngcontent-%COMP%]{fill:var(--%NS%dlm-logo-path, #a3a1fb)}`]})};var st=[`menuButton`];var b=class e{themeService=h$3(h$1);menuOpen=Vc(!1);menuToggle=C8();menuButton=b8.required(`menuButton`,{read:sn$1});focusMenuButton(){this.menuButton().nativeElement.focus()}githubUrl=o;isDark=Qe$3(()=>this.themeService.theme()===`dark`);toggleLabel=Qe$3(()=>this.isDark()?`Switch to light theme`:`Switch to dark theme`);toggleTheme(){this.themeService.toggle()}static ɵfac=function(n){return new(n||e)};static ɵcmp=ep({type:e,selectors:[[`app-layout-header`]],viewQuery:function(n,o){n&1&&rE(o.menuButton,st,5,sn$1),n&2&&MN()},inputs:{menuOpen:[1,`menuOpen`]},outputs:{menuToggle:`menuToggle`},decls:16,vars:5,consts:[[`menuButton`,``],[1,`it-header`,`px-5`],[1,`flex`,`h-full`,`items-center`,`gap-4`],[`type`,`button`,`mat-icon-button`,``,`aria-label`,`Main menu`,`matTooltip`,`Main menu`,`aria-controls`,`app-sidenav`,1,`it-header__action`,3,`click`],[`svgIcon`,`menu`],[1,`it-header__brand`],[1,`ms-auto`,`flex`,`items-center`,`gap-1`],[`mat-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,`aria-label`,`GitHub`,`matTooltip`,`Down Lane Motion Community`,1,`it-header__action`,`it-header__icon-link`,3,`href`],[`svgIcon`,`github`,`aria-hidden`,`true`],[1,`hidden`,`sm:inline`],[`type`,`button`,`mat-icon-button`,``,1,`it-header__action`,`ms-3`,3,`click`,`matTooltip`],[3,`svgIcon`]],template:function(n,o){n&1&&(ac(0,`div`,1)(1,`nav`,2)(2,`button`,3,0),_c(`click`,function(){return o.menuToggle.emit()}),Tc(4,`mat-icon`,4),sp(),ac(5,`div`,5),Tc(6,`app-layout-logo-mark`),ac(7,`span`),QN(8,`Down Lane Motion`),sp()(),ac(9,`div`,6)(10,`a`,7),Tc(11,`mat-icon`,8),ac(12,`span`,9),QN(13,`GitHub`),sp()(),ac(14,`button`,10),_c(`click`,function(){return o.toggleTheme()}),Tc(15,`mat-icon`,11),sp()()()()),n&2&&(kT(2),Li(`aria-expanded`,o.menuOpen()),kT(8),zD(`href`,o.githubUrl,bv),kT(4),zD(`matTooltip`,o.toggleLabel()),Li(`aria-label`,o.toggleLabel()),kT(),zD(`svgIcon`,o.isDark()?`light_mode`:`dark_mode`))},dependencies:[_,Ar,Ir,sa,Yr,Gr,Qn,Je$1],styles:[`[_nghost-%COMP%]{display:block}.it-header[_ngcontent-%COMP%]{height:var(--%NS%dlm-header-height);border-bottom:1px solid rgba(255,255,255,.08);background-color:#24282e;color:#fff;box-shadow:#de50500a 0 .8px .8px,#00000008 0 2.3px 2px}.it-header__action[_ngcontent-%COMP%], .it-header__action.mat-mdc-button[_ngcontent-%COMP%]:not(:disabled){color:inherit}@media(max-width:639.98px){.it-header__icon-link.mat-mdc-button[_ngcontent-%COMP%]{min-width:0;padding:0 8px}.it-header__icon-link[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:0}}.it-header__brand[_ngcontent-%COMP%]{display:none;align-items:center;gap:.75rem;min-width:0;font:var(--%NS%mat-sys-title-medium);white-space:nowrap}@media(max-width:599.98px),(max-height:499.98px){.it-header__brand[_ngcontent-%COMP%]{display:flex}}`]})};var pt=[`link`];var dt=e=>({exact:e});var ct=(e,t)=>t.route;function mt(e,t){if(e&1&&(ac(0,`li`)(1,`a`,12,0),Tc(3,`mat-icon`,13),ac(4,`span`,3),QN(5),sp()()()),e&2){let n=t.$implicit,o=wN();kT(),zD(`routerLink`,n.route)(`routerLinkActiveOptions`,dR(6,dt,n.route===`/`))(`matTooltip`,n.label)(`matTooltipDisabled`,!o.collapsed()),kT(2),zD(`svgIcon`,n.icon),kT(2),gE(n.label)}}var M=class e{collapsed=Vc(!1);links=S8(`link`);focusFirstLink(){this.links()[0]?.nativeElement.focus()}communityUrl=o;pioneerChartsUrl=`https://pioneercharts.com`;items=[{label:`Stats`,icon:`query_stats`,route:`/`},{label:`Reaction`,icon:`scatter_plot`,route:`/reaction`},{label:`Tech Specs`,icon:`rotate_right`,route:`/tech-specs`},{label:`Arsenal Ladder`,icon:`stacked_bar_chart`,route:`/arsenal-ladder`},{label:`Look-alikes`,icon:`hub`,route:`/look-alikes`},{label:`Ball Comparison`,icon:`compare_arrows`,route:`/comparison`},{label:`All Balls`,icon:`list`,route:`/bowling-balls`}];static ɵfac=function(n){return new(n||e)};static ɵcmp=ep({type:e,selectors:[[`app-layout-sidenav`]],viewQuery:function(n,o){n&1&&rE(o.links,pt,5),n&2&&MN()},inputs:{collapsed:[1,`collapsed`]},decls:22,vars:6,consts:[[`link`,``],[`id`,`app-sidenav`,1,`it-sidenav`],[1,`it-sidenav__brand`],[1,`it-sidenav__label`],[`aria-label`,`Main menu`],[1,`it-sidenav__footer`],[`target`,`_blank`,`rel`,`noopener noreferrer`,`matTooltip`,`Send feedback`,`matTooltipPosition`,`right`,1,`it-sidenav__link`,3,`href`,`matTooltipDisabled`],[`aria-hidden`,`true`,`svgIcon`,`feedback`],[1,`it-sidenav__notice`],[`target`,`_blank`,`rel`,`noopener noreferrer`,1,`it-sidenav__credit`,3,`href`],[`svgIcon`,`pioneer_charts`,`aria-hidden`,`true`,1,`it-sidenav__credit-logo`],[1,`it-sidenav__credit-name`],[`routerLinkActive`,`it-sidenav__link--active`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`it-sidenav__link`,3,`routerLink`,`routerLinkActiveOptions`,`matTooltip`,`matTooltipDisabled`],[`aria-hidden`,`true`,3,`svgIcon`]],template:function(n,o){n&1&&(ac(0,`aside`,1)(1,`div`,2),Tc(2,`app-layout-logo-mark`),ac(3,`span`,3),QN(4,`Down Lane Motion`),sp()(),ac(5,`nav`,4)(6,`ul`),pN(7,mt,6,8,`li`,null,ct),sp()(),ac(9,`div`,5)(10,`a`,6),Tc(11,`mat-icon`,7),ac(12,`span`,3),QN(13,`Send feedback`),sp()(),ac(14,`p`,8),QN(15,` An independent fan site, not affiliated with or endorsed by any bowling ball manufacturer. `),sp(),ac(16,`p`,8),QN(17,` Charts built with `),ac(18,`a`,9),Tc(19,`mat-icon`,10),ac(20,`span`,11),QN(21,`Pioneer Charts`),sp()()()()()),n&2&&(aE(`it-sidenav--collapsed`,o.collapsed()),kT(7),hN(o.items),kT(3),zD(`href`,o.communityUrl,bv)(`matTooltipDisabled`,!o.collapsed()),kT(8),zD(`href`,o.pioneerChartsUrl,bv),Li(`tabindex`,o.collapsed()?-1:null))},dependencies:[_,Yr,Gr,Qn,Je$1,Au,MO],styles:[`[_nghost-%COMP%]{display:block;height:100%}.it-sidenav[_ngcontent-%COMP%]{--%NS%it-sidenav-accent: #a3a1fb;display:flex;flex-direction:column;width:256px;height:100%;overflow:hidden;background-color:#24282e;border-right:1px solid rgba(255,255,255,.08);transition:width .2s ease}.it-sidenav--collapsed[_ngcontent-%COMP%]{width:64px}.it-sidenav__brand[_ngcontent-%COMP%]{display:flex;flex:0 0 auto;align-items:center;gap:.75rem;height:var(--%NS%dlm-header-height);padding-left:17px;border-bottom:1px solid rgba(255,255,255,.08);color:#fff;font:var(--%NS%mat-sys-title-medium)}.it-sidenav__label[_ngcontent-%COMP%]{white-space:nowrap;transition:opacity .15s ease}.it-sidenav--collapsed[_ngcontent-%COMP%]   .it-sidenav__label[_ngcontent-%COMP%]{opacity:0}nav[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;overflow-x:hidden;padding:.5rem .5rem .5rem 0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.it-sidenav__footer[_ngcontent-%COMP%]{flex:0 0 auto;padding:.5rem .5rem 1rem 0;border-top:1px solid rgba(255,255,255,.08)}.it-sidenav__notice[_ngcontent-%COMP%]{width:224px;margin:.5rem 0 0;padding-left:1.25rem;color:#ffffff80;font:var(--%NS%mat-sys-body-small);transition:opacity .15s ease}.it-sidenav--collapsed[_ngcontent-%COMP%]   .it-sidenav__notice[_ngcontent-%COMP%]{opacity:0}.it-sidenav__credit[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.3rem;color:#ffffffbf;text-decoration:none;white-space:nowrap}.it-sidenav__credit-logo[_ngcontent-%COMP%]{width:1.3em;height:1em;font-size:inherit}.it-sidenav__credit-name[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:2px}.it-sidenav__credit[_ngcontent-%COMP%]:hover{color:#fff}.it-sidenav__credit[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%it-sidenav-accent);outline-offset:2px;border-radius:2px}.it-sidenav__link[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:1rem;padding:.6rem 1.25rem;border-radius:0 6px 6px 0;color:#ffffffbf;font:var(--%NS%mat-sys-title-small);text-decoration:none}.it-sidenav__link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:0 0 auto}.it-sidenav__link[_ngcontent-%COMP%]:hover{background-color:#ffffff0f;color:#fff}.it-sidenav__link[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%it-sidenav-accent);outline-offset:-2px}.it-sidenav__link--active[_ngcontent-%COMP%]{background-color:#ffffff1a;color:#fff}.it-sidenav__link--%NS%active[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0 auto 0 0;width:3px;background-color:var(--%NS%it-sidenav-accent)}`]})};var vt=[`main`];function gt(e,t){if(e&1){let n=IN();ac(0,`div`,5),_c(`click`,function(){qg(n);let x=wN();return Wg(x.closeOverlayMenu())}),sp()}}var Ze=`dlm-menu-open`;var R=class e{breakpoints=h$3(qt);narrow=K$1(this.breakpoints.observe(h).pipe(G$4(t=>t.matches)),{initialValue:this.breakpoints.isMatched(h)});wideMenuOpen=$$2(this.readInitialMenuOpen());overlayMenuOpen=ln$1({source:this.narrow,computation:()=>!1});injector=h$3(se$1);sidenav=b8.required(M);header=b8.required(b);main=b8(`main`);menuOpen=Qe$3(()=>this.narrow()?this.overlayMenuOpen():this.wideMenuOpen());constructor(){Aa(()=>{let t=this.wideMenuOpen();try{localStorage.setItem(Ze,String(t))}catch{}}),h$3(jn$1).events.pipe(Se$1(t=>t instanceof dt$1||t instanceof pn$1),j$1()).subscribe(()=>this.closeOverlayMenu()),h$3(jn$1).events.pipe(Se$1(t=>t instanceof dt$1),j$1()).subscribe(()=>this.main()?.nativeElement.scrollTo?.({top:0}))}toggleMenu(){this.narrow()?this.overlayMenuOpen()?this.closeOverlayMenu():(this.overlayMenuOpen.set(!0),gc(()=>this.sidenav().focusFirstLink(),{injector:this.injector})):this.wideMenuOpen.update(t=>!t)}closeOverlayMenu(){!this.narrow()||!this.overlayMenuOpen()||(this.overlayMenuOpen.set(!1),gc(()=>this.header().focusMenuButton(),{injector:this.injector}))}readInitialMenuOpen(){try{return localStorage.getItem(Ze)!==`false`}catch{return!0}}static ɵfac=function(n){return new(n||e)};static ɵcmp=ep({type:e,selectors:[[`app-root`]],viewQuery:function(n,o){n&1&&rE(o.sidenav,M,5)(o.header,b,5)(o.main,vt,5),n&2&&MN(3)},hostVars:4,hostBindings:function(n,o){n&1&&_c(`keydown.escape`,function(){return o.closeOverlayMenu()},XS),n&2&&aE(`app--narrow`,o.narrow())(`app--menu-open`,o.menuOpen())},decls:7,vars:4,consts:[[`main`,``],[3,`collapsed`],[`aria-hidden`,`true`,1,`app-backdrop`],[1,`app-body`,3,`inert`],[3,`menuToggle`,`menuOpen`],[`aria-hidden`,`true`,1,`app-backdrop`,3,`click`]],template:function(n,o){n&1&&(Tc(0,`app-layout-sidenav`,1),cN(1,gt,1,0,`div`,2),ac(2,`div`,3)(3,`app-layout-header`,4),_c(`menuToggle`,function(){return o.toggleMenu()}),sp(),ac(4,`main`,null,0),Tc(6,`router-outlet`),sp()()),n&2&&(zD(`collapsed`,!o.menuOpen()),kT(),lN(o.narrow()&&o.menuOpen()?1:-1),kT(),zD(`inert`,o.narrow()&&o.menuOpen()),kT(),zD(`menuOpen`,o.menuOpen()))},dependencies:[b,M,Ch],styles:[`[_nghost-%COMP%]{position:relative;display:flex;height:100%}app-layout-sidenav[_ngcontent-%COMP%]{flex:0 0 auto}@media(max-width:599.98px),(max-height:499.98px){app-layout-sidenav[_ngcontent-%COMP%]{position:absolute;inset:0 auto 0 0;z-index:2;transform:translate(-100%);visibility:hidden;transition:transform .2s ease,visibility 0s linear .2s}.app--narrow.app--menu-open[_nghost-%COMP%]   app-layout-sidenav[_ngcontent-%COMP%]{transform:none;visibility:visible;transition:transform .2s ease}}.app-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;background-color:#0006}.app-body[_ngcontent-%COMP%]{position:relative;z-index:0;display:flex;flex:1 1 auto;flex-direction:column;min-width:0}app-layout-header[_ngcontent-%COMP%]{flex:0 0 auto}main[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}`]})};r0(R,We).catch(e=>console.error(e));export{rt$1 as $,Q$2 as A,ie as B,Gt as C,Jt as D,Ji as E,Xt$1 as F,te as G,sa as H,Yr as I,h$1 as J,w$1 as K,_n as L,Sn as M,Tn as N,Mi as O,Ui as P,nt$2 as Q,en as R,Gr as S,Ir as T,sn as U,qt as V,st$1 as W,et$2 as X,at$2 as Y,it$2 as Z,$t as _,Qn as a,Q$3 as at,F as b,Xt as c,j$1 as ct,a as d,d$1 as dt,tt$1 as et,E as f,f$1 as ft,$n as g,y$2 as gt,l as h,m$2 as ht,Je$1 as i,N$2 as it,Qe$2 as j,Mt as k,Yt as l,p$1 as lt,h as m,i as mt,G as n,K$1 as nt,X as o,R$2 as ot,d as p,g as pt,y as q,J as r,M$2 as rt,Xe as s,X$1 as st,Be as t,G$3 as tt,jt as u,b$1 as ut,Ar as v,I as w,Gn as x,C as y,fo as z};