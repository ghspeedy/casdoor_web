import{ah as u,ai as y,aj as o,R as P,i as r,m as c,s as d,j as t,bO as p,f as l,Y as f,B as C,bP as b,bN as S,bQ as h}from"./index-a4571b31.js";import{b as T,c as x}from"./ProductBackend-0ca51f3d.js";import{D as n}from"./index-26374922.js";var v={icon:function(e,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",fill:a}},{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",fill:e}}]}},name:"check-circle",theme:"twotone"};const w=v;var g=function(e,a){return u.createElement(y,o(o({},e),{},{ref:a,icon:w}))};g.displayName="CheckCircleTwoTone";const M=u.forwardRef(g);class N extends P.Component{constructor(e){var a;super(e),this.state={classes:e,productName:(a=e.match)==null?void 0:a.params.productName,product:null,isPlacingOrder:!1,qrCodeModalProvider:null}}UNSAFE_componentWillMount(){this.getProduct()}getProduct(){this.state.productName!==void 0&&T("admin",this.state.productName).then(e=>{this.setState({product:e})})}getProductObj(){return this.props.product!==void 0?this.props.product:this.state.product}getCurrencySymbol(e){return(e==null?void 0:e.currency)==="USD"?"$":(e==null?void 0:e.currency)==="CNY"?"￥":"(Unknown currency)"}getCurrencyText(e){return(e==null?void 0:e.currency)==="USD"?r.t("product:USD"):(e==null?void 0:e.currency)==="CNY"?r.t("product:CNY"):"(Unknown currency)"}getPrice(e){return`${this.getCurrencySymbol(e)}${e==null?void 0:e.price} (${this.getCurrencyText(e)})`}buyProduct(e,a){if(a.clientId.startsWith("http")){this.setState({qrCodeModalProvider:a});return}this.setState({isPlacingOrder:!0}),x(this.state.product.owner,this.state.productName,a.name).then(i=>{if(i.status==="ok"){const m=i.data;c(m)}else d("error",`${r.t("general:Failed to save")}: ${i.msg}`),this.setState({isPlacingOrder:!1})}).catch(i=>{d("error",`${r.t("general:Failed to connect to server")}: ${i}`)})}renderQrCodeModal(){var e,a,i;return this.state.qrCodeModalProvider===void 0||this.state.qrCodeModalProvider===null?null:t(p,{title:l("div",{children:[t(M,{twoToneColor:"rgb(45,120,213)"})," "+r.t("product:Please scan the QR code to pay")]}),open:this.state.qrCodeModalProvider!==void 0&&this.state.qrCodeModalProvider!==null,onOk:()=>{c(this.state.product.returnUrl)},onCancel:()=>{this.setState({qrCodeModalProvider:null})},okText:r.t("product:I have completed the payment"),cancelText:r.t("general:Cancel"),children:l("p",{children:[r.t("product:Please provide your username in the remark"),":  ",f("default",this.props.account.name),t("br",{}),t("br",{}),t("img",{src:(e=this.state.qrCodeModalProvider)==null?void 0:e.clientId,alt:(a=this.state.qrCodeModalProvider)==null?void 0:a.name,width:"472px",style:{marginBottom:"20px"}})]},(i=this.state.qrCodeModalProvider)==null?void 0:i.name)})}getPayButton(e){let a=e.type;return e.type==="Alipay"?a=r.t("product:Alipay"):e.type==="WeChat Pay"?a=r.t("product:WeChat Pay"):e.type==="PayPal"&&(a=r.t("product:PayPal")),t(C,{style:{height:"50px",borderWidth:"2px"},shape:"round",icon:t("img",{style:{marginRight:"10px"},width:36,height:36,src:b(e),alt:e.displayName}),size:"large",children:a})}renderProviderButton(e,a){return t("span",{style:{width:"200px",marginRight:"20px",marginBottom:"10px"},children:t("span",{style:{width:"200px",cursor:"pointer"},onClick:()=>this.buyProduct(a,e),children:this.getPayButton(e)})},e.name)}renderPay(e){return e==null?null:e.state!=="Published"?r.t("product:This product is currently not in sale."):e.providerObjs.length===0?r.t("product:There is no payment channel for this product."):e.providerObjs.map(a=>this.renderProviderButton(a,e))}render(){const e=this.getProductObj();return e===null?null:l("div",{children:[t(S,{spinning:this.state.isPlacingOrder,size:"large",tip:r.t("product:Placing order..."),style:{paddingTop:"10%"},children:l(n,{title:r.t("product:Buy Product"),bordered:!0,children:[t(n.Item,{label:r.t("general:Name"),span:3,children:t("span",{style:{fontSize:28},children:h(e==null?void 0:e.displayName)})}),t(n.Item,{label:r.t("product:Detail"),children:t("span",{style:{fontSize:16},children:h(e==null?void 0:e.detail)})}),t(n.Item,{label:r.t("user:Tag"),children:t("span",{style:{fontSize:16},children:e==null?void 0:e.tag})}),t(n.Item,{label:r.t("product:SKU"),children:t("span",{style:{fontSize:16},children:e==null?void 0:e.name})}),t(n.Item,{label:r.t("product:Image"),span:3,children:t("img",{src:e==null?void 0:e.image,alt:e==null?void 0:e.name,height:90,style:{marginBottom:"20px"}})}),t(n.Item,{label:r.t("product:Price"),children:t("span",{style:{fontSize:28,color:"red",fontWeight:"bold"},children:this.getPrice(e)})}),t(n.Item,{label:r.t("product:Quantity"),children:t("span",{style:{fontSize:16},children:e==null?void 0:e.quantity})}),t(n.Item,{label:r.t("product:Sold"),children:t("span",{style:{fontSize:16},children:e==null?void 0:e.sold})}),t(n.Item,{label:r.t("product:Pay"),span:3,children:this.renderPay(e)})]})}),this.renderQrCodeModal()]})}}export{N as default};
