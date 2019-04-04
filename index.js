



 /*var message;
 function popup(message){
     alert(message);
 }

 function getAddress(){
     var link = document.getElementById("link1");
     var address = link.href;
     document.getElementById("address");
 }

 
     var makelist = "<ol><li>sana</li><li>Numair</li><li>bhensaa</li></ol>";
     document.getElementById("listss").innerHTML = makelist;


 function makebig(){
     document.getElementById("p1").className = "big";

 } 
 
 function makeoriginal(){
     document.getElementById("p1").className = "again";
 }*/

 /*var titles = document.getElementsByClassName('title');
 var lis = document.getElementsByClassName('kk');
 Array.from(lis).forEach(function(item){
     console.log(item);
 })*/

 /*const listitem = document.querySelector('#ballons');
 listitem.innerHTML += '<h1> para </h1>';*/

 /*const findnnode = document.querySelector('#ballons');
 console.log('the parent node is:',findnnode.parentNode);

 const make = document.querySelector('.title');
 console.log('the parent node is:',make.parentNode);
 console.log(findnnode.children);*/

 /*var btns = document.querySelectorAll('#ballons.delete');
 Array.from(btns).forEach(function(btn){
     btn.addEventListener('click',function(e){
         const li = e.target.parentElement;
         li.parentNode.removeChild(li);
     });
 });*/


 //how to set and remove attributes
// var book = document.querySelector('li:first-child.name');

 // add a list
 /*const addform = document.forms['add-book'];
 addform.addEventListener('submit',function(e){
     e.preventDefault();
     const value = addform.querySelector('input[type="text"]').value;
     console.log(value);
 });*/

 //main java starts here

// how to hide any thing
/*const hidebox = document.querySelector('#hide');
hidebox.addEventListener('change',function(e){
    if(hidebox.checked){
        listed.style.display = "none";
    }
    else{
        listed.style.display = "initial";
    }
})*/


//delete
const listed = document.querySelector('#mainlists ul');
listed.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        listed.removeChild(li);
    }
})
//add
const addnext = document.forms['add-work'];
addnext.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addnext.querySelector('input[type="text"]').value;
    //now create add list
    const li = document.createElement('li');
    const workroutine = document.createElement('span');
    const dltbtn = document.createElement('button');
    const editbtn = document.createElement('button');
    //add content
    dltbtn.textContent = "Delete";
    workroutine.textContent = value;
    editbtn.textContent = "Edit";
    dltbtn.setAttribute('class','delete');
   // dltbtn.setAttribute('id','ff');
    workroutine.setAttribute('class','text');
    editbtn.setAttribute('class','edit');
    //append to document
    li.appendChild(workroutine);
    li.appendChild(dltbtn);
    li.appendChild(editbtn);
    listed.appendChild(li);
   
}) /* add ends here */

//edit
listed.addEventListener('click',function(e){
    e.preventDefault();
    var next = listed.querySelector('.edit');
    if(e.target.className=== "edit"){
        var editpreviousvalue = e.target.parentElement;
        var another = editpreviousvalue.firstElementChild;
        var xyz = another.textContent;
        addnext.querySelector('input[type="text"]').value = xyz;
        var hidepreviouslist = e.target.parentElement;
        listed.removeChild(hidepreviouslist);

    }
})

/*const next = document.querySelector('editbtn');
next.addEventListener('click',function(e){
    if(e.target.className == "edit"){
        var another = e.target.parentElement;
        var abc = another.firstElementChild;
        var xyz = abc.textContent;
        var nextvalue = 
        
        })


    }
})*/ /*edit ends here*/



//search
const searchbar = document.forms['search-box'].querySelector('input');
searchbar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const work = listed.getElementsByTagName('li');
    Array.from(work).forEach(function(item){
        const title = item.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
    
})
