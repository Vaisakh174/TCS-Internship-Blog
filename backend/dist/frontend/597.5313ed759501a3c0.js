"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[597],{4597:(it,A,g)=>{g.r(A),g.d(A,{AdminModule:()=>f});var d=g(6895),a=g(8477),t=g(8256),c=g(9407);function q(n,e){1&n&&(t.TgZ(0,"button",20),t._uU(1,"Wecome To Admin Pannel"),t.qZA())}function U(n,e){if(1&n&&(t.TgZ(0,"button",21),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.hij("Admin Name: ",o.username," ")}}const k=function(){return{exact:!0}};function I(n,e){1&n&&(t.TgZ(0,"a",22),t._uU(1,"Manage Posts "),t.qZA()),2&n&&t.Q6J("routerLinkActiveOptions",t.DdM(1,k))}function P(n,e){1&n&&(t.TgZ(0,"a",23),t._uU(1,"Manage Category"),t.qZA())}function S(n,e){1&n&&(t.TgZ(0,"a",24),t._uU(1,"Create Post"),t.qZA())}function N(n,e){1&n&&(t.TgZ(0,"a",25),t._uU(1,"Create Category"),t.qZA())}function J(n,e){1&n&&(t.TgZ(0,"div")(1,"div",26)(2,"div",27),t._UZ(3,"div",28),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}class v{constructor(e,o){this.router=e,this.api=o}ngOnInit(){this.loaderShow=!0,this.username=this.api.getadminname(),this.loaderShow=!1}logout(){this.loaderShow=!0,localStorage.clear(),this.router.navigate([""]),this.loaderShow=!1}}v.\u0275fac=function(e){return new(e||v)(t.Y36(a.F0),t.Y36(c.o))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-admin-home"]],decls:26,vars:7,consts:[[1,"navbar","bgnav"],[1,"container-fluid"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasNavbar","aria-controls","offcanvasNavbar",1,"navbar-toggler","bg-light"],[1,"navbar-toggler-icon"],[1,"d-flex","justify-content-end"],["class"," adminWelcome","type","button",4,"ngIf"],["class","user ","type","button",4,"ngIf"],["type","button",1,"logout",3,"click"],["tabindex","-1","id","offcanvasNavbar","aria-labelledby","offcanvasNavbarLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasNavbarLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","btn-close-white"],[1,"offcanvas-body"],[1,"navbar-nav","justify-content-end","flex-grow-1","pe-3"],[1,"nav-item"],["class","nav-link nav-bg","routerLink","/adminhome/manage_posts","routerLinkActive","canvas-actived",3,"routerLinkActiveOptions",4,"ngIf"],["class","nav-link nav-bg","routerLink","/adminhome/manage_categorys","routerLinkActive","canvas-actived",4,"ngIf"],["class","nav-link nav-bg","routerLink","/adminhome/create_post","routerLinkActive","canvas-actived",4,"ngIf"],["class","nav-link nav-bg","routerLink","/adminhome/create_category","routerLinkActive","canvas-actived",4,"ngIf"],[4,"ngIf"],["type","button",1,"adminWelcome"],["type","button",1,"user"],["routerLink","/adminhome/manage_posts","routerLinkActive","canvas-actived",1,"nav-link","nav-bg",3,"routerLinkActiveOptions"],["routerLink","/adminhome/manage_categorys","routerLinkActive","canvas-actived",1,"nav-link","nav-bg"],["routerLink","/adminhome/create_post","routerLinkActive","canvas-actived",1,"nav-link","nav-bg"],["routerLink","/adminhome/create_category","routerLinkActive","canvas-actived",1,"nav-link","nav-bg"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),t._UZ(3,"span",3),t.qZA(),t.TgZ(4,"div",4),t.YNc(5,q,2,0,"button",5),t.YNc(6,U,2,1,"button",6),t.TgZ(7,"button",7),t.NdJ("click",function(){return o.logout()}),t._uU(8,"Log out"),t.qZA()(),t.TgZ(9,"div",8)(10,"div",9)(11,"h5",10),t._uU(12,"Admin Dashboard"),t.qZA(),t._UZ(13,"button",11),t.qZA(),t.TgZ(14,"div",12)(15,"ul",13)(16,"li",14),t.YNc(17,I,2,2,"a",15),t.qZA(),t.TgZ(18,"li",14),t.YNc(19,P,2,0,"a",16),t.qZA(),t.TgZ(20,"li",14),t.YNc(21,S,2,0,"a",17),t.qZA(),t.TgZ(22,"li",14),t.YNc(23,N,2,0,"a",18),t.qZA()()()()()(),t._UZ(24,"router-outlet"),t.YNc(25,J,6,0,"div",19)),2&e&&(t.xp6(5),t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(11),t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(2),t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(2),t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(2),t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(2),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.O5,a.lC,a.rH,a.Od],styles:[".bgnav[_ngcontent-%COMP%]{background:linear-gradient(120deg,rgb(13,59,135),#7e3500)}@media screen and (max-width: 650px){.adminWelcome[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 450px){.offcanvas[_ngcontent-%COMP%]{width:150px!important}}.offcanvas[_ngcontent-%COMP%]{background:linear-gradient(120deg,rgb(13,59,135),#7e3500);width:210px}.nav-link[_ngcontent-%COMP%]{color:#fff}.adminWelcome[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{background-color:#4f360e;border-radius:10px;color:#fff;padding:7px;border:1px solid rgb(255,255,255)!important;margin:5px;border:none;cursor:default}.logout[_ngcontent-%COMP%]{background-color:#9b7f00;color:#fff;border-radius:10px;padding:7px;margin:5px;border:none}.logout[_ngcontent-%COMP%]:hover{background-color:#c39f00;color:#fff;cursor:pointer}.nav-bg[_ngcontent-%COMP%]{border:1px solid rgb(255,255,255);border-radius:10px;background-color:#4f360e;margin:5px;padding:5px 5px 5px 14px}.nav-bg[_ngcontent-%COMP%]:hover{background-color:#c39f00;color:#fff}.offcanvas-title[_ngcontent-%COMP%]{color:#fff}.canvas-actived[_ngcontent-%COMP%]{background-color:#9b7f00}"]});class p{constructor(e,o){this.api=e,this.router=o}canActivate(){return!!this.api.isLoggedin()||(this.router.navigate(["/admin"]),!1)}}p.\u0275fac=function(e){return new(e||p)(t.LFG(c.o),t.LFG(a.F0))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var i=g(433);function L(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div")(6,"h2"),t._uU(7,"Create A Category"),t.qZA()(),t.TgZ(8,"div")(9,"button",7),t._uU(10,"Close"),t.qZA()()(),t._UZ(11,"hr"),t.TgZ(12,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.submit())}),t.TgZ(13,"div",9)(14,"label"),t._uU(15,"Enter Category Name"),t.qZA(),t._UZ(16,"input",10),t.qZA(),t.TgZ(17,"button",11),t._uU(18,"Submit"),t.qZA()()()()()()}if(2&n){const o=t.oxw();t.xp6(12),t.Q6J("formGroup",o.newcategory),t.xp6(5),t.Q6J("disabled",o.newcategory.invalid)}}function M(n,e){1&n&&(t.TgZ(0,"div")(1,"div",12)(2,"div",13),t._UZ(3,"div",14),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}class b{constructor(e,o){this.api=e,this.router=o,this.newcategory=new i.cw({category:new i.NI("",[i.kI.required,i.kI.minLength(3)])})}ngOnInit(){}submit(){this.loaderShow=!0,this.api.newcategory(this.newcategory.value).subscribe({next:e=>{alert("Data saved successfully"),this.loaderShow=!1,this.router.navigate(["/adminhome"])},error:e=>{this.loaderShow=!1,alert(`Error occured ${e.error}`)}})}}function Y(n,e){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.s9C("value",o.category),t.xp6(1),t.Oqu(o.category)}}function O(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div")(6,"h2"),t._uU(7,"Create A Post"),t.qZA()(),t.TgZ(8,"div")(9,"button",7),t._uU(10,"Close"),t.qZA()()(),t._UZ(11,"hr"),t.TgZ(12,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.submit())}),t.TgZ(13,"div",9)(14,"label"),t._uU(15,"Enter Content Title"),t.qZA(),t._UZ(16,"input",10),t.TgZ(17,"label"),t._uU(18,"Select Category"),t.qZA(),t.TgZ(19,"select",11),t.YNc(20,Y,2,2,"option",12),t.qZA(),t.TgZ(21,"label"),t._uU(22,"Enter Content"),t.qZA(),t._UZ(23,"textarea",13),t.TgZ(24,"small",14),t._uU(25," *All input fields are mandatory"),t.qZA()(),t.TgZ(26,"button",15),t._uU(27,"Submit"),t.qZA()()()()()()}if(2&n){const o=t.oxw();t.xp6(12),t.Q6J("formGroup",o.editpost),t.xp6(8),t.Q6J("ngForOf",o.categoris),t.xp6(6),t.Q6J("disabled",o.editpost.invalid)}}function F(n,e){1&n&&(t.TgZ(0,"div")(1,"div",17)(2,"div",18),t._UZ(3,"div",19),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}b.\u0275fac=function(e){return new(e||b)(t.Y36(c.o),t.Y36(a.F0))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-create-category"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"p-3","rounded","MyBorder","my-4","m-2"],[1,"rounded","p-3"],[1,"col-12"],[1,"d-flex","justify-content-between"],["title"," Click Here To close","routerLink","/adminhome",1,"btn-danger","my-2","btn","btn-sm"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","placeholder","minimum 3 letters required","formControlName","category",1,"form-control","my-2"],["type","submit",1,"btn","rounded","my-2","btn-warning",3,"disabled"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.YNc(0,L,19,2,"div",0),t.YNc(1,M,6,0,"div",1)),2&e&&(t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.O5,a.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]});class Z{constructor(e,o){this.api=e,this.router=o,this.editpost=new i.cw({title:new i.NI("",[i.kI.required,i.kI.minLength(5)]),content:new i.NI("",[i.kI.required,i.kI.minLength(10)]),category:new i.NI("",[i.kI.required,i.kI.minLength(2)])})}ngOnInit(){this.getdata()}getdata(){this.loaderShow=!0,this.api.getallcategories().subscribe(e=>{this.categoris=e,this.loaderShow=!1})}submit(){this.loaderShow=!0,this.editpost.value={...this.editpost.value,user_id:this.api.getadminid(),user_name:this.api.getadminname()},this.api.newpost(this.editpost.value).subscribe({next:e=>{this.loaderShow=!1,alert("Data saved successfully"),this.router.navigate(["/adminhome"])},error:e=>{this.loaderShow=!1,alert(`Error occured ${e.error}`)}})}}function E(n,e){if(1&n&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.s9C("value",o.category),t.xp6(1),t.Oqu(o.category)}}function Q(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div")(6,"h2"),t._uU(7,"Edit A Post"),t.qZA()(),t.TgZ(8,"div")(9,"button",7),t._uU(10,"Close"),t.qZA()()(),t._UZ(11,"hr"),t.TgZ(12,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.submit())}),t.TgZ(13,"div",9)(14,"label"),t._uU(15,"Enter Content Title"),t.qZA(),t._UZ(16,"input",10),t.TgZ(17,"label"),t._uU(18,"Select Category"),t.qZA(),t.TgZ(19,"select",11),t.YNc(20,E,2,2,"option",12),t.qZA(),t.TgZ(21,"label"),t._uU(22,"Enter Content"),t.qZA(),t._UZ(23,"textarea",13),t.TgZ(24,"small",14),t._uU(25," *All input fields are mandatory"),t.qZA()(),t.TgZ(26,"button",15),t._uU(27,"Submit"),t.qZA()()()()()()}if(2&n){const o=t.oxw();t.xp6(12),t.Q6J("formGroup",o.editpost),t.xp6(8),t.Q6J("ngForOf",o.categoris),t.xp6(6),t.Q6J("disabled",o.editpost.invalid)}}function j(n,e){1&n&&(t.TgZ(0,"div")(1,"div",17)(2,"div",18),t._UZ(3,"div",19),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}Z.\u0275fac=function(e){return new(e||Z)(t.Y36(c.o),t.Y36(a.F0))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-create-post"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"p-3","rounded","MyBorder","my-4","m-2"],[1,"rounded","p-3"],[1,"col-12"],[1,"d-flex","justify-content-between"],["title"," Click Here To close","routerLink","/adminhome",1,"btn-danger","my-2","btn","btn-sm"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","placeholder","minimum 5 letters required","formControlName","title",1,"form-control","my-2"],["formControlName","category","placeholder","Please select a category",1,"form-control","my-2"],[3,"value",4,"ngFor","ngForOf"],["placeholder","minimum 10 letters required ","formControlName","content","rows","15",1,"form-control","my-2"],[1,"text-warning"],["type","submit",1,"btn","rounded","my-2","btn-warning",3,"disabled"],[3,"value"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.YNc(0,O,28,3,"div",0),t.YNc(1,F,6,0,"div",1)),2&e&&(t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.sg,d.O5,a.rH,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]});class y{constructor(e,o,r){this.api=e,this.route=o,this.router=r,this.editpost=new i.cw({title:new i.NI("",[i.kI.required,i.kI.minLength(5)]),content:new i.NI("",[i.kI.required,i.kI.minLength(10)]),category:new i.NI("",[i.kI.required,i.kI.minLength(2)])})}ngOnInit(){this._id=this.route.snapshot.params._id,this.getdata()}getdata(){this.loaderShow=!0,this.api.getbyidpost(this._id).subscribe(e=>{this.post=e,this.editpost.setValue({title:this.post.title,content:this.post.content,category:this.post.category}),this.api.getallcategories().subscribe(o=>{this.categoris=o,this.loaderShow=!1})})}submit(){this.loaderShow=!0,console.log("aas",this.editpost.value),this.api.updatepost(this.editpost.value,this._id).subscribe({next:e=>{this.loaderShow=!1,alert("Data saved successfully"),console.log("incoming data from blog post",e),this.router.navigate(["/adminhome"])},error:e=>{this.loaderShow=!1,alert(`Error occured ${e.error}`)}})}}function H(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"th",6),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",7),t.NdJ("click",function(){const l=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.deletes(l._id))}),t._uU(11,"Delete"),t.qZA(),t.TgZ(12,"button",8),t.NdJ("click",function(){const l=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.edit(l._id))}),t._uU(13,"Edit"),t.qZA(),t.TgZ(14,"button",9),t.NdJ("click",function(){const l=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.readmore(l.category))}),t._uU(15,"ReadPosts "),t.qZA()()()}if(2&n){const o=e.$implicit,r=e.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(o.category),t.xp6(2),t.Oqu(o.date),t.xp6(2),t.Oqu(o._id)}}function G(n,e){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr",3)(3,"th",4),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",4),t._uU(6,"Category Name"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Date"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Category Id"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Function"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,H,16,4,"tr",5),t.qZA()()),2&n){const o=t.oxw();t.xp6(14),t.Q6J("ngForOf",o.viewcategory)}}function B(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"h3"),t._uU(4,"Edit Category"),t.qZA(),t.TgZ(5,"button",14),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.closeEditform())}),t._uU(6,"Close"),t.qZA()(),t._UZ(7,"hr"),t.TgZ(8,"div",15)(9,"form",16),t.NdJ("ngSubmit",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.submit())}),t.TgZ(10,"div",17)(11,"label"),t._uU(12,"Enter Category Name"),t.qZA(),t._UZ(13,"input",18),t.qZA(),t.TgZ(14,"button",19),t._uU(15,"Submit"),t.qZA()()()()()}if(2&n){const o=t.oxw(2);t.xp6(9),t.Q6J("formGroup",o.editcategory),t.xp6(5),t.Q6J("disabled",o.editcategory.invalid)}}function R(n,e){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,B,16,2,"div",10),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.api.isLoggedin())}}function W(n,e){1&n&&(t.TgZ(0,"div")(1,"div",11)(2,"div",20),t._UZ(3,"div",21),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}y.\u0275fac=function(e){return new(e||y)(t.Y36(c.o),t.Y36(a.gz),t.Y36(a.F0))},y.\u0275cmp=t.Xpm({type:y,selectors:[["app-edit-a-post"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"p-3","rounded","MyBorder","my-4","m-2"],[1,"rounded","p-3"],[1,"col-12"],[1,"d-flex","justify-content-between"],["title"," Click Here To close","routerLink","/adminhome",1,"btn-danger","my-2","btn","btn-sm"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","placeholder","minimum 5 letters required","formControlName","title",1,"form-control","my-2"],["formControlName","category","placeholder","Please select a category",1,"form-control","my-2"],[3,"value",4,"ngFor","ngForOf"],["placeholder","minimum 10 letters required ","formControlName","content","rows","15",1,"form-control","my-2"],[1,"text-warning"],["type","submit",1,"btn","rounded","my-2","btn-warning",3,"disabled"],[3,"value"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.YNc(0,Q,28,3,"div",0),t.YNc(1,j,6,0,"div",1)),2&e&&(t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.sg,d.O5,a.rH,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]});class x{constructor(e,o,r){this.api=e,this.route=o,this.router=r,this.editEnable=!1,this.editcategory=new i.cw({category:new i.NI("",[i.kI.required,i.kI.minLength(3)])})}ngOnInit(){this.editEnable=!1,this.getdata()}getdata(){this.loaderShow=!0,this.api.getallcategories().subscribe(e=>{this.viewcategory=e,this.loaderShow=!1})}submit(){this.loaderShow=!0,this.api.updatecategory(this.editcategory.value,this.edit_id).subscribe({next:e=>{this.loaderShow=!1,alert("Category Updated Successfully"),this.getdata(),this.editEnable=!1},error:e=>{this.loaderShow=!1,alert(e.error)}})}closeEditform(){this.loaderShow=!0,this.editEnable=!1,this.editcategory.reset(),this.loaderShow=!1,this.router.navigate(["adminhome/manage_categorys"])}edit(e){this.loaderShow=!0,this.editEnable=!0,this.edit_id=e,this.api.getbyidcategory(e).subscribe(o=>{this.oldcategory=o,this.editcategory.setValue({category:this.oldcategory.category}),this.loaderShow=!1})}deletes(e){this.loaderShow=!0,this.api.deletecategory(e).subscribe({next:o=>{this.loaderShow=!1,alert("Post Deleted Successfully"),this.getdata()},error:o=>{this.loaderShow=!1,alert(o.error)}})}readmore(e){this.loaderShow=!0,this.router.navigate([`adminhome/readPostBycategory/${e}`]),this.loaderShow=!1}}function $(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"th",6),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"button",7),t.NdJ("click",function(){const l=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.deletes(l._id))}),t._uU(17,"Delete"),t.qZA(),t.TgZ(18,"button",8),t.NdJ("click",function(){const l=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.edit(l._id))}),t._uU(19,"Edit"),t.qZA(),t.TgZ(20,"button",9),t.NdJ("click",function(){const l=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.readmore(l._id))}),t._uU(21,"Readmore "),t.qZA()()()}if(2&n){const o=e.$implicit,r=e.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Oqu(o.category),t.xp6(2),t.Oqu(o.date),t.xp6(2),t.Oqu(o.user_name),t.xp6(2),t.Oqu(o.user_id),t.xp6(2),t.Oqu(o._id)}}function K(n,e){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr",3)(3,"th",4),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",4),t._uU(6,"Title"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Category"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Date"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"User_name"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"User_id"),t.qZA(),t.TgZ(15,"th",4),t._uU(16,"Post_id"),t.qZA(),t.TgZ(17,"th",4),t._uU(18,"Function"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,$,22,7,"tr",5),t.qZA()()),2&n){const o=t.oxw();t.xp6(20),t.Q6J("ngForOf",o.viewposts)}}function z(n,e){1&n&&(t.TgZ(0,"div")(1,"div",10)(2,"div",11),t._UZ(3,"div",12),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}x.\u0275fac=function(e){return new(e||x)(t.Y36(c.o),t.Y36(a.gz),t.Y36(a.F0))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-manage-category"]],decls:3,vars:3,consts:[["class","table table-success table-striped text-center",4,"ngIf"],[4,"ngIf"],[1,"table","table-success","table-striped","text-center"],[1,"text-danger"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","button",1,"btn","m-1","btn-sm","btn-danger",3,"click"],["type","button",1,"btn","m-1","btn-warning","btn-sm",3,"click"],["type","button",1,"btn","m-1","btn-sm","btn-success",3,"click"],["class","loading",4,"ngIf"],[1,"loading"],[1,"p-4","rounded","MyBorder"],[1,"d-flex","justify-content-between"],[1,"btn","m-1","btn-sm","btn-danger",3,"click"],[1,"p-3a"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","placeholder","minimum 3 letters required","formControlName","category",1,"form-control","my-2"],["type","submit",1,"btn","rounded","my-2","btn-warning",3,"disabled"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.YNc(0,G,15,1,"table",0),t.YNc(1,R,2,1,"div",1),t.YNc(2,W,6,0,"div",1)),2&e&&(t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.editEnable),t.xp6(1),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.sg,d.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]});class m{constructor(e,o,r){this.api=e,this.route=o,this.router=r}ngOnInit(){this.getdata()}getdata(){this.loaderShow=!0,this.api.getallposts().subscribe(e=>{this.viewposts=e,this.loaderShow=!1})}edit(e){this.router.navigate([`adminhome/editapost/${e}`])}deletes(e){this.loaderShow=!0,this.api.deletepost(e).subscribe({next:o=>{this.loaderShow=!1,alert("Post Deleted Successfully"),this.getdata()},error:o=>{this.loaderShow=!1,alert(o.error)}})}readmore(e){this.router.navigate([`adminhome/readmorepost/${e}`])}}function D(n,e){if(1&n&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div")(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA()(),t.TgZ(14,"div")(15,"button",7),t._uU(16,"Close"),t.qZA()()(),t._UZ(17,"hr"),t.TgZ(18,"p",8),t._uU(19),t.qZA()()()()()),2&n){const o=t.oxw();t.xp6(7),t.Oqu(o.post.title),t.xp6(2),t.hij("(By : ",o.post.user_name,")"),t.xp6(2),t.hij("Category: ",o.post.category,""),t.xp6(2),t.hij("Date: ",o.post.date,""),t.xp6(6),t.Oqu(o.post.content)}}function X(n,e){1&n&&(t.TgZ(0,"div")(1,"div",9)(2,"div",10),t._UZ(3,"div",11),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}m.\u0275fac=function(e){return new(e||m)(t.Y36(c.o),t.Y36(a.gz),t.Y36(a.F0))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-manage-posts"]],decls:2,vars:2,consts:[["class","table table-success table-striped text-center",4,"ngIf"],[4,"ngIf"],[1,"table","table-success","table-striped","text-center"],[1,"text-danger"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","button",1,"btn","w-100","m-1","btn-sm","btn-danger",3,"click"],["type","button",1,"btn","w-100","m-1","btn-warning","btn-sm",3,"click"],["type","button",1,"btn","w-100","m-1","btn-sm","btn-success",3,"click"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.YNc(0,K,21,1,"table",0),t.YNc(1,z,6,0,"div",1)),2&e&&(t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.sg,d.O5]});class C{constructor(e,o,r){this.api=e,this.route=o,this.router=r,this.post={title:"",category:"",user_name:"",Date:"",content:""}}ngOnInit(){this._id=this.route.snapshot.params._id,this.getdata()}getdata(){this.loaderShow=!0,this.api.getbyidpost(this._id).subscribe({next:e=>{this.post=e,this.loaderShow=!1},error:e=>{this.loaderShow=!1,alert(`Error...  ${e.error}`)}})}}function V(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div")(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"div")(13,"div",9)(14,"button",10),t._uU(15,"Close"),t.qZA()()()(),t._UZ(16,"hr"),t.TgZ(17,"p",11),t._uU(18),t.qZA()(),t.TgZ(19,"div",8)(20,"button",12),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.previous())}),t._uU(21,"PreviousPost"),t.qZA(),t.TgZ(22,"button",13),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.next())}),t._uU(23,"NextPost"),t.qZA()()()}if(2&n){const o=t.oxw(2);t.xp6(5),t.Oqu(o.posts[o.i].title),t.xp6(2),t.hij("(By : ",o.posts[o.i].user_name,")"),t.xp6(2),t.hij("Category: ",o.posts[o.i].category,""),t.xp6(2),t.hij("Date: ",o.posts[o.i].date,""),t.xp6(7),t.Oqu(o.posts[o.i].content)}}function tt(n,e){1&n&&(t.TgZ(0,"div",14)(1,"div",15)(2,"div",16)(3,"h2")(4,"i"),t._uU(5,"( There Is No Post In This Category )"),t.qZA()(),t.TgZ(6,"small")(7,"i"),t._uU(8,"( Please Select Another Category )"),t.qZA()()(),t.TgZ(9,"div",17)(10,"div",9)(11,"button",10),t._uU(12,"Close"),t.qZA()()()()())}function et(n,e){if(1&n&&(t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,V,24,5,"div",4),t.YNc(3,tt,13,0,"div",5),t.qZA()()),2&n){const o=t.oxw();t.xp6(2),t.Q6J("ngIf",!o.notFound),t.xp6(1),t.Q6J("ngIf",o.notFound)}}function ot(n,e){1&n&&(t.TgZ(0,"div")(1,"div",18)(2,"div",19),t._UZ(3,"div",20),t.TgZ(4,"h6"),t._uU(5,"Please Wait While Loading..."),t.qZA()()()())}C.\u0275fac=function(e){return new(e||C)(t.Y36(c.o),t.Y36(a.gz),t.Y36(a.F0))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-read-more-post"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"p-3","rounded","MyBorder","my-4","m-2"],[1,"rounded","p-3"],[1,"col-12"],[1,"d-flex","justify-content-between"],["title"," Click Here To close","routerLink","/adminhome",1,"btn-danger","my-2","btn","btn-sm"],[1,"justify"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.YNc(0,D,20,5,"div",0),t.YNc(1,X,6,0,"div",1)),2&e&&(t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.O5,a.rH],styles:[".justify[_ngcontent-%COMP%]{text-align:justify}"]});class T{constructor(e,o,r){this.api=e,this.router=o,this.route=r,this.posts=[{title:"",content:"",user_id:"",user_name:"",category:""}],this.i=0,this.postLength=0,this.notFound=!1}ngOnInit(){this.category=this.route.snapshot.params.category,this.getdata()}getdata(){this.loaderShow=!0,this.i=0,this.api.searchpostbycategory(this.category).subscribe({next:e=>{this.posts=e,this.postLength=this.posts.length-1,this.loaderShow=!1},error:e=>{this.notFound=!0,this.loaderShow=!1}})}previous(){this.loaderShow=!0,0!=this.i?this.i--:alert("You Reached First Post"),this.loaderShow=!1}next(){this.loaderShow=!0,this.postLength>this.i?this.i++:alert("You Reached Last Post"),this.loaderShow=!1}}T.\u0275fac=function(e){return new(e||T)(t.Y36(c.o),t.Y36(a.F0),t.Y36(a.gz))},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-read-post-by-category"]],decls:2,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"p-3","rounded","MyBorder","my-4","m-2"],["class"," rounded  p-3 ",4,"ngIf"],["class","text-center  p-3",4,"ngIf"],[1,"rounded","p-3"],[1,"col-12"],[1,"d-flex","justify-content-between"],["title","Close"],["routerLink","/adminhome/manage_categorys",1,"btn-danger","my-2","btn","btn-sm"],[1,"justify"],["title","Click Here For Previous Post",1,"btn","btn-warning","btn-sm",3,"click"],["title","Click Here For Next Post",1,"btn-warning","btn","btn-sm",3,"click"],[1,"text-center","p-3"],[1,"d-flex"],[1,"p-2","w-100"],[1,"p-2","flex-shrink-1"],[1,"loading"],[1,"text-center"],["role","status",1,"spinner-border","m-3","text-light",2,"width","3rem","height","3rem"]],template:function(e,o){1&e&&(t.YNc(0,et,4,2,"div",0),t.YNc(1,ot,6,0,"div",1)),2&e&&(t.Q6J("ngIf",o.api.isLoggedin()),t.xp6(1),t.Q6J("ngIf",o.loaderShow))},dependencies:[d.O5,a.rH]});const nt=[{path:"",component:v,canActivate:[p],children:[{path:"",component:m},{path:"manage_posts",component:m},{path:"readmorepost/:_id",component:C},{path:"readPostBycategory/:category",component:T},{path:"editapost/:_id",component:y},{path:"create_post",component:Z},{path:"create_category",component:b},{path:"manage_categorys",component:x}]}];class _{}_.\u0275fac=function(e){return new(e||_)},_.\u0275mod=t.oAB({type:_}),_.\u0275inj=t.cJS({imports:[a.Bz.forChild(nt),a.Bz]});var w=g(529);class h{constructor(e){this.inj=e}intercept(e,o){let r=this.inj.get(c.o),s=e.clone({setHeaders:{Authorization:`Bearer ${r.getToken()} `}});return o.handle(s)}}h.\u0275fac=function(e){return new(e||h)(t.LFG(t.zs3))},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"});class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({providers:[c.o,{provide:w.TP,useClass:h,multi:!0}],imports:[d.ez,_,i.u5,i.UX,a.Bz,w.JF]})}}]);