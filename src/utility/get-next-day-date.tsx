import dayjs from 'dayjs';
import 'dayjs/locale/fr';

function getNextDayDate(index: number) {
    const day = dayjs().locale('fr').add(index, 'day');
    return [day.format('dddd'), day.format('D'), day.format('MMMM')];
}

export default getNextDayDate;
