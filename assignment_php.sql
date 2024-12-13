-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 05:24 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment_php`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `Fname` varchar(100) NOT NULL,
  `Lname` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` varchar(40) NOT NULL,
  `create_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `email`, `Fname`, `Lname`, `password`, `status`, `create_date`) VALUES
(20, 'admin@gmail.com', 'jirapon', 'maithong1', 'admin', 'Admin', '2023-03-21'),
(23, 'nat@gmail.com2', 'Admin', 'Admin', '1f32aa4c9a1d2ea010adcf2348166a04', 'Admin', '2023-03-22'),
(31, 'Admin@gmail.com', 'Admin', 'Admin', '827ccb0eea8a706c4c34a16891f84e7b', 'Admin', '2023-03-22'),
(32, 'n@gmail.com', 'jia', 'mia', '11', 'member', '2023-03-23'),
(34, 'nat1@gmail.com', 'jirapon', 'maithong', '81dc9bdb52d04dc20036dbd8313ed055', 'member', '2023-03-23'),
(35, '63309030003@srvc.ac.th', '่jirapon', 'Maithong', '11', 'member', '2023-03-23'),
(36, 'natnoinotepopo@gmail.com', 'fasf', 'asdf', '81dc9bdb52d04dc20036dbd8313ed055', 'member', '2023-03-23'),
(38, 'nat@gmail.com', 'adf', 'asdf', 'aa', 'member', '2023-03-23'),
(39, 'natnoinotepopo@gmail.com', 'asdf', 'asdf', 'aa', 'member', '2023-03-23'),
(40, 'natnoinotepopo@gmail.com', 'asdf', 'asdf', 'aa', 'member', '2023-03-23'),
(41, 'nat@gmail.com', 'asdf', 'asfd', 'aa', 'member', '2023-03-23'),
(42, 'natnoinotepopo@gmail.com', 'aa', 'aa', '111', 'member', '2024-12-12'),
(43, 'natnoinotepopo@gmail.com', 'ww', 'ww', '11', 'member', '2024-12-12'),
(44, 's6506021421013@email.kmutnb.ac.th', 'dd', 'dd', '33', 'technician', '2024-12-12'),
(45, 's6506021421013@email.kmutnb.ac.th', 'jirapon', 'maithong', '202cb962ac59075b964b07152d234b70', 'Admin', '2024-12-12');

-- --------------------------------------------------------

--
-- Table structure for table `repair`
--

CREATE TABLE `repair` (
  `id` int(11) NOT NULL,
  `receipt_number` varchar(50) NOT NULL,
  `prefix` varchar(50) NOT NULL,
  `Fname` varchar(50) NOT NULL,
  `Lname` varchar(50) NOT NULL,
  `Phone_number` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `Device_name` varchar(100) NOT NULL,
  `cause` varchar(200) NOT NULL,
  `status` varchar(30) NOT NULL,
  `create_date` date NOT NULL DEFAULT current_timestamp(),
  `end_date` varchar(255) NOT NULL,
  `Edit_case` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `repair`
--

INSERT INTO `repair` (`id`, `receipt_number`, `prefix`, `Fname`, `Lname`, `Phone_number`, `email`, `Device_name`, `cause`, `status`, `create_date`, `end_date`, `Edit_case`) VALUES
(51, '2303-062945', 'Mrs', 'jia', 'mia', '0987655444', 'n@gmail.com', 'asdfasf', 'asdfasdf', 'สำเร็จ', '2023-03-23', '2024-12-12', ''),
(52, '2303-063445', 'Mrs', 'jia', 'mia', '0987655444', 'n@gmail.com', 'asdfsadf', 'sdfsdffa', 'สำเร็จ', '2023-03-23', '2024-12-13', ''),
(53, '2303-071932', 'Mrs', 'jia', 'mia', '0987655444', 'n@gmail.com', 'asdf', 'asdf', 'รอดำเนินการ', '2023-03-23', '2024-12-13', 'fff'),
(54, '2303-072117', 'Mrs', 'jia', 'mia', '0987655444', 'n@gmail.com', 'ฟหกด', 'ฟหกด', 'สำเร็จ', '2023-03-23', '2024-12-13', 'eee'),
(55, '2303-081323', 'Mrs', 'jia', 'mia', '0987655444', 'n@gmail.com', 'asf', 'asdf', 'รอดำเนินการ', '2023-03-23', '', ''),
(56, '2303-083709', 'Mrs', 'jirapon', 'maithong', '0839076635', 'nat1@gmail.com', 'com1', 'หน้าจอฟ้า', 'รอดำเนินการ', '2023-03-23', '', ''),
(57, '2303-090319', 'Mrs', '\\u0e48jirapon', 'Maithong', '0987655444', '63309030003@srvc.ac.th', 'jjj', 'คอมดับ', 'สำเร็จ', '2023-03-23', '2023-3-23', 'dfgfgf'),
(58, '2412-133046', 'Mrs', 'jirapon', 'maithong', '0839076635', 's6506021421013@email.kmutnb.ac.th', 'หฟกด', 'หกด', 'รอดำเนินการ', '2024-12-12', '2024-12-13', 'dfgdsfgds'),
(59, '2412-144812', 'Mrs', 'jirapon', 'maithong', '', 's6506021421013@email.kmutnb.ac.th', '', '', 'รอดำเนินการ', '2024-12-12', '2024-12-13', '4fdg'),
(60, '2412-051428', 'Mrs', 'jirapon', 'maithong', '0839076635', 's6506021421013@email.kmutnb.ac.th', 'กดเหกฟด', 'sdfs', 'สำเร็จ', '2024-12-13', '2024-12-13', 'ee');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `repair`
--
ALTER TABLE `repair`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `receipt_number` (`receipt_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `repair`
--
ALTER TABLE `repair`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
