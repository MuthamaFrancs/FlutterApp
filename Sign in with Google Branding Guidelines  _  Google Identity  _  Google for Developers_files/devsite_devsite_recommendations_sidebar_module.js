(function(_ds){var window=this;var Gga=function(a){a=a.kb;let b;b='<div class="devsite-recommendations-sidebar-heading" role="heading" aria-level="2"><a href="#recommendations-link" class="devsite-nav-title devsite-recommendations-sidebar-heading-link" data-category="Site-Wide Custom Events" data-label="devsite-recommendation side-nav title" data-action="click" data-tooltip="'+_ds.uH("See content recommendations");b+='"><svg class="devsite-recommendations-sidebar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d=\'M12.5,8.5L10,3L7.5,8.5L2,11l5.5,2.5L10,19l2.5-5.5L18,11L12.5,8.5z M18,13l-1.25,2.75L14,17l2.75,1.25L18,21l1.25-2.75 L22,17l-2.75-1.25L18,13z\'/></svg><span class="devsite-nav-text devsite-nav-title">Recommended for you</span></a></div><ul class="devsite-nav-list">';
const c=a.length;for(let d=0;d<c;d++)b+=Fga(a[d]);return(0,_ds.U)(b+"</ul>")},Fga=function(a){let b='<li class="devsite-nav-item"><a href="'+_ds.Y(_ds.FI(a.getUrl()+"?"+_ds.z(a,8)))+'" class="devsite-nav-title devsite-recommendations-sidebar-title" data-category="Site-Wide Custom Events" data-label="devsite-recommendation side-nav link" data-action="click"><span class="devsite-nav-text" tooltip="">';const c=[a.getTitle(),_ds.z(a,3),_ds.z(a,4)];b+=_ds.X(c.filter(d=>0<d.length)[0])+'</span></a><div class="significatio-card-meta">';
a='Updated <span class="significatio-date" date="'+(_ds.Y(_ds.Vg(a,_ds.fD,7).getSeconds())+'"></span>');return(0,_ds.U)(b+a+"</div></li>")};var Hga=function(a){a.eventHandler.listen(a,"click",b=>{b.target.classList.contains("devsite-nav-title")&&(b=b.target,a.g&&a.g.classList.remove("devsite-nav-active"),b.classList.add("devsite-nav-active"),a.g=b)});a.eventHandler.listen(document,"devsite-on-recommendations",b=>{b=b.Ga;if((null==b?0:b.detail)&&(0,_ds.PU)(b.detail)&&3===_ds.kh(b.detail,5)){b=b.detail;a.render(b);if(b=null==b?void 0:_ds.NU(b)){for(const c of b)if(b=c.getMetadata())b={targetPage:c.getUrl(),targetRank:_ds.hh(b,2),targetType:_ds.kh(b,
3),targetIdenticalDescriptions:_ds.hh(b,4),targetTitleWords:_ds.hh(b,5),targetDescriptionWords:_ds.hh(b,6),experiment:_ds.z(b,7)},b={category:"Site-Wide Custom Events",action:"recommended-right-nav",label:c.getUrl(),nonInteraction:!0,additionalParams:{recommendations:b}},a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:b,bubbles:!0}));a.h.g()}else a.h.j("empty");a.classList.add("recommendations-rendered")}});a.eventHandler.listen(document.body,"devsite-recommendations-disconnected",
()=>{_ds.qk(a);a.classList.remove("recommendations-rendered")})},Iga=class extends _ds.E{constructor(){super();this.eventHandler=new _ds.G(this);this.h=new _ds.hf;this.g=null}connectedCallback(){Hga(this)}disconnectedCallback(){_ds.I(this.eventHandler)}render(a){_ds.O(this,Gga,{kb:_ds.NU(a),Av:_ds.z(a,6)});a=Array.from(this.querySelectorAll(".significatio-date"));for(const b of a){a=b.getAttribute("date");try{b.textContent=(new Date(1E3*Number(a))).toLocaleDateString("default",{month:"short",year:"numeric",
day:"numeric"})}catch(c){}}}};try{customElements.define("devsite-recommendations-sidebar",Iga)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteRecommendationsSidebar",a)};})(_ds_www);
