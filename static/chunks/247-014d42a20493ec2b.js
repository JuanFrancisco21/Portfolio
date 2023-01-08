"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{2199:function(e,t,i){i.d(t,{Z:function(){return v}});var s=i(5893),n=i(7294),a=i(3253),r=i.n(a);let l=(e,t,i,s)=>{e.style.transition=`${t} ${i}ms ${s}`},o=(e,t,i)=>Math.min(Math.max(e,t),i);class h{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,s=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:s,height:s}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,s)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,s)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:s}=e;this.glareAngle=(i?Math.atan2(s,-i)*(180/Math.PI):0)-(t?180:0)},this.updateOpacity=(e,t,i,s)=>{let{xPercentage:n,yPercentage:a}=e,{glarePosition:r,glareReverse:l,glareMaxOpacity:h}=t,p=i?-1:1,c=s?-1:1,d=l?-1:1,u=0;switch(r){case"top":u=-n*p*d;break;case"right":u=a*c*d;break;case"bottom":case void 0:u=n*p*d;break;case"left":u=-a*c*d;break;case"all":u=Math.hypot(n,a)}let g=o(u,0,100);this.glareOpacity=g*h/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),s={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,s)}}class p{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:s}=e,{tiltMaxAngleX:n,tiltMaxAngleY:a}=t;this.tiltAngleX=i*n/100,this.tiltAngleY=-(s*a/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:s,tiltMaxAngleX:n,tiltMaxAngleY:a}=t;(null!==i||null!==s)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==s?s:0,e.xPercentage=100*this.tiltAngleX/n,e.yPercentage=100*this.tiltAngleY/a)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=o(this.tiltAngleX,-90,90),this.tiltAngleY=o(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let c=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class d extends n.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{var e,t,i,s;return e=this,t=void 0,i=void 0,s=function*(){window.DeviceOrientationEvent;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},new(i||(i=Promise))(function(n,a){function r(e){try{o(s.next(e))}catch(t){a(t)}}function l(e){try{o(s.throw(e))}catch(t){a(t)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(r,l)}o((s=s.apply(e,t||[])).next())})},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let i=new CustomEvent("autoreset");this.onMove(i)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":let{tiltAngleXInitial:i,tiltAngleYInitial:s,tiltMaxAngleX:n,tiltMaxAngleY:a}=this.props;this.wrapperEl.clientPosition.xPercentage=o(i/n*100,-100,100),this.wrapperEl.clientPosition.yPercentage=o(s/a*100,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,s=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=s/i*100,this.wrapperEl.clientPosition.xPercentage=o(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=o(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:s}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,s)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:s,y:n}=this.wrapperEl.clientPosition;e=n/window.innerHeight*200-100,t=s/window.innerWidth*200-100}else{let{size:{width:a,height:r,left:l,top:h},clientPosition:{x:p,y:c}}=this.wrapperEl;e=(c-h)/r*200-100,t=(p-l)/a*200-100}this.wrapperEl.clientPosition.xPercentage=o(e,-100,100),this.wrapperEl.clientPosition.yPercentage=o(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new p,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new h(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,s=0;this.glare&&(i=this.glare.glareAngle,s=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:s,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;l(this.wrapperEl.node,"all",e,t),this.glare&&l(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return n.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}d.defaultProps=c;var u=i(8501),g=i.n(u);r().setAppElement("#__next");let m=()=>{let[e,t]=(0,n.useState)({}),[i,a]=(0,n.useState)(!1),l=e=>{let i=g().find(t=>(null==t?void 0:t.id)===e);t(i),a(!0)},o=e=>{l(e)};return(0,s.jsxs)("div",{className:"service_list",children:[(0,s.jsx)("ul",{children:g().map(e=>(0,s.jsx)("li",{"data-aos":"fade-right","data-aos-duration":"1200",children:(0,s.jsx)(d,{children:(0,s.jsx)("div",{className:"list_inner",onClick:()=>o(null==e?void 0:e.id),children:(0,s.jsxs)("div",{className:"hover",children:[(0,s.jsx)("img",{className:"svg custom",src:e.imgIcon,alt:"icon"}),(0,s.jsx)("div",{className:"service_title",children:(0,s.jsx)("h3",{children:e.title})}),(0,s.jsxs)("div",{className:"learn_more",children:["Learn More",(0,s.jsx)("span",{})]})]})})})},e.id))}),(0,s.jsx)(r(),{isOpen:i,onRequestClose:()=>a(!1),contentLabel:"My dialog",className:"custom-modal",overlayClassName:"custom-overlay",closeTimeoutMS:500,children:(0,s.jsxs)("div",{className:"jf_tm_modalbox",children:[(0,s.jsx)("button",{className:"close-modal",onClick:()=>a(!1),children:(0,s.jsx)("img",{src:"/img/svg/cancel.svg",alt:"close icon"})}),(0,s.jsx)("div",{className:"box_inner",children:(0,s.jsx)("div",{className:"description_wrap ",children:(0,s.jsxs)("div",{className:"popup_informations",children:[(0,s.jsx)("div",{className:"image",children:(0,s.jsx)("div",{className:"main",style:{backgroundImage:"url(".concat(null==e?void 0:e.popupImg,")")}})}),(0,s.jsxs)("div",{className:"description",children:[(0,s.jsx)("h3",{children:null==e?void 0:e.popupTitle}),null==e?void 0:e.firstDescriptionText,null==e?void 0:e.serviceListDescriptions]})]})})})]})})]})};var v=m},4870:function(e,t,i){i.d(t,{Z:function(){return l}});var s=i(5893);i(7294);var n=i(6066),a=i(5285),r=i.n(a);function l(){return(0,s.jsx)(n.Z,{dots:!0,arrow:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!1,responsive:[{breakpoint:575,settings:{arrow:!1,slidesToShow:1,speed:300}}],children:r().map((e,t)=>(0,s.jsx)("li",{"data-aos":"fade-right","data-aos-duration":"1200","data-aos-delay":e.delayAnimation,children:(0,s.jsxs)("div",{className:"list_inner",children:[(0,s.jsxs)("div",{className:"details",children:[(0,s.jsxs)("div",{className:"author",children:[(0,s.jsx)("div",{className:"image",children:(0,s.jsx)("div",{className:"main",style:{backgroundImage:"url(img/testimonials/".concat(e.img,".jpg)")}})}),(0,s.jsxs)("div",{className:"short",children:[(0,s.jsx)("h3",{children:e.name}),(0,s.jsx)("span",{children:e.designation})]})]}),(0,s.jsx)("div",{className:"icon",children:(0,s.jsx)("img",{className:"svg",src:"img/svg/quote.svg",alt:"quote"})})]}),(0,s.jsx)("div",{className:"text",children:(0,s.jsx)("p",{children:e.desc})})]})},t))})}},8501:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});let s=i(5893);e.exports=[{id:1,imgIcon:"img/svg/1.svg",title:(0,s.jsxs)(s.Fragment,{children:["Motion & Web ",(0,s.jsx)("br",{})," Graphy"]}),popupImg:"img/service/1.jpg",popupTitle:"Motion & Web Graphy Breakdown In Cinema 4D",firstDescriptionText:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."}),(0,s.jsx)("p",{children:"Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."})]}),serviceListDescriptions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"What Is Motion & Web?"}),(0,s.jsx)("p",{children:"Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."}),(0,s.jsx)("div",{className:"in_list",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Email is a crucial channel in any marketing."})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Curious what to say? How to say it?"})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Whether you’re kicking off a new ca mpaign."})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Habitasse per feugiat aliquam luctus accumsan curae"})})]})}),(0,s.jsx)("p",{children:"Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."})]})},{id:2,imgIcon:"img/svg/2.svg",title:(0,s.jsxs)(s.Fragment,{children:["Ui/Ux ",(0,s.jsx)("br",{})," Consultancy"]}),popupImg:"img/service/2.jpg",popupTitle:"\n    Ui/Ux Consultancy Design Breakdown In Cinema 4D",firstDescriptionText:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."}),(0,s.jsx)("p",{children:"Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."})]}),serviceListDescriptions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"What Is Ui/Ux?"}),(0,s.jsx)("p",{children:"Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."}),(0,s.jsx)("div",{className:"in_list",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Email is a crucial channel in any marketing."})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Curious what to say? How to say it?"})})]})}),(0,s.jsx)("p",{children:"Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."})]})},{id:3,imgIcon:"img/svg/3.svg",title:(0,s.jsxs)(s.Fragment,{children:["Branding & ",(0,s.jsx)("br",{})," Design"]}),popupImg:"img/service/3.jpg",popupTitle:"Branding & Design Breakdown In Cinema 4D",firstDescriptionText:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."}),(0,s.jsx)("p",{children:"Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."})]}),serviceListDescriptions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"What Is Branding & Design?"}),(0,s.jsx)("p",{children:"Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."}),(0,s.jsx)("div",{className:"in_list",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Email is a crucial channel in any marketing."})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Curious what to say? How to say it?"})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Whether you’re kicking off a new ca mpaign."})})]})}),(0,s.jsx)("p",{children:"Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."})]})},{id:4,imgIcon:"img/svg/4.svg",title:(0,s.jsxs)(s.Fragment,{children:["Mobile App ",(0,s.jsx)("br",{})," Design"]}),popupImg:"img/service/4.jpg",popupTitle:"Mobile App Design is the trending Part of Graphics",firstDescriptionText:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."}),(0,s.jsx)("p",{children:"Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over."})]}),serviceListDescriptions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"What Is Mobile App Design?"}),(0,s.jsx)("p",{children:"Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria."}),(0,s.jsx)("div",{className:"in_list",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Email is a crucial channel in any marketing."})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Curious what to say? How to say it?"})})]})}),(0,s.jsx)("p",{children:"Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."})]})}]},5285:function(e){e.exports=[{img:"1",desc:"Hi, I’m Alvara Atkins and I am designer &amp; developer who dream making the world better place by products. I am also very active for international clients.",name:"Alvara Atkins",designation:"Marketing Manager",delayAnimation:""},{img:"2",desc:"These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!",name:"Fabian Gattuzo",designation:"Photographer",delayAnimation:"100"},{img:"3",desc:"These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!",name:"Alizee Bonita",designation:"App Developer",delayAnimation:"200"}]}}]);