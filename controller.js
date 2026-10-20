function changePage(newPage){
    if (newPage === 'crops') model.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.currentPage = 'artisanPage';
    updateView()
}

function searchCrop(input){
    model.viewState.cropPage.cropSearch = input
    showCrops()
}

function cropSelect(item){
    console.log(item)
    model.viewState.cropPage.selectedCrop = item
    showSelCrop()
}