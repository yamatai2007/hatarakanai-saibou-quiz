document.addEventListener("DOMContentLoaded", function () {
    // タイトル画面のボタン処理
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

    // グループ名入力処理
    const nextButton = document.getElementById("nextButton");
    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value.trim();
            if (groupName !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "nextPage.html";
            } else {
                alert("グループ名を入力してください");
            }
        });
    }

    // グループ名表示処理
    const displayGroupName = document.getElementById("displayGroupName");
    if (displayGroupName) {
        const savedGroupName = localStorage.getItem("groupName");
        if (savedGroupName) {
            displayGroupName.textContent = savedGroupName;
        } else {
            displayGroupName.textContent = "ゲスト";
        }
    }
});
