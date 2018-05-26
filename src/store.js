import { init } from '@rematch/core'
import * as models from './Models/count'

const store = init({
  models,
})

export default store