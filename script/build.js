foreSections = []
midSections = []
coreSections = []
aftSections = []

const fore = document.querySelector('#fore-frame');
const mid = document.querySelector('#mid-frame');
const core = document.querySelector('#core-frame');
const aft = document.querySelector('#aft-frame');

function addSection(location, number){

    number = number + 1

    // Creating card div
    let newSection = document.createElement("div");
    newSection.setAttribute("class", "section-card card");
    //  Creating section pic div and image
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "section-pic");
    newItem = document.createElement("img");
    newItem.setAttribute("class", "card-picture");
    newItem.setAttribute("src", "images/section_logo.png");
    newItem.setAttribute("alt", "Section");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating section name div and dropdown
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "section-name");
    newItem = document.createElement("select");
    newItem.setAttribute("class", "card-selection");
    newItem.setAttribute("name", "section-name-dd");
    newItem.setAttribute("id", location + number + "section-name-dd");
            // For loop to add options
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    //  Creating tier div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "section-tier");
    newItem = document.createElement("p");
    newItem.setAttribute("id", location + number + "section-tier-text");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    //  Creating close div and button
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "section-close");
    newItem = document.createElement("button");
    newItem.setAttribute("class", "small-button");
    newPic = document.createElement("img");
    newPic.setAttribute("class", "button-image");
    newPic.setAttribute("src", "images/minus.png");
    newPic.setAttribute("alt", "Close");
    newItem.appendChild(newPic);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 1 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-1-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("1");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 1 div and text
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-1");
            // If function depending on if drop down needed or text
    newItem = document.createElement("p");
    newItem.setAttribute("id",  location + number + "dr-1-text");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 1 view div and button
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-1-view");
    newItem = document.createElement("button");
    newItem.setAttribute("class", "small-button");
    newPic = document.createElement("img");
    newPic.setAttribute("class", "button-image");
    newPic.setAttribute("src", "images/magnifying_glass.jpg");
    newPic.setAttribute("alt", "View");
    newItem.appendChild(newPic);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 2 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-2-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("2");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 2 div and text
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-2");
            // If function depending on if drop down needed or text
    newItem = document.createElement("p");
    newItem.setAttribute("id",  location + number + "dr-2-text");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 2 view div and button
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-2-view");
    newItem = document.createElement("button");
    newItem.setAttribute("class", "small-button");
    newPic = document.createElement("img");
    newPic.setAttribute("class", "button-image");
    newPic.setAttribute("src", "images/magnifying_glass.jpg");
    newPic.setAttribute("alt", "View");
    newItem.appendChild(newPic);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 3 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-3-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("3");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 3 div and text
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-3");
            // If function depending on if drop down needed or text
    newItem = document.createElement("p");
    newItem.setAttribute("id",  location + number + "dr-3-text");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 3 view div and button
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-3-view");
    newItem = document.createElement("button");
    newItem.setAttribute("class", "small-button");
    newPic = document.createElement("img");
    newPic.setAttribute("class", "button-image");
    newPic.setAttribute("src", "images/magnifying_glass.jpg");
    newPic.setAttribute("alt", "View");
    newItem.appendChild(newPic);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 4 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-4-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("4");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 4 div and text
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-4");
            // If function depending on if drop down needed or text
    newItem = document.createElement("p");
    newItem.setAttribute("id",  location + number + "dr-4-text");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 4 view div and button
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-4-view");
    newItem = document.createElement("button");
    newItem.setAttribute("class", "small-button");
    newPic = document.createElement("img");
    newPic.setAttribute("class", "button-image");
    newPic.setAttribute("src", "images/magnifying_glass.jpg");
    newPic.setAttribute("alt", "View");
    newItem.appendChild(newPic);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 5 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-5-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("5");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 5 div and text
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-5");
            // If function depending on if drop down needed or text
    newItem = document.createElement("p");
    newItem.setAttribute("id",  location + number + "dr-5-text");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 5 view div and button
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-5-view");
    newItem = document.createElement("button");
    newItem.setAttribute("class", "small-button");
    newPic = document.createElement("img");
    newPic.setAttribute("class", "button-image");
    newPic.setAttribute("src", "images/magnifying_glass.jpg");
    newPic.setAttribute("alt", "View");
    newItem.appendChild(newPic);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating section money div and pic
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "section-money");
    newItem = document.createElement("img");
    newItem.setAttribute("class", "card-picture");
    newItem.setAttribute("src", "images/money_bag.png");
    newItem.setAttribute("alt", "Cost");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating section cost div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "section-cost");
    newItem = document.createElement("p");
    newItem.setAttribute("id", location + number + "section-cost");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    //Creating section misc and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "section-misc");
    newItem = document.createElement("p");
    newItem.setAttribute("id",  location + number + "section-misc");
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);

    // window[location + number] = newSection;
    console.log(number)

    switch (location){
    case "fore":
        console.log("fore")
        foreSections.push(newSection);
        fore.appendChild(newSection);
        document.getElementById("fore-sections-number").innerHTML = number;
        break;
    case "mid":
        console.log("mid")
        midSections.push(newSection);
        mid.appendChild(newSection);
        document.getElementById("mid-sections-number").innerHTML = number;
        break;
    case "core":
        console.log("core")
        coreSections.push(newSection);
        core.appendChild(newSection);
        document.getElementById("core-sections-number").innerHTML = number;
        break;
    case "aft":
        console.log("aft")
        aftSections.push(newSection);
        aft.appendChild(newSection);
        document.getElementById("aft-sections-number").innerHTML = number;
        break;
    }


    //         card.setAttribute('class', 'playCard');
    //         card.appendChild(cardback.cloneNode(true)); // adds a copy of cardback
    //         card.addEventListener('click', flipCard);   // activates flipcard function when a card is clicked
    //         grid.appendChild(card);

    
}

addSection("fore", 0);
addSection("mid", 0);
addSection("core", 0);
addSection("aft", 0);


// Assigning plus buttons
document.getElementById("fore-button-plus").addEventListener("click",a=>{addSection("fore", parseInt(document.getElementById("fore-sections-number").innerHTML, 10))});
document.getElementById("mid-button-plus").addEventListener("click",a=>{addSection("mid", parseInt(document.getElementById("mid-sections-number").innerHTML, 10))});
document.getElementById("core-button-plus").addEventListener("click",a=>{addSection("core", parseInt(document.getElementById("core-sections-number").innerHTML, 10))});
document.getElementById("aft-button-plus").addEventListener("click",a=>{addSection("aft", parseInt(document.getElementById("aft-sections-number").innerHTML, 10))});
