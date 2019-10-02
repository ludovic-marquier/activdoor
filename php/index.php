<?php

include './class/Activity.php';
include './class/Lieu.php';
include './class/Spot.php';

$skateboard = new Activity("skateboard", "urbain");
$football = new Activity("football", "terrain");
$surf = new Activity("surf", "aquatique");

$lieu1 = new Lieu("2.987890","6.52345607","Cergy", "France");
$lieu2 = new Lieu("9.890","6.59987","Maurecourt", "France");
$lieu3 = new Lieu("5.7890","6.56756787","Bordeaux", "France");


$spot1 = new Spot($skateboard,"Skatepark Cery Le Haut",$lieu1);
$spot2 = new Spot($surf, "Plage de machin chouette", $lieu3);
$spot3 = new Spot($football,"Terrain foot Pontoise",$lieu2);


afficheSpot($spot1);
afficheSpot($spot2);
afficheSpot($spot3);

function afficheSpot(Spot $spot){
    echo $spot->getNomSpot()."<br>".
        $spot->getActivity()->getName()."<br>".
        $spot->getActivity()->getEnvironement()."<br>".
        $spot->getLieu()->getNomVille()."<br>".
        $spot->getLieu()->getLatitude()."<br>".
        $spot->getLieu()->getLongitude()."<br>".
        $spot->getLieu()->getPays()."<br> <br> <br>";
}



?>