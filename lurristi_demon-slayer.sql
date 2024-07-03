-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-lurristi.alwaysdata.net
-- Generation Time: Jul 03, 2024 at 03:37 PM
-- Server version: 10.11.8-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lurristi_demon-slayer`
--

-- --------------------------------------------------------

--
-- Table structure for table `fan_art`
--

CREATE TABLE `fan_art` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `personaje_id` int(11) DEFAULT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fan_art`
--

INSERT INTO `fan_art` (`id`, `usuario_id`, `personaje_id`, `fecha`, `imagen`) VALUES
(16, 27, 1, '2024-07-03', '1719978140363.jpeg'),
(17, 28, 1, '2024-07-03', '1719978160992.jpg'),
(18, 29, 2, '2024-07-03', '1719978220455.jpeg'),
(19, 30, 2, '2024-07-03', '1719978233555.jpeg'),
(21, 32, 2, '2024-07-03', '1719978266966.jpg'),
(22, 33, 2, '2024-07-03', '1719978286334.jpeg'),
(24, 35, 2, '2024-07-03', '1719978317420.jpeg'),
(25, 36, 2, '2024-07-03', '1719978360763.jpeg'),
(26, 37, 4, '2024-07-03', '1719978561553.jpeg'),
(27, 39, 4, '2024-07-03', '1719978710330.jpg'),
(28, 40, 4, '2024-07-03', '1719978732523.jpeg'),
(29, 41, 4, '2024-07-03', '1719978754634.jpeg'),
(30, 42, 8, '2024-07-03', '1719978835000.jpeg'),
(31, 43, 8, '2024-07-03', '1719978851539.jpeg'),
(32, 44, 8, '2024-07-03', '1719978877491.jpeg'),
(33, 45, 8, '2024-07-03', '1719978891766.jpeg'),
(34, 46, 12, '2024-07-03', '1719978919897.jpeg'),
(35, 47, 12, '2024-07-03', '1719978929402.jpeg'),
(36, 48, 12, '2024-07-03', '1719978956130.jpeg'),
(37, 49, 12, '2024-07-03', '1719979003741.jpeg'),
(38, 50, 4, '2024-07-03', '1719979213324.jpeg'),
(39, 51, 10, '2024-07-03', '1719979257875.jpeg'),
(40, 52, 10, '2024-07-03', '1719979283316.jpeg'),
(41, 53, 10, '2024-07-03', '1719979294658.jpeg'),
(42, 55, 5, '2024-07-03', '1719979389121.jpeg'),
(43, 56, 6, '2024-07-03', '1719979455473.jpeg'),
(45, 58, 6, '2024-07-03', '1719979830792.jpeg'),
(46, 59, 7, '2024-07-03', '1719979879722.jpeg'),
(47, 60, 7, '2024-07-03', '1719979908270.jpeg'),
(48, 61, 3, '2024-07-03', '1719979946536.jpeg'),
(49, 62, 13, '2024-07-03', '1719979995662.jpeg'),
(50, 63, 13, '2024-07-03', '1719980017130.jpeg'),
(52, 65, 13, '2024-07-03', '1719980065988.jpeg'),
(53, 67, 11, '2024-07-03', '1719981549612.jpg'),
(54, 68, 11, '2024-07-03', '1719981578954.jpeg'),
(55, 69, 11, '2024-07-03', '1719981594052.jpeg'),
(56, 70, 5, '2024-07-03', '1719981641324.jpeg'),
(57, 71, 5, '2024-07-03', '1719981723515.jpeg'),
(58, 72, 5, '2024-07-03', '1719981758012.jpeg'),
(59, 73, 9, '2024-07-03', '1719981800303.jpeg'),
(60, 74, 9, '2024-07-03', '1719981838260.jpeg'),
(61, 75, 9, '2024-07-03', '1719981872410.jpeg'),
(62, 76, 9, '2024-07-03', '1719981944962.jpeg'),
(63, 77, 11, '2024-07-03', '1719981958836.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `personaje`
--

CREATE TABLE `personaje` (
  `id` int(11) NOT NULL,
  `pjnombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personaje`
--

INSERT INTO `personaje` (`id`, `pjnombre`) VALUES
(1, 'tanjiro'),
(2, 'nezuko'),
(3, 'zenitsu'),
(4, 'inosuke'),
(5, 'giyuu'),
(6, 'muzan'),
(7, 'kagaya'),
(8, 'gyomei'),
(9, 'mitsuri'),
(10, 'obanai'),
(11, 'shinobu'),
(12, 'tengen'),
(13, 'tokito');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `turno` varchar(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `fanArt` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `turno`, `edad`, `fanArt`) VALUES
(13, 'test2', 'test2', 'test2@demonslayer.com', 'noche', 5, 0),
(14, 'test3', 'test3', 'test3@demonslayer.com', 'noche', 15, 0),
(27, 'Lucía', 'pérez', 'test@test.com', 'noche', 18, 1),
(28, 'Juan', 'pérez', 'test@test.com', 'noche', 23, 1),
(29, 'Romina', 'valette', 'test@test.com', 'noche', 32, 1),
(30, 'Romina', 'valette', 'test@test.com', 'noche', 32, 1),
(32, 'La fan de su', 'valette', 'test@test.com', 'noche', 32, 1),
(33, 'La fan de su', 'valette', 'test@test.com', 'noche', 55, 1),
(35, 'noélia', 'pompa', 'test@test.com', 'noche', 55, 1),
(36, 'noélia', 'pompa', 'test@test.com', 'noche', 55, 1),
(37, 'Micaela', 'pompa', 'test@test.com', 'tarde', 32, 1),
(38, 'Olivia', 'Paez', 'asd@demonslayer.com', 'mañana', 16, 0),
(39, 'Sol', 'Perez', 'test@test.com', 'tarde', 31, 1),
(40, 'tini', 'tini', 'test@test.com', 'tarde', 31, 1),
(41, 'Juliana', 'awada', 'test@test.com', 'tarde', 40, 1),
(42, 'Liliana', 'perez', 'test@test.com', 'tarde', 40, 1),
(43, 'Luciano', 'perez', 'test@test.com', 'tarde', 23, 1),
(44, 'Joaquin', 'sosa', 'test@test.com', 'tarde', 23, 1),
(45, 'Joaquin', 'sosa', 'test@test.com', 'tarde', 23, 1),
(46, 'Facundo', 'pereira', 'test@test.com', 'tarde', 25, 1),
(47, 'Facundo', 'pereira', 'test@test.com', 'tarde', 25, 1),
(48, 'Ariana', 'grande', 'test@test.com', 'mañana', 32, 1),
(49, 'Conan', 'notá', 'test@test.com', 'mañana', 32, 1),
(50, 'Cristina', 'pereira', 'test@test.com', 'noche', 52, 1),
(51, 'Julian', 'alvarez', 'test@test.com', 'mañana', 22, 1),
(52, 'kuzko', 'alvarez', 'test@test.com', 'mañana', 22, 1),
(53, 'delfina', 'paz', 'test@test.com', 'mañana', 22, 1),
(54, 'Olivia', 'Perez', 'oliP@demonslayer.com', 'mañana', 16, 1),
(55, 'anselmina', 'juarez', 'test@test.com', 'mañana', 72, 1),
(56, 'Conan', 'notá', 'test@test.com', 'mañana', 14, 1),
(58, 'natalia', 'belen', 'test@test.com', 'noche', 39, 1),
(59, 'Jean', 'Paul', 'test@test.com', 'noche', 18, 1),
(60, 'Paul', 'Jean', 'test@test.com', 'noche', 18, 1),
(61, 'Hina', 'ta', 'test@test.com', 'noche', 19, 1),
(62, 'Sergio', 'lipa', 'test@test.com', 'noche', 39, 1),
(63, 'Malena', 'quinta', 'test@test.com', 'noche', 20, 1),
(65, 'Gonzalo', 'barón', 'test@test.com', 'tarde', 24, 1),
(66, 'Olivia', 'Perez', 'op@ds.com', 'tarde', 16, 1),
(67, 'Olivia', 'Perez', 'op@ds.com', 'tarde', 16, 1),
(68, 'Olivia', 'Perez', 'op@ds.com', 'tarde', 16, 1),
(69, 'Olivia', 'Perez', 'op@ds.com', 'tarde', 16, 1),
(70, 'Catalina', 'Ortega', 'cortega@ds.com', 'noche', 25, 1),
(71, 'Lautaro', 'Lorez', 'doblel@ds.com', 'noche', 25, 1),
(72, 'Lautaro', 'Lorez', 'doblel@ds.com', 'noche', 25, 1),
(73, 'Griselda', 'Peñaloza', 'GP@ds.com', 'tarde', 30, 1),
(74, 'Hermenegilda', 'Paz', 'HP@ds.com', 'tarde', 50, 1),
(75, 'Hermenegilda', 'Paz', 'HP@ds.com', 'tarde', 50, 1),
(76, 'Blas', 'Blas', 'BB@ds.com', 'mañana', 28, 1),
(77, 'Blas', 'Blas', 'BB@ds.com', 'mañana', 28, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fan_art`
--
ALTER TABLE `fan_art`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fan_art_ibfk_1` (`usuario_id`),
  ADD KEY `fan_art_ibfk_2` (`personaje_id`);

--
-- Indexes for table `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fan_art`
--
ALTER TABLE `fan_art`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fan_art`
--
ALTER TABLE `fan_art`
  ADD CONSTRAINT `fan_art_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fan_art_ibfk_2` FOREIGN KEY (`personaje_id`) REFERENCES `personaje` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
