import { MyCard } from "./MyCard"

const ImageCarousel = () => {

    

    const imgs = [
        {
            title: "problem solving",
            image: "images/problem-solving-course.jpeg"
        },
        {
            title: "spanish",
            image: "images/Spanish-Course.png"
        },
        {
            title: "creating writing",
            image: "images/creating-writing.png"
        }
    ]

    

    const btnPressPrev = ()=>{
        let box = document.querySelector('.slider-product-container');
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    const btnPressNext = ()=> {
        let box = document.querySelector('.slider-product-container');
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

  return (
    <div className="product-carousel">
        <button onClick={btnPressPrev} className="pre-btn"><p>&lt;</p></button>
        <button onClick={btnPressNext} className="next-btn"><p>&gt;</p></button>

        <div className="slider-product-container">
            {imgs.map((img, i)=>
                <MyCard key={"img_"+i} img={img.image} />
            )}
        </div>
    </div>
  )
}

export default ImageCarousel