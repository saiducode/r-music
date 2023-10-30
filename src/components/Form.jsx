import React from 'react'
import useArticles from '../hooks/useArticles'


const TOPICS = [
    { value: 'music', label: 'All'},
    { value: 'music/new', label: 'New'},
    { value: 'music/hot', label: 'Hot'},
    { value: 'music/top', label: 'Top'},
    { value: 'music/rising', label: 'Rising'}
]

const Form = () => {

    const { topic, handleChangeTopic } = useArticles()

  return (
   <> 
 
    <div id="dropdownBgHover" className="  sm:w-52 z-10 lg:w-36 mx-5 my-10 bg-hidden rounded-lg dark:bg-orange-500">

        <label htmlFor="topics" className="block mb-2 mt-10 border-orange-500 text-sm font-medium text-gray-700 dark:text-white">Sort by</label>
        <select onChange={handleChangeTopic} value={topic} id="topics" className="bg-white border border-gray-300 text-black bold text-sm rounded-lg focus:ring-orange-500 focus:border-orange-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ring-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500 bg-white">
            {TOPICS.map(topic => (
                <option 
                    className="bg-white"
                    key={topic.value}
                    value={topic.value} 
                >
                    {topic.label}
                </option>
            ))}
                 
        </select>
    </div>


  
    
    </>
  )
}

export default Form
