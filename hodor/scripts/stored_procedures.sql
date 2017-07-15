DROP PROCEDURE IF EXISTS GET_ITEMS_FOR;
DELIMITER $$
CREATE PROCEDURE GET_ITEMS_FOR(IN selected_restaurant_id int)
BEGIN
	select DISTINCT item_name, item_price from restaurant_menu where restaurant_id = selected_restaurant_id limit 50;
END $$
DELIMITER ;
CALL GET_ITEMS_FOR(83147125)

DROP PROCEDURE IF EXISTS GET_RECOMMENDATION_FOR;
DELIMITER $$
CREATE PROCEDURE GET_RECOMMENDATION_FOR(IN selected_restaurant_id int, IN selected_restaurant_item VARCHAR(255))
BEGIN
	select MAX(rm.item_price) as max, MIN(rm.item_price) as min, AVG(rm.item_price) as avg from restaurants r inner join restaurant_menu rm where rm.`restaurant_id` <> selected_restaurant_id AND  rm.item_name = selected_restaurant_item;
END $$
DELIMITER ;
CALL GET_RECOMMENDATION_FOR(83147125, "Kesar Thandai")
