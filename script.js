


var z=""

class Posts{
  constructor(date, location, title, post, pic1, blurb1, pic2, blurb2, pic3, blurb3, pic4, blurb4) {
  this.date = date;
  this.location = location;
  this.post = post;
  this.title = title
  this.pic1 = pic1;
  this.blurb1 = blurb1;
  this.pic2 = pic2;
  this.blurb2 = blurb2;
  this.pic3 = pic3;
  this.blurb3 = blurb3;
  this.pic4 = pic4;
  this.blurb4 = blurb4;
}
  format(){
   z=" <div class='container'> <div class='right'><b>"+this.location+"</b></div><div class='centered'>"+this.title+"</div><div class='left'>"+this.date+"</div></div><br><br><br><div class='container'> <div class='right'><img src =m1.webp width='400' height='400'></div><div class='centered'>"+this.post+"</div><div class='left'><img src =m1.webp width='400' height='400'></div></div>"
    return z
  }
}

// I will need to be able to grab different "x"'s and delte them. ( mabye just do this in the class, idk, I need to be able to dispaly diffrent posts)
// function yeet(){
//  let d= localStoage.getitem("all")
//   console.log(d)
  
// }

function onSubmit(){
 console.log(document.getElementById("post").value)
let x= new Posts (document.getElementById("date").value,document.getElementById("location").value, document.getElementById("title").value,document.getElementById("post").value,document.getElementById("pic1").value,document.getElementById("blurb1").value,document.getElementById("pic2").value,document.getElementById("blurb2").value,document.getElementById("pic3").value,document.getElementById("blurb3").value,document.getElementById("pic4").value,document.getElementById("blurb4").value )
  x=x.format()
  console.log(x)
localStorage.setItem("newentry",x)
   let c=  localStorage.getItem("all")
  c=c+x
  localStorage.setItem("all",c)
}
// function dude(){
 
//   let c=  localStorage.getItem("newentry")
//     console.log(c)
//    document.getElementById("body").diary += c

// }