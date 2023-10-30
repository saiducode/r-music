import React from 'react'

const Article = ({article}) => {

  const { title, author, selftext, permalink, link_flair_text, secure_media, secure_media_embed} = article.data
 
   return (
    <div className="text-left mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        
        <a href={`http://www.reddit.com${permalink}`} target="_blank">
          <h3 className="font-bold mb-3 text-orange-500">
              
              {title}
          </h3>
        </a>

          <h6 className="text-xs font-light mb-3 text-gray-400"> 
              <i className="text-gray-400">Posted by:</i>
              <span className="font-light normal-case text-teal-400"> <a href={`https://www.reddit.com/user/${author}`} target="_blank">{author}</a></span>
          </h6>
        <a href={`http://www.reddit.com/r/music/?f=flair_name%3A${link_flair_text}`} target="_blank"> 
          <p className="font-light mb-3 text-gray-800">
              <span className="font-normal text-xs normal-case bg-gray-900 text-white p-1 rounded-md">{link_flair_text}</span>
          </p>
        </a> 
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        
          
          <p className="font-light mb-3 text-gray-800 text-sm">
              <span className="font-normal normal-case">{selftext.slice(0,500)}</span>
          </p>
          
          {
            secure_media !== null &&
            <div className="mb-5 h-52 w-96">
              <iframe src={secure_media_embed.media_domain_url} allowfullscreen className="h-14 min-h-full w-36 min-w-full max-w-xl aspect-video"></iframe>
            </div>
          }
          
          
          

          <a href={`http://www.reddit.com${permalink}`} target="_blank">
            <button className="font-light mb-3 text-white bold text-xs p-2 bg-orange-500 rounded-2xl">
              Read more
            </button>
          </a>
        

              
         
          
        
  </div>  
    
  )
}

export default Article



