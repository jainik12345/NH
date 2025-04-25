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

export const SubNavbarHotelData = {
  "renest-jaipur": {
    hotelName: "Renest Jaipur",
    navbarOffers: [
      {
        id: 1,
        image: [jaipur],
        title: "Flat 15% Discount_jaipur",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
Don't wait, book now and take advantage of this amazing deal!
Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [jaipur],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
    
    Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [jaipur],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
    
    Call: +91 6358082895`,
      },
    ],
    navbarRooms: [
      {
        id: 1,
        roomName: "Sparrow Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Jaini Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Darji Jainik Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe",
        diningImages: [jaipur],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu",
        diningImages: [jaipur],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, shirdi],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, shirdi, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, jaipur, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [manali ,shirdi, manali],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, 
      lastImages: [jaipur, shirdi, jaipur], 
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
  },
  "renest-shraddha-inn-shirdi": {
    hotelName: "Renest Shraddha Inn - Shirdi",
    navbarOffers: [
      {
        id: 1,
        image: [shirdi],
        title: "Flat 15% Discount_shirdi",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
  Don't wait, book now and take advantage of this amazing deal!
  Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [jaipur],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
      
      Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [shirdi],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
      
      Call: +91 6358082895`,
      },
    ],
    navbarRooms: [
      {
        id: 1,
        roomName: "First Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Second Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Third Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe1",
        diningImages: [shirdi],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati1",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu1",
        diningImages: [shirdi],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, jaipur],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, shirdi, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, jaipur, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [manali, shirdi],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, // Main banner image (one image)
      lastImages: [jaipur, shirdi, jaipur], // Array of multiple images (gallery style)
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
  },
  "renest-river-country-resort-manali": {
    hotelName: "Renest River Country Resort Manali",
    navbarOffers: [
      {
        id: 1,
        image: [manali],
        title: "Flat 15% Discount_manali",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
  Don't wait, book now and take advantage of this amazing deal!
  Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [shirdi],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
      
      Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [manali],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
      
      Call: +91 6358082895`,
      },
    ],
    navbarRooms: [
      {
        id: 1,
        roomName: "First Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Second Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Third Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe1",
        diningImages: [shirdi],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati1",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu1",
        diningImages: [shirdi],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, jaipur],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, shirdi, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, jaipur, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [jaipur ,shirdi, manali],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, // Main banner image (one image)
      lastImages: [jaipur, jaipur, jaipur], // Array of multiple images (gallery style)
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
  },
  "renest-dunsvirk-court-mussoorie": {
    hotelName: "Renest Shraddha Inn - Shirdi",
    navbarOffers: [
      {
        id: 1,
        image: [jaipur],
        title: "Flat 15% Discount_massoorie",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
  Don't wait, book now and take advantage of this amazing deal!
  Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [shirdi],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
      
      Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [jaipur],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
      
      Call: +91 6358082895`,
      },
    ],
    navbarRooms: [
      {
        id: 1,
        roomName: "First Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Second Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Third Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe1",
        diningImages: [shirdi],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati1",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu1",
        diningImages: [shirdi],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, jaipur],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, shirdi, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, jaipur, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [jaipur, shirdi, jaipur],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, // Main banner image (one image)
      lastImages: [jaipur, shirdi, jaipur], // Array of multiple images (gallery style)
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
    navbarSpa: {
      spaDescription:
        "Discover pure tranquillity at our serene wellness spa, where skilled therapists guide you on a journey to inner peace. Experience a range of indulgent treatments, from soothing massages to rejuvenating facials, in our serene atmosphere. Leave feeling revitalised and refreshed, ready to embrace your inner oasis.",
      spaImage: [jaipur],
    },
  },
  "renest-tirupati": {
    hotelName: "Renest Tirupati",
    navbarOffers: [
      {
        id: 1,
        image: [shirdi],
        title: "Flat 15% Discount_tirupati",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
  Don't wait, book now and take advantage of this amazing deal!
  Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [jaipur],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
      
      Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [shirdi],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
      
      Call: +91 6358082895`,
      },
    ],
    navbarRooms: [
      {
        id: 1,
        roomName: "First Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Second Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Third Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe1",
        diningImages: [shirdi],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati1",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu1",
        diningImages: [shirdi],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, jaipur],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, shirdi, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, jaipur, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [jaipur, shirdi, jaipur],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, // Main banner image (one image)
      lastImages: [jaipur, shirdi, jaipur], // Array of multiple images (gallery style)
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
  },
  "renest-gandhidham": {
    hotelName: "Renest Gandhidham",
    navbarOffers: [
      {
        id: 1,
        image: [manali],
        title: "Flat 15% Discount_gandhidham",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
  Don't wait, book now and take advantage of this amazing deal!
  Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [shirdi],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
      
      Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [manali],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
      
      Call: +91 6358082895`,
      },
    ],
    navbarRooms: [
      {
        id: 1,
        roomName: "First Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Second Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Third Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe1",
        diningImages: [shirdi],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati1",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu1",
        diningImages: [shirdi],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, jaipur],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, jaipur, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, shirdi, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [manali, manali],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, // Main banner image (one image)
      lastImages: [jaipur, shirdi, jaipur], // Array of multiple images (gallery style)
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
  },
  "renest-haridwar": {
    hotelName: "Renest Haridwar",
    navbarOffers: [
      {
        id: 1,
        image: [jaipur],
        title: "Flat 15% Discount_haridham",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
  Don't wait, book now and take advantage of this amazing deal!
  Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [jaipur],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
      
      Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [jaipur],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
      
      Call: +91 6358082895`,
      },
    ],
    navbarRooms: [
      {
        id: 1,
        roomName: "First Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Second Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Third Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe1",
        diningImages: [shirdi],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati1",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu1",
        diningImages: [shirdi],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, jaipur],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, shirdi, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, jaipur, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [jaipur, shirdi, jaipur],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, // Main banner image (one image)
      lastImages: [jaipur, jaipur, jaipur], // Array of multiple images (gallery style)
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
  },
  "renest-calangute-goa": {
    hotelName: "Renest Calangute - Goa",
    navbarOffers: [
      {
        id: 1,
        image: [shirdi],
        title: "Flat 15% Discount_Goa",
        content: `Experience an exceptional stay by booking directly through our brand website and receive an exclusive offer of a flat 15% discount on your reservation.
  Don't wait, book now and take advantage of this amazing deal!
  Call: +91 1234567890`,
      },
      {
        id: 2,
        image: [jaipur],
        title: "Summer Deal",
        content: `Enjoy cool rates this summer! Book now and save big on your summer vacation.
      
      Call: +91 9876543210`,
      },
      {
        id: 3,
        image: [shirdi],
        title: "Weekend Escape",
        content: `Make your weekends memorable with exclusive offers. Limited time only!
      
      Call: +91 6358082895`,
      },
    ],
    navbarSpa: {
      spaDescription:
        "Discover pure tranquillity at our serene wellness spa, where skilled therapists guide you on a journey to inner peace. Experience a range of indulgent treatments, from soothing massages to rejuvenating facials, in our serene atmosphere. Leave feeling revitalised and refreshed, ready to embrace your inner oasis.",
      spaImage: [jaipur],
    },
    navbarRooms: [
      {
        id: 1,
        roomName: "First Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 2,
        roomName: "Second Room",
        roomImages: [jaipur],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
      {
        id: 3,
        roomName: "Third Room",
        roomImages: [shirdi],
        roomtitle:
          "Spread across 296 sq. ft., these rooms in Mansarovar are detailed with sophisticated interiors andcomfortable furnishings.",
        roomDescription:
          "The Sparrow Room at Renest Jaipur is designed with sophisticated decor and pleasing interiors. Guests have the option to choose between a king-size bed or twin beds for their stay in these rooms in Mansarovar, Jaipur. The room is well-equipped with a 32-inch television, a mini-refrigerator, and many other modern amenities. It is the ideal room for 4 guests to enjoy a comfortable stay.",
        roomAmenities: `Complimentary Wi-Fi Access , King & Twin Bed , Air Conditioning`,
      },
    ],
    navbarDining: [
      {
        id: 1,
        diningName: "Tribe1",
        diningImages: [shirdi],
        diningtitle:
          "Come on over and enjoy delicious dishes at our multi-cuisine restaurant in Mansarovar, in an indoor setting.",
        diningDescription:
          "Tribe, our all-day dining restaurant in Mansarovar, offers a scrumptious multi-cuisine menu of the choicest Indian.",
        diningTiming: "11:00 AM - 11:00 PM",
      },
      {
        id: 2,
        diningName: "Culturati1",
        diningImages: [jaipur],
        diningtitle:
          "Our rooftop restaurant in Jaipur serves local cuisines and boasts a mesmerizing view of the city.",
        diningDescription:
          "ooking the panoramic view of Jaipur city, our rooftop restaurant, Culturati, serves the best of local cuisine with the freshest seasonal ingredients. Our regional cuisine restaurant in Jaipur lets guests have an amazing time with friends and family.",
        diningTiming: "1:00 AM - 2:00 PM",
      },
      {
        id: 3,
        diningName: "Jugnu1",
        diningImages: [shirdi],
        diningtitle:
          "Head over to our lounge bar in Jaipur to lighten up your evenings. With an impressive wine list, cocktail menu.",
        diningDescription:
          "Inspired by glistening fireflies, our Jugnu bar in Jaipur will light up your evenings with an impressive wine list, cocktail menu, and appetizers JAJAJAJAJAJAJ by our expert chefs. Enjoy sipping your drinks with a choice of joyful music here that varies from commercial Eng",
        diningTiming: "11:00 AM - 11:00 PM",
      },
    ],
    navbarGarden: [
      {
        id: 1,
        gardenTitle: "Renest Garden - An Exquisite Wedding Lawn in Jaipur",
        gardenDescription: `A sprawling green lawn spread over 7000 square feet area, it is located in the heart of the city and in close proximity to Renest Jaipur. This lush green venue accommodates up to 400 guests.
    
    This beautifully landscaped garden is sure to awe-struck you with its beauty in many ways. We offer both in-house and outsourced catering services. The variety of cuisines can be customized as per your food preferences, whether vegetarian or non-vegetarian with tailor-made packages to fit in your budget. We provide magnificent in-house decor services as well that are sure to spoil you for choice. Be it an event of any space, come to us and we shall make it larger than life for you!`,

        gardenImages: [jaipur, jaipur],
      },
    ],
    navbarFacilities: [
      {
        id: 1,
        Facilitiestitle: "Exclusive Facilities at Renest Shirdi",
        FacilitiesDescription:
          "Renest Shirdi ensures that its guests have a splendid stay and leaves no room to pamper them. Along with a range of modern amenities and hearty services, our hotel in Shirdi also bestows a number of premium facilities that augment guests' comfort and enjoyment during the stay. Below are some of the facilities that are worth highlighting:",
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
            icon: FaDumbbell,
            text: "Outdoor swimming pool with a poolside bar",
          },
          {
            icon: FaWifi,
            text: "High-speed free Wi-Fi available throughout the hotel",
          },
        ],
      },
    ],
    navbarContactUs: {
      address: `Gopal Pura by-pass Road,
                Near Ganga Jamuna Petrol Pump,
                New Aatish Market, Mansarovar,
                Jaipur, Rajasthan 302020 | Ma`,
      email: "resevations.jaipur@renesthotels.com",
      number: " +91 14 1664 4009",
      image: [jaipur],
      hotelAmenities: [
        {
          icon: FaBed,
          text: "Comfortable luxury rooms",
        },
        {
          icon: FaBed,
          text: "24/7 Coffee and snacks available",
        },
        {
          icon: FaDumbbell,
          text: "Free parking facility",
        },
        {
          icon: FaConciergeBell,
          text: "24-hour front desk and concierge service",
        },
      ],
    },
    navbarGallery: {
      sections: [
        {
          title: "Hotel Facade and Lobby",
          images: [jaipur, shirdi, jaipur],
        },
        {
          title: "Rooms & Suites",
          images: [shirdi, jaipur, shirdi],
        },
        {
          title: "Banquet Halls",
          images: [jaipur, shirdi, jaipur],
        },
      ],
    },
    navbarPayus: {
      payustitle: "Make an online payment to Renest Shraddha Inn - Shirdi 1",
      payusDescription:
        "Please click the button below to make an online payment to the hotel. You will be redirected to a form, please provide your information on the form and enter the payment amount. After filling up the form, you can pay the hotel using various online payment instruments such as credit card, debit card, and net banking.",
    },
    navbarConferencesEvents: {
      title: "Elegant Conference and Event Spaces",
      description: `Host unforgettable meetings, conferences, and social gatherings at our beautifully designed event spaces.
Our venues are equipped with modern amenities and personalized service to make every occasion special.`,
      image: jaipur, // Main banner image (one image)
      lastImages: [jaipur, shirdi, jaipur], // Array of multiple images (gallery style)
      seatingArrangements: [
        {
          venue: "Albatross I",
          size: 3060,
          floatingCrowd: 200,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Albatross II",
          size: 1680,
          floatingCrowd: 100,
          theatre: 100,
          uShaped: 60,
          cluster: 50,
          classroom: 60,
          boardRoom: 50,
        },
        {
          venue: "Albatross I & II",
          size: 4740,
          floatingCrowd: 400,
          theatre: 350,
          uShaped: 100,
          cluster: 150,
          classroom: 150,
          boardRoom: 100,
        },
        {
          venue: "Albatross III",
          size: 3060,
          floatingCrowd: 250,
          theatre: 200,
          uShaped: 80,
          cluster: 110,
          classroom: 80,
          boardRoom: 70,
        },
        {
          venue: "Conference Room",
          size: 300,
          floatingCrowd: "-",
          theatre: "-",
          uShaped: 10,
          cluster: "-",
          classroom: "-",
          boardRoom: 15,
        },
      ],
    },
    navbarLocation: [
      {
        title: "Hotel",
        children: [
          {
            name: "Renest Jaipur",
            image: [jaipur],
            description:
              "Experience comfort and luxury at Renest Jaipur, a serene oasis in the heart of the Pink City.",
            address: "D-81, Jagannath Puri, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Renest+Jaipur",
          },
        ],
      },
      {
        title: "Nearby Travel Hubs",
        children: [
          {
            name: "Jaipur International Airport",
            image: [shirdi],
            description:
              "Located just 10 km from the hotel, Jaipur International Airport connects the city to major destinations.",
            address: "Airport Road, Sanganer, Jaipur, Rajasthan 302029, India",
            mapLink:
              "https://www.google.com/maps?q=Jaipur+International+Airport",
          },
          {
            name: "Jaipur Railway Station",
            image: [manali],
            description:
              "A major railway hub, only 7 km from the hotel, offering convenient train connectivity across India.",
            address:
              "Station Road, Near Sindhi Camp, Jaipur, Rajasthan 302006, India",
            mapLink: "https://www.google.com/maps?q=Jaipur+Railway+Station",
          },
        ],
      },
      {
        title: "Nearby Attractions",
        children: [
          {
            name: "Jantar Mantar",
            image: [jaipur],
            description:
              "An astronomical marvel and UNESCO World Heritage Site, showcasing ancient scientific instruments.",
            address:
              "Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Jantar+Mantar+Jaipur",
          },
          {
            name: "Birla Mandir",
            image: [jaipur],
            description:
              "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, set against a scenic backdrop.",
            address:
              "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Birla+Mandir+Jaipur",
          },
          {
            name: "Jhalana Safari Park",
            image: [jaipur],
            description:
              "Explore the wilderness and spot leopards, deer, and exotic birds just 8 km away from the hotel.",
            address: "Jhalana Reserve Forest, Jaipur, Rajasthan 302004, India",
            mapLink: "https://www.google.com/maps?q=Jhalana+Safari+Park+Jaipur",
          },
          {
            name: "Hawa Mahal",
            image: [jaipur],
            description:
              "The iconic 'Palace of Winds,' known for its intricate pink sandstone architecture and historical significance.",
            address:
              "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Jaipur, Rajasthan 302002, India",
            mapLink: "https://www.google.com/maps?q=Hawa+Mahal+Jaipur",
          },
        ],
      },
      {
        title: "Business & Shopping Hubs",
        children: [
          {
            name: "Aatish Market",
            image: [jaipur],
            description:
              "A vibrant marketplace offering a range of local goods, handicrafts, and souvenirs, perfect for shopping enthusiasts.",
            address:
              "Aatish Market, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=Aatish+Market+Jaipur",
          },
          {
            name: "World Trade Park",
            image: [jaipur],
            description:
              "A premier shopping mall and business hub featuring international brands, restaurants, and entertainment zones.",
            address:
              "Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017, India",
            mapLink: "https://www.google.com/maps?q=World+Trade+Park+Jaipur",
          },
        ],
      },
    ],
  },
};
