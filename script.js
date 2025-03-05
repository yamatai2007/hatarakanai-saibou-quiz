document.addEventListener("DOMContentLoaded", function () {
    // ゲームスタート画面の処理
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html";
        });
    }

    // グループ名入力の処理
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

    // 抗原数入力の処理
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const nextButtonAntigen = document.getElementById("nextButton");

    if (antigenCountInput) {
        let antigenCount = 0;

        decreaseButton.addEventListener("click", () => {
            if (antigenCount > 0) antigenCount--;
            antigenCountInput.value = antigenCount;
        });

        increaseButton.addEventListener("click", () => {
            antigenCount++;
            antigenCountInput.value = antigenCount;
        });

        nextButtonAntigen.addEventListener("click", () => {
            if (parseInt(antigenCountInput.value) >= 0) {
                localStorage.setItem("antigenCount", antigenCountInput.value);
                window.location.href = "quiz_level.html";
            } else {
                alert("抗原数を入力してください");
            }
        });
    }

    // クイズ難易度選択の処理
    const difficultyButtons = document.querySelectorAll(".difficulty");
    difficultyButtons.forEach(button => {
        button.addEventListener("click", function () {
            difficultyButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            localStorage.setItem("difficultyLevel", this.dataset.level);
        });
    });

    // 戻るボタンの処理
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
