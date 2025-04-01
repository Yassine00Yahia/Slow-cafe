export type Language = 'en' | 'fr' | 'ar';

export interface TranslationKeys {
  // Common
  menuTitle: string;
  menu: string;
  total: string;
  addToOrder: string;
  quantity: string;
  back: string;
  resetIntro: string;
  currency: string;
  
  // Item details
  price: string;
  description: string;
  default_description: string;
  tax_included: string;
  add_to_order: string;
  addingToCart: string;
  
  // Search functionality
  search: string;
  searchResults: string;
  noResults: string;
  tryDifferentSearch: string;
  
  // Cart functionality
  cart: string;
  emptyCart: string;
  emptyCartMessage: string;
  orderSuccess: string;
  orderSuccessMessage: string;
  continueShopping: string;
  orderSummary: string;
  items: string;
  deliveryFee: string;
  close: string;
  fullName: string;
  phoneNumber: string;
  deliveryAddress: string;
  deliveryTime: string;
  specialInstructions: string;
  placeOrder: string;
  asap: string;
  in30Minutes: string;
  in60Minutes: string;
  laterToday: string;
  checkout: string;
  clearCart: string;
  estimatedTotal: string;
  taxIncluded: string;
  
  // Recommendations
  recommendations: string;
  staffPick: string;
  tryIt: string;
  featuredItems: string;
  
  // All Categories
  plaisirCafes: string;
  coldChocolate: string;
  frappucino: string;
  detox: string;
  coldCoffee: string;
  hotChocolate: string;
  boissons: string;
  the: string;
  
  smoothiesCategory: string;
  mojitosCategory: string;
  milkshakesCategory: string;
  icedTeaCategory: string;
  jusFraisCategory: string;
  classicCoffeeCategory: string;
  painPerduCategory: string;
  gaufreSucreCategory: string;
  cheeseCakesCategory: string;
  pancakesCategory: string;
  fondantChocolatCategory: string;
  cookiesCategory: string;
  tartelettesCategory: string;
  cakeCategory: string;
  viennoiserieCategory: string;
  crepesSucreesCategory: string;
  brunchCategory: string;
  oeufsBenedictesCategory: string;
  croqueMrMmeCategory: string;
  clubSandwichCategory: string;
  pancakesGaufresSalesCategory: string;
  burgerCategory: string;
  crepesSaleesCategory: string;
  saladesCategory: string;
  bruschettaCategory: string;
  sandwichLibanaisCategory: string;
  sandwichRollsCategory: string;
  tendersCategory: string;
  menuChichasCategory: string;
  
  // Category ID Mappings
  "plaisir-cafes": string;
  "cold-chocolate": string;
  "cold-coffee": string;
  "hot-chocolate": string;
  "smoothies": string;
  "mojitos": string;
  "milkshakes": string;
  "iced-tea": string;
  "jus-frais": string;
  "classic-coffee": string;
  "pain-perdu": string;
  "gaufre-sucre": string;
  "cheese-cakes": string;
  "pancakes": string;
  "fondant-chocolat": string;
  "cookies": string;
  "tartelettes": string;
  "cake": string;
  "viennoiserie": string;
  "crepes-sucrees": string;
  "brunch": string;
  "oeufs-benedicts": string;
  "croque-mr-mme": string;
  "club-sandwich": string;
  "pancakes-gaufres-sales": string;
  "burger": string;
  "crepes-salees": string;
  "salades": string;
  "bruschetta": string;
  "sandwich-libanais-wraps": string;
  "sandwich-rolls": string;
  "tenders": string;
  "menu-chichas": string;
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    // Common
    menuTitle: "MENU",
    menu: "MENU",
    total: "Total",
    addToOrder: "Add to Order",
    quantity: "Quantity",
    back: "Back",
    resetIntro: "Reset Intro",
    currency: "DT",
    
    // Item details
    price: "Price",
    description: "Description",
    default_description: "Crafted with the finest ingredients for the perfect coffee experience.",
    tax_included: "Tax included",
    add_to_order: "Add to Order",
    addingToCart: "Adding...",
    
    // Search functionality
    search: "Search menu...",
    searchResults: "Search Results",
    noResults: "No items found",
    tryDifferentSearch: "Try different keywords or browse the menu categories",
    
    // Cart functionality
    cart: "Cart",
    emptyCart: "Your cart is empty",
    emptyCartMessage: "Add some delicious items to get started!",
    orderSuccess: "Order Placed Successfully!",
    orderSuccessMessage: "Thank you for your order. We'll deliver it as soon as possible.",
    continueShopping: "Continue Browsing",
    orderSummary: "Order Summary",
    items: "items",
    deliveryFee: "Delivery fee",
    close: "Close",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    deliveryAddress: "Delivery Address",
    deliveryTime: "Delivery Time",
    specialInstructions: "Special Instructions",
    placeOrder: "Place Order",
    asap: "As soon as possible",
    in30Minutes: "In 30 minutes",
    in60Minutes: "In 60 minutes",
    laterToday: "Later today",
    checkout: "Checkout",
    clearCart: "Clear Cart",
    estimatedTotal: "Estimated Total",
    taxIncluded: "Tax Included",
    
    // Recommendations
    recommendations: "Staff Recommendations",
    staffPick: "Staff Pick",
    tryIt: "Try it!",
    featuredItems: "Featured Items",
    
    // Categories
    plaisirCafes: "PLEASURE COFFEES",
    coldChocolate: "COLD CHOCOLATE",
    frappucino: "FRAPPUCINO",
    detox: "DETOX",
    coldCoffee: "COLD COFFEE",
    hotChocolate: "HOT CHOCOLATE",
    boissons: "COLD DRINKS",
    the: "TEA",
    
    // New Categories
    smoothiesCategory: "SMOOTHIES",
    mojitosCategory: "MOJITOS",
    milkshakesCategory: "MILKSHAKES",
    icedTeaCategory: "ICED TEA",
    jusFraisCategory: "FRESH JUICES",
    classicCoffeeCategory: "CLASSIC COFFEE",
    painPerduCategory: "FRENCH TOAST",
    gaufreSucreCategory: "SWEET WAFFLE",
    cheeseCakesCategory: "CHEESE CAKES",
    pancakesCategory: "PANCAKES",
    fondantChocolatCategory: "CHOCOLATE FONDANT",
    cookiesCategory: "COOKIES",
    tartelettesCategory: "TARTLETS",
    cakeCategory: "CAKE",
    viennoiserieCategory: "PASTRIES",
    crepesSucreesCategory: "SWEET CREPES",
    brunchCategory: "BRUNCH",
    oeufsBenedictesCategory: "EGGS BENEDICT",
    croqueMrMmeCategory: "CROQUE MONSIEUR/MADAME",
    clubSandwichCategory: "CLUB SANDWICH",
    pancakesGaufresSalesCategory: "SAVORY PANCAKES/WAFFLES",
    burgerCategory: "BURGER",
    crepesSaleesCategory: "SAVORY CREPES",
    saladesCategory: "SALADS",
    bruschettaCategory: "BRUSCHETTA",
    sandwichLibanaisCategory: "LEBANESE SANDWICH/WRAPS",
    sandwichRollsCategory: "SANDWICH ROLLS",
    tendersCategory: "TENDERS",
    menuChichasCategory: "SHISHA MENU",
    
    // ID to display mappings
    "plaisir-cafes": "PLEASURE COFFEES",
    "cold-chocolate": "COLD CHOCOLATE",
    "cold-coffee": "COLD COFFEE",
    "hot-chocolate": "HOT CHOCOLATE",
    "smoothies": "SMOOTHIES",
    "mojitos": "MOJITOS",
    "milkshakes": "MILKSHAKES",
    "iced-tea": "ICED TEA",
    "jus-frais": "FRESH JUICES",
    "classic-coffee": "CLASSIC COFFEE",
    "pain-perdu": "FRENCH TOAST",
    "gaufre-sucre": "SWEET WAFFLE",
    "cheese-cakes": "CHEESE CAKES",
    "pancakes": "PANCAKES",
    "fondant-chocolat": "CHOCOLATE FONDANT",
    "cookies": "COOKIES",
    "tartelettes": "TARTLETS",
    "cake": "CAKE",
    "viennoiserie": "PASTRIES",
    "crepes-sucrees": "SWEET CREPES",
    "brunch": "BRUNCH",
    "oeufs-benedicts": "EGGS BENEDICT",
    "croque-mr-mme": "CROQUE MONSIEUR/MADAME",
    "club-sandwich": "CLUB SANDWICH",
    "pancakes-gaufres-sales": "SAVORY PANCAKES/WAFFLES",
    "burger": "BURGER",
    "crepes-salees": "SAVORY CREPES",
    "salades": "SALADS",
    "bruschetta": "BRUSCHETTA",
    "sandwich-libanais-wraps": "LEBANESE SANDWICH/WRAPS",
    "sandwich-rolls": "SANDWICH ROLLS",
    "tenders": "TENDERS",
    "menu-chichas": "SHISHA MENU"
  },
  
  fr: {
    // Common
    menuTitle: "MENU",
    menu: "MENU",
    total: "Total",
    addToOrder: "Ajouter à la commande",
    quantity: "Quantité",
    back: "Retour",
    resetIntro: "Réinitialiser l'intro",
    currency: "DT",
    
    // Item details
    price: "Prix",
    description: "Description",
    default_description: "Élaboré avec les meilleurs ingrédients pour une expérience café parfaite.",
    tax_included: "Taxe incluse",
    add_to_order: "Ajouter à la commande",
    addingToCart: "Ajout en cours...",
    
    // Search functionality
    search: "Rechercher...",
    searchResults: "Résultats de recherche",
    noResults: "Aucun article trouvé",
    tryDifferentSearch: "Essayez d'autres mots-clés ou parcourez les catégories du menu",
    
    // Cart functionality
    cart: "Panier",
    emptyCart: "Votre panier est vide",
    emptyCartMessage: "Ajoutez quelques délicieux articles pour commencer!",
    orderSuccess: "Commande Passée avec Succès!",
    orderSuccessMessage: "Merci pour votre commande. Nous la livrerons dès que possible.",
    continueShopping: "Continuer les Achats",
    orderSummary: "Résumé de la Commande",
    items: "articles",
    deliveryFee: "Frais de livraison",
    close: "Fermer",
    fullName: "Nom Complet",
    phoneNumber: "Numéro de Téléphone",
    deliveryAddress: "Adresse de Livraison",
    deliveryTime: "Heure de Livraison",
    specialInstructions: "Instructions Spéciales",
    placeOrder: "Passer la Commande",
    asap: "Dès que possible",
    in30Minutes: "Dans 30 minutes",
    in60Minutes: "Dans 60 minutes",
    laterToday: "Plus tard aujourd'hui",
    checkout: "Commander",
    clearCart: "Vider le panier",
    estimatedTotal: "Total estimé",
    taxIncluded: "Taxes incluses",
    
    // Recommendations
    recommendations: "Recommandations du Personnel",
    staffPick: "Choix du Staff",
    tryIt: "Essayez-le!",
    featuredItems: "Articles en Vedette",
    
    // Categories
    plaisirCafes: "PLAISIR CAFÉS",
    coldChocolate: "CHOCOLAT FROID",
    frappucino: "FRAPPUCINO",
    detox: "DETOX",
    coldCoffee: "CAFÉ FROID",
    hotChocolate: "CHOCOLAT CHAUD",
    boissons: "BOISSONS FRAÎCHES",
    the: "THÉ",
    
    // New Categories
    smoothiesCategory: "SMOOTHIES",
    mojitosCategory: "MOJITOS",
    milkshakesCategory: "MILKSHAKES",
    icedTeaCategory: "THÉ GLACÉ",
    jusFraisCategory: "JUS FRAIS",
    classicCoffeeCategory: "CAFÉ CLASSIQUE",
    painPerduCategory: "PAIN PERDU",
    gaufreSucreCategory: "GAUFRE SUCRÉE",
    cheeseCakesCategory: "CHEESE CAKES",
    pancakesCategory: "PANCAKES",
    fondantChocolatCategory: "FONDANT AU CHOCOLAT",
    cookiesCategory: "COOKIES",
    tartelettesCategory: "TARTELETTES",
    cakeCategory: "GÂTEAU",
    viennoiserieCategory: "VIENNOISERIE",
    crepesSucreesCategory: "CRÊPES SUCRÉES",
    brunchCategory: "BRUNCH",
    oeufsBenedictesCategory: "ŒUFS BÉNÉDICTE",
    croqueMrMmeCategory: "CROQUE MONSIEUR/MADAME",
    clubSandwichCategory: "CLUB SANDWICH",
    pancakesGaufresSalesCategory: "PANCAKES/GAUFRES SALÉS",
    burgerCategory: "BURGER",
    crepesSaleesCategory: "CRÊPES SALÉES",
    saladesCategory: "SALADES",
    bruschettaCategory: "BRUSCHETTA",
    sandwichLibanaisCategory: "SANDWICH LIBANAIS/WRAPS",
    sandwichRollsCategory: "SANDWICH ROLLS",
    tendersCategory: "TENDERS",
    menuChichasCategory: "MENU CHICHAS",
    
    // Category ID Mappings
    "plaisir-cafes": "PLAISIR CAFÉS",
    "cold-chocolate": "CHOCOLAT FROID",
    "cold-coffee": "CAFÉ FROID",
    "hot-chocolate": "CHOCOLAT CHAUD",
    "smoothies": "SMOOTHIES",
    "mojitos": "MOJITOS",
    "milkshakes": "MILKSHAKES",
    "iced-tea": "THÉ GLACÉ",
    "jus-frais": "JUS FRAIS",
    "classic-coffee": "CAFÉ CLASSIQUE",
    "pain-perdu": "PAIN PERDU",
    "gaufre-sucre": "GAUFRE SUCRÉE",
    "cheese-cakes": "CHEESE CAKES",
    "pancakes": "PANCAKES",
    "fondant-chocolat": "FONDANT AU CHOCOLAT",
    "cookies": "COOKIES",
    "tartelettes": "TARTELETTES",
    "cake": "GÂTEAU",
    "viennoiserie": "VIENNOISERIE",
    "crepes-sucrees": "CRÊPES SUCRÉES",
    "brunch": "BRUNCH",
    "oeufs-benedicts": "ŒUFS BÉNÉDICTE",
    "croque-mr-mme": "CROQUE MONSIEUR/MADAME",
    "club-sandwich": "CLUB SANDWICH",
    "pancakes-gaufres-sales": "PANCAKES/GAUFRES SALÉS",
    "burger": "BURGER",
    "crepes-salees": "CRÊPES SALÉES",
    "salades": "SALADES",
    "bruschetta": "BRUSCHETTA",
    "sandwich-libanais-wraps": "SANDWICH LIBANAIS/WRAPS",
    "sandwich-rolls": "SANDWICH ROLLS",
    "tenders": "TENDERS",
    "menu-chichas": "MENU CHICHAS"
  },
  
  ar: {
    // Common
    menuTitle: "القائمة",
    menu: "القائمة",
    total: "المجموع",
    addToOrder: "أضف إلى الطلب",
    quantity: "الكمية",
    back: "رجوع",
    resetIntro: "إعادة المقدمة",
    currency: "د.ت",
    
    // Item details
    price: "السعر",
    description: "الوصف",
    default_description: "مصنوعة بأجود المكونات لتجربة قهوة مثالية.",
    tax_included: "شامل الضريبة",
    add_to_order: "أضف إلى الطلب",
    addingToCart: "جارٍ الإضافة...",
    
    // Search functionality
    search: "البحث...",
    searchResults: "نتائج البحث",
    noResults: "لم يتم العثور على أي عناصر",
    tryDifferentSearch: "جرب كلمات أخرى أو تصفح فئات القائمة",
    
    // Cart functionality
    cart: "سلة التسوق",
    emptyCart: "سلة التسوق فارغة",
    emptyCartMessage: "أضف بعض العناصر اللذيذة للبدء!",
    orderSuccess: "تم تقديم الطلب بنجاح!",
    orderSuccessMessage: "شكرا لطلبك. سنقوم بتوصيله في أقرب وقت ممكن.",
    continueShopping: "متابعة التسوق",
    orderSummary: "ملخص الطلب",
    items: "عناصر",
    deliveryFee: "رسوم التوصيل",
    close: "إغلاق",
    fullName: "الاسم الكامل",
    phoneNumber: "رقم الهاتف",
    deliveryAddress: "عنوان التوصيل",
    deliveryTime: "وقت التوصيل",
    specialInstructions: "تعليمات خاصة",
    placeOrder: "تقديم الطلب",
    asap: "في أقرب وقت ممكن",
    in30Minutes: "خلال 30 دقيقة",
    in60Minutes: "خلال 60 دقيقة",
    laterToday: "لاحقًا اليوم",
    checkout: "إتمام الطلب",
    clearCart: "إفراغ السلة",
    estimatedTotal: "المجموع التقديري",
    taxIncluded: "شامل الضريبة",
    
    // Recommendations
    recommendations: "توصيات الموظفين",
    staffPick: "اختيار الموظفين",
    tryIt: "جربه!",
    featuredItems: "العناصر المميزة",
    
    // Categories
    plaisirCafes: "القهوة",
    coldChocolate: "شوكولاتة باردة",
    frappucino: "فرابوتشينو",
    detox: "ديتوكس",
    coldCoffee: "قهوة باردة",
    hotChocolate: "شوكولاتة ساخنة",
    boissons: "المشروبات",
    the: "شاي",
    
    // New Categories
    smoothiesCategory: "سموذي",
    mojitosCategory: "موهيتو",
    milkshakesCategory: "ميلك شيك",
    icedTeaCategory: "شاي مثلج",
    jusFraisCategory: "عصائر طازجة",
    classicCoffeeCategory: "قهوة كلاسيكية",
    painPerduCategory: "خبز محمص فرنسي",
    gaufreSucreCategory: "وافل بالسكر",
    cheeseCakesCategory: "تشيز كيك",
    pancakesCategory: "بان كيك",
    fondantChocolatCategory: "فوندان الشوكولاتة",
    cookiesCategory: "كوكيز",
    tartelettesCategory: "تارت صغير",
    cakeCategory: "كيك",
    viennoiserieCategory: "معجنات",
    crepesSucreesCategory: "كريب بالسكر",
    brunchCategory: "فطور متأخر",
    oeufsBenedictesCategory: "بيض بينيديكت",
    croqueMrMmeCategory: "كروك مسيو/مدام",
    clubSandwichCategory: "كلوب ساندويتش",
    pancakesGaufresSalesCategory: "بان كيك/وافل مالح",
    burgerCategory: "برجر",
    crepesSaleesCategory: "كريب مالح",
    saladesCategory: "سلطات",
    bruschettaCategory: "بروسكيتا",
    sandwichLibanaisCategory: "ساندويتش لبناني/رابس",
    sandwichRollsCategory: "لفائف ساندويتش",
    tendersCategory: "تندرز",
    menuChichasCategory: "قائمة الشيشة",
    
    // Category ID Mappings
    "plaisir-cafes": "القهوة",
    "cold-chocolate": "شوكولاتة باردة",
    "cold-coffee": "قهوة باردة",
    "hot-chocolate": "شوكولاتة ساخنة",
    "smoothies": "سموذي",
    "mojitos": "موهيتو",
    "milkshakes": "ميلك شيك",
    "iced-tea": "شاي مثلج",
    "jus-frais": "عصائر طازجة",
    "classic-coffee": "قهوة كلاسيكية",
    "pain-perdu": "خبز محمص فرنسي",
    "gaufre-sucre": "وافل بالسكر",
    "cheese-cakes": "تشيز كيك",
    "pancakes": "بان كيك",
    "fondant-chocolat": "فوندان الشوكولاتة",
    "cookies": "كوكيز",
    "tartelettes": "تارت صغير",
    "cake": "كيك",
    "viennoiserie": "معجنات",
    "crepes-sucrees": "كريب بالسكر",
    "brunch": "فطور متأخر",
    "oeufs-benedicts": "بيض بينيديكت",
    "croque-mr-mme": "كروك مسيو/مدام",
    "club-sandwich": "كلوب ساندويتش",
    "pancakes-gaufres-sales": "بان كيك/وافل مالح",
    "burger": "برجر",
    "crepes-salees": "كريب مالح",
    "salades": "سلطات",
    "bruschetta": "بروسكيتا",
    "sandwich-libanais-wraps": "ساندويتش لبناني/رابس",
    "sandwich-rolls": "لفائف ساندويتش",
    "tenders": "تندرز",
    "menu-chichas": "قائمة الشيشة"
  }
};