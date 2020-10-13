import React, { Component } from 'react'
import './Desc.css'


class Desc extends Component {
    render() {
        return (
            <div>
                <div><h3>Sentiment Analysis</h3></div>
                {/* <div><h4>Bangla</h4></div> */}
                <div>
                    <p>This is a generic sentiment analysis classifier for texts in English. It works great 
                        in any kind of texts. If you are not sure of which sentiment analysis classifier to 
                        use, use this one.
                    </p>
                </div>
                <div>
                    <label className="desc-label" style={{color:"#2680EB"}}>Strongly Positive</label>
                    <label className="desc-label" style={{color:"#2680EB"}}>Weakly Positive</label>
                    <label className="desc-label" style={{color:"#09C18E"}}>Neutral</label>
                    <label className="desc-label" style={{color:"#F47676"}}>Strongly Negative</label>
                    <label className="desc-label" style={{color:"#F47676"}}>Weakly Negative</label>
                </div>
                <div>
                    <p>This is a generic sentiment analysis classifier for texts in English. It works great 
                        in any kind of texts.
                    </p>
                </div>
                <div>
                    <label className="desc-label" style={{color:"#4626EB"}}>Subjective</label>
                    <label className="desc-label" style={{color:"#36CBE2"}}>Objective</label>
                    <label className="desc-label" style={{color:"#09C18E"}}>Neutral</label>
                </div>
                {/* <div><img src={img} style={imageStyle}/></div> */}
            </div>
        )
    }
}

export default Desc
