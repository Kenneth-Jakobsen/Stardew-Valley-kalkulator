updateView()

function updateView(){
    let loadedPage = ''
    if (model.currentPage === 'cropPage') loadedPage = cropView()
    else if (model.currentPage === 'artisanPage') loadedPage = artisanView()
    let header = /*HTML*/`
        <header>
            <h1>Stardew Valley Calculator</h1>
            <section id="calcType">
                <button onclick="changePage('crops')">Crops</button>
                <button onclick="changePage('artisan')">Artisan Goods</button>
            </section>
        </header>` 

    let pageView = header + loadedPage

    document.getElementById('app').innerHTML = pageView
}

function cropView(){
    let html = /*HTML*/ `
    <h2>Crop & Profit Calculator</h2>
    <section>
        Choose season:
        <select>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
            <option value="all">All</option>
        </select>
    </section>

    <div id="grid-container">
        <div>
            <p>Crop selector:</p>
            <input type="checkbox"> Include trees
            <br>
            <!-------------------------------------------------------->
            <input placeholder="Search crops"
            oninput="searchCrop(this.value)">
            <div>${showCrops()}</div>
        </div>
<!-------------------------------------------------------->
        <div>
            <p>Configurations:</p>
            <p>Number of Seeds:</p>
            <input placeholder="0">
            <p>Fertilizer:</p>
            <select>
                <option>None</option>
                <option>Speed-Gro</option>
                <option>Deluxe Speed-Gro</option>
                <option>Hyper Speed-Gro</option>
            </select>
            <p>Profession: </p>
            <input type="checkbox"> Tiller
        </div>
<!-------------------------------------------------------->
        <div>
        <p>Result and Profit</p>
        <p>Total earnings:</p>
        <div>2000g</div>
        <p>Expenses:</p>
        <div>500g</div>
        <p>Net income:</p>
        <div>1500g</div>

        </div>
    </div>
    `
    
    return html
}

function artisanView(){
    let html = /*HTML*/ `
    <h2>Artisan Goods & Profit Calculator</h2>` 

    return html
}

function showCrops(display){
    let html = ''
    const crop = model.data.crops.spring
    const season = model.viewState.cropPage.cropSeason
    if (display){
        for (let i = 0; i < display.length; i++){
            console.log(display[i])
            html += /*HTML*/ `
                    <div><img class="item" src="${display[i].icon}">
                    ${display[i].text}</div>
                `
        }
    } //Den returnerer html inn i filterCrops funksjonen og 
    //derfor den ikke virker
    else {
        switch (season){
            case "spring":
                for (let i = 0; i < crop.length; i++){
                    html += /*HTML*/ `
                        <div class="item"><img class="itemimg" src="${crop[i].icon}">
                        ${crop[i].text}</div>
                    `
                }
            break;
        }
    }
    return html
}