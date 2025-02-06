import { useState } from 'react'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Content from "./components/main/Content.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Content />
        <Footer />

    </>
  )
}

export default App
