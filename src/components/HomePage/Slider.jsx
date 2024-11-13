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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  // 5 görseli aynı anda göster
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 4 },  // Ekran 1440px'den küçükse 4 görsel göster
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },  // Ekran 1024px'den küçükse 3 görsel göster
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },  // Ekran 768px'den küçükse 2 görsel göster
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },  // Ekran 480px'den küçükse 1 görsel göster
      },
    ],
  };

  return (
    <div style={{ position: 'relative', width: '100vw', backgroundColor: '#FFFFFF', padding: '20px' }}>
      {/* Sol Ok Butonu */}
      <button 
        onClick={() => sliderRef.current.slickPrev()} 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '10px', 
          transform: 'translateY(-50%)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#493628', 
          color: 'white', 
          border: 'none', 
          borderRadius: '50%', 
          width: '40px', 
          height: '40px', 
          fontSize: '18px', 
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'opacity 0.3s ease',
          opacity: 0.8,
          lineHeight: 0
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.8}
      >
        &lt;
      </button>

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

      {/* Sağ Ok Butonu */}
      <button 
        onClick={() => sliderRef.current.slickNext()} 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          right: '10px', 
          transform: 'translateY(-50%)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#493628', 
          color: 'white', 
          border: 'none', 
          borderRadius: '50%', 
          width: '40px', 
          height: '40px', 
          fontSize: '18px', 
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'opacity 0.3s ease',
          opacity: 0.8,
          lineHeight: 0
        }}
        onMouseEnter={(e) => e.target.style.opacity = 1}
        onMouseLeave={(e) => e.target.style.opacity = 0.8}
      >
        &gt;
      </button>

      {/* Modal Popup */}
      <Modal
        open={isModalVisible}
        footer={null}
        width={'80%'}
        onCancel={handleCancel}
        closeIcon={null}
      >
        <button onClick={handleCancel} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>X</button>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <img 
            alt={selectedItem?.title} 
            src={selectedItem?.image} 
            style={{ width: '280px', borderRadius: '10px', height: '380px', paddingTop: '20px' }} 
          />
          <p style={{ maxWidth: 600 }}>{selectedItem?.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default CustomSlider;
