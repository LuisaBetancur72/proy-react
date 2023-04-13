/*  de componentes >a layouts > a  pages >a   routes  */
import { LayoutGeneral } from "../layouts/LayoutGeneral";
import { Admin } from "../pages/admin/Admin";
import { Singin } from "../pages/admin/Singin";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound/NotFound";
const AdminRoutes=[
    {path: "/admin",component: Admin, layout: LayoutGeneral},
    {path: "/admin/sing-in",component: Singin, layout: LayoutGeneral}
];
const GeneralRoutes=[
    {path: "/",component: Home, layout:LayoutGeneral},
    {path: "/contact",component:Contact, layout:LayoutGeneral},
    {path: "*",component:NotFound, layout:LayoutGeneral}

];
const allRoutesProject=[...AdminRoutes,...GeneralRoutes];
export default allRoutesProject;