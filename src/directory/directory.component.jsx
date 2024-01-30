
import CategoryItem from "../components/category-item.component"
const Directory =(props)=>{
    return(
<div className="categories-container">

{props.categories.map((item)=>{
     return (
     <CategoryItem item={item} key={item.id}/>
     )
  
  })}






</div>
    )
}


export default Directory