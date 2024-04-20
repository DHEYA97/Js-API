$(document).ready(function (){
        $(".load").fadeOut(700)
        $("body").css("overflow", "visible")
    })

const container = document.querySelector("#bodyContainer .container .row") 
let SearchInput = document.getElementsByClassName("SearchInput")
let Cn = 0 
let Ce = 0
let Cv = 0
let Ca = 0
let Cp = 0
let Cr = 0 
    
$('#close').click(function(){
    let navWidth = $('.navbar-menue').outerWidth()
    let liList = document.querySelectorAll('.top-menue ul li')
    let time = 800
    if($('.navbar-show').css('left') == "0px")
    {
        $('.navbar-menue').animate({left: `+${navWidth}px`},800)
        $('.navbar-show').animate({left: `+${navWidth}px`},800)
        $(this).removeClass('fa-bars').addClass('fa-x')
        liList.forEach((i)=>{
            $(i).animate({top: `0px`},time)
            time+=100
        })
    }
    else
    {
        closeNavbar()
    }
})

function closeNavbar()
{
    let liList = document.querySelectorAll('.top-menue ul li')
    let time = 1000
    $('.navbar-menue').animate({left: `0px`},800)
        $('.navbar-show').animate({left: `-0px`},800)
        $("#close").removeClass('fa-x').addClass('fa-bars')
        liList.forEach((i)=>{
            $(i).animate({top: `200px`},time)
            time+=100
        })
}


function removeSearchInput()
{
    $(".SearchInput").remove()
}

async function getFromApi(url)
{
    let http = await fetch(url)
    if(http.ok && http.status==200)
    {
        let resault = await http.json()
        return resault;
    }
    else
    {
        return false
    }
    
}
async function displayMeals(Meal)
{
    $(".load").fadeIn(100)
    closeNavbar()
    removeSearchInput()
    let Meals = await Meal
    let MealsList = await Meals.meals
    if(MealsList.length > 0)
    {
        let carton = ""
        MealsList.forEach((SMeal) =>{
            carton+=`
            <div class="col-md-3" onclick="displaySingelMeals('${SMeal.idMeal}')">
            <div class="item cursor-pointer bg-black position-relative bg-danger rounded-2 overflow-hidden">
                <div class="layer bg-light bg-opacity-75 position-absolute ps-3 w-100 h-100 d-flex justify-content-start align-items-center rounded-2">
                    <h3 class="Ingredients">${SMeal.strMeal}</h3>
                </div>
                <div class="item-container">
                    <img src="${SMeal.strMealThumb}" class="w-100 rounded-2"/>
                </div>
            </div>
        </div> 
            `
        })
        container.innerHTML = carton
        $(".load").fadeOut(700)
    }
    else
    {
        container.innerHTML = ""
    }
}

async function displaySingelMeals(id)
{
    $(".load").fadeIn(100)
    closeNavbar()
    removeSearchInput()
    let SMeals = await  getFromApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let SMealsInfo = await SMeals.meals
    if(SMealsInfo !== 0)
    {
        let carton = ""
        SMealsInfo.forEach((SMeal) =>{
            carton+=`
            <div class="col-md-4">
                        <img src="${SMeal.strMealThumb}" class="w-100 rounded-2"/>
                        <h2 class="text-white">${SMeal.strMeal}</h2>
                    </div>
                    <div class="col-md-8 text-white">
                        <h2>Instructions</h2>
                        <p>${SMeal.strInstructions}</p>
                        <h3>Area : <span>${SMeal.strArea}</span></h3>
                        <h3>Category : <span>${SMeal.strCategory}</span></h3>
                        <div>
                            <h3>Recipes :</h3>
                            <ul class="d-flex flex-wrap list-unstyled recipes">
                                ${SMeal.strIngredient1 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient1 +'</li>' : ""}
                                ${SMeal.strIngredient2 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient2 +'</li>' : ""}
                                ${SMeal.strIngredient3 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient3 +'</li>' : ""}
                                ${SMeal.strIngredient4 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient4 +'</li>' : ""}
                                ${SMeal.strIngredient5 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient5 +'</li>' : ""}
                                ${SMeal.strIngredient6 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient6 +'</li>' : ""}
                                ${SMeal.strIngredient7 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient7 +'</li>' : ""}
                                ${SMeal.strIngredient8 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient8 +'</li>' : ""}
                                ${SMeal.strIngredient9 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient9 +'</li>' : ""}
                                ${SMeal.strIngredient10 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient10 +'</li>' : ""}
                                ${SMeal.strIngredient11 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient11 +'</li>' : ""}
                                ${SMeal.strIngredient12 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient12 +'</li>' : ""}
                                ${SMeal.strIngredient13 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient13 +'</li>' : ""}
                                ${SMeal.strIngredient14 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient14 +'</li>' : ""}
                                ${SMeal.strIngredient15 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient15 +'</li>' : ""}
                                ${SMeal.strIngredient16 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient16 +'</li>' : ""}
                                ${SMeal.strIngredient17 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient17 +'</li>' : ""}
                                ${SMeal.strIngredient18 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient18 +'</li>' : ""}
                                ${SMeal.strIngredient19 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient19 +'</li>' : ""}
                                ${SMeal.strIngredient20 !="" ? '<li class="alert alert-info">'+ SMeal.strIngredient20 +'</li>' : ""}
                                
                            </ul>
                        </div>
                        <div>
                            <h3>Tags  :</h3>
                            <ul class="d-flex flex-wrap list-unstyled tag">
                                ${ SMeal.strTags == null    ? '' 
                                                            : SMeal.strTags.includes(',') != -1 ? SMeal.strTags.split(',').map( e=> '<li class="alert alert-danger">'+ e + '</li>').join("")
                                                            :'<li class="alert alert-danger">'+ SMeal.strTags + '</li>'
                                }         
                            </ul>
                        </div>
                        <div>
                            <button type="button" class="btn btn-success"><a href="${SMeal.strSource}" target="_blank" class="text-white text-decoration-none">Source</a></button>
                            <button type="button" class="btn btn-danger"><a href="${SMeal.strYoutube}" target="_blank" class="text-white text-decoration-none">Youtube</a></button>
                        </div>
                    </div>
            `
        })
        container.innerHTML = carton
        $(".load").fadeOut(700)
    }
}

function SearchPage()
{
    let carton = `
                    <div class="container SearchInput my-5"> 
                        <div class="row g-4">
                            <div class="col-md-5 offset-1">
                            <input type="text" class="form form-control bg-transparent" id="SByName" placeholder="Search By Name" onkeyup="displaySearchMealsByName()">
                            </div>
                            <div class="col-md-5">
                                <input type="text" class="form form-control bg-transparent" id="SByLetter" maxlength="1" placeholder="Search By Firest Letter" onkeyup="displaySearchMealsByLetter()">
                            </div>
                        </div>
                    </div>
                `
    return carton
}

function displaySearchPage()
{
    $(".load").fadeIn(100)
    container.innerHTML = ""
    if(SearchInput.length == 0)
    {
        console.log("hi");
        let carton = SearchPage()
        $("#bodyContainer .container .row").before(carton)
    }
    $(".load").fadeOut(700)
}

$(".top-menue ul li").click(function(){
    console.log(this.innerHTML);
    closeNavbar()
    switch(this.innerHTML)
    {
        case "Search":
            displaySearchPage()
            break;
        case "Categories":
            displayCategoriesPage()
            break;
        case "Area":
            displayAreaPage()
            break;
        case "Ingredients":
            displayIngredientsPage()
            break;
        case "Contact Us":
            displayContactPage()
            break;
    }
})

async function displaySearchMealsByName()
{
    $(".load").fadeIn(100)
    closeNavbar()
    let SearchVal = $("#SByName").val()
    let SMeals = await  getFromApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchVal}`)
    if(SMeals.meals != null)
    {
        displayMeals(SMeals)
    }
    else
    {
        container.innerHTML = ""
    }
    $(".load").fadeOut(700)
}

async function displaySearchMealsByLetter()
{
    closeNavbar()
    let SearchVal = $("#SByLetter").val()
    let SMeals = await  getFromApi(`https://www.themealdb.com/api/json/v1/1/search.php?f=${SearchVal}`)
    if(SMeals.meals != null)
    {
        displayMeals(SMeals)
    }
    else
    {
        container.innerHTML = ""
    }
}

async function displayCategoriesPage()
{
    $(".load").fadeIn(100)
    closeNavbar()
    removeSearchInput()
    let MealsCategories = await  getFromApi(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let SMealsCategories = await MealsCategories.categories
    if(SMealsCategories !== 0)
    {
        let carton = ""
        SMealsCategories.forEach((SCategories) =>{
            carton+=`
            <div class="col-md-3" onclick="displayBy('${"https://www.themealdb.com/api/json/v1/1/filter.php?c=" + SCategories.strCategory}')">
            <div class="item cursor-pointer bg-black position-relative bg-danger rounded-2 overflow-hidden">
                <div class="layer bg-light bg-opacity-75 position-absolute ps-3 w-100 h-100 d-flex flex-column justify-content-center text-center rounded-2">
                    <h3 class="Ingredients">${SCategories.strCategory}</h3>
                    <p>${SCategories.strCategoryDescription.slice(0,100)}</p>
                </div>
                <div class="item-container">
                    <img src="${SCategories.strCategoryThumb}" class="w-100 rounded-2"/>
                </div>
            </div>
        </div>
            `
        })
        container.innerHTML = carton
        $(".load").fadeOut(700)
    }
}
function displayBy(url)
{
    displayMeals(getFromApi(url))
}
async function displayAreaPage()
{
    $(".load").fadeIn(100)
    closeNavbar()
    removeSearchInput()
    let MealsArea = await  getFromApi(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let SMealsArea = await MealsArea.meals
    console.log(SMealsArea);
    if(SMealsArea !== 0)
    {
        let carton = ""
        SMealsArea.forEach((SArea) =>{
            carton+=`
                    <div class="col-md-3" onclick="displayBy('${"https://www.themealdb.com/api/json/v1/1/filter.php?a=" + SArea.strArea}')">
                        <div class="item cursor-pointer text-white text-center cursor-pointer">
                            <i class="fa-solid fa-house-laptop fa-4x"></i>
                            <h3>${SArea.strArea}</h3>
                        </div>
                    </div>
            `
        })
        container.innerHTML = carton
    }
    $(".load").fadeOut(700)
}
async function displayIngredientsPage()
{
    $(".load").fadeIn(100)
    closeNavbar()
    removeSearchInput()
    let MealsIngredient = await  getFromApi(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let SMealsIngredient = await MealsIngredient.meals
    if(SMealsIngredient !== 0)
    {
        let carton = ""
        SMealsIngredient.forEach((SIngredient) =>{
            carton+=`
                    <div class="col-md-3" onclick="displayBy('${"https://www.themealdb.com/api/json/v1/1/filter.php?i=" + SIngredient.strIngredient}')">
                        <div class="item cursor-pointer text-white text-center cursor-pointer">
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                            <h3>${SIngredient.strIngredient}</h3>
                            <p>${SIngredient.strDescription ? SIngredient.strDescription.slice(0,120) : SIngredient.strDescription }</p>
                        </div>
                    </div>
            `
        })
        container.innerHTML = carton
        $(".load").fadeOut(700)
    }
}

function displayContactPage(){
    $(".load").fadeIn(100)
    let carton = `
                    <div class="col-md-5 offset-1 mt-5">
                        <input type="text" class="form form-control" id="ContactName" placeholder="Enter Your Name" onkeyup="ContactNameReg()"/>
                        <div class="alert alert-danger d-none text-center mt-2">
                            Special characters and numbers not allowed
                        </div>
                    </div>
                    <div class="col-md-5 mt-5">
                        <input type="email" class="form form-control" id="ContactEmail" placeholder="Enter Your Email" onkeyup="ContactEmailReg()"/>
                        <div class="alert alert-danger d-none text-center mt-2">
                            Email not valid *exemple@yyy.zzz
                        </div>
                    </div>
                    <div class="col-md-5 offset-1">
                        <input type="text" class="form form-control" id="ContactPhone" placeholder="Enter Your Phone" onkeyup="ContactPhoneReg()"/>
                        <div class="alert alert-danger d-none text-center mt-2">
                            Enter valid Phone Number
                        </div>
                    </div>
                    <div class="col-md-5">
                        <input type="number" min="1" max="100" class="form form-control" id="ContactAge" placeholder="Enter Your Age" onkeyup="ContactAgeReg()"/>
                        <div class="alert alert-danger d-none text-center mt-2">
                            Enter valid age
                        </div>
                    </div>
                    <div class="col-md-5 offset-1">
                        <input type="password" class="form form-control" id="ContactPass" placeholder="Enter Your Password" onkeyup="ContactPasswordReg()"/>
                        <div class="alert alert-danger d-none text-center mt-2">
                            Enter valid password *Minimum eight characters, at least one letter and one number:*
                        </div>
                    </div>
                    <div class="col-md-5">
                        <input type="password"  class="form form-control" id="ContactRePass" placeholder="Repassword" onkeyup="ContactRePasswordReg()"/>
                        <div class="alert alert-danger d-none text-center mt-2">
                            Enter valid repassword
                        </div>
                    </div>
                    <div class="w-100 text-center m-auto mt-5">
                        <button type="submit" id="submit" class="btn btn-danger" disabled>Submit</button>
                    </div>
                `
                container.innerHTML = carton
                $(".load").fadeOut(700)
}
// Regex Validation
function ContactNameReg()
{
    const Rgex = /^[A-Za-z]+$/
    let ContactName = document.getElementById("ContactName")
    if(!Rgex.test(ContactName.value))
    {
        $("#ContactName").next().removeClass("d-none")
        Cn = 0 
    }
    else
    {
        $("#ContactName").next().addClass("d-none")
        Cn = 1
    }
    Checksubmit()
}
function ContactEmailReg()
{
    const Rgex = /^[A-Z|a-z|0-9]+(@)[a-z]+(.)[a-z]+$/
    let ContactEmail = document.getElementById("ContactEmail")
    if(!Rgex.test(ContactEmail.value))
    {
        $("#ContactEmail").next().removeClass("d-none")
        Ce = 0
    }
    else
    {
        $("#ContactEmail").next().addClass("d-none")
        Ce = 1
    }
    Checksubmit()
}
function ContactPhoneReg()
{
    const Rgex = /^(\+966|00966|0966|966|05|5)[13456789][\d]{7}$/
    let ContactPhone = document.getElementById("ContactPhone")
    if(!Rgex.test(ContactPhone.value))
    {
        $("#ContactPhone").next().removeClass("d-none")
        Cv = 0
    }
    else
    {
        $("#ContactPhone").next().addClass("d-none")
        Cv = 1
    }
    Checksubmit()
}
function ContactAgeReg()
{
    const Rgex = /^([1-9]|[1-9][0-9]|100)$/
    let ContactAge = document.getElementById("ContactAge")
    if(!Rgex.test(ContactAge.value))
    {
        $("#ContactAge").next().removeClass("d-none")
        Ca = 0
    }
    else
    {
        $("#ContactAge").next().addClass("d-none")
        Ca = 1
    }
    Checksubmit()
}
function ContactPasswordReg()
{
    const Rgex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let ContactPass = document.getElementById("ContactPass")
    if(!Rgex.test(ContactPass.value))
    {
        $("#ContactPass").next().removeClass("d-none")
        ContactRePasswordReg()
        Cp = 0
    }
    else
    {
        $("#ContactPass").next().addClass("d-none")
        ContactRePasswordReg()
        Cp = 1
    }
    Checksubmit()
}
function ContactRePasswordReg()
{
    let ContactRePass = document.getElementById("ContactRePass")
    let ContactPass = document.getElementById("ContactPass")
    if(ContactRePass.value != ContactPass.value )
    {
        $("#ContactRePass").next().removeClass("d-none")
        Cr = 0
    }
    else
    {
        $("#ContactRePass").next().addClass("d-none")
        Cr = 1
    }
    Checksubmit()
}
function Checksubmit()
{
    if(Cn && Ce && Cv && Ca && Cp && Cr)
    {
        document.querySelector('#submit').disabled = false;
    }
    else
    {
        document.querySelector('#submit').disabled = true;
    }
}
displayBy('https://www.themealdb.com/api/json/v1/1/search.php?s=')