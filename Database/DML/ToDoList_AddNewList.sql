CREATE PROCEDURE `AddNewList`(
	IN $listName VARCHAR(255),
	IN $userId INT,
	OUT $generatedId INT
)
BEGIN
	INSERT INTO Lists (UserId, ListName) VALUES ($userId, $listName);
	SELECT LAST_INSERT_ID() INTO $generatedId; 
END
