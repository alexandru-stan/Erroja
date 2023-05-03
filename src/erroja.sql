-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2023 a las 01:34:37
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `erroja`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `numero_aula` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`numero_aula`) VALUES
('B.1'),
('B.11'),
('B.13'),
('B.2'),
('B.3'),
('B.4'),
('B.5'),
('B.7'),
('B.9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id_departamento` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id_departamento`, `nombre`) VALUES
(1, 'COMERCIO'),
(2, 'SSCC'),
(3, 'INFORMÁTICA'),
(4, 'ACTIVIDADES FÍSICAS Y DEPORTIVAS'),
(5, 'ADMINISTRACIÓN Y GESTIÓN'),
(6, 'ORIENTACIÓN'),
(7, 'ACE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `curso` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `grupo` char(1) NOT NULL,
  `diurno` tinyint(1) NOT NULL,
  `aula` varchar(255) NOT NULL,
  `departamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`curso`, `nombre`, `grupo`, `diurno`, `aula`, `departamento`) VALUES
(1, 'COMERCIO INTERNACIONAL DUAL', 'A', 1, 'B.1', 1),
(1, 'FPB AF', 'A', 1, 'B.2', 4),
(2, 'DAW', 'A', 1, 'B.3', 3),
(2, 'DAM', 'A', 0, 'B.3', 3),
(1, 'AFD', 'A', 1, 'B.4', 4),
(2, 'SMR', 'A', 0, 'B.5', 3),
(1, 'ACEPELU', 'A', 0, 'B.7', 7),
(1, 'ACE MBE', 'A', 0, 'B.9', 7),
(1, 'EI', 'A', 0, 'B.11', 2),
(1, 'APD', 'A', 0, 'B.13', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `id_incidencia` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `aula` varchar(11) NOT NULL,
  `grupo` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `comentarios` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incidencias`
--

INSERT INTO `incidencias` (`id_incidencia`, `tipo`, `aula`, `grupo`, `fecha`, `descripcion`, `estado`, `usuario`, `comentarios`) VALUES
(30, 'Recursos EducaMadrid', 'B.2', '1º-FPB AF A', '2023-03-23', 'AA', 'EN CURSO', 'CTIC', ''),
(31, 'Conectividad', 'B.1', '1º-COMERCIO INTERNACIONAL DUAL A', '2023-03-03', 'afsaf', 'EN CURSO', 'CTIC', ''),
(32, 'Conectividad', 'B.11', '1º-EI A', '2023-03-10', 'asfsaf', 'EN CURSO', 'CTIC', ''),
(33, 'Recursos EducaMadrid', 'B.11', '1º-EI A', '2023-03-23', 'a', 'RESUELTA', 'CTIC', ''),
(34, 'PDI', 'B.2', '1º-FPB AF A', '2023-03-16', 'Nose', 'EN CURSO', 'CTIC', ''),
(47, 'Software', 'B.1', '1º-COMERCIO INTERNACIONAL DUAL A', '2023-03-17', 'AAAA', 'EN CURSO', 'astan', 'llevara un tiempo'),
(48, 'Conectividad', 'B.11', '1º-EI A', '2023-03-10', 'ASDASDASDSA', 'EN CURSO', 'astan', ''),
(49, 'Conectividad', 'B.1', '1º-COMERCIO INTERNACIONAL DUAL A', '2023-03-02', 'asfsafa', 'EN CURSO', 'astan', ''),
(50, 'PDI', 'B.3', '2º-DAM A', '2023-03-29', 'AAAAAAAAAAAAAAAAAA', 'EN CURSO', 'astan', ''),
(51, 'Recursos EducaMadrid', 'B.11', '1º-EI A', '2023-03-30', '<<', 'EN CURSO', 'astan', ''),
(52, 'Conectividad', 'B.11', '1º-EI A', '2023-03-15', 'fasfa', 'EN CURSO', 'astan', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre_usuario` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `depart` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre_usuario`, `nombre`, `apellidos`, `password`, `correo`, `admin`, `depart`) VALUES
('astan', 'Alexandru', 'Stan', 'vstan', 'alexxst56@gmail.com', 0, 2),
('CTIC', 'Alexandru', 'Stan', 'CTICPIO2023', 'alexst567@gmail.com', 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`numero_aula`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id_departamento`);

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`id_incidencia`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`nombre_usuario`),
  ADD KEY `fk_depart` (`depart`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id_departamento` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  MODIFY `id_incidencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_depart` FOREIGN KEY (`depart`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
