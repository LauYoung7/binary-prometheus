"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[413],{89234:(w,P,a)=>{a.r(P),a.d(P,{default:()=>Ee});var d=a(52423),O=a(82897),e=a(68404),x=a(41818),L=a(54899),R=a(13626),D=a(52081),S=a(31403),c=a(61744),y=a(45253),$=a(65455),T=a(72648),W=a(19985),M=a(79396),N=a(77582),Q=a(76770),K=a(81168),g=a(59052),p=a(53117),V=a(72080),A=a(24799),k=a(50796),q=a(91162),z=a(80414),G=a(46967),_=a(97379),ee=a(22350),Z=a(40400),te=a(69311),ae=a(86647),re=a(39904),ne=a(57227),oe=a(55935),se=a(75434);function le(t){return{valid:d.css`
      color: ${t.colors.success.text};
    `}}const ie=({dsUid:t,invalid:r,error:n,name:s})=>{const[o,l]=(0,e.useState)(void 0),f=(0,T.wW)(le),{value:i,loading:E,error:h}=(0,ee.Z)(async()=>{if(t)return(0,ae.F)().get(t)},[t]),C=i?.components?.QueryEditor,U=u=>{const v="1s",b=(0,oe.HI)(),F=[{...u,refId:"A"}],Ie={queries:F,request:{app:Z.zj.Correlations,timezone:"utc",startTime:Date.now(),interval:v,intervalMs:1e3,targets:F,range:(0,te.JK)(),requestId:"correlations_"+b,scopedVars:{__interval:{text:v,value:v},__interval_ms:{text:1e3,value:1e3}}},id:b,done:!1};i&&(0,se.v7)(i,Ie.request).subscribe(I=>{!I||I.state==="Error"||I.state==="Done"&&I.series.length===0?l(!1):I.state==="Done"&&I.series.length>0&&Boolean(I.series.find(xe=>xe.length>0))?l(!0):l(void 0)})};return e.createElement(A.g,{label:"Query",invalid:r,error:n},e.createElement(g.Qr,{name:s,rules:{validate:{hasQueryEditor:()=>C!==void 0||"The selected target data source must export a query editor."}},render:({field:{value:u,onChange:v}})=>E?e.createElement(c.u,{text:"Loading query editor..."}):h?e.createElement(y.b,{title:"Error loading data source"},"The selected data source could not be loaded."):i?C?e.createElement(e.Fragment,null,e.createElement(C,{app:Z.zj.Correlations,onRunQuery:()=>U(u),onChange:m=>{l(void 0),v(m)},datasource:i,query:u}),e.createElement(D.Lh,{justify:"flex-end"},o?e.createElement("div",{className:f.valid},e.createElement(re.J,{name:"check"})," This query is valid."):o===!1?e.createElement(ne.S,null,"This query is not valid."):null,e.createElement(S.zx,{variant:"secondary",icon:"check",type:"button",onClick:()=>U(u)},"Validate query"))):e.createElement(y.b,{title:"Data source does not export a query editor."}):e.createElement(y.b,{title:"No data source selected",severity:"info"},"Please select a target data source first.")}))},B=(t,r)=>r?`${t}_${r.sourceUID}-${r.uid}`:t,ce=t=>({label:d.css`
    max-width: ${t.spacing(32)};
  `,description:d.css`
    max-width: ${t.spacing(80)};
  `});function J({readOnly:t=!1,correlation:r}){const n=(0,T.wW)(ce),{register:s,formState:{errors:o}}=(0,g.Gc)(),l=(0,g.qo)({name:"targetUID"})||r?.targetUID;return e.createElement(e.Fragment,null,e.createElement("input",{type:"hidden",...s("config.type")}),e.createElement(A.g,{label:"Label",className:n.label},e.createElement(G.I,{id:B("label",r),...s("label"),readOnly:t,placeholder:"i.e. Tempo traces"})),e.createElement(A.g,{label:"Description",className:(0,d.cx)(n.description)},e.createElement(_.K,{id:B("description",r),...s("description"),readOnly:t})),e.createElement(A.g,{label:"Target field",className:n.label,invalid:!!o?.config?.field,error:o?.config?.field?.message},e.createElement(G.I,{id:B("field",r),...s("config.field",{required:"This field is required."}),readOnly:t})),e.createElement(ie,{name:"config.target",dsUid:l,invalid:!!o?.config?.target,error:o?.config?.target?.message}))}const de=t=>({panelContainer:d.css`
    position: relative;
    padding: ${t.spacing(1)};
    margin-bottom: ${t.spacing(2)};
  `,linksToContainer:d.css`
    flex-grow: 1;
    /* This is the width of the textarea minus the sum of the label&description fields,
     * so that this element takes exactly the remaining space and the inputs will be
     * nicely aligned with the textarea
    **/
    max-width: ${t.spacing(80-64)};
    margin-top: ${t.spacing(3)};
    text-align: right;
    padding-right: ${t.spacing(1)};
  `,horizontalGroup:d.css`
    display: flex;
  `}),H=t=>r=>t(r.uid),ue=({onClose:t,onCreated:r})=>{const n=(0,T.wW)(de),{create:{execute:s,loading:o,error:l,value:f}}=(0,z.K)();(0,e.useEffect)(()=>{!l&&!o&&f&&r()},[l,o,f,r]);const i=(0,g.cI)({defaultValues:{config:{type:"query",target:{}}}});return e.createElement(V.l,{className:n.panelContainer},e.createElement(k.P,{onClick:t}),e.createElement(g.RV,{...i},e.createElement("form",{onSubmit:i.handleSubmit(s)},e.createElement("div",{className:n.horizontalGroup},e.createElement(g.Qr,{control:i.control,name:"sourceUID",rules:{required:{value:!0,message:"This field is required."},validate:{writable:E=>!(0,q.ak)().getInstanceSettings(E)?.readOnly||"Source can't be a read-only data source."}},render:({field:{onChange:E,value:h}})=>e.createElement(A.g,{label:"Source",htmlFor:"source",invalid:!!i.formState.errors.sourceUID,error:i.formState.errors.sourceUID?.message},e.createElement(p.q,{onChange:H(E),noDefault:!0,current:h,inputId:"source",width:32}))}),e.createElement("div",{className:n.linksToContainer},"Links to"),e.createElement(g.Qr,{control:i.control,name:"targetUID",rules:{required:{value:!0,message:"This field is required."}},render:({field:{onChange:E,value:h}})=>e.createElement(A.g,{label:"Target",htmlFor:"target",invalid:!!i.formState.errors.targetUID,error:i.formState.errors.targetUID?.message},e.createElement(p.q,{onChange:H(E),noDefault:!0,current:h,inputId:"target",width:32}))})),e.createElement(J,null),e.createElement(D.Lh,{justify:"flex-end"},e.createElement(S.zx,{variant:"primary",icon:o?"fa fa-spinner":"plus",type:"submit",disabled:o},"Add")))))},me=({onUpdated:t,correlation:r,readOnly:n=!1})=>{const{update:{execute:s,loading:o,error:l,value:f}}=(0,z.K)(),i=v=>s({...v,sourceUID:r.sourceUID,uid:r.uid});(0,e.useEffect)(()=>{!l&&!o&&f&&t()},[l,o,f,t]);const{uid:E,sourceUID:h,targetUID:C,...U}=r,u=(0,g.cI)({defaultValues:U});return e.createElement(g.RV,{...u},e.createElement("form",{onSubmit:n?v=>v.preventDefault():u.handleSubmit(i)},e.createElement(J,{readOnly:n,correlation:r}),!n&&e.createElement(D.Lh,{justify:"flex-end"},e.createElement(S.zx,{variant:"primary",icon:o?"fa fa-spinner":"save",type:"submit",disabled:o},"Save"))))};var ge=a(69142);const fe=({onClick:t})=>e.createElement(ge.Z,{title:"You haven't defined any correlation yet.",buttonIcon:"gf-glue",onClick:t,buttonTitle:"Add correlation",proTip:"you can also define correlations via datasource provisioning"}),Y=(t,r,n)=>t.values[n].name.localeCompare(r.values[n].name),j=({source:t})=>t.readOnly,ve=d.css`
  display: flex;
  justify-content: center;
`;function Ee(){const t=(0,Q.q)("correlations"),[r,n]=(0,e.useState)(!1),{remove:s,get:{execute:o,...l}}=(0,z.K)();(0,e.useEffect)(()=>{o()},[]);const f=N.Vt.hasPermission(K.AccessControlAction.DataSourcesWrite),i=(0,e.useCallback)(()=>{(0,x.ff)("grafana_correlations_added"),o(),n(!1)},[o]),E=(0,e.useCallback)(()=>{(0,x.ff)("grafana_correlations_edited"),o()},[o]),h=(0,e.useCallback)(m=>{s.execute(m)},[s]);(0,e.useEffect)(()=>{s.value&&(0,x.ff)("grafana_correlations_deleted")},[s.value]),(0,e.useEffect)(()=>{!s.error&&!s.loading&&s.value&&o()},[s.error,s.loading,s.value,o]);const C=(0,e.useCallback)(({row:{original:{source:{uid:m,readOnly:b},uid:F}}})=>!b&&e.createElement(R.m,{"aria-label":"delete correlation",onConfirm:()=>h({sourceUID:m,uid:F}),closeOnConfirm:!0}),[h]),U=(0,e.useMemo)(()=>[{id:"info",cell:Ce,disableGrow:!0,visible:m=>m.some(j)},{id:"source",header:"Source",cell:X,sortType:Y},{id:"target",header:"Target",cell:X,sortType:Y},{id:"label",header:"Label",sortType:"alphanumeric"},{id:"actions",cell:C,disableGrow:!0,visible:m=>f&&m.some((0,O.negate)(j))}],[C,f]),u=(0,e.useMemo)(()=>l.value,[l.value]),v=u?.length===0&&!r&&!l.error;return e.createElement(M.T,{navModel:t},e.createElement(M.T.Contents,null,e.createElement("div",null,e.createElement(D.Lh,{justify:"space-between"},e.createElement("div",null,e.createElement("h4",null,"Correlations"),e.createElement("p",null,"Define how data living in different data sources relates to each other.")),f&&u?.length!==0&&u!==void 0&&!r&&e.createElement(S.zx,{icon:"plus",onClick:()=>n(!0)},"Add new"))),e.createElement("div",null,!u&&l.loading&&e.createElement("div",{className:ve},e.createElement(c.u,{text:"loading..."})),v&&e.createElement(fe,{onClick:()=>n(!0)}),l.error&&e.createElement(y.b,{severity:"error",title:"Error fetching correlation data",topSpacing:2},(0,L.kW)(l.error)&&l.error.data?.message||"An unknown error occurred while fetching correlation data. Please try again."),r&&e.createElement(ue,{onClose:()=>n(!1),onCreated:i}),u&&u.length>=1&&e.createElement($.e,{renderExpandedRow:m=>e.createElement(he,{correlation:m,onUpdated:E,readOnly:j({source:m.source})||!f}),columns:U,data:u,getRowId:m=>`${m.source.uid}-${m.uid}`}))))}function he({correlation:{source:t,target:r,...n},readOnly:s,onUpdated:o}){return(0,e.useEffect)(()=>(0,x.ff)("grafana_correlations_details_expanded"),[]),e.createElement(me,{correlation:{...n,sourceUID:t.uid,targetUID:r.uid},onUpdated:o,readOnly:s})}const ye=t=>({root:d.css`
    display: flex;
    align-items: center;
  `,dsLogo:d.css`
    margin-right: ${t.spacing()};
    height: 16px;
    width: 16px;
  `}),X=(0,e.memo)(function({cell:{value:r}}){const n=(0,T.wW)(ye);return e.createElement("span",{className:n.root},e.createElement("img",{src:r.meta.info.logos.small,alt:"",className:n.dsLogo}),r.name)},({cell:{value:t}},{cell:{value:r}})=>t.type===r.type&&t.name===r.name),pe=d.css`
  white-space: nowrap;
`,Ce=(0,e.memo)(function({...r}){return r.row.original.source.readOnly?e.createElement(W.C,{text:"Read only",color:"purple",className:pe}):null},(t,r)=>t.row.original.source.readOnly===r.row.original.source.readOnly)},80414:(w,P,a)=>{a.d(P,{K:()=>S});var d=a(671),O=a(3363),e=a(86647),x=a(34177);const L=({sourceUID:c,targetUID:y,...$})=>({...$,source:(0,e.F)().getInstanceSettings(c),target:(0,e.F)().getInstanceSettings(y)}),R=c=>c.map(L);function D(c){return c.data}const S=()=>{const{backend:c}=(0,x.p)(),[y,$]=(0,d.Z)(()=>(0,O.n)(c.fetch({url:"/api/datasources/correlations",method:"GET",showErrorAlert:!1})).then(D).then(R),[c]),[T,W]=(0,d.Z)(({sourceUID:g,...p})=>c.post(`/api/datasources/uid/${g}/correlations`,p).then(L),[c]),[M,N]=(0,d.Z)(({sourceUID:g,uid:p})=>c.delete(`/api/datasources/uid/${g}/correlations/${p}`),[c]),[Q,K]=(0,d.Z)(({sourceUID:g,uid:p,...V})=>c.patch(`/api/datasources/uid/${g}/correlations/${p}`,V).then(L),[c]);return{create:{execute:W,...T},update:{execute:K,...Q},get:{execute:$,...y},remove:{execute:N,...M}}}}}]);

//# sourceMappingURL=CorrelationsPage.27a2fef2ed8bbd346845.js.map