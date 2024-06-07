import { useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import SurveyForm from './component/SurveyForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <SurveyForm/>
    </>
  )
}

export default App
