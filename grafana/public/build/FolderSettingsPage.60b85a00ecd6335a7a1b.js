"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4827],{90315:(O,l,t)=>{t.r(l),t.d(l,{FolderSettingsPage:()=>i,default:()=>M});var a=t(68404),E=t(36635),_=t(14835),r=t(31403),c=t(97063),d=t(79396),m=t(86245),p=t(45984),o=t(61986),g=t(60492),h=t(15932);const{Input:f}=_.LegacyForms,D=(n,s)=>{const e=s.match.params.uid;return{pageNav:(0,m.ht)(n.navIndex,`folder-settings-${e}`,(0,g._)(2)),folderUid:e,folder:n.folder}},P={getFolderByUid:o.Pb,saveFolder:o.OD,setFolderTitle:h.Ss,deleteFolder:o.Go},v=(0,E.connect)(D,P);class i extends a.PureComponent{constructor(s){super(s),this.onTitleChange=e=>{this.props.setFolderTitle(e.target.value)},this.onSave=async e=>{e.preventDefault(),e.stopPropagation(),this.setState({isLoading:!0}),await this.props.saveFolder(this.props.folder),this.setState({isLoading:!1})},this.onDelete=e=>{e.stopPropagation(),e.preventDefault();const u="Do you want to delete this folder and all its dashboards and alerts?";c.Z.publish(new p.VJ({title:"Delete",text:u,icon:"trash-alt",yesText:"Delete",onConfirm:()=>{this.props.deleteFolder(this.props.folder.uid)}}))},this.state={isLoading:!1}}componentDidMount(){this.props.getFolderByUid(this.props.folderUid)}render(){const{pageNav:s,folder:e}=this.props;return a.createElement(d.T,{navId:"dashboards/browse",pageNav:s.main},a.createElement(d.T.Contents,{isLoading:this.state.isLoading},a.createElement("h3",{className:"page-sub-heading"},"Folder settings"),a.createElement("div",{className:"section gf-form-group"},a.createElement("form",{name:"folderSettingsForm",onSubmit:this.onSave},a.createElement("div",{className:"gf-form"},a.createElement("label",{htmlFor:"folder-title",className:"gf-form-label width-7"},"Name"),a.createElement(f,{type:"text",className:"gf-form-input width-30",id:"folder-title",value:e.title,onChange:this.onTitleChange})),a.createElement("div",{className:"gf-form-button-row"},a.createElement(r.zx,{type:"submit",disabled:!e.canSave||!e.hasChanged},"Save"),a.createElement(r.zx,{variant:"destructive",onClick:this.onDelete,disabled:!e.canDelete},"Delete"))))))}}const M=v(i)}}]);

//# sourceMappingURL=FolderSettingsPage.60b85a00ecd6335a7a1b.js.map