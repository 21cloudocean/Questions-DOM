//using selectors inside the element
// traversing the dom

/* 最初的一点迷思：
我的想法是选择parent container也就是section-center，然后用target
问题是怎样让每个article被视为一个item？
如果用querySelectorAll('.question')来选择，则返回的是nodelist，相当于array
不能加eventlistener，点击之后显示index，用index控制text是否可行？
问题是这个index要怎么表示 */

/*方法1：traversing the DOM */
// //选择element
// //我觉得选span的class也可以，之后就按parentElement.parentElement堆上去
// //经测试，因为button中这两个span每个状态下只显示一个，因此点的是哪个span根本无所谓
// const questionBtn = document.querySelectorAll(".question-btn");

// //forEach：这段不用target，直接用currenttarget，原因如上
// questionBtn.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// //forEach：这段用了span，虽然成功了但是很麻烦，parent套parent，而且target和currenttarget都用了
// questionBtn.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     // console.log(e.target);
//     // console.log(e.target.parentElement);
//     const detailBtn = e.target.parentElement;
//     // console.log(detailBtn.classList);
//     // console.log(e.currentTarget.parentElement.nextElementSibling);
//     //按target parent的classList确认是加号还是减号
//     //注意：classList.add()里面不需要加表示class的"."，因为本来就是class啊
//     detailBtn.classList.contains("plus-icon") &&
//       e.currentTarget.parentElement.parentElement.classList.add("show-text");
//     //   e.currentTarget.parentElement.parentElement.classList.add(".show-text");
//     detailBtn.classList.contains("minus-icon") &&
//       e.currentTarget.parentElement.parentElement.classList.remove(
//         "show-text"
//         //   e.currentTarget.parentElement.parentElement.classList.remove(
//         //     ".show-text"
//       );
//   });
// });

/*方法2：using selectors inside the element*/
//选择element
const question = document.querySelectorAll(".question");

//添加一个功能：当点击其他question查看细节时，其余的question都变为未展开的状态
question.forEach(function (item) {
  //   console.log(item);
  const btn = item.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    question.forEach(function (eachItem) {
      //这个forEach用来检查所有item的class。
      //如果某个item（eachItem）不是被点击的这个item，则移除.show-text
      if (eachItem !== item) {
        eachItem.classList.remove("show-text");
      }
    });
    item.classList.toggle("show-text");
  });
});

//forEach
// question.forEach(function (item) {
//   //   console.log(item);
//   const btn = item.querySelector(".question-btn");
//   btn.addEventListener("click", function (e) {
//     //Uncaught TypeError: Cannot read properties of undefined (reading 'toggle')
//     // question.classList.toggle("show-text");
//     item.classList.toggle("show-text");
//   });
// });

// //forEach：错误，不是给整个儿question加click event，而是给里面的button
// question.forEach(function(item){
//     item.addEventListener('click',function(e){

//     })
// })
