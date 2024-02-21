(function(_ds){var window=this;var $ia=function(a){var b=a.position;const c=a.Gy;a=a.Hy;b='<div class="devsite-thumb-rating" role="form" aria-labelledby="devsite-thumb-label-'+_ds.Y(b)+'"><div class="devsite-thumb-label" id="devsite-thumb-label-'+_ds.Y(b)+'">';b=b+"Was this helpful?"+('</div><div class="devsite-thumbs">'+h7(a.label,a.Sl,a.type)+h7(c.label,c.Sl,c.type)+"</div></div>");return(0,_ds.U)(b)},h7=function(a,b,c){let d;"thumb-down-filled"===c?d=(0,_ds.U)('<path d="M3,17h6.31l-0.95,4.57l-0.03,0.32c0,0.41,0.17,0.79,0.44,1.06L9.83,24c0,0,7.09-6.85,7.17-7V4H6C5.17,4,4.46,4.5,4.16,5.22 l-3.02,7.05C1.05,12.5,1,12.74,1,13v2C1,16.1,1.9,17,3,17z"></path><path d="M19,17h4V4h-4V17L19,17z"></path>'):
"thumb-down-outline"===c?d=(0,_ds.U)('<path d="M3,17h6.31l-0.95,4.57l-0.03,0.32c0,0.41,0.17,0.79,0.44,1.06L9.83,24c0,0,7.09-6.85,7.17-7h5V4H6 C5.17,4,4.46,4.5,4.16,5.22l-3.02,7.05C1.05,12.5,1,12.74,1,13v2C1,16.1,1.9,17,3,17z M17,6h3v9h-3V6z M3,13l3-7h9v10l-4.34,4.34 L12,15H3V13z"></path>'):"thumb-up-filled"===c?d=(0,_ds.U)('<path d="M21,7h-6.31l0.95-4.57l0.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17,0c0,0-7.09,6.85-7.17,7v13h11c0.83,0,1.54-0.5,1.84-1.22 l3.02-7.05C22.95,11.5,23,11.26,23,11V9C23,7.9,22.1,7,21,7z"></path><path d="M5,7H1v13h4V7L5,7z"></path>'):
"thumb-up-outline"===c?d=(0,_ds.U)('<path d="M21,7h-6.31l0.95-4.57l0.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17,0c0,0-7.09,6.85-7.17,7H2v13h16 c0.83,0,1.54-0.5,1.84-1.22l3.02-7.05C22.95,11.5,23,11.26,23,11V9C23,7.9,22.1,7,21,7z M7,18H4V9h3V18z M21,11l-3,7H9V8l4.34-4.34 L12,9h9V11z"></path>'):d="";return(0,_ds.U)('<button class="devsite-thumb '+_ds.Y(b)+'" data-title="'+_ds.Y(a)+'" aria-label="'+_ds.Y(a)+'"><svg class="devsite-thumb-icon" viewBox="0 0 24 24" aria-hidden="true">'+d+"</svg></button>")},
aja=function(a){const b=a.categories;a='<devsite-dialog class="devsite-thumb-rating-dialog" id="'+_ds.Y(a.gm)+'"><div class="devsite-dialog-contents"><h3 class="no-link" tabindex="-1">';a+='What is the reason for your feedback?</h3><form class="devsite-thumb-rating-categories">';const c=b.length;for(let d=0;d<c;d++){const e=b[d];a+='<div class="devsite-thumb-rating-category"><input type="radio" name="'+_ds.Y(e.type)+'" id="'+_ds.Y(e.id)+'"><label for="'+_ds.Y(e.id)+'">'+_ds.X(e.label)+"</label></div>"}return(0,_ds.U)(a+
'</form></div><div class="devsite-dialog-buttons"><button type="submit" class="button button-primary devsite-thumb-rating-submit" disabled>Submit</button><button type="button" class="button devsite-dialog-close">Cancel</button></div></devsite-dialog>')},bja=function(a){const b=a.isSignedIn;a=a.Ou;let c;c='<devsite-dialog class="devsite-thumb-rating-dialog" id="devsite-thumb-thank-you-dialog"><div class="devsite-dialog-contents"><h3 class="no-link">Thank you for your feedback.</h3>';b?a&&(c+='<p class="create-profile-prompt">Save your frequently visited pages with a Google Developer Profile.</p>'):
c+='<p class="sign-in-prompt">You need to be signed in to save your frequently visited pages with a Google Developer Profile.</p>';c+='</div><div class="devsite-dialog-buttons">';return(0,_ds.U)((b?a?c+'<button type="button" class="button button-primary create-profile">Create profile':c+'<button type="button" class="button button-primary devsite-dialog-close">Dismiss':c+'<button class="button button-primary sign-in-button">Sign in')+"</button></div></devsite-dialog>")},cja=function(){return(0,_ds.U)('<svg class="material-icons devsite-feedback-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"></path></svg>')},
dja=function(a){var b=a.Pb;a=a.Hb;let c;c='<devsite-dialog class="devsite-thumb-rating-dialog" id="devsite-thumb-create-profile-dialog"><div class="create-profile-spinner"><devsite-spinner size="48"></devsite-spinner></div><div class="devsite-dialog-contents"><h3 class="no-link">Create Google Developer Profile</h3>';a?(c+='<p>Would you like to receive emails from Google Developer Profile about developer events, new features and content?</p><input type="checkbox" id="devsite-thumb-create-profile-email-opt-in"><label for="devsite-thumb-create-profile-email-opt-in">Sure, I\'d love to!</label><p class="account-note">',
b='By creating a Developer Profile, you agree to the <a href="'+(_ds.Y(_ds.FI(b))+'">Content Policy</a>. Google\'s <a href="https://policies.google.com/terms">Terms of Service</a> and <a href="https://policies.google.com/privacy">Privacy Policy</a> apply to your use of this service. The name on your Google Account and the interests you selected will be used in your Google Developer Profile. Your name may appear where you contribute and can be changed at any time.'),c+=b):c+='<p class="not-eligible-prompt">This account is not eligible for Developer Profiles. <a href="https://developers.google.com/profile/help/faq#why_am_i_unable_to_create_a_profile_with_my_google_workspace_account" target="_blank">Learn more</a>';
c+='</p></div><div class="devsite-dialog-buttons">';c=(a?c+'<button class="button-primary create-profile">Create Profile':c+'<button class="button button-primary change-account-button">Change account')+'</button><button class="button devsite-dialog-close">Dismiss';return(0,_ds.U)(c+"</button></div></devsite-dialog>")},eja=function(a){a='<devsite-dialog class="devsite-thumb-rating-dialog" id="devsite-thumb-error-dialog"><div class="devsite-dialog-contents"><h3 class="no-link">Something went wrong</h3><p>'+
(_ds.X(a.error)+'</p></div><div class="devsite-dialog-buttons"><button class="button devsite-dialog-close">');return(0,_ds.U)(a+"Dismiss</button></div></devsite-dialog>")};var fja=async function(a){var b=new _ds.Sk(_ds.F().href);if(_ds.kl(b.g,"thumb")){var c=b.g.get("thumb");if("up"===c||"down"===c)a.setAttribute("rating",c),await i7(a);b.g.remove("thumb");_ds.sl(b.toString(),!0,!1)}else{var d=await a.Ea();if(null!=d&&d.profileId){b=_ds.F().href;try{b=await _ds.wq(b)}catch(f){}d=(null==d?void 0:d.profileId)||"";var e=new _ds.is;try{c=await e.getPath({path:b,profileId:d}),"THUMBS_UP"===(null==c?void 0:c.ratingStatus)&&a.setAttribute("rating","up"),"THUMBS_DOWN"===(null==
c?void 0:c.ratingStatus)&&a.setAttribute("rating","down")}catch(f){}}}},j7=function(a){let b="thumb-down-outline",c="thumb-up-outline";"down"===a.rating?b="thumb-down-filled":"up"===a.rating&&(c="thumb-up-filled");const d=a.getAttribute("position")||"";_ds.O(a,$ia,{position:d,Gy:{Sl:"devsite-thumb-down",label:"Not helpful",type:b},Hy:{Sl:"devsite-thumb-up",label:"Helpful",type:c}})},gja=function(a){a.eventHandler.listen(a,"click",b=>{a.onClick(b)})},k7=function(a,b){a.dispatchEvent(new CustomEvent("devsite-show-custom-snackbar-msg",
{detail:{msg:b,showClose:!1},bubbles:!0}))},l7=function(a,b,c){let d=document.body.querySelector(`#${c}`);if(d)return d;d=_ds.P(aja,{gm:c,categories:b});document.body.appendChild(d);a.eventHandler.listen(d,"change",()=>{if("down"===a.rating){let e,f;null==(e=a.v)||null==(f=e.querySelector(".devsite-thumb-rating-submit"))||f.removeAttribute("disabled")}else if("up"===a.rating){let e,f;null==(e=a.ea)||null==(f=e.querySelector(".devsite-thumb-rating-submit"))||f.removeAttribute("disabled")}});a.eventHandler.listen(d.querySelector(".devsite-thumb-rating-submit"),
"click",async()=>{await hja(a)});return d},o7=async function(a){let b=document.body.querySelector("#devsite-thumb-thank-you-dialog");if(b)return b;const c=await _ds.v();var d=await c.isSignedIn(),e=d;d&&(e=await a.Ea(),e=m7()&&!e);e&&n7(a,"Callout Profile intro");b=_ds.P(bja,{isSignedIn:d,Ou:e});document.body.appendChild(b);const f=b.querySelector(".devsite-dialog-buttons");a.dc&&(null==f||f.appendChild(a.dc),a.eventHandler.listen(a.dc.querySelector("button"),"click",()=>{let g;null==(g=b)||g.removeAttribute("open")}));
e&&f&&a.eventHandler.listen(f.querySelector(".create-profile"),"click",async()=>{let g;null==(g=b)||g.removeAttribute("open");a.g=await ija(a);a.g.setAttribute("open","")});!d&&f&&(d=b.querySelector(".sign-in-button"))&&a.eventHandler.listen(d,"click",async g=>{g.preventDefault();g.stopPropagation();g=new _ds.Sk(_ds.F().href);g.g.add("thumb",a.rating);_ds.sl(g.toString(),!0,!1);await c.signIn()});return b},p7=async function(a){let b=null;"down"===a.rating?b={category:"Site-Wide Custom Events",action:"devsite-rating thumb",
label:"Thumb Down Rating",value:-1}:"up"===a.rating&&(b={category:"Site-Wide Custom Events",action:"devsite-rating thumb",label:"Thumb Up Rating",value:1});a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:b,bubbles:!0}))},i7=async function(a){let b="RATING_STATE_UNKNOWN";"down"===a.rating?b="THUMBS_DOWN":"up"===a.rating&&(b="THUMBS_UP");var c=await a.Ea();if(null!=c&&c.profileId){var d=_ds.F().href;try{d=await _ds.wq(d)}catch(f){}var e=new _ds.is;try{await e.pk({path:d,status:b,
profileId:null==c?void 0:c.profileId})}catch(f){let g;null==(g=a.g)||g.removeAttribute("open");a.h=q7(a,"There was an issue saving the page rating.");a.h.setAttribute("open","");return}a.rating&&(a=document.querySelector("devsite-user#devsite-user"),c=await _ds.qq("/saved-pages",null==c?void 0:c.profileId,null==c?void 0:c.vanityId,!1,!0),await (null==a?void 0:a.showPopout("view-rated-pages",c)))}},hja=async function(a){if("down"===a.rating){var b;let d;var c=(null==(b=a.v)?void 0:null==(d=b.querySelector("input[type=radio]:checked"))?
void 0:d.id)||"";r7(a,c);let e;null==(e=a.dc)||e.setAttribute("rating-type","thumbsDown");let f;null==(f=a.dc)||f.setAttribute("rating-category",c);let g;null==(g=a.v)||g.removeAttribute("open")}else if("up"===a.rating){let d;b=(null==(c=a.ea)?void 0:null==(d=c.querySelector("input[type=radio]:checked"))?void 0:d.id)||"";r7(a,b);let e;null==(e=a.dc)||e.setAttribute("rating-type","thumbsUp");let f;null==(f=a.dc)||f.setAttribute("rating-category",b);let g;null==(g=a.ea)||g.removeAttribute("open")}a.o=
await o7(a);a.o.setAttribute("open","")},n7=function(a,b,c){let d=null;"down"===a.rating?d={category:"Site-Wide Custom Events",action:b,label:"Rating Widget Callout",value:-1}:"up"===a.rating&&(d={category:"Site-Wide Custom Events",action:b,label:"Rating Widget Callout",value:1});b=Object.assign({},{category:"Site-Wide Custom Events",action:b},d,c||{});a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:b,bubbles:!0}))},ija=async function(a){var b=await a.Hb();n7(a,"Callout Profile displayed");
var c=document.body.querySelector("#devsite-thumb-create-profile-dialog");if(c)return c;c=(await _ds.oq()).href;c=_ds.P(dja,{Pb:c,Hb:b});document.body.appendChild(c);if(b=c.querySelector(".devsite-dialog-buttons")){var d=b.querySelector(".create-profile");d&&a.eventHandler.listen(d,"click",()=>{a.createProfile()});(d=b.querySelector(".change-account-button"))&&a.eventHandler.listen(d,"click",async e=>{e.preventDefault();e.stopPropagation();e=new _ds.Sk(_ds.F().href);e.g.add("thumb",a.rating);_ds.sl(e.toString(),
!0,!1);await (await _ds.v()).changeAccount()});a.eventHandler.listen(b.querySelector(".devsite-dialog-close"),"click",()=>{n7(a,"Callout Profile dismissed")})}return c},m7=function(){const a=document.querySelector("devsite-user#devsite-user");return null!=a&&a.hasAttribute("enable-profiles")},q7=function(a,b){n7(a,"Callout Profile error",{label:"Rating Widget Callout Error",value:b});if(a=document.body.querySelector("#devsite-thumb-error-dialog"))return a;a=_ds.P(eja,{error:b});document.body.appendChild(a);
return a},r7=function(a,b){let c=null;"down"===a.rating?c={category:"Site-Wide Custom Events",action:"devsite-rating category",label:`Rating Category: ${b}`,value:-1}:"up"===a.rating&&(c={category:"Site-Wide Custom Events",action:"devsite-rating category",label:`Rating Category: ${b}`,value:1});a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:c,bubbles:!0}))},jja=class extends _ds.E{constructor(){super(["devsite-snackbar","devsite-dialog","devsite-feedback"]);this.eventHandler=
new _ds.G;this.o=this.h=this.g=this.dc=null;this.ma=[];this.v=null;this.qa=[];this.ea=null;this.rating=""}static get observedAttributes(){return["rating"]}async connectedCallback(){var a=document.querySelector(".devsite-thumb-rating-feedback");if(a){var b;if(this.dc=null==(b=a.content.firstElementChild)?void 0:b.cloneNode(!0))a=this.dc.querySelector("button"),null==a||a.classList.add("button-with-icon"),a&&a.firstChild&&(b=_ds.P(cja),a.insertBefore(b,a.firstChild))}if((a=document.querySelector(".devsite-thumb-rating-down-categories"))&&
a.content)try{this.ma=JSON.parse(a.content.textContent||"")}catch(c){this.ma=[]}if((a=document.querySelector(".devsite-thumb-rating-up-categories"))&&a.content)try{this.qa=JSON.parse(a.content.textContent||"")}catch(c){this.qa=[]}await fja(this);j7(this);gja(this)}disconnectedCallback(){_ds.I(this.eventHandler);_ds.tk(this.v);_ds.tk(this.ea);_ds.tk(this.o);_ds.tk(this.g);_ds.tk(this.h)}attributeChangedCallback(a,b,c){switch(a){case "rating":this.rating=c||"",j7(this)}}async onClick(a){a=a.target;
if(null==a?0:a.classList.contains("devsite-thumb-up")){if("up"===this.rating)this.removeAttribute("rating"),k7(this,"Page rating removed.");else{this.setAttribute("rating","up");if(0<this.qa.length)this.ea=l7(this,this.qa,"devsite-thumb-up-dialog"),this.ea.setAttribute("open","");else{let b;null==(b=this.dc)||b.setAttribute("rating-type","thumbsUp");this.o=await o7(this);this.o.setAttribute("open","")}k7(this,"Page rated helpful.");await p7(this)}await i7(this)}else if(null==a?0:a.classList.contains("devsite-thumb-down")){if("down"===
this.rating)this.removeAttribute("rating"),k7(this,"Page rating removed.");else{this.setAttribute("rating","down");if(0<this.ma.length)this.v=l7(this,this.ma,"devsite-thumb-down-dialog"),this.v.setAttribute("open","");else{let b;null==(b=this.dc)||b.setAttribute("rating-type","thumbsDown");this.o=await o7(this);this.o.setAttribute("open","")}k7(this,"Page rated not helpful.");await p7(this)}await i7(this)}}async Hb(){if(!await (await _ds.v()).isSignedIn())return!1;const a=new _ds.cB;let b=null;try{b=
await a.Bb()}catch(e){}let c,d;return"ELIGIBILITY_ELIGIBLE"===(null==(c=b)?void 0:null==(d=c.createProfile)?void 0:d.status)}async Ea(){if(!m7()||!await (await _ds.v()).isSignedIn()||!await this.Hb())return null;const a=new _ds.T;let b=null;try{b=await a.Ea()}catch(c){}return b}async createProfile(){const a=await _ds.oK.getName();if(a){var b,c=null==(b=this.g)?void 0:b.querySelector("#devsite-thumb-create-profile-email-opt-in");b=!(!c||!c.checked);var d;null==(d=this.g)||d.classList.add("loading");
d=new _ds.T;try{await _ds.sB(d,a,b,!0);n7(this,"Callout Profile created");let f;null==(f=this.g)||f.removeAttribute("open");await i7(this)}catch(f){let g;null==(g=this.g)||g.removeAttribute("open");this.h=q7(this,`${f}`);this.h.setAttribute("open","")}var e;null==(e=this.g)||e.classList.remove("loading")}else null==(c=this.g)||c.removeAttribute("open"),this.h=q7(this,"There was an issue getting your account information."),this.h.setAttribute("open","")}};try{customElements.define("devsite-thumb-rating",jja)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteThumbRating",a)};})(_ds_www);
