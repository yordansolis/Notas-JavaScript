<?php



if (isset($_FILES['file'])) {
    $name = $_FILES["file"]["name"];
    
    $file = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];
    $destino = "../files/$name";

    $upload = move_uploaded_file($file, $destino);
    


    if ($upload) {
        
        $res = array(
            "err" => false,
            "status" =>http_response_code(200),
            "statusText" => "Archivo $name Subido con exito",
            "files" => $_FILES["file"]
        );
    }
    else{    
        $res =array(
            "err" => false,
            "status" =>http_response_code(400),
            "statusText" => "Error al subirarcivo  $name",
            "files" => $_FILES["file"]
        );
    }
    
    
    //echo json_decode($res);
}
