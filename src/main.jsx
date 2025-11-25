import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function App() {


  return (
    <>
    <div class='container'>
      <h1> hello world </h1>
    </div>
    </>
  )
}
