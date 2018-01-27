-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 20-Maio-2017 às 06:18
-- Versão do servidor: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dev6`
--
CREATE DATABASE IF NOT EXISTS `dev6` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dev6`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa`
--

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE IF NOT EXISTS `empresa` (
  `EMP_INT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `EMP_STR_NOME` varchar(70) NOT NULL,
  `EMP_STR_TEL` varchar(11) NOT NULL,
  `EMP_STR_EMAIL` varchar(70) NOT NULL,
  PRIMARY KEY (`EMP_INT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
CREATE TABLE IF NOT EXISTS `funcionario` (
  `FUN_INT_ID` int(3) NOT NULL AUTO_INCREMENT,
  `FUN_STR_NOME` varchar(50) NOT NULL,
  `FUN_STR_CARGO` varchar(255) NOT NULL,
  `FUN_STR_TEL` varchar(11) NOT NULL,
  `FUN_STR_EMAIL` varchar(70) NOT NULL,
  `FUN_STR_FOTO` varchar(256) NOT NULL,
  PRIMARY KEY (`FUN_INT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `funcionario`
--

INSERT INTO `funcionario` (`FUN_INT_ID`, `FUN_STR_NOME`, `FUN_STR_CARGO`, `FUN_STR_TEL`, `FUN_STR_EMAIL`, `FUN_STR_FOTO`) VALUES
(1, 'Enzo Pietro', 'Desenvolvedor Web', '11970720828', 'enzopietro07@hotmail.com', 'Enzo_Pietro.jpg'),
(2, 'Gabriel Vieira', 'Analista de Sistemas', '11963745416', 'gabriel_palmeiras2000@hotmail.com', 'Gabriel_Vieira.jpg'),
(3, 'Giovanni Torelli', 'CEO e Programador Senior', '11995789368', 'zapushd@gmail.com', 'Giovanni_Torelli.jpg'),
(4, 'Giovany Lawall', 'Analista de Sistemas e Desenvolvedor Web', '11958008933', 'gege129@yahoo.com.br', 'Giovany_Lawall.jpg'),
(5, 'Leonardo Carletti', 'DBA', '11988024265', '', 'Leonardo_Carletti.jpg'),
(6, 'Matheus Monteiro', 'DBA e Programador', '11965854421', 'matheus.monteiro619@gmail.com', 'Matheus_Monteiro.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `redesocial`
--

DROP TABLE IF EXISTS `redesocial`;
CREATE TABLE IF NOT EXISTS `redesocial` (
  `SOC_INT_ID` int(3) NOT NULL AUTO_INCREMENT,
  `FUN_INT_ID` int(3) NOT NULL,
  `SOC_STR_INSTAGRAM` varchar(255) DEFAULT NULL,
  `SOC_STR_FACEBOOK` varchar(255) DEFAULT NULL,
  `SOC_STR_GITHUB` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`SOC_INT_ID`),
  KEY `FUN_INT_ID_FK` (`FUN_INT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `redesocial`
--

INSERT INTO `redesocial` (`SOC_INT_ID`, `FUN_INT_ID`, `SOC_STR_INSTAGRAM`, `SOC_STR_FACEBOOK`, `SOC_STR_GITHUB`) VALUES
(1, 1, NULL, NULL, 'https://github.com/pietro07'),
(2, 3, 'https://www.instagram.com/giovanni_torelli/', NULL, 'https://github.com/Torelli'),
(3, 4, 'https://www.instagram.com/giovany_i/', 'https://facebook.com/giovany.li', NULL),
(4, 2, 'https://www.instagram.com/_bielo_/', 'https://www.facebook.com/gabriel.vnunes', NULL);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `redesocial`
--
ALTER TABLE `redesocial`
  ADD CONSTRAINT `FUN_INT_ID_FK` FOREIGN KEY (`FUN_INT_ID`) REFERENCES `funcionario` (`FUN_INT_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
