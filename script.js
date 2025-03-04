document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript 読み込み完了");

    // 「ゲームスタート」ボタンの処理
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            console.log("スタートボタンが押されました");
            window.location.href = "group.html"; // グループ名入力ページへ移動
        });
    } else {
        console.warn("startButton が見つかりません");
    }

    // グループ名入力の処理
    const nextButton = document.getElementById("nextButton");
    const groupNameInput = document.getElementById("groupName");

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            if (!groupNameInput) {
                console.error("groupNameInput が見つかりません");
                return;
            }

            const groupName = groupNameInput.value.trim();

            if (groupName !== "") {
                console.log("グループ名が入力されました:", groupName);
                localStorage.setItem("groupName", groupName);
                window.location.href = "nextPage.html"; // 次のページへ移動
            } else {
                alert("グループ名を入力してください");
            }
        });
    } else {
        console.warn("nextButton が見つかりません");
    }
});
