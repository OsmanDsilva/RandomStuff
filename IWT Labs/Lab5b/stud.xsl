<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version="1.0">
<xsl:template match="/">
<html>
	<body>
	<h1>VTU Student Information</h1>
	<table border='2'>
	<tr>
		<th>Name</th>
		<th>USN</th>
		<th>Branch</th>
		<th>College</th>
	</tr>
	<xsl:for-each select='vtu/student'>
	<xsl:choose>
	<xsl:when test="name='DEF'">
	<tr bgcolor='red'>
		<td><xsl:value-of select='name' /></td>
		<td><xsl:value-of select='usn' /></td>
		<td><xsl:value-of select='branch' /></td>
		<td><xsl:value-of select='college' /></td>
	</tr>
	</xsl:when>
	<xsl:otherwise>
	<tr>
		<td><xsl:value-of select='name' /></td>
		<td><xsl:value-of select='usn' /></td>
		<td><xsl:value-of select='branch' /></td>
		<td><xsl:value-of select='college' /></td>
	</tr>
	</xsl:otherwise>
	</xsl:choose>
	</xsl:for-each>
	</table>
	Select Student info
	</body>
</html>
</xsl:template>
</xsl:stylesheet>

