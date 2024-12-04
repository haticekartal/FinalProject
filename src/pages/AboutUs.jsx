import React from 'react';
import { Button } from 'antd'; // Ant Design Button import edildi
import { useNavigate } from 'react-router-dom'; // useNavigate kullanarak yönlendirme
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate(); // useNavigate hook ile yönlendirme

  const goHome = () => {
    navigate('/'); // Anasayfaya yönlendirme
  };

  return (
    <div className="about-us-container">
      {/* Sol taraf */}
      <div className="about-us-left">
        {/* Geri butonu */}
        <Button 
          type="primary" 
          onClick={goHome} 
          className="back-button">
          Geri
        </Button>

        <h1 style={{ fontFamily: 'Lobster, sans-serif', marginLeft:'100px' }}>HAKKIMIZDA</h1>

        
        {/* Profil 1 */}
        <div className="profile">
          <img src="./about1.png" alt="Profil 1" className="profile-image" />
          <div className="profile-info">
            <p>Hatice Kartal</p>
            <div className="profile-links">
              <a href="https://www.linkedin.com/in/hatice-kartal/">LinkedIn Profili</a>
              <a href="https://github.com/haticekartal">GitHub Profili</a>
              <a href="https://medium.com/@kartal_hatice">Medium Profili</a>
            </div>
          </div>
          <div style={{maxWidth:'300px', marginLeft:'20px', marginTop:'50px'}}>Trakya Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Bu projede frontend tarafını geliştirmekten sorumluyum. Web tasarımı, kullanıcı deneyimi ve site işlevselliğini geliştirmek için React, Ant Design gibi teknolojilerle çalışıyorum. Amacım, Edirne'nin tarihi ve kültürel zenginliklerini tanıtan, kullanıcı dostu ve görsel olarak çekici bir web sitesi oluşturmak. Bu projede frontend tarafında kullanıcıların kolayca gezilecek yerleri keşfetmelerini sağlayacak işlevsellikler eklemeye odaklandım.</div>
        </div>

        {/* Profil 2 */}
        <div className="profile">
          <img src="./about2.png" alt="Profil 2" className="profile-image" />
          <div className="profile-info">
            <p>Ali Eren Ürdem</p>
            <div className="profile-links">
              <a href="https://www.linkedin.com/in/ali-eren-%C3%BCrdem-9b0432234/">LinkedIn Profili</a>
              <a href="https://github.com/aliurdem?">GitHub Profili</a>
              <a href="https://medium.com/@kartal_hatice">Medium Profili</a>
            </div>
          </div>
          <div style={{maxWidth:'300px', marginLeft:'20px', marginTop:'50px'}}>Trakya Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Bu projede backend tarafını geliştirmekle sorumluyum. Proje, Edirne'deki gezilecek yerleri tanıtan bir web sitesi olmayı amaçlıyor. Benim görevim, kullanıcıların seçimlerine göre dinamik olarak rota oluşturulmasını sağlayan sistemin altyapısını kurmak ve veritabanı entegrasyonunu sağlamak. Backend tarafında doğru teknolojiler kullanarak, tüm verilerin doğru ve güvenli bir şekilde işlenmesini sağlıyorum.</div>
        </div>
      </div>

      {/* Sağ taraf */}
      <div className="about-us-right">
        <img src="./about.png" alt="Hakkımızda Görseli" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;
