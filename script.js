const ben=document.getElementById("ben")
let mode="ben"
let index=0;
let watch=[
    "watch/heatblast.webp",
    "watch/wildmutt.webp",
    "watch/diamondhead.webp",
    "watch/fourarms.webp",
    "watch/xlr8.webp",
    "watch/cannonbolt.webp",
    "watch/greymatter.webp",
    "watch/ripjaws.webp",
    "watch/ghostfreak.webp",
    "watch/wildvine.webp",
]
let alien=[
    "aliens/heatblast.webp",
    "aliens/wildmutt.webp",
    "aliens/diamondhead.png",
    "aliens/fourarms.png",
    "aliens/xlr8.png",
    "aliens/cannonbolt.webp",
    "aliens/greymatter.webp",
    "aliens/ripjaws.png",
    "aliens/ghostfreak.jpeg",
    "aliens/wildvine.webp",
]
ben.addEventListener("click",() => {
    if (mode==="ben"){
        ben.src=watch[index]
        mode="watch"
    }
    else if (mode==="watch"){
        ben.src=alien[index]
        mode="alien"
    }
    else if (mode==="alien"){
        ben.src=watch[index]
        mode="watch"
    }
})
document.addEventListener("keydown",(event) =>{
    if (mode!=="watch") return
    if (event.key==="ArrowRight"){
        index=(index+1)%10
        ben.src=watch[index]
    }
    else if (event.key==="ArrowLeft"){
        index=(index+9)%10
        ben.src=watch[index]
    }
    else if (event.key==="ArrowDown"){
        ben.src="ben.png"
        mode="ben"
    }
})