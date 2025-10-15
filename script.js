(() =>{

//Inicijalizacija

const polje=document.querySelectorAll(".polje");
let broj1=document.getElementById("broj1");
let broj2=document.getElementById("broj2");
const restartPartije=document.getElementById("restartPartije");
const restartRezultata=document.getElementById("restartRezultata");
const nereseno=document.getElementById("nereseno");
const pokreniIgru=document.getElementById("pokreniIgru");
const upisiIgrace=document.getElementById("upisiIgrace");
const iksOks=document.getElementById("iksOks");
const prikaz=document.getElementById("prikaz");
let igracPrvi=document.getElementById("igracPrvi");
let player1=document.getElementById("player1");
let igracDrugi=document.getElementById("igracDrugi")
let player2=document.getElementById("player2");
const restartCelokupneIgre=document.getElementById("restartCelokupneIgre");

//Provera da li postoje ti elementi

//Ako ne postoje
if(polje==null || broj1==null || broj2==null || restartPartije==null || restartRezultata==null || nereseno==null || pokreniIgru==null || upisiIgrace==null || iksOks==null || prikaz==null || igracPrvi==null || player1==null || igracDrugi==null || player2==null || restartCelokupneIgre==null)
{
  console.log("Greska");
 
}

//Ako postoje
else
{

  let nereseno1=0;
  let igrac="x";
  let br1=0;
  let br2=0;
  let i;
  let prazno;
  let krajIgre;
  const pobeda=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]

  //Odmah na samom startu stavljamo da se Iks i Oks ne prikazuju
  iksOks.classList.add("nestani");
  prikaz.classList.add("nestani");

  //Za svako polje koje se klikne, to jest upisivanje IKS i OKS
  polje.forEach(p=>{
    p.addEventListener("click",function(){
      if(p.textContent=="")
      {
        
        
        if(igrac=="x")
        {
          
          p.textContent=igrac;
          p.classList.add("IKS");
          igrac="o"
        }
        else if(igrac=="o")
        {
          
          p.textContent=igrac;
          p.classList.add("OKS");
          igrac="x"
        }
        

      }
      proveriPobedu();
      
    

    })
  })

  //Funkcija koja proverava da li je neko pobedio u partiji
  function proveriPobedu()
  {
  
  krajIgre=false;
      for(i=0;i<pobeda.length;i++)
        {
          const [a, b, c] = pobeda[i];
          //Provera da li je X pobedio
          if(polje[a].textContent=="x" && polje[b].textContent=="x" && polje[c].textContent=="x")
            {
            polje[a].classList.add("IKS1");
            polje[a].classList.remove("IKS");
            polje[b].classList.add("IKS1");
            polje[b].classList.remove("IKS");
            polje[c].classList.add("IKS1");
            polje[c].classList.remove("IKS");

              for(i=0;i<polje.length;i++)
                {
                    polje[i].classList.add("disabled");
                }
              br1++;
              broj1.textContent=br1;
              broj1.classList.add("blink_me");
              krajIgre=true;
                
              break;
                
            }
            //Provera da li je O pobedio
          else if(polje[a].textContent=="o" && polje[b].textContent=="o" && polje[c].textContent=="o")
            {
            polje[a].classList.add("OKS1");
            polje[a].classList.remove("OKS");
            polje[b].classList.add("OKS1");
            polje[b].classList.remove("OKS");
            polje[c].classList.add("OKS1");
            polje[c].classList.remove("OKS");

            for(i=0;i<polje.length;i++)
             {
                polje[i].classList.add("disabled");
             }

            br2++;
            broj2.textContent=br2;
            broj2.classList.add("blink_me");
            krajIgre=true;
            break;
            }
    
        }

  //Ako nema pobednika onda je nereseno
      if(krajIgre==false)
        {
          proveriNereseno();
        }
    
    
  }

  //Funkcija koja proverava da li je nereseno
  function proveriNereseno() 
  {
      prazno = false;
      for(i = 0; i < polje.length; i++) 
        {
          if(polje[i].textContent == "")
          {
              prazno = true;
              break;
          }

        }

      if(prazno==false)
        {
          for(i=0;i<polje.length;i++)
            {

              polje[i].classList.add("disabled");

            }

          nereseno1++;
          nereseno.textContent = nereseno1;
          nereseno.classList.add("blink_me");
              
        }
  }

  //Dugme koje restartuje partiju
  restartPartije.addEventListener("click",function()
  {
    igrac="x"
    for(i=0;i<polje.length;i++)
     {
      polje[i].textContent="";
      polje[i].classList.remove("IKS1");
      polje[i].classList.remove("IKS");
      polje[i].classList.remove("OKS");
      polje[i].classList.remove("OKS1");
      polje[i].classList.remove("disabled");
      polje[i].classList.remove("blink_me");
      broj1.classList.remove("blink_me");
      broj2.classList.remove("blink_me");
      nereseno.classList.remove("blink_me");
     }
    
    
  })

  //Dugme koje restartuje rezultat
  restartRezultata.addEventListener("click", function()
  {
    igrac="x"
    for(i=0;i<polje.length;i++)
     {
      polje[i].textContent="";
      polje[i].classList.remove("IKS1");
      polje[i].classList.remove("IKS");
      polje[i].classList.remove("OKS");
      polje[i].classList.remove("OKS1");
      polje[i].classList.remove("disabled");
      polje[i].classList.remove("blink_me");
      broj1.classList.remove("blink_me");
      broj2.classList.remove("blink_me");
      nereseno.classList.remove("blink_me");
     }

    br1=0;
    br2=0;
    nereseno1=0;
    broj1.textContent=br1;
    broj2.textContent=br2;
    nereseno.textContent = nereseno1;
  })

  //Dugme koje pokrece igru
  pokreniIgru.addEventListener("click",function()
  {

   if(player1.value!="") 
    { 
      igracPrvi.textContent=player1.value; 
  
    }

   else
    { 
      igracPrvi.textContent="Player 1"; 
    }

    if(player2.value!="") 
    { 
      igracDrugi.textContent=player2.value; 
    }

    else
    { 
      igracDrugi.textContent="Player 2"; 
    }

   iksOks.classList.remove("nestani");
   prikaz.classList.remove("nestani");


   upisiIgrace.classList.add("nestani");


  });

  //Dugme koje restartuje celokupnu igru
  restartCelokupneIgre.addEventListener("click",function()
  {
    player1.value=null;
    player2.value=null;
    iksOks.classList.add("nestani");
    prikaz.classList.add("nestani");
    upisiIgrace.classList.remove("nestani");
    igrac="x"
    for(i=0;i<polje.length;i++)
     {
      polje[i].textContent="";
      polje[i].classList.remove("IKS1");
      polje[i].classList.remove("IKS");
      polje[i].classList.remove("OKS");
      polje[i].classList.remove("OKS1");
      polje[i].classList.remove("disabled");
      polje[i].classList.remove("blink_me");
      broj1.classList.remove("blink_me");
      broj2.classList.remove("blink_me");
      nereseno.classList.remove("blink_me");
     }
    br1=0;
    br2=0;
    nereseno1=0;
    broj1.textContent=br1;
    broj2.textContent=br2;
    nereseno.textContent = nereseno1;


  })
  }

})();