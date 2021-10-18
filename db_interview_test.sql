-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 18, 2021 at 06:28 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_interview_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `pinjam_barang`
--

DROP TABLE IF EXISTS `pinjam_barang`;
CREATE TABLE IF NOT EXISTS `pinjam_barang` (
  `pinjamId` int(11) NOT NULL AUTO_INCREMENT,
  `nama_peminjam` varchar(255) NOT NULL,
  `barang_dipinjam` varchar(255) NOT NULL,
  PRIMARY KEY (`pinjamId`)
) ENGINE=MyISAM AUTO_INCREMENT=78 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pinjam_barang`
--

INSERT INTO `pinjam_barang` (`pinjamId`, `nama_peminjam`, `barang_dipinjam`) VALUES
(1, 'Pak Budi', 'Pisau'),
(2, 'Bu Siti', 'Ember Besar'),
(4, 'Pak Andi', 'Blender'),
(5, 'Pak Agus', 'piring'),
(77, 'Bu Dani', 'Gelas dua');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
