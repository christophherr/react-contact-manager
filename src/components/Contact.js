import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onKeyToggle = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.setState({ showContactInfo: !this.state.showContactInfo });
    }
  };

  onClickToggle = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onClickDelete = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <div className="card-title">
          <h4>{name}</h4>
          <button
            onClick={this.onClickToggle}
            onKeyPress={this.onKeyToggle}
            className="btn btn-primary ml-3"
            aria-expanded={showContactInfo}
            aria-pressed={showContactInfo}
          >
            <span
              className={
                showContactInfo
                  ? 'fas fa-sort-up mr-2'
                  : 'fas fa-sort-down mr-2'
              }
            />
            {showContactInfo ? 'Hide Details' : 'Show Details'}
          </button>
          <button
            className="btn btn-danger ml-auto"
            onClick={this.onClickDelete}
          >
            <span className="fas fa-times mr-2" />
            Delete Contact
          </button>
        </div>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
