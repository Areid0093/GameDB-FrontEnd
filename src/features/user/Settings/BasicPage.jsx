import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import { addYears } from 'date-fns'
import TextInput from '../../../app/common/form/TextInput';
import DateInput from "../../../app/common/form/DateInput";
import RadioInput from "../../../app/common/form/RadioInput";
import SelectInput from '../../../app/common/form/SelectInput';

const platform = [
    { key: 'xbox', text: 'Xbox', value: 'xbox' },
    { key: 'playstation', text: 'Playstation', value: 'playstation' },
    { key: 'pc', text: 'PC', value: 'pc' },
    { key: 'nintendo switch', text: 'Nintendo Switch', value: 'nintendo switch' },
  ]

class BasicPage extends Component {

    render() {
        const {pristine, submitting, handleSubmit, updateProfile} = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='Basics' />
                <Form onSubmit={handleSubmit(updateProfile)}>
                    <Field
                        width={8}
                        name='email'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Field
                        width={8}
                        name='platform'
                        placeholder='Favorite Platform'
                        options={platform}
                        // label='Female'
                        component={SelectInput}
                    />
                    <Form.Group inline>
                    <label>Gender:</label>
                      <Field
                        name='gender'
                        type='radio'
                        value='male'
                        label='Male'
                        component={RadioInput}
                        />
                      <Field
                        name='gender'
                        type='radio'
                        value='female'
                        label='Female'
                        component={RadioInput}
                        />
                    </Form.Group>
                    <Field
                        width={8}
                        name='birthday'
                        component={DateInput}
                        placeholder='Date of Birth'
                        showYearDropdown={true}
                        showMonthDropdown={true}
                        dropdownMode='select'
                        maxDate={addYears(new Date(), -18)}
                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                </Form>
            </Segment>
        );
    }
}

export default reduxForm({form: 'userProfile', enableReinitialize: true, initialize: true})(BasicPage);