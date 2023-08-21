export default function CartItem({img,title,price,quantity,deleteCart,index,updateCart})
{
    return (

        <div className="pricing-coloumn col-lg-3 col-md-3">
        <div className="card ">
          <div className="card-header">
            <h3 className="pricing-heading" style={{color:"black"}}>{title}</h3>
          </div>
          <div className="card-body">
            <img src={img} className="card-img" />
            <p className="price-text">&#8377;{price*quantity}</p>
         

            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",marginBottom:"20px"}}>
                <div className="">
                    <button
                    type="button"
                    className="btn btn-outline-dark "
                    onClick={() => updateCart(index,1)}
                >
                +
                </button>
                </div>
                <div className="" style={{color:"black"}}>
                {quantity}
                </div>
                <div className="">
                    <button
                    type="button"
                    className="btn btn-outline-dark "
                    onClick={() => updateCart(index,-1)}
                >
                -
                </button>
                </div>
            </div>

            <hr />

            <button
              type="button"
              className="btn btn-outline-dark "
                onClick={() => deleteCart(index)}
            >
             Delete
            </button>
           
          </div>
        </div>
      </div>
      
    )
}