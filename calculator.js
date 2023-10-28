document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

   let selectedFoods = [];
    let checkboxesFood = document.getElementsByName("food");
    for (let i = 0; i < checkboxesFood.length; i++) {
        if (checkboxesFood[i].checked) {
            selectedFoods.push(checkboxesFood[i].value);
        }
    }

      let selectedDeserts = [];
    let checkboxesDesert = document.getElementsByName("desert");
    for (let i = 0; i < checkboxesDesert.length; i++) {
        if (checkboxesDesert[i].checked) {
            selectedDeserts.push(checkboxesDesert[i].value);
        }
    }

    let selectedDrinks = [];
    let checkboxesDrink = document.getElementsByName("drink");
    for (let i = 0; i < checkboxesDrink.length; i++) {
        if (checkboxesDrink[i].checked) {
            selectedDrinks.push(checkboxesDrink[i].value);
        }
    }


    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let activityLevel = parseFloat(document.getElementById("activityLevel").value);

    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let dailyCalories = bmr * activityLevel;

    let foodCalories = {
        "Чикенбургер": 340,
        "Цезарь ролл": 472,
        "Картошка фри": 230,
        "6 нагетсов": 270,
    };

    let desertCalories = {
    "Мороженое рожок": 164,
    "Пирожок с вишней": 279,
    };

    let drinkCalories = {
    "Апельсиновый сок": 150,
    "Кола": 170,
    "Липтон": 107
    };

    let totalFoodCalories = 0;
    for (let j = 0; j < selectedFoods.length; j++) {
        totalFoodCalories += foodCalories[selectedFoods[j]];
    };

   let totalDesertCalories = 0;
   for (let j = 0; j < selectedDeserts.length; j++) {
       totalDesertCalories += desertCalories[selectedDeserts[j]];
    };

   let totalDrinkCalories = 0;
   for (let j = 0; j < selectedDrinks.length; j++) {
       totalDrinkCalories += drinkCalories[selectedDrinks[j]];
    };

    let totalCalories = totalFoodCalories + totalDesertCalories + totalDrinkCalories;
    
    let recommendation = "";
    if (totalCalories > dailyCalories) {
        recommendation = "Рекомендуется уменьшить потребление фастфуда и сделать акцент на более здоровой пище.";
    } else if (totalCalories < dailyCalories) {
        recommendation = "Рекомендуется увеличить потребление пищи для достижения нормы калорий.";
    } else {
        recommendation = "Ваш рацион соответствует рекомендуемой суточной норме калорий.";
    };

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Ваша суточная норма потребления калорий с учетом различных факторов: " + dailyCalories.toFixed(2) + " калорий.<br>";
    resultDiv.innerHTML += "Это значит в макдоналдсе в день вы можете съесть: " + Math.floor(dailyCalories / totalCalories) + " набор выбранного фастфуда.<br>";
    resultDiv.innerHTML += recommendation;
});






    

    
