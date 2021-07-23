document.addEventListener('DOMContentLoaded', function(){

    //document.querySelector('#add').disabled = true;

   // document.querySelector('#item').onkeyup = () => {
     //   document.querySelector('#add').disable = false;
    //}

    //by default, the submit button should be disabled
    document.querySelector('#submit').disabled = true;

    //
    document.querySelector('#item').onkeyup = () => {
        if (document.querySelector('#item').value.length>0){
        document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#item').value;
        
        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        document.querySelector('#item').value = ''; 
        document.querySelector('#submit').disabled = true;
        return false; 
    }
});
