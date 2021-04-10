CREATE FUNCTION `ListBelongsToUser`(uId INT,
	lId INT
) RETURNS tinyint(1)
BEGIN
	RETURN EXISTS(SELECT * FROM Lists WHERE UserId = uId AND ListId = lId);
END
