-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2023 at 08:22 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bepractical`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_details`
--

CREATE TABLE `account_details` (
  `Id` int(100) NOT NULL,
  `Account_Type` varchar(100) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Account_Plan` varchar(100) NOT NULL,
  `Team_Size` int(100) NOT NULL,
  `Address` text NOT NULL,
  `Mobile` varchar(50) NOT NULL,
  `Business_Type` varchar(100) NOT NULL,
  `Document_Type` varchar(100) NOT NULL,
  `Document_Number` varchar(50) NOT NULL,
  `Document_Location` varchar(255) NOT NULL,
  `Name_On_Card` varchar(100) NOT NULL,
  `Card_Type` varchar(50) NOT NULL,
  `Card_Number` varchar(100) NOT NULL,
  `Expire_Date` varchar(10) NOT NULL,
  `isVerified` varchar(10) DEFAULT NULL,
  `registerToken` varchar(255) DEFAULT NULL,
  `Plan_Validity` varchar(100) NOT NULL,
  `Plan_Price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account_details`
--

INSERT INTO `account_details` (`Id`, `Account_Type`, `Name`, `Email`, `Image`, `Password`, `Account_Plan`, `Team_Size`, `Address`, `Mobile`, `Business_Type`, `Document_Type`, `Document_Number`, `Document_Location`, `Name_On_Card`, `Card_Type`, `Card_Number`, `Expire_Date`, `isVerified`, `registerToken`, `Plan_Validity`, `Plan_Price`) VALUES
(9, 'Personal Account', 'Max Smith', 'max@kt.com', 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg', '$2a$10$3/7854iXWiF8hJy/Dxxsue6UoP/ME/IL3sT3vRpaPzOeFcKVknCc2', 'Developer', 1, 'SF, Bay Area', '8660822483', 'null', 'Aadhar', '12354566854', 'my_adhar.pdf', 'Morcus Morris', 'Visa', '****1290', '09/24', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heEBrdC5jb20iLCJwYXNzd29yZCI6Im1heDEyMyIsImlhdCI6MTY3NDE5ODM1MSwiZXhwIjoxNjc0MTk4OTUxfQ.O7iEPbOm0XM9PSfcIhvKixZZlitKEbAswJ_-qqT-yqY', 'Dec 09, 2022', 24.99);

-- --------------------------------------------------------

--
-- Table structure for table `billing_address`
--

CREATE TABLE `billing_address` (
  `Id` int(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Address_Name` varchar(50) NOT NULL,
  `street` varchar(200) NOT NULL,
  `city` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `billing_address`
--

INSERT INTO `billing_address` (`Id`, `Email`, `Address_Name`, `street`, `city`, `country`) VALUES
(1, 'max@kt.com', 'Address 1', 'Ap #285U7193 Ullamcorper Avenue', 'Amesbury HI 93373', 'US'),
(2, 'max@kt.com', 'Address 2', 'Ap #285U7193 Ullamcorper Avenue', 'Amesbury HI 93373', 'US'),
(3, 'max@kt.com', 'Address 3', 'Ap #285U7193 Ullamcorper Avenue', 'Amesbury HI 93373', 'US');

-- --------------------------------------------------------

--
-- Table structure for table `billing_history`
--

CREATE TABLE `billing_history` (
  `Id` int(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Date` varchar(100) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `Amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `billing_history`
--

INSERT INTO `billing_history` (`Id`, `Email`, `Date`, `Description`, `Amount`) VALUES
(1, 'max@kt.com', 'Nov 01, 2020', 'Invoice for October 2022', 123.79),
(2, 'max@kt.com', 'Oct 08, 2020', 'Invoice for September 2022', 98.03),
(3, 'max@kt.com', 'Aug 24, 2020', 'Paypal', 35.07),
(4, 'max@kt.com', 'Aug 01, 2020', 'Invoice for July 2022', 142.8),
(5, 'max@kt.com', 'Jul 01, 2020', 'Invoice for June 2022', 123.09),
(6, 'max@kt.com', 'Jun 17, 2020', 'Paypal', 523.09),
(7, 'max@kt.com', 'Jun 01, 2020', 'Invoice for May2022', 123.79);

-- --------------------------------------------------------

--
-- Table structure for table `my_cards`
--

CREATE TABLE `my_cards` (
  `Id` int(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Name_On_Card` varchar(255) NOT NULL,
  `Card_Type` varchar(50) NOT NULL,
  `Card_Number` varchar(50) NOT NULL,
  `Expire_Date` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `my_cards`
--

INSERT INTO `my_cards` (`Id`, `Email`, `Name_On_Card`, `Card_Type`, `Card_Number`, `Expire_Date`) VALUES
(1, 'max@kt.com', 'Morcus Morris', 'Visa', '80251290', '09/24'),
(2, 'max@kt.com', 'Jaccob Holder', 'Mastercard', '20652040', '10/22'),
(3, 'max@kt.com', 'Jhon Larson', 'Mastercard', '20651280', '03/23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_details`
--
ALTER TABLE `account_details`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `billing_address`
--
ALTER TABLE `billing_address`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `billing_history`
--
ALTER TABLE `billing_history`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `my_cards`
--
ALTER TABLE `my_cards`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_details`
--
ALTER TABLE `account_details`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `billing_address`
--
ALTER TABLE `billing_address`
  MODIFY `Id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `billing_history`
--
ALTER TABLE `billing_history`
  MODIFY `Id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `my_cards`
--
ALTER TABLE `my_cards`
  MODIFY `Id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
