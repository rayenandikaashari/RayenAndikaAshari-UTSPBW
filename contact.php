//contact.php

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        $to = "your-email@example.com"; // Ganti dengan alamat email tujuan
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $fullMessage = "Nama: $name\n";
        $fullMessage .= "Email: $email\n";
        $fullMessage .= "Subjek: $subject\n";
        $fullMessage .= "Pesan:\n$message\n";

        if (mail($to, $subject, $fullMessage, $headers)) {
            echo "<script>alert('Pesan berhasil dikirim!'); window.location.href='contact.html';</script>";
        } else {
            echo "<script>alert('Gagal mengirim pesan. Coba lagi nanti.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Semua kolom wajib diisi!'); window.history.back();</script>";
    }
} else {
    header("Location: contact.html");
    exit();
}
?>