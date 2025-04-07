window.onload = function () {
  const photoData = [
    {
      image: "img/pudding.jpg",
      text: "정답은 '푸딩🍮' 입니다~"
    },
    {
      image: "img/long-ppotto.jpg",
      text: "정답은 '뽀또🐕'입니다~"
    },
    {
      image: "img/egg.jpg",
      text: "정답은 '완숙🥚'입니다~ "
    }
  ];

  let clicked = [false, false, false];

  window.changeContent = function (num) {
    const index = num - 1;
    if (clicked[index]) return;

    document.getElementById(`img${num}`).src = photoData[index].image;
    document.getElementById(`text${num}`).textContent = photoData[index].text;

    clicked[index] = true;
  };
};
