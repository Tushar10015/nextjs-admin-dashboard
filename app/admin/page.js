"use client";

import { Card, Col, Row, Statistic } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Users"
              value={23}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Products"
              value={56}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Orders Today"
              value={12}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <div className="mt-8">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Recent Users" bordered={false}>
              <p>John Doe</p>
              <p>Jane Doe</p>
              <p>Sam Smith</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Recent Orders" bordered={false}>
              <p>Order #1234 - $56.00</p>
              <p>Order #1235 - $78.00</p>
              <p>Order #1236 - $90.00</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
