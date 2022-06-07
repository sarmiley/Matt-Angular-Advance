"use strict";(self.webpackChunkMatt_Angular_Advance=self.webpackChunkMatt_Angular_Advance||[]).push([[987],{2987:(K,C,i)=>{i.r(C),i.d(C,{MemberModule:()=>V});var D=i(7579),e=i(5e3);let u=(()=>{class t{constructor(){this.output=new D.x}getObservable(){return this.output.asObservable()}outputFromDynamicComponent(n){this.output.next(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var c=i(3075),S=i(793),j=i(281),p=i(9808),v=i(8558);let J=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-member-account"]],inputs:{account:"account"},decls:2,vars:0,template:function(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"member-account works!"),e.qZA())},styles:[""]}),t})(),U=(()=>{class t{constructor(n,o){this.inject=n,this.serv=o}ngOnInit(){this.dataIn=this.inject.get(f)}sendData(){this.serv.outputFromDynamicComponent("Sent data from Tab1")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.zs3),e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab1"]],decls:6,vars:2,consts:[[3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return o.sendData()}),e._uU(5,"Send data from Tab1 to Parent"),e.qZA()),2&n&&(e.xp6(1),e.hij("\u6703\u54e1\u59d3\u540d\u70ba:",o.dataIn.name,""),e.xp6(2),e.hij("\u6703\u54e1\u6027\u5225\u70ba:",o.dataIn.gender,""))},styles:[""]}),t})(),I=(()=>{class t{constructor(n,o){this.inject=n,this.serv=o}ngOnInit(){this.dataIn=this.inject.get(f)}sendData(){this.serv.outputFromDynamicComponent("Sent data from Tab2")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.zs3),e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab2"]],decls:6,vars:2,consts:[[3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return o.sendData()}),e._uU(5,"Send data from Tab2 to Parent"),e.qZA()),2&n&&(e.xp6(1),e.hij("\u6703\u54e1\u59d3\u540d\u70ba:",o.dataIn.name,""),e.xp6(2),e.hij("\u6703\u54e1\u6027\u5225\u70ba:",o.dataIn.gender,""))},styles:[""]}),t})();var x=i(4482),h=i(5403),k=i(4671),N=i(5963),Y=i(8421);function T(t=1/0){let r;r=t&&"object"==typeof t?t:{count:t};const{count:n=1/0,delay:o,resetOnSuccess:a=!1}=r;return n<=0?k.y:(0,x.e)((s,m)=>{let l,g=0;const M=()=>{let _=!1;l=s.subscribe((0,h.x)(m,d=>{a&&(g=0),m.next(d)},void 0,d=>{if(g++<n){const F=()=>{l?(l.unsubscribe(),l=null,M()):_=!0};if(null!=o){const W="number"==typeof o?(0,N.H)(o):(0,Y.Xf)(o(d,g)),O=(0,h.x)(m,()=>{O.unsubscribe(),F()},()=>{m.complete()});W.subscribe(O)}else F()}else m.error(d)})),_&&(l.unsubscribe(),l=null,M())};M()})}var y=i(2340),w=i(520);let A=(()=>{class t extends class B{constructor(r){this.http=r}get(r){return this.http.get(`${y.N.apiUrl}${r}`).pipe(T(1))}post(r,n={}){return this.http.post(`${y.N.apiUrl}${r}`,n).pipe(T(1))}}{constructor(n){super(n),this.memberList="init"}getMemberList(){return console.log("call gerMemberList service"),this.get("api/memberList")}setMemberList(n){this.memberList=n}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(w.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=i(9224);let z=(()=>{class t{get color(){return this.appColorful||"red"}changeColor(n){this.appColorful=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","appColorful",""]],hostVars:2,hostBindings:function(n,o){2&n&&e.Udp("color",o.color)},inputs:{appColorful:"appColorful"},exportAs:["appColorful"]}),t})();var P=i(7423),Z=i(3251);let Q=(()=>{class t{constructor(n){this.memberService=n,this.memberListChange=new e.vpe}ngOnInit(){}getMemberList(){this.memberService.getMemberList().subscribe(o=>{console.log(o)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(A))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-member-list"]],inputs:{memberList:"memberList"},outputs:{memberListChange:"memberListChange"},decls:7,vars:2,consts:[[1,"",3,"ngModel","ngModelChange","change"],["member",""],[3,"click"]],template:function(n,o){if(1&n){const a=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("ngModelChange",function(m){return o.memberList=m})("change",function(){return o.memberListChange.emit(o.memberList)}),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"button",2),e.NdJ("click",function(){e.CHM(a);const m=e.MAs(1);return m.value=m.value+1}),e._uU(6,"Get Member List"),e.qZA()}if(2&n){const a=e.MAs(1);e.Q6J("ngModel",o.memberList),e.xp6(3),e.Oqu(a.value)}},directives:[c.Fj,c.JJ,c.On],styles:[""]}),t})(),G=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-member-memo"]],decls:2,vars:0,template:function(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"member-memo works!"),e.qZA())},styles:[""]}),t})();const X=["color"];function E(t,r){1&t&&e.GkF(0)}function $(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"li",14)(1,"a",15),e.NdJ("click",function(){const a=e.CHM(n),s=a.$implicit,m=a.index;return e.oxw().ldTab(s.component,s.data,m)}),e._uU(2),e.qZA()()}if(2&t){const n=r.$implicit;e.xp6(1),e.Q6J("ngClass",n.isActive?"activeTab":""),e.xp6(1),e.Oqu(n.tab)}}const f=new e.OlP("");let L=(()=>{class t{constructor(n,o,a){this.memberService=n,this.serv=o,this.injector=a,this.memberList="",this.account="",this.messages=[],this.activeComponentData="",this.tabs=[{tab:"Mark",component:U,data:{name:"Mark",gender:"male"},isActive:!0},{tab:"Maria",component:I,data:{name:"Maria",gender:"female"},isActive:!0}],this.memberService.getMemberList().subscribe(s=>{this.memberService.setMemberList(s)})}ngOnInit(){this.serv.getObservable().subscribe(n=>{console.log("data is change: ",n),this.receivedData=n}),this.ldTab(this.tabs[0].component,this.tabs[0].data,0)}changeColor(n){this.color.changeColor(n)}getAccount(){return J}setActiveTab(n){this.tabs.forEach((o,a)=>{o.isActive=a===n})}ldTab(n,o,a){this.setActiveTab(a),this.activeComponent=n,this.activeComponentData=o,this.createInjector()}createInjector(){this.myInjector=e.zs3.create({providers:[{provide:f,useValue:this.activeComponentData}],parent:this.injector})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(A),e.Y36(u),e.Y36(e.zs3))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-member-manage"]],viewQuery:function(n,o){if(1&n&&e.Gf(X,5),2&n){let a;e.iGM(a=e.CRH())&&(o.color=a.first)}},decls:30,vars:7,consts:[[1,"card-container"],["appColorful",""],["appColorful","purple",3,"ngModel","ngModelChange"],["color","appColorful"],["mat-button","",3,"click"],[1,"tabs-container"],["label","List"],[3,"memberList","memberListChange"],["label","Account"],[4,"ngComponentOutlet"],["label","Memo"],[1,"nav"],["class","nav-item",4,"ngFor","ngForOf"],[3,"ngComponentOutlet","ngComponentOutletInjector"],[1,"nav-item"],[1,"nav-link",3,"ngClass","click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-title")(3,"p",null,1),e._uU(5,"Member List"),e.qZA()(),e.TgZ(6,"mat-card-content")(7,"input",2,3),e.NdJ("ngModelChange",function(s){return o.memberList=s}),e.qZA()(),e.TgZ(9,"mat-card-footer")(10,"button",4),e.NdJ("click",function(){return o.changeColor("yellow")}),e._uU(11,"Yellow"),e.qZA(),e.TgZ(12,"button",4),e.NdJ("click",function(){return o.changeColor("blue")}),e._uU(13,"blue"),e.qZA(),e.TgZ(14,"button",4),e.NdJ("click",function(){return o.changeColor("red")}),e._uU(15,"Red"),e.qZA()()()(),e.TgZ(16,"div",5)(17,"mat-tab-group")(18,"mat-tab",6)(19,"app-member-list",7),e.NdJ("memberListChange",function(s){return o.memberList=s}),e.qZA()(),e.TgZ(20,"mat-tab",8),e.YNc(21,E,1,0,"ng-container",9),e.qZA(),e.TgZ(22,"mat-tab",10),e._UZ(23,"app-member-memo"),e.qZA()()(),e.TgZ(24,"div",5)(25,"ul",11),e.YNc(26,$,3,2,"li",12),e.qZA(),e.GkF(27,13),e.TgZ(28,"p"),e._uU(29),e.qZA()()),2&n&&(e.xp6(7),e.Q6J("ngModel",o.memberList),e.xp6(12),e.Q6J("memberList",o.memberList),e.xp6(2),e.Q6J("ngComponentOutlet",o.getAccount()),e.xp6(5),e.Q6J("ngForOf",o.tabs),e.xp6(1),e.Q6J("ngComponentOutlet",o.activeComponent)("ngComponentOutletInjector",o.myInjector),e.xp6(2),e.hij("Data received from Tab Component: ",o.receivedData,""))},directives:[b.a8,b.n5,b.dn,c.Fj,z,c.JJ,c.On,b.rt,P.lW,Z.SP,Z.uX,Q,p.$G,G,p.sg,p.mk],styles:[".tabs-container[_ngcontent-%COMP%]{width:80vw;margin:30px auto;padding:15px;border:1px solid;border-radius:20px}.card-container[_ngcontent-%COMP%]{width:80vw;margin:30px auto;padding:15px}.activeTab[_ngcontent-%COMP%]{background-color:#ff0;color:purple}.nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link[_ngcontent-%COMP%]{display:block;padding:.5rem 1rem}"]}),t})();const q=[{path:"manage",component:L},{path:"",component:L}];let R=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[v.Bz.forChild(q)],v.Bz]}),t})();var H=i(103);let V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[j.v,u],imports:[[p.ez,H.m,R,S.q,c.u5]]}),t})()}}]);