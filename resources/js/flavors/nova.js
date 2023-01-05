const inputBase =
  'bg-white relative border border-gray-300 rounded-md shadow-sm text-left cursor-default';
const inputFocus = 'focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500';
const inputSizing = 'w-60 pl-3 py-2';

const inputClassName = `${inputBase} ${inputFocus} ${inputSizing}`;

const novaFlavor = {
  emptyGroup: {
    class: '',

    wrapper: {
      class: '',
    },

    addCriterionButton: {
      class: '',

      wrapper: {},

      icon: {
        class: 'h-4 w-4',
      },

      text: {},
    },
  },

  group: {
    class: 'border rounded-lg shadow border-50 overflow-hidden',
    wrapper: {
      class: '',
    },

    addCriterionButton: {
      wrapper: {
        class:'text-sm flex items-center p-2'
      },

      class: 'text-80 flex items-center',

      icon: {
        class: 'h-4 w-4 -mt-px',
      },

      text: {
        class: 'mt-px',
      },
    },
  },

  addGroupButton: {
    class: '',
  },

  criterion: {
    wrapper: {
      order: ['errors', 'selector', 'remove'],
      class: 'flex border-b border-50 py-3 pl-2 bg-white w-full',
    },
    removeCriterionButton: {
      class:
        'ml-auto py-2 px-4 flex items-center text-60',
      icon: {
        class: 'h-5 w-5',
      },
    },
    errors: {
      class:
        'flex-1 basis-full bg-red-50 border-l-2 border-red-600 text-red-300 px-4 py-2 rounded list-disc list-inside',
      error: {
        class: 'text-red-600 font-semibold',
      },
    },
  },

  select: {
    class: 'relative sm:inline-block w-48 mr-4',
    wrapper: {
      class: 'flex items-start gap-4',
    },
    customOptions: {
      class: '',
      wrapper: {
        class: 'w-auto pt-4 md:flex md:pt-0',
      },
    },
    listbox: {
      class: (options) => {
        return options.isClosed
          ? 'refine-selector-listbox-hidden'
          : 'refine-selector-listbox shadow list-reset border border-50 rounded-lg';
      },

      wrapper: {
        class: 'absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg',
      },

      item: {
        class: (options) => {
          return `refine-selector-list-item ${options.isHighlighted ? 'bg-primary text-white' : ''}`;
        },

        text: {
          class: (options) =>
            `block truncate ${options.selected ? 'font-semibold' : 'font-normal'}`,
        },

        icon: {
          class: 'w-5 h-5',
          wrapper: {
            class: (options) =>
              `absolute inset-y-0 right-0 flex items-center pr-4 ${
                !options.isHighlighted ? 'text-blue-600' : 'text-white'
              }`,
          },
        },
      },
    },

    button: {
      class: 'form-control form-select w-full text-left',

      placeholder: {
        class: 'block text-gray-300 truncate select-none',
      },

      selected: {
        class: 'block truncate',
      },

      icon: {
        class: 'hidden',
        wrapper: {
          class: 'hidden',
        },
      },
    },

    multi: {
      button: {
        class:
          'relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',

        placeholder: {
          class: 'block text-gray-300 truncate select-none',
        },

        selected: {
          class: 'inline-flex p-1 mr-1 border border-gray-300 rounded',
        },

        deselect: {
          icon: {
            class: 'w-4 h-4',

            wrapper: {
              class: 'flex items-center ml-1 text-gray-500 cursor-pointer',
            },
          },
        },

        icon: {
          class: 'w-5 h-5 text-gray-400',

          wrapper: {
            class: 'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
          },
        },
      },
    },
  },

  inputs: {
    date: {
      pickerInput: {
        class: `${inputBase} ${inputFocus} block w-full pl-3 py-2 pr-0`,
      },
      relative: {
        class: `${inputClassName} mr-4`,

        wrapper: {
          class: 'flex mr-4',
        },
      },

      double: {
        wrapper: {
          class: 'flex items-center gap-[1ch]',
        },

        joiner: {},
      },
    },

    number: {
      class: inputClassName,

      double: {
        wrapper: {
          class: 'flex items-center gap-[1ch]',
        },

        joiner: {},
      },
    },

    text: {
      class: 'form-control form-input form-input-bordered',
    },
  },
};

export default novaFlavor;
