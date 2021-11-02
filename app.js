const correctAnswers = ["E", "E", "E", "E"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnsers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnsers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //   console.log(score);
  result.classList.remove("d-none");

  let puan = 0;
  const veriBas = setInterval(() => {
    result.querySelector("span").textContent = `${puan}%`;

    if (puan == score) {
      clearInterval(veriBas);
    } else {
      puan++;
    }
  }, 15);
});

// setTimeout(()=>{ //verilen süre kadar bekler ondan sonra veriyi sadece 1 kere basar
//     console.log('Ömer Muhammed GÜNDOĞDU')
// },2000);

// setInterval(()=>{ // 2sn bekler veri basar, 2sn bekler veri basar... böyle devam eder sürekli
//     console.log('Ömer Muhammed GÜNDOĞDU');
// },2000)

// let i=0;
// const bastir=setInterval(()=>{ //4 kere veri bastıktan sonra clearInterval ile sürekli veri basmasını durdurduk
//     console.log('Ömer Muhammed GÜNDOĞDU');
//     i++;
//     if(i==4){
//         clearInterval(bastir);
//     }
// },2000)
