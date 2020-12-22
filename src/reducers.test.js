import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import {
  setSearchField,
} from './actions.js';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
  })

  it('should handle CHANGE_SEARCH_FIELD action', () => {
    expect(reducers.searchRobots(initialStateSearch, setSearchField('test')))
      .toEqual({ searchField: 'test' });
  })
})

describe('requestRobots', () => {
  const initialStateRobot = {
    isPending: false,
    robots: [],
    error: '',
  }

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobot)
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobot, {
      type: REQUEST_ROBOTS_PENDING,
    })).toEqual({
      isPending: true,
      robots: [],
      error: '',
    })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobot, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]
    })).toEqual({
      isPending: false,
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }],
      error: '',
    })
  })

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobot, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'noooo!!!'
    })).toEqual({
      isPending: false,
      robots: [],
      error: 'noooo!!!',
    })
  })
})