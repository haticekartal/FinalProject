import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchBox.css';

const SearchBox = () => {
  const onSearch = (value) => {
    console.log('Arama yapılan değer:', value);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', backgroundColor: '#FFFFF', paddingBottom: '20px' }}>
      <Input.Search
        placeholder="Gezilecek yer ara..."
        size="large"
        onSearch={onSearch}
        enterButton={
          <Button 
            style={{
              backgroundColor: '#493628',  // Butonun arka plan rengini ayarladık
              color: 'white',              // Yazı rengini beyaz yaptık
              borderColor: '#493628'       // Kenar rengini de aynı yaptık
            }}
          >
            ARA
          </Button>
        }
        style={{
          width: '80%',
          maxWidth: '800px',
          backgroundColor: '#493628',
          borderRadius: '10px',
        }}
        prefix={<SearchOutlined style={{ color: '#493628' }} />} 
        className="custom-input"
      />
    </div>
  );
};

export default SearchBox;
