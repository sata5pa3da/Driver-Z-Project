
let started = false;

let MyPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Hello!");
    }, 5000, "Hello");
});


async function setup(){
    // console.log("Hello world!");
    // console.log("Please work!");
    
    // img = loadImage("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", function(suc){
    //     console.log(suc);
    // }, function(err){
    //     console.log(err);
    // });
    // console.log(img);

    // val = await MyPromise;
    // started = true;
    // console.log(val);

    // createCanvas(1000, 1000);
    // path = "/style.css";
    // dir = new File([], path);
    // console.log(dir);
    // // list = dir.list();
    // for(let i = 0; i < dir.length; i++){
    //     console.log(dir[i]);
    // }
    // // for(let o in dir){
    // //     console.log(o);
    // // }

    // // list = dir.list();
    // // new File()
    // // var files = fs.readdirSync('/assets/photos/');
    console.log("DASDK");

}

function draw(){
    
    // if(started){
    //     background(0);

    //     rectMode(CENTER);
    //     rect(width/2, height/2, width/4, height/4);
    //     // image(img, 0,0);
    // }
    
}