webpackJsonp([1],{"0o++":function(t,e){},"8HJI":function(t,e){},CGIo:function(t,e){},Iog5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),a=n("exGp"),s=n.n(a),o=n("7+uW"),u={data:function(){return{sidebar:!1,activeIndex:"1"}},computed:{appTitle:function(){return this.$store.state.appTitle},isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{userSignOut:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("userSignOut");case 2:case"end":return e.stop()}},e,t)}))()}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav-bar"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1),t._v(" "),t.isAuthenticated?t._e():n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{attrs:{to:"signup_main"}},[t._v("Sign Up")])],1),t._v(" "),t.isAuthenticated?t._e():n("el-menu-item",{attrs:{index:"3"}},[n("router-link",{attrs:{to:"signin_main"}},[t._v("Sign In")])],1),t._v(" "),t.isAuthenticated?n("el-menu-item",{attrs:{index:"3"},on:{click:t.userSignOut}},[t._v("Sign Out")]):t._e(),t._v(" "),n("el-menu-item",{attrs:{index:"4"}},[n("router-link",{attrs:{to:"/movie"}},[t._v("Movie List")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"5"}},[n("router-link",{attrs:{to:"/post"}},[t._v("Post")])],1)],1)],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")(u,c,!1,function(t){n("Iog5")},null,null).exports,p=n("/ocq"),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Welcome to Movie App")]),t._v(" "),t.isAuthenticated?n("h3",[t._v("Hi! "+t._s(t.getUserName.email.split("@")[0]))]):t._e(),t._v(" "),n("el-row",[n("el-col",{attrs:{span:12,offset:6}},[t._v("\n        It's a basic SPA"),n("br"),t._v("\n        Firebase 기반 로그인 인증 구현")])],1),n("br"),t._v(" "),t.isAuthenticated?t._e():n("el-button",{attrs:{type:"primary"}},[n("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")])],1),t._v(" "),t.isAuthenticated?t._e():n("el-button",{attrs:{type:"success"}},[n("router-link",{attrs:{to:"/signin_main"}},[t._v("Sign In")])],1)],1)},staticRenderFns:[]};var m=n("VU/8")({name:"Landing",data:function(){return{email:""}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},getUserName:function(){return this.$store.getters.getUserName}},beforeCreate:function(){}},d,!1,function(t){n("xOOQ")},"data-v-6497728c",null).exports,h={name:"Signin",data:function(){return{ruleForm:{email:"",pass:"",checkPass:""},watching_url:window.location.href,full_paths:""}},methods:{userSignIn:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("userSignIn",{email:t.ruleForm.email,password:t.ruleForm.pass});case 2:case"end":return e.stop()}},e,t)}))()},get_next_path:function(){var t=this;return s()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.location.href;case 2:n=(n=e.sent).split("=%2F").length>1?"/"+n.split("=%2F")[1]:"/",t.$store.state.path=n,t.full_paths=n;case 6:case"end":return e.stop()}},e,t)}))()}},computed:{error:function(){return this.$store.state.error},loading:function(){return this.$store.state.loading}},watch:{$route:"get_next_path",error:function(t){t&&(this.alert=!0)},alert:function(t){t||this.$store.commit("setError",null)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"login-box"},[n("el-row",[n("el-col",[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{margin:"auto",width:"350px"},attrs:{model:t.ruleForm,"status-icon":""}},[n("el-form-item",{attrs:{label:"Email",prop:"email"}},[n("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.userSignIn(e):null}},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Password",prop:"pass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.userSignIn(e):null}},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),t._v(" "),n("el-form-item"),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.preventDefault(),t.userSignIn(e)}}},[t._v("Sign In")])],1),t._v(" "),n("br")],1)],1)],1)])},staticRenderFns:[]};var v=n("VU/8")(h,f,!1,function(t){n("xKH0")},"data-v-7f2a4faa",null).exports,_=n("NYxO"),g={name:"Login",data:function(){return{watching_url:window.location.href,full_paths:""}},methods:{userSignUpWithGoogle:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("signInWithGoogle",t.full_paths);case 2:case"end":return e.stop()}},e,t)}))()},get_next_path:function(){var t=this;return s()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.location.href;case 2:n=(n=e.sent).split("=%2F").length>1?"/"+n.split("=%2F")[1]:"/",t.$store.state.path=n,t.full_paths=n;case 6:case"end":return e.stop()}},e,t)}))()}},watch:{$route:"get_next_path"},mounted:function(){this.get_next_path()},components:{login:v}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("로그인")]),t._v(" "),n("login"),t._v(" "),n("el-button",{attrs:{round:""},on:{click:t.userSignUpWithGoogle}},[t._v("Sign in with Google")]),t._v(" "),t.full_paths?n("h1",[t._v(t._s(t.full_paths))]):t._e()],1)},staticRenderFns:[]};var x=n("VU/8")(g,w,!1,function(t){n("mo9A")},"data-v-1e52f312",null).exports,k={name:"Signup_main",methods:{userSignUpWithGoogle:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("signInWithGoogle");case 2:case"end":return e.stop()}},e,t)}))()}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("회원가입")]),this._v(" "),e("el-button",{attrs:{round:""}},[e("router-link",{attrs:{to:"/signup"}},[this._v("Sign up with Email")])],1),e("br"),e("br"),this._v(" "),e("el-button",{attrs:{round:""},on:{click:this.userSignUpWithGoogle}},[this._v("Sign up with Google")])],1)},staticRenderFns:[]};var y=n("VU/8")(k,b,!1,function(t){n("s8lK")},"data-v-6718ebec",null).exports,S={name:"Signup",data:function(){var t=this;return{alert:!1,ruleForm:{email:"",pass:"",checkPass:""},rules:{email:[{required:!0,trigger:"blur"}],pass:[{validator:function(t,e,n){""===e?n(new Error("Please input the password")):n()},trigger:"blur"},{required:!0}],checkPass:[{validator:function(e,n,r){""===n?r(new Error("Please input the password again")):n!==t.ruleForm.pass?r(new Error("Two inputs don't match!")):r()},trigger:"blur"},{required:!0}]}}},methods:{userSignUp:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.ruleForm.pass!==t.ruleForm.checkPass&&console.log("password 불일치"),e.next=3,t.$store.dispatch("userSignUp",{email:t.ruleForm.email,password:t.ruleForm.pass});case 3:case"end":return e.stop()}},e,t)}))()}},computed:{error:function(){return this.$store.state.error},loading:function(){return this.$store.state.loading}},watch:{error:function(t){t&&(this.alert=!0)},alert:function(t){t||this.$store.commit("setError",null)}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Sign Up")]),t._v(" "),n("el-row",[n("el-col",{attrs:{span:12,offset:6}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"status-icon":"","label-width":"120px"}},[n("el-form-item",{attrs:{label:"Email",prop:"email"}},[n("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.userSignUp(e):null}},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Password",prop:"pass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.userSignUp(e):null}},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"PasswordConfirm",prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.userSignUp(e):null}},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.preventDefault(),t.userSignUp(e)}}},[t._v("Submit")])],1)],1),t._v(" "),n("br"),t._v(" "),n("h2",{model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(t._s(t.error))])],1)],1)],1)},staticRenderFns:[]};var F=n("VU/8")(S,$,!1,function(t){n("QPtR")},"data-v-289f9935",null).exports,P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{span:12,offset:6}},[e("h1",[this._v("Home Page")])])],1)},staticRenderFns:[]};n("VU/8")({name:"Home"},P,!1,function(t){n("ZmZa")},"data-v-088bff04",null).exports;var U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("Movie List")]),t._v(" "),n("el-row",{attrs:{gutter:40}},t._l(t.movies,function(e,r){return n("el-col",{key:r,staticStyle:{"margin-bottom":"20px"},attrs:{sm:24,md:6}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",staticStyle:{width:"100%"},attrs:{src:e.poster}}),t._v(" "),n("div",{staticStyle:{padding:"14px"}},[n("h2",[n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v(t._s(e.name))])],1),t._v(" "),n("div",{staticClass:"bottom clearfix"},[n("span",[t._v(t._s(e.director))]),n("br"),t._v(" "),n("span",{staticStyle:{"font-style":"italic",color:"lightgray"}},[t._v(t._s(e.year))])])])])],1)}))],1)},staticRenderFns:[]};var E=n("VU/8")({name:"MovieList",created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},U,!1,function(t){n("pRGG")},"data-v-5e6f75d2",null).exports,A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("상세 내용")]),t._v(" "),n("img",{attrs:{src:t.movie[0].poster,width:"300px"}}),t._v(" "),n("h2",[t._v(t._s(t.movie[0].name))]),t._v(" "),n("h2",[t._v(t._s(t.movie[0].director))]),t._v(" "),n("h4",[t._v(t._s(t.movie[0].year))]),t._v(" "),n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$router.go(-1)}}},[t._v("Back")])])},staticRenderFns:[]};var I=n("VU/8")({name:"ShowPage",created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}},A,!1,function(t){n("8HJI")},"data-v-5e30e480",null).exports,R={name:"Post",data:function(){return{posts:{}}},created:function(){this.getPosts()},methods:{refreshPosts:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPosts();case 2:case"end":return e.stop()}},e,t)}))()},getPosts:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/posts").then(function(e){t.posts=e.data.posts});case 2:case"end":return e.stop()}},e,t)}))()},deletePost:function(t){var e=this;return s()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$http.delete("/api/posts/delete/"+t,{id:t}).then(function(t){alert(t.data.message)}).catch(function(t){alert("오류가 발생했습니다")});case 2:return n.next=4,e.refreshPosts();case 4:case"end":return n.stop()}},n,e)}))()}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"80%",margin:"auto"}},[n("h1",[t._v("Posts")]),t._v(" "),t.posts.length>0?n("div",[n("table",{staticStyle:{width:"90%",margin:"auto"}},[t._m(0),t._v(" "),t._l(t.posts,function(e){return n("tr",[e.written_by?n("td",[t._v(t._s(e.written_by))]):n("td",[t._v("Anonymous")]),t._v(" "),n("td",[n("router-link",{attrs:{to:{name:"PostDetail",params:{id:e._id}}}},[t._v(t._s(e.title))])],1),t._v(" "),n("td",[t._v(t._s(e.created_at.split("T")[0])+" "+t._s(e.created_at.split("T")[1].slice(0,5)))]),t._v(" "),n("td",{attrs:{align:"center"}},[n("router-link",{attrs:{to:{name:"EditPost",params:{id:e._id}}}},[t._v("Edit")]),t._v(" "),n("span",{on:{click:function(n){t.deletePost(e._id)}}},[t._v("Delete")])],1)])})],2),t._v(" "),n("br")]):n("div",[n("h3",[t._v("No Posts... broo...")])]),t._v(" "),n("el-button",{attrs:{type:"success"}},[n("router-link",{attrs:{to:"/newpost"}},[t._v("Write")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"background-color":"lightgray"},attrs:{width:"130"}},[this._v("User")]),this._v(" "),e("td",{staticStyle:{"background-color":"lightsteelblue"}},[this._v("Title")]),this._v(" "),e("td",{staticStyle:{"background-color":"lightyellow"},attrs:{width:"200"}},[this._v("When")]),this._v(" "),e("td",{staticStyle:{"background-color":"lightgoldenrodyellow"},attrs:{width:"100",align:"center"}},[this._v("Action")])])}]};var C=n("VU/8")(R,G,!1,function(t){n("0o++")},"data-v-095ac91d",null).exports,N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.post.created_at))]),n("br"),t._v(" "),n("div",{staticStyle:{padding:"30px",width:"80%",margin:"auto","background-color":"#E5E5E5"}},[t._v(t._s(t.post.description))]),n("br"),t._v(" "),n("span",[t._v(t._s(t.post.written_by))])]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(e){t.$router.go(-1)}}},[t._v("Back")]),t._v(" "),n("el-button",{attrs:{type:"default"}},[n("router-link",{attrs:{to:"/post"}},[t._v("List")])],1)],1)},staticRenderFns:[]};var O=n("VU/8")({name:"PostDeatil",data:function(){return{post:{}}},created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/posts/"+e).then(function(e){t.post=e.data})}},N,!1,function(t){n("coX4")},"data-v-306e6068",null).exports,L={name:"NewPost",data:function(){return{title:"",description:""}},methods:{addPost:function(){var t=this;this.$http.post("/api/posts/new",{title:this.title,description:this.description,written_by:this.getUserName.email.split("@")[0]}).then(function(e){alert(e.data.message),t.$router.push({name:"Post"})}).catch(function(t){alert("오류가 발생했습니다")})}},computed:{getUserName:function(){return this.$store.getters.getUserName}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-form",{staticStyle:{width:"400px",margin:"auto"}},[n("legend",[n("h2",[t._v("New Post")])]),t._v(" "),n("el-form-item",{attrs:{label:"Title"}},[n("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Description"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:10}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),n("el-button",{on:{click:t.addPost}},[t._v("Submit")])],1)],1)],1)},staticRenderFns:[]};var W=n("VU/8")(L,V,!1,function(t){n("jBZ5")},"data-v-26254054",null).exports,T={name:"NewPost",data:function(){return{title:"",description:"",id:""}},mounted:function(){var t=this;this.id=this.$route.params.id,this.$http.get("/api/posts/"+this.id).then(function(e){t.title=e.data.title,t.description=e.data.description})},methods:{editPost:function(){var t=this;this.$http.put("/api/posts/edit/"+this.id,{id:this.id,title:this.title,description:this.description}).then(function(e){alert(e.data.message),t.$router.push({name:"Post"})}).catch(function(t){})}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-form",{staticStyle:{width:"400px",margin:"auto"}},[n("legend",[n("h2",[t._v("Edit Post")])]),t._v(" "),n("el-form-item",{attrs:{label:"Title"}},[n("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Description"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:10}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),n("el-button",{on:{click:t.editPost}},[t._v("Submit")])],1)],1)],1)},staticRenderFns:[]};var D=n("VU/8")(T,q,!1,function(t){n("CGIo")},"data-v-7f7687fc",null).exports,H={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticStyle:{color:"palevioletred"}},[this._v("Not Found 404")])},staticRenderFns:[]};n("VU/8")({name:"NotFound"},H,!1,function(t){n("rRVG")},"data-v-0ad42d8c",null).exports;var M=n("yviF"),z=n.n(M);n("dih4"),n("881v");o.default.use(p.a);var Q=new p.a({mode:"history",routes:[{path:"/",name:"Landing",component:m},{path:"/signin_main",name:"Signin_main",component:x},{path:"/signup_main",name:"Signup_main",component:y},{path:"/signin",name:"Signin",component:v},{path:"/signup",name:"Signup",component:F},{path:"/home",redirect:"/"},{path:"/post",name:"Post",component:C},{path:"/post/:id",name:"PostDetail",component:O},{path:"/newpost",name:"NewPost",component:W},{path:"/post/edit/:id",name:"EditPost",component:D},{path:"/movie",name:"MovieList",component:E,meta:{requiresAuth:!0}},{path:"/:id",name:"show",component:I,meta:{requiresAuth:!0}}]});Q.beforeEach(function(t,e,n){var r=t.matched.some(function(t){return t.meta.requiresAuth}),i=z.a.auth().currentUser;r&&!i?n({path:"/signin_main",query:{redirect:t.fullPath}}):n()});var Z=Q,B=n("zL8q"),K=n.n(B);n("tvR6"),n("sfy8");o.default.use(_.a);var X=new _.a.Store({state:{appTitle:"My Awesome App",user:null,error:null,loading:!1,login_error:!1,path:""},mutations:{setUser:function(t,e){t.user=e},setError:function(t,e){t.error=e},setLoading:function(t,e){t.loading=e}},actions:{userSignUp:function(t,e){var n=t.commit;n("setLoading",!0),z.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){n("setUser",{email:t.user.email}),n("setLoading",!1),n("setError",null),Z.push("/home")})},signInWithGoogle:function(){var t=this;return s()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new z.a.auth.GoogleAuthProvider,e.next=3,z.a.auth().signInWithPopup(n).then(function(e){t.state.user=e.user,window.open(t.state.path,"_self")}).catch(function(t){return alert(t)});case 3:case"end":return e.stop()}},e,t)}))()},userSignIn:function(t,e){var n=this,r=t.commit;return s()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("setLoading",!0);case 2:return t.next=4,z.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){r("setUser",{email:t.user.email}),r("setLoading",!1),r("setError",null),window.open(n.state.path,"_self")}).catch(function(t){r("setError",t.message),r("setLoading",!1),"auth/wrong-password"===t.code?alert("비밀번호가 틀렸습니다."):alert("존재하지 않는 아이디입니다.")});case 4:case"end":return t.stop()}},t,n)}))()},autoSignIn:function(t,e){(0,t.commit)("setUser",{email:e.email})},userSignOut:function(t){var e=this,n=t.commit;return s()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,confirm("로그아웃 하시겠습니까?");case 2:z.a.auth().signOut(),n("setUser",null),Z.push("/");case 5:case"end":return t.stop()}},t,e)}))()}},getters:{isAuthenticated:function(t){return null!==t.user&&void 0!==t.user},getUserName:function(){return z.a.auth().currentUser}}}),j=n("mtWM"),J=n.n(j);o.default.use(K.a),o.default.config.productionTip=!1,o.default.prototype.$http=J.a;z.a.initializeApp({apiKey:"AIzaSyAES7-opTGUip1N-Qv1fgDqXQXgMIW-lxk",authDomain:"presto-7de82.firebaseapp.com",databaseURL:"https://presto-7de82.firebaseio.com",projectId:"presto-7de82",storageBucket:"presto-7de82.appspot.com",messagingSenderId:"374685468497"});var Y=z.a.auth().onAuthStateChanged(function(t){new o.default({el:"#app",router:Z,store:X,render:function(t){return t(l)},components:{App:l},template:"<App/>",created:function(){var e=this;return s()(i.a.mark(function n(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,X.dispatch("autoSignIn",t);case 3:case"end":return e.stop()}},n,e)}))()}}),Y()})},QPtR:function(t,e){},ZmZa:function(t,e){},coX4:function(t,e){},jBZ5:function(t,e){},mo9A:function(t,e){},pRGG:function(t,e){},rRVG:function(t,e){},s8lK:function(t,e){},sfy8:function(t,e){},tvR6:function(t,e){},xKH0:function(t,e){},xOOQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.52041589be4cd262bd0e.js.map