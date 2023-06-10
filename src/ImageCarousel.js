import { useEffect, useState } from "react";
import { MyCard } from "./MyCard"

const ImageCarousel = () => {

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

    const imgs = [
        {
            id: 1,
            title: "problem solving",
            image: "images/problem-solving-course.jpeg"
        },
        {
            id: 2,
            title: "spanish",
            image: "images/Spanish-Course.png"
        },
        {
            id: 3,
            title: "creating writing",
            image: "images/creating-writing.png"
        }
    ]

    const btnPressPrev = () => {
        let box = document.querySelector('.slider-product-container');
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    const btnPressNext = () => {
        let box = document.querySelector('.slider-product-container');
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className="product-carousel">
            <button onClick={btnPressPrev} className="pre-btn"><p>&lt;</p></button>
            <button onClick={btnPressNext} className="next-btn"><p>&gt;</p></button>

            <div className="slider-product-container">
                {products.filter((prod)=>{
                    if(prod.id === 10 || prod.id === 8 || prod.id === 5 || prod.id === 14){
                        return prod;
                    }
                }).map((prod, i) =>
                    <MyCard key={"img_" + i} prodImg={prod.image} prod={prod} />
                )}
            </div>
        </div>
    )
}

export default ImageCarousel