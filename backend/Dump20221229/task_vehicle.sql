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
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `make` varchar(150) NOT NULL,
  `model` varchar(150) NOT NULL,
  `registrationNumber` varchar(450) NOT NULL,
  `dateOfManufacturing` date NOT NULL,
  `miles` varchar(450) NOT NULL,
  `images` varchar(4500) NOT NULL,
  `sellingPriceRange` varchar(4500) NOT NULL,
  `seller_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `registrationNumber_UNIQUE` (`registrationNumber`),
  KEY `seller_id_idx` (`seller_id`),
  CONSTRAINT `seller_id` FOREIGN KEY (`seller_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (12,'Mercedes Benz','S- Class','S CT 2238','2018-10-17','280005','16710987470941.webp','35000',11),(14,'BMW','M340i','M SE 1460','2022-01-13','13000','16710993402193.webp','600000',11),(15,'BMW','3 Series','M YM 1507','2021-04-29','29000','16710994178004.webp','4000000',11),(16,'BMW','X1','M LT 6855','2020-06-18','56000','16711006587605.webp','4100000',1),(17,'Jeep ','Grand Cherokee','M SE 6588','2019-10-25','150000','16711023551636.webp','7000000',11),(18,'Jeep','Meridian','S MB 2053','2019-11-22','95020','16711026427897.webp','2500000',11),(20,'Lamborghini ','Urus Performante','NKT-96489','2022-11-20','36448','1671620349365urus-performante-exterior-right-front-three-quarter-3.webp,1671620349365BackGround.jpg','30000000',1),(27,'skoda','superb','NKT-964','2022-12-01','100000','1672133456208parts-1.jpeg,16721334562156b580c6ec166502f1fb3f4ffa0e75433.jpeg,1672133456218Logo_extra_Praemiensystem_FI_5mm.jpg','2000000',21),(31,'knjkbn','test2','1234567sdfsfs','2022-11-30','11233','1671519257718carbackground.jpg','2500000',25),(34,'bjkabkab','test2','1234567','2022-12-02','11233','167152016192779729969.webp,1671520161928carbackground.jpg,1671520161943p1.png','3500000',25),(38,'skoda','s','nkt789','2022-12-11','10000','1671627519413w-1.jpg','6500000',23),(39,'skoda','s','ttt444','2022-12-02','10000','16716288742542.jfif,16716288742577.jfif,167162887425812.jfif,167162887425913.jfif,1671628874265245851_7.jpg,1671628874288BOSCH_Extra.jpg','7777777777',1),(40,'ford','test2','1234567wee','2022-11-27','11233','1672202503426promises example.png','8000',20);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
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
