import { defineStore } from 'pinia'

import blueprint from '@/lib/blueprint'
import stored from '@/lib/stored'

export const useViewSettingsStore = defineStore('ViewSettings', {
  state() {
    return {
      columns: [
        {
          id: 'id',
          display: 'ID',
          checked: true,
        },
        {
          id: 'first_name',
          display: 'First Name',
          checked: true,
        },
        {
          id: 'last_name',
          display: 'Last Name',
          checked: true,
        },
        {
          id: 'email',
          display: 'Email',
          checked: true,
        },
        {
          id: 'title',
          display: 'Title',
          checked: true,
        },
        {
          id: 'department',
          display: 'Department',
          checked: true,
        },
      ],
    }
  },

  actions: {},
})
