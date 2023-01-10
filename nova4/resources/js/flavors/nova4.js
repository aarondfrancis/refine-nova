const novaFlavor = {
    emptyGroup: {
        class: 'rounded-lg shadow p-2 text-gray-400 bg-white flex items-center justify-between text-sm mb-4 dark:bg-gray-800',

        wrapper: {
            class: 'border rounded-lg shadow border-50 p-2 text-gray-400 bg-white flex items-center justify-between text-sm mb-4',
        },

        addCriterionButton: {
            class: 'text-sm flex items-center p-2',

            wrapper: {},

            icon: {
                class: 'text-gray-400 h-4 w-4',
            },

            text: {
                class: 'pt-px text-gray-400',
            },
        },
    },

    group: {
        class: 'rounded-lg shadow',
        wrapper: {
            class: '',
        },

        divider: {
            component: 'custom-group-divider',
            // Dont show the divider on the last iteration
            class: ({index, total}) => {
                return index === total - 1 ? 'hidden' : 'flex';
            },
        },

        addCriterionButton: {
            wrapper: {
                class: 'flex items-center p-2 dark:bg-gray-800 rounded-b-lg',
            },

            class: 'text-gray-400 flex items-center',

            icon: {
                class: 'h-4 w-4 -mt-px',
            },

            text: {
                class: 'mt-px  text-xs font-bold',
            },
        },
    },

    addGroupButton: {
        class: 'text-sm flex items-center p-2 text-gray-400',

        // Use a custom component, because the default is inexplicably bad.
        component: 'custom-or-button',
    },

    condition: {
        class: 'first:rounded-t-lg bg-white dark:bg-gray-800 w-full',
    },

    criterion: {
        wrapper: {
            order: ['selector', 'remove', 'errors'],
            class: 'flex flex-wrap border-b border-gray-100 dark:border-gray-700 py-3 pl-2',
        },
        removeCriterionButton: {
            class: 'ml-auto py-2 px-4 flex items-center text-gray-300 hover:text-gray-500 dark:hover:text-white',
            icon: {
                class: 'h-5 w-5',
            },
        },
        errors: {
            class:
                'w-full list-none help-text mt-2 help-text-error',
            error: {
                class: '',
            },
        },
    },

    select: {
        class: 'relative sm:inline-block w-48 mr-4',

        wrapper: {
            class: 'flex items-start',
        },

        customOptions: {
            class: '',
            wrapper: {
                class: 'w-auto pt-4 md:flex md:pt-0',
            },
        },

        listbox: {
            class: ({isClosed}) => {
                return isClosed ? 'hidden' : 'focus:outline-none max-h-60 shadow list-reset rounded overflow-auto';
            },

            wrapper: {
                class: 'absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded shadow-lg',
            },

            item: {
                class: ({isHighlighted}) => {
                    return `py-2 pr-8 pl-3 relative cursor-pointer select-none ${isHighlighted ? 'bg-primary-600 text-white' : ''}`;
                },

                text: {
                    class: (options) => `block truncate ${options.selected ? 'font-semibold' : 'font-normal'}`,
                },

                icon: {
                    class: 'w-5 h-5',
                    wrapper: {
                        class: (options) =>
                            `absolute top-0 bottom-0 right-0 flex items-center pr-4 ${
                                !options.isHighlighted ? 'text-blue-600 dark:text-gray-400' : 'text-white  dark:text-white'
                            }`,
                    },
                },
            },
        },

        button: {
            class: 'w-full block form-control form-select text-left form-select-bordered flex items-center',

            placeholder: {
                class: 'block text-gray-300 truncate select-none',
            },

            selected: {
                class: 'block truncate w-full',
            },

            icon: {
                wrapper: {
                    class: 'right-0 absolute mr-3'
                },
                component: 'custom-select-icon',
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
            class: 'form-control form-input form-input-bordered',
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
