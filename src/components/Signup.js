import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateField, toggleField } from '../actions/signup_form';

import '../styles/components/Signup.scss';
import '../styles/components/Button.scss';

class Signup extends Component {

  render() {
    return (
      <div className="container Signup">
        <div className="inner">
          <div className="title">
            Stay in the know about MAGIC DRUG® (generic dose) 0.6mg
          </div>
          <div className="details">
            Sign up now to be the first to know when MAGIC DRUG is available.
          </div>
          <div className="notice">
            All fields required.
          </div>
          <form className="form">
            <label htmlFor="Name">Name:</label>
            <input type="text" name="Name" value={this.props.signup_form.name} placeholder="Enter Name" 
              onChange={(e) => {this.props.onUpdateField('name', e)}}
            />
  
            <label htmlFor="Name">Email:</label>
            <input type="email" name="Email" value={this.props.signup_form.email} placeholder="Enter Email" 
              onChange={(e) => {this.props.onUpdateField('email', e)}}
            />
  
            <div>
              {"I am a: "}
              <label>
                <input type="radio" name="Patient" value="patient" checked={this.props.signup_form.member_type === "patient"}
                  onChange={(e) => {this.props.onUpdateField('member_type', e)}}/>
                Patient
              </label>

              <label>
                <input type="radio" name="Doctor" value="doctor" checked={this.props.signup_form.member_type === "doctor"}
                  onChange={(e) => {this.props.onUpdateField('member_type', e)}}
                />
                Doctor
              </label>
            </div>
  
            <label htmlFor="Name">Mailing Address:</label>
            <input type="text" name="Address" value={this.props.signup_form.address} placeholder="Enter Address" 
              onChange={(e) => {this.props.onUpdateField('address', e)}}
            />
  
            <label htmlFor="Name">Phone Number (optional):</label>
            <input type="text" name="Phone" value={this.props.signup_form.phone} placeholder="(___)-___-____" 
              onChange={(e) => {this.props.onUpdateField('phone', e)}}
            />

            <div className="receive-updates">
              <input type="checkbox" name="ReceiveUpdates" value={this.props.signup_form.receive_updates} checked={this.props.signup_form.receive_updates}
                onChange={() => {this.props.onToggleField('receive_updates')}}
              />
              Yes, I want to receive email updates.
            </div>

            <div className="button">Submit</div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signup_form: state.signup_form
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateField: (field, element) => {
      dispatch(updateField(field, element.target.value));
    },
    onToggleField: (field) => {
      dispatch(toggleField(field));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);