function changePage(newPage){
    if (newPage === 'crops') model.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.currentPage = 'artisanPage';
    updateView()
}

function searchCrop(input){
    model.viewState.cropPage.cropSearch = input
    showCrops()
}

function cropSelect(index){
    model.viewState.cropPage.selectedCrop = model.data.crops[index]
    showSelCrop()
}

function removeSel(){
    model.viewState.cropPage.selectedCrop = ''
    showCrops()
}

function setSeason(season){
    model.viewState.cropPage.cropSeason = season
    showCrops()
}