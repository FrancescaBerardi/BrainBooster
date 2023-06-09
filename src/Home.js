import Layout from "./Components/Layout/Layout";
import ImageCarousel from "./ImageCarousel";
import ProductList from "./ProductList";

const Home = () => {
    return (
        <Layout>
            <div className="home">
                <h1>Home</h1>
                <ImageCarousel />
                <ProductList />
            </div>
        </Layout>
    );
}

export default Home;