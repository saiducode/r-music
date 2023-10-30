import { useState, useEffect, createContext } from 'react';
import axios from 'axios'    
const ArticlesContext = createContext();

const ArticlesProvider = ({children}) => {
    const [topic, setTopic] = useState('music')
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        const callAPI = async () => {
            const url = `https://www.reddit.com/r/${topic}.json`

            const {data} = await axios(url)
            
            setArticles(data.data.children)
            
            
        }
        callAPI()
    }, [topic])


    const handleChangeTopic = e => {
        setTopic(e.target.value)
    }


    return(
        <ArticlesContext.Provider
            value={{
                topic,
                handleChangeTopic,
                articles
                
            }}
        >
         {children}
        </ArticlesContext.Provider>

    )
}

export { ArticlesProvider }
export default ArticlesContext
