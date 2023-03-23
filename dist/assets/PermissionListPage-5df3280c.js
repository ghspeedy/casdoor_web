var P=Object.defineProperty;var k=(d,a,t)=>a in d?P(d,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[a]=t;var h=(d,a,t)=>(k(d,typeof a!="symbol"?a+"":a,t),t);import{g as S,s as p,i as e,b as v,j as o,L as g,c as x,W as u,Y as m,e as b,f,B as y,Z as A,P as $,k as C}from"./index-a4571b31.js";import{h as T}from"./moment-fbc5633a.js";import{a as I,d as F,g as M,b as N}from"./PermissionBackend-ed94a0cf.js";import{B as R}from"./BaseListPage-cf3b6a63.js";import{P as z}from"./PopconfirmModal-c2d7912b.js";import{S as D}from"./index-c1f94e42.js";import{T as B}from"./Table-4974f722.js";import"./index-3220aa08.js";class Z extends R{constructor(){super(...arguments);h(this,"fetch",(t={})=>{let i=t.searchedColumn,c=t.searchText;const r=t.sortField,s=t.sortOrder;t.type!==void 0&&t.type!==null&&(i="type",c=t.type),this.setState({loading:!0}),(A(this.props.account)?M:N)($(this.props.account)?"":this.props.account.owner,t.pagination.current,t.pagination.pageSize,i,c,r,s).then(l=>{l.status==="ok"?this.setState({loading:!1,data:l.data,pagination:{...t.pagination,total:l.data2},searchText:t.searchText,searchedColumn:t.searchedColumn}):C(l)&&this.setState({loading:!1,isAuthorized:!1})})})}newPermission(){const t=S();return{owner:this.props.account.owner,name:`permission_${t}`,createdTime:T().format(),displayName:`New Permission - ${t}`,users:[`${this.props.account.owner}/${this.props.account.name}`],roles:[],domains:[],resourceType:"Application",resources:["app-built-in"],actions:["Read"],effect:"Allow",isEnabled:!0,submitter:this.props.account.name,approver:"",approveTime:"",state:"Pending"}}addPermission(){const t=this.newPermission();I(t).then(i=>{i.status==="ok"?(this.props.history.push({pathname:`/permissions/${t.owner}/${t.name}`,mode:"add"}),p("success",e.t("general:Successfully added"))):p("error",`${e.t("general:Failed to add")}: ${i.msg}`)}).catch(i=>{p("error",`${e.t("general:Failed to connect to server")}: ${i}`)})}deletePermission(t){F(this.state.data[t]).then(i=>{i.status==="ok"?(p("success",e.t("general:Successfully deleted")),this.setState({data:v(this.state.data,t),pagination:{total:this.state.pagination.total-1}})):p("error",`${e.t("general:Failed to delete")}: ${i.msg}`)}).catch(i=>{p("error",`${e.t("general:Failed to connect to server")}: ${i}`)})}renderTable(t){const i=[{title:e.t("general:Name"),dataIndex:"name",key:"name",width:"150px",fixed:"left",sorter:!0,...this.getColumnSearchProps("name"),render:(r,s,n)=>o(g,{to:`/permissions/${s.owner}/${r}`,children:r})},{title:e.t("general:Organization"),dataIndex:"owner",key:"owner",width:"120px",sorter:!0,...this.getColumnSearchProps("owner"),render:(r,s,n)=>o(g,{to:`/organizations/${r}`,children:r})},{title:e.t("general:Created time"),dataIndex:"createdTime",key:"createdTime",width:"160px",sorter:!0,render:(r,s,n)=>x(r)},{title:e.t("general:Display name"),dataIndex:"displayName",key:"displayName",width:"160px",sorter:!0,...this.getColumnSearchProps("displayName")},{title:e.t("role:Sub users"),dataIndex:"users",key:"users",sorter:!0,...this.getColumnSearchProps("users"),render:(r,s,n)=>u(r)},{title:e.t("role:Sub roles"),dataIndex:"roles",key:"roles",sorter:!0,...this.getColumnSearchProps("roles"),render:(r,s,n)=>u(r)},{title:e.t("role:Sub domains"),dataIndex:"domains",key:"domains",sorter:!0,...this.getColumnSearchProps("domains"),render:(r,s,n)=>u(r)},{title:e.t("permission:Resource type"),dataIndex:"resourceType",key:"resourceType",filterMultiple:!1,filters:[{text:"Application",value:"Application"}],width:"170px",sorter:!0},{title:e.t("general:Resources"),dataIndex:"resources",key:"resources",sorter:!0,...this.getColumnSearchProps("resources"),render:(r,s,n)=>u(r)},{title:e.t("permission:Actions"),dataIndex:"actions",key:"actions",sorter:!0,...this.getColumnSearchProps("actions"),render:(r,s,n)=>{const l=r.map((w,E)=>{switch(w){case"Read":return e.t("permission:Read");case"Write":return e.t("permission:Write");case"Admin":return e.t("permission:Admin");default:return null}});return u(l)}},{title:e.t("permission:Effect"),dataIndex:"effect",key:"effect",filterMultiple:!1,filters:[{text:e.t("permission:Allow"),value:"Allow"},{text:e.t("permission:Deny"),value:"Deny"}],width:"120px",sorter:!0,render:(r,s,n)=>{switch(r){case"Allow":return m("success",e.t("permission:Allow"));case"Deny":return m("error",e.t("permission:Deny"));default:return null}}},{title:e.t("general:Is enabled"),dataIndex:"isEnabled",key:"isEnabled",width:"120px",sorter:!0,render:(r,s,n)=>o(D,{disabled:!0,checkedChildren:"ON",unCheckedChildren:"OFF",checked:r})},{title:e.t("permission:Submitter"),dataIndex:"submitter",key:"submitter",filterMultiple:!1,width:"120px",sorter:!0},{title:e.t("permission:Approver"),dataIndex:"approver",key:"approver",filterMultiple:!1,width:"120px",sorter:!0},{title:e.t("permission:Approve time"),dataIndex:"approveTime",key:"approveTime",filterMultiple:!1,width:"120px",sorter:!0,render:(r,s,n)=>x(r)},{title:e.t("general:State"),dataIndex:"state",key:"state",filterMultiple:!1,filters:[{text:e.t("permission:Approved"),value:"Approved"},{text:e.t("permission:Pending"),value:"Pending"}],width:"120px",sorter:!0,render:(r,s,n)=>{switch(r){case"Approved":return m("success",e.t("permission:Approved"));case"Pending":return m("error",e.t("permission:Pending"));default:return null}}},{title:e.t("general:Action"),dataIndex:"",key:"op",width:"170px",fixed:b()?"false":"right",render:(r,s,n)=>f("div",{children:[o(y,{style:{marginTop:"10px",marginBottom:"10px",marginRight:"10px"},type:"primary",onClick:()=>this.props.history.push(`/permissions/${s.owner}/${s.name}`),children:e.t("general:Edit")}),o(z,{title:e.t("general:Sure to delete")+`: ${s.name} ?`,onConfirm:()=>this.deletePermission(n)})]})}],c={total:this.state.pagination.total,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>e.t("general:{total} in total").replace("{total}",this.state.pagination.total)};return o("div",{children:o(B,{scroll:{x:"max-content"},columns:i,dataSource:t,rowKey:"name",size:"middle",bordered:!0,pagination:c,title:()=>f("div",{children:[e.t("general:Permissions"),"    ",o(y,{type:"primary",size:"small",onClick:this.addPermission.bind(this),children:e.t("general:Add")})]}),loading:this.state.loading,onChange:this.handleTableChange})})}}export{Z as default};
