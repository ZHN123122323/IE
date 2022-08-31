<template>
<div class="">
    <!--介绍部分， introduction-->
    <el-row :gutter="24">
        <el-col :span="2"><div class="grid-content bg-purple"><br></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <h6 style="margin-bottom:10px; padding:0; border:0; text-align:left; color:#FF7A3D; text-transform:uppercase; letter-space:2px; font-size:0.75rem; font-family:'Vollkorn', serif; font-weight:700; line-height:1.7; font-style:inherit; vertical-align:baseline;">
                Safe Buddies - choking prevention</h6>
            <h1 style="margin:0; text-align:left; line-height:1; font-size:7.5rem; font-family:'Vollkorn', serif; font-weight:900; font-style: inherit; vertical-align:baseline;">Keeping our kids safe</h1>
            <p style="line-height:1.7; text-align:left; font-weight: 400;">
                Choking is recognised as one of the major causes of death for infants and toddlers aged 0–3, but the incidence rates are still relevant even well above that age. They are currently recognised as a relevant public health challenge.
            </p>
            <p>
                <br style="font-weight: 400;">
                <br style="font-weight: 400;">
            </p>
            
            <el-link style="color:#FF7A3D; font-size:1.5rem;">Learn more<i class="el-icon-right el-icon--right"></i> </el-link>
            
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
            <br>
            <img style="background-size:cover; height: 600px; width:1000px;" src="../views/pictures/homepage.jpg" alt="homepage">
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"><br></div></el-col>
    </el-row>
    <br style="font-weight: 400;">
    <br style="font-weight: 400;">
    <br style="font-weight: 400;">
    <br style="font-weight: 400;">

    <div class="homepage">
    <!--图片入口 Jumps to a specified page from an image-->
    <el-row :gutter="24">
        <el-col :span="12" :offset="2"><div class="grid-content bg-purple">
            <hr align=left width=150 size=6 color=black style="margin-top:0px;">
            <br>
            <h2 style="margin:0; text-align:left; line-height:1.2; font-size:3rem; font-family:'Vollkorn', serif; font-weight:900; vertical-align:baseline;">About choking</h2>
            <p style="line-height:1.7; text-align:left; font-weight: 400;">Parents need to know the basic preventative measures for keeping their children safe when it comes to Choking </p>
        </div></el-col>
    </el-row>
    <el-row :gutter="24">
        <el-row>
                <el-col :span="4" :offset="4">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="../views/pictures/family.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>Information</span>
                            <div class="bottom clearfix">
                                <el-link style="color:#FF7A3D; font-size:1.1rem;">More information<i class="el-icon-right el-icon--right"></i> </el-link>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="4" :offset="2">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="../views/pictures/game.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>Information</span>
                            <div class="bottom clearfix">
                                <el-link style="color:#FF7A3D; font-size:1.1rem;">More information<i class="el-icon-right el-icon--right"></i> </el-link>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="4" :offset="2">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="../views/pictures/gallery.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>Information</span>
                            <div class="bottom clearfix">
                                <el-link style="color:#FF7A3D; font-size:1.1rem;">More information<i class="el-icon-right el-icon--right"></i> </el-link>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
    </el-row>

    <!--Quiz part-->
    <el-row :gutter="24">
        <el-col :span="2"><div class="grid-content bg-purple"><br></div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <hr align=left width=150 size=6 color=black>
            <br>
            <h2 style="margin:0; text-align:left; line-height:1.2; font-size:3rem; font-family:'Vollkorn', serif; font-weight:900; vertical-align:baseline;">Quiz</h2>
            <p style="line-height:1.7; text-align:left; font-weight: 400;">
                Intro to .... 
            </p>
            <br style="font-weight: 400;">
            <router-link to="/toQuiz">
                <el-button type="primary" icon="el-icon-search" style="width:190px; height:90px; font-size: 35px;">Quiz</el-button>
            </router-link>
        </div></el-col>

        <!--简单的gallery  Simple gallery including 4 pictures-->
        <el-col :span="4" :offset="1"><div class="grid-content bg-purple">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <img style="background-size:cover; height: 400px; width:100%; border-radius:30px; margin-bottom:20px;" src="../views/pictures/gallery3.jpg" alt="homepage"> 
            <img style="background-size:cover; height: 200px; width:100%; border-radius:30px;" src="../views/pictures/gallery1.jpg" alt="homepage">
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <br style="font-weight: 400;">
            <img style="background-size:cover; height: 200px; width:100%; border-radius:30px; margin-bottom:20px;" src="../views/pictures/gallery2.jpg" alt="homepage">
            <img style="background-size:cover; height: 400px; width:100%; border-radius:30px;" src="../views/pictures/gallery4.jpg" alt="homepage">
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"><br></div></el-col>
    </el-row>
    </div>
</div>  
</template>

<script>
export default {
    name: 'toHome',
    data () {
        return {}
    }
}
</script>


<style>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 400px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .homepage {
    background-image: url(../views/pictures/background1.png); 
    background-size:cover;
  }
</style>