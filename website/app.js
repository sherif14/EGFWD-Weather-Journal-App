
/* Global Variables */
const url = "http://localhost:8000";
const api = "5dc2b5725ba8f661fb00b3422c79bfa2";
const date = document.getElementById('date');
const content = document.getElementById('content');
const catchError = (error)=>console.error("errors=>",error);


function generate(){ 
    let data={
        zipCode:document.getElementById('zip').value,
        content:document.getElementById('feelings').value,
        date: new Date()
    };
    getZipInfo{data.zipCode}.then{zipInfo=>{
        if(zipInfo.cod !=200)
           return alert(zipInfo.message)
        
        data.document.getElementById('temp')=zipInfo.list[0].main.document.getElementById('temp');
        postDateToServer (data);

    }}.catch(catchError);
};

document.getElementById('generate').addEventListener('click',generate);


async function getZipInfo(zipCode){
    return await
    (await
        fetch(`http://api`))
}





// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();