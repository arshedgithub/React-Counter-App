(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),o=(n(14),n(7)),i=n(9),u=n(2),l=n(3),b=n(5),d=n(4),j=n(0),h=function(e){var t=e.totalCounters;return Object(j.jsx)("nav",{className:"navbar navbar-light bg-light p-3",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("h3",{children:["Counters ",Object(j.jsx)("span",{className:"badge bg-secondary",children:t})]})})})},v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.counter,n=e.onIncrement,a=e.onSubstitution,c=e.onDelete;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row my-3",children:[Object(j.jsx)("div",{className:"col-1 mx-2",children:Object(j.jsx)("span",{className:this.getBadgeClass(),children:this.formatCount(t.value)})}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("button",{className:"btn btn-secondary mx-1",onClick:function(){return n(t)},children:"+"}),Object(j.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){return a(t)},disabled:0===t.value?"disabled":"",children:"-"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(t.id)},children:"Delete"})]})]})})}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"zero":e}},{key:"getBadgeClass",value:function(){var e="badge bg-";return e+=0===this.props.counter.value?"warning fs-6":"primary fs-5"}}]),n}(a.Component),f=function(e){var t=e.counters,n=e.onIncrement,a=e.onSubstitution,c=e.onReset,s=e.onDelete;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn btn-sm btn-primary m-3",onClick:c,children:"Reset"}),t.map((function(e){return Object(j.jsx)(v,{counter:e,onIncrement:n,onSubstitution:a,onDelete:s},e.id)}))]})},m=(n(16),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={counters:[{id:1,value:0},{id:2,value:1},{id:3,value:0},{id:4,value:2}]},e.handleIncrement=function(t){var n=Object(i.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(o.a)({},t),n[a].value++,e.setState({counters:n}),console.log(e.state.counters)},e.handleSubstitution=function(t){var n=e.state.counters,a=n.indexOf(t);n[a]=Object(o.a)({},t),n[a].value--,e.setState({counters:n})},e.handleReset=function(){e.setState({counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(h,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),Object(j.jsx)(f,{counters:this.state.counters,onIncrement:this.handleIncrement,onSubstitution:this.handleSubstitution,onReset:this.handleReset,onDelete:this.handleDelete})]})}}]),n}(a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(17);r.a.render(Object(j.jsx)(m,{}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.4b32ffa6.chunk.js.map