console.log(document.querySelector("body").offsetHeight)

const menuBtnTag = document.querySelectorAll('.menu-btn')
menuBtnTag.forEach(ele=>{
    ele.addEventListener('mousemove',(event)=>{
        let x = event.pageX - event.target.offsetLeft
        let y = event.pageY - event.target.offsetTop
        console.log(x)

        ele.style.setProperty('--x',x+'px')
        ele.style.setProperty('--y',y+'px')

    })
})

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:2000,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },

  });

  const mainTag = document.querySelector('.main-container')

  const items = [
    {
        name:"Porsche 911 Dakar",
        img:"pics/1 Dakar.webp",
        info:"Of course there’s a new type of Porsche 911 on the way. When isn’t there? Soon we’re expecting to see a facelifted 992, with the 911 taking its first steps into the electric hybrid era. But in the meantime, there’s a jacked-up, rough-and-tumble version for living our your rally raid fantasies on the way to the supermarket."
    },
    {
        name:"Lamborghini Huracan Sterrato",
        img:"pics/2 lambo.webp",
        info:"And Porsche isn’t the only outfit exploring the realms of the off-roady-ready sports car. Lamborghini will kiss goodbye the Huracan by putting the Sterrato into production. Expect spotlights, big bolt-on wheelarches and owners to feel incredibly smug every time they see a regular supercar gingerly edging their precious carbon fibre splitter over a speed bump."
    },
    {
        name:"Range Rover Sport SV",
        img:"pics/3 RR SV.webp",
        info:"Land Rover’s Special Vehicle Operations division will rationalise all future projects behind one ‘SV’ badge, so the hot Range Rover Sport will lose a third of its ‘SVR’ badge. We’re expecting the engine to downsize too, likely from the raucous 5.0-litre supercharged V8 to a BMW-shared twin-turbo 4.4-litre V8 powerplant. Plug-in hybrid boost is a possibility, which SVR owners will love given how they always creep around so discreetly in their 2.2-tonne hypertanks."
    },
    {
        name:"Alpine A110R",
        img:"pics/4 Alpine.webp",
        info:`A lighter Alpine! Wouldn’t have thought it possible, would you? Us neither. But thanks to a diet of carbon fibre components including a new roof, rear screen and even carbon wheels, the little A110 has lost 34kg while gaining downforce and apparently shedding drag.

        It’s also much stiffer, grippier, and the seats will hold you like King Kong grasps a damsel in distress. It could be close to sports car nirvana in 2023... or will it be too serious and too hardcore for its own good?`
    },
    {
        name:`Mercedes-AMG C63`,
        img:"pics/5 C63.webp",
        info:`We’ll also be getting our hands on possibly the most controversial AMG of all time – including the C63 and AMG One hypercar. Yep, the C63 is back, and it looks handsome. But under the nostril-vented bonnet is no V8 – instead, it’s a 2.0-litre four-cylinder hybrid.

        Basically, an A45 engine with a chilli-powder electric boost shoved up its backside. The numbers are huge: 670bhp, 752lb ft – and 2,145kg. We’ll be taking the Christmas holidays to read the four-thousand page instruction manual.`
    },
    {
        name:"BMW M3 Touring",
        img:"pics/6 M3.webp",
        info:`And this is one of the contenders the C63 is aimed squarely at – BMW’s conceptually rather simple M3. No electrification or plug-in-ability here – just a thumping great 3.0-litre 503bhp straight-six in the front. And – at last – and estate body at the back.

        We’re already big fans of the M3 Competition with xDrive four-wheel drive (so long as we approach it with our eyes closed) so the M3 wagon promises to be a very complete bit of kit.`
    },
    {
        name:"Hyundai Ioniq 5 N",
        img:"pics/7 Ioniq.webp",
        info:`No pressure Hyundai, but everything the N Division has touched so far has been bloody brilliant. The i30N and i20N hot hatches, the wild Kona N mini-SUV – it’s gone from zero to hero and stayed there. Now N must make an electric crossover entertaining, by applying itself vigorously to the cyberpunk Ioniq 5 hatchback. 

        The N team insist they’re not interested in building a drag-race monster and though the dual-motor I5N will be rapid, we’re promised handling giggles and maybe even an amusing noise generator to make e-motoring less clinical. So far, truly laugh-out-loud EVs have been few and far between – over to Hyundai to prove the N division futureproof.`
    },
    {
        name:"All the Le Mans cars!",
        img:"pics/8 LM24.webp",
        info:'2023 is the year endurance racing fans have been waiting for. Missed the news? In short, lots of manufacturers are about to throw a huge pile of time and money at the sport, with the emergence of the LMh and LMDh classes at Le Mans and beyond. Joining Toyota and Glickenhaus in top-tier day-and-night racing we’ve got BMW, Porsche, Cadillac, Lamborghini, Peugeot… it ought to make Drive To Survive look like a vicar’s tea party.'
    },
    {
        name:"BMW M2",
        img:"pics/9 M2.webp",
        info:`We’ve already tested a prototype of the new M coupe, and discovered some of the key tech spec. Being based on the current M3/4 platform, the new M2 will be a heaver car than before, but the 3.0-litre straight-six is up to around 450bhp to counteract it.

        The rear axle is also inherited from the M4, and while the eight-speed automatic gearbox is available, the M2 will be the final M car ever to be offered with a six-speed manual transmission. So it's a sure-fire modern classic. Are the blocky looks growing on you?`
    },
    {
        name:"Lotus Emira 4cyl ‘AMG’",
        img:"pics/10 Emira.webp",
        info:`Lotus has been up-front that the new Emira will be its final petrol-engined car, but said engine is not just the Toyota-borrowed supercharged V6 on offer from this year. Soon we’ll get the ‘entry-level’ version, complete with AMG’s wild turbo four-cylinder which we know is good for up to 416bhp in the A45S. It’ll be joined solely to a twin-clutch paddleshift gearbox which Lotus has calibrated. One of the most exciting engines in production today, slotted amid a deft-handing British sports car? Expectations are VERY high.`
    },
    {
        name:"Alfa Romeo ‘6C’ supercar",
        img:"pics/11 alfa.webp",
        info:`No official pictures of this one yet, but rumour has it Alfa Romeo is about to spin off its own version of the Maserati MC20 as a flagship to the range. At one point a hybrid powertrain was thought to be on the table, to form a tie-in with the Italian brand’s efforts in F1, but it’s also possible Alfa is going to say goodbye to the petrol era with no assistance from batteries…

        In the meantime, here’s a picture of Alfa’s last supercar: the achingly pretty 8C. It’s okay, you can stare.`
    },
    {
        name:"Audi A6 e-tron",
        img:"pics/12 a6.webp",
        info:`Meanwhile, the Germans excess at big business expresses. Executive saloons like the Audi A6. Well, the A6 becomes an EV in 2023, gaining the e-tron moniker and a big ol’ battery. It’s understood fossil-fuelled Audi saloons will live on for a time overlapping with the new e-trons, but heartland Audi territory taking on Tesla will be a spicy showdown. Just how bad will range anxiety get when you’re tailgating and flashing the headlights?`
    },
    {
        name:"Fiat Panda EV",
        img:"pics/13 fiat.webp",
        info:'Remember this cootchie-coo cute concept car from 2019? In 2023, it’s set to morph into something you can actually buy. Fiat’s already electrified one half of its city car family with the 500e, but whereas the 500 majors on style, the ‘Pandae’ will be a boxier, more utilitarian offering. Italy has a proud history of no-nonsense people’s cars, but it’s a tall order for an EV to offer the same elegant simplicity and ultra-affordable price. Let’s see if Fiat can pull it off.'
    },
    {
        name:"Lamborghini V12 hybrid supercar",
        img:"pics/14 lambo.webp",
        info:`ICYMI, in October 2022 Lamborghini announced production of the final Aventador. That leaves a V12-sized hole at the top of the raging bull’s range, and what’s going to fill it? That’s right, another V12 mid-engined wedge.

        However, this will mark a new era for Lambo – it’s going plug-in hybrid. Rather than a lengthy e-range, we’re expecting a system that allows quiet engine-off running in town (which all Lambo owners have been begging for, of course) and a rapid-discharge battery that dumps e-boost torque into the drivetrain as the V12 winds itself into a frenzy. `
    },
    {
        name:"Maserati MC20 Folgore",
        img:"pics/15 MC20.webp",
        info:`Maserati’s electric era is now underway and it’s off to a fine start, as we discovered in our world exclusive drive of the GranTurismo Folgore. Next in the strategy is an all-electric version of the Grecale SUV to take the fight to the next gen Porsche Macan EV, but before that, Maserati’s new supercar is swapping cylinders for batteries. Set to appear first as an open-top ‘Cielo’ roadster, the electric MC20 will boast a four-figure power output to offset its increased weight.`
    },
    {
        name:"Gordon Murray T.33 ‘Spider’",
        img:"pics/16 gma.webp",
        info:'What a year to be in Gordon Murray’s best customer Whatsapp group (if such a thing exists). First deliveries of the T50 tri-seat hypercar are due in spring, followed by the T50S track version, which will then make way for the beautiful two-seat T33 model. Professor Murray has already hinted there will be two further variations of the less powerful (and fan-stripped) T33, which we’ve taken to mean a targa-roofed roadster, and then a potentially even lighter, fiercer track-spec variation. You wouldn’t leave him on read.'
    },
    {
        name:"McLaren Artura Spider",
        img:"pics/17 mcartura.webp",
        info:`The Artura hasn’t had the easiest start in life, but it’s McLaren’s core supercar and its first series production hybrid, which means it’s the basis for everything Woking does next. While you’re likely to be salivating over the prospect of a 720S replacement with Ferrari 296-busting power, the drop-top Artura shouldn’t be forgotten.

        McLaren’s Spiders are always fabulous because of the stiffness of the carbon tub, so they don’t feel compromised like say, a Lamborghini Huracan Spyder.  
        
        Safe to say, an open-season Artura feels more ‘McLaren’ than the mooted SUV.`
    },
    {
        name:"Pagani Utopia",
        img:"pics/18 pagani.webp",
        info:`Naming a car after an idealised perfect society is a power move from Pagani. It’s basically saying that its new third generation supercar is, well, perfect. Of course it’s got the raw numbers: 864bhp from a twin-turbo AMG V12, only 99 units to be built, each costing over £2million.

        But a Pagani is all about the details: the optional seven-speed manual gearbox, the butterfly doors, the slightly steampunk interior. New Paganis are very rare treats, so 2023’s introduction to Utopia should be one of this year’s highlights. `
    },
    {
        name:"Ferrari SF90 ‘Speciale’",
        img:"pics/19 sf90.webp",
        info: `The Ferrari SF90 has 986bhp. It does not need more power or speed. But Ferrari cannot stand still, so it’s plotting an even more extreme version, and it’s likely that the big gains will come not from the powertrain, but from aerodynamics.

        Like Porsche's GT3 RS, we’re expecting Ferrari will concentrate on extracting more performance through downforce, not shoving a rocket up the exhaust pipe.`
    },
    {
        name:"Cadillac Celestiq",
        img:"pics/20 caddy.webp",
        info:`Pretty stunning thing, isn’t it? Drink it in, because you won’t see many Celestiqs in the hire car parking lot when you next land Stateside. This is Caddy’s flagship EV, and it’s going to be priced from $300,000 as a Bentley-busting built-to-order luxury item that takes Cadillac back to the shagpile end of the lavish high-end car market.

        Expect twin electric motors delivering a total of over 600bhp and 300 miles of range as America tries to usurp Britain’s grip on the ultra-lux barge game.`
    },
    {
        name:"Ford Mustang Dark Horse",
        img:"pics/21 stang.webp",
        info:`A ‘dark horse’ is usually an unfancied or subtle contener that springs from nowhere to lead the pack. But there’s very little that’s shy, retiring and under-the-radar about Ford’s next pony. Think of it as a ‘Stang that’s been on a cardio workout – it’s got 500bhp, better cooling, a lighter radiator, magne-adaptive dampers… and lots of darkened trim of course.

        These are the twilight years of the muscle car, so you get the sense Ford’s thrown everything it can muster at this.`
    },
    {
        name:"Tesla Cybertruck",
        img:"pics/22 tesla.webp",
        info:`Like the Roadster, and the Semi truck, the Tesla Cybertruck has been mired in delays since its shock reveal all the way back in late 2019. And what’s more, it’s gone from being the potential leader in the e-truck arena to being left gasping behind the onrushing Rivian R1T, Hummer and Ford F-150 Lightning, with Chevy also joining the party in 2023 with a far more conventional offering.

        So the Cybertruck now has to be way, way more than just game-changing to look at – it has to be the best EV in the world, by miles. The US full-size truck market does not wait around for half-baked dawdlers…`
    },
    {
        name:"Aston Martin Valkyrie",
        img:"pics/23 valk.webp",
        info:`Returning for a record seventh time in TG’s ‘car’s we’re looking forward to next year’ list is Aston Martin’s F1-inspired hypercar.

        Though a trickle of cars are now reaching customers (apparently finished but lacking sign-off of the most extreme track mode) we’re still yet to drive the 1,000bhp+ V12 hybrid which was originally announced in 2016 as a partnership with the now absent Red Bull aero genius Adrian Newey.
        
        Worth the wait? Hopefully 2023 is the year we definitely, actually, definitively find out.`
    },
  ]


for (let i = 0; i < items.length; i++) {
        const num = i+1
        const countText = num<10?`0${num}`:num
        items[i].count = countText
}
console.log(items)

let itemsContain =""
makingItems(items)
function makingItems(array) {
    array.forEach((object)=>{
        itemsContain+=`
        <div class="inner-contain">
        <div class="item">
            <div class="title">
                <div class="inner-title">
                    <h1>${object.count}</h1>
                    <div>${object.name}</div>
                </div>
                <div class="info">
                    ${object.info}
                </div>
            </div>
            <div class="item-image hiddenR">
                <img src="${object.img}" alt="">
            </div>

        </div>
    </div>
        `
    })
    mainTag.innerHTML=itemsContain
}
let setTimeout1Id
let setTimeout2Id

const error = document.querySelector('.error')
const button = document.querySelector('.subscribe-btn')
button.addEventListener('click',(e)=>{
    if (!input.value.includes('@gmail.com')) {
        error.style.color="rgb(255, 64, 0)"
        error.innerHTML="Invalid email"
        error.style.display="block"
        input.value=""
        clearTimeout(setTimeout1Id)
        setTimeout1Id=setTimeout(()=>{
            error.style.display="none"
        },1000)
    }else{
        error.style.display="block"
        error.style.color="rgba(0, 255, 136, 0.642)"
        error.innerHTML="success"
        input.value=""
        clearTimeout(setTimeout2Id)
        setTimeout2Id=setTimeout(()=>{
            error.style.display="none"
        },1000)
    }
    let x = e.pageX - e.target.offsetLeft
    let y = e.pageY - e.target.offsetTop
    
    console.log(x)
    console.log(y)

    let ripples = document.createElement('em')
    ripples.style.left = x + 'px'
    ripples.style.top = y + 'px'
    button.appendChild(ripples)
    setTimeout(()=>{
        ripples.remove()
    },1000)
})
// end of the subscribe ripple effect

/* this logic have some issues so we will regenerate one
const input = document.querySelector('.input')
input.addEventListener('keyup',(event)=>{
    console.log(event.target.value)
    if (event.target.value.includes('@g')) {
        console.log(true)
        const mailText = event.target.value+'mail'
        event.target.value = mailText
    }
})
*/
const input = document.querySelector('.input');
let updated = false; // Flag to track if input has been updated already

input.addEventListener('keyup', (event) => {
    console.log(event.target.value);

    // Check if the input contains "@g" and it hasn't been updated yet
    if (!updated && event.target.value.includes('@g')) {
        updated = true; // Set the flag to true to avoid further updates

        console.log(true);
        const mailText = event.target.value + 'mail.com';
        event.target.value = mailText;
    } else if (!event.target.value.includes('@gmail.com') && !event.target.value.includes('@gmail.co') && !event.target.value.includes('@gmail.c')&& !event.target.value.includes('@gmail.')&& !event.target.value.includes('@gmail')&& !event.target.value.includes('@gmai')&& !event.target.value.includes('@gma')&& !event.target.value.includes('@gm')&& !event.target.value.includes('@g')) {
        updated = false; // Reset the flag if the input doesn't contain "@gmail.com" or "@gmail.co" anymore
    }
});


// let's creat scroll animation so that we will need to use ovserver constructor
const observerL = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('showL')
        }else{
            entry.target.classList.remove('showL')
        }
    })
})
const hiddenElementsL = document.querySelectorAll('.hiddenL')
hiddenElementsL.forEach((ele)=>observerL.observe(ele))

const observerR = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('showR')
        }else{
            entry.target.classList.remove('showR')
        }
    })
})
const hiddenElementsR = document.querySelectorAll('.hiddenR')
hiddenElementsR.forEach((ele)=>observerR.observe(ele))


const observerT = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('showR')
        }else{
            entry.target.classList.remove('showR')
        }
    })
})
const hiddenElementsT = document.querySelectorAll('.title')
hiddenElementsT.forEach((ele)=>observerT.observe(ele))

const observerS = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('showS')
        }else{
            entry.target.classList.remove('showS')
        }
    })
})
const hiddenElementsS = document.querySelectorAll('.register-contain')
hiddenElementsS.forEach((ele)=>observerS.observe(ele))
/*
// on off animation button
const switchButton = document.getElementById('flexSwitchCheckChecked');

function toggleAnimations() {
    const animationEnabled = switchButton.checked;
    console.log(animationEnabled)
    
    if (!switchButton.checked) {
        const observerL = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showL')
                }else{
                    entry.target.classList.remove('showL')
                }
            })
        })
        const hiddenElementsL = document.querySelectorAll('.hiddenL')
        hiddenElementsL.forEach((ele)=>observerL.observe(ele))
        
        const observerR = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showR')
                }else{
                    entry.target.classList.remove('showR')
                }
            })
        })
        const hiddenElementsR = document.querySelectorAll('.hiddenR')
        hiddenElementsR.forEach((ele)=>observerR.observe(ele))
        
        
        const observerT = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showR')
                }else{
                    entry.target.classList.remove('showR')
                }
            })
        })
        const hiddenElementsT = document.querySelectorAll('.title')
        hiddenElementsT.forEach((ele)=>observerT.observe(ele))
        
        const observerS = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showS')
                }else{
                    entry.target.classList.remove('showS')
                }
            })
        })
        const hiddenElementsS = document.querySelectorAll('.register-contain')
        hiddenElementsS.forEach((ele)=>observerS.observe(ele))
    } else{
        const observerL = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showL')
                }else{
                }
            })
        })
        const hiddenElementsL = document.querySelectorAll('.hiddenL')
        hiddenElementsL.forEach((ele)=>observerL.observe(ele))
        
        const observerR = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showR')
                }else{
                }
            })
        })
        const hiddenElementsR = document.querySelectorAll('.hiddenR')
        hiddenElementsR.forEach((ele)=>observerR.observe(ele))
        
        
        const observerT = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showR')
                }else{
                }
            })
        })
        const hiddenElementsT = document.querySelectorAll('.title')
        hiddenElementsT.forEach((ele)=>observerT.observe(ele))
        
        const observerS = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('showS')
                }else{
                }
            })
        })
        const hiddenElementsS = document.querySelectorAll('.register-contain')
        hiddenElementsS.forEach((ele)=>observerS.observe(ele))
    }
}

// Call the function when the page loads to set the initial state
document.addEventListener("DOMContentLoaded", toggleAnimations);


// Add event listener to the switch button
switchButton.addEventListener('change', toggleAnimations);
*/
