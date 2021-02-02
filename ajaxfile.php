<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;

// Fetch All records
if($request == 1){
  $data = mysqli_query($con,"select * from workout order by id desc");

  $response = array();
  while($row = mysqli_fetch_assoc($data)){
    $response[] = $row;
  }

  echo json_encode($response);
  exit;
}

// Add record
if($request == 2){
  $id = $data->id;
  $name = $data->name;
  $rest = $data->rest;

  $userData = mysqli_query($con,"SELECT * FROM workout WHERE id='".$id."'");
  if(mysqli_num_rows($userData) == 0){
    mysqli_query($con,"INSERT INTO workout(name,date) VALUES('".$name."','".$date."')");
    echo "Insert successfully";
  }else{
    echo "Username already exists.";
  }

  exit;
}

// Update record
if($request == 3){
  $id = $data->id;
  $name = $data->name;
  $rest = $data->rest;

  mysqli_query($con,"UPDATE workout SET name='".$name."',rest='".$rest."' WHERE id=".$id);
 
  echo "Update successfully";
  exit;
}

// Delete record
if($request == 4){
  $id = $data->id;

  mysqli_query($con,"DELETE FROM workout WHERE id=".$id);

  echo "Delete successfully";
  exit;
}