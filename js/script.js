///////////////////////////////////////////////////////////
//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    //Scroll to other links
    if (href != "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
//Getting options
const addBtn = document.getElementById("add-btn");
const optionEl = document.getElementById("option");
const ulEl = document.querySelector(".options-list");
const optionsList = new Array();
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const option = optionEl.value;
  if (option != "") {
    optionsList.push(option);
    const newOption = document.createElement("li");
    newOption.appendChild(document.createTextNode(option));
    if (ulEl == null) console.log("null");
    ulEl.appendChild(newOption);

    const optionSectionEl = document.querySelector(".options-section");
    if (!optionSectionEl.classList.contains("display-open")) {
      optionSectionEl.classList.add("display-open");
    }
  } else alert("Please enter a valid option.");
});

///////////////////////////////////////////////////////////
//Reset the webpage
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});

///////////////////////////////////////////////////////////
//Choosing meal
const chooseBtn = document.getElementById("choose-btn");
const recipeEl = document.querySelector(".recipe");
const restrauntEl = document.querySelector(".restraunt");
chooseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (optionsList.length > 1) {
    var index;
    const resultEl = document.querySelector(".result");
    index = Math.floor(Math.random() * optionsList.length);
    resultEl.textContent = "Your meal: " + optionsList[index];
    const resultSectionEl = document.querySelector(".result-section");
    if (!resultSectionEl.classList.contains("display-open")) {
      resultSectionEl.classList.add("display-open");
    }

    recipeEl.innerHTML =
      "<td class='recipe'><a target='_blank' href='https://www.google.com/search?q=" +
      optionsList[index] +
      " " +
      "recipe&source=hp&ei=Zz5OYYj4McKO4-EPyY-zoA0&iflsig=ALs-wAMAAAAAYU5Md8P--3ObU0TRhS1I5In84jIiYT8M&oq=eggs&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMggILhCABBCxAzIFCAAQgAQyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyCwguEIAEEMcBEK8BMg4IABCABBCxAxCDARDJAzIFCAAQkgMyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6CAgAELEDEIMBOgUILhCABDoFCC4QsQNQqA1YoBNg0BZoAHAAeACAAbIBiAH6BJIBAzAuNJgBAKABAQ&sclient=gws-wiz&ved=0ahUKEwjIx-69wpjzAhVCxzgGHcnHDNQQ4dUDCAc&uact=5'>Recipe</a></td>";
    restrauntEl.innerHTML =
      "<td class='recipe'><a target='_blank' href='https://www.google.com/search?q=" +
      optionsList[index] +
      " " +
      "restraunts" +
      " " +
      "near" +
      " " +
      "me&source=hp&ei=Zz5OYYj4McKO4-EPyY-zoA0&iflsig=ALs-wAMAAAAAYU5Md8P--3ObU0TRhS1I5In84jIiYT8M&oq=eggs&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMggILhCABBCxAzIFCAAQgAQyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyCwguEIAEEMcBEK8BMg4IABCABBCxAxCDARDJAzIFCAAQkgMyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6CAgAELEDEIMBOgUILhCABDoFCC4QsQNQqA1YoBNg0BZoAHAAeACAAbIBiAH6BJIBAzAuNJgBAKABAQ&sclient=gws-wiz&ved=0ahUKEwjIx-69wpjzAhVCxzgGHcnHDNQQ4dUDCAc&uact=5'>Restraunts</a></td>";
  } else alert("Please enter atleast two options");
});
