document.getElementById("startButton").addEventListener("click", function() {
    window.location.href = "group.html"; // グループ名入力画面へ
});
// ゲームスタートボタン（index.html）
document.getElementById("startButton")?.addEventListener("click", function() {
    window.location.href = "group.html";
});

// グループ名入力（group.html）
document.getElementById("nextButton")?.addEventListener("click", function() {
    let groupName = document.getElementById("groupName").value.trim();
    if (groupName) {
        localStorage.setItem("groupName", groupName); // グループ名を保存
        window.location.href = "antigen.html"; // 抗原数入力画面へ
    } else {
        alert("グループ名を入力してください！");
    }
});
