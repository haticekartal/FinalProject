import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini import edin
import './TravelRoutes.css';

const TravelRoutes = () => {
  return (
    <section className="travel-routes">
      <div className="route-left">
        <img
          src="rota1.png"
          alt="Edirne Gezilecek Yerler"
          className="main-image"
        />
      </div>
      <div className="route-right">
        {/* Link bileşenini h2 etrafına ekleyin */}
        <Link to="/our-routes" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>Edirne İçin Gezi Rotaları</h2>
        </Link>
        <div className="route-images">
          {/* Rotanın altındaki içerikler */}
          <div className="route-card">
            <p className="route-title">Yemek Rotası</p>
            <img src="rota2.png" alt="Yemek Rotası" className="route-image" />
          </div>
          <div className="route-card">
            <p className="route-title">Tarih Rotası</p>
            <img src="rota3.png" alt="Tarih Rotası" className="route-image" />
          </div>
          <div className="route-card">
            <p className="route-title">Alışveriş Rotası</p>
            <img src="rota4.png" alt="Alışveriş Rotası" className="route-image" />
          </div>
          <div className="route-card">
            <p className="route-title">Doğa Rotası</p>
            <img src="rota5.png" alt="Doğa Rotası" className="route-image" />
          </div>
          <div className="route-card">
            <p className="route-title">Festival ve Etkinlik Rotası</p>
            <img src="rota6.png" alt="Festival ve Etkinlik Rotası" className="route-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelRoutes;

