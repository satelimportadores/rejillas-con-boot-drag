/*
Navicat MySQL Data Transfer

Source Server         : satelimp_test
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : restaurapp

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-05-05 15:26:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `restaurapp_design_table`
-- ----------------------------
DROP TABLE IF EXISTS `restaurapp_design_table`;
CREATE TABLE `restaurapp_design_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_restaurante` int(11) NOT NULL,
  `id_mesa` int(11) NOT NULL,
  `id_td` int(11) NOT NULL,
  `nombre_mesa` varchar(50) DEFAULT NULL,
  `descripcion_mesa` text,
  `cant_sillas_mesa` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of restaurapp_design_table
-- ----------------------------
INSERT INTO `restaurapp_design_table` VALUES ('1', '1', '1', '8', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('2', '1', '2', '7', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('3', '1', '3', '6', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('4', '1', '4', '5', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('5', '1', '5', '4', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('6', '1', '6', '3', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('7', '1', '7', '2', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('8', '1', '8', '32', 'aaa', 'aaa', '1');
INSERT INTO `restaurapp_design_table` VALUES ('9', '1', '9', '9', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('10', '1', '10', '10', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('11', '1', '11', '11', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('12', '1', '12', '12', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('13', '1', '13', '13', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('14', '1', '14', '14', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('15', '1', '15', '15', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('16', '1', '16', '16', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('17', '1', '17', '17', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('18', '1', '18', '18', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('19', '1', '19', '19', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('20', '1', '20', '20', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('21', '1', '21', '21', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('22', '1', '22', '22', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('23', '1', '23', '23', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('24', '1', '24', '24', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('25', '1', '25', '25', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('26', '1', '26', '26', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('27', '1', '27', '27', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('28', '1', '28', '28', 'mesa 30', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('29', '1', '29', '29', '', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('30', '1', '30', '30', 'Mesa 30', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('31', '1', '31', '31', 'Mesa 31', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('32', '1', '32', '32', 'Mesa 32', 'test32', '1');
INSERT INTO `restaurapp_design_table` VALUES ('33', '1', '33', '36', 'mesa 334', 'a', '1');
INSERT INTO `restaurapp_design_table` VALUES ('34', '1', '34', '1', 'Mesa 34', 'test32', '1');
INSERT INTO `restaurapp_design_table` VALUES ('35', '1', '35', '34', 'Mesa 35', 'asdfasdf', '1');
INSERT INTO `restaurapp_design_table` VALUES ('36', '1', '36', '34', 'Mesa 36', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('37', '1', '37', '34', 'Mesa 37', 'BBB37', '1');
INSERT INTO `restaurapp_design_table` VALUES ('38', '1', '38', '33', 'Mesa 38', '', '1');
INSERT INTO `restaurapp_design_table` VALUES ('39', '1', '39', '34', 'Mesa 39', 'asdfasdf', '1');
INSERT INTO `restaurapp_design_table` VALUES ('40', '1', '40', '34', 'Mesa 40', 'asdfasdf', '1');
INSERT INTO `restaurapp_design_table` VALUES ('41', '1', '41', '34', 'Mesa 41', 'sdf', '1');
INSERT INTO `restaurapp_design_table` VALUES ('42', '1', '42', '34', 'Mesa 42', 'dfasdf', '1');
INSERT INTO `restaurapp_design_table` VALUES ('43', '1', '43', '34', 'Mesa 43', 'sdf', '1');

-- ----------------------------
-- Table structure for `restaurapp_design_wall`
-- ----------------------------
DROP TABLE IF EXISTS `restaurapp_design_wall`;
CREATE TABLE `restaurapp_design_wall` (
  `id_restaurante` int(11) DEFAULT NULL,
  `id_mesa` int(11) DEFAULT NULL,
  `position_x` decimal(9,6) DEFAULT NULL,
  `position_y` decimal(9,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of restaurapp_design_wall
-- ----------------------------

-- ----------------------------
-- Table structure for `restaurapp_pedidos_temp`
-- ----------------------------
DROP TABLE IF EXISTS `restaurapp_pedidos_temp`;
CREATE TABLE `restaurapp_pedidos_temp` (
  `id_pedido` int(11) DEFAULT NULL,
  `id_mesa` int(11) DEFAULT NULL,
  `id_camarero` int(11) DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `comentarios` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of restaurapp_pedidos_temp
-- ----------------------------

-- ----------------------------
-- Table structure for `restaurapp_pedido_temp_art`
-- ----------------------------
DROP TABLE IF EXISTS `restaurapp_pedido_temp_art`;
CREATE TABLE `restaurapp_pedido_temp_art` (
  `id_pedido` int(11) DEFAULT NULL,
  `id_item` int(11) DEFAULT NULL,
  `estado_cancela` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of restaurapp_pedido_temp_art
-- ----------------------------

-- ----------------------------
-- Table structure for `restaurapp_sociedad_detalles`
-- ----------------------------
DROP TABLE IF EXISTS `restaurapp_sociedad_detalles`;
CREATE TABLE `restaurapp_sociedad_detalles` (
  `id_restaurante` int(11) NOT NULL,
  `tipo_restaurante` varchar(255) DEFAULT NULL,
  `nom_restaurante` varchar(255) DEFAULT NULL,
  `nit_restaurante` int(11) DEFAULT NULL,
  `dir_restaurante` varchar(255) DEFAULT NULL,
  `tel_restaurante` double(20,0) DEFAULT NULL,
  `representante_legal` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_restaurante`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of restaurapp_sociedad_detalles
-- ----------------------------
INSERT INTO `restaurapp_sociedad_detalles` VALUES ('1', 'test', 'test', '123456789', 'calle123456', '123456', 'Juan Romero');
