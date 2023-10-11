import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className = "my-3 " >
                <div className="card p-3 mb-2 bg-dark text-white" style={{width : "18rem",border:"4px solid blue"}}>
                    <img style = {{width:250,height:180}} src={!imageUrl?"https://www.aljazeera.com/wp-content/uploads/2023/09/AP22091515129850-1695586657.jpg?resize=1920%2C1440":imageUrl} className="card-img-top" alt="/"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-outline-light">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
