
foreSections = []
midSections = []
coreSections = []
aftSections = []

// Sections IDs currently in use
foreSectionsIDs = []
midSectionsIDs = []
coreSectionsIDs = []
aftSectionsIDs = []

// Assigning section locations to variables
const fore = document.querySelector('#fore-frame');
const mid = document.querySelector('#mid-frame');
const core = document.querySelector('#core-frame');
const aft = document.querySelector('#aft-frame');

function addSection(location){
    
    // Increasing section ID in location and assigning to number variable and adding to section IDs list
    switch (location){
        case "fore":
            if(Math.max.apply(null, foreSectionsIDs) >= 1){
                number = Math.max.apply(null, foreSectionsIDs);
            }
            else{
                number = 0
            }
            number++
            foreSectionsIDs.push(number)
            break;
        case "mid":
            if(Math.max.apply(null, midSectionsIDs) >= 1){
                number = Math.max.apply(null, midSectionsIDs);
            }
            else{
                number = 0
            }
            number++
            midSectionsIDs.push(number)
            break;
        case "core":
            if(Math.max.apply(null, coreSectionsIDs) >= 1){
                number = Math.max.apply(null, coreSectionsIDs);
                }
            else{
                number = 0
            }
            number++
            coreSectionsIDs.push(number)
            break;
        case "aft":
            if(Math.max.apply(null, aftSectionsIDs) >= 1){
                number = Math.max.apply(null, aftSectionsIDs);
            }
            else{
                number = 0
            }
            number++
            aftSectionsIDs.push(number)
            break;
        }

    // Creating card div
    let newSection = document.createElement("div");
    newSection.setAttribute("class", "section-card card");
    newSection.setAttribute("id", location + number + "section");
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
    newItem.setAttribute("id", location + number + "section-close-button");
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
    newText = document.createTextNode("#");
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
    
    // Adding section to correct location and updating section number of that location and adding number to IDs in use list
    switch (location){
    case "fore":
        foreSections.push(newSection);
        fore.appendChild(newSection);
        document.getElementById("fore-sections-number").innerHTML++;
        break;
    case "mid":
        midSections.push(newSection);
        mid.appendChild(newSection);
        document.getElementById("mid-sections-number").innerHTML++;
        break;
    case "core":
        coreSections.push(newSection);
        core.appendChild(newSection);
        document.getElementById("core-sections-number").innerHTML++;
        break;
    case "aft":
        aftSections.push(newSection);
        aft.appendChild(newSection);
        document.getElementById("aft-sections-number").innerHTML++;
        break;
    }

    // Assigning the close button function
    document.getElementById(location + number + "section-close-button").addEventListener("click",findID, false);

    // Checking if core sections limits are being kept to
    coreLimits();
}

function findID(e){
    let number = e.currentTarget.id.replace(/\D/g,"");
    let location =  e.currentTarget.id.replace("section-close-button","");
    location = location.replace(number,"");
    number = parseInt(number, 10)
    removeSection(location, number);
}

// Checking if core sections limits are being kept to
function coreLimits(){
    
    let foreNumber = parseInt(document.getElementById("fore-sections-number").innerHTML, 10);
    let midNumber = parseInt(document.getElementById("mid-sections-number").innerHTML, 10);
    let coreNumber = parseInt(document.getElementById("core-sections-number").innerHTML, 10);
    let aftNumber = parseInt(document.getElementById("aft-sections-number").innerHTML, 10);

    if(coreNumber < Math.floor((foreNumber + midNumber + aftNumber)/3)){
        document.getElementById("section-warning-text").innerHTML = "Too few core sections";
    }
    else if(coreNumber > Math.floor((foreNumber + midNumber + coreNumber + aftNumber)/2)){
        document.getElementById("section-warning-text").innerHTML = "Too many core sections";
    }
    else{
        document.getElementById("section-warning-text").innerHTML = "<br>";
    }
}

function removeSection(location, number){
    // Checking that at least one section is in a location    
    if(parseInt(document.getElementById(location + "-sections-number").innerHTML, 10) == 1){
        document.getElementById("section-warning-text").innerHTML = "Each location must have at least one section";
        setTimeout(() => {coreLimits()}, 5000);
    }
    else{       
        // Removing section elements        
        let element = document.getElementById(location + number + "section");
        element.innerHTML = '';
        element.remove();
        // Lowering section count number
        document.getElementById(location + "-sections-number").innerHTML--;
        // Removing the id number from the section ID list
        switch (location){
            case "fore":
                for (let i = 0; i < foreSectionsIDs.length; i++) {
                    if (foreSectionsIDs[i] === number) {
                        let spliced = foreSectionsIDs.splice(i, 1);
                    }
                }
                break;
                case "mid":
                    for (let i = 0; i < midSectionsIDs.length; i++) {
                        if (midSectionsIDs[i] === number) {
                            let spliced = midSectionsIDs.splice(i, 1);
                        }
                    }
                case "core":
                    for (let i = 0; i < coreSectionsIDs.length; i++) {
                        if (coreSectionsIDs[i] === number) {
                            let spliced = coreSectionsIDs.splice(i, 1);
                        }
                    }
                case "aft":
                    for (let i = 0; i < aftSectionsIDs.length; i++) {
                        if (aftSectionsIDs[i] === number) {
                            let spliced = aftSectionsIDs.splice(i, 1);
                        }
                    }
                }
        
        // Checking if core sections limits are being kept to
        coreLimits();
    }
}

addSection("fore");
addSection("mid");
addSection("core");
addSection("aft");

// Creating the dropdown list for frame selection and applying it to the dropdown
let frameSelect = document.getElementById("frame-name-dd");
let frameOptions = Object.keys(frames);
for(let i = 0; i < frameOptions.length; i++) {
    let opt = frameOptions[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    frameSelect.appendChild(el);
}

// Creating event when frame selection is updated
document.getElementById("frame-name-dd").addEventListener("change", refreshFrame);
 function refreshFrame(){
    let frameSelection = document.getElementById("frame-name-dd").value;

    document.getElementById("frame-tier-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-armour-pattern-text").innerHTML = frames[frameSelection]["armour pattern fore"] + "-" + frames[frameSelection]["armour pattern mid"] + "-" + frames[frameSelection]["armour pattern aft"];
    document.getElementById("frame-shield-pattern-text").innerHTML = frames[frameSelection]["shield pattern front"] + "-" + frames[frameSelection]["shield pattern front side"] + "-" + frames[frameSelection]["shield pattern rear side"] + "-" + frames[frameSelection]["shield pattern rear"];

    if(frames[frameSelection]["flat move cost"] == 0){
        document.getElementById("frame-move-cost-text").innerHTML = "1/" + frames[frameSelection]["move cost base divider"] + " per " + frames[frameSelection]["move cost per sections"] + " sections";
    }
    else{
        document.getElementById("frame-move-cost-text").innerHTML = "1/" + frames[frameSelection]["move cost base divider"] + " per " + frames[frameSelection]["move cost per sections"] + " sections + " + frames[frameSelection]["flat move cost"] + "/" + frames[frameSelection]["move cost base divider"];
    }
    
    document.getElementById("frame-move-actual-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-turn-rate-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-turn-actual-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-damage-limit-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-damage-actual-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-health-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-health-actual-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-upgrade-cost-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-cost-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-sensors-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-sensors-actual-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-signal-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-signal-actual-text").innerHTML = frames[frameSelection]["tier"];
    document.getElementById("frame-misc-text").innerHTML = frames[frameSelection]["tier"];
    

}


// Assigning plus buttons
document.getElementById("fore-button-plus").addEventListener("click",a=>{addSection("fore")});
document.getElementById("mid-button-plus").addEventListener("click",a=>{addSection("mid")});
document.getElementById("core-button-plus").addEventListener("click",a=>{addSection("core")});
document.getElementById("aft-button-plus").addEventListener("click",a=>{addSection("aft")});

// Assigning minus buttons
document.getElementById("fore-button-minus").addEventListener("click",a=>{removeSection("fore", Math.max.apply(null, foreSectionsIDs))});
document.getElementById("mid-button-minus").addEventListener("click",a=>{removeSection("mid", Math.max.apply(null, midSectionsIDs))});
document.getElementById("core-button-minus").addEventListener("click",a=>{removeSection("core", Math.max.apply(null, coreSectionsIDs))});
document.getElementById("aft-button-minus").addEventListener("click",a=>{removeSection("aft", Math.max.apply(null, aftSectionsIDs))});