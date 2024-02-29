<template>
    <div style="background-image: url('/bg_mobile.jpg')" class="pb-8">
    <div class="star">
            <div class="post">
                <div class="text">ขอบคุณสำหรับคะแนนและความคิดเห็น!</div>
                <div class="edit">แก้ไข</div>
            </div>
                <div>Rating Star 1-5 </div>
                <input type="radio" name="rating1" id="rating1">
                <label for="rating1" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating2">
                <label for="rating2" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating3">
                <label for="rating3" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating4">
                <label for="rating4" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating5">
                <label for="rating5" class="fa fa-star"></label>
                <form action="#">
                    <header></header> 
                    <div class="textarea">
                        <textarea cold="30" placeholder="กรอกความคิดเห็นของคุณ" class="text-white"></textarea>
                    </div>
                    <div class="btn">
                        <button type="submit">Post</button>
                    </div>
                </form>     
    </div>
</div>
</template>
<style>
.star{
    height: 320px;
    width: 500px;
    background: rgb(250, 237, 202);
    border: 4px solid #767676;
    border-radius: 25px;
    padding: 20px;
    margin-left: 100px;
    position: relative;
}
.star div{
   color: #000000;
   font-size: 30px;
   font-family: sans-serif;
   font-weight: 800;
   text-align: left;
   text-transform: uppercase;
   padding: 2px 0;

}
.star input{
    display: none;
}

.star input + label{
    font-size: 35px;
    text-shadow: 1px 1px 0 #000000;
    cursor: pointer;
}
.star input:checked + label ~ label{
    color: #bfbfbf;
}
.star label:active{
    transform: scale(0.8);
    transition: 0.3s ease;
}
.ข้อมูล{
    background: rgb(255, 255, 255);
    width : 100%;
    height: 400px;
}
.star .post{
    display: none;
}
.star .text{
    font-size: 25px;
    color: #666;
    font-weight: 500;
}
.star .edit{
    font-size: 17px;
    color: #666;
    font-weight: 500;
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
}


form header{
    width: 100%;
    font-size: 25px;
    color: #fe7;
    font-weight: 500;
    margin: 5px 0 20px 0;
    text-align: center;
    transition: all 0.2s ease;


}

form .textarea{
    height: 100px;
    width: 100%;
    overflow: hidden;

}

form .textarea textarea{
    height: 100%;
    width: 100%;
    outline: none;
    border: 1px solid #333;
    background: #222;
    padding: 10px;
    font-size: 12px;
    resize: none;
}

form .btn{
    height: 45px;
    width: 100%;
    margin: 15px 0;
}

form .btn button{
    height: 100%;
    width: 100%;
    border: 1px solid #444;
    outline: none;
    background: #222;
    color: #999;
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
}

form .btn button:hover{
    background: #1b1b1b;

}
</style>