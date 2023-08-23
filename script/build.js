
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

// Creating list for section and core dropdowns
let options = Object.keys(sections);
let coreOptions = []
let sectionOptions = []
for(let i = 0; i < options.length; i++) {
    if(sections[options[i]]["location"] == "outer"){
        sectionOptions.push(options[i]);
    }
    else if(sections[options[i]]["location"] == "core"){
        coreOptions.push(options[i]);
    }
}

// Creating lists for card selection dropdowns
let cardComponents = Object.keys(components);
let powerOptions = []
let defenceOptions = []
let utilityOptions = []
let lghWeaponOptions = []
let hvyWeaponOptions = []
let defArmourOptions = []
let defShieldOptions = []
for(let i = 0; i < cardComponents.length; i++) {
    switch (components[cardComponents[i]]["type"]){
        case "Power":
            powerOptions.push(cardComponents[i]);
            break;
        case "Defence":
            defenceOptions.push(cardComponents[i]);
            break;
        case "Utility":
            utilityOptions.push(cardComponents[i]);
            break;
        case "Light Weapon":
            lghWeaponOptions.push(cardComponents[i]);
            break;
        case "Heavy Weapon":
            hvyWeaponOptions.push(cardComponents[i]);
            break;
    }
}
for(let i = 0; i < defenceOptions.length; i++) {
    switch (components[cardComponents[i]]["subtype"]){
        case "Armour":
            defArmourOptions.push(defenceOptions[i]);
            break;
        case "Shield":
            defShieldOptions.push(defenceOptions[i]);
            break;
    }
}

// Function to add a section card
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
    el = document.createElement("option");
    el.setAttribute("value", "");
    el.setAttribute("selected", true);
    el.setAttribute("disabled", true);
    el.setAttribute("hidden", true);
    newItem.appendChild(el);
    
    // Applying dropdown to section depending if core or outer
    if(location == "core"){
        for(let i = 0; i < coreOptions.length; i++) {
            let opt = coreOptions[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            newItem.appendChild(el);
        }
    }
    else if(location == "fore" || location == "mid" || location == "aft"){
        for(let i = 0; i < sectionOptions.length; i++) {
            let opt = sectionOptions[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            newItem.appendChild(el);
        }
    }

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
    // Creating dr 1 div for contents
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-1");
    newDiv.setAttribute("id", location + number + "dr-1-contents");
    newSection.appendChild(newDiv);
    // Creating dr 1 view div
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-1-view");
    newDiv.setAttribute("id", location + number + "dr-1-view");
    newSection.appendChild(newDiv);
    // Creating dr 2 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-2-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("2");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 2 div for contents
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-2");
    newDiv.setAttribute("id", location + number + "dr-2-contents");
    newSection.appendChild(newDiv);
    // Creating dr 2 view div
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-2-view");
    newDiv.setAttribute("id", location + number + "dr-2-view");
    newSection.appendChild(newDiv);
    // Creating dr 3 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-3-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("3");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 3 div for contents
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-3");
    newDiv.setAttribute("id", location + number + "dr-3-contents");
    newSection.appendChild(newDiv);
    // Creating dr 3 view div
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-3-view");
    newDiv.setAttribute("id", location + number + "dr-3-view");
    newSection.appendChild(newDiv);
    // Creating dr 4 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-4-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("4");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 4 div for contents
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-4");
    newDiv.setAttribute("id", location + number + "dr-4-contents");
    newSection.appendChild(newDiv);
    // Creating dr 4 view div
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-4-view");
    newDiv.setAttribute("id", location + number + "dr-4-view");
    newSection.appendChild(newDiv);
    // Creating dr 5 label div and paragraph
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-5-label");
    newItem = document.createElement("p");
    newText = document.createTextNode("#");
    newItem.appendChild(newText);
    newDiv.appendChild(newItem);
    newSection.appendChild(newDiv);
    // Creating dr 5 div for contents
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-5");
    newDiv.setAttribute("id", location + number + "dr-5-contents");
    newSection.appendChild(newDiv);
    // Creating dr 5 view div
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dr-5-view");
    newDiv.setAttribute("id", location + number + "dr-5-view");
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
    document.getElementById(location + number + "section-close-button").addEventListener("click", findID, false);

    // Checking if core sections limits are being kept to
    coreLimits();
    refreshFrame();

    // Assigning listener to dropdown selection
    document.getElementById(location + number + "section-name-dd").addEventListener("change", updateCard, false);

}

// Finds the location and number of the section clicked then runs updates the card
function updateCard(e){
    let number = e.currentTarget.id.replace(/\D/g,"");
    let location =  e.currentTarget.id.replace("section-name-dd","");
    location = location.replace(number,"");
    number = parseInt(number, 10)

    let sectionSelection = document.getElementById(e.currentTarget.id).value;

    document.getElementById(location + number + "section-tier-text").innerHTML = sections[sectionSelection]["tier"];
    
    // For loop to assign damage regions 1 to 4
    for(let dr = 1; dr < 5; dr++) {
        let contents = document.querySelector("#" + location + number + "dr-" + dr + "-contents");
        if(sections[sectionSelection]["slot_" + dr + "-1_amount"] == "slot"){

            // code to add dropdown limited to type and a label just before
            newItem = document.createElement("p");
            newItem.setAttribute("class", "selection-label");
            newItem.setAttribute("id", location + number + "dr-" + dr + "selection-label");
            contents.appendChild(newItem);
            newItem = document.createElement("select");
            newItem.setAttribute("class", "card-selection");
            newItem.setAttribute("name", "section-name-dd");
            newItem.setAttribute("id", location + number + "dr-" + dr + "-dd");
            el = document.createElement("option");
            el.setAttribute("value", "");
            el.setAttribute("selected", true);
            el.setAttribute("disabled", true);
            el.setAttribute("hidden", true);
            newItem.appendChild(el);

            // Applying dropdown to section dr's depending on type
            switch (sections[sectionSelection]["slot_" + dr + "-1"]){
                case "Power":
                    document.getElementById(location + number + "dr-" + dr + "selection-label").innerHTML = "Power";
                    for(let i = 0; i < powerOptions.length; i++) {
                        let opt = powerOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newItem.appendChild(el);
                    }
                    break;
                case "Defence":
                    document.getElementById(location + number + "dr-" + dr + "selection-label").innerHTML = "Defence";
                    for(let i = 0; i < defenceOptions.length; i++) {
                        let opt = defenceOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newItem.appendChild(el);
                    }
                    break;
                case "Utility":
                    document.getElementById(location + number + "dr-" + dr + "selection-label").innerHTML = "Utiliy";
                    for(let i = 0; i < utilityOptions.length; i++) {
                        let opt = utilityOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newItem.appendChild(el);
                    }
                    break;
                case "Light Weapon":
                    document.getElementById(location + number + "dr-" + dr + "selection-label").innerHTML = "Light Weapon";
                    for(let i = 0; i < lghWeaponOptions.length; i++) {
                        let opt = lghWeaponOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newItem.appendChild(el);
                    }
                    break;
                case "Heavy Weapon":
                    document.getElementById(location + number + "dr-" + dr + "selection-label").innerHTML = "Heavy Weapon";
                    for(let i = 0; i < hvyWeaponOptions.length; i++) {
                        let opt = hvyWeaponOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newItem.appendChild(el);
                    }
                    break;
                case "Defence Armour":
                    document.getElementById(location + number + "dr-" + dr + "selection-label").innerHTML = "Defence Armour";
                    for(let i = 0; i < defArmourOptions.length; i++) {
                        let opt = defArmourOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newItem.appendChild(el);
                    }
                    break;
                case "Defence Shield":
                    document.getElementById(location + number + "dr-" + dr + "selection-label").innerHTML = "Defence Shield";
                    for(let i = 0; i < defShieldOptions.length; i++) {
                        let opt = defShieldOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newItem.appendChild(el);
                    }
                    break;
            }
            contents.appendChild(newItem);
        }
        else{
            // code to add text/boxes
        }

        // again except for 2nd possible option
        if(sections[sectionSelection]["slot_"+dr+"-2_amount"] == "slot"){

        }

        // Checks to see if a view button is needed
        if(sections[sectionSelection]["slot_" + dr + "-1_amount"] == "slot" || sections[sectionSelection]["slot_1-2_amount"] == "slot"){
            // Adds the view button
            let viewBut = document.querySelector("#" + location + number + "dr-" + dr + "-view");
            newItem = document.createElement("button");
            newItem.setAttribute("class", "small-button");
            newItem.setAttribute("id", location + number + "dr-" + dr + "-view-button");
            newPic = document.createElement("img");
            newPic.setAttribute("class", "button-image");
            newPic.setAttribute("src", "images/magnifying_glass.jpg");
            newPic.setAttribute("alt", "View");
            newItem.appendChild(newPic);
            viewBut.appendChild(newItem);

            // Assigning the view button
            document.getElementById(location + number + "dr-" + dr + "-view-button").addEventListener("click", view, false);
        }

        // id's that need doing v
        
        location + number + "dr-5-contents"
        location + number + "dr-5-view"
        location + number + "section-cost"
        location + number + "section-misc"
        
        
    }
}

// Finds the location and number of the section clicked then runs removeSection function
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
                break;
            case "core":
                for (let i = 0; i < coreSectionsIDs.length; i++) {
                    if (coreSectionsIDs[i] === number) {
                        let spliced = coreSectionsIDs.splice(i, 1);
                    }
                }
                break;
            case "aft":
                for (let i = 0; i < aftSectionsIDs.length; i++) {
                    if (aftSectionsIDs[i] === number) {
                        let spliced = aftSectionsIDs.splice(i, 1);
                    }
                }
                break;
        }
        
        // Checking if core sections limits are being kept to
        coreLimits();
        refreshFrame();
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

// Function to refresh information after an update
function refreshFrame(){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let amountSections = parseInt(document.getElementById("fore-sections-number").innerHTML, 10) + parseInt(document.getElementById("mid-sections-number").innerHTML, 10) + parseInt(document.getElementById("core-sections-number").innerHTML, 10) + parseInt(document.getElementById("aft-sections-number").innerHTML, 10);

    if(frameSelection != ""){
        document.getElementById("frame-tier-text").innerHTML = frames[frameSelection]["tier"];
        document.getElementById("frame-armour-pattern-text").innerHTML = frames[frameSelection]["armour pattern fore"] + "-" + frames[frameSelection]["armour pattern mid"] + "-" + frames[frameSelection]["armour pattern aft"];
        document.getElementById("frame-shield-pattern-text").innerHTML = frames[frameSelection]["shield pattern front"] + "-" + frames[frameSelection]["shield pattern front side"] + "-" + frames[frameSelection]["shield pattern rear side"] + "-" + frames[frameSelection]["shield pattern rear"];

        if(frames[frameSelection]["flat move cost"] == 0){
            document.getElementById("frame-move-cost-text").innerHTML = "1/" + frames[frameSelection]["move cost base divider"] + " per " + frames[frameSelection]["move cost per sections"] + " sections";
        }
        else{
            document.getElementById("frame-move-cost-text").innerHTML = "1/" + frames[frameSelection]["move cost base divider"] + " per " + frames[frameSelection]["move cost per sections"] + " sections + " + frames[frameSelection]["flat move cost"] + "/" + frames[frameSelection]["move cost base divider"];
        }
        
        document.getElementById("frame-move-actual-text").innerHTML = parseFloat((1/frames[frameSelection]["move cost base divider"] * Math.floor(amountSections/frames[frameSelection]["move cost per sections"])) + (frames[frameSelection]["flat move cost"]/frames[frameSelection]["move cost base divider"])).toFixed(2);
        document.getElementById("frame-turn-rate-text").innerHTML = frames[frameSelection]["base turn rate"] + " - 1 per 4 sections";
        document.getElementById("frame-turn-actual-text").innerHTML = Math.max(1,frames[frameSelection]["base turn rate"] - Math.floor(amountSections/4));
        document.getElementById("frame-damage-limit-text").innerHTML = "1 per " + frames[frameSelection]["damage limit divider"] + " sections + " + frames[frameSelection]["damage limit fixed"];
        document.getElementById("frame-damage-actual-text").innerHTML = Math.floor(amountSections/frames[frameSelection]["damage limit divider"]) + frames[frameSelection]["damage limit fixed"];
        document.getElementById("frame-health-text").innerHTML = frames[frameSelection]["ht"];
        document.getElementById("frame-health-actual-text").innerHTML = frames[frameSelection]["ht"];
        document.getElementById("frame-upgrade-cost-text").innerHTML = frames[frameSelection]["upgrade cost"];
        document.getElementById("frame-cost-text").innerHTML = frames[frameSelection]["frame cost"];
        document.getElementById("frame-sensors-text").innerHTML = frames[frameSelection]["sensors"];
        document.getElementById("frame-sensors-actual-text").innerHTML = frames[frameSelection]["sensors"];
        document.getElementById("frame-signal-text").innerHTML = frames[frameSelection]["signal base"];
        document.getElementById("frame-signal-actual-text").innerHTML = frames[frameSelection]["signal base"];
        document.getElementById("frame-misc-text").innerHTML = frames[frameSelection]["misc"];
    }
}

function view(e){
    let number = e.currentTarget.id.replace(/\D/g,"");
    let location =  e.currentTarget.id.replace("-view-button","");
    location = location.replace(number,"");
    number = parseInt(number, 10)
    // add rest of function to view card --- above will need modification as id = location + number + "dr-" + dr + "-view-button"
    console.log("View Button Clicked")
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