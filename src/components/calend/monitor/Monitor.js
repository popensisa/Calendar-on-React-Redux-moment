import React from "react";
import moment from "moment"
import { Button, Flex, TextWrapper, TitleWrapper, TodayButton } from "../styled";

const Monitor = ({todayHandler, nextHandler, prevHandler, today}) => {
    const currentYear = today.format('YYYY')
    return(
        <Flex>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <TextWrapper>{currentYear}</TextWrapper>
            </div>
            <div>
                <Button onClick={prevHandler}>&lt;</Button>
                <TodayButton onClick={todayHandler}>Today</TodayButton>
                <Button onClick={nextHandler}>&gt;</Button>
            </div>
        </Flex>
    )
}

export default Monitor