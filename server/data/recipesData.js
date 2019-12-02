// let img = require("../assets/pic.jpg")

module.exports = [
    {
        "id": "00001",
        "name": "Lasgna",
        "type":"italian",
        "category": "Vegetarian",
        "feeds":2,
        "allergy": "Peanuts",
        "image":"https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718097.jpg",
        "recipe": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Vestibulum pharetra purus vulputate leo ornare iaculis."],
        "ingredientList": ["eggplant","pasta"],
        "ingredients":[
            {
                "name":"eggplant",
                "category": "produce",
                "qty":"1",
                "unit":"pound" 
            },
            {
                "name":"pasta",
                "category": "dry item",
                "qty":"1",
                "unit":"box" 
            },
        ]
    },
    {
        "id": "00002",
        "name": "Curry",
        "type":"indian",
        "category": "Vegan",
        "feeds":5,
        "allergy": ["Dairy","Gluten"],
        "image":"https://static01.nyt.com/images/2019/01/17/dining/mc-red-lentil-soup/merlin_146234352_d7bc8486-b067-4cff-a4c0-7741f166fb60-articleLarge.jpg",
        "recipe": "dfjhsfksjhfskfhskfhdskjfhsdjfnfkjsdfns",
        "ingredientList": ["potato","rice"],
        "ingredients":[
            {
                "name":"potato",
                "category": "produce",
                "qty":"1",
                "unit":"pound" 
            },
            {
                "name":"rice",
                "category": "dry item",
                "qty":"1",
                "unit":"box" 
            },
        ]
    }
]
