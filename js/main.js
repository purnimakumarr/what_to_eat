const meal_options = [];
var foodCount = 0;
function addMeal() {
    var option = document.getElementById("meal-option").value;
    if(option != null && option != "") {
        meal_options.push(option);
        document.getElementById("options-entered").innerHTML = "Your options: " + meal_options.toString();
        document.getElementById("error").innerHTML = "";
        document.getElementById("meal-option").value="";
    } else {
        document.getElementById("error").innerHTML = "Please enter an option.";
    }
}

function chooseMeal() {
    if(foodCount==1) {
        document.getElementById("error").innerHTML = "Sorry, no takebacks. It wouldn't be very random if you just keep clicking. Enjoy your meal!"
        return;
    }
    var length = meal_options.length;
    if(length <= 0) {
        document.getElementById("error").innerHTML = "Please enter options.";
    } else if(length == 1) {
        document.getElementById("error").innerHTML = "Cannot choose from one option. Please add more!";
    } else {
        foodCount++;
        var num = Math.floor(Math.random()*length);
        document.getElementById("your-meal").innerHTML += " " + meal_options[num];
    }
}

function resetFunc() {
    foodCount=0;
    var length = meal_options.length;
    while(length>=0) {
        var option = meal_options.pop();
        length--;
    }
    document.getElementById("options-entered").innerHTML = "Your options:";
    document.getElementById("your-meal").innerHTML = "Your meal:";
    document.getElementById("error").innerHTML = "";
}
