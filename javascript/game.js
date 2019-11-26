var player = {level: 1, damage: 10, experience: 0, coins: 0, kills: 0};
var enemy = {level: 1, health: 100};
var damageovertime = 0;
var costupgr1 = 5;
var costupgr2 = 10;

function attack(){
    enemy.health = enemy.health - player.damage;
    animatie();
    if (enemy.health <= 0){
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health;
}
function death(){
    player.experience = player.experience + 25;
    enemy.health = 100;
    player.coins++;
    player.kills++;
    console.log("Enemy died!");
    document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
    document.getElementById("experience").innerHTML = "Experience: " + player.experience;
    document.getElementById("kills").innerHTML = "Confirmed kills: " + player.kills;
    document.getElementById("deaths").innerHTML = "Deaths: " + player.kills;

    if(player.experience === 100){
        level();
    }
    function level() {
        player.level++;
        player.experience = 0;
        document.getElementById("playerlevel").innerHTML = "Playerlevel: " + player.level;
        document.getElementById("experience").innerHTML = "Experience: " + player.experience;

        if(player.level === 20){
            document.getElementById("rifle").innerHTML = "Rifle: S.V.D";
            document.getElementById("rank").innerHTML = "Rank: Ranger";
        }
        if(player.level === 50){
            document.getElementById("rifle").innerHTML = "Rifle: Scar-H";
            document.getElementById("rank").innerHTML = "Rank: Marksman";
        }
        if(player.level === 100){
            document.getElementById("rifle").innerHTML = "Rifle: M40A5";
            document.getElementById("rank").innerHTML = "Rank: Sniper";
        }
        if(player.level === 250){
            document.getElementById("rifle").innerHTML = "Rifle: A.W.M";
            document.getElementById("rank").innerHTML = "Rank: Sharpshooter";
        }
        if(player.level === 500){
            document.getElementById("rifle").innerHTML = "Rifle: Barret .50 Call";
            document.getElementById("rank").innerHTML = "Rank: Special Forces Sharpshooter";
        }
    }
}
function upgrade1() {
    if(player.coins < costupgr1){
        alert("to buy this upgrade you need to have " + costupgr1 + " Dogtags");
    }else {
        player.damage++;
        player.coins = player.coins - costupgr1;
        costupgr1 = costupgr1 + 5;
        document.getElementById("upgrade1").innerHTML = costupgr1 + " <img src='img/dog-tag.png' class='price'>";
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
    }
}
function upgrade2(){
    if(player.coins < costupgr2){
        alert("to buy this upgrade you need to have " + costupgr2 + " Dogtags");
    }else {
        player.coins = player.coins - costupgr2;
        document.getElementById("coins").innerHTML = player.coins + "<img src='img/dog-tag.png' class='dogtag-currency'>";
        costupgr2 = costupgr2 + 10;
        damageovertime++;
        document.getElementById("upgrade2").innerHTML = costupgr2 + " <img src='img/dog-tag.png' class='price'>";
        document.getElementById("damageovertime").innerHTML = "Bleed damage: LVL " + damageovertime;
        var timer = setInterval(upgradeuitvoer, 1000);
    }
}
function upgradeuitvoer() {
    enemy.health = enemy.health - 1;
    if(enemy.health <= 0){
        animatie();
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health;
}
function animatie() {
    if (enemy.health > 0) {
        soldier.src = "img/soldier2.png";
        sniper.src = "img/sniper2.png";
        setTimeout(normalsoldier, 100);
        setTimeout(normalsniper, 100);
        clearTimeout(normalsoldier);
        clearTimeout(normalsniper);

    }else {
        soldier.src = "img/soldierdied.png", setTimeout(normalsoldier,1000);
        sniper.src = "img/sniper2.png",setTimeout(normalsniper,100);
        clearTimeout(normalsoldier);
        clearTimeout(normalsniper);
    }
}

function normalsoldier() {
    soldier.src = "img/soldier.png";
}

function normalsniper(){
    sniper.src = "img/sniper.png"
}