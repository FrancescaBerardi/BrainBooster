import { MyCard } from "./MyCard"

const ImageCarousel = () => {
  return (
    <div className="product-carousel">
        <button className="pre-btn"><p>&lt;</p></button>
        <button className="next-btn"><p>&gt;</p></button>

        <div className="slider-product-container">
            <MyCard card="1" />
            <MyCard card="2" />
            <MyCard card="3" />
            <MyCard card="4" />
            <MyCard card="5" />
            <MyCard card="6" />
        </div>
    </div>
  )
}

export default ImageCarousel