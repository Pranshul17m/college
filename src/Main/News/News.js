import React, { Component } from 'react'
const hed = {
    backgroundColor: "#a941c9",
    margin: "auto",
    padding: "16px 32px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
    color: "white",
    fontFamily: "McLaren",
    fontWeight: "200",
    fontSize: "30px"

}
const box = {
    width: "360px",
    // height: "160px",
    padding: "20px",
    border: "2px solid #c9c9c9",
    display: "inline-block",
    justifyContent: "space-between",
    margin: "10px",
    // marLeft:"10px",
    // marginRight:"10px",
    alignItems: "center",

}
class News extends Component {

    state = {
        articles: [],
        url: "",
        
    }

    gotoPageHandler(items) {
        window.open(items.url, "_blank")
    }
    async componentDidMount () {
        await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=24fcc76552af4e71836f61091444eae3")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ articles: data.articles })
                console.log(data);
            });

    }
    render() {
        console.log("Running news API")
        return (
            <div className="news">
                <h2 style={hed}>Top 10 Headlines from BBC News</h2>
                { this.state.articles.map((items, index) => {
                    return (<div style={box}
                        onClick={this.gotoPageHandler.bind(this, items)}>

                        <p style={{ fontSize: "22px" }} >{items.title}</p>

                    </div>
                    );
                })}
            </div>
        )
    }
}
export default News;