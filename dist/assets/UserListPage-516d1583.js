var U=Object.defineProperty;var I=(c,h,e)=>h in c?U(c,h,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[h]=e;var y=(c,h,e)=>(I(c,typeof h!="symbol"?h+"":h,e),e);import{g as F,S as N,J as A,K as O,s as l,i as a,M as P,b as T,j as s,f as m,B as f,e as p,L as x,c as v,N as D,O as C,P as R,Q as B,U as S,k as b,u as M,V as L}from"./index-a4571b31.js";import{h as G}from"./moment-fbc5633a.js";import{B as j}from"./BaseListPage-cf3b6a63.js";import{P as E}from"./PopconfirmModal-c2d7912b.js";import{U as J,a as K}from"./UploadOutlined-174206a2.js";import{S as u}from"./index-c1f94e42.js";import{T as Q}from"./Table-4974f722.js";import"./index-3220aa08.js";import"./DeleteOutlined-25685737.js";class ie extends j{constructor(e){super(e);y(this,"fetch",(e={})=>{const i=e.searchedColumn,o=e.searchText,t=e.sortField,n=e.sortOrder;this.setState({loading:!0}),this.props.match.params.organizationName===void 0?(R(this.props.account)?B(e.pagination.current,e.pagination.pageSize,i,o,t,n):S(this.props.account.owner,e.pagination.current,e.pagination.pageSize,i,o,t,n)).then(r=>{if(r.status==="ok"){this.setState({loading:!1,data:r.data,pagination:{...e.pagination,total:r.data2},searchText:e.searchText,searchedColumn:e.searchedColumn});const d=r.data;d.length>0&&this.getOrganization(d[0].owner)}else b(r)&&this.setState({loading:!1,isAuthorized:!1})}):S(this.props.match.params.organizationName,e.pagination.current,e.pagination.pageSize,i,o,t,n).then(r=>{if(r.status==="ok"){this.setState({loading:!1,data:r.data,pagination:{...e.pagination,total:r.data2},searchText:e.searchText,searchedColumn:e.searchedColumn});const d=r.data;d.length>0&&this.getOrganization(d[0].owner)}else b(r)&&this.setState({loading:!1,isAuthorized:!1})})})}componentDidMount(){this.setState({organizationName:this.props.match.params.organizationName,organization:null})}newUser(){var o;const e=F(),i=this.state.organizationName!==void 0?this.state.organizationName:this.props.account.owner;return{owner:i,name:`user_${e}`,createdTime:G().format(),type:"normal-user",password:"123",passwordSalt:"",displayName:`New User - ${e}`,avatar:`${N}/img/casbin.svg`,email:`${e}@example.com`,phone:A(),countryCode:((o=this.state.organization.countryCodes)==null?void 0:o.length)>0?this.state.organization.countryCodes[0]:"",address:[],affiliation:"Example Inc.",tag:"staff",region:"",isAdmin:i==="built-in",isGlobalAdmin:i==="built-in",IsForbidden:!1,score:this.state.organization.initScore,isDeleted:!1,properties:{},signupApplication:"app-built-in"}}addUser(){const e=this.newUser();O(e).then(i=>{i.status==="ok"?(this.props.history.push({pathname:`/users/${e.owner}/${e.name}`,mode:"add"}),l("success",a.t("general:Successfully added"))):l("error",`${a.t("general:Failed to add")}: ${i.msg}`)}).catch(i=>{l("error",`${a.t("general:Failed to connect to server")}: ${i}`)})}deleteUser(e){P(this.state.data[e]).then(i=>{i.status==="ok"?(l("success",a.t("general:Successfully deleted")),this.setState({data:T(this.state.data,e),pagination:{total:this.state.pagination.total-1}})):l("error",`${a.t("general:Failed to delete")}: ${i.msg}`)}).catch(i=>{l("error",`${a.t("general:Failed to connect to server")}: ${i}`)})}uploadFile(e){const{status:i,response:o}=e.file;if(i==="done")if(o.status==="ok"){l("success","Users uploaded successfully, refreshing the page");const{pagination:t}=this.state;this.fetch({pagination:t})}else l("error",`Users failed to upload: ${o.msg}`);else i==="error"&&l("error","File failed to upload")}renderUpload(){const e={name:"file",accept:".xlsx",method:"post",action:`${L}/api/upload-users`,withCredentials:!0,onChange:i=>{this.uploadFile(i)}};return s(J,{...e,children:m(f,{type:"primary",size:"small",children:[s(K,{})," ",a.t("user:Upload (.xlsx)")]})})}renderTable(e){const i=[{title:a.t("general:Organization"),dataIndex:"owner",key:"owner",width:p()?"100px":"120px",fixed:"left",sorter:!0,...this.getColumnSearchProps("owner"),render:(t,n,r)=>s(x,{to:`/organizations/${t}`,children:t})},{title:a.t("general:Application"),dataIndex:"signupApplication",key:"signupApplication",width:p()?"100px":"120px",fixed:"left",sorter:!0,...this.getColumnSearchProps("signupApplication"),render:(t,n,r)=>s(x,{to:`/applications/${n.owner}/${t}`,children:t})},{title:a.t("general:Name"),dataIndex:"name",key:"name",width:p()?"80px":"110px",fixed:"left",sorter:!0,...this.getColumnSearchProps("name"),render:(t,n,r)=>s(x,{to:`/users/${n.owner}/${t}`,children:t})},{title:a.t("general:Created time"),dataIndex:"createdTime",key:"createdTime",width:"160px",sorter:!0,render:(t,n,r)=>v(t)},{title:a.t("general:Display name"),dataIndex:"displayName",key:"displayName",sorter:!0,...this.getColumnSearchProps("displayName")},{title:a.t("general:Avatar"),dataIndex:"avatar",key:"avatar",width:"80px",render:(t,n,r)=>s("a",{target:"_blank",rel:"noreferrer",href:t,children:s("img",{src:t,alt:t,width:50})})},{title:a.t("general:Email"),dataIndex:"email",key:"email",width:"160px",sorter:!0,...this.getColumnSearchProps("email"),render:(t,n,r)=>s("a",{href:`mailto:${t}`,children:t})},{title:a.t("general:Phone"),dataIndex:"phone",key:"phone",width:"120px",sorter:!0,...this.getColumnSearchProps("phone")},{title:a.t("user:Affiliation"),dataIndex:"affiliation",key:"affiliation",width:"140px",sorter:!0,...this.getColumnSearchProps("affiliation")},{title:a.t("user:Country/Region"),dataIndex:"region",key:"region",width:"140px",sorter:!0,...this.getColumnSearchProps("region"),render:(t,n,r)=>D().getName(n.region,C(),{select:"official"})},{title:a.t("user:Tag"),dataIndex:"tag",key:"tag",width:"110px",sorter:!0,...this.getColumnSearchProps("tag"),render:(t,n,r)=>{var w,k;const d={};return(k=(w=this.state.organization)==null?void 0:w.tags)==null||k.map((z,V)=>{const g=z.split("|"),$=C()!=="zh"?g[0]:g[1];d[g[0]]=$}),d[t]}},{title:a.t("user:Is admin"),dataIndex:"isAdmin",key:"isAdmin",width:"110px",sorter:!0,render:(t,n,r)=>s(u,{disabled:!0,checkedChildren:"ON",unCheckedChildren:"OFF",checked:t})},{title:a.t("user:Is global admin"),dataIndex:"isGlobalAdmin",key:"isGlobalAdmin",width:"140px",sorter:!0,render:(t,n,r)=>s(u,{disabled:!0,checkedChildren:"ON",unCheckedChildren:"OFF",checked:t})},{title:a.t("user:Is forbidden"),dataIndex:"isForbidden",key:"isForbidden",width:"110px",sorter:!0,render:(t,n,r)=>s(u,{disabled:!0,checkedChildren:"ON",unCheckedChildren:"OFF",checked:t})},{title:a.t("user:Is deleted"),dataIndex:"isDeleted",key:"isDeleted",width:"110px",sorter:!0,render:(t,n,r)=>s(u,{disabled:!0,checkedChildren:"ON",unCheckedChildren:"OFF",checked:t})},{title:a.t("general:Action"),dataIndex:"",key:"op",width:"190px",fixed:p()?"false":"right",render:(t,n,r)=>{const d=n.owner===this.props.account.owner&&n.name===this.props.account.name;return m("div",{children:[s(f,{style:{marginTop:"10px",marginBottom:"10px",marginRight:"10px"},type:"primary",onClick:()=>this.props.history.push(`/users/${n.owner}/${n.name}`),children:a.t("general:Edit")}),s(E,{title:a.t("general:Sure to delete")+`: ${n.name} ?`,onConfirm:()=>this.deleteUser(r),disabled:d})]})}}],o={total:this.state.pagination.total,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>a.t("general:{total} in total").replace("{total}",this.state.pagination.total)};return s("div",{children:s(Q,{scroll:{x:"max-content"},columns:i,dataSource:e,rowKey:t=>`${t.owner}/${t.name}`,size:"middle",bordered:!0,pagination:o,title:()=>m("div",{children:[a.t("general:Users"),"    ",s(f,{style:{marginRight:"5px"},type:"primary",size:"small",onClick:this.addUser.bind(this),children:a.t("general:Add")}),this.renderUpload()]}),loading:this.state.loading,onChange:this.handleTableChange})})}getOrganization(e){M("admin",e).then(i=>{this.setState({organization:i})})}}export{ie as default};