(function(_ds){var window=this;var F7=class extends _ds.AA{constructor(){super(["devsite-dialog","devsite-dropdown-list","devsite-view-release-notes-dialog"]);this.Xn=!1;this.releaseNotes=new Map;this.g=null;this.path="";this.label="Release Notes";this.disableAutoOpen=!1}Va(){return this}async connectedCallback(){super.connectedCallback();try{this.path||(this.path=await _ds.wq(_ds.F().href));let a,b=null!=(a=await _ds.FB(new _ds.T,this.path))?a:[];b=b.map(c=>{var d,e=Object,f=e.assign,g=null!=(d=c.publishedAt)?d:"";d=new Date(null!=
g?g:"");g=d.toDateString().split(/\s+/);return f.call(e,{},c,{publishedAt:4===g.length?`${g[1]} ${Number(g[2])}, ${g[3]}`:d.toDateString()})});b.forEach(c=>{let d;const e=null!=(d=c.publishedAt)?d:"";let f;this.releaseNotes.set(e,[...(null!=(f=this.releaseNotes.get(e))?f:[]),c])})}catch(a){}0===this.releaseNotes.size?this.remove():(this.Xn=!0,this.disableAutoOpen||"#release__notes"!==location.hash||this.h())}disconnectedCallback(){super.disconnectedCallback();let a;null==(a=this.g)||a.remove();this.g=
null}h(a){a&&(a.preventDefault(),a.stopPropagation());let b;null==(b=this.g)||b.remove();this.g=document.createElement("devsite-dialog");this.g.classList.add("devsite-view-release-notes-dialog-container");_ds.Sz((0,_ds.R)`
      <devsite-view-release-notes-dialog
        .releaseNotes=${this.releaseNotes}>
      </devsite-view-release-notes-dialog>
    `,this.g);document.body.appendChild(this.g);this.g.open=!0;this.Da({category:"Site-Wide Custom Events",action:"release notes: view note",label:`${this.path}`})}render(){if(!this.Xn)return delete this.dataset.shown,(0,_ds.R)``;this.dataset.shown="";return(0,_ds.R)`
      <button class="view-notes-button" @click="${this.h}">
        ${this.label}
      </button>
    `}};_ds.x([_ds.N(),_ds.y(Object)],F7.prototype,"Xn",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],F7.prototype,"path",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],F7.prototype,"label",void 0);_ds.x([_ds.M({type:Boolean,Ba:"disable-auto-open"}),_ds.y(Object)],F7.prototype,"disableAutoOpen",void 0);try{customElements.define("devsite-view-release-notes",F7)}catch(a){console.warn("devsite.app.customElement.DevsiteViewReleaseNotes",a)};})(_ds_www);
