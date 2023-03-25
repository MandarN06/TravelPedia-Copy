const productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "The Musée du Louvre contains more than 380,000 objects and displays 35,000 works of art",
        // heroImage: "/images/products/jbl660nc-1.png",
        heroImage: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg",
        images: [
            "/images/products/jbl660nc-1.png",
            "/images/products/jbl660nc-2.png",
            "/images/products/jbl660nc-3.png",
            "/images/products/jbl660nc-4.png",
        ],
        brand: "JBL",
        title: "Musée du Louvre",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5,
        originalPrice: 14999,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "https://thumbs.dreamstime.com/b/beach-goa-india-5393913.jpg",
            "/images/products/boat518-2.png",
            "/images/products/boat518-3.png",
            "/images/products/boat518-4.png"
        ],
        brand: "boAt",
        title: "Goa,India",
        cityName: "Goa",
        state: "Goa",
        info: "On-Ear Wireless Headphones",
        category: "Beach Holiday",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
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
        tag: "hero-product",
        tagline: "The lights dazzle on the water and the peace of the river relaxes the total cruise",
        // heroImage: "/images/products/boat131-3.png",
        heroImage: "https://img.buzzfeed.com/buzzfeed-static/static/2021-11/9/17/asset/9b965316ae44/sub-buzz-414-1636477332-5.jpg?downsize=900:*&output-format=auto&output-quality=auto",
        images: [
            "/images/products/boat131-1.png",
            "/images/products/boat131-2.png",
            "/images/products/boat131-3.png",
            "/images/products/boat131-4.png",
        ],
        brand: "boAt",
        title: "Take A Seine River Cruise",
        info: "Wireless In-Ear Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "https://media.istockphoto.com/id/1216722235/photo/mountain-with-green-grass-and-beautiful-sky.jpg?s=612x612&w=0&k=20&c=UD4Rmexxtkci9q-gH_PCUaBw6suwTCKp7SkZTXukQ2U=",
            "/images/products/boat110-2.png",
            "/images/products/boat110-3.png",
            "/images/products/boat110-4.png",
        ],
        brand: "boAt",
        title: "Coorg, India",
        info: "In-Ear Wired Earphones",
        cityName: "Madikeri",
        state: "Karnataka",
        category: "Nature",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
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
        images: [
            "https://www.euttaranchal.com/tourism/photos/kedarnath-2240900.jpg",
            "/images/products/boat410-2.png",
            "/images/products/boat410-3.png",
            "/images/products/boat410-4.png",
        ],
        brand: "boAt",
        title: "Kedarnath,India",
        cityName: "Kedarnath",
        state: "Uttarakhand",
        info: "Bluetooth & Wired On-Ear Headphones",
        category: "Culture&Heritage",
        type: "On Ear",
        connectivity: "Bluetooth & Wired",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
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
    },
    {
        id: 6,
        tag: "hero-product",
        heroImage:"https://www.planetware.com/photos-large/F/france-eiffel-tower.jpg",
        images: [
            "https://www.planetware.com/photos-large/F/france-eiffel-tower.jpg",
            "/images/products/jbl200bt-2.png",
            "/images/products/jbl200bt-3.png",
            "/images/products/jbl200bt-4.png",
        ],
        brand: "Along The Year",
        title: "Eiffel Tower, France",
        cityName: "Paris",
        state: null,
        info: "In-Ear Wireless Neckbands",
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
        ],
        category: "Travel Wanderlust",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tagline: "Give your favourite music a boost.",
        heroImage: "/images/products/sonyxb910n-1.png",
        images: [
            "https://www.planetware.com/photos-large/F/france-cote-d-azure.jpg",
            "/images/products/sonyxb910n-2.png",
            "/images/products/sonyxb910n-3.png",
            "/images/products/sonyxb910n-4.png",
        ],
        brand: "Sony",
        title: "Cote d'Azur, France",
        cityName: "French Riviera",
        state: null,
        info: "The Côte d'Azur is also glittering with world-class events such as the Cannes Film Festival – and the warm hues of its villages and gardens give it an inimitable holiday atmosphere, bolstered by the famous scents of its hinterland.",
        category: "Beach Holiday",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
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
        id: 8,
        tag: "featured-product",
        images: [
            "https://www.planetware.com/photos-large/F/france-mont-saint-michel-2.jpg",
            "/images/products/jbl760nc-2.png",
            "/images/products/jbl760nc-3.png",
            "/images/products/jbl760nc-4.png",
        ],
        brand: "JBL",
        title: "Mont Saint-Michel,France", cityName: "Manch,Normandy",
        state: null,
        info: "Wireless Over-Ear NC Headphones",
        category: "Travel Wanderlust",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",transport: [
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
        id: 9,
        tag: "featured-product",
        images: [
            "https://www.planetware.com/photos-large/F/france-basque-country.jpg",
            "/images/products/boat255r-2.png",
            "/images/products/boat255r-3.png",
            "/images/products/boat255r-4.png",
        ],
        brand: "boAt",
        title: "Biarritz,France",
        info: "Biarritz, nugget of the Atlantic coast, rich in its architectural heritage and its history offers you to discover its many sites and museums. The city also offers a multitude of activities, cultural and leisure. You can practice Surf, Golf, Rugby or relax in Thalasso.",cityName: "Biarritz",
        state: null,
        category: "Travel Wanderlust",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",transport: [
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
        id: 10, tag: "hero-product",
        tagline: "Explore the Kangaroo Is",
        heroImage:   "https://www.planetware.com/photos-large/AUS/australia-new-south-wales-sydney-opera-house.jpg",
        images: [
            "https://www.planetware.com/photos-large/AUS/australia-new-south-wales-sydney-opera-house.jpg",
            "/images/products/jbl100-2.png",
            "/images/products/jbl100-3.png",
            "/images/products/jbl100-4.png",
        ],
        brand: "JBL",
        title: "Australia",
        info: "The beauty, variety and pristine quality of Australia's natural landscapes, from exotic coastal areas to lush rainforests and red deserts, make Australia a desirable travel destination. About six million visitors come to Australia each year lured by beautiful beaches, unique flora and fauna, friendly people and a relaxed atmosphere. Australia has some 9,700 protected nature areas such as national parks, and can offer visitors a vast and diverse array of nature-based tourism opportunities. Indigenous culture is also a unique and growing attraction.Food and wine tourism is expanding, in line with Australia's growing international reputation as a producer of high-quality wines and a supplier of fresh, regionally-based food products.",
        category: "Art & Festival",
        type: "In Ear", cityName: "New South Wales",
        state: null,
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",transport: [
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
        id: 11,
        images: [
            "https://www.planetware.com/photos-large/AUS/australia-victoria-melbourne.jpg",
            "/images/products/sony1000xm4-2.png",
            "/images/products/sony1000xm4-3.png",
            "/images/products/sony1000xm4-4.png"
        ],
        brand: "Sony",
        title: "Melbourne's Culture,Australia", cityName: "Victoria",
        state: null,
        info: "Wireless In-Ear NC Headphones",
        category: "Art & Festival",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        ratings: 382,
        rateCount: 3,
        path: "/product-details/",
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
        id: 12,
        images: [
            "https://www.planetware.com/wpimages/2021/07/australia-top-attractions-kangaroo-island-south-australia-aerial.jpg",
            "/images/products/boat228-2.png",
            "/images/products/boat228-3.png",
            "/images/products/boat228-4.png",
        ],
        brand: "boAt",
        title: "Kangaroo Island,Australia",
        cityName: "South Australia",
        state: null,
        info: "In-Ear Wired Earphones",
        category: "WildLife",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        ratings: 1178,
        rateCount: 5,
        path: "/product-details/", transport: [
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
        id: 13,
        tag: "featured-product",
        images: [
            "/images/products/jbl-endu-1.png",
            "/images/products/jbl-endu-2.png",
            "/images/products/jbl-endu-3.png",
            "/images/products/jbl-endu-4.png",
        ],
        brand: "JBL",
        title: "Horizontal Falls, Austrailia",
        info: "In-Ear Wired Earphones",
        cityName: "Kimberley",
        state: null,
        category: "Adventure",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: 1144,
        rateCount: 5, transport: [
            {
                city1: "Nearest Railway Station - Lawson",
                distance: 120
            },
            {
                city2: "Nearest Airport - Kingscote Airport",
                distance: 120
            },
            {
                gurl: "https://goo.gl/maps/MkD2xrUBSjZTEnbc8"
            }
        ],
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "https://www.planetware.com/photos-large/GR/greece-athens-acropolis-evening-view-2.jpg",
            "/images/products/boat203-2.png",
            "/images/products/boat203-3.png",
            "/images/products/boat203-4.png",
        ],
        brand: "boAt",
        title: "Acropolis ,Greece",
        info: "Greece mainland and the Greek islands have some of the favorite holiday destinations in Europe.Greece comes in 13th place (2019) in the world rating of tourist destinations, since, according to the National Statistical Service of Greece, it receives more than 30 million tourists every year, after countries such as the USA, China, Spain, France and Great Britain.Greece is a famous country, popular for its clean beaches and its long history.There are hundreds of archaeological and historical sites to visit in Greece that gloriously depict the country's past.Its landscape is mainly mountainous and the terrain is not very fertile, except for some valleys scattered along the Greek mainland.",
        category: "Culture&Heritage", cityName: "Athens",
        state: null,
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1074,
        originalPrice: 3999,
        quantity: 1,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/", transport: [
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
        id: 15,
        images: [
            "https://www.planetware.com/photos-large/GR/greece-santorini-blue-roof-churches-and-mediterranean.jpg",
            "/images/products/sonych710n-2.png",
            "/images/products/sonych710n-3.png",
            "/images/products/sonych710n-4.png",
        ],
        brand: "Sony",
        title: "Santorini, Greece", 
        cityName: "Fira and Oia",
        state: null,
        info: "Greece mainland and the Greek islands",
        category: "Travel Wanderlust",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 8520,
        originalPrice: 14990,
        quantity: 1,
        ratings: 853,
        rateCount: 4,
        path: "/product-details/",
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
        id: 16,
        images: [
            "https://www.planetware.com/photos-large/GR/greece-mykonos-seaside-town-with-waves.jpg",
            "/images/products/jbl500bt-2.png",
            "/images/products/jbl500bt-3.png",
            "/images/products/jbl500bt-4.png",
        ],
        brand: "JBL",
        title: "Mykonos, Greece",
        info: "On-Ear Wireless Headphones",
        category: "Beach",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 3282,
        originalPrice: 3999,
        quantity: 1,
        ratings: 364,
        rateCount: 4,
        path: "/product-details/",
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
        id: 17,
        images: [
            "https://www.planetware.com/wpimages/2019/01/greece-top-attractions-corfu-beach.jpg",
            "/images/products/boat381-2.png",
            "/images/products/boat381-3.png",
            "/images/products/boat381-4.png",
        ],
        brand: "boAt",
        title: "Corfu, greece",  cityName: "Corfu",
        state: null,
        info: "In-Ear Wireless Earbuds",
        category: "Travel Wanderlust",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1699,
        originalPrice: 4990,
        quantity: 1,
        ratings: 1011,
        rateCount: 5,
        path: "/product-details/",
        transport: [
            {
                city1: "Nearest Railway Station - Lawson",
                distance: 120
            },
            {
                city2: "Nearest Airport - Corfu Lonis Kapodistrias Airport",
                distance: 2.7
            },
            {
                gurl: "https://goo.gl/maps/s1WdKwuNpH3Aoqir5"
            }
        ]
    },
    {
        id: 18,
        images: [
            "https://www.planetware.com/photos-large/CH/switzerland-matterhorn.jpg",
            "/images/products/sony-ex14ap-2.png",
            "/images/products/sony-ex14ap-3.png",
            "/images/products/sony-ex14ap-4.png"
        ],
        brand: "Sony",
        title: "The Matterhorn,Switzerland", cityName: "Alps",
        state: null,
        info: "Switzerland is a breathtakingly beautiful land-locked country in Central Europe with France to the west, Italy to the south, Austria to the east and Germany to the north. The country is famous for its scenic Alps and its rolling hills, plains, and lakes. It is also renowned for its chocolates and watches, while the Swiss knife is a legend in itself! Tourism in Switzerland is a delight of skiing, snow-walking, gorging on chocolates and cheeses and of course, swaying in the Alps. Here is a travel guide to Switzerland for one and sundry, to help you plan your next holiday.",
        category: "Adventure",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 549,
        originalPrice: 1290,
        quantity: 1,
        ratings: 530,
        rateCount: 4,
        path: "/product-details/",
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
        id: 19,
        images: [
            "https://www.planetware.com/photos-large/CH/switzerland-interlaken-2.jpg",
            "/images/products/sonyxb400-2.png",
            "/images/products/sonyxb400-3.png",
            "/images/products/sonyxb400-4.png",
        ],
        brand: "Sony", cityName: "Höhematte",
        state: null,
        title: "Interlaken,Switzerland",
        info: "Wireless Extra Bass In-Ear Neckbands",
        category: "Travel Wanderlust",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
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
];

export default productsData;