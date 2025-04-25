import jaipur from "../../../assets/images/home_image_slider_1.webp";
import shirdi from "../../../assets/images/home_image_slider_2.webp";
import manali from "../../../assets/images/home_image_slider_3.webp";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaSpa,
  FaBed,
  FaGlassMartiniAlt,
  FaDumbbell,
  FaWifi,
  FaConciergeBell,
} from "react-icons/fa";

export const HotelData = {
  "renest-jaipur": {
    images: [jaipur, shirdi, manali],

    hotelName: "Renest Jaipur",
    hotelAddress:
      "Gopal Pura bypass Road, Near Ganga Jamuna Petrol Pump, New Aatish Market, Mansarovar, Jaipur, Rajasthan 302020",
    phoneNumber: " +91 79 00222211",
    emails: ["reservations.jaipur@renesthotels.com", "crs1@renesthotels.com"],

    overviewImages: [jaipur, shirdi, manali],
    overviewText: `
    Jaipur is a vibrant city with the charm of both worlds - the old regal era and the modern age. Popularly known as the "Pink City", Jaipur has pink hues in the backdrop with magnificent forts, palaces, temples, museums, and gates. Discover the perfect stay at Renest Jaipur during your trip to Jaipur. The hotel is the epitome of exceptional hospitality and comfort. Situated in Mansarovar, Jaipur, the hotel is centrally located with easy access to the commercial district, tourist attractions, and prime residential areas.
    
    The hotel in Mansarovar displays a contemporary design, ideally suited for both business and leisure travellers. The sophisticated rooms and suites, restaurants and bar with delicious food and drinks, and splendid event venues make Renest Jaipur one of the best hotels in Mansarovar. The hotel has a rooftop pool with a gorgeous view of the city and a fully-equipped fitness centre. The Cedar Spa is home to the best therapies in the city.
  `,

    roomsImages: [jaipur],
    roomsTextContent: `
    Renest Jaipur houses 80 rooms in Mansarovar across three categories - Sparrow Room, Parrot Room, and Pelican Suite. Each room has contemporary decor and is well-appointed with modern amenities like tea/coffee maker, hairdryer, electronic safe, mini-refrigerator, packaged drinking water, 24 hrs satellite TV channels, international direct dial facility, high-speed internet connectivity, and more. Choose the room that best fits your bill and we will ensure a memorable stay. 

    `,
    diningDetails: [
      {
        img: [jaipur],
        title: "Tribe",
        description:
          "Tribe is our all-day dining restaurant in Mansarovar that serves a scrumptious multi-cuisine menu with the choicest Indian, Asian, and European dishes.",
      },
      {
        img: [shirdi],
        title: "Culturati",
        description:
          "Relish mouth-watering local cuisines at this rooftop restaurant in Jaipur while enjoying the panoramic views of the city.",
      },
      {
        img: [jaipur],
        title: "Jugnu",
        description:
          "Our bar in Jaipur will spark up your evening with an extensive range of wine and cocktail menus and music that will match your vibe.",
      },
    ],

    meetingEventImages: [jaipur],
    meetingEventTextContent: `
    Renest Jaipur houses 80 rooms in Mansarovar across three categories - Sparrow Room, Parrot Room, and Pelican Suite. Each room has contemporary decor and is well-appointed with modern amenities like tea/coffee maker, hairdryer, electronic safe, mini-refrigerator, packaged drinking water, 24 hrs satellite TV channels, international direct dial facility, high-speed internet connectivity, and more. Choose the room that best fits your bill and we will ensure a memorable stay. 
    `,
    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Conveniently located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
      {
        icon: FaMapMarkerAlt,
        text: "Conveniently located at close proximity to the airport, railway station & major attractions",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "offers", title: "Offres" },
      { id: "dining", title: "Dining" },
      { id: "conferences-and-events", title: "Conferences and Events" },
      { id: "renest-garden", title: "Renest Garden" },
      { id: "facilities", title: "Facilities" },
      { id: "location", title: "Location" },
      { id: "contact-us", title: "Contact Us" },
      { id: "gallery", title: "Gallery" },
      { id: "pay-us", title: "Pay Us" },
    ],
  },

  "renest-shraddha-inn-shirdi": {
    images: [jaipur, shirdi, manali],
    hotelName: "Renest Shraddha Inn - Shirdi",
    hotelAddress:
      "Renest Shraddha Inn Shirdi, Pimpalwadi Rd, Dattanagar, Shirdi, Maharashtra 423109, India",
    phoneNumber: " +91 9823098240",
    emails: ["reservations.shirdi@renesthotels.com", "crs1@renesthotels.com"],
    overviewImages: [shirdi, jaipur, shirdi],
    overviewText: `
    Shirdi is a quaint town in the state of Maharashtra known for the home of revered spiritual leader Shirdi Sai Baba and is a major pilgrimage site. Devotees from across the world gather at the Sai Baba Temple to honour his legacy. Located just 400 meters away from the abode of 'Shirdi Sai Baba', Renest Shraddha Inn - Shirdi is an ideal choice for guests.

    The resort exudes luxury with its majestic architecture, lush green landscape and superlative services. A pilgrimage or weekend gateway with the family, the resort has everything for a complete family holiday like an outdoor and indoor gaming arena, souvenir shop, temperature-controlled swimming pool, kids play area well-manicured gardens and an onsite Spa.

    The resort also has an in-house temple called Tapasya. On request, the resort can arrange for sightseeing around the city that includes iconic holy places, along with an in-house tour guide.

    Renest Shirdi is architected in a very Indian heritage style and its every corner will make you revisit the bygone era. Get awe-inspired by the mammoth dome in the high atrium lobby the moment you step in. From there, our courteous staff will lead to our hotel rooms in Shirdi, which are designed with plush furniture and decor for a soothing stay. The amenities in these rooms are modern to enhance your comfort. Addressing the requirements of the pilgrims, this luxury hotel in Shirdi houses a multi-cuisine vegetarian restaurant and a temple - "Tapasya" to meditate.


    Enjoy shopping souvenirs in the gift shop or playing games in our gaming zone. Our round-the-clock travel desk associates are always on toes to guide you with your travelling & touring needs.

Together with the spacious garden surrounding the hotel, every nook and corner of this hotel in Shirdi complements the calmness and serenity that a pilgrim is in search of.

  `,
    roomsImages: [shirdi],
    roomsTextContent: `
Renest Shraddha Inn - Shirdi offers quintessential luxury accommodation in this temple town. Our hotel rooms in Shirdi are categorized into Sparrow  Rooms and Pelican Suites. The former offers a comfortable stay while the latter is a luxurious option with breathtaking views and lavish interiors, complemented with rare privileges for a perfect stay.

Experience redefined hospitality with a unique blend of spirituality, luxury, and convenience that will indulge your senses.

  `,
    diningDetails: [
      {
        img: [jaipur],
        title: "Tribe",
        description:
          " All-day dining restaurant with a multi-cuisine menu to choose from, that has something for all taste buds.",
      },
      {
        img: [shirdi],
        title: "Culturati",
        description:
          "Speciality dining option offering the best of local cuisine of the region with focus on seasonal produce.",
      },
    ],

    meetingEventImages: [shirdi],
    meetingEventTextContent: `
Renest Shraddha Inn - Shirdi offers quintessential luxury accommodation in this temple town. Our hotel rooms in Shirdi are categorized into Sparrow  Rooms and Pelican Suites. The former offers a comfortable stay while the latter is a luxurious option with breathtaking views and lavish interiors, complemented with rare privileges for a perfect stay.

Experience redefined hospitality with a unique blend of spirituality, luxury, and convenience that will indulge your senses.

  `,
    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Shirdi located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "offers", title: "Offres" },
      { id: "dining", title: "Dining" },
      { id: "conferences-and-events", title: "Conferences and Events" },
      { id: "location", title: "Location" },
      { id: "facilities", title: "Facilities" },
      { id: "virtual-tour.", title: "Virtual Tour" },
      { id: "gallery", title: "Gallery" },
      { id: "contact-us", title: "Contact Us" },
      { id: "pay-us", title: "Pay Us" },
    ],
  },

  "renest-river-country-resort-manali": {
    images: [jaipur, shirdi, manali],
    hotelName: "Renest River Country Resort, Manali",
    hotelAddress: "NH3, Simsa Village, Manali, Himachal Pradesh 175131, India",
    phoneNumber: " +91 79 0022 2211",
    emails: ["reservations@renesthotels.com", "crs1@renesthotels.com"],
    overviewImages: [manali, shirdi, manali],
    overviewText: `
   Located off the bustling Mall Road, the Renest River Country Resort (Previously Quality Inn River Country Resort) overlooks the river Beas amidst pine and cedar, offering you a tranquil getaway into the lush green valleys of the Himalayas.

  The hotel focuses on overall wellness, a theme that remains constant through the food, outlay and peace of the hotel. The interior design makes use of local materials, while the design of the hotel was fashioned with respect to the surrounding landscape and environment. One can also unwind at its onsite spa, sweat it out at the gym or enjoy a game of pool or table tennis at the Game Room. Avid readers can choose a great book from our well-curated library.
  
   When and if you wish to step out of your comfortable rooms, there is a plethora of activities to get that adrenaline pumping. A meal by the Beas River, the Tibet Monastery, Hot sulphur spring. Solang Valley, Rohtang Pass, Naggar Castle are some of the local attractions that you can discover. The resort offers trekking experiences with professionals to give you a subtle taste of adventure on your sun-kissed holidays.

 
  `,
    roomsImages: [manali],
    roomsTextContent: `
The resort offers 58 spacious, fully equipped rooms with an option of duplex and suites that offer unparalleled views of the valley. For those precious family getaways, our two-bedroom or five-bedroom cottages are ideal.
  `,
    diningDetails: [
      {
        img: [manali],
        title: "Tribe",
        description:
          "All day dining restaurant with a multi-cuisine menu to choose from, that has something for all taste buds.",
      },
      {
        img: [shirdi],
        title: "Culturati",
        description:
          "Speciality dining option offering the best of local cuisine of the region with focus on seasonal produce.",
      },
      {
        img: [manali],
        title: "Jugnu Bar",
        description:
          "In-house bar with an international wine list and a seasonal cocktail menu.",
      },
    ],
    meetingEventImages: [manali],
    meetingEventTextContent: `
The resort offers 58 spacious, fully equipped rooms with an option of duplex and suites that offer unparalleled views of the valley. For those precious family getaways, our two-bedroom or five-bedroom cottages are ideal.
  `,
    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Manali located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "offers", title: "Offres" },
      { id: "dining", title: "Dining" },
      { id: "location", title: "Location" },
      { id: "gallery", title: "Gallery" },
      { id: "contact-us", title: "Contact Us" },
      { id: "pay-us", title: "Pay Us" },
    ],
  },

  "renest-dunsvirk-court-mussoorie": {
    images: [jaipur, shirdi, manali],
    hotelName: "Renest Dunsvirk Court Mussoorie",
    hotelAddress:
      "Vincent Hill, Baroda Estate Near Library Chowk, Mussoorie, Uttarakhand - 248179",
    phoneNumber: " +91 79 0022 2211 ",
    emails: [
      "reservations@renesthotels.com",
      "reservations.mussoorie@renesthotels.com",
      "crs1@renesthotels.com",
    ],
    overviewImages: [jaipur, shirdi, jaipur],
    overviewText: `
Renest Dunsvirk Court is a luxury boutique hotel in Mussoorie perched atop a hill, this historic property was once owned by Lord Dunsvirk and Lord Guthrie during the British Raj and later bought by the Maharaja of Baroda. The summer retreat home was converted into a hotel in 1989 and has recently undergone a restoration to retain its traditional architecture while incorporating modern amenities for the discerning traveller.

Boasting the highest elevation in Mussoorie at 7200 ft, the resort offers guests a 360-degree panoramic view of the breathtaking iced peaks and lush green deodar forests. The property spans over 4.5 acres and features an open lawn, banquet hall, ample parking, a restaurant & bar, a high-end wellness spa, and a fully-equipped gym.


 
  `,
    roomsImages: [jaipur],
    roomsTextContent: `
 Renest Dunsvirk Court is a tranquil property consisting of 41 well-designed rooms that have been thoughtfully curated to provide a serene escape from the hustle and bustle of daily life. Nestled amidst nature, this property offers breathtaking views of the city and the surrounding valley, which are sure to leave you awestruck. The rooms are equipped with modern amenities promising a comfortable and rejuvenating stay.

  `,

    diningDetails: [
      {
        img: [jaipur],
        title: "Tribe",
        description:
          "All day dining restaurant with a multi-cuisine menu to choose from, that has something for all taste buds..",
      },
      {
        img: [shirdi],
        title: "Culturati",
        description:
          "All day dining restaurant with a multi-cuisine menu to choose from, that has something for all taste buds..",
      },
      {
        img: [jaipur],
        title: "Jugnu Bar",
        description:
          "In-house bar with an international wine list and a seasonal cocktail menu.",
      },
      {
        img: [jaipur],
        title: "Jugnu Bar",
        description:
          "In-house bar with an international wine list and a seasonal cocktail menu.",
      },
    ],

    meetingEventImages: [jaipur],
    meetingEventTextContent: `
 Renest Dunsvirk Court is a tranquil property consisting of 41 well-designed rooms that have been thoughtfully curated to provide a serene escape from the hustle and bustle of daily life. Nestled amidst nature, this property offers breathtaking views of the city and the surrounding valley, which are sure to leave you awestruck. The rooms are equipped with modern amenities promising a comfortable and rejuvenating stay.

  `,
    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Massoorie located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "dining", title: "Dining" },
      { id: "conferences-and-events", title: "Conferences and Events" },
      { id: "spa", title: "Spa" },
      { id: "location", title: "Location" },
      { id: "gallery", title: "Gallery" },
      { id: "contact-us", title: "Contact Us" },
      { id: "pay-us", title: "Pay Us" },
    ],
  },

  "renest-tirupati": {
    images: [jaipur, shirdi, manali],
    hotelName: "Renest Tirupati",
    hotelAddress:
      "#18-8-40/B, Leela Mahal Centre, Tirumula Bypass Road, Tirupati, Andhra Pradesh- 517501",
    phoneNumber: " +91 79 0022 2211 ",
    emails: ["info.tirupati@renesthotels.com", "crs1@renesthotels.com"],
    overviewImages: [shirdi, jaipur, shirdi],
    overviewText: `
    Located in a prime location on Tirumala Road, Renest Tirupati is a three-star hotel near Tirumala Temple. Our property promises to provide our guests with unparalleled service and hospitality that is synonymous with the Renest brand. Tirupati is renowned as the home of the famous Venkateswara Balaji Temple, a major pilgrimage destination. The town also sees a fair amount of foot traffic from commercial travellers and casual tourists. To this end, our hotel in Tirupati has been designed to accommodate all these categories of guests.

    Tirumala Hills are the most characteristic natural feature of Tirupati. The seven peaks of these hills overlook the town and are home to Balaji Temple and Sri Venkateswara Zoological Park, a natural habitat for Indian lion species.
 
  `,
    roomsImages: [shirdi],
    roomsTextContent: `
 Renest Tirupati offers some of the best rooms and suites in Tirupati, decked with modern amenities and crafty interiors. All 60 rooms at the property have windows opening up to dazzling views of the city or the rustic panorama of the hills. These rooms are divided into two categories, namely the Sparrow Rooms, Parrot Rooms and the Pelican Suites. Guests can opt for either of these based on your requirements and preferences.

  `,
    diningDetails: [
      {
        img: [shirdi],
        title: "Tribe",
        description:
          "All day dining restaurant with a multi-cuisine menu to choose from, that has something for all taste buds.",
      },
    ],

    meetingEventImages: [shirdi],
    meetingEventTextContent: `
 Renest Tirupati offers some of the best rooms and suites in Tirupati, decked with modern amenities and crafty interiors. All 60 rooms at the property have windows opening up to dazzling views of the city or the rustic panorama of the hills. These rooms are divided into two categories, namely the Sparrow Rooms, Parrot Rooms and the Pelican Suites. Guests can opt for either of these based on your requirements and preferences.

  `,

    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Tirupati located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "offers", title: "Offres" },
      { id: "dining", title: "Dining" },
      { id: "conferences-and-events", title: "Conferences and Events" },
      { id: "facilities", title: "Facilities" },
      { id: "location", title: "Location" },
      { id: "gallery", title: "Gallery" },
      { id: "contact-us", title: "Contact Us" },
      { id: "pay-us", title: "Pay Us" },
    ],
  },

  "renest-gandhidham": {
    images: [jaipur, shirdi, manali],
    hotelName: "Renest Gandhidham",
    hotelAddress:
      "Plot No.78, Sector 8, Behind Tagore Garden, Tagore Road, Sector 8, Gandhidham, Gujarat 370201, India",
    phoneNumber: " +91 79 0022 2211 ",
    emails: [
      "reservations.gandhidham@renesthotels.com",
      "crs1@renesthotels.com",
    ],
    overviewImages: [manali, shirdi, manali],
    overviewText: `
 Renest is one of the hotels in Gandhidham which is a perfect blend of comfort and convenience because of its exemplary hospitality as well as its close proximity to popular business districts like Kandla Port Trust, Deendayal Port Trust, Kandla International Container Terminal, Kandla Special Economic Zone and just an hour’s drive from Bhuj Airport, making it a go to business hotel.


 Our rooms in Gandhidham are put together tastefully. They are modelled to cater to business travellers for both short & long length of stays.


  `,
    roomsImages: [manali],
    roomsTextContent: `
 The rooms at Renest Gandhidham are spacious and are put together tastefully. They are modelled to cater to business travellers for both short & long length of stays.
  `,

    diningDetails: [
      {
        img: [shirdi],
        title: "Tribe",
        description:
          "All day dining restaurant with a multi-cuisine menu to choose from, that has something for all taste buds.",
      },

      {
        img: [jaipur],
        title: "Culturati",
        description:
          "Speciality dining option offering the best of local cuisine of the region with focus on seasonal produce.",
      },
    ],

    meetingEventImages: [manali],
    meetingEventTextContent: `
 The rooms at Renest Gandhidham are spacious and are put together tastefully. They are modelled to cater to business travellers for both short & long length of stays.
  `,

    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Gandhidham located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "offers", title: "Offres" },
      { id: "dining", title: "Dining" },
      { id: "conferences-and-events", title: "Conferences and Events" },
      { id: "location", title: "Location" },
      { id: "contact-us", title: "Contact Us" },
    ],
  },

  "renest-haridwar": {
    images: [jaipur, shirdi, manali],
    hotelName: "Renest Haridwar",
    hotelAddress:
      "Highway, Haridwar - Dehradun Rd, adjoining Shridhar Ashram, Dudhadhari Chowk, Haridwar, Uttarakhand - 249410",
    phoneNumber: " +91 79 0022 2211 ",
    emails: ["reservations.haridwar@renesthotels.com", "crs1@renesthotels.com"],
    overviewImages: [jaipur, shirdi, jaipur],
    overviewText: `

    Renest Haridwar is one of the best and the newest hotels situated at the Rishikesh Highway, a perfect blend for leisure and pilgrimage, offering palatial accommodations. The hotel is next to Rajaji National park, Chilla Tiger Reserve and in close proximity to Har ki Pauri, Bharat Mata Mandir, Chanda Devi, Mansa Devi and Shanti Kunj. The hotel is surrounded by mythological significance, spirituality and a virtuous ambiance.

    Renest Haridwar is spread over 60,000 square feet of the holy land adjoining Sridhar Ashram, Motichur Range in Uttarakhand, India.

The hotel has rooms ranging from exquisite balcony rooms, grand suites to comfortable deluxe rooms and rooms for specially-abled, offering warm stays with plush interiors designed sublimely and mindfully with modern amenities to ensure that your stay at Renest Haridwar is comfortable, memorable and contented.

  `,
    roomsImages: [jaipur],
    roomsTextContent: `
 If you long to be close to spirituality, culture and righteous ambiance, come stay in our commodious hotel with rooms ranging from comfortable deluxe rooms, exquisite balcony rooms to grand suites. Each of our rooms is designed for a comfortable stay, with personalized services, expect nothing less than precision at Renest Haridwar.

  `,
    diningDetails: [
      {
        img: [jaipur],
        title: "Tribe",
        description:
          "Renest Haridwar is a vegetarian hotel that offers an all-day dining restaurant ‘Tribe’ with 96 covers that serve delicious multi-cuisines for you to have an extravagant dining experience. Our in-house experts will make sure to serve you the best of cuisines. The hotel also offers round-the-clock room service to gratify your hunger with luscious food any time of the day or night.",
      },
    ],

    meetingEventImages: [shirdi],
    meetingEventTextContent: `
 If you long to be close to spirituality, culture and righteous ambiance, come stay in our commodious hotel with rooms ranging from comfortable deluxe rooms, exquisite balcony rooms to grand suites. Each of our rooms is designed for a comfortable stay, with personalized services, expect nothing less than precision at Renest Haridwar.

  `,

    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Haridwar located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "dining", title: "Dining" },
      { id: "location", title: "Location" },
      { id: "gallery", title: "Gallery" },
      { id: "facilities", title: "Facilities" },
      { id: "contact-us", title: "Contact Us" },
      { id: "pay-us", title: "Pay Us" },
    ],
  },

  "renest-calangute-goa": {
    images: [jaipur, shirdi, manali],
    hotelName: "Renest Calangute, Goa",
    hotelAddress:
      "Near Calangute Beach, 2/8-C, Village Calangute, Naika Vaddo, Bardez, Goa - 403516",
    phoneNumber: " +91 79 0022 2211 ",
    emails: ["reservations@renesthotels.com", "crs1@renesthotels.com"],
    overviewImages: [shirdi, jaipur, shirdi],
    overviewText: `
 
    Welcome to Renest Calangute, Goa, where modern European aesthetics meet timeless sophistication. Just 4.6 km from Saturday Night Market and 2.7 km from the famous Calangute Beach, we provide the perfect blend of tranquillity and access to the heart of Goa. Experience unparalleled luxury at Renest Calangute Goa, your home away from home in this coastal paradise. 


    Our 30 lavishly furnished rooms offer a serene haven for relaxation amidst the vibrant charm of Goa. With three distinct room categories, a restaurant serving exquisite cuisine, a bar to unwind, a refreshing swimming pool and well-equipped conference halls, we cater to your every need.

 
  `,
    roomsImages: [shirdi],
    roomsTextContent: `
  Discover comfort in our 30 well-appointed rooms at our hotel near Calangute Beach. With 3 distinct room categories, each offering spacious accommodations, your stay with us ensures ample space for work and relaxation. Experience the perfect harmony of comfort and functionality that our rooms provide, allowing you to make the most of your stay in Goa.

  `,
    diningDetails: [
      {
        img: [shirdi],
        title: "Tribe Restaurant",
        description:
          "Indulge in a delightful fusion of flavors that bring together the best of Indian, Asian and European cuisines. From tantalising appetisers to exquisite main courses, our restaurant in Calangute leaves your taste buds dancing with delight.",
      },
      {
        img: [jaipur],
        title: "Jugnu Bar",
        description:
          "Explore an extensive collection of wines, savour skillfully crafted cocktails and delight in delectable appetisers that perfectly complement your evening. At Jugnu, every visit is a memorable and delightful affair.",
      },
    ],

    meetingEventImages: [shirdi],
    meetingEventTextContent: `
  Discover comfort in our 30 well-appointed rooms at our hotel near Calangute Beach. With 3 distinct room categories, each offering spacious accommodations, your stay with us ensures ample space for work and relaxation. Experience the perfect harmony of comfort and functionality that our rooms provide, allowing you to make the most of your stay in Goa.

  `,
    amenities: [
      {
        icon: FaMapMarkerAlt,
        text: "Goa located at close proximity to the airport, railway station & major attractions",
      },
      {
        icon: FaUtensils,
        text: "In-house multi-cuisine restaurant - Tribe & pizzeria",
      },
    ],
    subMenu: [
      { id: "rooms", title: "Rooms" },
      { id: "offers", title: "Offres" },
      { id: "dining", title: "Dining" },
      { id: "conferences-and-events", title: "Conferences and Events" },
      { id: "spa", title: "Spa" },
      { id: "location", title: "Location" },
      { id: "gallery", title: "Gallery" },
      { id: "contact-us", title: "Contact Us" },
    ],
  },
};
