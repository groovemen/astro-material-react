import{R as r}from"./index.c91c767d.js";import{r as s,l as f,e as h,m as x,n as p,o as g,p as b,q as j,s as m,k as N,t as v}from"./index.0b9bca48.js";import{j as e}from"./jsx-runtime.50fb4780.js";const u=[{label:"My Profile",icon:x},{label:"Edit Profile",icon:p},{label:"Inbox",icon:g},{label:"Help",icon:b},{label:"Sign Out",icon:j}];function I(){const[l,a]=r.useState(!1),n=()=>a(!1);return e.jsxs(s.Menu,{open:l,handler:a,placement:"bottom-end",children:[e.jsx(s.MenuHandler,{children:e.jsxs(s.Button,{variant:"text",color:"blue-gray",className:"flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto",children:[e.jsx(s.Avatar,{variant:"circular",size:"sm",alt:"candice wu",className:"border border-blue-500 p-0.5",src:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}),e.jsx(h,{strokeWidth:2.5,className:`h-3 w-3 transition-transform ${l?"rotate-180":""}`})]})}),e.jsx(s.MenuList,{className:"p-1",children:u.map(({label:t,icon:o},i)=>{const c=i===u.length-1;return e.jsxs(s.MenuItem,{onClick:n,className:`flex items-center gap-2 rounded ${c?"hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10":""}`,children:[r.createElement(o,{className:`h-4 w-4 ${c?"text-red-500":""}`,strokeWidth:2}),e.jsx(s.Typography,{as:"span",variant:"small",className:"font-normal",color:c?"red":"inherit",children:t})]},t)})})]})}const w=[{title:"404",href:"/404"},{title:"500",href:"/500"},{title:"About Us",href:"/about"},{title:"Landing Page",href:"/landing"},{title:"Billing Page",href:"/billing"},{title:"Blog Page",href:"/blog"},{title:"Our Team",href:"/teams"},{title:"Blog Post",href:"/blog-post"},{title:"Coming Soon",href:"/coming-soon"},{title:"Dashboard",href:"/dashboard"},{title:"Login",href:"/login"},{title:"Reset",href:"/reset"},{title:"Sign Up",href:"/signup"},{title:"Terms",href:"/terms"}];function M(){const[l,a]=r.useState(!1),n={onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1)},t=w.map(({title:o,href:i})=>e.jsx("a",{href:i,children:e.jsx(s.MenuItem,{children:e.jsx(s.Typography,{variant:"paragraph",color:"blue-gray",className:"mb-1 font-normal",children:o})})},o));return e.jsxs(r.Fragment,{children:[e.jsxs(s.Menu,{open:l,handler:a,children:[e.jsx(s.MenuHandler,{children:e.jsx(s.Typography,{as:"a",href:"#",variant:"small",className:"font-normal outline-none focus:outline-none",children:e.jsxs(s.MenuItem,{...n,className:"hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full",children:[e.jsx(m,{className:"h-[18px] w-[18px]"})," Pages"," ",e.jsx(h,{strokeWidth:2,className:`h-3 w-3 transition-transform ${l?"rotate-180":""}`})]})})}),e.jsx(s.MenuList,{...n,className:"hidden grid-cols-7 gap-3 overflow-visible lg:grid",children:e.jsx("ul",{className:"col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none",children:t})})]}),e.jsxs(s.MenuItem,{className:"flex items-center gap-2 text-blue-gray-900 lg:hidden",children:[e.jsx(m,{className:"h-[18px] w-[18px]"})," Pages"," "]}),e.jsx("ul",{className:"ml-6 flex w-full flex-col gap-1 lg:hidden",children:t})]})}const y=[{label:"Account",icon:x},{label:"Blocks",icon:N},{label:"Docs",icon:v}];function d(){return e.jsxs("ul",{className:"mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center",children:[e.jsx(M,{}),y.map(({label:l,icon:a},n)=>e.jsx(s.Typography,{as:"a",href:"#",variant:"small",color:"blue-gray",className:"font-normal",children:e.jsxs(s.MenuItem,{className:"flex items-center gap-2 lg:rounded-full",children:[r.createElement(a,{className:"h-[18px] w-[18px]"})," ",l]})},l))]})}function B(){const[l,a]=r.useState(!1),n=()=>a(t=>!t);return r.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&a(!1))},[]),e.jsxs(s.Navbar,{className:"sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 lg:rounded-full lg:pl-6 mt-4",children:[e.jsxs("div",{className:"relative mx-auto flex items-center text-blue-gray-900",children:[e.jsx(s.Typography,{as:"a",href:"#",className:"mr-4 ml-2 cursor-pointer py-1.5 font-medium",children:"Astro Ecommerce"}),e.jsx("div",{className:"absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block",children:e.jsx(d,{})}),e.jsx(s.IconButton,{size:"sm",color:"blue-gray",variant:"text",onClick:n,className:"ml-auto mr-2 lg:hidden",children:e.jsx(f,{className:"h-6 w-6"})}),e.jsx(I,{})]}),e.jsx(s.Collapse,{open:l,className:"overflow-scroll",children:e.jsx(d,{})})]})}export{B as C};
