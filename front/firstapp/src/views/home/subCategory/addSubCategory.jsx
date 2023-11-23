import { useEffect, useState } from "react";
import subcategoryService from '../../../services/subcategoryService'
import Swal from 'sweetalert2'
import categoryService from "../../../services/categoryService";
import { useNavigate } from "react-router-dom";

function AddSubCategory() {

  const [data, setdata] = useState();
  const navigate = useNavigate();

  //creation d'une fonction qui prend les donnees de textarea et input et les mettre dans la bd
  const onWriteHandler = (e) => {
    setdata({
      ...data,
      [e.target.name]:e.target.value
    });
    console.log(data)
  }

  //appel de la fonction create eli fel subcategoryService
  const onSaveHandler = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Do you want to add this Subcategory?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Add',
      denyButtonText: `Don't add`,
    }).then((result) => {
      if (result.isConfirmed) {
        subcategoryService.create(data)
        .then((res)=>{
          console.log(res)
          navigate("/listSub")
        })
        .catch((err)=>{
          console.log(err)
        })
        Swal.fire('added!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Subcategory is not added', '', 'info')
      }
    })
  }







   //coller men listcategory bch yaffichilna liste des id mtaa category

  const [categories,setcategories] = useState();
  

  const getALL = () =>{
    categoryService.getAll().then((res)=>{
      console.log("res.data.datares.data.datares.data.datares.data.data",res.data.data)
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
      <h4 className="card-title">Add Subcategory</h4>
      <p className="card-description">
        Add Subcategory
      </p>
      <form className="forms-sample" onSubmit={ onSaveHandler}>

        {/*Name*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input name="name" onChange={onWriteHandler} type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
        </div>
        
        {/*drop down lel subcateg fih les id lkol eli fel bd*/}
        <div className="form-group">
          <select  name="category" onChange={onWriteHandler} >
            {categories?.map((x)=>{
              return(
                <option  name="category" onChange={onWriteHandler}  value={x._id}>
                  {x.name}
                </option>
              )
            })}
            </select>

        </div>  

      


        {/*Description*/}
        <div className="form-group">
          <label htmlFor="exampleTextarea1">Description</label>
          <textarea name="description" onChange={onWriteHandler} className="form-control" id="exampleTextarea1" rows={4} defaultValue={""} />
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

export default AddSubCategory;