(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){e.exports=n.p+"static/media/logo.a8f30753.PNG"},107:function(e,t,n){e.exports=n(182)},112:function(e,t,n){},113:function(e,t,n){},15:function(e,t){t.serverUrl="",t.socketUrl=""},150:function(e,t){},153:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=153},172:function(e,t){},174:function(e,t){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),o=n.n(c),l=(n(112),n(113),n(5)),i=n(10),u=n(6),s=n(13);function m(){var e=Object(a.useState)("Psychiatrist"),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),m=Object(l.a)(o,2),p=m[0],d=m[1];return r.a.createElement("div",{className:"patient-search-doctor"},r.a.createElement("h2",null,"Make an appointment"),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(u.a,null,r.a.createElement(u.a.Group,{controlId:"doctorSearchForm.doctorName"},r.a.createElement(u.a.Label,null,"Doctor Name:"),r.a.createElement(u.a.Control,{type:"text",placeholder:"E.g. Jane Doe",onChange:function(e){d(e.target.value)}})),r.a.createElement(u.a.Group,{controlId:"doctorSearchForm.selectSpecialization"},r.a.createElement(u.a.Label,null,"Doctor's Specialization"),r.a.createElement(u.a.Control,{as:"select",onChange:function(e){c(e.target.value)}},r.a.createElement("option",null,"Psychiatrist"),r.a.createElement("option",null,"Child Psychiatrist"),r.a.createElement("option",null,"Psychologist"),r.a.createElement("option",null,"Child Psychologist"),r.a.createElement("option",null,"Therapist"))),r.a.createElement(i.a,null,r.a.createElement(s.b,{params:{doctor:p,specialization:n},to:{pathname:"/patients/searchDoctor",state:{doctorName:p,specialization:n}}},"Search"))))}var p=n(34);function d(e){var t=new Date(e.appointment.sessionDetails.date);return r.a.createElement("tr",null,r.a.createElement("td",null," Dr. ",e.appointment.doctorDetails.name," "),r.a.createElement("td",null,"  ",e.appointment.doctorDetails.specialization," "),r.a.createElement("td",null," ",t.getDate(),"/",t.getMonth(),"/",t.getFullYear()," "),r.a.createElement("td",null," ",t.getHours(),":",t.getMinutes(),"  "),r.a.createElement("td",{className:"cancel-appointment-td"}," ",e.appointment.completed?"":r.a.createElement(i.a,{variant:"danger"},"Cancel Appointment")," "))}var f=n(9),E=n.n(f),h=n(14),b=n(15);function g(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/patient/appointments/".concat(e)).then((function(e){return e.json()})).then((function(e){n({type:"FETCH_PATIENT_APPOINTMENTS",payload:e})})).catch((function(e){alert("patient appointment error"+e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function v(){return function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UNAUTHENTICATE_PATIENT"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var O=n(7);var j=Object(O.b)((function(e){return{patient:e.patient}}),{getPatientAppointments:g})((function(e){var t=e.patient.patientAppointments,n=[];return console.log(e),t.forEach((function(e){n.push(r.a.createElement(d,{key:e._id,appointment:e}))})),r.a.createElement("div",null,r.a.createElement("h4",null,"Your Current Appointments"),r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Doctor"),r.a.createElement("th",null,"Specialization"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.map((function(e){return e})))))})),y=n(16),S=n(37),T=n(50);var D=Object(O.b)((function(e){return{patient:e.patient}}),{logPatientOut:v})((function(e){return r.a.createElement(S.a,{bg:"light",variant:"light"},r.a.createElement(S.a.Brand,{href:"#home",className:"navbar-logo-psyconnect"}," PsyconnectME - Patient "),r.a.createElement(T.a,{className:"mr-auto"}),r.a.createElement(i.a,{variant:"dark",onClick:function(){e.logPatientOut()}},"Sign Out"))}));var C=Object(O.b)((function(e){return{patient:e.patient}}),{setCurrentSessionActive:function(e,t){return function(){var n=Object(h.a)(E.a.mark((function n(a){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"PUT_PATIENT_IN_SESSION",payload:{username:e,authenticated:!0,currentAppointment:t,inSession:!0}});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logPatientOut:v,getPatientAppointments:g})((function(e){var t,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],u=c[1],p=Object(a.useState)(),d=Object(l.a)(p,2),f=d[0],E=d[1],h=!1,b=null,g=Object(a.useState)(null),v=Object(l.a)(g,2),O=v[0],S=v[1];Object(a.useEffect)((function(){e.getPatientAppointments(e.patient.patient_id),u(r.a.createElement(j,null));var t=C();E(t),I()}),[]);var T=function(){e.setCurrentSessionActive(e.patient.username,b)},C=function(){var n=e.patient.patientAppointments.slice().sort((function(e,t){return new Date(e.sessionDetails.date)-new Date(t.sessionDetails.date)}));if(!((n=n.filter((function(e){var t=new Date,n=new Date(e.sessionDetails.date);return n>=t||n.getFullYear()==t.getFullYear()&&n.getMonth()==t.getMonth()&&n.getDate()==t.getDate()&&t.getHours()-n.getHours()<=24}))).length>0))return"No upcoming appointments";t=new Date(n[0].sessionDetails.date);var a=new Date,r=a.getDate(),c=a.getMonth(),o=a.getFullYear();if(t.getFullYear()==o&&t.getMonth()==c&&t.getDate()==r){var l=t.getHours()-a.getHours();return h=l<1,b=l>=1?null:n[0]," Youra next appointment is in less than ".concat(l>1?l:1," hour(s) ")}var i=Math.floor((Date.parse(t)-Date.parse(new Date))/864e5);return"Your next appointment is in ".concat(i," day(s) ")},I=function(){h&&S(r.a.createElement(s.b,{to:"/room/"+b._id,className:"nav-link"},r.a.createElement(i.a,{variant:"success",onClick:T},"Call Doctor")))};return r.a.createElement(y.a,null,r.a.createElement(D,null),r.a.createElement("br",null),o||"No Appointments",r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h3",null," ",f," "),O,r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(m,null))})),I=n(28);var N=Object(O.b)((function(e){return{doctorDetails:e.doctor.doctorDetails}}),{logDoctorOut:function(){return function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UNAUTHENTICATE_DOCTOR"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return r.a.createElement("div",null,r.a.createElement(S.a,{bg:"light",variant:"light"},r.a.createElement(S.a.Brand,{href:"#home",className:"navbar-logo-psyconnect"}," PsyconnectME - Dr. ",e.doctorDetails.name,"  "),r.a.createElement(T.a,{className:"mr-auto"}),r.a.createElement(i.a,{variant:"dark",onClick:e.logDoctorOut},"Sign Out")))}));function _(e){var t=new Date(e.session.date);return r.a.createElement("tr",null,r.a.createElement("td",null,e.session._id),r.a.createElement("td",null,e.session.date),r.a.createElement("td",null,t.getHours(),":",t.getMinutes()),r.a.createElement("td",null,e.patientsCount))}var w=Object(O.b)((function(e){return{doctorId:e.doctor.doctorDetails._id,appointments:e.appointments.items,sessions:e.session.sessions}}),{fetchDoctorSessions:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(b.serverUrl,"/doctors/sessions/").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:"FETCH_DOCTOR_SESSIONS",payload:e.sessionData})})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){Object(a.useEffect)((function(){e.fetchDoctorSessions(e.doctorId)}),[]);var t=[];return e.sessions&&(t=e.sessions.map((function(e){if(new Date(e.session.date)>=new Date)return r.a.createElement(_,{patientsCount:e.appointmentCount,session:e.session})}))),r.a.createElement(p.a,null,r.a.createElement("thead",null,r.a.createElement("th",null,"Session Id"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Starting Time"),r.a.createElement("th",null,"No. of Patients")),r.a.createElement("tbody",null,t.map((function(e){return e}))))}));var A=Object(O.b)((function(e){return{doctor:e.doctor,sessions:e.session}}),{})((function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(),m=Object(l.a)(s,2),p=m[0],d=m[1],f=Object(a.useState)(25),E=Object(l.a)(f,2),h=E[0],g=E[1];return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(u.a.Group,{controlId:"sessionBuilder.DateSelect"},r.a.createElement(u.a.Label,null,"Date: "),r.a.createElement(u.a.Control,{onChange:function(e){return o(e.target.value)},type:"date"})),r.a.createElement(u.a.Group,{controlId:"sessionBuilder.ControlSelect2"},r.a.createElement(u.a.Label,null,"Time: "),r.a.createElement(u.a.Control,{onChange:function(e){return d(e.target.value)},type:"time",multiple:!0})),r.a.createElement(u.a.Group,{controlId:"sessionBuilder.ControlTextarea1"},r.a.createElement(u.a.Label,null,"Maximum number of patients:"),r.a.createElement(u.a.Control,{onChange:function(e){return g(e.target.value)},type:"number",placeholder:"25"})),r.a.createElement(i.a,{variant:"primary",onClick:function(){if(void 0!==c&&void 0!==p){e.sessions.sessions.forEach((function(e){var t=new Date(e.session.date),n="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate());c!=n||alert("There is already a session on that day")}));var t=new Date,n=new Date(c);if(t>n&&t.getDate()!=n.getDate()&&t.getMonth()!=n.getMonth()&&t.getFullYear()!=n.getFullYear())alert("The date has already passed");else{var a=Object(I.a)(p.match(/(\d{2}):(\d{2})/)),r=new Date(n.getFullYear(),n.getMonth(),n.getDate(),a[1],a[2]).toISOString();fetch("".concat(b.serverUrl,"/doctors/sessions/").concat(e.doctor.doctorDetails._id),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({dateTime:r,max_patients:h})}).then((function(e){return e.json()})).then((function(e){!0===e.success?alert("session added"):alert("Error creating session, check date and time")})).catch((function(e){alert("Error in creating session")}))}}else alert("Invalid Date or Time")}},"Create")))}));var P=Object(O.b)((function(e){return{doctor:e.doctor,sessions:e.session,clinic:e.clinic}}),{clinicNextPatient:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(b.serverUrl,"/doctors/appointments/next/").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:"CLINIC_NEXT_PATIENT",payload:e})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setDoctorInSession:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"START_DOCTOR_SESSION",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserDoctor:function(e){return function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_USER_DOCTOR"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=!1,n=null,c=null,o=Object(a.useState)("No sessions today"),u=Object(l.a)(o,2),m=u[0],p=u[1],d=Object(a.useState)(null),f=Object(l.a)(d,2),E=f[0],h=f[1],b=Object(a.useState)(null),g=Object(l.a)(b,2),v=g[0],O=g[1],j=[];Object(a.useEffect)((function(){S(),T(),C()}),[]);var S=function(){e.sessions.sessions.forEach((function(a){var r=(new Date).getDate(),o=new Date(a.session.date).getDate(),l=(new Date).getMonth(),i=new Date(a.session.date).getMonth(),u=(new Date).getTime(),s=new Date(a.session.date).getTime();o===r&&l==i&&(n=" ".concat(new Date(a.session.date).getHours(),":").concat(new Date(a.session.date).getMinutes()," "),t=!0,s<=u&&(c=a.session,e.setDoctorInSession(a.session)))}))},T=function(){var t=D(e.clinic.items.appointment);j=Object(I.a)(t),t.length>0&&O(r.a.createElement(s.b,{to:"/room/"+t[0]._id},r.a.createElement(i.a,{role:"doctor"},"ENTER CLINIC"))),console.log(j)},D=function(e){var t=e.filter((function(e){if(0==e.completed)return!0}));return t=t.sort((function(e,t){return e.patient_number>t.patient_number?1:t.patient_number>e.patient_number?-1:0}))},C=function(){t?(p("Session today at ".concat(n)),c&&h(r.a.createElement(i.a,{variant:"success",onClick:_}," ","Enter Session"))):p("No sessions today")},_=function(){e.clinicNextPatient(c._id)};return r.a.createElement(y.a,null,r.a.createElement(N,null),r.a.createElement("h3",null," Upcoming Sessions "),r.a.createElement(w,null),r.a.createElement("hr",null),r.a.createElement("h2",null," Sessions "),r.a.createElement("h3",null," ",m," "),r.a.createElement("hr",null),r.a.createElement(s.b,{to:"/doctor/clinic"},E),v,r.a.createElement("hr",null),r.a.createElement(i.a,null," Create a new Session "),r.a.createElement(A,null))})),k=n(35),x=n.n(k),M=n(36),U=n.n(M);function R(e){return r.a.createElement("video",{playsInline:!0,muted:!0,ref:e.stream,autoPlay:!0,style:{border:"1px solid blue",width:"50%",height:"50%"}})}function H(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useState)({value:""}),o=Object(l.a)(c,2),s=o[0],m=o[1],d=Object(a.useRef)({}),f=Object(a.useState)(null),E=Object(l.a)(f,2),h=E[0],b=E[1],g=Object(a.useState)(null),v=Object(l.a)(g,2),O=v[0],j=v[1],y=Object(a.useState)([]),S=Object(l.a)(y,2),T=S[0],D=S[1];Object(a.useEffect)((function(){C()}),[]);var C=function(){fetch("/medicine/list").then((function(e){return e.json()})).then((function(e){j(w(e)),D(e)})).catch((function(e){console.log("Error fetching medicine data"+e)}))};var I=function(e){var t=!1;return T.forEach((function(n){n.name==e&&(t=!0)})),t},N=function(e,t,n){d.current[t][n]=e.target.value,console.log(d.current[t])},_=function(e){delete d.current[e],console.log(d.current),b(A())},w=function(e){return e.map((function(e){return r.a.createElement("a",{onClick:function(e){x(e)}},e.name)}))},A=function(){return Object.keys(d.current).map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,d.current[e].name),r.a.createElement("td",null,r.a.createElement("input",{type:"number",onChange:function(t){N(t,e,"dosage")},plaxeholder:"0"})),r.a.createElement("td",null,r.a.createElement("select",{onChange:function(t){N(t,e,"beforeMeal")}},r.a.createElement("option",{value:"Before"},"Before"),r.a.createElement("option",{value:"After"},"After"))),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(t){N(t,e,"times")},type:"number"})),r.a.createElement("td",null,r.a.createElement(i.a,{variant:"danger",onClick:function(t){_(e)}}," ","x"," ")))}))},P=function(){"Add Medication"===n.current.innerText?(n.current.innerText="Cancel",n.current.style.backgroundColor="red"):(n.current.innerText="Add Medication",n.current.style.backgroundColor="#3e8e41")};function k(t){var n,a,r;for(m({value:t.target.value}),n=s.value.toUpperCase(),a=e.current.getElementsByTagName("a"),r=0;r<a.length;r++){(a[r].textContent||a[r].innerText).toUpperCase().indexOf(n)>-1?a[r].style.display="":a[r].style.display="none"}}var x=function(e){t.current.value=e.target.innerText};return r.a.createElement("div",null,r.a.createElement("div",{className:"searchMedicine"},r.a.createElement(u.a,null,r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{onClick:function(t){!function(t){t.preventDefault(),e.current.classList.toggle("show"),P()}(t)},className:"dropbtn",ref:n},"Add Medication"),r.a.createElement("div",{ref:e,className:"dropdown-content"},r.a.createElement("input",{type:"text",placeholder:"Medication Name",value:s.value,onChange:k,className:"searchInput",ref:t,onKeyUp:k}),O)),r.a.createElement(i.a,{variant:"primary",onClick:function(e){I(t.current.value)&&(d.current[t.current.value]={name:t.current.value,dosage:0,times:0,beforeMeal:"Before"},b(A()))}},"PRESCRIBE"))),r.a.createElement("div",{className:"prescriptionTable"},r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Medication"),r.a.createElement("th",null,"Dosage(mg)"),r.a.createElement("th",null,"Before/After Meals"),r.a.createElement("th",null,"Times/day "),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,h))))}var F=Object(O.b)((function(e){return{doctor:e.doctor,sessions:e.session,clinic:e.clinic}}),{})((function(e){var t,n=Object(a.useState)({}),c=Object(l.a)(n,2),o=(c[0],c[1],Object(a.useState)()),i=Object(l.a)(o,2),u=i[0],s=i[1],m=Object(a.useState)(!1),p=Object(l.a)(m,2),d=p[0],f=(p[1],Object(a.useState)("")),E=Object(l.a)(f,2),h=(E[0],E[1],Object(a.useState)()),b=Object(l.a)(h,2),g=(b[0],b[1],Object(a.useState)(!1)),v=Object(l.a)(g,2),O=v[0],j=(v[1],Object(a.useRef)()),S=Object(a.useRef)(),T=e.clinic.items.appointment[0].session_id,D=Object(a.useState)(0),C=Object(l.a)(D,2),I=C[0],N=C[1],_=new U.a(T,{host:"/",port:"3001",config:{iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"}]}});function w(e,t){N(e.patient_number);try{console.log(_);var n=_.call(e._id,u);console.log(typeof n)}catch(a){alert(a)}new U.a(e._id,{host:"/",port:"3001"}).on("call",(function(e){alert(1)}))}return Object(a.useEffect)((function(){S.current=x()("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){s(e),j.current&&(j.current.srcObject=e)})),S.current.on("firstpatient",(function(e){w(e)})),S.current.on("nextPatient",(function(e){w(e.next_appointment,e.peer)})),S.current.on("patientToConnect",(function(e){alert("fn -- patient to connect"),w(e.appointment,e.peer)}))}),[]),u&&r.a.createElement(R,{stream:j}),O&&(t=r.a.createElement(R,{stream:t})),d&&r.a.createElement("div",null),r.a.createElement(y.a,null,r.a.createElement("h1",null," Dr.",e.doctor.name," Clinic "),r.a.createElement("h5",null," Current session id: ",T," "),r.a.createElement("h4",null,"Patient number : ",I),r.a.createElement("div",null,r.a.createElement("video",{muted:!0,ref:e.yourVid,autoPlay:!0,playsInline:!0}),r.a.createElement("video",{ref:e.otherVid,autoPlay:!0,playsInline:!0})),r.a.createElement("div",null,r.a.createElement("h5",null,"Connect to Next Patient"),r.a.createElement("button",{onClick:function(){S.current.emit("doctorEnterSession",{appointments:e.clinic.items.appointment}),S.current.emit("callnextpatient",T)}},"CONNECT to patient ",I)),r.a.createElement(H,null))}));var L=Object(O.b)((function(e){return{patient:e.patient}}),{})((function(e){var t,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=(c[0],c[1],Object(a.useState)({})),u=Object(l.a)(o,2),s=(u[0],u[1],Object(a.useState)()),m=Object(l.a)(s,2),p=m[0],d=m[1],f=Object(a.useState)(!1),E=Object(l.a)(f,2),h=E[0],b=(E[1],Object(a.useState)("")),g=Object(l.a)(b,2),v=g[0],O=(g[1],Object(a.useState)()),j=Object(l.a)(O,2),S=(j[0],j[1],Object(a.useState)(!1)),T=Object(l.a)(S,2),D=(T[0],T[1],Object(a.useRef)()),C=(Object(a.useRef)(),Object(a.useRef)()),I=e.patient.currentAppointment.session_id,N=new U.a(e.patient.currentAppointment._id,{host:"/",port:"3001"});return Object(a.useRef)(),Object(a.useRef)(),N.on("open",(function(t){alert("dev -- opening patient peer"),C.current.emit("patientEnterClinic",{appointment:e.patient.currentAppointment,peer:null})})),Object(a.useEffect)((function(){C.current=x()("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){d(e),D.current&&(D.current.srcObject=e)})),C.current.on("requestPatientConnect",(function(t){t.appointment_id==e.patient.patientAppointments[0]._id&&C.current.emit("patientEnterClinic",{session_id:I,appointment_id:t.appointment_id})})),C.current.on("requestPeer",(function(t){alert("peer sent"),t.appointment._id==e.patient.currentAppointment._id&&C.current.emit("respondWithPeer",{peer:null,session_id:e.patient.currentAppointment.session_id})})),C.current.on("doctorIsIn",(function(e){}))}),[]),N.on("call",(function(e){e.answer(p),alert("The doctor is calling you")})),h&&(t=r.a.createElement("div",null,r.a.createElement("h1",null,v," is calling you"))),r.a.createElement(y.a,null,r.a.createElement("h1",null,"Clinic session - Session Id : ",I),r.a.createElement("h4",null,"Patient number : ",e.patient.currentAppointment.patient_number),r.a.createElement("h4",null,"appointment id : ",e.patient.currentAppointment._id),r.a.createElement("div",null,r.a.createElement("video",{muted:!0,ref:e.yourVid,autoPlay:!0,playsInline:!0}),r.a.createElement("video",{ref:e.otherVid,autoPlay:!0,playsInline:!0})),r.a.createElement("div",null,t),r.a.createElement("div",null,r.a.createElement(i.a,{variant:"danger"},"Leave Session")))})),B=n(68);var Y=Object(O.b)((function(e){return{patientId:e.patient.patient_id}}),{})((function(e){var t={display:"flex",flexDirection:"row",justifyContent:"space-around"},n=e.sessions.map((function(n){var a=new Date(n.date),c=n.appointments>=n.patient_limit;return r.a.createElement("div",{style:t,key:n.id},r.a.createElement("div",null,a.getDate(),"/",a.getMonth()+1,"/",a.getFullYear()),r.a.createElement("div",null,a.getHours()>=10?a.getHours():"0"+a.getHours(),":",a.getMinutes()>=10?a.getMinutes():"0"+a.getMinutes()),r.a.createElement("div",null,n.appointments," / ",n.patient_limit," bookings"),r.a.createElement(i.a,{onClick:function(){!function(t){fetch("".concat(b.serverUrl,"/appointments/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t._id,patientId:e.patientId})}).then((function(e){return e.json()})).then((function(e){!0===e.success&&!0===e.available?alert("Session booked successfully"):!0===e.success&&!1===e.available?alert("All appointments booked"):alert("Error, recheck your dashbooard and try again")})).catch((function(e){alert("Error confirming session, recheck your dashboard and try again"+e)}))}(n)},variant:c?"danger":"success"},c?"Session Full":"Book Session"))}));return r.a.createElement("div",null,n.map((function(e){return e})))}));function G(e){Object(a.useEffect)((function(){d()}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1],i=[],u=[],s=e.location.state,m=s.doctorName,p=s.specialization,d=function(){fetch("".concat(b.serverUrl,"/doctors/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doctorName:m,specialization:p})}).then((function(e){return e.json()})).then((function(e){!0===e.success?(u=Object(I.a)(e.result),i=f(),o(i)):console.log("error occured")})).catch((function(e){console.log("Error fetching doctors"+e)}))},f=function(){return u.map((function(e){return r.a.createElement(B.a,{key:e._id},r.a.createElement(B.a.Body,null,"Dr. ",e.name,"|",e.specialization,"|",r.a.createElement("hr",null),r.a.createElement(Y,{sessions:e.doctorSessions})))}))};return r.a.createElement(y.a,null,r.a.createElement(D,null),r.a.createElement("h3",null," Searching for Dr. ",m," (",p,") "),r.a.createElement("div",{id:"search-results-doctors"},c))}var z=n(11),V=(n(154),n(101)),J=n.n(V);function W(){return r.a.createElement("div",null,r.a.createElement("img",{src:J.a,alt:"PsyconnectME Logo"}),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/patients",className:"nav-link"}," Patient Login")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/doctor",className:"nav-link"},"Doctor Login")))),r.a.createElement("hr",null))}var q=n(17),X=Object(q.a)();var K={authenticatePatientLogin:function(e,t){return function(){var n=Object(h.a)(E.a.mark((function n(a){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("".concat(b.serverUrl,"/patient/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patientId:e,password:t})}).then((function(e){return e.json()})).then((function(n){!0===n.userIsValid&&a({type:"AUTHENTICATE_PATIENT",payload:{username:e,password:t,authenticated:!0,patientDetails:n.patientDetails}})})).catch((function(e){console.log("Error in Patient Actions"+e)}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},unauthenticatePatientLogin:function(){return{type:"UNAUTHENTICATE_PATIENT"}}},$=Object(O.b)((function(e){return{patient:e.patient}}),K)((function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),m=Object(l.a)(s,2),p=m[0],d=m[1];return!0===e.patient.authenticated&&(X.push("/patients/"),document.location.reload()),r.a.createElement(y.a,null,r.a.createElement(u.a,null,r.a.createElement(u.a.Group,{controlId:"formBasicEmail",onChange:function(e){o(e.target.value)}},r.a.createElement(u.a.Label,null,"Email address"),r.a.createElement(u.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(u.a.Text,{className:"text-muted"})),r.a.createElement(u.a.Group,{controlId:"formBasicPassword"},r.a.createElement(u.a.Label,null,"Password"),r.a.createElement(u.a.Control,{type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}})),r.a.createElement(u.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(u.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(i.a,{variant:"primary",onClick:function(){e.authenticatePatientLogin(c,p)}},"Submit")))}));var Q=Object(O.b)((function(e){return{doctor:e.doctor}}),{logDoctorIn:function(e,t){return function(){var n=Object(h.a)(E.a.mark((function n(a){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("".concat(b.serverUrl,"/doctors/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doctorId:e,password:t})}).then((function(e){return e.json()})).then((function(t){!0===t.userIsValid&&(a({type:"AUTHENTICATE_DOCTOR",payload:{username:e,authenticated:!0,doctorDetails:t.doctorDetails}}),a({type:"SET_USER_DOCTOR"}))})).catch((function(e){console.log(e)}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),m=Object(l.a)(s,2),p=m[0],d=m[1];return!0===e.doctor.authenticated&&(X.push("/doctor/"),document.location.reload()),r.a.createElement(y.a,null,r.a.createElement(u.a,null,r.a.createElement(u.a.Group,{controlId:"formBasicEmail",onChange:function(e){o(e.target.value)}},r.a.createElement(u.a.Label,null,"Doctor Psyconnect ID"),r.a.createElement(u.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(u.a.Text,{className:"text-muted"})),r.a.createElement(u.a.Group,{controlId:"formBasicPassword"},r.a.createElement(u.a.Label,null,"Password"),r.a.createElement(u.a.Control,{type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}})),r.a.createElement(u.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(u.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(i.a,{variant:"primary",onClick:function(){e.logDoctorIn(c,p)}},"Log In")))})),Z=n(20),ee=n(102),te=n(8),ne={userType:"guest"},ae={appointments:[]},re=n(103),ce={patient_id:null,username:"",authenticated:!1,inSession:!1,sessionId:null,patientAppointments:null},oe={username:"",authenticated:!1,inSession:!1,sessionId:null,doctorDetails:{}},le={currentsessionId:null,currentPatientId:null},ie={sessions:[]},ue=Object(Z.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DOCTOR":return Object(te.a)(Object(te.a)({},e),{},{userType:"doctor"});default:return e}},appointments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DOCTOR_APPOINTMENTS_TODAY":return Object(te.a)(Object(te.a)({},e),{},{items:t.payload});default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DOCTOR_SESSIONS":return Object(te.a)(Object(te.a)({},e),{},{sessions:t.payload});default:return e}},patient:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.LOCATION_CHANGE:case"AUTHENTICATE_PATIENT":return Object(te.a)(Object(te.a)({},e),{},{patient_id:t.payload.patientDetails._id,username:t.payload.username,authenticated:t.payload.authenticated,inSession:!1});case"UNAUTHENTICATE_PATIENT":return Object(te.a)(Object(te.a)({},e),{},{username:null,patient_id:"",authenticated:!1,inSession:!1});case"PUT_PATIENT_IN_SESSION":return Object(te.a)(Object(te.a)({},e),{},{username:t.payload.username,authenticated:t.payload.authenticated,inSession:!0,currentAppointment:t.payload.currentAppointment,sessionId:t.payload.currentAppointment.session_id});case"FETCH_PATIENT_APPOINTMENTS":return Object(te.a)(Object(te.a)({},e),{},{patientAppointments:t.payload});default:return e}},doctor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE_DOCTOR":return Object(te.a)(Object(te.a)({},e),{},{username:t.payload.username,authenticated:t.payload.authenticated,inSession:!1,doctorDetails:t.payload.doctorDetails});case"UNAUTHENTICATE_DOCTOR":return{username:"",authenticated:!1,inSession:!1,doctorDetails:{}};case"START_DOCTOR_SESSION":return Object(te.a)(Object(te.a)({},e),{},{currentSessionDetails:t.payload});case"END_DOCTOR_SESSION":return Object(te.a)(Object(te.a)({},e),{},{username:t.payload.username,authenticated:t.payload.authenticated,inSession:!1,doctorDetails:t.payload.doctorDetails});default:return e}},clinic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLINIC_NEXT_PATIENT":return Object(te.a)(Object(te.a)({},e),{},{items:t.payload});default:return e}}}),se=n(67),me=n(104),pe=n.n(me),de={},fe=[ee.a],Ee={key:"root",storage:pe.a},he=Object(se.a)(Ee,ue),be=n(52),ge=Object(O.b)((function(e){return{patient:e.patient}}),null)((function(e){var t=e.component,n=Object(be.a)(e,["component"]);!0!==n.patient.authenticated&&(X.push("/patients/login"),document.location.reload());var r=function(){if(!0===n.patient.authenticated)return a.createElement(t,n)};return a.createElement(a.Fragment,null,a.createElement(z.a,{render:function(e){return a.createElement(a.Fragment,null,r())}}))})),ve=Object(O.b)((function(e){return{auth:e.auth,doctor:e.doctor}}),null)((function(e){var t=e.component,n=Object(be.a)(e,["component"]);!0===n.doctor.authenticated&&"doctor"===n.auth.userType||(X.push("/doctor/login"),document.location.reload());var r=function(){if(!0===n.doctor.authenticated)return a.createElement(t,n)};return a.createElement(a.Fragment,null,a.createElement(z.a,{render:function(e){return a.createElement(a.Fragment,null,r())}}))})),Oe=n(105),je=n(66),ye=n.n(je),Se=Object(O.b)((function(e){return{auth:e.auth}}),{})((function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),o=Object(a.useRef)(),i=Object(a.useRef)(),u=Object(a.useRef)([]),s=e.match.params.roomID;e.auth.userType;var m=Object(a.useRef)(),p=Object(a.useState)([]),d=Object(l.a)(p,2);d[0],d[1];return Object(a.useEffect)((function(){o.current=x.a.connect("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){i.current.srcObject=e,o.current.emit("join room",s),o.current.on("all users",(function(t){var n=[];t.forEach((function(t){var a=function(e,t,n){var a=new ye.a({initiator:!0,trickle:!1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]},stream:n});return a.on("signal",(function(n){o.current.emit("sending signal",{userToSignal:e,callerID:t,signal:n})})),a.on("stream",(function(e){m.current.srcObject=e})),a}(t,o.current.id,e);u.current.push({peerID:t,peer:a}),n.push(a)})),c(n)})),o.current.on("user joined",(function(t){var n=function(e,t,n){var a=new ye.a({initiator:!1,trickle:!1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]},stream:n});return a.on("signal",(function(e){o.current.emit("returning signal",{signal:e,callerID:t})})),a.on("stream",(function(e){m.current.srcObject=e})),a.signal(e),a}(t.signal,t.callerID,e);u.current.push({peerID:t.callerID,peer:n}),c((function(e){return[].concat(Object(I.a)(e),[n])}))})),o.current.on("receiving returned signal",(function(e){u.current.find((function(t){return t.peerID===e.id})).peer.signal(e.signal)}))}))}),[]),"doctor"===e.auth.userType?r.a.createElement(F,{yourVid:i,otherVid:m}):r.a.createElement(L,{yourVid:i,otherVid:m})}));var Te=Object(O.b)((function(e){return{auth:e.auth}}),{})((function(e){var t;return t="doctor"==e.auth.userType?r.a.createElement(F,null):r.a.createElement(L,null),r.a.createElement("div",null,alert("test"),t)}));var De=function(){var e=function(){var e=Object(Z.e)(he,de,Object(Z.d)(Z.a.apply(void 0,fe)));return{store:e,persistor:Object(se.b)(e)}}(),t=e.store,n=e.persistor;return r.a.createElement(O.a,{store:t},r.a.createElement(s.a,null,r.a.createElement(Oe.a,{loading:null,persistor:n},r.a.createElement("div",null,r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/",component:W}),r.a.createElement(z.a,{exact:!0,path:"/patients/login",component:$}),r.a.createElement(ge,{exact:!0,path:"/patients",component:C}),r.a.createElement(ge,{exact:!0,path:"/patients/searchDoctor",component:G}),r.a.createElement(ge,{exact:!0,path:"/patients/clinic/:docId",component:L}),r.a.createElement(z.a,{exact:!0,path:"/doctor/login",component:Q}),r.a.createElement(ve,{exact:!0,path:"/doctor",component:P}),r.a.createElement(ve,{exact:!0,path:"/doctor/clinic",component:F}),r.a.createElement(z.a,{path:"/room/:appointmentId",component:Se}),r.a.createElement(z.a,{exact:!0,path:"/clinic/:appointmentId",component:Te}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.e8b3e8de.chunk.js.map