"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2613],{25055:(F,c,a)=>{a.r(c),a.d(c,{default:()=>K});var d=a(52423),t=a(68404),m=a(54291),O=a(24844),h=a(35224),M=a(72648),f=a(79396),T=a(34177),v=a(54294),E=a(81168),g=a(37877),C=a(31460),u=a(77839),U=a(50432),R=a(56130),D=a(19349),A=a(87464);const L=({dashboard:e})=>{const i=(0,E.useDispatch)(),l=o=>{i((0,v.YT)(o))};return t.createElement(h.X,{title:e.title,buttonOverflowAlignment:"right"},!e.timepicker.hidden&&t.createElement(g.C,{dashboard:e,onChangeTimeZone:l}))},B=e=>{const{match:i,route:l,location:o}=e,I=(0,E.useDispatch)(),p=(0,T.p)(),P=(0,m.Z)(e),y=(0,M.wW)(W),r=(0,E.useSelector)(s=>s.dashboard),n=r.getModel();return(0,t.useEffect)(()=>{I((0,A.mV)({routeName:l.routeName,fixUrl:!1,accessToken:i.params.accessToken,keybindingSrv:p.keybindings}))},[]),(0,t.useEffect)(()=>{if(P?.location.search!==o.search){const s=P?.queryParams,_=e.queryParams;(_?.from!==s?.from||_?.to!==s?.to)&&!n?.timepicker.hidden&&(0,D.$t)().updateTimeRangeFromUrl(),!s?.refresh&&_?.refresh&&(0,D.$t)().setAutoRefresh(_.refresh)}},[P,o.search,e.queryParams,n?.timepicker.hidden]),n?t.createElement(f.T,{pageNav:{text:n.title},layout:O.Qz.Custom,toolbar:t.createElement(L,{dashboard:n})},r.initError&&t.createElement(C.u,{initError:r.initError}),t.createElement("div",{className:y.gridContainer},t.createElement(R.Z,{dashboard:n,isEditable:!1,viewPanel:null,editPanel:null})),t.createElement(U.Go,null)):t.createElement(u.B,{initPhase:r.initPhase})},W=e=>({gridContainer:(0,d.css)({flex:1,padding:e.spacing(0,2,2,2),overflow:"auto"})}),K=B}}]);

//# sourceMappingURL=PublicDashboardPage.11901f831e39a404befd.js.map