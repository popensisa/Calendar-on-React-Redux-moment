import styled from 'styled-components'

export const ShadowWrapper = styled.div`
    border-top: 1px solid #737374;
    border-left: 1px solid #464648;
    border-right: 1px solid #464648;
    border-bottom: 1px solid #464648;
    box-shadow: 0 0 10px #000;
    border-radius: 8px;
    overflow: hidden;
`
export const Center = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Header = styled.div`

`
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1E1F21;
    color: #fff;
    padding: 10px;
`
export const TextWrapper = styled.span`
    font-size: 32px;
`
export const TitleWrapper = styled(TextWrapper)`
    font-size: 32px;
    font-weight: bold;
    margin: 0 10px 0 5px;
`
export const Button = styled.button`
    border: unset;
    background-color: #565759;
    height: 28px;
    min-width: 28px;
    margin-right: 2px;
    border-radius: 4px;
    color: #E6E6E6;
    padding: 5px;
`
export const TodayButton = styled(Button)`
    padding-right: 16px;
    padding-left: 16px;
    font-weight: bold;
`
export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 2px;
    background-color: ${props => props.isHeader ? '#1E1F21' : '#4D4C4D'};
    ${props => props.isHeader ? 'border-bottom: 2px solid #4D4C4D' : ''}
`
export const CellWrapper = styled.div`
    min-width: 140px;
    min-height: ${props => props.isHeader ? 20 : 80}px;
    background-color: ${props => props.isWeekend ? '#272029' : '#1E1F21'};
    color: #DDDCDD;
`
export const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`

export const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center
`
export const TextDate = styled.div`
    width: 90%;
    text-align: center;
    margin: 5px;
`
export const CurrentDay = styled.div`
    height: 100%;
    width: 100%;
    background: #f00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`