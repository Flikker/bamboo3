<?php

header('Content-type: application/json');

$server = "10.169.0.5";
$username = "revoluti7_test";
$password = "codecode88";
$database = "revoluti7_test";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);

$sql = "SELECT * FROM locations";

$result = mysql_query($sql) or die ("Query error: " . mysql_error());

$records = array();

while($row = mysql_fetch_assoc($result)) {

    $records[] = $row;
}

mysql_close($con);

echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';
?>







