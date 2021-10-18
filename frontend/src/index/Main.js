import React from 'react';
import FormPinjam from './FormPinjam.js';


class Main extends React.Component {
  render() {
    return (
        <div className="main">
            
          <div className = "intro-container">
              <h5>Masukan Barang Anda yang Sedang Dipinjam</h5>
          </div>

          <br/>

          <div className = "form-container">
              <FormPinjam />
          </div>    
    </div>
    );
  }
}

export default Main;
