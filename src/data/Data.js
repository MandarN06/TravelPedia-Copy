const Data = [
    {
        id: 1,
        name: "India",
        description: "India is a country that attracts millions of tourists every year and is considered one of the most popular tourist destinations in the world. These visitors are attracted to its natural beauty and cultural heritage. It has many historic sites as well like the Taj Mahal, Golden Temple, Red Fort, etc.",
        heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        continent: "Asia",
        locations: [
            {
                id: 1,
                name: "Taj-Mahal",
                cityName: "Agra",
                state: "Uttar Pradesh",
                Description: "Taj Mahal is the epitome of grandeur and splendour, you cannot fathom the beauty of this white marbled monument unless you stand in front of it. As you approach Taj Mahal, it gradually becomes known to you that this is no ordinary monument, but a vision come to life! Moved by its beauty and the deep affection of Shah Jahan for Mumtaz, the Nobel Laureate Rabindranath Tagore called it .A UNESCO World Heritage Site, it is located on the bank of the Yamuna River and is counted among the most popular heritage monuments in India.",
                imgUrl: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
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
                Description: "Goa is the smallest state in India that lies between the Sahyadri range of the Western Ghats and the Arabian Sea on the west coast of India. The capital of Goa is Panaji and its official language is Konkani. Also known as the fun capital, Goa is a tourist Destination in India that boasts perky beaches, swanky nightlife, the old city charm of churches and cathedrals, lush green palm trees, cashew plantations, vibrant carnivals, flea markets scrumptious cuisines, and an array of recreational activities. A party state, Goa throbs with the beats of music as every day is a carnival here. Famous for the cheerful nightlife Goa is all about fun and merry-making.\n Plan for 4/5 day trip\n Day 1 and Day 2: North Goa\nScenic beaches, exciting water-sports, partying spots,and architectural landmarks come together to make North Goa a traveler`s delight. When you are on a 4-day trip in Goa, make sure that you devote at least 2 days to explore the attractions in North Goa. Here are our suggestions.\n\n 1. Anjuna Beach \nAnjuna Beach is among the best spots to experience the classic Goan vibe. During the day this gorgeous beach sizzles with its glowing white sands, a plethora of water-sports, and several restaurants and shacks that offer a taste of authentic Goan cuisine and more. Once evening hits this beach, it transforms into a spot for enjoying an enticing nightlife, making it one of the top places to visit in Goa at night. The flea market held here every Wednesday is a crowd-puller.Wednesday, you shouldn`t give it a miss. \n\n2. Calangute Beach \n Stretching from Candolim to Baga, Calangute enjoys the reputation of being the queen of beaches in Goa. This scenic white sand beach is a paradise for people looking to engage in a session of adventurous water sports in Goa, including speed boat rides, banana rides, parasailing, water surfing, and lots more.If days are adventurous on this beach, nights are no less than sizzling. Enthralling beach parties can keep you dancing and drinking all through the night. \n\n9. Mangeshi Temple \nStanding in the vicinity of Velha Goa, Mangeshi Temple attracts travelers and devotees as one of the largest and oldest temples in Goa. The temple, which traces its origin to more than 450 years, is dedicated to the worship of Lord Mangesh, who is an incarnation of Lord Shiva \n Day 3 and Day 4: South Goa. \n South goa is a pleasant mix of man-made marvels and natural wonders, underlined with tranquilty.",
                imgUrl: "https://thumbs.dreamstime.com/b/beach-goa-india-5393913.jpg",
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
                Description: "Munnar, the famed hill station of south India, is a romantic locale where natural beauty is everywhere to visit, explore and to enjoy. Munnar is situated at the confluence of three mountain streams – Muthirapuzha, Nallathanni and Kundala – and the word ‘Munnar’ means three rivers in Malayalam.  Situated about 1600m above sea level, the hill station had been the summer resort of the British Government during the colonial era. Imprints of the colonial past stand tall in the Munnar town in the form of English country cottages. Virgin forests, savannah, rolling hills, scenic valleys, numerous streams, huge splashy waterfalls, sprawling tea plantations and winding walkways are all part of the great holiday experience on offer for a traveler to Munnar. Munnar is also known for Neelakurinji, a rare plant which flowers only once in twelve years.",
                imgUrl: "https://media.gettyimages.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8=",
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
                Description: "Coorg is famous for its coffee plantations, steep hills, countless streams, rich flora & fauna, lush forests and breathtaking views. Some of the must visit tourist attractions of Coorg include Nagarhole National Park, Abbi Falls, Iruppu Falls, The Raja's Seat, Madikeri Fort and Tibetan Buddhist Golden Temple.",
                imgUrl: "https://media.istockphoto.com/id/1216722235/photo/mountain-with-green-grass-and-beautiful-sky.jpg?s=612x612&w=0&k=20&c=UD4Rmexxtkci9q-gH_PCUaBw6suwTCKp7SkZTXukQ2U=",
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
                        gurl: "https://goo.gl/maps/LfG1jtigvw9FjC7U9"
                    }
                ]
            },
            {
                id: 5,
                name: "Manali",
                cityName: "Kullu",
                state: "Himachal Pradesh",
                Description: "A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains.",
                imgUrl: "https://www.shutterstock.com/image-photo/manali-himachal-pradesh-india-260nw-1350638618.jpg",
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
                Description: "Ooty is a gorgeous hill station in Tamil Nadu, and is considered a haven for nature lovers from all the country. Ensconced in the lap of nature, this town is surrounded on all sides by the towering Nilgiris, evergreen fir trees and of course, lakes small and large.",
                imgUrl: "https://images.unsplash.com/photo-1584373570791-5248df49afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b290eSUyQyUyMGluZGlhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
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
                Description: "Lonavla is known as jewel of sahyadri mountains. It is also known for manufacturing tough sweet chikkis. It is a major stop on the rail line that connects Mumbai and Pune. Surrounded by dense forests, waterfalls and dams close to lakes, it is a must visit place for nature fans.",
                imgUrl: "https://www.trawell.in/admin/images/upload/119127127Lonavala_Khandala_Main.jpg",
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
                Description: "The city of Lord Shiva, Varanasi, also known as Banaras and Kashi, is dotted with numerous sacred temples and ghats making it a spiritually blissful destination in India. Being the oldest city of India, Varanasi holds an important sacred significance which is perfectly blended in the sedating surrounding of the city.",
                imgUrl: "https://c4.wallpaperflare.com/wallpaper/654/598/448/water-city-varanasi-wallpaper-preview.jpg",
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
                Description: "Amritsar is the cultural and spiritual centre of Sikh religion and is home to Harmandir Sahib, also known as Golden Temple; which is one of the most important pilgrimage sites of Sikh religion. It also showcases the composite culture and secular heritage of Punjab.",
                imgUrl: "https://www.planetware.com/photos-large/IND/india-top-attractions-harmandir-sahib.jpg",
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
                Description: "The historical name of this region is KedarKhand and legend says, the Pandavas from the epic Mahabharata, after having defeated the Kauravas, felt guilty of having killed so many people and sought the blessings of Lord Shiva for redemption. The Lord eluded them repeatedly and took refuge at Kedarnath in the form of a bull. The Lord dived into the ground, leaving his hump on the surface at Kedarnath. The remaining portions of Lord Shiva appeared at four other places and are worshipped there as his manifestations. The arms of the Lord appeared at Tungnath, the face at Rudranath, the belly at Madmaheshwar and his locks (hair) at Kalpeshwar. The Kedarnath and four above mentioned shrines make the revered Panch Kedar pilgrimage circuit.",
                imgUrl: "https://www.euttaranchal.com/tourism/photos/kedarnath-2240900.jpg",
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
        description: "In France tourism is a major industry. France is the world's leading tourist destination. Not only is it situated at the heart of western Europe, bordering on all the larger countries in the region - Italy, Spain, Germany, Belgium, Switzerland and - across the straits of Dover - the UK; it also has Europe's second busiest airport - Paris Charles de Gaulle airport - and dozens more airports with international connections.In France tourism is a major industry. France is the world's leading tourist destination. Not only is it situated at the heart of western Europe, bordering on all the larger countries in the region - Italy, Spain, Germany, Belgium, Switzerland and - across the straits of Dover - the UK; it also has Europe's second busiest airport - Paris Charles de Gaulle airport - and dozens more airports with international connections.",
        heroImage: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        continent: "Europe",
        locations: [
            {
                id: 1,
                name: "Eiffel Tower",
                cityName: "Paris",
                state: null,
                Description: "Two senior engineers working for the architect and engineer Gustave Eiffel designed the Tower, which was then approved by Eiffel and proposed as the centerpiece for the world fair held in France’s capital, the Exposition Universelle in 1889. Once approved, 250 builders were hired to build the monument, which took over two years to finish. Initially, the Eiffel Tower was the subject of controversy. The artists of the period thought the monument to be monstrous, and given its poor profitability, it was suggested on several occasions that they should demolish it.During World War I, enemy messages were intercepted thanks to the tower radiotelegraphy center.Currently, the Eiffel Tower is the most-visited monument in the world with over 7 million visitors a year. This is partly due to the popularity of Paris as a tourist destination. \n planning & ticket booking - https://www.toureiffel.paris/en/rates-opening-times",
                imgUrl: "https://www.planetware.com/photos-large/F/france-eiffel-tower.jpg",
                category: "Travel Wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Champ de mars",
                        distance: 5
                    },
                    {
                        city2: "Nearest Airport - paris international airport",
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
                Description: "Formerly a royal palace, the Louvre embraces eight centuries of French history. Intended as a universal museum since its creation in 1793, its collections - among the finest in the world - span several thousands of years and a territory that extends from America to the confines of Asia.\n How To Plan Your Visit in Louvre Museum \n\n The Louvre museum is huge and the collections are displayed on 5 levels (levels -2 to 2 through 0) in 3 wings, Richelieu, Sully, and Denon, clearly marked on the Louvre layout. The collection is so huge and diverse that it`s impossible to finish the visit in one day! Originally the 3 wings are supposed to be interconnected, however, due to the astonishing craze for the Mona Lisa which was shifted from Room 711 in the Denon wing to a different room in Richelieu (level 2), certain rooms in the Sully wing were blocked preventing access to Richelieu wing.But still, you need to walk so far to see everything. With its 35,000+ works of art and 670,000 square feet of gallery space over multiple levels, you`ll be forgiven if you feel “lost” and like you`re head`s about to explode because you don`t know where to begin.\n\n  So the visit must be planned for a meaningful appreciation of the artifacts.\n 1)Monalisa \n 2)Glass Pyramid \n 3)Victory of Samothrace \n 4)Venus de Milo \n 5)Psyche Revived by Cupid`s Kiss",
                imgUrl: "https://www.planetware.com/wpimages/2021/11/france-top-attractions-musee-du-louvre.jpg",
                category: "Art & Festival",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station",
                        distance: 2
                    },
                    {
                        city2: "Nearest Airport - paris international airport",
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
                Description: "The Côte d'Azur is also glittering with world-class events such as the Cannes Film Festival – and the warm hues of its villages and gardens give it an inimitable holiday atmosphere, bolstered by the famous scents of its hinterland.",
                imgUrl: "https://www.planetware.com/photos-large/F/france-cote-d-azure.jpg",
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
                Description: "A magical island topped by a gravity-defying abbey, the Mont-Saint-Michel and its Bay count among France's most stunning sights. For centuries one of Europe's major pilgrimage destinations, this holy island is now a UNESCO World Heritage Site, as is its breathtaking bay.",
                imgUrl: "https://www.planetware.com/photos-large/F/france-mont-saint-michel-2.jpg",
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
                Description: "Provence is is both picturesque villages in the hills and busy metropolises possessing international airports (Nice and Marseille). Provence is of course olive groves and lavender; but there are also the famous vineyards of Côtes du Rhône, Côtes de Provence and Bandol everything growing to the hum of the cicadas !",
                imgUrl: "https://www.planetware.com/wpimages/2020/04/france-top-attractions-provence.jpg",
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
                Description: "Alsace is one of the most beautiful regions in France. It is known for its Christmas markets, its castles, its wine road and its proximity to Germany. It is also known for its high-quality gastronomy, especially its sauerkraut, its Flammekueche, and its white wines.",
                imgUrl: "https://www.planetware.com/wpimages/2020/04/france-top-attractions-alsace-villages.jpg",
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
                Description: "Biarritz, nugget of the Atlantic coast, rich in its architectural heritage and its history offers you to discover its many sites and museums. The city also offers a multitude of activities, cultural and leisure. You can practice Surf, Golf, Rugby or relax in Thalasso.",
                imgUrl: "https://www.planetware.com/photos-large/F/france-basque-country.jpg",
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
                Description: "Rocamadour is one of France's most important tourist destinations. Rocamadour has several highlights well worth exploring, although it is the 'village as a perfect unity' which is really the big attraction. The village clings to the cliff side above the river Alzou and is so picture perfect it is quite breathtaking.",
                imgUrl: "https://www.planetware.com/photos-large/F/france-rocamadour.jpg",
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
                Description: "The royal town has so much to offer. Known throughout the world for its magnificent palace and historical links with the French monarchy, Versailles has a whole host of other attractions on offer too. Come and re-live the history of France and the splendour of the Louis XIV era through the historic districts, cultural heritage, extraordinary locations and spectacular festivals and performances of Versailles.",
                imgUrl: "https://www.planetware.com/wpimages/2021/10/france-top-attractions-chateau-versailles-les-jardins.jpg",
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
                Description: "Discover the 'Terres Océanes' at the western tip, the Forest of Broceliande, the green inner lung, the little ports of Cornouaille (Brittany's Cornwall), and the pink granite rocks. From its bays, gulfs, capes and salt marshes to its capital city, Brittany is a marvel. DESTINATIONS Brittany.",
                imgUrl: "https://www.planetware.com/photos-large/F/france-brittany.jpg",
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
        description: "The beauty, variety and pristine quality of Australia's natural landscapes, from exotic coastal areas to lush rainforests and red deserts, make Australia a desirable travel destination. About six million visitors come to Australia each year lured by beautiful beaches, unique flora and fauna, friendly people and a relaxed atmosphere. Australia has some 9,700 protected nature areas such as national parks, and can offer visitors a vast and diverse array of nature-based tourism opportunities. Indigenous culture is also a unique and growing attraction.Food and wine tourism is expanding, in line with Australia's growing international reputation as a producer of high-quality wines and a supplier of fresh, regionally-based food products.",
        heroImage: "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.jpg?s=612x612&w=0&k=20&c=o7qSiUvYzMp94lYYb7R1ZUAMcEG54byX0bU3UY1z2sQ=",
        continent: "Australia",
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
                cityName: "Kimberley",
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
                        city2: "Nearest Airport - Kingscote Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/MkD2xrUBSjZTEnbc8"
                    }
                ]
            },
        ]
    },
    {
        id: 4,
        name: "Greece",
        description: "Greece mainland and the Greek islands have some of the favorite holiday destinations in Europe.Greece comes in 13th place (2019) in the world rating of tourist destinations, since, according to the National Statistical Service of Greece, it receives more than 30 million tourists every year, after countries such as the USA, China, Spain, France and Great Britain.Greece is a famous country, popular for its clean beaches and its long history.There are hundreds of archaeological and historical sites to visit in Greece that gloriously depict the country's past.Its landscape is mainly mountainous and the terrain is not very fertile, except for some valleys scattered along the Greek mainland.",
        heroImage: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        continent: "Europe",
        locartions: [
            {
                id: 1,
                name: "Acropolis",
                cityName: "Athens",
                state: null,
                Description: "ATHENS ITINERARY: DAY 1\n THE HEART OF ATHENS \n Your first of 2 days in Athens focuses on the main sites located around the Acropolis, ancient Greek and Roman sites that are over 2000 years old. You will also visit the Acropolis Museum, do a little shopping, and enjoy the view from one or two rooftop restaurants and bars. At the end of the day, you have the option to visit the Acropolis.This is a big walking day. You will walk 5 miles, not including the amount of walking you will do inside of museums, historical sites, etc. \n ACROPOLIS MUSEUM \n The Acropolis Museum is an archeological museum that houses the artifacts found on the Acropolis and the surrounding slopes. This is a great place to visit before you step foot on the Acropolis because you learn about the history behind the Parthenon, Erechtheion, and other temples and sanctuaries on the Acropolis.The museum opens at 8 am and tickets cost €10 during the summer months (April through October). \n KERAMEIKOS \nKerameikos is an area of Athens that served as potter`s quarters and an ancient cemetery. It`s also one of the least visited sites on the combination ticket, making this one of the best places to buy the combination ticket.\n The Combination Ticket - For €30, you can purchase a combination ticket that gets you admission into the Acropolis, Kerameikos, Ancient Agora, Roman Agora, Hadrian`s Library, Temple of Olympian Zeus, and Aristotle`s Lyceum.If you plan to visit the Acropolis and two additional sites, the ticket pays for itself. It costs €20 for summer admission into the Acropolis. For just 10 more euros, you get admission into six additional sites. Some of the more ancient greek and roman sites are:\n 1)Ancient Agora\n2)the Roman Agora\n 3)Hadrian's library \n\n For lunch, we recommend A for Athens, an awesome rooftop restaurant in Athens. The views over Monastiraki Square, the Ancient Agora, and the Acropolis are amazing and definitely one of the best views in the city. The restaurant is open for breakfast, lunch and dinner.",
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
                Description: "Santorini is a popular destination on many traveler`s wish lists, for good reason. The beaches, the photogenic villages, and the breathtaking sunsets in Oia attract a lot of visitors to this tiny island. If you are planning your Santorini itinerary, we have some suggestions for you. Whether you have 1, 2, or 3 days in Santorini, learn how to plan your time so that you can have an unforgettable experience. \n DAY 1 IN SANTORINI \n 1)FIRA TO OIA & SUNSET VIEWS IN OIA \n This option works best if you don`t have a full day on the island (for example, you are arriving from Mykonos on a morning ferry). This also works well if you want to explore part of the island without taking a tour or renting a car. And since walking from town to town and watching the sunset is free, if you are a budget traveler, this is a great way to spend 1 day in Santorini. The walk from Fira to Oia allows you to explore four wonderful little villages (Fira, Firostefani, Imerovigli, and Oia), get breathtaking views along the caldera, and end with dramatic sunset views on Oia.\n 2: TOUR OF SANTORINI \n If you only have one day in Santorini and have no desire to walk from town to town, consider taking a tour of the island.There are a number of land tours that will take you around the island, where you visit popular spots such as the black and red sand beaches, Akrotiri Archaeological Site, Profitis Ilias, and one of Santorini`s wineries. It`s a great way to explore the island without the hassle of driving. \n CHECK FOR FULL DAY GUIDED TOUR: https://www.getyourguide.com/santorini-l753/santorini-highlights-tour-with-wine-tasting-sunset-in-oia-t400298/?partner_id=7QCPDDJ&utm_medium=online_publisher&placement=content-middle&cmp=santitin&deeplink_id=1a88dc4b-a865-5951-8a6b-81f2deb4b2f5",
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
                        city2: "Nearest Airport - Corfu Lonis Kapodistrias Airport",
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
                        city2: "Nearest Airport - Kingscote Airport",
                        distance: 120
                    },
                    {
                        gurl: "https://goo.gl/maps/UX3nqWn7K1BSvpBY7"
                    }
                ]
            },
        ]
    },
    {
        id: 5,
        name: "Switzerland",
        description: "Switzerland is a breathtakingly beautiful land-locked country in Central Europe with France to the west, Italy to the south, Austria to the east and Germany to the north. The country is famous for its scenic Alps and its rolling hills, plains, and lakes. It is also renowned for its chocolates and watches, while the Swiss knife is a legend in itself! Tourism in Switzerland is a delight of skiing, snow-walking, gorging on chocolates and cheeses and of course, swaying in the Alps. Here is a travel guide to Switzerland for one and sundry, to help you plan your next holiday.",
        heroImage: "https://images.unsplash.com/photo-1583702993462-43615c05ceee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        continent: "Europe",
        locations: [
            {
                id: 1,
                name: "The Matterhorn",
                cityName: "Alps",
                state: null,
                Description: "Tour Description:\n This is a short tour, but it gives the participants just enough time to acclimatize and train on two peaks before climbing the Matterhorn. This is the minimum to insure success. If you feel you need more practice, if you do not have all the skills necessary I suggest the 7/8 days tour that will give you more time to learn all necessary techniques and become familiar with alpine climbing style. \n Itinerary: \nDay 1: Meet in Zermatt (early morning), review gear, condition and tour. Train ride to Rotenboden, ascent of Riffelhorn review of rock climbing techniques \nDay 2: Lift ride to klein Matterhorn, traverse of Breithorn plateau and Di Verra glacier ascent of pollux 4092m/13`299ft, descent to Vald`Ayas refugio. \nDay 3:  Ascent and traverse of Breithorn, 4076m. a great ridge traverse with snow,ice and rock climb. Return to Zermatt.\nDay 4: Hike to Hornli hut, reconnaissance of the bottom part of the Matterhorn that we will climb in the dark the next morning. \nDay 5: Ascent of Matterhorn, 4476m. A long day that start at 3:00 am and last for 10 to 12 hours. Return to Zermatt that day. \n Difficulty:\n This tour require strong physical condition and previous mountaineering experience. ",
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
                Description: "Located in the mountainous Bernese Oberland region, Interlaken is a traditional picturesque resort town in central Switzerland. The town itself is small but holds a few attractions to keep you busy. There are plenty of things to do in Interlaken for all age groups. Together with Wengen, Lauterbrunnen, Mürren, Grindelwald, and Isenfluh, visitors can easily plan for a few days of Interlaken itinerary to enjoy all kinds of outdoor activities and explore the nearby town in the surrounding areas.\n How To Get To Interlaken \n First of all, being a major travel destination in Switzerland, Interlaken enjoys a well-connected public transport network from various major cities. Many cities such as Lucern, Bern, and Zurich can get to the Interlaken with an easy train ride.\n Zurich to Interlaken: 1h:55 by train \n Lucern to Interlaken: 1h:05 by train \n Basel to Interlaken: 1h:55 by train /n Where to stay in Interlaken \n There is a wide range of accommodation in the Jungfrau region. As a resort town in Switzerland, Interlaken is a lovely place to stay for at least 1 night. There is an abundance of high-quality and mid-range of accommodations if you are looking for where to stay in Interlaken /n Here are some options: \n 1)Budget: Backpackers Villa Sonnenhof - Offers simple yet stylish rooms that are individually decorated. \n 2) Mid Range: Carlton-Europe Vintage Hotel - A quaint boutique hotel located near the Interlaken Ost Station. \n 3)Mid Range: Carlton-Europe Vintage Hotel - A quaint boutique hotel located near the Interlaken Ost Station. \n 4)Luxury: Victoria Jungfrau Grand Hotel & Spa - A famous five-star hotel that offers luxurious stay and wonderful service. All rooms have a distinctive design and décor, ranging from classic to contemporary.",
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
                        city2: "Nearest Airport - KingsCote Airport",
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
                        city2: "Nearest Airport - KingsCote Airport",
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
        description:"Canada is a country as diverse in culture as it is immense in size. Multiculturalism is a cherished attribute of Canada, and is reflected in the many distinctive communities across the country. French and English are the two official languages and are most commonly spoken in Canada, although there are also a multitude of languages spoken by aboriginal peoples and communities of immigrants from diverse origins. The infusion of traditions from a wide variety of ethnic communities combined with a neighborly attitude makes Canada a vibrant destination for travel.",
        heroImage:"https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        continent: "North America",
        locations: [
            {
                id: 1,
                name: "Niagara Falls",
                cityName: "Ontario",
                state: null,
                Description: "Niagara Falls is a popular destination in North America. Straddling the border between the United States and Canada, Niagara Falls has the highest flow rate of any waterfall in the world, including the mighty Victoria Falls in Africa and Iguaza Falls in South America. Not only can you tour the Falls by boat, helicopter, and your own two feet, but there are plenty of activities in the area to keep visitors busy for days. Sure, you could visit Niagara Falls in one quick, rushed day, but it is better experienced with a two day stay (or longer). \n NIAGARA FALLS: DAY 1 \n MAID OF THE MIST \n Purchase your tickets for the Maid of the Mist voyage. This is a twenty minute boat ride on the Niagara River. Get up close with all three waterfalls (American Falls, Bridal Veil Falls, and Horseshoe Falls) and witness the awesome power of these waterfalls. Ponchos are provided but expect to get wet! \n 1) Tours run every 15 minutes and last 20 minutes \n 2)Maid of the Mist runs from the end of April to early November \n 3)For more information, or to purchase your tickets, visit the Maid of the Mist website. \n\n 1. OBSERVATION TOWER \n After the journey on the Maid of the Mist, walk out to the Observation Tower for views of the Falls and Canada. You can also do this while you are waiting for your Maid of the Mist Voyage.\n 2. CAVE OF THE WINDS \n Next is the Cave of the Winds. The Cave of the Winds was one of our favorite things to do at Niagara Falls. To get to the Cave of the Winds, take the pedestrian bridge to Goat Island.Visitors take an elevator down into Niagara Gorge, then walk along wooden boardwalks to Hurricane Deck. Why is it called Hurricane Deck? Because you are standing under Bridal Veil Falls…the winds and the mist blowing onto you makes it feel like you are caught in a tropical storm. You will get wet!!! It is a thrilling experience, especially for kids.\n 3. TERAPIN POINT \n After Cave of the Winds, continue your journey on the American side. Walk up to Terrapin Point, a great spot to view Horseshoe Falls. \n MORE THINGS TO DO ON THE US SIDE OF NIAGARA FALLS \n From here, you can dine at the Top of the Falls Restaurant and/or walk around Goat Island. Then it is time to walk back to your car and drive to Canada.\n If you have the time, other activities on the American side include the Aquarium of Niagara, Niagara Gorge Discovery Center (gateway into short hikes around the Falls), and Niagara Adventure Theater.",
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
            },
        ]
    },
    {
        id: 7,
        name:"Spain",
        description:"Spain is a larger than life expression of beauty. A contrast of wild and tame, layered and exotic, and certainly one of the places that you must visit at least once in your lifetime. It wouldn’t be too off the mark to think of Spain as a symbol of life, vibrant and resonating with culture and all sorts of delights. Travellers to Spain are taken in by the gorgeous vistas, the glorious mountain ranges, the warm Mediterranean waters, the historical cathedrals and of course, the delicious food. ",
        heroImage:"https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        continent: "Europe",
        locations: [
            {
                id: 1,
                name: "The Alhambra and Generalife Gardens",
                cityName: "Granada",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/E/spain-granada-alhambra-4.jpg",
                category: "Art&Festival",
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
            },
        ]
    },
    {
        id:8,
        name:"United States",
        description:"The United States of America, which is commonly referred to as the United States or U.S., located in the continent of North America covers an area of 9.826 million sq km, which makes it the third largest country in the world in terms of area. Bordered by Canada on the north and Mexico on the south, the country is bound by the Atlantic Ocean on the east, Pacific Ocean on the west, while the Gulf of Mexico touches its southeast coast. U.S. comprises 48 contiguous states, with the state of Alaska and the island state of Hawaii in the mid-Pacific forming the 49th and 50th states respectively. The geography of the country ranges from Arctic in Alaska to subtropical features in Hawaii and Florida. This vast mass of land spans from arid desert to wet rain forests, from outstretched prairie to rugged peaks, and from a volcanic landscape in Hawaii to elongated coastlines. The U.S. is a melting pot where people from the different ethnic backgrounds and national origins exist. The most significant cultural aspect of this country is that it recognizes its people not by their ethnicity but by their citizenship and allegiance. The culture of this country embraces all the elements be it conservative or liberal, and gives the rights of free expression, individualism and egalitarianism. The variety in American culture is unique in the world. The places of interest in the U.S. are unlimited, from classy urban marvels and jazzy nightlife to quaint little countryside beauties; the country boasts something for everyone. Washinton D.C., the capital city, houses three most important buildings, the Capitol, White House and Supreme Court. While, New York is the influential center for finance, fashion, culture and arts. Home to Time Square, Statue of Liberty, the Empire State Building and other iconic buildings, New York is a fast-paced city. San Francisco is known for its beautiful landscape, foggy locales, cable cars, and vibrant Victorian houses. ",
        heroImage:"https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        continent: "North America",
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
            },
        ]
    },
    {
        id:9,
        name:"China",
        description:"China, known to everybody as “World’s Factory” is not only a huge state with thousands of plants and overpopulated cities , whose total population exceeds one billion people, but also one of the most interesting and various tourist centers. The third largest country (after Russia and Canada), it has everything that can be interesting to a foreigner: architectural monuments of one of the most ancient civilizations, national parks with different climate and nature, modern metropolises and small provincial towns which managed to preserve their original culture, amazing sand beaches and inaccessible snow-white mountain tops.Cultural tourism in the tourist sphere in China, as in many other countries, holds a high position. The country with the history numbering more than one thousand years, has a great many of monuments belonging to different dynasties ruling as far back as BC, pilgrimage destinations of Buddhism and other religions, colossal sculptures and temples, and the Great Wall of China, one of its visiting cards. Furthermore the architecture and cultural features within the country differ considerably depending on the region.",
        heroImage:"https://images.unsplash.com/photo-1547150492-da7ff1742941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        continent: "Asia",
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
            },
        ]
    },
    {
        id:10,
        name:"Germany",
        description:"While Berlin is a favorite travel destination for tourists from near and far, Bavaria is actually the most popular tourist destination in the country, with 100 million overnight stays in 2019. This is because Germany is also a really popular vacation destination among Germans. This means that most visitors come from Germany itself! According to deutschland.de, the following countries rank next: The Netherlands, Switzerland and the USA.When traveling to or within Germany, the majority of people are looking for history, culture and natural beauty. In metropolitan cities such as Munich, Berlin or Hamburg, those interested in culture enjoy visiting spectacular sights or experiencing art. Active holidaymakers like to head to the Bavarian Alps, the Black Forest or the Rhine Valley to indulge in some real action.",
        heroImage:"https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        continent: "Europe",
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
            },
        ]
    },
    {
        id:11,
        name:"Japan",
        description:"Japan is the most amazing tourist destination and it offers many unique experiences that you cannot find in any other part of the world. The culture of this country is an interesting blend of Eastern traditions and Western modernity that can be seen everywhere. Japan is one of the oldest civilizations and has a beautiful and diverse history. The stunning, diverse scenery with mountains and breathtaking views, which are much appreciated by the Japanese, offers so many different experiences that attract tourists from all corners of the world. In this article we give you our best reasons why you should make a trip to this amazing country at least once in your lifetime.",
        heroImage:"https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        continent: "Asia",
        locations: [
            {
                id: 1,
                name: "Mount fuji",
                cityName: "fuji",
                state: "Honshu",
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/JPN/japan-attractions-mount-fuji.jpg",
                category: "Ancient&Historical",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station -  kawaguchiko train station",
                        distance: 3
                    },
                    {
                        city2: "Nearest Airport - shizuoka airport",
                        distance: 81
                    },
                    {
                        gurl: "https://goo.gl/maps/nTmGLMbqzGu1DEhBA"
                    }
                ]
            },
            {
                id: 2,
                name: "Imperial Tokyo",
                cityName: "Tokyo",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/JPN/japan-attractions-imperial-palace.jpg",
                category: "culture&heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Tokyo",
                        distance: 0.8
                    },
                    {
                        city2: "Nearest Airport - Haneda airport",
                        distance: 20
                    },
                    {
                        gurl: "https://goo.gl/maps/iMCMtZaYSW5JAHAQA"
                    }
                ]
            },
            {
                id: 3,
                name: "The Hiroshima peace memorial park",
                cityName: "Hiroshima",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/photos-large/JPN/japan-attractions-hiroshima-peace-memorial-park.jpg",
                category: "Travel wanderlust",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Hiroshima station",
                        distance: 2.6
                    },
                    {
                        city2: "Nearest Airport - Iwakuni Kintaikyu airport",
                        distance: 33
                    },
                    {
                        gurl: "https://goo.gl/maps/9ZtnA2cRRCDQTNtv9"
                    }
                ]
            },
            {
                id: 4,
                name: "Osaka Castle",
                cityName: "Osaka",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2020/09/japan-top-attractions-osaka-castle.jpg",
                category: "Culture&heritage",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Osakajokitazume station",
                        distance: 0.8
                    },
                    {
                        city2: "Nearest Airport - Osaka international(Itami) airport",
                        distance: 17
                    },
                    {
                        gurl: "https://goo.gl/maps/zA2PBGwR523aUSvw9"
                    }
                ]
            },
            {
                id: 5,
                name: "Shinjuku Gyoen National garden",
                cityName: "Tokyo",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/japan-top-attractions-shinjuku-gyoen-national-garden.jpg",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - Sendagaya station",
                        distance: 7.2
                    },
                    {
                        city2: "Nearest Airport - Haneda International airport",
                        distance: 24
                    },
                    {
                        gurl: "https://goo.gl/maps/vm6vUJNSgZBh1hgC6"
                    }
                ]
            },
            {
                id: 6,
                name: "Hakone-open air museum",
                cityName: "Hakone",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/japan-top-attractions-hakone-open-air-museum.jpg",
                category: "Adventure",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - chokokunomori train station",
                        distance: 1.4
                    },
                    {
                        city2: "Nearest Airport - Oshima airport",
                        distance: 84
                    },
                    {
                        gurl: "https://goo.gl/maps/BrRvbDu2pQonjHDP8"
                    }
                ]
            },
            {
                id: 7,
                name: "Okinawa churaumi aquarium",
                cityName: "Tokyo",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/japan-top-attractions-okinawa-churaumi-aquarium.jpg",
                category: "Nature",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station -Tokyo Narita",
                        distance: 160
                    },
                    {
                        city2: "Nearest Airport - Tokyo Haneda airport",
                        distance: 93
                    },
                    {
                        gurl: "https://goo.gl/maps/eTN4FVpXwrYwmRWAA"
                    }
                ]
            },
            {
                id: 8,
                name: "Arashiyama Monkey park",
                cityName: "Kyoto",
                state: null,
                Description: "",
                imgUrl: "https://www.planetware.com/wpimages/2022/02/japan-top-attractions-arashiyama-monkey-park.jpg",
                category: "Wildlife",
                rating: 0,
                transport: [
                    {
                        city1: "Nearest Railway Station - arashiyama train station",
                        distance: 4.5
                    },
                    {
                        city2: "Nearest Airport - Kyoto kansai Airport",
                        distance: 10
                    },
                    {
                        gurl: "https://goo.gl/maps/imfE6P5fpEpypETz8"
                    }
                ]
            },

        ] 
    }
]


export default Data;