// 이미지 변경 함수
const img_url = [
    'images/img01.jpg',
    'images/img02.jpg',
    'images/img03.jpg',
    'images/img04.jpg',
    'images/img05.jpg',
    'images/img06.jpg'
  ];

  $(function(){
    
    // 년/월/일
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    console.log(year, month, date);
    
    // html에 날짜 표시
    $('.year').html(year);
    $('.month').html(month);
    $('.date').html(date);

    function changeBg() {
        // 0 ~ 2 랜덤값 생성(이미지 번호)
    let imgNum = Math.floor(Math.random() * 6)
    console.log(imgNum); 

    // 이미지 변경
    $('body').css({
    background: `url('images/black.png'),
    url(${img_url[imgNum]})`
    })
        }
        
    // setInterval(함수,시간ms)
    setInterval(changeBg, 5000);
});

// 응용과제: 이미지 총 6장으로 확장, 추가 랜덤 수정