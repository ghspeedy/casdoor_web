import{R as s,aa as n,s as o,ak as l,j as e,cy as c,as as p,i,B as r,l as m,dO as u}from"./index-ba7d0766.js";class d extends s.Component{constructor(t){super(t),this.state={classes:t,applicationName:t.match.params.applicationName!==void 0?t.match.params.applicationName:n.appName,application:null}}UNSAFE_componentWillMount(){this.state.applicationName!==void 0?this.getApplication():o("error",`Unknown application name: ${this.state.applicationName}`)}getApplication(){this.state.applicationName!==void 0&&l("admin",this.state.applicationName).then(t=>{this.setState({application:t})})}render(){const t=this.state.application;return e.jsxs("div",{children:[c(t),e.jsx(p,{status:"success",title:i.t("signup:Your account has been created!"),subTitle:i.t("signup:Please click the below button to sign in"),extra:[e.jsx(r,{type:"primary",onClick:()=>{const a=sessionStorage.getItem("signinUrl");a!==null&&a!==""?m(a):u(t)},children:i.t("login:Sign In")},"login")]})]})}}export{d as default};