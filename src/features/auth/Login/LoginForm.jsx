import React from 'react'
import { Form, Segment, Button, Label } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../app/common/form/TextInput'
import { connect } from 'react-redux'
import { loginUser } from '../authActions'

const actions = {
  loginUser
}

const LoginForm = ({ handleSubmit, error, loginUser }) => {
  return (
    <Form size='large' onSubmit={handleSubmit(loginUser)} autoComplete='off'>
      <Segment>
        <Field
          name='email'
          component={TextInput}
          type='text'
          placeholder='Email Address'
        />
        <Field
          name='password'
          component={TextInput}
          type='password'
          placeholder='password'
        />
        {error && 
          <Label basic color='red'>
            {error}
          </Label>
        }
        <Button fluid size='large' color='teal'>
          Login
        </Button>
      </Segment>
    </Form>
  )
}

export default connect(
  null,
  actions
)(reduxForm({ form: 'loginForm' })(LoginForm))
