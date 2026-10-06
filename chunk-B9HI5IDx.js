import{At as Vc,Ct as TN,I as In,Jt as aE,N as I$1,Sn as i4,Tt as Tr,W as Li,Yt as ac,_n as h,en as cN,gt as SN,jn as lN,kn as kT,ln as ep,mn as gE,st as QN,tr as sp}from"./chunk-Czos2FSY.js";var I=new I$1(`MAT_CARD_CONFIG`);var _=(()=>{class t{appearance;constructor(){let a=h(I,{optional:!0});this.appearance=a?.appearance||`raised`}static ɵfac=function(e){return new(e||t)};static ɵcmp=(function(){return ep({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(n,d){n&2&&aE(`mat-mdc-card-outlined`,d.appearance===`outlined`)(`mdc-card--outlined`,d.appearance===`outlined`)(`mat-mdc-card-filled`,d.appearance===`filled`)(`mdc-card--filled`,d.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,d){n&1&&(SN(),TN(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return t})();var w=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=Tr({type:t});static ɵinj=In({imports:[i4]})}return t})();var k=[[[``,`pageHeaderStart`,``]],[[``,`pageHeaderEnd`,``]],`*`];var j=[`[pageHeaderStart]`,`[pageHeaderEnd]`,`*`];function T(t,m){t&1&&(ac(0,`h1`,3),QN(1),sp()),t&2&&(kT(),gE(m))}var D=class t{title=Vc();static ɵfac=function(a){return new(a||t)};static ɵcmp=ep({type:t,selectors:[[`app-page-header`]],hostVars:1,hostBindings:function(a,e){a&2&&Li(`title`,null)},inputs:{title:[1,`title`]},ngContentSelectors:j,decls:9,vars:1,consts:[[1,`px-4`,`py-2`],[1,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-x-4`,`gap-y-2`],[1,`page-header__start`,`flex`,`flex-wrap`,`items-center`,`gap-x-4`,`gap-y-2`],[1,`page-header__title`],[1,`page-header__end`,`flex`,`flex-wrap`,`items-center`,`gap-x-6`,`gap-y-2`],[1,`page-header__body`]],template:function(a,e){if(a&1&&(SN(k),ac(0,`mat-card`,0)(1,`div`,1)(2,`div`,2),cN(3,T,2,1,`h1`,3),TN(4),sp(),ac(5,`div`,4),TN(6,1),sp()(),ac(7,`div`,5),TN(8,2),sp()()),a&2){let n;kT(3),lN((n=e.title())?3:-1,n)}},dependencies:[w,_],styles:[`[_nghost-%COMP%]{display:block}.page-header__start[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0}.page-header__end[_ngcontent-%COMP%]{margin-inline-start:auto}.page-header__title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small)}@media(max-width:599.98px),(max-height:499.98px){.page-header__title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-large)}}`]})};export{_ as n,w as r,D as t};