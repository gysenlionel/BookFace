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