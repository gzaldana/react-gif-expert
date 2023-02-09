import { useState } from "react"
import { AddCatagory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // categories.push(newCategory);
    // console.log(newCategory)
    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat,'Valorant']);
  }

  return (
    <>

    <h1>GifExpertApp</h1>

    <AddCatagory 
      // setCategories={setCategories}
      onNewCategory={event => onAddCategory(event) }
    />
  
  

    { categories.map( ( category )  =>(
            <GifGrid 
              key={category} 
              category={category}/>
        )) 
    }


    </>
  )
}
