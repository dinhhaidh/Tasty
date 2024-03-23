/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    // Xác thực rằng các biến tồn tại
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            // Chúng ta thêm lớp show-menu vào thẻ div bằng lớp nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    // Khi chúng tôi nhấp vào từng liên kết nav__, chúng tôi sẽ xóa lớp menu hiển thị
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    // Khi cuộn lớn hơn 200 chiều cao khung nhìn, hãy thêm lớp tiêu đề cuộn vào thẻ tiêu đề
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    // Khi cuộn cao hơn chiều cao khung nhìn 560, hãy thêm lớp hiển thị cuộn vào thẻ có lớp cuộn trên cùng
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
//  Chủ đề đã chọn trước đó (nếu người dùng chọn)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
// Chúng ta có được chủ đề hiện tại của giao diện bằng cách xác thực lớp chủ đề tối
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
// Chúng tôi xác thực xem người dùng trước đó đã chọn một chủ đề hay chưa
// if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  // Nếu quá trình xác thực được thực hiện, chúng tôi sẽ hỏi vấn đề là gì để biết liệu chúng tôi đã kích hoạt hay hủy kích hoạt bóng tối
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// Activate / deactivate the theme manually with the button
// Kích hoạt / hủy kích hoạt chủ đề theo cách thủ công bằng nút
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
// Thêm hoặc xóa chủ đề biểu tượng / tối
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    // localStorage.setItem('selected-theme', getCurrentTheme())
    // localStorage.setItem('selected-icon', getCurrentIcon())
})