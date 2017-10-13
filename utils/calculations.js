'use strict'

export default [
  {
    title: 'Impressions',
    value: 'impressions'
  },
  {
    title: 'Loads',
    value: 'loads'
  },
  {
    title: 'Displays',
    value: 'displays'
  },
  {
    title: 'Load Rate',
    value: 'loadRate',
    template: val => {
      return `${(val * 100).toFixed(1)}%`
    }
  },
  {
    title: 'Display Rate',
    value: 'displayRate',
    template: val => {
      return `${(val * 100).toFixed(1)}%`
    }
  }
]
