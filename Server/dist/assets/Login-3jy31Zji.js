import{j as y,R as q,r as he,M as mt,u as bt,a as We,y as ge}from"./index-DohIKI10.js";import{c as wt}from"./createSvgIcon-BL7r89Te.js";const pt=wt([y.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),y.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"CameraAlt");var de=e=>e.type==="checkbox",ae=e=>e instanceof Date,R=e=>e==null;const st=e=>typeof e=="object";var j=e=>!R(e)&&!Array.isArray(e)&&st(e)&&!ae(e),_t=e=>j(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,At=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ft=(e,s)=>e.has(At(s)),Vt=e=>{const s=e.constructor&&e.constructor.prototype;return j(s)&&s.hasOwnProperty("isPrototypeOf")},Ce=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function P(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ce&&(e instanceof Blob||e instanceof FileList))&&(r||j(e)))if(s=r?[]:{},!r&&!Vt(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=P(e[l]));else return e;return s}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],V=e=>e===void 0,f=(e,s,r)=>{if(!s||!j(e))return r;const l=Ae(s.split(/[,[\].]+?/)).reduce((u,n)=>R(u)?u:u[n],e);return V(l)||l===e?V(e[s])?r:e[s]:l},$=e=>typeof e=="boolean",Te=e=>/^\w*$/.test(e),it=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,r)=>{let l=-1;const u=Te(s)?[s]:it(s),n=u.length,h=n-1;for(;++l<n;){const v=u[l];let M=r;if(l!==h){const U=e[v];M=j(U)||Array.isArray(U)?U:isNaN(+u[l+1])?{}:[]}if(v==="__proto__")return;e[v]=M,e=e[v]}return e};const ze={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};q.createContext(null);var Nt=(e,s,r,l=!0)=>{const u={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(u,n,{get:()=>{const h=n;return s._proxyFormState[h]!==Z.all&&(s._proxyFormState[h]=!l||Z.all),e[h]}});return u},O=e=>j(e)&&!Object.keys(e).length,jt=(e,s,r,l)=>{r(e);const{name:u,...n}=e;return O(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(h=>s[h]===Z.all)},xe=e=>Array.isArray(e)?e:[e];function Dt(e){const s=q.useRef(e);s.current=e,q.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",St=(e,s,r,l,u)=>W(e)?(l&&s.watch.add(e),f(r,e,u)):Array.isArray(e)?e.map(n=>(l&&s.watch.add(n),f(r,n))):(l&&(s.watchAll=!0),r),kt=(e,s,r,l,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[l]:u||!0}}:{},Ke=e=>({isOnSubmit:!e||e===Z.onSubmit,isOnBlur:e===Z.onBlur,isOnChange:e===Z.onChange,isOnAll:e===Z.all,isOnTouch:e===Z.onTouched}),Ye=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const ce=(e,s,r,l)=>{for(const u of r||Object.keys(e)){const n=f(e,u);if(n){const{_f:h,...v}=n;if(h){if(h.refs&&h.refs[0]&&s(h.refs[0],u)&&!l)return!0;if(h.ref&&s(h.ref,h.name)&&!l)return!0;if(ce(v,s))break}else if(j(v)&&ce(v,s))break}}};var Et=(e,s,r)=>{const l=xe(f(e,r));return A(l,"root",s[r]),A(e,r,l),e},Le=e=>e.type==="file",J=e=>typeof e=="function",be=e=>{if(!Ce)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},me=e=>W(e),Re=e=>e.type==="radio",we=e=>e instanceof RegExp;const Ge={value:!1,isValid:!1},Je={value:!0,isValid:!0};var at=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!V(e[0].attributes.value)?V(e[0].value)||e[0].value===""?Je:{value:e[0].value,isValid:!0}:Je:Ge}return Ge};const Qe={isValid:!1,value:null};var lt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Qe):Qe;function Xe(e,s,r="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||$(e)&&!e)return{type:r,message:me(e)?e:"",ref:s}}var ie=e=>j(e)&&!we(e)?e:{value:e,message:""},et=async(e,s,r,l,u)=>{const{ref:n,refs:h,required:v,maxLength:M,minLength:U,min:F,max:x,pattern:N,validate:L,name:_,valueAsNumber:Fe,mount:z,disabled:Q}=e._f,b=f(s,_);if(!z||Q)return{};const K=h?h[0]:n,Y=m=>{l&&K.reportValidity&&(K.setCustomValidity($(m)?"":m||""),K.reportValidity())},D={},re=Re(n),fe=de(n),ee=re||fe,se=(Fe||Le(n))&&V(n.value)&&V(b)||be(n)&&n.value===""||b===""||Array.isArray(b)&&!b.length,B=kt.bind(null,_,r,D),ye=(m,w,S,T=G.maxLength,H=G.minLength)=>{const I=m?w:S;D[_]={type:m?T:H,message:I,ref:n,...B(m?T:H,I)}};if(u?!Array.isArray(b)||!b.length:v&&(!ee&&(se||R(b))||$(b)&&!b||fe&&!at(h).isValid||re&&!lt(h).isValid)){const{value:m,message:w}=me(v)?{value:!!v,message:v}:ie(v);if(m&&(D[_]={type:G.required,message:w,ref:K,...B(G.required,w)},!r))return Y(w),D}if(!se&&(!R(F)||!R(x))){let m,w;const S=ie(x),T=ie(F);if(!R(b)&&!isNaN(b)){const H=n.valueAsNumber||b&&+b;R(S.value)||(m=H>S.value),R(T.value)||(w=H<T.value)}else{const H=n.valueAsDate||new Date(b),I=ue=>new Date(new Date().toDateString()+" "+ue),le=n.type=="time",ne=n.type=="week";W(S.value)&&b&&(m=le?I(b)>I(S.value):ne?b>S.value:H>new Date(S.value)),W(T.value)&&b&&(w=le?I(b)<I(T.value):ne?b<T.value:H<new Date(T.value))}if((m||w)&&(ye(!!m,S.message,T.message,G.max,G.min),!r))return Y(D[_].message),D}if((M||U)&&!se&&(W(b)||u&&Array.isArray(b))){const m=ie(M),w=ie(U),S=!R(m.value)&&b.length>+m.value,T=!R(w.value)&&b.length<+w.value;if((S||T)&&(ye(S,m.message,w.message),!r))return Y(D[_].message),D}if(N&&!se&&W(b)){const{value:m,message:w}=ie(N);if(we(m)&&!b.match(m)&&(D[_]={type:G.pattern,message:w,ref:n,...B(G.pattern,w)},!r))return Y(w),D}if(L){if(J(L)){const m=await L(b,s),w=Xe(m,K);if(w&&(D[_]={...w,...B(G.validate,w.message)},!r))return Y(w.message),D}else if(j(L)){let m={};for(const w in L){if(!O(m)&&!r)break;const S=Xe(await L[w](b,s),K,w);S&&(m={...S,...B(w,S.message)},Y(S.message),r&&(D[_]=m))}if(!O(m)&&(D[_]={ref:K,...m},!r))return D}}return Y(!0),D};function Ct(e,s){const r=s.slice(0,-1).length;let l=0;for(;l<r;)e=V(e)?l++:e[s[l++]];return e}function Tt(e){for(const s in e)if(e.hasOwnProperty(s)&&!V(e[s]))return!1;return!0}function k(e,s){const r=Array.isArray(s)?s:Te(s)?[s]:it(s),l=r.length===1?e:Ct(e,r),u=r.length-1,n=r[u];return l&&delete l[n],u!==0&&(j(l)&&O(l)||Array.isArray(l)&&Tt(l))&&k(e,r.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:u=>{for(const n of e)n.next&&n.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(n=>n!==u)}}),unsubscribe:()=>{e=[]}}},pe=e=>R(e)||!st(e);function X(e,s){if(pe(e)||pe(s))return e===s;if(ae(e)&&ae(s))return e.getTime()===s.getTime();const r=Object.keys(e),l=Object.keys(s);if(r.length!==l.length)return!1;for(const u of r){const n=e[u];if(!l.includes(u))return!1;if(u!=="ref"){const h=s[u];if(ae(n)&&ae(h)||j(n)&&j(h)||Array.isArray(n)&&Array.isArray(h)?!X(n,h):n!==h)return!1}}return!0}var nt=e=>e.type==="select-multiple",Lt=e=>Re(e)||de(e),ke=e=>be(e)&&e.isConnected,ut=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function _e(e,s={}){const r=Array.isArray(e);if(j(e)||r)for(const l in e)Array.isArray(e[l])||j(e[l])&&!ut(e[l])?(s[l]=Array.isArray(e[l])?[]:{},_e(e[l],s[l])):R(e[l])||(s[l]=!0);return s}function ot(e,s,r){const l=Array.isArray(e);if(j(e)||l)for(const u in e)Array.isArray(e[u])||j(e[u])&&!ut(e[u])?V(s)||pe(r[u])?r[u]=Array.isArray(e[u])?_e(e[u],[]):{..._e(e[u])}:ot(e[u],R(s)?{}:s[u],r[u]):r[u]=!X(e[u],s[u]);return r}var ve=(e,s)=>ot(e,s,_e(s)),ct=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:l})=>V(e)?e:s?e===""?NaN:e&&+e:r&&W(e)?new Date(e):l?l(e):e;function Ee(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Le(s)?s.files:Re(s)?lt(e.refs).value:nt(s)?[...s.selectedOptions].map(({value:r})=>r):de(s)?at(e.refs).value:ct(V(s.value)?e.ref.value:s.value,e)}var Rt=(e,s,r,l)=>{const u={};for(const n of e){const h=f(s,n);h&&A(u,n,h._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:l}},oe=e=>V(e)?e:we(e)?e.source:j(e)?we(e.value)?e.value.source:e.value:e;const tt="AsyncFunction";var Ot=e=>(!e||!e.validate)&&!!(J(e.validate)&&e.validate.constructor.name===tt||j(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===tt)),Mt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function rt(e,s,r){const l=f(e,r);if(l||Te(r))return{error:l,name:r};const u=r.split(".");for(;u.length;){const n=u.join("."),h=f(s,n),v=f(e,n);if(h&&!Array.isArray(h)&&r!==n)return{name:r};if(v&&v.type)return{name:n,error:v};u.pop()}return{name:r}}var Ut=(e,s,r,l,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?l.isOnBlur:u.isOnBlur)?!e:(r?l.isOnChange:u.isOnChange)?e:!0,Bt=(e,s)=>!Ae(f(e,s)).length&&k(e,s);const It={mode:Z.onSubmit,reValidateMode:Z.onChange,shouldFocusError:!0};function Pt(e={}){let s={...It,...e},r={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},u=j(s.defaultValues)||j(s.values)?P(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:P(u),h={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},M,U=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Se(),array:Se(),state:Se()},N=Ke(s.mode),L=Ke(s.reValidateMode),_=s.criteriaMode===Z.all,Fe=t=>i=>{clearTimeout(U),U=setTimeout(t,i)},z=async t=>{if(F.isValid||t){const i=s.resolver?O((await ee()).errors):await B(l,!0);i!==r.isValid&&x.state.next({isValid:i})}},Q=(t,i)=>{(F.isValidating||F.validatingFields)&&((t||Array.from(v.mount)).forEach(a=>{a&&(i?A(r.validatingFields,a,i):k(r.validatingFields,a))}),x.state.next({validatingFields:r.validatingFields,isValidating:!O(r.validatingFields)}))},b=(t,i=[],a,d,c=!0,o=!0)=>{if(d&&a){if(h.action=!0,o&&Array.isArray(f(l,t))){const g=a(f(l,t),d.argA,d.argB);c&&A(l,t,g)}if(o&&Array.isArray(f(r.errors,t))){const g=a(f(r.errors,t),d.argA,d.argB);c&&A(r.errors,t,g),Bt(r.errors,t)}if(F.touchedFields&&o&&Array.isArray(f(r.touchedFields,t))){const g=a(f(r.touchedFields,t),d.argA,d.argB);c&&A(r.touchedFields,t,g)}F.dirtyFields&&(r.dirtyFields=ve(u,n)),x.state.next({name:t,isDirty:m(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else A(n,t,i)},K=(t,i)=>{A(r.errors,t,i),x.state.next({errors:r.errors})},Y=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},D=(t,i,a,d)=>{const c=f(l,t);if(c){const o=f(n,t,V(a)?f(u,t):a);V(o)||d&&d.defaultChecked||i?A(n,t,i?o:Ee(c._f)):T(t,o),h.mount&&z()}},re=(t,i,a,d,c)=>{let o=!1,g=!1;const p={name:t},E=!!(f(l,t)&&f(l,t)._f&&f(l,t)._f.disabled);if(!a||d){F.isDirty&&(g=r.isDirty,r.isDirty=p.isDirty=m(),o=g!==p.isDirty);const C=E||X(f(u,t),i);g=!!(!E&&f(r.dirtyFields,t)),C||E?k(r.dirtyFields,t):A(r.dirtyFields,t,!0),p.dirtyFields=r.dirtyFields,o=o||F.dirtyFields&&g!==!C}if(a){const C=f(r.touchedFields,t);C||(A(r.touchedFields,t,a),p.touchedFields=r.touchedFields,o=o||F.touchedFields&&C!==a)}return o&&c&&x.state.next(p),o?p:{}},fe=(t,i,a,d)=>{const c=f(r.errors,t),o=F.isValid&&$(i)&&r.isValid!==i;if(e.delayError&&a?(M=Fe(()=>K(t,a)),M(e.delayError)):(clearTimeout(U),M=null,a?A(r.errors,t,a):k(r.errors,t)),(a?!X(c,a):c)||!O(d)||o){const g={...d,...o&&$(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...g},x.state.next(g)}},ee=async t=>{Q(t,!0);const i=await s.resolver(n,s.context,Rt(t||v.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return Q(t),i},se=async t=>{const{errors:i}=await ee(t);if(t)for(const a of t){const d=f(i,a);d?A(r.errors,a,d):k(r.errors,a)}else r.errors=i;return i},B=async(t,i,a={valid:!0})=>{for(const d in t){const c=t[d];if(c){const{_f:o,...g}=c;if(o){const p=v.array.has(o.name),E=c._f&&Ot(c._f);E&&F.validatingFields&&Q([d],!0);const C=await et(c,n,_,s.shouldUseNativeValidation&&!i,p);if(E&&F.validatingFields&&Q([d]),C[o.name]&&(a.valid=!1,i))break;!i&&(f(C,o.name)?p?Et(r.errors,C,o.name):A(r.errors,o.name,C[o.name]):k(r.errors,o.name))}!O(g)&&await B(g,i,a)}}return a.valid},ye=()=>{for(const t of v.unMount){const i=f(l,t);i&&(i._f.refs?i._f.refs.every(a=>!ke(a)):!ke(i._f.ref))&&Ve(t)}v.unMount=new Set},m=(t,i)=>(t&&i&&A(n,t,i),!X(Oe(),u)),w=(t,i,a)=>St(t,v,{...h.mount?n:V(i)?u:W(t)?{[t]:i}:i},a,i),S=t=>Ae(f(h.mount?n:u,t,e.shouldUnregister?f(u,t,[]):[])),T=(t,i,a={})=>{const d=f(l,t);let c=i;if(d){const o=d._f;o&&(!o.disabled&&A(n,t,ct(i,o)),c=be(o.ref)&&R(i)?"":i,nt(o.ref)?[...o.ref.options].forEach(g=>g.selected=c.includes(g.value)):o.refs?de(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(p=>p===g.value):c===g.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(g=>g.checked=g.value===c):Le(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||x.values.next({name:t,values:{...n}})))}(a.shouldDirty||a.shouldTouch)&&re(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ue(t)},H=(t,i,a)=>{for(const d in i){const c=i[d],o=`${t}.${d}`,g=f(l,o);(v.array.has(t)||!pe(c)||g&&!g._f)&&!ae(c)?H(o,c,a):T(o,c,a)}},I=(t,i,a={})=>{const d=f(l,t),c=v.array.has(t),o=P(i);A(n,t,o),c?(x.array.next({name:t,values:{...n}}),(F.isDirty||F.dirtyFields)&&a.shouldDirty&&x.state.next({name:t,dirtyFields:ve(u,n),isDirty:m(t,o)})):d&&!d._f&&!R(o)?H(t,o,a):T(t,o,a),Ye(t,v)&&x.state.next({...r}),x.values.next({name:h.mount?t:void 0,values:{...n}})},le=async t=>{h.mount=!0;const i=t.target;let a=i.name,d=!0;const c=f(l,a),o=()=>i.type?Ee(c._f):_t(t),g=p=>{d=Number.isNaN(p)||X(p,f(n,a,p))};if(c){let p,E;const C=o(),te=t.type===ze.BLUR||t.type===ze.FOCUS_OUT,gt=!Mt(c._f)&&!s.resolver&&!f(r.errors,a)&&!c._f.deps||Ut(te,f(r.touchedFields,a),r.isSubmitted,L,N),je=Ye(a,v,te);A(n,a,C),te?(c._f.onBlur&&c._f.onBlur(t),M&&M(0)):c._f.onChange&&c._f.onChange(t);const De=re(a,C,te,!1),vt=!O(De)||je;if(!te&&x.values.next({name:a,type:t.type,values:{...n}}),gt)return F.isValid&&(e.mode==="onBlur"?te&&z():z()),vt&&x.state.next({name:a,...je?{}:De});if(!te&&je&&x.state.next({...r}),s.resolver){const{errors:Ze}=await ee([a]);if(g(C),d){const xt=rt(r.errors,l,a),$e=rt(Ze,l,xt.name||a);p=$e.error,a=$e.name,E=O(Ze)}}else Q([a],!0),p=(await et(c,n,_,s.shouldUseNativeValidation))[a],Q([a]),g(C),d&&(p?E=!1:F.isValid&&(E=await B(l,!0)));d&&(c._f.deps&&ue(c._f.deps),fe(a,E,p,De))}},ne=(t,i)=>{if(f(r.errors,i)&&t.focus)return t.focus(),1},ue=async(t,i={})=>{let a,d;const c=xe(t);if(s.resolver){const o=await se(V(t)?t:c);a=O(o),d=t?!c.some(g=>f(o,g)):a}else t?(d=(await Promise.all(c.map(async o=>{const g=f(l,o);return await B(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!d&&!r.isValid)&&z()):d=a=await B(l);return x.state.next({...!W(t)||F.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors}),i.shouldFocus&&!d&&ce(l,ne,t?c:v.mount),d},Oe=t=>{const i={...h.mount?n:u};return V(t)?i:W(t)?f(i,t):t.map(a=>f(i,a))},Me=(t,i)=>({invalid:!!f((i||r).errors,t),isDirty:!!f((i||r).dirtyFields,t),error:f((i||r).errors,t),isValidating:!!f(r.validatingFields,t),isTouched:!!f((i||r).touchedFields,t)}),dt=t=>{t&&xe(t).forEach(i=>k(r.errors,i)),x.state.next({errors:t?r.errors:{}})},Ue=(t,i,a)=>{const d=(f(l,t,{_f:{}})._f||{}).ref,c=f(r.errors,t)||{},{ref:o,message:g,type:p,...E}=c;A(r.errors,t,{...E,...i,ref:d}),x.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&d&&d.focus&&d.focus()},ft=(t,i)=>J(t)?x.values.subscribe({next:a=>t(w(void 0,i),a)}):w(t,i,!0),Ve=(t,i={})=>{for(const a of t?xe(t):v.mount)v.mount.delete(a),v.array.delete(a),i.keepValue||(k(l,a),k(n,a)),!i.keepError&&k(r.errors,a),!i.keepDirty&&k(r.dirtyFields,a),!i.keepTouched&&k(r.touchedFields,a),!i.keepIsValidating&&k(r.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&k(u,a);x.values.next({values:{...n}}),x.state.next({...r,...i.keepDirty?{isDirty:m()}:{}}),!i.keepIsValid&&z()},Be=({disabled:t,name:i,field:a,fields:d,value:c})=>{if($(t)&&h.mount||t){const o=t?void 0:V(c)?Ee(a?a._f:f(d,i)._f):c;A(n,i,o),re(i,o,!1,!1,!0)}},Ne=(t,i={})=>{let a=f(l,t);const d=$(i.disabled)||$(e.disabled);return A(l,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...i}}),v.mount.add(t),a?Be({field:a,disabled:$(i.disabled)?i.disabled:e.disabled,name:t,value:i.value}):D(t,!0,i.value),{...d?{disabled:i.disabled||e.disabled}:{},...s.progressive?{required:!!i.required,min:oe(i.min),max:oe(i.max),minLength:oe(i.minLength),maxLength:oe(i.maxLength),pattern:oe(i.pattern)}:{},name:t,onChange:le,onBlur:le,ref:c=>{if(c){Ne(t,i),a=f(l,t);const o=V(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=Lt(o),p=a._f.refs||[];if(g?p.find(E=>E===o):o===a._f.ref)return;A(l,t,{_f:{...a._f,...g?{refs:[...p.filter(ke),o,...Array.isArray(f(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),D(t,!1,void 0,o)}else a=f(l,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Ft(v.array,t)&&h.action)&&v.unMount.add(t)}}},Ie=()=>s.shouldFocusError&&ce(l,ne,v.mount),yt=t=>{$(t)&&(x.state.next({disabled:t}),ce(l,(i,a)=>{const d=f(l,a);d&&(i.disabled=d._f.disabled||t,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||t}))},0,!1))},Pe=(t,i)=>async a=>{let d;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let c=P(n);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:g}=await ee();r.errors=o,c=g}else await B(l);if(k(r.errors,"root"),O(r.errors)){x.state.next({errors:{}});try{await t(c,a)}catch(o){d=o}}else i&&await i({...r.errors},a),Ie(),setTimeout(Ie);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(r.errors)&&!d,submitCount:r.submitCount+1,errors:r.errors}),d)throw d},ht=(t,i={})=>{f(l,t)&&(V(i.defaultValue)?I(t,P(f(u,t))):(I(t,i.defaultValue),A(u,t,P(i.defaultValue))),i.keepTouched||k(r.touchedFields,t),i.keepDirty||(k(r.dirtyFields,t),r.isDirty=i.defaultValue?m(t,P(f(u,t))):m()),i.keepError||(k(r.errors,t),F.isValid&&z()),x.state.next({...r}))},qe=(t,i={})=>{const a=t?P(t):u,d=P(a),c=O(t),o=c?u:d;if(i.keepDefaultValues||(u=a),!i.keepValues){if(i.keepDirtyValues)for(const g of v.mount)f(r.dirtyFields,g)?A(o,g,f(n,g)):I(g,f(o,g));else{if(Ce&&V(t))for(const g of v.mount){const p=f(l,g);if(p&&p._f){const E=Array.isArray(p._f.refs)?p._f.refs[0]:p._f.ref;if(be(E)){const C=E.closest("form");if(C){C.reset();break}}}}l={}}n=e.shouldUnregister?i.keepDefaultValues?P(u):{}:P(o),x.array.next({values:{...o}}),x.values.next({values:{...o}})}v={mount:i.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!F.isValid||!!i.keepIsValid||!!i.keepDirtyValues,h.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:c?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!X(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&n?ve(u,n):r.dirtyFields:i.keepDefaultValues&&t?ve(u,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},He=(t,i)=>qe(J(t)?t(n):t,i);return{control:{register:Ne,unregister:Ve,getFieldState:Me,handleSubmit:Pe,setError:Ue,_executeSchema:ee,_getWatch:w,_getDirty:m,_updateValid:z,_removeUnmounted:ye,_updateFieldArray:b,_updateDisabledField:Be,_getFieldArray:S,_reset:qe,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(t=>{He(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:yt,_subjects:x,_proxyFormState:F,_setErrors:Y,get _fields(){return l},get _formValues(){return n},get _state(){return h},set _state(t){h=t},get _defaultValues(){return u},get _names(){return v},set _names(t){v=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ue,register:Ne,handleSubmit:Pe,watch:ft,setValue:I,getValues:Oe,reset:He,resetField:ht,clearErrors:dt,unregister:Ve,setError:Ue,setFocus:(t,i={})=>{const a=f(l,t),d=a&&a._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Me}}function qt(e={}){const s=q.useRef(),r=q.useRef(),[l,u]=q.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Pt(e),formState:l});const n=s.current.control;return n._options=e,Dt({subject:n._subjects.state,next:h=>{jt(h,n._proxyFormState,n._updateFormState)&&u({...n._formState})}}),q.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),q.useEffect(()=>{if(n._proxyFormState.isDirty){const h=n._getDirty();h!==l.isDirty&&n._subjects.state.next({isDirty:h})}},[n,l.isDirty]),q.useEffect(()=>{e.values&&!X(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,u(h=>({...h}))):n._resetDefaultValues()},[e.values,n]),q.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),q.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),q.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=Nt(l,n),s.current}const Ht="/assets/loginbg-B92_rxwq.mp4";function Yt(){const{register:e,handleSubmit:s,formState:{errors:r}}=qt(),{setuser:l}=he.useContext(mt),u=bt(),[n,h]=he.useState(!0),[v,M]=he.useState("https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png");he.useRef(null);const U="/api/v1",F=async N=>{const L={username:N.username,password:N.loginpassword};try{const _=await We.post(`${U}/user/login`,L,{withCredentials:!0,headers:{"Content-Type":"application/json"}});l(_.data.user._id),u("/"),ge.success(`${_.data.user.username} loggedin successfully`)}catch(_){ge.error("In catch block: ",_.response.data.message)}},x=async N=>{const L={avatar:N.file[0]?N.file[0]:v,name:N.name,username:N.newusername,bio:N.bio,password:N.newpassword};try{const _=await We.post(`${U}/user/signin`,L,{withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}});l(_.data.user._id),u("/"),ge.success(`${_.data.user.username} Signedin successfully`)}catch(_){ge.error("Error in signin: ",_.message)}};return y.jsx(y.Fragment,{children:y.jsxs("div",{className:"min-h-screen relative  flex justify-center items-center",children:[y.jsxs("video",{className:"absolute top-0 left-0 w-full h-full object-cover z-[-1]",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[y.jsx("source",{src:Ht,type:"video/mp4"}),"Your browser does not support the video tag."]}),n?y.jsxs("div",{className:"p-8 px-12 w-[85%] md:w-[40%]  rounded-xl shadow-2xl bg-white   flex flex-col justify-center items-center",children:[y.jsx("h1",{className:"font-bold text-4xl mb-12 ",children:"Login"}),y.jsxs("form",{className:"w-full",onSubmit:s(F),children:[y.jsxs("div",{className:"mb-4",children:[y.jsxs("label",{className:"input input-bordered  flex items-center gap-2",children:[y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:y.jsx("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"})}),y.jsx("input",{type:"text",className:"grow",placeholder:"Username",...e("username",{required:!0})})]}),r.username&&y.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),y.jsxs("div",{className:"mb-8",children:[y.jsxs("label",{className:"input input-bordered  flex items-center gap-2",children:[y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:y.jsx("path",{fillRule:"evenodd",d:"M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",clipRule:"evenodd"})}),y.jsx("input",{type:"password",className:"grow",placeholder:"password",...e("loginpassword",{required:!0})})]}),r.loginpassword&&y.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),y.jsx("button",{type:"submit",className:"w-full bg-blue-600 rounded text-white py-1 duration-300 hover:scale-105 ",children:"Login"}),y.jsx("div",{className:"text-center my-1",children:"OR"}),y.jsxs("div",{className:"text-center",children:[y.jsx("p",{className:"inline",children:"Have no accont?"}),y.jsx("button",{onClick:()=>h(N=>!N),className:"duration-300 hover:opacity-75 text-blue-600",children:"Signin"})]})]})]}):y.jsxs("div",{className:"p-8 px-12 w-[85%] md:w-[40%] bg-white   rounded-xl   flex flex-col justify-center items-center",children:[y.jsx("h1",{className:"font-bold text-4xl mb-5 ",children:"Signin"}),y.jsxs("form",{className:"w-full",onSubmit:s(x),children:[y.jsxs("div",{className:"mb-5 flex justify-center items-center",children:[y.jsxs("div",{className:"w-fit relative mb-2   h-[200px]  flex justify-center items-center",children:[y.jsx("img",{className:"border-2 h-full  w-[200px] rounded-full",src:v,alt:"uploadedimg"}),y.jsx("button",{onClick:()=>{document.getElementById("fileinput").click()},className:"backdrop bg-white/55 hover:bg-white/65 p-2 cursor-pointer absolute right-[10%] bottom-[5%] rounded-full",children:y.jsx(pt,{})})]}),y.jsx("input",{id:"fileinput",type:"file",className:"hidden",...e("file",{onChange:N=>{const L=N.target.files[0];if(L){const _=new FileReader;_.readAsDataURL(L),_.onloadend=()=>{M(_.result)}}}})})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{className:"input input-bordered  flex items-center gap-2",children:y.jsx("input",{type:"text",className:"grow",placeholder:"Name",...e("name",{required:!0})})}),r.name&&y.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{className:"input input-bordered  flex items-center gap-2",children:y.jsx("input",{type:"text",className:"grow",placeholder:"Bio",...e("bio",{required:!0})})}),r.bio&&y.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),y.jsxs("div",{className:"mb-3",children:[y.jsxs("label",{className:"input input-bordered flex items-center gap-2",children:[y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:y.jsx("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"})}),y.jsx("input",{type:"text",className:"grow",placeholder:"Username",...e("newusername",{required:!0})})]}),r.newusername&&y.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),y.jsxs("div",{className:"mb-3",children:[y.jsxs("label",{className:"input input-bordered  flex items-center gap-2",children:[y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:y.jsx("path",{fillRule:"evenodd",d:"M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",clipRule:"evenodd"})}),y.jsx("input",{type:"password",className:"grow",placeholder:"password",...e("newpassword",{required:!0})})]}),r.newpassword&&y.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),y.jsx("button",{type:"submit",className:"w-full bg-blue-600 rounded text-white py-1 duration-300 hover:scale-105 ",children:"Signin"}),y.jsx("div",{className:"text-center my-1",children:"OR"}),y.jsxs("div",{className:"text-center",children:[y.jsx("p",{className:"inline",children:"Have accont?"}),y.jsx("button",{onClick:()=>h(N=>!N),className:"duration-300 hover:opacity-75 text-blue-600",children:"Login"})]})]})]})]})})}export{Yt as default};
