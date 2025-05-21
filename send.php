<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = htmlspecialchars(trim($_POST["phone"]));

    $to = "justiciarus@yandex.ru";
    $subject = "Новая заявка с сайта";
    $message = "Поступила новая заявка. Номер телефона: " . $phone;
    $headers = "From: justiciarus@yandex.ru" . "\r\n" .
               "Reply-To: justiciarus@yandex.ru" . "\r\n" .
               "Content-Type: text/plain; charset=utf-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "Заявка успешно отправлена!";
    } else {
        echo "Ошибка при отправке заявки.";
    }
}
?>
