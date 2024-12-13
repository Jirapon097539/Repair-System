<?php
    class db{
        protected $db;
        public function __construct(){
            $this->connectdb();
        }
        private function connectdb(){
            // define("USER","root");
            // define("PASS","");
            // define("CON","mysql:host=localhost; dbname=book; charset=utf8");
            try{
                $this->db = new PDO(
                    'mysql:host=localhost; dbname=assignment_php; charset=utf8',
                    'root',
                    ''
                );
                $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }catch(PDOException $e){
                echo $e->getMessage();
            }
        }
      
    }
    $db = new db();
?>