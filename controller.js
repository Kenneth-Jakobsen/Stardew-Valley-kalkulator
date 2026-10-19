function changePage(newPage){
    if (newPage === 'crops') model.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.currentPage = 'artisanPage';
    updateView()
}

function searchCrop(input){
    let search = model.viewState.cropPage.cropSearch
    search = input
    filterCrops(input, 'spring')
}


function filterCrops(input, season){
    const crop = model.data.crops.spring
    let filSearch = []
    for (let i = 0; i < crop.length; i++){
        if (crop[i].search.includes(input)){
            filSearch.push(crop[i])
        }
    }
    showCrops(filSearch)
}