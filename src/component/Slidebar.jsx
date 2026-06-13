import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Slidbar = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        try {
            axios
                .get('https://dummyjson.com/products/category-list')
                .then(function (response) {
                    console.log(response);
                    setData(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        } catch (error) {
            console.log(error)
        }
    }, []);
    
    return (
        <div className='main-sidebar'>
            <ul className='list-group border-0'>

                {
                    data?.map((item, index) => {
                        return (
                            <li key={index} className='list-group-item border-0 px-0 py-2'  >

                                <button className='btn btn-light w-100 text-start rounded-pill px-3 fw-semibold'  >
                                    {item}
                                </button>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Slidbar