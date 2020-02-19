function day () {
    let cc = parseInt(document.getElementById("Century").value);
    let yy = parseInt(document.getElementById("Year").value);
    let mm = parseInt(document.getElementById("Month").value);
    let dd = parseInt(document.getElementById("Day").value);
    let male =parseInt(document.getElementById("Male").value);
    let female =parseInt(document.getElementById("Female").value);

    var dayWeek = Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7 );

    if(document.getElementById('Male').checked && dayWeek == 0 ){
      alert('You are born on Sunday.Your Akan name is Kwasi');
    }

    else if(document.getElementById('Male').checked && dayWeek == 1 ){
      alert('You are born on Monday.Your Akan name is Kwadwo');
    }

    else if(document.getElementById('Male').checked && dayWeek == 2 ){
      alert('You are born on Tuesday.Your Akan name is Kwabena');
    }

    else if(document.getElementById('Male').checked && dayWeek == 3){
      alert('You are born on Wednesday.Your Akan name is Kwaku');
    }

    else if(document.getElementById('Male').checked && dayWeek == 4 ){
      alert('You are born on Thursday.Your Akan name is Yaw')
    }

    else if(document.getElementById('Male').checked && dayWeek == 5 ){
      alert('You are born on Friday.Your Akan name is Kofi');


    else if(document.getElementById('Male').checked && dayWeek == 6 ){
      alert('You are born on Saturday.Your Akan name is Kwame');
    }


    else if(document.getElementById('Female').checked && dayWeek == 0 ){
      alert('You are born on Sunday.Your Akan name is Akosua');
      }

    else if(document.getElementById('Female').checked && dayWeek == 1 ){
      alert('You are born on Monday.Your Akan name is Adwoa');
    }

    else if(document.getElementById('Female').checked && dayWeek == 2 ){
      alert('You are born on Tuesday.Your Akan name is Abenaa');
    }

    else if(document.getElementById('Female').checked && dayWeek == 3 ){
      alert('You are born on Wednesday.Your Akan name is Akua');
    }

    else if(document.getElementById('Female').checked && dayWeek == 4 ){
      alert('You are born on Thursday.Your Akan name is Yaa');
    }

    else if(document.getElementById('Female').checked && dayWeek == 5 ){
      alert('You are born on Friday.Your Akan name is Afua');
    }

    else if(document.getElementById('Female').checked && dayWeek == 6){
      alert('You are born on Saturday.Your Akan name is Ama');
    }
  }
