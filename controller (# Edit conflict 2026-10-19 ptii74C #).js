function changePage(newPage){
    if (newPage === 'crops') model.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.currentPage = 'artisanPage';
    updateView()
}

function searchCrop(input){
    let search = model.viewState.cropPage.cropSearch
    search = input 
    updateView()
}