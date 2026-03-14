const TourCategory = {
    One: 1,
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    WithOutStars: 0
};

export const tours_data = [
    {
        name : "name-1",
        card_image: "https://russpass.ru/tours/_next/image?url=https%3A%2F%2Fcms.russpass.ru%2Fv1%2Ffile%2F6389aafb3db12c838e303085%2F924&w=1920&q=75",
        location : "location",
        type : "tour",
        // betwen 0 and 5 stars
        category : 0, 
        duration : 1,
        features : [
            "1",
            "2"
        ],
        price : 100,
        gallery : [
            "/src/assets/react.svg",
            "/src/assets/react.svg",
            "/src/assets/react.svg"
        ],
        description : "sample text",
        tour_program : {
            days : [
                {
                    events : [
                        "some-1",
                        "some-2"
                    ]
                }
            ]
        },

    },

    {
        name : "name-2",
        card_image: "https://russpass.ru/tour/_next/image?url=https%3A%2F%2Fcms.russpass.ru%2Fv1%2Ffile%2F66420475b47132f742e72f6f&w=1920&q=75",
        location : "location",
        type : "tour",
        // betwen 0 and 5 stars
        category : 0, 
        duration : 3,
        features : [
            "1",
        ],
        price : 200,
        gallery : [
            "/src/assets/react.svg",
            "/src/assets/react.svg",
            "/src/assets/react.svg"
        ],
        description : "sample text",
        tour_program : {
            days : [
                {
                    events : [
                        "some-1",
                        "some-2"
                    ]
                }
            ]
        },

    },
];