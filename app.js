// =========================
// UEFA Champions League Portal
// Author: Alijonov Asadbek
// =========================


// ====== QIDIRUV ======

function searchClub() {

    const input =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const clubs =
    document.querySelectorAll(".club-card");

    clubs.forEach(club => {

        const text =
        club.innerText.toLowerCase();

        if(text.includes(input)){
            club.style.display = "block";
        }
        else{
            club.style.display = "none";
        }

    });

}


// ====== ESLATMA ======

function setReminder(){

    alert(
        "⏰ Eslatma saqlandi!\nO'yin boshlanishidan 10 daqiqa oldin sizga eslatiladi."
    );

}


// ====== DARK MODE ======

function enableDarkMode(){

    document.body.classList.add("dark");

    localStorage.setItem(
        "theme",
        "dark"
    );

}


function enableLightMode(){

    document.body.classList.remove("dark");

    localStorage.setItem(
        "theme",
        "light"
    );

}


window.onload = function(){

    const theme =
    localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark");
    }

}


// ====== TIL TANLASH ======

function changeLanguage(){

    const lang =
    document.getElementById("language")
    .value;

    localStorage.setItem(
        "language",
        lang
    );

    alert(
        "Til o'zgartirildi: " + lang
    );

}


// ====== FINALLARNI FILTRLASH ======

function searchFinals(){

    const input =
    document
    .getElementById("finalSearch")
    .value
    .toLowerCase();

    const rows =
    document.querySelectorAll(".final-row");

    rows.forEach(row=>{

        const text =
        row.innerText.toLowerCase();

        if(text.includes(input)){
            row.style.display = "";
        }
        else{
            row.style.display = "none";
        }

    });

}


// ====== FUTBOLCHILARNI FILTRLASH ======

function searchPlayers(){

    const input =
    document
    .getElementById("playerSearch")
    .value
    .toLowerCase();

    const players =
    document.querySelectorAll(".player-card");

    players.forEach(player=>{

        const text =
        player.innerText.toLowerCase();

        if(text.includes(input)){
            player.style.display = "block";
        }
        else{
            player.style.display = "none";
        }

    });

}


// ====== FAKTLARNI FILTRLASH ======

function searchFacts(){

    const input =
    document
    .getElementById("factSearch")
    .value
    .toLowerCase();

    const facts =
    document.querySelectorAll(".fact-card");

    facts.forEach(fact=>{

        const text =
        fact.innerText.toLowerCase();

        if(text.includes(input)){
            fact.style.display = "block";
        }
        else{
            fact.style.display = "none";
        }

    });

}


// ====== YUQORIGA QAYTISH ======

window.addEventListener("scroll", ()=>{

    const btn =
    document.getElementById("topBtn");

    if(!btn) return;

    if(window.scrollY > 300){

        btn.style.display = "block";

    }else{

        btn.style.display = "none";

    }

});


function scrollTopPage(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}