import { useState } from 'react'
import './App.css'

// here is the all my component
import Header from './component/Header'
import Sidebar from './component/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex'>
      {/* this is the side bar section */}
      <section className='w-1/5 h-screen border-2 border-black'>
        <Sidebar />
      </section>

      {/* this is the main section */}
      <section className='w-4/5 h-screen border-2 border-black'>
        <Header />
      </section>
    </main>
  )
}

export default App
