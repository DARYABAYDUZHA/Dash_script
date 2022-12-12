import React, { useState } from 'react';
import { Button, notification, Form, InputNumber } from 'antd';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase';

const IndexesForm = ({ data, setData, setCurrentView }) => {
  const [submitUserLoading, setSubmitUserLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const [isShowResult, setShowResult] = useState(false);

  const submitUserForm = async ({ alfa, beta, delta, tetta }) => {
    const ref = collection(firestore, 'profiles');

    const { firstName, lastName } = data;

    setData({ ...data, alfa, beta, delta, tetta });

    setSubmitUserLoading(true);

    try {
      await addDoc(ref, { firstName, lastName, alfa, beta, delta, tetta });
      setSubmitUserLoading(false);

      setShowResult(true);

      api.success({
        message: 'Запись успешно добавлена',
      });
    } catch {
      setSubmitUserLoading(false);

      api.error({
        message: 'Ошибка при сохранении',
      });
    }
  };

  return (
    <div>
      {contextHolder}

      {isShowResult ? (
        <div id="check-results-card" className="result-card">
          <h2>Расчёты завершены!</h2>
          <Button type="primary" size="large" ghost onClick={() => setCurrentView('result')}>
            Смотреть результаты
          </Button>
        </div>
      ) : (
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
          onFinish={submitUserForm}
          autoComplete="off"
        >
          <Form.Item
            label="Альфа-ритм, Гц"
            name="alfa"
            rules={[
              {
                required: true,
                message: 'Поле обязательное для заполнения!',
              },
            ]}
            help="Значение в диапазоне от 8 до 13"
          >
            <InputNumber min={8} max={13} />
          </Form.Item>

          <Form.Item
            label="Бета-ритм, Гц"
            name="beta"
            rules={[
              {
                required: true,
                message: 'Поле обязательное для заполнения!',
              },
            ]}
            help="Значение в диапазоне от 14 до 30"
          >
            <InputNumber min={14} max={30} />
          </Form.Item>

          <Form.Item
            label="Дельта-ритм, Гц"
            name="delta"
            rules={[
              {
                required: true,
                message: 'Поле обязательное для заполнения!',
              },
            ]}
            help="Значение в диапазоне от 4 до 7"
          >
            <InputNumber min={4} max={7} />
          </Form.Item>

          <Form.Item
            label="Тета-ритм, Гц"
            name="tetta"
            rules={[
              {
                required: true,
                message: 'Поле обязательное для заполнения!',
              },
            ]}
            help="Значение в диапазоне от 1 до 3"
          >
            <InputNumber min={1} max={3} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button loading={submitUserLoading} type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default IndexesForm;
