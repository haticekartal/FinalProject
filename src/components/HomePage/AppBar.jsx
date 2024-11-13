import React from 'react';
import { Layout, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function AppBar() {
  const navigate = useNavigate(); 

  const handleButtonClick = (index) => {
    switch (index) {
      case 0:
        navigate('/'); 
        break;
      case 1:
        navigate('/routes'); 
        break;
      case 2:
        navigate('/about'); 
        break;
      case 3:
        navigate('/login'); 
        break;
      case 4:
        navigate('/signup');
        break;
      default:
        break;
    }
  };

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', height: '75px', width: '100vw', paddingTop: '20px' }}>
      <div className="logo">
        {/* Adjusted marginTop to move the logo down */}
        <img src="/logo.png" alt="Logo" style={{ height: '400px', width: '400px', marginTop: '40px' }} />
      </div>
      <div className="buttons">
        {['Anasayfa', 'Gezi Rotalarımız', 'Biz Kimiz?', 'Giriş Yap', 'Kayıt Ol'].map((name, index) => (
          <Button
            key={index}
            shape="round"
            onClick={() => handleButtonClick(index)} 
            style={{ marginLeft: '10px', backgroundColor: '#b4835b', color: 'white', borderColor: '#b4835b' }}
          >
            {name}
          </Button>
        ))}
      </div>
    </Header>
  );
}

export default AppBar;
