document.addEventListener("DOMContentLoaded", function () {
    // ゲームスタート画面
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html";
        });
    }

    // グループ名入力
    const nextButtonGroup = document.getElementById("nextButtonGroup");
    if (nextButtonGroup) {
        nextButtonGroup.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value.trim();
            if (groupName !== "") {
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
    const nextButtonAntigen = document.getElementById("nextButtonAntigen");

    if (antigenCountInput && decreaseButton && increaseButton && nextButtonAntigen) {
        decreaseButton.addEventListener("click", function () {
            let value = parseInt(antigenCountInput.value, 10);
            if (value > 0) antigenCountInput.value = value - 1;
        });

        increaseButton.addEventListener("click", function () {
            let value = parseInt(antigenCountInput.value, 10);
            antigenCountInput.value = value + 1;
        });

        nextButtonAntigen.addEventListener("click", function () {
            localStorage.setItem("antigenCount", antigenCountInput.value);
            window.location.href = "quiz_level.html";
        });
    }

    // クイズ難易度選択
    const difficultyButtons = document.querySelectorAll(".difficulty");
    const nextButtonDifficulty = document.getElementById("nextButtonDifficulty");

    if (difficultyButtons.length > 0 && nextButtonDifficulty) {
        difficultyButtons.forEach(button => {
            button.addEventListener("click", function () {
                difficultyButtons.forEach(btn => btn.classList.remove("selected"));
                this.classList.add("selected");
                localStorage.setItem("quizLevel", this.dataset.level);
            });
        });

        nextButtonDifficulty.addEventListener("click", function () {
            if (localStorage.getItem("quizLevel")) {
                window.location.href = "quiz.html";
            } else {
                alert("難易度を選択してください");
            }
        });
    }

    // 戻るボタン（全ページ対応）
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
