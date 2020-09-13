(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){e.exports=n.p+"static/media/logo.a8f30753.PNG"},107:function(e,t,n){e.exports=n(182)},112:function(e,t,n){},113:function(e,t,n){},15:function(e,t){t.serverUrl="",t.socketUrl=""},150:function(e,t){},153:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=153},172:function(e,t){},174:function(e,t){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),o=n.n(c),i=(n(112),n(113),n(5)),l=n(10),s=n(6),u=n(13);function p(){var e=Object(a.useState)("Psychiatrist"),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),p=Object(i.a)(o,2),m=p[0],d=p[1];return r.a.createElement("div",{className:"patient-search-doctor"},r.a.createElement("h2",null,"Make an appointment"),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(s.a,null,r.a.createElement(s.a.Group,{controlId:"doctorSearchForm.doctorName"},r.a.createElement(s.a.Label,null,"Doctor Name:"),r.a.createElement(s.a.Control,{type:"text",placeholder:"E.g. Jane Doe",onChange:function(e){d(e.target.value)}})),r.a.createElement(s.a.Group,{controlId:"doctorSearchForm.selectSpecialization"},r.a.createElement(s.a.Label,null,"Doctor's Specialization"),r.a.createElement(s.a.Control,{as:"select",onChange:function(e){c(e.target.value)}},r.a.createElement("option",null,"Psychiatrist"),r.a.createElement("option",null,"Child Psychiatrist"),r.a.createElement("option",null,"Psychologist"),r.a.createElement("option",null,"Child Psychologist"),r.a.createElement("option",null,"Therapist"))),r.a.createElement(l.a,null,r.a.createElement(u.b,{params:{doctor:m,specialization:n},to:{pathname:"/patients/searchDoctor",state:{doctorName:m,specialization:n}}},"Search"))))}var m=n(47);function d(e){var t=new Date(e.appointment.sessionDetails.date);return r.a.createElement("tr",null,r.a.createElement("td",null," Dr. ",e.appointment.doctorDetails.name," "),r.a.createElement("td",null,"  ",e.appointment.doctorDetails.specialization," "),r.a.createElement("td",null," ",t.getDate(),"/",t.getMonth(),"/",t.getFullYear()," "),r.a.createElement("td",null," ",t.getHours(),":",t.getMinutes(),"  "),r.a.createElement("td",{className:"cancel-appointment-td"}," ",e.appointment.completed?"":r.a.createElement(l.a,{variant:"danger"},"Cancel Appointment")," "))}var f=n(9),E=n.n(f),h=n(14),b=n(15);function g(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/patient/appointments/".concat(e)).then((function(e){return e.json()})).then((function(e){n({type:"FETCH_PATIENT_APPOINTMENTS",payload:e})})).catch((function(e){alert("patient appointment error"+e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function O(){return function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UNAUTHENTICATE_PATIENT"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var v=n(7);var j=Object(v.b)((function(e){return{patient:e.patient}}),{getPatientAppointments:g})((function(e){var t=e.patient.patientAppointments,n=[];return console.log(e),t.forEach((function(e){n.push(r.a.createElement(d,{key:e._id,appointment:e}))})),r.a.createElement("div",null,r.a.createElement("h4",null,"Your Current Appointments"),r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Doctor"),r.a.createElement("th",null,"Specialization"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.map((function(e){return e})))))})),y=n(16),S=n(36),D=n(50);var T=Object(v.b)((function(e){return{patient:e.patient}}),{logPatientOut:O})((function(e){return r.a.createElement(S.a,{bg:"light",variant:"light"},r.a.createElement(S.a.Brand,{href:"#home",className:"navbar-logo-psyconnect"}," PsyconnectME - Patient "),r.a.createElement(D.a,{className:"mr-auto"}),r.a.createElement(l.a,{variant:"dark",onClick:function(){e.logPatientOut()}},"Sign Out"))}));var C=Object(v.b)((function(e){return{patient:e.patient}}),{setCurrentSessionActive:function(e,t){return function(){var n=Object(h.a)(E.a.mark((function n(a){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"PUT_PATIENT_IN_SESSION",payload:{username:e,authenticated:!0,currentAppointment:t,inSession:!0}});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logPatientOut:O,getPatientAppointments:g})((function(e){var t,n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],s=c[1],m=Object(a.useState)(),d=Object(i.a)(m,2),f=d[0],E=d[1],h=!1,b=null,g=Object(a.useState)(null),O=Object(i.a)(g,2),v=O[0],S=O[1];Object(a.useEffect)((function(){e.getPatientAppointments(e.patient.patient_id),s(r.a.createElement(j,null));var t=C();E(t),I()}),[]);var D=function(){e.setCurrentSessionActive(e.patient.username,b)},C=function(){var n=e.patient.patientAppointments.slice().sort((function(e,t){return new Date(e.sessionDetails.date)-new Date(t.sessionDetails.date)}));if(!((n=n.filter((function(e){var t=new Date,n=new Date(e.sessionDetails.date);return n>=t||n.getFullYear()==t.getFullYear()&&n.getMonth()==t.getMonth()&&n.getDate()==t.getDate()&&t.getHours()-n.getHours()<=24}))).length>0))return"No upcoming appointments";t=new Date(n[0].sessionDetails.date);var a=new Date,r=a.getDate(),c=a.getMonth(),o=a.getFullYear();if(t.getFullYear()==o&&t.getMonth()==c&&t.getDate()==r){var i=t.getHours()-a.getHours();return h=i<1,b=i>=1?null:n[0]," Your next appointment is in less than ".concat(i>1?i:1," hour(s) ")}var l=Math.floor((Date.parse(t)-Date.parse(new Date))/864e5);return"Your next appointment is in ".concat(l," day(s) ")},I=function(){h&&S(r.a.createElement(u.b,{to:"/patients/clinic/"+b.doctorDetails._id,className:"nav-link"},r.a.createElement(l.a,{variant:"success",onClick:D},"Call Doctor")))};return r.a.createElement(y.a,null,r.a.createElement(T,null),r.a.createElement("br",null),o||"No Appointments",r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h3",null," ",f," "),v,r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(p,null))}));var I=Object(v.b)((function(e){return{doctorDetails:e.doctor.doctorDetails}}),{logDoctorOut:function(){return function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UNAUTHENTICATE_DOCTOR"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return r.a.createElement("div",null,r.a.createElement(S.a,{bg:"light",variant:"light"},r.a.createElement(S.a.Brand,{href:"#home",className:"navbar-logo-psyconnect"}," PsyconnectME - Dr. ",e.doctorDetails.name,"  "),r.a.createElement(D.a,{className:"mr-auto"}),r.a.createElement(l.a,{variant:"dark",onClick:e.logDoctorOut},"Sign Out")))}));function N(e){var t=new Date(e.session.date);return r.a.createElement("tr",null,r.a.createElement("td",null,e.session._id),r.a.createElement("td",null,e.session.date),r.a.createElement("td",null,t.getHours(),":",t.getMinutes()),r.a.createElement("td",null,e.patientsCount))}var w=Object(v.b)((function(e){return{doctorId:e.doctor.doctorDetails._id,appointments:e.appointments.items,sessions:e.session.sessions}}),{fetchDoctorSessions:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(b.serverUrl,"/doctors/sessions/").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:"FETCH_DOCTOR_SESSIONS",payload:e.sessionData})})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){Object(a.useEffect)((function(){e.fetchDoctorSessions(e.doctorId)}),[]);var t=[];return e.sessions&&(t=e.sessions.map((function(e){if(new Date(e.session.date)>=new Date)return r.a.createElement(N,{patientsCount:e.appointmentCount,session:e.session})}))),r.a.createElement(m.a,null,r.a.createElement("thead",null,r.a.createElement("th",null,"Session Id"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Starting Time"),r.a.createElement("th",null,"No. of Patients")),r.a.createElement("tbody",null,t.map((function(e){return e}))))}));var _=n(35);var P=Object(v.b)((function(e){return{doctor:e.doctor,sessions:e.session}}),{})((function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(),p=Object(i.a)(u,2),m=p[0],d=p[1],f=Object(a.useState)(25),E=Object(i.a)(f,2),h=E[0],g=E[1];return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(s.a.Group,{controlId:"sessionBuilder.DateSelect"},r.a.createElement(s.a.Label,null,"Date: "),r.a.createElement(s.a.Control,{onChange:function(e){return o(e.target.value)},type:"date"})),r.a.createElement(s.a.Group,{controlId:"sessionBuilder.ControlSelect2"},r.a.createElement(s.a.Label,null,"Time: "),r.a.createElement(s.a.Control,{onChange:function(e){return d(e.target.value)},type:"time",multiple:!0})),r.a.createElement(s.a.Group,{controlId:"sessionBuilder.ControlTextarea1"},r.a.createElement(s.a.Label,null,"Maximum number of patients:"),r.a.createElement(s.a.Control,{onChange:function(e){return g(e.target.value)},type:"number",placeholder:"25"})),r.a.createElement(l.a,{variant:"primary",onClick:function(){if(void 0!==c&&void 0!==m){e.sessions.sessions.forEach((function(e){var t=new Date(e.session.date),n="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate());c!=n||alert("There is already a session on that day")}));var t=new Date,n=new Date(c);if(t>n&&t.getDate()!=n.getDate()&&t.getMonth()!=n.getMonth()&&t.getFullYear()!=n.getFullYear())alert("The date has already passed");else{var a=Object(_.a)(m.match(/(\d{2}):(\d{2})/)),r=new Date(n.getFullYear(),n.getMonth(),n.getDate(),a[1],a[2]).toISOString();fetch("".concat(b.serverUrl,"/doctors/sessions/").concat(e.doctor.doctorDetails._id),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({dateTime:r,max_patients:h})}).then((function(e){return e.json()})).then((function(e){!0===e.success?alert("session added"):alert("Error creating session, check date and time")})).catch((function(e){alert("Error in creating session")}))}}else alert("Invalid Date or Time")}},"Create")))}));var A=Object(v.b)((function(e){return{doctor:e.doctor,sessions:e.session}}),{clinicNextPatient:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(b.serverUrl,"/doctors/appointments/next/").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:"CLINIC_NEXT_PATIENT",payload:e})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setDoctorInSession:function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"START_DOCTOR_SESSION",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserDoctor:function(e){return function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_USER_DOCTOR"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=!1,n=null,c=null,o=Object(a.useState)("No sessions today"),s=Object(i.a)(o,2),p=s[0],m=s[1],d=Object(a.useState)(null),f=Object(i.a)(d,2),E=f[0],h=f[1];Object(a.useEffect)((function(){b(),g()}),[]);var b=function(){e.sessions.sessions.forEach((function(a){var r=(new Date).getDate(),o=new Date(a.session.date).getDate(),i=(new Date).getMonth(),l=new Date(a.session.date).getMonth(),s=(new Date).getTime(),u=new Date(a.session.date).getTime();o===r&&i==l&&(n=" ".concat(new Date(a.session.date).getHours(),":").concat(new Date(a.session.date).getMinutes()," "),t=!0,u<=s&&(c=a.session,e.setDoctorInSession(a.session)))}))},g=function(){t?(m("Session today at ".concat(n)),c&&h(r.a.createElement(l.a,{variant:"success",onClick:O}," Enter Session"))):m("No sessions today")},O=function(){e.clinicNextPatient(c._id)};return r.a.createElement(y.a,null,r.a.createElement(I,null),r.a.createElement("h3",null," Upcoming Sessions "),r.a.createElement(w,null),r.a.createElement("hr",null),r.a.createElement("h2",null," Sessions "),r.a.createElement("h3",null," ",p," "),r.a.createElement("hr",null),r.a.createElement(u.b,{to:"/doctor/clinic"},E),r.a.createElement(u.b,{to:"clinic/213"},r.a.createElement(l.a,{role:"doctor"},"ENTER CLINIC")),r.a.createElement("hr",null),r.a.createElement(l.a,null," Create a new Session "),r.a.createElement(P,null))})),k=n(33),x=n.n(k),U=n(34),M=n.n(U);function R(e){return r.a.createElement("video",{playsInline:!0,muted:!0,ref:e.stream,autoPlay:!0,style:{border:"1px solid blue",width:"50%",height:"50%"}})}var H=Object(v.b)((function(e){return{doctor:e.doctor,sessions:e.session,clinic:e.clinic}}),{})((function(e){var t,n,c=Object(a.useState)({}),o=Object(i.a)(c,2),l=(o[0],o[1],Object(a.useState)()),s=Object(i.a)(l,2),u=s[0],p=s[1],m=Object(a.useState)(!1),d=Object(i.a)(m,2),f=d[0],E=(d[1],Object(a.useState)("")),h=Object(i.a)(E,2),b=(h[0],h[1],Object(a.useState)()),g=Object(i.a)(b,2),O=(g[0],g[1],Object(a.useState)(!1)),v=Object(i.a)(O,2),j=v[0],S=(v[1],Object(a.useRef)()),D=Object(a.useRef)(),T=e.clinic.items.appointment[0].session_id,C=Object(a.useState)(0),I=Object(i.a)(C,2),N=I[0],w=I[1],_=new M.a(T,{host:"/",port:"3001",config:{iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"}]}});function P(e,t){w(e.patient_number);try{console.log(_);var n=_.call(e._id,u);console.log(typeof n)}catch(a){alert(a)}new M.a(e._id,{host:"/",port:"3001"}).on("call",(function(e){alert(1)}))}return console.log(_),Object(a.useEffect)((function(){D.current=x()("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){p(e),S.current&&(S.current.srcObject=e)})),D.current.on("firstpatient",(function(e){P(e)})),D.current.on("nextPatient",(function(e){P(e.next_appointment,e.peer)})),D.current.on("patientToConnect",(function(e){alert("fn -- patient to connect"),P(e.appointment,e.peer)}))}),[]),u&&(n=r.a.createElement(R,{stream:S})),j&&(t=r.a.createElement(R,{stream:t})),f&&r.a.createElement("div",null),r.a.createElement(y.a,null,r.a.createElement("h1",null," Dr.",e.doctor.name," Clinic "),r.a.createElement("h5",null," Current session id: ",T," "),r.a.createElement("h4",null,"Patient number : ",N),r.a.createElement("div",null,n,t),r.a.createElement("div",null,r.a.createElement("h5",null,"Connect to Next Patient"),r.a.createElement("button",{onClick:function(){D.current.emit("doctorEnterSession",{appointments:e.clinic.items.appointment}),D.current.emit("callnextpatient",T)}},"CONNECT to patient ",N)))}));function F(e){return r.a.createElement("video",{playsInline:!0,muted:!0,ref:e.stream,autoPlay:!0,style:{border:"1px solid blue",width:"50%",height:"50%"}})}var L=Object(v.b)((function(e){return{patient:e.patient}}),{})((function(e){var t,n,c,o=Object(a.useState)(""),s=Object(i.a)(o,2),u=(s[0],s[1],Object(a.useState)({})),p=Object(i.a)(u,2),m=(p[0],p[1],Object(a.useState)()),d=Object(i.a)(m,2),f=d[0],E=d[1],h=Object(a.useState)(!1),b=Object(i.a)(h,2),g=b[0],O=(b[1],Object(a.useState)("")),v=Object(i.a)(O,2),j=v[0],S=(v[1],Object(a.useState)()),D=Object(i.a)(S,2),T=(D[0],D[1],Object(a.useState)(!1)),C=Object(i.a)(T,2),I=C[0],N=(C[1],Object(a.useRef)()),w=Object(a.useRef)(),_=Object(a.useRef)(),P=e.patient.currentAppointment.session_id,A=new M.a(e.patient.currentAppointment._id,{host:"/",port:"3001"});return Object(a.useRef)(),Object(a.useRef)(),A.on("open",(function(t){alert("dev -- opening patient peer"),_.current.emit("patientEnterClinic",{appointment:e.patient.currentAppointment,peer:null})})),Object(a.useEffect)((function(){_.current=x()("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){E(e),N.current&&(N.current.srcObject=e)})),_.current.on("requestPatientConnect",(function(t){t.appointment_id==e.patient.patientAppointments[0]._id&&_.current.emit("patientEnterClinic",{session_id:P,appointment_id:t.appointment_id})})),_.current.on("requestPeer",(function(t){alert("peer sent"),t.appointment._id==e.patient.currentAppointment._id&&_.current.emit("respondWithPeer",{peer:null,session_id:e.patient.currentAppointment.session_id})})),_.current.on("doctorIsIn",(function(e){}))}),[]),A.on("call",(function(e){e.answer(f),alert("The doctor is calling you")})),f&&(t=r.a.createElement(F,{stream:N})),I&&(n=r.a.createElement(F,{stream:w})),g&&(c=r.a.createElement("div",null,r.a.createElement("h1",null,j," is calling you"))),r.a.createElement(y.a,null,r.a.createElement("h1",null,"Clinic session - Session Id : ",P),r.a.createElement("h4",null,"Patient number : ",e.patient.currentAppointment.patient_number),r.a.createElement("h4",null,"appointment id : ",e.patient.currentAppointment._id),r.a.createElement("div",null,t,n),r.a.createElement("div",null,c),r.a.createElement("div",null,r.a.createElement(l.a,{variant:"danger"},"Leave Session")))})),B=n(68);var Y=Object(v.b)((function(e){return{patientId:e.patient.patient_id}}),{})((function(e){var t={display:"flex",flexDirection:"row",justifyContent:"space-around"},n=e.sessions.map((function(n){var a=new Date(n.date),c=n.appointments>=n.patient_limit;return r.a.createElement("div",{style:t,key:n.id},r.a.createElement("div",null,a.getDate(),"/",a.getMonth()+1,"/",a.getFullYear()),r.a.createElement("div",null,a.getHours()>=10?a.getHours():"0"+a.getHours(),":",a.getMinutes()>=10?a.getMinutes():"0"+a.getMinutes()),r.a.createElement("div",null,n.appointments," / ",n.patient_limit," bookings"),r.a.createElement(l.a,{onClick:function(){!function(t){fetch("".concat(b.serverUrl,"/appointments/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t._id,patientId:e.patientId})}).then((function(e){return e.json()})).then((function(e){!0===e.success&&!0===e.available?alert("Session booked successfully"):!0===e.success&&!1===e.available?alert("All appointments booked"):alert("Error, recheck your dashbooard and try again")})).catch((function(e){alert("Error confirming session, recheck your dashboard and try again"+e)}))}(n)},variant:c?"danger":"success"},c?"Session Full":"Book Session"))}));return r.a.createElement("div",null,n.map((function(e){return e})))}));function G(e){Object(a.useEffect)((function(){d()}),[]);var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],o=n[1],l=[],s=[],u=e.location.state,p=u.doctorName,m=u.specialization,d=function(){fetch("".concat(b.serverUrl,"/doctors/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doctorName:p,specialization:m})}).then((function(e){return e.json()})).then((function(e){!0===e.success?(s=Object(_.a)(e.result),l=f(),o(l)):console.log("error occured")})).catch((function(e){console.log("Error fetching doctors"+e)}))},f=function(){return s.map((function(e){return r.a.createElement(B.a,{key:e._id},r.a.createElement(B.a.Body,null,"Dr. ",e.name,"|",e.specialization,"|",r.a.createElement("hr",null),r.a.createElement(Y,{sessions:e.doctorSessions})))}))};return r.a.createElement(y.a,null,r.a.createElement(T,null),r.a.createElement("h3",null," Searching for Dr. ",p," (",m,") "),r.a.createElement("div",{id:"search-results-doctors"},c))}var z=n(11),J=(n(154),n(101)),W=n.n(J);function q(){return r.a.createElement("div",null,r.a.createElement("img",{src:W.a,alt:"PsyconnectME Logo"}),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/patients",className:"nav-link"}," Patient Login")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/doctor",className:"nav-link"},"Doctor Login")))),r.a.createElement("hr",null))}var V=n(17),X=Object(V.a)();var $={authenticatePatientLogin:function(e,t){return function(){var n=Object(h.a)(E.a.mark((function n(a){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("".concat(b.serverUrl,"/patient/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patientId:e,password:t})}).then((function(e){return e.json()})).then((function(n){!0===n.userIsValid&&a({type:"AUTHENTICATE_PATIENT",payload:{username:e,password:t,authenticated:!0,patientDetails:n.patientDetails}})})).catch((function(e){console.log("Error in Patient Actions"+e)}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},unauthenticatePatientLogin:function(){return{type:"UNAUTHENTICATE_PATIENT"}}},K=Object(v.b)((function(e){return{patient:e.patient}}),$)((function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),p=Object(i.a)(u,2),m=p[0],d=p[1];return!0===e.patient.authenticated&&(X.push("/patients/"),document.location.reload()),r.a.createElement(y.a,null,r.a.createElement(s.a,null,r.a.createElement(s.a.Group,{controlId:"formBasicEmail",onChange:function(e){o(e.target.value)}},r.a.createElement(s.a.Label,null,"Email address"),r.a.createElement(s.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(s.a.Text,{className:"text-muted"})),r.a.createElement(s.a.Group,{controlId:"formBasicPassword"},r.a.createElement(s.a.Label,null,"Password"),r.a.createElement(s.a.Control,{type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}})),r.a.createElement(s.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(s.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(l.a,{variant:"primary",onClick:function(){e.authenticatePatientLogin(c,m)}},"Submit")))}));var Q=Object(v.b)((function(e){return{doctor:e.doctor}}),{logDoctorIn:function(e,t){return function(){var n=Object(h.a)(E.a.mark((function n(a){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("".concat(b.serverUrl,"/doctors/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doctorId:e,password:t})}).then((function(e){return e.json()})).then((function(t){!0===t.userIsValid&&(a({type:"AUTHENTICATE_DOCTOR",payload:{username:e,authenticated:!0,doctorDetails:t.doctorDetails}}),a({type:"SET_USER_DOCTOR"}))})).catch((function(e){console.log(e)}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),p=Object(i.a)(u,2),m=p[0],d=p[1];return!0===e.doctor.authenticated&&(X.push("/doctor/"),document.location.reload()),r.a.createElement(y.a,null,r.a.createElement(s.a,null,r.a.createElement(s.a.Group,{controlId:"formBasicEmail",onChange:function(e){o(e.target.value)}},r.a.createElement(s.a.Label,null,"Doctor Psyconnect ID"),r.a.createElement(s.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(s.a.Text,{className:"text-muted"})),r.a.createElement(s.a.Group,{controlId:"formBasicPassword"},r.a.createElement(s.a.Label,null,"Password"),r.a.createElement(s.a.Control,{type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}})),r.a.createElement(s.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(s.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(l.a,{variant:"primary",onClick:function(){e.logDoctorIn(c,m)}},"Log In")))})),Z=n(20),ee=n(102),te=n(8),ne={userType:"guest"},ae={appointments:[]},re=n(103),ce={patient_id:null,username:"",authenticated:!1,inSession:!1,sessionId:null,patientAppointments:null},oe={username:"",authenticated:!1,inSession:!1,sessionId:null,doctorDetails:{}},ie={currentsessionId:null,currentPatientId:null},le={sessions:[]},se=Object(Z.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DOCTOR":return Object(te.a)(Object(te.a)({},e),{},{userType:"doctor"});default:return e}},appointments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DOCTOR_APPOINTMENTS_TODAY":return Object(te.a)(Object(te.a)({},e),{},{items:t.payload});default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DOCTOR_SESSIONS":return Object(te.a)(Object(te.a)({},e),{},{sessions:t.payload});default:return e}},patient:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.LOCATION_CHANGE:case"AUTHENTICATE_PATIENT":return Object(te.a)(Object(te.a)({},e),{},{patient_id:t.payload.patientDetails._id,username:t.payload.username,authenticated:t.payload.authenticated,inSession:!1});case"UNAUTHENTICATE_PATIENT":return Object(te.a)(Object(te.a)({},e),{},{username:null,patient_id:"",authenticated:!1,inSession:!1});case"PUT_PATIENT_IN_SESSION":return Object(te.a)(Object(te.a)({},e),{},{username:t.payload.username,authenticated:t.payload.authenticated,inSession:!0,currentAppointment:t.payload.currentAppointment,sessionId:t.payload.currentAppointment.session_id});case"FETCH_PATIENT_APPOINTMENTS":return Object(te.a)(Object(te.a)({},e),{},{patientAppointments:t.payload});default:return e}},doctor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE_DOCTOR":return Object(te.a)(Object(te.a)({},e),{},{username:t.payload.username,authenticated:t.payload.authenticated,inSession:!1,doctorDetails:t.payload.doctorDetails});case"UNAUTHENTICATE_DOCTOR":return{username:"",authenticated:!1,inSession:!1,doctorDetails:{}};case"START_DOCTOR_SESSION":return Object(te.a)(Object(te.a)({},e),{},{currentSessionDetails:t.payload});case"END_DOCTOR_SESSION":return Object(te.a)(Object(te.a)({},e),{},{username:t.payload.username,authenticated:t.payload.authenticated,inSession:!1,doctorDetails:t.payload.doctorDetails});default:return e}},clinic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLINIC_NEXT_PATIENT":return Object(te.a)(Object(te.a)({},e),{},{items:t.payload});default:return e}}}),ue=n(67),pe=n(104),me=n.n(pe),de={},fe=[ee.a],Ee={key:"root",storage:me.a},he=Object(ue.a)(Ee,se),be=n(52),ge=Object(v.b)((function(e){return{patient:e.patient}}),null)((function(e){var t=e.component,n=Object(be.a)(e,["component"]);!0!==n.patient.authenticated&&(X.push("/patients/login"),document.location.reload());var r=function(){if(!0===n.patient.authenticated)return a.createElement(t,n)};return a.createElement(a.Fragment,null,a.createElement(z.a,{render:function(e){return a.createElement(a.Fragment,null,r())}}))})),Oe=Object(v.b)((function(e){return{auth:e.auth,doctor:e.doctor}}),null)((function(e){var t=e.component,n=Object(be.a)(e,["component"]);!0===n.doctor.authenticated&&"doctor"===n.auth.userType||(X.push("/doctor/login"),document.location.reload());var r=function(){if(!0===n.doctor.authenticated)return a.createElement(t,n)};return a.createElement(a.Fragment,null,a.createElement(z.a,{render:function(e){return a.createElement(a.Fragment,null,r())}}))})),ve=n(105),je=n(66),ye=n.n(je),Se=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=(n[0],n[1]),o=Object(a.useRef)(),l=Object(a.useRef)(),s=Object(a.useRef)([]),u=e.match.params.roomID,p=Object(a.useRef)(),m=Object(a.useState)([]),d=Object(i.a)(m,2);d[0],d[1];return Object(a.useEffect)((function(){o.current=x.a.connect("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){l.current.srcObject=e,o.current.emit("join room",u),o.current.on("all users",(function(t){var n=[];t.forEach((function(t){var a=function(e,t,n){var a=new ye.a({initiator:!0,trickle:!1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]},stream:n});return a.on("signal",(function(n){o.current.emit("sending signal",{userToSignal:e,callerID:t,signal:n})})),a}(t,o.current.id,e);s.current.push({peerID:t,peer:a}),n.push(a)})),c(n)})),o.current.on("user joined",(function(t){var n=function(e,t,n){var a=new ye.a({initiator:!1,trickle:!1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]},stream:n});return a.on("signal",(function(e){o.current.emit("returning signal",{signal:e,callerID:t})})),a.on("stream",(function(e){p.current.srcObject=e})),a.signal(e),a}(t.signal,t.callerID,e);s.current.push({peerID:t.callerID,peer:n}),c((function(e){return[].concat(Object(_.a)(e),[n])}))})),o.current.on("receiving returned signal",(function(e){s.current.find((function(t){return t.peerID===e.id})).peer.signal(e.signal)}))}))}),[]),r.a.createElement(y.a,null,r.a.createElement("video",{muted:!0,ref:l,autoPlay:!0,playsInline:!0}),r.a.createElement("video",{ref:p,autoPlay:!0,playsInline:!0}))};var De=Object(v.b)((function(e){return{auth:e.auth}}),{})((function(e){var t;return t="doctor"==e.auth.userType?r.a.createElement(H,null):r.a.createElement(L,null),r.a.createElement("div",null,alert("test"),t)}));var Te=function(){var e=function(){var e=Object(Z.e)(he,de,Object(Z.d)(Z.a.apply(void 0,fe)));return{store:e,persistor:Object(ue.b)(e)}}(),t=e.store,n=e.persistor;return r.a.createElement(v.a,{store:t},r.a.createElement(u.a,null,r.a.createElement(ve.a,{loading:null,persistor:n},r.a.createElement("div",null,r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/",component:q}),r.a.createElement(z.a,{exact:!0,path:"/patients/login",component:K}),r.a.createElement(ge,{exact:!0,path:"/patients",component:C}),r.a.createElement(ge,{exact:!0,path:"/patients/searchDoctor",component:G}),r.a.createElement(ge,{exact:!0,path:"/patients/clinic/:docId",component:L}),r.a.createElement(z.a,{exact:!0,path:"/doctor/login",component:Q}),r.a.createElement(Oe,{exact:!0,path:"/doctor",component:A}),r.a.createElement(Oe,{exact:!0,path:"/doctor/clinic",component:H}),r.a.createElement(z.a,{path:"/room/:appointmentId",component:Se}),r.a.createElement(z.a,{exact:!0,path:"/clinic/:appointmentId",component:De}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.d4eab352.chunk.js.map