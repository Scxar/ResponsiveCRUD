import{a as c,e as g}from"./chunk-674Z2RZZ.js";import{a as b,b as a,c as h,d as x,f as C,h as _,i as w,j as v,k as y,m as M}from"./chunk-YESJUV2I.js";import{Ka as d,Ma as t,Na as e,Oa as m,Qa as u,Ta as n,U as i,Y as p,_a as f}from"./chunk-5O76MHFE.js";var S=class l{fb=i(y);http=i(c);router=i(g);form=this.fb.nonNullable.group({username:["",a.required],email:["",a.required],password:["",a.required]});onSubmit(){this.http.post("http://localhost:5000/api/login",{username:this.form.value.username,email:this.form.value.email,password:this.form.value.password}).subscribe({next:o=>{localStorage.setItem("access_token",o.access_token),this.router.navigateByUrl("/")},error:o=>{console.error("Login error:",o)}})}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=p({type:l,selectors:[["app-login"]],standalone:!0,features:[f],decls:16,vars:1,consts:[[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","username",1,"form-label"],["name","username","id","username","formControlName","username","placeholder","Enter you username","required","",1,"form-control"],["for","email",1,"form-label"],["name","password","type","text","id","email","formControlName","email","placeholder","exampel@email.com","required","",1,"form-control"],["for","password",1,"form-label"],["name","password","type","password","id","password","formControlName","password","placeholder","*************","required","",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(r,s){r&1&&(t(0,"form",0),u("ngSubmit",function(){return s.onSubmit()}),t(1,"div",1)(2,"label",2),n(3,"Username"),e(),m(4,"input",3),e(),t(5,"div",1)(6,"label",4),n(7,"Email"),e(),m(8,"input",5),e(),t(9,"div",1)(10,"label",6),n(11,"Password"),e(),m(12,"input",7),e(),t(13,"div")(14,"button",8),n(15,"Login"),e()()()),r&2&&d("formGroup",s.form)},dependencies:[M,C,b,h,x,v,_,w],styles:["form[_ngcontent-%COMP%]{display:flex;margin:20px auto;padding:10px;max-width:40%;text-align:center;border-style:dashed;flex-direction:column}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;text-transform:uppercase;margin-bottom:8px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:15px;font-size:1rem;margin-top:20px}@media (max-width: 1199px){form[_ngcontent-%COMP%]{max-width:80%}input[_ngcontent-%COMP%]{height:40px}}@media (max-width: 768px){form[_ngcontent-%COMP%]{max-width:100%;border-style:none}label[_ngcontent-%COMP%]{font-size:2rem}input[_ngcontent-%COMP%]{height:50px}button[_ngcontent-%COMP%]{font-size:1.2rem;padding:15px}}"]})};export{S as LoginComponent};
