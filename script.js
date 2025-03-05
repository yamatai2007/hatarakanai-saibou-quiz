document.addEventListener("DOMContentLoaded", function () {
    // ゲームスタートボタン
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html";
        });
    }

    // グループ名入力
    const nextButtonGroup = document.getElementById("nextButton");
    if (nextButtonGroup) {
        nextButtonGroup.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value;
            if (groupName.trim() !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "antigen.html";
            } else {
                alert("グループ名を入力してください");
            }
        });
    }

    // 抗原数入力
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");

    if (antigenCountInput && decreaseButton && increaseButton) {
        decreaseButton.addEventListener("click", function () {
            if (antigenCountInput.value > 0) {
                antigenCountInput.value--;
            }
        });

        increaseButton.addEventListener("click", function () {
            antigenCountInput.value++;
        });
    }

    // クイズ難易度選択
    const quizButtons = document.querySelectorAll(".quiz-level");
    quizButtons.forEach(button => {
        button.addEventListener("click", function () {
            quizButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            localStorage.setItem("quizLevel", this.dataset.level);
        });
    });

    // 次へボタン処理（クイズ難易度選択）
    const nextButtonQuiz = document.getElementById("nextButton");
    if (nextButtonQuiz) {
        nextButtonQuiz.addEventListener("click", function () {
            const selectedLevel = localStorage.getItem("quizLevel");
            if (selectedLevel) {
                window.location.href = "quiz.html";
            } else {
                alert("難易度を選択してください");
            }
        });
    }

    // 戻るボタン
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
