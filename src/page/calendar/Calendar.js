import moment from "moment"
import React, { useState } from "react"
import CalendarGrid from "../../components/calend/grid/CalendarGrid"
import Monitor from "../../components/calend/monitor/Monitor"
import { Center, ShadowWrapper } from "../../components/calend/styled"
import AddPlan from "../../components/form/AddPlan"

const Calendar = () => {
    moment.updateLocale('en', {week: {dow: 1}})
    const [today, setToday] = useState(moment())
    const startDay = today.clone().startOf('month').startOf('week')
    const endDay = moment().endOf('month').endOf('week')
    const calendar = []
    const day = startDay.clone()
    while (!day.isAfter(endDay)){
        calendar.push(day.clone())
        day.add(1, 'day')
    }

    const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'))
    const todayHandler = () => setToday(moment())
    const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'))

    return(
        <Center>
            <ShadowWrapper>
                <AddPlan/>
                <Monitor 
                    prevHandler={prevHandler} 
                    today={today}
                    nextHandler={nextHandler}
                    todayHandler={todayHandler}
                />
                <CalendarGrid startDay={startDay} moment={moment}/>
            </ShadowWrapper>
        </Center>
    )
}

export default Calendar