export default [
  {
    name: 'All',
    selected: true,
    blueprint: [],
  },
  {
    name: 'Favorites',
    selected: false,
    blueprint: [
      {
        depth: 1,
        type: 'criterion',
        condition_id: 'name',
        input: {
          clause: 'cont',
          value: 'Aaron',
        },
      },
    ],
  },
  {
    name: 'Subscribers',
    selected: false,
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
]
