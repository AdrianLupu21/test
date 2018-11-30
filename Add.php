<?php
class Add{
  function __construct(){
    $dbname = "";
    $tableName = "";
    $fields = [];
    $values = [];
    }
  function setDbname($dbname){
    $this->dbname = $dbname;
  }
  function setTableName($tableName){
    $this->tableName = $tableName;
  }
  function setFields($fields){
    if(is_array($fields)){
      $this->fields = $fields ;
    }else{
    echo "Error elementul nu este array tom savu";
    return;
    }
  }
  function setValues($values){
    if(is_array($values)){
      $this->values = $values;
    }else{
    echo "Error elementul nu este array tom savu";
    return;
    }
  }
  function insertData(){
    try{
      if(count($this->fields)==count($this->values)){
        $host = 'localhost';
        $user = 'root';
        $password = '';
        $dsn = "mysql:host=$host;dbname=$this->dbname";
        $pdo = new PDO($dsn,$user,$password);
        $sql = "INSERT INTO $this->tableName".'(';
        for($i=0;$i<(count($this->fields)-1);$i++){
          $sql = $sql.$this->fields[$i].", ";
        }
        $sql = $sql.$this->fields[count($this->fields)-1].") VALUES (";
        for($i=0;$i<count($this->values)-1;$i++){
          $sql = $sql."\"".$this->values[$i]."\"".",";
        }
        $sql = $sql.'"'.$this->values[count($this->values)-1].'"'." )";
        $pdo->query($sql);
        echo "Statement \"$sql\" was executed \n";
      }
    }catch(PDOException $e){
      echo $e;
    }
  }
}
 ?>
