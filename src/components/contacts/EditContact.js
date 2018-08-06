import React, { Component } from 'react';
import { Consumer } from '../../context';
import FormInputGroup from '../layout/FormInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/users/${id}`
      );

      const contact = response.data;
      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
    } catch (error) {
      console.log(error);
    }
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === '') {
      this.setState({ errors: { name: 'Name is required.' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required.' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required.' } });
      return;
    }

    const updateContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    try {
      const response = await axios.put(
        `http://jsonplaceholder.typicode.com/users/${id}`,
        updateContact
      );

      dispatch({ type: 'UPDATE_CONTACT', payload: response.data });

      this.setState({
        name: '',
        email: '',
        phone: '',
        errors: {}
      });

      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mp-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <FormInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={this.onInputChange}
                    error={errors.name}
                  />
                  <FormInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={this.onInputChange}
                    error={errors.email}
                  />
                  <FormInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter your phone..."
                    value={phone}
                    onChange={this.onInputChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
