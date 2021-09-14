
import Header from './Header'
import Form from './Form'
import { useState, useEffect } from 'react'
import Cards from './Cards'

import './App.css'

function App() {
  const [data, setData] = useState([])
  const [formView, setFormView] = useState(false)

  const toggleForm = () => {
    setFormView(!formView)
  }

  useEffect(() => {
    function getData(){
      const storagedData = localStorage.getItem('FinançasLocalStorage')

      if(!storagedData){
        return localStorage.setItem('FinançasLocalStorage', '[]')
      }

      const parsedStoragedData = JSON.parse(storagedData)

      setData(parsedStoragedData)
    }

    getData()

  }, [])

  useEffect(() => {
    
    localStorage.setItem('FinançasLocalStorage', JSON.stringify(data))

  }, [data])

  


  return (
    <>
      <div className="App" id="main-container">

        <Header handleFormView={toggleForm} formView={formView} />

        { formView && <Form data={data} setData={setData}/> }

        <main>
          <Cards data={data} setData={setData} />
        </main>

      </div>
      
    </>
  );
}

export default App;
