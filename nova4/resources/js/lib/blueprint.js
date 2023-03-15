export default [
  {
    depth: 1,
    type: 'criterion',
    condition_id: 'name_multi',
    input: {
      clause: 'st',
      selected: [],
    },
  },
  // {
  //   depth: 1,
  //   type: 'conjunction',
  //   word: 'and',
  // },
  // {
  //   depth: 1,
  //   type: 'criterion',
  //   condition_id: 'name',
  //   input: {},
  // },
  // {
  //   depth: 0,
  //   type: 'conjunction',
  //   word: 'or',
  // },
  // {
  //   depth: 1,
  //   type: 'criterion',
  //   condition_id: 'created_at',
  //   input: {},
  // },
  // {
  //   depth: 0,
  //   type: 'conjunction',
  //   word: 'or',
  // },
  // {
  //   depth: 1,
  //   type: 'criterion',
  //   condition_id: 'id',
  //   input: {},
  // },
]

let blueprint = [
  {
    type: 'group',
    conjunction: 'or',
    criteria: [
      {
        type: 'group',
        conjunction: 'and',
        criteria: [
          {
            type: 'criterion',
            condition_id: 'name_multi',
            input: {},
          },
          {
            type: 'criterion',
            condition_id: 'name',
            input: {},
          },
        ],
      },
      {
        type: 'group',
        conjunction: 'and',
        criteria: [
          {
            type: 'criterion',
            condition_id: 'name_multi',
            input: {},
          },
          {
            type: 'criterion',
            condition_id: 'name',
            input: {},
          },
        ],
      },
    ],
  },
]
