//Requiring basic stuff
const fs = require("fs")
const path = require("path");

//Express init
const express = require("express");
const app = express();



//------------------------
function GetPath(path){
    const new_path = __dirname + path; //path.resolve(process.cwd(), path);
    // console.log(new_path);
    return new_path;
}

function GetExt(path){
    return path.substring(path.indexOf("."));
}


function FilterPath(path){
    // let new_path = "";

    // let prevChar = "";
    // for(let i = 0; i <= path.length; i++){
    //     let char = path[i];
        
    //     // if(char != "/")

    // }
    const new_path = path.replace("\\", "/");

    return new_path;
}

function GetNameFromFile(filePath){
    let start = 0;
    // let end = filePath.indexOf(".");

    let slashIndex = filePath.indexOf("\\");
    if(slashIndex){
        start = slashIndex + 1;
    }

    return filePath.substring(start);
}


async function GetClientScripts(ClientScripts = []){
    try{
        const files = await fs.promises.readdir(GetPath("/public"), {recursive: true});

        for(const file of files){
            stat = await fs.promises.stat(GetPath("/public/" + file));

            if(stat.isFile()){
                DataObject = {
                    name: GetNameFromFile(file),
                    src: FilterPath(file),
                    extention: GetExt(file),
                }
                ClientScripts.push(DataObject);
            }
        }
    }catch(err){
        console.error("Error occurred while retrieving client scripts.", err);
    }

    
    return ClientScripts;
}


//-------------------------------------------


//Web socket init
app.listen(3000, () => {
    console.log("Listening at port 3000!");
})

//Hosting static webpage
app.use(express.static("public"));



//Listening for get requests for the scripts
// fs.readdir(GetPath("/public"),{recursive: true}, (err, files) => {
//     if(err){
//         console.log("Could not list directory.", err);
//         process.exit(1);
//     }

//     files.forEach((file, index) => {
//         // console.log(file, index);
//         fs.stat(GetPath("/public/" + file), (err, stat) => {
//             if(err){
//                 console.log("Error stating path.", err);
//                 return;
//             }

//             // console.log(stat);

//             if(stat.isFile()){
//                 ClientScripts.push(file);

//                 // console.log(GetExt(file));
//             // }else if(stat.isDirectory()){

//             }

//         });
//     })

// });



(async () => {
    const ClientScripts = [];
    await GetClientScripts(ClientScripts);
    console.log(ClientScripts);

    app.get("/Scripts", (req, res) => {
        // console.log(req);
        // console.log(res);

        res.send({Data: ClientScripts});
    })
})();

