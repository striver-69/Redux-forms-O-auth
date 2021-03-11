import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'

export class StreamCreate extends Component {
  renderInput(formProps){
    return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput}/>
        <Field name="description" component={this.renderInput}/>
      </form>
    )
  }
}

export default reduxForm({
  form:'streamCreate'
})(StreamCreate)
