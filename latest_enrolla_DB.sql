CREATE DATABASE  IF NOT EXISTS `enrolla_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `enrolla_app`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: enrolla_app
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `classes sections`
--

DROP TABLE IF EXISTS `classes sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes sections` (
  `Section_ID` int NOT NULL AUTO_INCREMENT,
  `Classes_Section` varchar(45) NOT NULL,
  `Class_Day` json NOT NULL,
  `Class_Start_Time` time NOT NULL,
  `Class_End_Time` time NOT NULL,
  `Mode_Of_Instruction` varchar(45) NOT NULL,
  `student_Student_ID` int DEFAULT NULL,
  `courses_Course_ID` int NOT NULL,
  PRIMARY KEY (`Section_ID`),
  UNIQUE KEY `Section_ID_UNIQUE` (`Section_ID`),
  KEY `fk_classes sections_student1_idx` (`student_Student_ID`),
  KEY `fk_classes sections_courses1_idx` (`courses_Course_ID`),
  CONSTRAINT `fk_classes sections_courses1` FOREIGN KEY (`courses_Course_ID`) REFERENCES `courses` (`Course_Number`),
  CONSTRAINT `fk_classes sections_student1` FOREIGN KEY (`student_Student_ID`) REFERENCES `student` (`Student_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes sections`
--

LOCK TABLES `classes sections` WRITE;
/*!40000 ALTER TABLE `classes sections` DISABLE KEYS */;
INSERT INTO `classes sections` VALUES (1,'ABCD','[1, 3]','14:00:00','15:30:00','ONLINE',NULL,12345),(2,'BMWA','[1, 3]','12:50:00','13:50:00','ONLINE',NULL,23905),(3,'DMWA','[1, 3]','09:05:00','10:30:00','ONLINE',NULL,23905),(4,'LMNP','[1, 3]','11:00:00','12:30:00','ONLINE',NULL,12345),(5,'PTRA','[2, 4]','17:50:00','19:05:00','ONLINE',NULL,23905),(6,'ETRA','[2, 4]','14:30:00','15:45:00','ONLINE',NULL,34789),(7,'FMWA','[1, 3]','16:10:00','17:25:00','ONLINE',NULL,34789),(8,'GMWA','[1, 3]','12:50:00','14:30:00','ONLINE',NULL,45125),(9,'QMWA','[1, 3]','14:30:00','15:45:00','ONLINE',NULL,45125),(10,'URAN','[2, 4]','12:50:00','14:30:00','ONLINE',NULL,67012),(11,'RAWE','[2, 4]','12:50:00','14:30:00','ONLINE',NULL,67012),(12,'FMAI','[6]','14:30:00','15:45:00','ONLINE',NULL,78402),(13,'PFFU','[2, 4]','09:05:00','10:30:00','ONLINE',NULL,78402),(14,'PMWU','[1, 3]','17:50:00','19:05:00','ONLINE',NULL,89897),(15,'WOPI','[2, 4]','08:50:00','10:05:00','ONLINE',NULL,89897),(16,'UMAR','[1, 3]','18:05:00','20:00:00','ONLINE',NULL,90091),(17,'MPAI','[5]','13:15:00','15:00:00','ONLINE',NULL,90091),(18,'WDAN','[1, 3]','12:50:00','14:05:00','ONLINE',NULL,87564),(19,'TRAQ','[2, 4]','16:05:00','18:20:00','ONLINE',NULL,87564),(20,'NETB','[1, 3]','15:10:00','16:50:00','ONLINE',NULL,65201),(21,'FTRA','[5]','08:50:00','10:05:00','ONLINE',NULL,65201),(22,'CTRA','[2, 4]','10:45:00','12:00:00','ONLINE',NULL,54011),(23,'EMWA','[2, 4]','14:30:00','15:45:00','ONLINE',NULL,54011),(24,'MSAM','[7]','11:10:00','14:05:00','INPERSON',NULL,54011),(25,'RUWE','[1, 3]','12:30:00','14:00:00','ONLINE',NULL,96542),(26,'DSAK','[1, 3]','18:00:00','19:30:00','ONLINE',NULL,96542),(27,'RPEW','[1, 3]','16:30:00','18:00:00','ONLINE',NULL,78451),(28,'CMDS','[2, 4]','18:00:00','19:30:00','ONLINE',NULL,78451),(29,'PQMA','[2, 4]','16:30:00','18:00:00','ONLINE',NULL,25487),(30,'IDRM','[5]','12:00:00','13:30:00','ONLINE',NULL,25487);
/*!40000 ALTER TABLE `classes sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `Course_ID` int NOT NULL AUTO_INCREMENT,
  `Course_Name` varchar(45) NOT NULL,
  `Course_Number` int NOT NULL,
  `Required_majors` varchar(45) DEFAULT NULL,
  `Core_Req` tinyint NOT NULL,
  `Credits` smallint NOT NULL,
  `major_Major_ID` int DEFAULT NULL,
  PRIMARY KEY (`Course_ID`),
  UNIQUE KEY `Course_ID_UNIQUE` (`Course_Number`),
  KEY `fk_courses_major1_idx` (`major_Major_ID`),
  CONSTRAINT `fk_courses_major1` FOREIGN KEY (`major_Major_ID`) REFERENCES `major` (`Major_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'CIS2300',12345,'CIS',1,3,1),(2,'CIS3100',23905,'CIS',1,3,1),(3,'CIS3400',34789,'CIS',1,3,1),(4,'CIS4800',45125,'CIS',1,4,1),(5,'PAF3010',67012,'PAF',1,3,2),(6,'PAF3015',78402,'PAF',1,3,2),(7,'PAF3108',89897,'PAF',1,3,2),(8,'PAF3102',90091,'PAF',1,3,2),(9,'ECO3100',87564,'ECO',1,3,3),(10,'ECO3200',65201,'ECO',1,3,3),(11,'ECO4000',54011,'ECO',1,4,3),(12,'ART1000',96542,NULL,0,3,NULL),(13,'HIS1005',78451,NULL,0,3,NULL),(14,'PHI1500',25487,NULL,0,3,NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credentials`
--

DROP TABLE IF EXISTS `credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credentials` (
  `Credentials_ID` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`Credentials_ID`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credentials`
--

LOCK TABLES `credentials` WRITE;
/*!40000 ALTER TABLE `credentials` DISABLE KEYS */;
INSERT INTO `credentials` VALUES (3,'Usaeed','123'),(4,'Jun','456'),(5,'Pranto','741'),(6,'Linny','852'),(7,'Nadeen','963'),(8,'Tcruise','786'),(23,'dasdasa','dasdas'),(27,'test','test');
/*!40000 ALTER TABLE `credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major`
--

DROP TABLE IF EXISTS `major`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `major` (
  `Major_ID` int NOT NULL,
  `Major_Name` varchar(45) NOT NULL,
  `Degree` varchar(45) NOT NULL,
  `Degree_Credit` smallint NOT NULL,
  PRIMARY KEY (`Major_ID`),
  UNIQUE KEY `Major_Name_UNIQUE` (`Major_Name`),
  UNIQUE KEY `Major_ID_UNIQUE` (`Major_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major`
--

LOCK TABLES `major` WRITE;
/*!40000 ALTER TABLE `major` DISABLE KEYS */;
INSERT INTO `major` VALUES (1,'CIS','Bachelor in Business Administration',124),(2,'PAF','Bachelor of Science',120),(3,'ECO','Bachelor of Arts',120);
/*!40000 ALTER TABLE `major` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recommended schedule`
--

DROP TABLE IF EXISTS `recommended schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recommended schedule` (
  `Recommended_Schedule_ID` int NOT NULL AUTO_INCREMENT,
  `Classes` json NOT NULL,
  PRIMARY KEY (`Recommended_Schedule_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recommended schedule`
--

LOCK TABLES `recommended schedule` WRITE;
/*!40000 ALTER TABLE `recommended schedule` DISABLE KEYS */;
INSERT INTO `recommended schedule` VALUES (1,'[12345, 23905, 34789, 45125, 67012]'),(2,'[54011, 65201, 87564]'),(3,'[45125, 67012, 78402]');
/*!40000 ALTER TABLE `recommended schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `Student_ID` int NOT NULL,
  `First_Name` varchar(45) NOT NULL,
  `Last_name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Minor` varchar(45) DEFAULT NULL,
  `Current_Credits` smallint DEFAULT NULL,
  `credentials_Credentials_ID` int DEFAULT NULL,
  `recommended schedule_Recommended_Schedule_ID` int DEFAULT NULL,
  `major_Major_ID` int DEFAULT NULL,
  `student availability_Student_Availability_ID` int DEFAULT NULL,
  `transcript_Transcript_ID` int DEFAULT NULL,
  `course_Preference` json DEFAULT NULL,
  PRIMARY KEY (`Student_ID`),
  UNIQUE KEY `Student_Id_UNIQUE` (`Student_ID`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  KEY `fk_student_credentials1_idx` (`credentials_Credentials_ID`),
  KEY `fk_student_recommended schedule1_idx` (`recommended schedule_Recommended_Schedule_ID`),
  KEY `fk_student_major1_idx` (`major_Major_ID`),
  KEY `fk_student_student availbility1_idx` (`student availability_Student_Availability_ID`),
  KEY `fk_student_transcript1_idx` (`transcript_Transcript_ID`),
  CONSTRAINT `fk_student_credentials1` FOREIGN KEY (`credentials_Credentials_ID`) REFERENCES `credentials` (`Credentials_ID`),
  CONSTRAINT `fk_student_major1` FOREIGN KEY (`major_Major_ID`) REFERENCES `major` (`Major_ID`),
  CONSTRAINT `fk_student_recommended schedule1` FOREIGN KEY (`recommended schedule_Recommended_Schedule_ID`) REFERENCES `recommended schedule` (`Recommended_Schedule_ID`),
  CONSTRAINT `fk_student_student availbility1` FOREIGN KEY (`student availability_Student_Availability_ID`) REFERENCES `student availability` (`Student_Availability_ID`),
  CONSTRAINT `fk_student_transcript1` FOREIGN KEY (`transcript_Transcript_ID`) REFERENCES `transcript` (`Transcript_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (12345678,'Umar','Saeed','omersaeed2@gmail.com','Com',NULL,3,NULL,NULL,1,NULL,'[\"CIS4800\"]'),(32165498,'Jun','Huang','Jun@gmail.com','Psychology',1,4,NULL,2,43,17,'[\"CIS2300\", \"CIS3100\", \"CIS3400\", \"CIS4800\", \"PAF3010\", \"PAF3015\", \"PAF3108\", \"PAF3102\", \"ECO3100\", \"ECO3200\", \"ECO4000\", \"ART1000\", \"HIS1005\", \"PHI1500\"]'),(35789516,'Nadeen','Singh','Singh@yahoo.com','Eng',NULL,7,NULL,NULL,NULL,NULL,NULL),(55447788,'Tom','Cruise','tom@gmail.com','IMF',NULL,8,NULL,NULL,NULL,NULL,NULL),(65487923,'TestFirstName','TestLastName','test@gmail.com','Art',50,27,NULL,1,48,19,'[\"CIS2300\", \"CIS3100\", \"CIS3400\", \"CIS4800\", \"PAF3010\", \"PAF3015\", \"PAF3108\", \"PAF3102\", \"ECO3100\", \"ECO3200\", \"ECO4000\", \"ART1000\", \"HIS1005\", \"PHI1500\"]'),(74185269,'Linny','Ramos','Ramos@outlook.com','HRM',NULL,6,NULL,NULL,NULL,NULL,NULL),(88888888,'dsadasd','asdasdasd','dasdasda',NULL,NULL,23,NULL,NULL,NULL,NULL,NULL),(98745632,'Pranto','Podder','Podder@hotmail.com','POL',NULL,5,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student availability`
--

DROP TABLE IF EXISTS `student availability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student availability` (
  `Student_Availability_ID` int NOT NULL AUTO_INCREMENT,
  `Monday` json DEFAULT NULL,
  `Tuesday` json DEFAULT NULL,
  `Wednesday` json DEFAULT NULL,
  `Thursday` json DEFAULT NULL,
  `Friday` json DEFAULT NULL,
  `Saturday` json DEFAULT NULL,
  `Sunday` json DEFAULT NULL,
  PRIMARY KEY (`Student_Availability_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student availability`
--

LOCK TABLES `student availability` WRITE;
/*!40000 ALTER TABLE `student availability` DISABLE KEYS */;
INSERT INTO `student availability` VALUES (1,'{\"timeslot1\": [10, 14], \"timeslot2\": [15, 17]}',NULL,'{\"timeslot1\": [10, 14], \"timeslot2\": [15, 17]}',NULL,'{\"timeslot3\": [8, 9], \"timeslot4\": [18, 20]}',NULL,'{\"timeslot3\": [8, 9], \"timeslot4\": [18, 20]}'),(43,'{\"end\": \"21:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"21:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"21:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"21:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"21:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{}','{}'),(46,'{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"start\": \"\"}','{}','{}','{}','{}','{}'),(47,'{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{}','{}','{}','{}'),(48,'{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{\"end\": \"19:00\", \"start\": \"09:00\", \"excludingEnd\": \"12:00\", \"excludingStart\": \"11:00\"}','{}','{}','{}');
/*!40000 ALTER TABLE `student availability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transcript`
--

DROP TABLE IF EXISTS `transcript`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transcript` (
  `Transcript_ID` int NOT NULL AUTO_INCREMENT,
  `Taken Classes` json DEFAULT NULL,
  PRIMARY KEY (`Transcript_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transcript`
--

LOCK TABLES `transcript` WRITE;
/*!40000 ALTER TABLE `transcript` DISABLE KEYS */;
INSERT INTO `transcript` VALUES (17,'[\"CIS2300\"]'),(19,'[\"CIS2300\"]');
/*!40000 ALTER TABLE `transcript` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-30 19:10:59
