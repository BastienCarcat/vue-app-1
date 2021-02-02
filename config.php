<?php

$host = "localhost"; /* Host name */
$user = "projet"; /* User */
$password = "projet"; /* Password */
$dbname = "vue-app-1"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}