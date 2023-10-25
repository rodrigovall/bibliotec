-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2023 a las 01:10:52
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--
-- Creación: 17-10-2023 a las 22:30:14
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `añopublicacion` date NOT NULL,
  `isbn` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `añopublicacion`, `isbn`) VALUES
(2, 'Las minas del rey Salomon', 'Rider Haggard', 'aventura', '1885-03-11', ' 978019872295'),
(3, 'La vuelta al mundo en 80 dias', 'Julio Verne', 'aventura', '1873-02-10', '9783401717005'),
(4, 'El retrato de Dorian Gray', 'Oscar Wilde', 'drama', '1890-10-05', '9786555980004'),
(5, 'Viaje al centro de la tierra', 'Julio verne', 'aventura', '1864-02-09', '9780758311986'),
(6, 'El corsario negro', 'Emilio Salgari', 'aventura', '1898-02-05', '9788420749181'),
(7, 'Cumbres borrascosas', 'Emily Bronte', 'drama', '1847-12-10', '9780003700862'),
(8, 'La vaca', 'Camilo Cruz', 'autoayuda', '2007-12-04', ' 978193105963'),
(9, 'El hombre mas rico de Babiloni', 'George S. Clason', 'educacion financiera', '1926-01-10', '9781628614725'),
(10, 'Padre pobre padre rico', 'Robert T. Kiyosaki', 'educacion financiera', '2009-01-29', '9780446677455'),
(11, 'Las minas del rey Salomon 2', 'Rider Haggard', 'aventura', '1885-03-11', '9780553095036');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
