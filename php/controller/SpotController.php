<?php

class SpotController{

    private $_manager;

    function __construct(){
        $this->_manager = new SpotManager();
    }

    public function allSpots($json){

        $spots = $this->_manager->getAllSpots();
        require('./view/displaySpotJson.php');

        if($json){

        }else{
            //Display spot in a page
        }
    }

    public function spot($spotId){
        $spot = $this->_manager->getSpot($spotId);
        require ('./view/spotView.php');
    }


}