function applyDiscount(originalPrice, discountPercentage) {
    // Convert percentage to decimal (e.g., -40% → -0.4)
    const decimalDiscount = discountPercentage / 100
    
    // Calculate new price
    const newPrice = originalPrice * (1 - decimalDiscount)
    
    return newPrice
  }

export const data = [
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'AK-900 Wired Keyboard',
        discountPrice: applyDiscount(1160,35),
        discount: -35,
        id:1
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40,
        id:2
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25,
        id:3
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30,
        id:4
    },
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'AK-900 Wired Keyboard',
        discountPrice: applyDiscount(1160,35),
        discount: -35,
        id:5
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40,
        id:6
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25,
        id:7
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30,
        id:8
    },
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'AK-900 Wired Keyboard',
        discountPrice: applyDiscount(1160,35),
        discount: -35,
        id:9
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40,
        id:10
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25,
        id:11
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30,
        id:12
    },
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'AK-900 Wired Keyboard',
        discountPrice: applyDiscount(1160,35),
        discount: -35,
        id:13
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40,
        id:14
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25,
        id:15
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30,
        id:16
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25,
        id:17
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30,
        id:18
    }
]
  