import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import productService from "../../../services/productService";
import subcategoryService from "../../../services/subcategoryService";

function UpdateProduct() {

  const {id} = useParams();
  const [data,setData] = useState({})
  const navigate = useNavigate()
  const[image,setImage] = useState();

  const onChangeImage=(e)=>{
    e.preventDefault()
    setImage(e.target.files)
  }

  const handleChanges = (id) => {
    setData({
      ...data,
      [id.target.name] : id.target.value
    })
  }

  const onSubmit = (e) => {
    const formdata = new FormData()
    e.preventDefault()
    
    //    {/*f post man nhotou form data k yabda aana des images */}
    formdata.append("name" , data.name)
    formdata.append("ref" , data.ref)
    formdata.append("price" , data.price)
    formdata.append("description" , data.description)
    formdata.append("qte",data.qte)
    formdata.append("subcategory",data.subcategory)
    for (let i = 0 ;  i<image?.length ; i++){
      formdata.append("photos", image[i])
    }

    productService.update(id,formdata)
    .then((res)=>{
      navigate('listProd')
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  useEffect(() => {
    productService.getbyid(id).then((res) => {
      console.log("productService.getbyid", res)
      setData(res.data.data)
    })
  }, [])

  const [subcategories, setSubcategories] = useState();
  const getAlll = () => {
    subcategoryService.getall().then((res) => {
      console.log(res.data.data)
      setSubcategories(res.data.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAlll()
  }, []);

    return(
        <>
<div className="col-12 grid-margin stretch-card">
  <div className="card"  style={{width: '86%',minWidth: '76%'}}>
    <div className="card-body">
      <h4 className="card-title">Add Product</h4>
      <p className="card-description">
        Add Product
      </p>
      <form className="forms-sample" onSubmit={onSubmit}>


        {/*Reference*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Referance</label>
          <input type="text" name="ref" onChange={handleChanges} value={data.ref} className="form-control" id="exampleInputName1" placeholder="Referance" />
        </div>
        
        {/*Price*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Price</label>
          <input type="text" name="price" onChange={handleChanges} value={data.price} className="form-control" id="exampleInputName1" placeholder="Price" />
        </div>
        
        {/*Subcategory*/}
        <div className="form-group row">
                <label className="col-sm-3 col-form-label">Subcategory</label>
                <select className="form-control" onChange={handleChanges} name="product" >
                  {subcategories?.map((x) => {
                    return (
                      <option name="subcategory" onChange={handleChanges} value={x._id}>
                        {x.name}
                      </option>
                    )
                  })}
                  {/*  <option>Subcategory1</option>
                     <option>Subcategory2</option>
                     <option>Subcategory3</option>
                     <option>Subcategory4</option>
                    */}
                </select>
          </div>

        {/*Description*/}
        <div className="form-group">
          <label htmlFor="exampleTextarea1">Description</label>
          <textarea className="form-control" id="exampleTextarea1" value={data.description} name="description" onChange={handleChanges} rows={4} defaultValue={""} placeholder="Write the Product's Description" />
        </div>

        {/*Quantite*/}
        <div className="form-group">
          <label htmlFor="exampleTextarea1">Quantity</label>
          <input type="text" name="qte" value={data.qte} className="form-control" onChange={handleChanges} id="exampleInputName1" placeholder="Quantity" />
        </div>

        {/*Upload File*/}
        <div className="form-group">
                <label>File upload</label>
                <div className="input-group col-xs-12">
                  <input type="file" name="photo" className="form-control file-upload-info" onChange={onChangeImage}  placeholder="Upload Image" />
                  <span className="input-group-append">
                  </span>
                </div>
        </div>


        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>
        </>
    )
}

export default UpdateProduct;