import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'

export class StreamCreate extends Component {
  renderInput({input,label}){
    return(
      <div className="field">
        <label>{label}</label>
        <input {...input}/>
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label ="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
      </form>
    )
  }
}

export default reduxForm({
  form:'streamCreate'
})(StreamCreate)
