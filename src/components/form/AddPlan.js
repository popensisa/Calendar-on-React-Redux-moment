import moment from 'moment'
import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ADD_CALD } from '../../store/calendarReducer'


const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #1E1F21;
    color: #fff;
`
const Input = styled.input`
    border-bottom: 2px solid white;
    padding: 5px;
    font-size: 22px;
    background: transparent;
    color: #fff;
`
const InputDate = styled.input`
    border-bottom: 2px solid white;
    padding: 5px;
    font-size: 22px;
    background: transparent;
    color: #fff;
    &::-webkit-calendar-picker-indicator{
        background-color: #fff;
    }
`
const Span = styled.span`
    font-size: 22px;
`
const Button = styled.button`
    border: 2px solid white;
    padding: 5px;
    margin: 0 0 0 10px;
    font-size: 18px;
    background-color: transparent;
    color: #fff;
    transition: all 0.3s ease;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`
const AddPlan = () => {
    const [ date, setDate ] = useState('')
    const [ title, setTitle ] = useState('')
    const dispatch = useDispatch()
    const AddCalendar = () => {
        if (title&& date){
            dispatch({type: ADD_CALD, payload: {title, date}})
        }else{
            alert('Введите данные корректно!')
        }
    }
    return(
        <InputWrapper>
            <Input placeholder='Введите данные' maxLength={15} onChange={e => setTitle(e.target.value)}/>
            <Span> | </Span><InputDate type='date' placeholder='Выберите дату' onChange={e => setDate(e.target.value)}/>
            <Button onClick={AddCalendar}>Добавить</Button>
        </InputWrapper>
    )
}

export default AddPlan