<?php
	mysql_connect("localhost","root","") or die(mysql_error());
	mysql_select_db("student74") or die(mysql_error());
	$name=$_GET['name1'];
	$add1=$_GET['addr1'];
	$add2=$_GET['addr2'];
	$email=$_GET['emails'];
	echo "Hello ".$name;
	$query="insert into student74 values('$name','$add1','$add2','$email')";
	mysql_query($query) or die(mysql_error());
	echo "Inserted";
?>