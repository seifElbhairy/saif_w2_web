function click1()
{
    document.getElementById('php1').style.display='block'
    document.getElementById('php2').style.display='none'
    document.getElementById('php3').style.display='none'
    document.getElementById('php4').style.display='none'
}
function click2()
{
    document.getElementById('php1').style.display='none'
    document.getElementById('php2').style.display='block'
    document.getElementById('php3').style.display='none'
    document.getElementById('php4').style.display='none'
}
function click3()
{
    document.getElementById('php1').style.display='none'
    document.getElementById('php2').style.display='none'
    document.getElementById('php3').style.display='block'
    document.getElementById('php4').style.display='none'
}
function click4()
{
    document.getElementById('php1').style.display='none'
    document.getElementById('php2').style.display='none'
    document.getElementById('php3').style.display='none'
    document.getElementById('php4').style.display='block'
}

function cal()
{
    let yes =0;
    let no =0;
    let ch1 = document.getElementById('yes1')
    let ch2 = document.getElementById('yes2')
    let ch3 = document.getElementById('yes3')
    let ch4 = document.getElementById('yes4')

    let ava = document.getElementById('no1')
    let ava1 = document.getElementById('no2')
    let ava2 = document.getElementById('no3')
    let ava3 = document.getElementById('no4')
    if(ch1.checked==true)
    {
        yes++;
    }
    if (ch2.checked==true)
    {
        yes++;   
    }
     if (ch3.checked==true)
    {
        yes++;   
    }
     if (ch4.checked==true)
    {
        yes++;   
    }

    if(ava.checked==true)
    {
        no++;
    }
    if (ava1.checked==true)
    {
        no++;   
    }
     if (ava2.checked==true)
    {
        no++;   
    }
     if (ava3.checked==true)
    {
        no++;   
    }
    window.alert(`You got ${yes} yes and ${no} no`);
    window.location.href="home.html"
}