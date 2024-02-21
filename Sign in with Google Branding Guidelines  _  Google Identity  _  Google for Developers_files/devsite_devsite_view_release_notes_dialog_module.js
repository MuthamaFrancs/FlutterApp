(function(_ds){var window=this;var Pja=function(a){a.eventHandler.listen(a,"DropdownItemClicked",b=>{Oja(a,b)})},Oja=async function(a,b){const c=b.Ga.detail.id;b=a.querySelector(".devsite-dialog-contents");const d=a.querySelector(`#date-section-${c}`);let e,f,g,h;const k=(null!=(g=null==d?void 0:null==(e=d.getBoundingClientRect())?void 0:e.top)?g:0)-(null!=(h=null==b?void 0:null==(f=b.getBoundingClientRect())?void 0:f.top)?h:0);d&&b&&b.scrollBy({top:k,behavior:"smooth"});let l,m;a.Vh=null!=(m=null==(l=a.cj.find(n=>n.id===c))?void 0:
l.title)?m:"";a.g.Qa(a.Vh)},Rja=function(a){const b=new IntersectionObserver(c=>{c.forEach(d=>{Qja(a,0<d.intersectionRatio,d)})},{root:a.querySelector(".devsite-dialog-contents")});a.querySelectorAll(".release-note-date-section .release-note").forEach(c=>{b.observe(c)})},Qja=function(a,b,c){let d,e;const f={id:null!=(d=c.target.getAttribute("id"))?d:"",type:null!=(e=c.target.getAttribute("type"))?e:"NOTE_TYPE_UNSPECIFIED"};if(b){let g;a.fg=[...(null!=(g=a.fg)?g:[]),f]}else a.fg=[...a.fg.filter(g=>
g.id!==f.id)]},Sja=function(a){switch(a){case "NOTE_TYPE_FEATURE":return{title:"Feature",color:"green"};case "NOTE_TYPE_SERVICE_ANNOUNCEMENT":return{title:"Announcement",color:"yellow"};case "NOTE_TYPE_NON_BREAKING_CHANGE":return{title:"Change",color:"yellow"};case "NOTE_TYPE_LIBRARIES":return{title:"Libraries",color:"blue"};case "NOTE_TYPE_FIX":return{title:"Fixed",color:"blue"};case "NOTE_TYPE_BREAKING_CHANGE":return{title:"Breaking",color:"red"};case "NOTE_TYPE_DEPRECATION":return{title:"Deprecated",
color:"red"};case "NOTE_TYPE_ISSUE":return{title:"Issue",color:"red"};case "NOTE_TYPE_SECURITY_BULLETIN":return{title:"Security",color:"orange"};default:return{title:"Unspecified",color:"grey"}}},D7=function(a,b){b=Sja(b);return(0,_ds.R)` <span
      class="release-note-type-chip
          ${a} ${b.color}">
      ${"large"===a?b.title.toUpperCase():b.title}
    </span>`},Tja=function(a,b){let c;return(0,_ds.R)`
      <div
        class="release-note-date-section"
        id="date-section-${b.replace(/,?\s/g,"")}">
        <h3 class="release-note-date-header">${b}</h3>
        ${[...(null!=(c=a.releaseNotes.get(b))?c:[])].map((d,e)=>{let f,g;return(0,_ds.R)` <div
        class="release-note"
        id="${`${b}-${e}`}"
        type="${null!=(f=d.noteType)?f:"NOTE_TYPE_UNSPECIFIED"}">
        ${D7("large",d.noteType)}
        <div class="release-note-content">
          ${d.descriptionHtml?(0,_ds.EC)(_ds.We(null!=(g=d.descriptionHtml)?g:"")):(0,_ds.R)`<p>${d.description}</p>`}
        </div>
      </div>`})}
      </div>
    `},E7=class extends _ds.AA{constructor(){super(["devsite-dialog","devsite-dropdown-list"]);this.eventHandler=new _ds.G;this.releaseNotes=new Map;this.Vh="";this.cj=[];this.fg=[];this.g=new _ds.Qm(async a=>{this.Da({category:"Site-Wide Custom Events",action:"release notes: view old note",label:`${await _ds.wq(_ds.F().href)} : ${a}`})},100)}Va(){return this}async connectedCallback(){super.connectedCallback();this.Vh=[...this.releaseNotes.keys()][0];this.cj=[...this.releaseNotes.keys()].map(a=>({id:a.replace(/,?\s/g,
""),title:a}));Pja(this)}disconnectedCallback(){super.disconnectedCallback()}Xb(a){super.Xb(a);Rja(this)}render(){return(0,_ds.R)`
      <div class="devsite-dialog-header">
        <div>
          <h3 class="no-link title">
            Release Notes
          </h3>
          <div class="chip-wrapper">
            ${[...(new Set(this.fg.map(a=>a.type)))].map(a=>D7("small",a))}
          </div>
        </div>
        <devsite-dropdown-list
            .listItems=${this.cj}>
          <p slot="toggle" class="selected-date-toggle">${this.Vh}</p>
        </devsite-dropdown-list>
      </div>
      <div class="devsite-dialog-contents">
        ${[...this.releaseNotes.keys()].map(a=>Tja(this,a))}
      </div>
      <div class="devsite-dialog-footer devsite-dialog-buttons">
        <button class="button devsite-dialog-close">
          Close
        </button>
      </div>`}};_ds.x([_ds.M({type:Map}),_ds.y(Object)],E7.prototype,"releaseNotes",void 0);_ds.x([_ds.N(),_ds.y(Object)],E7.prototype,"Vh",void 0);_ds.x([_ds.N(),_ds.y(Array)],E7.prototype,"cj",void 0);_ds.x([_ds.N(),_ds.y(Array)],E7.prototype,"fg",void 0);try{customElements.define("devsite-view-release-notes-dialog",E7)}catch(a){console.warn("devsite.app.customElement.DevsiteViewReleaseNotesDialog",a)};})(_ds_www);
