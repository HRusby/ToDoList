CREATE PROCEDURE `AddListItem`(
	IN lId INT,
	IN itemText VARCHAR(255),
	IN isCompleted TINYINT(1),
	IN uId INT,
	OUT generatedId INT
)
BEGIN
	IF(ListBelongsToUser(uId, lId)) THEN
		INSERT INTO ListItems (ListId, Text, Completed)
		Values(
			lId,
			itemText,
			isCompleted 
		);
		
		SELECT LAST_INSERT_ID() INTO generatedId; 
	END IF;
END
