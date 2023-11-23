import { useState , useEffect } from "react";
import subcategoryService from "../../../services/subcategoryService";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ListSubCategory() {





  const [subcategories, setSubcategories] = useState();

  const getAlll = () => {
    subcategoryService.getall().then((res)=>{
      console.log(res.data.data)
      setSubcategories(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getAlll()
  },[]);


  const onDelete=(id) => {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        subcategoryService.deletesub(id).then((res)=>
          getAlll()
        )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }



    return (
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
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                  {subcategories?.map((item,index) => {
                    return(
                      <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                         {/* //khater mahouch tableau donc zeyed naamlou ekel map w return */}
                         <td>{item.category?.name}</td> 
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to = {`/updateSub/${item._id}`}>
                             <button
                                type="button"
                                className="btn btn-success btn-sm btn-icon-text mr-3"
                              >
                                Edit
                               <i className="typcn typcn-edit btn-icon-append" />
                               </button>
                           </Link>
                           <button 
                             onClick={(e)=>onDelete(item._id)}
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
    );
  }
  
  export default ListSubCategory;
  