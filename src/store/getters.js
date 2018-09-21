let getters = {
  lastetsCoporators (state) {
    let lastetsCoporators = []
    for (var i = 0; i < 3; i++) {
      lastetsCoporators.push(
        state.partners[i]
      )
    }
    return lastetsCoporators
  }
}

export default getters
