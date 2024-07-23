import React from 'react'

function Rightsec({ id, imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <br/>
      <br/>
    <div className="row">
      <div className="col-6 p-5 mt-5">
        <div className='row mt-3 mb-5'></div>
        <h1>{productName}</h1>
        <p>{productDesription}</p>
        <div>
          {
            id==="1" && <div>
                          <a href={learnMore} style={{ textDecoration: "none" }}>
                          Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                          </a>
                      </div>
          }

          {
            id==="2" && <div>
                          <a href={learnMore} style={{ textDecoration: "none" }}>
                          Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                          </a>
            </div>
          }

        </div>
      </div>
      <div className="col-6">
        <img src={imageURL} alt="logo"/>
      </div>
    </div>
      <br/>
      <br/>
  </div>
  )
}

export default Rightsec
