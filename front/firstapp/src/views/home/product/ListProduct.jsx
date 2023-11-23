import { useEffect, useState } from "react";
import productService from "../../../services/productService";
import { Link } from "react-router-dom";

function ListProduct() {


  const [product,setProduct] = useState();

  const gettALLL = () => {
    productService.getall().then((res) => {
      console.log(res.data.data)
      setProduct(res.data.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    gettALLL()
  }, [] );

  const onDelete = (id) => {
    productService.deleteprod(id).then((res)=>{
      gettALLL()
    })
  }


    return(
        <>
         <div className="row" style={{ width: "82%", marginLeft: "1rem" }}>
        <div className="col-md-12">
          <div className="card">
            <div className="table-responsive pt-3">
              <table className="table table-striped project-orders-table">
                <thead>
                  <tr>
                    <th className="ml-5">ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>reference</th>
                    <th>Gallerie</th>
                    <th>Subcategory</th>
                  </tr>
                </thead>
                <tbody>
                  
                {product?.map((item, index) => {
                    return (
                      <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.ref}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>{item.qte}</td>
                        <td>{item.subcategory?.name}</td>
                        <td>
                          {item.gallery?.map((photo) => {
                            return (
                              <>
                                {photo && (
                                  <img src={"http://localhost:8000/getImage/" + photo.name} style={{width: "100%",
                                  height: "100%"}} alt="" />
                                )
                                }</>
                            )
                          })}
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {/* //1ere etape fel update nektbou faza mtaa el link down below */}
                            <Link to={`/updateProd/${item._id}`}>
                              <button
                                type="button"
                                className="btn btn-success btn-sm btn-icon-text mr-3"
                              >
                                Edit
                                <i className="typcn typcn-edit btn-icon-append" />
                              </button>
                            </Link>
                            <button
                              onClick={(e) => onDelete(item._id)} //nhotou (e) bch yfasakh bel demande mte3na
                              type="button"
                              className="btn btn-danger btn-sm btn-icon-text"
                            >
                              Delete
                              <i className="typcn typcn-delete-outline btn-icon-append" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default ListProduct;