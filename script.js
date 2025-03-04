document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html"; // グループ名入力画面へ遷移
        });
    }

    const nextButton = document.getElementById("nextButton");
    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value;
            if (groupName.trim() !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "antigen.html"; // 次の画面へ遷移（仮）
            } else {
                alert("グループ名を入力してください");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const nextButton = document.getElementById("nextButton");

    if (antigenCountInput && decreaseButton && increaseButton && nextButton) {
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
        nextButton.addEventListener("click", function () {
            let antigenCount = parseInt(antigenCountInput.value);
            localStorage.setItem("antigenCount", antigenCount);
            window.location.href = "quiz_level.html"; // クイズ難易度選択へ遷移
        });
    }
});
