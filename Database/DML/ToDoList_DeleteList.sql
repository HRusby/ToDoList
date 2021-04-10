CREATE PROCEDURE `DeleteList`(
	IN $listId INT,
	IN $userId INT
)
BEGIN
	IF(ListBelongsToUser($userId, $listId)) THEN
		DELETE FROM ListItems WHERE ListId = $listId;
		DELETE FROM Lists WHERE ListId = $listId AND UserId = $userId;
	END IF;
END
