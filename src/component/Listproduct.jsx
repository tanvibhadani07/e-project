import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBagShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTocart } from '../cart/cartSlice';

const Listproduct = ({ category }) => {

    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    function savetocart(products) {
        dispatch(addTocart(products));
    }

    useEffect(() => {

        let url = "";

        if (category === "all") {
            url = "https://dummyjson.com/products?limit=194";
        } else {
            url = `https://dummyjson.com/products/category/${category}`;
        }

        axios.get(url)
            .then((response) => {
                setData(response.data.products);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [category]);

    function btnRating(rating) {
        if (rating > 4) {
            return (
                <button className='btn d-flex align-items-center btn-green rounded-pill'>
                    {rating} <FaStar className='mx-1' />
                </button>
            );
        } else if (rating >= 3) {
            return (
                <button className='btn d-flex align-items-center btn-light-green rounded-pill'>
                    {rating} <FaStar className='mx-1' />
                </button>
            );
        } else if (rating >= 2) {
            return (
                <button className='btn text-white d-flex align-items-center btn-yellow rounded-pill'>
                    {rating} <FaStar className='mx-1' />
                </button>
            );
        } else {
            return (
                <button className='btn text-white d-flex align-items-center btn-danger rounded-pill'>
                    {rating} <FaStar className='mx-1' />
                </button>
            );
        }
    }

    return (
        <div className="container">


            <div className="row">
                {data?.map((item, index) => (
                    <div key={index} className='col-lg-4 col-md-6 col-12 p-2'>
                        <div className='card p-2 h-100'>

                            <div>
                                <img
                                    src={item?.thumbnail}
                                    className='img-fluid'
                                    alt={item?.title}
                                />
                            </div>

                            <div className='card-body d-flex flex-column justify-content-between'>

                                <div className='row'>
                                    <div className='col-8'>
                                        <h5>{item.title}</h5>
                                    </div>

                                    <div className='col-4'>
                                        <h5 className='text-end'>
                                            ${Math.round(item.price)}
                                        </h5>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    {btnRating(item.rating)}

                                    <div className='d-flex align-items-center'>
                                        <h6 className='text-muted'>
                                            {item?.reviews?.length || 0} Reviews
                                        </h6>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        className='btn btn-outline-dark w-100 mt-3'
                                        onClick={() => savetocart(item)}
                                    >
                                        Add To Cart
                                        <FaBagShopping className='mx-1' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Listproduct;

