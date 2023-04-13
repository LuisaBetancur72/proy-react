import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {UserOutlined, OrderedListOutlined } from "@ant-design/icons";
import {Layout, Menu} from "antd";
import "./MenuSider.scss";

export const MenuSider = (props) => {

    const {Sider} = Layout;
    const location = useLocation();
    const navigate = useNavigate();
    const menuItems=[
        {key:"/admin/users",
        icon:<UserOutlined />,
        label:<span className='navar-text'>Users</span>
        },
        {key:"/admin/products",
        icon:<OrderedListOutlined />,
        label:<span className='navar-text'>Products</span>
        }
    ];
    const menuClick=(e) =>{
        const path = e.key;
        console.log("Di clic en el menu" + path);
        navigate(path);
    
        return (
        <Sider className='menu-sider' collapsed= {props.menuCollapsed}>
            <Menu>
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                items={menuItems}
            </Menu>
        </Sider>
        )
};
