import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components.jsx/Footer';
import Header from './components.jsx/Header';
import Main from './components.jsx/Main';
import { Data } from "./Data"
function App() {

  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    setCatalog(Data)
  }, [])
  const searchFunc = (value) => {
    if (value) {

      setCatalog(Data.filter(item => item.GameTitle.toLowerCase().includes(value.trim().toLowerCase()) ||
        item.GameTitle.toLowerCase() === value.toLowerCase() ||
        item.GameDescription.toLowerCase().includes(value.trim().toLowerCase()) ||
        item.Level.toLowerCase().includes(value.trim().toLowerCase()) ||
        item.Level.toLowerCase() === value.trim().toLowerCase() ||
        item.Subject.toLowerCase().includes(value.trim().toLowerCase()) ||
        item.Subject.toLowerCase() === value.trim().toLowerCase() ||
        item.Topic.toLowerCase().includes(value.trim().toLowerCase()) ||
        item.Topic.toLowerCase() === value.trim().toLowerCase()
      ))
    }


  }

  return (
    <div className="App">
      <Header Func={searchFunc} />
      {catalog.length !== 0 ? <Main Data={catalog} /> : <h1 style={{
        textAlign: "center"
      }}>No Games found</h1>}
      <Footer />
    </div>
  );
}

export default App;
