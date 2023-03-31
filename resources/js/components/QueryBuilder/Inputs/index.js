import SingleNumberInput from './SingleNumberInput'
import DoubleNumberInput from './DoubleNumberInput'

import SingleDateInput from './SingleDateInput'
import DoubleDateInput from './DoubleDateInput'
import RelativeDateInput from './RelativeDateInput'

import OptionInput from './OptionInput'
import TextInput from './TextInput'

export function registerInputComponents(app) {
  app.component('refine-number-input', SingleNumberInput)
  app.component('refine-double-number-input', DoubleNumberInput)

  app.component('refine-date-input', SingleDateInput)
  app.component('refine-double-date-input', DoubleDateInput)
  app.component('refine-relative-date-input', RelativeDateInput)

  app.component('refine-option-input', OptionInput)
  app.component('refine-text-input', TextInput)
}

export {
  DoubleNumberInput,
  OptionInput,
  SingleNumberInput,
  SingleDateInput,
  TextInput,
}
