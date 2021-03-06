<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>C4M0 leaderboard</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    <link href="../css/style.css" rel="stylesheet">
</head>
<body>
<script src="../javascript/javascript.js" rel="script"></script>
<header>
    <nav class="navbar fixed-top navbar-expand-lg nopadding">
        <div class="container-fluid header">
            <img src="../img/c4m0-logo.png" class="logo-header"><!--image made by Cas Minke -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <img src="../img/hamburger.png" class="change-toggler1" id="toggler-nav">
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../weapons.html">weapons</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../videos.html">video's</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../minigame.html">minigame</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="members.php">members</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../join-c4m0.html">join C4M0</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../rules.html">rules</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../contact.html">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<div class="container-fluid">
    <h1 class="big-title">leaderboard</h1>
</div>
<div class="container-fluid lg-xl-margin-bottom">
    <div class="row nomargin">
        <div class="col-12 col-lg-6 col-xl-6 nopadding">
            <?php
            require_once "c4m0-connect.php";
            $scores = $conn->prepare("select nickname, highscore from game order by highscore desc");

            $scores->execute();

            echo "<table class='table table-bordered table-dark'>";
            echo "<thead>";
            echo "<tr>";
            echo "<th scope='col' class='border-color-table member-th'>nickname:</th>";
            echo "<th scope='col' class='border-color-table member-th'>highscore:</th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";
            foreach ($scores as $score) {
                echo "<tr>";
                echo "<td class='border-color-table'>" . $score["nickname"] . "</td>";
                echo "<td class='border-color-table'>" . $score["highscore"] . " kills</td>";
                echo "</tr>";
            }
            echo "</tbody>";
            echo "</table>";
            ?>
        </div>
        <div class="col-12 col-lg-6 col-xl-6 nopadding hidden-on-mobile-tablet">
            <img src="../img/gamer-zone.png" class="member-img">
        </div>
    </div>
</div>
<div class='container-fluid padding-for-footer'><a href='../minigame.html' class='backhome-btn white-link'>back to
        game</a></div>
<footer>
    <p class="footer-text text-p"><span class="break">CONTACT INFO</span><span
                class="break">mail: info@c4m0.com</span> facebook: <a
                href="https://www.facebook.com/groups/c4m0.group"
                class="white-link" target="_blank">www.facebook.com/groups/c4m0.group</a>
    </p>
    <p class="credits text-p">this website is made by: Cas Minke</p>
</footer>
</body>
</html>