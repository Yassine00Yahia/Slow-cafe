export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  longDescription?: string;
  price: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

// Menu categories with their items based on the new menu images
export const categories: Category[] = [
  // DRINKS MENU
  {
    id: "plaisir-cafes",
    name: "PLAISIR CAFÉS",
    items: [
      {
        id: "chocolat-cookies",
        name: "CHOCOLAT COOKIES",
        price: "6.5",
        image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "salted-caramel",
        name: "SALTED CARAMEL",
        price: "6.5",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-hazelnut",
        name: "CARAMEL HAZELNUT",
        price: "7.5",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "affogato",
        name: "AFFOGATO",
        price: "10",
        image: "https://images.unsplash.com/photo-1594631661960-32bdc79b0f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cold-chocolate",
    name: "COLD CHOCOLATE",
    items: [
      {
        id: "black-and-white",
        name: "BLACK AND WHITE",
        price: "10",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bounty",
        name: "BOUNTY",
        price: "11",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-chocolat-noir-cerise",
        name: "SLOW CHOCOLAT NOIR / CERISE",
        price: "14",
        image: "https://images.unsplash.com/photo-1572171572770-178d25383dbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "frappucino",
    name: "FRAPPUCINO",
    items: [
      {
        id: "oreo-frappucino",
        name: "OREO",
        price: "10",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-frappucino",
        name: "NUTELLA",
        price: "10",
        image: "https://images.unsplash.com/photo-1572805215775-5831be9004d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "banana-fudge",
        name: "BANANA FUDGE",
        price: "10",
        image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "popcorn-frappucino",
        name: "POPCORN",
        price: "10",
        image: "https://images.unsplash.com/photo-1608649947308-4ef5c9a09489?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-toffee",
        name: "CARAMEL TOFFEE",
        price: "10",
        image: "https://images.unsplash.com/photo-1587080413959-06b859fb107d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "cookies-frappucino",
        name: "COOKIES",
        price: "10",
        image: "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "detox",
    name: "DETOX",
    items: [
      {
        id: "green-land",
        name: "GREEN LAND",
        description: "(CONCOMBRE, BASILIC, POMME)",
        price: "8",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "summer-time",
        name: "SUMMER TIME",
        description: "(ANANAS, CITRON, MENTHE, GINGEMBRE)",
        price: "10",
        image: "https://images.unsplash.com/photo-1621263764928-aca608fc6266?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "healthy-green",
        name: "HEALTHY GREEN",
        description: "(KIWI, ANANAS, CITRON, MENTHE)",
        price: "10",
        image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "healthy-slow",
        name: "HEALTHY SLOW",
        description: "(POMME, CITRON, MENTHE, KIWI)",
        price: "11",
        image: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cold-coffee",
    name: "COLD COFFEE",
    items: [
      {
        id: "triple-mocha",
        name: "TRIPLE MOCHA",
        price: "6.5",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "ice-cream-late",
        name: "ICE CREAM LATE",
        price: "7",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "ice-toffee-nut",
        name: "ICE TOFFEE NUT",
        price: "8",
        image: "https://images.unsplash.com/photo-1560704429-5c09603a1859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "hot-chocolate",
    name: "HOT CHOCOLATE",
    items: [
      {
        id: "chocolat-classique",
        name: "CHOCOLAT CLASSIQUE",
        price: "6",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "white-cookies-choco-cannelle",
        name: "WHITE COOKIES CHOCO / CANNELLE",
        price: "8",
        image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "hot-bounty",
        name: "HOT BOUNTY",
        price: "9",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-nutella-speculoos",
        name: "SLOW NUTELLA / SPECULOS",
        price: "14",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "boissons",
    name: "BOISSONS FRAÎCHES",
    items: [
      {
        id: "eau-05",
        name: "EAU (0,5L)",
        price: "2",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "eau-1l",
        name: "EAU (1L)",
        price: "2.5",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "soda",
        name: "SODA",
        price: "4.5",
        image: "https://images.unsplash.com/photo-1596803244897-b42133361acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "redbull",
        name: "REDBULL",
        price: "5",
        image: "https://images.unsplash.com/photo-1613386023927-f360205685a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "garci-05",
        name: "GARCI (0,5L)",
        price: "2.2",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "garci-1l",
        name: "GARCI (1L)",
        price: "2.8",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "the",
    name: "THÉ",
    items: [
      {
        id: "tunisien",
        name: "TUNISIEN",
        price: "3",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "amande",
        name: "AMANDE",
        price: "6",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "infusion",
        name: "INFUSION",
        price: "4",
        image: "https://images.unsplash.com/photo-1519831802596-6aadd85ff671?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "smoothies",
    name: "SMOOTHIES",
    items: [
      {
        id: "mingos",
        name: "MINGOS",
        description: "(ANANAS, MANGUE, FRUITS ROUGES)",
        price: "10",
        image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pinacolada",
        name: "PIÑACOLADA",
        price: "10",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "strawberry-colada",
        name: "STRAWBERRY / COLADA",
        description: "(MÛRE, NOIX DE COCO, ANANAS)",
        price: "10",
        image: "https://images.unsplash.com/photo-1502481851512-e93e25e4d8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "island",
        name: "ISLAND",
        description: "(GINGEMBRE, ANANAS, ORANGE)",
        price: "11",
        image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-smoothie",
        name: "SLOW",
        description: "(FRUITS ROUGES, BANANE, NOIX DE COCO)",
        price: "12",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "mojitos",
    name: "MOJITOS",
    items: [
      {
        id: "virgin-mojito",
        name: "VIRGIN",
        price: "8",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "blue-mojito",
        name: "BLUE",
        price: "9",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "green-apple-mojito",
        name: "GREEN APPLE",
        price: "9",
        image: "https://images.unsplash.com/photo-1589985270958-bf202941283d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "passion-fruit-mojito",
        name: "FRUITS DE LA PASSION",
        price: "10",
        image: "https://images.unsplash.com/photo-1622090860720-c4a77e146284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "mangue-orientale-mojito",
        name: "MANGUE ORIENTALE",
        price: "10",
        image: "https://images.unsplash.com/photo-1604404494849-33e9c1a51263?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "red-mojito",
        name: "RED",
        price: "11",
        image: "https://images.unsplash.com/photo-1585621386284-99ba80a164fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "milkshakes",
    name: "MILKSHAKES",
    items: [
      {
        id: "original-oreo-milkshake",
        name: "ORIGINAL OREO",
        price: "10",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "berry-oreo-milkshake",
        name: "BERRY-OREO",
        price: "12",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-milkshake",
        name: "NUTELLA",
        price: "11",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "licorne-milkshake",
        name: "LICORNE",
        price: "10",
        image: "https://images.unsplash.com/photo-1583153814600-ec193fa5e069?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pistachio-milkshake",
        name: "PISTACHIO",
        price: "12",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-milkshake",
        name: "SLOW",
        description: "(CHOCO BLANC, BEURRE DE CACAHUÈTE)",
        price: "14",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "iced-tea",
    name: "ICED TEA",
    items: [
      {
        id: "peche-framboise",
        name: "PÊCHE / FRAMBOISE",
        price: "6",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "framboise-myrtille",
        name: "FRAMBOISE / MYRTILLE",
        price: "6",
        image: "https://images.unsplash.com/photo-1499638673689-79304ddb6dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-exotique",
        name: "SLOW EXOTIQUE",
        price: "7",
        image: "https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "jus-frais",
    name: "JUS FRAIS",
    items: [
      {
        id: "citronnade",
        name: "CITRONNADE",
        price: "6",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fraise-juice",
        name: "FRAISE",
        price: "7",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fraise-banane",
        name: "FRAISE / BANANE",
        price: "10",
        image: "https://images.unsplash.com/photo-1598061328661-ad57811bab77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "banane-juice",
        name: "BANANE",
        price: "9",
        image: "https://images.unsplash.com/photo-1614065612682-10dbc5db86e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "kiwi-juice",
        name: "KIWI",
        price: "10",
        image: "https://images.unsplash.com/photo-1606421717276-0e935e6ef193?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "orange-juice",
        name: "ORANGE",
        price: "6",
        image: "https://images.unsplash.com/photo-1546470427-878cc63db8a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-juice",
        name: "SLOW",
        description: "(BANANE, DATTES, MIEL, FRUITS SECS)",
        price: "15",
        image: "https://images.unsplash.com/photo-1622482594951-1b2aabc25909?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "classic-coffee",
    name: "CLASSIC COFFEE",
    items: [
      {
        id: "express",
        name: "EXPRESS",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1454926383284-ef2cbed9482a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "americano",
        name: "AMERICANO",
        price: "4",
        image: "https://images.unsplash.com/photo-1521302773734-e0a77bd98823?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "macchiata",
        name: "MACCHIATA",
        price: "4",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "capucin",
        name: "CAPUCIN",
        price: "4",
        image: "https://images.unsplash.com/photo-1489075113339-398059a0a9e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "cafe-creme",
        name: "CAFÉ CRÈME",
        price: "4.5",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "cafe-turc",
        name: "CAFÉ TURC",
        price: "6",
        image: "https://images.unsplash.com/photo-1581996323407-47191d1243bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nescafe",
        name: "NESCAFÉ",
        price: "6",
        image: "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "cappuccino",
        name: "CAPPUCCINO",
        price: "6",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplements",
        name: "SUPPLÉMENTS",
        description: "(NESTLÉ, AROME)",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  // FOOD MENU
  {
    id: "pain-perdu",
    name: "PAIN PERDU",
    items: [
      {
        id: "fruits-chantilly",
        name: "FRUITS - CHANTILLY",
        price: "15",
        image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-nutella",
        name: "CARAMEL - NUTELLA",
        price: "16",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "farci",
        name: "FARCI",
        description: "(NUTELLA, GLACE, CARAMEL)",
        price: "18",
        image: "https://images.unsplash.com/photo-1586511925375-9d7d16282fee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "gaufre-sucre",
    name: "GAUFRE SUCRÉ",
    items: [
      {
        id: "ferrero-kinder-oreo",
        name: "FERRERO ROCHER, KINDER CRUNCHY & BUENO, OREO",
        price: "15",
        image: "https://images.unsplash.com/photo-1589385973461-eaa9f0e22d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-banane",
        name: "CARAMEL - BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-gaufre",
        name: "NUTELLA",
        price: "13",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-beurre-sale",
        name: "CARAMEL BEURRE SALÉ",
        price: "13",
        image: "https://images.unsplash.com/photo-1505253947933-01d2c6e7556b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-banane-gaufre",
        name: "NUTELLA BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1593786267472-2acf0081ddd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cheese-cakes",
    name: "CHEESE CAKES",
    items: [
      {
        id: "nutella-cake",
        name: "NUTELLA",
        price: "11",
        image: "https://images.unsplash.com/photo-1565145270-4a9757c4d324?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fruits-rouges",
        name: "FRUITS ROUGES",
        price: "10",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-cake",
        name: "CARAMEL",
        price: "9",
        image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "speculoos",
        name: "SPÉCULOOS",
        price: "11",
        image: "https://images.unsplash.com/photo-1530397826681-0c0c55689ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "banoffee",
        name: "BANOFFEE",
        price: "15",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "pancakes",
    name: "PANCAKES",
    items: [
      {
        id: "3-sauces",
        name: "3 SAUCES",
        price: "14",
        image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-noisette",
        name: "NUTELLA NOISETTE",
        price: "15",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-pancake",
        name: "CARAMEL",
        price: "13",
        image: "https://images.unsplash.com/photo-1601079279011-bf317c02c31e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-banane-pancake",
        name: "NUTELLA - BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "ferrero-kinder-oreo-pancake",
        name: "FERRERO, KINDER, OREO",
        price: "15",
        image: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "fondant-chocolat",
    name: "FONDANT AU CHOCOLAT",
    items: [
      {
        id: "fondant-chocolat-glace",
        name: "AVEC SA BOULE DE GLACE À LA VANILLE",
        price: "10",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cookies",
    name: "COOKIES",
    items: [
      {
        id: "nutella-speculoos-noisettes",
        name: "NUTELLA, SPÉCULOOS, NOISETTES",
        price: "9",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pistache-framboise",
        name: "PISTACHE, FRAMBOISE",
        price: "10",
        image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-beurre-cacahuete",
        name: "NUTELLA - BEURRE DE CACAHUÈTE",
        price: "10",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "tartelettes",
    name: "TARTELETTES",
    items: [
      {
        id: "citron-meringue",
        name: "CITRON MERINGUÉ",
        price: "5",
        image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "noisette-praline",
        name: "NOISETTE PRALINÉ",
        price: "7",
        image: "https://images.unsplash.com/photo-1551879400-111a9087cd86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pistache-praline",
        name: "PISTACHE PRALINÉ",
        price: "8",
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cake",
    name: "CAKE",
    items: [
      {
        id: "chocolat-orange-citron",
        name: "CHOCOLAT, ORANGE, CITRON",
        price: "4",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nature",
        name: "NATURE",
        price: "3",
        image: "https://images.unsplash.com/photo-1549059261-9f2c3a5f0c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "viennoiserie",
    name: "VIENNOISERIE",
    items: [
      {
        id: "croissant-nature",
        name: "CROISSANT NATURE",
        price: "2",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pain-au-chocolat",
        name: "PAIN AU CHOCOLAT",
        price: "2.5",
        image: "https://images.unsplash.com/photo-1622627338426-9b897eda3f86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "choco-amandes",
        name: "CHOCO - AMANDES",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "crepes-sucrees",
    name: "CRÊPES SUCRÉES",
    items: [
      {
        id: "nutella-crepe",
        name: "NUTELLA",
        price: "13",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-banane-crepe",
        name: "NUTELLA BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1580128637905-a56e68a475b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "kinder-bueno-oreo-ferrero",
        name: "KINDER BUENO, OREO, FERRERO ROCHER",
        price: "17",
        image: "https://images.unsplash.com/photo-1607741851859-1057265cead4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-praline-pistache",
        name: "NUTELLA, PRALINÉ DE PISTACHE",
        price: "20",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "brunch",
    name: "BRUNCH",
    items: [
      {
        id: "oeufs-brouilles-omelette",
        name: "OEUFS BROUILLÉS/ OMELETTE",
        price: "5",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "thon-sup",
        name: "THON + SUPPLÉMENTS",
        price: "4",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "jambon-sup",
        name: "JAMBON + SUPPLÉMENTS",
        price: "3",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bacon-boeuf-sup",
        name: "BACON DE BOEUF + SUPPLÉMENTS",
        price: "5",
        image: "https://images.unsplash.com/photo-1529778873920-4da3574075ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "mozzarella-cerise-sup",
        name: "MOZZARELLA CERISE + SUPPLÉMENTS",
        price: "4",
        image: "https://images.unsplash.com/photo-1593560708920-61b98ae69957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "gouda-sup",
        name: "GOUDA + SUPPLÉMENTS",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fromage-frais-sup",
        name: "FROMAGE FRAIS + SUPPLÉMENTS",
        price: "2",
        image: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "gruyere-sup",
        name: "GRUYÈRE + SUPPLÉMENTS",
        price: "4",
        image: "https://images.unsplash.com/photo-1624806992023-c1640b1793a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "poulet-grille-sup",
        name: "POULET GRILLÉ + SUPPLÉMENTS",
        price: "5",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tenders-sup",
        name: "TENDERS + SUPPLÉMENTS",
        price: "6",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "avocat-sup",
        name: "AVOCAT + SUPPLÉMENTS",
        price: "7",
        image: "https://images.unsplash.com/photo-1519822472072-ec86d5ab6f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "oeufs-benedicts",
    name: "OEUFS BÉNÉDICTES",
    items: [
      {
        id: "nature-benedicts",
        name: "NATURE",
        price: "10",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f00a20fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "jambon-benedicts",
        name: "JAMBON",
        price: "12",
        image: "https://images.unsplash.com/photo-1608039790387-a6cc39d69a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bacon-benedicts",
        name: "BACON DE BOEUF",
        price: "14",
        image: "https://images.unsplash.com/photo-1608039790481-7b58c096985e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "croque-mr-mme",
    name: "CROQUE MR/MME",
    items: [
      {
        id: "bacon-croque",
        name: "BACON DE BOEUF",
        price: "23",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7e8b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "jambon-croque",
        name: "JAMBON",
        price: "18",
        image: "https://images.unsplash.com/photo-1626078641526-d28a04573358?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "thon-croque",
        name: "THON",
        price: "20",
        image: "https://images.unsplash.com/photo-1581237873086-122b72fad9c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "club-sandwich",
    name: "CLUB SANDWICH",
    items: [
      {
        id: "vegetarien-sandwich",
        name: "VÉGÉTARIEN",
        price: "16",
        image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "jambon-sandwich",
        name: "JAMBON",
        price: "17",
        image: "https://images.unsplash.com/photo-1621800043295-a73fe9435b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "poulet-sandwich",
        name: "POULET",
        price: "19",
        image: "https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "thon-sandwich",
        name: "THON",
        price: "18",
        image: "https://images.unsplash.com/photo-1591964702073-e654131f18df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "pancakes-gaufres-sales",
    name: "PANCAKES / GAUFRES SALÉS",
    items: [
      {
        id: "gaufre-bacon-benedicts",
        name: "GAUFRE BACON DE BŒUF, BÉNÉDICTE",
        price: "16",
        image: "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "gaufre-poulet-panne",
        name: "GAUFRE POULET PANNÉ",
        price: "18",
        image: "https://images.unsplash.com/photo-1608224683242-915fb4d0f8b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "gaufre-poulet-creme",
        name: "GAUFRE POULET À LA CRÈME",
        price: "17",
        image: "https://images.unsplash.com/photo-1588689115724-e933ad016df8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pancake-bacon",
        name: "PANCAKE BACON DE BŒUF",
        price: "15",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pancake-jambon",
        name: "PANCAKE JAMBON",
        price: "12",
        image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "burger",
    name: "BURGER",
    items: [
      {
        id: "chicken-burger",
        name: "CHICKEN BURGER",
        price: "13",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "classic-burger",
        name: "CLASSIC",
        price: "15",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pesto-burger",
        name: "PESTO",
        price: "16",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "crepes-salees",
    name: "CRÊPES SALÉES",
    items: [
      {
        id: "thon-crepe",
        name: "THON",
        price: "13",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "jambon-crepe",
        name: "JAMBON",
        price: "11",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "escalope-crepe",
        name: "ESCALOPE",
        price: "15",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "salades",
    name: "SALADES",
    items: [
      {
        id: "cesar",
        name: "CÉSAR",
        price: "20",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "burrata",
        name: "BURRATA",
        price: "23",
        image: "https://images.unsplash.com/photo-1578147249-5c681e006a2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bacon-salade",
        name: "BACON DE BŒUF",
        price: "25",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "bruschetta",
    name: "BRUSCHETTA",
    items: [
      {
        id: "saumon-avocat",
        name: "SAUMON - AVOCAT",
        price: "17",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bacon-bruschetta",
        name: "BACON DE BŒUF",
        price: "15",
        image: "https://images.unsplash.com/photo-1572695157671-66cb58a8e6fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pesto-burrata",
        name: "PESTO - BURRATA",
        price: "16",
        image: "https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "sandwich-libanais-wraps",
    name: "SANDWICH LIBANAIS / WRAPS",
    items: [
      {
        id: "thon-wrap",
        name: "THON",
        price: "10",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tenders-wrap",
        name: "TENDERS (POULET)",
        price: "13",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "viande-wrap",
        name: "VIANDE",
        price: "15",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e8d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "sandwich-rolls",
    name: "SANDWICH ROLLS",
    items: [
      {
        id: "poulet-crispy",
        name: "POULET CRISPY",
        price: "16",
        image: "https://images.unsplash.com/photo-1554306297-0c86e837d24b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "poulet-effiloche",
        name: "POULET EFFILOCHÉ",
        price: "17",
        image: "https://images.unsplash.com/photo-1539252554305-e5f5e2a482e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bacon-roll",
        name: "BACON DE BŒUF",
        price: "16",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "saumon-avocat-roll",
        name: "SAUMON - AVOCAT",
        price: "20",
        image: "https://images.unsplash.com/photo-1640791308341-ad69e68a6489?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "viande-effiloche",
        name: "VIANDE EFFILOCHÉ",
        price: "18",
        image: "https://images.unsplash.com/photo-1539252554305-e5f5e2a482e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "thon-roll",
        name: "THON",
        price: "15",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "tenders",
    name: "TENDERS",
    items: [
      {
        id: "tenders-frites",
        name: "4 PIÈCES + FRITES",
        price: "10",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "menu-chichas",
    name: "MENU CHICHAS",
    items: [
      {
        id: "tete-libanaise-fakher",
        name: "TÊTE LIBANAISE (FAKHER)",
        price: "12",
        image: "https://images.unsplash.com/photo-1564088438675-226d289df681?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-libanaise-adalia",
        name: "TÊTE LIBANAISE (ADALIA)",
        price: "13",
        image: "https://images.unsplash.com/photo-1564088438675-226d289df681?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-turque-fakher",
        name: "TÊTE TURQUE (FAKHER)",
        price: "11",
        image: "https://images.unsplash.com/photo-1508151320989-03971d1440cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-turque-adalia",
        name: "TÊTE TURQUE (ADALIA)",
        price: "12",
        image: "https://images.unsplash.com/photo-1508151320989-03971d1440cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-kaloud-fakher",
        name: "TÊTE KALOUD (FAKHER)",
        price: "14",
        image: "https://images.unsplash.com/photo-1559762739-91cf849be465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-kaloud-adalia",
        name: "TÊTE KALOUD (ADALIA)",
        price: "15",
        image: "https://images.unsplash.com/photo-1559762739-91cf849be465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "chicha-glacon",
        name: "CHICHA GLAÇON",
        price: "20",
        image: "https://images.unsplash.com/photo-1559762739-91cf849be465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  // DRINKS MENU
  {
    id: "smoothies",
    name: "SMOOTHIES",
    items: [
      {
        id: "mingos",
        name: "MINGOS",
        description: "(BANANAS, MANGUE, FRUITS ROUGES)",
        price: "10",
        image: "https://images.unsplash.com/photo-1589734435753-747b58d1b7b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pinacolada",
        name: "PINACOLADA",
        price: "10",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "strawberry-colada",
        name: "STRAWBERRY / COLADA",
        description: "(MÛRE, NOIX DE COCO, ANANAS)",
        price: "10",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "island",
        name: "ISLAND",
        description: "(GINGEMBRE, ANANAS, ORANGE)",
        price: "11",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-smoothie",
        name: "SLOW",
        description: "(FRUITS ROUGES, BANANE, NOIX DE COCO)",
        price: "12",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "mojitos",
    name: "MOJITOS",
    items: [
      {
        id: "virgin",
        name: "VIRGIN",
        price: "8",
        image: "https://images.unsplash.com/photo-1551887196-9b7064204728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "blue",
        name: "BLUE",
        price: "9",
        image: "https://images.unsplash.com/photo-1596392301391-1094ce41449c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "green-apple",
        name: "GREEN APPLE",
        price: "9",
        image: "https://images.unsplash.com/photo-1573749059590-350d393ba3d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fruits-passion",
        name: "FRUITS DE LA PASSION",
        price: "10",
        image: "https://images.unsplash.com/photo-1586845618305-9f9f646ca7aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "mangue-orientale",
        name: "MANGUE ORIENTALE",
        price: "10",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "red",
        name: "RED",
        price: "11",
        image: "https://images.unsplash.com/photo-1619604345902-40d5fdcd5862?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "milkshakes",
    name: "MILKSHAKES",
    items: [
      {
        id: "original-oreo",
        name: "ORIGINAL OREO",
        price: "10",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "berry-oreo",
        name: "BERRY- OREO",
        price: "12",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-milkshake",
        name: "NUTELLA",
        price: "11",
        image: "https://images.unsplash.com/photo-1559622214-f4a29c303b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "licorne",
        name: "LICORNE",
        price: "10",
        image: "https://images.unsplash.com/photo-1581343600721-f380e2fbf640?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pistachio",
        name: "PISTACHIO",
        price: "12",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-milkshake",
        name: "SLOW",
        description: "(CHOCO BLANC, BEURRE DE CACAHUÈTE)",
        price: "14",
        image: "https://images.unsplash.com/photo-1594631661960-32bdc79b0f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "iced-tea",
    name: "ICED TEA",
    items: [
      {
        id: "peche-framboise",
        name: "PÊCHE / FRAMBOISE",
        price: "6",
        image: "https://images.unsplash.com/photo-1556679343-c1c3dfad0bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "framboise-myrtille",
        name: "FRAMBOISE / MYRTILLE",
        price: "6",
        image: "https://images.unsplash.com/photo-1604309989321-5b111fdd1731?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-exotique",
        name: "SLOW EXOTIQUE",
        price: "7",
        image: "https://images.unsplash.com/photo-1566301586400-94002a261036?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "jus-frais",
    name: "JUS FRAIS",
    items: [
      {
        id: "citronnade",
        name: "CITRONNADE",
        price: "6",
        image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fraise",
        name: "FRAISE",
        price: "7",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fraise-banane",
        name: "FRAISE / BANANE",
        price: "10",
        image: "https://images.unsplash.com/photo-1579126999978-adb2806a47cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "banane",
        name: "BANANE",
        price: "9",
        image: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "kiwi",
        name: "KIWI",
        price: "10",
        image: "https://images.unsplash.com/photo-1622597118060-8fc545c1f2af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "orange",
        name: "ORANGE",
        price: "6",
        image: "https://images.unsplash.com/photo-1633475042629-847b385c59b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "slow-juice",
        name: "SLOW",
        description: "(BANANE, DATTES, MIEL, FRUITS SECS)",
        price: "15",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "classic-coffee",
    name: "CLASSIC COFFEE",
    items: [
      {
        id: "express",
        name: "EXPRESS",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1555778586-025ad5af1a35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "americano",
        name: "AMERICANO",
        price: "4",
        image: "https://images.unsplash.com/photo-1603288967651-cb3f1a7ce184?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "macchiata",
        name: "MACCHIATA",
        price: "4",
        image: "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "capucin",
        name: "CAPUCIN",
        price: "4",
        image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "cafe-creme",
        name: "CAFÉ CRÈME",
        price: "4.5",
        image: "https://images.unsplash.com/photo-1585078058733-a964166dfd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "cafe-turc",
        name: "CAFÉ TURC",
        price: "6",
        image: "https://images.unsplash.com/photo-1658932089219-7d2baf513a31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nescafe",
        name: "NESCAFÉ",
        price: "6",
        image: "https://images.unsplash.com/photo-1559018113-3a5738ff1e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "cappuccino",
        name: "CAPPUCCINO",
        price: "6",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplements",
        name: "SUPPLÉMENTS",
        description: "(NESTLÉ, AROME)",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1606777405495-98e1290dafd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  // SWEET MENU
  {
    id: "pain-perdu",
    name: "PAIN PERDU",
    items: [
      {
        id: "fruits-chantilly",
        name: "FRUITS - CHANTILLY",
        price: "15",
        image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-nutella",
        name: "CARAMEL - NUTELLA",
        price: "16",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "farci",
        name: "FARCI",
        description: "(NUTELLA, GLACE, CARAMEL)",
        price: "18",
        image: "https://images.unsplash.com/photo-1586511925375-9d7d16282fee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "gaufre-sucre",
    name: "GAUFRE SUCRÉ",
    items: [
      {
        id: "ferrero-kinder-oreo",
        name: "FERRERO ROCHER, KINDER CRUNCHY & BUENO, OREO",
        price: "15",
        image: "https://images.unsplash.com/photo-1589385973461-eaa9f0e22d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-banane",
        name: "CARAMEL - BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-gaufre",
        name: "NUTELLA",
        price: "13",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-beurre-sale",
        name: "CARAMEL BEURRE SALÉ",
        price: "13",
        image: "https://images.unsplash.com/photo-1505253947933-01d2c6e7556b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-banane-gaufre",
        name: "NUTELLA BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1593786267472-2acf0081ddd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cheese-cakes",
    name: "CHEESE CAKES",
    items: [
      {
        id: "nutella-cake",
        name: "NUTELLA",
        price: "11",
        image: "https://images.unsplash.com/photo-1565145270-4a9757c4d324?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "fruits-rouges",
        name: "FRUITS ROUGES",
        price: "10",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-cake",
        name: "CARAMEL",
        price: "9",
        image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "speculoos",
        name: "SPÉCULOOS",
        price: "11",
        image: "https://images.unsplash.com/photo-1530397826681-0c0c55689ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "banoffee",
        name: "BANOFFEE",
        price: "15",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "pancakes",
    name: "PANCAKES",
    items: [
      {
        id: "3-sauces",
        name: "3 SAUCES",
        price: "14",
        image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-noisette",
        name: "NUTELLA NOISETTE",
        price: "15",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "caramel-pancake",
        name: "CARAMEL",
        price: "13",
        image: "https://images.unsplash.com/photo-1601079279011-bf317c02c31e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-banane-pancake",
        name: "NUTELLA - BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "ferrero-kinder-oreo-pancake",
        name: "FERRERO, KINDER, OREO",
        price: "15",
        image: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "fondant-chocolat",
    name: "FONDANT AU CHOCOLAT",
    items: [
      {
        id: "fondant-chocolat-glace",
        name: "AVEC SA BOULE DE GLACE À LA VANILLE",
        price: "10",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cookies",
    name: "COOKIES",
    items: [
      {
        id: "nutella-speculoos-noisettes",
        name: "NUTELLA, SPÉCULOOS, NOISETTES",
        price: "9",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pistache-framboise",
        name: "PISTACHE, FRAMBOISE",
        price: "10",
        image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-beurre-cacahuete",
        name: "NUTELLA - BEURRE DE CACAHUÈTE",
        price: "10",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "tartelettes",
    name: "TARTELETTES",
    items: [
      {
        id: "citron-meringue",
        name: "CITRON MERINGUÉ",
        price: "5",
        image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "noisette-praline",
        name: "NOISETTE PRALINÉ",
        price: "7",
        image: "https://images.unsplash.com/photo-1551879400-111a9087cd86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pistache-praline",
        name: "PISTACHE PRALINÉ",
        price: "8",
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "cake",
    name: "CAKE",
    items: [
      {
        id: "chocolat-orange-citron",
        name: "CHOCOLAT, ORANGE, CITRON",
        price: "4",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nature",
        name: "NATURE",
        price: "3",
        image: "https://images.unsplash.com/photo-1624813743954-d3846d8ac184?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "viennoiserie",
    name: "VIENNOISERIE",
    items: [
      {
        id: "croissant-nature",
        name: "CROISSANT NATURE",
        price: "2",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pain-au-chocolat",
        name: "PAIN AU CHOCOLAT",
        price: "2.5",
        image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "choco-amandes",
        name: "CHOCO - AMANDES",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "crepes-sucrees",
    name: "CRÊPES SUCRÉES",
    items: [
      {
        id: "nutella-crepe",
        name: "NUTELLA",
        price: "13",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710123?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-banane-crepe",
        name: "NUTELLA BANANE",
        price: "16",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "kinder-bueno-oreo-ferrero",
        name: "KINDER BUENO, OREO, FERRERO ROCHER",
        price: "17",
        image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "nutella-praline-pistache",
        name: "NUTELLA, PRALINÉ DE PISTACHE",
        price: "20",
        image: "https://images.unsplash.com/photo-1635702961543-eb52ddda6005?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  // SAVORY MENU
  {
    id: "brunch",
    name: "BRUNCH",
    items: [
      {
        id: "oeufs-brouilles-omelette",
        name: "OEUFS BROUILLÉS/ OMELETTE",
        price: "5",
        image: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-thon",
        name: "+ SUPPLÉMENTS THON",
        price: "4",
        image: "https://images.unsplash.com/photo-1535245408636-801ab85a13d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-jambon",
        name: "+ JAMBON",
        price: "3",
        image: "https://images.unsplash.com/photo-1660411649099-392e0072811c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-bacon",
        name: "+ BACON DE BOEUF",
        price: "5",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-mozzarella",
        name: "+ MOZZARELLA CERISE",
        price: "4",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-gouda",
        name: "+ GOUDA",
        price: "3.5",
        image: "https://images.unsplash.com/photo-1553551795-42a0a3930e78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-fromage-frais",
        name: "+ FROMAGE FRAIS",
        price: "2",
        image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-gruyere",
        name: "+ GRUYÈRE",
        price: "4",
        image: "https://images.unsplash.com/photo-1610614819513-58e34989e72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-poulet-grille",
        name: "+ POULET GRILLÉ",
        price: "5",
        image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-tenders",
        name: "+ TENDERS",
        price: "6",
        image: "https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "supplement-avocat",
        name: "+ AVOCAT",
        price: "7",
        image: "https://images.unsplash.com/photo-1588601515708-6a5fec5e8da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "oeufs-benedicts",
    name: "OEUFS BÉNÉDICTES",
    items: [
      {
        id: "benedicts-nature",
        name: "NATURE",
        price: "10",
        image: "https://images.unsplash.com/photo-1590379238911-ea45d967cd60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "benedicts-jambon",
        name: "JAMBON",
        price: "12",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "benedicts-bacon",
        name: "BACON DE BOEUF",
        price: "14",
        image: "https://images.unsplash.com/photo-1565068841214-c4e320ba5402?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "croque-mr-mme",
    name: "CROQUE MR/MME",
    items: [
      {
        id: "croque-bacon",
        name: "BACON DE BOEUF",
        price: "23",
        image: "https://images.unsplash.com/photo-1587116298317-0a128be5acf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "croque-jambon",
        name: "JAMBON",
        price: "18",
        image: "https://images.unsplash.com/photo-1613391077565-08b603ae016b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "croque-thon",
        name: "THON",
        price: "20",
        image: "https://images.unsplash.com/photo-1596662927085-1e9d50b4c1cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "club-sandwich",
    name: "CLUB SANDWICH",
    items: [
      {
        id: "club-vegetarien",
        name: "VÉGÉTARIEN",
        price: "16",
        image: "https://images.unsplash.com/photo-1619096252200-11faea1ee24c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "club-jambon",
        name: "JAMBON",
        price: "17",
        image: "https://images.unsplash.com/photo-1642009946096-f204ced33a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "club-poulet",
        name: "POULET",
        price: "19",
        image: "https://images.unsplash.com/photo-1591924007496-fe2b97d68ec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "club-thon",
        name: "THON",
        price: "18",
        image: "https://images.unsplash.com/photo-1591984841747-dc801423966d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "pancakes-gaufres-sales",
    name: "PANCAKES / GAUFRES SALÉS",
    items: [
      {
        id: "gaufre-bacon-benedict",
        name: "GAUFRE BACON DE BŒUF, BÉNÉDICTE",
        price: "16",
        image: "https://images.unsplash.com/photo-1565068841214-c4e320ba5402?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "gaufre-poulet-panne",
        name: "GAUFRE POULET PANNÉ",
        price: "18",
        image: "https://images.unsplash.com/photo-1618845072579-bd45167bf29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "gaufre-poulet-creme",
        name: "GAUFRE POULET À LA CRÈME",
        price: "17",
        image: "https://images.unsplash.com/photo-1518830686998-b8847101b3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pancake-bacon",
        name: "PANCAKE BACON DE BŒUF",
        price: "15",
        image: "https://images.unsplash.com/photo-1580372648129-551c1969f8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "pancake-jambon",
        name: "PANCAKE JAMBON",
        price: "12",
        image: "https://images.unsplash.com/photo-1619368563819-c7b77ea7dd36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "burger",
    name: "BURGER",
    items: [
      {
        id: "chicken-burger",
        name: "CHICKEN BURGER",
        price: "13",
        image: "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "burger-classic",
        name: "CLASSIC",
        price: "15",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "burger-pesto",
        name: "PESTO",
        price: "16",
        image: "https://images.unsplash.com/photo-1579065694029-6c4788bf6909?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "crepes-salees",
    name: "CRÊPES SALÉES",
    items: [
      {
        id: "crepe-thon",
        name: "THON",
        price: "13",
        image: "https://images.unsplash.com/photo-1607430347711-edc9a18ba6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "crepe-jambon",
        name: "JAMBON",
        price: "11",
        image: "https://images.unsplash.com/photo-1603047269983-8781e5c27e7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "crepe-escalope",
        name: "ESCALOPE",
        price: "15",
        image: "https://images.unsplash.com/photo-1543152211-8130ed274718?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "salades",
    name: "SALADES",
    items: [
      {
        id: "salade-cesar",
        name: "CÉSAR",
        price: "20",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "salade-burrata",
        name: "BURRATA",
        price: "23",
        image: "https://images.unsplash.com/photo-1596939083986-a4b848121a4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "salade-bacon",
        name: "BACON DE BŒUF",
        price: "25",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "bruschetta",
    name: "BRUSCHETTA",
    items: [
      {
        id: "bruschetta-saumon-avocat",
        name: "SAUMON - AVOCAT",
        price: "17",
        image: "https://images.unsplash.com/photo-1572695157325-f0e1fe2af344?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bruschetta-bacon",
        name: "BACON DE BŒUF",
        price: "15",
        image: "https://images.unsplash.com/photo-1663954426064-cd294f2c0c0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "bruschetta-pesto-burrata",
        name: "PESTO - BURRATA",
        price: "16",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "sandwich-libanais-wraps",
    name: "SANDWICH LIBANAIS / WRAPS",
    items: [
      {
        id: "wrap-thon",
        name: "THON",
        price: "10",
        image: "https://images.unsplash.com/photo-1596662927085-1e9d50b4c1cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "wrap-tenders",
        name: "TENDERS (POULET)",
        price: "13",
        image: "https://images.unsplash.com/photo-1613496042127-102cb1d9546f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "wrap-viande",
        name: "VIANDE",
        price: "15",
        image: "https://images.unsplash.com/photo-1634869254864-48e18149fa8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "sandwich-rolls",
    name: "SANDWICH ROLLS",
    items: [
      {
        id: "roll-poulet-crispy",
        name: "POULET CRISPY",
        price: "16",
        image: "https://images.unsplash.com/photo-1613497582788-ea25d869ffdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "roll-poulet-effiloche",
        name: "POULET EFFILOCHÉ",
        price: "17",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "roll-bacon",
        name: "BACON DE BŒUF",
        price: "16",
        image: "https://images.unsplash.com/photo-1639024471183-ad09caf93ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "roll-saumon-avocat",
        name: "SAUMON - AVOCAT",
        price: "20",
        image: "https://images.unsplash.com/photo-1648146299011-3ef132acd730?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "roll-viande-effiloche",
        name: "VIANDE EFFILOCHÉ",
        price: "18",
        image: "https://images.unsplash.com/photo-1648146299011-3ef132acd730?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "roll-thon",
        name: "THON",
        price: "15",
        image: "https://images.unsplash.com/photo-1609501967126-1a42585f9d25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "tenders",
    name: "TENDERS",
    items: [
      {
        id: "tenders-frites",
        name: "4 PIÈCES + FRITES",
        price: "10",
        image: "https://images.unsplash.com/photo-1666275036357-41949d230293?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: "menu-chichas",
    name: "MENU CHICHAS",
    items: [
      {
        id: "tete-libanaise-fakher",
        name: "TÊTE LIBANAISE (FAKHER)",
        price: "12",
        image: "https://images.unsplash.com/photo-1588395856907-cf61750005b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-libanaise-adalia",
        name: "TÊTE LIBANAISE (ADALIA)",
        price: "13",
        image: "https://images.unsplash.com/photo-1588395856907-cf61750005b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-turque-fakher",
        name: "TÊTE TURQUE (FAKHER)",
        price: "11",
        image: "https://images.unsplash.com/photo-1588395856907-cf61750005b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-turque-adalia",
        name: "TÊTE TURQUE (ADALIA)",
        price: "12",
        image: "https://images.unsplash.com/photo-1588395856907-cf61750005b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-kaloud-fakher",
        name: "TÊTE KALOUD (FAKHER)",
        price: "14",
        image: "https://images.unsplash.com/photo-1588395856907-cf61750005b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "tete-kaloud-adalia",
        name: "TÊTE KALOUD (ADALIA)",
        price: "15",
        image: "https://images.unsplash.com/photo-1588395856907-cf61750005b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: "chicha-glacon",
        name: "CHICHA GLAÇON",
        price: "20",
        image: "https://images.unsplash.com/photo-1588395856907-cf61750005b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  }
];
