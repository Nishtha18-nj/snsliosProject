import React from 'react'

export default function Product({title,price,desc,rating,img,index,addToCart}) {
  return (
    <div className="pricing-coloumn col-lg-4 col-md-6">
            <div className="card ">
              <div className="card-header">
                <h3 className="pricing-heading" style={{color:"black"}}>{title}</h3>
              </div>
              <div className="card-body">
                <img src={img} className="card-img" />
                <p className="price-text">&#8377;{price}</p>
                <button
                  type="button"
                  className="btn btn-outline-dark "
                  data-bs-toggle="modal"
                  data-bs-target={"#ab"+index}
                >
                  Click here{" "}
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id={"ab"+index}
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        {/* <h1 class="modal-title fs-5" id="staticBackdropLabel">Product 1</h1> */}
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                        <div className="card ">
                          <div className="card-header">
                            <h3 className="pricing-heading" style={{color:"black"}}>{title}</h3>
                          </div>
                          <div className="card-body">
                            <img src={img} className="card-img" />
                            <p className="price-text">&#8377; {price}</p>
                            <p className="pricing-para">
                             {desc}
                            </p>
                            <p className="pricing-rating">Rating : {rating} <i style={{color:"gold"}} class="fa-solid fa-star"></i></p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button onClick={() => addToCart(index)} type="button" className="btn btn-primary">
                Add to cart
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
