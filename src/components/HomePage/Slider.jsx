import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Modal } from 'antd';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import görsel from "../../../public/erikli.png"; 
import görsel1 from "../../../public/köprü.png";
import görsel2 from "../../../public/selimiye.png";
import görsel3 from "../../../public/adalet.png";
import görsel4 from "../../../public/kentmuzesi.png";
import logo from '/edirnelogorenkli.png';

const CustomSlider = () => {
  const sliderRef = useRef(null);
  const sliderData = [
    { id: 1, title: 'Başlık 1', image: görsel, description: "1575 yılında Mimar Sinan tarafından inşa edilen ve UNESCO Dünya Mirası Listesi'nde yer alan Selimiye Camii, Osmanlı mimarisinin en önemli eserlerinden biridir." },
    { id: 2, title: 'Başlık 2', image: görsel1, description: 'Açıklama 2' },
    { id: 3, title: 'Başlık 3', image: görsel2, description: 'Açıklama 3' },
    { id: 4, title: 'Başlık 4', image: görsel3, description: 'Açıklama 4' },
    { id: 5, title: 'Başlık 5', image: görsel4, description: 'Açıklama 5' },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const settings = {
    dots: true, // Noktalar gösterilsin
    infinite: true,
    speed: 500,
    autoplay: true, // Otomatik kaydırma
    autoplaySpeed: 3000, // 3 saniyede bir kaydırma
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ position: 'relative', width: '100vw', backgroundColor: '#FFFFFF', padding: '20px' }}>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((item) => (
          <div key={item.id} onClick={() => showModal(item)} style={{ cursor: 'pointer', margin: '10px 5px' }}>
            <img 
              alt={`Slider ${item.id}`} 
              src={item.image} 
              style={{ 
                height: '350px', 
                width: '280px', 
                objectFit: 'contain', 
                borderRadius: '8px' 
              }} 
            />
          </div>
        ))}
      </Slider>

      {/* Modal Popup */}
      <Modal
        open={isModalVisible}
        footer={null}
        width={'60%'}
        onCancel={handleCancel}
        closeIcon={null}
        bodyStyle={{
          backgroundColor: '#F6EFE9',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Kapatma butonu */}
        <button 
          onClick={handleCancel} 
          style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            backgroundColor: 'transparent', 
            border: 'none', 
            fontSize: '18px', 
            cursor: 'pointer', 
            color: '#493628' 
          }}
        >
          ✕
        </button>

        {/* İçerik */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', width: '100%' }}>
          {/* Görsel Alanı */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              alt={selectedItem?.title}
              src={selectedItem?.image}
              style={{
                width: '280px',
                height: '380px',
                borderRadius: '12px',
                objectFit: 'cover',
              }}
            />
            {/* Kalp ve Favorilere Ekle */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                marginTop: '10px', 
                cursor: 'pointer',
                transition: 'color 0.3s ease',
              }}
            >
              {/* Kalp Simgesi */}
              <span 
                style={{ 
                  fontSize: '24px', 
                  color: '#685752', // Kalbin rengini burada ayarlıyoruz
                }}
              >
                &#9829;
              </span>
              {/* Favorilere Ekle Metni */}
              <span 
                style={{ 
                  fontSize: '16px', 
                  fontWeight: '500', 
                  color: '#997C70' 
                }}
              >
                Favorilere Ekle
              </span>
            </div>
          </div>

          {/* Metin Alanı */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#FDF8F4',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ color: '#493628', marginBottom: '10px' }}>{selectedItem?.title}</h2>
            <p style={{ color: '#493628', fontSize: '16px', lineHeight: '1.5' }}>{selectedItem?.description}</p>
            <ul style={{ color: '#493628', fontSize: '14px', listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <li>
                <span style={{ marginRight: '8px', fontWeight: 'bold' }}>📍</span>
                Konum bilgileri
              </li>
              <li>
                <span style={{ marginRight: '8px', fontWeight: 'bold' }}>⏰</span>
                Ziyaret Saati
              </li>
              <li>
                <span style={{ marginRight: '8px', fontWeight: 'bold' }}>💰</span>
                Giriş ücreti.
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomSlider;
