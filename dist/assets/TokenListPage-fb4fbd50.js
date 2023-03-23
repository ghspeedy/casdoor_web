var x=Object.defineProperty;var T=(d,s,e)=>s in d?x(d,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[s]=e;var p=(d,s,e)=>(T(d,typeof s!="symbol"?s+"":s,e),e);import{g as f,s as l,i as t,b as y,e as g,j as i,L as c,c as C,bI as u,f as m,B as k,k as S}from"./index-a4571b31.js";import{h as w}from"./moment-fbc5633a.js";import{a as $,d as I,g as z}from"./TokenBackend-02ce04a8.js";import{B as P}from"./BaseListPage-cf3b6a63.js";import{P as b}from"./PopconfirmModal-c2d7912b.js";import{T as v}from"./Table-4974f722.js";import"./index-3220aa08.js";class O extends P{constructor(){super(...arguments);p(this,"fetch",(e={})=>{const r=e.searchedColumn,h=e.searchText,a=e.sortField,n=e.sortOrder;this.setState({loading:!0}),z("admin",e.pagination.current,e.pagination.pageSize,r,h,a,n).then(o=>{o.status==="ok"?this.setState({loading:!1,data:o.data,pagination:{...e.pagination,total:o.data2},searchText:e.searchText,searchedColumn:e.searchedColumn}):S(o)&&this.setState({loading:!1,isAuthorized:!1})})})}newToken(){return{owner:"admin",name:`token_${f()}`,createdTime:w().format(),application:"app-built-in",organization:"built-in",user:"admin",accessToken:"",expiresIn:7200,scope:"read",tokenType:"Bearer"}}addToken(){const e=this.newToken();$(e).then(r=>{r.status==="ok"?(this.props.history.push({pathname:`/tokens/${e.name}`,mode:"add"}),l("success",t.t("general:Successfully added"))):l("error",`${t.t("general:Failed to add")}: ${r.msg}`)}).catch(r=>{l("error",`${t.t("general:Failed to connect to server")}: ${r}`)})}deleteToken(e){I(this.state.data[e]).then(r=>{r.status==="ok"?(l("success",t.t("general:Successfully deleted")),this.setState({data:y(this.state.data,e),pagination:{total:this.state.pagination.total-1}})):l("error",`${t.t("general:Failed to delete")}: ${r.msg}`)}).catch(r=>{l("error",`${t.t("general:Failed to connect to server")}: ${r}`)})}renderTable(e){const r=[{title:t.t("general:Name"),dataIndex:"name",key:"name",width:g()?"100px":"300px",fixed:"left",sorter:!0,...this.getColumnSearchProps("name"),render:(a,n,o)=>i(c,{to:`/tokens/${a}`,children:a})},{title:t.t("general:Created time"),dataIndex:"createdTime",key:"createdTime",width:"160px",sorter:!0,render:(a,n,o)=>C(a)},{title:t.t("general:Application"),dataIndex:"application",key:"application",width:"120px",sorter:!0,...this.getColumnSearchProps("application"),render:(a,n,o)=>i(c,{to:`/applications/${n.organization}/${a}`,children:a})},{title:t.t("general:Organization"),dataIndex:"organization",key:"organization",width:"120px",sorter:!0,...this.getColumnSearchProps("organization"),render:(a,n,o)=>i(c,{to:`/organizations/${a}`,children:a})},{title:t.t("general:User"),dataIndex:"user",key:"user",width:"120px",sorter:!0,...this.getColumnSearchProps("user"),render:(a,n,o)=>i(c,{to:`/users/${n.organization}/${a}`,children:a})},{title:t.t("token:Authorization code"),dataIndex:"code",key:"code",sorter:!0,...this.getColumnSearchProps("code"),render:(a,n,o)=>u(a)},{title:t.t("token:Access token"),dataIndex:"accessToken",key:"accessToken",sorter:!0,ellipsis:!0,...this.getColumnSearchProps("accessToken"),render:(a,n,o)=>u(a)},{title:t.t("token:Expires in"),dataIndex:"expiresIn",key:"expiresIn",width:"120px",sorter:!0,...this.getColumnSearchProps("expiresIn")},{title:t.t("provider:Scope"),dataIndex:"scope",key:"scope",width:"110px",sorter:!0,...this.getColumnSearchProps("scope")},{title:t.t("general:Action"),dataIndex:"",key:"op",width:"170px",fixed:g()?"false":"right",render:(a,n,o)=>m("div",{children:[i(k,{style:{marginTop:"10px",marginBottom:"10px",marginRight:"10px"},type:"primary",onClick:()=>this.props.history.push(`/tokens/${n.name}`),children:t.t("general:Edit")}),i(b,{title:t.t("general:Sure to delete")+`: ${n.name} ?`,onConfirm:()=>this.deleteToken(o)})]})}],h={total:this.state.pagination.total,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>t.t("general:{total} in total").replace("{total}",this.state.pagination.total)};return i("div",{children:i(v,{scroll:{x:"max-content"},columns:r,dataSource:e,rowKey:"name",size:"middle",bordered:!0,pagination:h,title:()=>m("div",{children:[t.t("general:Tokens"),"    ",i(k,{type:"primary",size:"small",onClick:this.addToken.bind(this),children:t.t("general:Add")})]}),loading:this.state.loading,onChange:this.handleTableChange})})}}export{O as default};
