CREATE PROCEDURE `DeleteCompletedItemsForList`(
	IN listId INT
)
BEGIN
	DELETE FROM ListItems WHERE Completed=true AND ListId=listId;
END
