const inputBase = 'bg-gray-100 relative text-left cursor-default'
const inputFocus = 'focus:outline-none'
const inputSizing = 'pl-3 py-1'
const inputClassName = `${inputBase} ${inputFocus} ${inputSizing}`

const linearFlavor = {
  emptyGroup: {
    component: 'linear-empty-group',
  },

  group: {
    class: 'flex flex-wrap items-center gap-y-2',
    wrapper: {
      class: '',
    },

    addCriterionButton: {
      wrapper: {},
      class: 'flex items-center p-1 hover:bg-gray-100 rounded',
      icon: 'h-4 w-4 text-gray-400',
      text: 'hidden',
    },
  },

  addGroupButton: {
    class: 'hidden',
  },

  criterion: {
    wrapper: {
      component: 'linear-criterion-row',
    },
    removeCriterionButton: {
      class:
        'ml-2 border-l px-2 hover:text-red-700 text-gray-400 flex items-center justify-center',
      icon: 'h-4 w-4',
    },
    errors: {
      class: 'hidden',
      error: 'hidden',
    },
  },

  select: {
    class: 'relative sm:inline-block',
    wrapper: 'flex items-start',
    // customOptions: {
    //   class: '',
    //   wrapper: {
    //     class: 'w-auto pt-4 md:flex md:pt-0',
    //   },
    // },
    listbox: {
      class: options => {
        return options.isClosed
          ? 'hidden'
          : 'focus:outline-none max-h-60 shadow list-reset rounded overflow-auto'
      },

      wrapper: 'absolute max-w-48 z-10 mt-1 bg-white rounded-md shadow-lg',

      item: {
        class: options => {
          return `relative py-1 border-b border-gray-100 pl-3 cursor-pointer select-none pr-9 ${
            options.isHighlighted ? 'text-white bg-blue-600' : 'text-gray-900'
          }`
        },

        text: options =>
          `block truncate ${
            options.selected ? 'font-semibold' : 'font-normal'
          }`,

        icon: {
          class: 'w-5 h-5',
          wrapper: options =>
            `absolute inset-y-0 right-0 flex items-center pr-4 ${
              !options.isHighlighted ? 'text-blue-600' : 'text-white'
            }`,
        },
      },
    },

    button: {
      class:
        'relative w-full py-1 px-2 text-left cursor-pointer focus:outline-none',

      placeholder: 'block text-gray-300 truncate select-none',

      selected: 'block truncate',

      icon: {
        class: 'w-5 h-5 text-gray-300',
        wrapper:
          'hidden absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
      },
    },

    multi: {
      button: {
        class:
          'relative w-full py-1 pl-3 pr-10 text-left bg-white cursor-default focus:outline-none',

        placeholder: 'block text-gray-300 truncate select-none',

        selected: 'inline-flex mr-2 ',

        deselect: {
          icon: {
            class: 'hidden w-4 h-4',

            wrapper:
              'hidden flex items-center ml-1 text-gray-300 cursor-pointer',
          },
        },

        icon: {
          class: 'w-5 h-5 text-gray-300',

          wrapper:
            'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
        },
      },
    },
  },

  inputs: {
    date: {
      class: `${inputBase} ${inputFocus} pl-1 mt-1 border-b w-32`,
      relative: {
        class: `${inputClassName} w-12`,

        wrapper: 'flex mr-4',
      },

      double: {
        wrapper: 'flex items-center gap-[1ch]',
        joiner: {},
      },
    },

    number: {
      class: `${inputClassName} w-14`,

      double: {
        wrapper: 'flex items-center gap-[1ch]',
        joiner: {},
      },
    },

    text: `${inputBase} ${inputFocus} pl-1 mt-1 border-b w-24`,
  },
}

export default linearFlavor
