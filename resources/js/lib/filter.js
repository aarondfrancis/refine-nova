export default {
  type: 'App\\Filters\\UserFilter',
  blueprint: [],
  conditions: [
    {
      id: 'name',
      display: 'Name',
      meta: {
        clauses: [
          {
            id: 'eq',
            display: 'Equals',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'dne',
            display: 'Does Not Equal',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'sw',
            display: 'Starts With',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'ew',
            display: 'Ends With',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'dsw',
            display: 'Does Not Start With',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'dew',
            display: 'Does Not End With',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'cont',
            display: 'Contains',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'dcont',
            display: 'Does Not Contain',
            meta: [],
            component: 'refine-text-input',
          },
          {
            id: 'st',
            display: 'Is Set',
            meta: [],
            component: null,
          },
          {
            id: 'nst',
            display: 'Is Not Set',
            meta: [],
            component: null,
          },
        ],
      },
      refinements: [],
    },
    {
      id: 'is_subscriber',
      display: 'Subscriber',
      meta: {
        clauses: [
          {
            id: 'true',
            display: 'Is True',
            meta: [],
            component: null,
          },
          {
            id: 'false',
            display: 'Is False',
            meta: [],
            component: null,
          },
        ],
      },
      refinements: [],
    },
    {
      id: 'name_multi',
      display: 'Referral Source',
      meta: {
        clauses: [
          {
            id: 'eq',
            display: 'Is',
            meta: [],
            component: 'refine-option-input',
          },
          {
            id: 'dne',
            display: 'Is Not',
            meta: [],
            component: 'refine-option-input',
          },
          {
            id: 'in',
            display: 'Is One Of',
            meta: {
              multiple: true,
            },
            component: 'refine-option-input',
          },
          {
            id: 'nin',
            display: 'Is Not One Of',
            meta: {
              multiple: true,
            },
            component: 'refine-option-input',
          },
          {
            id: 'st',
            display: 'Is Set',
            meta: [],
            component: null,
          },
          {
            id: 'nst',
            display: 'Is Not Set',
            meta: [],
            component: null,
          },
        ],
        options: [
          {
            id: 'twitter',
            display: 'Twitter',
          },
          {
            id: 'linkedin',
            display: 'LinkedIn',
          },
          {
            id: 'fb',
            display: 'Facebook',
          },
        ],
      },
      refinements: [],
    },
    {
      id: 'created_at',
      display: 'Created At',
      meta: {
        clauses: [
          {
            id: 'eq',
            display: 'Is On',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-date-input',
          },
          {
            id: 'dne',
            display: 'Is Not On',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-date-input',
          },
          {
            id: 'lt',
            display: 'Is Before',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-date-input',
          },
          {
            id: 'lte',
            display: 'Is On or Before',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-date-input',
          },
          {
            id: 'gt',
            display: 'Is After',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-date-input',
          },
          {
            id: 'gte',
            display: 'Is On or After',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-date-input',
          },
          {
            id: 'btwn',
            display: 'Is Between',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-double-date-input',
          },
          {
            id: 'nbtwn',
            display: 'Is Not Between',
            meta: {
              format: 'MM/DD/YYYY',
            },
            component: 'refine-double-date-input',
          },
          {
            id: 'rlt',
            display: 'Is Less Than',
            meta: {
              units: [
                {
                  id: 'day',
                  display: 'Days',
                },
                {
                  id: 'week',
                  display: 'Weeks',
                },
                {
                  id: 'month',
                  display: 'Months',
                },
                {
                  id: 'year',
                  display: 'Years',
                },
              ],
              modifiers: [
                {
                  id: 'ago',
                  display: 'Ago',
                },
                {
                  id: 'from_now',
                  display: 'From Now',
                },
              ],
            },
            component: 'refine-relative-date-input',
          },
          {
            id: 'rgt',
            display: 'Is More Than',
            meta: {
              units: [
                {
                  id: 'day',
                  display: 'Days',
                },
                {
                  id: 'week',
                  display: 'Weeks',
                },
                {
                  id: 'month',
                  display: 'Months',
                },
                {
                  id: 'year',
                  display: 'Years',
                },
              ],
              modifiers: [
                {
                  id: 'ago',
                  display: 'Ago',
                },
                {
                  id: 'from_now',
                  display: 'From Now',
                },
              ],
            },
            component: 'refine-relative-date-input',
          },
          {
            id: 're',
            display: 'Is Exactly',
            meta: {
              units: [
                {
                  id: 'day',
                  display: 'Days',
                },
                {
                  id: 'week',
                  display: 'Weeks',
                },
                {
                  id: 'month',
                  display: 'Months',
                },
                {
                  id: 'year',
                  display: 'Years',
                },
              ],
              modifiers: [
                {
                  id: 'ago',
                  display: 'Ago',
                },
                {
                  id: 'from_now',
                  display: 'From Now',
                },
              ],
            },
            component: 'refine-relative-date-input',
          },
          {
            id: 'st',
            display: 'Is Set',
            meta: [],
            component: null,
          },
          {
            id: 'nst',
            display: 'Is Not Set',
            meta: [],
            component: null,
          },
        ],
      },
      refinements: [],
    },
    {
      id: 'id',
      display: 'ID',
      meta: {
        clauses: [
          {
            id: 'eq',
            display: 'Equals',
            meta: {
              step: 1,
            },
            component: 'refine-number-input',
          },
          {
            id: 'dne',
            display: "Doesn't Equal",
            meta: {
              step: 1,
            },
            component: 'refine-number-input',
          },
          {
            id: 'gt',
            display: 'Is Greater Than',
            meta: {
              step: 1,
            },
            component: 'refine-number-input',
          },
          {
            id: 'gte',
            display: 'Is Greater Than Or Equal To',
            meta: {
              step: 1,
            },
            component: 'refine-number-input',
          },
          {
            id: 'lt',
            display: 'Is Less Than',
            meta: {
              step: 1,
            },
            component: 'refine-number-input',
          },
          {
            id: 'lte',
            display: 'Is Less Than Or Equal To',
            meta: {
              step: 1,
            },
            component: 'refine-number-input',
          },
          {
            id: 'btwn',
            display: 'Is Between',
            meta: {
              step: 1,
            },
            component: 'refine-double-number-input',
          },
          {
            id: 'nbtwn',
            display: 'Is Not Between',
            meta: {
              step: 1,
            },
            component: 'refine-double-number-input',
          },
          {
            id: 'st',
            display: 'Is Set',
            meta: [],
            component: null,
          },
          {
            id: 'nst',
            display: 'Is Not Set',
            meta: [],
            component: null,
          },
        ],
      },
      refinements: [],
    },
  ],
}
