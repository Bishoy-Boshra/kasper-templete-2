// for the nav 
let navMenu = document.querySelector( "header" )

window.addEventListener( "scroll", function ()
{
  // console.log( window.scrollY )
  if ( window.scrollY >= 500 )
  {
    navMenu.classList.add( "tofixed" )
  } else
  {
    navMenu.classList.remove( "tofixed" )
  }
} )



// for the Menu in the Mobile
let togMenu = document.querySelector( ".toggle-menu" );
let ulLink = document.querySelector( "header nav ul" )

togMenu.onclick = ( () =>
{
  ulLink.classList.toggle( "show" )
  if ( ulLink.classList.contains( "show" ) )
  {
    togMenu.style.color = "#19c8fa";
  } else
  {
    togMenu.style.color = "#fff"
  }
} );

// For the slider background Image 
let leftButton = document.querySelector( ".landing .fa-angle-left" )
let rightButton = document.querySelector( ".landing .fa-angle-right" )
let mybackground = [ "1.jpg", "4.jpg", "3.jpg" ];
let backgroundContainer = document.querySelector( ".landing" );
let myulBullets = document.querySelector( ".bullets" )
let currentPhoto = 1;


// function to create li With the Count of my IMage 
CreateLICount()
let arrayUl = Array.from( myulBullets.children )


checker()
// important Variables for the code


function CreateLICount ()
{
  for ( i = 1; i <= mybackground.length; i++ )
  {

    let li = document.createElement( "li" )
    li.setAttribute( "id", i )
    myulBullets.appendChild( li )
  }
}

// left Button
leftButton.onclick = ( ( e ) =>
{
  currentPhoto--
  // backgroundContainer.style.backgroundImage = ( `url(../image/${ mybackground[ currentPhoto ] })` )
  checker()
} )

// right Button 
rightButton.onclick = ( ( e ) =>
{
  currentPhoto++;
  checker();
} )
// check for the position to the Background image 
function checker ()
{
  backgroundContainer.style.backgroundImage = ( `url(./image/${ mybackground[ currentPhoto ] })` );
  if ( currentPhoto === 0 )
  {
    leftButton.style.display = "none"
  } else
  {
    leftButton.style.display = "block"
  }
  if ( currentPhoto === mybackground.length - 1 )
  {
    rightButton.style.display = "none"
  } else
  {
    rightButton.style.display = "block"
  }

  // to Run  Add Active Class to the Bullets
  AddActiveClass()
}

// to Add Active Class to the Bullets
function AddActiveClass ()
{
  arrayUl.forEach( ( ul, index ) =>
  {
    if ( index === currentPhoto )
    {
      ul.classList.add( "active" )
    } else
    {
      ul.classList.remove( "active" )
    }
  } )
}

bulletesclickEvent()

function bulletesclickEvent ()
{
  for ( i = 0; i < arrayUl.length; i++ )
  {
    arrayUl[ i ].onclick = ( function ()
    {
      currentPhoto = ~~this.getAttribute( "id" ) - 1;
      checker()
    } )
  }
}

// ==========================(End the slider )===============================
// ==========================(for the portfolio section)
let container_images = document.querySelector( ".imgs-container" )
  , imges_box = document.querySelector( ".imgs-container .img-box" )

// the images src

let cars = [ "./image/portfolio/port22.jpg", "./image/portfolio/port34.jpg", "./image/portfolio/port35.jpg", "./image/portfolio/port36.jpg", "./image/portfolio/port37.jpeg", "./image/portfolio/port33.jpg", "./image/portfolio/port32.jpeg", "./image/portfolio/port21.jpg", "./image/portfolio/port20.jpg", "./image/portfolio/port17.jpg", ],
  photography = [ "./image/portfolio/port29.jpg", "./image/portfolio/port28.jpg", "./image/portfolio/port10.jpg", "./image/portfolio/port9.jpg", "./image/portfolio/port8.jpg", "./image/portfolio/port7.jpg", "./image/portfolio/port4.jpg" ],
  girls = [ "./image/portfolio/port27.jpeg", "./image/portfolio/port26.jpeg", "./image/portfolio/port25.jpeg", "./image/portfolio/port23.jpeg", "./image/portfolio/port15.jpeg", "./image/portfolio/port16.jpeg", "./image/portfolio/port14.jpeg", "./image/portfolio/port13.jpeg" ],
  wep = [ "./image/portfolio/port18.jpg", "./image/portfolio/port24.png", "./image/portfolio/port30.jpeg", "./image/portfolio/port19.jpeg", "./image/portfolio/port3.jpg", "./image/portfolio/port2.jpg" ],
  animation = [ "./image/portfolio/port31.jpg", "./image/portfolio/port12.jpg", "./image/portfolio/port11.jpg", "./image/portfolio/port5.jpg" ];

// appending the photos to the dom

for ( i = 0; i <= 36; i++ )
{
  let allIamge = cars.concat( photography, girls, wep, animation );
  let img_src = allIamge[ i ]

  // create the new image source 
  let NewImageSrc = imges_box.cloneNode( true ).firstElementChild;
  NewImageSrc.setAttribute( "src", allIamge[ i ] );

  // create the new image  box 
  let NewImageBox = imges_box.cloneNode()
  NewImageBox.appendChild( NewImageSrc );

  // create h2 
  let h4 = document.createElement( "h4" )
    , h2Text = document.createTextNode( "Awesome Image" )


  // create the paragraph
  let p = document.createElement( "p" )
  let car = document.createTextNode( "car" ),
    caption = document.createElement( "div" ),
    photo = document.createTextNode( "photo" ),
    girl = document.createTextNode( "girl" ),
    weptext = document.createTextNode( "wep" ),
    animationtext = document.createTextNode( "animation" )

  // append h2 to the image box 
  h4.appendChild( h2Text )
  caption.appendChild( h4 )
  caption.className = "caption"
  NewImageBox.appendChild( caption )

  // delete the clone photo class Name 
  NewImageSrc.parentElement.classList.remove( "photo" )
  // create the paragraph

  if ( NewImageSrc.getAttribute( "src" ) )
  {
    cars.forEach( ( el ) =>
    {
      if ( el === NewImageSrc.getAttribute( "src" ) )
      {
        NewImageSrc.parentElement.classList.add( "car" )
        p.appendChild( car )
        caption.appendChild( p )
        NewImageBox.appendChild( caption )
      };
    } )
    photography.forEach( ( el ) =>
    {
      if ( NewImageSrc.getAttribute( "src" ) === el )
      {
        NewImageSrc.parentElement.classList.add( "photo" )
        p.appendChild( photo )
        caption.appendChild( p )
        NewImageBox.appendChild( caption )
      }
      girls.forEach( ( el ) =>
      {
        if ( el === NewImageSrc.getAttribute( "src" ) )
        {
          NewImageSrc.parentElement.classList.add( "girl" )
          p.appendChild( girl )
          caption.appendChild( p )
          NewImageBox.appendChild( caption )
        }
      } )
      wep.forEach( ( el ) =>
      {
        if ( el === NewImageSrc.getAttribute( "src" ) )
        {
          NewImageSrc.parentElement.classList.add( "wep" )
          p.appendChild( weptext )
          caption.appendChild( p )
          NewImageBox.appendChild( caption )
        }
      } )
      animation.forEach( ( el ) =>
      {
        if ( el === NewImageSrc.getAttribute( "src" ) )
        {
          NewImageSrc.parentElement.classList.add( "animation" )
          p.appendChild( animationtext )
          caption.appendChild( p )
          NewImageBox.appendChild( caption )
        }
      } )
    } )
  }

  // appendig the box to the body 
  container_images.appendChild( NewImageBox )

}

// To THE More Button
document.addEventListener( "click", ( e ) =>
{
  if ( e.target.classList.contains( "more-1" ) && e.target.innerHTML == "more" )
  {
    e.target.style.zIndex = -1
    document.querySelector( ".Portfolio .close-1" ).style.zIndex = "1"
    container_images.style.height = "auto"
  }
} )
// To THE Close Button 
document.addEventListener( "click", ( e ) =>
{
  if ( e.target.classList.contains( "close-1" ) )
  {
    e.target.style.zIndex = -1
    document.querySelector( ".Portfolio .more-1" ).style.zIndex = "1"
    container_images.style.height = "620px"
  }
} )

// TO The Shuffle Filtering 
let shuffle = document.querySelector( ".Portfolio .container .shuffle" );
let theBoximageContainerFilter = document.querySelectorAll( ".img-box" )

let shufflechildern = Array.from( shuffle.children )
let arrimage = Array.from( theBoximageContainerFilter )


shufflechildern.forEach( ( li ) =>
{
  li.onclick = ( ( e ) =>
  {
    shufflechildern.forEach( ( lli ) => lli.classList.remove( "active" ) )
    e.target.classList.add( "active" )
    if ( e.target.classList.item( 0 ) === "all" )
    {
      arrimage.forEach( ( x ) => x.classList.remove( 'hidden' ) )
    } else
    {
      let sm = arrimage.filter( function ( imgx )
      {
        if ( imgx.classList.item( 2 ) !== e.target.classList.item( 0 ) )
        {
          imgx.classList.add( "hidden" )
        } else
        {
          imgx.classList.remove( 'hidden' )
        }

      } )
    }
  } )
} )

// for the number increase in scroll

let numcontainer = document.querySelectorAll( ".status .box .number" )
let sectionStatus = document.querySelector( ".status" );
let started = false

window.addEventListener( "scroll", function ()
{
  if ( window.scrollY >= sectionStatus.offsetTop - 300 )
  {
    if ( !started )
    {
      numcontainer.forEach( ( numel ) => startcount( numel ) )
    }
    started = true;
  }
} )

function startcount ( el )
{
  let goal = el.dataset.num;
  let count = setInterval( () =>
  {
    el.textContent++;
    if ( el.textContent == goal )
    {
      clearInterval( count )
    }
  }, 2000 / goal );
}
//-------------------------------------------
// to decrease the the width value in the progress

let progcontiner = document.querySelectorAll( ".skills .skills-o .prog-skills span" )
let sectionprog = document.querySelector( ".our-skills" )


window.addEventListener( "scroll", function ()
{
  if ( window.scrollY >= sectionprog.offsetTop - 300 )
  {
    progcontiner.forEach( ( el ) =>
    {
      el.style.width = el.dataset.prog;
    } )
  }
} )

// animation for the pricing 
let pricing = document.querySelector( ".pricing" )
let plans = document.querySelectorAll( ".pricing .plan .head" )
let ul = document.querySelectorAll( ".pricing .plan ul" )

window.addEventListener( "scroll", () =>
{
  if ( window.scrollY >= pricing.offsetTop )
  {
    plans.forEach( ( plan ) =>
    {
      plan.classList.add( "anim" )
    } )
    ul.forEach( ( ul ) => ul.classList.add( "anim" ) )
  }
} )


// for the copy right
let copyRight = document.querySelectorAll( "footer .copy-right span" )[ 0 ]

let datayear = new Date()

copyRight.textContent = datayear.getFullYear()


// search icon 
let search = document.querySelector( "header nav .fa-search" )
let searchInput = document.querySelector( "header nav input" )
let searchSpan = document.querySelector( "header nav span" )
//-------------------------------------
// the Element to search 
let elementSearch = document.querySelectorAll( "p" )
let arrSearch = Array.from( elementSearch );

// arrSearch.forEach( ( ee ) => console.log( ee.style.cssText = `color:yellow;
// font-weight:bold;` ) )

search.onclick = ( () =>
{
  searchInput.classList.toggle( "active" )
  if ( searchInput.classList.contains( "active" ) )
  {
    searchInput.focus()
  }
  searchSpan.classList.toggle( "active" )
} )

searchInput.onkeyup = searchFunc;

function searchFunc ()
{
  let filter_val = searchInput.value.toLowerCase();

  if ( filter_val.length = 0 || filter_val == "" )
  {
    searchInput.setAttribute( "placeholder", "Can Not Be Empty" )
  } else
  {
    for ( var i = 0; i <= arrSearch.length; i++ )
    {
      // let a = ;
      // elementSearch[ i ].textContent || elementSearch[ i ].innerText ||
      let aValue = elementSearch[ i ].textContent;

      if ( aValue.toLowerCase().includes( filter_val ) )
      {
        elementSearch[ i ].style.cssText = `background-color:yellow;
      font-weight:bold;
      color:black`
      } else
      {
        elementSearch[ i ].style.cssText = ""
      }
    }
  }

}


// for Add Active Class to th current Section in nav auto

let SectionAllContainer = document.querySelectorAll( "section" )
let LinksInNav = document.querySelectorAll( "header nav ul li a" )
let sectionParent = [];

SectionAllContainer.forEach( ( sec ) =>
{
  if ( sec.id !== "" )
  {
    sectionParent.push( sec )
  }
} )

console.log( sectionParent )
console.log( LinksInNav )



window.addEventListener( "scroll", function ()
{
  let scrollPosition = document.documentElement.scrollTop;
  sectionParent.forEach( ( sec ) =>
  {
    if ( scrollPosition >= sec.offsetTop - 100 && scrollPosition < sec.offsetTop + sec.offsetHeight )
    {
      console.log( sec.getAttribute( "id" ) )
      removeActiveClass()
      addActiveClass( sec.getAttribute( "id" ) )
    }
  } )
} )

function removeActiveClass ()
{
  LinksInNav.forEach( ( a ) =>
  {
    a.classList.remove( "active" )
  } )
}

function addActiveClass ( id )
{
  LinksInNav.forEach( ( a ) =>
  {
    if ( `#${ id }` === a.getAttribute( "href" ) )
    {
      a.classList.add( "active" )
    }
  } )

}

console.log( LinksInNav[ 0 ].getAttribute( "href" ) )