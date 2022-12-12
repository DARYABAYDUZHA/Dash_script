import React from 'react';
import { Button, Form, Input } from 'antd';

const AuthForm = ({ data, setData, setCurrentView }) => {
  const submitUser = ({ firstName, lastName }) => {
    setData({ ...data, firstName, lastName });
    setCurrentView('indexes');
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={submitUser}
      autoComplete="off"
    >
      <Form.Item
        label="Имя"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Поле обязательное для заполнения!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Поле обязательное для заполнения!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Авторизоваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
