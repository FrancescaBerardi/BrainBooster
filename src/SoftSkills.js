import React, { useEffect, useState } from 'react'
import ProductCard from './Components/ProductCard';
import Layout from './Components/Layout/Layout';

const SoftSkills = () => {

    const [products, setProducts] = useState([]);

    const getData = () => {
        fetch("http://localhost:8000/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            }).catch((err) => {
                console.log(err.message);
            })
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        
    }, [products]);

    return (
        <Layout>
            <div className='categoryProductContainer'>
            <h2>I nostri corsi di soft skills</h2>
            <div className="categoryProduct">
            {
                    products.filter((product) => {
                        if (product.category === "soft-skills") {
                            return product;
                        }
                    }).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            
            </div>
                </div>
        </Layout>
    )
}

export default SoftSkills