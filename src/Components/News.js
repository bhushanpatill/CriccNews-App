import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    console.log("hellow")
    this.state = {
      articles: [],
      loading: false,
    }
}

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8a2f63886af545aab5d57a8cc0ff88a7&q=cricket";
    let data = await fetch(url)
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({ articles : parsedData.articles })
  }

  render() {
    return (
      <div className = "container my-2">
        <h1>Cricket Related Latest-Headlines</h1>
        <div className = "row">
        {this.state.articles && this.state.articles.map((element)=> {
            return <div className = "col-md-3" key = {element.url}>
            <NewsItem title = {element.title?element.title.slice(0,80):""} description = {element.description?element.description.slice(0,100):""} imageUrl = {element.urlToImage} newsUrl={element.url}/>
        </div>
      })}  
      </div>
      </div>
    )
  }
}

export default News
