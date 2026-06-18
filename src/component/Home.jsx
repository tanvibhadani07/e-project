import React, { useState } from 'react'
import Slidebar from './Slidebar'
import Listproduct from './Listproduct'

const Home = () => {

  const [category, setCategory] = useState("all");

  return (
    <div>
      <div className="row w-100">

        <div className="col-lg-2 col-4">
          <Slidebar setCategory={setCategory} />
        </div>

        <div className="col-lg-10 col-8">
          <Listproduct category={category} />
        </div>

      </div>
    </div>
  )
}

export default Home