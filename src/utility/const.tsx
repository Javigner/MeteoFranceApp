import { gql } from '@apollo/client';

export const apiKey = '1c7bb08718b81098e3f9fa95da90dc6c';

export const url = 'https://api.openweathermap.org/data/2.5/onecall?';

export const query = gql`
    query {
        Wheater @rest(path: "") {
            current
            daily
        }
    }
`;

export const cities = [
    {
        cityName: 'Paris',
        lat: '48.8534',
        long: '2.3488',
        picture:
            'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80',
    },
    {
        cityName: 'Marseille',
        lat: '43.296398',
        long: '5.37',
        picture:
            'https://static3.mclcm.net/iod/images/v2/69/cityNametheque/localite_101_341/1200x630_100_300_000000x30x0.jpg?ts=20200918100802',
    },
    {
        cityName: 'Lyon',
        lat: '45.764043',
        long: '4.835659',
        picture:
            'https://www.myexpat.fr/wp-content/uploads/panorama-immobilier-lyon.jpeg',
    },
    {
        cityName: 'Toulouse',
        lat: '43.6043',
        long: '1.4437',
        picture:
            'https://edito.seloger.com/sites/default/files/article/image/panorama-toulouse.jpg',
    },
    {
        cityName: 'Nice',
        lat: '43.7031',
        long: '7.2661',
        picture:
            'https://www.shehrivoyages.com/imgs/photos//ShehriVoyages10-02-2020_08-47-35avision.jpg',
    },
    {
        cityName: 'Nantes',
        lat: '47.218371',
        long: '-1.553621',
        picture: 'https://www.ideal-investisseur.fr/img/5dbb44bf20132.jpg',
    },
    {
        cityName: 'Montpellier',
        lat: '43.6',
        long: '3.8833',
        picture:
            'https://static3.mclcm.net/iod/images/v2/69/cityNametheque/localite_101_963/1200x630_100_300_000000x30x0.jpg?ts=20200302145802',
    },
    {
        cityName: 'Strasbourg',
        lat: '48.5833',
        long: '7.75',
        picture:
            'https://wookal.com/wp-content/uploads/2020/06/strasbourg-choses-a-voir.jpg',
    },
    {
        cityName: 'Bordeaux',
        lat: '44.8333',
        long: '-0.5667',
        picture:
            'https://www.lyonaeroports.com/sites/default/files/styles/adl_medium/public/2020-05/bordeaux-header_0.jpg?itok=N8uDQeEr',
    },
    {
        cityName: 'Lille',
        lat: '50.63297',
        long: '3.05858',
        picture:
            'https://hellolille.eu/wp-content/uploads/2020/06/CCI_HelloLille_Nablezon-8-1536x1024.jpg',
    },
    {
        cityName: 'Ajaccio',
        lat: '41.919229',
        long: '8.738635',
        picture:
            'https://cdnfr1.img.sputniknews.com/img/104391/61/1043916126_0:0:3371:1823_1000x541_80_0_0_fb24770bff09828dad641f57e91ebf28.jpg',
    },
];
