<?php

use MongoDB\Driver\Manager;

include './class/Activity.php';
include './class/Lieu.php';
include './class/Spot.php';
include './model/SpotManager.php';
include './controller/SpotController.php';


if(isset($_GET['action'])){

    $spotController = new SpotController();

    switch ($_GET['action']){
        case "getAllSpots":

            if(isset($_GET['json'])){
                $spotController->allSpots($_GET['json'] == "true");
            }else{
                //afficher la page spot
            }
            break;

        case "getSpot":
            if(isset($_GET['spotId'])){
                $spotController->spot($_GET['spotId']);
            }
            break;

        default :
            break;
    }
}else{

}


?>