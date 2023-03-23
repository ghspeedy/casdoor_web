import{R as c,s as d,l as u,i as n,j as i,B as h,m as p,n as m}from"./index-ba7d0766.js";import{s as g,b as x,c as f}from"./LdapBackend-3f76eeae.js";import{T as y}from"./Table-c2bde13f.js";import{P as U}from"./index-2f07707f.js";class w extends c.Component{constructor(t){super(t),this.state={ldapId:t.match.params.ldapId,organizationName:t.match.params.organizationName,ldap:null,users:[],existUuids:[],selectedUsers:[]}}UNSAFE_componentWillMount(){this.getLdap()}syncUsers(){const t=this.state.selectedUsers;if(t===null||t.length===0){d("error","Please select al least 1 user first");return}g(this.state.ldap.owner,this.state.ldap.id,t).then(a=>{if(a.status==="ok"){const r=a.data.exist,e=a.data.failed,s=[],l=[];(!r||r.length===0)&&(!e||e.length===0)?u(`/organizations/${this.state.ldap.owner}/users`):(r&&r.length>0&&(r.forEach(o=>{s.push(o.cn)}),d("error",`User [${s}] is already exist`)),e&&e.length>0&&(e.forEach(o=>{l.push(o.cn)}),d("error",`Sync [${l}] failed`)))}else d("error",a.msg)})}getLdap(){x(this.state.organizationName,this.state.ldapId).then(t=>{t.status==="ok"?(this.setState(a=>(a.ldap=t.data,a)),this.getLdapUser()):d("error",t.msg)})}getLdapUser(){f(this.state.organizationName,this.state.ldapId).then(t=>{t.status==="ok"?this.setState(a=>{var r;return a.users=t.data.users,a.existUuids=((r=t.data2)==null?void 0:r.length)>0?t.data2:[],a}):d("error",t.msg)})}buildValArray(t,a){const r=[];return t!==null&&t.length>0&&t.forEach(e=>{const s=e[a];r.includes(s)||r.push(s)}),r}buildFilter(t,a){const r=[];return t!==null&&t.length>0&&this.buildValArray(t,a).forEach(s=>{r.push({text:s,value:s})}),r}renderTable(t){const a=[{title:n.t("ldap:CN"),dataIndex:"cn",key:"cn",sorter:(e,s)=>e.cn.localeCompare(s.cn)},{title:n.t("ldap:UidNumber / Uid"),dataIndex:"uidNumber",key:"uidNumber",width:"200px",sorter:(e,s)=>e.uidNumber.localeCompare(s.uidNumber),render:(e,s,l)=>`${e} / ${s.uid}`},{title:n.t("ldap:Group ID"),dataIndex:"groupId",key:"groupId",width:"140px",sorter:(e,s)=>e.groupId.localeCompare(s.groupId),filters:this.buildFilter(this.state.users,"groupId"),onFilter:(e,s)=>s.groupId.indexOf(e)===0},{title:n.t("general:Email"),dataIndex:"email",key:"email",width:"240px",sorter:(e,s)=>e.email.localeCompare(s.email)},{title:n.t("general:Phone"),dataIndex:"phone",key:"phone",width:"160px",sorter:(e,s)=>e.phone.localeCompare(s.phone)},{title:n.t("user:Address"),dataIndex:"address",key:"address",sorter:(e,s)=>e.address.localeCompare(s.address)}],r={onChange:(e,s)=>{this.setState(l=>(l.selectedUsers=s,l))},getCheckboxProps:e=>({disabled:this.state.existUuids.indexOf(e.uuid)!==-1})};return i.jsx("div",{children:i.jsx(y,{rowSelection:r,columns:a,dataSource:t,rowKey:"uuid",bordered:!0,pagination:{defaultPageSize:10,showQuickJumper:!0,showSizeChanger:!0},title:()=>{var e;return i.jsxs("div",{children:[i.jsx("span",{children:(e=this.state.ldap)==null?void 0:e.serverName}),i.jsx(U,{placement:"right",title:"Please confirm to sync selected users",onConfirm:()=>this.syncUsers(),children:i.jsx(h,{type:"primary",style:{marginLeft:"10px"},children:n.t("general:Sync")})}),i.jsxs(h,{style:{marginLeft:"20px"},onClick:()=>u(`/ldap/${this.state.organizationName}/${this.state.ldapId}`),children:[n.t("general:Edit")," LDAP"]})]})},loading:t===null})})}render(){return i.jsxs("div",{children:[i.jsx(p,{style:{width:"100%",justifyContent:"center"},children:i.jsx(m,{span:22,children:this.renderTable(this.state.users)})}),i.jsx("div",{style:{marginTop:"20px",marginLeft:"40px"},children:i.jsx(h,{style:{marginLeft:"20px"},type:"primary",size:"large",onClick:()=>{this.props.history.push(`/organizations/${this.state.organizationName}`)},children:n.t("general:Save & Exit")})})]})}}export{w as default};