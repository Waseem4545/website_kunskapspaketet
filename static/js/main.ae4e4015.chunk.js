(this.webpackJsonpkunskapspaketet=this.webpackJsonpkunskapspaketet||[]).push([[0],{209:function(e,a,t){e.exports=t.p+"static/media/fullscreen_mode.89a5d4f2.png"},212:function(e,a,t){e.exports=t(413)},217:function(e,a,t){},368:function(e,a,t){},369:function(e,a,t){},413:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(82),i=t.n(r),c=(t(217),t(9)),s=t(10),m=t(12),o=t(11),u=t(85),d=t(4),p=t(7),E=(t(368),t(369),t(84)),b=t(27),f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).login=n.login.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.signup=n.signup.bind(Object(b.a)(n)),n.state={email:"",password:""},n}return Object(s.a)(t,[{key:"login",value:function(e){e.preventDefault(),this.props.firebase.login(this.state).catch((function(e){console.log("doSignInWithEmailAndPassword - err: ",e)}))}},{key:"signup",value:function(e){e.preventDefault();var a={email:this.state.email,phoneNumber:"",name:"",role:"student"};this.props.firebase.createUser(this.state,a).catch((function(e){console.log("doCreateUserWithEmailAndPassword - err: ",e)}))}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row login"},l.a.createElement("div",{className:"col-md-6 login-form"},l.a.createElement("form",{action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:this.state.email,type:"email",onChange:this.handleChange,id:"InputEmail",className:"form-control",name:"email",placeholder:"E-post"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:this.state.password,type:"password",onChange:this.handleChange,id:"InputPassword",className:"form-control",name:"password",placeholder:"L\xf6senord"})),l.a.createElement("button",{type:"submit",onClick:this.login,className:"btn btn-primary",name:"values"},"Logga in"),l.a.createElement("button",{onClick:this.signup,className:"btn btn-success",name:"values"},"Registrera"))))}}]),t}(n.Component),h=Object(p.firebaseConnect)()(f),g=t(209),v=t.n(g),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={title:"V\xe4lkommen hos kunskappaketet "},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid main-container"},l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"banner-content"},l.a.createElement("h5",null,this.state.title),l.a.createElement("hr",null),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto est voluptas distinctio cum.")),l.a.createElement("div",{className:"banner-image"},l.a.createElement("img",{src:v.a,alt:""}))),l.a.createElement(h,null))}}]),t}(n.Component),O=function(e){return l.a.createElement("div",{className:"categories"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h4",null,"H\xe4lsa")),l.a.createElement("li",null,l.a.createElement("h4",null,"Svenska")),l.a.createElement("li",null,l.a.createElement("h4",null,"SO")),l.a.createElement("li",null,l.a.createElement("h4",null,"Arbetsfr\xe5ga")),l.a.createElement("li",null,l.a.createElement("h4",null,"utbildning")),l.a.createElement("li",null,l.a.createElement("h4",null,"Annat"))))},j=function(e){return l.a.createElement("div",{className:"mobile-navbar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-sign-out fa-lg","aria-hidden":"true"})),l.a.createElement(u.b,{to:"/hem"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-home fa-lg","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-arrow-left fa-lg","aria-hidden":"true"}))))},y=t(45),k=t(16),q=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).logout=n.logout.bind(Object(b.a)(n)),n.state={user:null},n}return Object(s.a)(t,[{key:"logout",value:function(){this.props.firebase.logout()}},{key:"render",value:function(){var e=this.props.profile;return l.a.createElement("div",{className:"container-fluid public-container"},l.a.createElement("div",{className:"welcome"},l.a.createElement("h6",{className:"text-white pb-5 pt-4"},"V\xe4lkommen ",e.name?e.name:e.email),l.a.createElement("button",{onClick:this.logout,className:"btn btn-danger"},"Logga ut")),l.a.createElement(O,null),l.a.createElement("div",{className:"row instructions"},l.a.createElement("div",{className:"col-md-10 mx-auto pb-5 content"},l.a.createElement("h5",null,"instruktioner om hur eleverna kan anv\xe4nda kategorierna"),l.a.createElement("hr",null),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae commodi dolorem aperiam quibusdam, itaque temporibus nobis, praesentium, corrupti officiis debitis unde voluptate quaerat veritatis. Sed officiis nihil ipsum vitae!"))),l.a.createElement(j,null))}}]),t}(n.Component),w=Object(k.d)(Object(p.firebaseConnect)(),Object(p.firestoreConnect)(),Object(y.b)((function(e){return{profile:e.firebase.profile}})))(q),C=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={user:"Petter "},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid public-container"},l.a.createElement("div",{className:"lecture_list"},l.a.createElement("ul",null,l.a.createElement("li",null,"f\xf6rl\xe4sning 1"),l.a.createElement("li",null,"f\xf6rl\xe4sning 2"),l.a.createElement("li",null,"f\xf6rl\xe4sning 3"),l.a.createElement("li",null,"f\xf6rl\xe4sning 4"),l.a.createElement("li",null,"f\xf6rl\xe4sning 5"),l.a.createElement("li",null,"f\xf6rl\xe4sning 6"),l.a.createElement("li",null,"f\xf6rl\xe4sning 7"),l.a.createElement("li",null,"f\xf6rl\xe4sning 8"),l.a.createElement("li",null,"f\xf6rl\xe4sning 9"),l.a.createElement("li",null,"f\xf6rl\xe4sning 1"),l.a.createElement("li",null,"f\xf6rl\xe4sning 2"),l.a.createElement("li",null,"f\xf6rl\xe4sning 3"),l.a.createElement("li",null,"f\xf6rl\xe4sning 4"),l.a.createElement("li",null,"f\xf6rl\xe4sning 5"),l.a.createElement("li",null,"f\xf6rl\xe4sning 6"),l.a.createElement("li",null,"f\xf6rl\xe4sning 7"),l.a.createElement("li",null,"f\xf6rl\xe4sning 8"),l.a.createElement("li",null,"f\xf6rl\xe4sning 9"))),l.a.createElement(j,null))}}]),t}(n.Component),x=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={user:"Petter "},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid public-container"},l.a.createElement("div",{className:"lecture py-5"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("iframe",{title:"vidoe",width:"800px",height:"350px",src:"https://www.youtube.com/embed/tgbNymZ7vqY"})),l.a.createElement("div",{className:"theory row mt-5"},l.a.createElement("div",{className:"col-md-10 mx-auto content p-3"},l.a.createElement("h4",null,"Title "),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet?end minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet?end minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nam quasi est distinctio consequuntur hic explicabo ducimus natus cumque, repellendus cum fuga modi minima iure quaerat suscipit, obcaecati dolores amet?end")))),l.a.createElement(j,null))}}]),t}(n.Component),L=t(57),S=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"modal fade",id:"adduser",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"adduser"},"l\xe4gg till ny anv\xe4ndare"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",{action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Namn "),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Namn"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," E-post "),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"E-post"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," L\xf6senord "),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"l\xf6senord"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Roll "),l.a.createElement("select",{className:"form-control form-control-sm"},l.a.createElement("option",null,"elev"),l.a.createElement("option",null,"L\xe4rare"))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"St\xe4ng"),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Spara"))))))),l.a.createElement("div",{className:"modal fade",id:"lecture",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"adduser"},"l\xe4gg till ny f\xf6rel\xe4sning"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," kategori "),l.a.createElement("select",{className:"form-control form-control-sm"},l.a.createElement("option",null,"H\xe4lsa"),l.a.createElement("option",null,"Svenska"),l.a.createElement("option",null,"Arbetsfr\xe5ga"),l.a.createElement("option",null,"SO"),l.a.createElement("option",null,"Utbildning"),l.a.createElement("option",null,"Annat"))),l.a.createElement("form",{action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," video url "),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"url"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Mer info"),l.a.createElement("textarea",{className:"form-control",name:"",id:"",cols:"30",rows:"10"})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"St\xe4ng"),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Spara"))))))))},A=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={users:[]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firestore.collection("users").get().then((function(a){var t=a.docs.map((function(e){return Object(L.a)({id:e.id},e.data())}));e.setState({users:t})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("ul",null,l.a.createElement("li",null,"l\xe4rare: jens"),l.a.createElement("li",null,"email: jens@gmail.com"))),l.a.createElement("main",null,l.a.createElement("div",{className:"student mt-5"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h5",{className:"text-center"},"anv\xe4ndare tabell")),l.a.createElement("table",{className:"table table-sm"},l.a.createElement("thead",{className:"bg-Secondary"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"roll"),l.a.createElement("th",{scope:"col"},"Namn"),l.a.createElement("th",{scope:"col"},"e-post"),l.a.createElement("th",{scope:"col"},l.a.createElement("button",{className:"btn btn-primary btn-sm","data-toggle":"modal","data-target":"#adduser"},l.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))),l.a.createElement("tbody",null,this.state.users.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.role),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phoneNumber),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-danger btn-sm"},l.a.createElement("i",{className:"fa fa-eraser","aria-hidden":"true"}))))}))))),l.a.createElement("div",{className:"lecture mt-5"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h5",{className:"text-center"},"F\xf6rel\xe4sning")),l.a.createElement("table",{className:"table table-sm"},l.a.createElement("thead",{className:"bg-Secondary"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"kategori"),l.a.createElement("th",{scope:"col"},"video"),l.a.createElement("th",{scope:"col"},"info"),l.a.createElement("th",{scope:"col"},l.a.createElement("button",{className:"btn btn-primary btn-sm","data-toggle":"modal","data-target":"#lecture"},l.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"h\xe4lsa"),l.a.createElement("td",null,"https://getbootstra....."),l.a.createElement("td",null,"Lorem ipsum dolor, sit amet...."),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-danger mr-1 btn-sm"},l.a.createElement("i",{className:"fa fa-eraser","aria-hidden":"true"})))))))),l.a.createElement(S,null))}}]),t}(n.Component),I=Object(k.d)(Object(p.firebaseConnect)(),Object(p.firestoreConnect)())(A),_=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={user:null},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth().onAuthStateChanged((function(a){a?e.setState({user:a}):(e.isAuthenticated=!1,e.setState({user:null}))}))}},{key:"render",value:function(){var e=this.props.profile;return l.a.createElement("div",{className:"app"},Object(p.isLoaded)(e)&&l.a.createElement(u.a,null,l.a.createElement(d.a,{path:"/",exact:!0,component:e.email?w:N}),l.a.createElement(d.a,{path:"/hem",component:e.email?w:N}),l.a.createElement(d.a,{path:"/kategori_list",component:e.email?C:N}),l.a.createElement(d.a,{path:"/forlasning",component:e.email?x:N}),l.a.createElement(d.a,{path:"/admin",component:e.email?I:N})))}}]),t}(n.Component),P=Object(k.d)(Object(p.firebaseConnect)(),Object(p.firestoreConnect)(),Object(y.b)((function(e){return{profile:e.firebase.profile}})))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(136),R=t(86),D=t.n(R),F=(t(407),t(409),t(211)),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET DEFAULT LECTURES":return Object(L.a)(Object(L.a)({},e),[a]);default:return e}};D.a.initializeApp({apiKey:"AIzaSyCjN4obQGSoePw-wME_yA8JVx6kIzuRCwE",authDomain:"kunskapspaketet.firebaseapp.com",databaseURL:"https://kunskapspaketet.firebaseio.com",projectId:"kunskapspaketet",storageBucket:"kunskapspaketet.appspot.com",messagingSenderId:"1011354741666",appId:"1:1011354741666:web:fe999e52c5d62fedb420fb"}),D.a.firestore();var U=Object(k.c)({defaultLectures:M,firebase:p.firebaseReducer,firestore:Q.firestoreReducer}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,V=Object(k.e)(U,T(Object(k.a)(F.a))),W={firebase:D.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:V.dispatch,createFirestoreInstance:Q.createFirestoreInstance};i.a.render(l.a.createElement(y.a,{store:V},l.a.createElement(p.ReactReduxFirebaseProvider,W,l.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.ae4e4015.chunk.js.map