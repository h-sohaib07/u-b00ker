(this["webpackJsonpu-booker-1"]=this["webpackJsonpu-booker-1"]||[]).push([[0],{22:function(e,a,t){},40:function(e,a,t){e.exports=t(53)},53:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(12),s=t.n(l),m=(t(45),t(30)),o=t(13),i=t(14),c=t(18),d=t(15),E=t(19),h=t(57),u=t(55),p=t(58),C=t(56),g=t(34),y=t(59),v=(t(22),{Firstname:"",Surname:"",Companyname:"",Companyemail:"",Companyaddress:"",Confirmemail:"",Password:"",Postcode:"",Companywebpagelink:"",LinkedInlink:"",Instagramlink:"",Industry:"",Role:"",FirstnameError:"",SurnameError:"",CompanynameError:"",CompanyemailError:"",CompanyaddressError:"",ConfirmemailError:"",PasswordError:"",PostcodeError:"",CompanywebpagelinkError:"",LinkedInlinkError:"",InstagramlinkError:"",IndustryError:"",RoleError:""}),b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state=v,t.handleChange=function(e){console.log(e.target.value),t.setState(Object(m.a)({},e.target.name,e.target.value))},t.validate=function(){var e=!1,a="",r="",n="",l="",s="",m="",o="",i="",c="",d="",E="",h="",u="";return t.state.Firstname?(a="",t.setState({FirstnameError:a})):a="*This field is required",t.state.Surname?(r="",t.setState({SurnameError:r})):r="*This field is required",t.state.Companyaddress?(s="",t.setState({CompanyaddressError:s})):s="*This field is required",t.state.Companyname?(n="",t.setState({CompanynameError:n})):n="*This field is required",t.state.Companyemail?(l="",t.setState({CompanyemailError:l})):l="*This field is required",t.state.Confirmemail?(m="",t.setState({ConfirmemailError:m})):m="*This field is required",t.state.Password?(o="",t.setState({PasswordError:o})):o="*This field is required",t.state.Postcode?(i="",t.setState({PostcodeError:i})):i="*This field is required",t.state.Companywebpagelink?(c="",t.setState({CompanywebpagelinkError:c})):c="*This field is required",t.state.LinkedInlink?(d="",t.setState({LinkedInlinkError:d})):d="*This field is required",t.state.Instagramlink?(E="",t.setState({InstagramlinkError:E})):E="*This field is required",t.state.Industry?(h="",t.setState({IndustryError:h})):h="*This field is required",t.state.Role?(u="",t.setState({RoleError:u})):u="*This field is required",a&&(t.setState({FirstnameError:a}),e=!0),r&&(t.setState({SurnameError:r}),e=!0),n&&(t.setState({CompanynameError:n}),e=!0),l&&(t.setState({CompanyemailError:l}),e=!0),s&&(t.setState({CompanyaddressError:s}),e=!0),m&&(t.setState({ConfirmemailError:m}),e=!0),o&&(t.setState({PasswordError:o}),e=!0),i&&(t.setState({PostcodeError:i}),e=!0),c&&(t.setState({CompanywebpagelinkError:c}),e=!0),d&&(t.setState({LinkedInlinkError:d}),e=!0),E&&(t.setState({InstagramlinkError:E}),e=!0),h&&(t.setState({IndustryError:h}),e=!0),u&&(t.setState({RoleError:u}),e=!0),1!=e},t.handleSubmit=function(e){e.preventDefault(),t.validate()&&(console.log(t.state),t.setState(v))},t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e={border:"1px solid #f75011"};return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{style:{backgroundColor:"#f75011"}},n.a.createElement(h.a.Brand,{className:"font-weight-bold text-white"},"JOIN NOW")),n.a.createElement("div",null,n.a.createElement(u.a,{className:"mt-5"},n.a.createElement(p.a,{onSubmit:this.handleSubmit},n.a.createElement(C.a,{className:"mb-2"},n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,name:"Firstname",placeholder:"First name",value:this.state.Firstname,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.FirstnameError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Surname",name:"Surname",value:this.state.Surname,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.SurnameError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Company name",name:"Companyname",value:this.state.Companyname,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.CompanynameError))),n.a.createElement(C.a,{className:"mb-2"},n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Company email",name:"Companyemail",value:this.state.Companyemail,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.CompanyemailError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Confirm email",name:"Confirmemail",value:this.state.Confirmemail,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.ConfirmemailError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Password",name:"Password",value:this.state.Password,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.PasswordError))),n.a.createElement(C.a,{className:"mb-2"},n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Company address",name:"Companyaddress",value:this.state.Companyaddress,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.CompanyaddressError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement("div",null,n.a.createElement(p.a.Control,{style:e,placeholder:"+1",name:"Phone",value:this.state.PhoneInput,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.PhoneInputError))),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Zip / Post code",name:"Postcode",value:this.state.Postcode,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.PostcodeError))),n.a.createElement(C.a,{className:"mb-2"},n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Company webpage link",name:"Companywebpagelink",value:this.state.Companywebpagelink,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.CompanywebpagelinkError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"LinkedIn link",name:"LinkedInlink",value:this.state.LinkedInlink,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.LinkedInlinkError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{style:e,placeholder:"Instagram link",name:"Instagramlink",value:this.state.Instagramlink,onChange:this.handleChange}),n.a.createElement("div",{className:"errormsg"},this.state.InstagramlinkError))),n.a.createElement(C.a,{className:"mb-2"},n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{as:"select",style:e,name:"Industry",value:this.state.Industry,onChange:this.handleChange},n.a.createElement("option",{value:""},"Industry"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3")),n.a.createElement("div",{className:"errormsg"},this.state.IndustryError)),n.a.createElement(g.a,{xs:12,md:4},n.a.createElement(p.a.Control,{as:"select",style:e,name:"Role",value:this.state.Role,onChange:this.handleChange},n.a.createElement("option",{value:""},"Your Role"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3")),n.a.createElement("div",{className:"errormsg"},this.state.RoleError))),n.a.createElement(C.a,{className:"mb-2"},n.a.createElement(g.a,null,n.a.createElement(p.a.Check,{type:"checkbox",label:"I have read and I accepted the Privacy Policy and the License Agreement"}))),n.a.createElement(C.a,{className:"mb-2"},n.a.createElement(g.a,{sm:5}),n.a.createElement(g.a,{sm:2},n.a.createElement(y.a,{variant:"secondary",type:"submit"},"Submit")),n.a.createElement(g.a,{sm:5}))))))}}]),a}(n.a.Component),k=t(17),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid h-100"},n.a.createElement(C.a,{className:"h-100"},n.a.createElement(g.a,{className:"d-none d-md-block d-lg-block",md:6,id:"yellow"}),n.a.createElement(g.a,{xs:12,md:6},n.a.createElement(u.a,{className:"cont-sign-in"},n.a.createElement(p.a,null,n.a.createElement("p",{className:"h5 text-center mb-4",style:{backgroundColor:"1ps solid #f75011"}},"Sign In"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(p.a.Control,{className:"inp-bdr mb-3",name:"Username",placeholder:"Username"}),n.a.createElement(p.a.Control,{type:"password",className:"inp-bdr mb-3",name:"Password",placeholder:"Password"})),n.a.createElement(C.a,null,n.a.createElement(g.a,null,n.a.createElement(p.a.Check,{custom:!0,type:"checkbox",className:"fanc-check",label:"Remember me"})),n.a.createElement(g.a,{style:{textAlign:"Right"}},n.a.createElement("label",null,"Forget Password?"))),n.a.createElement(y.a,{className:"loginBtn"},"Sign in"),n.a.createElement("label",{className:"loginOr"},"Or"),n.a.createElement(k.b,{to:"/signup"},n.a.createElement(y.a,{className:"signupBtn"},"Sign Up")))))))}}]),a}(n.a.Component),S=t(9);var N=function(){return n.a.createElement(k.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(S.c,null,n.a.createElement(S.a,{path:"/login"},n.a.createElement(f,null)),n.a.createElement(S.a,{path:"/signup"},n.a.createElement(b,null)),n.a.createElement(S.a,{path:"/"},n.a.createElement(f,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.da2c56ef.chunk.js.map