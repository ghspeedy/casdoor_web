import{R as C,k as w,b as F,p as T,i as t,j as e,I as p,q as y,T as u,B as h,D as k,m as l,n as a,f as I,v as R,e as i,w as o,cj as L,E,s as x,W as z}from"./index-f0baa7a0.js";import{b as N,u as A,d as D}from"./SyncerBackend-538f4193.js";import{S as b}from"./index-821d4c24.js";import{T as O}from"./Table-f650b5e6.js";import{U as P}from"./UpOutlined-edefe85e.js";import{D as U}from"./DeleteOutlined-7482b196.js";import{C as $}from"./index-b6c40765.js";import"./javascript-441bd1dd.js";import{I as v}from"./index-c8446531.js";import{L as B}from"./LinkOutlined-c83e38a9.js";import"./UpOutlined-7082c42f.js";import"./DeleteOutlined-25685737.js";const{Option:S}=y;class H extends C.Component{constructor(s){super(s),this.state={classes:s}}updateTable(s){this.props.onUpdateTable(s)}updateField(s,n,r,m){s[n][r]=m,this.updateTable(s)}addRow(s){const n={name:`column${s.length}`,type:"string",values:[]};s===void 0&&(s=[]),s=w(s,n),this.updateTable(s)}deleteRow(s,n){s=F(s,n),this.updateTable(s)}upRow(s,n){s=T(s,n-1,n),this.updateTable(s)}downRow(s,n){s=T(s,n,n+1),this.updateTable(s)}renderTable(s){const n=[{title:t.t("syncer:Column name"),dataIndex:"name",key:"name",render:(r,m,d)=>e.jsx(p,{value:r,onChange:c=>{this.updateField(s,d,"name",c.target.value)}})},{title:t.t("syncer:Column type"),dataIndex:"type",key:"type",render:(r,m,d)=>e.jsx(y,{virtual:!1,style:{width:"100%"},value:r,onChange:c=>{this.updateField(s,d,"type",c)},children:["string","integer","boolean"].map((c,g)=>e.jsx(S,{value:c,children:c},g))})},{title:t.t("syncer:Casdoor column"),dataIndex:"casdoorName",key:"casdoorName",render:(r,m,d)=>e.jsx(y,{virtual:!1,style:{width:"100%"},value:r,onChange:c=>{this.updateField(s,d,"casdoorName",c)},children:["Name","CreatedTime","UpdatedTime","Id","Type","Password","PasswordSalt","DisplayName","FirstName","LastName","Avatar","PermanentAvatar","Email","EmailVerified","Phone","Location","Address","Affiliation","Title","IdCardType","IdCard","Homepage","Bio","Tag","Region","Language","Gender","Birthday","Education","Score","Ranking","IsDefaultAvatar","IsOnline","IsAdmin","IsGlobalAdmin","IsForbidden","IsDeleted","CreatedIp"].map((c,g)=>e.jsx(S,{value:c,children:c},g))})},{title:t.t("syncer:Is hashed"),dataIndex:"isHashed",key:"isHashed",render:(r,m,d)=>e.jsx(b,{checked:r,onChange:c=>{this.updateField(s,d,"isHashed",c)}})},{title:t.t("general:Action"),key:"action",width:"100px",render:(r,m,d)=>e.jsxs("div",{children:[e.jsx(u,{placement:"bottomLeft",title:t.t("general:Up"),children:e.jsx(h,{style:{marginRight:"5px"},disabled:d===0,icon:e.jsx(P,{}),size:"small",onClick:()=>this.upRow(s,d)})}),e.jsx(u,{placement:"topLeft",title:t.t("general:Down"),children:e.jsx(h,{style:{marginRight:"5px"},disabled:d===s.length-1,icon:e.jsx(k,{}),size:"small",onClick:()=>this.downRow(s,d)})}),e.jsx(u,{placement:"topLeft",title:t.t("general:Delete"),children:e.jsx(h,{icon:e.jsx(U,{}),size:"small",onClick:()=>this.deleteRow(s,d)})})]})}];return e.jsx(O,{rowKey:"index",columns:n,dataSource:s,size:"middle",bordered:!0,pagination:!1,title:()=>e.jsxs("div",{children:[this.props.title,"    ",e.jsx(h,{style:{marginRight:"5px"},type:"primary",size:"small",onClick:()=>this.addRow(s),children:t.t("general:Add")})]})})}render(){return e.jsx("div",{children:e.jsx(l,{style:{marginTop:"20px"},children:e.jsx(a,{span:24,children:this.renderTable(this.props.table)})})})}}const{Option:j}=y;class ee extends C.Component{constructor(s){super(s),this.state={classes:s,syncerName:s.match.params.syncerName,syncer:null,organizations:[],mode:s.location.mode!==void 0?s.location.mode:"edit"}}UNSAFE_componentWillMount(){this.getSyncer(),this.getOrganizations()}getSyncer(){N("admin",this.state.syncerName).then(s=>{this.setState({syncer:s})})}getOrganizations(){I("admin").then(s=>{this.setState({organizations:s.msg===void 0?s:[]})})}parseSyncerField(s,n){return["port"].includes(s)&&(n=z(n)),n}updateSyncerField(s,n){n=this.parseSyncerField(s,n);const r=this.state.syncer;r[s]=n,this.setState({syncer:r})}renderSyncer(){return e.jsxs(R,{size:"small",title:e.jsxs("div",{children:[this.state.mode==="add"?t.t("syncer:New Syncer"):t.t("syncer:Edit Syncer"),"    ",e.jsx(h,{onClick:()=>this.submitSyncerEdit(!1),children:t.t("general:Save")}),e.jsx(h,{style:{marginLeft:"20px"},type:"primary",onClick:()=>this.submitSyncerEdit(!0),children:t.t("general:Save & Exit")}),this.state.mode==="add"?e.jsx(h,{style:{marginLeft:"20px"},onClick:()=>this.deleteSyncer(),children:t.t("general:Cancel")}):null]}),style:i()?{margin:"5px"}:{},type:"inner",children:[e.jsxs(l,{style:{marginTop:"10px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("general:Organization"),t.t("general:Organization - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(y,{virtual:!1,style:{width:"100%"},value:this.state.syncer.organization,onChange:s=>{this.updateSyncerField("organization",s)},children:this.state.organizations.map((s,n)=>e.jsx(j,{value:s.name,children:s.name},n))})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("general:Name"),t.t("general:Name - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.name,onChange:s=>{this.updateSyncerField("name",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("provider:Type"),t.t("provider:Type - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(y,{virtual:!1,style:{width:"100%"},value:this.state.syncer.type,onChange:s=>{this.updateSyncerField("type",s);const n=this.state.syncer;n.tableColumns=L(this.state.syncer),n.table=s==="Keycloak"?"user_entity":this.state.syncer.table,this.setState({syncer:n})},children:["Database","LDAP","Keycloak"].map((s,n)=>e.jsx(j,{value:s,children:s},n))})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("provider:Host"),t.t("provider:Host - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.host,onChange:s=>{this.updateSyncerField("host",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("provider:Port"),t.t("provider:Port - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(v,{value:this.state.syncer.port,onChange:s=>{this.updateSyncerField("port",s)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("general:User"),t.t("general:User - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.user,onChange:s=>{this.updateSyncerField("user",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("general:Password"),t.t("general:Password - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.password,onChange:s=>{this.updateSyncerField("password",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Database type"),t.t("syncer:Database type - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(y,{virtual:!1,style:{width:"100%"},value:this.state.syncer.databaseType,onChange:s=>{this.updateSyncerField("databaseType",s)},children:[{id:"mysql",name:"MySQL"},{id:"postgres",name:"PostgreSQL"},{id:"mssql",name:"SQL Server"},{id:"oracle",name:"Oracle"},{id:"sqlite3",name:"Sqlite 3"}].map((s,n)=>e.jsx(j,{value:s.id,children:s.name},n))})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Database"),t.t("syncer:Database - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.database,onChange:s=>{this.updateSyncerField("database",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Table"),t.t("syncer:Table - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.table,disabled:this.state.syncer.type==="Keycloak",onChange:s=>{this.updateSyncerField("table",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Table primary key"),t.t("syncer:Table primary key - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.tablePrimaryKey,onChange:s=>{this.updateSyncerField("tablePrimaryKey",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Table columns"),t.t("syncer:Table columns - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(H,{title:t.t("syncer:Table columns"),table:this.state.syncer.tableColumns,onUpdateTable:s=>{this.updateSyncerField("tableColumns",s)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Affiliation table"),t.t("syncer:Affiliation table - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{value:this.state.syncer.affiliationTable,onChange:s=>{this.updateSyncerField("affiliationTable",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Avatar base URL"),t.t("syncer:Avatar base URL - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(p,{prefix:e.jsx(B,{}),value:this.state.syncer.avatarBaseUrl,onChange:s=>{this.updateSyncerField("avatarBaseUrl",s.target.value)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Sync interval"),t.t("syncer:Sync interval - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx(v,{value:this.state.syncer.syncInterval,onChange:s=>{this.updateSyncerField("syncInterval",s)}})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?22:2,children:[o(t.t("syncer:Error text"),t.t("syncer:Error text - Tooltip"))," :"]}),e.jsx(a,{span:22,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx($,{value:this.state.syncer.errorText,options:{mode:"javascript",theme:"material-darker"},onBeforeChange:(s,n,r)=>{this.updateSyncerField("errorText",r)}})})})]}),e.jsxs(l,{style:{marginTop:"20px"},children:[e.jsxs(a,{style:{marginTop:"5px"},span:i()?19:2,children:[o(t.t("general:Is enabled"),t.t("general:Is enabled - Tooltip"))," :"]}),e.jsx(a,{span:1,children:e.jsx(b,{checked:this.state.syncer.isEnabled,onChange:s=>{this.updateSyncerField("isEnabled",s)}})})]})]})}submitSyncerEdit(s){const n=E(this.state.syncer);A(this.state.syncer.owner,this.state.syncerName,n).then(r=>{r.status==="ok"?(x("success",t.t("general:Successfully saved")),this.setState({syncerName:this.state.syncer.name}),s?this.props.history.push("/syncers"):this.props.history.push(`/syncers/${this.state.syncer.name}`)):(x("error",`${t.t("general:Failed to save")}: ${r.msg}`),this.updateSyncerField("name",this.state.syncerName))}).catch(r=>{x("error",`${t.t("general:Failed to connect to server")}: ${r}`)})}deleteSyncer(){D(this.state.syncer).then(s=>{s.status==="ok"?this.props.history.push("/syncers"):x("error",`${t.t("general:Failed to delete")}: ${s.msg}`)}).catch(s=>{x("error",`${t.t("general:Failed to connect to server")}: ${s}`)})}render(){return e.jsxs("div",{children:[this.state.syncer!==null?this.renderSyncer():null,e.jsxs("div",{style:{marginTop:"20px",marginLeft:"40px"},children:[e.jsx(h,{size:"large",onClick:()=>this.submitSyncerEdit(!1),children:t.t("general:Save")}),e.jsx(h,{style:{marginLeft:"20px"},type:"primary",size:"large",onClick:()=>this.submitSyncerEdit(!0),children:t.t("general:Save & Exit")}),this.state.mode==="add"?e.jsx(h,{style:{marginLeft:"20px"},size:"large",onClick:()=>this.deleteSyncer(),children:t.t("general:Cancel")}):null]})]})}}export{ee as default};
