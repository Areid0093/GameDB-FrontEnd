import React from 'react'
import { connect } from 'react-redux'
import { Form, Segment, Button, Label } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../app/common/form/TextInput'
import { registerUser } from '../authActions'

const actions = {
  registerUser
}

const RegisterForm = ({ handleSubmit, registerUser , error}) => {
  return (
    <div>
      <Form size='large' onSubmit={handleSubmit(registerUser)}>
        <Segment>
          {/* <Field
            name='displayName'
            type='text'
            component={TextInput}
            placeholder='Username'
          /> */}
          <Field
            name='email'
            type='text'
            component={TextInput}
            placeholder='Email'
          />
          <Field
            name='password'
            type='password'
            component={TextInput}
            placeholder='Password'
          />
          {error && (
            <Label basic color='red'>
              {error}
            </Label>
          )}
          <Button fluid size='large' color='teal'>
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  )
}

export default connect(
  null,
  actions
)(reduxForm({ form: 'registerForm' })(RegisterForm))
