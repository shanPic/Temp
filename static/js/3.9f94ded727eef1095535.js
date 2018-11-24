webpackJsonp([3],{"04zp":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("aA9S"),r=e.n(a),o=e("y2MC"),n=e("8Q2T"),c={name:"reset-password",mixins:[o.a],data:function(){var t=this;return{btnLoading:!1,captchaSrc:"",resetSuccess:!1,formResetPassword:{captcha:"",password:"",passwordAgain:"",token:""},ruleResetPassword:{password:[{required:!0,trigger:"blur",min:6,max:20},{validator:function(s,e,a){""!==t.formResetPassword.passwdCheck&&t.$refs.formResetPassword.validateField("passwordAgain"),a()},trigger:"blur"}],passwordAgain:[{required:!0,validator:function(s,e,a){e!==t.formResetPassword.password&&a(new Error("password does not match")),a()},trigger:"change"}],captcha:[{required:!0,trigger:"blur",min:1,max:10}]}}},mounted:function(){this.formResetPassword.token=this.$route.params.token,this.getCaptchaSrc()},methods:{resetPassword:function(){var t=this;this.validateForm("formResetPassword").then(function(s){t.btnLoading=!0;var e=r()({},t.formResetPassword);delete e.passwordAgain,n.a.resetPassword(e).then(function(s){t.btnLoading=!1,t.resetSuccess=!0},function(s){t.btnLoading=!1,t.formResetPassword.captcha="",t.getCaptchaSrc()})})}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Panel",{staticClass:"container",attrs:{padding:30}},[e("div",{staticClass:"center",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.Reset_Password")))]),t._v(" "),t.resetSuccess?[e("Alert",{attrs:{type:"success"}},[t._v("Your password has been reset.")])]:[e("Form",{ref:"formResetPassword",attrs:{model:t.formResetPassword,rules:t.ruleResetPassword}},[e("Form-item",{attrs:{prop:"password"}},[e("Input",{attrs:{type:"password",placeholder:t.$t("m.RPassword"),size:"large"},model:{value:t.formResetPassword.password,callback:function(s){t.$set(t.formResetPassword,"password",s)},expression:"formResetPassword.password"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),t._v(" "),e("Form-item",{attrs:{prop:"passwordAgain"}},[e("Input",{attrs:{type:"password",placeholder:t.$t("m.RPassword_Again"),size:"large"},model:{value:t.formResetPassword.passwordAgain,callback:function(s){t.$set(t.formResetPassword,"passwordAgain",s)},expression:"formResetPassword.passwordAgain"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),t._v(" "),e("Form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{prop:"captcha"}},[e("div",{attrs:{id:"captcha"}},[e("div",{attrs:{id:"captchaCode"}},[e("Input",{attrs:{placeholder:t.$t("m.RCaptcha"),size:"large"},model:{value:t.formResetPassword.captcha,callback:function(s){t.$set(t.formResetPassword,"captcha",s)},expression:"formResetPassword.captcha"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-lightbulb-outline"},slot:"prepend"})],1)],1),t._v(" "),e("div",{attrs:{id:"captchaImg"}},[e("Tooltip",{attrs:{content:"Click to refresh",placement:"top"}},[e("img",{attrs:{src:t.captchaSrc},on:{click:t.getCaptchaSrc}})])],1)])])],1),t._v(" "),e("Button",{staticClass:"btn",attrs:{type:"primary",long:"",loading:t.btnLoading},on:{click:t.resetPassword}},[t._v("Reset Password\n  ")])]],2)},staticRenderFns:[]};var d=e("C7Lr")(c,i,!1,function(t){e("K50N")},"data-v-2db7ba3c",null);s.default=d.exports},Dqxu:function(t,s){},K50N:function(t,s){},WaBM:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("8Q2T"),r={mixins:[e("y2MC").a],data:function(){return{captchaSrc:"",successApply:!1,btnLoading:!1,formResetPassword:{email:"",captcha:""},ruleResetPassword:{email:[{required:!0,type:"email",trigger:"blur"},{validator:function(t,s,e){""!==s?a.a.checkUsernameOrEmail(void 0,s).then(function(t){!1===t.data.data.email?e(new Error("The email doesn't exist")):e()},function(t){return e()}):e()},trigger:"blur"}],captcha:[{required:!0,trigger:"blur",min:1,max:10}]}}},mounted:function(){this.getCaptchaSrc()},methods:{sendEmail:function(){var t=this;this.validateForm("formResetPassword").then(function(){t.btnLoading=!0,a.a.applyResetPassword(t.formResetPassword).then(function(s){setTimeout(function(){t.btnLoading=!1,t.successApply=!0},2e3)},function(s){t.btnLoading=!1,t.formResetPassword.captcha="",t.getCaptchaSrc()})})}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Panel",{staticClass:"container",attrs:{padding:30}},[e("div",{staticClass:"center",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.Reset_Password")))]),t._v(" "),t.successApply?[e("Alert",{attrs:{type:"success","show-icon":""}},[t._v("\n      Success\n      "),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Password reset mail has been sent to your email.")])])]:[e("Form",{ref:"formResetPassword",attrs:{rules:t.ruleResetPassword,model:t.formResetPassword}},[e("Form-item",{attrs:{prop:"email"}},[e("Input",{attrs:{placeholder:t.$t("m.ApplyEmail"),size:"large"},model:{value:t.formResetPassword.email,callback:function(s){t.$set(t.formResetPassword,"email",s)},expression:"formResetPassword.email"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-email-outline"},slot:"prepend"})],1)],1),t._v(" "),e("Form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{prop:"captcha"}},[e("div",{staticClass:"oj-captcha"},[e("div",{staticClass:"oj-captcha-code"},[e("Input",{attrs:{placeholder:t.$t("m.RCaptcha"),size:"large"},model:{value:t.formResetPassword.captcha,callback:function(s){t.$set(t.formResetPassword,"captcha",s)},expression:"formResetPassword.captcha"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-lightbulb-outline"},slot:"prepend"})],1)],1),t._v(" "),e("div",{staticClass:"oj-captcha-img"},[e("Tooltip",{attrs:{content:"Click to refresh",placement:"top"}},[e("img",{attrs:{src:t.captchaSrc},on:{click:t.getCaptchaSrc}})])],1)])])],1),t._v(" "),e("Button",{staticClass:"btn",attrs:{type:"primary",long:"",loading:t.btnLoading},on:{click:t.sendEmail}},[t._v(t._s(t.$t("m.Send_Password_Reset_Email"))+"\n    ")])]],2)},staticRenderFns:[]};var n=e("C7Lr")(r,o,!1,function(t){e("Dqxu")},"data-v-4da9e8b8",null);s.default=n.exports}});