//estructura promise
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey!')
    } else {
      reject('Oops!')
    }
  })
}
somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err))


  somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
      if(true) {
        setTimeout(() => {
          resolve('Hey true!')
        }, 2000)
      } else {
        const error = new Error('Ooops!')
        reject(error)
      }
    })
  }
somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err))


//ejecuta varias promesas a la vez en un array
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response)
  })
  .catch(err => {
    console.error(err)
  })