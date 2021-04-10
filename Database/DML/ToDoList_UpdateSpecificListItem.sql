CREATE PROCEDURE `UpdateSpecificListItem`(
	IN id INT,
	IN itemText VARCHAR(255),
	IN isCompleted TINYINT(1)
	)
BEGIN
	UPDATE ListItems 
	SET Text = itemText,
		Completed = isCompleted 
	WHERE ItemId = id;
END
