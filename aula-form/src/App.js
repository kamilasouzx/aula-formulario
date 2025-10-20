import React from 'react';
import { Form } from './Form';
import { Home } from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-indigo-300">
        <div>
          <div className='bg-white/80 rounded-lg'>
            <main className='p-4'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastro' element={<Form />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
