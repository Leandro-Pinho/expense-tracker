import { formatCurrentMonth } from '../../helpers/dateFilter';
import * as C from './styles'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
   // mudar para o mês anterior
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    // mudar para o proximo mês
    const handleNextMonth = () => { 
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>&#11013;</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>&#10145;</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>

            </C.ResumeArea>
        </C.Container>
    );
}