import React, { Component } from 'react'
import './SidebarStyle.css'

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.handleDdSentiClick = this.handleDdSentiClick.bind(this)
        this.handleDdEmoClick = this.handleDdEmoClick.bind(this)
    }
    handleDdSentiClick(){
        document.getElementById("myDropdown1").classList.toggle("show");
    }
    handleDdEmoClick(){
        document.getElementById("myDropdown2").classList.toggle("show");
    }
    render() {
        return (
            <div>
                <div className="sidenav">
                    <div style={{color:"#ffffff", fontSize:"18px", textAlign:"center"}}>senti <strong>AI</strong></div>
                    <br/><br/><br/><br/><br/><br/>
                    <button className="dropdown-btn" onClick={this.handleDdSentiClick}>Sentiment Analysis
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div id="myDropdown1" className="dropdown-container">
                        <a href="#">Sentences</a>
                        <a href="#">Paragraph/Document</a>
                        <a href="#">Domain/Link</a>
                    </div>
                    <br/>
                    <button className="dropdown-btn" onClick={this.handleDdEmoClick}>Emotion Analysis
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div id="myDropdown2" className="dropdown-container">
                        <a href="#">Sentences</a>
                        <a href="#">Paragraph/Document</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
