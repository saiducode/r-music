import React from 'react'

const Article = ({article}) => {

  const { title, author, selftext, permalink} = article.data
 

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        
        <h3 className="font-bold mb-3 text-orange-700">{''}
            
            {title}
        </h3>

        <h6 className="font-light mb-3 text-gray-400"> {''}
            <i>Posted by:</i>
            <span className="font-normal normal-case">{author}</span>
        </h6>

        <p className="font-light mb-3 text-black-700">{''}
            <span className="font-normal normal-case">{selftext.slice(0,300)}</span>
        </p>
    
    </div>
  )
}

export default Article



