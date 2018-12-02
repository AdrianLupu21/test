1.Atasezi clasa
 include "./Add.php";
2.Instantiezi clasa
 $exemplu = new Add();
3.Setezi parametrii
 $exemplu->setDbname(numele bazei de date[string]);
 $exemplu->setTableName(numele tabelului[string]);
 $exemplu->setFields(numele campurilor[array]);
 $exemplu->setValues(valorile[array]);
4.Bagi valorile
 $exemplu->insertData();
