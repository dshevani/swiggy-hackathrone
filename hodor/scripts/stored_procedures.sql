DROP PROCEDURE IF EXISTS GET_ITEMS_FOR;
DELIMITER $$
CREATE PROCEDURE GET_ITEMS_FOR(IN selected_restaurant_name varchar(255))
BEGIN
	select DISTINCT rm.item_name as item_name, rm.item_price as item_price, r.id as id from restaurant_menu rm
	inner join restaurants r on (r.id = rm.restaurant_id)
	where r.name = selected_restaurant_name limit 50;
END $$
DELIMITER ;
CALL GET_ITEMS_FOR(83147125)

DROP PROCEDURE IF EXISTS GET_RECOMMENDATION_FOR;
DELIMITER $$
CREATE PROCEDURE GET_RECOMMENDATION_FOR(IN selected_restaurant_id int, IN selected_restaurant_item VARCHAR(255))
BEGIN
	select MAX(rm.item_price) as max, MIN(rm.item_price) as min, AVG(rm.item_price) as avg from restaurants r
	inner join restaurant_menu rm where rm.`restaurant_id` <> selected_restaurant_id AND  rm.item_name = selected_restaurant_item;
END $$
DELIMITER ;
CALL GET_RECOMMENDATION_FOR(83147125, "Kesar Thandai")
