<?php

// Database connection (adjust the values according to your configuration)
$servername = "localhost";
$username = "pol";
$password = "pol";
$dbname = "producto";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection error: " . $conn->connect_error);
}

// Get products from the database
$sql = "SELECT * FROM productos";
$result = $conn->query($sql);

// Check if products were found
if ($result->num_rows > 0) {
    $productos = array();

    // Iterate over the results and store the products in an array
    while ($row = $result->fetch_assoc()) {
        $producto = array(
            "id" => $row["id"],
            "nombre" => $row["nombre"],
            "descripcion" => $row["descripcion"],
            "precio" => $row["precio"]
        );
        $productos[] = $producto;
    }

    // Return the products as a JSON response
    header("Content-Type: application/json");
    echo json_encode($productos);
} else {
    // No products found
    echo "No products found";
}

// Close the database connection
$conn->close();

?>
