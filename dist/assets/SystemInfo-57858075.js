import{aG as E,aH as H,aI as _,ah as S,aK as k,ax as N,V as U,$ as M,R as L,s as v,i as o,j as e,bs as A,f as c,bg as z,e as W,n as I,o as d,w as m,bN as y}from"./index-a4571b31.js";const B=r=>{const{componentCls:t,sizePaddingEdgeHorizontal:s,colorSplit:n,lineWidth:i}=r;return{[t]:Object.assign(Object.assign({},_(r)),{borderBlockStart:`${i}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${r.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${r.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${r.dividerHorizontalWithTextGutterMargin}px 0`,color:r.colorTextHeading,fontWeight:500,fontSize:r.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:r.colorText,fontWeight:"normal",fontSize:r.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:s}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:s}}})}},F=E("Divider",r=>{const t=H(r,{dividerVerticalGutterMargin:r.marginXS,dividerHorizontalWithTextGutterMargin:r.margin,dividerHorizontalGutterMargin:r.marginLG});return[B(t)]},{sizePaddingEdgeHorizontal:0});var V=globalThis&&globalThis.__rest||function(r,t){var s={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(s[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(s[n[i]]=r[n[i]]);return s};const D=r=>{const{getPrefixCls:t,direction:s}=S.useContext(k),{prefixCls:n,type:i="horizontal",orientation:l="center",orientationMargin:h,className:f,children:g,dashed:p,plain:u}=r,b=V(r,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),a=t("divider",n),[x,T]=F(a),G=l.length>0?`-${l}`:l,$=!!g,w=l==="left"&&h!=null,C=l==="right"&&h!=null,P=N(a,T,`${a}-${i}`,{[`${a}-with-text`]:$,[`${a}-with-text${G}`]:$,[`${a}-dashed`]:!!p,[`${a}-plain`]:!!u,[`${a}-rtl`]:s==="rtl",[`${a}-no-default-orientation-margin-left`]:w,[`${a}-no-default-orientation-margin-right`]:C},f),j=Object.assign(Object.assign({},w&&{marginLeft:h}),C&&{marginRight:h});return x(S.createElement("div",Object.assign({className:P},b,{role:"separator"}),g&&i!=="vertical"&&S.createElement("span",{className:`${a}-inner-text`,style:j},g)))},R=D;function O(){return fetch(`${U}/api/get-system-info`,{method:"GET",credentials:"include",headers:{"Accept-Language":M()}}).then(r=>r.json())}function K(){return fetch(`${U}/api/get-version-info`,{method:"GET",credentials:"include",headers:{"Accept-Language":M()}}).then(r=>r.json())}class Y extends L.Component{constructor(t){super(t),this.state={systemInfo:{cpuUsage:[],memoryUsed:0,memoryTotal:0},versionInfo:{},intervalId:null,loading:!0}}UNSAFE_componentWillMount(){O().then(t=>{this.setState({systemInfo:t.data,loading:!1});const s=setInterval(()=>{O().then(n=>{this.setState({systemInfo:n.data})}).catch(n=>{v("error",`System info failed to get: ${n}`)})},1e3*3);this.setState({intervalId:s})}).catch(t=>{v("error",`System info failed to get: ${t}`)}),K().then(t=>{this.setState({versionInfo:t.data})}).catch(t=>{v("error",`Version info failed to get: ${t}`)})}componentWillUnmount(){this.state.intervalId!==null&&clearInterval(this.state.intervalId)}render(){var l,h,f,g,p,u,b;const t=((l=this.state.systemInfo.cpuUsage)==null?void 0:l.length)<=0?o.t("system:Failed to get CPU usage"):this.state.systemInfo.cpuUsage.map((a,x)=>e(A,{percent:Number(a.toFixed(1))},x)),s=this.state.systemInfo.memoryUsed&&this.state.systemInfo.memoryTotal&&this.state.systemInfo.memoryTotal<=0?o.t("system:Failed to get memory usage"):c("div",{children:[z(this.state.systemInfo.memoryUsed)," / ",z(this.state.systemInfo.memoryTotal),e("br",{})," ",e("br",{}),e(A,{type:"circle",percent:Number((Number(this.state.systemInfo.memoryUsed)/Number(this.state.systemInfo.memoryTotal)*100).toFixed(2))})]}),n=((h=this.state.versionInfo)==null?void 0:h.version)!==""?`https://github.com/casdoor/casdoor/releases/tag/${(f=this.state.versionInfo)==null?void 0:f.version}`:"";let i=((g=this.state.versionInfo)==null?void 0:g.version)!==""?(p=this.state.versionInfo)==null?void 0:p.version:o.t("system:Unknown version");return((u=this.state.versionInfo)==null?void 0:u.commitOffset)>0&&(i+=` (ahead+${(b=this.state.versionInfo)==null?void 0:b.commitOffset})`),W()?c(I,{gutter:[16,0],children:[e(d,{span:24,children:e(m,{title:o.t("system:CPU Usage"),bordered:!0,style:{textAlign:"center",width:"100%"},children:this.state.loading?e(y,{size:"large"}):t})}),e(d,{span:24,children:e(m,{title:o.t("system:Memory Usage"),bordered:!0,style:{textAlign:"center",width:"100%"},children:this.state.loading?e(y,{size:"large"}):s})}),e(d,{span:24,children:c(m,{title:o.t("system:About Casdoor"),bordered:!0,style:{textAlign:"center"},children:[e("div",{children:o.t("system:An Identity and Access Management (IAM) / Single-Sign-On (SSO) platform with web UI supporting OAuth 2.0, OIDC, SAML and CAS")}),"GitHub: ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/casdoor/casdoor",children:"Casdoor"}),e("br",{}),o.t("system:Version"),": ",e("a",{target:"_blank",rel:"noreferrer",href:n,children:i}),e("br",{}),o.t("system:Official website"),": ",e("a",{target:"_blank",rel:"noreferrer",href:"https://casdoor.org",children:"https://casdoor.org"}),e("br",{}),o.t("system:Community"),": ",e("a",{target:"_blank",rel:"noreferrer",href:"https://casdoor.org/#:~:text=Casdoor%20API-,Community,-GitHub",children:"Get in Touch!"})]})})]}):c(I,{children:[e(d,{span:6}),c(d,{span:12,children:[c(I,{gutter:[10,10],children:[e(d,{span:12,children:e(m,{title:o.t("system:CPU Usage"),bordered:!0,style:{textAlign:"center",height:"100%"},children:this.state.loading?e(y,{size:"large"}):t})}),e(d,{span:12,children:e(m,{title:o.t("system:Memory Usage"),bordered:!0,style:{textAlign:"center",height:"100%"},children:this.state.loading?e(y,{size:"large"}):s})})]}),e(R,{}),c(m,{title:o.t("system:About Casdoor"),bordered:!0,style:{textAlign:"center"},children:[e("div",{children:o.t("system:An Identity and Access Management (IAM) / Single-Sign-On (SSO) platform with web UI supporting OAuth 2.0, OIDC, SAML and CAS")}),"GitHub: ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/casdoor/casdoor",children:"Casdoor"}),e("br",{}),o.t("system:Version"),": ",e("a",{target:"_blank",rel:"noreferrer",href:n,children:i}),e("br",{}),o.t("system:Official website"),": ",e("a",{target:"_blank",rel:"noreferrer",href:"https://casdoor.org",children:"https://casdoor.org"}),e("br",{}),o.t("system:Community"),": ",e("a",{target:"_blank",rel:"noreferrer",href:"https://casdoor.org/#:~:text=Casdoor%20API-,Community,-GitHub",children:"Get in Touch!"})]})]}),e(d,{span:6})]})}}export{Y as default};
