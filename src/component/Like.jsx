import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeLike } from '../cart/likeSlice'
import { FaStar } from "react-icons/fa";

const Like = () => {

  const dispatch = useDispatch();

  const likeData = useSelector((state) => state.like.likeData);
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
    <div className='container mt-1 pt-5'>

      <h2 className='mb-4'>Liked Products</h2>

      <div className='row'>


        {

          likeData.map((item) => (

            <div
              className='col-lg-4 col-md-6 col-12 p-2'
              key={item.id}
            >

              <div className='card p-2 h-100'>

                <img src={item.thumbnail}alt={item.title}   className='img-fluid' />

                <div className='card-body'>

                  <div className='d-flex justify-content-between'>
                    <h5>{item.title}</h5>
                    <h5>${Math.round(item.price)}</h5>
                  </div>

                  <p className='text-muted'>
                    {item.description}
                  </p>

                  <div className='d-flex justify-content-between align-items-center'>

                    <div>
                      {btnRating(item.rating)}
                    </div>

                    <span>
                      {item?.reviews?.length || 0} Reviews
                    </span>

                  </div>

                  <div className='mt-3'>
                    <p>
                      <strong>Brand :</strong> {item.brand}
                    </p>

                    <p>
                      <strong>Category :</strong> {item.category}
                    </p>

                    <p>
                      <strong>Stock :</strong> {item.stock}
                    </p>
                  </div>

                  <button className='btn btn-danger w-100' onClick={() => dispatch(removeLike(item.id))}  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))

        }


      </div>

    </div>
  )
}

export default Like