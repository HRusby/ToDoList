CREATE PROCEDURE `DeleteListItem`(
	IN $listId INT,
	IN $itemId INT
)
BEGIN
	DELETE FROM ListItems WHERE ListId = $listId AND ItemId = $itemId;
END
