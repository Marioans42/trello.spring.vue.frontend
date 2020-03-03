export default {
  register(detail) {
    return new Promise((resolve,reject) => {
      detail.emailAddress === 'mario@local' ? resolve({ result : 'success'}) : reject(new Error('User already exist'))
    })
  }
}
