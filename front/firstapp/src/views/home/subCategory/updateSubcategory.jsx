import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import subcategoryService from "../../../services/subcategoryService";
import Swal from 'sweetalert2';
import categoryService from "../../../services/categoryService";

function UpdateSubCategory() {

  const {id} = useParams();
  const [data,setData] = useState({})
  const navigate = useNavigate()

  const handleChanges = (id) => {
    setData({
      ...data,
      [id.target.name] : id.target.value
    })
  }


  const onSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Do you want to update this Subcategory?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Update',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        subcategoryService.update(id,data).then((res)=>{
          console.log(res)
          navigate("/listsub")
        })
        .catch((err)=>{
          console.log(err)
        })
        Swal.fire('Updated!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Subcategory is not updated', '', 'info')
      }
    })    
  }


  useEffect(() => {
    subcategoryService.getbyid(id).then((res)=>{
      console.log("subcategoryService.getbyid",res)
      setData(res.data.data) //bch k na3mlou update tdhahrelna les données qui sont déjà ecrites fel list
    })
  }, [])




  const [categories,setcategories] = useState();

  const getALL = () =>{
    categoryService.getAll().then((res)=>{
      console.log(res.data.data)
      setcategories(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getALL()
  },[]);
    return(
       <>
            <div className="col-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Update Subcategory</h4>
      <p className="card-description">
        Update Subcategory
      </p>
      <form className="forms-sample" onSubmit={onSubmit}>

        {/*Name*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"  name="name" value={data.name} onChange={handleChanges}/>
        </div>
        
         {/* Category */}
        <div className="form-group">
          <select  name="category" onChange={handleChanges} >
            {categories?.map((x)=>{
              return(
                <option  name="category" onChange={handleChanges}  value={x._id}>
                  {x.name}
                </option>
              )
            })}
          </select>
        </div>   

        {/*Description*/}
        <div className="form-group">
          <label htmlFor="exampleTextarea1">Description</label>
          <textarea className="form-control" id="exampleTextarea1" value={data.description} rows={4} defaultValue={""} name="description" onChange={handleChanges}/>
        </div>
        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>

       </>
    );
}

export default UpdateSubCategory;