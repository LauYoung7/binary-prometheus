"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7583],{27583:(F,i,t)=>{t.r(i),t.d(i,{VerifyEmailPage:()=>o,default:()=>y});var e=t(68404),m=t(80472),u=t(54899),r=t(52081),l=t(31403),E=t(94270),c=t(19825),d=t(24799),g=t(46967),s=t(47694),v=t(60499),f=t(77293);const h=()=>{const p=(0,v.iG)(),[S,L]=(0,e.useState)(!1),V=n=>{(0,u.i)().post("/api/user/signup",n).then(()=>{L(!0)}).catch(a=>{const C=a.data?.message||a;p.warning(C)})};return S?e.createElement("div",null,e.createElement("p",null,"An email with a verification link has been sent to the email address. You should receive it shortly."),e.createElement(r.W2,{margin:"md"}),e.createElement(l.Qj,{variant:"primary",href:(0,s.iE)().appSubUrl+"/signup"},"Complete Signup")):e.createElement(E.l,{onSubmit:V},({register:n,errors:a})=>e.createElement(e.Fragment,null,e.createElement(c.D,null,"Verify Email"),e.createElement(d.g,{label:"Email",description:"Enter your email address to get a verification link sent to you",invalid:!!a.email,error:a.email?.message},e.createElement(g.I,{id:"email",...n("email",{required:"Email is required",pattern:{value:f.Yb,message:"Email is invalid"}}),placeholder:"Email"})),e.createElement(r.Lh,null,e.createElement(l.zx,{type:"submit"},"Send verification email"),e.createElement(l.Qj,{fill:"text",href:(0,s.iE)().appSubUrl+"/login"},"Back to login"))))},o=()=>e.createElement(m.dd,null,e.createElement(m.$s,null,e.createElement(h,null))),y=o}}]);

//# sourceMappingURL=7583.53288cb007f59a8313fd.js.map