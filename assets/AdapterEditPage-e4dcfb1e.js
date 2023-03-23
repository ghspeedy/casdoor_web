var A=Object.defineProperty;var C=(x,s,t)=>s in x?A(x,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[s]=t;var j=(x,s,t)=>(C(x,typeof s!="symbol"?s+"":s,t),t);import{R as f,E as w,k as F,b as P,s as l,i as a,j as e,B as u,I as c,T as S,f as I,v as E,e as o,m as p,n as r,w as h,q as v,W as b}from"./index-f0baa7a0.js";import{s as k,U as z,A as $,R,b as V,u as L,d as N}from"./AdapterBackend-1d0d39de.js";import"./javascript-441bd1dd.js";import{g as M}from"./ModelBackend-19eca243.js";import{T as O}from"./Table-f650b5e6.js";import{P as D}from"./index-9d454b6e.js";import{E as U}from"./EditOutlined-4f6290b9.js";import{D as q}from"./DeleteOutlined-7482b196.js";import{I as Q}from"./index-c8446531.js";import{S as W}from"./index-821d4c24.js";import"./DeleteOutlined-25685737.js";import"./UpOutlined-7082c42f.js";class B extends f.Component{constructor(t){super(t);j(this,"count",0);j(this,"pageSize",10);j(this,"isEditing",t=>t===this.state.editingIndex);j(this,"edit",(t,d)=>{this.setState({editingIndex:d,oldPolicy:w(t)})});j(this,"cancel",(t,d)=>{Object.keys(t[this.getIndex(d)]).forEach(i=>{t[this.getIndex(d)][i]=this.state.oldPolicy[i]}),this.updateTable(t),this.setState({editingIndex:"",oldPolicy:""}),this.state.add&&(this.deleteRow(this.state.policyLists,d),this.setState({add:!1}))});this.state={policyLists:[],loading:!1,editingIndex:"",oldPolicy:"",add:!1,page:1}}getIndex(t){return t+(this.state.page-1)*10}UNSAFE_componentWillMount(){this.props.mode==="edit"&&this.synPolicies()}updateTable(t){this.setState({policyLists:t})}updateField(t,d,i,g){t[this.getIndex(d)][i]=g,this.updateTable(t)}addRow(t){const d={key:this.count,Ptype:"p"};t===void 0&&(t=[]),t=F(t,d,"top"),this.count=this.count+1,this.updateTable(t),this.edit(d,0),this.setState({page:1,add:!0})}deleteRow(t,d){t=P(t,this.getIndex(d)),this.updateTable(t)}save(t,d){this.state.add?this.addPolicy(t,d):this.updatePolicy(t,d)}synPolicies(){this.setState({loading:!0}),k(this.props.owner,this.props.name).then(t=>{if(t.status==="ok"){l("success",a.t("adapter:Sync policies successfully"));const d=t.data;d.map((i,g)=>{i.key=g}),this.count=d.length,this.setState({policyLists:d})}else l("error",`${a.t("adapter:Failed to sync policies")}: ${t.msg}`);this.setState({loading:!1})}).catch(t=>{l("error",`${a.t("general:Failed to connect to server")}: ${t}`)})}updatePolicy(t,d){z(this.props.owner,this.props.name,[this.state.oldPolicy,t[d]]).then(i=>{i.status==="ok"?(this.setState({editingIndex:"",oldPolicy:""}),l("success",a.t("general:Successfully saved"))):l("error",`${a.t("general:Failed to save")}: ${i.msg}`)})}addPolicy(t,d){$(this.props.owner,this.props.name,t[d]).then(i=>{i.status==="ok"?(this.setState({editingIndex:"",oldPolicy:"",add:!1}),i.data!=="Affected"?(i.msg=a.t("adapter:Duplicated policy rules"),l("error",`${a.t("general:Failed to add")}: ${i.msg}`)):l("success",a.t("general:Successfully added"))):l("error",`${a.t("general:Failed to add")}: ${i.msg}`)})}deletePolicy(t,d){R(this.props.owner,this.props.name,t[this.getIndex(d)]).then(i=>{i.status==="ok"?(l("success",a.t("general:Successfully deleted")),this.deleteRow(t,d)):l("error",a.t("general:Failed to delete"))})}renderTable(t){const d=[{title:"Rule Type",dataIndex:"Ptype",width:"100px"},{title:"V0",dataIndex:"V0",width:"100px",render:(i,g,n)=>this.isEditing(n)?e.jsx(c,{value:i,onChange:m=>{this.updateField(t,n,"V0",m.target.value)}}):i},{title:"V1",dataIndex:"V1",width:"100px",render:(i,g,n)=>this.isEditing(n)?e.jsx(c,{value:i,onChange:m=>{this.updateField(t,n,"V1",m.target.value)}}):i},{title:"V2",dataIndex:"V2",width:"100px",render:(i,g,n)=>this.isEditing(n)?e.jsx(c,{value:i,onChange:m=>{this.updateField(t,n,"V2",m.target.value)}}):i},{title:"V3",dataIndex:"V3",width:"100px",render:(i,g,n)=>this.isEditing(n)?e.jsx(c,{value:i,onChange:m=>{this.updateField(t,n,"V3",m.target.value)}}):i},{title:"V4",dataIndex:"V4",width:"100px",render:(i,g,n)=>this.isEditing(n)?e.jsx(c,{value:i,onChange:m=>{this.updateField(t,n,"V4",m.target.value)}}):i},{title:"V5",dataIndex:"V5",width:"100px",render:(i,g,n)=>this.isEditing(n)?e.jsx(c,{value:i,onChange:m=>{this.updateField(t,n,"V5",m.target.value)}}):i},{title:"Option",key:"option",width:"100px",render:(i,g,n)=>this.isEditing(n)?e.jsxs("span",{children:[e.jsx(u,{style:{marginRight:8},onClick:()=>this.save(t,n),children:"Save"}),e.jsx(D,{title:"Sure to cancel?",onConfirm:()=>this.cancel(t,n),children:e.jsx("a",{children:"Cancel"})})]}):e.jsxs("div",{children:[e.jsx(S,{placement:"topLeft",title:"Edit",children:e.jsx(u,{disabled:this.state.editingIndex!=="",style:{marginRight:"5px"},icon:e.jsx(U,{}),size:"small",onClick:()=>this.edit(g,n)})}),e.jsx(S,{placement:"topLeft",title:"Delete",children:e.jsx(u,{disabled:this.state.editingIndex!=="",style:{marginRight:"5px"},icon:e.jsx(q,{}),size:"small",onClick:()=>this.deletePolicy(t,n)})})]})}];return e.jsx(O,{pagination:{defaultPageSize:this.pageSize,onChange:i=>this.setState({page:i}),disabled:this.state.editingIndex!=="",current:this.state.page},columns:d,dataSource:t,rowKey:"key",size:"middle",bordered:!0,loading:this.state.loading,title:()=>e.jsx("div",{children:e.jsx(u,{disabled:this.state.editingIndex!=="",style:{marginRight:"5px"},type:"primary",size:"small",onClick:()=>this.addRow(t),children:a.t("general:Add")})})})}render(){return e.jsxs(f.Fragment,{children:[e.jsx(u,{type:"primary",disabled:this.state.editingIndex!=="",onClick:()=>{this.synPolicies()},children:a.t("general:Sync")}),this.renderTable(this.state.policyLists)]})}}const{Option:T}=v;class de extends f.Component{constructor(s){super(s),this.state={classes:s,owner:s.organizationName!==void 0?s.organizationName:s.match.params.organizationName,adapterName:s.match.params.adapterName,adapter:null,organizations:[],models:[],mode:s.location.mode!==void 0?s.location.mode:"edit"}}UNSAFE_componentWillMount(){this.getAdapter(),this.getOrganizations()}getAdapter(){V(this.state.owner,this.state.adapterName).then(s=>{s.status==="ok"&&(this.setState({adapter:s.data}),this.getModels(this.state.owner))})}getOrganizations(){I("admin").then(s=>{this.setState({organizations:s.msg===void 0?s:[]})})}getModels(s){M(s).then(t=>{this.setState({models:t})})}parseAdapterField(s,t){return["port"].includes(s)&&(t=b(t)),t}updateAdapterField(s,t){t=this.parseAdapterField(s,t);const d=this.state.adapter;d[s]=t,this.setState({adapter:d})}renderAdapter(){return e.jsxs(E,{size:"small",title:e.jsxs("div",{children:[this.state.mode==="add"?a.t("adapter:New Adapter"):a.t("adapter:Edit Adapter"),"    ",e.jsx(u,{onClick:()=>this.submitAdapterEdit(!1),children:a.t("general:Save")}),e.jsx(u,{style:{marginLeft:"20px"},type:"primary",onClick:()=>this.submitAdapterEdit(!0),children:a.t("general:Save & Exit")}),this.state.mode==="add"?e.jsx(u,{style:{marginLeft:"20px"},onClick:()=>this.deleteAdapter(),children:a.t("general:Cancel")}):null]}),style:o()?{margin:"5px"}:{},type:"inner",children:[e.jsxs(p,{style:{marginTop:"10px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("general:Organization"),a.t("general:Organization - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(v,{virtual:!1,style:{width:"100%"},value:this.state.adapter.organization,onChange:s=>{this.getModels(s),this.updateAdapterField("organization",s)},children:this.state.organizations.map((s,t)=>e.jsx(T,{value:s.name,children:s.name},t))})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("general:Name"),a.t("general:Name - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(c,{value:this.state.adapter.name,onChange:s=>{this.updateAdapterField("name",s.target.value)}})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("provider:Type"),a.t("provider:Type - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(v,{virtual:!1,style:{width:"100%"},value:this.state.adapter.type,onChange:s=>{this.updateAdapterField("type",s);const t=this.state.adapter;this.setState({adapter:t})},children:["Database"].map((s,t)=>e.jsx(T,{value:s,children:s},t))})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("provider:Host"),a.t("provider:Host - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(c,{value:this.state.adapter.host,onChange:s=>{this.updateAdapterField("host",s.target.value)}})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("provider:Port"),a.t("provider:Port - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(Q,{value:this.state.adapter.port,onChange:s=>{this.updateAdapterField("port",s)}})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("general:User"),a.t("general:User - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(c,{value:this.state.adapter.user,onChange:s=>{this.updateAdapterField("user",s.target.value)}})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("general:Password"),a.t("general:Password - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(c,{value:this.state.adapter.password,onChange:s=>{this.updateAdapterField("password",s.target.value)}})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("syncer:Database type"),a.t("syncer:Database type - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(v,{virtual:!1,style:{width:"100%"},value:this.state.adapter.databaseType,onChange:s=>{this.updateAdapterField("databaseType",s)},children:[{id:"mysql",name:"MySQL"},{id:"postgres",name:"PostgreSQL"},{id:"mssql",name:"SQL Server"},{id:"oracle",name:"Oracle"},{id:"sqlite3",name:"Sqlite 3"}].map((s,t)=>e.jsx(T,{value:s.id,children:s.name},t))})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("syncer:Database"),a.t("syncer:Database - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(c,{value:this.state.adapter.database,onChange:s=>{this.updateAdapterField("database",s.target.value)}})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("syncer:Table"),a.t("syncer:Table - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(c,{value:this.state.adapter.table,disabled:this.state.adapter.type==="Keycloak",onChange:s=>{this.updateAdapterField("table",s.target.value)}})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("general:Model"),a.t("general:Model - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(v,{virtual:!1,style:{width:"100%"},value:this.state.adapter.model,onChange:s=>{this.updateAdapterField("model",s)},children:this.state.models.map((s,t)=>e.jsx(T,{value:s.name,children:s.name},t))})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?22:2,children:[h(a.t("adapter:Policies"),a.t("adapter:Policies - Tooltip"))," :"]}),e.jsx(r,{span:22,children:e.jsx(B,{owner:this.state.owner,name:this.state.adapterName,mode:this.state.mode})})]}),e.jsxs(p,{style:{marginTop:"20px"},children:[e.jsxs(r,{style:{marginTop:"5px"},span:o()?19:2,children:[h(a.t("general:Is enabled"),a.t("general:Is enabled - Tooltip"))," :"]}),e.jsx(r,{span:1,children:e.jsx(W,{checked:this.state.adapter.isEnabled,onChange:s=>{this.updateAdapterField("isEnabled",s)}})})]})]})}submitAdapterEdit(s){const t=w(this.state.adapter);L(this.state.adapter.owner,this.state.adapterName,t).then(d=>{d.status==="ok"?(l("success",a.t("general:Successfully saved")),this.setState({adapterName:this.state.adapter.name}),s?this.props.history.push("/adapters"):this.props.history.push(`/adapters/${this.state.owner}/${this.state.adapter.name}`)):(l("error",`${a.t("general:Failed to save")}: ${d.msg}`),this.updateAdapterField("name",this.state.adapterName))}).catch(d=>{l("error",`${a.t("general:Failed to connect to server")}: ${d}`)})}deleteAdapter(){N(this.state.adapter).then(s=>{s.status==="ok"?this.props.history.push("/adapters"):l("error",`${a.t("general:Failed to delete")}: ${s.msg}`)}).catch(s=>{l("error",`${a.t("general:Failed to connect to server")}: ${s}`)})}render(){return e.jsxs("div",{children:[this.state.adapter!==null?this.renderAdapter():null,e.jsxs("div",{style:{marginTop:"20px",marginLeft:"40px"},children:[e.jsx(u,{size:"large",onClick:()=>this.submitAdapterEdit(!1),children:a.t("general:Save")}),e.jsx(u,{style:{marginLeft:"20px"},type:"primary",size:"large",onClick:()=>this.submitAdapterEdit(!0),children:a.t("general:Save & Exit")}),this.state.mode==="add"?e.jsx(u,{style:{marginLeft:"20px"},size:"large",onClick:()=>this.deleteAdapter(),children:a.t("general:Cancel")}):null]})]})}}export{de as default};
