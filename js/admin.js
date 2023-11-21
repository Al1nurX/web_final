const customTopBar = document.getElementById("TopNav")
const customSideBar = document.getElementById("sidebarNav")
const customFooter = document.getElementById("footer")
const NavBarBrand = document.getElementById("navBarBrand-container")
const NavBarMenu = document.getElementById("navBarMenu-container")
const MainWrapper = document.getElementById("main-wrapper")
const SideBarToggle = document.getElementById("SideBarToggle")
var SideBarwidth = customSideBar.clientWidth

window.cusotmAdminTemplate = function(){
    var sb_is_toggle = !!SideBarToggle.getAttribute('data-toggle') && SideBarToggle.getAttribute('data-toggle') == "true";
    if(sb_is_toggle){
        customSideBar.style.width = 0;
        customFooter.style.width = (window.innerWidth) + `px`;
        customFooter.style.marginLeft = `0px`;
        MainWrapper.style.width =(window.innerWidth) + `px`; 
        MainWrapper.style.marginLeft = `0px`;
        if(window.innerWidth > 768)
        NavBarBrand.style.width = `auto`;
    }else{
        if(window.innerWidth > 768){
            if(customSideBar.clientWidth == 0)
            customSideBar.style.width = SideBarwidth + `px`;
            customSideBar.style.height = (window.innerHeight -  customTopBar.clientHeight) + `px`;
            customSideBar.style.marginTop = (customTopBar.clientHeight) + `px`;
            customFooter.style.width = (window.innerWidth -  SideBarwidth) + `px`;
            customFooter.style.marginLeft = (SideBarwidth) + `px`;
            NavBarBrand.style.width = SideBarwidth + `px`;
            NavBarMenu.style.width =(window.innerWidth -  SideBarwidth) + `px`; 
            MainWrapper.style.width =(window.innerWidth -  SideBarwidth) + `px`; 
            MainWrapper.style.marginLeft = (SideBarwidth) + `px`;
        }else{
            if(customSideBar.clientWidth == 0)
                customSideBar.style.width = SideBarwidth + `px`;
            customFooter.style.width = (window.innerWidth) + `px`;
            customFooter.style.marginLeft = `0px`;
            MainWrapper.style.width =(window.innerWidth) + `px`; 
            MainWrapper.style.marginLeft = `0px`;
            customSideBar.style.height = (window.innerHeight -  customTopBar.clientHeight) + `px`;
            customSideBar.style.marginTop = (customTopBar.clientHeight) + `px`;
        }
        
    }
    
}
cusotmAdminTemplate();
window.onload = function(){
    cusotmAdminTemplate();
    if(window.innerWidth <= 768){
        SideBarToggle.setAttribute('data-toggle', "true")
        customSideBar.style.width = `0px`;
    }
    setTimeout(function(){
        customSideBar.style.opacity = '1'
    }, 300)
}

window.onresize = function(){
    cusotmAdminTemplate();
}

SideBarToggle.addEventListener('click', function(){
    if(!!SideBarToggle.getAttribute('data-toggle') && SideBarToggle.getAttribute('data-toggle') == "true"){
        SideBarToggle.setAttribute('data-toggle', "false")
    }else{
        SideBarToggle.setAttribute('data-toggle', "true")
    }
    cusotmAdminTemplate();
})