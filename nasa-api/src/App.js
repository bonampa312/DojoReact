import React , {Component} from 'react'
import axios from 'axios'

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlVideo: '',
      urlPhoto: '',
      title: '',
      explanation: '',
      date: ''
    }
    this.getNASAData = this.getNASAData.bind(this)
  }

  getNASAData(){
    var self = this
    axios.get(apiUrl)
    .then(function (response) {
      console.log(response);
      self.setState({title: response.data.title})
      self.setState({date: response.data.date})
      self.setState({explanation: response.data.explanation})
      if (response.data.mediaType === 'video') {
        self.setState({urlVideo: response.data.url})
        self.setState({urlPhoto: ''})
      } else {
        self.setState({urlVideo: ''})
        self.setState({urlPhoto: response.data.url})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    // this.setStatus({title: gotData.title})
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <br/>
        <label>{this.state.date}</label>
        <br/>
        <img src={this.state.urlPhoto}/>
        <iframe src={this.state.urlVideo}/>
        <br/>
        <a>{this.state.explanation}</a>
        <br/>
        <br/>
        <button onClick={this.getNASAData}>Refresh</button>
      </div>
    )
  }
}

export default App
