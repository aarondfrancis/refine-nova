const novaFlavor = {
  emptyGroup: {
    class: 'border rounded-lg shadow border-50 p-2 text-80 bg-white flex items-center justify-between text-sm mb-4',

    wrapper: {
      class: 'border rounded-lg shadow border-50 p-2 text-80 bg-white flex items-center justify-between text-sm mb-4',
    },

    addCriterionButton: {
      class: 'text-sm flex items-center p-2',

      wrapper: {},

      icon: {
        class: 'text-80 h-4 w-4',
      },

      text: {
        class: 'pt-px text-80',
      },
    },
  },

  group: {
    class: 'border rounded-lg shadow border-50',
    wrapper: {
      class: '',
    },

    divider: {
      component: 'custom-group-divider',
      // Dont show the divider on the last iteration
      class: ({ index, total }) => {
        return index === total - 1 ? 'hidden' : 'flex';
      },
    },

    addCriterionButton: {
      wrapper: {
        class: 'text-sm flex items-center p-2',
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
    class: 'text-sm flex items-center p-2 text-80',

    // Use a custom component, because the default is inexplicably bad.
    component: 'custom-or-button',
  },

  condition: {
    class: 'first:rounded-t-lg bg-white w-full',
  },

  criterion: {
    wrapper: {
      order: ['errors', 'selector', 'remove'],
      class: 'flex border-b border-50 py-3 pl-2 ',
    },
    removeCriterionButton: {
      class: 'ml-auto py-2 px-4 flex items-center text-60',
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
      class: ({ isClosed }) => {
        return isClosed ? 'hidden' : 'max-h-60 shadow list-reset border border-50 rounded-lg overflow-auto';
      },

      wrapper: {
        class: 'absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg',
      },

      item: {
        class: ({ isHighlighted }) => {
          return `py-2 pr-8 pl-3 relative cursor-pointer select-none ${isHighlighted ? 'bg-primary text-white' : ''}`;
        },

        text: {
          class: (options) => `block truncate ${options.selected ? 'font-semibold' : 'font-normal'}`,
        },

        icon: {
          class: 'w-5 h-5',
          wrapper: {
            class: (options) =>
              `absolute pin-t pin-b pin-r flex items-center pr-4 ${
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
        class: 'form-control form-select w-full text-left flex items-center overflow-x-auto',

        placeholder: {
          class: 'block text-gray-300 truncate select-none',
        },

        selected: {
          class: 'inline-flex mr-1 rounded border border-50 p-1 text-sm',
        },

        icon: {
          class: 'hidden',
          wrapper: {
            class: 'hidden',
          },
        },

        deselect: {
          icon: {
            class: 'w-4 h-4',

            wrapper: {
              class: 'flex items-center ml-1 text-gray-500 cursor-pointer',
            },
          },
        },
      },
    },
  },

  inputs: {
    date: {
      relative: {
        class: `form-control form-input form-input-bordered mr-4`,

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
      class: 'form-control form-input form-input-bordered',

      double: {
        wrapper: {
          class: 'flex items-center gap-[1ch]',
        },

        joiner: {
          class: 'ml-2 mr-2',
        },
      },
    },

    text: {
      class: 'form-control form-input form-input-bordered',
    },
  },
};

export default novaFlavor;
