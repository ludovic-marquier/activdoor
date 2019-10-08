<?php $title = "Information sur ".$spot['nom']; ?>

<?php ob_start(); ?>

<div class="container">
    <div class="row">

        <div class="col-sm-9">

            <!-- resumt -->
            <div class="panel panel-default">
                <div class="panel-heading resume-heading">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="col-xs-12 col-sm-4">
                                <figure>
                                    <img class="img-circle img-responsive" alt="" src="../src/img/acticon/<?= $spot['type'] ?>.png">
                                </figure>
                                <div class="row">
                                    <div class="col-xs-12 social-btns">
                                        <div class="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                            <a href="#" class="btn btn-social btn-block btn-google">
                                                <i class="fa fa-google"></i> </a>
                                        </div>
                                        <div class="col-xs-3 col-md-1 col-lg-1 social-btn-holder">
                                            <a href="#" class="btn btn-social btn-block btn-facebook">
                                                <i class="fa fa-facebook"></i> </a>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8" style="margin-top: 50px;">
                                <h1> <?= $spot['nom'] ?></h1>
                                <p class="spot_button" ><?= $spot['type'] ?></p>
                                <p class="spot_button"><?= $spot['ville'] ?></p>
                                <p class="spot_button" style="background: limegreen; color: white;">J'y suis allé !</p>

                                <form class="rating-form" action="#" method="post" name="rating-movie">
                                    <fieldset class="form-group">
                                        <div class="form-item">

                                            <input id="rating-5" name="rating" type="radio" value="5" />
                                            <label for="rating-5" data-value="5">
                                                        <span class="rating-star">
                                                          <i class="fa fa-star-o"></i>
                                                          <i class="fa fa-star"></i>
                                                        </span>
                                                <span class="ir">5</span>
                                            </label>
                                            <input id="rating-4" name="rating" type="radio" value="4" />
                                            <label for="rating-4" data-value="4">
                                                        <span class="rating-star">
                                                          <i class="fa fa-star-o"></i>
                                                          <i class="fa fa-star"></i>
                                                        </span>
                                                <span class="ir">4</span>
                                            </label>
                                            <input id="rating-3" name="rating" type="radio" value="3" />
                                            <label for="rating-3" data-value="3">
                                                            <span class="rating-star">
                                                              <i class="fa fa-star-o"></i>
                                                              <i class="fa fa-star"></i>
                                                            </span>
                                                <span class="ir">3</span>
                                            </label>
                                            <input id="rating-2" name="rating" type="radio" value="2" />
                                            <label for="rating-2" data-value="2">
                                                                <span class="rating-star">
                                                                  <i class="fa fa-star-o"></i>
                                                                  <i class="fa fa-star"></i>
                                                                </span>
                                                <span class="ir">2</span>
                                            </label>
                                            <input id="rating-1" name="rating" type="radio" value="1" />
                                            <label for="rating-1" data-value="1">
                                                            <span class="rating-star">
                                                              <i class="fa fa-star-o"></i>
                                                              <i class="fa fa-star"></i>
                                                            </span>

                                            </label>



                                        </div>

                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom_content">
                    <h4>Description</h4>
                    <p>
                        <?= $spot['description'] ?>
                    </p>


                    <div class="row">
                        <div class="column">
                            <img class="img-spot-gallery" src="../src/img/sample/saint-larry/1.jpg">
                            <img class="img-spot-gallery" src="../src/img/sample/saint-larry/2.jpg">


                        </div>
                        <div class="column">
                            <img class="img-spot-gallery" src="../src/img/sample/saint-larry/3.jpg">
                            <img class="img-spot-gallery" src="../src/img/sample/saint-larry/4.jpg">

                        </div>

                        <div class="column">
                            <img class="img-spot-gallery" src="../src/img/sample/saint-larry/5.jpg">
                            <img class="img-spot-gallery" src="../src/img/sample/saint-larry/6.jpg">

                        </div>

                        <div class="column">
                            <img class="img-spot-gallery" src="../src/img/sample/saint-larry/7.jpg">



                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!-- resume -->

    </div>
</div>
</div>


<?php $content = ob_get_clean(); ?>

<?php require('template.php'); ?>

