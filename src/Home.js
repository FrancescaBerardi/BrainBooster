import Layout from "./Components/Layout/Layout";
import ImageCarousel from "./ImageCarousel";
import ProductList from "./ProductList";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Components/Login/AuthContext";

const Home = () => {

    const {userId, login, logout} = useContext(AuthContext);

    return (
        <Layout>
            <div className="home">
                <h1>I nostri corsi, {userId}</h1>
                <ImageCarousel />
                <ProductList />
            </div>
        </Layout>
    );
}

export default Home;