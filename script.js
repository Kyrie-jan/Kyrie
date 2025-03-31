document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: [
      "✅ 運動",
      "✅ 打撞球",
      "✅ 唬爛"
    ],
    skills: [
      { name: "運球", level: 80 },
      { name: "投籃", level: 90 },
      { name: "終結力", level: 70 }
    ]
  };
  // 定義原始的圖片 URL
  let imageUrls = [
    "https://i.pinimg.com/736x/2c/99/5e/2c995e178459f3c040fa2328a2930476.jpg",
    "https://i.pinimg.com/736x/e2/d2/73/e2d2735844b12f3acd84362de258db29.jpg",
    "https://i.pinimg.com/474x/3f/02/29/3f0229059c6d96e4e58baa789f697a1e.jpg"
  ];
  // 取得 #courses 和 #skills
  const coursesSection = document.getElementById("courses");
  const skillsSection = document.getElementById("skills");

  // 生成「授課內容」HTML
  coursesSection.innerHTML = `
      <h4>興趣專長</h4>
      <ul>
        ${skillData.courses.map((course) => `<li>${course}</li>`).join("")}
      </ul>
    `;

  // 生成「技能條」HTML
  skillsSection.innerHTML = `
      <h4>籃球技能條</h4>
      ${skillData.skills
        .map(
          (skill) => `
        <div class="skill-bar">
          <label>${skill.name}</label>
          <div class="bar">
            <div class="level" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;
  
  // 取得 .square-image
  const squareImages = document.querySelectorAll(".square-image");
  // 初始化圖片背景
  function initializeImages() {
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${imageUrls[index]}')`;
    });
  }
  // 初始化圖片
  initializeImages();
  
  // 隨機排列圖片背景
  function shuffleImages() {
    let shuffledUrls = [...imageUrls].sort(() => Math.random() - 0.5);
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${shuffledUrls[index]}')`;
    });
  }
  // 綁定點擊事件
  document.querySelector(".square-images").addEventListener("click", shuffleImages);
});
