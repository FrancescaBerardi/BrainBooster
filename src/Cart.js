import CartItem from "./Components/CartItem";
import Layout from "./Components/Layout/Layout";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "./Components/Login/AuthContext";

const Cart = () => {

    const {userId, login, logout, setCartSize} = useContext(AuthContext);

    const [productList, setProductList] = useState([]);

    const [cartSizeLocal, setCartSizeLocal] = useState(0);

    const getData = () => {
        fetch("http://localhost:8000/user/" + "1")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.cart);
                setProductList(data.cart);
                console.log(productList);
            }).catch((err) => {
                console.log(err.message);
            })
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        //ottengo num prodotti carrello
        const sum = productList.reduce((acc, curr) => acc+curr[1],0);
        setCartSizeLocal(sum);
        setCartSize(cartSizeLocal);
    }, [productList]);

    return (
        <Layout>
            <div className="cart-products">
                {productList.map((product)=>(
                    <CartItem key={product[0]} product = {product} />
                ))}
                
            </div>
        </Layout>

    );
}

export default Cart;