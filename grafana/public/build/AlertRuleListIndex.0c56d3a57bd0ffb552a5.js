"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2461,4286],{65007:(_,x,t)=>{t.r(x),t.d(x,{AlertRuleListUnconnected:()=>Ne,default:()=>Le});var n=t(68404),e=t(36635),y=t(37932),N=t(35645),E=t(14747),O=t(53217),g=t(31403),L=t(52081),P=t(97063),A=t(79396),B=t(45984),w=t(35029);function T({onDismiss:f}){return n.createElement(w.u,{title:"Adding an Alert",isOpen:!0,onDismiss:f,onClickBackdrop:f},n.createElement(L.wc,{spacing:"sm"},n.createElement("img",{src:"public/img/alert_howto_new.png",alt:""}),n.createElement("p",null,"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."),n.createElement("p",null,"Remember to save the dashboard to persist your alert rule changes.")))}var $=t(14677),F=t.n($),K=t(72948),ue=t(39904);const $e=({rule:f,search:D,onTogglePause:Y})=>{const fe=`${f.url}?editPanel=${f.panelId}&tab=alert`,te=(0,n.useCallback)(me=>n.createElement(F(),{key:me,highlightClassName:"highlight-search-match",textToHighlight:me,searchWords:[D]}),[D]);return n.createElement(K.Z,null,n.createElement(K.Z.Heading,null,te(f.name)),n.createElement(K.Z.Figure,null,n.createElement(ue.J,{size:"xl",name:f.stateIcon,className:`alert-rule-item__icon ${f.stateClass}`})),n.createElement(K.Z.Meta,null,n.createElement("span",{key:"state"},n.createElement("span",{key:"text",className:`${f.stateClass}`},te(f.stateText)," "),"for ",f.stateAge),f.info?te(f.info):null),n.createElement(K.Z.Actions,null,n.createElement(g.zx,{key:"play",variant:"secondary",icon:f.state==="paused"?"play":"pause",onClick:Y},f.state==="paused"?"Resume":"Pause"),n.createElement(g.Qj,{key:"edit",variant:"secondary",href:fe,icon:"cog"},"Edit alert")))};var be=t(45253);const xe="grafana.legacyalerting.unifiedalertingpromo",Oe=()=>n.createElement(be.b,{severity:"warning",title:"Grafana legacy alerting is going away soon"},n.createElement("p",null,"You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.",n.createElement("br",null),"We encourage you to upgrade to the new Grafana Alerting experience."),n.createElement("p",null,"See"," ",n.createElement("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/"},"What\u2019s New with Grafana Alerting")," ","to learn more about what\u2018s new or learn"," ",n.createElement("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/"},"how to enable the new Grafana Alerting feature"),"."));var De=t(69119),le=t(11626);const ee=f=>f.searchQuery,G=f=>{const D=new RegExp(f.alertRules.searchQuery,"i");return f.alertRules.items.filter(Y=>D.test(Y.name)||D.test(Y.stateText)||D.test(Y.info))},Ee=(f,D)=>f.notificationChannel.id===D?f.notificationChannel:null;function z(f){return{alertRules:G(f),search:ee(f.alertRules),isLoading:f.alertRules.isLoading}}const je={getAlertRulesAsync:De.Au,setSearchQuery:le.ql,togglePauseAlertRule:De.en},Fe=(0,e.connect)(z,je);class Ne extends n.PureComponent{constructor(){super(...arguments),this.stateFilters=[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}],this.onStateFilterChanged=D=>{y.E1.partial({state:D.value})},this.onOpenHowTo=()=>{P.Z.publish(new B.Dn({component:T}))},this.onSearchQueryChange=D=>{this.props.setSearchQuery(D)},this.onTogglePause=D=>{this.props.togglePauseAlertRule(D.id,{paused:D.state!=="paused"})},this.alertStateFilterOption=({text:D,value:Y})=>n.createElement("option",{key:Y,value:Y},D)}componentDidMount(){this.fetchRules()}componentDidUpdate(D){D.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){return this.props.queryParams.state??"all"}render(){const{alertRules:D,search:Y,isLoading:fe}=this.props;return n.createElement(A.T,{navId:"alert-list"},n.createElement(A.T.Contents,{isLoading:fe},n.createElement("div",{className:"page-action-bar"},n.createElement("div",{className:"gf-form gf-form--grow"},n.createElement(E.H,{placeholder:"Search alerts",value:Y,onChange:this.onSearchQueryChange})),n.createElement("div",{className:"gf-form"},n.createElement("label",{className:"gf-form-label",htmlFor:"alert-state-filter"},"States"),n.createElement("div",{className:"width-13"},n.createElement(O.Ph,{inputId:"alert-state-filter",options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()}))),n.createElement("div",{className:"page-action-bar__spacer"}),N.v.unifiedAlertingEnabled&&n.createElement(g.Qj,{variant:"primary",href:"alerting/ng/new"},"Add NG Alert"),n.createElement(g.zx,{variant:"secondary",onClick:this.onOpenHowTo},"How to add an alert")),n.createElement(Oe,null),n.createElement(L.wc,{spacing:"none"},D.map(te=>n.createElement($e,{rule:te,key:te.id,search:Y,onTogglePause:()=>this.onTogglePause(te)})))))}}const Le=Fe(Ne)},69119:(_,x,t)=>{t.d(x,{Au:()=>O,C2:()=>L,c1:()=>A,en:()=>g,fA:()=>B,fg:()=>P,tk:()=>w});var n=t(54899),e=t(37932),y=t(659),N=t(60499),E=t(11626);function O(T){return async $=>{$((0,E.gz)());const F=await(0,n.i)().get("/api/alerts",T);$((0,E.Oc)(F))}}function g(T,$){return async F=>{await(0,n.i)().post(`/api/alerts/${T}/pause`,$);const K=e.E1.getSearchObject().state||"all";F(O({state:K.toString()}))}}function L(T){return async $=>{try{await(0,n.i)().post("/api/alert-notifications",T),$((0,y.$l)((0,N.AT)("Notification created"))),e.E1.push("/alerting/notifications")}catch(F){(0,n.kW)(F)&&$((0,y.$l)((0,N.t_)(F.data.error)))}}}function P(T){return async $=>{try{await(0,n.i)().put(`/api/alert-notifications/${T.id}`,T),$((0,y.$l)((0,N.AT)("Notification updated")))}catch(F){(0,n.kW)(F)&&$((0,y.$l)((0,N.t_)(F.data.error)))}}}function A(T){return async($,F)=>{const K=F().notificationChannel.notificationChannel;await(0,n.i)().post("/api/alert-notifications/test",{id:K.id,...T})}}function B(){return async T=>{const F=(await(0,n.i)().get("/api/alert-notifiers")).sort((K,ue)=>K.name>ue.name?1:-1);T((0,E.T2)(F))}}function w(T){return async $=>{await $(B());const F=await(0,n.i)().get(`/api/alert-notifications/${T}`);$((0,E.K)(F))}}},67376:(_,x,t)=>{t.r(x),t.d(x,{default:()=>Wt});var n=t(52423),e=t(68404),y=t(70356),N=t(671),E=t(78337),O=t(27677),g=t(26418),L=t(54408),P=t(53546),A=t(72648),B=t(31403),w=t(96044),T=t(81168),$=t(41904),F=t(45524),K=t(97097),ue=t(69142),Ae=t(39910);const $e=()=>{const{canCreateGrafanaRules:a,canCreateCloudRules:r}=(0,Ae.B)();return a||r?e.createElement(ue.Z,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"Create alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank",onClick:()=>(0,L.PN)($.z7.alertRuleFromScratch)}):e.createElement(K._,{message:"No rules exist yet.",callToActionElement:e.createElement("div",null)})};var be=t(64681),xe=t.n(be),Oe=t(24664),De=t(45253),le=t(61860),ee=t(69945),G=t(45849),Ee=t(10505),z=t(79662);function je(){const[a,r]=(0,e.useState)(!1),[s,u]=(0,Oe.Z)("grafana.unifiedalerting.hideErrors",!1),l=(0,ee._)(d=>d.dataSources),i=(0,ee._)(d=>d.promRules),m=(0,ee._)(d=>d.rulerRules),o=(0,A.wW)(Ne),v=(0,e.useMemo)(()=>{const[d,M,R]=[l,i,m].map(S=>(0,G.Eu)().reduce((h,X)=>{const oe=S[X.name]?.error;return S[X.name]&&oe&&!(0,z.m$)(S[X.name])?[...h,{dataSource:X,error:oe}]:h},[])),I=i[G.GC]?.error,W=m[G.GC]?.error,U=[];return I&&U.push(e.createElement(e.Fragment,null,"Failed to load Grafana rules state: ",I.message||"Unknown error.")),W&&U.push(e.createElement(e.Fragment,null,"Failed to load Grafana rules config: ",W.message||"Unknown error.")),d.forEach(({dataSource:S,error:h})=>{U.push(e.createElement(e.Fragment,null,"Failed to load the data source configuration for"," ",e.createElement("a",{href:(0,Ee.__)(S),className:o.dsLink},S.name),": ",h.message||"Unknown error."))}),M.forEach(({dataSource:S,error:h})=>U.push(e.createElement(e.Fragment,null,"Failed to load rules state from"," ",e.createElement("a",{href:(0,Ee.__)(S),className:o.dsLink},S.name),": ",h.message||"Unknown error."))),R.forEach(({dataSource:S,error:h})=>U.push(e.createElement(e.Fragment,null,"Failed to load rules config from"," ",e.createElement("a",{href:(0,Ee.__)(S),className:o.dsLink},S.name),": ",h.message||"Unknown error."))),U},[l,i,m,o.dsLink]);return e.createElement(e.Fragment,null,!!v.length&&s&&e.createElement(Fe,{count:v.length,onClick:()=>u(d=>!d)}),!!v.length&&!s&&e.createElement(De.b,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",onRemove:()=>u(!0)},a&&v.map((d,M)=>e.createElement("div",{key:M},d)),!a&&e.createElement(e.Fragment,null,e.createElement("div",null,v[0]),v.length>=2&&e.createElement(B.zx,{className:o.moreButton,fill:"text",icon:"angle-right",size:"sm",onClick:()=>r(!0)},v.length-1," more ",xe()("error",v.length-1)))))}const Fe=({count:a,onClick:r})=>{const s=(0,A.wW)(Ne);return e.createElement("div",{className:s.floatRight},e.createElement(le.u,{content:"Show all errors",placement:"bottom"},e.createElement(B.zx,{fill:"text",variant:"destructive",icon:"exclamation-triangle",onClick:r},a>1?e.createElement(e.Fragment,null,a," errors"):e.createElement(e.Fragment,null,"1 error"))))},Ne=a=>({moreButton:n.css`
    padding: 0;
  `,floatRight:n.css`
    display: flex;
    justify-content: flex-end;
  `,dsLink:n.css`
    font-weight: ${a.typography.fontWeightBold};
  `});var Le=t(51981),f=t(61744),D=t(67487),Y=t(78889),fe=t(84952),te=t(25724),me=t(1562),Te=t(46818),_e=t(52081),ve=t(39904),ne=t(19985),et=t(98102),tt=t(55485),at=t(8055),Me=t(72004),Qe=t(33950),we=t(29721),de=t(65750),nt=t(61068),rt=t(9085),Ze=t.n(rt),c=t(82897),b=t(19677),H=t(35029),k=t(3153),re=t(60048),C=t(45608);const Z=a=>{const{group:r,namespace:s,onClose:u}=a,[l,i]=(0,e.useState)(!1),[m,o]=(0,e.useState)(r.rules),v=(0,A.wW)(V),d=(0,e.useCallback)(R=>{if(!R.destination||R.destination.index===R.source.index)return;const W=ge(m,R.source.index,R.destination.index);o(W);const U=(0,G.EG)(s.rulesSource),S=(0,c.compact)(W.map(h=>h.rulerRule));i(!0),(0,k.WI)((0,Me.tg)({namespaceName:s.name,groupName:r.name,rulesSourceName:U,newRules:S})).unwrap().finally(()=>{i(!1)})},[r.name,s.name,s.rulesSource,m]),M=m.map(R=>({...R,uid:String((0,re.Om)(R.rulerRule))}));return e.createElement(H.u,{className:v.modal,isOpen:!0,title:e.createElement(q,{namespace:s,group:r}),onDismiss:u,onClickBackdrop:u},e.createElement(b.Z5,{onDragEnd:d},e.createElement(b.bK,{droppableId:"alert-list",mode:"standard",renderClone:(R,I,W)=>e.createElement(J,{provided:R,rule:M[W.source.index],isClone:!0})},R=>e.createElement("div",{ref:R.innerRef,className:Ze()(v.listContainer,l&&v.disabled),...R.droppableProps},M.map((I,W)=>e.createElement(b._l,{key:I.uid,draggableId:I.uid,index:W,isDragDisabled:l},U=>e.createElement(J,{key:I.uid,provided:U,rule:I}))),R.placeholder))))},J=({provided:a,rule:r,isClone:s=!1,isDragging:u=!1})=>{const l=(0,A.wW)(V);return e.createElement("div",{className:Ze()(l.listItem,s&&"isClone",u&&"isDragging"),ref:a.innerRef,...a.draggableProps,...a.dragHandleProps},(0,z.x_)(r.promRule)&&e.createElement(C.l,{state:r.promRule.state}),(0,z.OP)(r.promRule)&&e.createElement(ne.C,{text:"Recording",color:"blue"}),e.createElement("div",{className:l.listItemName},r.name),e.createElement(ve.J,{name:"draggabledots"}))},q=({namespace:a,group:r})=>{const s=(0,A.wW)(V);return e.createElement("div",{className:s.header},e.createElement(ve.J,{name:"folder"}),(0,G.jq)(a.rulesSource)&&e.createElement(le.u,{content:a.rulesSource.name,placement:"top"},e.createElement("img",{alt:a.rulesSource.meta.name,className:s.dataSourceIcon,src:a.rulesSource.meta.info.logos.small})),e.createElement("span",null,a.name),e.createElement(ve.J,{name:"angle-right"}),e.createElement("span",null,r.name))},V=a=>({modal:n.css`
    max-width: 640px;
    max-height: 80%;
    overflow: hidden;
  `,listItem:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: ${a.spacing()};

    background: ${a.colors.background.primary};
    color: ${a.colors.text.secondary};

    border-bottom: solid 1px ${a.colors.border.medium};
    padding: ${a.spacing(1)} ${a.spacing(2)};

    &:last-child {
      border-bottom: none;
    }

    &.isClone {
      border: solid 1px ${a.colors.primary.shade};
    }
  `,listContainer:n.css`
    user-select: none;
    border: solid 1px ${a.colors.border.medium};
  `,disabled:n.css`
    opacity: 0.5;
    pointer-events: none;
  `,listItemName:n.css`
    flex: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,header:n.css`
    display: flex;
    align-items: center;

    gap: ${a.spacing(1)};
  `,dataSourceIcon:n.css`
    width: ${a.spacing(2)};
    height: ${a.spacing(2)};
  `});function ge(a,r,s){const u=Array.from(a),[l]=u.splice(r,1);return u.splice(s,0,l),u}var p=t(46063);const he={total:0,recording:0,[p.x_.Firing]:0,[p.x_.Pending]:0,[p.x_.Inactive]:0,error:0},ae=({group:a,namespaces:r,includeTotal:s})=>{const u=a?.interval,l=(0,e.useMemo)(()=>{const o={...he},v=d=>{d.promRule&&(0,z.x_)(d.promRule)&&(o[d.promRule.state]+=1),Je(d)&&(o.error+=1),(d.promRule&&(0,z.OP)(d.promRule)||d.rulerRule&&(0,z.yF)(d.rulerRule))&&(o.recording+=1),o.total+=1};return a&&a.rules.forEach(v),r&&r.forEach(d=>d.groups.forEach(M=>M.rules.forEach(v))),o},[a,r]),i=[];s&&i.push(e.createElement(e.Fragment,{key:"total"},l.total," ",xe()("rule",l.total))),l[p.x_.Firing]&&i.push(e.createElement(ne.C,{color:"red",key:"firing",text:`${l[p.x_.Firing]} firing`})),l.error&&i.push(e.createElement(ne.C,{color:"red",key:"errors",text:`${l.error} errors`})),l[p.x_.Pending]&&i.push(e.createElement(ne.C,{color:"orange",key:"pending",text:`${l[p.x_.Pending]} pending`})),l[p.x_.Inactive]&&i.push(e.createElement(ne.C,{color:"green",key:"inactive",text:`${l[p.x_.Inactive]} normal`})),l.recording&&i.push(e.createElement(ne.C,{color:"purple",key:"recording",text:`${l.recording} recording`}));const m=Boolean(i.length);return e.createElement(g.Stack,{direction:"row"},m&&e.createElement("div",null,e.createElement(g.Stack,{gap:.5},i)),u&&e.createElement(e.Fragment,null,e.createElement("div",null,"|"),e.createElement(ne.C,{text:u,icon:"clock-nine",color:"blue"})))};function Je(a){return a.promRule?.health==="err"||a.promRule?.health==="error"}var Ye=t(25048);const We=e.memo(({group:a,namespace:r,expandAll:s,viewMode:u})=>{const{rulesSource:l}=r,i=(0,T.useDispatch)(),m=(0,A.wW)(Xe),[o,v]=(0,e.useState)(!1),[d,M]=(0,e.useState)(!1),[R,I]=(0,e.useState)(!1),[W,U]=(0,e.useState)(!s),{canEditRules:S}=(0,Ae.B)();(0,e.useEffect)(()=>{U(!s)},[s]);const{hasRuler:h,rulerRulesLoaded:X}=(0,at.h)(),oe=a.rules[0]?.rulerRule,Pe=oe&&(0,z.Pc)(oe)&&oe.grafana_alert.namespace_uid||void 0,{folder:He}=(0,tt.W)(Pe),Ve=h(l)&&X(l)&&!a.rules.find(pe=>!!pe.rulerRule),Ce=(0,z.Jq)(a),j=a.rules.some(pe=>(0,z.Pc)(pe.rulerRule)&&pe.rulerRule.grafana_alert.provenance),Q=u==="list",ce=u==="grouped",Se=()=>{i((0,Me.oE)(r,a)),M(!1)},ie=[];if(Ve)ie.push(e.createElement(_e.Lh,{key:"is-deleting"},e.createElement(D.$,null),"deleting"));else if(l===G.GC){if(Pe){const pe=(0,Ee.HV)(Pe);He?.canSave&&(ce&&!j&&(ie.push(e.createElement(de.A,{"aria-label":"edit rule group","data-testid":"edit-group",key:"edit",icon:"pen",tooltip:"edit rule group",onClick:()=>v(!0)})),ie.push(e.createElement(de.A,{"aria-label":"re-order rules","data-testid":"reorder-group",key:"reorder",icon:"exchange-alt",tooltip:"reorder rules",className:m.rotate90,onClick:()=>I(!0)}))),Q&&ie.push(e.createElement(de.A,{"aria-label":"go to folder",key:"goto",icon:"folder-open",tooltip:"go to folder",to:pe,target:"__blank"}))),He?.canAdmin&&Q&&ie.push(e.createElement(de.A,{"aria-label":"manage permissions",key:"manage-perms",icon:"lock",tooltip:"manage permissions",to:pe+"/permissions",target:"__blank"}))}}else S(l.name)&&h(l)&&(Ce||(ie.push(e.createElement(de.A,{"aria-label":"edit rule group","data-testid":"edit-group",key:"edit",icon:"pen",tooltip:"edit rule group",onClick:()=>v(!0)})),ie.push(e.createElement(de.A,{"aria-label":"re-order rules","data-testid":"reorder-group",key:"reorder",icon:"exchange-alt",tooltip:"re-order rules",className:m.rotate90,onClick:()=>I(!0)}))),ie.push(e.createElement(de.A,{"aria-label":"delete rule group","data-testid":"delete-group",key:"delete-group",icon:"trash-alt",tooltip:"delete rule group",onClick:()=>M(!0)})));const Gt=Q?e.createElement(we.V,{namespace:r.name}):e.createElement(we.V,{namespace:r.name,group:a.name}),Ut=(pe=!1)=>{pe||(0,L.PN)($.z7.leavingRuleGroupEdit),v(!1)};return e.createElement("div",{className:m.wrapper,"data-testid":"rule-group"},e.createElement("div",{className:m.header,"data-testid":"rule-group-header"},e.createElement(Qe.U,{size:"sm",className:m.collapseToggle,isCollapsed:W,onToggle:U,"data-testid":"group-collapse-toggle"}),e.createElement(ve.J,{name:W?"folder":"folder-open"}),(0,G.jq)(l)&&e.createElement(le.u,{content:l.name,placement:"top"},e.createElement("img",{alt:l.meta.name,className:m.dataSourceIcon,src:l.meta.info.logos.small})),e.createElement("h6",{className:m.heading},Ce&&e.createElement(ne.C,{color:"purple",text:"Federated"})," ",Gt),e.createElement("div",{className:m.spacer}),e.createElement("div",{className:m.headerStats},e.createElement(ae,{group:a})),j&&e.createElement(e.Fragment,null,e.createElement("div",{className:m.actionsSeparator},"|"),e.createElement("div",{className:m.actionIcons},e.createElement(ne.C,{color:"purple",text:"Provisioned"}))),!!ie.length&&e.createElement(e.Fragment,null,e.createElement("div",{className:m.actionsSeparator},"|"),e.createElement("div",{className:m.actionIcons},e.createElement(g.Stack,{gap:.5},ie)))),!W&&e.createElement(Ye.i,{showSummaryColumn:!0,className:m.rulesTable,showGuidelines:!0,rules:a.rules}),o&&e.createElement(nt.vq,{groupInterval:a.interval??"",nameSpaceAndGroup:{group:a,namespace:r},sourceName:(0,G.EG)(r.rulesSource),onClose:()=>Ut()}),R&&e.createElement(Z,{group:a,namespace:r,onClose:()=>I(!1)}),e.createElement(et.s,{isOpen:d,title:"Delete group",body:e.createElement("div",null,"Deleting this group will permanently remove the group",e.createElement("br",null),"and ",a.rules.length," alert ",xe()("rule",a.rules.length)," belonging to it.",e.createElement("br",null),"Are you sure you want to delete this group?"),onConfirm:Se,onDismiss:()=>M(!1),confirmText:"Delete"}))});We.displayName="RulesGroup";const Xe=a=>({wrapper:n.css`
    & + & {
      margin-top: ${a.spacing(2)};
    }
  `,header:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${a.spacing(1)} ${a.spacing(1)} ${a.spacing(1)} 0;
    background-color: ${a.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:n.css`
    span {
      vertical-align: middle;
    }

    ${a.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${a.spacing(1)};
    }
  `,heading:n.css`
    margin-left: ${a.spacing(1)};
    margin-bottom: 0;
  `,spacer:n.css`
    flex: 1;
  `,collapseToggle:n.css`
    background: none;
    border: none;
    margin-top: -${a.spacing(1)};
    margin-bottom: -${a.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:n.css`
    width: ${a.spacing(2)};
    height: ${a.spacing(2)};
    margin-left: ${a.spacing(2)};
  `,dataSourceOrigin:n.css`
    margin-right: 1em;
    color: ${a.colors.text.disabled};
  `,actionsSeparator:n.css`
    margin: 0 ${a.spacing(2)};
  `,actionIcons:n.css`
    width: 80px;
    align-items: center;
  `,rulesTable:n.css`
    margin-top: ${a.spacing(3)};
  `,rotate90:n.css`
    transform: rotate(90deg);
  `});function Ie(a){return(0,e.useMemo)(()=>a.flatMap(r=>r.groups.map(s=>({namespace:r,group:s}))),[a])}const lt=({namespaces:a,expandAll:r})=>{const s=(0,A.wW)(st),u=(0,ee._)(h=>h.dataSources),l=(0,ee._)(h=>h.promRules),i=(0,e.useMemo)(G.Eu,[]),m=Ie(a),o=(0,e.useMemo)(()=>i.filter(h=>(0,Te.op)(l[h.name])||(0,Te.op)(u[h.name])),[l,u,i]),v=i.some(h=>l[h.name]?.result?.length??0>0),d=i.length>0,M=o.length>0,R=a.length>0,{numberOfPages:I,onPageChange:W,page:U,pageItems:S}=(0,te.h)(m,1,fe.gN);return e.createElement("section",{className:s.wrapper},e.createElement("div",{className:s.sectionHeader},e.createElement("h5",null,"Mimir / Cortex / Loki"),o.length?e.createElement(f.u,{className:s.loader,text:`Loading rules from ${o.length} ${xe()("source",o.length)}`}):e.createElement("div",null)),S.map(({group:h,namespace:X})=>e.createElement(We,{group:h,key:`${(0,G.v_)(X.rulesSource)}-${X.name}-${h.name}`,namespace:X,expandAll:r,viewMode:"grouped"})),!d&&e.createElement("p",null,"There are no Prometheus or Loki data sources configured."),d&&!M&&!R&&e.createElement("p",null,"No rules found."),!v&&M&&e.createElement(D.$,{size:24,className:s.spinner}),e.createElement(Y.t,{className:s.pagination,currentPage:U,numberOfPages:I,onNavigate:W,hideWhenSinglePage:!0}))},st=a=>({loader:n.css`
    margin-bottom: 0;
  `,sectionHeader:n.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:n.css`
    margin-bottom: ${a.spacing(4)};
  `,spinner:n.css`
    text-align: center;
    padding: ${a.spacing(2)};
  `,pagination:(0,me.Z)(a)});var ke=t(61627);const se=({namespaces:a,expandAll:r})=>{const s=(0,A.wW)(ye),[u]=(0,w.K)(),{prom:l,ruler:i}=(0,ee._)(S=>({prom:S.promRules[G.GC]||Te.oq,ruler:S.rulerRules[G.GC]||Te.oq})),m=l.loading||i.loading,o=!!l.result||!!i.result,v=u.view==="list",d=v?(0,ke.Kd)(a):a,M=Ie(d),{numberOfPages:R,onPageChange:I,page:W,pageItems:U}=(0,te.h)(M,1,fe.gN);return e.createElement("section",{className:s.wrapper},e.createElement("div",{className:s.sectionHeader},e.createElement("h5",null,"Grafana"),m?e.createElement(f.u,{className:s.loader,text:"Loading..."}):e.createElement("div",null)),U.map(({group:S,namespace:h})=>e.createElement(We,{group:S,key:`${h.name}-${S.name}`,namespace:h,expandAll:r,viewMode:v?"list":"grouped"})),o&&d?.length===0&&e.createElement("p",null,"No rules found."),!o&&m&&e.createElement(D.$,{size:24,className:s.spinner}),e.createElement(Y.t,{className:s.pagination,currentPage:W,numberOfPages:R,onNavigate:I,hideWhenSinglePage:!0}))},ye=a=>({loader:n.css`
    margin-bottom: 0;
  `,sectionHeader:n.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:n.css`
    margin-bottom: ${a.spacing(4)};
  `,spinner:n.css`
    text-align: center;
    padding: ${a.spacing(2)};
  `,pagination:(0,me.Z)(a)}),Ge=({namespaces:a,expandAll:r})=>{const[s,u]=(0,e.useMemo)(()=>{const l=a.map(i=>({...i,groups:i.groups.sort((m,o)=>m.name.localeCompare(o.name))})).sort((i,m)=>i.name.localeCompare(m.name));return[l.filter(i=>(0,G.HY)(i.rulesSource)),l.filter(i=>(0,G.jq)(i.rulesSource))]},[a]);return(0,e.useEffect)(()=>{(0,L.PN)($.z7.loadedList)},[]),e.createElement(e.Fragment,null,e.createElement(Le.q,{actions:[T.AccessControlAction.AlertingRuleRead]},e.createElement(se,{namespaces:s,expandAll:r})),e.createElement(Le.q,{actions:[T.AccessControlAction.AlertingRuleExternalRead]},e.createElement(lt,{namespaces:u,expandAll:r})))},Ue=({rules:a,state:r,defaultCollapsed:s=!1})=>{const[u,l]=(0,e.useState)(s),i=(0,A.wW)(dt);return e.createElement(e.Fragment,null,e.createElement("h4",{className:i.header},e.createElement(Qe.U,{className:i.collapseToggle,size:"xxl",isCollapsed:u,onToggle:()=>l(!u)}),(0,z.SS)(r)," (",a.length,")"),!u&&e.createElement(Ye.i,{className:i.rulesTable,rules:a,showGroupColumn:!0}))},dt=a=>({collapseToggle:n.css`
    vertical-align: middle;
  `,header:n.css`
    margin-top: ${a.spacing(2)};
  `,rulesTable:n.css`
    margin-top: ${a.spacing(3)};
  `}),gt=({namespaces:a})=>{const r=(0,Ee.lC)((0,w.K)()[0]),s=(0,e.useMemo)(()=>{const u={[p.x_.Firing]:[],[p.x_.Inactive]:[],[p.x_.Pending]:[]};return a.forEach(l=>l.groups.forEach(i=>i.rules.forEach(m=>{m.promRule&&(0,z.x_)(m.promRule)&&u[m.promRule.state].push(m)}))),Object.values(u).forEach(l=>l.sort((i,m)=>i.name.localeCompare(m.name))),u},[a]);return e.createElement(e.Fragment,null,(!r.alertState||r.alertState===p.x_.Firing)&&e.createElement(Ue,{state:p.x_.Firing,rules:s[p.x_.Firing]}),(!r.alertState||r.alertState===p.x_.Pending)&&e.createElement(Ue,{state:p.x_.Pending,rules:s[p.x_.Pending]}),(!r.alertState||r.alertState===p.x_.Inactive)&&e.createElement(Ue,{defaultCollapsed:r.alertState!==p.x_.Inactive,state:p.x_.Inactive,rules:s[p.x_.Inactive]}))};var pt=t(53117),ot=t(24799),Be=t(64353),qe=t(2594),Et=t(46967),ft=t(64421),vt=t(86647),ze=t(734),Ke=t(20194),ht=t(31808);function ct(){const[a,r]=(0,ht.j)(),s=a.get("search")??"",u=(0,ze.ug)(s),l=Object.values(u).some(o=>!(0,c.isEmpty)(o)),i=(0,e.useCallback)(o=>{const v=(0,ze.HY)(s,o);r({search:v})},[s,r]),m=(0,e.useCallback)(o=>{r({search:o})},[r]);return(0,e.useEffect)(()=>{const o={dataSource:a.get("dataSource")??void 0,alertState:a.get("alertState")??void 0,ruleType:a.get("ruleType")??void 0,labels:(0,Ke.Zh)(a.get("queryString")??"").map(Ke.cm)};Object.values(o).some(d=>!(0,c.isEmpty)(d))&&(r({dataSource:void 0,alertState:void 0,ruleType:void 0,queryString:void 0}),i((0,ft.ZP)(u,d=>{if(d.dataSourceName??=o.dataSource,o.alertState&&(0,p.I9)(o.alertState)&&(d.ruleState??=o.alertState),o.ruleType&&(0,z.Wd)(o.ruleType)&&(d.ruleType??=o.ruleType),d.labels.length===0&&o.labels.length>0){const M=o.labels.map(({name:R,operator:I,value:W})=>`${R}${I}${W}`);d.labels.push(...M)}})))},[a,i,u,r]),{filterState:u,hasActiveFilters:l,searchQuery:s,setSearchQuery:m,updateFilters:i}}const yt=(a,r)=>(0,e.useMemo)(()=>Rt(a,r),[a,r]),Rt=(a,r={labels:[],freeFormWords:[]})=>a.filter(s=>r.namespace?s.name.toLowerCase().includes(r.namespace.toLowerCase()):!0).filter(({rulesSource:s})=>r.dataSourceName&&(0,G.jq)(s)?s.name===r.dataSourceName:!0).reduce(Ct(r),[]),Ct=a=>(r,s)=>{const u=s.groups.filter(l=>a.groupName?l.name.toLowerCase().includes(a.groupName.toLowerCase()):!0).reduce(St(a),[]);return u.length&&r.push({...s,groups:u}),r},St=a=>(r,s)=>{const u=s.rules.filter(l=>{if(a.ruleType&&a.ruleType!==l.promRule?.type)return!1;const i=(0,z.Pc)(l.rulerRule)&&!Nt(l.rulerRule,a);if(a.dataSourceName&&i)return!1;const m=l.name?.toLocaleLowerCase();if(a.freeFormWords.length>0&&!a.freeFormWords.every(o=>m.includes(o.toLocaleLowerCase()))||a.ruleName&&!l.name?.toLocaleLowerCase().includes(a.ruleName.toLocaleLowerCase()))return!1;if(a.ruleHealth&&l.promRule){const o=(0,z.vU)(l.promRule.health);return a.ruleHealth===o}if(a.labels.length>0){const o=(0,c.compact)(a.labels.map(xt)),v=o.length>0&&(0,Ke.eD)(l.labels,o),d=o.length>0&&l.promRule&&l.promRule.type===p.pz.Alerting&&l.promRule.alerts&&l.promRule.alerts.some(M=>(0,Ke.eD)(M.labels,o));if(!(v||d))return!1}return!(a.ruleState&&!(l.promRule&&(0,z.x_)(l.promRule)&&l.promRule.state===a.ruleState))});return u.length&&r.push({...s,rules:u}),r};function xt(a){try{return(0,Ke.tC)(a)}catch{return{name:a,value:"",isRegex:!0,isEqual:!0}}}const Nt=(a,r)=>r.dataSourceName?!!a.grafana_alert.data.find(s=>s.datasourceUid?(0,vt.F)().getInstanceSettings(s.datasourceUid)?.name===r.dataSourceName:!1):!0;var Pt=t(42042);const it=[{icon:"folder",label:"Grouped",value:"grouped"},{icon:"list-ul",label:"List",value:"list"},{icon:"heart-rate",label:"State",value:"state"}],At=[{label:"Alert ",value:p.pz.Alerting},{label:"Recording ",value:p.pz.Recording}],Dt=[{label:"Ok",value:ze.VG.Ok},{label:"No Data",value:ze.VG.NoData},{label:"Error",value:ze.VG.Error}],Lt=({onFilterCleared:a=()=>{}})=>{const[r,s]=(0,w.K)(),[u,l]=(0,e.useState)(Math.floor(Math.random()*100)),i=`dataSource-${u}`,m=`queryString-${u}`,{filterState:o,hasActiveFilters:v,searchQuery:d,setSearchQuery:M,updateFilters:R}=ct(),I=(0,A.wW)(Tt),W=Object.entries(p.x_).map(([j,Q])=>({label:(0,z.SS)(Q),value:Q})),U=j=>{R({...o,dataSourceName:j.name}),l(Q=>Q+1)},S=()=>{R({...o,dataSourceName:void 0}),l(j=>j+1)},h=(0,c.debounce)(j=>{const Q=j.target;M(Q.value)},600),X=j=>{(0,L.PN)($.z7.clickingAlertStateFilters),R({...o,ruleState:j}),l(Q=>Q+1)},oe=j=>{s({view:j})},Pe=j=>{R({...o,ruleType:j}),l(Q=>Q+1)},He=j=>{R({...o,ruleHealth:j}),l(Q=>Q+1)},Ve=()=>{M(void 0),a(),setTimeout(()=>l(u+1),100)},Ce=e.createElement(ve.J,{name:"search"});return e.createElement("div",{className:I.container},e.createElement(g.Stack,{direction:"column",gap:1},e.createElement(g.Stack,{direction:"row",gap:1},e.createElement(ot.g,{className:I.dsPickerContainer,label:"Search by data source"},e.createElement(pt.q,{key:i,alerting:!0,noDefault:!0,placeholder:"All data sources",current:o.dataSourceName,onChange:U,onClear:S})),e.createElement("div",null,e.createElement(Be._,null,"State"),e.createElement(qe.S,{options:W,value:o.ruleState,onChange:X})),e.createElement("div",null,e.createElement(Be._,null,"Rule type"),e.createElement(qe.S,{options:At,value:o.ruleType,onChange:Pe})),e.createElement("div",null,e.createElement(Be._,null,"Health"),e.createElement(qe.S,{options:Dt,value:o.ruleHealth,onChange:He}))),e.createElement(g.Stack,{direction:"column",gap:1},e.createElement(g.Stack,{direction:"row",gap:1},e.createElement(ot.g,{className:I.searchInput,label:e.createElement(Be._,null,e.createElement(g.Stack,{gap:.5},e.createElement("span",null,"Search"),e.createElement(Pt.z,{content:e.createElement(Mt,null)},e.createElement(ve.J,{name:"info-circle",size:"sm"}))))},e.createElement(Et.I,{key:m,prefix:Ce,onChange:h,defaultValue:d,placeholder:"Search","data-testid":"search-query-input"})),e.createElement("div",null,e.createElement(Be._,null,"View as"),e.createElement(qe.S,{options:it,value:String(r.view??it[0].value),onChange:oe}))),v&&e.createElement("div",null,e.createElement(B.zx,{fullWidth:!1,icon:"times",variant:"secondary",onClick:Ve},"Clear filters")))))},Tt=a=>({container:n.css`
      margin-bottom: ${a.spacing(1)};
    `,dsPickerContainer:n.css`
      width: 250px;
      flex-grow: 0;
      margin: 0;
    `,searchInput:n.css`
      flex: 1;
      margin: 0;
    `});function Mt(){const a=(0,A.wW)(ut);return e.createElement("div",null,e.createElement("div",null,"Search syntax allows to query alert rules by the parameters defined below."),e.createElement("hr",null),e.createElement("div",{className:a.grid},e.createElement("div",null,"Filter type"),e.createElement("div",null,"Expression"),e.createElement(Re,{title:"Datasource",expr:"datasource:mimir"}),e.createElement(Re,{title:"Folder/Namespace",expr:"namespace:global"}),e.createElement(Re,{title:"Group",expr:"group:cpu-usage"}),e.createElement(Re,{title:"Rule",expr:'rule:"cpu 80%"'}),e.createElement(Re,{title:"Labels",expr:"label:team=A label:cluster=a1"}),e.createElement(Re,{title:"State",expr:"state:firing|normal|pending"}),e.createElement(Re,{title:"Type",expr:"type:alerting|recording"}),e.createElement(Re,{title:"Health",expr:"health:ok|nodata|error"})))}function Re({title:a,expr:r}){const s=(0,A.wW)(ut);return e.createElement(e.Fragment,null,e.createElement("div",null,a),e.createElement("code",{className:s.code},r))}const ut=a=>({grid:n.css`
    display: grid;
    grid-template-columns: max-content auto;
    gap: ${a.spacing(1)};
    align-items: center;
  `,code:n.css`
    display: block;
    text-align: center;
  `}),It=Lt;var $t=t(37190);const mt={groups:Ge,state:gt},bt=()=>window.open("/api/v1/provisioning/alert-rules/export?download=true&format=yaml"),Ot=(0,P.Pf)(()=>{const a=(0,T.useDispatch)(),r=(0,A.wW)(Ft),s=(0,e.useMemo)(G.mA,[]),u=(0,y.TH)(),[l,i]=(0,e.useState)(!1),[m]=(0,w.K)(),{filterState:o,hasActiveFilters:v}=ct(),{canCreateGrafanaRules:d,canCreateCloudRules:M,canReadProvisioning:R}=(0,Ae.B)(),I=mt[m.view]?m.view:"groups",W=mt[I],U=(0,ee._)(ce=>ce.promRules),S=(0,ee._)(ce=>ce.rulerRules),h=s.some(ce=>U[ce]?.loading||S[ce]?.loading),X=Object.entries(U),oe=X.every(([ce,Se])=>Se.dispatched&&(Se?.result!==void 0||Se?.error!==void 0)),Pe=X.every(([ce,Se])=>Se.dispatched&&Se?.result?.length===0),[He,Ve]=(0,N.Z)(async()=>{h||await a((0,Me.ei)())},[h]);(0,e.useEffect)(()=>{a((0,Me.ei)())},[a]),(0,E.Z)(Ve,$t.p4);const Ce=oe&&Pe&&X.length>0,j=(0,ke.Zo)(),Q=yt(j,o);return e.createElement(F.J,{pageId:"alert-list",isLoading:!1},e.createElement(je,null),e.createElement(It,{onFilterCleared:()=>i(!1)}),!Ce&&e.createElement(e.Fragment,null,e.createElement("div",{className:r.break}),e.createElement("div",{className:r.buttonsContainer},e.createElement("div",{className:r.statsContainer},I==="groups"&&v&&e.createElement(B.zx,{className:r.expandAllButton,icon:l?"angle-double-up":"angle-double-down",variant:"secondary",onClick:()=>i(!l)},l?"Collapse all":"Expand all"),e.createElement(ae,{namespaces:Q,includeTotal:!0})),e.createElement(g.Stack,{direction:"row",gap:.5},R&&e.createElement(B.zx,{icon:"download-alt",type:"button",onClick:bt},"Export"),(d||M)&&e.createElement(B.Qj,{href:O.Cj.renderUrl("alerting/new",{returnTo:u.pathname+u.search}),icon:"plus",onClick:()=>(0,L.PN)($.z7.alertRuleFromScratch)},"Create alert rule")))),Ce&&e.createElement($e,null),!Ce&&e.createElement(W,{expandAll:l,namespaces:Q}))},{style:"page"}),Ft=a=>({break:n.css`
    width: 100%;
    height: 0;
    margin-bottom: ${a.spacing(2)};
    border-bottom: solid 1px ${a.colors.border.medium};
  `,buttonsContainer:n.css`
    margin-bottom: ${a.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,statsContainer:n.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,expandAllButton:n.css`
    margin-right: ${a.spacing(1)};
  `}),Wt=Ot},45524:(_,x,t)=>{t.d(x,{J:()=>y});var n=t(68404),e=t(79396);const y=({children:N,pageId:E,pageNav:O,isLoading:g})=>n.createElement(e.T,{pageNav:O,navId:E},n.createElement(e.T.Contents,{isLoading:g},N))},51981:(_,x,t)=>{t.d(x,{q:()=>y});var n=t(68404),e=t(82002);const y=({actions:N,children:E,fallback:O=!0})=>N.some(g=>e.Vt.hasAccess(g,O))?n.createElement(n.Fragment,null,E):null},94762:(_,x,t)=>{t.d(x,{F:()=>E});var n=t(52423),e=t(68404),y=t(72648),N=t(53731);const E=({renderExpandedContent:g,...L})=>{const P=(0,y.wW)(O);return e.createElement(N.t,{renderExpandedContent:g?(A,B,w)=>e.createElement(e.Fragment,null,B!==w.length-1&&e.createElement("div",{className:(0,n.cx)(P.contentGuideline,P.guideline)}),g(A,B,w)):void 0,renderPrefixHeader:()=>e.createElement("div",{className:P.relative},e.createElement("div",{className:(0,n.cx)(P.headerGuideline,P.guideline)})),renderPrefixCell:(A,B,w)=>e.createElement("div",{className:P.relative},e.createElement("div",{className:(0,n.cx)(P.topGuideline,P.guideline)}),B!==w.length-1&&e.createElement("div",{className:(0,n.cx)(P.bottomGuideline,P.guideline)})),...L})},O=g=>({relative:n.css`
    position: relative;
    height: 100%;
  `,guideline:n.css`
    left: -19px;
    border-left: 1px solid ${g.colors.border.medium};
    position: absolute;

    ${g.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:n.css`
    width: 18px;
    border-bottom: 1px solid ${g.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:n.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:n.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:n.css`
    top: -25px;
    bottom: 0;
  `})},29721:(_,x,t)=>{t.d(x,{V:()=>y});var n=t(68404),e=t(39904);const y=({namespace:N,group:E})=>E?n.createElement(n.Fragment,null,N," ",n.createElement(e.J,{name:"angle-right"})," ",E):n.createElement(n.Fragment,null,N)},65750:(_,x,t)=>{t.d(x,{A:()=>N});var n=t(68404),e=t(61860),y=t(31403);const N=({tooltip:E,icon:O,to:g,target:L,onClick:P,className:A,tooltipPlacement:B="top",...w})=>{const T=typeof E=="string"?E:void 0;return n.createElement(e.u,{content:E,placement:B},g?n.createElement(y.Qj,{variant:"secondary",fill:"text",icon:O,href:g,size:"sm",target:L,...w,"aria-label":T}):n.createElement(y.zx,{className:A,variant:"secondary",fill:"text",size:"sm",icon:O,type:"button",onClick:P,...w,"aria-label":T}))}},25048:(_,x,t)=>{t.d(x,{i:()=>nt});var n=t(52423),e=t(68404),y=t(72648),N=t(84952),E=t(8055),O=t(37190),g=t(79662),L=t(53731),P=t(94762),A=t(40106),B=t(29721),w=t(46587),T=t(70356),$=t(26418),F=t(35645),K=t(61860),ue=t(31403),Ae=t(94599),$e=t(98102),be=t(60499),xe=t(81168),Oe=t(44391),De=t(72004),le=t(45849),ee=t(10505),G=t(60048),Ee=t(93411),z=t(41273);const je=c=>window.matchMedia(`(max-width: ${c}px)`).matches,Fe=({rule:c,rulesSource:b})=>{const H=(0,xe.useDispatch)(),k=(0,T.TH)(),re=(0,be.iG)(),C=(0,y.wW)(Le),{namespace:Z,group:J,rulerRule:q}=c,[V,ge]=(0,e.useState)(),p=(0,le.EG)(b),he=(0,g.Pc)(c.rulerRule)&&Boolean(c.rulerRule.grafana_alert.provenance),ae=[],Je=(0,g.Jq)(J),{isEditable:Ye,isRemovable:We}=(0,Oe.M)(p,q),Xe=k.pathname+k.search,Ie=Ne(k.pathname),lt=()=>{if(V&&V.rulerRule){const se=G.Zk((0,le.EG)(V.namespace.rulesSource),V.namespace.name,V.group.name,V.rulerRule);H((0,De.hS)(se,{navigateTo:Ie?"/alerting/list":void 0})),ge(void 0)}},st=()=>{if((0,le.jq)(b)){const{appUrl:se,appSubUrl:ye}=F.v,Ge=ye!==""?`${se}${ye}/`:F.v.appUrl,Ue=`${encodeURIComponent(b.name)}/${encodeURIComponent(c.name)}`;return`${Ge}alerting/${Ue}/find`}return window.location.href.split("?")[0]},ke=(0,le.EG)(b);if(Ie||ae.push(e.createElement(K.u,{placement:"top",content:"View"},e.createElement(ue.Qj,{className:C.button,title:"View",size:"sm",key:"view",variant:"secondary",icon:"eye",href:(0,ee.V2)(b,c,Xe)}))),Ye&&q&&!Je){const se=G.Zk(ke,Z.name,J.name,q);if(!he){const ye=(0,Ee.u)(`/alerting/${encodeURIComponent(G.$V(se))}/edit`,{returnTo:Xe});Ie&&ae.push(e.createElement(Ae.m,{key:"copy",icon:"copy",onClipboardError:Ge=>{re.error("Error while copying URL",Ge)},className:C.button,size:"sm",getText:st},"Copy link to rule")),ae.push(e.createElement(K.u,{placement:"top",content:"Edit"},e.createElement(ue.Qj,{title:"Edit",className:C.button,size:"sm",key:"edit",variant:"secondary",icon:"pen",href:ye})))}ae.push(e.createElement(K.u,{placement:"top",content:"Copy"},e.createElement(z.E,{ruleIdentifier:se,isProvisioned:he,className:C.button})))}return We&&q&&!Je&&!he&&ae.push(e.createElement(K.u,{placement:"top",content:"Delete"},e.createElement(ue.zx,{title:"Delete",className:C.button,size:"sm",type:"button",key:"delete",variant:"secondary",icon:"trash-alt",onClick:()=>ge(c)}))),ae.length?e.createElement(e.Fragment,null,e.createElement($.Stack,{gap:1},ae.map((se,ye)=>e.createElement(e.Fragment,{key:ye},se))),!!V&&e.createElement($e.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:lt,onDismiss:()=>ge(void 0)})):null};function Ne(c){return c.endsWith("/view")}const Le=c=>({button:n.css`
    padding: 0 ${c.spacing(2)};
  `});var f=t(39904),D=t(82963);function Y({rule:c}){const b=(0,y.wW)(fe),{exceedsLimit:H}=(0,e.useMemo)(()=>(0,D.f)(c.group.interval),[c.group.interval]);return H?e.createElement(K.u,{theme:"error",content:e.createElement("div",null,"A minimum evaluation interval of"," ",e.createElement("span",{className:b.globalLimitValue},F.v.unifiedAlerting.minInterval)," has been configured in Grafana and will be used instead of the ",c.group.interval," interval configured for the Rule Group.")},e.createElement(f.J,{name:"stopwatch-slash",className:b.icon})):null}function fe(c){return{globalLimitValue:n.css`
      font-weight: ${c.typography.fontWeightBold};
    `,icon:n.css`
      fill: ${c.colors.warning.text};
    `}}var te=t(52694),me=t(80498),Te=t(49279),_e=t(68854),ve=t(24990),ne=t(8674),et=t(78443);const tt=15,at=({rule:c})=>{const b=(0,y.wW)(Qe),{namespace:{rulesSource:H}}=c,k=Object.entries(c.annotations).filter(([re,C])=>!!C.trim());return e.createElement("div",null,e.createElement(Te.f,{rule:c,rulesSource:H,isViewMode:!1}),e.createElement("div",{className:b.wrapper},e.createElement("div",{className:b.leftSide},e.createElement(Me,{rule:c}),!!c.labels&&!!Object.keys(c.labels).length&&e.createElement(me.C,{label:"Labels",horizontal:!0},e.createElement(te.s,{labels:c.labels})),e.createElement(ne.C,{rulesSource:H,rule:c,annotations:k}),e.createElement(_e.J,{annotations:k})),e.createElement("div",{className:b.rightSide},e.createElement(ve.C,{rulesSource:H,rule:c}))),e.createElement(et.M,{rule:c,itemsDisplayLimit:tt}))},Me=({rule:c})=>{let b,H=c.group.interval;return(0,g.yF)(c.rulerRule)||(b=c.rulerRule?.for),e.createElement(e.Fragment,null,H&&e.createElement(me.C,{label:"Evaluate",horizontal:!0},"Every ",H),b&&e.createElement(me.C,{label:"For",horizontal:!0},b))},Qe=c=>({wrapper:n.css`
    display: flex;
    flex-direction: row;

    ${c.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:n.css`
    flex: 1;
  `,rightSide:n.css`
    ${c.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var we=t(80399),de=t(48208);const nt=({rules:c,className:b,showGuidelines:H=!1,emptyMessage:k="No rules found.",showGroupColumn:re=!1,showSummaryColumn:C=!1})=>{const Z=(0,y.wW)(rt),J=(0,n.cx)(Z.wrapper,b,{[Z.wrapperMargin]:H}),q=(0,e.useMemo)(()=>c.map((p,he)=>({id:`${p.namespace.name}-${p.group.name}-${p.name}-${he}`,data:p})),[c]),V=Ze(C,re);if(!c.length)return e.createElement("div",{className:(0,n.cx)(J,Z.emptyMessage)},k);const ge=H?P.F:L.t;return e.createElement("div",{className:J,"data-testid":"rules-table"},e.createElement(ge,{cols:V,isExpandable:!0,items:q,renderExpandedContent:({data:p})=>e.createElement(at,{rule:p}),pagination:{itemsPerPage:N.gN},paginationStyles:Z.pagination}))},rt=c=>({wrapperMargin:n.css`
    ${c.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:n.css`
    padding: ${c.spacing(1)};
  `,wrapper:n.css`
    width: auto;
    border-radius: ${c.shape.borderRadius()};
  `,pagination:n.css`
    display: flex;
    margin: 0;
    padding-top: ${c.spacing(1)};
    padding-bottom: ${c.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${c.colors.border.strong};
    border-right: 1px solid ${c.colors.border.strong};
    border-bottom: 1px solid ${c.colors.border.strong};
  `});function Ze(c,b){const{hasRuler:H,rulerRulesLoaded:k}=(0,E.h)();return(0,e.useMemo)(()=>{const re=[{id:"state",label:"State",renderCell:({data:C})=>{const{namespace:Z}=C,{rulesSource:J}=Z,{promRule:q,rulerRule:V}=C,ge=!!(H(J)&&k(J)&&q&&!V),p=!!(H(J)&&k(J)&&V&&!q),ae=(0,g.Pc)(V)&&Boolean(V.grafana_alert.is_paused);return e.createElement(de.p,{rule:C,isDeleting:ge,isCreating:p,isPaused:ae})},size:"165px"},{id:"name",label:"Name",renderCell:({data:C})=>C.name,size:5},{id:"provisioned",label:"",renderCell:({data:C})=>{const Z=C.rulerRule;return(0,g.Pc)(Z)&&Z.grafana_alert.provenance?e.createElement(A.C0,null):null},size:"100px"},{id:"warnings",label:"",renderCell:({data:C})=>e.createElement(Y,{rule:C}),size:"45px"},{id:"health",label:"Health",renderCell:({data:{promRule:C,group:Z}})=>C?e.createElement(we.V,{rule:C}):null,size:"75px"}];return c&&re.push({id:"summary",label:"Summary",renderCell:({data:C})=>e.createElement(w.Z,{input:C.annotations[O.q6.summary]??""}),size:5}),b&&re.push({id:"group",label:"Group",renderCell:({data:C})=>{const{namespace:Z,group:J}=C;return J.name==="default"?e.createElement(B.V,{namespace:Z.name}):e.createElement(B.V,{namespace:Z.name,group:J.name})},size:5}),re.push({id:"actions",label:"Actions",renderCell:({data:C})=>e.createElement(Fe,{rule:C,rulesSource:C.namespace.rulesSource}),size:"200px"}),re},[c,b,H,k])}},8055:(_,x,t)=>{t.d(x,{h:()=>N});var n=t(68404),e=t(45849),y=t(69945);function N(){const E=(0,y._)(L=>L.rulerRules),O=(0,n.useCallback)(L=>{const P=typeof L=="string"?L:L.name;return P===e.GC||!!E[P]?.result},[E]),g=(0,n.useCallback)(L=>{const P=(0,e.EG)(L),A=E[P]?.result;return Boolean(A)},[E]);return{hasRuler:O,rulerRulesLoaded:g}}},31808:(_,x,t)=>{t.d(x,{j:()=>N});var n=t(68404),e=t(70356),y=t(37932);function N(){const{search:E}=(0,e.TH)(),O=(0,n.useMemo)(()=>new URLSearchParams(E),[E]),g=(0,n.useCallback)((L,P)=>{y.E1.partial(L,P)},[]);return[O,g]}},39910:(_,x,t)=>{t.d(x,{B:()=>y});var n=t(68404),e=t(97953);function y(){return(0,n.useMemo)(()=>(0,e.Rv)(),[])}},78337:(_,x,t)=>{t.d(x,{Z:()=>y});var n=t(68404),e=function(N,E){var O=(0,n.useRef)(function(){});(0,n.useEffect)(function(){O.current=N}),(0,n.useEffect)(function(){if(E!==null){var g=setInterval(function(){return O.current()},E||0);return function(){return clearInterval(g)}}},[E])};const y=e}}]);

//# sourceMappingURL=AlertRuleListIndex.0c56d3a57bd0ffb552a5.js.map