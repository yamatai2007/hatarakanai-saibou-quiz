document.addEventListener("DOMContentLoaded", function () {
    // ==============================
    // 1. ゲームスタート画面の処理
    // ==============================
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html"; // グループ名入力画面へ遷移
        });
    }

    // ==============================
    // 2. グループ名入力の処理
    // ==============================
    const nextButtonGroup = document.getElementById("nextButton");
    if (nextButtonGroup) {
        nextButtonGroup.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value;
            if (groupName.trim() !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "antigen.html"; // 抗原数入力画面へ遷移
            } else {
                alert("グループ名を入力してください");
            }
        });
    }

    // ==============================
    // 3. 抗原数入力の処理
    // ==============================
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const nextButtonAntigen = document.getElementById("nextButtonAntigen");

    if (antigenCountInput && decreaseButton && increaseButton && nextButtonAntigen) {
        // 初期値セット
        antigenCountInput.value = 0;

        // カウント増減ボタン
        decreaseButton.addEventListener("click", function () {
            let currentValue = parseInt(antigenCountInput.value);
            if (currentValue > 0) {
                antigenCountInput.value = currentValue - 1;
            }
        });

        increaseButton.addEventListener("click", function () {
            let currentValue = parseInt(antigenCountInput.value);
            antigenCountInput.value = currentValue + 1;
        });

        // 次へボタン
        nextButtonAntigen.addEventListener("click", function () {
            let antigenCount = parseInt(antigenCountInput.value);
            localStorage.setItem("antigenCount", antigenCount);
            window.location.href = "quiz_level.html"; // クイズ難易度選択へ遷移
        });
    }
});
