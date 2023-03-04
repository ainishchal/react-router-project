import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import PRODUCTS from "../data";
const SingleProduct = () => {
 const navigate = useNavigate();
 const {productId} = useParams();

  const singleProduct =  PRODUCTS.find(product => product.id ===  parseInt(productId))
  const {id, name, price, image, details} = singleProduct
  const  {pathname} = useLocation();
 
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
              <p>{pathname}</p>
            </div>

            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                    <li className="breadcrumb-item active">Products</li>
                    <li className="breadcrumb-item active">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>  


      <div className="container content">
              <div className="row">
                <div className="col-lg-5">
                  <img className="img-fluid"  src={image} alt={name}/>
                </div>

                <div className="col-lg-7">
                  <h2>{name}</h2>
                  <p className="price">Price: <strong>{price}</strong> </p>
                  <p>{details}{details}{details}</p>

                  <br />
                  <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>Back</button> &nbsp;
                  <button className="btn btn-primary btn-sm" onClick={()=> navigate("/products")}> NAVIGATE TO PRODUCTS</button> &nbsp;
                  <Link to="/products" className="btn btn-primary btn-sm">PRODUCTS</Link>
                </div>
              </div>
      </div>
    </main>
  );
};

export default SingleProduct;
