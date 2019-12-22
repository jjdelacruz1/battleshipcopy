import {CLICKED} from '../actions/actionTypes'

const initialState = {
    squares: {
    0: [ {key: 1, color: 'grey-square'}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}, {key: 8}, {key: 9}, {key: 10} ],
    1: [ {key: 11}, {key: 12}, {key: 13}, {key: 14}, {key: 15}, {key: 16}, {key: 17}, {key: 18}, {key: 19}, {key: 20} ],
    2: [ {key: 21}, {key: 22}, {key: 23}, {key: 24}, {key: 25}, {key: 26}, {key: 27}, {key: 28}, {key: 29}, {key: 30} ],
    3: [ {key: 31}, {key: 32}, {key: 33}, {key: 34}, {key: 35}, {key: 36}, {key: 37}, {key: 38}, {key: 39}, {key: 40} ],
    4: [ {key: 41}, {key: 42}, {key: 43}, {key: 44}, {key: 45}, {key: 46}, {key: 47}, {key: 48}, {key: 49}, {key: 50} ],
    5: [ {key: 51}, {key: 52}, {key: 53}, {key: 54}, {key: 55}, {key: 56}, {key: 57}, {key: 58}, {key: 59}, {key: 60} ],
    6: [ {key: 61}, {key: 62}, {key: 63}, {key: 64}, {key: 65}, {key: 66}, {key: 67}, {key: 68}, {key: 69}, {key: 70} ],
    7: [ {key: 71}, {key: 72}, {key: 73}, {key: 74}, {key: 75}, {key: 76}, {key: 77}, {key: 78}, {key: 79}, {key: 80} ],
    8: [ {key: 81}, {key: 82}, {key: 83}, {key: 84}, {key: 85}, {key: 86}, {key: 87}, {key: 88}, {key: 89}, {key: 90} ],
    9: [ {key: 91}, {key: 92}, {key: 93}, {key: 94}, {key: 95}, {key: 96}, {key: 97}, {key: 98}, {key: 99}, {key: 100} ]
    }
}
const boardReducer = (state = initialState, action) => {
    switch(action.type){
      case CLICKED: 
        console.log('reducer square clicked', action.key)
        return {
            ...state
        }
    default:
        return state;
    }
}

export default boardReducer