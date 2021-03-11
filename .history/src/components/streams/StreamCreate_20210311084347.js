import React, { Component } from 'react'
import {Field,formValues,reduxForm} from 'redux-form'

export class StreamCreate extends Component {
  renderInput({input,label,meta}){
    return(
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="false"/>
        <div>{meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues){
    console.log(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label ="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate=(formValues)=>{
  const errors={}
  if(!formValues.title){
    errors.title='You must enter a title'
  }
  if(!formValues.description){
    errors.description='you must enter a description'
  }

  return errors
}

export default reduxForm({
  form:'streamCreate',
  validate:validate
})(StreamCreate)
