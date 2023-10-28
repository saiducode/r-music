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
 
    <div id="dropdownBgHover" className="z-10 w-48 bg-hidden rounded-lg shadow dark:bg-orange-700">

        <label for="topics" className="block mb-2 text-sm hidden font-medium text-gray-900 dark:text-white">Sort by</label>
        <select onChange={handleChangeTopic} value={topic} id="topics" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-700 dark:focus:border-orange-500">
            {TOPICS.map(topic => (
                <option 
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
