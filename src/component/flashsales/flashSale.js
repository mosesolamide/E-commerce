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
        discount: -35
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30
    },
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'AK-900 Wired Keyboard',
        discountPrice: applyDiscount(1160,35),
        discount: -35
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30
    },
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'AK-900 Wired Keyboard',
        discountPrice: applyDiscount(1160,35),
        discount: -35
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30
    },
    {
        img: 'one.png',
        normalPrice: 1160,
        name: 'AK-900 Wired Keyboard',
        discountPrice: applyDiscount(1160,35),
        discount: -35
    },
    {
        img: 'two.png',
        normalPrice: 120,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(120,40),
        discount: -40
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30
    },
    {
        img: 'three.png',
        normalPrice: 400,
        name: 'S-Series Comfort Chair',
        discountPrice: applyDiscount(400,25),
        discount: -25
    },
    {
        img: 'four.png',
        normalPrice: 400,
        name: 'HAVIT HV-G92 Gamepad',
        discountPrice: applyDiscount(400,30),
        discount: -30
    }
]
  