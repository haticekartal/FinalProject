import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Card, Space, Tag, Row, Col, Typography, Timeline, Divider, Button } from 'antd';
import { PlusOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Text } = Typography;

const RoutesPage = () => {
  const navigate = useNavigate();

  const categories = [
    { key: 'historical', label: 'Tarih Rotası', color: '#B99470' },
    { key: 'food', label: 'Yemek Rotası', color: '#825B32' },
    { key: 'shopping', label: 'Alışveriş Rotası', color: '#6C4E31' },
    { key: 'nature', label: 'Doğa Rotası', color: '#603F26' },
    { key: 'activities', label: 'Etkinlik Rotası', color: '#321E1E' }
  ];

  const [routes] = useState([
    {
      title: "Tarihi Edirne Turu",
      author: "Sizin İçin Önerimiz",
      category: "historical",
      description: "Edirne'nin tarihî yerlerini keşfedin",
      places: [
        { name: "Selimiye Camii", description: "UNESCO Dünya Mirası" },
        { name: "Üç Şerefeli Cami", description: "15. yüzyıldan kalma cami" },
        { name: "Eski Cami", description: "Edirne'nin en eski camisi" }
      ]
    },
    {
      title: "Lezzet Rotası",
      author: "Sizin İçin Önerimiz",
      category: "food",
      description: "Edirne'nin meşhur lezzetlerini tadın",
      places: [
        { name: "Ciğerci Niyazi", description: "Meşhur tava ciğer" },
        { name: "Köfteci Osman", description: "Edirne köftesi" },
        { name: "Tarihi Badem Ezmecisi", description: "Tatlı molası" }
      ]
    }
  ]);

  const items = categories.map((category) => {
    const filteredRoutes = routes.filter(route => route.category === category.key);
    return {
      key: category.key,
      label: (
        <div style={{ marginRight: '100px' }}>
          <Tag color={category.color}>{category.label}</Tag>
        </div>
      ),
      children: (
        <Row gutter={[16, 16]}>
          {filteredRoutes.map((route, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card hoverable style={{ height: '100%' }}>
                <Card.Meta
                  title={route.title}
                  description={
                    <Space direction="vertical" size="small">
                      <Space>
                        <UserOutlined />
                        <Text type="secondary">{route.author}</Text>
                      </Space>
                      <Divider style={{ margin: '8px 0' }} />
                      <Timeline>
                        {route.places.map((place, idx) => (
                          <Timeline.Item key={idx}>
                            <Text strong>{place.name}</Text>
                            <br />
                            <Text type="secondary">{place.description}</Text>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Space>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )
    };
  });

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
      <Button
  type="default"
  icon={<ArrowLeftOutlined />}
  onClick={() => navigate('/')}
  style={{
    backgroundColor: '#3C2A21', // Doğru yazım
    color: 'white', // Yazı rengi beyaz olarak ayarlandı
    fontSize: '16px',
    padding: '8px 16px',
    marginBottom: '16px', // Geri butonu ile Yeni Rota Oluştur arasına boşluk
    borderColor: '#3C2A21', // Dış çizgi rengini de aynı renk yapıyoruz
  }}
>
  Geri
</Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate('/new-routes')}
          style={{
            backgroundColor: '#AB886D',
            borderColor: '#AB886D',
            color: 'white',
            fontSize: '16px',
            padding: '8px 16px',
            marginTop: '10px', // Butonu biraz aşağıya almak için
            marginLeft: '50px'
          }}
        >
          Yeni Rota Oluştur
        </Button>
        <div style={{ marginTop: 25, position: 'relative', width: '325px', height: '285px' }}>
          <video
            loop
            autoPlay
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <source src="./newroutes.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div style={{ marginLeft: 380, marginTop: 15, width: '100%' }}>
        <Tabs
          defaultActiveKey="historical"
          items={items}
          type="card"
          size="large"
          style={{ marginBottom: 254 }}
          tabBarStyle={{
            paddingLeft: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default RoutesPage;
