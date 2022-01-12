module.exports.signUpErrors = (err) => {
    let errors = {pseudo: '', firstname: '', name: '', email:'', password: ''}


    if (err.message.includes('pseudo'))
        errors.pseudo = "The pseudo is incorrect"
    
    if (err.message.includes('email'))
        errors.email = "The email is incorrect"

    if (err.message.includes('password'))
        errors.password = "The password must at least have 6 characters"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "This email is already registered"
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "This pseudo is already taken"

    return errors
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}
  
    if (err.message.includes("email")) 
      errors.email = "This email is unknown";
    
    if (err.message.includes('password'))
      errors.password = "Wrong password"
  
    return errors;
  }

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: ''}
    
    if(err.message.include('invalid file'))
        errors.format = 'The format of the picture is not valid'

    if(err.message.include('max size'))
        errors.maxSize = 'The size of the picture is over 500ko'
    
    return errors
}