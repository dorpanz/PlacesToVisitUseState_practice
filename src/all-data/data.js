import cntower from "../pictures/cn.jpeg" 
import kmarket from "../pictures/kensington.jpeg"
import island from "../pictures/island.jpeg"
import aquarium from "../pictures/aquarium.jpeg"
import ago from "../pictures/ago.jpeg"
import rom from "../pictures/rom.jpeg"
import casaloma from "../pictures/casaloma.jpeg"
import ddistrict from "../pictures/ddistrict.jpeg"
import hof from "../pictures/hof.jpeg"
import zoo from "../pictures/zoo.jpeg"
import allagarden from "../pictures/allan-gardens.jpeg"
import edwradgarden from "../pictures/edwards-garden.jpeg"
import ocr from "../pictures/pursuit-ocr.jpeg"
import roller from "../pictures/roller.jpeg"
import stlawrmark from "../pictures/stlawrence-market.jpeg"
import wonderland from "../pictures/wonderlans.jpeg"
import littlecanada from "../pictures/littlecanada.jpeg"
import edmirvish from "../pictures/edmirvish.jpeg"


export const data = [
    {id: 1,
    picture: cntower,
    title: "CN Tower",
    price: "",
    description: "The CN Tower is one of the most iconic landmarks in the country and a significant feat of engineering.  While the tower does serve a purpose—its 335-foot antenna is used to broadcast television, radio, and cell signals—it’s also the most popular attraction in the city. The concrete megastructure is home to a number of observation decks, a restaurant with the highest wine cellar in the world (at 1,151 feet), and the EdgeWalk, a thrilling attraction that lets visitors walk outside the structure at 1,168 feet above street level. Tickets are required, with different packages providing different experiences.",
    typeofattraction: "Observation point",
    showMore: false,
    category: "Entertainment"
    },
    {id: 2,
    picture: kmarket,
    title: "Kensington Market",
    price: "Free",
    description: "Kensington Market is not actually a market, but a food-centric neighborhood in downtown Toronto. While the city at large is known for its diverse population, there’s perhaps no better place to witness that multiculturalism in such a concentrated area than here. Whatever type of food you’re in the mood for, from Ethiopian to Vietnamese to Jamaican, there’s probably a restaurant, grocery store, or hole-in-the-wall for it. Some favorites include Seven Lives Tacos Y Mariscos for stellar tacos and NU Bügel for Montreal-style bagels with Venezuelan toppings. Beyond all the food, there are also vintage shops, independent boutiques, and artists’ studios tucked into Victorian-style houses all throughout the neighborhood.",
    typeofattraction: "Cultural district",
    showMore: false,
    category: "Shopping"
    },
    {id: 3,
    picture: island,
    title: "Toronto Island",
    price: "Free",
    description: "The Toronto Islands, located just offshore from downtown Toronto, are an 820-acre car-free haven. While 600 people live on the islands, the majority of visitors are day-trippers who come to enjoy the beaches, parks, gardens, yacht clubs, cafés, and a small amusement park for children. Seasonal activities include kayaking, picnicking, barbecuing, and outdoor yoga classes.",
    typeofattraction: "Natural reserve",
    showMore: false,
    category: "Nature"
    },
    {id: 4,
    picture: aquarium,
    price: "",
    title: "Ripley's Aquarium of Canada",
    description: "Explore the Waters of the World at Ripley's Aquarium of Canada. Located in the heart of downtown Toronto at the base of the CN Tower, the aquarium is Toronto's must-see attraction for tourists and locals of all ages. Immerse yourself in a world of 20,000 aquatic animals and discover your own underwater adventure. The Aquarium features North America’s longest underwater viewing tunnel with more than 5.7 million litres of water and over 100 interactive opportunities. Get up close and personal with several touch exhibits featuring horseshoe crabs, sharks, scarlet cleaner shrimp, and stingrays as well as daily dive shows every 2 hours. This awe-inspiring attraction consists of nine carefully curated galleries showcasing a cross section of saltwater and freshwater environments from around the world – starting with species from Toronto’s backyard, the Great Lakes basin.",
    typeofattraction: "Aquarium",
    showMore: false,
    category: "Entertainment"
    },
    {id: 5,
    picture: ago,
    title: "Art Gallery of Ontario",
    description: "Art Gallery of Ontario has more than 90,000 items in its encyclopedic collection, which spans the last 2,000 years. Of particular note are its collections of Canadian and Indigenous art, though it also has notable works by European masters like Rembrandt, Auguste Rodin, and Pablo Picasso. The museum underwent a $276 million renovation by Toronto-born architect Frank Gehry in 2008, his first work in his native city, doubling its exhibition space.",
    typeofattraction: "Art Museum",
    showMore: false,
    category: "Museum"
    },
    {id: 6,
    picture: rom,
    title: "Royal Ontario Museum",
    description: `If you’re looking for a one-stop shop of a museum, the Royal Ontario Museum (ROM) is your best bet. Originally established in 1912 as collection of five museums dedicated to archaeology, paleontology, mineralogy, zoology, and geology, ROM has since consolidated its efforts, covering everything from natural and cultural history to fine arts and design within the same massive space. It’s not often you can find dinosaur bones and fashion exhibitions within the same space. Be sure to spend a few minutes lingering outside the Queen's Park entrance, too, to best appreciate starchitect Daniel Libeskind's geometric marvel of a structure, dubbed the "Michael Lee-Chin Crystal," part of a multi-million dollar expansion to the museum, unveiled in 2007.`,
    typeofattraction: "History Museum",
    showMore: false
    },
    {id: 7,
    picture: ddistrict,
    title: "Distillery Historic District",
    price: "Free",
    description: "A collection of 47 19th-century buildings that once comprised the Gooderham & Worts Distillery is now a major dining, shopping, and cultural hub in Toronto aptly called the Distillery District. Strolling through the neighborhood’s brick-paved pedestrian streets, visitors might feel as if they’ve been transported to Victorian-era Canada—the craftspeople who restored the old structures kept true to the original construction materials as much as possible. And while there are still breweries and distilleries here (including the Spirit of York Distillery and the Mill St. Brew Pub), there are also restaurants, local-owned boutiques, and art galleries.",
    typeofattraction: "Cultural district",
    showMore: false,
    category: "Shopping"
    },
    {id: 8,
    picture: casaloma,    
    title: "Casa Loma",
    description: "Canada might not be known for its castles, but Toronto is home to an unusual one that has become a beloved tourist attraction. Casa Loma is a 98-room château built by Canadian businessman Sir Henry Mill Pellatt in 1914, who went bankrupt shortly after completing his beloved home. Casa Loma now serves as a museum and a popular filming location, most notably serving as Professor Xavier’s School for Gifted Youngers in X-Men. Do the self-guided tour, which you can fly through at a clip, providing the place isn't packed; it can be tricky to rush past the crowds during busier times, especially in some of the smaller spaces, tunnels, and towers. Must-sees include secret passageways, gardens, and an underground pool.",
    typeofattraction: "Castle",
    showMore: false,
    category: "Museum"
    },
    {id: 9,
    picture: zoo,
    title: "Toronto Zoo",
    description: "Toronto Zoo is the largest zoo in Canada averaging around 1.2 million visitors a year. The zoo is divided into seven zoogeographic regions: Indo-Malaya, Africa, Americas, Tundra Trek, Australasia, Eurasia, and the Canadian Domain. Some animals are displayed indoors in pavilions and outdoors in what would be their naturalistic environments, with viewing at many levels. The zoo also has areas such as the Kids Zoo, Waterside Theatre, and Splash Island. The zoo has one of the most taxonomically diverse collection of animals on display of any zoo worldwide and is currently home to over 3,000 animals (including invertebrates and fish) representing over 300 species. ",
    typeofattraction: "Zoo",
    showMore: false,
    category: "Entertainment"
    },
    {id: 10,
    picture: hof,
    title: "Hockey Hall of Fame",
    description: "Located in Toronto, Ontario, the Hockey Hall of Fame (30 Yonge St.) is the premier destination for all things hockey. Dedicated entirely to the history of ice hockey in Canada, the Hockey Hall of Fame holds regular exhibits on famous players and teams, and displays permanent galleries of National Hockey League (NHL) records, trophies and miscellaneous memorabilia. First established in Kingston, Ontario, in 1943, the Hockey Hall of Fame changed homes after the NHL withdrew its support for the International Hockey Hall of Fame in 1958. It now resides in the historic Bank of Montreal building in downtown Toronto. The Hockey Hall of Fame is spread over 65,000 sq ft and offers a slew of activities, including hockey simulation games, as well as an expansive retail store dedicated to hockey equipment and merchandise.",
    typeofattraction: "Sports Museum",
    showMore: false,
    category: "Museum"
    },
    {id: 11,
    picture: allagarden ,
    title:"Allan Gardens",
    price: "Free", 
    description: `Allan Gardens is a park and an indoor botanical garden with six greenhouses comprising over 16,000 square feet. The indoor conservatory features colourful plants and flowers from around the world. Seasonal plants supplement the permanent plant collection of botanical importance since 1858. The conservatory boasts the "Palm House" (1909) modelled after similar structures in the United States and England. The playground features open play opportunities for all ages and includes a water tap and sand play area, and incorporates natural materials such as fieldstone boulders and log seating`,
    typeofattraction: "Garden",
    showMore: false,
    category: "Nature"
    },
    {id: 12,
    picture: edwradgarden ,
    title:"Edwards Gardens",
    price: "Free" , 
    description: "Edwards Gardens is a beautiful botanical garden and popular destination for nature enthusiasts, gardeners, and tourists. Originally a private estate owned by Rupert Edwards, it was transformed into a public park in 1955. The garden features a wide array of horticultural displays, including perennial and rose gardens, wildflower meadows, and rock gardens, along with picturesque water features such as ponds, waterfalls, and streams. Visitors can enjoy walking trails, seasonal displays, and guided tours that highlight the garden's diverse plant collections and history. ",
    typeofattraction: "Garden",
    showMore: false,
    category: "Nature"
    },
    {id: 13,
    picture: roller ,
    title:"Roller Pony",
    price: "" ,
    description:"RollerPony is a vibrant and unique event space that combines the nostalgic fun of roller skating with a contemporary twist. Located in the heart of the city, RollerPony offers an immersive experience with its retro-themed decor, colorful lighting, and upbeat music, creating a lively atmosphere for skaters of all ages and skill levels. The venue features a spacious rink with smooth floors, rental skates, and protective gear to ensure a safe and enjoyable experience. RollerPony also hosts various themed nights, private parties, and community events, making it a popular destination for celebrations and social gatherings. Whether you're a seasoned skater or a first-timer, RollerPony provides a fun and welcoming environment to roll, dance, and create memorable experiences.",
    typeofattraction: "Roller skating rink",
    showMore: false,
    category: "Entertainment"
    },
    {id: 14,
    picture: ocr ,
    title:"Pursuit OCR",
    price: "" ,
    description:"Pursuit OCR is Canada's largest indoor obstacle course! With over 30,000 square feet of adventures inside, you'll be laughing and sweating for hours! Our facility is 18+ (unless arranged through a schoolboard arranged visit) and is designed to let adults feel like a kid again. Our obstacle course is unlike anything you've ever seen at two and a half football fields in length (750 feet/230 meters). When was the last time you got to play in a ball pit? Well we've 100,000 balls four and a half feet deep! We are also home to the first ever indoor pedal powered Drift Trike raceway! Get your Super Mario Kart on and pedal your way around our separate raceway (included with admission) winding your way under our obstacle course! Also onsite is a free mini arcade when you need to catch your breath. If you're looking for a fun fitness based outing, you're coming to the right place!",
    typeofattraction: "Entertainment Centres",
    showMore: false,
    category: "Entertainment"
    },
    {id: 15,
    picture: stlawrmark ,
    title:"St.Lawrence Market",
    price: "Free" ,
    description:`In the centre of historic Old Town Toronto, close to the hub of today’s downtown sits the St. Lawrence Market Complex (93 Front St. E.)—three buildings that have served as Toronto’s social centre, City Hall and marketplace throughout the city’s history.
    Explore the South Market building with its restaurants, artisans and specialty food vendors offering visitors the unique and lively atmosphere of an authentic farmers’ market; the Market Gallery with changing exhibits dedicated to Toronto’s art, culture and history; and the Market Kitchen with cooking classes for all ages and abilities.
    In the North Market building, you’ll find the farmers’ market where farmers arrive every Saturday at dawn to sell their meat, cheese and produce—just as they have been doing for more than 200 years. St. Lawrence Hall, which contains the magnificent Great Hall, continues to be Toronto’s favourite site for social and business functions. Complete your visit with a walking tour of the St. Lawrence Market Complex to hear about its 200-year history.`,
    typeofattraction: "Market",
    showMore: false,
    category: "Shopping"
    },
    {id: 16,
    picture: wonderland ,
    title:"Canada's Wonderland",
    price: "" ,
    description:"Canada’s Premiere Amusement Park truly has something for everyone. For thrill seekers, the park features 70 rides including 17 roller coasters and the all-new Yukon Striker, the world's fastest, tallest and longest dive roller coaster. And for families, the park includes 2 children areas with rides, games and live entertainment. In addition, cool off in Splash Works, a 20 acre water park or take in any of our world class live shows and special events. Each fall brings the return of Camp Spooky for kids and families by day, and Halloween Haunt's frightening attractions by night. And new for 2019, families can enjoy WinterFest, where the park will be magically transformed into a winter wonderland full of enchantment and holiday cheer.",
    typeofattraction: "Amusement Park",
    showMore: false,
    category: "Entertainment"
    },
    {id: 17,
    picture: littlecanada ,
    title:"Little Canada",
    price: "" ,
    description:`Explore the beauty of Canada in a whole new way! Little Canada takes you on a journey of discovery through Canada from the moment you enter. An interactive attraction showcasing Canada’s captivating vistas, landmarks and cityscapes in miniature scale, Little Canada aims to entertain and educate guests every tiny step of the way. From The Rockies to the Maritimes and up to the Arctic North, a new landscape to explore is around the corner – it’s an experience for all ages.`,
    typeofattraction: "Museum",
    showMore: false,
    category: "Museum"
    },
    {id: 18,
    picture: edmirvish ,
    title:"Ed Mirvish Theatre",
    price: "" ,
    description:"The Ed Mirvish Theatre began its life in 1920 as a combination vaudeville and motion picture theatre in the Pantages theatre circuit. With its original 3373 seats, it was the largest cinema in Canada and, with its lavish interior - designed by the great theatre architect Thomas Lamb - the most elegant. David Mirvish officially renamed the iconic building The Ed Mirvish Theatre on December 6, 2011.",
    typeofattraction: "Theatre",
    showMore: false,
    category: "Entertainment"
    },
]