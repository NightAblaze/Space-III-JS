let ship = {};
let shipSave = {};

// Sections IDs currently in use
let foreSectionsIDs = [];
let midSectionsIDs = [];
let coreSectionsIDs = [];
let aftSectionsIDs = [];

// Save for location bonus'
let locationBonus = [];
let selectionBonus = {};

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
    document.getElementById(location + number + "section-name-dd").addEventListener("change", updateCard, false);

}

// Finds the location and number of the section clicked then runs updates the card
function updateCard(e){
    let number = e.currentTarget.id.replace(/\D/g,"");
    let location =  e.currentTarget.id.replace("section-name-dd","");
    location = location.replace(number,"");
    number = parseInt(number, 10);

    let sectionSelection = document.getElementById(e.currentTarget.id).value;

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
        element.innerHTML = '';
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
        }

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
    ship = {};
    
    allSections = [foreSectionsIDs, midSectionsIDs, coreSectionsIDs, aftSectionsIDs];
    allLocations = ["fore", "mid", "core", "aft"];

    let frameSelection = document.getElementById("frame-name-dd").value;

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
                            if(componentCard = ""){
                                ship[components[componentCard]["Hull"]] = ship[components[componentCard]["Hull"]] + 2;
                            }
                            else{
                                for(let system = 1; system < 7; system++){
                                    if(components[componentCard]["system_" + system] != ""){
                                        ship[components[componentCard]["system_" + system]] = ship[components[componentCard]["system" + system]] + components[componentCard]["system_" + system + "_amount"]
                                    }
                                }
                                if(components[componentCard]["misc_1"] != ""){
                                    misc = components[componentCard]["misc_1"].replace(/[0-9]/g, "");
                                    misc = misc.replace("+ ", "");
                                    amount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                    console.log(misc);
                                    switch (misc){
                                        case "Armour Points":
                                        case "Shield Points":
                                            ship[misc] = ship[misc] + parseInt(amount, 10);
                                            break;
                                    }
                                }
                                if(components[componentCard]["bonus"] != ""){
                                    switch (components[componentCard]["bonustype"]){
                                        case "Armour":
                                        // Need a function after all cards have been calculated     HERE!!!!
                                            break;
                                        case "Warp":
                                        case "Apr":
                                            if(components[componentCard]["bonus2"] == location){
                                                ship[components[componentCard]["bonustype"]] = ship[components[componentCard]["bonustype"]] + components[componentCard]["bonus1"]
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        else{
                        // Code to get components from non slot damage region
                        ship[sections[sectionSelection]["slot_" + dr + "-" + slot]] = ship[sections[sectionSelection]["slot_" + dr + "-" + slot]] + sections[sectionSelection]["slot_" + dr + "-" + slot + "_amount"]
                        }
                    } 
                }

                // Code to get components from damage region 5
                ship[sections[sectionSelection]["slot_5-1"]] = ship[sections[sectionSelection]["slot_5-1"]] + sections[sectionSelection]["slot_5-1_amount"]

                // Code to get frame bonus'
                switch (frames[frameSelection]["code"]){
                    case "B":
                        componentCard = document.getElementById(location + IDs[id] + "dr-5-dd").value;
                        if(componentCard = ""){
                            ship[components[componentCard]["Hull"]] = ship[components[componentCard]["Hull"]] + 2;
                        }
                        else{
                            for(let system = 1; system < 7; system++){
                                if(components[componentCard]["system_" + system] != ""){
                                    ship[components[componentCard]["system_" + system]] = ship[components[componentCard]["system" + system]] + components[componentCard]["system_" + system + "_amount"]
                                }
                            }
                            if(components[componentCard]["misc_1"] != ""){
                                misc = components[componentCard]["misc_1"].replace(/[0-9]/g, "");
                                misc = misc.replace("+ ", "");
                                amount = components[componentCard]["misc_1"].replace(/[^0-9]/g, "");
                                console.log(misc);
                                switch (misc){
                                    case "Armour Points":
                                    case "Shield Points":
                                        ship[misc] = ship[misc] + parseInt(amount, 10);
                                        break;
                                }
                            }
                            if(components[componentCard]["bonus"] != ""){
                                switch (components[componentCard]["bonustype"]){
                                    case "Armour":
                                    // Need a function after all cards have been calculated     HERE!!!!
                                        break;
                                    case "Warp":
                                    case "Apr":
                                        if(components[componentCard]["bonus2"] == location){
                                            ship[components[componentCard]["bonustype"]] = ship[components[componentCard]["bonustype"]] + components[componentCard]["bonus1"]
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case "C":
                        frameChangeC()
                        // Do a check when doing slots and add if applicable.
                        break;
                    case "E":
                        frameChangeE()
                        break;
                    case "F":
                        frameChangeF()
                        break;
                }


            }
        }
    }

    case "D":
        frameChangeD()
        break;
}