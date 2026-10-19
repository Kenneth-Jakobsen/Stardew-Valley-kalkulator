const model = {
    currentPage: 'cropPage',

    viewState: {
        cropPage: {
            cropSeason: "spring",
            cropSearch: '',

        }

    },
    data: {
        crops: {
            spring: [
                {icon: "bilder/parsnip.png", text: "Parsnip", search: "parsnip"},
                {icon: "bilder/potato.png", text: "Potato", search: "potato"},
                {icon: "bilder/cflower.png", text: "Cauliflower", search: "cauliflower"},
                {icon: "bilder/bean.png", text: "Green Bean", search: "green bean"},
                {icon: "bilder/kale.png", text: "Kale", search: "kale"},
                {icon: "bilder/garlic.png", text: "Garlic", search: "garlic"},
                {icon: "bilder/sberry.png", text: "Strawberry", search: "strawberry"},
                {icon: "bilder/carrot.png", text: "Carrot", search: "carrot"},
                {icon: "bilder/rhubarb.png", text: "Rhubarb", search: "rhubarb"},
            ],
            summer: [],
            fall: [],
            winter: []
        },
        

    },
}




/*
Crop calulator:
Season selector: spring, summer--
-> drop-down meny + "alle" option

Crop selector: spørs på sesong, parsnip --
-> liste med valg basert på sesong

Configuration: midt-felt
Antall frø -> input
Type gjødsel -> dropdown meny
Profession -> Tiller checkbox

Result & Profit:
Total earnings -> resultet g(old)
Utgifter (frø) -> input
Netto profit per dag:


*/

/* 
Artisan goods:
Season selector: spring, summer--
-> drop-down meny + "alle" option

Venstre-felt er det samme
Mid-felt:
Antall -> input
kvalitet -> drop-down
Type process -> drop-down
Profession -> Artisan checkbox

Result & Profit:

*/