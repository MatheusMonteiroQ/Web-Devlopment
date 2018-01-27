-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 25-Ago-2016 às 06:32
-- Versão do servidor: 5.6.19
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `etec`
--
CREATE DATABASE IF NOT EXISTS `etec` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `etec`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_alunos`
--

CREATE TABLE IF NOT EXISTS `tbl_alunos` (
  `id_tbl_alunos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_tbl_alunos` varchar(100) NOT NULL,
  `ra_tbl_alunos` int(11) NOT NULL,
  `username_tbl_alunos` varchar(15) NOT NULL,
  `pass_tbl_alunos` varchar(8) NOT NULL,
  PRIMARY KEY (`id_tbl_alunos`),
  UNIQUE KEY `ra_tbl_alunos` (`ra_tbl_alunos`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `tbl_alunos`
--

INSERT INTO `tbl_alunos` (`id_tbl_alunos`, `nome_tbl_alunos`, `ra_tbl_alunos`, `username_tbl_alunos`, `pass_tbl_alunos`) VALUES
(1, 'Torelei Toreleissom', 20162016, 'toro', '123456'),
(2, 'Bielo Visk', 20182018, 'Bilau', '54321'),
(3, 'Pietrao Artesanais', 20152015, 'Viadao', '242424'),
(4, 'Hartao da Massa', 54321, 'Hartine', 'mtoamor');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
