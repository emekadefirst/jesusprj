import React from "react";
import Navbar from "../components/navbar";
import BrandHero from "../components/hero";
import Footer from "../components/footer";

const Home = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-50  overflow-hidden">
            <Navbar />
            <BrandHero />
            <Footer />
        </div>

    );
}
export default Home;