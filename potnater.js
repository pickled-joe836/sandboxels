// This is how to add a new mod to the game.

// Create a new Javascript file like this one.
// Add the file to the mods folder on GitHub, or host it somewhere else.
// https://github.com/R74nCom/sandboxels/tree/main/mods

// To add it in the Mod Loader:
// If it is in the mods folder, you can just use the name of the file.
// If it is hosted somewhere else, you can use the full URL, including the HTTPS://.

// Adding elements:
elements.potnate    = {
    color: "#f4ce87",
    behavior: behaviors.solid,
    category: "life",
    viscosity: 1,
    state: "solid",
    density: 7240,
    burn: 23,
    burntime: 20
    burninto: "grenade"
};
elements.potnate_leaves    = {
    color: "#578c3d",
    behavior: behaviors.solid,
    category: "life",
    viscosity: 1,
    state: "solid",
    density: 7240,
    burn: 60,
    burntime: 5
    burninto: "zinc"
};
elements.potnate_seed    = {
    color: "#578c3d",
    behavior: behaviors.powder,
    category: "life",
    viscosity: 1,
    state: "solid",
    density: 274,
    burn: 45,
    burntime: 10
    burninto: "bomb"
};

// Changing existing elements:


// Removing elements:
// Be aware, things may break

// Adding behavior presets:
behaviors.POTNATE = [
    "CH:potnate_leaves%28 AND CR:bomb%0.8|XX|CH:potnate_leaves%28 AND CR:bomb%0.8",
    "XX|XX|XX",
    "CH:dirt>potnate%23|CH:dirt>potnate%23|CH:dirt>potnate%23",
];
behaviors.POTNATE_LEAVES = [
    "XX|XX|XX",
    "XX|XX|XX",
    "CH:dirt>potnate%23|CH:dirt>potnate%23|CH:dirt>potnate%23",
];

// Raw JavaScript behaviors:
behaviors.mud.tick = function(pixel) {
    if (tryMove(pixel, pixel.x, pixel.y+1)) {
        console.log("Moved!");
    }
    else {
        console.log("Couldn't move!")
    }
};

// Create a new tool:
elements.sand_exploder = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            pixel.element = "explosion"
        }
    },
    category: "tools",
};

// Add reactions to existing elements
if (!elements.water.reactions) { // Include this block once
    elements.water.reactions = {} // This creates the property if it doesn't exist
}
elements.water.reactions.mayo = { "elem1":null, "elem2":"mayo_water" }
elements.water.reactions.soap = { "elem1":null, "elem2":"soapy_water" }

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Your code here
    console.log("Hello World!");
});

// Run if another mod is active
if (enabledMods.includes("mods/test.js")) {
    runAfterLoad(function() {
        // Your code here
        console.log("Hello World!");
    });
}

// Creating eLists:
eLists.CONDIMENT = ["ketchup","melted_cheese","mayo"];
// Adding elements to eLists:
eLists.CONDIMENT.push("honey");
