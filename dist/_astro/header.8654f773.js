import{R as n}from"./index.c91c767d.js";import{r,G as c}from"./index.0b9bca48.js";import{T as i}from"./theme-provider.a9a2e218.js";import{E as m}from"./defaultNavbar.3fa4f2a4.js";import{j as e}from"./jsx-runtime.50fb4780.js";import"./index.3d85fc00.js";function d({price:a,desc:s,options:l}){return e.jsx(i,{children:e.jsx(r.Card,{className:"border border-blue-gray-50",children:e.jsxs(r.CardBody,{className:"p-8 text-center",children:[e.jsxs("div",{className:"mb-8 inline-flex items-center rounded-lg bg-dark/10 py-1 pl-1 pr-3",children:[e.jsx(r.Typography,{variant:"small",className:"mr-3 rounded-md bg-white py-px px-3 font-medium text-dark-500",children:"Basic Plan"}),e.jsx(r.Typography,{color:"darl",variant:"small",className:"font-medium",children:"Most Popular"})]}),e.jsx(r.Typography,{variant:"h1",color:"blue-gray",className:"mb-2",children:a}),e.jsx(r.Typography,{color:"gray",className:"font-normal",children:s}),e.jsx("ul",{className:"my-8 flex flex-col gap-3 border-y border-blue-gray-50 py-6",children:l.map((t,o)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(c,{className:"h-6 w-6 text-blue-500",strokeWidth:2}),e.jsx(r.Typography,{color:"gray",className:"font-normal opacity-80",children:t})]},o))}),e.jsx(r.Button,{color:"dark",fullWidth:!0,children:"get started"})]})})})}function j(){const[a,s]=n.useState("monthly"),l=[{price:a==="monthly"?"$10/mth":"$100/yr",desc:"Our most popular plan.",options:["Free entry to all repositories","Working materials in Sketch","Pro member accounts","100GB cloud storage","Support team full assist"]},{price:a==="monthly"?"$20/mth":"$200/yr",desc:"Growing teams up to 20 users.",options:["Free entry to all repositories","Working materials in Sketch","Pro member accounts","200GB cloud storage","Support team full assist"]},{price:a==="monthly"?"$40/mth":"$400/yr",desc:"Advanced features + unlimited users.",options:["Free entry to all repositories","Working materials in Sketch","Pro member accounts","300GB cloud storage","Support team full assist"]}];return e.jsxs(i,{children:[e.jsx(m,{}),e.jsxs("section",{children:[e.jsx("div",{className:"min-h-[50vh] px-8 py-24 flex align-center flex-col justify-center text-center bg-cover",style:{backgroundImage:"url('./bg-billing.jpg')"},children:e.jsxs("div",{className:"container mx-auto text-center",children:[e.jsx(r.Typography,{color:"white",className:"mb-2 font-medium opacity-70",children:"Pricing"}),e.jsx(r.Typography,{variant:"h2",color:"white",className:"mb-2",children:"See our pricing"}),e.jsx(r.Typography,{variant:"lead",color:"white",className:"mb-8 opacity-70",children:"You have Free Unlimited Updates and Premium Support on each package."}),e.jsx(r.Tabs,{value:"monthly",className:"mx-auto w-72",children:e.jsxs(r.TabsHeader,{className:"h-14 border border-white/25 bg-opacity-90",children:[e.jsx(r.Tab,{value:"monthly",onClick:()=>s("monthly"),children:"Monthly Billing"}),e.jsx(r.Tab,{value:"annual",onClick:()=>s("annual"),children:"Annual Billing"})]})})]})}),e.jsx("div",{className:"-mt-32 px-8 pt-8 pb-16",children:e.jsx("div",{className:"container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3",children:l.map((t,o)=>e.jsx(d,{...t},o))})})]})]})}export{j as default};
