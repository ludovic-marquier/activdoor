<?php


class Spot{

    private $_activity;
    private $_nomSpot;
    private $_lieu;

    /**
     * Spot constructor.
     * @param $_activity
     * @param $_nomSpot
     * @param $_lieu
     */
    public function __construct(Activity $_activity, $_nomSpot, Lieu $_lieu){
        $this->_activity = $_activity;
        $this->_nomSpot = $_nomSpot;
        $this->_lieu = $_lieu;
    }

    /**
     * @return mixed
     */
    public function getNomSpot(){
        return $this->_nomSpot;
    }

    /**
     * @param mixed $nomSpot
     */
    public function setNomSpot($nomSpot){
        $this->_nomSpot = $nomSpot;
    }

    /**
     * @return mixed
     */
    public function getActivity(){
        return $this->_activity;
    }

    /**
     * @param mixed $activity
     */
    public function setActivity(Activity $activity){
        $this->_activity = $activity;
    }

    /**
     * @return mixed
     */
    public function getLieu(){
        return $this->_lieu;
    }

    /**
     * @param mixed $lieu
     */
    public function setLieu(Lieu $lieu){
        $this->_lieu = $lieu;
    }


}

