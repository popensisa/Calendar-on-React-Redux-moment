import React from "react";
import { CellWrapper, CurrentDay, DayWrapper, GridWrapper, RowInCell, TextDate } from "../styled";
import { useSelector } from 'react-redux'

const CalendarGrid = ({startDay, moment}) => {
    const calendar = useSelector(state => state.calendar)
    const day = startDay.clone().subtract(1, 'day')
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())
    const currentDay = moment().format('DDMMYYYY')
    return(
        <>
            <GridWrapper isHeader>
                {[...Array(7)].map((_, i) =>
                    <CellWrapper key={i} isHeader>
                        <RowInCell justifyContent={'flex-end'}>{moment().day(i+1).format('ddd')}</RowInCell>
                    </CellWrapper>
                )}
            </GridWrapper>
            <GridWrapper>
                {
                    daysArray.map((dayItem) => 
                        <CellWrapper 
                            key={dayItem.format('DDMMYYYY')}
                            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                        >
                                {currentDay === dayItem.format('DDMMYYYY')
                                    ?
                                    <>
                                    <DayWrapper>
                                        <CurrentDay>
                                            {dayItem.format('D')}
                                        </CurrentDay>
                                    </DayWrapper>
                                    <TextDate>
                                        {calendar
                                            .filter(e => dayItem.format('YYYY-MM-DD') == e.date)
                                            .map(e => 
                                                e.title    
                                            )    
                                        }
                                    </TextDate>
                                    </>
                                    :
                                    <div>
                                        <DayWrapper>
                                        {dayItem.format('D')}
                                        </DayWrapper>
                                        <TextDate>
                                            {calendar
                                                .filter(e => dayItem.format('YYYY-MM-DD') == e.date)
                                                .map(e => 
                                                    e.title    
                                                )    
                                            }
                                        </TextDate>
                                    </div>
                                    
                                }
                        </CellWrapper>
                    )
                }
            </GridWrapper>
        </>
    )
}

export default CalendarGrid