import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Slidebar = ({ setCategory }) => {

    const [data, setData] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category-list')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleCategory = (category) => {
        setCategory(category);
        setActiveCategory(category);
    };

    return (
        <div className='main-sidebar'>
            <ul className='list-group border-0'>

                <li className='list-group-item border-0 px-0 py-2'>
                    <button className={`btn w-100 text-start rounded-pill px-3 fw-semibold ${activeCategory === "all"
                        ? "btn-dark"
                        : "btn-light"
                        }`} onClick={() => handleCategory("all")} >
                        All Products
                    </button>
                </li>

                {
                    data?.map((item, index) => (
                        <li key={index} className='list-group-item border-0 px-0 py-2'>
                            <button className={`btn w-100 text-start rounded-pill px-3 fw-semibold ${activeCategory === item
                                ? "btn-dark"
                                : "btn-light"
                                }`} onClick={() => handleCategory(item)}    >
                                {item}
                            </button>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Slidebar;