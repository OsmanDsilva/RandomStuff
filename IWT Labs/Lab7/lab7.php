<?php
	$inTwomnts=60*60*24*60 +Time();
	setcookie('lastvisit',date("h:i:s A-m/d/y"),$inTwomnts);
	if(isset($_COOKIE['lastvisit']))
		$visit = $_COOKIE['lastvisit'];
	else
		echo "expired cookie";
	echo "Your last visit was ",$visit;
?>
