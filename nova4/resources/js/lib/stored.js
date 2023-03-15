export default [
  {
    name: 'All',
    selected: true,
    blueprint: [
      {
        depth: 1,
        type: 'criterion',
        condition_id: 'is_subscriber',
        input: {
          clause: 'true',
        },
      },
    ],
  },
  {
    name: 'Favorites',
    selected: false,
    blueprint: [
      {
        depth: 1,
        type: 'criterion',
        condition_id: 'created_at',
        input: {
          clause: 'lt',
          date1: '2023-03-22',
        },
      },
    ],
  },
  {
    name: 'Trials',
    selected: false,
    blueprint: [
      {
        depth: 1,
        type: 'criterion',
        condition_id: 'id',
        input: {
          clause: 'lt',
          value1: 10,
        },
      },
    ],
  },
]
