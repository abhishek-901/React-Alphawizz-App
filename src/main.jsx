import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import StructureSection from './components/StructureSection/StructureSection.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "home",
//         element: <HeroSection />
//       },
//       {
//         path: "about",
//         element: <StructureSection />
//       }, {}
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="home" element={<HeroSection />} />
//       <Route path="about" element={<StructureSection />} />

//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
)
