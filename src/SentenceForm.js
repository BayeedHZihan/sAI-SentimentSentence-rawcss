import React, { Component } from 'react'
import './SenFormStyle.css'

class SentenceForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputText : "",
            visualHighlightText : "This is a DEMO highlighted text.This is a DEMO highlighted text.This is a DEMO highlighted text."
        }
        this.handleClassifyClick = this.handleClassifyClick.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }
    handleClassifyClick(){
        const inp = this.state.inputText
        const inputTextJsonString = `{"inputText": "${inp}"}`
        const inputTextJsonObj = JSON.parse(inputTextJsonString);
        console.log(inputTextJsonObj)
    }
    handleUserInput(e){
        this.setState({
            inputText : e.target.value
        })
    }
    render() {
        return (
            <div className="container-1">
                <div className="box-1">
                    <h3>Sentence level sentiment analysis</h3>
                    <textarea 
                        style={{backgroundColor:"#EDF2FE", paddingTop:"10px", paddingLeft:"10px"}}
                        placeholder="Write your own text"
                        rows="15" 
                        cols="50" 
                        name="sentenceInput" 
                        type="text"
                        onChange={this.handleUserInput} 
                        value={this.state.inputText}>
                    </textarea>
                    <br/>
                    <button className="button" onClick={this.handleClassifyClick}>Classify</button>
                </div>
                {/* <br/> <br/><br/> */}
                <div className="box-2">
                    <div className="result-box">
                        <div className="class-score-labels">
                            <label style={{fontSize:"14px", fontWeight:"bold", opacity:".5", fontFamily: 'Roboto'}}>Class</label> <br/><br/>
                            <label style={{fontSize:"14px", fontWeight:"bold", opacity:".5", fontFamily: 'Roboto'}}>Score</label>
                        </div>
                        <div>
                            <h4>Subjectivity</h4>
                            <select style={{borderRadius:"8px"}}>
                                <option value="" selected style={{display:"none"}}>Select</option>
                                <option>Subjective</option>
                                <option>Objective</option>
                            </select>
                            <br/><br/>
                            <label className="score-circles">00.00</label>
                        </div>
                        <div>
                            <h4>Polarity</h4>
                            <select  style={{borderRadius:"8px"}}>
                                <option value="" selected style={{display:"none"}}>Select</option>
                                <option>Strongly Positive</option>
                                <option>Weakly Positive</option>
                                <option>Neutral</option>
                                <option>Strongly Negative</option>
                                <option>Weakly Negative</option>
                            </select>
                            <br/><br/>
                            <label className="score-circles">00.00</label>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="vis-box">
                        <h4>Visualization</h4>
                        <div style={{fontSize:"12px", fontFamily: 'Roboto'}}>
                            {this.state.visualHighlightText}
                        </div>
                        <br/>
                        <button className="button" style={{marginRight: 20}}>Feedback</button> 
                        <button className="button">Comparison</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SentenceForm
