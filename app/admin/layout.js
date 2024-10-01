"use client";

import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import "../../app/globals.css"; // Importing Tailwind CSS

const { Header, Sider, Content } = Layout;

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="bg-gray-900"
      >
        <div className="logo text-white text-center py-4">
          <h2 className="text-xl">{collapsed ? "AD" : "Admin Dashboard"}</h2>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link href="/admin">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link href="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
            <Link href="/admin/products">Products</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white shadow-sm p-4">Admin Dashboard</Header>
        <Content className="p-6 bg-gray-100">{children}</Content>
      </Layout>
    </Layout>
  );
}
