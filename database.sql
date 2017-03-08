SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `restful_api_demo` DEFAULT CHARACTER SET latin1 ;
USE `restful_api_demo` ;

-- -----------------------------------------------------
-- Table `restful_api_demo`.`email`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `restful_api_demo`.`email` ;

CREATE TABLE IF NOT EXISTS `restful_api_demo`.`email` (
  `email_id` INT(70) NOT NULL AUTO_INCREMENT,
  `email_from` VARCHAR(45) NOT NULL,
  `email_to` VARCHAR(45) NOT NULL,
  `email_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  'message' TEXT NULL,
  PRIMARY KEY (`email_id`))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;