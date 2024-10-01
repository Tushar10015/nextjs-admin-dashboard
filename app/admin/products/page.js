"use client";

import { Table, Button, Modal, Form, Input } from "antd";
import { useState } from "react";

const Products = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
  ]);

  const showModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setProducts([...products, { id: products.length + 1, ...values }]);
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Button type="link">Delete</Button>,
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        className="mt-4"
      />
      <Modal
        title="Add Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Products;
