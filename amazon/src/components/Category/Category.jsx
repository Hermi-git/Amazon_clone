import React from 'react'
import {categoryInfos } from './CategoryFullInfo'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'

function Category() {
  return (
    <section className={classes.category__container}>
        {
            categoryInfos.map((infos)=>{
                return(
                <CategoryCard data = {infos}/>)
            })
        }
    </section>
  )
}

export default Category