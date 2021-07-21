document.addEventListener('DOMContentLoaded', function(){

    //document.querySelector('#add').disabled = true;

   // document.querySelector('#item').onkeyup = () => {
     //   document.querySelector('#add').disable = false;
    //}

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#item').value;
        
        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        document.querySelector('#item').value = ''; 

        return false; 
    }
});
