import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen (props) {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])

    return <ul className="products">
                {products.map(product => 
                <li>
                    <div className="product">
                        <Link to={'/product/' + product._id}>
                            <img src={product.image} alt="vinyl" className="product-image" />
                        </Link>
                        <div className="product-album">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-artist">{product.artist}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReview} reviews)</div>
                    </div>
                </li>
                )}
          </ul>
}

export default HomeScreen;