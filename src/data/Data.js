const Data = [
    {
        id: 1,
        name: "India",
        description: "I love India",
        heroImage: "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
        continent: "Asia",
        locations: [
            {
                id: 1,
                name: "Taj-Mahal",
                cityName: "Agra",
                state: "Uttar Pradesh",
                Description: "This is the most famous in Agra",
                imageUrl: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Delhi",
                        distance: 210.8
                    },
                    {
                        city2: "Agra Station",
                        distance: 4
                    },
                    {
                        gurl: "https://maps.app.goo.gl/nwmcuiYCJ5Te1wq77"
                    }
                ]
            },
            {
                id: 2,
                name: "Goa",
                cityName: "Goa",
                state: "Goa",
                Description: "",
                imageUrl: "https://thumbs.dreamstime.com/b/beach-goa-india-5393913.jpg",
                category: "Beach Holiday",
                rating: 0,
                transport: [
                    {
                        city1: "Goa Station",
                        distance: 44
                    },
                    {
                        gurl: "https://goo.gl/maps/Lsc964m8d1FDagT2A"
                    }
                ]
            },
            {
                id: 3,
                name: "Munnar",
                cityName: "Idukki",
                state: "Kerala",
                Description: "",
                imageUrl: "https://media.gettyimages.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8=",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Idukki",
                        distance: 35.5
                    },
                    {
                        city2: "Coimbatore",
                        distance: 104
                    },
                    {
                        gurl: "https://goo.gl/maps/K4APfF7re5pvSimSA"
                    }
                ]
            },
            {
                id: 4,
                name: "Coorg",
                cityName: "Madikeri",
                state: "Karnataka",
                Description: "",
                imageUrl: "https://media.istockphoto.com/id/1216722235/photo/mountain-with-green-grass-and-beautiful-sky.jpg?s=612x612&w=0&k=20&c=UD4Rmexxtkci9q-gH_PCUaBw6suwTCKp7SkZTXukQ2U=",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Mysuru",
                        distance: 107
                    },
                    {
                        city2: "Mangaluru",
                        distance: 159
                    },
                    {
                        gurl: ""
                    }
                ]
            },
            {
                id: 5,
                name: "Manali",
                cityName: "Kullu",
                state: "Himachal Pradesh",
                Description: "",
                imageUrl: "https://www.shutterstock.com/image-photo/manali-himachal-pradesh-india-260nw-1350638618.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Kullu",
                        distance: 40
                    },
                    {
                        city2: "Shimla",
                        distance: 248
                    },
                    {
                        gurl: "https://goo.gl/maps/AFjmPhEaKDQGisPH7"
                    }
                ]
            },
            {
                id: 6,
                name: "Ooty",
                cityName: "Ooty",
                state: "Tamil Nadu",
                Description: "",
                imageUrl: "https://images.unsplash.com/photo-1584373570791-5248df49afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b290eSUyQyUyMGluZGlhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                category: "Romantic Gateway",
                rating: 0,
                transport: [
                    {
                        city1: "Coimbatore",
                        distance: 86
                    },
                    {
                        city2: "Mysuru",
                        distance: 125
                    },
                    {
                        gurl: "https://goo.gl/maps/1LiarLLGKp9d7L469"
                    }
                ]
            },
            {
                id: 7,
                name: "Lonavala and Khandala",
                cityName: "Lonavala",
                state: "Maharahstra",
                Description: "",
                imageUrl: "https://www.trawell.in/admin/images/upload/119127127Lonavala_Khandala_Main.jpg",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Pune",
                        distance: 67
                    },
                    {
                        city2: "Mumbai",
                        distance: 82
                    },
                    {
                        gurl: "https://goo.gl/maps/Ndz5Nb1gJ6nYCqQP9"
                    }
                ]
            },
            {
                id: 8,
                name: "Varanasi",
                cityName: "Varanasi",
                state: "Uttar Pradesh",
                Description: "",
                imageUrl: "https://c4.wallpaperflare.com/wallpaper/654/598/448/water-city-varanasi-wallpaper-preview.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Patna",
                        distance: 253
                    },
                    {
                        city2: "Lucknow",
                        distance: 314
                    },
                    {
                        gurl: "https://goo.gl/maps/FWawNjHgCRqy2daE9"
                    }
                ]
            },
            {
                id: 9,
                name: "Amritsar",
                cityName: "Amritsar",
                state: "Punjab",
                Description: "",
                imageUrl: "https://www.planetware.com/photos-large/IND/india-top-attractions-harmandir-sahib.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Jalandhar",
                        distance: 82
                    },
                    {
                        city2: "Ludhiyana",
                        distance: 141
                    },
                    {
                        gurl: "https://goo.gl/maps/aPz523Eu96rWwB3G9"
                    }
                ]
            },
            {
                id: 10,
                name: "Kedarnath",
                cityName: "Kedarnath",
                state: "Uttarakhand",
                Description: "",
                imageUrl: "https://www.euttaranchal.com/tourism/photos/kedarnath-2240900.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Dehradun",
                        distance: 254
                    },
                    {
                        city2: "Roorkee",
                        distance: 150
                    },
                    {
                        gurl: "https://goo.gl/maps/cfJy9uC9vL5fH2St9"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "France",
        description: "",
        heroImage: "",
        continent:"Europe",
        locations: [
            {
                id: 1,
                name: "Eiffel Tower",
                cityName: "Paris",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/photos-large/F/france-eiffel-tower.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Champ de mars",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport",
                        distance: 34
                    },
                    {
                        gurl: "https://goo.gl/maps/AdQu2Xur8BPcaWMj6"
                    }
                ]
            },
            {
                id: 2,
                name: "Musee du Louvre",
                cityName: "Paris",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/wpimages/2021/11/france-top-attractions-musee-du-louvre.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station",
                        distance: 2
                    },
                    {
                        city2: "Nearest Airport",
                        distance: 33
                    },
                    {
                        gurl: "https://goo.gl/maps/zznzipEBTB5gAXFL8"
                    }
                ]
            },
            {
                id: 3,
                name: "Cote d'Azur",
                cityName: "French Riviera",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/photos-large/F/france-cote-d-azure.jpg",
                category: "Beach Holiday",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Frejus",
                        distance: 37
                    },
                    {
                        city2: "Nearest Airport",
                        distance: 20
                    },
                    {
                        gurl: "https://goo.gl/maps/BMSghWT4wuVH1cQp7"
                    }
                ]
            },
            {
                id: 4,
                name: "Mont Saint-Michel",
                cityName: "Manch,Normandy",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/photos-large/F/france-mont-saint-michel-2.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Pontorson",
                        distance: 7.2
                    },
                    {
                        city2: "Nearest Airport - The Rennes Airport",
                        distance: 75
                    },
                    {
                        gurl: "https://goo.gl/maps/zXbJNhdHBWHRyLaN9"
                    }
                ]
            },
            {
                id: 5,
                name: "Provence",
                cityName: "Provence",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/wpimages/2020/04/france-top-attractions-provence.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Aix-en-Provence TVG",
                        distance: 10
                    },
                    {
                        city2: "Nearest Airport - Avigon",
                        distance: 68
                    },
                    {
                        gurl: "https://goo.gl/maps/tQWsRtHne3Bi88wW8"
                    }
                ]
            },
            {
                id: 6,
                name: "Alsace Villages",
                cityName: "Strasbourg",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/wpimages/2020/04/france-top-attractions-alsace-villages.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - gare de mulhoise",
                        distance: 8
                    },
                    {
                        city2: "Nearest Airport - Strasbourg",
                        distance: 31
                    },
                    {
                        gurl: "https://goo.gl/maps/zuft6sK541C8cyXv6"
                    }
                ]
            },
            {
                id: 7,
                name: "Biarritz",
                cityName: "Biarritz",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/photos-large/F/france-basque-country.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Estacion de Biarritz",
                        distance: 3
                    },
                    {
                        city2: "Nearest Airport - Biarritz Airport",
                        distance: 3
                    },
                    {
                        gurl: "https://goo.gl/maps/YYUsqrkw2gqhDakb8"
                    }
                ]
            },
            {
                id: 8,
                name: "Rocamadour",
                cityName: "Rocamadour",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/photos-large/F/france-rocamadour.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Padirac",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Brive-souillac",
                        distance: 29
                    },
                    {
                        gurl: "https://goo.gl/maps/psb2NGNgZGNMvRsw6"
                    }
                ]
            },
            {
                id: 9,
                name: "Versailles",
                cityName: "Versailles",
                state: null,
                Description: "",
                imageUrl: "https://www.planetware.com/wpimages/2021/10/france-top-attractions-chateau-versailles-les-jardins.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Chantieis",
                        distance: 2
                    },
                    {
                        city2: "Nearest Airport - Paris orly Airport",
                        distance: 24
                    },
                    {
                        gurl: "https://goo.gl/maps/bS8z2eRgjQjVvG9R6"
                    }
                ]
            },
            {
                id: 10,
                name: "Brittany",
                cityName: "Brittany",
                state: "Rennes",
                Description: "",
                imageUrl: "https://www.planetware.com/photos-large/F/france-brittany.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Rennes",
                        distance: 4
                    },
                    {
                        city2: "Nearest Airport - Lorient",
                        distance: 69
                    },
                    {
                        gurl: "https://goo.gl/maps/8oiqpv6FoPDzmfUTA"
                    }
                ]
            },
        ]
    },
    {
        id: 3,
        name: "Australia",
        description: "",
        heroImage: "",
        continent:"Australia",
        locations: [
            {
                id: 1,
                name: "Sydney Opera House",
                cityName: "New South Wales",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/AUS/australia-new-south-wales-sydney-opera-house.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Circular quay",
                        distance: 0.6
                    },
                    {
                        city2: "Nearest Airport - Sydney Airport",
                        distance: 13
                    },
                    {
                        gurl: "https://goo.gl/maps/ffkLa5mLg5ffKdoQ9"
                    }
                ]
            },
            {
                id: 2,
                name: "Blue Mountains National Park",
                cityName: "New South Wales",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/07/australia-top-attractions-blue-mountains-national-park.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Bells Station",
                        distance: 11
                    },
                    {
                        city2: "Nearest Airport - Bathurst Airport",
                        distance: 69
                    },
                    {
                        gurl: "https://goo.gl/maps/3uA6q3d8JiCbG8Qt5"
                    }
                ]
            },
            {
                id: 3,
                name: "Melbourne's Culture",
                cityName: "Victoria",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/AUS/australia-victoria-melbourne.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Flinderstreet",
                        distance: 2
                    },
                    {
                        city2: "Nearest Airport - Melbourne Airport",
                        distance: 28
                    },
                    {
                        gurl: "https://goo.gl/maps/3uA6q3d8JiCbG8Qt5"
                    }
                ]
            },
            {
                id: 4,
                name: "Daintree National Park",
                cityName: "Queensland",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/AUS/australia-queensland-daintree-national-park-2.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Airport - Cairns",
                        distance: 120
                    },
                    {
                        city2: "Nearest Airport - Cairns",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/Re1YDrB6ogMxgcpQA"
                    }
                ]
            },
            {
                id: 5,
                name: "Broome",
                cityName: "Western Australia",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/AUS/australia-western-australia-broome-and-the-kimberley-region.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Cairns",
                        distance: 120
                    },
                    {
                        city2: "Nearest Airport - Broome International Airport",
                        distance: 0.7
                    },
                    {
                        gurl: "https://goo.gl/maps/8bnu8L7TxeYq5aJBA"
                    }
                ]
            },
            {
                id: 6,
                name: "Kangaroo Island",
                cityName: "South Australia",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/07/australia-top-attractions-kangaroo-island-south-australia-aerial.jpg",
                category: "WildLife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - South terrace",
                        distance: 208
                    },
                    {
                        city2: "Nearest Airport - Kings Coat Airport",
                        distance: 32
                    },
                    {
                        gurl: "https://goo.gl/maps/SyxwcbqNoNmYrayk7"
                    }
                ]
            },
            {
                id: 7,
                name: "Horizontal Falls",
                cityName: "Kimberley Region",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/07/australia-top-attractions-horizontal-falls-kimberley-region-mitchell-falls.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lawson",
                        distance: 120
                    },
                    {
                        city2: "Nearest Airport - Kings Coat Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/MkD2xrUBSjZTEnbc8"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Greece",
        description: "",
        heroImage: "",
        continent:"Europe",
        locations: [
            {
                id: 1,
                name: "Acropolis",
                cityName: "Athens",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/GR/greece-athens-acropolis-evening-view-2.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Syntagma",
                        distance: 2
                    },
                    {
                        city2: "Nearest Airport - Athens International Airport",
                        distance: 43
                    },
                    {
                        gurl: "https://goo.gl/maps/UWAHdvCVTLYZKkui8"
                    }
                ]
            },
            {
                id: 2,
                name: "Santorini",
                cityName: "Fira and Oia",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/GR/greece-santorini-blue-roof-churches-and-mediterranean.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lawson",
                        distance: 120
                    },
                    {
                        city2: "Nearest Airport - Santorini Airport",
                        distance: 2
                    },
                    {
                        gurl: "https://goo.gl/maps/QZhg4qMBU5PhFFcx5"
                    }
                ]
            },
            {
                id: 3,
                name: "Mykonos",
                cityName: "Chora",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/GR/greece-mykonos-seaside-town-with-waves.jpg",
                category: "Beach",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lawson",
                        distance: 120
                    },
                    {
                        city2: "Nearest Airport - Mantomavroginus",
                        distance: 4
                    },
                    {
                        gurl: "https://goo.gl/maps/eKeiK2op2pUYnq5G9"
                    }
                ]
            },
            {
                id: 4,
                name: "Delphi",
                cityName: "Phocis",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/GR/greece-delphi-ancient-theatre-and-mountains.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Delphi",
                        distance: 184
                    },
                    {
                        city2: "Nearest Airport - Athens Airport",
                        distance: 202
                    },
                    {
                        gurl: "https://goo.gl/maps/DuD6FhSgL7rmCGWu8"
                    }
                ]
            },
            {
                id: 5,
                name: "Corfu",
                cityName: "Corfu",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2019/01/greece-top-attractions-corfu-beach.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lawson",
                        distance: 120
                    },
                    {
                        city2: "Nearest Airport - Corfu Lonis Kapodaistrias Airport",
                        distance: 2.7
                    },
                    {
                        gurl: "https://goo.gl/maps/s1WdKwuNpH3Aoqir5"
                    }
                ]
            },
            {
                id: 6,
                name: "Rhodes Town",
                cityName: "Rhodes Town",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/GR/greece-rhodes-town-hippocrates-square-evening.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Olympic Park",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Rhodes Airport",
                        distance: 3
                    },
                    {
                        gurl: "https://goo.gl/maps/gk6uVUuqaDdDvsQH7"
                    }
                ]
            },
            {
                id: 7,
                name: "Zákynthos",
                cityName: "Rhodes Town",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2019/01/greece-top-attractions-zakynothos-blue-caves.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Kavasila ",
                        distance: 25
                    },
                    {
                        city2: "Nearest Airport - Zakynthos Airport",
                        distance: 40
                    },
                    {
                        gurl: "https://goo.gl/maps/Vx9zmvPxfxQaXaD2A"
                    }
                ]
            },
            {
                id: 8,
                name: "Nafplio",
                cityName: "Peloponnese",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/GR/greece-nafplio-town-and-venetian-fortress.jpg",
                category: "Beach",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lawson",
                        distance: 120
                    },
                    {
                        city2: "Nearest Airport - Kings Coat Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/UX3nqWn7K1BSvpBY7"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Switzerland",
        description: "",
        heroImage: "",
        continent:"Europe",
        locations: [
            {
                id: 1,
                name: "The Matterhorn",
                cityName: "Alps",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-matterhorn.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Zermatt",
                        distance: 25
                    },
                    {
                        city2: "Nearest Airport - Geneva Airport",
                        distance: 45
                    },
                    {
                        gurl: "https://goo.gl/maps/hAns8B3yWrAjbwMV6"
                    }
                ]
            },
            {
                id: 2,
                name: "Interlaken",
                cityName: "Höhematte",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-interlaken-2.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Interlaken OST",
                        distance: 18
                    },
                    {
                        city2: "Nearest Airport - Bern Airport",
                        distance: 64
                    },
                    {
                        gurl: "https://goo.gl/maps/3qnVyn1HXMQJUnRE6"
                    }
                ]
            },
            {
                id: 3,
                name: "Lucerne",
                cityName: "Lucerne",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-lucerne.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lucerne Station",
                        distance: 0.9
                    },
                    {
                        city2: "Nearest Airport - Zurich Airport",
                        distance: 55
                    },
                    {
                        gurl: "https://goo.gl/maps/aebGRt2Dp1VAkf1h6"
                    }
                ]
            },
            {
                id: 4,
                name: "Lake Geneva",
                cityName: "Geneva",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-lake-geneva-region.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Secheron",
                        distance: 55
                    },
                    {
                        city2: "Nearest Airport - Kings Coat Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/JSDLoNRvn2SdTCW27"
                    }
                ]
            },
            {
                id: 5,
                name: "Chateau de Chillon",
                cityName: "Montreux",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-the-chillon-castle.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Veytaux-Chillon",
                        distance: 0.5
                    },
                    {
                        city2: "Nearest Airport - Geneva Airport",
                        distance: 55
                    },
                    {
                        gurl: "https://goo.gl/maps/9o6got4NdfTbQctaA"
                    }
                ]
            },
            {
                id: 5,
                name: "St. Moritz",
                cityName: "Moritz",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-st-moritz.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Via Vitinuo",
                        distance: 48
                    },
                    {
                        city2: "Nearest Airport - Kings Coat Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/a2cgqxoWKEQ3m6KJA"
                    }
                ]
            },
            {
                id: 6,
                name: "Lake Lugano and Ticino",
                cityName: "Ticino",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-lake-lugano-2.jpg",
                category: "Beach",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lugano",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Lugano Airport",
                        distance: 7
                    },
                    {
                        gurl: "https://goo.gl/maps/L6eiXuvAWrUbu41i7"
                    }
                ]
            },
            {
                id: 6,
                name: "The Rhine Falls",
                cityName: "Schaffhausen",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-rhine-falls.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Neuhausen Reinfall",
                        distance: 0.35
                    },
                    {
                        city2: "Nearest Airport - Zurich Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/D5fE1oNFwrDwhuVW7"
                    }
                ]
            },
            {
                id: 7,
                name: "Zurich",
                cityName: "Zurich",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CH/switzerland-zurich.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Zurich",
                        distance: 1.2
                    },
                    {
                        city2: "Nearest Airport - Zurich Airport",
                        distance: 10
                    },
                    {
                        gurl: "https://goo.gl/maps/Jpao9MUoFWBrHwkA8"
                    }
                ]
            },
            {
                id: 8,
                name: "Swiss National Park",
                cityName: "Alps",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2019/08/switzerland-top-tourist-attractions-swiss-national-park.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Zernez",
                        distance: 8
                    },
                    {
                        city2: "Nearest Airport - Lugano Airport",
                        distance: 221
                    },
                    {
                        gurl: "https://goo.gl/maps/863votsMTWZE7Hb88"
                    }
                ]
            },
        ]
    },
    {
        id:6,
        name:"Canada",
        description:"",
        heroImage:"",
        continent:"North America",
        locations: [
            {
                id: 1,
                name: "Niagara Falls",
                cityName: "Ontario",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/canada-tourist-attractions-niagara-falls-from-edge-of-falls.jpg",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Niagara Falls Station",
                        distance: 4
                    },
                    {
                        city2: "Nearest Airport - Buffalo Niagara Airport",
                        distance: 44
                    },
                    {
                        gurl: "https://goo.gl/maps/Q8ztzdi2x4VbGMrKA"
                    }
                ]
            },
            {
                id: 2,
                name: "Banff National Park",
                cityName: "Alberta",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/06/canada-tourist-attractions-banff-rocky-mountains-lake-louise-and-glacier.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Banff Train Station",
                        distance: 18
                    },
                    {
                        city2: "Nearest Airport - Kalgary International Airport",
                        distance: 145
                    },
                    {
                        gurl: "https://goo.gl/maps/WWYjbE2fYtCWFDXKA"
                    }
                ]
            },
            {
                id: 2,
                name: "Toronto's CN Tower",
                cityName: "Toronto",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/canada-tourist-attractions-toronto-skyline-from-toronto-islands.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Union Station",
                        distance: 0.7
                    },
                    {
                        city2: "Nearest Airport - Pearson Airport",
                        distance: 26
                    },
                    {
                        gurl: "https://goo.gl/maps/MxLMP2c5q9gWquK97"
                    }
                ]
            },
            {
                id: 3,
                name: "Old Quebec",
                cityName: "Quebec",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/canada-tourist-attractions-quebec-city-chateau-frontenac-boardwalk.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Gare du Palais Station",
                        distance: 0.4
                    },
                    {
                        city2: "Nearest Airport - Kings Coat Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/Qfery5u3QTwEdRDp9"
                    }
                ]
            },
            {
                id: 4,
                name: "Old Quebec",
                cityName: "Quebec",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/canada-tourist-attractions-quebec-city-chateau-frontenac-boardwalk.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Gare du Palais Station",
                        distance: 0.4
                    },
                    {
                        city2: "Nearest Airport - Jean Lesage Airport",
                        distance: 16
                    },
                    {
                        gurl: "https://goo.gl/maps/Qfery5u3QTwEdRDp9"
                    }
                ]
            },
            {
                id: 5,
                name: "Whistler",
                cityName: "British Columbia",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/06/canada-top-tourist-attractions-whistler-mountain-skiers.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Whistler Station",
                        distance: 4.3
                    },
                    {
                        city2: "Nearest Airport - Vancouver International Airport",
                        distance: 135
                    },
                    {
                        gurl: "https://goo.gl/maps/GHh1daLgCMchWgmk7"
                    }
                ]
            },
            {
                id: 6,
                name: "Ottawa's Parliament Hill",
                cityName: "British Columbia",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CDN/canada-ontario-ottawa-parliament-hill.jpg",
                category: "Art&Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Parliament Station",
                        distance: 3
                    },
                    {
                        city2: "Nearest Airport - Ottawa International Airport",
                        distance: 13
                    },
                    {
                        gurl: "https://goo.gl/maps/ie5jmzgafPAXJrdz9"
                    }
                ]
            },
            {
                id: 7,
                name: "Old Montreal",
                cityName: "Montreal",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/06/canada-tourist-attractions-montreal-rue-st-paul-morning.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Gare Central Station",
                        distance: 2.5
                    },
                    {
                        city2: "Nearest Airport - Treaudo Airport",
                        distance: 0.25
                    },
                    {
                        gurl: "https://goo.gl/maps/aNfrLHkj7L75dCcr7"
                    }
                ]
            },
            {
                id: 8,
                name: "Vancouver Island",
                cityName: "Victoria",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/06/canada-tourist-attractions-vancouver-island-old-growth-forest-eden-grove.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Courtney Station",
                        distance: 2.6
                    },
                    {
                        city2: "Nearest Airport - Comox Valley Airport",
                        distance: 34
                    },
                    {
                        gurl: "https://goo.gl/maps/pRQtFVqZNkHGYTCD8"
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name:"Spain",
        description:"",
        heroImage:"",
        continent:"Europe",
        locations: [
            {
                id: 1,
                name: "The Alhambra and Generalife Gardens",
                cityName: "Granada",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/spain-granada-alhambra-4.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Granada Station",
                        distance: 6.5
                    },
                    {
                        city2: "Nearest Airport - Granada Airport",
                        distance: 16.5
                    },
                    {
                        gurl: "https://goo.gl/maps/qPtzBDAAVXaEmBnu6"
                    }
                ]
            },
            {
                id: 2,
                name: "The Great Mosque of Córdoba",
                cityName: "Córdoba",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/spain-cordoba-great-mosque-mezquita-4.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Cordoba Station",
                        distance: 2
                    },
                    {
                        city2: "Nearest Airport - Cordoba Airport",
                        distance: 6
                    },
                    {
                        gurl: "https://goo.gl/maps/P2BD7v7oRoT1MeLA7"
                    }
                ]
            },
            {
                id: 3,
                name: "The Prado and Paseo del Artes",
                cityName: "Madrid",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/prado-museum.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Courtney Station",
                        distance: 2.6
                    },
                    {
                        city2: "Nearest Airport - Treaudo Airport",
                        distance: 0.25
                    },
                    {
                        gurl: "https://goo.gl/maps/zmHHyg2LDVZ6njXcA"
                    }
                ]
            },
            {
                id: 3,
                name: "San Lorenzo de El Escorial",
                cityName: "Madrid",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/monasterio-de-san-lorenzo-1.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Escorial Station",
                        distance: 5.6
                    },
                    {
                        city2: "Nearest Airport - Madrid Airport",
                        distance: 12
                    },
                    {
                        gurl: "https://goo.gl/maps/Aya536pR4xdszGtz5"
                    }
                ]
            },
            {
                id: 4,
                name: "Guggenheim Museum",
                cityName: "Bilbao",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/guggenheim-museum.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Moyua Station",
                        distance: 0.2
                    },
                    {
                        city2: "Nearest Airport - Bilbao International Airport",
                        distance: 15
                    },
                    {
                        gurl: "https://goo.gl/maps/mUN3GsVBfNh3d3eRA"
                    }
                ]
            },
            {
                id: 5,
                name: "Plaza Mayor",
                cityName: "Madrid",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/plaza-mayor-4.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Sol Station",
                        distance: 6.2
                    },
                    {
                        city2: "Nearest Airport - Madrid Barajis Airport",
                        distance: 14
                    },
                    {
                        gurl: "https://goo.gl/maps/ks5dP7GDvut8JATS8"
                    }
                ]
            },
            {
                id: 6,
                name: "Ciudad de las Artes y las Ciencias",
                cityName: "Valencia",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/spain-valencia-city-of-arts-and-sciences.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Joaquin Sorolla Station",
                        distance: 20
                    },
                    {
                        city2: "Nearest Airport - Treaudo Airport",
                        distance: 0.25
                    },
                    {
                        gurl: "https://goo.gl/maps/iyMEkrb8LxkdnuMs9"
                    }
                ]
            },
            {
                id: 7,
                name: "Beaches of Gran Canaria",
                cityName: "Canary Islands",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/05/spain-top-attractions-beaches-gran-canaria.jpg",
                category: "Beach",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Courtney Station",
                        distance: 2.6
                    },
                    {
                        city2: "Nearest Airport - Canaria Airport",
                        distance: 200
                    },
                    {
                        gurl: "https://goo.gl/maps/NvyCVoGfXWFWRewTA"
                    }
                ]
            },
            {
                id: 8,
                name: "La Rambla",
                cityName: "Barcelona",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/spain-barcelona-las-ramblas.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Liceu Station",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Barcelona Airport",
                        distance: 18
                    },
                    {
                        gurl: "https://goo.gl/maps/8gJ29rzmkd5QvtSdA"
                    }
                ]
            }
        ]
    },
    {
        id:8,
        name:"United States",
        description:"",
        heroImage:"",
        continent:"North America",
        locations:[
            {
                id: 1,
                name: "Grand Canyon",
                cityName: "Colorado",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/02/arizona-united-states-top-attractions-grand-canyon-panorama.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station -  Station",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Flagstaf Pulliam Airport",
                        distance: 100
                    },
                    {
                        gurl: "https://goo.gl/maps/DPCSxYVe6uUWv2xN9"
                    }
                ]
            },
            {
                id: 2,
                name: "Statue of Liberty",
                cityName: "New York",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/US/new-york-statue-of-liberty-2.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Liberty State Park Station",
                        distance: 7
                    },
                    {
                        city2: "Nearest Airport - New York JFK Airport",
                        distance: 23
                    },
                    {
                        gurl: "https://goo.gl/maps/2XdYiQRTzoQAFtBe6"
                    }
                ]
            },
            {
                id: 3,
                name: "White House",
                cityName: "Washington",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/US/washington-white-house-2.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - White House Station",
                        distance: 2.5
                    },
                    {
                        city2: "Nearest Airport - Ronald Reagon Washington Airport",
                        distance: 15
                    },
                    {
                        gurl: "https://goo.gl/maps/29PkYyExyZDK8gGe6"
                    }
                ]
            },
            {
                id: 4,
                name: "Walt Disney World Resort",
                cityName: "Orlando",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/US/florida-fireworks-walt-disney-world.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Liceu Station",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Orlando Airport",
                        distance: 15
                    },
                    {
                        gurl: "https://goo.gl/maps/9qm1JM3dupEkb15r6"
                    }
                ]
            },
            {
                id: 5,
                name: "Waikiki",
                cityName: "Honolulu",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/US/hawaii-waikiki-beach-2.jpg",
                category: "Beach",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Monsarrat Avenue Station",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Honolulu Airport",
                        distance: 12
                    },
                    {
                        gurl: "https://goo.gl/maps/pZxNTqUxTkzaec9T7"
                    }
                ]
            },
            {
                id: 6,
                name: "Las Vegas Strip",
                cityName: "Nevada",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/US/nevada-las-vegas-strip-2.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Kingman Amtrak Station",
                        distance: 100
                    },
                    {
                        city2: "Nearest Airport - Harry Reid Airport",
                        distance: 141
                    },
                    {
                        gurl: "https://goo.gl/maps/CCduxzBUiunH5HqX7"
                    }
                ]
            },
            {
                id: 7,
                name: "Yosemite National Park",
                cityName: "California",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/02/california-united-states-top-attractions-yosemite-view-of-valley.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Merced Station",
                        distance: 15
                    },
                    {
                        city2: "Nearest Airport - Fresno Airport",
                        distance: 104
                    },
                    {
                        gurl: "https://goo.gl/maps/L5GqYDLHTC5ZWRbw8"
                    }
                ]
            },
            {
                id: 8,
                name: "Golden Gate Bridge",
                cityName: "California",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/US/california-san-francisco-golden-gate-bridge-2.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Millbrae Station",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - San Fransisco Airport",
                        distance: 23
                    },
                    {
                        gurl: "https://goo.gl/maps/mJ3AYqjYbqVAFA5b6"
                    }
                ]
            }
        ]
    },
    {
        id:9,
        name:"China",
        description:"",
        heroImage:"",
        continent:"Asia",
        locations: [
            {
                id: 1,
                name: "The Great Wall of China",
                cityName: "Huairou",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CHN/china-great-wall-and-mountain.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Badaling great wall Station",
                        distance: 104
                    },
                    {
                        city2: "Nearest Airport - Beijing Capital Airport",
                        distance: 66
                    },
                    {
                        gurl: "https://goo.gl/maps/giZeSyUA5Cei1m9D7"
                    }
                ]
            },
            {
                id: 2,
                name: "The Forbidden City & the Imperial Palace",
                cityName: "Beijing",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/01/china-top-attractions-forbidden-city-imperial-palace-beijing.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Beigongmen Station",
                        distance: 15
                    },
                    {
                        city2: "Nearest Airport - Beijing Capital Airport",
                        distance: 25
                    },
                    {
                        gurl: "https://goo.gl/maps/7VN6pupxJ4icUtCX8"
                    }
                ]
            },
            {
                id: 3,
                name: "The Terracotta Army",
                cityName: "Xi'an",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CHN/terracotta-army.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Xian North Railway Station",
                        distance: 15
                    },
                    {
                        city2: "Nearest Airport - Xian Airport",
                        distance: 44
                    },
                    {
                        gurl: "https://goo.gl/maps/cd1cBxHaDjMprtAi9"
                    }
                ]
            },
            {
                id: 4,
                name: "Cruising the Li River",
                cityName: "Guilin",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CHN/guilin-kweilin.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Guilin North Railway Station",
                        distance: 11
                    },
                    {
                        city2: "Nearest Airport - Guilin International Airport",
                        distance: 104
                    },
                    {
                        gurl: "https://goo.gl/maps/JHqcr4qBBJa3Af9P8"
                    }
                ]
            },
            {
                id: 5,
                name: "Chengdu Research Base of Giant Panda Breeding",
                cityName: "Sichuan",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CHN/china-chengdu-research-base-giant-panda-breeding.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Chengdu East Railway Station",
                        distance: 18
                    },
                    {
                        city2: "Nearest Airport - Chengdu International Airport",
                        distance: 1100
                    },
                    {
                        gurl: "https://goo.gl/maps/HZZM1boLjaWZN6Gd8"
                    }
                ]
            },
            {
                id: 6,
                name: "The Classical Gardens of Suzhou",
                cityName: "Jiangsu",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CHN/china-suzhou-gardens.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Xian North Railway Station",
                        distance: 15
                    },
                    {
                        city2: "Nearest Airport - Sunan International Airport",
                        distance: 24
                    },
                    {
                        gurl: "https://goo.gl/maps/HZZM1boLjaWZN6Gdhttps://goo.gl/maps/cjq1qX7qpwxesH1A7"
                    }
                ]
            },
            {
                id: 7,
                name: "The Potala Palace",
                cityName: "Tibet",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CHN/potala-palace-lhasa.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Lhasa Railway Station",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - Gonggar Airport",
                        distance: 59
                    },
                    {
                        gurl: "https://goo.gl/maps/rGjTiCAWjL8mJruA6"
                    }
                ]
            },
            {
                id: 8,
                name: "Shanghai's Promenade",
                cityName: "The Bund",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/CHN/china-shanghai-bund.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Shanghai Railway Station",
                        distance: 20
                    },
                    {
                        city2: "Nearest Airport - Shanghai Pudong International Airport",
                        distance: 35
                    },
                    {
                        gurl: "https://goo.gl/maps/dntXDZFURrAjpU5S9"
                    }
                ]
            }
        ]
    },
    {
        id:10,
        name:"Germany",
        description:"",
        heroImage:"",
        continent:"Europe",
        locations: [
            {
                id: 1,
                name: "Berlin's Brandenburg Gate",
                cityName: "Athens",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/D/germany-brandenburg-gate.jpg",
                category: "Culture&Heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - What station is closest to Brandenburg Gate Potsdam Luisenplatz-Süd Railway Station",
                        distance: 20
                    },
                    {
                        city2: "Nearest Airport - Berling Brandenburg Airport",
                        distance: 24
                    },
                    {
                        gurl: "https://goo.gl/maps/ACjbWBA2nsYcKYkZ7"
                    }
                ]
            },
            {
                id: 2,
                name: "The Black Forest",
                cityName: "Baden-Württemberg",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/D/germany-black-forest.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Freiburg Railway Station",
                        distance: 30
                    },
                    {
                        city2: "Nearest Airport - Karlsruhe Airport",
                        distance: 26
                    },
                    {
                        gurl: "https://goo.gl/maps/3QvqyWrnDs3AhV757"
                    }
                ]
            },
            {
                id: 3,
                name: "The Ultimate Fairy-Tale Castle",
                cityName: "Bavaria",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/03/germany-top-attractions-ultimate-fairytale-castle-neuschwanstein.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Füssen Railway Station",
                        distance: 10
                    },
                    {
                        city2: "Nearest Airport - Memmingam Airport",
                        distance: 85
                    },
                    {
                        gurl: "https://goo.gl/maps/TzwmX1ks8VKsvsYs6"
                    }
                ]
            },
            {
                id: 4,
                name: "The Rhine Valley",
                cityName: "Bingen",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/D/germany-rhine-valley.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - West Rhine Railway Station",
                        distance: 27
                    },
                    {
                        city2: "Nearest Airport - Frankfort Airport",
                        distance: 60
                    },
                    {
                        gurl: "https://goo.gl/maps/AsjS7Wf4tk4T8bVM8"
                    }
                ]
            },
            {
                id: 5,
                name: "Berlin's Museum Island",
                cityName: "Birlin",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/D/germany-museum-island-berlin.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - S Hackescher Markt station",
                        distance: 70
                    },
                    {
                        city2: "Nearest Airport - Berlin Brandenburg Airport",
                        distance: 27
                    },
                    {
                        gurl: "https://goo.gl/maps/vm6vUJNSgZBh1hgC6"
                    }
                ]
            },
            {
                id: 6,
                name: "Munich's Marienplatz",
                cityName: "Munich",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/03/germany-top-attractions-munichs-marienplatz.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station",
                        distance: 2
                    },
                    {
                        city2: "Nearest Airport - Munich Airport",
                        distance: 36
                    },
                    {
                        gurl: "https://goo.gl/maps/s7RinLQzXT47D1ks9"
                    }
                ]
            },
            {
                id: 7,
                name: "Zugspitze Massif",
                cityName: "Bavaria",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/03/germany-top-attractions-zugspitze-massif.jpg",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Garmisch-Partenkirchen Railway Station",
                        distance: 8
                    },
                    {
                        city2: "Nearest Airport - Innsbruck Airport",
                        distance: 33
                    },
                    {
                        gurl: "https://goo.gl/maps/giJwYoE6Vu4yijch9"
                    }
                ]
            },
            {
                id: 8,
                name: "The Island of Rügen",
                cityName: "Mecklenburg—Western Pomerania",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2021/03/germany-top-attractions-island-of-rugen.jpg",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station",
                        distance: 100
                    },
                    {
                        city2: "Nearest Airport - Rostock Lagge Airport",
                        distance: 160
                    },
                    {
                        gurl: "https://goo.gl/maps/vqvskUjTGbSLanLe7"
                    }
                ]
            }
        ]
    }
]



export default Data;