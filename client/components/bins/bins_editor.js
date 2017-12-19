import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
	onEditorChange(content) {
		Meteor.call('bins.update', this.props.bin, content);
	}

	render() {
		return(
			<div className="col-xs-6">
				<h1>Input</h1>
				<CodeMirror
				value={this.props.bin.content} 
				onChange={this.onEditorChange.bind(this)}
				options={{ mode: 'markdown', lineNumbers: true}} />
			</div> 
		);
	}
}

export default BinsEditor;