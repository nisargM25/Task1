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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(85) NOT NULL,
  `email` varchar(450) NOT NULL,
  `mobile` varchar(800) NOT NULL,
  `password` varchar(800) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Nisarg','nisarg@gmail.com','1234567899','$2a$10$8F5WmBsXGWShRenWwqKiMOSAF.2ctRu0yIpxVdWwRL4nVUvalDm0S'),(4,'Bhavik','bhavik@gmail.com','1234567899','$2a$10$wOHf01oxZFjAr0KRCVlWu.au2zw1lfcZwRl1yKZXVT6Zkj/nGqDPS'),(6,'test123','test@user.com','1234567890','$2a$10$UCYrGoAPifoKINPxrCiVieq3r7x4guO7gBuwiT5jTr4OvyYJSqeEC'),(8,'asda','sdsada@rfff.cgf','7777778888','$2a$10$2WPJhsHAZQzhhBm13ostWuOzaP3UvvmwXtfNlOLXAAbycoAzIFyJe'),(9,'nivedita','nivee@gmail.com','9999999999','$2a$10$aolFPi623Yd5WpTMVTYfBOWQUpOMrI2ljoe7HpwmILGoix0NyGnL.'),(11,'Samik','samik.pandit71@gmail.com','8780202838','$2a$10$deWk2Q37Z9ZAbZi4BgdSHOjMQ1jX5G3Sk0OrwwUZ2pPNaYjipLj2a'),(12,'qa','swaaaaa@qqqqq','1235445234','$2a$10$NIPU8kfgS9M3Xge/4ZBVW.Nt52NEq8Wx01JV58n3aQtEpVItThK2K'),(14,'ABCD','abcd@gmail.com','1234567889','$2a$10$Y6PWCqTtFNHvocXgC8Kuu.Oz2uhC.W97LfgGebjVkxlCZwxYw.Pwa'),(15,'nisarg25','nisarg25@gmail.com','1234567899','$2a$10$714u67.88sF3S0vqgG1gwOrfjGVVSyjNzliaimcQECFPVVzb5o3f2'),(17,'Nisarg2513','mistry@gmail.com','1234567899','$2a$10$8UZpXrGEroAmulv6G0C47epU0Wmm32IAR9PvANTO3BJCmt.kIf1VW'),(18,'aniket','aniketbhatiya@gmail.com','1234567890','$2a$10$fSXH5xdDh13qikgkAR6XcOG4O2gwGquIprkSy/.lRrM/Mt4WmF/YC'),(19,'darsh','darsh.patel@autodap.in','9999999999','$2a$10$wH1QAd4bpc6yApJOQiXuHOJkU3M/TuzY8ctjQomlYe9fUfUCFGdgG'),(20,'parth','parth@gmail.com','7894561230','$2a$10$eU5FGWIvNbzadwyE2Czs6OtpJOo8/vdiueBYqyY25p.Kak/sZJnLO'),(21,'test1234','test@user1.com','1234567890','$2a$10$RQGSv1DWui/zuiZ4EMsDRuE6SV6etbsri.QgIPoFPdf59Cn29aURW'),(22,'Bhavik25','bhavik12@gmail.com','1234567899','$2a$10$S.FnKctFoOFvZxvGcWOSFOBC73kHE/e6YgaoZBpixAHJWptkvdCbe'),(23,'hardi','hardi@gmail.com','7778889999','$2a$10$WiLvdjjfUXa2hEO/JnDuz.9RtAASzpai3x9zoJGJhNphUD.fOcdJ6'),(24,'Sakshi','Sakshi@gmail.com','1234567888','$2a$10$SMAIO2GfXUYu7e4tz10Li.gXMTsibrmfMLZg9Ew/lMU5T6T2GQhWG'),(25,'king','king@gmail.com','1234567890','$2a$10$ePdysFoLBns0AL8LV2fAnOOe/2ZsSRuOOAqf3b7jZFT3Xkq92qZfC');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-29 11:03:20
