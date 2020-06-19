<?php
// TODO: validate input params, ignore bots...

require __DIR__ . '/google-api-php-client/vendor/autoload.php'; // google-api-php-client path

function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Project');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS);
    //PATH TO JSON FILE DOWNLOADED FROM GOOGLE CONSOLE FROM STEP 7
    $client->setAuthConfig('summer-loot-e5c35f5a6ba9.json'); 
    $client->setAccessType('offline');
    return $client;
}

// Get the API client and construct the service object.
$client = getClient();
$service = new Google_Service_Sheets($client);
$spreadsheetId = '1_jlYa9M0M62p19akpzu0dV0MrIx1PGbbv7VRCW5-X1o'; // spreadsheet Id

$range = '20.10.19'; // Sheet name

$valueRange= new Google_Service_Sheets_ValueRange();
$valueRange->setValues(["values" => ["a", "b"]]); // values for each cell
$valueRange->setValues(["values" => [
    $_POST["name"]
  , $_POST["tel"]
  , date("F j, Y, g:i a", time()) 
]]);

$conf = ["valueInputOption" => "RAW"];
$response = $service->spreadsheets_values->append($spreadsheetId, $range, $valueRange, $conf);

// header("Location: https://kvadrat.store/thanks.html");