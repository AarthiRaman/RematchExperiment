import { init } from '@rematch/core'
import * as models from './Models/form';

const store = init({
  models,
})

export default store