"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{43137:(T,y,t)=>{t.d(y,{l:()=>h,S:()=>m});var n=t(52423),e=t(68404),g=t(72648),f=t(45253),E=t(31403),r=t(86475);const c=i=>({alertContent:n.css`
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    align-items: center;
  `,alertParagraph:n.css`
    margin: 0 ${i.spacing(1)} 0 0;
    line-height: ${i.spacing(i.components.height.sm)};
    color: ${i.colors.text.primary};
  `});var m=(i=>(i.dataSources="dataSources",i.connectData="connectData",i))(m||{});const v={dataSources:r.Z.DataSources,connectData:r.Z.ConnectData};function h({destinationPage:i}){const S=(0,g.wW)(c);return e.createElement(f.b,{severity:"warning",title:""},e.createElement("div",{className:S.alertContent},e.createElement("p",{className:S.alertParagraph},"Data sources have a new home! You can discover new data sources or manage existing ones in the new Connections page, accessible from the lefthand nav."),e.createElement(E.Qj,{"aria-label":"Link to Connections",icon:"adjust-circle",href:v[i]},"See data sources in Connections")))}},75260:(T,y,t)=>{t.d(y,{SX:()=>f,IF:()=>L,oZ:()=>v,xh:()=>A});var n=t(68404),e=t(24699),g=t(19985);function f({error:l}){const B=E(l);return n.createElement(g.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:B})}function E(l){switch(l){case e.w2.modifiedSignature:return"Plugin disabled due to modified content";case e.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case e.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${l?`: ${l}`:""}`}}var r=t(72648),c=t(52423);const m=l=>c.css`
  background: ${l.colors.background.primary};
  border-color: ${l.colors.border.strong};
  color: ${l.colors.text.secondary};
`;function v(){const l=(0,r.wW)(m);return n.createElement(g.C,{text:"Installed",color:"orange",className:l})}var h=t(66121),i=t(52081),S=t(51613),N=t(31403);function L({plugin:l}){const B=(0,r.wW)(m),P=I=>{I.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${l.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,h.v)("enterprise.plugins")?n.createElement(g.C,{text:"Enterprise",color:"blue"}):n.createElement(i.Lh,null,n.createElement(S.o,{status:l.signature}),n.createElement(g.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:B}),n.createElement(N.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:P},"Learn more"))}function A({plugin:l}){const B=(0,r.wW)($);return l.hasUpdate&&!l.isCore&&l.type!==e.zV.renderer?n.createElement("p",{className:B.hasUpdate},"Update available!"):null}const $=l=>({hasUpdate:c.css`
      color: ${l.colors.text.secondary};
      font-size: ${l.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},21048:(T,y,t)=>{t.d(y,{L:()=>f});var n=t(52423),e=t(68404),g=t(72648);const f=({children:r,wrap:c,className:m})=>{const v=(0,g.l4)(),h=E(v,c);return e.createElement("div",{className:(0,n.cx)(h.container,m)},r)},E=(r,c)=>({container:n.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${c?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${r.spacing()};
      margin-right: ${r.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `})},21701:(T,y,t)=>{t.r(y),t.d(y,{default:()=>ee});var n=t(52423),e=t(68404),g=t(70356),f=t(37932),E=t(35645),r=t(72648),c=t(24799),m=t(53217),v=t(2594),h=t(61860),i=t(61744),S=t(79396),N=t(86245),L=t(43137),A=t(81168),$=t(21048),l=t(48996),B=t(39904),P=t(52081),I=t(51613),x=t(75260);function H({plugin:a}){return a.isEnterprise?e.createElement(P.Lh,{height:"auto",wrap:!0},e.createElement(x.IF,{plugin:a}),a.isDisabled&&e.createElement(x.SX,{error:a.error}),e.createElement(x.xh,{plugin:a})):e.createElement(P.Lh,{height:"auto",wrap:!0},e.createElement(I.o,{status:a.signature}),a.isDisabled&&e.createElement(x.SX,{error:a.error}),a.isInstalled&&e.createElement(x.oZ,null),e.createElement(x.xh,{plugin:a}))}function j({alt:a,className:u,src:o,height:s}){return e.createElement("img",{src:o,className:u,alt:a,loading:"lazy",height:s})}const R="48px";function w({plugin:a,pathName:u,displayMode:o=l.lL.Grid}){const s=(0,r.wW)(K),d=o===l.lL.List;return e.createElement("a",{href:`${u}/${a.id}`,className:(0,n.cx)(s.container,{[s.list]:d})},e.createElement(j,{src:a.info.logos.small,className:s.pluginLogo,height:R,alt:""}),e.createElement("h2",{className:(0,n.cx)(s.name,"plugin-name")},a.name),e.createElement("div",{className:(0,n.cx)(s.content,"plugin-content")},e.createElement("p",null,"By ",a.orgName),e.createElement(H,{plugin:a})),e.createElement("div",{className:s.pluginType},a.type&&e.createElement(B.J,{name:l.Co[a.type],title:`${a.type} plugin`})))}const K=a=>({container:n.css`
      display: grid;
      grid-template-columns: ${R} 1fr ${a.spacing(3)};
      grid-template-rows: auto;
      gap: ${a.spacing(2)};
      grid-auto-flow: row;
      background: ${a.colors.background.secondary};
      border-radius: ${a.shape.borderRadius()};
      padding: ${a.spacing(3)};
      transition: ${a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short})};

      &:hover {
        background: ${a.colors.emphasize(a.colors.background.secondary,.03)};
      }
    `,list:n.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${a.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:n.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${a.colors.text.secondary};
    `,pluginLogo:n.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:n.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${a.colors.text.secondary};
    `,name:n.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${a.typography.h4.fontSize};
      color: ${a.colors.text.primary};
      margin: 0;
    `}),X=({plugins:a,displayMode:u})=>{const o=u===l.lL.List,s=(0,r.wW)(Q),d=(0,g.TH)(),z=E.v.appSubUrl+d.pathname;return e.createElement("div",{className:(0,n.cx)(s.container,{[s.list]:o}),"data-testid":"plugin-list"},a.map(C=>e.createElement(w,{key:C.id,plugin:C,pathName:z,displayMode:u})))},Q=a=>({container:n.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${a.spacing(3)};
    `,list:n.css`
      grid-template-columns: 1fr;
    `});var V=t(70197),Y=t(14747);const J=(a,u=0,o=[])=>{const s=(0,e.useRef)(!0),d=[...o,s];return(0,V.Z)(()=>{if(s.current){s.current=!1;return}return a()},u,d)},k=({value:a,onSearch:u})=>{const[o,s]=(0,e.useState)(a);return J(()=>u(o??""),500,[o]),e.createElement(Y.H,{value:o,onKeyDown:d=>{(d.key==="Enter"||d.keyCode===13)&&u(d.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:d=>{s(d)},width:46})};var q=t(59210);const _=()=>({push:({query:a})=>{f.E1.partial(a)}});var W=t(74509);function ee({route:a}){const u=(0,g.TH)(),o=(0,f.Ox)(u.search),s=(0,A.useSelector)(p=>(0,N.ht)(p.navIndex,"plugins")),{displayMode:d,setDisplayMode:z}=(0,W.iY)(),C=(0,r.wW)(te),b=_(),ae=(0,W.y9)(),F=o.q||"",O=o.filterBy||"installed",D=o.filterByType||"all",G=o.sortBy||q.Nh.nameAsc,{isLoading:ne,error:M,plugins:le}=(0,W.GE)({query:F,filterBy:O,filterByType:D,sortBy:G}),U=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],se=p=>{b.push({query:{sortBy:p.value}})},Z=p=>{b.push({query:{filterBy:p}})},oe=p=>{b.push({query:{filterByType:p.value}})},re=p=>{b.push({query:{filterBy:"all",filterByType:"all",q:p}})};return M?(console.error(M.message),null):e.createElement(S.T,{navModel:s},e.createElement(S.T.Contents,null,E.v.featureToggles.dataConnectionsConsole&&(D==="all"||D==="datasource")&&e.createElement(L.l,{destinationPage:L.S.connectData}),e.createElement($.L,{wrap:!0},e.createElement(c.g,{label:"Search"},e.createElement(k,{value:F,onSearch:re})),e.createElement($.L,{wrap:!0,className:C.actionBar},e.createElement(c.g,{label:"Type"},e.createElement(m.Ph,{"aria-label":"Plugin type filter",value:D,onChange:oe,width:18,options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})),ae?e.createElement(c.g,{label:"State"},e.createElement(v.S,{value:O,onChange:Z,options:U})):e.createElement(h.u,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top"},e.createElement("div",null,e.createElement(c.g,{label:"State"},e.createElement(v.S,{disabled:!0,value:O,onChange:Z,options:U})))),e.createElement(c.g,{label:"Sort"},e.createElement(m.Ph,{"aria-label":"Sort Plugins List",width:24,value:G,onChange:se,options:[{value:"nameAsc",label:"By name (A-Z)"},{value:"nameDesc",label:"By name (Z-A)"},{value:"updated",label:"By updated date"},{value:"published",label:"By published date"},{value:"downloads",label:"By downloads"}]})),e.createElement(c.g,{label:"View"},e.createElement(v.S,{className:C.displayAs,value:d,onChange:z,options:[{value:l.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:l.lL.List,icon:"list-ul",description:"Display plugins in list"}]})))),e.createElement("div",{className:C.listWrap},ne?e.createElement(i.u,{className:n.css`
                margin-bottom: 0;
              `,text:"Loading results"}):e.createElement(X,{plugins:le,displayMode:d}))))}const te=a=>({actionBar:n.css`
    ${a.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:n.css`
    margin-top: ${a.spacing(2)};
  `,displayAs:n.css`
    svg {
      margin-right: 0;
    }
  `})}}]);

//# sourceMappingURL=PluginListPage.47e5d8684f3ee0f91ac0.js.map