-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 17 dec 2019 om 14:20
-- Serverversie: 10.4.8-MariaDB
-- PHP-versie: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c4m0`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `highscore` int(11) NOT NULL,
  `nickname` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `game`
--

INSERT INTO `game` (`id`, `highscore`, `nickname`) VALUES
(1, 10338, 'Cas-Minke'),
(2, 13, 'test2'),
(3, 11, 'test'),
(4, 28, 'test4'),
(5, 3, 'test3');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `gameaccount`
--

CREATE TABLE `gameaccount` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `gameaccount`
--

INSERT INTO `gameaccount` (`id`, `username`, `password`) VALUES
(1, 'Cas-Minke', '09f27a3c70fd59529f75f3127f8be767'),
(2, 'test', '098f6bcd4621d373cade4e832627b4f6'),
(3, 'test2', 'ad0234829205b9033196ba818f7a872b'),
(4, 'test3', '8ad8757baa8564dc136c1e07507f4a98'),
(5, 'test4', '86985e105f79b95d6bc918fb45ec7727');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(1, 'casminke', '09f27a3c70fd59529f75f3127f8be767'),
(2, 'test', '098f6bcd4621d373cade4e832627b4f6');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `nickname` varchar(45) NOT NULL,
  `discord` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `members`
--

INSERT INTO `members` (`id`, `nickname`, `discord`, `email`) VALUES
(1, 'Cas Minke', 'Cas-Minke#8607', 'casminke@gmail.com'),
(2, 'bert johanes', 'ernie12#2407', 'b.johanes@ernie.com'),
(3, 'jan jansen', 'jansensen#1203', 'jansen@jansen.com'),
(4, 'hans kazan', 'magic14#0007', 'h.kazan@magic.com');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `question` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `messages`
--

INSERT INTO `messages` (`id`, `contact`, `email`, `question`) VALUES
(1, 'Cas Minke', 'casminke@gmail.com', 'this is a test message'),
(2, 'test the tester', 'test@test.com', 'this is a test message again'),
(3, 'tester the tester', 'test2@test.com', 'this is the 3th test message'),
(4, 'tester the test', 'test3@test.com', 'this is the 4th test message'),
(5, 'tester', 'test4@test.com', 'this test is for max amount of characters adwadawdawdwadwadwadadawdawdawdwadawdwadwadawdaaaaaaaaaadddwasdwadsawdaswdasdawdasawdsawdasdsaaaaaaaaaaaaaaawwwwwwwwwwwwwwwddddddddddddddddddssssssssssssssssssssaaaaaaaaaaaaaaaaaaaawwwwwwwwwwwwwwwwwwwwddddddd');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `gameaccount`
--
ALTER TABLE `gameaccount`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT voor een tabel `gameaccount`
--
ALTER TABLE `gameaccount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT voor een tabel `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT voor een tabel `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
