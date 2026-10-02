import{$ as NN,Cn as iR,Ct as TN,Hn as qg,I as In,In as mE,Jn as ra,Jt as aE,Kt as _c,N as I,P as IN,Pn as lp,Pt as Wg,Rn as oR,S as EE,Sn as i4,Tt as Tr,W as Li,X as Mc,Yt as ac,_ as CE,_n as h,ar as vE,b as DE,bn as he$1,ct as Qe,d as B,en as cN,er as sn,gt as SN,ht as SE,ir as un,it as PD,jn as lN,k as Hc,kn as kT,kt as VO,l as Au,ln as ep,m as Bc,mn as gE,mr as zD,n as $i,nr as tE,on as dp,pn as fp,pr as yE,qn as rR,sr as wN,st as QN,t as $,tr as sp,un as fN,vn as hN,wt as Tc,y as D,zn as pN}from"./chunk-Czos2FSY.js";import{A as Q,C as Gt,E as Ji,G as te,I as Yr,J as h$1,L as _n,M as Sn,U as sn$1,a as Qn,b as F,f as E,i as Je,it as N,ot as R$1,p as d,rt as M,v as Ar}from"./main-OGXPBVMC.js";import{C as ur,S as ta,c as Ua,f as ae,g as hn,h as fl,i as Ha,l as Wl,r as At,s as St,u as Zn,x as se}from"./chunk-BTSxgsPj.js";import{t as wt}from"./chunk-DgPWQx_j.js";import{n as o,r,t as a}from"./chunk-BJZDmbyj.js";import"./chunk-BploU6hu.js";import{n as _,r as w,t as D$1}from"./chunk-B9HI5IDx.js";import"./chunk-gA4aOLWt.js";import{n as M$1,t as D$2}from"./chunk-Bcf6mQI2.js";import{f as kt,i as J$1,o as Sk,u as kc}from"./chunk-CvKN6mN9.js";import{t as d$1}from"./chunk-CW6SSQmV.js";var ce=new I(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var ue=new I(`MatButtonToggleGroup`);var Me={provide:se,useExisting:ra(()=>K),multi:!0};var z=class{source;value;constructor(l,t){this.source=l,this.value=t}};var K=(()=>{class a{_changeDetector=h($i);_dir=h(VO,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=h(te).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new he$1;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new he$1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=h(ce,{optional:!0});this.appearance=t&&t.appearance?t.appearance:`standard`,this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ae(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||sn$1(t))return;let n=t.target.id,o=this._buttonToggles.toArray().findIndex(r=>r.buttonId===n),c=null;switch(t.keyCode){case 32:case 13:c=this._buttonToggles.get(o)||null;break;case 38:c=this._getNextButton(o,-1);break;case 37:c=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:c=this._getNextButton(o,1);break;case 39:c=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}c&&(t.preventDefault(),c._onButtonClick(),c.focus())}_emitChangeEvent(t){let e=new z(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,n=!1,o=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(t,n)):this._updateModelValue(t,n)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let c=(t+e*o+n.length)%n.length,r=n.get(c);if(r&&!r.disabled)return r}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(this._clearSelection(),t.forEach(n=>this._selectValue(n,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(n=>n.tabIndex===-1)){for(let n of e)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let n of e)if(n.value===t){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static ɵfac=function(e){return new(e||a)};static ɵdir=un({type:a,selectors:[[`mat-button-toggle-group`]],contentQueries:function(e,n,o){if(e&1&&Mc(o,V,5),e&2){let c;lp(c=dp())&&(n._buttonToggles=c)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(e,n){e&1&&_c(`keydown`,function(c){return n._keydown(c)}),e&2&&(Li(`role`,n.multiple?`group`:`radiogroup`)(`aria-disabled`,n.disabled),aE(`mat-button-toggle-vertical`,n.vertical)(`mat-button-toggle-group-appearance-standard`,n.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,Hc],value:`value`,multiple:[2,`multiple`,`multiple`,Hc],disabled:[2,`disabled`,`disabled`,Hc],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Hc],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Hc],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,Hc]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[SE([Me,{provide:ue,useExisting:a}])]})}return a})();var V=(()=>{class a{_changeDetectorRef=h($i);_elementRef=h(sn);_focusMonitor=h(Gt);_idGenerator=h(te);_animationDisabled=Q();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new he$1;constructor(){h(F).load(_n);let t=h(ue,{optional:!0}),e=h(new Bc(`tabindex`),{optional:!0})||``,n=h(ce,{optional:!0});this._tabIndex=$(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:`standard`,this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new z(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`button`],e=[`*`];function n(o,c){if(o&1&&(ac(0,`div`,2),Tc(1,`mat-pseudo-checkbox`,6),sp()),o&2){let r=wN();kT(),zD(`disabled`,r.disabled)}}return ep({type:a,selectors:[[`mat-button-toggle`]],viewQuery:function(c,r){if(c&1&&tE(t,5),c&2){let v;lp(v=dp())&&(r._buttonElement=v.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(c,r){c&1&&_c(`focus`,function(){return r.focus()}),c&2&&(Li(`aria-label`,null)(`aria-labelledby`,null)(`id`,r.id)(`name`,null),aE(`mat-button-toggle-standalone`,!r.buttonToggleGroup)(`mat-button-toggle-checked`,r.checked)(`mat-button-toggle-disabled`,r.disabled)(`mat-button-toggle-disabled-interactive`,r.disabledInteractive)(`mat-button-toggle-appearance-standard`,r.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,Hc],appearance:`appearance`,checked:[2,`checked`,`checked`,Hc],disabled:[2,`disabled`,`disabled`,Hc],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Hc]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:e,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(c,r){if(c&1&&(SN(),ac(0,`button`,1,0),_c(`click`,function(){return r._onButtonClick()}),cN(2,n,2,1,`div`,2),ac(3,`span`,3),TN(4),sp()(),Tc(5,`span`,4)(6,`span`,5)),c&2){let v=NN(1);zD(`id`,r.buttonId)(`disabled`,r.disabled&&!r.disabledInteractive||null),Li(`role`,r.isSingleSelector()?`radio`:`button`)(`tabindex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex)(`aria-pressed`,r.isSingleSelector()?null:r.checked)(`aria-checked`,r.isSingleSelector()?r.checked:null)(`name`,r._getButtonName())(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),kT(2),lN(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),kT(4),zD(`matRippleTrigger`,v)(`matRippleDisabled`,r.disableRipple||r.disabled)}},dependencies:[Ji,Wl],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return a})();var pe=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=Tr({type:a});static ɵinj=In({imports:[Sn,V,i4]})}return a})();var J={min:16,max:60,step:2,initial:28};var me=[12,13,14,15,16];function he(a,l){return a.flatMap(t=>{let e=t.versionByWeight.find(n=>n.weight===l);return e?[{ball:t,radiusOfGyration:e.radiusOfGyration,differential:e.differential,psa:e.psa}]:[]})}function fe(a){let l=a.flatMap(e=>e.versionByWeight.map(n=>n.psa??0)),t=Math.max(0,...l);return t>0?t:null}function ye(a){return a.length===0?null:{rg:be(a.map(l=>l.radiusOfGyration)),differential:be(a.map(l=>l.differential))}}function be(a){let l=[...a].sort((e,n)=>e-n),t=Math.floor(l.length/2);return l.length%2?l[t]:(l[t-1]+l[t])/2}var R={topLeft:`Early, strong flare`,topRight:`Late, strong flare`,bottomLeft:`Early, controlled`,bottomRight:`Late, controlled`};function Ne(a,l){a&1&&Tc(0,`app-catalog-status`,5)}function Re(a,l){if(a&1&&(ac(0,`span`,20),QN(1),sp(),ac(2,`span`,21),QN(3,`medians`),sp()),a&2){let t=l;kT(),mE(`median RG `,t.rg,` and differential `,t.differential)}}function Be(a,l){a&1&&QN(0,` medians `)}function Ge(a,l){a&1&&QN(0),a&2&&fp(` Rings show PSA, full at `,l,`; symmetric balls have none. `)}function Ee(a,l){if(a&1&&(ac(0,`mat-button-toggle`,17),QN(1),sp()),a&2){let t=l.$implicit;zD(`value`,t),kT(),fp(``,t,` lb`)}}function Oe(a,l){if(a&1&&(ac(0,`span`),QN(1),sp()),a&2){wN(2);let t=iR(0),e=wN(3);kT(),gE(e.quadrantOf(t.radiusOfGyration,t.differential,l))}}function Ae(a,l){if(a&1&&(ac(0,`div`,25)(1,`strong`),QN(2),sp(),ac(3,`span`),QN(4),sp(),cN(5,Oe,2,1,`span`),sp()),a&2){let t;wN();let e=iR(0),n=wN(3);kT(2),gE(e.ball.normalizedName),kT(2),yE(`RG `,e.radiusOfGyration,` · Diff `,e.differential,` · PSA `,e.psa??`none (symmetric)`),kT(),lN((t=n.rgMedians())?5:-1,t)}}function Le(a,l){if(a&1&&(CE(0),cN(1,Ae,6,5,`div`,25)),a&2){let t=l.parentIndex,e=oR(t!==null?wN(3).rgPoints()[t]:void 0);kT(),lN(e?1:-1)}}function Pe(a,l){if(a&1&&(ac(0,`ul`,24)(1,`li`)(2,`span`,26),QN(3,`↖`),sp(),QN(4),sp(),ac(5,`li`),QN(6),ac(7,`span`,26),QN(8,`↗`),sp()(),ac(9,`li`)(10,`span`,26),QN(11,`↙`),sp(),QN(12),sp(),ac(13,`li`),QN(14),ac(15,`span`,26),QN(16,`↘`),sp()()()),a&2){let t=wN(3);kT(4),fp(` `,t.coreQuadrants.topLeft),kT(2),fp(``,t.coreQuadrants.topRight,` `),kT(6),fp(` `,t.coreQuadrants.bottomLeft),kT(2),fp(``,t.coreQuadrants.bottomRight,` `)}}function De(a,l){if(a&1){let t=IN();ac(0,`pcac-plot-chart`,22),_c(`dotClicked`,function(n){qg(t);let o=wN(2);return Wg(o.selectBall(n))}),PD(1,Le,2,2,`ng-template`,23),sp(),cN(2,Pe,17,4,`ul`,24)}if(a&2){let t=wN(2);zD(`config`,t.rgChart()),kT(2),lN(t.rgMedians()?2:-1)}}function ze(a,l){a&1&&(ac(0,`p`,18),QN(1,`No balls have specs at this weight.`),sp())}function Ve(a,l){if(a&1){let t=IN();ac(0,`app-ball-details-sheet`,27),_c(`closed`,function(){qg(t);let n=wN(2);return Wg(n.closeBallDetails())}),sp()}a&2&&zD(`ball`,l)}function Fe(a,l){if(a&1){let t=IN();ac(0,`div`,6)(1,`mat-card`,10)(2,`div`,11)(3,`div`)(4,`h2`,12),QN(5,`Core types: RG vs differential`),sp(),ac(6,`p`,13),QN(7),cN(8,Re,4,2)(9,Be,1,0),QN(10,` into four core types. `),cN(11,Ge,1,1),sp()(),ac(12,`div`,14)(13,`mat-checkbox`,15),_c(`change`,function(n){qg(t);let o=wN();return Wg(o.showPsa.set(n.checked))}),QN(14,`Show PSA`),sp(),ac(15,`mat-button-toggle-group`,16),_c(`change`,function(n){qg(t);let o=wN();return Wg(o.rgWeight.set(n.value))}),pN(16,Ee,2,2,`mat-button-toggle`,17,fN),sp()()(),cN(18,De,3,2)(19,ze,2,0,`p`,18),sp(),cN(20,Ve,1,1,`app-ball-details-sheet`,19),sp()}if(a&2){let t,e,n,o=wN();kT(7),mE(` `,o.rgPoints().length,` balls at `,o.rgWeight(),` lb, split at the `),kT(),lN((t=o.rgMedianLabels())?8:9,t),kT(3),lN((e=o.showPsa()&&o.psaMax())?11:-1,e),kT(2),zD(`checked`,o.showPsa())(`matTooltip`,o.psaInfo),kT(2),zD(`value`,o.rgWeight()),kT(),hN(o.rgWeights),kT(2),lN(o.rgPoints().length>0?18:19),kT(2),lN((n=o.selectedBall())?20:-1,n)}}function We(a,l){if(a&1&&Tc(0,`app-ball-table`,9),a&2){let t=wN();zD(`caption`,`Specs at `+t.rgWeight()+` lb`)(`columns`,t.tableColumns)(`rows`,t.tableRows())}}var ve=class a$1{notesOpen=$(!1);appRepository=h(M);themeService=h(h$1);catalogReady=this.appRepository.isReady;balls=h(St).filteredBalls;details=new M$1;selectedBall=this.details.ball;ballSizeRange=J;ballSize=$(J.initial);psaInfo=`PSA (preferred spin axis, also called intermediate differential) measures how asymmetric a ball's core is. Differential says how much a ball can hook; PSA shapes how that hook arrives: higher is a sharper, more angular move at the breakpoint, lower a smoother arc. Symmetric balls have none, so they get no ring.`;showPsa=$(!0);rgWeights=me;rgWeight=$(15);rgPoints=Qe(()=>he(this.balls(),this.rgWeight()));psaMax=Qe(()=>fe(this.appRepository.allBalls()));rgMedians=Qe(()=>ye(this.rgPoints()));rgMedianLabels=Qe(()=>{let l=this.rgMedians();return l?{rg:l.rg.toFixed(2),differential:l.differential.toFixed(3)}:null});compact=E(d);coreQuadrants=R;rgChart=Qe(()=>{let l=this.rgPoints(),t=this.rgMedians(),e=this.showPsa()?this.psaMax():null,n=this.ballSize(),o$1=this.rgMedianLabels()?.rg,c=this.rgMedianLabels()?.differential,r$1=this.compact(),v=this.themeService.theme(),w=o[v],tt=l.map(f=>f.radiusOfGyration),et=l.map(f=>f.differential);return B(D(B(D({height:240,heightFull:!0,ariaLabel:`RG vs differential at ${this.rgWeight()} lb`+(t?`, split at the median RG ${o$1} and differential ${c} into four core types: ${Object.values(R).join(`; `)}`:``),data:l.map(f=>({key:f.ball.normalizedName,value:null,hide:!1,data:[D({key:f.radiusOfGyration,value:f.differential,hide:!1,data:[],image:N(f.ball),id:f.ball.id},f.psa===null?{}:{gauge:f.psa})]})),xAxis:B(D({},w),{showGrid:!0,showLine:!0,autoTickSize:!0,format:J$1.Decimal,domainMin:Math.min(...tt)-.01,domainMax:Math.max(...tt)+.01,label:`RG`,subLabels:r$1?{min:`Revs up early`,max:`Revs up late`}:{min:`Low (revs up early)`,max:`High (revs up late)`}}),yAxis:B(D({},w),{showGrid:!0,showLine:!0,autoTickSize:!0,format:J$1.None,domainMin:Math.max(0,Math.min(...et)-.005),domainMax:Math.max(...et)+.005,label:`Differential`,subLabels:{min:`Low flare`,max:`High flare`}}),enableEffects:!1,enableZoomX:!0,enableZoomY:!0,colorOverride:r[v].palette,pointImage:{maxWidth:n,maxHeight:n},pointFanOut:D({},a[v])},e===null?{}:{pointGauge:{max:e,name:`PSA`,color:`var(--mat-sys-primary)`,trackColor:w.gridColor}}),{referenceLines:t?[D({axis:`x`,value:t.rg,color:w.subLabelColor,labelPosition:`start`},r$1?{}:{label:`Median ${o$1}`}),D({axis:`y`,value:t.differential,color:w.subLabelColor},r$1?{}:{label:`Median ${c}`})]:[]}),r$1?{}:{cornerLabels:B(D({},R),{color:w.labelColor})}),{labelsOnTop:!0})});tableColumns=[{label:`RG`,numeric:!0},{label:`Differential`,numeric:!0},{label:`PSA`,numeric:!0},{label:`Core type`}];tableRows=Qe(()=>{let l=this.rgMedians();return[...this.rgPoints()].sort((t,e)=>R$1(t.ball).localeCompare(R$1(e.ball))).map(t=>({ball:t.ball,cells:[t.radiusOfGyration,t.differential,t.psa,l?this.quadrantOf(t.radiusOfGyration,t.differential,l):null]}))});quadrantOf(l,t,e){let n=t>=e.differential,o=l<=e.rg;return R[n?o?`topLeft`:`topRight`:o?`bottomLeft`:`bottomRight`]}selectBall(l){this.details.openAt(this.rgPoints().map(t=>t.ball),l)}closeBallDetails(){this.details.close()}static ɵfac=function(t){return new(t||a$1)};static ɵcmp=ep({type:a$1,selectors:[[`app-tech-specs`]],hostAttrs:[1,`block`,`h-full`],features:[SE([At,fl({onlyWithStats:!1})])],decls:38,vars:10,consts:[[1,`flex`,`h-full`,`flex-col`,`px-3`,`py-5`],[`title`,`Bowling Ball RG and Differential Chart`],[`pageHeaderStart`,``,`controls`,`chart-notes`,3,`openChange`,`open`],[`pageHeaderStart`,``],[`pageHeaderEnd`,``,3,`valueChange`,`range`,`value`],[1,`mt-4`],[1,`tech-specs__body`,`mt-3`],[`id`,`chart-notes`,3,`openChange`,`open`],[`routerLink`,`/reaction`],[3,`caption`,`columns`,`rows`],[1,`tech-specs__card`,`p-4`],[1,`flex`,`flex-wrap`,`items-start`,`justify-between`,`gap-3`],[1,`tech-specs__card-title`],[1,`tech-specs__card-subtitle`],[1,`flex`,`flex-wrap`,`items-center`,`gap-x-4`,`gap-y-2`],[3,`change`,`checked`,`matTooltip`],[`hideSingleSelectionIndicator`,``,`aria-label`,`Ball weight`,3,`change`,`value`],[3,`value`],[1,`text-sm`,`mt-3`],[3,`ball`],[1,`tech-specs__compact`],[1,`tech-specs__wide`],[1,`tech-specs__chart`,`mt-3`,3,`dotClicked`,`config`],[`pcacTooltip`,``],[`aria-label`,`Core types by corner`,1,`tech-specs__key`,`mt-2`],[1,`dlm-chart-tooltip`],[`aria-hidden`,`true`],[3,`closed`,`ball`]],template:function(t,e){t&1&&(ac(0,`app-filters-drawer`)(1,`div`,0)(2,`app-page-header`,1)(3,`app-chart-info-button`,2),EE(`openChange`,function(o){return rR(e.notesOpen,o)||(e.notesOpen=o),o}),sp(),Tc(4,`app-filters`,3),ac(5,`app-ball-size`,4),EE(`valueChange`,function(o){return rR(e.ballSize,o)||(e.ballSize=o),o}),sp()(),cN(6,Ne,1,0,`app-catalog-status`,5)(7,Fe,21,9,`div`,6),sp(),ac(8,`app-chart-notes`,7),EE(`openChange`,function(o){return rR(e.notesOpen,o)||(e.notesOpen=o),o}),ac(9,`p`),QN(10,` RG and differential are the two numbers every manufacturer publishes about a ball's core. The chart plots one against the other for every ball at the weight you pick, as they change a little from weight to weight. Lines through the middle of the balls shown split it into four core types, so you can see at a glance which balls rev up early or late and which flare hard or stay controlled. `),sp(),ac(11,`dl`)(12,`div`)(13,`dt`),QN(14,`RG (radius of gyration)`),sp(),ac(15,`dd`),QN(16,` How far from the center the core's mass sits, in inches. A lower RG revs up sooner and starts its roll earlier; a higher RG saves its energy for further down the lane. `),sp()(),ac(17,`div`)(18,`dt`),QN(19,`Differential`),sp(),ac(20,`dd`),QN(21,` The gap between the core's highest and lowest RG, which sets how far the ball's track can flare. A higher differential flares more for a stronger hook; a lower one is more controlled. `),sp()(),ac(22,`div`)(23,`dt`),QN(24,`PSA (preferred spin axis)`),sp(),ac(25,`dd`),QN(26,` Also called intermediate differential: how asymmetric the core is. Higher is a sharper, more angular move at the breakpoint, lower a smoother arc. Symmetrical cores have none. `),sp()(),ac(27,`div`)(28,`dt`),QN(29,`Core types`),sp(),ac(30,`dd`),QN(31),sp()()(),ac(32,`p`),QN(33,` These describe the core only; the coverstock and its surface matter as much to how a ball reacts. For that, see the `),ac(34,`a`,8),QN(35,`reaction chart`),sp(),QN(36,`. `),sp(),cN(37,We,1,3,`app-ball-table`,9),sp()()),t&2&&(kT(3),DE(`open`,e.notesOpen),kT(2),zD(`range`,e.ballSizeRange),DE(`value`,e.ballSize),kT(),lN(e.catalogReady()?7:6),kT(2),DE(`open`,e.notesOpen),kT(23),vE(` The chart's four corners: `,e.coreQuadrants.topLeft.toLowerCase(),` (low RG, high differential), `,e.coreQuadrants.topRight.toLowerCase(),`, `,e.coreQuadrants.bottomLeft.toLowerCase(),`, and `,e.coreQuadrants.bottomRight.toLowerCase(),` (high RG, low differential). `),kT(6),lN(e.tableRows().length>0?37:-1))},dependencies:[pe,K,V,w,_,Ar,Ua,hn,Yr,Qn,Je,Au,D$2,wt,kc,Zn,ta,Sk,kt,Ha,ur,D$1,d$1],styles:[`.tech-specs__body[_ngcontent-%COMP%]{display:flex;flex:1 0 auto}.tech-specs__card[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;display:flex;flex-direction:column}.tech-specs__chart[_ngcontent-%COMP%]{display:block;flex:1 1 0;min-height:20rem}.tech-specs__card-title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium)}.tech-specs__card-subtitle[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.tech-specs__key[_ngcontent-%COMP%]{display:none;grid-template-columns:repeat(2,minmax(0,1fr));gap:.25rem 1rem;margin:0;padding:0;list-style:none;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.tech-specs__key[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n){text-align:end}.tech-specs__compact[_ngcontent-%COMP%]{display:none}@media(max-width:599.98px){.tech-specs__compact[_ngcontent-%COMP%]{display:inline}.tech-specs__wide[_ngcontent-%COMP%]{display:none}.tech-specs__key[_ngcontent-%COMP%]{display:grid}}`]})};export{ve as TechSpecs};