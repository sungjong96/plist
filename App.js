import './App.css';

import Header from './Header';
import PhoneList from './PhoneList';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <h1 className="ptit">스타벅스 메뉴 리스트</h1>
      <PhoneList />
      <Footer/>
    </>
  );
}

export default App;
