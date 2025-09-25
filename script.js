function volume_sphere() {
        //Write your code here
        let calculateBtn=document.getElementById('submit');

        calculateBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            //geting radius input
            let rad=document.getElementById('radius');
            //selecting the volume input
            let volume=document.getElementById('volume');
            //converting the radius input to the number
            let r=parseInt( rad.value);
            //if radius is negative or not a number then else vol will be placed inside the volume input
            if(isNaN(r)||r<0)
            {
              volume.value='NaN';
            }
            else{
              let vol=(4/3)*3.14*Math.pow(r,3);
              volume.value=vol.toFixed(4);
            }
            
        })
      }

      window.onload = document.getElementById("MyForm").onsubmit =
        volume_sphere;