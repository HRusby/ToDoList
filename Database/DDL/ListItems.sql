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
