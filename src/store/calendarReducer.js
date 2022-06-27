
export const ADD_CALD = 'ADD_CALD'

const defaultState = [
    {
        title: 'Пойти на курсы',
        date: '2022-06-25'
    },
    {
        title: 'Пойти на свидание',
        date: '2022-06-27'
    }
]
export const calendarReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_CALD:
            return [...state, { 
                title: action.payload.title,
                date: action.payload.date
            }]
        default: 
            return state
    }
}