export default {
  general: {
    DB_CONNECTION: 'An error occurred while connecting to the database.'
  },
  user: {
    MISSING_INFO: 'Insufficient information provided.',
    INCORRECT_LOGIN: 'Incorrect email address or password.',
    INVALID_ID: 'Invalid ID provided.',
    INVALID_EMAIL: 'Invalid email address provided.',
    INVALID_PASSWORD: 'Password must be at least 8 characters.',
    INVALID_ATTRIBUTES: 'One or more provided attributes are invalid.',
    UNAVAILABLE_EMAIL: 'Email address is unavailable.',
    ADMIN_ONLY: 'Only admin can access this content'
  },
  token: {
    DOESNT_EXIST: 'No users are currently signed in.',
    IS_INVALID: 'The provided token is invalid.',
    DELETED_USER: 'The desired user no longer exists.'
  },
  company: {
    UNAVAILABLE_COMPANY: 'No company is found with this id.',
    INVALID_ATTRIBUTES: 'One or more provided attributes are invalid.'
  }
}
