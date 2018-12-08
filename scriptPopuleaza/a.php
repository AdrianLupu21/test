<?php
function returnInof($tablename){
  $arr = [];
  $dbname = "information_schema";
  $host = "localhost";
  $username  = "root";
  $password = "";
  $dsn = "mysql:host=$host;dbname=$dbname";
  $pdo = new PDO($dsn,$username,$password);
  $sql = "select COLUMN_NAME,DATA_TYPE from COLUMNS WHERE TABLE_NAME='$tablename'";
  $resp = $pdo->query($sql);
  foreach($resp as $elem){
     array_push($arr,[$elem["COLUMN_NAME"],$elem["DATA_TYPE"]]);
  }
  return $arr;
}
echo count(returnInof("masini"));
 ?>
