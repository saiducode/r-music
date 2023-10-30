import React, {useState, useEffect } from 'react';
import Article from "./Article";
import useArticles from '../hooks/useArticles';


const ListArticles = () => {

   const { articles } = useArticles()

  
  return (
    <>
    <div className="md:w-2/2 lg:w-5/5 md:h-screen ">

        {articles.map(article => (
           <Article 
            key={article.data.id}
            article={article}
           />
        ))}  
                   
                    

                    
               


           
        </div>

      </>
  )
}

export default ListArticles


