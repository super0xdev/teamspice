// import logo from './logo.svg';
import './App.css';
import ConnectWalletTab from './components/ConnectWalletTab';
import ChatbotTab from './components/ChatbotTab';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      <div className='flex w-full overflow-hidden'>
        {visible ?
          <>
            <ConnectWalletTab visible={visible} setVisible={setVisible} />
            <ChatbotTab visible={visible} setVisible={setVisible} />
          </> :
          <>
            <ConnectWalletTab visible={visible} setVisible={setVisible} />
            <ChatbotTab visible={visible} setVisible={setVisible} />
          </>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
