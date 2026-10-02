import{$ as NN,$n as sm,$t as bv,An as k_,At as Vc,C as Er$1,Ct as TN,D as GD,E as G,Et as Ty,G as Lw,H as L,Hn as qg,Ht as Ya$1,I as In,It as Wu,J as MN,Jn as ra$1,Jt as aE,Kn as rE,Kt as _c,L as Io,Ln as nE,Lt as X,Mn as le$1,N as I,Nn as ln$1,P as IN,Pn as lp,Pt as Wg,Q as N8,Qn as se$1,S as EE,Sn as i4,St as TM,T as Fw,Tn as io$1,Tt as Tr$1,U as L_,Ut as Z,W as Li,X as Mc,Xt as ap,Yt as ac,Zn as sE,Zt as b8,_n as h,a as $t,at as Q,b as DE,bn as he,cr as we,ct as Qe,d as B,dr as xw,dt as Rn,en as cN,er as sn$1,et as Nw,f as BA,fr as y,ft as Rw,g as C8,gn as ge,gt as SN,hn as gc,hr as zo$1,ht as SE,in as de$1,ir as un$1,it as PD,jn as lN,jt as Ve$1,k as Hc,kn as kT,kt as VO,ln as ep,m as Bc,mn as gE,mr as zD,n as $i$1,nr as tE,nt as Ow,o as $u,on as dp,or as w8,ot as QD,p as BN,pn as fp,q as M8,qn as rR,qt as _e,rt as P,s as Aa$1,sr as wN,st as QN,t as $,tn as cp,tr as sp,tt as OD,vn as hN,vt as Se,w as F,wn as im,wt as Tc,x as Dr$1,xt as T8,y as D,yn as hR,zn as pN,zt as Y}from"./chunk-Czos2FSY.js";import{A as Q$1,B as ie,C as Gt,D as Jt,E as Ji$1,G as te,H as sa$1,I as Yr$1,L as _n$1,M as Sn,N as Tn,O as Mi$1,P as Ui,R as en$1,S as Gr$1,T as Ir$1,U as sn$2,W as st,_ as $t$1,a as Qn,at as Q$2,b as F$1,g as $n,i as Je,j as Qe$1,n as G$1,o as X$1,q as y$1,rt as M,t as Be,v as Ar$1,y as C,z as fo$1}from"./main-OGXPBVMC.js";var Zn=class n{open=w8(!1);controls=Vc.required();label=Vc(`About this chart`);static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-chart-info-button`]],hostAttrs:[1,`inline-flex`],inputs:{open:[1,`open`],controls:[1,`controls`],label:[1,`label`]},outputs:{open:`openChange`},decls:2,vars:3,consts:[[`type`,`button`,`mat-icon-button`,``,`aria-haspopup`,`dialog`,3,`click`,`matTooltip`],[`svgIcon`,`info_outline`]],template:function(t,e){t&1&&(ac(0,`button`,0),_c(`click`,function(){return e.open.set(!0)}),Tc(1,`mat-icon`,1),sp()),t&2&&(zD(`matTooltip`,e.label()),Li(`aria-label`,e.label())(`aria-controls`,e.controls()))},dependencies:[Ar$1,sa$1,Yr$1,Gr$1,Qn,Je],encapsulation:2})};var gr=[`dialog`];var br=[`*`];var _r=0;var ta=class n{heading=Vc(`About this chart`);open=w8(!1);titleId=`chart-notes-title-${_r++}`;dialog=b8.required(`dialog`);constructor(){N8(()=>{let i=this.dialog().nativeElement;this.open()&&!i.open?i.showModal():!this.open()&&i.open&&i.close()})}closeOnBackdrop(i){i.target===this.dialog().nativeElement&&this.open.set(!1)}static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-chart-notes`]],viewQuery:function(t,e){t&1&&rE(e.dialog,gr,5),t&2&&MN()},inputs:{heading:[1,`heading`],open:[1,`open`]},outputs:{open:`openChange`},ngContentSelectors:br,decls:9,vars:3,consts:[[`dialog`,``],[1,`chart-notes`,3,`close`,`click`],[1,`chart-notes__header`],[1,`chart-notes__title`,3,`id`],[`type`,`button`,`mat-icon-button`,``,`aria-label`,`Close`,3,`click`],[`svgIcon`,`close`],[1,`chart-notes__body`]],template:function(t,e){t&1&&(SN(),ac(0,`dialog`,1,0),_c(`close`,function(){return e.open.set(!1)})(`click`,function(r){return e.closeOnBackdrop(r)}),ac(2,`div`,2)(3,`h2`,3),QN(4),sp(),ac(5,`button`,4),_c(`click`,function(){return e.open.set(!1)}),Tc(6,`mat-icon`,5),sp()(),ac(7,`div`,6),TN(8),sp()()),t&2&&(Li(`aria-labelledby`,e.titleId),kT(3),zD(`id`,e.titleId),kT(),gE(e.heading()))},dependencies:[Ar$1,sa$1,Yr$1,Gr$1],styles:[`app-chart-notes .chart-notes{width:min(56rem,calc(100% - 2rem));max-width:none;max-height:min(85dvh,100% - 2rem);margin:auto;padding:0;border:0;border-radius:var(--%NS%mat-sys-corner-extra-large, 28px);background:var(--%NS%mat-sys-surface-container-high);color:var(--%NS%mat-sys-on-surface);box-shadow:var(--%NS%mat-sys-level3)}app-chart-notes .chart-notes[open]{display:flex;flex-direction:column}app-chart-notes .chart-notes::backdrop{background:#0006}app-chart-notes .chart-notes__header{display:flex;flex:0 0 auto;align-items:center;justify-content:space-between;gap:.5rem;padding:1rem .75rem .5rem 1.5rem}app-chart-notes .chart-notes__title{font:var(--%NS%mat-sys-headline-small)}app-chart-notes .chart-notes__body{display:flex;flex:1 1 auto;flex-direction:column;gap:.75rem;min-height:0;overflow-y:auto;padding:0 1.5rem 1.5rem;font:var(--%NS%mat-sys-body-medium)}app-chart-notes .chart-notes__body>p,app-chart-notes .chart-notes__body>dl{max-width:75ch}app-chart-notes .chart-notes__body dl{display:flex;flex-direction:column;gap:.5rem;margin:0}app-chart-notes .chart-notes__body dt{font-weight:500}app-chart-notes .chart-notes__body dd{margin:0;color:var(--%NS%mat-sys-on-surface-variant)}app-chart-notes .chart-notes__body a{color:var(--%NS%mat-sys-primary)}
`],encapsulation:2})};var At=class n{appRepository=h(M);showUnavailable=$(!1);balls=Qe(()=>this.showUnavailable()?this.appRepository.allBalls():this.appRepository.availableBalls());static ɵfac=function(t){return new(t||n)};static ɵprov=P({token:n,factory:n.ɵfac})};var Rt={brand:{label:`Brand`,icon:`fingerprint`,description:`Show only balls from the selected brands.`,lists:[{key:`brand`,onlyWithStats:!0}],reflectsOtherFilters:!1},"weight-block":{label:`Weight Block`,icon:`view_in_ar`,description:`Show only balls built on the selected weight blocks.`,lists:[{key:`weightBlock`,onlyWithStats:!0}],reflectsOtherFilters:!0},"factory-finish":{label:`Factory Finish`,icon:`texture`,description:`Show only balls shipped with the selected factory finishes.`,lists:[{key:`factoryFinish`,onlyWithStats:!0}],reflectsOtherFilters:!0},symmetry:{label:`Symmetry`,icon:`flip`,description:`Show only symmetrical or asymmetrical balls.`,lists:[{key:`symmetry`}],reflectsOtherFilters:!0},coverstock:{label:`Coverstock`,icon:`layers`,description:`Show only balls with the selected coverstocks.`,lists:[{key:`coverstockType`,heading:`Type`},{key:`coverstock`,heading:`Coverstock`,onlyWithStats:!0}],reflectsOtherFilters:!0}};var Ce=Object.keys(Rt);function ea(n){return n in Rt}var ia=Object.fromEntries(Ce.map(n=>[n,Rt[n].label]));var Ne={brand:`brand`,weightBlock:`weightBlock`,factoryFinish:`factoryFinish`,symmetry:`symmetry`,coverstock:`coverstockBase`,coverstockType:`coverstockType`};var ei=Object.keys(Ne);var Vt={brand:[],weightBlock:[],factoryFinish:[],symmetry:[],coverstock:[],coverstockType:[]};function na(n,i,t){let e=i.length===0?[]:t.filter(r=>i.includes(r.brand)),a=B(D({},n),{brand:i});for(let r of ei){if(r===`brand`||n[r].length===0)continue;let o=Ne[r];a[r]=n[r].filter(h=>e.some(f=>f[o]===h))}return a}function ii(n,i,t){return ei.every(e=>{let a=i[e];if(e===t||a.length===0)return!0;let r=n[Ne[e]];return typeof r==`string`&&a.includes(r)})}var aa={onlyWithStats:!0,allBallsSelected:!0};var ra=new I(`BallFiltersOptions`,{factory:()=>aa});function fl(n){return[St,...n?[{provide:ra,useValue:D(D({},aa),n)}]:[]]}var St=class n{catalog=h(At);options=h(ra);onlyWithStats=this.options.onlyWithStats;lookupSelections=$(Vt);openFilter=$(null);selectableBallIds=Qe(()=>this.catalog.balls().filter(i=>!this.onlyWithStats||i.stats!==null).map(i=>i.id));defaultBallIds=Qe(()=>this.options.allBallsSelected?this.selectableBallIds():[]);selectedBallIds=ln$1({source:()=>this.selectableBallIds(),computation:(i,t)=>{if(!t)return this.defaultBallIds();let e=new Set(t.source),a=new Set(t.value);return i.filter(r=>a.has(r)||this.options.allBallsSelected&&!e.has(r))}});ballsFiltered=Qe(()=>{if(!this.options.allBallsSelected)return this.selectedBallIds().length>0;let i=new Set(this.selectedBallIds());return this.selectableBallIds().some(t=>!i.has(t))});hasActiveFilters=Qe(()=>{let i=this.lookupSelections();return ei.some(t=>i[t].length>0)||this.ballsFiltered()});eligibleBalls=Qe(()=>{let i=this.lookupSelections();return this.catalog.balls().filter(t=>ii(t,i))});filteredBalls=Qe(()=>{let i=new Set(this.selectedBallIds());return this.eligibleBalls().filter(t=>i.has(t.id))});clear(){this.lookupSelections.set(Vt),this.selectedBallIds.set(this.defaultBallIds())}static ɵfac=function(t){return new(t||n)};static ɵprov=P({token:n,factory:n.ɵfac})};var ae=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new X;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,t,e=!0,a){this._multiple=i,this._emitChanges=e,this.compareWith=a,t&&t.length&&(i?t.forEach(r=>this._markSelected(r)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let t=this._hasQueuedChanges();return i&&this._emitChangeEvent(),t}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(i){this._verifyValueAssignment(i),i.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(i){this._verifyValueAssignment(i);let t=this.selected,e=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),t.filter(r=>!e.has(this._getConcreteValue(r,e))).forEach(r=>this._unmarkSelected(r));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(i,e))return e;return i}else return i}};var pa=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(e){return new(e||n)(_e(Er$1),_e(sn$1))};static ɵdir=un$1({type:n})}return n})();var vr=(()=>{class n extends pa{static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵdir=un$1({type:n,features:[OD]})}return n})();var se=new I(``);var xr={provide:se,useExisting:ra$1(()=>ui),multi:!0};function yr(){let n=$t()?$t().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var kr=new I(``);var ui=(()=>{class n extends pa{_compositionMode;_composing=!1;constructor(t,e,a){super(t,e),this._compositionMode=a,this._compositionMode??=!yr()}writeValue(t){let e=t??``;this.setProperty(`value`,e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(e){return new(e||n)(_e(Er$1),_e(sn$1),_e(kr,8))};static ɵdir=un$1({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(e,a){e&1&&_c(`input`,function(o){return a._handleInput(o.target.value)})(`blur`,function(){return a.onTouched()})(`compositionstart`,function(){return a._compositionStart()})(`compositionend`,function(o){return a._compositionEnd(o.target.value)})},standalone:!1,features:[SE([xr]),OD]})}return n})();function Qi(n){return n==null||Yi(n)===0}function Yi(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var de=new I(``);var Xi=new I(``);var wr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Ae=class{static min(i){return Sr(i)}static max(i){return Cr(i)}static required(i){return fa(i)}static requiredTrue(i){return Nr(i)}static email(i){return Mr(i)}static minLength(i){return Fr(i)}static maxLength(i){return Dr(i)}static pattern(i){return Ir(i)}static nullValidator(i){return ai()}static compose(i){return ya(i)}static composeAsync(i){return ka(i)}};function Sr(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t<n?{min:{min:n,actual:i.value}}:null}}function Cr(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t>n?{max:{max:n,actual:i.value}}:null}}function fa(n){return Qi(n.value)?{required:!0}:null}function Nr(n){return n.value===!0?null:{required:!0}}function Mr(n){return Qi(n.value)||wr.test(n.value)?null:{email:!0}}function Fr(n){return i=>{let t=i.value?.length??Yi(i.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Dr(n){return i=>{let t=i.value?.length??Yi(i.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function Ir(n){if(!n)return ai;let i,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),i=new RegExp(t)):(t=n.toString(),i=n),e=>{if(Qi(e.value))return null;let a=e.value;return i.test(a)?null:{pattern:{requiredPattern:t,actualValue:a}}}}function ai(n){return null}function ga(n){return n!=null}function ba(n){return Io(n)?Q(n):n}function _a(n){let i={};return n.forEach(t=>{i=t!=null?D(D({},i),t):i}),Object.keys(i).length===0?null:i}function va(n,i){return i.map(t=>t(n))}function Er(n){return!n.validate}function xa(n){return n.map(i=>Er(i)?i:t=>i.validate(t))}function ya(n){if(!n)return null;let i=n.filter(ga);return i.length==0?null:function(t){return _a(va(t,i))}}function Zi(n){return n!=null?ya(xa(n)):null}function ka(n){if(!n)return null;let i=n.filter(ga);return i.length==0?null:function(t){let e=va(t,i).map(ba);return Nw(e).pipe(G(_a))}}function Ji(n){return n!=null?ka(xa(n)):null}function oa(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function wa(n){return n._rawValidators}function Sa(n){return n._rawAsyncValidators}function Wi(n){return n?Array.isArray(n)?n:[n]:[]}function ri(n,i){return Array.isArray(n)?n.includes(i):n===i}function la(n,i){let t=Wi(i);return Wi(n).forEach(a=>{ri(t,a)||t.push(a)}),t}function sa(n,i){return Wi(i).filter(t=>!ri(n,t))}var oi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Zi(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ji(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}};var Kt=class extends oi{name;get formDirective(){return null}get path(){return null}};var Me=`VALID`;var ni=`INVALID`;var re=`PENDING`;var Fe=`DISABLED`;var Bt=class{};var li=class extends Bt{value;source;constructor(i,t){super(),this.value=i,this.source=t}};var Ie=class extends Bt{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}};var Ee=class extends Bt{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}};var oe=class extends Bt{status;source;constructor(i,t){super(),this.status=i,this.source=t}};var si=class extends Bt{source;constructor(i){super(),this.source=i}};var le=class extends Bt{source;constructor(i){super(),this.source=i}};function Ca(n){return(pi(n)?n.validators:n)||null}function Ar(n){return Array.isArray(n)?Zi(n):n||null}function Na(n,i){return(pi(i)?i.asyncValidators:n)||null}function Tr(n){return Array.isArray(n)?Ji(n):n||null}function pi(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Or(n,i,t){let e=n.controls;if(!(i?Object.keys(e):e).length)throw new y(1e3,``);if(!Ma(e,t))throw new y(1001,``)}function Rr(n,i,t){n._forEachChild((e,a)=>{if(t[a]===void 0)throw new y(-1002,``)})}var di=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=$(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return F(this.statusReactive)}set status(i){F(()=>this.statusReactive.set(i))}_status=Qe(()=>this.statusReactive());statusReactive=$(void 0);get valid(){return this.status===Me}get invalid(){return this.status===ni}get pending(){return this.status===re}get disabled(){return this.status===Fe}get enabled(){return this.status!==Fe}errors;get pristine(){return F(this.pristineReactive)}set pristine(i){F(()=>this.pristineReactive.set(i))}_pristine=Qe(()=>this.pristineReactive());pristineReactive=$(!0);get dirty(){return!this.pristine}get touched(){return F(this.touchedReactive)}set touched(i){F(()=>this.touchedReactive.set(i))}_touched=Qe(()=>this.touchedReactive());touchedReactive=$(!1);get untouched(){return!this.touched}_events=new X;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(la(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(la(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(sa(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(sa(i,this._rawAsyncValidators))}hasValidator(i){return ri(this._rawValidators,i)}hasAsyncValidator(i){return ri(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(B(D({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new Ee(!0,e))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=i.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:e})}),i.onlySelf||this._parent?._updateTouched(i,e),t&&i.emitEvent!==!1&&this._events.next(new Ee(!1,e))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(B(D({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new Ie(!1,e))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=i.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,e),t&&i.emitEvent!==!1&&this._events.next(new Ie(!0,e))}markAsPending(i={}){this.status=re;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new oe(this.status,t)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(B(D({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Fe,this.errors=null,this._forEachChild(a=>{a.disable(B(D({},i),{onlySelf:!0}))}),this._updateValue();let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new li(this.value,e)),this._events.next(new oe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(B(D({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Me,this._forEachChild(e=>{e.enable(B(D({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(B(D({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(i,t){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Me||this.status===re)&&this._runAsyncValidator(e,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new li(this.value,t)),this._events.next(new oe(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(B(D({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Fe:Me}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=re,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:i!==!1};let e=ba(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((e,a)=>e&&e._find(a),this)}getError(i,t){let e=t?this.get(t):this;return e?.errors?e.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,e){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||e)&&this._events.next(new oe(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,e)}_initObservables(){this.valueChanges=new he,this.statusChanges=new he}_calculateStatus(){return this._allControlsDisabled()?Fe:this.errors?ni:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(re)?re:this._anyControlsHaveStatus(ni)?ni:Me}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let e=!this._anyControlsDirty(),a=this.pristine!==e;this.pristine=e,i.onlySelf||this._parent?._updatePristine(i,t),a&&this._events.next(new Ie(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ee(this.touched,t)),i.onlySelf||this._parent?._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){pi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Ar(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Tr(this._rawAsyncValidators)}_updateHasRequiredValidator(){F(()=>this._hasRequired.set(this.hasValidator(Ae.required)))}};function Ma(n,i){return Object.hasOwn(n,i)}function Vr(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function Lr(n,i,t,e){switch(t){case`name`:n.setAttribute(i,t,e);break;case`disabled`:case`readonly`:case`required`:e?n.setAttribute(i,t,``):n.removeAttribute(i,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:e!==void 0?n.setAttribute(i,t,e.toString()):n.removeAttribute(i,t)}}var Ki=class{kind;context;control;message;constructor({kind:i,context:t,control:e}){this.kind=i,this.context=t,this.control=e}};var zr=(()=>{class n{_validator=ai;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let e=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(e),this._validator=this._enabled?this.createValidator(e):ai,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,features:[Rn]})}return n})();var Pr={provide:de,useExisting:ra$1(()=>Fa),multi:!0};var Fa=(()=>{class n extends zr{required;inputName=`required`;normalizeInput=Hc;createValidator=t=>fa;enabled(t){return t}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵdir=un$1({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(e,a){e&2&&Li(`required`,a._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[SE([Pr]),OD]})}return n})();var Br=new I(``);var fi=new I(``,{factory:()=>tn});var tn=`always`;function jr(n,i){return[...i.path,n]}function da(n,i,t=tn){en(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||t===`always`)&&i.valueAccessor.setDisabledState?.(n.disabled),Gr(n,i),qr(n,i),Ur(n,i),Hr(n,i)}function ca(n,i,t=!0){let e=()=>{};i?.valueAccessor?.registerOnChange(e),i?.valueAccessor?.registerOnTouched(e),mi(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ci(n,i){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function Hr(n,i){if(i.valueAccessor.setDisabledState){let t=e=>{i.valueAccessor.setDisabledState(e)};n.registerOnDisabledChange(t),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function en(n,i){let t=wa(n);i.validator!==null?n.setValidators(oa(t,i.validator)):typeof t==`function`&&n.setValidators([t]);let e=Sa(n);i.asyncValidator!==null?n.setAsyncValidators(oa(e,i.asyncValidator)):typeof e==`function`&&n.setAsyncValidators([e]);let a=()=>n.updateValueAndValidity();ci(i._rawValidators,a),ci(i._rawAsyncValidators,a)}function mi(n,i){let t=!1;if(n!==null){if(i.validator!==null){let a=wa(n);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==i.validator);r.length!==a.length&&(t=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let a=Sa(n);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==i.asyncValidator);r.length!==a.length&&(t=!0,n.setAsyncValidators(r))}}}let e=()=>{};return ci(i._rawValidators,e),ci(i._rawAsyncValidators,e),t}function Gr(n,i){i.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&Da(n,i)})}function Ur(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&Da(n,i),n.updateOn!==`submit`&&n.markAsTouched()})}function Da(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function qr(n,i){let t=(e,a)=>{i.valueAccessor.writeValue(e),a&&i.viewToModelUpdate(e)};n.registerOnChange(t),i._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Ia(n,i){en(n,i)}function Wr(n,i){return mi(n,i)}function Kr(n,i){if(!Object.hasOwn(n,`model`))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function $r(n){return Object.getPrototypeOf(n.constructor)===vr}function Ea(n,i){n._syncPendingControls(),i.forEach(t=>{let e=t.control;e.updateOn===`submit`&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function Qr(n,i){if(!i)return null;let t,e,a;return i.forEach(r=>{r.constructor===ui?t=r:$r(r)?e=r:a=r}),a||e||t||null}function Yr(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}var Xr={provide:Br,useFactory:()=>{let n=h(jt,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}};var jt=class extends oi{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof le&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Qr(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,t,e){super(),this.injector=i,this.renderer=t,this.rawValueAccessors=e,this.injector?.get(ge)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get($i$1);if(!this.control||!i)return;let t=i.markForCheck.bind(i);this.subscription=new le$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof le&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(a=>{this.control?.markAsDirty(),this.control?.setValue(a,{emitModelToViewChange:!1}),this.viewToModelUpdate(a)}),i.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Vr(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(a=>a instanceof Fa))}ngControlUpdate(i,t){if(!this.isCustomControlBased)return;let e=this.control,a=this.customControlBindings;Object.is(a.value,e.value)||(a.value=e.value,i.setCustomControlModelInput(e.value)),this.bindControlProperty(i,a,`touched`,e.touched),this.bindControlProperty(i,a,`dirty`,e.dirty),this.bindControlProperty(i,a,`valid`,e.valid),this.bindControlProperty(i,a,`invalid`,e.invalid),this.bindControlProperty(i,a,`pending`,e.pending),this.bindControlProperty(i,a,`disabled`,e.disabled),this.shouldBindRequired&&this.bindControlProperty(i,a,`required`,this.isRequired);let r=e.errors;if(a.errors!==r){a.errors=r;let o=this._convertErrors(r);i.setInputOnDirectives(`errors`,o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,t,e,a){if(t[e]===a)return;t[e]=a;let r=i.setInputOnDirectives(e,a);this.isNativeFormElement&&!r&&(e===`disabled`||e===`required`)&&this.renderer&&Lr(this.renderer,i.nativeElement,e,a)}_convertErrors(i){if(i===null)return[];let t=this.control;return Object.entries(i).map(([e,a])=>new Ki({context:a,kind:e,control:t}))}setParseErrorSource(i){if(i===void 0)return;let t=null,e=Qe(()=>{let a=i();return a.length===0?null:a.reduce((r,o)=>(r[o.kind]=o,r),{})});this.parseErrorsValidator=(()=>t).bind(this),Aa$1(()=>{t=e(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}};var $i=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var gi=(()=>{class n extends $i{constructor(t){super(t)}static ɵfac=function(e){return new(e||n)(_e(jt,2))};static ɵdir=un$1({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(e,a){e&2&&aE(`ng-untouched`,a.isUntouched)(`ng-touched`,a.isTouched)(`ng-pristine`,a.isPristine)(`ng-dirty`,a.isDirty)(`ng-valid`,a.isValid)(`ng-invalid`,a.isInvalid)(`ng-pending`,a.isPending)},standalone:!1,features:[OD]})}return n})();var hi=class extends di{constructor(i,t,e){super(Ca(t),Na(e,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,t){return this._find(i)||(this.controls[i]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(i,t,e={}){this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(i,t={}){let e=this._find(i);e&&e._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(i,t,e={}){let a=this._find(i);a&&a._registerOnCollectionChange(()=>{}),delete this.controls[i],t&&this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,t={}){F(()=>{Rr(this,!0,i),Object.keys(i).forEach(e=>{Or(this,!0,e),this.controls[e].setValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(i,t={}){i!=null&&(Object.keys(i).forEach(e=>{let a=this._find(e);a&&a.patchValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i={},t={}){this._forEachChild((e,a)=>{e.reset(i?i[a]:null,B(D({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new le(this))}getRawValue(){return this._reduceChildren({},(i,t,e)=>(i[e]=t.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&i(e,t)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&i(e))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,e,a)=>((e.enabled||this.disabled)&&(t[a]=e.value),t))}_reduceChildren(i,t){let e=i;return this._forEachChild((a,r)=>{e=t(e,a,r)}),e}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return Ma(this.controls,i)?this.controls[i]:null}};var Zr={provide:Kt,useExisting:ra$1(()=>nn)};var De=Promise.resolve();var nn=(()=>{class n extends Kt{callSetDisabledState;get submitted(){return F(this.submittedReactive)}_submitted=Qe(()=>this.submittedReactive());submittedReactive=$(!1);_directives=new Set;form;ngSubmit=new he;options;constructor(t,e,a){super(),this.callSetDisabledState=a,this.form=new hi({},Zi(t),Ji(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){De.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){De.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){De.then(()=>{let e=this._findContainer(t.path),a=new hi({});Ia(a,t),e.registerControl(t.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){De.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){De.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Ea(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new si(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(e){return new(e||n)(_e(de,10),_e(Xi,10),_e(fi,8))};static ɵdir=un$1({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(e,a){e&1&&_c(`submit`,function(o){return a.onSubmit(o)})(`reset`,function(){return a.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[SE([Zr]),OD]})}return n})();function ma(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}function ha(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var Aa=class extends di{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,e){super(Ca(t),Na(e,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),pi(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ha(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){F(()=>{this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new le(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){ma(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){ma(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){ha(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Jr=n=>n instanceof Aa;var to=(()=>{class n extends Kt{callSetDisabledState;get submitted(){return F(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Qe(()=>this._submittedReactive());_submittedReactive=$(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,a){super(),this.callSetDisabledState=a,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),Object.hasOwn(t,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(mi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return t._setupWithForm(e,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){ca(t.control||null,t,!1),Yr(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Ea(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new si(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,a=this.form.get(t.path);e!==a&&(ca(e||null,t),Jr(a)&&t._setupWithForm(a,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);Ia(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&Wr(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){en(this.form,this),this._oldForm&&mi(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(e){return new(e||n)(_e(de,10),_e(Xi,10),_e(fi,8))};static ɵdir=un$1({type:n,features:[OD,Rn]})}return n})();var eo={provide:Kt,useExisting:ra$1(()=>an)};var an=(()=>{class n extends to{form=null;ngSubmit=new he;get control(){return this.form}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵdir=un$1({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(e,a){e&1&&_c(`submit`,function(o){return a.onSubmit(o)})(`reset`,function(){return a.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[SE([eo]),OD]})}return n})();var io={provide:jt,useExisting:ra$1(()=>Te)};var ua=Promise.resolve();var Te=(()=>{class n extends jt{_changeDetectorRef;callSetDisabledState;control=new Aa;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new he;constructor(t,e,a,r,o,h,f,E){super(f,E,r),this._changeDetectorRef=o,this.callSetDisabledState=h,this._parent=t,this._setValidators(e),this._setAsyncValidators(a)}ngOnChanges(t){if(this._registered,this._checkForErrors(),!this._registered||`name`in t){if(this._registered&&(this._checkName(),this.formDirective)){let e=t.name.previousValue;this.formDirective.removeControl({name:e,path:this._getPath(e)})}this._setUpControl()}`isDisabled`in t&&this._updateDisabled(t),Kr(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){super.ngControlUpdate(t,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,da(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,da(this.control,this,t))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ua.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let e=t.isDisabled.currentValue,a=e!==0&&Hc(e);ua.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?jr(t,this._parent):[t]}static ɵfac=function(e){return new(e||n)(_e(Kt,9),_e(de,10),_e(Xi,10),_e(se,10),_e($i$1,8),_e(fi,8),_e(se$1,8),_e(Er$1,8))};static ɵdir=un$1({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[SE([io,Xr]),OD,Rn,TM(null)]})}return n})();var no=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({})}return n})();var bi=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:fi,useValue:t.callSetDisabledState??tn}]}}static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[no]})}return n})();var Oa=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[i4]})}return n})();var Wl=(()=>{class n{_animationsDisabled=Q$1();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(e){return new(e||n)};static ɵcmp=ep({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(e,a){e&2&&aE(`mat-pseudo-checkbox-indeterminate`,a.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,a.state===`checked`)(`mat-pseudo-checkbox-disabled`,a.disabled)(`mat-pseudo-checkbox-minimal`,a.appearance===`minimal`)(`mat-pseudo-checkbox-full`,a.appearance===`full`)(`_mat-animation-noopable`,a._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(e,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var Ra=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[i4]})}return n})();var Va=new I(`ListOption`);var _i=(()=>{class n{_elementRef=h(sn$1);static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return n})();var La=(()=>{class n{_elementRef=h(sn$1);static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return n})();var co=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return n})();var za=(()=>{class n{_listOption=h(Va,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,hostVars:4,hostBindings:function(e,a){e&2&&aE(`mdc-list-item__start`,a._isAlignedAtStart())(`mdc-list-item__end`,!a._isAlignedAtStart())}})}return n})();var ln=(()=>{class n extends za{static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵdir=un$1({type:n,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[OD]})}return n})();var sn=(()=>{class n extends za{static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵdir=un$1({type:n,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[OD]})}return n})();var mo=new I(`MAT_LIST_CONFIG`);var Oe=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Ui(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Ui(t))}_disabled=$(!1);_defaultOptions=h(mo,{optional:!0});static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,hostVars:1,hostBindings:function(e,a){e&2&&Li(`aria-disabled`,a.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var rn=(()=>{class n{_elementRef=h(sn$1);_ngZone=h(we);_listBase=h(Oe,{optional:!0});_platform=h(y$1);_hostElement;_isButtonElement;_noopAnimations=Q$1();_avatars;_icons;set lines(t){this._explicitLines=$t$1(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Ui(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Ui(t))}_disabled=$(!1);_subscriptions=new le$1;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){h(F$1).load(_n$1);let t=h(ie,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new st(this,this._ngZone,this._hostElement,this._platform,h(se$1)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Rw(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),a=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,e===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,e===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&e===1;a.classList.toggle(`mdc-list-item__primary-text`,r),a.classList.toggle(`mdc-list-item__secondary-text`,!r)}else a.classList.remove(`mdc-list-item__primary-text`),a.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,contentQueries:function(e,a,r){if(e&1&&Mc(r,ln,4)(r,sn,4),e&2){let o;lp(o=dp())&&(a._avatars=o),lp(o=dp())&&(a._icons=o)}},hostVars:4,hostBindings:function(e,a){e&2&&(Li(`aria-disabled`,a.disabled)(`disabled`,a._isButtonElement&&a.disabled||null),aE(`mdc-list-item--disabled`,a.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var Pa=(()=>{class n extends Oe{_isNonInteractive=!1;static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵcmp=(function(){return ep({type:n,selectors:[[`mat-action-list`]],hostAttrs:[`role`,`group`,1,`mat-mdc-action-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matActionList`],features:[SE([{provide:Oe,useExisting:n}]),OD],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,r){a&1&&(SN(),TN(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`],encapsulation:2})})()}return n})();var Ba=(()=>{class n extends rn{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Ui(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵcmp=(function(){let t=[`unscopedContent`],e=[`text`],a=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];return ep({type:n,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(h,f,E){if(h&1&&Mc(E,La,5)(E,_i,5)(E,co,5),h&2){let $;lp($=dp())&&(f._lines=$),lp($=dp())&&(f._titles=$),lp($=dp())&&(f._meta=$)}},viewQuery:function(h,f){if(h&1&&tE(t,5)(e,5),h&2){let E;lp(E=dp())&&(f._unscopedContent=E.first),lp(E=dp())&&(f._itemText=E.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(h,f){h&2&&(Li(`aria-current`,f._getAriaCurrent()),aE(`mdc-list-item--activated`,f.activated)(`mdc-list-item--with-leading-avatar`,f._avatars.length!==0)(`mdc-list-item--with-leading-icon`,f._icons.length!==0)(`mdc-list-item--with-trailing-meta`,f._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,f._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,f._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[OD],ngContentSelectors:[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`],decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(h,f){h&1&&(SN(a),TN(0),ac(1,`span`,1),TN(2,1),TN(3,2),ac(4,`span`,2,0),_c(`cdkObserveContent`,function(){return f._updateItemLines(!0)}),TN(6,3),sp()(),TN(7,4),TN(8,5),Tc(9,`div`,3))},dependencies:[fo$1],encapsulation:2})})()}return n})();var ja=new I(`SelectionList`);var Re=(()=>{class n extends rn{_selectionList=h(ja);_changeDetectorRef=h($i$1);_lines;_titles;_unscopedContent;selectedChange=new he;togglePosition=`after`;get color(){return this._color||this._selectionList.color}set color(t){this._color=t}_color;get value(){return this._value}set value(t){this.selected&&t!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=t}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(t){let e=Ui(t);e!==this._selected&&(this._setSelected(e),(e||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let t=this._selectionList;t._value&&t._value.some(a=>t.compareWith(this._value,a))&&this._setSelected(!0);let e=this._selected;Promise.resolve().then(()=>{(this._selected||e)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||``}_hasCheckboxAt(t){return this._selectionList.multiple&&this._getTogglePosition()===t}_hasRadioAt(t){return!this._selectionList.multiple&&this._getTogglePosition()===t&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(t){return this._hasProjected(`icons`,t)||this._hasProjected(`avatars`,t)}_hasProjected(t,e){return this._getTogglePosition()!==e&&(t===`avatars`?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||`after`}_setSelected(t){return t===this._selected?!1:(this._selected=t,t?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(t),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(t){this._hostElement.setAttribute(`tabindex`,t+``)}_hasBothLeadingAndTrailing(){let t=this._hasProjected(`avatars`,`before`)||this._hasProjected(`icons`,`before`)||this._hasCheckboxAt(`before`)||this._hasRadioAt(`before`),e=this._hasProjected(`icons`,`after`)||this._hasProjected(`avatars`,`after`)||this._hasCheckboxAt(`after`)||this._hasRadioAt(`after`);return t&&e}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵcmp=(function(){let t=[`unscopedContent`],e=[[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[`mat-divider`]],[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]]],a=[`[matListItemTitle]`,`[matListItemLine]`,`*`,`mat-divider`,`[matListItemAvatar],[matListItemIcon]`];function r(k,A){k&1&&TN(0,4)}function o(k,A){if(k&1&&(ac(0,`div`,11),Tc(1,`input`,12),ac(2,`div`,13),im(),ac(3,`svg`,14),Tc(4,`path`,15),sp(),sm(),Tc(5,`div`,16),sp()()),k&2){let u=wN();aE(`mdc-checkbox--disabled`,u.disabled),kT(),zD(`checked`,u.selected)(`disabled`,u.disabled)}}function h(k,A){if(k&1&&(ac(0,`div`,17),Tc(1,`input`,18),ac(2,`div`,19),Tc(3,`div`,20)(4,`div`,21),sp()()),k&2){let u=wN();aE(`mdc-radio--disabled`,u.disabled),kT(),zD(`checked`,u.selected)(`disabled`,u.disabled)}}function f(k,A){}function E(k,A){if(k&1&&(ac(0,`span`,4),PD(1,f,0,0,`ng-template`,6),sp()),k&2){wN();let u=NN(3);kT(),zD(`ngTemplateOutlet`,u)}}function $(k,A){}function he(k,A){if(k&1&&(ac(0,`span`,5),PD(1,$,0,0,`ng-template`,6),sp()),k&2){wN();let u=NN(5);kT(),zD(`ngTemplateOutlet`,u)}}function Be(k,A){}function ue(k,A){if(k&1&&PD(0,Be,0,0,`ng-template`,6),k&2){wN();let u=NN(1);zD(`ngTemplateOutlet`,u)}}function pe(k,A){}function fe(k,A){if(k&1&&(ac(0,`span`,9),PD(1,pe,0,0,`ng-template`,6),sp()),k&2){wN();let u=NN(3);kT(),zD(`ngTemplateOutlet`,u)}}function Di(k,A){}function Ii(k,A){if(k&1&&(ac(0,`span`,9),PD(1,Di,0,0,`ng-template`,6),sp()),k&2){wN();let u=NN(5);kT(),zD(`ngTemplateOutlet`,u)}}function Ei(k,A){}function Ai(k,A){if(k&1&&PD(0,Ei,0,0,`ng-template`,6),k&2){wN();let u=NN(1);zD(`ngTemplateOutlet`,u)}}return ep({type:n,selectors:[[`mat-list-option`]],contentQueries:function(A,u,Ct){if(A&1&&Mc(Ct,La,5)(Ct,_i,5),A&2){let $t;lp($t=dp())&&(u._lines=$t),lp($t=dp())&&(u._titles=$t)}},viewQuery:function(A,u){if(A&1&&tE(t,5),A&2){let Ct;lp(Ct=dp())&&(u._unscopedContent=Ct.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-list-item`,`mat-mdc-list-option`,`mdc-list-item`],hostVars:27,hostBindings:function(A,u){A&1&&_c(`blur`,function(){return u._handleBlur()})(`click`,function(){return u._toggleOnInteraction()}),A&2&&(Li(`aria-selected`,u.selected),aE(`mdc-list-item--selected`,u.selected&&!u._selectionList.multiple&&u._selectionList.hideSingleSelectionIndicator)(`mdc-list-item--with-leading-avatar`,u._hasProjected(`avatars`,`before`))(`mdc-list-item--with-leading-icon`,u._hasProjected(`icons`,`before`))(`mdc-list-item--with-trailing-icon`,u._hasProjected(`icons`,`after`))(`mat-mdc-list-option-with-trailing-avatar`,u._hasProjected(`avatars`,`after`))(`mdc-list-item--with-leading-checkbox`,u._hasCheckboxAt(`before`))(`mdc-list-item--with-trailing-checkbox`,u._hasCheckboxAt(`after`))(`mdc-list-item--with-leading-radio`,u._hasRadioAt(`before`))(`mdc-list-item--with-trailing-radio`,u._hasRadioAt(`after`))(`mat-mdc-list-item-both-leading-and-trailing`,u._hasBothLeadingAndTrailing())(`mat-accent`,u.color!==`primary`&&u.color!==`warn`)(`mat-warn`,u.color===`warn`)(`_mat-animation-noopable`,u._noopAnimations))},inputs:{togglePosition:`togglePosition`,color:`color`,value:`value`,selected:`selected`},outputs:{selectedChange:`selectedChange`},exportAs:[`matListOption`],features:[SE([{provide:rn,useExisting:n},{provide:Va,useExisting:n}]),OD],ngContentSelectors:a,decls:20,vars:4,consts:[[`icons`,``],[`checkbox`,``],[`radio`,``],[`unscopedContent`,``],[1,`mdc-list-item__start`,`mat-mdc-list-option-checkbox-before`],[1,`mdc-list-item__start`,`mat-mdc-list-option-radio-before`],[3,`ngTemplateOutlet`],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mdc-list-item__end`],[1,`mat-focus-indicator`],[1,`mdc-checkbox`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`checked`,`disabled`],[1,`mdc-checkbox__background`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[1,`mdc-radio`],[`type`,`radio`,1,`mdc-radio__native-control`,3,`checked`,`disabled`],[1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`]],template:function(A,u){A&1&&(SN(e),PD(0,r,1,0,`ng-template`,null,0,hR)(2,o,6,4,`ng-template`,null,1,hR)(4,h,5,4,`ng-template`,null,2,hR),cN(6,E,2,1,`span`,4)(7,he,2,1,`span`,5),cN(8,ue,1,1,null,6),ac(9,`span`,7),TN(10),TN(11,1),ac(12,`span`,8,3),_c(`cdkObserveContent`,function(){return u._updateItemLines(!0)}),TN(14,2),sp()(),cN(15,fe,2,1,`span`,9)(16,Ii,2,1,`span`,9),cN(17,Ai,1,1,null,6),TN(18,3),Tc(19,`div`,10)),A&2&&(kT(6),lN(u._hasCheckboxAt(`before`)?6:u._hasRadioAt(`before`)?7:-1),kT(2),lN(u._hasIconsOrAvatarsAt(`before`)?8:-1),kT(7),lN(u._hasCheckboxAt(`after`)?15:u._hasRadioAt(`after`)?16:-1),kT(2),lN(u._hasIconsOrAvatarsAt(`after`)?17:-1))},dependencies:[BA,fo$1],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--%NS%selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2})})()}return n})();var ho={provide:se,useExisting:ra$1(()=>Ve),multi:!0};var on=class{source;options;constructor(i,t){this.source=i,this.options=t}};var Ve=(()=>{class n extends Oe{_element=h(sn$1);_ngZone=h(we);_renderer=h(Er$1);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new X;_isDestroyed=!1;_onChange=t=>{};_items;selectionChange=new he;color=`accent`;compareWith=(t,e)=>t===e;get multiple(){return this._multiple}set multiple(t){let e=Ui(t);e!==this._multiple&&(this._multiple=e,this.selectedOptions=new ae(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=Ui(t)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new ae(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=h($i$1);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,`focusin`,this._handleFocusin),this._renderer.listen(this._element.nativeElement,`focusout`,this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(t){let e=t.disabled,a=t.disableRipple,r=t.hideSingleSelectionIndicator;(a&&!a.firstChange||e&&!e.firstChange||r&&!r.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(t){this._element.nativeElement.focus(t)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let t=this._getSelectedOptionValues();this._onChange(t),this._value=t}}_emitChangeEvent(t){this.selectionChange.emit(new on(this,t))}writeValue(t){this._value=t,this.options&&this._setOptionsFromValues(t||[])}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(t){this._selectionListDisabled.set(Ui(t)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=$(!1);registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}_watchForSelectionChange(){this.selectedOptions.changed.pipe(zo$1(this._destroyed)).subscribe(t=>{for(let e of t.added)e.selected=!0;for(let e of t.removed)e.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(t){this.options.forEach(e=>e._setSelected(!1)),t.forEach(e=>{let a=this.options.find(r=>r.selected?!1:this.compareWith(r.value,e));a&&a._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(t=>t.selected).map(t=>t.value)}_markOptionsForCheck(){this.options&&this.options.forEach(t=>t._markForCheck())}_setAllOptionsSelected(t,e){let a=[];return this.options.forEach(r=>{(!e||!r.disabled)&&r._setSelected(t)&&a.push(r)}),a.length&&this._reportValueChange(),a}get options(){return this._items}_handleKeydown(t){let e=this._keyManager.activeItem;if(e&&(t.keyCode===40||t.keyCode===38)){let a=Tn();if(!this._items.toArray().some(o=>o._elementRef.nativeElement===a)){t.preventDefault(),e.focus();return}}if((t.keyCode===13||t.keyCode===32)&&!this._keyManager.isTyping()&&e&&!e.disabled)t.preventDefault(),e._toggleOnInteraction();else if(t.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&sn$2(t,`ctrlKey`,`metaKey`)){let a=this.options.some(r=>!r.disabled&&!r.selected);t.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(a,!0))}else this._keyManager.onKeydown(t)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=t=>{let e=this._items.toArray().findIndex(a=>a._elementRef.nativeElement.contains(t.target));e>-1?this._setActiveOption(e):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new Jt(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>!1),this._resetActiveOption(),this._keyManager.change.subscribe(t=>this._setActiveOption(t)),this._items.changes.pipe(zo$1(this._destroyed)).subscribe(()=>{let t=this._keyManager.activeItem;(!t||this._items.toArray().indexOf(t)===-1)&&this._resetActiveOption()})}_setActiveOption(t){this._items.forEach((e,a)=>{let r=-1;!this.disabled&&a===t&&(r=0),e._setTabindex(r)}),this._keyManager.updateActiveItem(t)}_resetActiveOption(){if(this.disabled){let e=this._items.find(r=>r.selected)||this._items.first,a=e?this._items.toArray().indexOf(e):-1;this._setActiveOption(a);return}let t=this._items.find(e=>e.selected&&!e.disabled)||this._items.first;this._setActiveOption(t?this._items.toArray().indexOf(t):-1)}_containsFocus(){let t=Tn();return t&&this._element.nativeElement.contains(t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return ep({type:n,selectors:[[`mat-selection-list`]],contentQueries:function(a,r,o){if(a&1&&Mc(o,Re,5),a&2){let h;lp(h=dp())&&(r._items=h)}},hostAttrs:[`role`,`listbox`,1,`mat-mdc-selection-list`,`mat-mdc-list-base`,`mdc-list`],hostVars:1,hostBindings:function(a,r){a&1&&_c(`keydown`,function(h){return r._handleKeydown(h)}),a&2&&Li(`aria-multiselectable`,r.multiple)},inputs:{color:`color`,compareWith:`compareWith`,multiple:`multiple`,hideSingleSelectionIndicator:`hideSingleSelectionIndicator`,disabled:`disabled`},outputs:{selectionChange:`selectionChange`},exportAs:[`matSelectionList`],features:[SE([ho,{provide:Oe,useExisting:n},{provide:ja,useExisting:n}]),OD,Rn],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,r){a&1&&(SN(),TN(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`],encapsulation:2})})()}return n})();var ce=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[Qe$1,Sn,Ra,i4,Oa]})}return n})();var vi=D({balls:`Balls`},ia);var uo=(n,i)=>i.id;function po(n,i){if(n&1){let t=IN();ac(0,`button`,2),_c(`click`,function(){let a=qg(t).$implicit,r=wN();return Wg(r.onItemClick(a.id))}),Tc(1,`mat-icon`,3),sp()}if(n&2){let t=i.$implicit,e=wN();aE(`ith-nav-button--disabled`,e.isDisabled(t.id))(`ith-nav-button--active`,e.activeItemId()===t.id)(`ith-nav-button--indicated`,e.hasSelection(t.id)),zD(`matTooltip`,e.tooltip(t.id)),Li(`aria-label`,e.ariaLabel(t.id))(`aria-expanded`,e.activeItemId()===t.id),kT(),zD(`svgIcon`,t.icon)}}var xi=class n{labels=vi;items=[{id:`balls`,icon:`group_work`},...Ce.map(i=>({id:i,icon:Rt[i].icon}))];activeItemId=w8(null);filterTypesWithSelection=Vc([]);disabledFilters=Vc([]);ariaLabel(i){return this.isDisabled(i)?`${this.labels[i]}, not used on this page`:this.hasSelection(i)?`${this.labels[i]}, filtered`:this.labels[i]}isDisabled(i){return this.disabledFilters().includes(i)}tooltip(i){return this.isDisabled(i)?`${this.labels[i]} - not used on this page`:this.labels[i]}hasSelection(i){return this.filterTypesWithSelection().includes(i)}onItemClick(i){this.isDisabled(i)||this.activeItemId.update(t=>t===i?null:i)}static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-navigation`]],inputs:{activeItemId:[1,`activeItemId`],filterTypesWithSelection:[1,`filterTypesWithSelection`],disabledFilters:[1,`disabledFilters`]},outputs:{activeItemId:`activeItemIdChange`},decls:4,vars:0,consts:[[1,`ith-nav`],[`type`,`button`,`mat-list-item`,``,`matTooltipPosition`,`below`,1,`ith-nav-button`,3,`ith-nav-button--disabled`,`matTooltip`,`ith-nav-button--active`,`ith-nav-button--indicated`],[`type`,`button`,`mat-list-item`,``,`matTooltipPosition`,`below`,1,`ith-nav-button`,3,`click`,`matTooltip`],[`matListItemIcon`,``,3,`svgIcon`]],template:function(t,e){t&1&&(ac(0,`div`,0)(1,`mat-action-list`),pN(2,po,2,10,`button`,1,uo),sp()()),t&2&&(kT(2),hN(e.items))},dependencies:[ce,Pa,Ba,sn,Yr$1,Gr$1,Qn,Je],styles:[`[_nghost-%COMP%]{display:block}.ith-nav[_ngcontent-%COMP%]{overflow:auto}.ith-nav[_ngcontent-%COMP%]   mat-action-list[_ngcontent-%COMP%]{display:flex;gap:.25rem;padding:0}@media(pointer:coarse){.ith-nav[_ngcontent-%COMP%]   mat-action-list[_ngcontent-%COMP%]{--%NS%mat-list-list-item-one-line-container-height: 48px}}.ith-nav-button[_ngcontent-%COMP%]{flex:0 0 auto;width:auto;justify-content:center;margin:0;padding:.75em 1.25em!important}.ith-nav-button--active[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container);border-radius:var(--%NS%mat-sys-corner-small, 4px)}.ith-nav-button--disabled[_ngcontent-%COMP%]{opacity:.38;cursor:default}.ith-nav-button--indicated[_ngcontent-%COMP%]{position:relative}.ith-nav-button--%NS%indicated[_ngcontent-%COMP%]:after{content:"";position:absolute;top:6px;right:6px;width:8px;height:8px;border-radius:50%;background-color:var(--%NS%mat-sys-primary)}@media(max-width:959.98px){.ith-nav-button[_ngcontent-%COMP%]{flex:1 1 0;min-width:0;padding-inline:.25em!important}}`]})};var Ha=class n{ballFilters=h(St);openFilter=this.ballFilters.openFilter;disabledFilters=Vc([]);filterTypesWithSelection=Qe(()=>{let i=this.ballFilters.lookupSelections(),t=Ce.filter(e=>Rt[e].lists.some(({key:a})=>i[a].length>0));return this.ballFilters.ballsFiltered()?[`balls`,...t]:t});static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters`]],inputs:{disabledFilters:[1,`disabledFilters`]},decls:6,vars:5,consts:[[`type`,`button`,`mat-icon-button`,``,`aria-label`,`Clear filters`,`matTooltip`,`Clear filters`,`matTooltipPosition`,`below`,1,`ith-clear`,`ith-clear--narrow`,3,`click`,`disabled`],[`svgIcon`,`filter_alt_off`],[`type`,`button`,`mat-button`,``,1,`ith-clear`,`ith-clear--wide`,3,`click`,`disabled`],[3,`activeItemIdChange`,`activeItemId`,`disabledFilters`,`filterTypesWithSelection`]],template:function(t,e){t&1&&(ac(0,`button`,0),_c(`click`,function(){return e.ballFilters.clear()}),Tc(1,`mat-icon`,1),sp(),ac(2,`button`,2),_c(`click`,function(){return e.ballFilters.clear()}),Tc(3,`mat-icon`,1),QN(4,` Clear filters
`),sp(),ac(5,`app-filters-navigation`,3),EE(`activeItemIdChange`,function(r){return rR(e.openFilter,r)||(e.openFilter=r),r}),sp()),t&2&&(zD(`disabled`,!e.ballFilters.hasActiveFilters()),kT(2),zD(`disabled`,!e.ballFilters.hasActiveFilters()),kT(3),DE(`activeItemId`,e.openFilter),zD(`disabledFilters`,e.disabledFilters())(`filterTypesWithSelection`,e.filterTypesWithSelection()))},dependencies:[Ar$1,Ir$1,sa$1,Yr$1,Gr$1,Qn,Je,xi],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;gap:.5rem;min-width:0}app-filters-navigation[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0}button[_ngcontent-%COMP%]{flex:0 0 auto}.ith-clear--narrow[_ngcontent-%COMP%]{display:none}@media(max-width:959.98px){.ith-clear--narrow[_ngcontent-%COMP%]{display:inline-flex}.ith-clear--wide[_ngcontent-%COMP%]{display:none}}`]})};var Ga=(()=>{class n{labelPosition=`after`;static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return ep({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(a,r){a&2&&aE(`mdc-form-field--align-end`,r.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,r){a&1&&(SN(),TN(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return n})();var cn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var fo=new I(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>cn});var et=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(et||{});var mn=class{source;checked};var hn=(()=>{class n{_elementRef=h(sn$1);_changeDetectorRef=h($i$1);_ngZone=h(we);_animationsDisabled=Q$1();_options=h(fo,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(t){let e=new mn;return e.source=this,e.checked=t,e}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new he;indeterminateChange=new he;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=et.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){h(F$1).load(_n$1);let t=h(new Bc(`tabindex`),{optional:!0});this._options=this._options||cn,this.color=this._options.color||cn.color,this.tabIndex=t==null?0:parseInt(t)||0,this.id=this._uniqueId=h(te).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(t){t.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(t){t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(t){let e=t!=this._indeterminate();this._indeterminate.set(t),e&&(t?this._transitionCheckState(et.Indeterminate):this._transitionCheckState(this.checked?et.Checked:et.Unchecked),this.indeterminateChange.emit(t)),this._syncIndeterminate(t)}_indeterminate=$(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorChangeFn=t}_transitionCheckState(t){let e=this._currentCheckState,a=this._getAnimationTargetElement();if(!(e===t||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(e,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let t=this._options?.clickAction;!this.disabled&&t!==`noop`?(this.indeterminate&&t!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?et.Checked:et.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&t===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,e){if(this._animationsDisabled)return``;switch(t){case et.Init:if(e===et.Checked)return this._animationClasses.uncheckedToChecked;if(e==et.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case et.Unchecked:return e===et.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case et.Checked:return e===et.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case et.Indeterminate:return e===et.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(t){let e=this._inputElement;e&&(e.nativeElement.indeterminate=t)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(t){t.target&&this._inputElement&&t.target!==this._inputElement.nativeElement&&t.stopPropagation()}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`input`];return ep({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(r,o){if(r&1&&tE(t,5),r&2){let h;lp(h=dp())&&(o._inputElement=h.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(r,o){r&2&&(QD(`id`,o.id),Li(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),BN(o.color?`mat-`+o.color:`mat-accent`),aE(`_mat-animation-noopable`,o._animationsDisabled)(`mdc-checkbox--disabled`,o.disabled)(`mat-mdc-checkbox-disabled`,o.disabled)(`mat-mdc-checkbox-checked`,o.checked)(`mat-mdc-checkbox-disabled-interactive`,o.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Hc],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Hc],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Hc],tabIndex:[2,`tabIndex`,`tabIndex`,a=>a==null?void 0:M8(a)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Hc],checked:[2,`checked`,`checked`,Hc],disabled:[2,`disabled`,`disabled`,Hc],indeterminate:[2,`indeterminate`,`indeterminate`,Hc]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[SE([{provide:se,useExisting:ra$1(()=>n),multi:!0},{provide:de,useExisting:n,multi:!0}]),Rn],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(r,o){if(r&1&&(SN(),ac(0,`label`,3),_c(`click`,function(f){return o._preventBubblingFromLabel(f)}),ac(1,`span`,4,0),Tc(3,`span`,5),ac(4,`input`,6,1),_c(`blur`,function(){return o._onBlur()})(`click`,function(){return o._onInputClick()})(`change`,function(f){return o._onInteractionEvent(f)}),sp(),Tc(6,`span`,7),ac(7,`span`,8),im(),ac(8,`svg`,9),Tc(9,`path`,10),sp(),sm(),Tc(10,`span`,11),sp(),Tc(11,`span`,12),sp(),ac(12,`span`,13,2),TN(14),sp()()),r&2){let h=NN(2);zD(`labelPosition`,o.labelPosition)(`for`,o.inputId),kT(4),aE(`mdc-checkbox--selected`,o.checked),zD(`checked`,o.checked)(`indeterminate`,o.indeterminate)(`disabled`,o.disabled&&!o.disabledInteractive)(`id`,o.inputId)(`required`,o.required)(`tabIndex`,o.disabled&&!o.disabledInteractive?-1:o.tabIndex),Li(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby)(`aria-describedby`,o.ariaDescribedby)(`aria-checked`,o.indeterminate?`mixed`:null)(`aria-controls`,o.ariaControls)(`aria-disabled`,o.disabled&&o.disabledInteractive?!0:null)(`aria-expanded`,o.ariaExpanded)(`aria-owns`,o.ariaOwns)(`name`,o.name)(`value`,o.value),kT(7),zD(`matRippleTrigger`,h)(`matRippleDisabled`,o.disableRipple||o.disabled)(`matRippleCentered`,!0)}},dependencies:[Ji$1,Ga],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();var Ua=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[hn,i4]})}return n})();var Wa=Symbol(`FIELD_TREE`);function Le(n){return typeof n==`function`&&n[Wa]===!0}var $a=new I(``);var un=class{_box;_destroyed=new X;_resizeSubject=new X;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new L(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),e.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Se(t=>t.some(e=>e.target===i)),Fw({bufferSize:1,refCount:!0}),zo$1(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Qa=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=h(we);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let a=e?.box||`content-box`;return this._observers.has(a)||this._observers.set(a,new un(a)),this._observers.get(a).observe(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=Z({token:n,factory:n.ɵfac})}return n})();var pn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[`mat-label`]]})}return n})();var bo=new I(`MatError`);var fn=(()=>{class n{align=`start`;id=h(te).getId(`mat-mdc-hint-`);static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(e,a){e&2&&(QD(`id`,a.id),Li(`align`,null),aE(`mat-mdc-form-field-hint-end`,a.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var ir=new I(`MatPrefix`);var gn=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[SE([{provide:ir,useExisting:n}])]})}return n})();var nr=new I(`MatSuffix`);var bn=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[SE([{provide:nr,useExisting:n}])]})}return n})();var ar=new I(`FloatingLabelParent`);var Ya=(()=>{class n{_elementRef=h(sn$1);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=h(Qa);_ngZone=h(we);_parent=h(ar);_resizeSubscription=new le$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return _o(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(e,a){e&2&&aE(`mdc-floating-label--float-above`,a.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function _o(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let t=i.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var Xa=`mdc-line-ripple--active`;var yi=`mdc-line-ripple--deactivating`;var Za=(()=>{class n{_elementRef=h(sn$1);_cleanupTransitionEnd;constructor(){let t=h(we),e=h(Er$1);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(yi),t.add(Xa)}deactivate(){this._elementRef.nativeElement.classList.add(yi)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,a=e.contains(yi);t.propertyName===`opacity`&&a&&e.remove(Xa,yi)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Ja=(()=>{class n{_elementRef=h(sn$1);_ngZone=h(we);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(`.mdc-floating-label`);e?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(e.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width=``:e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`notch`];return ep({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(r,o){if(r&1&&tE(t,5),r&2){let h;lp(h=dp())&&(o._notch=h.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(r,o){r&2&&aE(`mdc-notched-outline--notched`,o.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(r,o){r&1&&(SN(),GD(0,`div`,1),ap(1,`div`,2,0),TN(3),cp(),GD(4,`div`,3))},encapsulation:2})})()}return n})();var _n=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n})}return n})();var vn=new I(`MatFormField`);var vo=new I(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var tr=`fill`;var xo=`auto`;var er=`fixed`;var yo=`translateY(-50%)`;var ki=(()=>{class n{_elementRef=h(sn$1);_changeDetectorRef=h($i$1);_platform=h(y$1);_idGenerator=h(te);_ngZone=h(we);_defaults=h(vo,{optional:!0});_currentDirection;_unwrapMaybeSignal(t){return io$1(t)?t():t}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=b8(`iconPrefixContainer`);_textPrefixContainerSignal=b8(`textPrefixContainer`);_iconSuffixContainerSignal=b8(`iconSuffixContainer`);_textSuffixContainerSignal=b8(`textSuffixContainer`);_prefixSuffixContainers=Qe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=T8(pn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Ui(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||xo}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||tr;this._appearanceSignal.set(e)}_appearanceSignal=$(tr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||er}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||er}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new X;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Q$1();constructor(){let t=this._defaults,e=h(VO);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Aa$1(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Le(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Le(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Qe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let e=this._control,a=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(a+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(a+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges?.pipe(Wu([void 0,void 0]),G(()=>[this._unwrapMaybeSignal(e.errorState),e.userAriaDescribedBy]),Lw(),Se(([[r,o],[h,f]])=>r!==h||o!==f)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&!Le(e.ngField)&&(this._valueChanges=e.ngControl.valueChanges.pipe(zo$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Rw(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._unwrapMaybeSignal(this._control.focused);t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){N8({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Qe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(t){let e=this._control?.ngField||this._control?.ngControl;if(!e)return!1;if(Le(e)){let a=e();return t===`valid`?a.valid():t===`dirty`?a.dirty():t===`touched`?a.touched():t===`pending`?a.pending():t===`untouched`?!a.touched():t===`pristine`?!a.dirty():t===`invalid`?!a.valid():!1}else{let a=e;return t===`valid`?a.valid:t===`dirty`?a.dirty:t===`touched`?a.touched:t===`pending`?a.pending:t===`untouched`?a.untouched:t===`pristine`?a.pristine:t===`invalid`?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let r=this._hintChildren?this._hintChildren.find(h=>h.align===`start`):null,o=this._hintChildren?this._hintChildren.find(h=>h.align===`end`):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),o&&t.push(o.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let e=this._control.describedByIds,a;if(e){let r=this._describedByIds||t;a=t.concat(e.filter(o=>o&&!r.includes(o)))}else a=t;this._control.setDescribedByIds(a),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=t?.getBoundingClientRect().width??0,h=e?.getBoundingClientRect().width??0,f=a?.getBoundingClientRect().width??0,E=r?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${yo} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${o+h}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,o+h+f+E]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,a]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`iconPrefixContainer`],e=[`textPrefixContainer`],a=[`iconSuffixContainer`],r=[`textSuffixContainer`],o=[`textField`],h=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],f=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function E(_,T){_&1&&Tc(0,`span`,21)}function $(_,T){if(_&1&&(ac(0,`label`,20),TN(1,1),cN(2,E,1,0,`span`,21),sp()),_&2){let s=wN(2);zD(`floating`,s._shouldLabelFloat())(`monitorResize`,s._hasOutline())(`id`,s._labelId),Li(`for`,s._control.disableAutomaticLabeling?null:s._control.id),kT(2),lN(!s.hideRequiredMarker&&s._unwrapMaybeSignal(s._control.required)?2:-1)}}function he(_,T){if(_&1&&cN(0,$,3,5,`label`,20),_&2){let s=wN();lN(s._hasFloatingLabel()?0:-1)}}function Be(_,T){_&1&&Tc(0,`div`,7)}function ue(_,T){}function pe(_,T){if(_&1&&PD(0,ue,0,0,`ng-template`,13),_&2){wN(2);let s=NN(1);zD(`ngTemplateOutlet`,s)}}function fe(_,T){if(_&1&&(ac(0,`div`,9),cN(1,pe,1,1,null,13),sp()),_&2){let s=wN();zD(`matFormFieldNotchedOutlineOpen`,s._shouldLabelFloat()),kT(),lN(s._forceDisplayInfixLabel()?-1:1)}}function Di(_,T){_&1&&(ac(0,`div`,10,2),TN(2,2),sp())}function Ii(_,T){_&1&&(ac(0,`div`,11,3),TN(2,3),sp())}function Ei(_,T){}function Ai(_,T){if(_&1&&PD(0,Ei,0,0,`ng-template`,13),_&2){wN();let s=NN(1);zD(`ngTemplateOutlet`,s)}}function k(_,T){_&1&&(ac(0,`div`,14,4),TN(2,4),sp())}function A(_,T){_&1&&(ac(0,`div`,15,5),TN(2,5),sp())}function u(_,T){_&1&&Tc(0,`div`,16)}function Ct(_,T){_&1&&(ac(0,`div`,18),TN(1,6),sp())}function $t(_,T){if(_&1&&(ac(0,`mat-hint`,22),QN(1),sp()),_&2){let s=wN(2);zD(`id`,s._hintLabelId),kT(),gE(s.hintLabel)}}function pr(_,T){if(_&1&&(ac(0,`div`,19),cN(1,$t,2,2,`mat-hint`,22),TN(2,7),Tc(3,`div`,23),TN(4,8),sp()),_&2){let s=wN();kT(),lN(s.hintLabel?1:-1)}}return ep({type:n,selectors:[[`mat-form-field`]],contentQueries:function(T,s,O){if(T&1&&(nE(O,s._labelChild,pn,5),Mc(O,_n,5)(O,ir,5)(O,nr,5)(O,bo,5)(O,fn,5)),T&2){MN();let it;lp(it=dp())&&(s._formFieldControl=it.first),lp(it=dp())&&(s._prefixChildren=it),lp(it=dp())&&(s._suffixChildren=it),lp(it=dp())&&(s._errorChildren=it),lp(it=dp())&&(s._hintChildren=it)}},viewQuery:function(T,s){if(T&1&&(rE(s._iconPrefixContainerSignal,t,5)(s._textPrefixContainerSignal,e,5)(s._iconSuffixContainerSignal,a,5)(s._textSuffixContainerSignal,r,5),tE(o,5)(t,5)(e,5)(a,5)(r,5)(Ya,5)(Ja,5)(Za,5)),T&2){MN(4);let O;lp(O=dp())&&(s._textField=O.first),lp(O=dp())&&(s._iconPrefixContainer=O.first),lp(O=dp())&&(s._textPrefixContainer=O.first),lp(O=dp())&&(s._iconSuffixContainer=O.first),lp(O=dp())&&(s._textSuffixContainer=O.first),lp(O=dp())&&(s._floatingLabel=O.first),lp(O=dp())&&(s._notchedOutline=O.first),lp(O=dp())&&(s._lineRipple=O.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(T,s){T&2&&aE(`mat-mdc-form-field-label-always-float`,s._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,s._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,s._hasIconSuffix)(`mat-form-field-invalid`,s._unwrapMaybeSignal(s._control.errorState))(`mat-form-field-disabled`,s._unwrapMaybeSignal(s._control.disabled))(`mat-form-field-autofilled`,s._unwrapMaybeSignal(s._control.autofilled))(`mat-form-field-appearance-fill`,s.appearance==`fill`)(`mat-form-field-appearance-outline`,s.appearance==`outline`)(`mat-form-field-hide-placeholder`,s._hasFloatingLabel()&&!s._shouldLabelFloat())(`mat-primary`,s.color!==`accent`&&s.color!==`warn`)(`mat-accent`,s.color===`accent`)(`mat-warn`,s.color===`warn`)(`ng-untouched`,s._shouldForward(`untouched`))(`ng-touched`,s._shouldForward(`touched`))(`ng-pristine`,s._shouldForward(`pristine`))(`ng-dirty`,s._shouldForward(`dirty`))(`ng-valid`,s._shouldForward(`valid`))(`ng-invalid`,s._shouldForward(`invalid`))(`ng-pending`,s._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[SE([{provide:vn,useExisting:n},{provide:ar,useExisting:n}])],ngContentSelectors:f,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(T,s){if(T&1&&(SN(h),PD(0,he,1,1,`ng-template`,null,0,hR),ac(2,`div`,6,1),_c(`click`,function(it){return s._control.onContainerClick(it)}),cN(4,Be,1,0,`div`,7),ac(5,`div`,8),cN(6,fe,2,2,`div`,9),cN(7,Di,3,0,`div`,10),cN(8,Ii,3,0,`div`,11),ac(9,`div`,12),cN(10,Ai,1,1,null,13),TN(11),sp(),cN(12,k,3,0,`div`,14),cN(13,A,3,0,`div`,15),sp(),cN(14,u,1,0,`div`,16),sp(),ac(15,`div`,17),cN(16,Ct,2,0,`div`,18)(17,pr,5,1,`div`,19),sp()),T&2){let O,it=s._unwrapMaybeSignal(s._control.disabled);kT(2),aE(`mdc-text-field--filled`,!s._hasOutline())(`mdc-text-field--outlined`,s._hasOutline())(`mdc-text-field--no-label`,!s._hasFloatingLabel())(`mdc-text-field--disabled`,it)(`mdc-text-field--invalid`,s._unwrapMaybeSignal(s._control.errorState)),kT(2),lN(!s._hasOutline()&&!it?4:-1),kT(2),lN(s._hasOutline()?6:-1),kT(),lN(s._hasIconPrefix?7:-1),kT(),lN(s._hasTextPrefix?8:-1),kT(2),lN(!s._hasOutline()||s._forceDisplayInfixLabel()?10:-1),kT(2),lN(s._hasTextSuffix?12:-1),kT(),lN(s._hasIconSuffix?13:-1),kT(),lN(s._hasOutline()?-1:14),kT(),aE(`mat-mdc-form-field-subscript-dynamic-size`,s.subscriptSizing===`dynamic`);let fr=s._getSubscriptMessageType();kT(),lN((O=fr)===`error`?16:O===`hint`?17:-1)}},dependencies:[Ya,Ja,BA,Za,fn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var ze=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[Qe$1,ki,i4]})}return n})();var So=new I(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var rr=new I(`MAT_DRAWER_CONTAINER`);var Pe=(()=>{class n extends Be{_platform=h(y$1);_changeDetectorRef=h($i$1);_element=h(sn$1);_ngZone=h(we);_isInert=!1;_container=h(yn);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Ow(50),Ve$1(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute(`inert`,`true`):e.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!==`over`&&t.opened||e!=null&&e.mode!==`over`&&e.opened}static ɵfac=(()=>{let t;return function(a){return(t||(t=Ty(n)))(a||n)}})();static ɵcmp=(function(){return ep({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(a,r){a&2&&(sE(`margin-left`,r._container._contentMargins.left,`px`)(`margin-right`,r._container._contentMargins.right,`px`),aE(`mat-drawer-content-hidden`,r._shouldBeHidden()))},features:[SE([{provide:Be,useExisting:n}]),OD],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,r){a&1&&(SN(),TN(0))},encapsulation:2})})()}return n})();var xn=(()=>{class n{_elementRef=h(sn$1);_focusTrapFactory=h($n);_focusMonitor=h(Gt);_platform=h(y$1);_ngZone=h(we);_renderer=h(Er$1);_interactivityChecker=h(en$1);_doc=h(Y);_isAnimating=!1;_container=h(rr,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t===`end`?`end`:`start`,t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Ui(t)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(t){(t===`true`||t===`false`||t==null)&&(t=Ui(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Ui(t))}_opened=$(!1);_openedVia=null;_animationStarted=new X;_animationEnd=new X;openedChange=new he(!0);_openedStream=this.openedChange.pipe(Se(t=>t),G(()=>{}));openedStart=this._animationStarted.pipe(Se(()=>this.opened),$u(void 0));_closedStream=this.openedChange.pipe(Se(t=>!t),G(()=>{}));closedStart=this._animationStarted.pipe(Se(()=>!this.opened),$u(void 0));_destroyed=new X;onPositionChanged=new he;_content;_modeChanged=new X;_injector=h(se$1);_changeDetectorRef=h($i$1);constructor(){this.openedChange.pipe(zo$1(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,`keydown`,a=>{a.keyCode===27&&!this.disableClose&&!sn$2(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),t.listen(e,`transitionend`,this._handleTransitionEvent),t.listen(e,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let a=this._elementRef.nativeElement.querySelector(t);a&&(this._interactivityChecker.isFocusable(a)||(a.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),h(),a.removeAttribute(`tabindex`)},o=this._renderer.listen(a,`blur`,r),h=this._renderer.listen(a,`mousedown`,r)})),a.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:gc(()=>{let e=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(e)&&typeof t.focus==`function`&&t.focus(e)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(t){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let a=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||`program`);return t||(this._openedVia=null),a}_setOpen(t,e,a){return t===this.opened?Promise.resolve(t?`open`:`close`):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,t),!t&&e&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(Ve$1(1)).subscribe(o=>r(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){t!==this._isAnimating&&(this._isAnimating=t,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,t))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,a=e.parentNode;t===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),a.insertBefore(this._anchor,e)),a.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`content`];return ep({type:n,selectors:[[`mat-drawer`]],viewQuery:function(r,o){if(r&1&&tE(t,5),r&2){let h;lp(h=dp())&&(o._content=h.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(r,o){r&2&&(Li(`align`,null)(`tabIndex`,o.mode!==`side`?`-1`:null),sE(`visibility`,!o._container&&!o.opened?`hidden`:null),aE(`mat-drawer-end`,o.position===`end`)(`mat-drawer-over`,o.mode===`over`)(`mat-drawer-push`,o.mode===`push`)(`mat-drawer-side`,o.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(r,o){r&1&&(SN(),ac(0,`div`,1,0),TN(2),sp())},dependencies:[Be],encapsulation:2})})()}return n})();var yn=(()=>{class n{_dir=h(VO,{optional:!0});_element=h(sn$1);_ngZone=h(we);_changeDetectorRef=h($i$1);_animationDisabled=Q$1();_transitionsEnabled=!1;_allDrawers;_drawers=new Ya$1;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Ui(t)}_autosize=h(So);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Ui(t)}_backdropOverride=null;backdropClick=new he;_start=null;_end=null;_left=null;_right=null;_destroyed=new X;_doCheckSubject=new X;_contentMargins={left:null,right:null};_contentMarginChanges=new X;get scrollable(){return this._userContent||this._content}_injector=h(se$1);constructor(){let t=h(y$1),e=h(X$1);this._dir?.change.pipe(zo$1(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(zo$1(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Wu(this._allDrawers),zo$1(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Wu(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(xw(10),zo$1(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)t+=this._left._getWidth();else if(this._left.mode==`push`){let a=this._left._getWidth();t+=a,e-=a}}if(this._right&&this._right.opened){if(this._right.mode==`side`)e+=this._right._getWidth();else if(this._right.mode==`push`){let a=this._right._getWidth();e+=a,t-=a}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(zo$1(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!==`side`&&t.openedChange.pipe(zo$1(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(zo$1(this._drawers.changes)).subscribe(()=>{gc({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(zo$1(Rw(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,a=`mat-drawer-container-has-open`;t?e.add(a):e.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position==`end`?(this._end,this._end=t):(this._start,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!==`side`:this._backdropOverride}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],e=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function a(o,h){if(o&1){let f=IN();ac(0,`div`,1),_c(`click`,function(){qg(f);let $=wN();return Wg($._onBackdropClicked())}),sp()}if(o&2){let f=wN();aE(`mat-drawer-shown`,f._isShowingBackdrop())}}function r(o,h){o&1&&(ac(0,`mat-drawer-content`),TN(1,2),sp())}return ep({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(h,f,E){if(h&1&&Mc(E,Pe,5)(E,xn,5),h&2){let $;lp($=dp())&&(f._content=$.first),lp($=dp())&&(f._allDrawers=$)}},viewQuery:function(h,f){if(h&1&&tE(Pe,5),h&2){let E;lp(E=dp())&&(f._userContent=E.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(h,f){h&2&&aE(`mat-drawer-container-explicit-backdrop`,f._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[SE([{provide:rr,useExisting:n}])],ngContentSelectors:e,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(h,f){h&1&&(SN(t),cN(0,a,1,2,`div`,0),TN(1),TN(2,1),cN(3,r,2,0,`mat-drawer-content`)),h&2&&(lN(f.hasBackdrop?0:-1),kT(3),lN(f._content?-1:3))},dependencies:[Pe],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var or=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[G$1,i4,G$1]})}return n})();var wi=class n{name=Vc.required();closed=C8();static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-filter-header`]],inputs:{name:[1,`name`]},outputs:{closed:`closed`},decls:5,vars:1,consts:[[1,`flex`,`items-center`,`justify-between`,`gap-2`],[1,`text-lg`,`font-medium`],[`type`,`button`,`mat-icon-button`,``,`aria-label`,`Close filter`,3,`click`],[`svgIcon`,`close`]],template:function(t,e){t&1&&(ac(0,`div`,0)(1,`h2`,1),QN(2),sp(),ac(3,`button`,2),_c(`click`,function(){return e.closed.emit()}),Tc(4,`mat-icon`,3),sp()()),t&2&&(kT(2),gE(e.name()))},dependencies:[Ar$1,sa$1,Yr$1,Gr$1],styles:[`[_nghost-%COMP%]{display:block}`]})};var No=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=ep({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(e,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var Mo={passive:!0};var lr=(()=>{class n{_platform=h(y$1);_ngZone=h(we);_renderer=h(Dr$1).createRenderer(null,null);_styleLoader=h(F$1);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return de$1;this._styleLoader.load(No);let e=C(t),a=this._monitoredElements.get(e);if(a)return a.subject;let r=new X,o=`cdk-text-field-autofilled`,h=E=>{E.animationName===`cdk-text-field-autofill-start`&&!e.classList.contains(o)?(e.classList.add(o),this._ngZone.run(()=>r.next({target:E.target,isAutofilled:!0}))):E.animationName===`cdk-text-field-autofill-end`&&e.classList.contains(o)&&(e.classList.remove(o),this._ngZone.run(()=>r.next({target:E.target,isAutofilled:!1})))},f=this._ngZone.runOutsideAngular(()=>(e.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(e,`animationstart`,h,Mo)));return this._monitoredElements.set(e,{subject:r,unlisten:f}),r}stopMonitoring(t){let e=C(t),a=this._monitoredElements.get(e);a&&(a.unlisten(),a.subject.complete(),e.classList.remove(`cdk-text-field-autofill-monitored`),e.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static ɵfac=function(e){return new(e||n)};static ɵprov=Z({token:n,factory:n.ɵfac})}return n})();var sr=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({})}return n})();var dr=new I(`MAT_INPUT_VALUE_ACCESSOR`);var cr=(()=>{class n{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}isSignalErrorState(t){if(!t)return!1;let e=t().invalid(),a=t().touched();return e&&a}static ɵfac=function(e){return new(e||n)};static ɵprov=Z({token:n,factory:n.ɵfac})}return n})();var Si=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,t,e,a,r){this._defaultMatcher=i,this._parentFormGroup=e,this._parentForm=a,this._stateChanges=r,t?io$1(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==i&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,e=this.ngControl?this.ngControl.control:null;return i?.isErrorState(e,t)??!1}};var Fo=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Do=new I(`MAT_INPUT_CONFIG`);var mr=(()=>{class n{_elementRef=h(sn$1);_platform=h(y$1);ngControl=h(jt,{optional:!0,self:!0});_autofillMonitor=h(lr);_ngZone=h(we);_formField=h(vn,{optional:!0});_renderer=h(Er$1);_uid=h(te).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=h(Do,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new X;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Ui(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ae.required)??!1}set required(t){this._required=Ui(t)}_required;get type(){return this._type}set type(t){this._type=t||`text`,this._validateType(),!this._isTextarea&&Mi$1().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Ui(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(t=>Mi$1().has(t));constructor(){let t=h(nn,{optional:!0}),e=h(an,{optional:!0}),a=h(cr),r=h(dr,{optional:!0,self:!0}),o=h($a,{optional:!0,self:!0}),h$1=this._elementRef.nativeElement,f=h$1.nodeName.toLowerCase();r?io$1(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=h$1,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(h$1,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Si(a,o||this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=f===`select`,this._isTextarea=f===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=h$1.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Aa$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type===`number`?(e.type=`text`,e.setSelectionRange(0,0),e.type=`number`):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute(`placeholder`,t):e.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Fo.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute(`aria-describedby`,t.join(` `)):e.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(e){return new(e||n)};static ɵdir=un$1({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(e,a){e&1&&_c(`focus`,function(){return a._focusChanged(!0)})(`blur`,function(){return a._focusChanged(!1)})(`input`,function(){return a._onInput()}),e&2&&(QD(`id`,a.id)(`disabled`,a.disabled&&!a.disabledInteractive)(`required`,a.required),Li(`name`,a.name||null)(`readonly`,a._getReadonlyAttribute())(`aria-disabled`,a.disabled&&a.disabledInteractive?`true`:null)(`aria-invalid`,a.empty&&a.required?null:a.errorState)(`aria-required`,a.required)(`id`,a.id),aE(`mat-input-server`,a._isServer)(`mat-mdc-form-field-textarea-control`,a._isInFormField&&a._isTextarea)(`mat-mdc-form-field-input-control`,a._isInFormField)(`mat-mdc-input-disabled-interactive`,a.disabledInteractive)(`mdc-text-field__input`,a._isInFormField)(`mat-mdc-native-select-inline`,a._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Hc]},exportAs:[`matInput`],features:[SE([{provide:_n,useExisting:n}]),Rn]})}return n})();var hr=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Tr$1({type:n});static ɵinj=In({imports:[ze,ze,sr,i4]})}return n})();var me=class n{all=Vc.required();selected=w8.required();selectedSet=Qe(()=>new Set(this.selected()));allSelected=Qe(()=>{let i=this.all(),t=this.selectedSet();return i.length>0&&i.every(e=>t.has(e))});noneSelected=Qe(()=>{let i=this.selectedSet();return!this.all().some(t=>i.has(t))});selectAll(){let i=this.selectedSet();this.selected.update(t=>[...t,...this.all().filter(e=>!i.has(e))])}deselectAll(){let i=new Set(this.all());this.selected.update(t=>t.filter(e=>!i.has(e)))}static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-filter-select-all`]],inputs:{all:[1,`all`],selected:[1,`selected`]},outputs:{selected:`selectedChange`},decls:5,vars:2,consts:[[1,`flex`,`gap-2`],[`type`,`button`,`mat-button`,``,3,`click`,`disabled`]],template:function(t,e){t&1&&(ac(0,`div`,0)(1,`button`,1),_c(`click`,function(){return e.selectAll()}),QN(2,` Select all `),sp(),ac(3,`button`,1),_c(`click`,function(){return e.deselectAll()}),QN(4,` Deselect all `),sp()()),t&2&&(kT(),zD(`disabled`,e.allSelected()),kT(2),zD(`disabled`,e.noneSelected()))},dependencies:[Ar$1,Ir$1],styles:[`[_nghost-%COMP%]{display:block}`]})};var Eo=(n,i)=>i.id;function Ao(n,i){if(n&1){let t=IN();ac(0,`button`,11),_c(`click`,function(){qg(t);let a=wN();return Wg(a.search.set(``))}),Tc(1,`mat-icon`,12),sp()}}function To(n,i){n&1&&(ac(0,`p`,8),QN(1),sp()),n&2&&(kT(),gE(i))}function Oo(n,i){if(n&1&&(ac(0,`mat-list-option`,10),Tc(1,`img`,13),ac(2,`span`,14),QN(3),sp()()),n&2){let t=i.$implicit,e=wN();zD(`value`,t.id),kT(),zD(`src`,e.ballListImage(t),bv),kT(2),gE(t.normalizedName)}}var Ci=class n{balls=Vc.required();ballListImage=Q$2;showUnavailable=h(At).showUnavailable;onlyWithStats=h(St).onlyWithStats;visibleBalls=Qe(()=>this.balls().filter(i=>!this.onlyWithStats||i.stats!==null).sort((i,t)=>i.normalizedName.localeCompare(t.normalizedName)));search=$(``);searchedBalls=Qe(()=>{let i=this.search().trim().toLowerCase(),t=this.visibleBalls();return i?t.filter(e=>e.normalizedName.toLowerCase().includes(i)):t});selectableBallIds=Qe(()=>this.searchedBalls().map(i=>i.id));selectedBallIds=w8([]);onListChange(i){let t=new Set(this.selectableBallIds());this.selectedBallIds.update(e=>[...e.filter(a=>!t.has(a)),...i])}emptyMessage=Qe(()=>{let i=this.balls();return i.length===0?`No balls match the current filters.`:this.visibleBalls().length===0?`None of the ${i.length} matching balls have stats.`:this.searchedBalls().length===0?`No balls named like "${this.search().trim()}".`:null});static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-filter-balls`]],inputs:{balls:[1,`balls`],selectedBallIds:[1,`selectedBallIds`]},outputs:{selectedBallIds:`selectedBallIdsChange`},decls:14,vars:7,consts:[[1,`text-sm`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`w-full`,`mt-2`],[`matPrefix`,``,`svgIcon`,`search`],[`matInput`,``,`type`,`search`,`placeholder`,`Search balls`,`aria-label`,`Search balls`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`mat-icon-button`,``,`matSuffix`,``,`aria-label`,`Clear search`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-2`,`my-2`],[3,`selectedChange`,`all`,`selected`],[3,`change`,`checked`],[1,`text-sm`,`text-(--mat-sys-on-surface-variant)`,`mt-4`],[3,`ngModelChange`,`ngModel`],[3,`value`],[`type`,`button`,`mat-icon-button`,``,`matSuffix`,``,`aria-label`,`Clear search`,3,`click`],[`svgIcon`,`close`],[`matListItemAvatar`,``,`alt`,``,3,`src`],[`matListItemTitle`,``]],template:function(t,e){if(t&1&&(ac(0,`p`,0),QN(1,`Pick which balls to plot.`),sp(),ac(2,`mat-form-field`,1),Tc(3,`mat-icon`,2),ac(4,`input`,3),k_(),_c(`ngModelChange`,function(r){return e.search.set(r)}),sp(),cN(5,Ao,2,0,`button`,4),sp(),ac(6,`div`,5)(7,`app-filters-filter-select-all`,6),EE(`selectedChange`,function(r){return rR(e.selectedBallIds,r)||(e.selectedBallIds=r),r}),sp(),ac(8,`mat-checkbox`,7),_c(`change`,function(r){return e.showUnavailable.set(r.checked)}),QN(9,` Show Unavailable `),sp()(),cN(10,To,2,1,`p`,8),ac(11,`mat-selection-list`,9),k_(),_c(`ngModelChange`,function(r){return e.onListChange(r)}),pN(12,Oo,4,3,`mat-list-option`,10,Eo),sp()),t&2){let a;kT(4),zD(`ngModel`,e.search()),L_(),kT(),lN(e.search()?5:-1),kT(2),zD(`all`,e.selectableBallIds()),DE(`selected`,e.selectedBallIds),kT(),zD(`checked`,e.showUnavailable()),kT(2),lN((a=e.emptyMessage())?10:-1,a),kT(),zD(`ngModel`,e.selectedBallIds()),L_(),kT(),hN(e.searchedBalls())}},dependencies:[bi,ui,gi,Te,Ar$1,sa$1,Ua,hn,ze,ki,gn,bn,Yr$1,Gr$1,hr,mr,ce,Ve,Re,ln,_i,me],styles:[`[_nghost-%COMP%]{display:block}mat-selection-list[_ngcontent-%COMP%]{--%NS%mat-list-list-item-one-line-container-height: 56px}`]})};var Ro=(n,i)=>i.key;function Vo(n,i){if(n&1&&(ac(0,`mat-list-option`,3),QN(1),sp()),n&2){let t=i.$implicit;zD(`value`,t.key),kT(),fp(` `,t.value,` `)}}var Ni=class n{lookupKey=Vc.required();selected=w8([]);selections=Vc(Vt);onlyWithStats=Vc(!1);lookups=h(M).lookups;balls=h(At).balls;availableKeys=Qe(()=>{let i=this.lookupKey(),t=Ne[i],e=this.selections(),a=this.onlyWithStats(),r=new Set;for(let o of this.balls()){let h=o[t];typeof h==`string`&&(a&&o.stats===null||ii(o,e,i)&&r.add(h))}return r});entries=Qe(()=>{let i=this.lookups()?.[this.lookupKey()]??[],t=this.availableKeys(),e=this.selected();return i.filter(a=>t.has(a.key)||e.includes(a.key))});allKeys=Qe(()=>this.entries().map(i=>i.key));static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-filter-lookup-list`]],inputs:{lookupKey:[1,`lookupKey`],selected:[1,`selected`],selections:[1,`selections`],onlyWithStats:[1,`onlyWithStats`]},outputs:{selected:`selectedChange`},decls:5,vars:3,consts:[[1,`my-2`],[3,`selectedChange`,`all`,`selected`],[3,`ngModelChange`,`ngModel`],[3,`value`]],template:function(t,e){t&1&&(ac(0,`div`,0)(1,`app-filters-filter-select-all`,1),EE(`selectedChange`,function(r){return rR(e.selected,r)||(e.selected=r),r}),sp()(),ac(2,`mat-selection-list`,2),k_(),_c(`ngModelChange`,function(r){return e.selected.set(r)}),pN(3,Vo,2,2,`mat-list-option`,3,Ro),sp()),t&2&&(kT(),zD(`all`,e.allKeys()),DE(`selected`,e.selected),kT(),zD(`ngModel`,e.selected()),L_(),kT(),hN(e.entries()))},dependencies:[bi,gi,Te,ce,Ve,Re,me],styles:[`[_nghost-%COMP%]{display:block}`]})};var Lo=(n,i)=>i.key;function zo(n,i){if(n&1&&(ac(0,`h3`,1),QN(1),sp()),n&2){let t=wN().$implicit;kT(),gE(t.heading)}}function Po(n,i){if(n&1){let t=IN();cN(0,zo,2,1,`h3`,1),ac(1,`app-filters-filter-lookup-list`,2),_c(`selectedChange`,function(a){let r=qg(t).$implicit,o=wN();return Wg(o.selectionChange.emit({key:r.key,selected:a}))}),sp()}if(n&2){let t=i.$implicit,e=wN();lN(t.heading?0:-1),kT(),zD(`lookupKey`,t.key)(`selections`,e.listSelections())(`onlyWithStats`,e.pageOnlyWithStats&&(t.onlyWithStats??!1))(`selected`,e.selections()[t.key])}}var Mi=class n{filterType=Vc.required();selections=Vc.required();selectionChange=C8();meta=Qe(()=>Rt[this.filterType()]);pageOnlyWithStats=h(St).onlyWithStats;listSelections=Qe(()=>this.meta().reflectsOtherFilters?this.selections():Vt);static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-filter-lookup`]],inputs:{filterType:[1,`filterType`],selections:[1,`selections`]},outputs:{selectionChange:`selectionChange`},decls:4,vars:1,consts:[[1,`text-sm`],[1,`text-sm`,`font-medium`,`mt-4`],[3,`selectedChange`,`lookupKey`,`selections`,`onlyWithStats`,`selected`]],template:function(t,e){t&1&&(ac(0,`p`,0),QN(1),sp(),pN(2,Po,2,5,null,null,Lo)),t&2&&(kT(),gE(e.meta().description),kT(),hN(e.meta().lists))},dependencies:[Ni],styles:[`[_nghost-%COMP%]{display:block}`]})};function Bo(n,i){if(n&1){let t=IN();ac(0,`app-filters-filter-lookup`,5),_c(`selectionChange`,function(a){qg(t);let r=wN();return Wg(r.setLookupSelection(a.key,a.selected))}),sp()}if(n&2){let t=wN();zD(`filterType`,i)(`selections`,t.lookupSelections())}}function jo(n,i){if(n&1){let t=IN();ac(0,`app-filters-filter-balls`,6),EE(`selectedBallIdsChange`,function(a){qg(t);let r=wN();return rR(r.selectedBallIds,a)||(r.selectedBallIds=a),Wg(a)}),sp()}if(n&2){let t=wN();zD(`balls`,t.eligibleBalls()),DE(`selectedBallIds`,t.selectedBallIds)}}var Fi=class n{catalog=h(At);filterType=Vc.required();closed=C8();eligibleBalls=Vc.required();selectedBallIds=w8([]);lookupSelections=w8(Vt);label=Qe(()=>vi[this.filterType()]);lookupFilterType=Qe(()=>{let i=this.filterType();return ea(i)?i:null});setLookupSelection(i,t){this.lookupSelections.update(e=>i===`brand`&&e.brand.some(r=>!t.includes(r))?na(e,t,this.catalog.balls()):B(D({},e),{[i]:t}))}static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-filter`]],inputs:{filterType:[1,`filterType`],eligibleBalls:[1,`eligibleBalls`],selectedBallIds:[1,`selectedBallIds`],lookupSelections:[1,`lookupSelections`]},outputs:{closed:`closed`,selectedBallIds:`selectedBallIdsChange`,lookupSelections:`lookupSelectionsChange`},decls:5,vars:2,consts:[[1,`h-full`,`p-4`,`flex`,`flex-col`,`min-h-0`],[3,`closed`,`name`],[1,`flex-1`,`min-h-0`,`overflow-auto`],[3,`filterType`,`selections`],[3,`balls`,`selectedBallIds`],[3,`selectionChange`,`filterType`,`selections`],[3,`selectedBallIdsChange`,`balls`,`selectedBallIds`]],template:function(t,e){if(t&1&&(ac(0,`div`,0)(1,`app-filters-filter-header`,1),_c(`closed`,function(){return e.closed.emit()}),sp(),ac(2,`div`,2),cN(3,Bo,1,2,`app-filters-filter-lookup`,3)(4,jo,1,2,`app-filters-filter-balls`,4),sp()()),t&2){let a;kT(),zD(`name`,e.label()),kT(2),lN((a=e.lookupFilterType())?3:4,a)}},dependencies:[wi,Ci,Mi],styles:[`[_nghost-%COMP%]{display:block;height:100%}`]})};var Ho=[`*`];function Go(n,i){if(n&1){let t=IN();ac(0,`app-filters-filter`,3),EE(`selectedBallIdsChange`,function(a){qg(t);let r=wN();return rR(r.ballFilters.selectedBallIds,a)||(r.ballFilters.selectedBallIds=a),Wg(a)})(`lookupSelectionsChange`,function(a){qg(t);let r=wN();return rR(r.ballFilters.lookupSelections,a)||(r.ballFilters.lookupSelections=a),Wg(a)}),_c(`closed`,function(){qg(t);let a=wN();return Wg(a.ballFilters.openFilter.set(null))}),sp()}if(n&2){let t=wN();zD(`filterType`,i)(`eligibleBalls`,t.ballFilters.eligibleBalls()),DE(`selectedBallIds`,t.ballFilters.selectedBallIds)(`lookupSelections`,t.ballFilters.lookupSelections)}}var ur=class n{ballFilters=h(St);shownFilter=ln$1({source:()=>this.ballFilters.openFilter(),computation:(i,t)=>i??t?.value??null});onClosed(){this.ballFilters.openFilter.set(null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=ep({type:n,selectors:[[`app-filters-drawer`]],ngContentSelectors:Ho,decls:5,vars:2,consts:[[`hasBackdrop`,``,1,`ifd-container`],[`position`,`end`,`mode`,`over`,1,`ifd-drawer`,3,`closedStart`,`opened`],[3,`filterType`,`eligibleBalls`,`selectedBallIds`,`lookupSelections`],[3,`selectedBallIdsChange`,`lookupSelectionsChange`,`closed`,`filterType`,`eligibleBalls`,`selectedBallIds`,`lookupSelections`]],template:function(t,e){if(t&1&&(SN(),ac(0,`mat-drawer-container`,0)(1,`mat-drawer`,1),_c(`closedStart`,function(){return e.onClosed()}),cN(2,Go,1,4,`app-filters-filter`,2),sp(),ac(3,`mat-drawer-content`),TN(4),sp()()),t&2){let a;kT(),zD(`opened`,e.ballFilters.openFilter()!==null),kT(),lN((a=e.shownFilter())?2:-1,a)}},dependencies:[or,xn,yn,Pe,Fi],styles:[`[_nghost-%COMP%]{display:block;height:100%}.ifd-container[_ngcontent-%COMP%]{height:100%;background:transparent}.ifd-drawer[_ngcontent-%COMP%]{width:22rem;max-width:90%}`]})};export{ur as C,ta as S,ze as T,jt as _,Ra as a,pn as b,Ua as c,_n as d,ae as f,hn as g,fl as h,Ha as i,Wl as l,cr as m,Ae as n,Si as o,an as p,At as r,St as s,$a as t,Zn as u,ki as v,vn as w,se as x,nn as y};