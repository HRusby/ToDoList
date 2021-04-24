-- MariaDB dump 10.19  Distrib 10.5.9-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: 
-- ------------------------------------------------------
-- Server version	10.5.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ToDoList`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ToDoList` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `ToDoList`;

--
-- Table structure for table `ListItems`
--

DROP TABLE IF EXISTS `ListItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ListItems` (
  `ItemId` int(11) NOT NULL AUTO_INCREMENT,
  `ListId` int(11) DEFAULT NULL,
  `Text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Completed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ItemId`),
  KEY `ListId` (`ListId`),
  CONSTRAINT `ListItems_ibfk_1` FOREIGN KEY (`ListId`) REFERENCES `Lists` (`ListId`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ListItems`
--

LOCK TABLES `ListItems` WRITE;
/*!40000 ALTER TABLE `ListItems` DISABLE KEYS */;
INSERT INTO `ListItems` VALUES (46,11,'sd',0),(48,12,'3',0),(49,12,'12',0);
/*!40000 ALTER TABLE `ListItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lists`
--

DROP TABLE IF EXISTS `Lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Lists` (
  `ListId` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `RelatedGroup` int(11) DEFAULT NULL,
  `ListName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ListId`),
  KEY `RelatedGroup` (`RelatedGroup`),
  KEY `Lists_FK` (`UserId`),
  CONSTRAINT `Lists_FK` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lists`
--

LOCK TABLES `Lists` WRITE;
/*!40000 ALTER TABLE `Lists` DISABLE KEYS */;
INSERT INTO `Lists` VALUES (11,1,NULL,'test2'),(12,1,NULL,'sdwe');
/*!40000 ALTER TABLE `Lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `EncryptedPass` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `LastAccess` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Harry','dfgdf','2021-03-23 18:06:29');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-17 17:17:27
