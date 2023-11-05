let ship = {"Cost":0, "Hull":0, "RepK":0, "Shield Points":0, "Armour Points":0, "Matrix Armour":0, "ASG":0, "PSG":0, "LasPD":0, "FlakPD":0, "Warp":0, "Imp":0, "Apr":0, "Btty":0, "Passive Energy Drain":0, "WCap":0, "AComA":0, "PComA":0, "TD":0, "ExDam":0,
"HBore":0, "ArcC":0, "Plas-F":0, "EMine":0, "AnFC":0, "LDP":0, "Miss-L":0, "Miss-Rack":0, "Pho-R":0, "Pho-G":0, "H-RG":0, "L-RG":0, "DISR-JA":0, "DISR-C":0, "FlamSG":0,
"Ph-2":0, "Ph-3":0, "L-IRE":0, "H-IC":0, "L-IC":0, "AC20":0, "AmLo":0, "MMS-L":0, "H-PAC":0, "L-PAC":0, "TBC":0, "Plas-D":0, "HAE":0, "LAE":0,
"TracB":0, "TracEx":0, "ManT":0, "RepB":0, "Cargo":0, "ConHard":0, "SMG":0, "SenAr":0, "Mining Laser":0, "Mineral Scanner":0, "Miss-Fab":0, "AmFab":0, "DamCU":0};

let shipSave = {};

// Sections IDs currently in use
let foreSectionsIDs = [];
let midSectionsIDs = [];
let coreSectionsIDs = [];
let aftSectionsIDs = [];

// Save for location bonus'
let locationBonus = [];
let selectionBonus = {};

// Save location for armour bonus
let foreArmour = {"armour":0, "bonus":0};
let midArmour = {"armour":0, "bonus":0};
let coreArmour = {"armour":0, "bonus":0};
let aftArmour = {"armour":0, "bonus":0};

// Save location for modifiers to shield/armour
let armourShieldModifier = 1;

// Shield Modulator
let currentShield = "1-1-1-1";

// Assigning section locations to variables
const fore = document.querySelector('#fore-frame');
const mid = document.querySelector('#mid-frame');
const core = document.querySelector('#core-frame');
const aft = document.querySelector('#aft-frame');

// Creating list for section and core dropdowns
let options = Object.keys(sections);
let coreOptions = [];
let sectionOptions = [];
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
            fore.appendChild(newSection);
            document.getElementById("fore-sections-number").innerHTML++;
            break;
        case "mid":
            mid.appendChild(newSection);
            document.getElementById("mid-sections-number").innerHTML++;
            break;
        case "core":
            core.appendChild(newSection);
            document.getElementById("core-sections-number").innerHTML++;
            break;
        case "aft":
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
    document.getElementById(location + number + "section-name-dd").addEventListener("change", findCard, false);
}

// Finds the location and number of the section clicked then runs updates the card
function findCard(e){
    let number = e.currentTarget.id.replace(/\D/g,"");
    let location =  e.currentTarget.id.replace("section-name-dd","");
    location = location.replace(number,"");
    number = parseInt(number, 10);
    updateCard(location, number);
}

function updateCard(location, number){
    let sectionSelection = document.getElementById(location + number + "section-name-dd").value;

    document.getElementById(location + number + "section-tier-text").innerHTML = sections[sectionSelection]["tier"];
    
    // For loop to assign damage regions 1 to 4
    for(let dr = 1; dr < 5; dr++){
        document.getElementById(location + number + "dr-" + dr + "-contents").innerHTML = ""
        let contents = document.querySelector("#" + location + number + "dr-" + dr + "-contents");
        
        // For loop for different slots in each damage region
        for(let slot = 1; slot < 3; slot++){
            if(sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"] == "slot"){

                // Code to add dropdown limited to type and a label just before
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "section-card-div");
                newParaDiv = document.createElement("div");
                newParaDiv.setAttribute("class", "section-card-label-div");
                newSelectionDiv = document.createElement("div");
                newSelectionDiv.setAttribute("class", "section-card-selection-div");
                newItem = document.createElement("p");
                newItem.setAttribute("class", "selection-label");
                newItem.setAttribute("id", location + number + "dr-" + dr + "selection-label");
                newParaDiv.appendChild(newItem);
                newSelect = document.createElement("select");
                newSelect.setAttribute("class", "section-card-selection");
                newSelect.setAttribute("name", "section-name-dd");
                newSelect.setAttribute("id", location + number + "dr-" + dr + "-dd_slot" + slot);
                el = document.createElement("option");
                el.setAttribute("value", "");
                el.setAttribute("selected", true);
                el.setAttribute("disabled", true);
                el.setAttribute("hidden", true);
                newSelect.appendChild(el);

                // Applying dropdown to section dr's depending on type
                switch (sections[sectionSelection]["slot_" + dr + "-" + slot]){
                    case "Power":
                        newText = document.createTextNode("Power");
                        newItem.appendChild(newText);
                        for(let i = 0; i < powerOptions.length; i++) {
                            let opt = powerOptions[i];
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value = opt;
                            newSelect.appendChild(el);
                        }
                        break;
                    case "Defence":
                        newText = document.createTextNode("Defence");
                        newItem.appendChild(newText);
                        for(let i = 0; i < defenceOptions.length; i++) {
                            let opt = defenceOptions[i];
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value = opt;
                            newSelect.appendChild(el);
                        }
                        break;
                    case "Utility":
                        newText = document.createTextNode("Utility");
                        newItem.appendChild(newText);
                        for(let i = 0; i < utilityOptions.length; i++) {
                            let opt = utilityOptions[i];
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value = opt;
                            newSelect.appendChild(el);
                        }
                        break;
                    case "Light Weapon":
                        newText = document.createTextNode("Light Weapon");
                        newItem.appendChild(newText);
                        for(let i = 0; i < lghWeaponOptions.length; i++) {
                            let opt = lghWeaponOptions[i];
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value = opt;
                            newSelect.appendChild(el);
                        }
                        break;
                    case "Heavy Weapon":
                        newText = document.createTextNode("Heavy Weapon");
                        newItem.appendChild(newText);
                        for(let i = 0; i < hvyWeaponOptions.length; i++) {
                            let opt = hvyWeaponOptions[i];
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value = opt;
                            newSelect.appendChild(el);
                        }
                        break;
                    case "Defence Armour":
                        newText = document.createTextNode("Defence Armour");
                        newItem.appendChild(newText);
                        for(let i = 0; i < defArmourOptions.length; i++) {
                            let opt = defArmourOptions[i];
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value = opt;
                            newSelect.appendChild(el);
                        }
                        break;
                    case "Defence Shield":
                        newText = document.createTextNode("Defence Shield");
                        newItem.appendChild(newText);
                        for(let i = 0; i < defShieldOptions.length; i++) {
                            let opt = defShieldOptions[i];
                            let el = document.createElement("option");
                            el.textContent = opt;
                            el.value = opt;
                            newSelect.appendChild(el);
                        }
                        break;
                }
                newSelectionDiv.appendChild(newSelect);
                newDiv.appendChild(newParaDiv);
                newDiv.appendChild(newSelectionDiv);
                contents.appendChild(newDiv);

                // Assigning listener to dropdown selection
                document.getElementById(location + number + "dr-" + dr + "-dd_slot" + slot).addEventListener("change", shipUpdate, false);
            }
        
            else{
                // Code to add non slot damage region 
                newDiv = document.createElement("div");
                newItem = document.createElement("label");
                newItem.setAttribute("class", "system-box-label");
                newText = document.createTextNode(sections[sectionSelection]["slot_" + dr + "-" + slot]);
                newItem.appendChild(newText);
                // For loop for adding checkboxs for each system box required
                for(let i = 0; i < sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"]; i++){
                    newBox = document.createElement("input");
                    newBox.setAttribute("id", location + number + "dr-" + dr + sections[sectionSelection]["slot_" + dr + "-" + slot] + "box"+ i);
                    newBox.setAttribute("class", "box");
                    newBox.setAttribute("type", "checkbox");
                    newItem.appendChild(newBox);
                }
                newDiv.appendChild(newItem);
                contents.appendChild(newDiv);
            }
        }
        // Checks to see if a view button is needed
        document.getElementById(location + number + "dr-" + dr + "-view").innerHTML = ""
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
    }

    document.getElementById(location + number + "dr-5-contents").innerHTML = ""
    let contents = document.querySelector("#" + location + number + "dr-5-contents");
    // Code to add non slot damage in # region 
    newDiv = document.createElement("div");
    newItem = document.createElement("label");
    newItem.setAttribute("class", "system-box-label");
    newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
    newItem.appendChild(newText);
    // For loop for adding checkboxs for each system box required
    for(let i = 0; i < sections[sectionSelection]["slot_5-1_amount"]; i++){
        newBox = document.createElement("input");
        newBox.setAttribute("id", location + number + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ i);
        newBox.setAttribute("class", "box");
        newBox.setAttribute("type", "checkbox");
        newItem.appendChild(newBox);
    }
    newDiv.appendChild(newItem);
    contents.appendChild(newDiv);

    // Clearing # view
    document.getElementById(location + number + "dr-5-view").innerHTML = ""

    // Add frame speciality to the section
    let frameSelection = document.getElementById("frame-name-dd").value;
    if(frameSelection != ""){
        switch (frames[frameSelection]["code"]){
            case "A":
                break;
            case "B":
                sectionChangeB(location, number)
                break;
            case "C":
                sectionChangeC(location, number)
                break;
            case "D":
                break;
            case "E":
                sectionChangeE(location, number)
                break;
            case "F":
                sectionChangeF(location, number)
                break;
        }
    }

    document.getElementById(location + number + "section-cost").innerHTML = sections[sectionSelection]["cost"];
    document.getElementById(location + number + "section-misc").innerHTML = sections[sectionSelection]["misc"];

    // Update ship totals
    shipUpdate()
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
        element.innerHTML = "";
        element.remove();
        // Lowering section count number
        document.getElementById(location + "-sections-number").innerHTML--;
        // Removing the id number from the section ID list
        switch (location){
            case "fore":
                for (let i = 0; i < foreSectionsIDs.length; i++) {
                    if (foreSectionsIDs[i] === number) {
                        foreSectionsIDs.splice(i, 1);
                    }
                }
                break;
            case "mid":
                for (let i = 0; i < midSectionsIDs.length; i++) {
                    if (midSectionsIDs[i] === number) {
                        midSectionsIDs.splice(i, 1);
                    }
                }
                break;
            case "core":
                for (let i = 0; i < coreSectionsIDs.length; i++) {
                    if (coreSectionsIDs[i] === number) {
                        coreSectionsIDs.splice(i, 1);
                    }
                }
                break;
            case "aft":
                for (let i = 0; i < aftSectionsIDs.length; i++) {
                    if (aftSectionsIDs[i] === number) {
                        aftSectionsIDs.splice(i, 1);
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
        
        // Clearing shield pattern
        document.getElementById("frame-shield-pattern").innerHTML = "";
        shieldPatternLocation = document.querySelector("#frame-shield-pattern");

        //  Creating shield pattern paragraph and text
        newItem = document.createElement("p");
        newText = document.createTextNode(frames[frameSelection]["shield pattern front"] + "-" + frames[frameSelection]["shield pattern front side"] + "-" + frames[frameSelection]["shield pattern rear side"] + "-" + frames[frameSelection]["shield pattern rear"]);
        newItem.appendChild(newText);
        shieldPatternLocation.appendChild(newItem);

        if(frames[frameSelection]["flat move cost"] == 0){
            document.getElementById("frame-move-cost-text").innerHTML = "1/" + frames[frameSelection]["move cost base divider"] + " per " + frames[frameSelection]["move cost per sections"] + " sections";
        }
        else{
            document.getElementById("frame-move-cost-text").innerHTML = "1/" + frames[frameSelection]["move cost base divider"] + " per " + frames[frameSelection]["move cost per sections"] + " sections + " + frames[frameSelection]["flat move cost"] + "/" + frames[frameSelection]["move cost base divider"];
        }
        
        document.getElementById("frame-turn-rate-text").innerHTML = frames[frameSelection]["base turn rate"] + " - 1 per 4 sections";
        document.getElementById("frame-damage-limit-text").innerHTML = "1 per " + frames[frameSelection]["damage limit divider"] + " sections + " + frames[frameSelection]["damage limit fixed"];
        document.getElementById("frame-health-text").innerHTML = frames[frameSelection]["ht"];
        document.getElementById("frame-upgrade-cost-text").innerHTML = frames[frameSelection]["upgrade cost"];
        document.getElementById("frame-cost-text").innerHTML = frames[frameSelection]["frame cost"];
        document.getElementById("frame-sensors-text").innerHTML = frames[frameSelection]["sensors"];
        document.getElementById("frame-signal-text").innerHTML = frames[frameSelection]["signal base"];
        document.getElementById("frame-misc-text").innerHTML = frames[frameSelection]["misc"];

        // Frame speciality selection
        switch (frames[frameSelection]["code"]){
            case "A":
                frameChangeA()
                break;
            case "B":
                frameChangeA()
                frameChangeB()
                break;
            case "C":
                frameChangeA()
                frameChangeC()
                break;
            case "D":
                frameChangeA()
                frameChangeD()
                break;
            case "E":
                frameChangeA()
                frameChangeE()
                break;
            case "F":
                frameChangeA()
                frameChangeF()
                break;
        }
        
        let location = frames[frameSelection]["var2"];
    }

    // Update ship totals
    shipUpdate()
}

function view(e){
    // Gets the section number, damage region and section location of the view button pressed
    let number = e.currentTarget.id.replace(/\D/g,"");
    number = number.slice(0,-1);
    let dr = e.currentTarget.id.replace(/\D/g,"");
    dr = dr.slice(-1, dr.length);
    let location =  e.currentTarget.id.replace(number + "dr-" + dr + "-view-button","");
    number = parseInt(number, 10)
    dr = parseInt(dr, 10)

    let sectionSelection = document.getElementById(location + number + "section-name-dd").value;

    // For loop to check whether at least one slot has a value
    let runView = false;
    for(let slot = 1; slot < 3; slot++){
        if(sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"] == "slot"){
            if(document.getElementById(location + number + "dr-" + dr + "-dd_slot" + slot).value != ""){
                runView = true;
            }
        }
    }       

    // Creating component card holder
    let componentCardDiv = ""
    if(runView == true){
        screenCover = document.createElement("div");
        screenCover.setAttribute("id", "screen-cover");
        componentCardDiv = document.createElement("div");
        componentCardDiv.setAttribute("id", "component-card-holder");
        // Adding card holder to main-grid
        screenCover.appendChild(componentCardDiv);
        document.querySelector('#main-grid').appendChild(screenCover);
        // Creating event card is not clicked
        document.getElementById("component-card-holder").addEventListener("click", closeView);
        document.getElementById("screen-cover").addEventListener("click", closeView);
    }

    // For loop to check whether each slot needs a card to be created to view
    for(let slot = 1; slot < 3; slot++){
        if(sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"] == "slot"){
            let card = document.getElementById(location + number + "dr-" + dr + "-dd_slot" + slot).value;
            // Check if dropdown has a value
            if(card != ""){

                // Creating component card
                componentCard = document.createElement("div");
                componentCard.setAttribute("class", "component-card card");
                // Creating component pic div and image
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "component-pic");
                newItem = document.createElement("img");
                newItem.setAttribute("class", "card-picture");
                newItem.setAttribute("src", "images/" + components[card]["type"] + ".png");
                newItem.setAttribute("alt", components[card]["type"]);
                newDiv.appendChild(newItem);
                componentCard.appendChild(newDiv);
                // Creating component name div, paragraph and text
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "component-name");
                newItem = document.createElement("p");
                newText = document.createTextNode(card);
                newItem.appendChild(newText);
                newDiv.appendChild(newItem);
                componentCard.appendChild(newDiv);
                //  Creating tier div, paragraph and text
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "component-tier");
                newItem = document.createElement("p");
                newText = document.createTextNode(components[card]["tier"]);
                newItem.appendChild(newText);
                newDiv.appendChild(newItem);
                componentCard.appendChild(newDiv);
                // Creating card systems div, paragraph and text
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "component-systems");
                // For loop for each system
                for(let i = 1; i < 7; i++){
                    if("system_" + i != ""){
                        // Code to add systems
                        newSystemDiv = document.createElement("div");
                        newItem = document.createElement("label");
                        newItem.setAttribute("class", "system-box-label");
                        newText = document.createTextNode(components[card]["system_" + i]);
                        newItem.appendChild(newText);
                        // For loop for adding checkboxs for each system box required
                        for(let j = 0; j < components[card]["system_" + i + "_amount"]; j++){
                            newBox = document.createElement("input");
                            newBox.setAttribute("class", "box");
                            newBox.setAttribute("type", "checkbox");
                            newItem.appendChild(newBox);
                        }
                        newSystemDiv.appendChild(newItem);
                        newDiv.appendChild(newSystemDiv);
                    }
                }
                // Adding Misc 1 ability
                newSystemDiv = document.createElement("div");
                newItem = document.createElement("p");
                newText = document.createTextNode(components[card]["misc_1"]);
                newItem.appendChild(newText);
                newSystemDiv.appendChild(newItem);
                newDiv.appendChild(newSystemDiv);

                // Adding Bonus ability
                if(components[card]["bonus"] != ""){
                    newSystemDiv = document.createElement("div");
                    newItem = document.createElement("p");
                    switch (components[card]["bonustype"]){
                        case "Armour":
                            newText = document.createTextNode(components[card]["bonus"]);
                            newItem.appendChild(newText);                       
                            break;
                        case "Warp":
                        case "Apr":
                            newText = document.createTextNode("+ ");
                            newItem.appendChild(newText);
                            for(let j = 0; j < components[card]["bonus1"]; j++){
                                newBox = document.createElement("input");
                                newBox.setAttribute("class", "box");
                                newBox.setAttribute("type", "checkbox");
                                newItem.appendChild(newBox);
                            }
                            newText = document.createTextNode(" " + components[card]["bonustype"] + " if in " + components[card]["bonus2"]);
                            newItem.appendChild(newText); 
                            break;
                    }
                    newSystemDiv.appendChild(newItem);
                    newDiv.appendChild(newSystemDiv);
                }
                componentCard.appendChild(newDiv);

                // Creating card money div and pic
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "component-money");
                newItem = document.createElement("img");
                newItem.setAttribute("class", "card-picture");
                newItem.setAttribute("src", "images/money_bag.png");
                newItem.setAttribute("alt", "Cost");
                newDiv.appendChild(newItem);
                componentCard.appendChild(newDiv);
                // Creating section cost div and paragraph
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "component-cost");
                newItem = document.createElement("p");
                newText = document.createTextNode(components[card]["cost"]);
                newItem.appendChild(newText);
                newDiv.appendChild(newItem);
                componentCard.appendChild(newDiv);
                //Creating section misc and paragraph
                newDiv = document.createElement("div");
                newDiv.setAttribute("class", "component-misc");
                newItem = document.createElement("p");
                newText = document.createTextNode(components[card]["misc_2"]);
                newItem.appendChild(newText);
                newDiv.appendChild(newItem);
                componentCard.appendChild(newDiv);
                componentCardDiv.appendChild(componentCard);
            }
        }
    }
}

function view5(e){
    // Gets the section number, damage region and section location of the view button pressed
    let number = e.currentTarget.id.replace(/\D/g,"");
    number = number.slice(0,-1);
    let dr = e.currentTarget.id.replace(/\D/g,"");
    dr = dr.slice(-1, dr.length);
    let location =  e.currentTarget.id.replace(number + "dr-" + dr + "-view-button","");
    number = parseInt(number, 10)
    dr = parseInt(dr, 10)

    let sectionSelection = document.getElementById(location + number + "section-name-dd").value;
    let card = document.getElementById(location + number + "dr-" + dr + "-dd").value;

    // Check if dropdown has a value
    if(card != ""){
        // Creating component card holder
        let componentCardDiv = ""
        screenCover = document.createElement("div");
        screenCover.setAttribute("id", "screen-cover");
        componentCardDiv = document.createElement("div");
        componentCardDiv.setAttribute("id", "component-card-holder");
        // Adding card holder to main-grid
        screenCover.appendChild(componentCardDiv);
        document.querySelector('#main-grid').appendChild(screenCover);
        // Creating event card is not clicked
        document.getElementById("component-card-holder").addEventListener("click", closeView);
        document.getElementById("screen-cover").addEventListener("click", closeView);

        // Creating component card
        componentCard = document.createElement("div");
        componentCard.setAttribute("class", "component-card card");
        // Creating component pic div and image
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "component-pic");
        newItem = document.createElement("img");
        newItem.setAttribute("class", "card-picture");
        newItem.setAttribute("src", "images/" + components[card]["type"] + ".png");
        newItem.setAttribute("alt", components[card]["type"]);
        newDiv.appendChild(newItem);
        componentCard.appendChild(newDiv);
        // Creating component name div, paragraph and text
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "component-name");
        newItem = document.createElement("p");
        newText = document.createTextNode(card);
        newItem.appendChild(newText);
        newDiv.appendChild(newItem);
        componentCard.appendChild(newDiv);
        //  Creating tier div, paragraph and text
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "component-tier");
        newItem = document.createElement("p");
        newText = document.createTextNode(components[card]["tier"]);
        newItem.appendChild(newText);
        newDiv.appendChild(newItem);
        componentCard.appendChild(newDiv);
        // Creating card systems div, paragraph and text
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "component-systems");
        // For loop for each system
        for(let i = 1; i < 7; i++){
            if("system_" + i != ""){
                // Code to add systems
                newSystemDiv = document.createElement("div");
                newItem = document.createElement("label");
                newItem.setAttribute("class", "system-box-label");
                newText = document.createTextNode(components[card]["system_" + i]);
                newItem.appendChild(newText);
                // For loop for adding checkboxs for each system box required
                for(let j = 0; j < components[card]["system_" + i + "_amount"]; j++){
                    newBox = document.createElement("input");
                    newBox.setAttribute("class", "box");
                    newBox.setAttribute("type", "checkbox");
                    newItem.appendChild(newBox);
                }
                newSystemDiv.appendChild(newItem);
                newDiv.appendChild(newSystemDiv);
            }
        }
        // Adding Misc 1 ability
        newSystemDiv = document.createElement("div");
        newItem = document.createElement("p");
        newText = document.createTextNode(components[card]["misc_1"]);
        newItem.appendChild(newText);
        newSystemDiv.appendChild(newItem);
        newDiv.appendChild(newSystemDiv);
        componentCard.appendChild(newDiv); 

        // Adding Bonus ability
        if(components[card]["bonus"] != ""){
            newSystemDiv = document.createElement("div");
            newItem = document.createElement("p");
            switch (components[card]["bonustype"]){
                case "Armour":
                    newText = document.createTextNode(components[card]["bonus"]);
                    newItem.appendChild(newText);                       
                    break;
                case "Warp":
                case "Apr":
                    newText = document.createTextNode("+ ");
                    newItem.appendChild(newText);
                    for(let j = 0; j < components[card]["bonus1"]; j++){
                        newBox = document.createElement("input");
                        newBox.setAttribute("class", "box");
                        newBox.setAttribute("type", "checkbox");
                        newItem.appendChild(newBox);
                    }
                    newText = document.createTextNode(" " + components[card]["bonustype"] + " if in " + components[card]["bonus2"]);
                    newItem.appendChild(newText); 
                    break;
            }
            newSystemDiv.appendChild(newItem);
            newDiv.appendChild(newSystemDiv);
        }
        componentCard.appendChild(newDiv);

        // Creating card money div and pic
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "component-money");
        newItem = document.createElement("img");
        newItem.setAttribute("class", "card-picture");
        newItem.setAttribute("src", "images/money_bag.png");
        newItem.setAttribute("alt", "Cost");
        newDiv.appendChild(newItem);
        componentCard.appendChild(newDiv);
        // Creating section cost div and paragraph
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "component-cost");
        newItem = document.createElement("p");
        newText = document.createTextNode(components[card]["cost"]);
        newItem.appendChild(newText);
        newDiv.appendChild(newItem);
        componentCard.appendChild(newDiv);
        //Creating section misc and paragraph
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "component-misc");
        newItem = document.createElement("p");
        newText = document.createTextNode(components[card]["misc_2"]);
        newItem.appendChild(newText);
        newDiv.appendChild(newItem);
        componentCard.appendChild(newDiv);
        componentCardDiv.appendChild(componentCard);
    }
}

// Closing view card function
function closeView(e){
    // Ensuring children of div do not trigger closing
    if (e.target !== this){
        return; // Do nothing
    }
    else{
        // Removing screen-cover and all child elements
        let element = document.getElementById("screen-cover");
        element.innerHTML = "";
        element.remove();
    }
}

// Frame change option A: None (Resetting cards to default)
function frameChangeA(){
    let frameSelection = document.getElementById("frame-name-dd").value;

    allSections = [foreSectionsIDs, midSectionsIDs, coreSectionsIDs, aftSectionsIDs];
    allLocations = ["fore", "mid", "core", "aft"];

    selectionBonus = {};

    for(let j = 0; j < allSections.length; j++){
        let IDs = allSections[j];
        let location = allLocations[j];

        // Saving & clearing location bonus'
        if(document.querySelector("#" + location + "-bonus").style.display != "none"){
            let amountBonuses = document.getElementById(location + "-bonus").getElementsByClassName("section-card-selection");
            locationBonus = [];
            for(let i=1; i< (amountBonuses.length + 1); i++ ){
                selected = document.getElementById(location + i + "bonus").value;
                locationBonus.push(selected);
                
            }
        }  
        document.getElementById(location + "-bonus").innerHTML = "";
        document.querySelector("#" + location + "-bonus").style.display = "none";
        
        for(let i = 0; i < IDs.length; i++){
            let sectionSelection = document.getElementById(location + IDs[i] + "section-name-dd").value;
        
            if(sectionSelection != ""){
                // Code to replace all damage regions
                for(let dr = 1; dr < 5; dr++){
                    // Saving & clearing previous entry
                    let componentSelection = {};
                    if(sections[sectionSelection]["slot_" + dr + "-1_amount"] == "slot"){
                        componentSelection[location + IDs[i] + "dr-" + dr + "-dd_slot1"] = document.getElementById(location + IDs[i] + "dr-" + dr + "-dd_slot1").value;
                    }
                    if(sections[sectionSelection]["slot_" + dr + "-2_amount"] == "slot"){
                        componentSelection[location + IDs[i] + "dr-" + dr + "-dd_slot2"] = document.getElementById(location + IDs[i] + "dr-" + dr + "-dd_slot2").value;
                    }

                    let contents = document.querySelector("#" + location + IDs[i] + "dr-" + dr + "-contents");
                    document.getElementById(location + IDs[i] + "dr-" + dr + "-contents").innerHTML = "";

                    // For loop for different slots in each damage region
                    for(let slot = 1; slot < 3; slot++){
                        if(sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"] == "slot"){

                            // code to add dropdown limited to type and a label just before
                            newDiv = document.createElement("div");
                            newDiv.setAttribute("class", "section-card-div");
                            newParaDiv = document.createElement("div");
                            newParaDiv.setAttribute("class", "section-card-label-div");
                            newSelectionDiv = document.createElement("div");
                            newSelectionDiv.setAttribute("class", "section-card-selection-div");
                            newItem = document.createElement("p");
                            newItem.setAttribute("class", "selection-label");
                            newItem.setAttribute("id", location + IDs[i] + "dr-" + dr + "selection-label");
                            newParaDiv.appendChild(newItem);
                            newSelect = document.createElement("select");
                            newSelect.setAttribute("class", "section-card-selection");
                            newSelect.setAttribute("name", "section-name-dd");
                            newSelect.setAttribute("id", location + IDs[i] + "dr-" + dr + "-dd_slot" + slot);
                            el = document.createElement("option");
                            el.setAttribute("value", "");
                            el.setAttribute("selected", true);
                            el.setAttribute("disabled", true);
                            el.setAttribute("hidden", true);
                            newSelect.appendChild(el);

                            // Applying dropdown to section dr's depending on type
                            switch (sections[sectionSelection]["slot_" + dr + "-" + slot]){
                                case "Power":
                                    newText = document.createTextNode("Power");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < powerOptions.length; k++) {
                                        let opt = powerOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Defence":
                                    newText = document.createTextNode("Defence");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < defenceOptions.length; k++) {
                                        let opt = defenceOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Utility":
                                    newText = document.createTextNode("Utility");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < utilityOptions.length; k++) {
                                        let opt = utilityOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Light Weapon":
                                    newText = document.createTextNode("Light Weapon");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < lghWeaponOptions.length; k++) {
                                        let opt = lghWeaponOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Heavy Weapon":
                                    newText = document.createTextNode("Heavy Weapon");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < hvyWeaponOptions.length; k++) {
                                        let opt = hvyWeaponOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Defence Armour":
                                    newText = document.createTextNode("Defence Armour");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < defArmourOptions.length; k++) {
                                        let opt = defArmourOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Defence Shield":
                                    newText = document.createTextNode("Defence Shield");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < defShieldOptions.length; k++) {
                                        let opt = defShieldOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                            }
                            newSelectionDiv.appendChild(newSelect);
                            newDiv.appendChild(newParaDiv);
                            newDiv.appendChild(newSelectionDiv);
                            contents.appendChild(newDiv);

                            // Assigning listener to dropdown selection
                            document.getElementById(location + IDs[i] + "dr-" + dr + "-dd_slot" + slot).addEventListener("change", shipUpdate, false);

                            // Adding previous selections back in
                            document.getElementById(location + IDs[i] + "dr-" + dr + "-dd_slot" + slot).value = componentSelection[location + IDs[i] + "dr-" + dr + "-dd_slot" + slot];
                        }
                    
                        else{
                            // Code to add non slot damage region 
                            newDiv = document.createElement("div");
                            newItem = document.createElement("label");
                            newItem.setAttribute("class", "system-box-label");
                            newText = document.createTextNode(sections[sectionSelection]["slot_" + dr + "-" + slot]);
                            newItem.appendChild(newText);
                            // For loop for adding checkboxs for each system box required
                            for(let k = 0; k < sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"]; k++){
                                newBox = document.createElement("input");
                                newBox.setAttribute("id", location + IDs[i] + "dr-" + dr + sections[sectionSelection]["slot_" + dr + "-" + slot] + "box"+ k);
                                newBox.setAttribute("class", "box");
                                newBox.setAttribute("type", "checkbox");
                                newItem.appendChild(newBox);
                            }
                            newDiv.appendChild(newItem);
                            contents.appendChild(newDiv);
                        }
                    }
                }
            }

            // Saving & clearing previous # entry
            let elementExists = document.getElementById(location + IDs[i] + "dr-5-dd"); 
            if(elementExists != null){
                selectionBonus[location + IDs[i] + "dr-5-dd"] = document.getElementById(location + IDs[i] + "dr-5-dd").value;
            }
            document.getElementById(location + IDs[i] + "dr-5-contents").innerHTML = "";
            let contents = document.querySelector("#" + location + IDs[i] + "dr-5-contents");
            
            if(sectionSelection != ""){
                // Code to add ExDam damage in # region 
                newDiv = document.createElement("div");
                newItem = document.createElement("label");
                newItem.setAttribute("class", "system-box-label");
                newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
                newItem.appendChild(newText);
                // For loop for adding checkboxs for each system box required
                for(let k = 0; k < sections[sectionSelection]["slot_5-1_amount"]; k++){
                    newBox = document.createElement("input");
                    newBox.setAttribute("id", location + IDs[i] + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ k);
                    newBox.setAttribute("class", "box");
                    newBox.setAttribute("type", "checkbox");
                    newItem.appendChild(newBox);
                }
                newDiv.appendChild(newItem);
                contents.appendChild(newDiv);
            }

            // Removes any view buttons
            document.getElementById(location + IDs[i] + "dr-5-view").innerHTML = ""
            
        }
    }
}

// Frame change option B: All X sections gains a Y slot in the # damage region
function frameChangeB(){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let location = frames[frameSelection]["var2"];
    let type = frames[frameSelection]["var1"];
    let IDs = ""
    switch (location){
        case "fore":
            IDs = foreSectionsIDs
            break;
        case "mid":
            IDs = midSectionsIDs
            break;
        case "core":
            IDs = coreSectionsIDs
            break;
        case "aft":
            IDs = aftSectionsIDs
            break;
    }
    
    for(let i = 0; i < IDs.length; i++){
        // Clearing previous entry
        document.getElementById(location + IDs[i] + "dr-5-contents").innerHTML = "";
        let contents = document.querySelector("#" + location + IDs[i] + "dr-5-contents");
        let sectionSelection = document.getElementById(location + IDs[i] + "section-name-dd").value;
        
        if(sectionSelection != ""){
            // Code to add dropdown limited to type and a label just before
            newDiv = document.createElement("div");
            newDiv.setAttribute("class", "section-card-div");
            newParaDiv = document.createElement("div");
            newParaDiv.setAttribute("class", "section-card-label-div");
            newSelectionDiv = document.createElement("div");
            newSelectionDiv.setAttribute("class", "section-card-selection-div");
            newItem = document.createElement("p");
            newItem.setAttribute("class", "selection-label");
            newItem.setAttribute("id", location + IDs[i] + "dr-5-selection-label");
            newParaDiv.appendChild(newItem);
            newSelect = document.createElement("select");
            newSelect.setAttribute("class", "section-card-selection");
            newSelect.setAttribute("name", "section-name-dd");
            newSelect.setAttribute("id", location + IDs[i] + "dr-5-dd");
            el = document.createElement("option");
            el.setAttribute("value", "");
            el.setAttribute("selected", true);
            el.setAttribute("disabled", true);
            el.setAttribute("hidden", true);
            newSelect.appendChild(el);

            // Applying dropdown to section dr's depending on type
            switch (type){
                case "Power":
                    newText = document.createTextNode("Power");
                    newItem.appendChild(newText);
                    for(let j = 0; j < powerOptions.length; j++) {
                        let opt = powerOptions[j];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Defence":
                    newText = document.createTextNode("Defence");
                    newItem.appendChild(newText);
                    for(let j = 0; j < defenceOptions.length; j++) {
                        let opt = defenceOptions[j];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Utility":
                    newText = document.createTextNode("Utility");
                    newItem.appendChild(newText);
                    for(let j = 0; j < utilityOptions.length; j++) {
                        let opt = utilityOptions[j];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Light Weapon":
                    newText = document.createTextNode("Light Weapon");
                    newItem.appendChild(newText);
                    for(let j = 0; j < lghWeaponOptions.length; j++) {
                        let opt = lghWeaponOptions[j];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Heavy Weapon":
                    newText = document.createTextNode("Heavy Weapon");
                    newItem.appendChild(newText);
                    for(let j = 0; j < hvyWeaponOptions.length; j++) {
                        let opt = hvyWeaponOptions[j];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                }
            newSelectionDiv.appendChild(newSelect);
            newDiv.appendChild(newParaDiv);
            newDiv.appendChild(newSelectionDiv);
            contents.appendChild(newDiv);

            // Assigning listener to dropdown selection
            document.getElementById(location + IDs[i] + "dr-5-dd").addEventListener("change", shipUpdate, false);

            // Adding previous selections back in
            document.getElementById(location + IDs[i] + "dr-5-dd").value = selectionBonus[location + IDs[i] + "dr-5-dd"];

            // Code to add ExDam damage in # region 
            newDiv = document.createElement("div");
            newItem = document.createElement("label");
            newItem.setAttribute("class", "system-box-label");
            newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
            newItem.appendChild(newText);
            // For loop for adding checkboxs for each system box required
            for(let j = 0; j < sections[sectionSelection]["slot_5-1_amount"]; j++){
                newBox = document.createElement("input");
                newBox.setAttribute("id", location + IDs[i] + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ j);
                newBox.setAttribute("class", "box");
                newBox.setAttribute("type", "checkbox");
                newItem.appendChild(newBox);
            }
            newDiv.appendChild(newItem);
            contents.appendChild(newDiv);
        
            // Adds the view button
            document.getElementById(location + IDs[i] + "dr-5-view").innerHTML = ""
                    
            let viewBut = document.querySelector("#" + location + IDs[i] + "dr-5-view");
            newItem = document.createElement("button");
            newItem.setAttribute("class", "small-button");
            newItem.setAttribute("id", location + IDs[i] + "dr-5-view-button");
            newPic = document.createElement("img");
            newPic.setAttribute("class", "button-image");
            newPic.setAttribute("src", "images/magnifying_glass.jpg");
            newPic.setAttribute("alt", "View");
            newItem.appendChild(newPic);
            viewBut.appendChild(newItem);

            // Assigning the view button
            document.getElementById(location + IDs[i] + "dr-5-view-button").addEventListener("click", view5, false);
        }
    }
}

// Frame change option C: All Z slots in the X location provides + Y
function frameChangeC(){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let location = frames[frameSelection]["var2"];
    let type = frames[frameSelection]["var1"];
    let amount = frames[frameSelection]["var3"];
    let slotType1 = frames[frameSelection]["var4"];
    let slotType2 = frames[frameSelection]["var5"];
    let IDs = ""
    switch (location){
        case "fore":
            IDs = foreSectionsIDs
            break;
        case "mid":
            IDs = midSectionsIDs
            break;
        case "core":
            IDs = coreSectionsIDs
            break;
        case "aft":
            IDs = aftSectionsIDs
            break;
    }

    for(let i = 0; i < IDs.length; i++){
        // Checking if a damage region contains the slotType
        let sectionSelection = document.getElementById(location + IDs[i] + "section-name-dd").value;
        if(sectionSelection != ""){
            for(let j = 1; j < 5; j++){
                let count = 0;
                if(sections[sectionSelection]["slot_" + j + "-1"] == slotType1 || sections[sectionSelection]["slot_" + j + "-1"] == slotType2){
                    count++
                }
                if(sections[sectionSelection]["slot_" + j + "-2"] == slotType1 || sections[sectionSelection]["slot_" + j + "-2"] == slotType2){
                    count++
                }

                if(count > 0){
                    // Clearing previous entry
                    let contents = document.querySelector("#" + location + IDs[i] + "dr-" + j + "-contents");
                    document.getElementById(location + IDs[i] + "dr-" + j + "-contents").innerHTML = "";
                    
                    // Code to add non slot damage in damage region 
                    newDiv = document.createElement("div");
                    newItem = document.createElement("label");
                    newItem.setAttribute("class", "system-box-label");
                    newText = document.createTextNode(type);
                    newItem.appendChild(newText);
                    // For loop for adding checkboxs for each system box required
                    for(let k = 0; k < count * amount; k++){
                        newBox = document.createElement("input");
                        newBox.setAttribute("id", location + IDs[i] + "dr-" + j + type + "box"+ k);
                        newBox.setAttribute("class", "box");
                        newBox.setAttribute("type", "checkbox");
                        newItem.appendChild(newBox);
                    }
                    newDiv.appendChild(newItem);
                    contents.appendChild(newDiv);

                    // For loop for different slots in each damage region
                    for(let slot = 1; slot < 3; slot++){
                        if(sections[sectionSelection]["slot_" + j + "-" + slot + "_amount"] == "slot"){

                            // code to add dropdown limited to type and a label just before
                            newDiv = document.createElement("div");
                            newDiv.setAttribute("class", "section-card-div");
                            newParaDiv = document.createElement("div");
                            newParaDiv.setAttribute("class", "section-card-label-div");
                            newSelectionDiv = document.createElement("div");
                            newSelectionDiv.setAttribute("class", "section-card-selection-div");
                            newItem = document.createElement("p");
                            newItem.setAttribute("class", "selection-label");
                            newItem.setAttribute("id", location + number + "dr-" + j + "selection-label");
                            newParaDiv.appendChild(newItem);
                            newSelect = document.createElement("select");
                            newSelect.setAttribute("class", "section-card-selection");
                            newSelect.setAttribute("name", "section-name-dd");
                            newSelect.setAttribute("id", location + number + "dr-" + j + "-dd_slot" + slot);
                            el = document.createElement("option");
                            el.setAttribute("value", "");
                            el.setAttribute("selected", true);
                            el.setAttribute("disabled", true);
                            el.setAttribute("hidden", true);
                            newSelect.appendChild(el);

                            // Applying dropdown to section dr's depending on type
                            switch (sections[sectionSelection]["slot_" + j + "-" + slot]){
                                case "Power":
                                    newText = document.createTextNode("Power");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < powerOptions.length; k++) {
                                        let opt = powerOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Defence":
                                    newText = document.createTextNode("Defence");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < defenceOptions.length; k++) {
                                        let opt = defenceOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Utility":
                                    newText = document.createTextNode("Utility");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < utilityOptions.length; k++) {
                                        let opt = utilityOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Light Weapon":
                                    newText = document.createTextNode("Light Weapon");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < lghWeaponOptions.length; k++) {
                                        let opt = lghWeaponOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Heavy Weapon":
                                    newText = document.createTextNode("Heavy Weapon");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < hvyWeaponOptions.length; k++) {
                                        let opt = hvyWeaponOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Defence Armour":
                                    newText = document.createTextNode("Defence Armour");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < defArmourOptions.length; k++) {
                                        let opt = defArmourOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                                case "Defence Shield":
                                    newText = document.createTextNode("Defence Shield");
                                    newItem.appendChild(newText);
                                    for(let k = 0; k < defShieldOptions.length; k++) {
                                        let opt = defShieldOptions[k];
                                        let el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        newSelect.appendChild(el);
                                    }
                                    break;
                            }
                            newSelectionDiv.appendChild(newSelect);
                            newDiv.appendChild(newParaDiv);
                            newDiv.appendChild(newSelectionDiv);
                            contents.appendChild(newDiv);

                            // Assigning listener to dropdown selection
                            document.getElementById(location + number + "dr-" + j + "-dd_slot" + slot).addEventListener("change", shipUpdate, false);
                        }
                    
                        else{
                            // Code to add non slot damage region 
                            newDiv = document.createElement("div");
                            newItem = document.createElement("label");
                            newItem.setAttribute("class", "system-box-label");
                            newText = document.createTextNode(sections[sectionSelection]["slot_" + j + "-" + slot]);
                            newItem.appendChild(newText);
                            // For loop for adding checkboxs for each system box required
                            for(let k = 0; k < sections[sectionSelection]["slot_" + j + "-" + slot + "_amount"]; k++){
                                newBox = document.createElement("input");
                                newBox.setAttribute("id", location + IDs[i] + "dr-" + j + sections[sectionSelection]["slot_" + j + "-" + slot] + "box"+ k);
                                newBox.setAttribute("class", "box");
                                newBox.setAttribute("type", "checkbox");
                                newItem.appendChild(newBox);
                            }
                            newDiv.appendChild(newItem);
                            contents.appendChild(newDiv);
                        }
                    }
                }
            }
        }
    }
}


// Frame change option D: For every Y sections (rounds up) gain an X in the Z location
function frameChangeD(){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let location = frames[frameSelection]["var2"];
    let type = frames[frameSelection]["var1"];
    let sectionsNeeded = frames[frameSelection]["var3"];
    let amount = frames[frameSelection]["var4"];
        
    let amountSections = parseInt(document.getElementById("fore-sections-number").innerHTML, 10) + parseInt(document.getElementById("mid-sections-number").innerHTML, 10) + parseInt(document.getElementById("core-sections-number").innerHTML, 10) + parseInt(document.getElementById("aft-sections-number").innerHTML, 10);
    
    let contents = document.querySelector("#" + location + "-bonus");
    contents.style.display = "block";

    for(let j = 1; j <= Math.ceil(amountSections / sectionsNeeded); j++) {
        if(amount == "slot"){
            // code to add dropdown limited to type and a label just before
            newDiv = document.createElement("div");
            newDiv.setAttribute("class", "section-card-div");
            newParaDiv = document.createElement("div");
            newParaDiv.setAttribute("class", "section-card-label-div");
            newSelectionDiv = document.createElement("div");
            newSelectionDiv.setAttribute("class", "section-card-selection-div");
            newItem = document.createElement("p");
            newItem.setAttribute("class", "selection-label");
            newItem.setAttribute("id", location + j + "bonus-label");
            newParaDiv.appendChild(newItem);
            newSelect = document.createElement("select");
            newSelect.setAttribute("class", "section-card-selection");
            newSelect.setAttribute("name", "section-name-dd");
            newSelect.setAttribute("id", location + j + "bonus");
            el = document.createElement("option");
            el.setAttribute("value", "");
            el.setAttribute("selected", true);
            el.setAttribute("disabled", true);
            el.setAttribute("hidden", true);
            newSelect.appendChild(el);

            // Applying dropdown to section dr's depending on type
            switch (type){
                case "Power":
                    newText = document.createTextNode("Power");
                    newItem.appendChild(newText);
                    for(let i = 0; i < powerOptions.length; i++) {
                        let opt = powerOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Defence":
                    newText = document.createTextNode("Defence");
                    newItem.appendChild(newText);
                    for(let i = 0; i < defenceOptions.length; i++) {
                        let opt = defenceOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Utility":
                    newText = document.createTextNode("Utility");
                    newItem.appendChild(newText);
                    for(let i = 0; i < utilityOptions.length; i++) {
                        let opt = utilityOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Light Weapon":
                    newText = document.createTextNode("Light Weapon");
                    newItem.appendChild(newText);
                    for(let i = 0; i < lghWeaponOptions.length; i++) {
                        let opt = lghWeaponOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Heavy Weapon":
                    newText = document.createTextNode("Heavy Weapon");
                    newItem.appendChild(newText);
                    for(let i = 0; i < hvyWeaponOptions.length; i++) {
                        let opt = hvyWeaponOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Defence Armour":
                    newText = document.createTextNode("Defence Armour");
                    newItem.appendChild(newText);
                    for(let i = 0; i < defArmourOptions.length; i++) {
                        let opt = defArmourOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
                case "Defence Shield":
                    newText = document.createTextNode("Defence Shield");
                    newItem.appendChild(newText);
                    for(let i = 0; i < defShieldOptions.length; i++) {
                        let opt = defShieldOptions[i];
                        let el = document.createElement("option");
                        el.textContent = opt;
                        el.value = opt;
                        newSelect.appendChild(el);
                    }
                    break;
            }
            newSelectionDiv.appendChild(newSelect);
            newDiv.appendChild(newParaDiv);
            newDiv.appendChild(newSelectionDiv);
            contents.appendChild(newDiv);

            // Assigning listener to dropdown selection
            document.getElementById(location + j + "bonus").addEventListener("change", shipUpdate, false);

            // Adding previous selections back in
            document.getElementById(location + j + "bonus").value = locationBonus[j-1];
        }

        else{
            // Code to add non slot damage region 
            newDiv = document.createElement("div");
            newItem = document.createElement("label");
            newItem.setAttribute("class", "system-box-label");
            newText = document.createTextNode(type);
            newItem.appendChild(newText);
            // For loop for adding checkboxs for each system box required
            for(let i = 0; i < amount; i++){
                newBox = document.createElement("input");
                newBox.setAttribute("id", location + j + "bonus" + type + "box"+ i);
                newBox.setAttribute("class", "box");
                newBox.setAttribute("type", "checkbox");
                newItem.appendChild(newBox);
            }
            newDiv.appendChild(newItem);
            contents.appendChild(newDiv);
        }
    }
}

// Frame change option E: Each section gains X in the # damage region
function frameChangeE(){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let type = frames[frameSelection]["var1"];
    let amount = frames[frameSelection]["var3"];
    let allSections = [foreSectionsIDs, midSectionsIDs, coreSectionsIDs, aftSectionsIDs]
    let allLocations = ["fore", "mid", "core", "aft"]

    for(let j = 0; j < allSections.length; j++){
        let IDs = allSections[j];
        let location = allLocations[j];

        for(let i = 0; i < IDs.length; i++){
            // Clearing previous entry
            document.getElementById(location + IDs[i] + "dr-5-contents").innerHTML = "";
            let contents = document.querySelector("#" + location + IDs[i] + "dr-5-contents");
            let sectionSelection = document.getElementById(location + IDs[i] + "section-name-dd").value;

            if(sectionSelection != ""){
                // Code to add non slot damage region 
                newDiv = document.createElement("div");
                newItem = document.createElement("label");
                newItem.setAttribute("class", "system-box-label");
                newText = document.createTextNode(type);
                newItem.appendChild(newText);
                // For loop for adding checkboxs for each system box required
                for(let k = 0; k < amount; k++){
                    newBox = document.createElement("input");
                    newBox.setAttribute("id", location + IDs[i] + "bonus" + type + "box"+ k);
                    newBox.setAttribute("class", "box");
                    newBox.setAttribute("type", "checkbox");
                    newItem.appendChild(newBox);
                }
                newDiv.appendChild(newItem);
                contents.appendChild(newDiv);
            
                // Code to add ExDam damage in # region 
                newDiv = document.createElement("div");
                newItem = document.createElement("label");
                newItem.setAttribute("class", "system-box-label");
                newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
                newItem.appendChild(newText);
                // For loop for adding checkboxs for each system box required
                for(let k = 0; k < sections[sectionSelection]["slot_5-1_amount"]; k++){
                    newBox = document.createElement("input");
                    newBox.setAttribute("id", location + IDs[i] + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ k);
                    newBox.setAttribute("class", "box");
                    newBox.setAttribute("type", "checkbox");
                    newItem.appendChild(newBox);
                }
                newDiv.appendChild(newItem);
                contents.appendChild(newDiv);
            }
        }
    }
}

// Frame change option F: All X sections gains a Y system in the # damage region
function frameChangeF(){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let location = frames[frameSelection]["var2"];
    let type = frames[frameSelection]["var1"];
    let amount = frames[frameSelection]["var3"];
    let IDs = ""
    switch (location){
        case "fore":
            IDs = foreSectionsIDs
            break;
        case "mid":
            IDs = midSectionsIDs
            break;
        case "core":
            IDs = coreSectionsIDs
            break;
        case "aft":
            IDs = aftSectionsIDs
            break;
    }
    
    for(let i = 0; i < IDs.length; i++){
        // Clearing previous entry
        document.getElementById(location + IDs[i] + "dr-5-contents").innerHTML = "";
        let contents = document.querySelector("#" + location + IDs[i] + "dr-5-contents");
        let sectionSelection = document.getElementById(location + IDs[i] + "section-name-dd").value;
        
        if(sectionSelection != ""){
            // Code to add non slot damage in # region 
            newDiv = document.createElement("div");
            newItem = document.createElement("label");
            newItem.setAttribute("class", "system-box-label");
            newText = document.createTextNode(type);
            newItem.appendChild(newText);
            // For loop for adding checkboxs for each system box required
            for(let j = 0; j < amount; j++){
                newBox = document.createElement("input");
                newBox.setAttribute("id", location + IDs[i] + "dr-5" + type + "box"+ j);
                newBox.setAttribute("class", "box");
                newBox.setAttribute("type", "checkbox");
                newItem.appendChild(newBox);
            }
            newDiv.appendChild(newItem);
            contents.appendChild(newDiv);
        
            // Code to add ExDam damage in # region 
            newDiv = document.createElement("div");
            newItem = document.createElement("label");
            newItem.setAttribute("class", "system-box-label");
            newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
            newItem.appendChild(newText);
            // For loop for adding checkboxs for each system box required
            for(let j = 0; j < sections[sectionSelection]["slot_5-1_amount"]; j++){
                newBox = document.createElement("input");
                newBox.setAttribute("id", location + IDs[i] + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ j);
                newBox.setAttribute("class", "box");
                newBox.setAttribute("type", "checkbox");
                newItem.appendChild(newBox);
            }
            newDiv.appendChild(newItem);
            contents.appendChild(newDiv);
        }
    }
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

// Assigning the save & load buttons
document.getElementById("save").addEventListener("click", save, false);
document.getElementById("load").addEventListener("click", load, false);

// Section change option B: All X sections gains a Y slot in the # damage region
function sectionChangeB(sectionLocation, sectionID){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let location = frames[frameSelection]["var2"];
    let type = frames[frameSelection]["var1"];


    if(sectionLocation == location){
        // Clearing previous entry
        document.getElementById(location + sectionID + "dr-5-contents").innerHTML = "";
        let contents = document.querySelector("#" + location + sectionID + "dr-5-contents");
        let sectionSelection = document.getElementById(location + sectionID + "section-name-dd").value;
        
        // code to add dropdown limited to type and a label just before
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "section-card-div");
        newParaDiv = document.createElement("div");
        newParaDiv.setAttribute("class", "section-card-label-div");
        newSelectionDiv = document.createElement("div");
        newSelectionDiv.setAttribute("class", "section-card-selection-div");
        newItem = document.createElement("p");
        newItem.setAttribute("class", "selection-label");
        newItem.setAttribute("id", location + sectionID + "dr-5-selection-label");
        newParaDiv.appendChild(newItem);
        newSelect = document.createElement("select");
        newSelect.setAttribute("class", "section-card-selection");
        newSelect.setAttribute("name", "section-name-dd");
        newSelect.setAttribute("id", location + sectionID + "dr-5-dd");
        el = document.createElement("option");
        el.setAttribute("value", "");
        el.setAttribute("selected", true);
        el.setAttribute("disabled", true);
        el.setAttribute("hidden", true);
        newSelect.appendChild(el);

        // Applying dropdown to section dr's depending on type
        switch (type){
            case "Power":
                newText = document.createTextNode("Power");
                newItem.appendChild(newText);
                for(let j = 0; j < powerOptions.length; j++) {
                    let opt = powerOptions[j];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    newSelect.appendChild(el);
                }
                break;
            case "Defence":
                newText = document.createTextNode("Defence");
                newItem.appendChild(newText);
                for(let j = 0; j < defenceOptions.length; j++) {
                    let opt = defenceOptions[j];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    newSelect.appendChild(el);
                }
                break;
            case "Utility":
                newText = document.createTextNode("Utility");
                newItem.appendChild(newText);
                for(let j = 0; j < utilityOptions.length; j++) {
                    let opt = utilityOptions[j];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    newSelect.appendChild(el);
                }
                break;
            case "Light Weapon":
                newText = document.createTextNode("Light Weapon");
                newItem.appendChild(newText);
                for(let j = 0; j < lghWeaponOptions.length; j++) {
                    let opt = lghWeaponOptions[j];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    newSelect.appendChild(el);
                }
                break;
            case "Heavy Weapon":
                newText = document.createTextNode("Heavy Weapon");
                newItem.appendChild(newText);
                for(let j = 0; j < hvyWeaponOptions.length; j++) {
                    let opt = hvyWeaponOptions[j];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    newSelect.appendChild(el);
                }
                break;
            }
        newSelectionDiv.appendChild(newSelect);
        newDiv.appendChild(newParaDiv);
        newDiv.appendChild(newSelectionDiv);
        contents.appendChild(newDiv);

        // Assigning listener to dropdown selection
        document.getElementById(location + sectionID + "dr-5-dd").addEventListener("change", shipUpdate, false);

        // Code to add ExDam damage in # region 
        newDiv = document.createElement("div");
        newItem = document.createElement("label");
        newItem.setAttribute("class", "system-box-label");
        newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
        newItem.appendChild(newText);
        // For loop for adding checkboxs for each system box required
        for(let j = 0; j < sections[sectionSelection]["slot_5-1_amount"]; j++){
            newBox = document.createElement("input");
            newBox.setAttribute("id", location + sectionID + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ j);
            newBox.setAttribute("class", "box");
            newBox.setAttribute("type", "checkbox");
            newItem.appendChild(newBox);
        }
        newDiv.appendChild(newItem);
        contents.appendChild(newDiv);

        // Adds the view button
        document.getElementById(location + sectionID + "dr-5-view").innerHTML = ""
                
        let viewBut = document.querySelector("#" + location + sectionID + "dr-5-view");
        newItem = document.createElement("button");
        newItem.setAttribute("class", "small-button");
        newItem.setAttribute("id", location + sectionID + "dr-5-view-button");
        newPic = document.createElement("img");
        newPic.setAttribute("class", "button-image");
        newPic.setAttribute("src", "images/magnifying_glass.jpg");
        newPic.setAttribute("alt", "View");
        newItem.appendChild(newPic);
        viewBut.appendChild(newItem);

        // Assigning the view button
        document.getElementById(location + sectionID + "dr-5-view-button").addEventListener("click", view5, false);
    }
}

// Section change option C: All Z slots in the X location provides + Y
function sectionChangeC(sectionLocation, sectionID){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let location = frames[frameSelection]["var2"];
    let type = frames[frameSelection]["var1"];
    let amount = frames[frameSelection]["var3"];
    let slotType1 = frames[frameSelection]["var4"];
    let slotType2 = frames[frameSelection]["var5"];
   

    if(location == sectionLocation){
        // Checking if a damage region contains the slotType
        let sectionSelection = document.getElementById(location + sectionID + "section-name-dd").value;
        
        for(let j = 1; j < 5; j++){
            let count = 0;
            if(sections[sectionSelection]["slot_" + j + "-1"] == slotType1 || sections[sectionSelection]["slot_" + j + "-1"] == slotType2){
                count++
            }
            if(sections[sectionSelection]["slot_" + j + "-2"] == slotType1 || sections[sectionSelection]["slot_" + j + "-2"] == slotType2){
                count++
            }

            if(count > 0){
                // Clearing previous entry
                let contents = document.querySelector("#" + location + sectionID + "dr-" + j + "-contents");
                document.getElementById(location + sectionID + "dr-" + j + "-contents").innerHTML = "";
                
                // Code to add non slot damage in damage region 
                newDiv = document.createElement("div");
                newItem = document.createElement("label");
                newItem.setAttribute("class", "system-box-label");
                newText = document.createTextNode(type);
                newItem.appendChild(newText);
                // For loop for adding checkboxs for each system box required
                for(let k = 0; k < count * amount; k++){
                    newBox = document.createElement("input");
                    newBox.setAttribute("id", location + sectionID + "dr-" + j + type + "box"+ k);
                    newBox.setAttribute("class", "box");
                    newBox.setAttribute("type", "checkbox");
                    newItem.appendChild(newBox);
                }
                newDiv.appendChild(newItem);
                contents.appendChild(newDiv);

                // For loop for different slots in each damage region
                for(let slot = 1; slot < 3; slot++){
                    if(sections[sectionSelection]["slot_" + j + "-" + slot + "_amount"] == "slot"){

                        // code to add dropdown limited to type and a label just before
                        newDiv = document.createElement("div");
                        newDiv.setAttribute("class", "section-card-div");
                        newParaDiv = document.createElement("div");
                        newParaDiv.setAttribute("class", "section-card-label-div");
                        newSelectionDiv = document.createElement("div");
                        newSelectionDiv.setAttribute("class", "section-card-selection-div");
                        newItem = document.createElement("p");
                        newItem.setAttribute("class", "selection-label");
                        newItem.setAttribute("id", location + sectionID + "dr-" + j + "selection-label");
                        newParaDiv.appendChild(newItem);
                        newSelect = document.createElement("select");
                        newSelect.setAttribute("class", "section-card-selection");
                        newSelect.setAttribute("name", "section-name-dd");
                        newSelect.setAttribute("id", location + sectionID + "dr-" + j + "-dd_slot" + slot);
                        el = document.createElement("option");
                        el.setAttribute("value", "");
                        el.setAttribute("selected", true);
                        el.setAttribute("disabled", true);
                        el.setAttribute("hidden", true);
                        newSelect.appendChild(el);

                        // Applying dropdown to section dr's depending on type
                        switch (sections[sectionSelection]["slot_" + j + "-" + slot]){
                            case "Power":
                                newText = document.createTextNode("Power");
                                newItem.appendChild(newText);
                                for(let k = 0; k < powerOptions.length; k++) {
                                    let opt = powerOptions[k];
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value = opt;
                                    newSelect.appendChild(el);
                                }
                                break;
                            case "Defence":
                                newText = document.createTextNode("Defence");
                                newItem.appendChild(newText);
                                for(let k = 0; k < defenceOptions.length; k++) {
                                    let opt = defenceOptions[k];
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value = opt;
                                    newSelect.appendChild(el);
                                }
                                break;
                            case "Utility":
                                newText = document.createTextNode("Utility");
                                newItem.appendChild(newText);
                                for(let k = 0; k < utilityOptions.length; k++) {
                                    let opt = utilityOptions[k];
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value = opt;
                                    newSelect.appendChild(el);
                                }
                                break;
                            case "Light Weapon":
                                newText = document.createTextNode("Light Weapon");
                                newItem.appendChild(newText);
                                for(let k = 0; k < lghWeaponOptions.length; k++) {
                                    let opt = lghWeaponOptions[k];
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value = opt;
                                    newSelect.appendChild(el);
                                }
                                break;
                            case "Heavy Weapon":
                                newText = document.createTextNode("Heavy Weapon");
                                newItem.appendChild(newText);
                                for(let k = 0; k < hvyWeaponOptions.length; k++) {
                                    let opt = hvyWeaponOptions[k];
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value = opt;
                                    newSelect.appendChild(el);
                                }
                                break;
                            case "Defence Armour":
                                newText = document.createTextNode("Defence Armour");
                                newItem.appendChild(newText);
                                for(let k = 0; k < defArmourOptions.length; k++) {
                                    let opt = defArmourOptions[k];
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value = opt;
                                    newSelect.appendChild(el);
                                }
                                break;
                            case "Defence Shield":
                                newText = document.createTextNode("Defence Shield");
                                newItem.appendChild(newText);
                                for(let k = 0; k < defShieldOptions.length; k++) {
                                    let opt = defShieldOptions[k];
                                    let el = document.createElement("option");
                                    el.textContent = opt;
                                    el.value = opt;
                                    newSelect.appendChild(el);
                                }
                                break;
                        }
                        newSelectionDiv.appendChild(newSelect);
                        newDiv.appendChild(newParaDiv);
                        newDiv.appendChild(newSelectionDiv);
                        contents.appendChild(newDiv);

                        // Assigning listener to dropdown selection
                        document.getElementById(location + sectionID + "dr-" + j + "-dd_slot" + slot).addEventListener("change", shipUpdate, false);
                    }
                    
                    else{
                        // Code to add non slot damage region 
                        newDiv = document.createElement("div");
                        newItem = document.createElement("label");
                        newItem.setAttribute("class", "system-box-label");
                        newText = document.createTextNode(sections[sectionSelection]["slot_" + j + "-" + slot]);
                        newItem.appendChild(newText);
                        // For loop for adding checkboxs for each system box required
                        for(let k = 0; k < sections[sectionSelection]["slot_" + j + "-" + slot + "_amount"]; k++){
                            newBox = document.createElement("input");
                            newBox.setAttribute("id", location + sectionID + "dr-" + j + sections[sectionSelection]["slot_" + j + "-" + slot] + "box"+ k);
                            newBox.setAttribute("class", "box");
                            newBox.setAttribute("type", "checkbox");
                            newItem.appendChild(newBox);
                        }
                        newDiv.appendChild(newItem);
                        contents.appendChild(newDiv);
                    }
                }
            }
        }
    }
}

// Section change option E: Each section gains X in the # damage region
function sectionChangeE(sectionLocation, sectionID){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let type = frames[frameSelection]["var1"];
    let amount = frames[frameSelection]["var3"];
    let location = sectionLocation

    // Clearing previous entry
    document.getElementById(location + sectionID + "dr-5-contents").innerHTML = "";
    let contents = document.querySelector("#" + location + sectionID + "dr-5-contents");
    let sectionSelection = document.getElementById(location + sectionID + "section-name-dd").value;

    // Code to add non slot damage region 
    newDiv = document.createElement("div");
    newItem = document.createElement("label");
    newItem.setAttribute("class", "system-box-label");
    newText = document.createTextNode(type);
    newItem.appendChild(newText);
    // For loop for adding checkboxs for each system box required
    for(let k = 0; k < amount; k++){
        newBox = document.createElement("input");
        newBox.setAttribute("id", location + sectionID + "bonus" + type + "box"+ k);
        newBox.setAttribute("class", "box");
        newBox.setAttribute("type", "checkbox");
        newItem.appendChild(newBox);
    }
    newDiv.appendChild(newItem);
    contents.appendChild(newDiv);

    // Code to add ExDam damage in # region 
    newDiv = document.createElement("div");
    newItem = document.createElement("label");
    newItem.setAttribute("class", "system-box-label");
    newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
    newItem.appendChild(newText);
    // For loop for adding checkboxs for each system box required
    for(let k = 0; k < sections[sectionSelection]["slot_5-1_amount"]; k++){
        newBox = document.createElement("input");
        newBox.setAttribute("id", location + sectionID + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ k);
        newBox.setAttribute("class", "box");
        newBox.setAttribute("type", "checkbox");
        newItem.appendChild(newBox);
    }
    newDiv.appendChild(newItem);
    contents.appendChild(newDiv);
}


// Section change option F: All X sections gains a Y system in the # damage region
function sectionChangeF(sectionLocation, sectionID){
    let frameSelection = document.getElementById("frame-name-dd").value;
    let location = frames[frameSelection]["var2"];
    let type = frames[frameSelection]["var1"];
    let amount = frames[frameSelection]["var3"];

    
    if(location == sectionLocation){
        // Clearing previous entry
        document.getElementById(location + sectionID + "dr-5-contents").innerHTML = "";
        let contents = document.querySelector("#" + location + sectionID + "dr-5-contents");
        let sectionSelection = document.getElementById(location + sectionID + "section-name-dd").value;
        
        // Code to add non slot damage in # region 
        newDiv = document.createElement("div");
        newItem = document.createElement("label");
        newItem.setAttribute("class", "system-box-label");
        newText = document.createTextNode(type);
        newItem.appendChild(newText);
        // For loop for adding checkboxs for each system box required
        for(let j = 0; j < amount; j++){
            newBox = document.createElement("input");
            newBox.setAttribute("id", location + sectionID + "dr-5" + type + "box"+ j);
            newBox.setAttribute("class", "box");
            newBox.setAttribute("type", "checkbox");
            newItem.appendChild(newBox);
        }
        newDiv.appendChild(newItem);
        contents.appendChild(newDiv);
        
        // Code to add ExDam damage in # region 
        newDiv = document.createElement("div");
        newItem = document.createElement("label");
        newItem.setAttribute("class", "system-box-label");
        newText = document.createTextNode(sections[sectionSelection]["slot_5-1"]);
        newItem.appendChild(newText);
        // For loop for adding checkboxs for each system box required
        for(let j = 0; j < sections[sectionSelection]["slot_5-1_amount"]; j++){
            newBox = document.createElement("input");
            newBox.setAttribute("id", location + sectionID + "dr-5" + sections[sectionSelection]["slot_5-1"] + "box"+ j);
            newBox.setAttribute("class", "box");
            newBox.setAttribute("type", "checkbox");
            newItem.appendChild(newBox);
        }
        newDiv.appendChild(newItem);
        contents.appendChild(newDiv);
    }
}

// Function to update ship statistics
function shipUpdate(){

    // Reseting ship stats
    ship = {"Cost":0, "Hull":0, "RepK":0, "Shield Points":0, "Armour Points":0, "Matrix Armour":0, "ASG":0, "PSG":0, "LasPD":0, "FlakPD":0, "Warp":0, "Imp":0, "Apr":0, "Btty":0, "Passive Energy Drain":0, "WCap":0, "AComA":0, "PComA":0, "TD":0, "ExDam":0, "HBore":0, "ArcC":0, "Plas-F":0, "EMine":0, "AnFC":0, "LDP":0, "Miss-L":0, "Miss-Rack":0, "Pho-R":0, "Pho-G":0, "H-RG":0, "L-RG":0, "DISR-JA":0, "DISR-C":0, "FlamSG":0, "Ph-2":0, "Ph-3":0, "L-IRE":0, "H-IC":0, "L-IC":0, "AC20":0, "AmLo":0, "MMS-L":0, "H-PAC":0, "L-PAC":0, "TBC":0, "Plas-D":0, "HAE":0, "LAE":0, "TracB":0, "TracEx":0, "ManT":0, "RepB":0, "Cargo":0, "ConHard":0, "SMG":0, "SenAr":0, "Mining Laser":0, "Mineral Scanner":0, "Miss-Fab":0, "AmFab":0, "DamCU":0};
    foreArmour["armour"] = 0;
    foreArmour["bonus"] = 0;
    midArmour["armour"] = 0;
    midArmour["bonus"] = 0;
    coreArmour["armour"] = 0;
    coreArmour["bonus"] = 0;
    aftArmour["armour"] = 0;
    aftArmour["bonus"] = 0;

    armourShieldModifier = 1;

    allSections = [foreSectionsIDs, midSectionsIDs, coreSectionsIDs, aftSectionsIDs];
    allLocations = ["fore", "mid", "core", "aft"];

    let frameSelection = document.getElementById("frame-name-dd").value;

    // Frame cost
    let upgradeCost = 0;
    if(frameSelection != ""){
        ship["Cost"] = ship["Cost"] + frames[frameSelection]["frame cost"];

        amountSections = parseInt(document.getElementById("fore-sections-number").innerHTML, 10) + parseInt(document.getElementById("mid-sections-number").innerHTML, 10) + parseInt(document.getElementById("core-sections-number").innerHTML, 10) + parseInt(document.getElementById("aft-sections-number").innerHTML, 10);
        if(amountSections > 4){
            for(let i = 5; i < amountSections + 1; i++){
                exponential = Math.floor((i-1) / 3);
                addedCost = frames[frameSelection]["upgrade cost"] ** exponential;
                upgradeCost = upgradeCost + addedCost;
            }
        }
        ship["Cost"] = ship["Cost"] + upgradeCost;
    }

    for(let i = 0; i < allSections.length; i++){
        let IDs = allSections[i];
        let location = allLocations[i];
        for(let id = 0; id < IDs.length; id++){
            let sectionSelection = document.getElementById(location + IDs[id] + "section-name-dd").value;
        
            if(sectionSelection != ""){
                // Code to check each damage regions
                for(let dr = 1; dr < 5; dr++){
                    // Getting components from each slot
                    for(let slot = 1; slot < 3; slot++){
                        // Code for getting components from a card
                        if(sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"] == "slot"){
                            componentCard = document.getElementById(location + IDs[id] + "dr-" + dr + "-dd_slot" + slot).value;
                            if(componentCard == ""){
                                ship["Hull"] = parseInt(ship["Hull"], 10) + 2;
                            }
                            else{
                                for(let system = 1; system < 7; system++){
                                    if(components[componentCard]["system_" + system] != ""){
                                        ship[components[componentCard]["system_" + system]] = parseInt(ship[components[componentCard]["system_" + system]], 10) + parseInt(components[componentCard]["system_" + system + "_amount"], 10);
                                    }
                                }
                                if(components[componentCard]["misc_1"] != ""){
                                    misc = components[componentCard]["misc_1"].replace(/[0-9]/g, "");
                                    misc = misc.replace("+ ", "");
                                    compAmount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                    switch (misc){
                                        case "Armour Points":
                                        case "Shield Points":
                                            ship[misc] = ship[misc] + parseInt(compAmount, 10);
                                            break;
                                    }
                                }
                                if(components[componentCard]["bonus"] != ""){
                                    switch (components[componentCard]["bonustype"]){
                                        case "Armour":
                                            armAmount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                            armAmount = parseInt(armAmount, 10);
                                            switch(location){
                                                case "fore":
                                                    foreArmour["armour"] = foreArmour["armour"] + armAmount;
                                                    foreArmour["bonus"] = foreArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                                case "mid":
                                                    midArmour["armour"] = midArmour["armour"] + armAmount;
                                                    midArmour["bonus"] = midArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                                case "core":
                                                    coreArmour["armour"] = coreArmour["armour"] + armAmount;
                                                    coreArmour["bonus"] = coreArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                                case "aft":
                                                    aftArmour["armour"] = aftArmour["armour"] + armAmount;
                                                    aftArmour["bonus"] = aftArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                            }
                                            break;
                                        case "Warp":
                                        case "Apr":
                                            if(components[componentCard]["bonus2"] == location){
                                                ship[components[componentCard]["bonustype"]] = ship[components[componentCard]["bonustype"]] + components[componentCard]["bonus1"]
                                            }
                                            break;
                                    }
                                }

                                // Checking to see if frame type C and the location of that frame type is true
                                if(frameSelection != ""){
                                    if(frames[frameSelection]["code"] == "C" && location == frames[frameSelection]["var2"]){
                                        let type = frames[frameSelection]["var1"];
                                        let amount = frames[frameSelection]["var3"];
                                        let slotType1 = frames[frameSelection]["var4"];
                                        let slotType2 = frames[frameSelection]["var5"];
                                        
                                        // Checking if a damage region contains the slotType
                                        let count = 0;
                                        if(sections[sectionSelection]["slot_" + dr + "-1"] == slotType1 || sections[sectionSelection]["slot_" + dr + "-1"] == slotType2){
                                            count++;
                                        }
                                        if(sections[sectionSelection]["slot_" + dr + "-2"] == slotType1 || sections[sectionSelection]["slot_" + dr + "-2"] == slotType2){
                                            count++;
                                        }
                                        // Adding frame bonus
                                        ship[type] = ship[type] + (count*amount);
                                    }
                                }
                                // Adding component card cost
                                ship["Cost"] = ship["Cost"] + components[componentCard]["cost"];
                            }
                        }
                        else{
                        // Code to get components from non slot damage region
                            if(sections[sectionSelection]["slot_" + dr + "-" + slot] != ""){
                                ship[sections[sectionSelection]["slot_" + dr + "-" + slot]] = ship[sections[sectionSelection]["slot_" + dr + "-" + slot]] + sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"]
                            }
                        }
                    } 
                }

                // Code to get misc bonus
                if(sections[sectionSelection]["misc"] != ""){
                    switch (sections[sectionSelection]["misctype"]){
                        case "A":
                            // + X to Y
                            ship[sections[sectionSelection]["misc2"]] = ship[sections[sectionSelection]["misc2"]] + sections[sectionSelection]["misc1"];
                            if(sections[sectionSelection]["misc2"] == "Armour Points"){
                                switch(location){
                                    case "fore":
                                        foreArmour["armour"] = foreArmour["armour"] + sections[sectionSelection]["misc1"];
                                        break;
                                    case "mid":
                                        midArmour["armour"] = midArmour["armour"] + sections[sectionSelection]["misc1"];
                                        break;
                                    case "core":
                                        coreArmour["armour"] = coreArmour["armour"] + sections[sectionSelection]["misc1"];
                                        break;
                                    case "aft":
                                        aftArmour["armour"] = aftArmour["armour"] + sections[sectionSelection]["misc1"];
                                        break;
                                }
                            }
                            break;
                        case "B":
                            // + X to Y in specific situation
                            // Un-needed in build phase
                            break;
                        case "C":
                            // - % to shield & armour
                            if(armourShieldModifier > 0.6){
                                armourShieldModifier = Math.round(((armourShieldModifier - sections[sectionSelection]["misc1"])+ Number.EPSILON) * 100) / 100;
                            }
                            break;
                    }
                }

                // Code to get components from damage region 5
                ship[sections[sectionSelection]["slot_5-1"]] = ship[sections[sectionSelection]["slot_5-1"]] + sections[sectionSelection]["slot_5-1_amount"];

                // Adding sectioncard cost
                ship["Cost"] = ship["Cost"] + sections[sectionSelection]["cost"];

                // Code to get frame bonus'
                if(frameSelection != ""){
                    switch (frames[frameSelection]["code"]){
                        case "B":
                            if(location == frames[frameSelection]["var2"]){
                                componentCard = document.getElementById(location + IDs[id] + "dr-5-dd").value;
                                if(componentCard == ""){
                                    ship["Hull"] = ship["Hull"] + 2;
                                }
                                else{
                                    for(let system = 1; system < 7; system++){
                                        if(components[componentCard]["system_" + system] != ""){
                                            ship[components[componentCard]["system_" + system]] = ship[components[componentCard]["system_" + system]] + components[componentCard]["system_" + system + "_amount"]
                                        }
                                    }
                                    if(components[componentCard]["misc_1"] != ""){
                                        misc = components[componentCard]["misc_1"].replace(/[0-9]/g, "");
                                        misc = misc.replace("+ ", "");
                                        compAmount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                        switch (misc){
                                            case "Armour Points":
                                            case "Shield Points":
                                                ship[misc] = ship[misc] + parseInt(compAmount, 10);
                                                break;
                                        }
                                    }
                                    if(components[componentCard]["bonus"] != ""){
                                        switch (components[componentCard]["bonustype"]){
                                            case "Armour":
                                                armAmount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                                armAmount = parseInt(armAmount, 10);
                                                switch(location){
                                                    case "fore":
                                                        foreArmour["armour"] = foreArmour["armour"] + armAmount;
                                                        foreArmour["bonus"] = foreArmour["bonus"] + components[componentCard]["bonus1"];
                                                        break;
                                                    case "mid":
                                                        midArmour["armour"] = midArmour["armour"] + armAmount;
                                                        midArmour["bonus"] = midArmour["bonus"] + components[componentCard]["bonus1"];
                                                        break;
                                                    case "core":
                                                        coreArmour["armour"] = coreArmour["armour"] + armAmount;
                                                        coreArmour["bonus"] = coreArmour["bonus"] + components[componentCard]["bonus1"];
                                                        break;
                                                    case "aft":
                                                        aftArmour["armour"] = aftArmour["armour"] + armAmount;
                                                        aftArmour["bonus"] = aftArmour["bonus"] + components[componentCard]["bonus1"];
                                                        break;
                                                }
                                                break;
                                            case "Warp":
                                            case "Apr":
                                                if(components[componentCard]["bonus2"] == location){
                                                    ship[components[componentCard]["bonustype"]] = ship[components[componentCard]["bonustype"]] + components[componentCard]["bonus1"]
                                                }
                                                break;
                                        }
                                    }
                                    // Adding component card cost
                                    ship["Cost"] = ship["Cost"] + components[componentCard]["cost"];
                                }
                            }
                            break;
                        case "E":
                            let type = frames[frameSelection]["var1"];
                            let amount = frames[frameSelection]["var3"];
                            ship[type] = ship[type] + amount;
                            break;
                        case "F":
                            if(location == frames[frameSelection]["var2"]){
                                let type = frames[frameSelection]["var1"];
                                let amount = frames[frameSelection]["var3"];
                                ship[type] = ship[type] + amount;
                            }
                            break;
                    }
                }
            }
        }
    
        if(frameSelection != ""){
            if(frames[frameSelection]["code"] == "D" && location == frames[frameSelection]["var2"]){
                let type = frames[frameSelection]["var1"];
                let sectionsNeeded = frames[frameSelection]["var3"];
                let amount = frames[frameSelection]["var4"];
                let amountSections = parseInt(document.getElementById("fore-sections-number").innerHTML, 10) + parseInt(document.getElementById("mid-sections-number").innerHTML, 10) + parseInt(document.getElementById("core-sections-number").innerHTML, 10) + parseInt(document.getElementById("aft-sections-number").innerHTML, 10);
                
                for(let j = 1; j <= Math.ceil(amountSections / sectionsNeeded); j++) {
                    if(amount == "slot"){
                        componentCard = document.getElementById(location + j + "bonus").value;
                        if(componentCard == ""){
                            ship["Hull"] = ship["Hull"] + 2;
                        }
                        else{
                            for(let system = 1; system < 7; system++){
                                if(components[componentCard]["system_" + system] != ""){
                                    ship[components[componentCard]["system_" + system]] = ship[components[componentCard]["system_" + system]] + components[componentCard]["system_" + system + "_amount"]
                                }
                            }
                            if(components[componentCard]["misc_1"] != ""){
                                misc = components[componentCard]["misc_1"].replace(/[0-9]/g, "");
                                misc = misc.replace("+ ", "");
                                compAmount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                switch (misc){
                                    case "Armour Points":
                                    case "Shield Points":
                                        ship[misc] = ship[misc] + parseInt(compAmount, 10);
                                        break;
                                }
                            }
                            if(components[componentCard]["bonus"] != ""){
                                switch (components[componentCard]["bonustype"]){
                                    case "Armour":
                                            armAmount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                            armAmount = parseInt(armAmount, 10);
                                            switch(location){
                                                case "fore":
                                                    foreArmour["armour"] = foreArmour["armour"] + armAmount;
                                                    foreArmour["bonus"] = foreArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                                case "mid":
                                                    midArmour["armour"] = midArmour["armour"] + armAmount;
                                                    midArmour["bonus"] = midArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                                case "core":
                                                    coreArmour["armour"] = coreArmour["armour"] + armAmount;
                                                    coreArmour["bonus"] = coreArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                                case "aft":
                                                    aftArmour["armour"] = aftArmour["armour"] + armAmount;
                                                    aftArmour["bonus"] = aftArmour["bonus"] + components[componentCard]["bonus1"];
                                                    break;
                                            }
                                            break;
                                    case "Warp":
                                    case "Apr":
                                        if(components[componentCard]["bonus2"] == location){
                                            ship[components[componentCard]["bonustype"]] = ship[components[componentCard]["bonustype"]] + components[componentCard]["bonus1"]
                                        }
                                        break;
                                }
                            }
                            // Adding component card cost
                            ship["Cost"] = ship["Cost"] + components[componentCard]["cost"];
                        }
                    }
                    else{
                        ship[type] = ship[type] + amount;
                    }
                }
            }
        }
    }
    
    // Adding shield modulator selector
    // Clearing shield pattern
    document.getElementById("frame-shield-pattern").innerHTML = "";
    shieldPatternLocation = document.querySelector("#frame-shield-pattern");
    if(ship["SMG"] > 0){
        // Creating list for dropdown
        let shieldOptions = Object.keys(shieldPatterns);
        
        // Creating section name div and dropdown
        newItem = document.createElement("select");
        newItem.setAttribute("class", "card-selection");
        newItem.setAttribute("name", "shield-pattern-name-dd");
        newItem.setAttribute("id", "shield-pattern-name-dd");

        // Applying dropdown to shield pattern selection
        for(let i = 0; i < shieldOptions.length; i++) {
            let opt = shieldOptions[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            newItem.appendChild(el);
        }
        shieldPatternLocation.appendChild(newItem);

        // Setting modulator value to last used
        document.getElementById("shield-pattern-name-dd").value = currentShield

        // Adding event listeneror drop down
        document.getElementById("shield-pattern-name-dd").addEventListener("change", shieldPatternChange, false);

        // Updating shield pattern
        shieldPatternChange()
    }
    else if(frameSelection != ""){
        //  Creating shield pattern paragraph and text
        newItem = document.createElement("p");
        newText = document.createTextNode(frames[frameSelection]["shield pattern front"] + "-" + frames[frameSelection]["shield pattern front side"] + "-" + frames[frameSelection]["shield pattern rear side"] + "-" + frames[frameSelection]["shield pattern rear"]);
        newItem.appendChild(newText);
        shieldPatternLocation.appendChild(newItem);
    }

    // Working out location with most armour and applying bonus
    mostArmour = Math.max(foreArmour["armour"], midArmour["armour"], coreArmour["armour"], aftArmour["armour"]);
    switch(mostArmour){
        case foreArmour["armour"]:
            ship["Armour Points"] = ship["Armour Points"] + foreArmour["bonus"];
            break;
        case midArmour["armour"]:
            ship["Armour Points"] = ship["Armour Points"] + midArmour["bonus"];
            break;
        case coreArmour["armour"]:
            ship["Armour Points"] = ship["Armour Points"] + coreArmour["bonus"];
            break;
        case aftArmour["armour"]:
            ship["Armour Points"] = ship["Armour Points"] + aftArmour["bonus"];
            break;
    }

    //Updating frame values that can change from cards
    frameSelection = document.getElementById("frame-name-dd").value;
    amountSections = parseInt(document.getElementById("fore-sections-number").innerHTML, 10) + parseInt(document.getElementById("mid-sections-number").innerHTML, 10) + parseInt(document.getElementById("core-sections-number").innerHTML, 10) + parseInt(document.getElementById("aft-sections-number").innerHTML, 10);
    armourAmount = ship["Armour Points"];
    shieldAmount = (ship["ASG"] * 15) + (ship["PSG"] * 6) + ship["Shield Points"];

    // Changing shield and armour values by modifier
    armourAmount = Math.round(armourAmount * armourShieldModifier)
    shieldAmount = Math.round(shieldAmount * armourShieldModifier)

    if(frameSelection != ""){
        document.getElementById("frame-move-actual-text").innerHTML = parseFloat((1/frames[frameSelection]["move cost base divider"] * Math.floor(amountSections/frames[frameSelection]["move cost per sections"])) + (frames[frameSelection]["flat move cost"]/frames[frameSelection]["move cost base divider"])).toFixed(2);
        document.getElementById("frame-turn-actual-text").innerHTML = Math.max(1,frames[frameSelection]["base turn rate"] - Math.floor(amountSections/4)) + ship["ManT"];
        document.getElementById("frame-damage-actual-text").innerHTML = Math.floor(amountSections/frames[frameSelection]["damage limit divider"]) + frames[frameSelection]["damage limit fixed"] + ship["DamCU"];
        document.getElementById("frame-health-actual-text").innerHTML = frames[frameSelection]["ht"] + ship["ConHard"];
        document.getElementById("frame-sensors-actual-text").innerHTML = frames[frameSelection]["sensors"] + ship["SenAr"];
        document.getElementById("frame-signal-actual-text").innerHTML = frames[frameSelection]["signal base"];
        
        // Calculating armour in each location
        armourDivsor = frames[frameSelection]["armour pattern fore"] + frames[frameSelection]["armour pattern mid"] + frames[frameSelection]["armour pattern aft"];
        armourPerLocation = Math.floor(armourAmount / armourDivsor);
        remainder = armourAmount % armourDivsor;
        document.getElementById("fore-armour-number").innerHTML = (armourPerLocation * frames[frameSelection]["armour pattern fore"]) + armourRemainder[remainder][0];
        document.getElementById("mid-armour-number").innerHTML = (armourPerLocation * frames[frameSelection]["armour pattern mid"]) + armourRemainder[remainder][1];
        document.getElementById("aft-armour-number").innerHTML = (armourPerLocation * frames[frameSelection]["armour pattern aft"]) + armourRemainder[remainder][2];
        
        if(ship["SMG"] == 0){
            // Calculating each shield facing
            shieldDivsor = frames[frameSelection]["shield pattern front"] + (2 * frames[frameSelection]["shield pattern front side"]) + (2 * frames[frameSelection]["shield pattern rear side"]) + frames[frameSelection]["shield pattern rear"];
            shieldPerFacing = Math.floor(shieldAmount / shieldDivsor);
            remainder = shieldAmount % shieldDivsor;
            document.getElementById("front-shield-number").innerHTML = (shieldPerFacing * frames[frameSelection]["shield pattern front"]) + shieldRemainder[remainder][0];
            document.getElementById("front-left-shield-number").innerHTML = (shieldPerFacing * frames[frameSelection]["shield pattern front side"]) + shieldRemainder[remainder][1];
            document.getElementById("front-right-shield-number").innerHTML = (shieldPerFacing * frames[frameSelection]["shield pattern front side"]) + shieldRemainder[remainder][2];
            document.getElementById("rear-left-shield-number").innerHTML = (shieldPerFacing * frames[frameSelection]["shield pattern rear side"]) + shieldRemainder[remainder][3];
            document.getElementById("rear-right-shield-number").innerHTML = (shieldPerFacing * frames[frameSelection]["shield pattern rear side"]) + shieldRemainder[remainder][4];
            document.getElementById("rear-shield-number").innerHTML = (shieldPerFacing * frames[frameSelection]["shield pattern rear"]) + shieldRemainder[remainder][5];
        }
    }

    document.getElementById("repair-number").innerHTML = ship["RepK"];
    document.getElementById("warp-number").innerHTML = ship["Warp"];
    document.getElementById("impulse-number").innerHTML = ship["Imp"];
    document.getElementById("reactor-number").innerHTML = ship["Apr"];
    document.getElementById("battery-number").innerHTML = ship["Btty"];
    document.getElementById("wep-cap-number").innerHTML = ship["WCap"];
    document.getElementById("armour-number").innerHTML = armourAmount;
    document.getElementById("matrix-armour-number").innerHTML = ship["Matrix Armour"];
    document.getElementById("shield-number").innerHTML = shieldAmount;
    document.getElementById("hull-number").innerHTML = ship["Hull"];
    document.getElementById("cost-number").innerHTML = ship["Cost"];
    document.getElementById("upgrade-cost-number").innerHTML = upgradeCost;
    document.getElementById("passive-energy-drain-number").innerHTML = ship["Passive Energy Drain"];
}


function shieldPatternChange(){
    currentShield = document.getElementById("shield-pattern-name-dd").value;
    shieldModulator = shieldPatterns[currentShield];
    
    // Getting shield values
    shieldAmount = (ship["ASG"] * 15) + (ship["PSG"] * 6) + ship["Shield Points"];
    shieldAmount = Math.round(shieldAmount * armourShieldModifier)

    // Calculating each shield facing
    shieldDivsor = shieldModulator[0] + (2 * shieldModulator[1]) + (2 * shieldModulator[2]) + shieldModulator[3];
    shieldPerFacing = Math.floor(shieldAmount / shieldDivsor);
    remainder = shieldAmount % shieldDivsor;

    document.getElementById("front-shield-number").innerHTML = (shieldPerFacing * shieldModulator[0]) + shieldRemainder[remainder][0];
    document.getElementById("front-left-shield-number").innerHTML = (shieldPerFacing * shieldModulator[1]) + shieldRemainder[remainder][1];
    document.getElementById("front-right-shield-number").innerHTML = (shieldPerFacing * shieldModulator[1]) + shieldRemainder[remainder][2];
    document.getElementById("rear-left-shield-number").innerHTML = (shieldPerFacing * shieldModulator[2]) + shieldRemainder[remainder][3];
    document.getElementById("rear-right-shield-number").innerHTML = (shieldPerFacing * shieldModulator[2]) + shieldRemainder[remainder][4];
    document.getElementById("rear-shield-number").innerHTML = (shieldPerFacing * shieldModulator[3]) + shieldRemainder[remainder][5];
}


function save(){
    // Checking for ship name
    let shipName = document.getElementById("ship-name").value;
    if(shipName == ""){
        window.alert("Please enter a Ship Name!");
    }
    else{
        // Clearing previous save
        shipSave = {};

        // Saving ship name
        shipSave["name"] = shipName;

        // Saving frame selection
        let frameSelection = document.getElementById("frame-name-dd").value;
        shipSave["frame"] = frameSelection;

        // Saving shield pattern
        shipSave["shield-pattern"] = currentShield;

        // Saving section numbersnumber
        shipSave["fore-sections"] = document.getElementById("fore-sections-number").innerHTML;
        shipSave["mid-sections"] = document.getElementById("mid-sections-number").innerHTML;
        shipSave["core-sections"] = document.getElementById("core-sections-number").innerHTML;
        shipSave["aft-sections"] = document.getElementById("aft-sections-number").innerHTML;
        
        // Saving section cards and components cards
        allSections = [foreSectionsIDs, midSectionsIDs, coreSectionsIDs, aftSectionsIDs];
        allLocations = ["fore", "mid", "core", "aft"];
    
        for(let i = 0; i < allSections.length; i++){
            let IDs = allSections[i];
            let location = allLocations[i];
            for(let id = 0; id < IDs.length; id++){
                let sectionSelection = document.getElementById(location + IDs[id] + "section-name-dd").value;
            
                if(sectionSelection != ""){
                    // Saving Section card name
                    shipSave[location + (id+1) + "section-name-dd"] = sectionSelection;

                    // Checking each damage regions for a component card
                    for(let dr = 1; dr < 5; dr++){
                        // Checking each slot for a component card
                        for(let slot = 1; slot < 3; slot++){
                            // If the slot could have a component card
                            if(sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"] == "slot"){
                                componentCard = document.getElementById(location + IDs[id] + "dr-" + dr + "-dd_slot" + slot).value;
                                // If a component card is present saving the card name
                                if(componentCard != ""){
                                    shipSave[location + (id+1) + "dr-" + dr + "-dd_slot" + slot] = componentCard;
                                }
                            }
                        }
                    }
                    
                    // If frame type B
                    if(frameSelection != "" && frames[frameSelection]["code"] == "B" && location == frames[frameSelection]["var2"]){
                        componentCard = document.getElementById(location + IDs[id] + "dr-5-dd").value;
                        // If a component card is present saving the card name
                        if(componentCard != ""){
                            shipSave[location + (id+1) + "dr-5-dd"] = componentCard;
                        }
                    }
                }
            }
            if(frameSelection != "" && frames[frameSelection]["code"] == "D" && location == frames[frameSelection]["var2"]){
                let type = frames[frameSelection]["var1"];
                let sectionsNeeded = frames[frameSelection]["var3"];
                let amount = frames[frameSelection]["var4"];
                let amountSections = parseInt(document.getElementById("fore-sections-number").innerHTML, 10) + parseInt(document.getElementById("mid-sections-number").innerHTML, 10) + parseInt(document.getElementById("core-sections-number").innerHTML, 10) + parseInt(document.getElementById("aft-sections-number").innerHTML, 10);
                    
                for(let j = 1; j <= Math.ceil(amountSections / sectionsNeeded); j++) {
                    if(amount == "slot"){
                        componentCard = document.getElementById(location + j + "bonus").value;
                        if(componentCard != ""){
                            shipSave[location + j + "bonus"] = componentCard;
                        }
                    }
                }
            }
        }
    }
    console.log(shipSave);
    // Need function to save to doc
}

function load(){
    // Need function to load from doc
    
    // Clearing current ship
    allSections = [foreSectionsIDs, midSectionsIDs, coreSectionsIDs, aftSectionsIDs];
    allLocations = ["fore", "mid", "core", "aft"];

    for(let i = 0; i < allSections.length; i++){
        let IDs = allSections[i];
        let location = allLocations[i];
        for(let id = 0; id < IDs.length; id++){
            // Removing section elements        
            let element = document.getElementById(location + IDs[id] + "section");
            element.innerHTML = "";
            element.remove();
        }
    }

    // Reseting ids
    foreSectionsIDs = [];
    midSectionsIDs = [];
    coreSectionsIDs = [];
    aftSectionsIDs = [];

    // Reseting section numbers
    document.getElementById("fore-sections-number").innerHTML = "0";
    document.getElementById("mid-sections-number").innerHTML = "0";
    document.getElementById("core-sections-number").innerHTML = "0";
    document.getElementById("aft-sections-number").innerHTML = "0";

    // Adding in sections
    foreSections = parseInt(shipSave["fore-sections"], 10);
    midSections = parseInt(shipSave["mid-sections"], 10);
    coreSections = parseInt(shipSave["core-sections"], 10);
    aftSections = parseInt(shipSave["aft-sections"], 10);
    for(let i = 0; i < foreSections; i++){
        addSection("fore");
    }
    for(let i = 0; i < midSections; i++){
        addSection("mid");
    }
    for(let i = 0; i < coreSections; i++){
        addSection("core");
    }
    for(let i = 0; i < aftSections; i++){
        addSection("aft");
    }
                   
    // Adding in frame and section cards

    // Loading ship name
    document.getElementById("ship-name").value = shipSave["name"];

    // Loading frame selection
    document.getElementById("frame-name-dd").value = shipSave["frame"];

    // Loading shield pattern
    currentShield = shipSave["shield-pattern"];

    // Loading Sections
    allSections = [foreSectionsIDs, midSectionsIDs, coreSectionsIDs, aftSectionsIDs];
    allLocations = ["fore", "mid", "core", "aft"];

    for(let i = 0; i < allSections.length; i++){
        let IDs = allSections[i];
        let location = allLocations[i];
        for(let id = 0; id < IDs.length; id++){
            if(shipSave[location + (id+1) + "section-name-dd"] != null){
                document.getElementById(location + IDs[id] + "section-name-dd").value = shipSave[location + (id+1) + "section-name-dd"];
                updateCard(location, IDs[id]);
            }
        }
    }

    // Refreshing values
    refreshFrame()

    // Adding in component cards and other bonus (bonus slots and shield)
    let frameSelection = document.getElementById("frame-name-dd").value;

    for(let i = 0; i < allSections.length; i++){
        let IDs = allSections[i];
        let location = allLocations[i];
        for(let id = 0; id < IDs.length; id++){
            let sectionSelection = document.getElementById(location + IDs[id] + "section-name-dd").value;
        
            if(sectionSelection != ""){
                // Adding each damage regions component card
                for(let dr = 1; dr < 5; dr++){
                    for(let slot = 1; slot < 3; slot++){
                        // If the slot could have a component card
                        if(sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"] == "slot"){
                            if(shipSave[location + (id+1) + "dr-" + dr + "-dd_slot" + slot] != null){
                                document.getElementById(location + IDs[id] + "dr-" + dr + "-dd_slot" + slot).value = shipSave[location + (id+1) + "dr-" + dr + "-dd_slot" + slot];
                            }
                        }
                    }
                }
                
                // If frame type B
                if(frameSelection != "" && frames[frameSelection]["code"] == "B" && location == frames[frameSelection]["var2"]){
                    if(shipSave[location + (id+1) + "dr-5-dd"] != null){
                        document.getElementById(location + IDs[id] + "dr-5-dd").value = shipSave[location + (id+1) + "dr-5-dd"];
                    }
                }
            }
        }
        if(frameSelection != "" && frames[frameSelection]["code"] == "D" && location == frames[frameSelection]["var2"]){
            let type = frames[frameSelection]["var1"];
            let sectionsNeeded = frames[frameSelection]["var3"];
            let amount = frames[frameSelection]["var4"];
            let amountSections = parseInt(document.getElementById("fore-sections-number").innerHTML, 10) + parseInt(document.getElementById("mid-sections-number").innerHTML, 10) + parseInt(document.getElementById("core-sections-number").innerHTML, 10) + parseInt(document.getElementById("aft-sections-number").innerHTML, 10);
                
            for(let j = 1; j <= Math.ceil(amountSections / sectionsNeeded); j++) {
                if(amount == "slot"){
                    if(shipSave[location + j + "bonus"] != null){
                        document.getElementById(location + j + "bonus").value = shipSave[location + j + "bonus"];
                    }
                }
            }
        }
    }

    // Refreshing values
    shipUpdate()

}

// HERE

// Need save/load function
// Need view button for Frame style D