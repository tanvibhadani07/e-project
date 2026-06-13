import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const orders = useSelector((state) => state.cart)
    console.log(orders)



    return (
        <div className='container mt-4'>
            <div className='bg-light rounded shadow-sm p-3'>

                <table className="table table-light table-hover text-center align-middle">
                    <thead className="table-secondary">
                        <tr>
                            <th scope='col'>No.</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Qty</th>
                            <th scope='col'>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders?.cartData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th className='col-1'>{index + 1}</th>

                                        <td className='col-2'>
                                            <img
                                                src={item.thumbnail}
                                                className='img-fluid'
                                                style={{ width: "80px" }}
                                                alt=""
                                            />
                                        </td>

                                        <td className='col-3'>{item.title}</td>
                                        <td className='col-2'>1</td>
                                        <td className='col-2'>
                                            ${Math.round(item.price)}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        <tr>
                            <td colSpan={4} className='text-end fw-bold'>
                                Amount
                            </td>
                            <td>
                                <b>${orders.amount}</b>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4} className='text-end fw-bold'>
                                C-GST%
                            </td>
                            <td>${orders.c_gst_9}</td>
                        </tr>

                        <tr>
                            <td colSpan={4} className='text-end fw-bold'>
                                S-GST%
                            </td>
                            <td>${orders.s_gst_9}</td>
                        </tr>

                        <tr>
                            <td colSpan={4} className='text-end fw-bold'>
                                Total
                            </td>
                            <td>
                                <b>${orders.Total}</b>
                            </td>
                        </tr>

                        <tr >
                            <td colSpan={4} className='text-end fw-bold'>
                                Total in INR
                            </td>
                            <td>
                                <b>₹{orders.inr}</b>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Cart;