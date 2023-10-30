import './App.css'
import Header from './components/Header'
import ListArticles from './components/ListArticles'
import Form from './components/Form'
import {ArticlesProvider}  from './context/ArticlesProvider'

function App() {
 
  return (
    <ArticlesProvider>
      
      <Header/>
      <Form  />
      <ListArticles />
      
      
    </ArticlesProvider>
  )
}

export default App
