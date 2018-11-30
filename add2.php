<?php
include "./Add.php";
function randomWords(){
  $letters = 'qwertyuiopasdfghjklzxcvbnm';
  $word = '';
  $length = rand(5,10);
  for($i=0;$i<$length;$i++){
    $word = $word.$letters[rand(0,strlen($letters)-1)];
  }
  return $word;
}

$foo = new Add();
$fields = array(0 => "name", 1=>"adresa");
$foo->setDbname("atleti");
$foo->setTableName("club");
$foo->setFields(["name","adresa"]);
for($i=0;$i<100;$i++){
  $foo->setValues([randomWords(),randomWords()]);
  $foo->insertData();
}

?>
