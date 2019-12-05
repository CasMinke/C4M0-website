var player = {level: 1, damage: 10, experience: 0, coins: 0, kills: 0, experienceneeded: 100, experienceperkill: 25, extradamage: 5};
var enemy = {level: 1, health: 100, healthmax: 100, experience: 0, loot: 1, experienceneeded: 100, experienceperdeath: 25, extraloot: 1};
var damageovertime = 0;
var extradamageovertime = 5;
var costupgr1 = 5;
var costupgr2 = 10;
var costupgr3 = 15;
var costupgr4 = 30;
var upgradelvls = 5;
var timer = setInterval(upgradeuitvoer, 1000);
var buttonpressed = false;

if (localStorage.getItem("player.level") == null) {

} else {
    player.level = parseInt(localStorage.getItem("player.level"));
    player.damage = parseInt(localStorage.getItem("player.damage"));
    player.experience = parseInt(localStorage.getItem("player.experience"));
    player.coins = parseInt(localStorage.getItem("player.coins"));
    player.kills = parseInt(localStorage.getItem("player.kills"));
    player.experienceneeded = parseInt(localStorage.getItem("player.experienceneeded"));
    player.experienceperkill = parseInt(localStorage.getItem("player.experienceperkill"));
    enemy.level = parseInt(localStorage.getItem("enemy.level"));
    enemy.health = parseInt(localStorage.getItem("enemy.health"));
    enemy.healthmax = parseInt(localStorage.getItem("enemy.healthmax"));
    enemy.experience = parseInt(localStorage.getItem("enemy.experience"));
    enemy.loot = parseInt(localStorage.getItem("enemy.loot"));
    enemy.experienceneeded = parseInt(localStorage.getItem("enemy.experienceneeded"));
    enemy.experienceperdeath = parseInt(localStorage.getItem("enemy.experienceperdeath"));
    damageovertime = parseInt(localStorage.getItem("damageovertime"));
    costupgr1 = parseInt(localStorage.getItem("costupgr1"));
    costupgr2 = parseInt(localStorage.getItem("costupgr2"));
    costupgr3 = parseInt(localStorage.getItem("costupgr3"));
    costupgr4 = parseInt(localStorage.getItem("costupgr4"));
    upgradelvls = parseInt(localStorage.getItem("upgradelvls"));
    player.extradamage = parseInt(localStorage.getItem("player.extradamage"));
    extradamageovertime = parseInt(localStorage.getItem("extradamageovertime"));
    buttonpressed = localStorage.getItem("buttonpressed");
    enemy.extraloot = parseInt(localStorage.getItem("enemy.extraloot"));
}

function refreshall() {
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health + "/" + enemy.healthmax + "hp";
    document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
    document.getElementById("experience").innerHTML = "Experience: " + player.experience + "/" + player.experienceneeded + "xp";
    document.getElementById("kills").innerHTML = "Confirmed kills: " + player.kills;
    document.getElementById("deaths").innerHTML = "Deaths: " + player.kills;
    document.getElementById("enemylevel").innerHTML = "Enemylevel: " + enemy.level;
    document.getElementById("reward").innerHTML = "Reward: " + player.experienceperkill + "xp";
    document.getElementById("playerlevel").innerHTML = "Playerlevel: " + player.level;
    document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
    document.getElementById("upgrade1").innerHTML = "+ " + player.extradamage + " dmg<span class='break'>per shot</span><p class='stats upgrade1'>" + costupgr1 + "<img src='img/dog-tag.png' class='price'></p>";
    document.getElementById("upgrade2").innerHTML = "+ " + extradamageovertime + " bleed<span class='break'>damage</span> <p class='stats upgrade2'>" + costupgr2 + " <img src='img/dog-tag.png' class='price'></p>";
    document.getElementById("damageovertime").innerHTML = "Bleed damage: " + damageovertime + " dmg/sec";
    document.getElementById("upgrade3").innerHTML = "+ " + enemy.extraloot + " loot <p class='stats upgrade3'>" + costupgr3 + " <img src='img/dog-tag.png' class='price'></p>";
    document.getElementById("loot").innerHTML = "Loot: " + enemy.loot + "<img src='img/dog-tag.png' class='dogtag-loot'>";
    document.getElementById("upgrade4").innerHTML = "+ " + upgradelvls + " lvls <p class='stats upgrade4'>" + costupgr4 + " <img src='img/dog-tag.png' class='price'></p>";
}

function attack() {
    enemy.health = enemy.health - player.damage;
    animatie();
    if (enemy.health <= 0) {
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health + "/" + enemy.healthmax + "hp";
    save();
}

function death() {
    player.experience = player.experience + player.experienceperkill;
    enemy.experience = enemy.experience + enemy.experienceperdeath;
    enemy.health = enemy.healthmax;
    player.coins = player.coins + enemy.loot;
    player.kills++;
    console.log("Enemy died!");
    document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
    document.getElementById("experience").innerHTML = "Experience: " + player.experience + "/" + player.experienceneeded + "xp";
    document.getElementById("kills").innerHTML = "Confirmed kills: " + player.kills;
    document.getElementById("deaths").innerHTML = "Deaths: " + player.kills;

    if (player.experience >= player.experienceneeded) {
        level();
    }
    if (enemy.experience >= enemy.experienceneeded) {
        enemylevel();
    }
    if (player.coins > 999999999) {
        player.coins = 999999999;
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
    }

    function enemylevel() {
        enemy.level++;
        enemy.healthmax = enemy.healthmax + 50;
        enemy.experience = 0;
        enemy.health = enemy.healthmax;
        enemy.experienceneeded = enemy.experienceneeded + 5;
        player.experienceperkill = player.experienceperkill + 1;
        enemy.experienceperdeath = enemy.experienceperdeath + 1;
        document.getElementById("enemylevel").innerHTML = "Enemylevel: " + enemy.level;
        document.getElementById("reward").innerHTML = "Reward: " + player.experienceperkill + "xp";
    }

    function level() {
        player.level++;
        player.damage++;
        player.experience = 0;
        player.experienceneeded = player.experienceneeded + 5;
        document.getElementById("playerlevel").innerHTML = "Playerlevel: " + player.level;
        document.getElementById("experience").innerHTML = "Experience: " + player.experience + "/" + player.experienceneeded + "xp";
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
        checklvl();
    }
}
function checklvl() {
    if (player.level >= 25 && player.level < 50) {
        document.getElementById("rifle").innerHTML = "Rifle: Type-88";
        document.getElementById("rank").innerHTML = "Rank: Marksman";
        background.src = "img/background2.png";
    }
    if (player.level >= 50 && player.level < 75) {
        document.getElementById("rifle").innerHTML = "Rifle: Fall";
        document.getElementById("rank").innerHTML = "Rank: Marksman Elite";
        background.src = "img/background2.png";
    }
    if (player.level >= 75 && player.level < 100){
        document.getElementById("rifle").innerHTML = "Rifle: M39";
        document.getElementById("rank").innerHTML = "Rank: Marksman Sergeant";
        background.src = "img/background2.png";
    }
    if (player.level >= 100 && player.level < 150) {
        document.getElementById("rifle").innerHTML = "Rifle: Scar-H";
        document.getElementById("rank").innerHTML = "Rank: Sniper";
        background.src = "img/background3.png";
    }
    if (player.level >= 150 && player.level < 200){
        document.getElementById("rifle").innerHTML = "Rifle: SPG1";
        document.getElementById("rank").innerHTML = "Rank: Sniper Elite";
        background.src = "img/background3.png";
    }
    if (player.level >= 200 && player.level < 250){
        document.getElementById("rifle").innerHTML = "Rifle: RSASS";
        document.getElementById("rank").innerHTML = "Rank: Sniper Sergeant";
        background.src = "img/background3.png";
    }
    if (player.level >= 250 && player.level < 300) {
        document.getElementById("rifle").innerHTML = "Rifle: SVD";
        document.getElementById("rank").innerHTML = "Rank: Sharpshooter";
        background.src = "img/background4.png";
    }
    if (player.level >= 300 && player.level < 350){
        document.getElementById("rifle").innerHTML = "Rifle: M110";
        document.getElementById("rank").innerHTML = "Rank: Sharpshooter Elite";
        background.src = "img/background4.png";
    }
    if (player.level >= 350 && player.level < 400){
        document.getElementById("rifle").innerHTML = "Rifle: M2010";
        document.getElementById("rank").innerHTML = "Rank: Sharpshooter Sergeant";
        background.src = "img/background4.png";
    }
    if (player.level >= 400 && player.level < 450){
        document.getElementById("rifle").innerHTML = "Rifle: Gol";
        document.getElementById("rank").innerHTML = "Rank: Spec-Ops Sniper";
        background.src = "img/background5.png";
    }
    if (player.level >= 450 && player.level < 500){
        document.getElementById("rifle").innerHTML = "Rifle: AWM";
        document.getElementById("rank").innerHTML = "Rank: Spec-Ops Sharpshooter";
        background.src = "img/background5.png";
    }
    if (player.level >= 500) {
        document.getElementById("rifle").innerHTML = "Rifle: M98B";
        document.getElementById("rank").innerHTML = "Rank: Deadshot";
        background.src = "img/background6.png";
    }
}

function upgrade1() {
    if (player.coins < costupgr1) {
        alert("to buy this upgrade you need to have " + costupgr1 + " Dogtags");
    } else {
        player.damage = player.damage + player.extradamage;
        player.coins = player.coins - costupgr1;
        player.extradamage = player.extradamage + 15;
        costupgr1 = costupgr1 * 2;
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
        document.getElementById("upgrade1").innerHTML = "+ " + player.extradamage + " dmg<span class='break'>per shot</span><p class='stats upgrade1'>" + costupgr1 + "<img src='img/dog-tag.png' class='price'></p>";
        save();
        if (costupgr1 > 999999999){
            costupgr1 = 999999999;
            document.getElementById("upgrade1").innerHTML = "+ " + player.extradamage + " dmg<span class='break'>per shot</span><p class='stats upgrade1'>" + costupgr1 + "<img src='img/dog-tag.png' class='price'></p>";
        }
    }
}

function upgrade2() {
    if (player.coins < costupgr2) {
        alert("to buy this upgrade you need to have " + costupgr2 + " Dogtags");
    } else {
        player.coins = player.coins - costupgr2;
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        costupgr2 = costupgr2 * 2;
        damageovertime = damageovertime + extradamageovertime;
        extradamageovertime = extradamageovertime + 5;
        document.getElementById("upgrade2").innerHTML = "+ " + extradamageovertime + " bleed<span class='break'>damage</span> <p class='stats upgrade2'>" + costupgr2 + " <img src='img/dog-tag.png' class='price'></p>";
        document.getElementById("damageovertime").innerHTML = "Bleed damage: " + damageovertime + " dmg/sec";
        save();
        if (costupgr2 > 999999999){
            costupgr2 = 999999999;
            document.getElementById("upgrade2").innerHTML = "+ " + extradamageovertime + " bleed<span class='break'>damage</span> <p class='stats upgrade2'>" + costupgr2 + " <img src='img/dog-tag.png' class='price'></p>";
        }
    }
}

function upgrade3() {
    if (player.coins < costupgr3) {
        alert("to buy this upgrade you need to have " + costupgr3 + " Dogtags");
    } else {
        enemy.loot = enemy.loot + enemy.extraloot;
        player.coins = player.coins - costupgr3;
        costupgr3 = costupgr3 * 2;
        enemy.extraloot = enemy.extraloot + 1;
        document.getElementById("upgrade3").innerHTML = "+ " + enemy.extraloot + " loot <p class='stats upgrade3'>" + costupgr3 + " <img src='img/dog-tag.png' class='price'></p>";
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        document.getElementById("loot").innerHTML = "Loot: " + enemy.loot + "<img src='img/dog-tag.png' class='dogtag-loot'>";
        save();
        if (costupgr3 > 999999999){
            costupgr3 = 999999999;
            document.getElementById("upgrade3").innerHTML = "+ " + enemy.extraloot + " loot <p class='stats upgrade3'>" + costupgr3 + " <img src='img/dog-tag.png' class='price'></p>";
        }
    }
}

function upgrade4() {
    if (player.coins < costupgr4) {
        alert("to buy this upgrade you need to have " + costupgr4 + " Dogtags");
    } else {
        player.level = player.level + upgradelvls;
        player.damage = player.damage + upgradelvls;
        player.coins = player.coins - costupgr4;
        costupgr4 = costupgr4 * 2;
        upgradelvls = upgradelvls + 5;
        document.getElementById("upgrade4").innerHTML = "+ " + upgradelvls + " lvls <p class='stats upgrade4'>" + costupgr4 + " <img src='img/dog-tag.png' class='price'></p>";
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        document.getElementById("playerlevel").innerHTML = "Playerlevel: " + player.level;
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
        checklvl();
        save();
        if (costupgr4 > 999999999){
            costupgr4 = 999999999;
            document.getElementById("upgrade4").innerHTML = upgradelvls + " lvl ups <p class='stats upgrade4'>" + costupgr4 + " <img src='img/dog-tag.png' class='price'></p>";
        }
    }
}

function upgradeuitvoer() {
    enemy.health = enemy.health - damageovertime;
    if (enemy.health <= 0) {
        animatie();
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health + "/" + enemy.healthmax + "hp";
    save();
}

function animatie() {
    if (enemy.health > 0) {
        soldier.src = "img/soldier2.png";
        sniper.src = "img/sniper2.png";
        setTimeout(shotsoldier, 100);
        setTimeout(normalsniper, 100);
        clearTimeout(shotsoldier);
        clearTimeout(normalsniper);

    } else {
        attackbtn.disabled = true, setTimeout(attackenable, 1000);
        soldier.src = "img/soldierdied.png", setTimeout(normalsoldier, 1000);
        sniper.src = "img/sniper2.png", setTimeout(normalsniper, 100);
        clearTimeout(normalsoldier);
        clearTimeout(normalsniper);
        clearTimeout(attackenable);
    }
}

function normalsoldier() {
    soldier.src = "img/soldier.png";
}

function normalsniper() {
    sniper.src = "img/sniper.png"
}
function shotsoldier() {
    soldier.src = "img/soldiershot.png";
}
function attackenable() {
    attackbtn.disabled = false;
}

function finish() {
    if (player.level >= 500) {
        if (buttonpressed === false) {
            player.coins = 999999999;
            document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
            alert("have fun with 999999999 dogtags");
            buttonpressed = true;
        }else {
            alert("you can only use this button once");
        }
    } else {
        alert("you need to be level 500 or higher to unlock the easter egg");
    }
}

if (window.innerHeight > window.innerWidth) {
    alert("TIP: this game works best in landscape mode");
}

function submitheighscore() {
    highscore.value = player.kills;
}

function save() {
    localStorage.setItem("player.level", player.level);
    localStorage.setItem("player.damage", player.damage);
    localStorage.setItem("player.experience", player.experience);
    localStorage.setItem("player.coins", player.coins);
    localStorage.setItem("player.kills", player.kills);
    localStorage.setItem("player.experienceneeded", player.experienceneeded);
    localStorage.setItem("player.experienceperkill", player.experienceperkill);
    localStorage.setItem("enemy.level", enemy.level);
    localStorage.setItem("enemy.health", enemy.health);
    localStorage.setItem("enemy.healthmax", enemy.healthmax);
    localStorage.setItem("enemy.experience", enemy.experience);
    localStorage.setItem("enemy.loot", enemy.loot);
    localStorage.setItem("enemy.experienceneeded", enemy.experienceneeded);
    localStorage.setItem("enemy.experienceperdeath", enemy.experienceperdeath);
    localStorage.setItem("damageovertime", damageovertime);
    localStorage.setItem("costupgr1", costupgr1);
    localStorage.setItem("costupgr2", costupgr2);
    localStorage.setItem("costupgr3", costupgr3);
    localStorage.setItem("costupgr4", costupgr4);
    localStorage.setItem("upgradelvls", upgradelvls);
    localStorage.setItem("player.extradamage", player.extradamage);
    localStorage.setItem("extradamageovertime", extradamageovertime);
    localStorage.setItem("buttonpressed", buttonpressed);
    localStorage.setItem("enemy.extraloot", enemy.extraloot);
}
function reset() {
    localStorage.clear();
    location.reload();
}