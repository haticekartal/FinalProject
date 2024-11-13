import React, { useState } from 'react';
import { 
  Tabs, Card, Button, Space, Tag, Row, Col, Typography, Modal, Form, 
  Input, Select, TimePicker, InputNumber, Timeline, Divider 
} from 'antd';
import { 
  PlusOutlined, ClockCircleOutlined, EnvironmentOutlined, 
  UserOutlined, DeleteOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const RoutesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const categories = [
    { key: 'historical', label: 'Tarih', color: '#fadb14' },
    { key: 'food', label: 'Yemek', color: '#ff4d4f' },
    { key: 'shopping', label: 'Alışveriş', color: '#1890ff' },
    { key: 'nature', label: 'Doğa', color: '#52c41a' },
    { key: 'activities', label: 'Etkinlik', color: '#722ed1' }
  ];

  const [routes, setRoutes] = useState([
    {
      title: "Tarihi Edirne Turu",
      author: "Hatice K.",
      category: "historical",
      duration: "6 saat",
      description: "Edirne'nin tarihî yerlerini keşfedin",
      places: [
        { name: "Selimiye Camii", duration: 90, description: "UNESCO Dünya Mirası" },
        { name: "Üç Şerefeli Cami", duration: 45, description: "15. yüzyıldan kalma cami" },
        { name: "Eski Cami", duration: 45, description: "Edirne'nin en eski camisi" }
      ]
    },
    {
      title: "Lezzet Rotası",
      author: "Enis Semerci.",
      category: "food",
      duration: "4 saat",
      description: "Edirne'nin meşhur lezzetlerini tadın",
      places: [
        { name: "Ciğerci Niyazi", duration: 60, description: "Meşhur tava ciğer" },
        { name: "Köfteci Osman", duration: 60, description: "Edirne köftesi" },
        { name: "Tarihi Badem Ezmecisi", duration: 30, description: "Tatlı molası" }
      ]
    }
  ]);

  const handleCreateRoute = (values) => {
    const totalDuration = values.places.reduce((sum, place) => sum + place.duration, 0);
    const newRoute = {
      ...values,
      author: "Kullanıcı", // Normalde giriş yapan kullanıcının adı gelecek
      duration: `${Math.round(totalDuration / 60)} saat ${totalDuration % 60} dakika`
    };

    setRoutes([...routes, newRoute]);
    setIsModalOpen(false);
    form.resetFields();
  };

  const items = categories.map(category => ({
    key: category.key,
    label: (
      <Space>
        <Tag color={category.color}>{category.label}</Tag>
      </Space>
    ),
    children: (
      <Row gutter={[16, 16]}>
        {routes
          .filter(route => route.category === category.key)
          .map((route, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                hoverable
                style={{ height: '100%' }}
                actions={[
                  <Button type="link" key="details">Detayları Gör</Button>
                ]}
              >
                <Card.Meta
                  title={route.title}
                  description={
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Space>
                        <UserOutlined />
                        <Text type="secondary">{route.author}</Text>
                      </Space>
                      <Space>
                        <ClockCircleOutlined />
                        <Text type="secondary">{route.duration}</Text>
                      </Space>
                      <Divider style={{ margin: '8px 0' }} />
                      <Timeline
                        items={route.places.map(place => ({
                          children: (
                            <div>
                              <Text strong>{place.name}</Text>
                              <br />
                              <Text type="secondary">{place.description}</Text>
                            </div>
                          )
                        }))}
                      />
                    </Space>
                  }
                />
              </Card>
            </Col>
          ))}
      </Row>
    )
  }));

  return (
    <div style={{ padding: 24 }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Title level={2}>Edirne Gezi Rotaları</Title>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Yeni Rota Oluştur
        </Button>
      </Row>

      <Tabs
        defaultActiveKey="historical"
        items={items}
        type="card"
        size="large"
        style={{ marginBottom: 24 }}
      />

      <Modal
        title="Yeni Rota Oluştur"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateRoute}
          initialValues={{
            places: [{ name: '', duration: 30, description: '' }]
          }}
        >
          <Form.Item
            name="title"
            label="Rota Başlığı"
            rules={[{ required: true, message: 'Lütfen rota başlığı girin' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="category"
            label="Kategori"
            rules={[{ required: true, message: 'Lütfen kategori seçin' }]}
          >
            <Select>
              {categories.map(cat => (
                <Select.Option key={cat.key} value={cat.key}>
                  {cat.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label="Rota Açıklaması"
            rules={[{ required: true, message: 'Lütfen rota açıklaması girin' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Divider orientation="left">Rota Yerleri</Divider>

          <Form.List
            name="places"
            rules={[{
              validator: async (_, places) => {
                if (!places || places.length < 2) {
                  return Promise.reject(new Error('En az 2 yer eklemelisiniz'));
                }
              },
            }]}
          >
            {(fields, { add, remove }) => (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {fields.map((field, index) => (
                  <Card
                    key={field.key}
                    size="small"
                    title={`${index + 1}. Yer`}
                    extra={
                      fields.length > 1 && (
                        <Button 
                          type="text" 
                          danger 
                          icon={<DeleteOutlined />} 
                          onClick={() => remove(field.name)}
                        />
                      )
                    }
                  >
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'name']}
                          rules={[{ required: true, message: 'Yer adı gerekli' }]}
                        >
                          <Input placeholder="Yer Adı" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'duration']}
                          label="Süre (dakika)"
                          rules={[{ required: true, message: 'Süre gerekli' }]}
                        >
                          <InputNumber min={1} max={480} style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'description']}
                          rules={[{ required: true, message: 'Açıklama gerekli' }]}
                        >
                          <TextArea placeholder="Yer hakkında kısa açıklama" rows={2} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                ))}
                
                <Button 
                  type="dashed" 
                  onClick={() => add()} 
                  icon={<PlusOutlined />}
                  style={{ width: '100%' }}
                >
                  Yeni Yer Ekle
                </Button>
              </div>
            )}
          </Form.List>

          <Form.Item style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit" block>
              Rotayı Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RoutesPage;