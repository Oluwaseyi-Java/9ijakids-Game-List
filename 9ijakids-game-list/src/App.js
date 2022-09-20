import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components.jsx/Footer';
import Header from './components.jsx/Header';
import Main from './components.jsx/Main';
import { Data } from "./Data"

const allFilter = [...new Set(Data.map(item => item.Level || item.Group))]

function App() {

  const [filters, setFilters] = useState(allFilter)
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    setCatalog(Data)
  }, [])
  const searchFunc = (value) => {
    if (value) {

      setCatalog(catalog.filter(item => item.GameTitle.toLowerCase().includes(value.trim().toLowerCase()) ||
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

  const filterFunc = (value) => {
    console.log(value)
    if (value) {
      setCatalog(Data.filter(item => item.Group || item.Level === value))
    }
  }
  
  return (
    <div className="App">
      <Header Func={searchFunc} filter={filters} filterFunc={filterFunc} />
      {catalog.length !== 0 ? <Main Data={catalog} /> : <h1 style={{
        textAlign: "center"
      }}>No Games found</h1>}
      <Footer />
    </div>
  );
}

export default App;
