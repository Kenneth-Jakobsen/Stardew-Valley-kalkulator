const model = {
    currentPage: 'cropPage',

    viewState: {
        cropPage: {
            cropSeason: "spring",
            cropSearch: '',
            selectedCrop: '',
        }

    },
    data: {
        crops: [
                {icon: "bilder/parsnip.png", text: "Parsnip", season: "spring"},
                {icon: "bilder/potato.png", text: "Potato", season: "spring"},
                {icon: "bilder/cflower.png", text: "Cauliflower", season: "spring"},
                {icon: "bilder/bean.png", text: "Green Bean", season: "spring"},
                {icon: "bilder/kale.png", text: "Kale", season: "spring"},
                {icon: "bilder/garlic.png", text: "Garlic", season: "spring"},
                {icon: "bilder/sberry.png", text: "Strawberry", season: "spring"},
                {icon: "bilder/carrot.png", text: "Carrot", season: "spring"},
                {icon: "bilder/rhubarb.png", text: "Rhubarb", season: "spring"},
            ],
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