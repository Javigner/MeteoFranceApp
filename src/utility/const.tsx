import { gql } from '@apollo/client';

export const ApiKey = '27ae71c09166621580ca9137408ca562';
export const Url = 'https://api.openweathermap.org/data/2.5/onecall?';
export const query = gql`
    query {
        Wheater @rest(path: "") {
            current
            daily
        }
    }
`;
export const Cities = [
    [
        'Paris',
        '48.8534',
        '2.3488',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80',
    ],
    [
        'Marseille',
        '43.296398',
        '5.37',
        'https://static3.mclcm.net/iod/images/v2/69/citytheque/localite_101_341/1200x630_100_300_000000x30x0.jpg?ts=20200918100802',
    ],
    [
        'Lyon',
        '45.764043',
        '4.835659',
        'https://www.myexpat.fr/wp-content/uploads/panorama-immobilier-lyon.jpeg',
    ],
    [
        'Toulouse',
        '43.6043',
        '1.4437',
        'https://edito.seloger.com/sites/default/files/article/image/panorama-toulouse.jpg',
    ],
    [
        'Nice',
        '43.7031',
        '7.2661',
        'https://www.shehrivoyages.com/imgs/photos//ShehriVoyages10-02-2020_08-47-35avision.jpg',
    ],
    [
        'Nantes',
        '47.218371',
        '-1.553621',
        'https://www.ideal-investisseur.fr/img/5dbb44bf20132.jpg',
    ],
    [
        'Montpellier',
        '43.6',
        '3.8833',
        'https://static3.mclcm.net/iod/images/v2/69/citytheque/localite_101_963/1200x630_100_300_000000x30x0.jpg?ts=20200302145802',
    ],
    [
        'Strasbourg',
        '48.5833',
        '7.75',
        'https://wookal.com/wp-content/uploads/2020/06/strasbourg-choses-a-voir.jpg',
    ],
    [
        'Bordeaux',
        '44.8333',
        '-0.5667',
        'https://www.lyonaeroports.com/sites/default/files/styles/adl_medium/public/2020-05/bordeaux-header_0.jpg?itok=N8uDQeEr',
    ],
    [
        'Lille',
        '50.63297',
        '3.05858',
        'https://hellolille.eu/wp-content/uploads/2020/06/CCI_HelloLille_Nablezon-8-1536x1024.jpg',
    ],
    [
        'Ajaccio',
        '41.919229',
        '8.738635',
        'https://cdnfr1.img.sputniknews.com/img/104391/61/1043916126_0:0:3371:1823_1000x541_80_0_0_fb24770bff09828dad641f57e91ebf28.jpg',
    ],
];
