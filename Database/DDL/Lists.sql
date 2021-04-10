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
