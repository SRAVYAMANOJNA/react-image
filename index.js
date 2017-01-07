import React from 'react'
import ReactDOM from 'react-dom'

class Image extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			sourceURL: props.sourceurl,
			alternateURL: props.alternateurl,
			alternateText: props.alternateText,
		}
	}
	componentDidMount(){

	}
	onImageNotFound(){
		var alternateURL = this.state.alternateURL;
		this.setState({sourceURL: alternateURL})
	}
	render(){
		return(
			<img src={this.state.sourceURL} alt={this.state.alternateText} onError={this.onImageNotFound.bind(this)} />
		)
	}
}

export default Image