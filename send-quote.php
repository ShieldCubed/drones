<?php
// send-quote.php — handles the Request-for-Quote form submission.
// Works out of the box on Namecheap shared/business hosting (PHP's mail() is enabled by default).
// Edit $to_address below if you want quotes routed elsewhere.

$to_address = "team@spacenet.network";

function clean($v) {
    return htmlspecialchars(trim($v ?? ''), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: quote.html');
    exit;
}

$name    = clean($_POST['name'] ?? '');
$org     = clean($_POST['org'] ?? '');
$email   = clean($_POST['email'] ?? '');
$country = clean($_POST['country'] ?? '');
$sku     = clean($_POST['sku'] ?? '');
$enduse  = clean($_POST['enduse'] ?? '');
$qty     = clean($_POST['qty'] ?? '');

if (!$name || !$org || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$enduse) {
    http_response_code(400);
    echo "Missing or invalid required fields. Please go back and check the form.";
    exit;
}

$subject = "RFQ: " . ($sku ?: "General inquiry") . " — $org";

$body = "New request for quote from spacenet.network\n\n"
      . "Name: $name\n"
      . "Organization: $org\n"
      . "Email: $email\n"
      . "Country: $country\n"
      . "Part number(s): $sku\n"
      . "Quantity / timeline: $qty\n\n"
      . "Intended application / end use:\n$enduse\n";

$headers = "From: no-reply@spacenet.network\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to_address, $subject, $body, $headers);

if ($sent) {
    header('Location: quote-received.html');
    exit;
} else {
    http_response_code(500);
    echo "Sorry — something went wrong sending your request. Please email team@spacenet.network directly.";
}
