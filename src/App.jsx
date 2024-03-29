import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SpinnerFullPage from "./components/SpinnerFullPage";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import ProfilePage from "./pages/ProfilePage";
const Profile = lazy(() => import("./pages/ProfilePage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
    // <div className="flex flex-col min-h-screen">
    //   <Navbar />
    //   <main className="flex-grow">
    //     {/* <ProfilePage /> */}
    //     {/* <Portfolio /> */}
    //     <Contact />
    //   </main>
    //   <Footer />
    // </div>
  );
}

export default App;
