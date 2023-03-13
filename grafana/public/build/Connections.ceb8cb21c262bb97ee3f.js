"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5981],{78014:(X,L,t)=>{t.d(L,{Z:()=>c});var e=t(68404),n=t(14747),x=t(31403),b=t(79979);class c extends e.PureComponent{render(){const{searchQuery:g,linkButton:r,setSearchQuery:W,target:D,placeholder:y="Search by name or type",sortPicker:E}=this.props,I={href:r?.href,disabled:r?.disabled};return D&&(I.target=D),e.createElement("div",{className:"page-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(n.H,{value:g,onChange:W,placeholder:y})),E&&e.createElement(b.P,{onChange:E.onChange,value:E.value,getSortOptions:E.getSortOptions}),r&&e.createElement(x.Qj,{...I},r.title))}}},50713:(X,L,t)=>{t.r(L),t.d(L,{default:()=>te});var e=t(68404),n=t(70356),x=t(31953),b=t(25e3),c=t(81168),o=t(86475),g=t(79396),r=t(52423),W=t(24699),D=t(72648),y=t(61744),E=t(77582),I=t(74509),j=t(72948);const V=a=>({sourcesList:r.css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 12px;
    list-style: none;
    margin-bottom: 80px;
  `,card:r.css`
    height: 90px;
    padding: 0px 24px;
    margin-bottom: 0;
  `,cardContent:r.css`
    display: flex;
    align-items: center;
  `,logoWrapper:r.css`
    display: flex;
    justify-content: center;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    img {
      max-width: 100%;
      max-height: 100%;
      align-self: center;
    }
  `,label:r.css`
    color: ${a.colors.text.primary};
    margin-bottom: 0;
  `}),Q=({items:a,onClickItem:h})=>{const v=(0,D.wW)(V);return e.createElement("ul",{className:v.sourcesList},a.map(S=>e.createElement(j.Z,{key:S.id,className:v.card,href:S.url,onClick:O=>{h&&h(O,S)}},e.createElement(j.Z.Heading,null,e.createElement("div",{className:v.cardContent},S.logo&&e.createElement("div",{className:v.logoWrapper},e.createElement("img",{src:S.logo,alt:`logo of ${S.name}`})),e.createElement("h4",{className:v.label},S.name))))))};var m=t(39904);const R=a=>({categoryHeader:r.css`
    align-items: center;
    display: flex;
    margin-bottom: 24px;
  `,categoryLabel:r.css`
    margin-bottom: 0px;
    margin-left: 8px;
  `}),J=({iconName:a,label:h})=>{const v=(0,D.wW)(R);return e.createElement("div",{className:v.categoryHeader},e.createElement(m.J,{name:a,size:"xl"}),e.createElement("h3",{className:v.categoryLabel},h))};var w=t(35029),K=t(31403);const A=a=>({modal:r.css`
    width: 500px;
  `,modalContent:r.css`
    overflow: visible;
    color: ${a.colors.text.secondary};

    a {
      color: ${a.colors.text.link};
    }
  `,description:r.css`
    margin-bottom: ${a.spacing(2)};
  `,bottomSection:r.css`
    display: flex;
    border-top: 1px solid ${a.colors.border.weak};
    padding-top: ${a.spacing(3)};
    margin-top: ${a.spacing(3)};
  `,actionsSection:r.css`
    display: flex;
    justify-content: end;
    margin-top: ${a.spacing(3)};
  `,warningIcon:r.css`
    color: ${a.colors.warning.main};
    padding-right: ${a.spacing()};
    margin-top: ${a.spacing(.25)};
  `,header:r.css`
    display: flex;
    align-items: center;
  `,headerTitle:r.css`
    margin: 0;
  `,headerLogo:r.css`
    margin-right: ${a.spacing(2)};
    width: 32px;
    height: 32px;
  `});function B({item:a,isOpen:h,onDismiss:v}){const S=(0,D.wW)(A);return e.createElement(w.u,{className:S.modal,contentClassName:S.modalContent,title:e.createElement(H,{item:a}),isOpen:h,onDismiss:v},e.createElement("div",null,e.createElement("div",null,a.description&&e.createElement("div",{className:S.description},a.description),e.createElement("div",null,"Links",e.createElement("br",null),e.createElement("a",{href:`https://grafana.com/grafana/plugins/${a.id}`,title:`${a.name} on Grafana.com`,target:"_blank",rel:"noopener noreferrer"},a.name))),e.createElement("div",{className:S.bottomSection},e.createElement("div",{className:S.warningIcon},e.createElement(m.J,{name:"exclamation-triangle"})),e.createElement("div",null,e.createElement("p",null,"Editors cannot add new connections. You may check to see if it is already configured in"," ",e.createElement("a",{href:"/connections/your-connections"},"Your Connections"),"."),e.createElement("p",null,"To add a new connection, contact your Grafana admin."))),e.createElement("div",{className:S.actionsSection},e.createElement(K.zx,{onClick:v},"Okay"))))}function H({item:a}){const h=(0,D.wW)(A);return e.createElement("div",null,e.createElement("div",{className:h.header},a.logo&&e.createElement("img",{className:h.headerLogo,src:a.logo,alt:`logo of ${a.name}`}),e.createElement("h4",{className:h.headerTitle},a.name)))}const z=()=>({noResults:r.css`
    text-align: center;
    padding: 50px 0;
    font-style: italic;
  `}),d=()=>{const a=(0,D.wW)(z);return e.createElement("p",{className:a.noResults},"No results matching your query were found.")};var p=t(46967);const i=a=>({searchContainer:r.css`
    display: flex;
    margin: 16px 0;
    justify-content: space-between;

    position: sticky;
    top: 0;
    background-color: ${a.colors.background.primary};
    z-index: 2;
    padding: ${a.spacing(2)};
    margin: 0 -${a.spacing(2)};
  `}),P=({onChange:a})=>{const h=(0,D.wW)(i);return e.createElement("div",{className:h.searchContainer},e.createElement(p.I,{onChange:a,prefix:e.createElement(m.J,{name:"search"}),placeholder:"Search all","aria-label":"Search all"}))},f=()=>({spacer:r.css`
    height: 16px;
  `,modal:r.css`
    width: 500px;
  `,modalContent:r.css`
    overflow: visible;
  `});function N(){const[a,h]=(0,e.useState)(""),[v,S]=(0,e.useState)(!1),[O,Y]=(0,e.useState)(null),q=(0,D.wW)(f),ae=E.Vt.hasPermission(c.AccessControlAction.DataSourcesCreate),ue=$=>{h($.currentTarget.value.toLowerCase())},{isLoading:ne,error:G,plugins:_}=(0,I.GE)({query:a,filterBy:"",filterByType:W.zV.datasource}),me=(0,e.useMemo)(()=>_.map($=>({id:$.id,name:$.name,description:$.description,logo:$.info.logos.small,url:o.Z.DataSourcesDetails.replace(":id",$.id)})),[_]),ge=($,fe)=>{ae||($.preventDefault(),$.stopPropagation(),oe(fe))},oe=$=>{S(!0),Y($)},pe=()=>{S(!1),Y(null)},Ee=(0,e.useMemo)(()=>!ne&&!G&&_.length<1,[ne,G,_]);return e.createElement(e.Fragment,null,O&&e.createElement(B,{item:O,isOpen:v,onDismiss:pe}),e.createElement(P,{onChange:ue}),e.createElement("div",{className:q.spacer}),e.createElement(J,{iconName:"database",label:"Data sources"}),ne?e.createElement(y.u,{text:"Loading..."}):G?e.createElement("p",null,"Error: ",G.message):e.createElement(Q,{items:me,onClickItem:ge}),Ee&&e.createElement(d,null))}function T(){return e.createElement(g.T,{navId:"connections-connect-data"},e.createElement(g.T.Contents,null,e.createElement(N,null)))}var Z=t(45253),se=t(19985),re=t(43795);function le(){const a="standalone-plugin-page-/connections/connect-data",{id:h}=(0,n.UO)(),v=(0,c.useSelector)(Y=>Y.navIndex),O=Boolean(v[a])?a:"connections-connect-data";return e.createElement(re.Q,{pluginId:h,navId:O,notFoundComponent:e.createElement(ce,null),notFoundNavModel:{text:"Unknown datasource",subTitle:"No datasource with this ID could be found.",active:!0}})}function ce(){const{id:a}=(0,n.UO)();return e.createElement(Z.b,{severity:c.AppNotificationSeverity.Warning,title:""},"Maybe you mistyped the URL or the plugin with the id ",e.createElement(se.C,{text:a,color:"orange"})," is unavailable.",e.createElement("br",null),"To see a list of available datasources please ",e.createElement("a",{href:o.Z.ConnectData},"click here"),".")}var ie=t(35645),de=t(19703),s=t(81955);function l(){const a=ie.v.featureToggles.topnav?e.createElement(de.G,null):void 0;return e.createElement(g.T,{navId:"connections-your-connections-datasources",actions:a},e.createElement(g.T.Contents,null,e.createElement(s.c,null)))}var u=t(81960),C=t(56090);function M(){const{uid:a}=(0,n.UO)(),{navId:h,pageNav:v}=(0,C.M)("dashboards");return e.createElement(g.T,{navId:h,pageNav:v},e.createElement(g.T.Contents,null,e.createElement(u.Z,{uid:a})))}var U=t(19870);function F(){const{uid:a}=(0,n.UO)(),h=(0,n.TH)(),S=new URLSearchParams(h.search).get("page"),{navId:O,pageNav:Y}=(0,C.M)();return e.createElement(g.T,{navId:O,pageNav:Y},e.createElement(g.T.Contents,null,e.createElement(U.H,{uid:a,pageId:S})))}var k=t(86218);function ee(){return e.createElement(g.T,{navId:"connections-your-connections-datasources",pageNav:{text:"Add data source",subTitle:"Choose a data source type",active:!0}},e.createElement(g.T.Contents,null,e.createElement(k.x,null)))}function te(){const a=(0,c.useSelector)(v=>v.navIndex),h=Boolean(a["standalone-plugin-page-/connections/connect-data"]);return e.createElement(b.Vj.Provider,{value:{New:o.Z.DataSourcesNew,List:o.Z.DataSources,Edit:o.Z.DataSourcesEdit,Dashboards:o.Z.DataSourcesDashboards}},e.createElement(n.rs,null,e.createElement(n.AW,{exact:!0,path:o.Z.Base,component:()=>e.createElement(n.l_,{to:o.Z.ConnectData})}),e.createElement(n.AW,{exact:!0,path:o.Z.YourConnections,component:()=>e.createElement(x.G,{navId:"connections-your-connections"})}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSources,component:l}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesDetails,component:le}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesNew,component:ee}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesEdit,component:F}),e.createElement(n.AW,{exact:!0,path:o.Z.DataSourcesDashboards,component:M}),!h&&e.createElement(n.AW,{path:o.Z.ConnectData,component:T}),e.createElement(n.AW,{component:l})))}},19703:(X,L,t)=>{t.d(L,{G:()=>g});var e=t(68404),n=t(35645),x=t(31403),b=t(77582),c=t(81168),o=t(25e3);function g(){const r=b.Vt.hasPermission(c.AccessControlAction.DataSourcesCreate),W=(0,o.d7)();return r?e.createElement(x.Qj,{icon:"plus",href:n.v.appSubUrl+W.New},"Add new data source"):null}},81960:(X,L,t)=>{t.d(L,{Z:()=>r});var e=t(68404),n=t(2555),x=t(86977),b=t(85805),c=t(81168),o=t(27786),g=t(25e3);function r({uid:D}){(0,g.wi)(D);const y=(0,c.useDispatch)(),E=(0,c.useSelector)(m=>m.dataSources.dataSource),I=(0,c.useSelector)(m=>m.plugins.dashboards),j=(0,c.useSelector)(m=>m.plugins.isLoadingPluginDashboards);(0,e.useEffect)(()=>{E.id>0&&y((0,b.m3)())},[y,E]);const V=(m,R)=>{y((0,x.$j)({pluginId:m.pluginId,path:m.path,overwrite:R,inputs:[{name:"*",type:"datasource",pluginId:E.type,value:E.name}]},m.title))},Q=({uid:m})=>{y((0,x.fG)(m))};return e.createElement(W,{dashboards:I,isLoading:j,onImportDashboard:V,onRemoveDashboard:Q})}const W=({isLoading:D,dashboards:y,onImportDashboard:E,onRemoveDashboard:I})=>D?e.createElement(n.Z,null):e.createElement(o.Z,{dashboards:y,onImport:E,onRemove:I})},81955:(X,L,t)=>{t.d(L,{c:()=>J});var e=t(52423),n=t(68404),x=t(35645),b=t(72648),c=t(72948),o=t(34719),g=t(31403),r=t(69142),W=t(2555),D=t(77582),y=t(81168),E=t(25e3),I=t(85597),j=t(78014);const V="alpha-asc",Q="alpha-desc",m=[{label:"Sort by A\u2013Z",value:V},{label:"Sort by Z\u2013A",value:Q}];function R(){const A=(0,y.useDispatch)(),B=(0,n.useCallback)(T=>A((0,E.zT)(T)),[A]),H=(0,y.useSelector)(({dataSources:T})=>(0,E.IO)(T)),z=D.Vt.hasPermission(y.AccessControlAction.DataSourcesCreate),d=(0,E.d7)(),i=!x.v.featureToggles.topnav&&z?{href:d.New,title:"Add new data source"}:void 0,P=(0,n.useCallback)(T=>A((0,E.Nu)(T.value===V)),[A]),f=(0,y.useSelector)(({dataSources:T})=>(0,E.IA)(T)),N={onChange:P,value:f?V:Q,getSortOptions:()=>Promise.resolve(m)};return n.createElement(j.Z,{searchQuery:H,setSearchQuery:B,key:"action-bar",sortPicker:N,linkButton:i})}function J(){(0,E.zJ)();const A=(0,y.useSelector)(i=>(0,E.mt)(i.dataSources)),B=(0,y.useSelector)(({dataSources:i})=>(0,E.r7)(i)),H=(0,y.useSelector)(({dataSources:i})=>i.hasFetched),z=D.Vt.hasPermission(y.AccessControlAction.DataSourcesCreate),d=D.Vt.hasPermission(y.AccessControlAction.DataSourcesWrite),p=D.Vt.hasPermission(y.AccessControlAction.DataSourcesExplore);return n.createElement(w,{dataSources:A,dataSourcesCount:B,isLoading:!H,hasCreateRights:z,hasWriteRights:d,hasExploreRights:p})}function w({dataSources:A,dataSourcesCount:B,isLoading:H,hasCreateRights:z,hasWriteRights:d,hasExploreRights:p}){const i=(0,b.wW)(K),P=(0,E.d7)();return H?n.createElement(W.Z,null):B===0?n.createElement(r.Z,{buttonDisabled:!z,title:"No data sources defined",buttonIcon:"database",buttonLink:P.New,buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"}):n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement("ul",{className:i.list},A.map(f=>{const N=x.v.appSubUrl+P.Edit.replace(/:uid/gi,f.uid);return n.createElement("li",{key:f.uid},n.createElement(c.Z,{href:d?N:void 0},n.createElement(c.Z.Heading,null,f.name),n.createElement(c.Z.Figure,null,n.createElement("img",{src:f.typeLogoUrl,alt:"",height:"40px",width:"40px",className:i.logo})),n.createElement(c.Z.Meta,null,[f.typeName,f.url,f.isDefault&&n.createElement(o.V,{key:"default-tag",name:"default",colorIndex:1})]),n.createElement(c.Z.Tags,null,n.createElement(g.Qj,{icon:"apps",fill:"outline",variant:"secondary",href:`dashboard/new-with-ds/${f.uid}`},"Build a dashboard"),p&&n.createElement(g.Qj,{icon:"compass",fill:"outline",variant:"secondary",className:i.button,href:(0,I.iU)(f)},"Explore"))))})))}const K=A=>({list:(0,e.css)({listStyle:"none",display:"grid"}),logo:(0,e.css)({objectFit:"contain"}),button:(0,e.css)({marginLeft:A.spacing(2)})})},19870:(X,L,t)=>{t.d(L,{H:()=>ie});var e=t(68404),n=t(94929),x=t(86647),b=t(2555),c=t(81168),o=t(25e3),g=t(52423),r=t(68183),W=t(81764),D=t(46967),y=t(8944),E=t(72648),I=t(19985);function j({dataSourceName:s,isDefault:l,onDefaultChange:u,onNameChange:C,alertingSupported:M,disabled:U}){return e.createElement(e.Fragment,null,e.createElement(V,{enabled:M}),e.createElement("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings"},e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form max-width-30"},e.createElement(W._,{label:"Name",tooltip:`The name is used when you select the data source in panels. The default data source is
              'preselected in new panels.`,grow:!0,disabled:U},e.createElement(D.I,{id:"basic-settings-name",type:"text",value:s,placeholder:"Name",onChange:F=>C(F.currentTarget.value),required:!0,"aria-label":r.wl.pages.DataSource.name}))),e.createElement(W._,{label:"Default",labelWidth:8,disabled:U},e.createElement(y.x,{id:"basic-settings-default",value:l,onChange:F=>{u(F.currentTarget.checked)}})))))}function V({enabled:s}){const l=(0,E.wW)(Q);return e.createElement("div",{className:l.badge},s?e.createElement(I.C,{color:"green",icon:"check-circle",text:"Alerting supported"}):e.createElement(I.C,{color:"orange",icon:"exclamation-triangle",text:"Alerting not supported"}))}const Q=s=>({badge:g.css`
    margin-bottom: ${s.spacing(2)};
  `});var m=t(31403),R=t(77582);function J({canSave:s,canDelete:l,onDelete:u,onSubmit:C,onTest:M,exploreUrl:U}){const F=R.Vt.hasPermission(c.AccessControlAction.DataSourcesExplore);return e.createElement("div",{className:"gf-form-button-row"},e.createElement(m.zx,{variant:"secondary",fill:"solid",type:"button",onClick:()=>history.back()},"Back"),e.createElement(m.Qj,{variant:"secondary",fill:"solid",href:U,disabled:!F},"Explore"),e.createElement(m.zx,{type:"button",variant:"destructive",disabled:!l,onClick:u,"aria-label":r.wl.pages.DataSource.delete},"Delete"),s&&e.createElement(m.zx,{type:"submit",variant:"primary",disabled:!s,onClick:k=>C(k),"aria-label":r.wl.pages.DataSource.saveAndTest},"Save & test"),!s&&e.createElement(m.zx,{variant:"primary",onClick:M},"Test"))}var w=(s=>(s.OpenSource="Open Source",s.Pro="Pro",s.Enterprise="Enterprise",s))(w||{}),K=t(45253),A=t(59796),B=t(47694);const H="datasources.settings.cloudInfoBox.isDismissed";function z({dataSource:s}){let l="",u="";if(s.readOnly||(s.version??0)>2||B.vc.buildInfo.edition!==w.OpenSource)return null;switch(s.type){case"prometheus":l="Prometheus",u="Loki";break;case"loki":l="Loki",u="Prometheus";break;default:return null}return e.createElement(A.G,{storageKey:H,defaultValue:!1},(C,M)=>C?null:e.createElement(K.b,{title:`Configure your ${l} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{M(!0)}},"Or skip the effort and get ",l," (and ",u,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",e.createElement("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${s.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage."},"free-forever Grafana Cloud plan"),"."))}const d="This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source.";function p(){return e.createElement(K.b,{"aria-label":r.wl.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source"},d)}function i({dataSourceRights:s,onDelete:l}){const{readOnly:u,hasDeleteRights:C}=s,M=!u&&C,U=()=>history.back();return e.createElement(e.Fragment,null,u&&e.createElement(p,null),e.createElement("div",{className:"gf-form-button-row"},M&&e.createElement(m.zx,{type:"submit",variant:"destructive",onClick:l},"Delete"),e.createElement(m.zx,{variant:"secondary",fill:"outline",type:"button",onClick:U},"Back")))}const P="You are not allowed to modify this data source. Please contact your server admin to update this data source.";function f(){return e.createElement(K.b,{severity:"info",title:"Missing rights"},P)}function N({plugin:s,pageId:l}){if(!s||!s.configPages)return null;const u=s.configPages.find(({id:C})=>C===l);return u?e.createElement(u.body,{plugin:s,query:{}}):e.createElement("div",null,"Page not found: ",u)}var T=t(82897),Z=t(11484);class se extends e.PureComponent{constructor(l){super(l),this.element=null,this.onModelChanged=u=>{this.props.onModelChange(u)},this.scopeProps={ctrl:{datasourceMeta:l.dataSourceMeta,current:(0,T.cloneDeep)(l.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:l}=this.props;if(this.element&&!l.components.ConfigEditor){const u=(0,Z.w)(),C='<plugin-component type="datasource-config-ctrl" />';this.component=u.load(this.element,this.scopeProps,C)}}componentDidUpdate(l){const{plugin:u}=this.props;!u.components.ConfigEditor&&this.props.dataSource!==l.dataSource&&(this.scopeProps.ctrl.current=(0,T.cloneDeep)(this.props.dataSource),this.component?.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:l,dataSource:u}=this.props;return l?e.createElement("div",{ref:C=>this.element=C},l.components.ConfigEditor&&e.createElement(l.components.ConfigEditor,{options:u,onOptionsChange:this.onModelChanged})):null}}var re=t(81731);function le({state:s}){return e.createElement("div",{className:"gf-form"},e.createElement("div",{className:"gf-form-label width-10"},"Plugin state"),e.createElement("div",{className:"gf-form-label gf-form-label--transparent"},e.createElement(re.u,{state:s})))}function ce({testingStatus:s}){const l=s?.status==="error",u=s?.message,C=s?.details?.message,M=s?.details?.verboseMessage;return u?e.createElement("div",{className:"gf-form-group p-t-2"},e.createElement(K.b,{severity:l?"error":"success",title:u,"aria-label":r.wl.pages.DataSource.alert},s?.details&&e.createElement(e.Fragment,null,C,M?e.createElement("details",{style:{whiteSpace:"pre-wrap"}},M):null))):null}function ie({uid:s,pageId:l}){(0,o.E)(s);const u=(0,c.useDispatch)(),C=(0,o.wl)(s),M=(0,o.Qs)(C.type),U=(0,o._l)(),F=(0,o.YY)(s),k=(0,o.Rz)(s),ee=(0,o.q6)(),te=(0,o.hw)(s),a=(0,o.qj)(),h=O=>u((0,o.yr)(O)),v=O=>u((0,o.BX)(O)),S=O=>u((0,o.rl)(O));return e.createElement(de,{pageId:l,dataSource:C,dataSourceMeta:M,dataSourceSettings:U,dataSourceRights:F,exploreUrl:k,onDelete:ee,onDefaultChange:h,onNameChange:v,onOptionsChange:S,onTest:te,onUpdate:a})}function de({pageId:s,dataSource:l,dataSourceMeta:u,dataSourceSettings:C,dataSourceRights:M,exploreUrl:U,onDelete:F,onDefaultChange:k,onNameChange:ee,onOptionsChange:te,onTest:a,onUpdate:h}){const{plugin:v,loadError:S,testingStatus:O,loading:Y}=C,{readOnly:q,hasWriteRights:ae,hasDeleteRights:ue}=M,ne=l.id>0,G=(0,x.F)()?.getInstanceSettings(l.uid),_=Boolean(G?.meta?.alerting??!1),me=G?.type==="alertmanager",ge=_||me,oe=async pe=>{pe.preventDefault(),await h({...l}),a()};return S?e.createElement(i,{dataSourceRights:M,onDelete:F}):Y?e.createElement(b.Z,null):!ne||!G?null:s?e.createElement(n.n,{instanceSettings:G},e.createElement(N,{pageId:s,plugin:v})):e.createElement("form",{onSubmit:oe},!ae&&e.createElement(f,null),q&&e.createElement(p,null),u.state&&e.createElement(le,{state:u.state}),e.createElement(z,{dataSource:l}),e.createElement(j,{dataSourceName:l.name,isDefault:l.isDefault,onDefaultChange:k,onNameChange:ee,alertingSupported:ge,disabled:q||!ae}),v&&e.createElement(n.n,{instanceSettings:G},e.createElement(se,{plugin:v,dataSource:l,dataSourceMeta:u,onModelChange:te})),e.createElement(ce,{testingStatus:O}),e.createElement(J,{onSubmit:oe,onDelete:F,onTest:a,exploreUrl:U,canSave:!q&&ae,canDelete:!q&&ue}))}},86218:(X,L,t)=>{t.d(L,{x:()=>H});var e=t(68404),n=t(14747),x=t(31403),b=t(2555),c=t(52423),o=t(24699),g=t(68183),r=t(72648),W=t(17784),D=t(56766),y=t(52081),E=t(51613),I=t(74509);function j(){const d=(0,I.UQ)(),{isLoading:p}=(0,I.ZV)(),i=(0,r.wW)(Q);return p||d.length===0?null:e.createElement(W.v,{"aria-label":g.wl.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/"},e.createElement("div",null,e.createElement("p",null,"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."),"The following plugins are disabled and not shown in the list below:",e.createElement(D.a,{items:d,className:i.list,renderItem:P=>e.createElement("div",{className:i.wrapper},e.createElement(y.Lh,{spacing:"sm",justify:"flex-start",align:"center"},e.createElement("strong",null,P.pluginId),e.createElement(E.o,{status:V(P.errorCode),className:i.badge})))})))}function V(d){switch(d){case o.w2.invalidSignature:return o.Xy.invalid;case o.w2.missingSignature:return o.Xy.missing;case o.w2.modifiedSignature:return o.Xy.modified;default:return o.Xy.missing}}function Q(d){return{list:(0,c.css)({listStyleType:"circle"}),wrapper:(0,c.css)({marginTop:d.spacing(1)}),badge:(0,c.css)({marginTop:0})}}var m=t(81168),R=t(72948);function J({onClick:d,dataSourcePlugin:p}){const i=p.module==="phantom",P=!i&&!p.unlicensed,f=p.info?.links?.length>0?p.info.links[0]:null,N=(0,r.wW)(w);return e.createElement(R.Z,{className:(0,c.cx)(N.card,"card-parent"),onClick:P?d:()=>{}},e.createElement(R.Z.Heading,{className:N.heading,"aria-label":g.wl.pages.AddDataSource.dataSourcePluginsV2(p.name)},p.name),e.createElement(R.Z.Figure,{align:"center",className:N.figure},e.createElement("img",{className:N.logo,src:p.info.logos.small,alt:""})),e.createElement(R.Z.Description,{className:N.description},p.info.description),!i&&e.createElement(R.Z.Meta,{className:N.meta},e.createElement(E.o,{status:p.signature})),e.createElement(R.Z.Actions,{className:N.actions},f&&e.createElement(x.Qj,{"aria-label":`${p.name}, learn more.`,href:`${f.url}?utm_source=grafana_add_ds`,icon:"external-link-alt",onClick:T=>T.stopPropagation(),rel:"noopener",target:"_blank",variant:"secondary"},f.name)))}function w(d){return{heading:(0,c.css)({fontSize:d.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,c.css)({width:"inherit",marginRight:"0px","> img":{width:d.spacing(7)}}),meta:(0,c.css)({marginTop:"6px",position:"relative"}),description:(0,c.css)({margin:"0px",fontSize:d.typography.size.sm}),actions:(0,c.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,c.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,c.css)({marginRight:d.v1.spacing.lg,marginLeft:d.v1.spacing.sm,width:d.spacing(7),maxHeight:d.spacing(7)})}}function K({dataSourcePlugins:d,onClickDataSourceType:p}){return!d||!d.length?null:e.createElement(D.a,{items:d,getItemKey:i=>i.id.toString(),renderItem:i=>e.createElement(J,{dataSourcePlugin:i,onClick:()=>p(i)}),className:c.css`
        > li {
          margin-bottom: 2px;
        }
      `})}function A({categories:d,onClickDataSourceType:p}){return e.createElement(e.Fragment,null,d.map(({id:i,title:P,plugins:f})=>e.createElement("div",{className:"add-data-source-category",key:i},e.createElement("div",{className:"add-data-source-category__header",id:i},P),e.createElement(K,{dataSourcePlugins:f,onClickDataSourceType:p}))),e.createElement("div",{className:"add-data-source-more"},e.createElement(x.Qj,{variant:"secondary",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener"},"Find more data source plugins on grafana.com")))}var B=t(25e3);function H(){(0,B.OU)();const d=(0,m.useDispatch)(),p=(0,m.useSelector)(Z=>(0,B.I5)(Z.dataSources)),i=(0,m.useSelector)(Z=>Z.dataSources.dataSourceTypeSearchQuery),P=(0,m.useSelector)(Z=>Z.dataSources.isLoadingDataSources),f=(0,m.useSelector)(Z=>Z.dataSources.categories),N=(0,B.nH)(),T=Z=>d((0,B.Ht)(Z));return e.createElement(z,{dataSources:p,dataSourceCategories:f,searchQuery:i,isLoading:P,onAddDataSource:N,onSetSearchQuery:T})}function z({dataSources:d,dataSourceCategories:p,searchQuery:i,isLoading:P,onAddDataSource:f,onSetSearchQuery:N}){const T=(0,B.d7)();return P?e.createElement(b.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"page-action-bar"},e.createElement(n.H,{value:i,onChange:N,placeholder:"Filter by name or type"}),e.createElement("div",{className:"page-action-bar__spacer"}),e.createElement(x.Qj,{href:T.List,fill:"outline",variant:"secondary",icon:"arrow-left"},"Cancel")),!i&&e.createElement(j,null),e.createElement("div",null,i&&e.createElement(K,{dataSourcePlugins:d,onClickDataSourceType:f}),!i&&e.createElement(A,{categories:p,onClickDataSourceType:f})))}},81731:(X,L,t)=>{t.d(L,{u:()=>b});var e=t(68404),n=t(24699),x=t(19985);const b=o=>{const g=c(o.state);return g?e.createElement(x.C,{color:g.color,title:g.tooltip,text:g.text,icon:g.icon}):null};function c(o){switch(o){case n.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case n.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case n.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}}}]);

//# sourceMappingURL=Connections.ceb8cb21c262bb97ee3f.js.map