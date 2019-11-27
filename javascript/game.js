var player = {level: 1, damage: 10, experience: 0, coins: 0, kills: 0, extracoins: 0, experienceneeded: 100, experienceperkill: 25};
var enemy = {level: 1, health: 100, healthmax: 100, experience: 0, loot: 1, experienceneeded: 100, experienceperdeath: 25};
var damageovertime = 0;
var costupgr1 = 5;
var costupgr2 = 10;
var costupgr3 = 15;
var costupgr4 = 30;


function attack() {
    enemy.health = enemy.health - player.damage;
    animatie();
    if (enemy.health <= 0) {
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health + "/" + enemy.healthmax + "hp";
}

function death() {
    player.experience = player.experience + player.experienceperkill;
    enemy.experience = enemy.experience + enemy.experienceperdeath;
    enemy.health = enemy.healthmax;
    player.coins = player.coins + 1 + player.extracoins;
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
        document.getElementById("reward").innerHTML = "Reward: " + player.experienceperkill + "xp"

    }

    function level() {
        player.level++;
        player.damage++;
        player.experience = 0;
        player.experienceneeded = player.experienceneeded + 5;
        document.getElementById("playerlevel").innerHTML = "Playerlevel: " + player.level;
        document.getElementById("experience").innerHTML = "Experience: " + player.experience + "/" + player.experienceneeded + "xp";
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;

        if (player.level === 20) {
            document.getElementById("rifle").innerHTML = "Rifle: S.V.D";
            document.getElementById("rank").innerHTML = "Rank: Ranger";
        }
        if (player.level === 50) {
            document.getElementById("rifle").innerHTML = "Rifle: Scar-H";
            document.getElementById("rank").innerHTML = "Rank: Marksman";
        }
        if (player.level === 100) {
            document.getElementById("rifle").innerHTML = "Rifle: M40A5";
            document.getElementById("rank").innerHTML = "Rank: Sniper";
        }
        if (player.level === 250) {
            document.getElementById("rifle").innerHTML = "Rifle: A.W.M";
            document.getElementById("rank").innerHTML = "Rank: Sharpshooter";
        }
        if (player.level === 500) {
            document.getElementById("rifle").innerHTML = "Rifle: Barret .50 Call";
            document.getElementById("rank").innerHTML = "Rank: Special Forces Sharpshooter";
        }
    }
}

function upgrade1() {
    if (player.coins < costupgr1) {
        alert("to buy this upgrade you need to have " + costupgr1 + " Dogtags");
    } else {
        player.damage++;
        player.coins = player.coins - costupgr1;
        costupgr1 = costupgr1 * 2;
        document.getElementById("upgrade1").innerHTML = costupgr1 + " <img src='img/dog-tag.png' class='price'>";
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
    }
}

function upgrade2() {
    if (player.coins < costupgr2) {
        alert("to buy this upgrade you need to have " + costupgr2 + " Dogtags");
    } else {
        player.coins = player.coins - costupgr2;
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        costupgr2 = costupgr2 * 2;
        damageovertime++;
        document.getElementById("upgrade2").innerHTML = costupgr2 + " <img src='img/dog-tag.png' class='price'>";
        document.getElementById("damageovertime").innerHTML = "Bleed damage: " + damageovertime + " dmg/sec";
        var timer = setInterval(upgradeuitvoer, 1000);
    }
}

function upgrade3() {
    if (player.coins < costupgr3) {
        alert("to buy this upgrade you need to have " + costupgr3 + " Dogtags");
    } else {
        player.extracoins++;
        enemy.loot++;
        player.coins = player.coins - costupgr3;
        costupgr3 = costupgr3 * 2;
        document.getElementById("upgrade3").innerHTML = costupgr3 + " <img src='img/dog-tag.png' class='price'>";
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        document.getElementById("loot").innerHTML = "Loot: " + enemy.loot + "<img src='img/dog-tag.png' class='dogtag-loot'>"
    }
}

function upgrade4() {
    if (player.coins < costupgr4) {
        alert("to buy this upgrade you need to have " + costupgr4 + " Dogtags");
    } else {
        player.level = player.level + 5;
        player.damage = player.damage + 5;
        player.coins = player.coins - costupgr4;
        costupgr4 = costupgr4 * 2;
        document.getElementById("upgrade4").innerHTML = costupgr4 + " <img src='img/dog-tag.png' class='price'>";
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        document.getElementById("playerlevel").innerHTML = "Playerlevel: " + player.level;
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
    }
}

function upgradeuitvoer() {
    enemy.health = enemy.health - 1;
    if (enemy.health <= 0) {
        animatie();
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health + "/" + enemy.healthmax + "hp";
}

function animatie() {
    if (enemy.health > 0) {
        soldier.src = "img/soldier2.png";
        sniper.src = "img/sniper2.png";
        setTimeout(normalsoldier, 100);
        setTimeout(normalsniper, 100);
        clearTimeout(normalsoldier);
        clearTimeout(normalsniper);

    } else {
        soldier.src = "img/soldierdied.png", setTimeout(normalsoldier, 1000);
        sniper.src = "img/sniper2.png", setTimeout(normalsniper, 100);
        clearTimeout(normalsoldier);
        clearTimeout(normalsniper);
    }
}

function normalsoldier() {
    soldier.src = "img/soldier.png";
}

function normalsniper() {
    sniper.src = "img/sniper.png"
}

function finish() {
    if (player.level >= 500) {
        player.coins = 999999999;
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        alert("have fun with 999999999 dogtags");
    } else {
        alert("you need to be level 500 or higher to unlock the easter egg");
    }
}

if (window.innerHeight > window.innerWidth) {
    alert("TIP: this game works best in landscape mode");
}