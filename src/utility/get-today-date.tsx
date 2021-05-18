import dayjs from 'dayjs'
import 'dayjs/locale/fr'

const weekDay = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']


function getTodayDate(index: number) {
    const day = dayjs().add(index, 'day').day()
    const month = dayjs().add(index, 'day').month()
    const dayOfMonth = dayjs().add(index, 'day').date()
    
    return([weekDay[day], dayOfMonth, months[month]])
}

export default getTodayDate