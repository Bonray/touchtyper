(function(){"use strict";var t={9903:function(t,e,r){var s=r(9242),n=r(3396);function i(t,e,r,i,a,o){const c=(0,n.up)("the-header"),l=(0,n.up)("router-view"),u=(0,n.up)("the-footer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n.Wm)(l,null,{default:(0,n.w5)((({Component:t})=>[(0,n.Wm)(s.uT,{mode:"out-in"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)((0,n.LL)(t)))])),_:2},1024)])),_:1}),(0,n.Wm)(u)],64)}var a=r(7139),o=r.p+"img/logo.9746ec63.png";const c={class:"header"},l={class:"header__container"},u=(0,n._)("h1",{class:"heading--primary"},[(0,n._)("img",{class:"header__logo",src:o,alt:"TouchTyper Logo"}),(0,n.Uk)(" TouchTyper ")],-1),d=(0,n.Uk)("Home"),h=(0,n.Uk)("Start Test");function m(t,e){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("header",c,[(0,n._)("div",l,[u,(0,n.Wm)(r,{class:(0,a.C_)(["btn btn--primary",{active:"home"===t.$route.name}]),to:{name:"home"}},{default:(0,n.w5)((()=>[d])),_:1},8,["class"]),(0,n.Wm)(r,{class:(0,a.C_)(["btn btn--primary",{active:"trainer"===t.$route.name}]),to:{name:"trainer"}},{default:(0,n.w5)((()=>[h])),_:1},8,["class"])])])}var p=r(89);const _={},g=(0,p.Z)(_,[["render",m]]);var y=g;const f={class:"footer"},w=(0,n._)("p",{class:"footer__copyright"},"Copyright © 2022 by Azamat Rizvanov",-1),v=[w];function k(t,e){return(0,n.wg)(),(0,n.iD)("footer",f,v)}const b={},x=(0,p.Z)(b,[["render",k]]);var T=x,L={components:{TheHeader:y,TheFooter:T}};const W=(0,p.Z)(L,[["render",i]]);var C=W,$=r(2483);const U={class:"main"},P={class:"home"},D={class:"container home__container"},O=(0,n._)("h2",{class:"home__heading"},"Welcome to TouchTyper!",-1),F=(0,n._)("p",{class:"home__text"},[(0,n.Uk)("Test your touch typing abilities and find out how fast you actually are!"),(0,n._)("br"),(0,n.Uk)("Our brand new trainer will help you with that!")],-1),M=(0,n._)("p",{class:"home__cta"},"Please note that the timer will start as soon as you hit any keyboard key that produces a character!",-1),j=(0,n.Uk)("Start Now");function z(t,e){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("main",U,[(0,n._)("section",P,[(0,n._)("div",D,[O,F,M,(0,n.Wm)(r,{class:"btn btn--secondary",to:{name:"trainer"}},{default:(0,n.w5)((()=>[j])),_:1})])])])}const S={},Z=(0,p.Z)(S,[["render",z]]);var K=Z,E=r.p+"img/sprite.635a2f25.svg";const R=E+"#speedometer",I=E+"#target",H=E+"#restart",V={class:"main"},A={class:"trainer"},Y={key:0,class:"trainer__container"},B=(0,n._)("h2",{class:"heading--secondary"},[(0,n.Uk)("Viewport width of your device is not suitable for this test."),(0,n._)("br"),(0,n.Uk)("Please, try other devices.")],-1),N=[B],q={key:1,class:"trainer__container"},G={key:0,class:"trainer__text"},J={key:1,class:"trainer__text"},Q={key:2,class:"trainer__text"},X={class:"trainer__info"},tt={class:"trainer__list"},et={class:"trainer__item"},rt=(0,n._)("span",{class:"trainer__item-head"},[(0,n._)("svg",{class:"trainer__item-icon"},[(0,n._)("use",{"xlink:href":R})]),(0,n.Uk)(" Speed ")],-1),st={class:"trainer__item-stat"},nt=(0,n.Uk)(" WPM"),it={class:"trainer__item"},at=(0,n._)("span",{class:"trainer__item-head"},[(0,n._)("svg",{class:"trainer__item-icon"},[(0,n._)("use",{"xlink:href":I})]),(0,n.Uk)(" Accuracy ")],-1),ot={class:"trainer__item-stat"},ct=(0,n.Uk)("%"),lt=(0,n._)("svg",{class:"trainer__btn-icon"},[(0,n._)("use",{"xlink:href":H})],-1),ut=(0,n.Uk)(" Restart "),dt=[lt,ut];function ht(t,e,r,s,i,o){const c=(0,n.up)("base-loader"),l=(0,n.up)("base-char");return(0,n.wg)(),(0,n.iD)("main",V,[(0,n._)("div",A,[i.isMobile?((0,n.wg)(),(0,n.iD)("div",Y,N)):((0,n.wg)(),(0,n.iD)("div",q,[o.isLoading?((0,n.wg)(),(0,n.iD)("p",G,[(0,n.Wm)(c)])):o.isLoadingFailed?((0,n.wg)(),(0,n.iD)("p",J," Something went wrong! Text loading failed. Please, try again later. ")):((0,n.wg)(),(0,n.iD)("p",Q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.splittedText,((t,e)=>((0,n.wg)(),(0,n.j4)(l,{key:e,char:t,idx:e,"typed-letter":i.typedLetter,"current-position":i.currentPosition},null,8,["char","idx","typed-letter","current-position"])))),128))])),(0,n._)("div",X,[(0,n._)("ul",tt,[(0,n._)("li",et,[rt,(0,n._)("span",st,[(0,n._)("span",null,(0,a.zw)(o.wpmRounded),1),nt])]),(0,n._)("li",it,[at,(0,n._)("span",ot,[(0,n._)("span",null,(0,a.zw)(o.accuracy),1),ct])])]),(0,n._)("button",{class:"trainer__btn",onClick:e[0]||(e[0]=e=>t.$router.go())},dt)])]))])])}const mt={class:"loader-wrapper"},pt=(0,n._)("div",{class:"loader"},null,-1),_t=[pt];function gt(t,e){return(0,n.wg)(),(0,n.iD)("div",mt,_t)}const yt={},ft=(0,p.Z)(yt,[["render",gt]]);var wt=ft;function vt(t,e,r,s,i,o){return(0,n.wg)(),(0,n.iD)("span",{class:(0,a.C_)({"current--default":r.idx===r.currentPosition,"current--error":r.idx===r.currentPosition&&r.typedLetter&&r.typedLetter!==r.char,passed:r.idx<r.currentPosition})},(0,a.zw)(r.char),3)}var kt={props:["char","idx","typedLetter","currentPosition"]};const bt=(0,p.Z)(kt,[["render",vt]]);var xt=bt,Tt={components:{BaseLoader:wt,BaseChar:xt},data(){return{currentPosition:0,typedLetter:null,isPrevKeystrokeWrong:!1,isTestLaunched:!1,timer:null,isMobile:!1}},computed:{splittedText(){return this.$store.getters.splittedText},numberOfWords(){return this.$store.getters.numberOfWords},isLoading(){return this.$store.state.isLoading},isLoadingFailed(){return this.$store.state.isLoadingFailed},accuracy(){return this.$store.getters.accuracy},wpm(){return this.$store.getters.wpm},wpmRounded(){return Math.round(this.wpm)}},methods:{handleKeystroke(t){if(t.key.length>1)return;this.checkTestStart(),this.typedLetter=t.key;const e=this.splittedText[this.currentPosition];this.validateCharacter(e),this.checkTestFinish()},checkTestStart(){this.isTestLaunched||(this.isTestLaunched=!0,this.$store.commit("setTimestamp",(new Date).getTime()),this.$store.commit("incrementWordCount"),clearInterval(this.timer),this.timer=setInterval((()=>this.$store.commit("incrementTime")),1e3))},validateCharacter(t){this.typedLetter===t?(" "===this.typedLetter&&this.$store.commit("incrementWordCount"),this.currentPosition++,this.typedLetter=null,this.isPrevKeystrokeWrong=!1):(this.isPrevKeystrokeWrong||this.$store.commit("incrementMistakesCount"),this.isPrevKeystrokeWrong=!0)},checkTestFinish(){this.currentPosition===this.splittedText.length&&(clearInterval(this.timer),this.$store.commit("updateResults",{wpm:this.wpm,accuracy:this.accuracy}),this.$router.push({path:"/results"}))},handleViewportWidth(){window.innerWidth>900?this.isMobile=!1:this.isMobile=!0}},created(){this.$store.dispatch("getText"),window.addEventListener("keydown",this.handleKeystroke),["load","resize"].forEach((t=>window.addEventListener(t,this.handleViewportWidth)))},beforeUnmount(){clearInterval(this.timer),this.timer=null,window.removeEventListener("keydown",this.handleKeystroke),["load","resize"].forEach((t=>window.removeEventListener(t,this.handleViewportWidth)))}};const Lt=(0,p.Z)(Tt,[["render",ht]]);var Wt=Lt;const Ct=E+"#speedometer-2",$t=E+"#target-2",Ut={class:"main"},Pt={class:"results"},Dt={class:"container results__container"},Ot=(0,n._)("h2",{class:"results__heading"},"Well done!",-1),Ft={class:"results__list"},Mt={class:"results__item results__item--typing"},jt=(0,n._)("svg",{class:"results__item-icon"},[(0,n._)("use",{"xlink:href":Ct})],-1),zt=(0,n._)("h3",{class:"results__item-heading"},"Typing speed:",-1),St={class:"results__item-stat"},Zt=(0,n.Uk)(" wpm "),Kt={class:"results__item results__item--accuracy"},Et=(0,n._)("svg",{class:"results__item-icon"},[(0,n._)("use",{"xlink:href":$t})],-1),Rt=(0,n._)("h3",{class:"results__item-heading"},"Accuracy:",-1),It={class:"results__item-stat"},Ht=(0,n.Uk)("% "),Vt=(0,n._)("p",{class:"results__text"},[(0,n.Uk)("You did a very good job, and we hope that the results matched your expectations!"),(0,n._)("br"),(0,n.Uk)("If not, you can consider this attempt as a warm-up;)"),(0,n._)("br"),(0,n.Uk)("When you feel like taking one more shot, please go ahead and try again! We will always be happy to see you here!")],-1),At=(0,n.Uk)("Try again");function Yt(t,e,r,s,i,o){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("main",Ut,[(0,n._)("section",Pt,[(0,n._)("div",Dt,[Ot,(0,n._)("ul",Ft,[(0,n._)("li",Mt,[jt,zt,(0,n._)("p",St,[(0,n._)("span",null,(0,a.zw)(o.wpm),1),Zt])]),(0,n._)("li",Kt,[Et,Rt,(0,n._)("p",It,[(0,n._)("span",null,(0,a.zw)(o.accuracy),1),Ht])])]),Vt,(0,n.Wm)(c,{class:"btn btn--secondary",to:{name:"trainer"}},{default:(0,n.w5)((()=>[At])),_:1})])])])}var Bt={computed:{wpm(){return this.$store.state.results.length?this.$store.state.results[this.$store.state.results.length-1].wpm:0},accuracy(){return this.$store.state.results.length?this.$store.state.results[this.$store.state.results.length-1].accuracy:0}}};const Nt=(0,p.Z)(Bt,[["render",Yt]]);var qt=Nt;const Gt={class:"main"},Jt=(0,n._)("div",{class:"container"},[(0,n._)("h2",{class:"heading--secondary heading--not-found"},"Oops! Something went wrong. The page you are looking for does not exist!")],-1),Qt=[Jt];function Xt(t,e){return(0,n.wg)(),(0,n.iD)("main",Gt,Qt)}const te={},ee=(0,p.Z)(te,[["render",Xt]]);var re=ee;const se=[{path:"/",name:"home",component:K},{path:"/trainer",name:"trainer",component:Wt},{path:"/results",name:"results",component:qt},{path:"/:notFound(.*)*",name:"not-found",component:re}],ne=(0,$.p7)({history:(0,$.r5)(),routes:se});var ie=ne,ae=r(65),oe={splittedText(t){return t.text?t.text.split(""):[]},numberOfWords(t){return t.text?t.text.split(" ").length:0},wpm(t){return t.time?(t.wordCount/t.time*60).toFixed(1):0},accuracy(t,e){return e.splittedText.length?((e.splittedText.length-t.mistakesCount)/e.splittedText.length*100).toFixed(1):0}},ce={updateText(t,e){t.text=e},incrementTime(t){t.time++},incrementWordCount(t){t.wordCount++},incrementMistakesCount(t){t.mistakesCount++},setTimestamp(t,e){t.timestamp=e},updateResults(t,e){t.results.push(e)},resetState(t){t.mistakesCount=0,t.time=0,t.timestamp=null,t.wordCount=0}},le=r(6265),ue=r.n(le);const de="https://baconipsum.com/api/",he=2;var me={async getText({state:t,commit:e}){t.isLoading=!0,t.isLoadingFailed=!1,e("resetState");try{const{data:r}=await ue().get(de,{params:{type:"all-meat",sentences:he}});e("updateText",...r)}catch{t.isLoadingFailed=!0}finally{t.isLoading=!1}}},pe=(0,ae.MT)({state:{text:null,isLoading:!1,isLoadingFailed:!1,wordCount:0,mistakesCount:0,timestamp:null,time:0,results:[]},getters:oe,mutations:ce,actions:me});(0,s.ri)(C).use(pe).use(ie).mount("#app")}},e={};function r(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,s,n,i){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](s[c])}))?s.splice(c--,1):(o=!1,i<a&&(a=i));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/touchtyper/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,a=s[0],o=s[1],c=s[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(c)var u=c(r)}for(e&&e(s);l<a.length;l++)i=a[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},s=self["webpackChunktouchtyper"]=self["webpackChunktouchtyper"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(9903)}));s=r.O(s)})();
//# sourceMappingURL=app.5164cb30.js.map