(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(24);var a=n(0),r=n.n(a),o=n(21),l=n.n(o),c=n(15),s=n(3),u=n(4),i=n(6),p=n(5),h=n(7),m=n(1);var d=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Petful"))};var f=function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.age),r.a.createElement("p",null,e.breed),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.gender),r.a.createElement("p",null,e.story),r.a.createElement("img",{src:e.imageURL,alt:e.name}))};var E=function(e){var t=e.cats.map((function(e,t){return r.a.createElement(f,Object.assign({key:t},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Cats Adoption List"),t)};var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.age),r.a.createElement("p",null,e.breed),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.gender),r.a.createElement("p",null,e.story),r.a.createElement("img",{src:e.imageURL,alt:e.name}))};var b=function(e){var t=e.dogs.map((function(e,t){return r.a.createElement(g,Object.assign({key:t},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Dogs Adoption List"),t)},j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={cats:[],dogs:[],error:null},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("http://localhost:8000/pets").then((function(e){return e.json()})).then((function(t){var n=t.cats,a=t.dogs;e.setState({cats:n,dogs:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Adoption List Page"),r.a.createElement(E,{cats:this.state.cats}),r.a.createElement(b,{dogs:this.state.dogs}))}}]),t}(a.Component),O=n(12),v=n(18),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).displayAdoptButton=function(){if(n.props.fosterParents[0]===window.localStorage.getItem("foster_parent"))return r.a.createElement("button",{onClick:function(e){return n.props.handleAdopt(e,"cats")}},"Adopt Me")},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Cat Adoption Queue"),r.a.createElement("h3",null,this.props.name),r.a.createElement("p",null,this.props.name),r.a.createElement("p",null,this.props.age),r.a.createElement("p",null,this.props.breed),r.a.createElement("p",null,this.props.description),r.a.createElement("p",null,this.props.gender),r.a.createElement("p",null,this.props.story),r.a.createElement("img",{src:this.props.imageURL,alt:this.props.name}),this.displayAdoptButton())}}]),t}(a.Component),P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).displayAdoptButton=function(){if(n.props.fosterParents[0]===window.localStorage.getItem("foster_parent"))return r.a.createElement("button",{onClick:function(e){return n.props.handleAdopt(e,"dogs")}},"Adopt Me")},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Dog Adoption Queue"),r.a.createElement("h3",null,this.props.name),r.a.createElement("p",null,this.props.name),r.a.createElement("p",null,this.props.age),r.a.createElement("p",null,this.props.breed),r.a.createElement("p",null,this.props.description),r.a.createElement("p",null,this.props.gender),r.a.createElement("p",null,this.props.story),r.a.createElement("img",{src:this.props.imageURL,alt:this.props.name}),this.displayAdoptButton())}}]),t}(a.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Foster Parent Enqueue"),r.a.createElement("form",{onSubmit:function(t){return e.props.handleFosterParentEnqueue(t)}},r.a.createElement("label",{htmlFor:"newFosterParent"},"New Foster Parent Name: "),r.a.createElement("input",{id:"newFosterParent",type:"text"}),r.a.createElement("button",null,"Enqueue!")))}}]),t}(a.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.fosterParents,t=void 0===e?[]:e,n=t.length?t.map((function(e,t){return r.a.createElement("li",{key:t},e)})):"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Foster Parents List"),r.a.createElement("ul",null,n))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={adopted:null,demo:null,cats:[],dogs:[],fosterParents:[],error:null},n.handleFosterParentEnqueue=function(e){e.preventDefault();var t=e.target.newFosterParent.value;window.localStorage.setItem("foster_parent",t),fetch("http://localhost:8000/people",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({newFosterParent:t})}).then((function(e){return e.json()})).then((function(e){var a=[].concat(Object(v.a)(n.state.fosterParents),[t]);n.setState({fosterParents:a})})).catch((function(e){return n.setState(Object(O.a)({},e))}))},n.handleFosterParentEnqueueDemo=function(e,t){var a=t;fetch("http://localhost:8000/people",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({newFosterParent:a})}).then((function(e){return e.json()})).then((function(e){var t=[].concat(Object(v.a)(n.state.fosterParents),[a]);n.setState({demo:null,fosterParents:t})})).then((function(){5===n.state.fosterParents.length&&(clearInterval(e),console.log("Cleared second interval!"))})).catch((function(e){return n.setState(Object(O.a)({},e))}))},n.handleAdopt=function(e,t){e.preventDefault(),fetch("http://localhost:8000/pets",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:t})}).then((function(e){return e.json()})).then((function(e){window.localStorage.removeItem("foster_parent");var t=n.state.cats,a=n.state.dogs,r=n.state.fosterParents;t.shift(),a.shift(),r.shift(),n.setState({adopted:e.adopted,cats:t,dogs:a,fosterParents:r})})).catch((function(e){return n.setState(Object(O.a)({},e))}))},n.handleAdoptDemo=function(e){fetch("http://localhost:8000/pets",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"all"})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.state.cats,a=n.state.dogs,r=n.state.fosterParents;t.shift(),a.shift(),r.shift(),n.setState({demo:"".concat(e.fosterParent," just adopted ").concat(e.adopted.cats.name," & ").concat(e.adopted.dogs.name,"!"),cats:t,dogs:a,fosterParents:r})})).then((function(){if(n.state.fosterParents[0]===window.localStorage.getItem("foster_parent")||!n.state.fosterParents.length){clearInterval(e),console.log("Starting second interval!");var t=["Wes","Minh","Joshy","Muhajir","Chatchi"],a=0,r=setInterval((function(){n.handleFosterParentEnqueueDemo(r,t[a]),a++}),5e3)}})).catch((function(e){return n.setState(Object(O.a)({},e))}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,a=this;fetch("http://localhost:8000/pets").then((function(e){return e.json()})).then((function(n){e=n.cats,t=n.dogs})).then(fetch("http://localhost:8000/people").then((function(e){return e.json()})).then((function(r){n=r,a.setState({demo:"Buckle up! Demo starts in 15 secs. Put your name in and let the magic unfold!",cats:e,dogs:t,fosterParents:n})})).then((function(){console.log("Demo starts in 15 secs"),setTimeout((function(){var e=setInterval((function(){return a.handleAdoptDemo(e)}),5e3)}),15e3)})).catch((function(e){return a.setState(Object(O.a)({},e))}))).catch((function(e){return a.setState(Object(O.a)({},e))}))}},{key:"render",value:function(){var e=this.state,t=e.adopted,n=void 0===t?null:t,a=e.demo,o=void 0===a?null:a,l=e.cats,c=void 0===l?[]:l,s=e.dogs,u=void 0===s?[]:s,i=e.fosterParents,p=void 0===i?[]:i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Adoption Page"),n?r.a.createElement("p",null,"Congratulations! You have just adopted ",n.name,", the ",n.description):"",o?r.a.createElement("p",null,o):"",r.a.createElement(y,Object.assign({},c[0],{fosterParents:p,handleAdopt:this.handleAdopt})),r.a.createElement(P,Object.assign({},u[0],{fosterParents:p,handleAdopt:this.handleAdopt})),r.a.createElement(F,{handleFosterParentEnqueue:this.handleFosterParentEnqueue}),r.a.createElement(A,{fosterParents:p}))}}]),t}(a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Landing Page: Welcome"),r.a.createElement("h3",null,"Adoption Process"),r.a.createElement("p",null,"Text"),r.a.createElement("p",null,"Photo"),r.a.createElement("button",null,"Start Button"))}}]),t}(a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/adoptionlistpage",component:j}),r.a.createElement(m.a,{path:"/adoptionpage",render:function(e){return r.a.createElement(S,e)}}),r.a.createElement(m.a,{path:"/",component:w}))))}}]),t}(a.Component);l.a.render(r.a.createElement(c.a,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fbbe8893.chunk.js.map