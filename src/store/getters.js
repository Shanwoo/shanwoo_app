let getters = {
  lastetsCoporators (state) {
    let lastetsCoporators = state.partners.slice(0, 3)
    // for (var i = 0; i < 3; i++) {
    //   lastetsCoporators.push(
    //     state.partners[i]
    //   )
    // }
    return lastetsCoporators
  }
}

export default getters
