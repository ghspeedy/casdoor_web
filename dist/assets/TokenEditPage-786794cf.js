import{R as c,f as n,w as k,i as a,j as t,B as p,e as i,n as o,o as s,I as l,F as g,s as h}from"./index-a4571b31.js";import{b as m,u,d as T}from"./TokenBackend-02ce04a8.js";class C extends c.Component{constructor(e){super(e),this.state={classes:e,tokenName:e.match.params.tokenName,token:null,mode:e.location.mode!==void 0?e.location.mode:"edit"}}UNSAFE_componentWillMount(){this.getToken()}getToken(){m("admin",this.state.tokenName).then(e=>{this.setState({token:e})})}parseTokenField(e,r){return r}updateTokenField(e,r){r=this.parseTokenField(e,r);const d=this.state.token;d[e]=r,this.setState({token:d})}renderToken(){return n(k,{size:"small",title:n("div",{children:[this.state.mode==="add"?a.t("token:New Token"):a.t("token:Edit Token"),"    ",t(p,{onClick:()=>this.submitTokenEdit(!1),children:a.t("general:Save")}),t(p,{style:{marginLeft:"20px"},type:"primary",onClick:()=>this.submitTokenEdit(!0),children:a.t("general:Save & Exit")}),this.state.mode==="add"?t(p,{style:{marginLeft:"20px"},onClick:()=>this.deleteToken(),children:a.t("general:Cancel")}):null]}),style:i()?{margin:"5px"}:{},type:"inner",children:[n(o,{style:{marginTop:"10px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("general:Name"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.name,onChange:e=>{this.updateTokenField("name",e.target.value)}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("general:Application"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.application,onChange:e=>{this.updateTokenField("application",e.target.value)}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("general:Organization"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.organization,onChange:e=>{this.updateTokenField("organization",e.target.value)}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("general:User"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.user,onChange:e=>{this.updateTokenField("user",e.target.value)}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("token:Authorization code"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.code,onChange:e=>{this.updateTokenField("code",e.target.value)}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("token:Access token"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.accessToken,onChange:e=>{this.updateTokenField("accessToken",e.target.value)}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("token:Expires in"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.expiresIn,onChange:e=>{this.updateTokenField("expiresIn",parseInt(e.target.value))}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("provider:Scope"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.scope,onChange:e=>{this.updateTokenField("scope",e.target.value)}})})]}),n(o,{style:{marginTop:"20px"},children:[n(s,{style:{marginTop:"5px"},span:i()?22:2,children:[a.t("token:Token type"),":"]}),t(s,{span:22,children:t(l,{value:this.state.token.tokenType,onChange:e=>{this.updateTokenField("tokenType",e.target.value)}})})]})]})}submitTokenEdit(e){const r=g(this.state.token);u(this.state.token.owner,this.state.tokenName,r).then(d=>{d.status==="ok"?(h("success",a.t("general:Successfully saved")),this.setState({tokenName:this.state.token.name}),e?this.props.history.push("/tokens"):this.props.history.push(`/tokens/${this.state.token.name}`)):(h("error",`${a.t("general:Failed to save")}: ${d.msg}`),this.updateTokenField("name",this.state.tokenName))}).catch(d=>{h("error",`${a.t("general:Failed to connect to server")}: ${d}`)})}deleteToken(){T(this.state.token).then(e=>{e.status==="ok"?this.props.history.push("/tokens"):h("error",`${a.t("general:Failed to delete")}: ${e.msg}`)}).catch(e=>{h("error",`${a.t("general:Failed to connect to server")}: ${e}`)})}render(){return n("div",{children:[this.state.token!==null?this.renderToken():null,n("div",{style:{marginTop:"20px",marginLeft:"40px"},children:[t(p,{size:"large",onClick:()=>this.submitTokenEdit(!1),children:a.t("general:Save")}),t(p,{style:{marginLeft:"20px"},type:"primary",size:"large",onClick:()=>this.submitTokenEdit(!0),children:a.t("general:Save & Exit")}),this.state.mode==="add"?t(p,{style:{marginLeft:"20px"},size:"large",onClick:()=>this.deleteToken(),children:a.t("general:Cancel")}):null]})]})}}export{C as default};