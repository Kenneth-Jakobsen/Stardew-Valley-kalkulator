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
            <option>Spring</option>
            <option>Summer</option>
            <option>Fall</option>
            <option>Winter</option>
            <option>All</option>
        </select>
    </section>

    <div id="grid-container">
        <div>
            <p>Crop selector:</p>
            <input type="checkbox"> Include trees
            <br>
            <!-------------------------------------------------------->
            <input placeholder="Search crops">
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