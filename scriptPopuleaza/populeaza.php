<?php
include "./Add.php";
$in2 = new Add();
$in2->setDbname("firme");
$in2->setTableName("status");
$in2->setFields(["id_client","id_masina"]);
for ($i=0;$i<69;$i++){
$array = [];
  for ($j=0;$j<2;$j++){  
       array_push($array,rand(1,69));
          }      
$in2->setValues($array);
$in2->insertData();
}

function randomwords(){
  $wordlength = rand(5,10);
  $str="";
  $chars = 'qwertyuiopasdfghjklzxcvbnm';
  for($i=0;$i<$wordlength;$i++){
    if($i==0){
      $str=$str.strtoupper($chars[rand(0,strlen($chars) -1)]);
    }
    $str=$str.$chars[rand(0,strlen($chars) -1)];
  }
  return $str;
}
function randomdate(){
  return rand(2000,2018)."-".rand(1,12)."-".rand(1,28);
}

function randomdateinter(){
  $m1=rand(1,12);
  $d1=rand(1,28);
  $y1=rand(1950,2018);

  $m2=rand($m1,12);
  $d2=rand($d1,28);
  $y2=rand($y1,2018);

$a=[$y1."-".$m1."-".$d1,$y2."-".$m2."-".$d2];
return $a;
}

function randominteger(){
$randint="07";
for ($i=0;$i<7;$i++){
 $nr=rand(0,9);
$randint=$randint.$nr;
}
return $randint;
}
?>
