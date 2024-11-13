// Login.jsx
import React from 'react';
import './Login.css';

// Görsellerin public klasöründe olduğunu varsayıyoruz
import icon1 from '/icon1.png';
import icon2 from '/icon2.png';
import icon3 from '/icon3.png';
import icon4 from '/icon4.png';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme işlemi burada yapılabilir
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="title">Hoşgeldiniz! Giriş İçin Bilgilerinizi Girin</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="E-Mail" className="input-field" />
          <input type="password" placeholder="Şifre" className="input-field" />
          <button type="submit" className="submit-button">Giriş Yap</button>
        </form>
        <p className="signup-text">
          Henüz hesabınız yok mu? <a href="/signup" className="signup-link">Kaydol</a>
        </p>
      </div>
      <div className="image-container">
        <img src="/login.png" alt="Kayıt İllustrasyonu" className="login-image" />
        <img src={icon1} alt="İkon 1" className="icon icon-top-left" />
        <img src={icon2} alt="İkon 2" className="icon icon-top-right" />
        <img src={icon3} alt="İkon 3" className="icon icon-bottom-left" />
        <img src={icon4} alt="İkon 4" className="icon icon-bottom-right" />
      </div>
    </div>
  );
};

export default Login;
