<?php
$host = 'localhost';
$dbname = 'atleti';
$dsn = "mysql:host=$host;dbname=$dbname";
$user = 'root';
$password = '';

$pdo = new PDO($dsn,$user,$password);

$sql = "select * from club ";

$stmt = $pdo->query($sql);

$f = fopen("clubs.txt",'w');
foreach($stmt as $elem){
  fwrite($f, $elem['name']);
}
fclose($f);
 ?>
