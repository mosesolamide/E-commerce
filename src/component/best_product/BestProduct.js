function applyDiscount(originalPrice, discountPercentage) {
    // Convert percentage to decimal (e.g., -40% → -0.4)
    const decimalDiscount = discountPercentage / 100
    
    // Calculate new price
    const newPrice = originalPrice * (1 - decimalDiscount)
    
    return Math.round(newPrice)
  }

export const data = [
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'Gucci duffle bag',
        discountPrice: applyDiscount(1160,35),
        discount: -35,
        id:1
    },
    {
        img: 'two.png',
        normalPrice: 170,
        name: 'RGB liquid CPU Cooler',
        discountPrice: applyDiscount(170,40),
        discount: -40,
        id:2
    },
    {
        img: 'three.png',
        normalPrice: 360,
        name: 'The north coat',
        discountPrice: applyDiscount(360,25),
        discount: -25,
        id:3
    },
    {
        img: 'two.png',
        normalPrice: 360,
        name: 'Small Bookself',
        discount: -30,
        id:4
    },
    {
        img: 'four.png',
        normalPrice: 360,
        name: 'Small Bookself',
        discountPrice: applyDiscount(360,30),
        discount: -30,
        id:4
    },   
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'Gucci duffle bag',
        discountPrice: applyDiscount(1160,35),
        discount: -35,
        id:1
    },
    {
        img: 'two.png',
        normalPrice: 170,
        name: 'RGB liquid CPU Cooler',
        discountPrice: applyDiscount(170,40),
        discount: -40,
        id:2
    },
    {
        img: 'one.png',
        normalPrice: 360,
        name: 'The north coat',
        discountPrice: applyDiscount(360,25),
        discount: -25,
        id:3
    },
    {
        img: 'three.png',
        normalPrice: 360,
        name: 'Small Bookself',
        discount: -30,
        id:4
    },
    {
        img: 'four.png',
        normalPrice: 360,
        name: 'Small Bookself',
        discountPrice: applyDiscount(360,30),
        discount: -30,
        id:4
    },   
    {
        img: 'two.png',
        normalPrice: 360,
        name: 'Small Bookself',
        discount: -30,
        id:4
    },
    {
        img: 'one.png',
        normalPrice: 360,
        name: 'Small Bookself',
        discountPrice: applyDiscount(360,30),
        discount: -30,
        id:4
    }, 
]
  