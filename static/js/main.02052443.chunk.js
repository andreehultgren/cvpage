(this.webpackJsonpcvpage=this.webpackJsonpcvpage||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=(a(18),a(2)),c=a(3),s=a(4),d=a(5),h={person:{firstName:"Andree",lastName:"Hultgren",phoneNumber:"+46736544491",imageSrc:"https://wallpaperplay.com/walls/full/c/5/3/34778.jpg",title:"Electrical engineer with a masters in Machine Learning",description:"I love complicated things. I am stubborn, therefore I find solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend dictum volutpat. Cras sed ultricies ipsum. In vulputate leo eget sem aliquet, quis aliquet enim fringilla. "},pages:[{pageName:"Education",content:{title:"Education"}},{pageName:"Work Experience",content:"Detta har jag jobbat med"},{pageName:"Skills",content:"Detta \xe4r mina skillz"},{pageName:"Examples",content:"Arbetsexampel"}],colors:{header:"#EDEDED"}},m=a(11),u=a(36),g=h.colors,p={headerInfo:{padding:0,backgroundColor:g.header,position:"absolute",marginLeft:0,float:"left",overflow:"hidden","& > .container":{padding:30,verticalAlign:"middle",display:"table-cell"}},headerImage:{width:"100%",marginLeft:0,textAlign:"right",backgroundColor:g.header,overflow:"hidden"}},v=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){window.addEventListener("resize",n.changeDividerMargin),n.changeDividerMargin()},n.changeDividerMargin=function(){var e=n.dividerMarginState,t=h.person.imageSrc,a=n.props.height,i=new Image;i.onload=function(){var t=a/this.height;e(this.width*t)},i.src=t},n.dividerMarginState=function(e){n.setState({dividerMargin:window.innerWidth-e})},n.updateDivider=function(e){var t=window.innerWidth,a=e.clientX,i=n.state.dividerMargin,r=Math.max(Math.min(a,t),i);n.setState({dividerX:r})},n.state={dividerX:"50%",dividerMargin:220},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.height,n=h.person;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onMouseMove:this.updateDivider,style:{height:a}},i.a.createElement("div",{className:t.headerInfo,style:{width:this.state.dividerX,height:a}},i.a.createElement(m.a,{style:{height:a}},i.a.createElement("h1",null,n.firstName," ",n.lastName),i.a.createElement("hr",null),i.a.createElement("h5",null,n.title))),i.a.createElement("div",{className:t.headerImage,style:{height:a}},i.a.createElement("img",{src:n.imageSrc,height:a,alt:"Background"}))))}}]),a}(i.a.Component),f=Object(u.a)(p)(v),E=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{height:500}))}}]),a}(i.a.Component);a(23);var w=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,{headerHeight:500}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.02052443.chunk.js.map