import toaster from "toasted-notes";
import "toasted-notes/src/styles.css"; 
import passwordValidator from 'password-validator'

var schema = new passwordValidator()

schema.has().uppercase().has().lowercase(); 

const stringValidate = (string, name) =>
  !string.length ? `${name} field is required` : null
  
const numberValidate = (num, name) =>
  typeof num !== 'number' ? `${name} field is required` : null

export default class Validator {
  constructor(data) {
    this.data = data
  }
  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  fullName = (value) => stringValidate(value, 'Name')
  emailAddress = function (value) {
    if (!value.length) return 'Email field is required'
    if (value && !this.emailRegex.test(value))
      return 'Please enter a valid email address'
  }
  password = (value) => schema.validate(value) ? null : 'Password must contain upper case and lower case'
  confirmPassword = function (value) {
    if (!value.length) return 'Password Confirmation field is required'
    if (this.data.password && value && this.data.password !== value)
      return 'Passwords do not match'
  }
  summary = (value) =>
    value.length < 100 ? 'Profile summary must be more than 100 letters' : null
  termsOfService = (value) => (!value ? 'Terms of Service not checked' : null)
  title = (value) => stringValidate(value, 'Title')
  gender_id = (value) =>
    [1, 2].includes(value) ? null : 'Gender field not selected'
  country_id = (value) => numberValidate(value, 'Country')
  city_id = (value) => numberValidate(value, 'City')

  alerts = []
  validate = () => {
    const alerts = []
    Object.keys(this.data).forEach((field) => {
      if (this[field]) {
        let response = this[field](this.data[field])
        if (response) alerts.push(response)
      }
    })
    alerts.forEach((error) => toaster.notify(error, {
      duration: null,
      position: "bottom",
    }))
    if (alerts.length > 0) return false
    return true
  }
}
