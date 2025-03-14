
    let portionInput = document.getElementById('portionInput')

let ingredientsList = document.getElementById('ingredientsList')

let recipeName = document.getElementById('recipeTitel').innerText

let portionQuantity = document.getElementById('portionInput')

let warning = document.getElementById('portionsWarning')

const rezepte = [
    {
        name: "Pizza",
        zutaten: [
            { ingredient: "Mehl", quantity: 150, unit: "g" },
            { ingredient: "Wasser", quantity: 90, unit: "ml" },
            { ingredient: "Olivenöl", quantity: 1, unit: "TL" },
            { ingredient: "Salz", quantity: 0.5, unit: "TL" },
            { ingredient: "Zucker", quantity: 0.25, unit: "TL" },
            { ingredient: "frische Hefe", quantity: 3, unit: "g" },
            { ingredient: "passierte Tomaten", quantity: 100, unit: "g" },
            { ingredient: "Mozarella", quantity: 80, unit: "g" },
            { ingredient: "frische Basilikumblätter", quantity: 5, unit: "Stück" },
            { ingredient: "Gewürze", quantity: '', unit: "nach Geschmack" },
            { ingredient: "Gewünschte Beläge", quantity: '', unit: "nach eigenem Wunsch" },
        ]
    },
    {
        name: "Caprese-Salat",
        zutaten: [
            { ingredient: "Tomaten", quantity: 3, unit: "Stück" },
            { ingredient: "Mozzarella", quantity: 250, unit: "g" },
            { ingredient: "Basilikum", quantity: '', unit: "frisch, nach Geschmack" },
            { ingredient: "Olivenöl", quantity: 3, unit: "EL" },
            { ingredient: "Balsamico", quantity: 1, unit: "EL" },
            { ingredient: "Salz", quantity: '', unit: "nach Geschmack" },
            { ingredient: "Pfeffer", quantity: '', unit: "nach Geschmack" }
        ]
    },
    {
        name: "Green Salat",
        zutaten: [
            {ingredient: "Salat", quantity: 200, unit: "g"},
            {ingredient: "Cherry Tomaten", quantity: 3, unit: "Stück"},
            {ingredient: "Gurken", quantity: 1, unit: "Stück (klein)"},
            {ingredient: "geriebene Karotten", quantity: 1, unit: "Packung (klein)"},
            {ingredient: "Mais", quantity: 50, unit: "g"},
            {ingredient: "Zwiebel", quantity: 1/2, unit: "Stück"},
            {ingredient: "Avocado", quantity: 8, unit: "Würfel"},
            {ingredient: "Mozzarella", quantity: 6, unit: "Stück (klein)"},
            {ingredient: "Mehrkorn-Topping", quantity: 5, unit: "g"},
            {ingredient: "Rucola", quantity: 50, unit: "g"},
            {ingredient: "Olivenöl", quantity: 1/2, unit: "EL"}
        ]
    },
    {
        name: "Gemüsepfanne",
        zutaten: [
            { ingredient: "Paprika", quantity: 1, unit: "Stück" },
            { ingredient: "Zucchini", quantity: 1, unit: "Stück" },
            { ingredient: "Karotten", quantity: 2, unit: "Stück" },
            { ingredient: "Zwiebeln", quantity: 1, unit: "Stück" },
            { ingredient: "Olivenöl", quantity: 2, unit: "EL" },
            { ingredient: "Gewürze", quantity: '', unit: "nach Geschmack" }
        ]
    },
    {
        name: "Hühnchen Curry",
        zutaten: [
            { ingredient: "Hühnchenbrust", quantity: 500, unit: "g" },
            { ingredient: "Kokosmilch", quantity: 400, unit: "ml" },
            { ingredient: "Currypaste", quantity: 2, unit: "EL" },
            { ingredient: "Zwiebeln", quantity: 1, unit: "Stück" },
            { ingredient: "Knoblauch", quantity: 2, unit: "Zehen" },
            { ingredient: "Gemüse", quantity: '', unit: "nach Wahl" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', checkRecipes(recipeName));

function checkRecipes(recipe) {
    for (let i = 0; i < rezepte.length; i++) {
        if (recipe === rezepte[i].name) {
            renderIngredients(i);
            break
        } else {
            continue
        }
    }
}

function renderIngredients(recipeIndex) {
    for (let i = 0; i < rezepte[recipeIndex].zutaten.length; i++) {
        ingredientsList.innerHTML += getListHtml(recipeIndex, i);
    }
}

function getListHtml(recipeIndex, i) {
    return `<li class="ingredient"><span class="amount">${rezepte[recipeIndex].zutaten[i].quantity} </span>${rezepte[recipeIndex].zutaten[i].unit} ${rezepte[recipeIndex].zutaten[i].ingredient}</li>`
}

function increasePortions() {
    if (portionInput.value < 25) {
        warning.style.display = 'none'
        portionInput.value++
    } else {
        warning.style.display = 'block'
    }
}

function decreasePortions() {
    if (portionInput.value > 1) {
        warning.style.display = 'none'
        portionInput.value--
    }
}

function checkPortions() {
    if (portionInput.value < 1) {
        portionInput.value = 1
    } else if(portionInput.value > 25){
        warning.style.display = 'block';
        portionInput.value = 1;
    } else {
        warning.style.display = 'none'
    }
}

function calculatePortion() {
    const currentPortions = parseInt(portionInput.value);
    const recipe = rezepte.find(r => r.name === recipeName);

    ingredientsList.innerHTML = "";

    recipe.zutaten.forEach(zutat => {
        // Originalmenge basierend auf einer Portion
        const originalQuantity = zutat.quantity || 0;

        // Neue Menge berechnen
        const adjustedQuantity = originalQuantity ? (originalQuantity * currentPortions) : '';

        // Neue Zutat hinzufügen
        const listItem = document.createElement('li');
        listItem.className = "ingredient";
        listItem.innerHTML = `<span class="amount">${adjustedQuantity} </span>${zutat.unit} ${zutat.ingredient}`;
        ingredientsList.appendChild(listItem);
    });
}

portionInput.addEventListener('input', calculatePortion);

document.querySelector('.portionButton[onclick="increasePortions()"]').addEventListener('click', () => {
    calculatePortion();
});
document.querySelector('.portionButton[onclick="decreasePortions()"]').addEventListener('click', () => {
    calculatePortion();
});