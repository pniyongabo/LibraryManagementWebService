(this["webpackJsonplibrary-management"]=this["webpackJsonplibrary-management"]||[]).push([[0],{41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},61:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(20),c=n.n(r),i=(n(41),n(23)),o=n(5),l=n.n(o),u=n(13),j=n(6),d=n(7),b=n(9),h=n(8),f=(n(43),n(44),n(2)),O=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"sidebar ",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-2 menu_icon",children:"\u2630"})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-2"}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("a",{href:"/",children:"Home"})})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-2"}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("a",{href:"/books",children:"Books"})})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-2"}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("a",{href:"/authors",children:"Authors"})})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-2"}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("a",{href:"/categories",children:"Categories"})})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-2"}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("a",{href:"/loans",children:"Loans"})})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-2"}),Object(f.jsx)("div",{className:"col-3",children:Object(f.jsx)("a",{href:"/users",children:"Users"})})]})]})}}]),n}(a.Component),m=(n(46),n.p,n.p+"static/media/logo2.87f8d34c.png"),p=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"title",children:Object(f.jsxs)("div",{className:"jumbotron",children:[Object(f.jsx)("img",{className:"d-inline-block img-fluid logo",src:m,alt:"logo",height:"auto",width:"13%"}),Object(f.jsx)("h1",{className:"d-inline-block display-2 title_text",children:"Library Management Web Service"})]})})}}]),n}(a.Component),x=n(24),v=(n(61),n(62),n(63),n(64),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).getCompleteListOfBooks=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books/completelist");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),a.goToBookPage=function(e){window.location.assign("/book/"+e)},a.load_data=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.length),n=t.map((function(e,t){var n={},s="http://covers.openlibrary.org/b/isbn/".concat(e.isbn,"-S.jpg?default=false");n.cover=Object(f.jsx)("img",{src:s}),n.title=e.title,n.authors=e.authors.join(", ");var r=e.hasOwnProperty("publishedDate")?e.publishedDate:{},c=r.hasOwnProperty("$date")?r.$date:"";return n.published=void 0!==r?c.split("T")[0]:"",n.categories=e.categories.join(", "),n.pages=e.pageCount,n.isbn=e.isbn,n.clickEvent=function(){return a.goToBookPage(e.isbn)},n})),s={columns:[{label:"Cover",field:"cover"},{label:"Title",field:"title",sort:"asc"},{label:"Authors",field:"authors",sort:"asc"},{label:"Pub Date",field:"published",sort:"asc"},{label:"Categories",field:"categories"},{label:"Pages",field:"pages",sort:"asc"},{label:"ISBN",field:"isbn",sort:"asc"}],rows:n},e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={isLoaded:!1,books:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getCompleteListOfBooks().then((function(t){return e.load_data(t).then((function(t){return e.setState({books:t,isLoaded:!0})}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.isLoaded?Object(f.jsxs)("div",{className:"align-center",children:[Object(f.jsx)(p,{}),Object(f.jsx)("h1",{children:"List of Books"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:Object(f.jsx)(x.c,{striped:!0,bordered:!0,responsive:!0,data:this.state.books,className:"your-custom-styles"})})}),Object(f.jsx)(O,{})]}):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Loading books data ..."})})}}]),n}(a.Component)),g=(n(65),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(v,{})})}}]),n}(a.Component)),k=(n(66),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).getBookDetails=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books/mappings");case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,200===n.status){e.next=8;break}return e.abrupt("return","");case 8:return e.abrupt("return",a[t]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.load_data=function(){var e="http://covers.openlibrary.org/b/isbn/".concat(a.state.isbn,"-L.jpg?default=false"),t="Book cover of: "+a.state.isbn;return Object(f.jsxs)("div",{class:"container",children:[Object(f.jsx)("div",{class:"container-a",children:Object(f.jsx)("img",{class:"book-cover",src:e,alt:t})}),Object(f.jsx)("div",{class:"container-b",children:Object(f.jsx)("p",{children:a.state.bookDetails})})]})},a.state={isLoaded:!1},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getBookDetails(this.props.match.params.isbn).then((function(t){return e.setState({bookDetails:t,isbn:e.props.match.params.isbn,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.isLoaded?Object(f.jsxs)("div",{children:[Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:"align-center",children:[this.load_data(this.state.data),Object(f.jsx)(O,{})]})]}):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Loading book details data ..."})})}}]),n}(a.Component)),y=n(36),N=(n(67),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).getAllAuthors=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/authors/list",{method:"GET",headers:{"x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),a.getAuthors=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET"});case 2:if(n=e.sent,a=n.json(),200===n.status){e.next=6;break}throw Error(a.message);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.goToAuthorPage=function(e){window.location.assign(e)},a.get_isbn=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e,t){var n={};return n.name=e.authors[0],n.isbn="https://openlibrary.org/isbn/".concat(e.isbn,".json"),n})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.load_data1=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e,t){var n={};return n.name=e.name,n})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.load_data=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e,t){var n={};return n.name=a.state.names[t].name,e?(n.link=e[0].key,n.clickEvent=function(){return a.goToAuthorPage(e[0].key)}):n.link="",n})),s={columns:[{label:"Author Name",field:"name",sort:"asc"},{label:"Link",field:"link",sort:"asc"}],rows:n},e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={authors:{},isLoaded:!1,names:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getAllAuthors().then((function(t){e.get_isbn(t).then((function(t){e.load_data1(t).then((function(t){var n=Object(y.a)(new Set(t));e.setState({names:n})}));var n=[];return t.length>0&&t.map((function(e){n.push(e)})),n})).then((function(e){return Promise.all(e.map((function(e){return fetch(e.isbn).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})))})).then((function(e){var t=[];return e.map((function(e){e&&e.authors?t.push(e.authors):t.push("")})),t})).then((function(t){e.load_data(t).then((function(t){e.setState({authors:t,isLoaded:!0})}))}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.isLoaded?Object(f.jsxs)("div",{className:"align-center",children:[Object(f.jsx)(p,{}),Object(f.jsx)("h1",{children:"Authors Page"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:Object(f.jsx)(x.c,{striped:!0,bordered:!0,responsive:!0,data:this.state.authors})})}),Object(f.jsx)(O,{})]}):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Loading authors data ..."})})}}]),n}(a.Component)),w=n(18),L=(n(68),n.p+"static/media/book_logo_white.af62976d.png"),_=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).getAllCategories=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/categories/mappings");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return console.log(n),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)}))),a.load_data=function(){var e=[];return Object.keys(a.state.categories).forEach((function(t){e.push(t)})),e.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsx)(w.b,{to:{pathname:"/category/"+e,state:{data:a.state.categories[e]}},className:"team_link",children:Object(f.jsxs)("div",{className:"team_choice ",children:[Object(f.jsx)("img",{className:"img-fluid team_logo",src:L,alt:e+" logo",width:130,height:"auto"}),Object(f.jsx)("div",{className:"team_text",children:e})]})})},t)}))},a.state={isLoaded:!1,categories:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getAllCategories().then((function(t){return e.setState({categories:t,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.isLoaded?Object(f.jsxs)("div",{className:"align-center",children:[Object(f.jsx)(p,{}),Object(f.jsx)("h1",{children:"List of Categories"}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:this.load_data()})})}),Object(f.jsx)(O,{})]}):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Loading categories..."})})}}]),n}(a.Component),D=(n(69),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).load_data=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsxs)("h1",{children:["Category: ",a.state.category]})}),Object(f.jsx)("ul",{children:a.state.categoryBooks.map((function(e,t){return Object(f.jsx)("li",{children:e})}))})]})},a.state={isLoaded:!1,categoryBooks:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({categoryBooks:this.props.location.state.data,isLoaded:!0,category:this.props.match.params.category})}},{key:"render",value:function(){return this.state.isLoaded?Object(f.jsxs)("div",{children:[Object(f.jsx)(p,{}),Object(f.jsx)("div",{className:"align-center",children:this.load_data(this.state.data)}),Object(f.jsx)(O,{})]}):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Loading category data ..."})})}}]),n}(a.Component)),C=(n(70),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"title",children:Object(f.jsxs)("div",{className:"jumbotron",children:[Object(f.jsx)("img",{className:"d-inline-block img-fluid logo",src:m,alt:"logo",height:"auto",width:"13%"}),Object(f.jsx)("h1",{className:"d-inline-block display-2 title_text",children:"Loans Page"}),Object(f.jsx)("div",{className:"col-2",children:Object(f.jsx)(O,{})})]})})}}]),n}(a.Component)),S=(n(71),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).getAuthorDetails=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://openlibrary.org/authors/".concat(t,".json"),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,200===n.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.load_data=function(e){var t="No information",n="http://covers.openlibrary.org/a/olid/".concat(e,"-M.jpg"),s="Image of Author "+a.state.authorDetails.name;return a.state.authorDetails.bio&&(t=a.state.authorDetails.bio.value),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:n,alt:s})}),Object(f.jsxs)("div",{className:"author-info",children:[Object(f.jsx)("h1",{children:a.state.authorDetails.name}),Object(f.jsxs)("p",{children:[a.state.authorDetails.birth_date," -"," ",a.state.authorDetails.death_date]}),Object(f.jsx)("p",{className:"bio",children:t})]})]})},a.state={authorDetailsLoaded:!1,authorDetails:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getAuthorDetails(this.props.match.params.id).then((function(t){e.setState({authorDetails:t,authorDetailsLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.authorDetailsLoaded?Object(f.jsxs)("div",{children:[Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:"mx-auto",children:[this.load_data(this.props.match.params.id),Object(f.jsx)(O,{})]})]}):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Loading author details data ..."})})}}]),n}(a.Component)),A=(n(72),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).create_form=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"bg-light border rounded w-50 mx-auto mt-5 p-3",action:"/api/users/submit",method:"post",encType:"text/html",children:[Object(f.jsx)("h2",{className:"mt-2 mb-4",children:"Checkout Form"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name *"}),Object(f.jsx)("input",{type:"name",className:"form-control",id:"name",name:"name",onChange:function(e){return a.setState({name:e.target.value})},required:!0})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email *"}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",required:!0})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"isbn",children:"ISBN *"}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"isbn",name:"isbn",required:!0})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"date",children:"Checkout Date *"}),Object(f.jsx)("input",{type:"date",className:"form-control",id:"date",name:"date",required:!0})]}),Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{type:"checkbox",className:"form-check-input",id:"checkbox",name:"checkbox"}),Object(f.jsx)("label",{className:"form-check-label",htmlFor:"checkbox",id:"newsletter",children:"Si Sign up for the newsletter"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"btn-group btn-block",children:[Object(f.jsx)("input",{type:"submit",className:"btn btn-primary mr-1 rounded-sm",value:"Submit"}),Object(f.jsx)("input",{type:"reset",className:"btn btn-secondary rounded-sm",value:"Reset"})]})]})})},a.state={response:"",name:"",email:"",isbn:"",responseToPost:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"title",children:Object(f.jsxs)("div",{className:"jumbotron",children:[Object(f.jsx)("img",{className:"d-inline-block img-fluid logo",src:m,alt:"logo",height:"auto",width:"13%"}),Object(f.jsx)("h1",{className:"d-inline-block display-2 title_text",children:"Users Page"}),Object(f.jsx)("div",{children:this.create_form()}),Object(f.jsx)("div",{children:Object(f.jsx)(O,{})})]})})}}]),n}(a.Component)),B=(n(73),n(11));var P=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,data:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/books/list").then((function(e){return e.json()})).then((function(t){e.setState({books:t.books,isLoaded:!0})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=this.state;t.books;return t.isLoaded?Object(f.jsx)(w.a,{children:Object(f.jsxs)(B.d,{children:[Object(f.jsx)(B.b,{path:"/books",children:Object(f.jsx)(v,{})}),Object(f.jsx)(B.b,{path:"/book/:isbn",exact:!0,render:function(e){return Object(f.jsx)(k,Object(i.a)({},e))}}),Object(f.jsx)(B.b,{path:"/authors",exact:!0,render:function(e){return Object(f.jsx)(N,{})}}),Object(f.jsx)(B.b,{path:"/authors/:id",exact:!0,render:function(e){return Object(f.jsx)(S,Object(i.a)({},e))}}),Object(f.jsx)(B.b,{path:"/categories",children:Object(f.jsx)(_,{})}),Object(f.jsx)(B.b,{path:"/category/:category",exact:!0,render:function(t){return Object(f.jsx)(D,Object(i.a)(Object(i.a)({},t),{},{all_data:e.state.data}))}}),Object(f.jsx)(B.b,{path:"/loans",children:Object(f.jsx)(C,{})}),Object(f.jsx)(B.b,{path:"/users",children:Object(f.jsx)(A,{})}),Object(f.jsx)(B.b,{path:"/",children:Object(f.jsx)(g,{})}),Object(f.jsx)(B.b,{render:function(){return Object(f.jsx)(B.a,{to:"/"})}})]})}):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Loading..."})})}}]),n}(a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.196fe627.chunk.js.map