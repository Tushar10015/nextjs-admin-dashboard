"use client";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Sider width={200} className="bg-white">
        <Menu mode="inline" defaultSelectedKeys={["1"]} className="h-full">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            Notifications
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-4 shadow-md">Admin Dashboard</Header>
        <Content className="p-6">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
