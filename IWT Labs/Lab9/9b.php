<?php
	mysql_connect("localhost","root","") or die(mysql_error());
	mysql_select_db("student74") or die(mysql_error());
	$na=$_GET['name'];
	$res=mysql_query("select * from student74 where Name='$na'");
	echo "<table border=1>";
	echo "<tr><th>Name</th><th>Address1</th><th>Address2</th><th>Email</th></tr>";
	while($arr=(mysql_fetch_row($res)))
	echo "<tr><td>$arr[0]</td><td>$arr[1]</td><td>$arr[2]</td><td>$arr[3]</td></tr>";
	echo "</table>";
?>