webpackJsonp([0],{"04VD":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),a=n.n(s),o=n("aA9S"),r=n.n(o),i=n("8Q2T"),c=n("9rMa"),l=n("oAV5"),u=n("26Oo"),d=n("2hfY"),h=n("FN8c"),m={name:"contest-list",components:{Pagination:u.a},data:function(){return{page:1,query:{status:"",keyword:"",rule_type:""},limit:8,total:0,rows:"",contests:[],CONTEST_STATUS_REVERSE:h.b,cur_contest_id:""}},beforeRouteEnter:function(t,e,n){i.a.getContestList(0,8).then(function(t){n(function(e){e.contests=t.data.data.results,e.total=t.data.data.total})},function(t){n()})},methods:{init:function(){var t=this.$route.query;this.query.status=t.status||"",this.query.rule_type=t.rule_type||"",this.query.keyword=t.keyword||"",this.page=parseInt(t.page)||1,this.getContestList()},getContestList:function(){var t=this,e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)-1)*this.limit;i.a.getContestList(e,this.limit,this.query).then(function(e){t.contests=e.data.data.results,t.total=e.data.data.total})},changeRoute:function(){var t=r()({},this.query);t.page=this.page,this.$router.push({name:"contest-list",query:l.a.filterEmptyValue(t)})},onRuleChange:function(t){this.query.rule_type=t,this.page=1,this.changeRoute()},onStatusChange:function(t){this.query.status=t,this.page=1,this.changeRoute()},goContest:function(t){this.cur_contest_id=t.id,t.contest_type===h.c.PUBLIC||this.isAuthenticated?this.$router.push({name:"contest-details",params:{contestID:t.id}}):(this.$error("Please login first."),this.$store.dispatch("changeModalStatus",{visible:!0}))},getDuration:function(t,e){return d.a.duration(t,e)}},computed:a()({},Object(c.mapGetters)(["isAuthenticated","user"])),watch:{$route:function(t,e){t!==e&&this.init()}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{attrs:{type:"flex"}},[s("Col",{attrs:{span:24}},[s("Panel",{attrs:{id:"contest-card",shadow:""}},[s("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(""===t.query.rule_type?"All":t.query.rule_type)+" Contests")]),t._v(" "),s("div",{attrs:{slot:"extra"},slot:"extra"},[s("ul",{staticClass:"filter"},[s("li",[s("Dropdown",{on:{"on-click":t.onRuleChange}},[s("span",[t._v(t._s(""===t.query.rule_type?"Rule":t.query.rule_type)+"\n              "),s("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),s("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},[s("Dropdown-item",{attrs:{name:""}},[t._v("All")]),t._v(" "),s("Dropdown-item",{attrs:{name:"OI"}},[t._v("OI")]),t._v(" "),s("Dropdown-item",{attrs:{name:"ACM"}},[t._v("ACM")])],1)],1)],1),t._v(" "),s("li",[s("Dropdown",{on:{"on-click":t.onStatusChange}},[s("span",[t._v(t._s(""===t.query.status?"Status":t.CONTEST_STATUS_REVERSE[t.query.status].name)+"\n              "),s("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),s("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},[s("Dropdown-item",{attrs:{name:""}},[t._v("All")]),t._v(" "),s("Dropdown-item",{attrs:{name:"0"}},[t._v("UnderWay")]),t._v(" "),s("Dropdown-item",{attrs:{name:"1"}},[t._v("Not Started")]),t._v(" "),s("Dropdown-item",{attrs:{name:"-1"}},[t._v("Ended")])],1)],1)],1),t._v(" "),s("li",[s("Input",{attrs:{id:"keyword",icon:"ios-search-strong",placeholder:"Keyword"},on:{"on-enter":t.changeRoute,"on-click":t.changeRoute},model:{value:t.query.keyword,callback:function(e){t.$set(t.query,"keyword",e)},expression:"query.keyword"}})],1)])]),t._v(" "),0==t.contests.length?s("p",{attrs:{id:"no-contest"}},[t._v("No contest")]):t._e(),t._v(" "),s("ol",{attrs:{id:"contest-list"}},t._l(t.contests,function(e){return s("li",{key:e.title},[s("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("img",{staticClass:"trophy",attrs:{src:n("uZQl")}}),t._v(" "),s("Col",{staticClass:"contest-main",attrs:{span:18}},[s("p",{staticClass:"title"},[s("a",{staticClass:"entry",on:{click:function(n){n.stopPropagation(),t.goContest(e)}}},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),"Public"!=e.contest_type?[s("Icon",{attrs:{type:"ios-locked-outline",size:"20"}})]:t._e()],2),t._v(" "),s("ul",{staticClass:"detail"},[s("li",[s("Icon",{attrs:{type:"calendar",color:"#3091f2"}}),t._v("\n              "+t._s(t._f("localtime")(e.start_time,"YYYY-M-D HH:mm"))+"\n            ")],1),t._v(" "),s("li",[s("Icon",{attrs:{type:"android-time",color:"#3091f2"}}),t._v("\n              "+t._s(t.getDuration(e.start_time,e.end_time))+"\n            ")],1),t._v(" "),s("li",[s("Button",{attrs:{size:"small",shape:"circle"},on:{click:function(n){t.onRuleChange(e.rule_type)}}},[t._v("\n                "+t._s(e.rule_type)+"\n              ")])],1)])]),t._v(" "),s("Col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[s("Tag",{attrs:{type:"dot",color:t.CONTEST_STATUS_REVERSE[e.status].color}},[t._v(t._s(t.CONTEST_STATUS_REVERSE[e.status].name))])],1)],1)],1)}))]),t._v(" "),s("Pagination",{attrs:{total:t.total,pageSize:t.limit,current:t.page},on:{"on-change":t.getContestList,"update:current":function(e){t.page=e}}})],1)],1)},staticRenderFns:[]};var f=n("C7Lr")(m,p,!1,function(t){n("qDqi")},"data-v-76a7d9f2",null);e.default=f.exports},"1Aa/":function(t,e,n){var s=n("adiS"),a=n("biYF")("iterator"),o=n("ZVlJ");t.exports=n("AKd3").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(s(e))}},"1QQ/":function(t,e){
/*!
* screenfull
* v3.3.3 - 2018-09-04
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var e="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=void 0!==t&&t.exports,s="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,a=function(){for(var t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,a=n.length,o={};s<a;s++)if((t=n[s])&&t[1]in e){for(s=0;s<t.length;s++)o[n[0][s]]=t[s];return o}return!1}(),o={change:a.fullscreenchange,error:a.fullscreenerror},r={request:function(t){var n=a.requestFullscreen;t=t||e.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?t[n]():t[n](s?Element.ALLOW_KEYBOARD_INPUT:{})},exit:function(){e[a.exitFullscreen]()},toggle:function(t){this.isFullscreen?this.exit():this.request(t)},onchange:function(t){this.on("change",t)},onerror:function(t){this.on("error",t)},on:function(t,n){var s=o[t];s&&e.addEventListener(s,n,!1)},off:function(t,n){var s=o[t];s&&e.removeEventListener(s,n,!1)},raw:a};a?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(e[a.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[a.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(e[a.fullscreenEnabled])}}}),n?t.exports=r:window.screenfull=r):n?t.exports=!1:window.screenfull=!1}()},"4dQa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),a=n.n(s),o=n("6ROu"),r=n.n(o),i=n("8Q2T"),c=n("9rMa"),l=n("IcnI"),u=n("FN8c"),d=n("2hfY"),h={name:"ContestDetail",components:{},data:function(){return{CONTEST_STATUS:u.a,route_name:"",btnLoading:!1,contestID:"",contestPassword:"",columns:[{title:"StartAt",render:function(t,e){return t("span",d.a.utcToLocal(e.row.start_time))}},{title:"EndAt",render:function(t,e){return t("span",d.a.utcToLocal(e.row.end_time))}},{title:"ContestType",key:"contest_type"},{title:"Rule",key:"rule_type"},{title:"Creator",render:function(t,e){return t("span",e.row.created_by.username)}}]}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,this.route_name=this.$route.name,this.$store.dispatch("getContest").then(function(e){t.changeDomTitle({title:e.data.data.title});var n=e.data.data;r()(n.end_time).isAfter(r()(n.now))&&(t.timer=setInterval(function(){t.$store.commit(l.b.NOW_ADD_1S)},1e3))})},methods:a()({},Object(c.mapActions)(["changeDomTitle"]),{handleRoute:function(t){this.$router.push(t)},checkPassword:function(){var t=this;""!==this.contestPassword?(this.btnLoading=!0,i.a.checkContestPassword(this.contestID,this.contestPassword).then(function(e){t.$success("Succeeded"),t.$store.commit(l.b.CONTEST_ACCESS,{access:!0}),t.btnLoading=!1},function(e){t.btnLoading=!1})):this.$error("Password can't be empty")}}),computed:a()({},Object(c.mapState)({showMenu:function(t){return t.contest.itemVisible.menu},contest:function(t){return t.contest.contest},contest_table:function(t){return[t.contest.contest]},now:function(t){return t.contest.now}}),Object(c.mapGetters)(["contestMenuDisabled","contestRuleType","contestStatus","countdown","isContestAdmin","OIContestRealTimePermission","passwordFormVisible"]),{countdownColor:function(){if(this.contestStatus)return u.b[this.contestStatus].color},showAdminHelper:function(){return this.isContestAdmin&&"ACM"===this.contestRuleType}}),watch:{$route:function(t){this.route_name=t.name,this.contestID=t.params.contestID,this.changeDomTitle({title:this.contest.title})}},beforeDestroy:function(){clearInterval(this.timer),this.$store.commit(l.b.CLEAR_CONTEST)}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container"},[n("div",{attrs:{id:"contest-main"}},[n("transition",{attrs:{name:"fadeInUp"}},[n("router-view")],1),t._v(" "),"contest-details"===t.route_name?n("div",{staticClass:"flex-container"},[[n("div",{attrs:{id:"contest-desc"}},[n("Panel",{attrs:{padding:20,shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n              "+t._s(t.contest.title)+"\n            ")]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("Tag",{attrs:{type:"dot",color:t.countdownColor}},[n("span",{attrs:{id:"countdown"}},[t._v(t._s(t.countdown))])])],1),t._v(" "),n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.contest.description)}}),t._v(" "),t.passwordFormVisible?n("div",{staticClass:"contest-password"},[n("Input",{staticClass:"contest-password-input",attrs:{type:"password",placeholder:"contest password"},on:{"on-enter":t.checkPassword},model:{value:t.contestPassword,callback:function(e){t.contestPassword=e},expression:"contestPassword"}}),t._v(" "),n("Button",{attrs:{type:"info"},on:{click:t.checkPassword}},[t._v("Enter")])],1):t._e()]),t._v(" "),n("Table",{staticStyle:{"margin-bottom":"40px"},attrs:{columns:t.columns,data:t.contest_table,"disabled-hover":""}})],1)]],2):t._e()],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],attrs:{id:"contest-menu"}},[n("VerticalMenu",{on:{"on-click":t.handleRoute}},[n("VerticalMenu-item",{attrs:{route:{name:"contest-details",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"home"}}),t._v("\n        "+t._s(t.$t("m.Overview"))+"\n      ")],1),t._v(" "),n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-announcement-list",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"chatbubble-working"}}),t._v("\n        "+t._s(t.$t("m.Announcements"))+"\n      ")],1),t._v(" "),n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-problem-list",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"ios-photos"}}),t._v("\n        "+t._s(t.$t("m.Problems"))+"\n      ")],1),t._v(" "),t.OIContestRealTimePermission?n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-submission-list"}}},[n("Icon",{attrs:{type:"navicon-round"}}),t._v("\n        "+t._s(t.$t("m.Submissions"))+"\n      ")],1):t._e(),t._v(" "),t.OIContestRealTimePermission?n("VerticalMenu-item",{attrs:{disabled:t.contestMenuDisabled,route:{name:"contest-rank",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"stats-bars"}}),t._v("\n        "+t._s(t.$t("m.Rankings"))+"\n      ")],1):t._e(),t._v(" "),t.showAdminHelper?n("VerticalMenu-item",{attrs:{route:{name:"acm-helper",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"ios-paw"}}),t._v("\n        "+t._s(t.$t("m.Admin_Helper"))+"\n      ")],1):t._e()],1)],1)])},staticRenderFns:[]};var p=n("C7Lr")(h,m,!1,function(t){n("HNnU")},"data-v-b3527336",null);e.default=p.exports},"95TO":function(t,e,n){"use strict";var s=n("1QQ/"),a=n.n(s),o={name:"hamburger",props:{width:{type:Number,default:22},height:{type:Number,default:22},color:{type:String,default:"#5A5E66"}},data:function(){return{isFullscreen:!1}},methods:{click:function(){if(!a.a.enabled)return this.$warning("Your browser doesn't support fullscreen"),!1;a.a.toggle()}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon screenfull",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",t:"1497503607356",viewBox:"0 0 1024 1024",version:"1.1","p-id":"4109",fill:this.color,width:this.width,height:this.height},on:{click:this.click}},[e("path",{attrs:{d:"M604.157933 512l204.484208 204.484208 82.942037-82.942037c10.364045-10.952446 26.498514-13.83817 40.309054-8.067746 13.249769 5.742794 22.465664 18.99154 22.465664 33.977859l0 258.042008c0 20.168342-16.695241 36.863582-36.863582 36.863582L659.452283 954.357873c-14.986319 0-28.236088-9.215896-33.977859-23.025413-5.770424-13.249769-2.885723-29.384237 8.067746-39.748283l82.942037-82.942037L512 604.157933 307.515792 808.642141l82.942037 82.942037c10.952446 10.364045 13.83817 26.498514 8.067746 39.748283-5.742794 13.809517-18.99154 23.025413-33.977859 23.025413L106.504686 954.357873c-20.168342 0-36.863582-16.695241-36.863582-36.863582L69.641103 659.452283c0-14.986319 9.215896-28.236088 23.025413-33.977859 13.249769-5.770424 29.384237-2.8847 39.748283 8.067746l82.942037 82.942037 204.484208-204.484208L215.357859 307.515792l-82.942037 82.942037c-6.890944 6.918573-16.10684 10.952446-25.911136 10.952446-4.593622 0-9.804297-1.14815-13.83817-2.8847-13.809517-5.742794-23.025413-18.99154-23.025413-33.977859L69.641103 106.504686c0-20.168342 16.695241-36.863582 36.863582-36.863582L364.546693 69.641103c14.986319 0 28.236088 9.215896 33.977859 23.025413 5.770424 13.249769 2.8847 29.384237-8.067746 39.748283l-82.942037 82.942037 204.484208 204.484208L716.484208 215.357859l-82.942037-82.942037c-10.952446-10.364045-13.83817-26.498514-8.067746-39.748283 5.742794-13.809517 18.99154-23.025413 33.977859-23.025413l258.042008 0c20.168342 0 36.863582 16.695241 36.863582 36.863582l0 258.042008c0 14.986319-9.215896 28.236088-22.465664 33.977859-4.593622 1.736551-9.804297 2.8847-14.397918 2.8847-9.804297 0-19.020192-4.033873-25.911136-10.952446l-82.942037-82.942037L604.157933 512z","p-id":"4110"}})])},staticRenderFns:[]};var i=n("C7Lr")(o,r,!1,function(t){n("HflL")},"data-v-3df92c54",null);e.a=i.exports},BoGV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),a=n.n(s),o=n("9rMa"),r={name:"ContestProblemList",mixins:[n("y2MC").b],data:function(){var t=this;return{ACMTableColumns:[{title:"#",key:"_id",sortType:"asc",width:150},{title:"Title",key:"title"},{title:"Total",key:"submission_number"},{title:"AC Rate",render:function(e,n){return e("span",t.getACRate(n.row.accepted_number,n.row.submission_number))}}],OITableColumns:[{title:"#",key:"_id",width:150},{title:"Title",key:"title"}]}},mounted:function(){this.getContestProblems()},methods:{getContestProblems:function(){var t=this;this.$store.dispatch("getContestProblems").then(function(e){t.isAuthenticated&&("ACM"===t.contestRuleType?t.addStatusColumn(t.ACMTableColumns,e.data.data):t.OIContestRealTimePermission&&t.addStatusColumn(t.ACMTableColumns,e.data.data))})},goContestProblem:function(t){this.$router.push({name:"contest-problem-details",params:{contestID:this.$route.params.contestID,problemID:t._id}})}},computed:a()({},Object(o.mapState)({problems:function(t){return t.contest.contestProblems}}),Object(o.mapGetters)(["isAuthenticated","contestRuleType","OIContestRealTimePermission"]))},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Panel",[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.Problems_List")))]),t._v(" "),"ACM"==t.contestRuleType||t.OIContestRealTimePermission?n("Table",{attrs:{columns:t.ACMTableColumns,data:t.problems,"no-data-text":"No Problems"},on:{"on-row-click":t.goContestProblem}}):n("Table",{attrs:{data:t.problems,columns:t.OITableColumns,"no-data-text":"No Problems"},on:{"on-row-click":t.goContestProblem}})],1)],1)},staticRenderFns:[]};var c=n("C7Lr")(r,i,!1,function(t){n("gNvI")},"data-v-6a11e269",null);e.default=c.exports},HNnU:function(t,e){},HflL:function(t,e){},HzJ8:function(t,e,n){t.exports={default:n("oMO2"),__esModule:!0}},KCEr:function(t,e){},KH7x:function(t,e,n){"use strict";e.__esModule=!0;var s=o(n("MGgt")),a=o(n("HzJ8"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,s.default)(Object(t)))return function(t,e){var n=[],s=!0,o=!1,r=void 0;try{for(var i,c=(0,a.default)(t);!(s=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);s=!0);}catch(t){o=!0,r=t}finally{try{!s&&c.return&&c.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},MGgt:function(t,e,n){t.exports={default:n("hWTF"),__esModule:!0}},OE6b:function(t,e){},V6ir:function(t,e){},gNvI:function(t,e){},gVA6:function(t,e){},hWTF:function(t,e,n){n("A1pn"),n("IsPG"),t.exports=n("1Aa/")},oMO2:function(t,e,n){n("A1pn"),n("IsPG"),t.exports=n("tcIe")},qDqi:function(t,e){},tcIe:function(t,e,n){var s=n("93K8"),a=n("YW8S");t.exports=n("AKd3").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},uZQl:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTVDMzVBQTRBNjYzMTFFNEIxQzhCNjUwRDA0MEJFRDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTVDMzVBQTVBNjYzMTFFNEIxQzhCNjUwRDA0MEJFRDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNUMzNUFBMkE2NjMxMUU0QjFDOEI2NTBEMDQwQkVEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNUMzNUFBM0E2NjMxMUU0QjFDOEI2NTBEMDQwQkVEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi2kbbcAAAZuSURBVHja7FtvaBxF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"},vi5v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),a=n.n(s),o=n("9rMa"),r=n("IcnI"),i=n("3cXf"),c=n.n(i),l=n("HzJ8"),u=n.n(l),d=n("KH7x"),h=n.n(d),m=n("ZLEe"),p=n.n(m),f=n("6ROu"),v=n.n(f),g=n("26Oo"),b=n("8Q2T"),w=n("95TO"),_=n("FN8c"),C={components:{ScreenFull:w.a},methods:{getContestRankData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=(e-1)*this.limit;this.showChart&&!n&&this.$refs.chart.showLoading({maskColor:"rgba(250, 250, 250, 0.8)"});var a={offset:s,limit:this.limit,contest_id:this.$route.params.contestID,force_refresh:this.forceUpdate?"1":"0"};b.a.getContestRank(a).then(function(s){t.showChart&&!n&&t.$refs.chart.hideLoading(),t.total=s.data.data.total,1===e&&t.applyToChart(s.data.data.results.slice(0,10)),t.applyToTable(s.data.data.results)})},handleAutoRefresh:function(t){var e=this;!0===t?this.refreshFunc=setInterval(function(){e.page=1,e.getContestRankData(1,!0)},1e4):clearInterval(this.refreshFunc)}},computed:a()({},Object(o.mapGetters)(["isContestAdmin"]),Object(o.mapState)({contest:function(t){return t.contest.contest},contestProblems:function(t){return t.contest.contestProblems}}),{showChart:{get:function(){return this.$store.state.contest.itemVisible.chart},set:function(t){this.$store.commit(r.b.CHANGE_CONTEST_ITEM_VISIBLE,{chart:t})}},showMenu:{get:function(){return this.$store.state.contest.itemVisible.menu},set:function(t){var e=this;this.$store.commit(r.b.CHANGE_CONTEST_ITEM_VISIBLE,{menu:t}),this.$nextTick(function(){e.showChart&&e.$refs.chart.resize(),e.$refs.tableRank.handleResize()})}},showRealName:{get:function(){return this.$store.state.contest.itemVisible.realName},set:function(t){this.$store.commit(r.b.CHANGE_CONTEST_ITEM_VISIBLE,{realName:t}),t?this.columns.splice(2,0,{title:"RealName",align:"center",width:"150px",render:function(t,e){return t("span",e.row.user.real_name)}}):this.columns.splice(2,1)}},forceUpdate:{get:function(){return this.$store.state.contest.forceUpdate},set:function(t){this.$store.commit(r.b.CHANGE_RANK_FORCE_UPDATE,{value:t})}},limit:{get:function(){return this.$store.state.contest.rankLimit},set:function(t){this.$store.commit(r.b.CHANGE_CONTEST_RANK_LIMIT,{rankLimit:t})}},refreshDisabled:function(){return this.contest.status===_.a.ENDED}}),beforeDestroy:function(){clearInterval(this.refreshFunc)}},y=n("2hfY"),A=n("oAV5"),I={name:"acm-contest-rank",components:{Pagination:g.a},mixins:[C],data:function(){var t=this;return{total:0,page:1,contestID:"",columns:[{align:"center",width:60,render:function(e,n){return e("span",{},n.index+(t.page-1)*t.limit+1)}},{title:"User",align:"center",render:function(e,n){return e("a",{style:{display:"inline-block","max-width":"150px"},on:{click:function(){t.$router.push({name:"user-home",query:{username:n.row.user.username}})}}},n.row.user.username)}},{title:"AC / Total",align:"center",width:100,render:function(e,n){return e("span",{},[e("span",{},n.row.accepted_number+" / "),e("a",{on:{click:function(){t.$router.push({name:"contest-submission-list",query:{username:n.row.user.username}})}}},n.row.submission_number)])}},{title:"TotalTime",align:"center",render:function(e,n){return e("span",t.parseTotalTime(n.row.total_time))}}],dataRank:[],options:{title:{text:"Top 10 Teams",left:"center"},dataZoom:[{type:"inside",filterMode:"none",xAxisIndex:[0],start:0,end:100}],toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:"save as image"}},right:"5%"},tooltip:{trigger:"axis",axisPointer:{type:"cross",axis:"x"}},legend:{orient:"vertical",y:"center",right:0,data:[],formatter:function(t){return A.a.breakLongWords(t,16)},textStyle:{fontSize:12}},grid:{x:80,x2:200},xAxis:[{type:"time",splitLine:!1,axisPointer:{show:!0,snap:!0}}],yAxis:[{type:"category",boundaryGap:!1,data:[0]}],series:[]}}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,this.getContestRankData(1),0===this.contestProblems.length?this.getContestProblems().then(function(e){t.addTableColumns(e.data.data),t.addChartCategory(e.data.data)}):(this.addTableColumns(this.contestProblems),this.addChartCategory(this.contestProblems))},methods:a()({},Object(o.mapActions)(["getContestProblems"]),{addChartCategory:function(t){for(var e=[],n=0;n<=t.length;++n)e.push(n);this.options.yAxis[0].data=e},applyToChart:function(t){var e=this,n=[],s=[];t.forEach(function(t){n.push(t.user.username);var a=t.submission_info,o=[];p()(a).forEach(function(t){a[t].is_ac&&o.push(a[t].ac_time)}),o.sort(function(t,e){return t-e});var r=[];r.push([e.contest.start_time,0]);var i=!0,c=!1,l=void 0;try{for(var d,m=u()(o.entries());!(i=(d=m.next()).done);i=!0){var f=d.value,g=h()(f,2),b=g[0],w=g[1],_=v()(e.contest.start_time).add(w,"seconds").format();r.push([_,b+1])}}catch(t){c=!0,l=t}finally{try{!i&&m.return&&m.return()}finally{if(c)throw l}}s.push({name:t.user.username,type:"line",data:r})}),this.options.legend.data=n,this.options.series=s},applyToTable:function(t){var e=JSON.parse(c()(t));e.forEach(function(t,n){var s=t.submission_info,a={};p()(s).forEach(function(t){e[n][t]=s[t],e[n][t].ac_time=y.a.secondFormat(e[n][t].ac_time);var o=s[t];o.is_first_ac?a[t]="first-ac":o.is_ac?a[t]="ac":a[t]="wa"}),e[n].cellClassName=a}),this.dataRank=e},addTableColumns:function(t){var e=this;t.forEach(function(t){e.columns.push({align:"center",key:t.id,renderHeader:function(n,s){return n("a",{class:{emphasis:!0},on:{click:function(){e.$router.push({name:"contest-problem-details",params:{contestID:e.contestID,problemID:t._id}})}}},t._id)},render:function(e,n){if(n.row[t.id]){var s=n.row[t.id],a=void 0,o=void 0;return s.is_ac&&(a=e("span",s.ac_time)),0!==s.error_number&&(o=e("p","(-"+s.error_number+")")),e("div",[a,o])}}})})},parseTotalTime:function(t){var e=v.a.duration(t,"s");return[Math.floor(e.asHours()),e.minutes(),e.seconds()].join(":")},downloadRankCSV:function(){A.a.downloadFile("contest_rank?download_csv=1&contest_id="+this.$route.params.contestID+"&force_refrash="+(this.forceUpdate?"1":"0"))}})},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.contest.title))]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("screen-full",{staticClass:"screen-full",attrs:{height:18,width:18}}),t._v(" "),n("Poptip",{attrs:{trigger:"hover",placement:"left-start"}},[n("Icon",{attrs:{type:"android-settings",size:"20"}}),t._v(" "),n("div",{attrs:{slot:"content",id:"switches"},slot:"content"},[n("p",[n("span",[t._v("Menu")]),t._v(" "),n("i-switch",{model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}}),t._v(" "),n("span",[t._v("Chart")]),t._v(" "),n("i-switch",{model:{value:t.showChart,callback:function(e){t.showChart=e},expression:"showChart"}})],1),t._v(" "),n("p",[n("span",[t._v("Auto Refresh(10s)")]),t._v(" "),n("i-switch",{attrs:{disabled:t.refreshDisabled},on:{"on-change":t.handleAutoRefresh}})],1),t._v(" "),t.isContestAdmin?[n("p",[n("span",[t._v("RealName")]),t._v(" "),n("i-switch",{model:{value:t.showRealName,callback:function(e){t.showRealName=e},expression:"showRealName"}})],1),t._v(" "),n("p",[n("span",[t._v("Force Update")]),t._v(" "),n("i-switch",{attrs:{disabled:t.refreshDisabled},model:{value:t.forceUpdate,callback:function(e){t.forceUpdate=e},expression:"forceUpdate"}})],1)]:t._e(),t._v(" "),[n("Button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadRankCSV}},[t._v("download csv")])]],2)],1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"echarts"},[n("ECharts",{ref:"chart",attrs:{options:t.options,"auto-resize":""}})],1),t._v(" "),n("Table",{ref:"tableRank",staticClass:"auto-resize",attrs:{columns:t.columns,data:t.dataRank,"disabled-hover":""}}),t._v(" "),n("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.getContestRankData,"on-page-size-change":function(e){t.getContestRankData(1)}}})],1)},staticRenderFns:[]};var R=n("C7Lr")(I,k,!1,function(t){n("V6ir")},"data-v-cdcd63c2",null).exports,T={name:"acm-contest-rank",components:{Pagination:g.a},mixins:[C],data:function(){var t=this;return{total:0,page:1,contestID:"",columns:[{align:"center",width:60,render:function(e,n){return e("span",{},n.index+(t.page-1)*t.limit+1)}},{title:"User",align:"center",render:function(e,n){return e("a",{style:{display:"inline-block","max-width":"150px"},on:{click:function(){t.$router.push({name:"user-home",query:{username:n.row.user.username}})}}},n.row.user.username)}},{title:"Total Score",align:"center",render:function(e,n){return e("a",{on:{click:function(){t.$router.push({name:"contest-submission-list",query:{username:n.row.user.username}})}}},n.row.total_score)}}],dataRank:[],options:{title:{text:"Top 10 Teams",left:"center"},tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar"]},saveAsImage:{show:!0}},right:"10%"},calculable:!0,xAxis:[{type:"category",data:["root"],boundaryGap:!0,axisLabel:{interval:0,showMinLabel:!0,showMaxLabel:!0,align:"center",formatter:function(t,e){return A.a.breakLongWords(t,14)}},axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Score",type:"bar",barMaxWidth:"80",data:[0],markPoint:{data:[{type:"max",name:"max"}]}}]}}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,this.getContestRankData(1),0===this.contestProblems.length?this.getContestProblems().then(function(e){t.addTableColumns(e.data.data)}):this.addTableColumns(this.contestProblems)},methods:a()({},Object(o.mapActions)(["getContestProblems"]),{applyToChart:function(t){var e=[],n=[];t.forEach(function(t){e.push(t.user.username),n.push(t.total_score)}),this.options.xAxis[0].data=e,this.options.series[0].data=n},applyToTable:function(t){var e=JSON.parse(c()(t));e.forEach(function(t,n){var s=t.submission_info;p()(s).forEach(function(t){e[n][t]=s[t]})}),this.dataRank=e},addTableColumns:function(t){var e=this;t.forEach(function(t){e.columns.push({align:"center",key:t.id,renderHeader:function(n,s){return n("a",{class:{emphasis:!0},on:{click:function(){e.$router.push({name:"contest-problem-details",params:{contestID:e.contestID,problemID:t._id}})}}},t._id)},render:function(e,n){return e("span",n.row[t.id])}})})},downloadRankCSV:function(){A.a.downloadFile("contest_rank?download_csv=1&contest_id="+this.$route.params.contestID+"&force_refrash="+(this.forceUpdate?"1":"0"))}})},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.contest.title))]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("screen-full",{staticClass:"screen-full",attrs:{height:18,width:18}}),t._v(" "),n("Poptip",{attrs:{trigger:"hover",placement:"left-start"}},[n("Icon",{attrs:{type:"android-settings",size:"20"}}),t._v(" "),n("div",{attrs:{slot:"content",id:"switches"},slot:"content"},[n("p",[n("span",[t._v("Menu")]),t._v(" "),n("i-switch",{model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}}),t._v(" "),n("span",[t._v("Chart")]),t._v(" "),n("i-switch",{model:{value:t.showChart,callback:function(e){t.showChart=e},expression:"showChart"}})],1),t._v(" "),n("p",[n("span",[t._v("Auto Refresh(10s)")]),t._v(" "),n("i-switch",{attrs:{disabled:t.refreshDisabled},on:{"on-change":t.handleAutoRefresh}})],1),t._v(" "),t.isContestAdmin?n("p",[n("span",[t._v("RealName")]),t._v(" "),n("i-switch",{model:{value:t.showRealName,callback:function(e){t.showRealName=e},expression:"showRealName"}})],1):t._e(),t._v(" "),n("p",[n("Button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadRankCSV}},[t._v("download csv")])],1)])],1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showChart,expression:"showChart"}],staticClass:"echarts"},[n("ECharts",{ref:"chart",attrs:{options:t.options,"auto-resize":""}})],1),t._v(" "),n("Table",{ref:"tableRank",staticClass:"auto-resize",attrs:{columns:t.columns,data:t.dataRank,"disabled-hover":""}}),t._v(" "),n("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.getContestRankData,"on-page-size-change":function(e){t.getContestRankData(1)}}})],1)},staticRenderFns:[]};var D={name:"contest-rank",components:{ACMContestRank:R,OIContestRank:n("C7Lr")(T,x,!1,function(t){n("OE6b")},"data-v-ba13afb6",null).exports,NullComponent:{name:"null-component",template:"<div></div>"}},computed:a()({},Object(o.mapGetters)(["contestRuleType"]),{currentView:function(){return null===this.contestRuleType?"NullComponent":"ACM"===this.contestRuleType?"ACMContestRank":"OIContestRank"}}),beforeRouteLeave:function(t,e,n){this.$store.commit(r.b.CHANGE_CONTEST_ITEM_VISIBLE,{menu:!0}),n()}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.currentView,{tag:"component"})],1)},staticRenderFns:[]};var M=n("C7Lr")(D,E,!1,function(t){n("KCEr")},"data-v-7b123b58",null);e.default=M.exports},zVEN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("HzJ8"),a=n.n(s),o=n("4YfN"),r=n.n(o),i=n("9rMa"),c=n("IcnI"),l=n("6ROu"),u=n.n(l),d=n("26Oo"),h=n("8Q2T"),m={name:"acm-helper",components:{Pagination:d.a},data:function(){var t=this;return{page:1,total:0,loadingTable:!1,columns:[{title:"AC Time",key:"ac_time"},{title:"ProblemID",align:"center",key:"problem_display_id"},{title:"First Blood",align:"center",render:function(t,e){return e.row.ac_info.is_first_ac?t("Tag",{props:{color:"red"}},"First Blood"):t("span","----")}},{title:"Username",align:"center",render:function(e,n){var s=n.row;return e("a",{style:{display:"inline-block","max-width":"150px"},on:{click:function(){t.$router.push({name:"contest-submission-list",query:{username:s.username}})}}},s.username)}},{title:"RealName",align:"center",render:function(t,e){return t("span",{style:{display:"inline-block","max-width":"150px"}},e.row.real_name)}},{title:"Status",align:"center",render:function(t,e){var n=e.row;return t("Tag",{props:{color:n.checked?"green":"yellow"}},n.checked?"Checked":"Not Checked")}},{title:"Option",fixed:"right",align:"center",width:100,render:function(e,n){var s=n.row;return e("Button",{props:{type:"ghost",size:"small",icon:"checkmark",disabled:s.checked},on:{click:function(){t.updateCheckedStatus(s)}}},"Check It")}}],acInfo:[],pagedAcInfo:[],problemsMap:[]}},mounted:function(){var t=this;this.contestID=this.$route.params.contestID,0===this.contestProblems.length?this.getContestProblems().then(function(e){t.mapProblemDisplayID(),t.getACInfo()}):(this.mapProblemDisplayID(),this.getACInfo())},methods:r()({},Object(i.mapActions)(["getContestProblems"]),{mapProblemDisplayID:function(){var t={};this.contestProblems.forEach(function(e){t[e.id]=e._id}),this.problemsMap=t},getACInfo:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loadingTable=!0;var e={contest_id:this.$route.params.contestID};h.a.getACMACInfo(e).then(function(e){t.loadingTable=!1;var n=e.data.data;t.total=n.length,t.acInfo=n,t.handlePage()}).catch(function(){t.loadingTable=!1})},updateCheckedStatus:function(t){var e=this,n={rank_id:t.id,contest_id:this.contestID,problem_id:t.problem_id,checked:!0};h.a.updateACInfoCheckedStatus(n).then(function(t){e.$success("Succeeded"),e.getACInfo()}).catch(function(){})},handleAutoRefresh:function(t){var e=this;t?this.refreshFunc=setInterval(function(){e.page=1,e.getACInfo()},1e4):clearInterval(this.refreshFunc)},handlePage:function(){1!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)&&(this.loadingTable=!0);var t=this.acInfo.slice((this.page-1)*this.limit,this.page*this.limit),e=!0,n=!1,s=void 0;try{for(var o,r=a()(t);!(e=(o=r.next()).done);e=!0){var i=o.value;i.init||(i.init=!0,i.problem_display_id=this.problemsMap[i.problem_id],i.ac_time=u()(this.contest.start_time).add(i.ac_info.ac_time,"seconds").local().format("YYYY-M-D  HH:mm:ss"))}}catch(t){n=!0,s=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw s}}this.pagedAcInfo=t,this.loadingTable=!1}}),computed:r()({},Object(i.mapState)({contest:function(t){return t.contest.contest},contestProblems:function(t){return t.contest.contestProblems}}),{limit:{get:function(){return this.$store.state.contest.rankLimit},set:function(t){this.$store.commit(c.b.CHANGE_CONTEST_RANK_LIMIT,{rankLimit:t})}}}),beforeDestroy:function(){clearInterval(this.refreshFunc)}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("ACM Helper")]),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("ul",{staticClass:"filter"},[n("li",[t._v("\n        Auto Refresh(10s)\n        "),n("i-switch",{staticStyle:{"margin-left":"5px"},on:{"on-change":t.handleAutoRefresh}})],1),t._v(" "),n("li",[n("Button",{attrs:{type:"info"},on:{click:t.getACInfo}},[t._v("Refresh")])],1)])]),t._v(" "),n("Table",{attrs:{data:t.pagedAcInfo,columns:t.columns,loading:t.loadingTable,"disabled-hover":""}}),t._v(" "),n("pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(e){t.limit=e},"update:current":function(e){t.page=e},"on-change":t.handlePage,"on-page-size-change":function(e){t.handlePage(1)}}})],1)},staticRenderFns:[]};var f=n("C7Lr")(m,p,!1,function(t){n("gVA6")},"data-v-d770809e",null);e.default=f.exports}});