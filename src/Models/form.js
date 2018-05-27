const inputState = {
  value: '',
  priority: 0
};

const updateValue = (inputArray, value, len) => {
    return inputArray.map((input, i) => {
        if(len === i) {
          return {
            ...input,
            value: value
          }
        }
        return input
    })
}

const updatePriorityValue = (inputArray, value, len) => {
    return inputArray.map((input, i) => {
        if(len === i) {
          return {
            ...input,
            priority: input.priority + value
          }
        }
        return input
    })
}

export const form = {
  state: {
    segments: 3,
    wheel: {
      status: false
    },
    inputs: Array(3).fill(inputState, 0, 3)
  }, 
  reducers: {
    increment(state, payload) {
      return { 
        ...state,
        inputs: [
          ...state.inputs, 
          inputState
        ]
      }
    },
    updateInput(state, payload) {
      return {
        ...state,
        inputs: updateValue(state.inputs, payload.value, payload.segmentNo)
      }
    },
    updatePriority(state, payload) {
      return {
        ...state,
        inputs: updatePriorityValue(state.inputs, payload.priority, payload.segmentNo)
      }
    },
    formSubmit(state) {
      return {
        ...state,
        wheel: {
          status: true
        }
      }
    }
  }
}