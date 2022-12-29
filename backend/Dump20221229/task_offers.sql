-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: task
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `offerID` int NOT NULL AUTO_INCREMENT,
  `vehicleID` int NOT NULL,
  `sellerID` int NOT NULL,
  `userID` int NOT NULL,
  `userName` varchar(450) NOT NULL,
  `userEmail` varchar(450) NOT NULL,
  `userContact` varchar(850) NOT NULL,
  `offerByUser` int NOT NULL,
  `bidDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`offerID`),
  KEY `productId_idx` (`vehicleID`),
  KEY `user_idx` (`userID`),
  KEY `sellerId_idx` (`sellerID`),
  CONSTRAINT `sellerId` FOREIGN KEY (`sellerID`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user` FOREIGN KEY (`userID`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vehicleID` FOREIGN KEY (`vehicleID`) REFERENCES `vehicle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (9,40,20,1,'Nisarg','nisarg@gmail.com','1234567899',1000,'2022-12-28 19:44:59'),(10,39,1,20,'parth','parth@gmail.com','7894561230',78888,'2022-12-28 19:48:21'),(11,39,1,20,'parth','parth@gmail.com','7894561230',123456,'2022-12-28 19:53:38'),(12,34,25,20,'parth','parth@gmail.com','7894561230',456789,'2022-12-28 19:53:44'),(13,34,25,20,'parth','parth@gmail.com','7894561230',74444,'2022-12-28 19:53:50'),(14,20,1,20,'parth','parth@gmail.com','7894561230',44444,'2022-12-28 19:53:56'),(15,27,21,1,'Nisarg','nisarg@gmail.com','1234567899',10000,'2022-12-29 10:23:26'),(16,27,21,19,'darsh','darsh.patel@autodap.in','9999999999',67000,'2022-12-29 10:27:38');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-29 11:03:21
