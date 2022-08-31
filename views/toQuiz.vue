<template>
    <div>
        <br>
        <h1 style="margin:0; text-align:left; line-height:1; font-size:4.5rem; font-family:'Vollkorn', serif; font-weight:900; font-style: inherit; vertical-align:baseline;">Quiz</h1>
        <br style="font-weight: 400;">
        <el-divider content-position="left"><span class="divider_word">Part 1: Signs and symptom</span></el-divider>
        <br style="font-weight: 400;">
        <!--Quiz part 1  signs and symptoms-->
        <div class="block">
            <el-row :gutter="24">
                <el-col :span="8" :offset="8">
                    <el-carousel height="430px" indicator-position="none" arrow="always" :autoplay="false" trigger="click" :loop="false" @change="showBox1=false; result_1()">
                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox1=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q1: A change in colour(eg. blue lips or red face) is a sign for choking.</p>
                                    <el-button @click.stop="setCard_1();showBox1=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_1" label="1"><span style="font-size:18px;">Yes</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_1" label="2"><span style="font-size:18px;">No</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox1" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type1" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title1}}</p>
                                            <p style="text-align: left;">{{description1}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox1=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q2: Which one is not the sign for choking?</p>
                                    <el-button @click.stop="setCard_2();showBox1=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_2" label="3"><span style="font-size:18px;">A. Clutching at the throat</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_2" label="4"><span style="font-size:18px;">B. Screaming</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_2" label="5"><span style="font-size:18px;">C. Inability to speak, breathe or swallow</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_2" label="6"><span style="font-size:18px;">D. Wheezing or other unususal breathing sounds</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox1" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type1" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title1}}</p>
                                            <p style="text-align: left;">{{description1}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox1=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q3: Coughing is a common sign for choking.</p>
                                    <el-button @click.stop="setCard_3();showBox1=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_3" label="7"><span style="font-size:18px;">Yes</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_3" label="8"><span style="font-size:18px;">No</span></el-radio>
                                    </div>   
                                </div> 
                                <div v-show="showBox1" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type1" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title1}}</p>
                                            <p style="text-align: left;">{{description1}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox1=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q4: A symptom for choking is to______</p>
                                    <el-button @click.stop="setCard_4();showBox1=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_4" label="9"><span style="font-size:18px;">A. Yell "I am choking, help!"</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_4" label="10"><span style="font-size:18px;">B. Cannot talk</span></el-radio>
                                    </div>   
                                </div> 
                                <div v-show="showBox1" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type1" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title1}}</p>
                                            <p style="text-align: left;">{{description1}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                                <div slot="header" style="padding:0px;">
                                    <p style="text-align:middle; font-size:30px;">Result</p>
                                </div>
                                <div style="height: 150px;">
                                    <p style="font-size:30px; font-weight:bold;">Your accuracy on Part 1 is: </p>
                                    <el-progress type="circle" :percentage="percentage1"></el-progress>
                                </div> 
                            </el-card>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row> 
        </div>
        <br style="font-weight: 400;">

        <!--Quiz part 2-->
        <br style="font-weight: 400;">
        <el-divider content-position="left"><span class="divider_word">Part 2: Causes</span></el-divider>
        <br style="font-weight: 400;">
        <div class="block">
            <el-row :gutter="24">
                <el-col :span="8" :offset="8">
                    <el-carousel height="430px" indicator-position="none" arrow="always" :autoplay="false" trigger="click" :loop="false" @change="showBox2=false; result_2()">
                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox2=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q1: Which are not common causes of choking?</p>
                                    <el-button @click.stop="setCard_5();showBox2=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_5" label="11"><span style="font-size:18px;">A. Eating or drinking too quickly</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_5" label="12"><span style="font-size:18px;">B. Swallowing food before it has been sufficiently chewed</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_5" label="13"><span style="font-size:18px;">C. Swallowing small bones or objects</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_5" label="14"><span style="font-size:18px;">D. Gulp water</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox2" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type2" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title2}}</p>
                                            <p style="text-align: left;">{{description2}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox2=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q2: Choking means that the airway in a person's throat is blocked.</p>
                                    <el-button @click.stop="setCard_6();showBox2=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_6" label="15"><span style="font-size:18px;">Yes</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_6" label="16"><span style="font-size:18px;">No</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox2" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type2" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title2}}</p>
                                            <p style="text-align: left;">{{description2}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox2=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q3: Which are not possible objects causing choking?</p>
                                    <el-button @click.stop="setCard_7();showBox2=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_7" label="17"><span style="font-size:18px;">A. Cooked Rice</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_7" label="18"><span style="font-size:18px;">B. Small Toys</span></el-radio>
                                    </div> 
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_7" label="19"><span style="font-size:18px;">C. Milk</span></el-radio>
                                    </div>   
                                </div> 
                                <div v-show="showBox2" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type2" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title2}}</p>
                                            <p style="text-align: left;">{{description2}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox2=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q4: Which of the following can cause choking?</p>
                                    <el-button @click.stop="setCard_8();showBox2=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_8" label="20"><span style="font-size:18px;">A. Eating large pieces of food chewing incompletely</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_8" label="21"><span style="font-size:18px;">B. Sleeping</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_8" label="22"><span style="font-size:18px;">C. Working in front of the laptop</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_8" label="23"><span style="font-size:18px;">D. Riding the car</span></el-radio>
                                    </div>   
                                </div> 
                                <div v-show="showBox2" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type2" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title2}}</p>
                                            <p style="text-align: left;">{{description2}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                                <div slot="header" style="padding:0px;">
                                    <p style="text-align:middle; font-size:30px;">Result</p>
                                </div>
                                <div style="height: 150px;">
                                    <p style="font-size:30px; font-weight:bold;">Your accuracy on Part 2 is: </p>
                                    <el-progress type="circle" :percentage="percentage2"></el-progress>
                                </div> 
                            </el-card>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row> 
        </div>
        <br style="font-weight: 400;">
        

        <!--Quiz part 3-->
        <br style="font-weight: 400;">
        <el-divider content-position="left"><span class="divider_word">Part 3: First aid</span></el-divider>
        <br style="font-weight: 400;">
        <div class="block">
            <el-row :gutter="24">
                <el-col :span="8" :offset="8">
                    <el-carousel height="430px" indicator-position="none" arrow="always" :autoplay="false" trigger="click" :loop="false" @change="showBox3=false; result_3()">
                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox3=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q1: How many back blows do you give a conscious choking victim?</p>
                                    <el-button @click.stop="setCard_9();showBox3=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_9" label="24"><span style="font-size:18px;">A. 1</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_9" label="25"><span style="font-size:18px;">B. 3</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_9" label="26"><span style="font-size:18px;">C. 5</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_9" label="27"><span style="font-size:18px;">D. 7</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox3" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type3" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title3}}</p>
                                            <p style="text-align: left;">{{description3}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox3=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q2: Who do you call if the kid is choking?</p>
                                    <el-button @click.stop="setCard_10();showBox3=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_10" label="28"><span style="font-size:18px;">A. 000</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_10" label="29"><span style="font-size:18px;">B. 106</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_10" label="30"><span style="font-size:18px;">C. 131444</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox3" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type3" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title3}}</p>
                                            <p style="text-align: left;">{{description3}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox3=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q3: If the patient is over one year of age the following management is not recommended:</p>
                                    <el-button @click.stop="setCard_11();showBox3=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_11" label="31"><span style="font-size:18px;">A. Ask them to cough to remove the object</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_11" label="32"><span style="font-size:18px;">B. Encourage them to relax and breathe deeply</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_11" label="33"><span style="font-size:18px;">C. If this does not remove the blockage call 000</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_11" label="34"><span style="font-size:18px;">D. Pat the patient’s back with force</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox3" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type3" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title3}}</p>
                                            <p style="text-align: left;">{{description3}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox3=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q4: Is it a good idea to give a choking child a glass of water or something to eat?</p>
                                    <el-button @click.stop="setCard_12();showBox3=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_12" label="35"><span style="font-size:18px;">Yes</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_12" label="36"><span style="font-size:18px;">No</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox3" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type3" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title3}}</p>
                                            <p style="text-align: left;">{{description3}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                                <div slot="header" style="padding:0px;">
                                    <p style="text-align:middle; font-size:30px;">Result</p>
                                </div>
                                <div style="height: 150px;">
                                    <p style="font-size:30px; font-weight:bold;">Your accuracy on Part 3 is: </p>
                                    <el-progress type="circle" :percentage="percentage3"></el-progress>
                                </div> 
                            </el-card>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row> 
        </div>
        <br style="font-weight: 400;">

        <!--Quiz part 4-->
        <br style="font-weight: 400;">
        <el-divider content-position="left"><span class="divider_word">Part 4: Prevention</span></el-divider>
        <br style="font-weight: 400;">
        <div class="block">
            <el-row :gutter="24">
                <el-col :span="8" :offset="8">
                    <el-carousel height="430px" indicator-position="none" arrow="always" :autoplay="false" trigger="click" :loop="false" @change="showBox4=false; result_4()">
                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox4=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q1: Don't give young children hard foods or small objects.</p>
                                    <el-button @click.stop="setCard_13();showBox4=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_13" label="37"><span style="font-size:18px;">Yes</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_13" label="38"><span style="font-size:18px;">No</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox4" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type4" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title4}}</p>
                                            <p style="text-align: left;">{{description4}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox4=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q2: Which is not right?</p>
                                    <el-button @click.stop="setCard_14();showBox4=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_14" label="39"><span style="font-size:18px;">A. Cut foods such as hotdogs, sausages, and grapes into small pieces before serving them to young children.</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_14" label="40"><span style="font-size:18px;">B. Buy your child any kind of toy they like.</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_14" label="41"><span style="font-size:18px;">C. Do not allow children to play sports with food or gum in their mouths.</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_14" label="42"><span style="font-size:18px;">D. Instruct children to chew their food thoroughly before swallowing.</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox4" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type4" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title4}}</p>
                                            <p style="text-align: left;">{{description4}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox4=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q3: What’s the correct eating posture?</p>
                                    <el-button @click.stop="setCard_15();showBox4=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_15" label="43"><span style="font-size:18px;">A. Sitting up</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_15" label="44"><span style="font-size:18px;">B. Lying down</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_15" label="45"><span style="font-size:18px;">C. Crawling</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_15" label="46"><span style="font-size:18px;">D. Walking</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox4" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type4" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title4}}</p>
                                            <p style="text-align: left;">{{description4}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                            <div @click="showBox4=false">
                                <div slot="header" class="clearfix">
                                    <p style="text-align:left; font-size:20px;">Q4: Items that can pose a choking hazard to children and should be placed out of reach of little ones.</p>
                                    <el-button @click.stop="setCard_16();showBox4=true" style="float: right; padding: 3px 0; width:100px; height:50px; font-size: 15px;" type="primary" round>Submit</el-button>
                                </div>
                                <div style="height: 150px;">
                                    <div>
                                        <el-radio v-model="radio_16" label="47"><span style="font-size:18px;">Yes</span></el-radio>
                                    </div>
                                    <div style="margin-top: 20px">
                                        <el-radio v-model="radio_16" label="48"><span style="font-size:18px;">No</span></el-radio>
                                    </div>
                                </div> 
                                <div v-show="showBox4" style="height:130px; background-color:#F7F7F8;">
                                    <div style="float:left; margin-left:200px; margin-top:25px;">
                                        <img v-if="lay_type4" src="../views/pictures/correct.png" alt="correct" style="height:80px; width:80px;">
                                        <img v-else src="../views/pictures/incorrect.png" alt="incorrect" style="height:80px; width:80px;">
                                    </div>
                                    <div style="float:left; margin-left: 20px;">    
                                            <p style="text-align: left; font-size: 30px; margin-bottom:0px;">{{title4}}</p>
                                            <p style="text-align: left;">{{description4}}</p>
                                    </div>    
                                </div>
                            </div>
                            </el-card>
                        </el-carousel-item>

                        <el-carousel-item> 
                            <el-card class="box-card">
                                <div slot="header" style="padding:0px;">
                                    <p style="text-align:middle; font-size:30px;">Result</p>
                                </div>
                                <div style="height: 150px;">
                                    <p style="font-size:30px; font-weight:bold;">Your accuracy on Part 4 is: </p>
                                    <el-progress type="circle" :percentage="percentage4"></el-progress>
                                </div> 
                            </el-card>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row> 
        </div>
        <br style="font-weight: 400;">

        <!--Show test report-->
        <div style="background-color: #E0F8E0;">
            <p style="margin-bottom:10px; font-size:25px; font-weight:bold;">Please click here to check your report</p>
            <i class="el-icon-arrow-down"></i>
            <br><br>
            <el-button type="primary" @click="dialog_content = true; final_grade(); final_logo()"><scan style="font-size:40px;">Report</scan></el-button>
            <el-dialog :visible.sync="dialog_content">
                <div>
                    <img v-if="lay_type5" src="../views/pictures/good.png" alt="correct" style="height:120px; width:120px;">
                    <img v-else src="../views/pictures/normal.png" alt="incorrect" style="height:120px; width:120px;">
                </div>
                <br>
                <div>
                    <el-rate
                        v-model="value"
                        disabled
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
                    <p style="margin-top:60px; font-size:30px;">Your correctly answered {{total}}/16 questions</p>
                </div>
                <div>
                    <br>
                    <p style="margin-bottom:10px; margin-top:0px; font-size: 50px; font-weight:bold; font-family:'Vollkorn', serif;">{{feedback}}</p>
                    <p style="text-align: left; font-size:18px; margin-top:0px; margin-bottom: 0px;">{{evaluation}}</p>
                </div>
                <br>
                <div v-show="showDiv" style="background-color: #8BDBF4;">
                    <router-link to="/toFamily">
                        <el-link type="primary"><scan style="font-size:20px;">Information</scan></el-link>
                    </router-link>
                </div>
            </el-dialog>
        </div>

    </div>
</template>

<script>
export default {
    name: 'toQuiz',
    data () {
        return {
            dialog_content: false,
            value: 0,
            radio_1: '1',
            radio_2: '3',
            radio_3: '7',
            radio_4: '9',
            radio_5: '11',
            radio_6: '15',
            radio_7: '17',
            radio_8: '20',
            radio_9: '24',
            radio_10: '28',
            radio_11: '31',
            radio_12: '35',
            radio_13: '37',
            radio_14: '39',
            radio_15: '43',
            radio_16: '47',
            showBox1: false,
            showBox2: false,
            showBox3: false,
            showBox4: false,
            title1: " ",
            title2: " ",
            title3: " ",
            title4: " ",
            description1: " ",
            description2: " ",
            description3: " ",
            description4: " ",
            lay_type1: 0,
            lay_type2: 0,
            lay_type3: 0,
            lay_type4: 0,
            lay_type5: 0,
            percentage1: 0,
            percentage2: 0,
            percentage3: 0,
            percentage4: 0,
            total: 0,
            feedback: 0,
            evaluation: 0,
            showDiv: false,
        }
    },

    methods: {
        //Answers for quiz part 1
        setCard_1() {
            if (this.radio_1 == 1) {
                this.title1 = "Correct!",
                this.description1 = "Congratulations, your answer is correct",
                this.lay_type1 = 1
            }else{
                this.title1 = "Incorrect!",
                this.description1 = "The correct answer is 'Yes'"
                this.lay_type1 = 0
            }
        },

        setCard_2() {
            if (this.radio_2 == 4) {
                this.title1 = "Correct!",
                this.description1 = "Congratulations, your answer is correct",
                this.lay_type1 = 1
            }else{
                this.title1 = "Incorrect!",
                this.description1 = "The correct answer is B"
                this.lay_type1 = 0
            }
        },

        setCard_3() {
            if (this.radio_3 == 7) {
                this.title1 = "Correct!",
                this.description1 = "Congratulations, your answer is correct",
                this.lay_type1 = 1
            }else{
                this.title1 = "Incorrect!",
                this.description1 = "The correct answer is 'Yes'"
                this.lay_type1 = 0
            }
        },

        setCard_4() {
            if (this.radio_4 == 10) {
                this.title1 = "Correct!",
                this.description1 = "Congratulations, your answer is correct",
                this.lay_type1 = 1
            }else{
                this.title1 = "Incorrect!",
                this.description1 = "The correct answer is B"
                this.lay_type1 = 0
            }
        },

        result_1() {
            var question = ["1","4","7","10"];
            let answer = Array.of(this.radio_1,this.radio_2,this.radio_3,this.radio_4);
            this.percentage1 = 0;
            for (let i = 0; i < question.length; i++) {
                if (question[i] == answer[i]) {
                    this.percentage1 = this.percentage1 + 25
                }
            }  
        },
        // Answer for quiz part 2
        setCard_5() {
            if (this.radio_5 == 14) {
                this.title2 = "Correct!",
                this.description2 = "Congratulations, your answer is correct",
                this.lay_type2 = 1
            }else{
                this.title2 = "Incorrect!",
                this.description2 = "The correct answer is D"
                this.lay_type2 = 0
            }
        },

        setCard_6() {
            if (this.radio_6 == 15) {
                this.title2 = "Correct!",
                this.description2 = "Congratulations, your answer is correct",
                this.lay_type2 = 1
            }else{
                this.title2 = "Incorrect!",
                this.description2 = "The correct answer is 'Yes'"
                this.lay_type2 = 0
            }
        },

        setCard_7() {
            if (this.radio_7 == 19) {
                this.title2 = "Correct!",
                this.description2 = "Congratulations, your answer is correct",
                this.lay_type2 = 1
            }else{
                this.title2 = "Incorrect!",
                this.description2 = "The correct answer is C"
                this.lay_type2 = 0
            }
        },

        setCard_8() {
            if (this.radio_8 == 20) {
                this.title2 = "Correct!",
                this.description2 = "Congratulations, your answer is correct",
                this.lay_type2 = 1
            }else{
                this.title2 = "Incorrect!",
                this.description2 = "The correct answer is A"
                this.lay_type2 = 0
            }
        },

        result_2() {
            var question = [14,15,19,20];
            let answer = Array.of(this.radio_5,this.radio_6,this.radio_7,this.radio_8);
            this.percentage2 = 0;
            for (let i = 0; i < question.length; i++) {
                if (question[i] == answer[i]) {
                    this.percentage2 = this.percentage2 + 25
                }
            }  
        },
        // Answer for quiz part 3
        setCard_9() {
            if (this.radio_9 == 26) {
                this.title3 = "Correct!",
                this.description3 = "Congratulations, your answer is correct",
                this.lay_type3 = 1
            }else{
                this.title3 = "Incorrect!",
                this.description3 = "The correct answer is C"
                this.lay_type3 = 0
            }
        },

        setCard_10() {
            if (this.radio_10 == 28) {
                this.title3 = "Correct!",
                this.description3 = "Congratulations, your answer is correct",
                this.lay_type3 = 1
            }else{
                this.title3 = "Incorrect!",
                this.description3 = "The correct answer is A"
                this.lay_type3 = 0
            }
        },

        setCard_11() {
            if (this.radio_11 == 34) {
                this.title3 = "Correct!",
                this.description3 = "Congratulations, your answer is correct",
                this.lay_type3 = 1
            }else{
                this.title3 = "Incorrect!",
                this.description3 = "The correct answer is D"
                this.lay_type3 = 0
            }
        },

        setCard_12() {
            if (this.radio_12 == 36) {
                this.title3 = "Correct!",
                this.description3 = "Congratulations, your answer is correct",
                this.lay_type3 = 1
            }else{
                this.title3 = "Incorrect!",
                this.description3 = "The correct answer is 'No'"
                this.lay_type3 = 0
            }
        },

        result_3() {
            var question = [26,28,34,36];
            let answer = Array.of(this.radio_9,this.radio_10,this.radio_11,this.radio_12);
            this.percentage3 = 0;
            for (let i = 0; i < question.length; i++) {
                if (question[i] == answer[i]) {
                    this.percentage3 = this.percentage3 + 25
                }
            }  
        },

        // Answer for quiz part 4
        setCard_13() {
            if (this.radio_13 == 37) {
                this.title4 = "Correct!",
                this.description4 = "Congratulations, your answer is correct",
                this.lay_type4 = 1
            }else{
                this.title4 = "Incorrect!",
                this.description4 = "The correct answer is 'Yes'"
                this.lay_type4 = 0
            }
        },

        setCard_14() {
            if (this.radio_14 == 40) {
                this.title4 = "Correct!",
                this.description4 = "Congratulations, your answer is correct",
                this.lay_type4 = 1
            }else{
                this.title4 = "Incorrect!",
                this.description4 = "The correct answer is B"
                this.lay_type4 = 0
            }
        },

        setCard_15() {
            if (this.radio_15 == 43) {
                this.title4 = "Correct!",
                this.description4 = "Congratulations, your answer is correct",
                this.lay_type4 = 1
            }else{
                this.title4 = "Incorrect!",
                this.description4 = "The correct answer is A"
                this.lay_type4 = 0
            }
        },

        setCard_16() {
            if (this.radio_16 == 47) {
                this.title4 = "Correct!",
                this.description4 = "Congratulations, your answer is correct",
                this.lay_type4 = 1
            }else{
                this.title4 = "Incorrect!",
                this.description4 = "The correct answer is 'Yes'"
                this.lay_type4 = 0
            }
        },

        result_4() {
            var question = [37,40,43,47];
            let answer = Array.of(this.radio_13,this.radio_14,this.radio_15,this.radio_16);
            this.percentage4 = 0;
            for (let i = 0; i < question.length; i++) {
                if (question[i] == answer[i]) {
                    this.percentage4 = this.percentage4 + 25
                }
            }  
        },

        final_grade() {
            this.value = (5*(this.percentage1+this.percentage2+this.percentage3+this.percentage4))/400
            this.total = (this.percentage1+this.percentage2+this.percentage3+this.percentage4)/25
        },

        final_logo() {
            if ((this.percentage1+this.percentage2+this.percentage3+this.percentage4) >= 300) {
                this.lay_type5 = 1
                this.feedback = "Well done!"
                this.evaluation = "It seems that you already know a lot about the scientific methods of dealing with children choking. Please apply these knowledge in your life ☺"
                this.showDiv = false
            }else {
                this.lay_type5 = 0
                this.feedback = "Keep up learning!"
                this.evaluation = "It seems that you do not know much about the prevention and treatment of children choking incidents. Please continue to learn through the information provided on our website. You can start with checking out the following information:"
                this.showDiv = true
            }
        }
    }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 100%;
  }

  .divider_word{
    font-size:30px; 
    font-weight:bold; 
    font-family:'Vollkorn', serif;
  }

  .el-rate__icon{
    font-size: 70px;
  }


</style>