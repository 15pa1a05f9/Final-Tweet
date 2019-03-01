import React, { Component } from 'react';
import twitter from "./twitter.png"

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        if((event.keyCode === 13)||(event.target.value==="Submit")){
      document.getElementById('out').innerText+=this.state.value;
      document.getElementById('out').innerText+="\n";
        }
       
      }
     
  render() {
    return (
      <div className="TextArea" >
      <img src={twitter} alt="twitterlogo" Style="height:5%; width:5%; "/><br></br>
      <br></br><input value={this.state.value} onKeyDown={this.handleSubmit} onChange={this.handleChange} fullWidth={true}/>
        <input type="submit" value="Submit"  onClick={this.handleSubmit}/>
      <p id="out"></p>
      <p>Tweets will be displayed here</p>
  
      </div>
    );
  }
}

export default Textarea;
