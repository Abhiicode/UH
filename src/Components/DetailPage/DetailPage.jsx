import React from 'react'
import { useLocation } from 'react-router-dom';
import SubDetailPage from '../SubDetailPage/SubDetailPage';
import { useState , useEffect} from 'react';

const DetailPage = () => {
    const location = useLocation();
    const place = location?.state?.place;
    const [tourName, settourName] = useState("");
    const [tourParaOne, settourParaOne] = useState("");
    const [tourParaTwo, settourParaTwo] = useState("");
    const [tourPackage, settourPackage] = useState("");
    const [packageList, setPackageList] = useState([]);
    if(place == "RJ") {
        useEffect(() => {
            settourName("Rajasthan Tour");
            settourParaOne("Rajasthan a Jewel in India’s crown is an Indian state located on its north western side where it comprises the wide and inhospitable desert Thar and shares its borders with Pakistani provinces Punjab and Sindh. The other Indian states sharing borders with it are Punjab, Haryana, Uttar Pradesh, Madhya Pradesh and Gujarat. Often referred as the “Land of Kings” it is a colorful melange of medieval forts, beautiful palaces, delicious cuisines, colorful attires, magnificent wildlife, diverse culture, kaleidoscopic festivals and warm people. Whether you are a history buff, or adventurous safaris attract you or whether you want to explore rich cultural heritage and enjoy colorful festivals, Rajasthan is truly a destination for you. So book your Rajasthan holiday package and enjoy one of the most thrilling holiday experiences of your life.");
            settourParaTwo("A visit to Rajasthan surely leaves you awe-struck with its diversity and amazing beauty and you will surely find several reasons to visit it again and again. Rajasthan is a home to a maximum number of forts and palaces which surly spellbound its visitors with their brilliant architecture the prominent among them are Mehrangarh Fort in Jodhpur, Amer Fort in Jaipur, Jaisalmer Fort and feel stunned with the 36-kilometres long fortification wall of Kumbhalgarh Fort and admire the grand architecture of Chittorgarh Fort etc. The state is equally famous for its exotic wildlife and when it comes to national parks you just can’t afford to miss a visit to Ranthambore National Park and the Sariska National Park. You also love to visit its famous wildlife sanctuaries like Desert National Sanctuary, Jaisalmer, National Chambal Wildlife Sanctuary, Kota and Kumbhalgarh Wildlife Sanctuary etc.");
            settourPackage("Rajasthan Tour Packages");
            let packages = [
              {
                name : "Megical Nights In Udaipur ",      
                duration: "03 Nights/ 04 days",
                destinations: "3N Udaipur",
                description: "Day1 Arrive in Udaipur | Day2 Sightseeing in Udaipur ( City Palace Udaipur, Saheliyon ki Bari, Maharana Pratap Smarak, , Museum of Folks Art,  Vintage Car Museum, Crystal Gallery ) | Day3 Sightseeing in Udaipur , ( Fateh Sagar Lake, Sajjangarh Palace, ) | Day4   Departure from Udaipur"
              },
              {
                name : "Best of Rajasthan",      
                duration: "06 Nights/ 07 days",
                destinations: "2N Jaipur | 2N Jodhpur | 2N Jaisalmer",
                description: "Day1 Arrive in Jaipur | Day2 Sightseeing in Jaipur ( Amer Fort, Albert Hall Museum, City Palace Jaipur, Hawa Mahal, Jantar Mantar) | Day3 Jaipur to Jodhpur , Sightseeing in Jodhpur( Mehrangarh Fort, Jaswant Thada) | Day4 Sightseeing in Jodhpur ( Umaid Bhawan Palace, Mandore Garden, Osian ) | Day5 Jodhpur to Jaisalmer | Day6 Sightseeing in Jaisalmer ( Jaisalmer Fort,  Patwaon ki Haveli, Nathmal ki Haveli)"
              },

          ]
            setPackageList(packages);
          }, []);
    }
    else if(place == "TJ") {
        useEffect(() => {
            settourName("Golden Triangle Tour");
            settourParaOne("Rajasthan a Jewel in India’s crown is an Indian state located on its north western side where it comprises the wide and inhospitable desert Thar and shares its borders with Pakistani provinces Punjab and Sindh. The other Indian states sharing borders with it are Punjab, Haryana, Uttar Pradesh, Madhya Pradesh and Gujarat. Often referred as the “Land of Kings” it is a colorful melange of medieval forts, beautiful palaces, delicious cuisines, colorful attires, magnificent wildlife, diverse culture, kaleidoscopic festivals and warm people. Whether you are a history buff, or adventurous safaris attract you or whether you want to explore rich cultural heritage and enjoy colorful festivals, Rajasthan is truly a destination for you. So book your Rajasthan holiday package and enjoy one of the most thrilling holiday experiences of your life.");
            settourParaTwo("A visit to Rajasthan surely leaves you awe-struck with its diversity and amazing beauty and you will surely find several reasons to visit it again and again. Rajasthan is a home to a maximum number of forts and palaces which surly spellbound its visitors with their brilliant architecture the prominent among them are Mehrangarh Fort in Jodhpur, Amer Fort in Jaipur, Jaisalmer Fort and feel stunned with the 36-kilometres long fortification wall of Kumbhalgarh Fort and admire the grand architecture of Chittorgarh Fort etc. The state is equally famous for its exotic wildlife and when it comes to national parks you just can’t afford to miss a visit to Ranthambore National Park and the Sariska National Park. You also love to visit its famous wildlife sanctuaries like Desert National Sanctuary, Jaisalmer, National Chambal Wildlife Sanctuary, Kota and Kumbhalgarh Wildlife Sanctuary etc.");
            settourPackage("Golden Triangle Tour Packages");
            let packages = [
              {
                name : "Golden Triangle",      
                duration: "04 Nights/ 05 days",
                destinations: "1N Delhi | 1N Agra | 2N Jaipur",
                description: "Day1 Arrive in Delhi | Sightseeing in Delhi ( India Gate, , Raj Ghat, Red Fort, Akshardham Mandir) | Day2 Delhi To Agra , Sightseeing in Agra ( Marble inlay, Taj Mahal) | Day3 Agra to Jaipur via Fatehpur Sikri  ( En route to Jaipur, you can take a short stopover at Fatehpur Sikri - the capital of the Mughal Empire also known as the city of Victory. ) | Day4 Sightseeing in Jaipur ( Amber Fort, Jal Mahal, Aravali Hill, Hawa Mahal) | Day5 Jaipur To Delhi"
              },
              
          ]
            setPackageList(packages);
          }, []);
    }
    else if(place=="KR") {
        useEffect(() => {
            
            settourName("Kerala Tour");
            settourParaOne("Kerala is one of the south India’s most serenely beautiful state situated on the south western Malabar coast. This coastal strip is bordered by Karnataka, Tamil Nadu, Karnataka and Lakshadweep is affectionately referred as “God’s Own Country” due to its magnetic beauty and amazing network of 44 rivers and turquoise blue backwaters. This pristinely beautiful south eastern part of the country is one of most sought-after tourist destination which is quite famous for its exotic wildlife, emerald green hill stations, network of glistering backwaters, glorious Arabian seacoast, illuminating history and thriving cities make it no less than haven. So make a plan and book Kerala vacation package to enjoy one of the most cherished holiday experiences of your life.");
            settourParaTwo("There are unlimited reasons that compel you to visit this photogenic beauty on planet earth. One of the major attractions in Kerala that draw maximum visitors towards it is backwaters. It is among the most amazing waterways in the world. Quaint houseboats glide across these palm-fringed emerald waterways helps you to capture the glimpses of local life, spot unique flora and fauna and to indulge in lip-smacking cuisines. The best places to head to catch the backwater cruises are Alleppey, Kumarakom, Kollam and Kuttanad. If you are looking for the alluring hill stations in Kerala then do visit Munnar, Ponmudi, Wagamon, Wayanad and Idukki. There breathtaking beauty, tea and spice plantations, nature walks, mountaineering like activities surely leave you spellbound. One of the biggest attractions in Kerala is Ayurveda. It is a home to Ayurvedic treatments and people from far of places come here to get these treatments to feel rejuvenated. There are lots of spas and resorts that offer these rejuvenating and relaxing therapies to gain health benefits. There is more to Kerala than just its natural beauty as it has well preserved its rich cultural heritage which can be witnessed at Kerala Kathakali Center, Kerala Kalamandalam and Folklore Museum etc. If you are a wildlife enthusiast then there is no best place than Kerala as it is a home to 25 wildlife sanctuaries and national parks and is a perfect place for wildlife safaris, bird watching and to spot migratory birds. Some of its popular wildlife sanctuaries are Wayanad Wildlife Sanctuary, Parambikulam Tiger Reserve, Kumarakom Bird Santuary, Periyar National Park etc. The beaches of Kerala are its major crowd pullers. Sheltered coves, lagoons , natural harbour, scenic landscape, coconut trees etc all these combines the beauty of beaches over here, Some of the beaches that you just can’t afford on your Kerala holiday trip are Cherari, Bekal, Marari, Varkala etc. So hurry! Don’t miss an opportunity to visit this heavenly beauty that surely surprise you in its every twist and turn.");
            settourPackage("Kerala Tour Packages");
            var packages = [
              {
                name : "Kerala Tour Package",      
                duration: "08 Nights/ 09 days",
                destinations: "Destinations Varkala, Munnar, Thekkady, Cochin, Allepy,Kumarakom,Kovalam"
              },
              {
                name : "Premium 4N",
                duration: "04 Nights/ 05 days",
                destinations: "2N Munnar | 1N Thekkady | 1N Alleppey",
                description: "Day1: Cochin to Munnar Transfer by private car, Sightseeing In Munnar(Valara Waterfalls) | Day2: Sightseeing In Munnar(Tata Tea Museum,Eravikulam national park,Mattupetty Dam,Echo Point) | Day3: Transfer from Munnar to Thekkady, Sightseeing in Thekkady(Periyar Lake,Spice Garden) | Day4: Transfer from Thekkady to Alleppey,Sightseeing in Alleppey(Alappuzha Beach, Mullakkal Rajarajeswari Temple) | Day5: Transfer from Hotel in Alleppey to Cochin"
              },
              {
                name : "Luxury 5N",
                duration: "05 Nights/ 06 days",
                destinations: "1N Cochin| 2N Munnar | 1N Thekkady | 1N Alleppey",
                description: "Day1: Sightseeing in Cochin( Fort Cochin,Jewish Synagogue,Dutch Palace, St. Francis Church,Chinese Fishing Nets) | Day2: Cochin to Munnar Transfer by private car, Sightseeing In Munnar(Valara Waterfalls) | Day3: Sightseeing In Munnar(Tata Tea Museum,Eravikulam national park,Mattupetty Dam,Echo Point) | Day4: Transfer from Munnar to Thekkady, Sightseeing in Thekkady(Periyar Lake,Spice Garden) | Day5: Transfer from Thekkady to Alleppey,Sightseeing in Alleppey(Alappuzha Beach, Mullakkal Rajarajeswari Temple) | Day6: Transfer from Hotel in Alleppey to Cochin"
              },
              {
                name : "Luxury 5N",
                duration: "06 Nights/ 07 days",
                destinations: "2N Munnar | 1N Thekkady | 2N Kovalam and  Poovar | 1N Alleppey",
                description: "Day1: Cochin to Munnar Transfer by private car, Sightseeing In Munnar(Valara Waterfalls) | Day2: Sightseeing In Munnar(Tata Tea Museum,Eravikulam national park,Mattupetty Dam,Echo Point) | Day3: Transfer from Munnar to Thekkady, Sightseeing in Thekkady(Periyar Lake,Spice Garden) | Day4: Transfer from Thekkady to Kovalam and Poovar, Sightseeing(Kovalam: Hawa Beach,Lighthouse Beach) | Day5: Activity in Kovalam and Poovar 8 Hrs(Excursion to Kanyakumari) | Day6: Transer From Kovalam and Poovar to Alleppey, Sightseeing in Alleppey(Alappuzha Beach, Mullakkal Rajarajeswari Temple) | Day7: Transfer from Hotel in Alleppey to Cochin"
              },
            ]
            setPackageList(packages);
          }, []); 
    }
    else if(place=="HP") {
        useEffect(() => {
            // Run! Like go get some data from an API.
            settourName("Himachal Tour");
            settourParaOne("Affectionately referred as “Dev Bhoomi” or “Land of God”, Himachal Pradesh is a state in the northern part of India situated in the Western Himalayas. Bordered by Jammu and Kashmir, Punjab, Haryana, Uttarakhand, Himachal is renowned for its spectacular beauty, snowy peaks and plunging river valleys. It’s every turn takes you to the new valley which brings you into a different world which has its own culture, deities and language.");
            settourParaTwo("Amazing hill stations, unlimited adventure opportunities, fairy-tale architecture, easy going people, and colonial echoes make it truly a perfect holiday destination that you must visit. So book your holiday package to Himachal Pradesh and enjoy one of the most cherished holidays of your life. There is no dearth of reasons that compel you to visit this amazing beauty. Start your sightseeing trip to Himachal Pradesh with a visit to Shimla its capital. Dotted with shops, restaurants, colonial legacy and ever vibrant Mall Road are some of the places where you can spend quality of time. The Jakhoo Temple, Chadwick Falls, Tudor Library etc are some other attractions that you surely love to visit. If you are in search of peace and tranquillity which is full natural beauty as well then do visit Khajjiar which is also referred as “Mini Switzerland” due to its green pastures, dense forests and sprinkling lakes. Perched at an altitude of 6,500 ft, this place is famous for the nine-golf course and lots of adventurous activities like trekking, paragliding, horse riding and the most popular Khajjiar Lake. Don’t miss a visit to ever charming hill station Dalhousie which evokes the nostalgic memories of British Rule and is quite famous for its colonial architecture. Gifted with a diverse variety of vegetation, rich architectural legacy and magnificent churches the other major attractions of Dalhousie includes St. John Church, St. Francis Church, Subash Baoli, Bakrota Hills and Kalatope. The lovely, spiritual and peaceful Dharmashala is on the wish list of every travellers who visit Himachal Pradesh. This hill station is just 17 Km northeast of Kangra Town is encircled with snow capped mountains on three sides and it gained its fame as “ The Little Lhasa in India” became quite popular among visitors due to His Holiness the Dalai Lama. Its major attractions include the Kangra Art Museum, various Buddhist monasteries, Baijnath Shiv Temple and St. John’s Church etc.");
            settourPackage("Himachal Tour Packages");

            let packages = [
              {
                name : "Exotic Trip to Manali & Kasol ",      
                duration: "05 Nights/ 06 days",
                destinations: "3N Manali | 2N Kasol ",
                description: "Day1 New Delhi to Manali | Sightseeing in Manali ( Pandoh Dam ) | Day2 Sightseeing in Manali ( Hadimba Temple, Tibetan Monastery, Vashishth Kund) | Day3 Sightseeing in Manali ( Solang Valley, Rohtang Pass  ) | Day4 Manali to Kasol | Day5 Sightseeing in Kasol (  Manikaran,  Hote water Sprigs) | Day6 Kasol to New Delhi"
              },
              {
                name : "Amazing Himachal ",      
                duration: "09 Nights/ 10 days",
                destinations: "2N Shimla | 3N Manali | 2N Dharamshala | 2N Dalhousie ",
                description: "Day1 New Delhi to Shimla | Day2 Sightseeing in Shimla (  Scandal Point,  Gaiety Theatre, Townhall,  Shimla Church, Kufri, Mall Road) | Day3 Shimla to Manali | Day4 Sightseeing in Manali ( Hadimba Temple, Tibetan Monastery, Vashishth Kund ) | Day5 Sightseeing in Manali ( Solang Valley, Rohtang Pass  ) | Day6 Manali to Dharamshala | Day7 Sightseeing in Dharamshala ( Bhagsu falls, War Memorial ) | Day8 Dharamshala to Dalhousie | Sightseeing in Dalhousie ( Panchpula, Subash Baoli, St. John's Church,  St. Francis Church ) | Day9 Sightseeing in Dalhousie ( Khajjiar ) | Day10 Dalhousie to Delhi "
              },
              {
                name : "SHIMLA MANALI ",      
                duration: "05 Nights/ 06 days",
                destinations: "2N Shimla | 3N Manali ",
                description: "Day1 New Delhi to Shimla | Day2 Sightseeing in Shimla (  Scandal Point,  Gaiety Theatre, Townhall,  Shimla Church, Kufri, Mall Road) | Day3 Shimla to Manali | Day4 Sightseeing in Manali ( Hadimba Temple, Tibetan Monastery, Vashishth Kund ) | Day5 Sightseeing in Manali ( Solang Valley, Rohtang Pass  ) | Day6 Manali to Delhi "
              },
          ]
            setPackageList(packages);
          }, []);
        
    }
    else if(place=="JK") {
        useEffect(() => {
            // Run! Like go get some data from an API.
            settourName("Jammu And Kashmir Tour");
            settourParaOne("Jammu and Kashmir the northern most state of India is one of the pristinely beautiful places on planet Earth. It shares its borders with Himachal Pradesh, Punjab, and nearing countries like China, Pakistan and Afghanistan. The state consist mainly three regions, Jammu, Kashmir Valley and Ladakh. The long stretches of frivolous snow-capped mountains, pastures of green meadow, shimmering lakes are among its many vistas that prevails in the land and attract visitors from all corners of the world to visit it once in their lifetime. Book yuou Jammu and Kashmir holiday package and enjoy some of the best time of your life in the Lap of Mother Nature that rejuvenates you and offers an impeccable peace of mind. There are uncountable reasons that compel visitors to visit this majestically beautiful tourist destination and enjoy fun-packed holidays.");
            settourParaTwo("Srinagar the capital is one of the prized possessions of Kashmir that reflects authentic colors of Jammu and Kashmir. Enjoy the Shikara ride on Dal Lake or stay for a night at houseboat to spend some leisure time in the Lap of Mother Nature. There are lots of religious places that you surely love to visit which include the Hazratbal Shrine and Shankracharya Temple. You just can’t afford to miss a visit to pristinely beautiful Mughal Gardens the Shalimar Bagh, Nishat Bagh and Chashme Shahi are among the most popular tourist attractions in Jammu and Kashmir. Dubbed as the skier’s paradise, Gulmarg is among the best places to be visited in Jammu and Kashmir. Popularly known as “Meadows of Flowers” this popular holiday spot is located at a distance of 52 Km from Srinagar is no less than a haven for adventure enthusiasts. Do enjoy a visit to Nagin Valley, Khilanmarg frozen lake, Bota Pathri and enjoy Gulmarg Gandola a cable car ride to enjoy the mesmerizing beauty of the surroundings. You surely enjoy an enthralling expedition to Kathua which is also dubbed as the “:City of Sufis “ due to large number of religious places such as Jasrota Temple, Mata Bala Sundri, Sapt Sarovar, Airwin Temple, Mata Sundrikote etc. offer its visitors a spiritual experience which they cherish throughout their life. Other popular place to visit in J&K is Pahalgam. The green meadow and lofty mountains followed by tranquality and serenity are just waiting for you in Pahalgam. Visit the Aru Valley, Betaab Valley, Baisaran, Sheshnag Lake etc and enjoy plenty of recreational activities like trekking, horse riding, golf etc. A trip to J&K is incomplete without a visit to Sonamarg, the kingdom of unspoiled beauty.");
            settourPackage("Jammu And Kashmir Tour Packages");
            let packages = [
              {
                name : "Heavenly Kashmir ",      
                duration: "06 Nights/ 07 days",
                destinations: " 1N Srinagar | 1N Sonmarg | 2N Pahalgam | 2N Srinagar",
                description: "Day1  Arrival in Srinagar | Airport to hotel in Srinagar ( Activity : Shikara ride at Dal Lake ) | Day2  Srinagar to Sonmarg  | Day3 Sonmarg to Pahalgam , Sightseeing in  Pahalgam ( Avantipura Ruins, Cricket Bat Factory Visit ) | Day4 In Pahalgam | Day5 Pahalgam to Sri Nagar , Sightseeing in Srinagar ( Cheshma Shahi,  Nishat Bagh, Shalimar Garden, Shankaracharya Temple, Activity : Shikara ride at Dal Lake ) | Day6 Sightseeing in Srinagar ( Sonmarg ) | Day7 Departure from Srinagar"
              },
              {
                name : "Kashmir Holiday - Honeymoon Special",      
                duration: "06 Nights/ 07 days",
                destinations: "2N Gulmarg | 2N Pahalgam | 2N Srinagar",
                description: "Day1  Arrival in Srinagar |  Srinagar to hotel in Gulmarg | Day2 In Gulmarg  | Day3 Gulmarg to  Pahalgam , Sightseeing in  Pahalgam ( Avantipura Ruins, Cricket Bat Factory Visit ) | Day4 In Pahalgam | Day5 Pahalgam to Sri Nagar , Sightseeing in Srinagar ( Cheshma Shahi,  Nishat Bagh, Shalimar Garden, Shankaracharya Temple, Activity : Shikara ride at Dal Lake ) | Day6 Sightseeing in Srinagar ( Sonmarg ) | Day7 Departure from Srinagar"
              },
          ]
            setPackageList(packages);
          }, []); 
        
    }
    else {
        useEffect(() => {
            // Run! Like go get some data from an API.
            settourName("Goa Tour");
            settourParaOne(" Goa, state of India, comprising a mainland district on the country’s southwestern coast and an offshore island ");
            settourParaTwo( " It is located about 250 miles (400 km) south of Mumbai (Bombay). One of India’s smallest states, it is bounded by the states of Maharashtra on the north and Karnataka on the east and south and by the Arabian Sea on the west. The capital is Panaji (Panjim), on the north-central coast of the mainland district. " )
            settourPackage("Goa Tour Packages");
            let packages = [
              {
                name : "Goa Vacation",      
                duration: "04 Nights/ 05 days",
                destinations: "4N Goa",
                description: "Day1 Arrive in Goa | Day2 Sightseeing in North Goa ( Fort Aguada, Sinquerim Beach, Calangute Beach, Baga Beach, Anjuna, Vagator Beach and Chapora Fort ) | Day3 In Goa | Day4 In Goa  | Day5  Departure from Goa "
              },
          ]
            setPackageList(packages);
          }, []);
    }
    
    


  return (
    <>
        <SubDetailPage tourName = {tourName} tourPackage = {tourPackage} tourParaOne = {tourParaOne} tourParaTwo = {tourParaTwo} packageList = {packageList}  />
    </>
  )
}

export default DetailPage
