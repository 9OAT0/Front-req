<template>
    <header-comp />
    <div class="body">
        <div class="ข้อมูล">
            56y7yeofk
        </div>
        <div class="Review">
            <div class="star">
                <div>Star rating</div>
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
                  
           </div>
            eopfepokf
            
        </div>

    </div>

    
</template>

<style>
.star{
    height: 250px;
    width: 400px;
    background: rgb(146, 140, 140);
    border: 4px solid #ffc400;
    padding: 20px;
}
.star div{
   color: #ffe600;
   font-size: 30px;
   font-family: sans-serif;
   font-weight: 800;
   text-align: center;
   text-transform: uppercase;
   padding: 20px 0;

}
.star input{
    display: none;
}

.star input + label{
    font-size: 60 px;
    text-shadow: 1px 1px 0 #ffe400;
    cursor: pointer;

}
.star input:checked + label ~ label{
    color: #838383;
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
.Review{
    background : rgb(244, 227, 193);
    height : 400px;
}

</style>