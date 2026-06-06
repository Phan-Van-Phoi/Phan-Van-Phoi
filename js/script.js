const chon1 = document.querySelector('.chon1');
const chon2 = document.querySelector('.chon2');
const chon3 = document.querySelector('.chon3');
const chon4 = document.querySelector('.chon4');
const chon5 = document.querySelector('.chon5');
const luaChon = document.getElementById('luaChon');

chon1.addEventListener('click', function() {
    chon1.style.backgroundColor = 'rgb(162, 0, 255)';
    chon2.style.backgroundColor = '#A78BFA';
    chon3.style.backgroundColor = '#A78BFA';
    chon4.style.backgroundColor = '#A78BFA';
    chon5.style.backgroundColor = '#A78BFA';
    luaChon.textContent = 'Bạn đã chọn: Giới thiệu';
});

chon2.addEventListener('click', function() {
    chon1.style.backgroundColor = '#A78BFA';
    chon2.style.backgroundColor = 'rgb(162, 0, 255)';
    chon3.style.backgroundColor = '#A78BFA';
    chon4.style.backgroundColor = '#A78BFA';
    chon5.style.backgroundColor = '#A78BFA';
    luaChon.textContent = 'Bạn đã chọn: Lịch trình';
});

chon3.addEventListener('click', function() {
    chon1.style.backgroundColor = '#A78BFA';
    chon2.style.backgroundColor = '#A78BFA';
    chon3.style.backgroundColor = 'rgb(162, 0, 255)';
    chon4.style.backgroundColor = '#A78BFA';
    chon5.style.backgroundColor = '#A78BFA';
    luaChon.textContent = 'Bạn đã chọn: Diễn giả';
});

chon4.addEventListener('click', function() {
    chon1.style.backgroundColor = '#A78BFA';
    chon2.style.backgroundColor = '#A78BFA';
    chon3.style.backgroundColor = '#A78BFA';
    chon4.style.backgroundColor = 'rgb(162, 0, 255)';
    chon5.style.backgroundColor = '#A78BFA';
    luaChon.textContent = 'Bạn đã chọn: Cuộc thi';
});

chon5.addEventListener('click', function() {
    chon1.style.backgroundColor = '#A78BFA';
    chon2.style.backgroundColor = '#A78BFA';
    chon3.style.backgroundColor = '#A78BFA';
    chon4.style.backgroundColor = '#A78BFA';
    chon5.style.backgroundColor = 'rgb(162, 0, 255)';
    luaChon.textContent = 'Bạn đã chọn: Liên hệ';
});
