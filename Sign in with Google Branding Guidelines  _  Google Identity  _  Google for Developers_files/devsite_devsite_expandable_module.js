(function(_ds){var window=this;var zba=function(a){a.eventHandler.listen(a.g,["click","keypress"],b=>{"keypress"===b.type&&13!==b.keyCode||b.target.classList.contains("devsite-heading-link")||(b.preventDefault(),a.toggleAttribute("expanded"),a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:`devsite-expandable ${b.type}`,label:`expanded: ${a.hasAttribute("expanded")}`},bubbles:!0})))})},D1=class extends _ds.E{constructor(){super(...arguments);this.eventHandler=new _ds.G;
this.h=!1;this.g=null}static get observedAttributes(){return["expanded"]}connectedCallback(){var a=this.querySelector(".expandable");if(a){var b=a.getAttribute("id");b&&this.setAttribute("id",b);a.classList.contains("expanded")&&this.setAttribute("expanded","");for(const c of a.attributes)"class"!==c.name&&"id"!==c.name&&this.setAttribute(c.name,c.value);for(;a.childNodes.length;)this.appendChild(a.childNodes[0]);_ds.tk(a)}if(!this.h){if(!this.id){a=1;for(b=`${"expandable"}-${a}`;document.getElementById(b);)b=
`${"expandable"}-${a++}`;this.id=b}_ds.F().hash===`#${this.id}`&&this.setAttribute("expanded","");this.g=this.querySelector(".expand-control");this.g||(this.g=document.createElement("a"),this.g.classList.add("exw-control"),this.hasAttribute("once")&&this.g.classList.add("once"),_ds.sk(this,this.g,0));a=this.hasAttribute("expanded")?"true":"false";this.g.setAttribute("aria-controls",this.id);this.g.setAttribute("aria-expanded",a);this.g.setAttribute("tabindex","0");"button"!==this.g.tagName.toLowerCase()&&
this.g.setAttribute("role","button");(a=this.querySelector(".showalways"))&&this.g.appendChild(a);this.h=!0}zba(this)}attributeChangedCallback(a,b,c){if("expanded"===a){if(null===c){let d;null==(d=this.g)||d.setAttribute("aria-expanded","false")}else{let d;null==(d=this.g)||d.setAttribute("aria-expanded","true");let e;(null==(e=this.g)?0:e.classList.contains("once"))&&_ds.tk(this.g)}this.dispatchEvent(new CustomEvent("devsite-content-updated",{bubbles:!0}))}}disconnectedCallback(){_ds.I(this.eventHandler)}};
D1.prototype.disconnectedCallback=D1.prototype.disconnectedCallback;D1.prototype.connectedCallback=D1.prototype.connectedCallback;try{customElements.define("devsite-expandable",D1)}catch(a){console.warn("devsite.app.customElement.DevsiteExpandable",a)};})(_ds_www);
