import React from 'react'
import firebase from './firebase'

class Login extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      <div className='justify-center items-center w-2/4 border-2 m-auto rounded shadow-lg mt-10 p-10 py-20 bg-slate-100'>
        <h2 className='text-center mb-5 text-2xl ' >Login Form</h2>
        <form onSubmit={this.onSignInSubmit} className='flex flex-col w-2/4 m-auto gap-4'>
          <div id="sign-in-button"></div>
          <input className='border-2 shadow-inner outline-none rounded p-2 border-gray-900' type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button className="border-2 bg-blue-600 hover:bg-blue-900 text-white px-4 rounded shadow-lg py-2" type="submit">Generate OTP</button>
        </form>

        <h2 className='text-center mb-5 text-2xl mt-5'>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP} className='flex flex-col w-2/4 m-auto gap-4'>
          <input className='border-2 rounded  shadow-inner outline-none p-2 border-gray-900' type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button className="border-2 bg-blue-600 hover:bg-blue-900 text-white px-4 rounded shadow-lg py-2" type="submit">Let me In!</button>
        </form>
      </div>
    )
  }
}
export default Login
