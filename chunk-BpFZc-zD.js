import{At as Vc,C as Er,Ct as TN,I as In,J as MN,Jn as ra,Jt as aE,Kn as rE,Kt as _c,Lt as X,N as I$1,Pn as lp,Q as N8,Qn as se,Sn as i4,Tt as Tr,W as Li,X as Mc,Yt as ac,Zn as sE,Zt as b8,_n as h,bn as he,cr as we,ct as Qe,en as cN,er as sn,g as C8,gt as SN,hn as gc,ht as SE,ir as un,jn as lN,k as Hc,kn as kT,kt as VO,ln as ep,mn as gE,mr as zD,n as $i,nn as dN,nr as tE,on as dp,p as BN,q as M8,sr as wN,st as QN,t as $$1,tr as sp,vn as hN,wt as Tc,zn as pN}from"./chunk-Czos2FSY.js";import{A as Q,B as ie,E as Ji,K as w,L as _n,M as Sn,b as F,q as y}from"./main-B4BAB23K.js";import{x as se$1}from"./chunk-CBb6Zqu9.js";var n=(function(a){return a[a.START=1]=`START`,a[a.END=2]=`END`,a})(n||{});var I=(function(a){return a[a.ACTIVE=0]=`ACTIVE`,a[a.INACTIVE=1]=`INACTIVE`,a})(I||{});var $=new I$1(`_MatSlider`);var xt=new I$1(`_MatSliderThumb`);var Ct=new I$1(`_MatSliderRangeThumb`);var It=new I$1(`_MatSliderVisualThumb`);var Nt=(()=>{class a{_cdr=h($i);_ngZone=h(we);_slider=h($);_renderer=h(Er);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=h(sn).nativeElement;_platform=h(y);ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let i=this._sliderInputEl,e=this._renderer;this._listenerCleanups=[e.listen(i,`pointermove`,this._onPointerMove),e.listen(i,`pointerdown`,this._onDragStart),e.listen(i,`pointerup`,this._onDragEnd),e.listen(i,`pointerleave`,this._onMouseLeave),e.listen(i,`focus`,this._onFocus),e.listen(i,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let i=this._hostElement.getBoundingClientRect(),e=this._slider._isCursorOnSliderThumb(t,i);this._isHovered=e,e?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(t){return t?.state===w.FADING_IN||t?.state===w.VISIBLE}_showRipple(t,i){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===n.START?n.END:n.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!i)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let i=this._getSibling();i._isShowingAnyRipple()||(this._hideValueIndicator(),i._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===n.START?n.END:n.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(i){return new(i||a)};static ɵcmp=(function(){let t=[`knob`],i=[`valueIndicatorContainer`];function e(s,o){if(s&1&&(ac(0,`div`,2,1)(2,`div`,5)(3,`span`,6),QN(4),sp()()()),s&2){let h=wN();kT(4),gE(h.valueIndicatorText)}}return ep({type:a,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(o,h){if(o&1&&tE(Ji,5)(t,5)(i,5),o&2){let l;lp(l=dp())&&(h._ripple=l.first),lp(l=dp())&&(h._knob=l.first),lp(l=dp())&&(h._valueIndicatorContainer=l.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[SE([{provide:It,useExisting:a}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(o,h){o&1&&(cN(0,e,5,1,`div`,2),Tc(1,`div`,3,0)(3,`div`,4)),o&2&&(lN(h.discrete?0:-1),kT(3),zD(`matRippleDisabled`,!0))},dependencies:[Ji],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})})()}return a})();var Rt=(()=>{class a{_ngZone=h(we);_cdr=h($i);_elementRef=h(sn);_dir=h(VO,{optional:!0});_globalRippleOptions=h(ie,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let i=this._getInput(n.END),e=this._getInput(n.START);i&&(i.disabled=this._disabled),e&&(e.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let i=t==null||isNaN(t)?this._min:t;this._min!==i&&this._updateMin(i)}_min=0;color;disableRipple=!1;_updateMin(t){let i=this._min;this._min=t,this._isRange?this._updateMinRange({old:i,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let i=this._getInput(n.END),e=this._getInput(n.START),s=i.value,o=e.value;e.min=t.new,i.min=Math.max(t.new,e.value),e.max=Math.min(i.max,i.value),e._updateWidthInactive(),i._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),s!==i.value&&this._onValueChange(i),o!==e.value&&this._onValueChange(e)}_updateMinNonRange(t){let i=this._getInput(n.END);if(i){let e=i.value;i.min=t,i._updateThumbUIByValue(),this._updateTrackUI(i),e!==i.value&&this._onValueChange(i)}}get max(){return this._max}set max(t){let i=t==null||isNaN(t)?this._max:t;this._max!==i&&this._updateMax(i)}_max=100;_updateMax(t){let i=this._max;this._max=t,this._isRange?this._updateMaxRange({old:i,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let i=this._getInput(n.END),e=this._getInput(n.START),s=i.value,o=e.value;i.max=t.new,e.max=Math.min(t.new,i.value),i.min=e.value,i._updateWidthInactive(),e._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(e,i):this._onTranslateXChangeBySideEffect(i,e),s!==i.value&&this._onValueChange(i),o!==e.value&&this._onValueChange(e)}_updateMaxNonRange(t){let i=this._getInput(n.END);if(i){let e=i.value;i.max=t,i._updateThumbUIByValue(),this._updateTrackUI(i),e!==i.value&&this._onValueChange(i)}}get step(){return this._step}set step(t){let i=isNaN(t)?this._step:t;this._step!==i&&this._updateStep(i)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(n.END),i=this._getInput(n.START),e=t.value,s=i.value,o=i.value;t.min=this._min,i.max=this._max,t.step=this._step,i.step=this._step,this._platform.SAFARI&&(t.value=t.value,i.value=i.value),t.min=Math.max(this._min,i.value),i.max=Math.min(this._max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),t.value<o?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),e!==t.value&&this._onValueChange(t),s!==i.value&&this._onValueChange(i)}_updateStepNonRange(){let t=this._getInput(n.END);if(t){let i=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),i!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=Q();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Qe(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=h(y);constructor(){h(F).load(_n);let t=this._isRtl();N8(()=>{let i=this._isRtl();i!==t&&(t=i,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(n.END),i=this._getInput(n.START);this._isRange=!!t&&!!i,this._cdr.detectChanges();let e=this._getThumb(n.END);this._rippleRadius=e._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,i):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,i){t.initProps(),t.initUI(),i.initProps(),i.initUI(),t._updateMinMax(),i._updateMinMax(),t._updateStaticStyles(),i._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),i._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(n.END),i=this._getInput(n.START);t._setIsLeftThumb(),i._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),i.translateX=i._calcTranslateXByValue(),t._updateStaticStyles(),i._updateStaticStyles(),t._updateWidthInactive(),i._updateWidthInactive(),t._updateThumbUIByValue(),i._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(n.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(n.START)._isActive||this._getThumb(n.END)._isActive}_getValue(t=n.END){let i=this._getInput(t);return i?i.value:this.min}_skipUpdate(){return!!(this._getInput(n.START)?._skipUIUpdate||this._getInput(n.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let i=this._trackActive.nativeElement.style;i.left=t.left,i.right=t.right,i.transformOrigin=t.transformOrigin,i.transform=t.transform}_calcTickMarkTransform(t){let i=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-i:i}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,i){this._hasViewInitialized&&(t._updateThumbUIByValue(),i._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(n.END),i=this._getInput(n.START);t._updateThumbUIByValue(),i._updateThumbUIByValue(),t._updateStaticStyles(),i._updateStaticStyles(),t._updateMinMax(),i._updateMinMax(),t._updateWidthInactive(),i._updateWidthInactive()}else{let t=this._getInput(n.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(n.START),i=this._getInput(n.END);return!t||!i?!1:i.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let i=t.getSibling(),e=this._getThumb(t.thumbPosition);this._getThumb(i.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),e._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let i=this._getThumb(t.thumbPosition===n.END?n.END:n.START);i._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let i=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(i):t._hostElement.setAttribute(`aria-valuetext`,i),this.discrete){t.thumbPosition===n.START?this.startValueIndicatorText=i:this.endValueIndicatorText=i;let e=this._getThumb(t.thumbPosition);i.length<3?e._hostElement.classList.add(`mdc-slider__thumb--short-value`):e._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let t=this._getInput(n.END),i=this._getInput(n.START);t&&this._updateValueIndicatorUI(t),i&&this._updateValueIndicatorUI(i)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,e=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*e}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let i=t.getSibling();if(!i||!this._cachedWidth)return;let e=Math.abs(i.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-i.translateX}px`,transformOrigin:`right`,transform:`scaleX(${e})`}):this._setTrackActiveStyles({left:`${i.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let i=this._getValue(),e=Math.max(Math.round((i-this.min)/t),0)+1,s=Math.max(Math.round((this.max-i)/t),0)-1;this._isRtl()?e++:s++,this._tickMarks=Array(e).fill(I.ACTIVE).concat(Array(s).fill(I.INACTIVE))}_updateTickMarkUIRange(t){let i=this._getValue(),e=this._getValue(n.START),s=Math.max(Math.round((e-this.min)/t),0),o=Math.max(Math.round((i-e)/t)+1,0),h=Math.max(Math.round((this.max-i)/t),0);this._tickMarks=Array(s).fill(I.INACTIVE).concat(Array(o).fill(I.ACTIVE),Array(h).fill(I.INACTIVE))}_getInput(t){if(t===n.END&&this._input)return this._input;if(this._inputs?.length)return t===n.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===n.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(t,i){let e=i.width/2,s=i.x+e,o=i.y+e,h=t.clientX-s,l=t.clientY-o;return Math.pow(h,2)+Math.pow(l,2)<Math.pow(e,2)}static ɵfac=function(i){return new(i||a)};static ɵcmp=(function(){let t=[`trackActive`],i=[`*`];function e(l,c){if(l&1&&Tc(0,`div`),l&2){let r=c.$implicit,m=c.$index,T=wN(3);BN(r===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),sE(`transform`,T._calcTickMarkTransform(m))}}function s(l,c){if(l&1&&pN(0,e,1,4,`div`,8,dN),l&2){let r=wN(2);hN(r._tickMarks)}}function o(l,c){if(l&1&&(ac(0,`div`,6,1),cN(2,s,2,0),sp()),l&2){let r=wN();kT(2),lN(r._cachedWidth?2:-1)}}function h(l,c){if(l&1&&Tc(0,`mat-slider-visual-thumb`,7),l&2){let r=wN();zD(`discrete`,r.discrete)(`thumbPosition`,1)(`valueIndicatorText`,r.startValueIndicatorText)}}return ep({type:a,selectors:[[`mat-slider`]],contentQueries:function(c,r,m){if(c&1&&Mc(m,xt,5)(m,Ct,4),c&2){let T;lp(T=dp())&&(r._input=T.first),lp(T=dp())&&(r._inputs=T)}},viewQuery:function(c,r){if(c&1&&tE(t,5)(It,5),c&2){let m;lp(m=dp())&&(r._trackActive=m.first),lp(m=dp())&&(r._thumbs=m)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(c,r){c&2&&(BN(`mat-`+(r.color||`primary`)),aE(`mdc-slider--range`,r._isRange)(`mdc-slider--disabled`,r.disabled)(`mdc-slider--discrete`,r.discrete)(`mdc-slider--tick-marks`,r.showTickMarks)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,Hc],discrete:[2,`discrete`,`discrete`,Hc],showTickMarks:[2,`showTickMarks`,`showTickMarks`,Hc],min:[2,`min`,`min`,M8],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Hc],max:[2,`max`,`max`,M8],step:[2,`step`,`step`,M8],displayWith:`displayWith`},exportAs:[`matSlider`],features:[SE([{provide:$,useExisting:a}])],ngContentSelectors:i,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(c,r){c&1&&(SN(),TN(0),ac(1,`div`,2),Tc(2,`div`,3),ac(3,`div`,4),Tc(4,`div`,5,0),sp(),cN(6,o,3,1,`div`,6),sp(),cN(7,h,1,3,`mat-slider-visual-thumb`,7),Tc(8,`mat-slider-visual-thumb`,7)),c&2&&(kT(6),lN(r.showTickMarks?6:-1),kT(),lN(r._isRange?7:-1),kT(),zD(`discrete`,r.discrete)(`thumbPosition`,2)(`valueIndicatorText`,r.endValueIndicatorText))},dependencies:[Nt],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();var At={provide:se$1,useExisting:ra(()=>R),multi:!0};var R=(()=>{class a{_ngZone=h(we);_elementRef=h(sn);_cdr=h($i);_slider=h($);_platform=h(y);_listenerCleanups;get value(){return M8(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let i=t+``;if(!this._hasSetInitialValue){this._initialValue=i;return}this._isActive||this._setValue(i)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new he;dragStart=new he;dragEnd=new he;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=n.END;get min(){return M8(this._hostElement.min,0)}set min(t){this._hostElement.min=t+``,this._cdr.detectChanges()}get max(){return M8(this._hostElement.max,0)}set max(t){this._hostElement.max=t+``,this._cdr.detectChanges()}get step(){return M8(this._hostElement.step,0)}set step(t){this._hostElement.step=t+``,this._cdr.detectChanges()}get disabled(){return Hc(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=$$1(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new X;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=h(Er);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),t.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),t.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let i=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=i,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let i=t.clientX-this._slider._cachedLeft,e=this._slider._cachedWidth,s=this._slider.step===0?1:this._slider.step,o=Math.floor((this._slider.max-this._slider.min)/s),h=this._slider._isRtl()?1-i/e:i/e,c=Math.round(h*o)/o*(this._slider.max-this._slider.min)+this._slider.min,r=Math.round(c/s)*s;if(r===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=r,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let i=this._tickMarkOffset,e=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,e),i)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,i){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(i)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(i){return new(i||a)};static ɵdir=un({type:a,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(i,e){i&1&&_c(`change`,function(){return e._onChange()})(`input`,function(){return e._onInput()})(`blur`,function(){return e._onBlur()})(`focus`,function(){return e._onFocus()}),i&2&&Li(`aria-valuetext`,e._valuetext())},inputs:{value:[2,`value`,`value`,M8]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[SE([At,{provide:xt,useExisting:a}])]})}return a})();var Mt=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=Tr({type:a});static ɵinj=In({imports:[Sn,i4]})}return a})();var Ut=0;var wt=class a{value=Vc.required();valueChange=C8();thumb=b8.required(R);injector=h(se);range=Vc.required();inputId=`ball-size-${++Ut}`;settle(){gc(()=>{let k=this.thumb();k.value!==this.value()&&(k.value=this.value())},{injector:this.injector})}format=k=>`${k}`;static ɵfac=function(t){return new(t||a)};static ɵcmp=ep({type:a,selectors:[[`app-ball-size`]],viewQuery:function(t,i){t&1&&rE(i.thumb,R,5),t&2&&MN()},inputs:{value:[1,`value`],range:[1,`range`]},outputs:{valueChange:`valueChange`},decls:4,vars:7,consts:[[1,`text-sm`,`text-(--mat-sys-on-surface-variant)`,3,`for`],[`discrete`,``,1,`ball-size__slider`,3,`min`,`max`,`step`,`displayWith`],[`matSliderThumb`,``,`aria-label`,`Ball size`,3,`valueChange`,`change`,`id`,`value`]],template:function(t,i){t&1&&(ac(0,`label`,0),QN(1,`Ball size`),sp(),ac(2,`mat-slider`,1)(3,`input`,2),_c(`valueChange`,function(s){return i.valueChange.emit(s)})(`change`,function(){return i.settle()}),sp()()),t&2&&(zD(`for`,i.inputId),kT(2),zD(`min`,i.range().min)(`max`,i.range().max)(`step`,i.range().step)(`displayWith`,i.format),kT(),zD(`id`,i.inputId)(`value`,i.value()))},dependencies:[Mt,Rt,R],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;gap:.5rem}.ball-size__slider[_ngcontent-%COMP%]{width:12rem}`]})};export{wt as t};