//基本要素の取得
const title = document.getElementById("title");
const email = document.getElementById("email");
const message = document.getElementById("message");
const button = document.getElementById("button");

//エラー要素の取得
const error_message_title = document.getElementById("error_message_title");
const error_message_email = document.getElementById("error_message_email");
const error_message_message = document.getElementById("error_message_message");

//バリデーション用の正規表現定義
const regex_title = /^.{1,10}$/;
const regex_email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const regex_message = /^.{1,10}$/;

//buttonクリック時の動作を定義
button.addEventListener("click", (e) => {
    e.preventDefault();


    //一旦エラーリセット
    error_message_title.classList.remove("show");
    error_message_email.classList.remove("show");
    error_message_message.classList.remove("show");

    //各値の条件判断
    if (!regex_title.test(title.value)) {
        error_message_title.classList.add("show");
    }

    if (!regex_email.test(email.value)) {
        error_message_email.classList.add("show");
    }

    if (!regex_message.test(message.value)) {
        error_message_message.classList.add("show");
    }

    if (!error_message_title.classList.contains("show") &&
        !error_message_email.classList.contains("show") &&
        !error_message_message.classList.contains("show")) {

        //条件がOKだったら実行する処理（API連携するときはここを改修）
        let alert_message = "";
        alert_message += "フォームから取得した情報は以下の通りです。\n";
        alert_message += ` title=${title.value},\n email=${email.value},\n message=${message.value}\n`;
        alert_message += "実際のシステムではこれらの値をAPIに送信したり、DBに保存したりして利用します。"
        //アラート表示
        alert(alert_message);
    }

});

//入力時バリデーション
title.addEventListener("keyup", (e) => {
    if (!regex_title.test(title.value)) {
        error_message_title.classList.add("show");
    } else {
        error_message_title.classList.remove("show");
    }
});

email.addEventListener("keyup", (e) => {
    if (!regex_email.test(email.value)) {
        error_message_email.classList.add("show");
    } else {
        error_message_email.classList.remove("show");
    }
});

message.addEventListener("keyup", (e) => {
    if (!regex_message.test(message.value)) {
        error_message_message.classList.add("show");
    } else {
        error_message_message.classList.remove("show");
    }
});