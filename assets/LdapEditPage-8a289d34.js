import{ag as h,ah as m,ai as o,bZ as v,R as f,s as p,f as L,j as t,i as a,v as S,B as d,l as T,m as n,n as s,w as l,q as u,O as E,I as r}from"./index-ba7d0766.js";import{b as A,u as b}from"./LdapBackend-3f76eeae.js";import{I as c}from"./index-4091184f.js";import{S as z}from"./index-ae4cddc7.js";import"./UpOutlined-7082c42f.js";var w={icon:function(e,i){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M81.8 537.8a60.3 60.3 0 010-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z",fill:i}},{tag:"path",attrs:{d:"M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z",fill:i}},{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z",fill:e}},{tag:"path",attrs:{d:"M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",fill:e}}]}},name:"eye",theme:"twotone"};const C=w;var j=function(e,i){return h.createElement(m,o(o({},e),{},{ref:i,icon:v}))};j.displayName="EyeInvisibleOutlined";const R=h.forwardRef(j);var y=function(e,i){return h.createElement(m,o(o({},e),{},{ref:i,icon:C}))};y.displayName="EyeTwoTone";const I=h.forwardRef(y),{Option:N}=u;class $ extends f.Component{constructor(e){super(e),this.state={ldapId:e.match.params.ldapId,organizationName:e.match.params.organizationName,ldap:null,organizations:[]}}UNSAFE_componentWillMount(){this.getLdap(),this.getOrganizations()}getLdap(){A(this.state.organizationName,this.state.ldapId).then(e=>{e.status==="ok"?this.setState({ldap:e.data}):p("error",e.msg)})}getOrganizations(){L("admin").then(e=>{this.setState({organizations:e.msg===void 0?e:[]})})}updateLdapField(e,i){this.setState(x=>(x.ldap[e]=i,x))}renderAutoSyncWarn(){if(this.state.ldap.autoSync>0)return t.jsx("span",{style:{color:"#faad14",marginLeft:"20px"},children:a.t("ldap:The Auto Sync option will sync all users to specify organization")})}renderLdap(){return t.jsxs(S,{size:"small",title:t.jsxs("div",{children:[a.t("ldap:Edit LDAP"),"    ",t.jsx(d,{onClick:()=>this.submitLdapEdit(),children:a.t("general:Save")}),t.jsx(d,{style:{marginLeft:"20px"},type:"primary",onClick:()=>this.submitLdapEdit(!0),children:a.t("general:Save & Exit")}),t.jsxs(d,{style:{marginLeft:"20px"},onClick:()=>T(`/ldap/sync/${this.state.organizationName}/${this.state.ldapId}`),children:[a.t("general:Sync")," LDAP"]})]}),style:{marginLeft:"5px"},type:"inner",children:[t.jsxs(n,{style:{marginTop:"10px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("general:Organization"),a.t("general:Organization - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(u,{virtual:!1,style:{width:"100%"},disabled:!E(this.props.account),value:this.state.ldap.owner,onChange:e=>{this.updateLdapField("owner",e)},children:this.state.organizations.map((e,i)=>t.jsx(N,{value:e.name,children:e.name},i))})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("general:ID"),a.t("general:ID - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(r,{value:this.state.ldap.id,disabled:!0})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Server name"),a.t("ldap:Server name - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(r,{value:this.state.ldap.serverName,onChange:e=>{this.updateLdapField("serverName",e.target.value)}})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Server host"),a.t("ldap:Server host - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(r,{value:this.state.ldap.host,onChange:e=>{this.updateLdapField("host",e.target.value)}})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Server port"),a.t("ldap:Server port - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(c,{min:0,max:65535,formatter:e=>e.replace(/\$\s?|(,*)/g,""),value:this.state.ldap.port,onChange:e=>{this.updateLdapField("port",e)}})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Enable SSL"),a.t("ldap:Enable SSL - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(z,{checked:this.state.ldap.enableSsl,onChange:e=>{this.updateLdapField("enableSsl",e)}})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Base DN"),a.t("ldap:Base DN - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(r,{value:this.state.ldap.baseDn,onChange:e=>{this.updateLdapField("baseDn",e.target.value)}})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Admin"),a.t("ldap:Admin - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(r,{value:this.state.ldap.admin,onChange:e=>{this.updateLdapField("admin",e.target.value)}})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Admin Password"),a.t("ldap:Admin Password - Tooltip"))," :"]}),t.jsx(s,{span:21,children:t.jsx(r.Password,{iconRender:e=>e?t.jsx(I,{}):t.jsx(R,{}),value:this.state.ldap.passwd,onChange:e=>{this.updateLdapField("passwd",e.target.value)}})})]}),t.jsxs(n,{style:{marginTop:"20px"},children:[t.jsxs(s,{style:{lineHeight:"32px",textAlign:"right",paddingRight:"25px"},span:3,children:[l(a.t("ldap:Auto Sync"),a.t("ldap:Auto Sync - Tooltip"))," :"]}),t.jsxs(s,{span:21,children:[t.jsx(c,{min:0,formatter:e=>e.replace(/\$\s?|(,*)/g,""),disabled:!1,value:this.state.ldap.autoSync,onChange:e=>{this.updateLdapField("autoSync",e)}}),t.jsx("span",{children:" mins"}),this.renderAutoSyncWarn()]})]})]})}submitLdapEdit(e){b(this.state.ldap).then(i=>{i.status==="ok"?(p("success","Update LDAP server success"),this.setState({organizationName:this.state.ldap.owner}),e&&this.props.history.push(`/organizations/${this.state.organizationName}`)):p("error",i.msg)}).catch(i=>{p("error",`Update LDAP server failed: ${i}`)})}render(){return t.jsxs("div",{children:[this.state.ldap!==null?this.renderLdap():null,t.jsxs("div",{style:{marginTop:"20px",marginLeft:"40px"},children:[t.jsx(d,{size:"large",onClick:()=>this.submitLdapEdit(),children:a.t("general:Save")}),t.jsx(d,{style:{marginLeft:"20px"},type:"primary",size:"large",onClick:()=>this.submitLdapEdit(!0),children:a.t("general:Save & Exit")})]})]})}}export{$ as default};