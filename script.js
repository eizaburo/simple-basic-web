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
// const regex_email = /^(?=.{1,32}$)[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;
const regex_message = /^.{1,10}$/;

//buttonクリック時の動作を定義
button.addEventListener("click", async (e) => {
    e.preventDefault();

    //処理中ボタンを押せないようにする
    button.disabled = true;
    //ボタンのテキストを変更
    button.textContent = "通信中・・・";


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
        
        //URLは各自の環境にわせて変更して下さい
        const api_url = "https://script.google.com/macros/s/{デプロイID}/exec";
        //simple-api-expressと連携する場合は、以下のようにする。
        // const api_url = "http://localhost:3333/text/contacts";

        try {

            //APIを呼び出してレスポンスを処理
            const result = await fetch(api_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    title: title.value,
                    email: email.value,
                    message: message.value
                }).toString()
            });

            //resultからテキストメッセージを取り出し
            const text = await result.text();
            //アラートで表示
            alert(text);

        } catch (error) {
            //エラー時はエラーをアラートで表示
            alert(error);
        }

        //値をリセット
        title.value = "";
        email.value = "";
        message.value = "";

    }

    //ボタンを元に戻す
    button.textContent = "問合せる";
    button.disabled = false;

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