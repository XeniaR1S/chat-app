import React from 'react';
import logo from './logo.svg';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact name="Harry" online avatar="https://www.lyoncapitale.fr/wp-content/uploads/2014/10/502228-ez-Harry-potter-770x433.jpg"/>
      <Contact name="Hermione" avatar="https://wir.skyrock.net/wir/v1/resize/?c=isi&im=%2F3282%2F94333282%2Fpics%2F3254460612_2_3_wqxvy1Ib.jpg&w=600"/>
      <Contact name="Dumby" online avatar="https://medias.laprovence.com/aI5fQj6xSMS3lXkrm2FdW3vrn4I=/10x0:760x411/850x575/top/smart/1d2f9c327ea2438c905ce2ce64fbb09c/1552843367_vf_dumbledore_main_5672.jpeg_north_760x_white.jpg"/>
    </div>
  );
}

export default App;
