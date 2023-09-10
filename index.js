const calculateTemp= () => {

    const temperature=document.getElementById('temp').value;
    
    const tempType=document.getElementById('temp_Diff');
    const tempTypeVal=temp_Diff.options[tempType.selectedIndex].value;
    // console.log(tempTypeVal);
    
    let ans;
   

    const CelToFah=(taapmaan)=>{
        let fahrenheit=Math.round((taapmaan*9/5)+32);
        return fahrenheit;
    }
    const FahToCel=(taapmaan)=>{
        let celsius=Math.round((taapmaan-32)*5/9);
        return celsius;
    }

    if(tempTypeVal == 'Cel'){
        ans=CelToFah(temperature);
        document.getElementById('result').innerHTML= `= ${ans}°Fahrenheit`;
    }
    else{
        ans=FahToCel(temperature);
        document.getElementById('result').innerHTML=`= ${ans}°Celsius`;

    }

}

