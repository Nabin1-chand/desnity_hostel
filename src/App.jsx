import './App.css'
import Layout from './component/layout'
import BlockA from './pages/blockA'
import BlockB from './pages/blockB'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlockC from './pages/blockC';
import HomePage from './pages/home_page';
import Contact from './pages/contact_us';
import AboutUs from './pages/about_us';
import InquiryForm from './pages/book_now';
function App() {
  

  return (
    <>

        {/* <Layout></Layout> */}
        <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/inquiry" element={<InquiryForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/block-a" element={<BlockA />} />
        <Route path="/block-b" element={<BlockB />} />
        <Route path="/block-c" element={<BlockC />} />
        </Route>
      </Routes>

        </Router>
    </>
  )
}

export default App
