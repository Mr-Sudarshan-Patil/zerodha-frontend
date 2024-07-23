import React from 'react'

function Leftsec({
  id,
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <br/>
      <br/>

      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="logo"/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            {id==="1" &&<div>
              <a className="mx-2" href={tryDemo} style={{ textDecoration: "none" }}>
            Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <a href={learnMore} style={{ textDecoration: "none" }}>
          Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
              </div>}

              {id==="2" &&<div>
              <a className="mx-2" href={tryDemo} style={{ textDecoration: "none" }}>
            Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
             </a>
              </div>}

          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="logo" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default Leftsec
