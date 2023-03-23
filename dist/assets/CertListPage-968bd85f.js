var m=Object.defineProperty;var u=(s,a,e)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e;var h=(s,a,e)=>(u(s,typeof a!="symbol"?a+"":a,e),e);import{g as x,s as l,i as t,b as y,j as d,L as f,c as C,e as S,f as p,B as g,k as w}from"./index-a4571b31.js";import{h as k}from"./moment-fbc5633a.js";import{a as T,d as v,g as $}from"./CertBackend-a5cfe38f.js";import{B as I}from"./BaseListPage-cf3b6a63.js";import{P as b}from"./PopconfirmModal-c2d7912b.js";import{T as z}from"./Table-4974f722.js";import"./index-3220aa08.js";class L extends I{constructor(){super(...arguments);h(this,"fetch",(e={})=>{let r=e.searchedColumn,c=e.searchText;const o=e.sortField,n=e.sortOrder;e.category!==void 0&&e.category!==null?(r="category",c=e.category):e.type!==void 0&&e.type!==null&&(r="type",c=e.type),this.setState({loading:!0}),$("admin",e.pagination.current,e.pagination.pageSize,r,c,o,n).then(i=>{i.status==="ok"?this.setState({loading:!1,data:i.data,pagination:{...e.pagination,total:i.data2},searchText:e.searchText,searchedColumn:e.searchedColumn}):w(i)&&this.setState({loading:!1,isAuthorized:!1})})})}newCert(){const e=x();return{owner:"admin",name:`cert_${e}`,createdTime:k().format(),displayName:`New Cert - ${e}`,scope:"JWT",type:"x509",cryptoAlgorithm:"RS256",bitSize:4096,expireInYears:20,certificate:"",privateKey:""}}addCert(){const e=this.newCert();T(e).then(r=>{r.status==="ok"?(this.props.history.push({pathname:`/certs/${e.name}`,mode:"add"}),l("success",t.t("general:Successfully added"))):l("error",`${t.t("general:Failed to add")}: ${r.msg}`)}).catch(r=>{l("error",`${t.t("general:Failed to connect to server")}: ${r}`)})}deleteCert(e){v(this.state.data[e]).then(r=>{r.status==="ok"?(l("success",t.t("general:Successfully deleted")),this.setState({data:y(this.state.data,e),pagination:{total:this.state.pagination.total-1}})):l("error",`${t.t("general:Failed to delete")}: ${r.msg}`)}).catch(r=>{l("error",`${t.t("general:Failed to connect to server")}: ${r}`)})}renderTable(e){const r=[{title:t.t("general:Name"),dataIndex:"name",key:"name",width:"120px",fixed:"left",sorter:!0,...this.getColumnSearchProps("name"),render:(o,n,i)=>d(f,{to:`/certs/${o}`,children:o})},{title:t.t("general:Created time"),dataIndex:"createdTime",key:"createdTime",width:"180px",sorter:!0,render:(o,n,i)=>C(o)},{title:t.t("general:Display name"),dataIndex:"displayName",key:"displayName",sorter:!0,...this.getColumnSearchProps("displayName")},{title:t.t("provider:Scope"),dataIndex:"scope",key:"scope",filterMultiple:!1,filters:[{text:"JWT",value:"JWT"}],width:"110px",sorter:!0},{title:t.t("provider:Type"),dataIndex:"type",key:"type",filterMultiple:!1,filters:[{text:"x509",value:"x509"}],width:"110px",sorter:!0},{title:t.t("cert:Crypto algorithm"),dataIndex:"cryptoAlgorithm",key:"cryptoAlgorithm",filterMultiple:!1,filters:[{text:"RS256",value:"RS256"}],width:"190px",sorter:!0},{title:t.t("cert:Bit size"),dataIndex:"bitSize",key:"bitSize",width:"130px",sorter:!0,...this.getColumnSearchProps("bitSize")},{title:t.t("cert:Expire in years"),dataIndex:"expireInYears",key:"expireInYears",width:"170px",sorter:!0,...this.getColumnSearchProps("expireInYears")},{title:t.t("general:Action"),dataIndex:"",key:"op",width:"170px",fixed:S()?"false":"right",render:(o,n,i)=>p("div",{children:[d(g,{style:{marginTop:"10px",marginBottom:"10px",marginRight:"10px"},type:"primary",onClick:()=>this.props.history.push(`/certs/${n.name}`),children:t.t("general:Edit")}),d(b,{title:t.t("general:Sure to delete")+`: ${n.name} ?`,onConfirm:()=>this.deleteCert(i)})]})}],c={total:this.state.pagination.total,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>t.t("general:{total} in total").replace("{total}",this.state.pagination.total)};return d("div",{children:d(z,{scroll:{x:"max-content"},columns:r,dataSource:e,rowKey:"name",size:"middle",bordered:!0,pagination:c,title:()=>p("div",{children:[t.t("general:Certs"),"    ",d(g,{type:"primary",size:"small",onClick:this.addCert.bind(this),children:t.t("general:Add")})]}),loading:this.state.loading,onChange:this.handleTableChange})})}}export{L as default};
