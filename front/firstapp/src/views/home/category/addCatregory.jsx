//importation de useState from React
import { useState , useEffect } from 'react';
import categoryService from '../../../services/categoryService';
import { useNavigate } from 'react-router-dom';
import subcategoryService from '../../../services/subcategoryService';

function AddCategory() {

  const [data,setData] = useState();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({
      ...data, //nekhdhou el data eli melouel bel modificateion pour ne pas stocker seulement ekher valeur
      [e.target.name] : e.target.value
    });
    console.log(data);
  };

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    categoryService.create(data)
    .then((res)=>{
      console.log(res)
      navigate("/listcat")
    })
    .catch((err)=>{
      console.log(err)
    })
  };











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









  return(
    <>
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add Category</h4>
            <p className="card-description">
               Add Category
            </p>
            <form className="forms-sample" onSubmit={onSubmitHandler}>

              {/*Name*/}
              <div className="form-group">
               <label htmlFor="exampleInputName1">Name</label>
               <input name="name" onChange={onChangeHandler} type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
              </div>
        
              {/*Subcategory (heritege)*/}
              <div className="form-group">
                 <select name="subcategory" onChange={onChangeHandler}>
                  {/*mappage bch yakralna el elements lkol eli fel subcategory */}
                  {subcategories?.map((i)=> {
                    return(
                      <option value={i._id}>
                        {i.name}
                      </option>
                    )
                  })}
                 </select>
              </div>
              <button type="submit" className="btn btn-primary mr-2" >Submit</button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;